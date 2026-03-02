(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ph={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function vS(){if($0)return Io;$0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var t_;function xS(){return t_||(t_=1,ph.exports=vS()),ph.exports}var At=xS(),mh={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function yS(){if(e_)return ue;e_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function v(z,J,pt){this.props=z,this.context=J,this.refs=S,this.updater=pt||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=v.prototype;function L(z,J,pt){this.props=z,this.context=J,this.refs=S,this.updater=pt||E}var R=L.prototype=new D;R.constructor=L,T(R,v.prototype),R.isPureReactComponent=!0;var N=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function A(z,J,pt){var Dt=pt.ref;return{$$typeof:r,type:z,key:J,ref:Dt!==void 0?Dt:null,props:pt}}function U(z,J){return A(z.type,J,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Z(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(pt){return J[pt]})}var q=/\/+/g;function nt(z,J){return typeof z=="object"&&z!==null&&z.key!=null?Z(""+z.key):J.toString(36)}function it(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,J,pt,Dt,It){var et=typeof z;(et==="undefined"||et==="boolean")&&(z=null);var ht=!1;if(z===null)ht=!0;else switch(et){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(z.$$typeof){case r:case t:ht=!0;break;case g:return ht=z._init,F(ht(z._payload),J,pt,Dt,It)}}if(ht)return It=It(z),ht=Dt===""?"."+nt(z,0):Dt,N(It)?(pt="",ht!=null&&(pt=ht.replace(q,"$&/")+"/"),F(It,J,pt,"",function(Bt){return Bt})):It!=null&&(G(It)&&(It=U(It,pt+(It.key==null||z&&z.key===It.key?"":(""+It.key).replace(q,"$&/")+"/")+ht)),J.push(It)),1;ht=0;var Ot=Dt===""?".":Dt+":";if(N(z))for(var Gt=0;Gt<z.length;Gt++)Dt=z[Gt],et=Ot+nt(Dt,Gt),ht+=F(Dt,J,pt,et,It);else if(Gt=x(z),typeof Gt=="function")for(z=Gt.call(z),Gt=0;!(Dt=z.next()).done;)Dt=Dt.value,et=Ot+nt(Dt,Gt++),ht+=F(Dt,J,pt,et,It);else if(et==="object"){if(typeof z.then=="function")return F(it(z),J,pt,Dt,It);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ht}function B(z,J,pt){if(z==null)return z;var Dt=[],It=0;return F(z,Dt,"","",function(et){return J.call(pt,et,It++)}),Dt}function tt(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(pt){(z._status===0||z._status===-1)&&(z._status=1,z._result=pt)},function(pt){(z._status===0||z._status===-1)&&(z._status=2,z._result=pt)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var Mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},_t={map:B,forEach:function(z,J,pt){B(z,function(){J.apply(this,arguments)},pt)},count:function(z){var J=0;return B(z,function(){J++}),J},toArray:function(z){return B(z,function(J){return J})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ue.Activity=_,ue.Children=_t,ue.Component=v,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=L,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},ue.cache=function(z){return function(){return z.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(z,J,pt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Dt=T({},z.props),It=z.key;if(J!=null)for(et in J.key!==void 0&&(It=""+J.key),J)!W.call(J,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&J.ref===void 0||(Dt[et]=J[et]);var et=arguments.length-2;if(et===1)Dt.children=pt;else if(1<et){for(var ht=Array(et),Ot=0;Ot<et;Ot++)ht[Ot]=arguments[Ot+2];Dt.children=ht}return A(z.type,It,Dt)},ue.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ue.createElement=function(z,J,pt){var Dt,It={},et=null;if(J!=null)for(Dt in J.key!==void 0&&(et=""+J.key),J)W.call(J,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(It[Dt]=J[Dt]);var ht=arguments.length-2;if(ht===1)It.children=pt;else if(1<ht){for(var Ot=Array(ht),Gt=0;Gt<ht;Gt++)Ot[Gt]=arguments[Gt+2];It.children=Ot}if(z&&z.defaultProps)for(Dt in ht=z.defaultProps,ht)It[Dt]===void 0&&(It[Dt]=ht[Dt]);return A(z,et,It)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(z){return{$$typeof:h,render:z}},ue.isValidElement=G,ue.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:tt}},ue.memo=function(z,J){return{$$typeof:p,type:z,compare:J===void 0?null:J}},ue.startTransition=function(z){var J=O.T,pt={};O.T=pt;try{var Dt=z(),It=O.S;It!==null&&It(pt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(P,Mt)}catch(et){Mt(et)}finally{J!==null&&pt.types!==null&&(J.types=pt.types),O.T=J}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(z){return O.H.use(z)},ue.useActionState=function(z,J,pt){return O.H.useActionState(z,J,pt)},ue.useCallback=function(z,J){return O.H.useCallback(z,J)},ue.useContext=function(z){return O.H.useContext(z)},ue.useDebugValue=function(){},ue.useDeferredValue=function(z,J){return O.H.useDeferredValue(z,J)},ue.useEffect=function(z,J){return O.H.useEffect(z,J)},ue.useEffectEvent=function(z){return O.H.useEffectEvent(z)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(z,J,pt){return O.H.useImperativeHandle(z,J,pt)},ue.useInsertionEffect=function(z,J){return O.H.useInsertionEffect(z,J)},ue.useLayoutEffect=function(z,J){return O.H.useLayoutEffect(z,J)},ue.useMemo=function(z,J){return O.H.useMemo(z,J)},ue.useOptimistic=function(z,J){return O.H.useOptimistic(z,J)},ue.useReducer=function(z,J,pt){return O.H.useReducer(z,J,pt)},ue.useRef=function(z){return O.H.useRef(z)},ue.useState=function(z){return O.H.useState(z)},ue.useSyncExternalStore=function(z,J,pt){return O.H.useSyncExternalStore(z,J,pt)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.2.3",ue}var n_;function np(){return n_||(n_=1,mh.exports=yS()),mh.exports}var jt=np(),gh={exports:{}},Bo={},_h={exports:{}},vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function SS(){return i_||(i_=1,(function(r){function t(F,B){var tt=F.length;F.push(B);t:for(;0<tt;){var Mt=tt-1>>>1,_t=F[Mt];if(0<l(_t,B))F[Mt]=B,F[tt]=_t,tt=Mt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var B=F[0],tt=F.pop();if(tt!==B){F[0]=tt;t:for(var Mt=0,_t=F.length,z=_t>>>1;Mt<z;){var J=2*(Mt+1)-1,pt=F[J],Dt=J+1,It=F[Dt];if(0>l(pt,tt))Dt<_t&&0>l(It,pt)?(F[Mt]=It,F[Dt]=tt,Mt=Dt):(F[Mt]=pt,F[J]=tt,Mt=J);else if(Dt<_t&&0>l(It,tt))F[Mt]=It,F[Dt]=tt,Mt=Dt;else break t}}return B}function l(F,B){var tt=F.sortIndex-B.sortIndex;return tt!==0?tt:F.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,y=3,x=!1,E=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=F)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function N(F){if(T=!1,R(F),!E)if(i(m)!==null)E=!0,P||(P=!0,Z());else{var B=i(p);B!==null&&it(N,B.startTime-F)}}var P=!1,O=-1,W=5,A=-1;function U(){return S?!0:!(r.unstable_now()-A<W)}function G(){if(S=!1,P){var F=r.unstable_now();A=F;var B=!0;try{t:{E=!1,T&&(T=!1,D(O),O=-1),x=!0;var tt=y;try{e:{for(R(F),_=i(m);_!==null&&!(_.expirationTime>F&&U());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,y=_.priorityLevel;var _t=Mt(_.expirationTime<=F);if(F=r.unstable_now(),typeof _t=="function"){_.callback=_t,R(F),B=!0;break e}_===i(m)&&s(m),R(F)}else s(m);_=i(m)}if(_!==null)B=!0;else{var z=i(p);z!==null&&it(N,z.startTime-F),B=!1}}break t}finally{_=null,y=tt,x=!1}B=void 0}}finally{B?Z():P=!1}}}var Z;if(typeof L=="function")Z=function(){L(G)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,nt=q.port2;q.port1.onmessage=G,Z=function(){nt.postMessage(null)}}else Z=function(){v(G,0)};function it(F,B){O=v(function(){F(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(F){switch(y){case 1:case 2:case 3:var B=3;break;default:B=y}var tt=y;y=B;try{return F()}finally{y=tt}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var tt=y;y=F;try{return B()}finally{y=tt}},r.unstable_scheduleCallback=function(F,B,tt){var Mt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?Mt+tt:Mt):tt=Mt,F){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=tt+_t,F={id:g++,callback:B,priorityLevel:F,startTime:tt,expirationTime:_t,sortIndex:-1},tt>Mt?(F.sortIndex=tt,t(p,F),i(m)===null&&F===i(p)&&(T?(D(O),O=-1):T=!0,it(N,tt-Mt))):(F.sortIndex=_t,t(m,F),E||x||(E=!0,P||(P=!0,Z()))),F},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(F){var B=y;return function(){var tt=y;y=B;try{return F.apply(this,arguments)}finally{y=tt}}}})(vh)),vh}var a_;function MS(){return a_||(a_=1,_h.exports=SS()),_h.exports}var xh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function ES(){if(s_)return On;s_=1;var r=np();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:x}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.3",On}var r_;function bS(){if(r_)return xh.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xh.exports=ES(),xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function TS(){if(o_)return Bo;o_=1;var r=MS(),t=np(),i=bS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,o=d;break}if(C===o){M=!0,o=u,a=d;break}C=C.sibling}if(!M){for(C=d.child;C;){if(C===a){M=!0,a=d,o=u;break}if(C===o){M=!0,o=d,a=u;break}C=C.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var q=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:nt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return nt(e(n))}catch{}}return null}var it=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},Mt=[],_t=-1;function z(e){return{current:e}}function J(e){0>_t||(e.current=Mt[_t],Mt[_t]=null,_t--)}function pt(e,n){_t++,Mt[_t]=e.current,e.current=n}var Dt=z(null),It=z(null),et=z(null),ht=z(null);function Ot(e,n){switch(pt(et,n),pt(It,e),pt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?M0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=M0(n),e=E0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Dt),pt(Dt,e)}function Gt(){J(Dt),J(It),J(et)}function Bt(e){e.memoizedState!==null&&pt(ht,e);var n=Dt.current,a=E0(n,e.type);n!==a&&(pt(It,e),pt(Dt,a))}function ae(e){It.current===e&&(J(Dt),J(It)),ht.current===e&&(J(ht),Oo._currentValue=tt)}var Le,ge;function he(e){if(Le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+e+ge}var Te=!1;function oe(e,n){if(!e||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ut){var lt=ut}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(ut){lt=ut}e.call(Et.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],C=d[1];if(M&&C){var V=M.split(`
`),st=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===st.length)for(o=V.length-1,u=st.length-1;1<=o&&0<=u&&V[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==st[u]){var mt=`
`+V[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?he(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return he("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ye=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,Xt=r.unstable_shouldYield,I=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,bt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Nt=r.unstable_IdlePriority,Wt=r.log,ee=r.unstable_setDisableYieldValue,Rt=null,wt=null;function rt(e){if(typeof Wt=="function"&&ee(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Rt,e)}catch{}}var vt=Math.clz32?Math.clz32:k,St=Math.log,qt=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(St(e)/qt|0)|0}var Ut=256,Tt=262144,Lt=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=xt(o):(M&=C,M!==0?u=xt(M):a||(a=C&~e,a!==0&&(u=xt(a))))):(C=o&~d,C!==0?u=xt(C):M!==0?u=xt(M):a||(a=o&~e,a!==0&&(u=xt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-vt(a),Et=1<<mt;C[mt]=0,V[mt]=-1;var lt=st[mt];if(lt!==null)for(st[mt]=null,mt=0;mt<lt.length;mt++){var ut=lt[mt];ut!==null&&(ut.lane&=-536870913)}a&=~Et}o!==0&&sl(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function sl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function zs(e,n){var a=n&-n;return a=(a&42)!==0?1:qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function Ni(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var li=Math.random().toString(36).slice(2),ln="__reactFiber$"+li,Mn="__reactProps$"+li,Ei="__reactContainer$"+li,Is="__reactEvents$"+li,Bs="__reactListeners$"+li,rl="__reactHandles$"+li,jr="__reactResources$"+li,rs="__reactMarker$"+li;function Zr(e){delete e[ln],delete e[Mn],delete e[Is],delete e[Bs],delete e[rl]}function ba(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=D0(e);e!==null;){if(a=e[ln])return a;e=D0(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[ln]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function os(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Aa(e){var n=e[jr];return n||(n=e[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(e){e[rs]=!0}var K=new Set,ct={};function ot(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(ct[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},zt={};function Vt(e){return Ye.call(zt,e)?!0:Ye.call(Ht,e)?!1:Pt.test(e)?zt[e]=!0:(Ht[e]=!0,!1)}function Zt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function te(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){if(!e._valueTracker){var n=Ne(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function le(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,d,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?bn(e,M,ne(n)):a!=null?bn(e,M,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ne(C):e.removeAttribute("name")}function ji(e,n,a,o,u,d,M,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){je(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),je(e)}function bn(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(it(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),je(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Rn(e,d,n[d])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function Sp(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ze(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var hu=!1;function Mp(e,n,a){if(hu)return e(n,a);hu=!0;try{var o=e(n);return o}finally{if(hu=!1,(Gs!==null||Vs!==null)&&(jl(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,Sp(n),e)))for(n=0;n<e.length;n++)Sp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Ki)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){du=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{du=!1}var Ra=null,pu=null,ll=null;function Ep(){if(ll)return ll;var e,n=pu,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return ll=u.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function bp(){return!1}function kn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:bp,this.isPropagationStopped=bp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=kn(ls),Jr=_({},ls,{view:0,detail:0}),gx=kn(Jr),mu,gu,$r,hl=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(mu=e.screenX-$r.screenX,gu=e.screenY-$r.screenY):gu=mu=0,$r=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),Tp=kn(hl),_x=_({},hl,{dataTransfer:0}),vx=kn(_x),xx=_({},Jr,{relatedTarget:0}),_u=kn(xx),yx=_({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=kn(yx),Mx=_({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=kn(Mx),bx=_({},ls,{data:0}),Ap=kn(bx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rx[e])?!!n[e]:!1}function vu(){return Cx}var wx=_({},Jr,{key:function(e){if(e.key){var n=Tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=kn(wx),Ux=_({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=kn(Ux),Lx=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Nx=kn(Lx),Ox=_({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=kn(Ox),zx=_({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=kn(zx),Ix=_({},ls,{newState:0,oldState:0}),Bx=kn(Ix),Hx=[9,13,27,32],xu=Ki&&"CompositionEvent"in window,to=null;Ki&&"documentMode"in document&&(to=document.documentMode);var Gx=Ki&&"TextEvent"in window&&!to,Cp=Ki&&(!xu||to&&8<to&&11>=to),wp=" ",Dp=!1;function Up(e,n){switch(e){case"keyup":return Hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function Vx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Dp=!0,wp);case"textInput":return e=n.data,e===wp&&Dp?null:e;default:return null}}function kx(e,n){if(ks)return e==="compositionend"||!xu&&Up(e,n)?(e=Ep(),ll=pu=Ra=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xx[e.type]:n==="textarea"}function Op(e,n,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,no=null;function Wx(e){g0(e,0)}function dl(e){var n=os(e);if(ze(n))return e}function Pp(e,n){if(e==="change")return n}var zp=!1;if(Ki){var yu;if(Ki){var Su="oninput"in document;if(!Su){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Su=typeof Fp.oninput=="function"}yu=Su}else yu=!1;zp=yu&&(!document.documentMode||9<document.documentMode)}function Ip(){eo&&(eo.detachEvent("onpropertychange",Bp),no=eo=null)}function Bp(e){if(e.propertyName==="value"&&dl(no)){var n=[];Op(n,no,e,fu(e)),Mp(Wx,n)}}function qx(e,n,a){e==="focusin"?(Ip(),eo=n,no=a,eo.attachEvent("onpropertychange",Bp)):e==="focusout"&&Ip()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(no)}function jx(e,n){if(e==="click")return dl(n)}function Zx(e,n){if(e==="input"||e==="change")return dl(n)}function Kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:Kx;function io(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ye.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,n){var a=Hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qx=Ki&&"documentMode"in document&&11>=document.documentMode,Xs=null,Eu=null,ao=null,bu=!1;function Xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Xs==null||Xs!==Jt(o)||(o=Xs,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=ec(Eu,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xs)))}function cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ws={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Tu={},Wp={};Ki&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function us(e){if(Tu[e])return Tu[e];if(!Ws[e])return e;var n=Ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return Tu[e]=n[a];return e}var qp=us("animationend"),Yp=us("animationiteration"),jp=us("animationstart"),Jx=us("transitionrun"),$x=us("transitionstart"),ty=us("transitioncancel"),Zp=us("transitionend"),Kp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Ti(e,n){Kp.set(e,n),ot(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],qs=0,Ru=0;function ml(){for(var e=qs,n=Ru=qs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Qp(a,u,d)}}function gl(e,n,a,o){ui[qs++]=e,ui[qs++]=n,ui[qs++]=a,ui[qs++]=o,Ru|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Cu(e,n,a,o){return gl(e,n,a,o),_l(e)}function fs(e,n){return gl(e,null,null,n),_l(e)}function Qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-vt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function _l(e){if(50<Ro)throw Ro=0,If=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function ey(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new ey(e,n,a,o)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")wu(e)&&(M=1);else if(typeof e=="string")M=rS(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=$n(31,a,n,u),e.elementType=A,e.lanes=d,e;case T:return hs(a.children,u,d,n);case S:M=8,u|=24;break;case v:return e=$n(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case N:return e=$n(13,a,n,u),e.elementType=N,e.lanes=d,e;case P:return e=$n(19,a,n,u),e.elementType=P,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:M=10;break t;case D:M=9;break t;case R:M=11;break t;case O:M=14;break t;case W:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function hs(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Du(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function $p(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Uu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tm=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=tm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},tm.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var js=[],Zs=0,xl=null,so=0,hi=[],di=0,Ca=null,Oi=1,Pi="";function Ji(e,n){js[Zs++]=so,js[Zs++]=xl,xl=e,so=n}function em(e,n,a){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=Ca,Ca=e;var o=Oi;e=Pi;var u=32-vt(o)-1;o&=~(1<<u),a+=1;var d=32-vt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Oi=1<<32-vt(n)+u|a<<u|o,Pi=d+e}else Oi=1<<d|a<<u|o,Pi=e}function Lu(e){e.return!==null&&(Ji(e,1),em(e,1,0))}function Nu(e){for(;e===xl;)xl=js[--Zs],js[Zs]=null,so=js[--Zs],js[Zs]=null;for(;e===Ca;)Ca=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,Oi=hi[--di],hi[di]=null}function nm(e,n){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=Ca,Oi=n.id,Pi=n.overflow,Ca=e}var Cn=null,Ze=null,Ee=!1,wa=null,pi=!1,Ou=Error(s(519));function Da(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(fi(n,e)),Ou}function im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)ve(wo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||y0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Da(e,!0)}function am(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Cn=Cn.return}}function Ks(e){if(e!==Cn)return!1;if(!Ee)return am(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$f(e.type,e.memoizedProps)),a=!a),a&&Ze&&Da(e),am(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=w0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=w0(e)}else n===27?(n=Ze,Xa(e.type)?(e=ah,ah=null,Ze=e):Ze=n):Ze=Cn?gi(e.stateNode.nextSibling):null;return!0}function ds(){Ze=Cn=null,Ee=!1}function Pu(){var e=wa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),wa=null),e}function ro(e){wa===null?wa=[e]:wa.push(e)}var zu=z(null),ps=null,$i=null;function Ua(e,n,a){pt(zu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=zu.current,J(zu)}function Fu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Iu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var C=d;d=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),Fu(d.return,a,e),o||(M=null);break t}d=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Fu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Qs(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(u===ht.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}u=u.return}e!==null&&Iu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return sm(ps,e)}function Sl(e,n){return ps===null&&ms(e),sm(e,n)}function sm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var ny=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},iy=r.unstable_scheduleCallback,ay=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new ny,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&iy(ay,function(){e.controller.abort()})}var lo=null,Hu=0,Js=0,$s=null;function sy(e,n){if(lo===null){var a=lo=[];Hu=0,Js=Xf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Hu++,n.then(rm,rm),n}function rm(){if(--Hu===0&&lo!==null){$s!==null&&($s.status="fulfilled");var e=lo;lo=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ry(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=F.S;F.S=function(e,n){Xg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sy(e,n),om!==null&&om(e,n)};var gs=z(null);function Gu(){var e=gs.current;return e!==null?e:qe.pooledCache}function Ml(e,n){n===null?pt(gs,gs.current):pt(gs,n.pool)}function lm(){var e=Gu();return e===null?null:{parent:cn._currentValue,pool:e}}var tr=Error(s(460)),Vu=Error(s(474)),El=Error(s(542)),bl={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw vs=n,tr}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,tr):a}}var vs=null;function fm(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function hm(e){if(e===tr||e===El)throw Error(s(483))}var er=null,co=0;function Tl(e){var n=co;return co+=1,er===null&&(er=[]),um(er,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dm(e){function n(Q,Y){if(e){var at=Q.deletions;at===null?(Q.deletions=[Y],Q.flags|=16):at.push(Y)}}function a(Q,Y){if(!e)return null;for(;Y!==null;)n(Q,Y),Y=Y.sibling;return null}function o(Q){for(var Y=new Map;Q!==null;)Q.key!==null?Y.set(Q.key,Q):Y.set(Q.index,Q),Q=Q.sibling;return Y}function u(Q,Y){return Q=Qi(Q,Y),Q.index=0,Q.sibling=null,Q}function d(Q,Y,at){return Q.index=at,e?(at=Q.alternate,at!==null?(at=at.index,at<Y?(Q.flags|=67108866,Y):at):(Q.flags|=67108866,Y)):(Q.flags|=1048576,Y)}function M(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,Y,at,yt){return Y===null||Y.tag!==6?(Y=Du(at,Q.mode,yt),Y.return=Q,Y):(Y=u(Y,at),Y.return=Q,Y)}function V(Q,Y,at,yt){var $t=at.type;return $t===T?mt(Q,Y,at.props.children,yt,at.key):Y!==null&&(Y.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&_s($t)===Y.type)?(Y=u(Y,at.props),uo(Y,at),Y.return=Q,Y):(Y=vl(at.type,at.key,at.props,null,Q.mode,yt),uo(Y,at),Y.return=Q,Y)}function st(Q,Y,at,yt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==at.containerInfo||Y.stateNode.implementation!==at.implementation?(Y=Uu(at,Q.mode,yt),Y.return=Q,Y):(Y=u(Y,at.children||[]),Y.return=Q,Y)}function mt(Q,Y,at,yt,$t){return Y===null||Y.tag!==7?(Y=hs(at,Q.mode,yt,$t),Y.return=Q,Y):(Y=u(Y,at),Y.return=Q,Y)}function Et(Q,Y,at){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Du(""+Y,Q.mode,at),Y.return=Q,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return at=vl(Y.type,Y.key,Y.props,null,Q.mode,at),uo(at,Y),at.return=Q,at;case E:return Y=Uu(Y,Q.mode,at),Y.return=Q,Y;case W:return Y=_s(Y),Et(Q,Y,at)}if(it(Y)||Z(Y))return Y=hs(Y,Q.mode,at,null),Y.return=Q,Y;if(typeof Y.then=="function")return Et(Q,Tl(Y),at);if(Y.$$typeof===L)return Et(Q,Sl(Q,Y),at);Al(Q,Y)}return null}function lt(Q,Y,at,yt){var $t=Y!==null?Y.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return $t!==null?null:C(Q,Y,""+at,yt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case x:return at.key===$t?V(Q,Y,at,yt):null;case E:return at.key===$t?st(Q,Y,at,yt):null;case W:return at=_s(at),lt(Q,Y,at,yt)}if(it(at)||Z(at))return $t!==null?null:mt(Q,Y,at,yt,null);if(typeof at.then=="function")return lt(Q,Y,Tl(at),yt);if(at.$$typeof===L)return lt(Q,Y,Sl(Q,at),yt);Al(Q,at)}return null}function ut(Q,Y,at,yt,$t){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return Q=Q.get(at)||null,C(Y,Q,""+yt,$t);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case x:return Q=Q.get(yt.key===null?at:yt.key)||null,V(Y,Q,yt,$t);case E:return Q=Q.get(yt.key===null?at:yt.key)||null,st(Y,Q,yt,$t);case W:return yt=_s(yt),ut(Q,Y,at,yt,$t)}if(it(yt)||Z(yt))return Q=Q.get(at)||null,mt(Y,Q,yt,$t,null);if(typeof yt.then=="function")return ut(Q,Y,at,Tl(yt),$t);if(yt.$$typeof===L)return ut(Q,Y,at,Sl(Y,yt),$t);Al(Y,yt)}return null}function kt(Q,Y,at,yt){for(var $t=null,De=null,Qt=Y,de=Y=0,Me=null;Qt!==null&&de<at.length;de++){Qt.index>de?(Me=Qt,Qt=null):Me=Qt.sibling;var Ue=lt(Q,Qt,at[de],yt);if(Ue===null){Qt===null&&(Qt=Me);break}e&&Qt&&Ue.alternate===null&&n(Q,Qt),Y=d(Ue,Y,de),De===null?$t=Ue:De.sibling=Ue,De=Ue,Qt=Me}if(de===at.length)return a(Q,Qt),Ee&&Ji(Q,de),$t;if(Qt===null){for(;de<at.length;de++)Qt=Et(Q,at[de],yt),Qt!==null&&(Y=d(Qt,Y,de),De===null?$t=Qt:De.sibling=Qt,De=Qt);return Ee&&Ji(Q,de),$t}for(Qt=o(Qt);de<at.length;de++)Me=ut(Qt,Q,de,at[de],yt),Me!==null&&(e&&Me.alternate!==null&&Qt.delete(Me.key===null?de:Me.key),Y=d(Me,Y,de),De===null?$t=Me:De.sibling=Me,De=Me);return e&&Qt.forEach(function(Za){return n(Q,Za)}),Ee&&Ji(Q,de),$t}function ie(Q,Y,at,yt){if(at==null)throw Error(s(151));for(var $t=null,De=null,Qt=Y,de=Y=0,Me=null,Ue=at.next();Qt!==null&&!Ue.done;de++,Ue=at.next()){Qt.index>de?(Me=Qt,Qt=null):Me=Qt.sibling;var Za=lt(Q,Qt,Ue.value,yt);if(Za===null){Qt===null&&(Qt=Me);break}e&&Qt&&Za.alternate===null&&n(Q,Qt),Y=d(Za,Y,de),De===null?$t=Za:De.sibling=Za,De=Za,Qt=Me}if(Ue.done)return a(Q,Qt),Ee&&Ji(Q,de),$t;if(Qt===null){for(;!Ue.done;de++,Ue=at.next())Ue=Et(Q,Ue.value,yt),Ue!==null&&(Y=d(Ue,Y,de),De===null?$t=Ue:De.sibling=Ue,De=Ue);return Ee&&Ji(Q,de),$t}for(Qt=o(Qt);!Ue.done;de++,Ue=at.next())Ue=ut(Qt,Q,de,Ue.value,yt),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?de:Ue.key),Y=d(Ue,Y,de),De===null?$t=Ue:De.sibling=Ue,De=Ue);return e&&Qt.forEach(function(_S){return n(Q,_S)}),Ee&&Ji(Q,de),$t}function Xe(Q,Y,at,yt){if(typeof at=="object"&&at!==null&&at.type===T&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case x:t:{for(var $t=at.key;Y!==null;){if(Y.key===$t){if($t=at.type,$t===T){if(Y.tag===7){a(Q,Y.sibling),yt=u(Y,at.props.children),yt.return=Q,Q=yt;break t}}else if(Y.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&_s($t)===Y.type){a(Q,Y.sibling),yt=u(Y,at.props),uo(yt,at),yt.return=Q,Q=yt;break t}a(Q,Y);break}else n(Q,Y);Y=Y.sibling}at.type===T?(yt=hs(at.props.children,Q.mode,yt,at.key),yt.return=Q,Q=yt):(yt=vl(at.type,at.key,at.props,null,Q.mode,yt),uo(yt,at),yt.return=Q,Q=yt)}return M(Q);case E:t:{for($t=at.key;Y!==null;){if(Y.key===$t)if(Y.tag===4&&Y.stateNode.containerInfo===at.containerInfo&&Y.stateNode.implementation===at.implementation){a(Q,Y.sibling),yt=u(Y,at.children||[]),yt.return=Q,Q=yt;break t}else{a(Q,Y);break}else n(Q,Y);Y=Y.sibling}yt=Uu(at,Q.mode,yt),yt.return=Q,Q=yt}return M(Q);case W:return at=_s(at),Xe(Q,Y,at,yt)}if(it(at))return kt(Q,Y,at,yt);if(Z(at)){if($t=Z(at),typeof $t!="function")throw Error(s(150));return at=$t.call(at),ie(Q,Y,at,yt)}if(typeof at.then=="function")return Xe(Q,Y,Tl(at),yt);if(at.$$typeof===L)return Xe(Q,Y,Sl(Q,at),yt);Al(Q,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Y!==null&&Y.tag===6?(a(Q,Y.sibling),yt=u(Y,at),yt.return=Q,Q=yt):(a(Q,Y),yt=Du(at,Q.mode,yt),yt.return=Q,Q=yt),M(Q)):a(Q,Y)}return function(Q,Y,at,yt){try{co=0;var $t=Xe(Q,Y,at,yt);return er=null,$t}catch(Qt){if(Qt===tr||Qt===El)throw Qt;var De=$n(29,Qt,null,Q.mode);return De.lanes=yt,De.return=Q,De}finally{}}}var xs=dm(!0),pm=dm(!1),La=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),Qp(e,null,a),n}return gl(e,o,n,a),_l(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wr(e,a)}}function Wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function ho(){if(qu){var e=$s;if(e!==null)throw e}}function po(e,n,a,o){qu=!1;var u=e.updateQueue;La=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,st=V.next;V.next=null,M===null?d=st:M.next=st,M=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==M&&(C===null?mt.firstBaseUpdate=st:C.next=st,mt.lastBaseUpdate=V))}if(d!==null){var Et=u.baseState;M=0,mt=st=V=null,C=d;do{var lt=C.lane&-536870913,ut=lt!==C.lane;if(ut?(Se&lt)===lt:(o&lt)===lt){lt!==0&&lt===Js&&(qu=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var kt=e,ie=C;lt=n;var Xe=a;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){Et=kt.call(Xe,Et,lt);break t}Et=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,lt=typeof kt=="function"?kt.call(Xe,Et,lt):kt,lt==null)break t;Et=_({},Et,lt);break t;case 2:La=!0}}lt=C.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(st=mt=ut,V=Et):mt=mt.next=ut,M|=lt;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);mt===null&&(V=Et),u.baseState=V,u.firstBaseUpdate=st,u.lastBaseUpdate=mt,d===null&&(u.shared.lanes=0),Ba|=M,e.lanes=M,e.memoizedState=Et}}function mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function gm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}var nr=z(null),Rl=z(0);function _m(e,n){e=ca,pt(Rl,e),pt(nr,n),ca=e|n.baseLanes}function Yu(){pt(Rl,ca),pt(nr,nr.current)}function ju(){ca=Rl.current,J(nr),J(Rl)}var ti=z(null),mi=null;function Pa(e){var n=e.alternate;pt(rn,rn.current&1),pt(ti,e),mi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(mi=e)}function Zu(e){pt(rn,rn.current),pt(ti,e),mi===null&&(mi=e)}function vm(e){e.tag===22?(pt(rn,rn.current),pt(ti,e),mi===null&&(mi=e)):za()}function za(){pt(rn,rn.current),pt(ti,ti.current)}function ei(e){J(ti),mi===e&&(mi=null),J(rn)}var rn=z(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nh(a)||ih(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,fe=null,Ve=null,un=null,wl=!1,ir=!1,ys=!1,Dl=0,mo=0,ar=null,oy=0;function nn(){throw Error(s(321))}function Ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Qu(e,n,a,o,u,d){return ea=d,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?eg:df,ys=!1,d=a(o,u),ys=!1,ir&&(d=ym(n,a,o,u)),xm(e),d}function xm(e){F.H=vo;var n=Ve!==null&&Ve.next!==null;if(ea=0,un=Ve=fe=null,wl=!1,mo=0,ar=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&yl(e)&&(fn=!0))}function ym(e,n,a,o){fe=e;var u=0;do{if(ir&&(ar=null),mo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,un=Ve=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=ng,d=n(a,o)}while(ir);return d}function ly(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(fe.flags|=1024),n}function Ju(){var e=Dl!==0;return Dl=0,e}function $u(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function tf(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}ea=0,un=Ve=fe=null,ir=!1,mo=Dl=0,ar=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?fe.memoizedState=un=e:un=un.next=e,un}function on(){if(Ve===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=un===null?fe.memoizedState:un.next;if(n!==null)un=n,Ve=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?fe.memoizedState=un=e:un=un.next=e}return un}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,ar===null&&(ar=[]),e=um(ar,e,n),n=fe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?eg:df),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===L)return wn(e)}throw Error(s(438,String(e)))}function ef(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=on();return nf(n,Ve,e)}function nf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var C=M=null,V=null,st=n,mt=!1;do{var Et=st.lane&-536870913;if(Et!==st.lane?(Se&Et)===Et:(ea&Et)===Et){var lt=st.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Et===Js&&(mt=!0);else if((ea&lt)===lt){st=st.next,lt===Js&&(mt=!0);continue}else Et={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(C=V=Et,M=d):V=V.next=Et,fe.lanes|=lt,Ba|=lt;Et=st.action,ys&&a(d,Et),d=st.hasEagerState?st.eagerState:a(d,Et)}else lt={lane:Et,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(C=V=lt,M=d):V=V.next=lt,fe.lanes|=Et,Ba|=Et;st=st.next}while(st!==null&&st!==n);if(V===null?M=d:V.next=C,!Jn(d,e.memoizedState)&&(fn=!0,mt&&(a=$s,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function af(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Jn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Sm(e,n,a){var o=fe,u=on(),d=Ee;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Jn((Ve||u).memoizedState,a);if(M&&(u.memoizedState=a,fn=!0),u=u.queue,of(bm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));d||(ea&127)!==0||Mm(o,n,a)}return a}function Mm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Ul(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Em(e,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(e)}function bm(e,n,a){return a(function(){Tm(n)&&Am(e)})}function Tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Am(e){var n=fs(e,2);n!==null&&jn(n,e,2)}function sf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),ys){rt(!0);try{a()}finally{rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Rm(e,n,a,o){return e.baseState=a,nf(e,Ve,typeof o=="function"?o:na)}function cy(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Cm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Cm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=F.T,M={};F.T=M;try{var C=a(u,o),V=F.S;V!==null&&V(M,C),wm(e,n,C)}catch(st){rf(e,n,st)}finally{d!==null&&M.types!==null&&(d.types=M.types),F.T=d}}else try{d=a(u,o),wm(e,n,d)}catch(st){rf(e,n,st)}}function wm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(e,n,o)},function(o){return rf(e,n,o)}):Dm(e,n,a)}function Dm(e,n,a){n.status="fulfilled",n.value=a,Um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cm(e,a)))}function rf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==o)}e.action=null}function Um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lm(e,n){return n}function Nm(e,n){if(Ee){var a=qe.formState;if(a!==null){t:{var o=fe;if(Ee){if(Ze){e:{for(var u=Ze,d=pi;u.nodeType!==8;){if(!d){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=gi(u.nextSibling),o=u.data==="F!";break t}}Da(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=Jm.bind(null,fe,o),o.dispatch=a,o=sf(!1),d=hf.bind(null,fe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=cy.bind(null,fe,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Om(e){var n=on();return Pm(n,Ve,e)}function Pm(e,n,a){if(n=nf(e,n,Lm)[0],e=Nl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(M){throw M===tr?El:M}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,sr(9,{destroy:void 0},uy.bind(null,u,a),null)),[o,d,e]}function uy(e,n){e.action=n}function zm(e){var n=on(),a=Ve;if(a!==null)return Pm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Ul(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fm(){return on().memoizedState}function Ol(e,n,a,o){var u=Bn();fe.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(e,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;Ve!==null&&o!==null&&Ku(o,Ve.memoizedState.deps)?u.memoizedState=sr(n,d,a,o):(fe.flags|=e,u.memoizedState=sr(1|n,d,a,o))}function Im(e,n){Ol(8390656,8,e,n)}function of(e,n){Pl(2048,8,e,n)}function fy(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Ul(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Bm(e){var n=on().memoizedState;return fy({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Hm(e,n){return Pl(4,2,e,n)}function Gm(e,n){return Pl(4,4,e,n)}function Vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function km(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,Vm.bind(null,n,e),a)}function lf(){}function Xm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ku(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Wm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ku(n,o[1]))return o[0];if(o=e(),ys){rt(!0);try{e()}finally{rt(!1)}}return a.memoizedState=[o,n],o}function cf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=qg(),fe.lanes|=e,Ba|=e,a)}function qm(e,n,a,o){return Jn(a,n)?a:nr.current!==null?(e=cf(e,a,o),Jn(e,n)||(fn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=qg(),fe.lanes|=e,Ba|=e,n)}function Ym(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var M=F.T,C={};F.T=C,hf(e,!1,n,a);try{var V=u(),st=F.S;if(st!==null&&st(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=ry(V,o);_o(e,n,mt,ai(e))}else _o(e,n,o,ai(e))}catch(Et){_o(e,n,{then:function(){},status:"rejected",reason:Et},ai())}finally{B.p=d,M!==null&&C.types!==null&&(M.types=C.types),F.T=M}}function hy(){}function uf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=jm(e).queue;Ym(e,u,n,tt,a===null?hy:function(){return Zm(e),a(o)})}function jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zm(e){var n=jm(e);n.next===null&&(n=e.alternate.memoizedState),_o(e,n.next.queue,{},ai())}function ff(){return wn(Oo)}function Km(){return on().memoizedState}function Qm(){return on().memoizedState}function dy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Na(a);var o=Oa(n,e,a);o!==null&&(jn(o,n,a),fo(o,n,a)),n={cache:Bu()},e.payload=n;return}n=n.return}}function py(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?$m(n,a):(a=Cu(e,n,a,o),a!==null&&(jn(a,e,o),tg(a,n,o)))}function Jm(e,n,a){var o=ai();_o(e,n,a,o)}function _o(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))$m(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,C=d(M,a);if(u.hasEagerState=!0,u.eagerState=C,Jn(C,M))return gl(e,n,u,0),qe===null&&ml(),!1}catch{}finally{}if(a=Cu(e,n,u,o),a!==null)return jn(a,e,o),tg(a,n,o),!0}return!1}function hf(e,n,a,o){if(o={lane:2,revertLane:Xf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Cu(e,a,o,2),n!==null&&jn(n,e,2)}function zl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function $m(e,n){ir=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wr(e,a)}}var vo={readContext:wn,use:Ll,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};vo.useEffectEvent=nn;var eg={readContext:wn,use:Ll,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,Vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(ys){rt(!0);try{e()}finally{rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(ys){rt(!0);try{a(n)}finally{rt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=py.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Jm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(e,n){var a=Bn();return cf(a,e,n)},useTransition:function(){var e=sf(!1);return e=Ym.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Bn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Se&127)!==0||Mm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Im(bm.bind(null,o,d,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},Em.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=qe.identifierPrefix;if(Ee){var a=Pi,o=Oi;a=(o&~(1<<32-vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ff,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ef,useCacheRefresh:function(){return Bn().memoizedState=dy.bind(null,fe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},df={readContext:wn,use:Ll,useCallback:Xm,useContext:wn,useEffect:of,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Nl,useRef:Fm,useState:function(){return Nl(na)},useDebugValue:lf,useDeferredValue:function(e,n){var a=on();return qm(a,Ve.memoizedState,e,n)},useTransition:function(){var e=Nl(na)[0],n=on().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:ff,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=on();return Rm(a,Ve,e,n)},useMemoCache:ef,useCacheRefresh:Qm};df.useEffectEvent=Bm;var ng={readContext:wn,use:Ll,useCallback:Xm,useContext:wn,useEffect:of,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:af,useRef:Fm,useState:function(){return af(na)},useDebugValue:lf,useDeferredValue:function(e,n){var a=on();return Ve===null?cf(a,e,n):qm(a,Ve.memoizedState,e,n)},useTransition:function(){var e=af(na)[0],n=on().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:ff,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=on();return Ve!==null?Rm(a,Ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Qm};ng.useEffectEvent=Bm;function pf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var mf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,o),n!==null&&(jn(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,o),n!==null&&(jn(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(e,o,a),n!==null&&(jn(n,e,a),fo(n,e,a))}};function ig(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,d):!0}function ag(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&mf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function sg(e){pl(e)}function rg(e){console.error(e)}function og(e){pl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function lg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function gf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function cg(e){return e=Na(e),e.tag=3,e}function ug(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){lg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){lg(n,a,o),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function my(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Zl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Gf(e,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Gf(e,o,u)),!1}throw Error(s(435,a.tag))}return Gf(e,o,u),Zl(),!1}if(Ee)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(e=Error(s(422),{cause:o}),ro(fi(e,a)))):(o!==Ou&&(n=Error(s(423),{cause:o}),ro(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=gf(e.stateNode,o,u),Wu(e,u),an!==4&&(an=2)),!1;var d=Error(s(520),{cause:o});if(d=fi(d,a),Ao===null?Ao=[d]:Ao.push(d),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=gf(a.stateNode,o,e),Wu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ha===null||!Ha.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cg(u),ug(u,e,a,o),Wu(a,u),!1}a=a.return}while(a!==null);return!1}var _f=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?pm(n,null,a,o):xs(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return ms(n),o=Qu(e,n,a,M,d,u),C=Ju(),e!==null&&!fn?($u(e,n,u),ia(e,n,u)):(Ee&&C&&Lu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function hg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!wu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,dg(e,n,d,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Tf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(M,o)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(d,o),e.ref=n.ref,e.return=n,n.child=e}function dg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(io(d,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Tf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return vf(e,n,a,o,u)}function pg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return mg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,d!==null?d.cachePool:null),d!==null?_m(n,d):Yu(),vm(n);else return o=n.lanes=536870912,mg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ml(n,d.cachePool),_m(n,d),za(),n.memoizedState=null):(e!==null&&Ml(n,null),Yu(),za());return Dn(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mg(e,n,a,o,u){var d=Gu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ml(n,null),Yu(),vm(n),e!==null&&Qs(e,n,o,!0),n.childLanes=u,null}function Il(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function gg(e,n,a){return xs(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function gy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,xo(null,e);if(Zu(n),(e=Ze)?(e=C0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return Il(n,o)}var d=e.memoizedState;if(d!==null){var M=d.dehydrated;if(Zu(n),u)if(n.flags&256)n.flags&=-257,n=gg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(M=zs(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,fs(e,M),jn(o,e,M),_f;Zl(),n=gg(e,n,a)}else e=d.treeContext,Ze=gi(M.nextSibling),Cn=n,Ee=!0,wa=null,pi=!1,e!==null&&nm(n,e),n=Il(n,o),n.flags|=4096;return n}return e=Qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function vf(e,n,a,o,u){return ms(n),a=Qu(e,n,a,o,void 0,u),o=Ju(),e!==null&&!fn?($u(e,n,u),ia(e,n,u)):(Ee&&o&&Lu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function _g(e,n,a,o,u,d){return ms(n),n.updateQueue=null,a=ym(n,o,a,u),xm(e),o=Ju(),e!==null&&!fn?($u(e,n,d),ia(e,n,d)):(Ee&&o&&Lu(n),n.flags|=1,Dn(e,n,a,d),n.child)}function vg(e,n,a,o,u){if(ms(n),n.stateNode===null){var d=Ys,M=a.contextType;typeof M=="object"&&M!==null&&(d=wn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=mf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ku(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?wn(M):Ys,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(pf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&mf.enqueueReplaceState(d,d.state,null),po(n,o,d,u),ho(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var C=n.memoizedProps,V=Ss(a,C);d.props=V;var st=d.context,mt=a.contextType;M=Ys,typeof mt=="object"&&mt!==null&&(M=wn(mt));var Et=a.getDerivedStateFromProps;mt=typeof Et=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||st!==M)&&ag(n,d,o,M),La=!1;var lt=n.memoizedState;d.state=lt,po(n,o,d,u),ho(),st=n.memoizedState,C||lt!==st||La?(typeof Et=="function"&&(pf(n,a,Et,o),st=n.memoizedState),(V=La||ig(n,a,V,o,lt,st,M))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=M,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Xu(e,n),M=n.memoizedProps,mt=Ss(a,M),d.props=mt,Et=n.pendingProps,lt=d.context,st=a.contextType,V=Ys,typeof st=="object"&&st!==null&&(V=wn(st)),C=a.getDerivedStateFromProps,(st=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Et||lt!==V)&&ag(n,d,o,V),La=!1,lt=n.memoizedState,d.state=lt,po(n,o,d,u),ho();var ut=n.memoizedState;M!==Et||lt!==ut||La||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof C=="function"&&(pf(n,a,C,o),ut=n.memoizedState),(mt=La||ig(n,a,mt,o,lt,ut,V)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ut,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ut,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),d.props=o,d.state=ut,d.context=V,o=mt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=xs(n,e.child,null,u),n.child=xs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ia(e,n,u),e}function xg(e,n,a,o){return ds(),n.flags|=256,Dn(e,n,a,o),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:lm()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function yg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Pa(n):za(),(e=Ze)?(e=C0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Da(n);return ih(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(za(),u=n.mode,C=Hl({mode:"hidden",children:C},u),o=hs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=yf(a),o.childLanes=Sf(e,M,a),n.memoizedState=xf,xo(null,o)):(Pa(n),Mf(n,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(d)n.flags&256?(Pa(n),n.flags&=-257,n=Ef(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),C=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),C=hs(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,xs(n,e.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Sf(e,M,a),n.memoizedState=xf,n=xo(null,o));else if(Pa(n),ih(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,ro({value:o,source:null,stack:null}),n=Ef(e,n,a)}else if(fn||Qs(e,n,a,!1),M=(a&e.childLanes)!==0,fn||M){if(M=qe,M!==null&&(o=zs(M,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,fs(e,o),jn(M,e,o),_f;nh(C)||Zl(),n=Ef(e,n,a)}else nh(C)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ze=gi(C.nextSibling),Cn=n,Ee=!0,wa=null,pi=!1,e!==null&&nm(n,e),n=Mf(n,o.children),n.flags|=4096);return n}return u?(za(),C=o.fallback,u=n.mode,V=e.child,st=V.sibling,o=Qi(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,st!==null?C=Qi(st,C):(C=hs(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,xo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=yf(a):(u=C.cachePool,u!==null?(V=cn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=lm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Sf(e,M,a),n.memoizedState=xf,xo(e.child,o)):(Pa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Mf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Ef(e,n,a){return xs(n,e.child,null,a),e=Mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Fu(e.return,n,a)}function bf(e,n,a,o,u,d){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function Mg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=rn.current,C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,pt(rn,M),Dn(e,n,o,a),o=Ee?so:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,a,n);else if(e.tag===19)Sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}bf(n,!0,a,null,d,o);break;case"together":bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Tf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function _y(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Ua(n,cn,e.memoizedState.cache),ds();break;case 27:case 5:Bt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?yg(e,n,a):(Pa(n),e=ia(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Mg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,pg(e,n,a,n.pendingProps);case 24:Ua(n,cn,e.memoizedState.cache)}return ia(e,n,a)}function Eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Tf(e,a)&&(n.flags&128)===0)return fn=!1,_y(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ee&&(n.flags&1048576)!==0&&em(n,so,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")wu(e)?(o=Ss(e,o),n.tag=1,n=vg(null,n,e,o,a)):(n.tag=0,n=vf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){n.tag=11,n=fg(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=hg(null,n,e,o,a);break t}}throw n=nt(e)||e,Error(s(306,n,""))}}return n;case 0:return vf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),vg(e,n,o,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Xu(e,n),po(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ua(n,cn,o),o!==d.cache&&Iu(n,[cn],a,!0),ho(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=xg(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),ro(u),n=xg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=gi(e.firstChild),Cn=n,Ee=!0,wa=null,pi=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),o===u){n=ia(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=O0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=nc(et.current).createElement(a),o[ln]=n,o[Mn]=e,Un(o,a,e),w(o),n.stateNode=o):n.memoizedState=O0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Bt(n),e===null&&Ee&&(o=n.stateNode=U0(n.type,n.pendingProps,et.current),Cn=n,pi=!0,u=Ze,Xa(n.type)?(ah=u,Ze=gi(o.firstChild)):Ze=u),Dn(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Ze)&&(o=Yy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Cn=n,Ze=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Da(n)),Bt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,$f(u,d)?o=null:M!==null&&$f(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(e,n,ly,null,null,a),Oo._currentValue=u),Bl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ze)&&(a=jy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Cn=n,Ze=null,e=!0):e=!1),e||Da(n)),null;case 13:return yg(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=xs(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ms(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return hg(e,n,n.type,n.pendingProps,a);case 15:return dg(e,n,n.type,n.pendingProps,a);case 19:return Mg(e,n,a);case 31:return gy(e,n,a);case 22:return pg(e,n,a,n.pendingProps);case 24:return ms(n),o=wn(cn),e===null?(u=Gu(),u===null&&(u=qe,d=Bu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ku(n),Ua(n,cn,u)):((e.lanes&a)!==0&&(Xu(e,n),po(n,null,null,a),ho()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,cn,o)):(o=d.cache,Ua(n,cn,o),o!==u.cache&&Iu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Af(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw vs=bl,Vu}else e.flags&=-16777217}function bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B0(n))if(Kg())e.flags|=8192;else throw vs=bl,Vu}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,cr|=n)}function yo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function vy(e,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(cn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),Ke(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(aa(n),d!==null?(Ke(n),bg(n,d)):(Ke(n),Af(n,u,null,o,a))):d?d!==e.memoizedState?(aa(n),Ke(n),bg(n,d)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(n),Ke(n),Af(n,u,e,o,a)),null;case 27:if(ae(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Dt.current,Ks(n)?im(n):(e=U0(u,o,a),n.stateNode=e,aa(n))}return Ke(n),null;case 5:if(ae(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(d=Dt.current,Ks(n))im(n);else{var M=nc(et.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[ln]=n,d[Mn]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;t:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&aa(n)}}return Ke(n),Af(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y0(e.nodeValue,a)),e||Da(n,!0)}else e=nc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ke(n),null);case 4:return Gt(),e===null&&jf(n.stateNode.containerInfo),Ke(n),null;case 10:return ta(n.type),Ke(n),null;case 19:if(J(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)yo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Cl(e),d!==null){for(n.flags|=128,yo(o,!1),e=d.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jp(a,e),a=a.sibling;return pt(rn,rn.current&1|2),Ee&&Ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>ql&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ee)return Ke(n),null}else 2*b()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,pt(rn,u?a&1|2:a&1),Ee&&Ji(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ei(n),ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(cn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function xy(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(cn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ae(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(rn),null;case 4:return Gt(),null;case 10:return ta(n.type),null;case 22:case 23:return ei(n),ju(),e!==null&&J(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(cn),null;case 25:return null;default:return null}}function Tg(e,n){switch(Nu(n),n.tag){case 3:ta(cn),Gt();break;case 26:case 27:case 5:ae(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:J(rn);break;case 10:ta(n.type);break;case 22:case 23:ei(n),ju(),e!==null&&J(gs);break;case 24:ta(cn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(C){He(n,n.return,C)}}function Fa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var V=a,st=C;try{st()}catch(mt){He(u,V,mt)}}}o=o.next}while(o!==d)}}catch(mt){He(n,n.return,mt)}}function Ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gm(n,a)}catch(o){He(e,e.return,o)}}}function Rg(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){He(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function Cg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function Rf(e,n,a){try{var o=e.stateNode;Gy(o,e.type,a,n),o[Mn]=n}catch(u){He(e,e.return,u)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Xa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(wf(e,n,a),e=e.sibling;e!==null;)wf(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function Dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=e,n[Mn]=a}catch(d){He(e,e.return,d)}}var sa=!1,hn=!1,Df=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,xn=null;function yy(e,n){if(e=e.containerInfo,Qf=cc,e=kp(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,C=-1,V=-1,st=0,mt=0,Et=e,lt=null;e:for(;;){for(var ut;Et!==a||u!==0&&Et.nodeType!==3||(C=M+u),Et!==d||o!==0&&Et.nodeType!==3||(V=M+o),Et.nodeType===3&&(M+=Et.nodeValue.length),(ut=Et.firstChild)!==null;)lt=Et,Et=ut;for(;;){if(Et===e)break e;if(lt===a&&++st===u&&(C=M),lt===d&&++mt===o&&(V=M),(ut=Et.nextSibling)!==null)break;Et=lt,lt=Et.parentNode}Et=ut}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},cc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var kt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){He(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Lg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&So(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){He(a,a.return,M)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){He(a,a.return,M)}}o&64&&Ag(a),o&512&&Mo(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(e,n)}catch(M){He(a,a.return,M)}}break;case 27:n===null&&o&4&&Dg(a);case 26:case 5:oa(e,a),n===null&&o&4&&Cg(a),o&512&&Mo(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&Pg(e,a);break;case 13:oa(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wy.bind(null,a),Zy(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||hn,u=sa;var d=hn;sa=o,(hn=n)&&!d?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,hn=d}break;case 30:break;default:oa(e,a)}}function Ng(e){var n=e.alternate;n!==null&&(e.alternate=null,Ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function ra(e,n,a){for(a=a.child;a!==null;)Og(e,n,a),a=a.sibling}function Og(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=$e,u=Xn;Xa(a.type)&&($e=a.stateNode,Xn=!1),ra(e,n,a),Uo(a.stateNode),$e=o,Xn=u;break;case 5:hn||zi(a,n);case 6:if(o=$e,u=Xn,$e=null,ra(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(d){He(a,n,d)}else try{$e.removeChild(a.stateNode)}catch(d){He(a,n,d)}break;case 18:$e!==null&&(Xn?(e=$e,A0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):A0($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,ra(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),hn||Fa(4,a,n),ra(e,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Rg(a,n,o)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ra(e,n,a),hn=o;break;default:ra(e,n,a)}}function Pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){He(n,n.return,a)}}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){He(n,n.return,a)}}function Sy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ug),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=Sy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Dy.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(Xa(C.type)){$e=C.stateNode,Xn=!1;break t}break;case 5:$e=C.stateNode,Xn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,Xn=!0;break t}C=C.return}if($e===null)throw Error(s(160));Og(d,M,u),$e=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,e),n=n.sibling}var Ai=null;function Fg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Fa(3,e,e.return),So(3,e),Fa(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[rs]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,a),d[ln]=e,w(d),o=d;break t;case"link":var M=F0("link","href",u).get(o+(a.href||""));if(M){for(var C=0;C<M.length;C++)if(d=M[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(C,1);break e}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;case"meta":if(M=F0("meta","content",u).get(o+(a.content||""))){for(C=0;C<M.length;C++)if(d=M[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(C,1);break e}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=e,w(d),o=d}e.stateNode=o}else I0(u,e.type,e.stateNode);else e.stateNode=z0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?I0(u,e.type,e.stateNode):z0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&Rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(kt){He(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Df=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){He(e,e.return,kt)}}break;case 3:if(sc=null,u=Ai,Ai=ic(n.containerInfo),Wn(n,e),Ai=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(kt){He(e,e.return,kt)}Df&&(Df=!1,Ig(e));break;case 4:o=Ai,Ai=ic(e.stateNode.containerInfo),Wn(n,e),qn(e),Ai=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,st=sa,mt=hn;if(sa=st||u,hn=mt||V,Wn(n,e),hn=mt,sa=st,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sa||hn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var Et=V.memoizedProps.style,lt=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;C.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(kt){He(V,V.return,kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(kt){He(V,V.return,kt)}}}else if(n.tag===18){if(a===null){V=n;try{var ut=V.stateNode;u?R0(ut,!0):R0(V.stateNode,!1)}catch(kt){He(V,V.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Cf(e);Vl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(pn(M,""),a.flags&=-33);var C=Cf(e);Vl(e,C,M);break;case 3:case 4:var V=a.stateNode.containerInfo,st=Cf(e);wf(e,st,V);break;default:throw Error(s(161))}}catch(mt){He(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lg(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ms(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rg(n,n.return,a),Ms(n);break;case 27:Uo(n.stateNode);case 26:case 5:zi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:la(u,d,a),So(4,d);break;case 1:if(la(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){He(o,o.return,st)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)mm(V[u],C)}catch(st){He(o,o.return,st)}}a&&M&64&&Ag(d),Mo(d,d.return);break;case 27:Dg(d);case 26:case 5:la(u,d,a),a&&o===null&&M&4&&Cg(d),Mo(d,d.return);break;case 12:la(u,d,a);break;case 31:la(u,d,a),a&&M&4&&Pg(u,d);break;case 13:la(u,d,a),a&&M&4&&zg(u,d);break;case 22:d.memoizedState===null&&la(u,d,a),Mo(d,d.return);break;case 30:break;default:la(u,d,a)}n=n.sibling}}function Uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(e,n,a,o),n=n.sibling}function Bg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&So(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,C=d.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){He(n,n.return,V)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ri(e,n,a,o):Eo(e,n):d._visibility&2?Ri(e,n,a,o):(d._visibility|=2,rr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Uf(M,n);break;case 24:Ri(e,n,a,o),u&2048&&Lf(n.alternate,n);break;default:Ri(e,n,a,o)}}function rr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,M=n,C=a,V=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:rr(d,M,C,V,u),So(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?rr(d,M,C,V,u):Eo(d,M):(mt._visibility|=2,rr(d,M,C,V,u)),u&&st&2048&&Uf(M.alternate,M);break;case 24:rr(d,M,C,V,u),u&&st&2048&&Lf(M.alternate,M);break;default:rr(d,M,C,V,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Uf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Lf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function or(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Hg(e,n,a),e=e.sibling}function Hg(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&bo&&e.memoizedState!==null&&oS(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var o=Ai;Ai=ic(e.stateNode.containerInfo),or(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,or(e,n,a),bo=o):or(e,n,a));break;default:or(e,n,a)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,kg(o,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):To(e);break;default:To(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,kg(o,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function kg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(Ng(o),o===a){xn=null;break t}if(u!==null){u.return=d,xn=u;break t}xn=d}}}var My={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},Ey=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,_e=null,Se=0,Be=0,ni=null,Ia=!1,lr=!1,Nf=!1,ca=0,an=0,Ba=0,Es=0,Of=0,ii=0,cr=0,Ao=null,Yn=null,Pf=!1,Wl=0,Xg=0,ql=1/0,Yl=null,Ha=null,mn=0,Ga=null,ur=null,ua=0,zf=0,Ff=null,Wg=null,Ro=0,If=null;function ai(){return(Pe&2)!==0&&Se!==0?Se&-Se:F.T!==null?Xf():Yr()}function qg(){if(ii===0)if((Se&536870912)===0||Ee){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Va(e,Se,ii,!1)),Nn(e,a),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(Es|=a),an===4&&Va(e,Se,ii,!1)),Fi(e))}function Yg(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Ay(e,n):Hf(e,n,!0),d=o;do{if(u===0){lr&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!by(a)){u=Hf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var C=e;u=Ao;var V=C.current.memoizedState.isDehydrated;if(V&&(fr(C,M).flags|=256),M=Hf(C,M,!1),M!==2){if(Nf&&!V){C.errorRecoveryDisabledLanes|=d,Es|=d,u=4;break t}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){fr(e,0),Va(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,ii,!Ia);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Wl+300-b(),10<u)){if(Va(o,n,ii,!Ia),dt(o,0,!0)!==0)break t;ua=n,o.timeoutHandle=b0(jg.bind(null,o,a,Yn,Yl,Pf,n,ii,Es,cr,Ia,d,"Throttled",-0,0),u);break t}jg(o,a,Yn,Yl,Pf,n,ii,Es,cr,Ia,d,null,-0,0)}}break}while(!0);Fi(e)}function jg(e,n,a,o,u,d,M,C,V,st,mt,Et,lt,ut){if(e.timeoutHandle=-1,Et=n.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Hg(n,d,Et);var kt=(d&62914560)===d?Wl-b():(d&4194048)===d?Xg-b():0;if(kt=lS(Et,kt),kt!==null){ua=d,e.cancelPendingCommit=kt(n0.bind(null,e,n,d,a,o,u,M,C,V,mt,Et,null,lt,ut)),Va(e,d,M,!st);return}}n0(e,n,d,a,o,u,M,C,V)}function by(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~Of,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-vt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&sl(e,a,n)}function jl(){return(Pe&6)===0?(Co(0),!1):!0}function Bf(){if(_e!==null){if(Be===0)var e=_e.return;else e=_e,$i=ps=null,tf(e),er=null,co=0,e=_e;for(;e!==null;)Tg(e.alternate,e),e=e.return;_e=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Xy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Bf(),qe=e,_e=a=Qi(e.current,null),Se=n,Be=0,ni=null,Ia=!1,lr=Ct(e,n),Nf=!1,cr=ii=Of=Es=Ba=an=0,Yn=Ao=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-vt(o),d=1<<u;n|=e[u],o&=~d}return ca=n,ml(),a}function Zg(e,n){fe=null,F.H=vo,n===tr||n===El?(n=fm(),Be=3):n===Vu?(n=fm(),Be=4):Be=n===_f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,_e===null&&(an=1,Fl(e,fi(n,e.current)))}function Kg(){var e=ti.current;return e===null?!0:(Se&4194048)===Se?mi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===mi:!1}function Qg(){var e=F.H;return F.H=vo,e===null?vo:e}function Jg(){var e=F.A;return F.A=My,e}function Zl(){an=4,Ia||(Se&4194048)!==Se&&ti.current!==null||(lr=!0),(Ba&134217727)===0&&(Es&134217727)===0||qe===null||Va(qe,Se,ii,!1)}function Hf(e,n,a){var o=Pe;Pe|=2;var u=Qg(),d=Jg();(qe!==e||Se!==n)&&(Yl=null,fr(e,n)),n=!1;var M=an;t:do try{if(Be!==0&&_e!==null){var C=_e,V=ni;switch(Be){case 8:Bf(),M=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var st=Be;if(Be=0,ni=null,hr(e,C,V,st),a&&lr){M=0;break t}break;default:st=Be,Be=0,ni=null,hr(e,C,V,st)}}Ty(),M=an;break}catch(mt){Zg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,$i=ps=null,Pe=o,F.H=u,F.A=d,_e===null&&(qe=null,Se=0,ml()),M}function Ty(){for(;_e!==null;)$g(_e)}function Ay(e,n){var a=Pe;Pe|=2;var o=Qg(),u=Jg();qe!==e||Se!==n?(Yl=null,ql=b()+500,fr(e,n)):lr=Ct(e,n);t:do try{if(Be!==0&&_e!==null){n=_e;var d=ni;e:switch(Be){case 1:Be=0,ni=null,hr(e,n,d,1);break;case 2:case 9:if(cm(d)){Be=0,ni=null,t0(n);break}n=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Fi(e)},d.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:cm(d)?(Be=0,ni=null,t0(n)):(Be=0,ni=null,hr(e,n,d,7));break;case 5:var M=null;switch(_e.tag){case 26:M=_e.memoizedState;case 5:case 27:var C=_e;if(M?B0(M):C.stateNode.complete){Be=0,ni=null;var V=C.sibling;if(V!==null)_e=V;else{var st=C.return;st!==null?(_e=st,Kl(st)):_e=null}break e}}Be=0,ni=null,hr(e,n,d,5);break;case 6:Be=0,ni=null,hr(e,n,d,6);break;case 8:Bf(),an=6;break t;default:throw Error(s(462))}}Ry();break}catch(mt){Zg(e,mt)}while(!0);return $i=ps=null,F.H=o,F.A=u,Pe=a,_e!==null?0:(qe=null,Se=0,ml(),an)}function Ry(){for(;_e!==null&&!Xt();)$g(_e)}function $g(e){var n=Eg(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?Kl(e):_e=n}function t0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_g(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=_g(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:tf(n);default:Tg(a,n),n=_e=Jp(n,ca),n=Eg(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?Kl(e):_e=n}function hr(e,n,a,o){$i=ps=null,tf(n),er=null,co=0;var u=n.return;try{if(my(e,u,n,a,Se)){an=1,Fl(e,fi(a,e.current)),_e=null;return}}catch(d){if(u!==null)throw _e=u,d;an=1,Fl(e,fi(a,e.current)),_e=null;return}n.flags&32768?(Ee||o===1?e=!0:lr||(Se&536870912)!==0?e=!1:(Ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),e0(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){e0(n,Ia);return}e=n.return;var a=vy(n.alternate,n,ca);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);an===0&&(an=5)}function e0(e,n){do{var a=xy(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);an=6,_e=null}function n0(e,n,a,o,u,d,M,C,V){e.cancelPendingCommit=null;do Ql();while(mn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Ru,Mi(e,a,d,M,C,V),e===qe&&(_e=qe=null,Se=0),ur=n,Ga=e,ua=a,zf=d,Ff=u,Wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Uy(ft,function(){return o0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=B.p,B.p=2,M=Pe,Pe|=4;try{yy(e,n,a)}finally{Pe=M,B.p=u,F.T=o}}mn=1,i0(),a0(),s0()}}function i0(){if(mn===1){mn=0;var e=Ga,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=Pe;Pe|=4;try{Fg(n,e);var d=Jf,M=kp(e.containerInfo),C=d.focusedElem,V=d.selectionRange;if(M!==C&&C&&C.ownerDocument&&Vp(C.ownerDocument.documentElement,C)){if(V!==null&&Mu(C)){var st=V.start,mt=V.end;if(mt===void 0&&(mt=st),"selectionStart"in C)C.selectionStart=st,C.selectionEnd=Math.min(mt,C.value.length);else{var Et=C.ownerDocument||document,lt=Et&&Et.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),kt=C.textContent.length,ie=Math.min(V.start,kt),Xe=V.end===void 0?ie:Math.min(V.end,kt);!ut.extend&&ie>Xe&&(M=Xe,Xe=ie,ie=M);var Q=Gp(C,ie),Y=Gp(C,Xe);if(Q&&Y&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==Y.node||ut.focusOffset!==Y.offset)){var at=Et.createRange();at.setStart(Q.node,Q.offset),ut.removeAllRanges(),ie>Xe?(ut.addRange(at),ut.extend(Y.node,Y.offset)):(at.setEnd(Y.node,Y.offset),ut.addRange(at))}}}}for(Et=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Et.length;C++){var yt=Et[C];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}cc=!!Qf,Jf=Qf=null}finally{Pe=u,B.p=o,F.T=a}}e.current=n,mn=2}}function a0(){if(mn===2){mn=0;var e=Ga,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=Pe;Pe|=4;try{Lg(e,n.alternate,n)}finally{Pe=u,B.p=o,F.T=a}}mn=3}}function s0(){if(mn===4||mn===3){mn=0,I();var e=Ga,n=ur,a=ua,o=Wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ur=Ga=null,r0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ha=null),Fs(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=B.p,B.p=2,F.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var C=o[M];d(C.value,{componentStack:C.stack})}}finally{F.T=n,B.p=u}}(ua&3)!==0&&Ql(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===If?Ro++:(Ro=0,If=e):Ro=0,Co(0)}}function r0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Ql(){return i0(),a0(),s0(),o0()}function o0(){if(mn!==5)return!1;var e=Ga,n=zf;zf=0;var a=Fs(ua),o=F.T,u=B.p;try{B.p=32>a?32:a,F.T=null,a=Ff,Ff=null;var d=Ga,M=ua;if(mn=0,ur=Ga=null,ua=0,(Pe&6)!==0)throw Error(s(331));var C=Pe;if(Pe|=4,Vg(d.current),Bg(d,d.current,M,a),Pe=C,Co(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Rt,d)}catch{}return!0}finally{B.p=u,F.T=o,r0(e,n)}}function l0(e,n,a){n=fi(a,n),n=gf(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Nn(e,2),Fi(e))}function He(e,n,a){if(e.tag===3)l0(e,e,a);else for(;n!==null;){if(n.tag===3){l0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ha===null||!Ha.has(o))){e=fi(a,e),a=cg(2),o=Oa(n,a,2),o!==null&&(ug(a,o,n,e),Nn(o,2),Fi(o));break}}n=n.return}}function Gf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ey;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),e=Cy.bind(null,e,n,a),n.then(e,e))}function Cy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Se&a)===a&&(an===4||an===3&&(Se&62914560)===Se&&300>b()-Wl?(Pe&2)===0&&fr(e,0):Of|=a,cr===Se&&(cr=0)),Fi(e)}function c0(e,n){n===0&&(n=Fe()),e=fs(e,n),e!==null&&(Nn(e,n),Fi(e))}function wy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),c0(e,a)}function Dy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),c0(e,a)}function Uy(e,n){return ye(e,n)}var Jl=null,dr=null,Vf=!1,$l=!1,kf=!1,ka=0;function Fi(e){e!==dr&&e.next===null&&(dr===null?Jl=dr=e:dr=dr.next=e),$l=!0,Vf||(Vf=!0,Ny())}function Co(e,n){if(!kf&&$l){kf=!0;do for(var a=!1,o=Jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-vt(42|e)+1)-1,d&=u&~(M&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,d0(o,d))}else d=Se,d=dt(o,o===qe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ct(o,d)||(a=!0,d0(o,d));o=o.next}while(a);kf=!1}}function Ly(){u0()}function u0(){$l=Vf=!1;var e=0;ka!==0&&ky()&&(e=ka);for(var n=b(),a=null,o=Jl;o!==null;){var u=o.next,d=f0(o,n);d===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(d&3)!==0)&&($l=!0)),o=u}mn!==0&&mn!==5||Co(e),ka!==0&&(ka=0)}function f0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-vt(d),C=1<<M,V=u[M];V===-1?((C&a)===0||(C&o)!==0)&&(u[M]=re(C,n)):V<=n&&(e.expiredLanes|=C),d&=~C}if(n=qe,a=Se,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&we(o),Fs(a)){case 2:case 8:a=bt;break;case 32:a=ft;break;case 268435456:a=Nt;break;default:a=ft}return o=h0.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&we(o),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var o=Se;return o=dt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Yg(e,o,n),f0(e,b()),e.callbackNode!=null&&e.callbackNode===a?h0.bind(null,e):null)}function d0(e,n){if(Ql())return null;Yg(e,n,!0)}function Ny(){Wy(function(){(Pe&6)!==0?ye(gt,Ly):u0()})}function Xf(){if(ka===0){var e=Js;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),ka=e}return ka}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function m0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Oy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=p0((u[Mn]||null).action),M=o.submitter;M&&(n=(n=M[Mn]||null)?p0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var C=new fl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ka!==0){var V=M?m0(u,M):new FormData(u);uf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=M?m0(u,M):new FormData(u),uf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Wf=0;Wf<Au.length;Wf++){var qf=Au[Wf],Py=qf.toLowerCase(),zy=qf[0].toUpperCase()+qf.slice(1);Ti(Py,"on"+zy)}Ti(qp,"onAnimationEnd"),Ti(Yp,"onAnimationIteration"),Ti(jp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Jx,"onTransitionRun"),Ti($x,"onTransitionStart"),Ti(ty,"onTransitionCancel"),Ti(Zp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function g0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],V=C.instance,st=C.currentTarget;if(C=C.listener,V!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=st;try{d(u)}catch(mt){pl(mt)}u.currentTarget=null,d=V}else for(M=0;M<o.length;M++){if(C=o[M],V=C.instance,st=C.currentTarget,C=C.listener,V!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=st;try{d(u)}catch(mt){pl(mt)}u.currentTarget=null,d=V}}}}function ve(e,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var o=e+"__bubble";a.has(o)||(_0(n,e,2,!1),a.add(o))}function Yf(e,n,a){var o=0;n&&(o|=4),_0(a,e,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[tc]){e[tc]=!0,K.forEach(function(a){a!=="selectionchange"&&(Fy.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,Yf("selectionchange",!1,n))}}function _0(e,n,a,o){switch(q0(n)){case 2:var u=fS;break;case 8:u=hS;break;default:u=ch}a=u.bind(null,n,a,e),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Zf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=ba(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=d=M;continue t}C=C.parentNode}}o=o.return}Mp(function(){var st=d,mt=fu(a),Et=[];t:{var lt=Kp.get(e);if(lt!==void 0){var ut=fl,kt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ut=Dx;break;case"focusin":kt="focus",ut=_u;break;case"focusout":kt="blur",ut=_u;break;case"beforeblur":case"afterblur":ut=_u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Nx;break;case qp:case Yp:case jp:ut=Sx;break;case Zp:ut=Px;break;case"scroll":case"scrollend":ut=gx;break;case"wheel":ut=Fx;break;case"copy":case"cut":case"paste":ut=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Rp;break;case"toggle":case"beforetoggle":ut=Bx}var ie=(n&4)!==0,Xe=!ie&&(e==="scroll"||e==="scrollend"),Q=ie?lt!==null?lt+"Capture":null:lt;ie=[];for(var Y=st,at;Y!==null;){var yt=Y;if(at=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||at===null||Q===null||(yt=Kr(Y,Q),yt!=null&&ie.push(Do(Y,yt,at))),Xe)break;Y=Y.return}0<ie.length&&(lt=new ut(lt,kt,null,a,mt),Et.push({event:lt,listeners:ie}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==uu&&(kt=a.relatedTarget||a.fromElement)&&(ba(kt)||kt[Ei]))break t;if((ut||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(kt=a.relatedTarget||a.toElement,ut=st,kt=kt?ba(kt):null,kt!==null&&(Xe=c(kt),ie=kt.tag,kt!==Xe||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(ut=null,kt=st),ut!==kt)){if(ie=Tp,yt="onMouseLeave",Q="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Rp,yt="onPointerLeave",Q="onPointerEnter",Y="pointer"),Xe=ut==null?lt:os(ut),at=kt==null?lt:os(kt),lt=new ie(yt,Y+"leave",ut,a,mt),lt.target=Xe,lt.relatedTarget=at,yt=null,ba(mt)===st&&(ie=new ie(Q,Y+"enter",kt,a,mt),ie.target=at,ie.relatedTarget=Xe,yt=ie),Xe=yt,ut&&kt)e:{for(ie=Iy,Q=ut,Y=kt,at=0,yt=Q;yt;yt=ie(yt))at++;yt=0;for(var $t=Y;$t;$t=ie($t))yt++;for(;0<at-yt;)Q=ie(Q),at--;for(;0<yt-at;)Y=ie(Y),yt--;for(;at--;){if(Q===Y||Y!==null&&Q===Y.alternate){ie=Q;break e}Q=ie(Q),Y=ie(Y)}ie=null}else ie=null;ut!==null&&v0(Et,lt,ut,ie,!1),kt!==null&&Xe!==null&&v0(Et,Xe,kt,ie,!0)}}t:{if(lt=st?os(st):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var De=Pp;else if(Np(lt))if(zp)De=Zx;else{De=Yx;var Qt=qx}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&bi(st.elementType)&&(De=Pp):De=jx;if(De&&(De=De(e,st))){Op(Et,De,a,mt);break t}Qt&&Qt(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&bn(lt,"number",lt.value)}switch(Qt=st?os(st):window,e){case"focusin":(Np(Qt)||Qt.contentEditable==="true")&&(Xs=Qt,Eu=st,ao=null);break;case"focusout":ao=Eu=Xs=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Xp(Et,a,mt);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Xp(Et,a,mt)}var de;if(xu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else ks?Up(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Cp&&a.locale!=="ko"&&(ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ks&&(de=Ep()):(Ra=mt,pu="value"in Ra?Ra.value:Ra.textContent,ks=!0)),Qt=ec(st,Me),0<Qt.length&&(Me=new Ap(Me,e,null,a,mt),Et.push({event:Me,listeners:Qt}),de?Me.data=de:(de=Lp(a),de!==null&&(Me.data=de)))),(de=Gx?Vx(e,a):kx(e,a))&&(Me=ec(st,"onBeforeInput"),0<Me.length&&(Qt=new Ap("onBeforeInput","beforeinput",null,a,mt),Et.push({event:Qt,listeners:Me}),Qt.data=de)),Oy(Et,e,st,a,mt)}g0(Et,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Kr(e,a),u!=null&&o.unshift(Do(e,u,d)),u=Kr(e,n),u!=null&&o.push(Do(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var C=a,V=C.alternate,st=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||st===null||(V=st,u?(st=Kr(a,d),st!=null&&M.unshift(Do(a,st,V))):u||(st=Kr(a,d),st!=null&&M.push(Do(a,st,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var By=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(By,`
`).replace(Hy,"")}function y0(e,n){return n=x0(n),x0(e)===n}function ke(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":te(e,"class",o);break;case"tabIndex":te(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,a,o);break;case"style":Hs(e,o,d);break;case"data":if(n!=="object"){te(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",u.name,u,null),ke(e,n,"formEncType",u.formEncType,u,null),ke(e,n,"formMethod",u.formMethod,u,null),ke(e,n,"formTarget",u.formTarget,u,null)):(ke(e,n,"encType",u.encType,u,null),ke(e,n,"method",u.method,u,null),ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Zt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=px.get(a)||a,Zt(e,a,o))}}function Kf(e,n,a,o,u,d){switch(a){case"style":Hs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Zt(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,d,M,a,null)}}u&&ke(e,n,"srcSet",a.srcSet,a,null),o&&ke(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var C=d=M=u=null,V=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":V=mt;break;case"defaultChecked":st=mt;break;case"value":d=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:ke(e,n,o,mt,a,null)}}ji(e,d,C,V,st,M,u,!1);return;case"select":ve("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:ke(e,n,u,C,a,null)}n=d,a=M,e.multiple=!!o,n!=null?ci(e,!!o,n,!1):a!=null&&ci(e,!!o,a,!0);return;case"textarea":ve("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:ke(e,n,M,C,a,null)}Tn(e,o,u,d);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ke(e,n,V,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)ve(wo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,st,o,a,null)}return;default:if(bi(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Kf(e,n,mt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&ke(e,n,C,o,a,null))}function Gy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,C=null,V=null,st=null,mt=null;for(ut in a){var Et=a[ut];if(a.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=Et;default:o.hasOwnProperty(ut)||ke(e,n,ut,null,o,Et)}}for(var lt in o){var ut=o[lt];if(Et=a[lt],o.hasOwnProperty(lt)&&(ut!=null||Et!=null))switch(lt){case"type":d=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":mt=ut;break;case"value":M=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==Et&&ke(e,n,lt,ut,o,Et)}}En(e,M,C,V,st,mt,d,u);return;case"select":ut=M=C=lt=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ut=V;default:o.hasOwnProperty(d)||ke(e,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":lt=d;break;case"defaultValue":C=d;break;case"multiple":M=d;default:d!==V&&ke(e,n,u,d,o,V)}n=C,a=M,o=ut,lt!=null?ci(e,!!a,lt,!1):!!o!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:ke(e,n,C,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&ke(e,n,M,u,o,d)}Ie(e,lt,ut);return;case"option":for(var kt in a)if(lt=a[kt],a.hasOwnProperty(kt)&&lt!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:ke(e,n,kt,null,o,lt)}for(V in o)if(lt=o[V],ut=a[V],o.hasOwnProperty(V)&&lt!==ut&&(lt!=null||ut!=null))switch(V){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:ke(e,n,V,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)lt=a[ie],a.hasOwnProperty(ie)&&lt!=null&&!o.hasOwnProperty(ie)&&ke(e,n,ie,null,o,lt);for(st in o)if(lt=o[st],ut=a[st],o.hasOwnProperty(st)&&lt!==ut&&(lt!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:ke(e,n,st,lt,o,ut)}return;default:if(bi(n)){for(var Xe in a)lt=a[Xe],a.hasOwnProperty(Xe)&&lt!==void 0&&!o.hasOwnProperty(Xe)&&Kf(e,n,Xe,void 0,o,lt);for(mt in o)lt=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||lt===ut||lt===void 0&&ut===void 0||Kf(e,n,mt,lt,o,ut);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&ke(e,n,Q,null,o,lt);for(Et in o)lt=o[Et],ut=a[Et],!o.hasOwnProperty(Et)||lt===ut||lt==null&&ut==null||ke(e,n,Et,lt,o,ut)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,C=u.duration;if(d&&C&&S0(M)){for(M=0,C=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],st=V.startTime;if(st>C)break;var mt=V.transferSize,Et=V.initiatorType;mt&&S0(Et)&&(V=V.responseEnd,M+=mt*(V<C?1:(C-st)/(V-st)))}if(--o,n+=8*(d+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qf=null,Jf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function M0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $f(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var th=null;function ky(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var b0=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,T0=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof T0<"u"?function(e){return T0.resolve(null).then(e).catch(qy)}:b0;function qy(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function A0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var M=d.nextSibling,C=d.nodeName;d[rs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&Uo(e.ownerDocument.body);a=u}while(a);_r(n)}function R0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Yy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function jy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function C0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$?"||e.data==="$~"}function ih(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ah=null;function w0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function U0(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zr(e)}var _i=new Map,L0=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=B.d;B.d={f:Ky,r:Qy,D:Jy,C:$y,L:tS,m:eS,X:iS,S:nS,M:aS};function Ky(){var e=fa.f(),n=jl();return e||n}function Qy(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?Zm(n):fa.r(e)}var pr=typeof document>"u"?null:document;function N0(e,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L0.has(u)||(L0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),w(n),o.head.appendChild(n)))}}function Jy(e){fa.D(e),N0("dns-prefetch",e,null)}function $y(e,n){fa.C(e,n),N0("preconnect",e,n)}function tS(e,n,a){fa.L(e,n,a);var o=pr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var d=u;switch(n){case"style":d=mr(e);break;case"script":d=gr(e)}_i.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Un(n,"link",e),w(n),o.head.appendChild(n)))}}function eS(e,n){fa.m(e,n);var a=pr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gr(e)}if(!_i.has(d)&&(e=_({rel:"modulepreload",href:e},n),_i.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Un(o,"link",e),w(o),a.head.appendChild(o)}}}function nS(e,n,a){fa.S(e,n,a);var o=pr;if(o&&e){var u=Aa(o).hoistableStyles,d=mr(e);n=n||"default";var M=u.get(d);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(Lo(d)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(d))&&sh(e,a);var V=M=o.createElement("link");w(V),Un(V,"link",e),V._p=new Promise(function(st,mt){V.onload=st,V.onerror=mt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ac(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(d,M)}}}function iS(e,n){fa.X(e,n);var a=pr;if(a&&e){var o=Aa(a).hoistableScripts,u=gr(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=_({src:e,async:!0},n),(n=_i.get(u))&&rh(e,n),d=a.createElement("script"),w(d),Un(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function aS(e,n){fa.M(e,n);var a=pr;if(a&&e){var o=Aa(a).hoistableScripts,u=gr(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&rh(e,n),d=a.createElement("script"),w(d),Un(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function O0(e,n,a,o){var u=(u=et.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Aa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var d=Aa(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Lo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),d||sS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Aa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+le(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function P0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function sS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),w(n),e.head.appendChild(n))}function gr(e){return'[src="'+le(e)+'"]'}function No(e){return"script[async]"+e}function z0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,w(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),w(o),Un(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=mr(a.href);var d=e.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,w(d),d;o=P0(a),(u=_i.get(u))&&sh(o,u),d=(e.ownerDocument||e).createElement("link"),w(d);var M=d;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Un(d,"link",o),n.state.loading|=4,ac(d,a.precedence,e),n.instance=d;case"script":return d=gr(a.src),(u=e.querySelector(No(d)))?(n.instance=u,w(u),u):(o=a,(u=_i.get(d))&&(o=_({},a),rh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function F0(e,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[rs]||d[ln]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var C=o.get(M);C?C.push(d):o.set(M,[d])}}return o}function I0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function rS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(o.href),d=n.querySelector(Lo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,w(d);return}d=n.ownerDocument||n,o=P0(o),(u=_i.get(u))&&sh(o,u),d=d.createElement("link"),w(d);var M=d;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Un(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var oh=0;function lS(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&oh===0&&(oh=62500*Vy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>oh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(cS,e),oc=null,rc.call(e))}function cS(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Oo={$$typeof:L,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function uS(e,n,a,o,u,d,M,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function H0(e,n,a,o,u,d,M,C,V,st,mt,Et){return e=new uS(e,n,a,M,V,st,mt,Et,C),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),e.current=d,d.stateNode=e,n=Bu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ku(d),e}function G0(e){return e?(e=Ys,e):Ys}function V0(e,n,a,o,u,d){u=G0(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Oa(e,o,n),a!==null&&(jn(a,e,n),fo(a,e,n))}function k0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function lh(e,n){k0(e,n),(e=e.alternate)&&k0(e,n)}function X0(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&jn(n,e,67108864),lh(e,67108864)}}function W0(e){if(e.tag===13||e.tag===31){var n=ai();n=qr(n);var a=fs(e,n);a!==null&&jn(a,e,n),lh(e,n)}}var cc=!0;function fS(e,n,a,o){var u=F.T;F.T=null;var d=B.p;try{B.p=2,ch(e,n,a,o)}finally{B.p=d,F.T=u}}function hS(e,n,a,o){var u=F.T;F.T=null;var d=B.p;try{B.p=8,ch(e,n,a,o)}finally{B.p=d,F.T=u}}function ch(e,n,a,o){if(cc){var u=uh(o);if(u===null)Zf(e,n,o,uc,a),Y0(e,o);else if(pS(u,e,n,a,o))o.stopPropagation();else if(Y0(e,o),n&4&&-1<dS.indexOf(e)){for(;u!==null;){var d=Ta(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=xt(d.pendingLanes);if(M!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-vt(M);C.entanglements[1]|=V,M&=~V}Fi(d),(Pe&6)===0&&(ql=b()+500,Co(0))}}break;case 31:case 13:C=fs(d,2),C!==null&&jn(C,d,2),jl(),lh(d,2)}if(d=uh(o),d===null&&Zf(e,n,o,uc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Zf(e,n,o,null,a)}}function uh(e){return e=fu(e),fh(e)}var uc=null;function fh(e){if(uc=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case gt:return 2;case bt:return 8;case ft:case Yt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var hh=!1,Wa=null,qa=null,Ya=null,Po=new Map,zo=new Map,ja=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(e,n){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Fo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&X0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function pS(e,n,a,o,u){switch(n){case"focusin":return Wa=Fo(Wa,e,n,a,o,u),!0;case"dragenter":return qa=Fo(qa,e,n,a,o,u),!0;case"mouseover":return Ya=Fo(Ya,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,Fo(Po.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,zo.set(d,Fo(zo.get(d)||null,e,n,a,o,u)),!0}return!1}function j0(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){W0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){W0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=uh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=Ta(a),n!==null&&X0(n),e.blockedOn=a,!1;n.shift()}return!0}function Z0(e,n,a){fc(e)&&a.delete(n)}function mS(){hh=!1,Wa!==null&&fc(Wa)&&(Wa=null),qa!==null&&fc(qa)&&(qa=null),Ya!==null&&fc(Ya)&&(Ya=null),Po.forEach(Z0),zo.forEach(Z0)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,hh||(hh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,mS)))}var dc=null;function K0(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(fh(o||a)===null)continue;break}var d=Ta(a);d!==null&&(e.splice(n,3),n-=3,uf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function n(V){return hc(V,e)}Wa!==null&&hc(Wa,e),qa!==null&&hc(qa,e),Ya!==null&&hc(Ya,e),Po.forEach(n),zo.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)j0(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[Mn]||null;if(typeof d=="function")M||K0(a);else if(M){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[Mn]||null)C=M.formAction;else if(fh(u)!==null)continue}else C=M.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),K0(a)}}}function Q0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function dh(e){this._internalRoot=e}pc.prototype.render=dh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();V0(a,o,e,n,null,null)},pc.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;V0(e.current,2,null,e,null,null),jl(),n[Ei]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&j0(e)}};var J0=t.version;if(J0!=="19.2.3")throw Error(s(527,J0,"19.2.3"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var gS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Rt=mc.inject(gS),wt=mc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=sg,d=rg,M=og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=H0(e,1,!1,null,null,a,o,null,u,d,M,Q0),e[Ei]=n.current,jf(e),new dh(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=sg,M=rg,C=og,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=H0(e,1,!0,n,a??null,o,u,V,d,M,C,Q0),n.context=G0(null),a=n.current,o=ai(),o=qr(o),u=Na(o),u.callback=null,Oa(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Fi(n),e[Ei]=n.current,jf(e),new pc(n)},Bo.version="19.2.3",Bo}var l_;function AS(){if(l_)return gh.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gh.exports=TS(),gh.exports}var RS=AS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="182",Pr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CS=0,c_=1,wS=2,Gc=1,DS=2,Ko=3,as=0,Qn=1,va=2,ya=0,zr=1,u_=2,f_=3,h_=4,US=5,Ds=100,LS=101,NS=102,OS=103,PS=104,zS=200,FS=201,IS=202,BS=203,ed=204,nd=205,HS=206,GS=207,VS=208,kS=209,XS=210,WS=211,qS=212,YS=213,jS=214,id=0,ad=1,sd=2,Ir=3,rd=4,od=5,ld=6,cd=7,Av=0,ZS=1,KS=2,Vi=0,Rv=1,Cv=2,wv=3,Dv=4,Uv=5,Lv=6,Nv=7,Ov=300,Os=301,Br=302,ud=303,fd=304,nu=306,hd=1e3,xa=1001,dd=1002,Ln=1003,QS=1004,gc=1005,In=1006,yh=1007,Ls=1008,oi=1009,Pv=1010,zv=1011,Jo=1012,ap=1013,Wi=1014,Hi=1015,Ma=1016,sp=1017,rp=1018,$o=1020,Fv=35902,Iv=35899,Bv=1021,Hv=1022,Li=1023,Ea=1026,Ns=1027,Gv=1028,op=1029,Hr=1030,lp=1031,cp=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,pd=35840,md=35841,gd=35842,_d=35843,vd=36196,xd=37492,yd=37496,Sd=37488,Md=37489,Ed=37490,bd=37491,Td=37808,Ad=37809,Rd=37810,Cd=37811,wd=37812,Dd=37813,Ud=37814,Ld=37815,Nd=37816,Od=37817,Pd=37818,zd=37819,Fd=37820,Id=37821,Bd=36492,Hd=36494,Gd=36495,Vd=36283,kd=36284,Xd=36285,Wd=36286,JS=3200,Vv=0,$S=1,ns="",xi="srgb",Gr="srgb-linear",Zc="linear",Ge="srgb",vr=7680,d_=519,tM=512,eM=513,nM=514,up=515,iM=516,aM=517,fp=518,sM=519,p_=35044,m_="300 es",Gi=2e3,Kc=2001;function kv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rM(){const r=Qc("canvas");return r.style.display="block",r}const g_={};function __(...r){const t="THREE."+r.shift();console.log(t,...r)}function se(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function tl(...r){const t=r.join(" ");t in g_||(g_[t]=!0,se(...r))}function oM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,qd=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function lM(r,t){return(r%t+t)%t}function Sh(r,t,i){return(1-i)*r+i*t}function Ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cM={DEG2RAD:qc};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],y=c[f+0],x=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==y||p!==x||g!==E){let S=m*y+p*x+g*E+_*T;S<0&&(y=-y,x=-x,E=-E,T=-T,S=-S);let v=1-h;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);v=Math.sin(v*D)/L,h=Math.sin(h*D)/L,m=m*v+y*h,p=p*v+x*h,g=g*v+E*h,_=_*v+T*h}else{m=m*v+y*h,p=p*v+x*h,g=g*v+E*h,_=_*v+T*h;const D=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=D,p*=D,g*=D,_*=D}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],y=c[f+1],x=c[f+2],E=c[f+3];return t[i]=h*E+g*_+m*x-p*y,t[i+1]=m*E+g*y+p*_-h*x,t[i+2]=p*E+g*x+h*y-m*_,t[i+3]=g*E-h*_-m*y-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),y=m(s/2),x=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*g*_+p*x*E,this._y=p*x*_-y*g*E,this._z=p*g*E+y*x*_,this._w=p*g*_-y*x*E;break;case"YXZ":this._x=y*g*_+p*x*E,this._y=p*x*_-y*g*E,this._z=p*g*E-y*x*_,this._w=p*g*_+y*x*E;break;case"ZXY":this._x=y*g*_-p*x*E,this._y=p*x*_+y*g*E,this._z=p*g*E+y*x*_,this._w=p*g*_-y*x*E;break;case"ZYX":this._x=y*g*_-p*x*E,this._y=p*x*_+y*g*E,this._z=p*g*E-y*x*_,this._w=p*g*_+y*x*E;break;case"YZX":this._x=y*g*_+p*x*E,this._y=p*x*_+y*g*E,this._z=p*g*E-y*x*_,this._w=p*g*_-y*x*E;break;case"XZY":this._x=y*g*_-p*x*E,this._y=p*x*_-y*g*E,this._z=p*g*E+y*x*_,this._w=p*g*_+y*x*E;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],y=s+h+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(s>h&&s>_){const x=2*Math.sqrt(1+s-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-s-_);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-s-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,i=0,s=0){H.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(v_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(v_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new H,v_=new ss;class pe{constructor(t,i,s,l,c,f,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],y=s[2],x=s[5],E=s[8],T=l[0],S=l[3],v=l[6],D=l[1],L=l[4],R=l[7],N=l[2],P=l[5],O=l[8];return c[0]=f*T+h*D+m*N,c[3]=f*S+h*L+m*P,c[6]=f*v+h*R+m*O,c[1]=p*T+g*D+_*N,c[4]=p*S+g*L+_*P,c[7]=p*v+g*R+_*O,c[2]=y*T+x*D+E*N,c[5]=y*S+x*L+E*P,c[8]=y*v+x*R+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,y=h*m-g*c,x=p*c-f*m,E=i*_+s*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=y*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=x*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Eh.makeScale(t,i)),this}rotate(t){return this.premultiply(Eh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Eh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new pe,x_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){const r={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Gr]:{primaries:t,whitePoint:s,transfer:Zc,toXYZ:x_,fromXYZ:y_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:x_,fromXYZ:y_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Ce=uM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class fM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=Qc("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hM=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(bh(l[f].image)):c.push(bh(l[f]))}else c=bh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function bh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let dM=0;const Th=new H;class Gn extends Ps{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=xa,l=xa,c=In,f=Ls,h=Li,m=oi,p=Gn.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=nl(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hd:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hd:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Ov;Gn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],x=m[5],E=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,R=(x+1)/2,N=(v+1)/2,P=(g+y)/4,O=(_+T)/4,W=(E+S)/4;return L>R&&L>N?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=P/s,c=O/s):R>N?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=P/l,c=W/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=O/c,l=W/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(y-g)*(y-g));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(_-T)/D,this.z=(y-g)/D,this.w=Math.acos((p+x+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends pM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Xv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mM extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new H(1/0,1/0,1/0),i=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),vc.subVectors(this.max,Go),yr.subVectors(t.a,Go),Sr.subVectors(t.b,Go),Mr.subVectors(t.c,Go),Ka.subVectors(Sr,yr),Qa.subVectors(Mr,Sr),bs.subVectors(yr,Mr);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-bs.z,bs.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,bs.z,0,-bs.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-bs.y,bs.x,0];return!Ah(i,yr,Sr,Mr,vc)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,yr,Sr,Mr,vc))?!1:(xc.crossVectors(Ka,Qa),i=[xc.x,xc.y,xc.z],Ah(i,yr,Sr,Mr,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new H,new H,new H,new H,new H,new H,new H,new H],Ci=new H,_c=new il,yr=new H,Sr=new H,Mr=new H,Ka=new H,Qa=new H,bs=new H,Go=new H,vc=new H,xc=new H,Ts=new H;function Ah(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ts.fromArray(r,c);const h=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=t.dot(Ts),p=i.dot(Ts),g=s.dot(Ts);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const gM=new il,Vo=new H,Rh=new H;class iu{constructor(t=new H,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):gM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Rh)),this.expandByPoint(Vo.copy(t.center).sub(Rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const da=new H,Ch=new H,yc=new H,Ja=new H,wh=new H,Sc=new H,Dh=new H;class au{constructor(t=new H,i=new H(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=da.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ch.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(Ch);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yc),h=Ja.dot(this.direction),m=-Ja.dot(yc),p=Ja.lengthSq(),g=Math.abs(1-f*f);let _,y,x,E;if(g>0)if(_=f*m-h,y=f*h-m,E=c*g,_>=0)if(y>=-E)if(y<=E){const T=1/g;_*=T,y*=T,x=_*(_+f*y+2*h)+y*(f*_+y+2*m)+p}else y=c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-f*c+h)),y=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-c,-m),c),x=y*(y+2*m)+p):(_=Math.max(0,-(f*c+h)),y=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+y*(y+2*m)+p);else y=f>0?-c:c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ch).addScaledVector(yc,y),x}intersectSphere(t,i){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,i,s,l,c){wh.subVectors(i,t),Sc.subVectors(s,t),Dh.crossVectors(wh,Sc);let f=this.direction.dot(Dh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ja.subVectors(this.origin,t);const m=h*this.direction.dot(Sc.crossVectors(Ja,Sc));if(m<0)return null;const p=h*this.direction.dot(wh.cross(Ja));if(p<0||m+p>f)return null;const g=-h*Ja.dot(Dh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,f,h,m,p,g,_,y,x,E,T,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,_,y,x,E,T,S)}set(t,i,s,l,c,f,h,m,p,g,_,y,x,E,T,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=x,v[7]=E,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),f=1/Er.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=f*g,x=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=x+E*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=E+x*p,i[10]=f*m}else if(t.order==="YXZ"){const y=m*g,x=m*_,E=p*g,T=p*_;i[0]=y+T*h,i[4]=E*h-x,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=x*h-E,i[6]=T+y*h,i[10]=f*m}else if(t.order==="ZXY"){const y=m*g,x=m*_,E=p*g,T=p*_;i[0]=y-T*h,i[4]=-f*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=f*g,i[9]=T-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const y=f*g,x=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*p-x,i[8]=y*p+T,i[1]=m*_,i[5]=T*p+y,i[9]=x*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const y=f*m,x=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-y*_,i[8]=E*_+x,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=x*_+E,i[10]=y-T*_}else if(t.order==="XZY"){const y=f*m,x=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=y*_+T,i[5]=f*g,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*g,i[10]=T*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_M,t,vM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),$a.crossVectors(s,si),$a.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),$a.crossVectors(s,si)),$a.normalize(),Mc.crossVectors(si,$a),l[0]=$a.x,l[4]=Mc.x,l[8]=si.x,l[1]=$a.y,l[5]=Mc.y,l[9]=si.y,l[2]=$a.z,l[6]=Mc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],y=s[9],x=s[13],E=s[2],T=s[6],S=s[10],v=s[14],D=s[3],L=s[7],R=s[11],N=s[15],P=l[0],O=l[4],W=l[8],A=l[12],U=l[1],G=l[5],Z=l[9],q=l[13],nt=l[2],it=l[6],F=l[10],B=l[14],tt=l[3],Mt=l[7],_t=l[11],z=l[15];return c[0]=f*P+h*U+m*nt+p*tt,c[4]=f*O+h*G+m*it+p*Mt,c[8]=f*W+h*Z+m*F+p*_t,c[12]=f*A+h*q+m*B+p*z,c[1]=g*P+_*U+y*nt+x*tt,c[5]=g*O+_*G+y*it+x*Mt,c[9]=g*W+_*Z+y*F+x*_t,c[13]=g*A+_*q+y*B+x*z,c[2]=E*P+T*U+S*nt+v*tt,c[6]=E*O+T*G+S*it+v*Mt,c[10]=E*W+T*Z+S*F+v*_t,c[14]=E*A+T*q+S*B+v*z,c[3]=D*P+L*U+R*nt+N*tt,c[7]=D*O+L*G+R*it+N*Mt,c[11]=D*W+L*Z+R*F+N*_t,c[15]=D*A+L*q+R*B+N*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],x=t[14],E=t[3],T=t[7],S=t[11],v=t[15],D=m*x-p*y,L=h*x-p*_,R=h*y-m*_,N=f*x-p*g,P=f*y-m*g,O=f*_-h*g;return i*(T*D-S*L+v*R)-s*(E*D-S*N+v*P)+l*(E*L-T*N+v*O)-c*(E*R-T*P+S*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],x=t[11],E=t[12],T=t[13],S=t[14],v=t[15],D=_*S*p-T*y*p+T*m*x-h*S*x-_*m*v+h*y*v,L=E*y*p-g*S*p-E*m*x+f*S*x+g*m*v-f*y*v,R=g*T*p-E*_*p+E*h*x-f*T*x-g*h*v+f*_*v,N=E*_*m-g*T*m-E*h*y+f*T*y+g*h*S-f*_*S,P=i*D+s*L+l*R+c*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=D*O,t[1]=(T*y*c-_*S*c-T*l*x+s*S*x+_*l*v-s*y*v)*O,t[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*v+s*m*v)*O,t[3]=(_*m*c-h*y*c-_*l*p+s*y*p+h*l*x-s*m*x)*O,t[4]=L*O,t[5]=(g*S*c-E*y*c+E*l*x-i*S*x-g*l*v+i*y*v)*O,t[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*v-i*m*v)*O,t[7]=(f*y*c-g*m*c+g*l*p-i*y*p-f*l*x+i*m*x)*O,t[8]=R*O,t[9]=(E*_*c-g*T*c-E*s*x+i*T*x+g*s*v-i*_*v)*O,t[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*v+i*h*v)*O,t[11]=(g*h*c-f*_*c-g*s*p+i*_*p+f*s*x-i*h*x)*O,t[12]=N*O,t[13]=(g*T*l-E*_*l+E*s*y-i*T*y-g*s*S+i*_*S)*O,t[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*S-i*h*S)*O,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*y+i*h*y)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,y=c*p,x=c*g,E=c*_,T=f*g,S=f*_,v=h*_,D=m*p,L=m*g,R=m*_,N=s.x,P=s.y,O=s.z;return l[0]=(1-(T+v))*N,l[1]=(x+R)*N,l[2]=(E-L)*N,l[3]=0,l[4]=(x-R)*P,l[5]=(1-(y+v))*P,l[6]=(S+D)*P,l[7]=0,l[8]=(E+L)*O,l[9]=(S-D)*O,l[10]=(1-(y+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Er.set(l[0],l[1],l[2]).length();const f=Er.set(l[4],l[5],l[6]).length(),h=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/f,_=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Gi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===Kc)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Gi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Gi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===Kc)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Er=new H,wi=new tn,_M=new H(0,0,0),vM=new H(1,1,1),$a=new H,Mc=new H,si=new H,S_=new tn,M_=new ss;class qi{constructor(t=0,i=0,s=0,l=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return S_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return M_.setFromEuler(this),this.setFromQuaternion(M_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xM=0;const E_=new H,br=new ss,pa=new tn,Ec=new H,ko=new H,yM=new H,SM=new ss,b_=new H(1,0,0),T_=new H(0,1,0),A_=new H(0,0,1),R_={type:"added"},MM={type:"removed"},Tr={type:"childadded",child:null},Uh={type:"childremoved",child:null};class Sn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new H,i=new qi,s=new ss,l=new H(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new pe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(b_,t)}rotateY(t){return this.rotateOnAxis(T_,t)}rotateZ(t){return this.rotateOnAxis(A_,t)}translateOnAxis(t,i){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(b_,t)}translateY(t){return this.translateOnAxis(T_,t)}translateZ(t){return this.translateOnAxis(A_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(ko,Ec,this.up):pa.lookAt(Ec,ko,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),br.setFromRotationMatrix(pa),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(MM),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,yM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,SM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new H(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new H,ma=new H,Lh=new H,ga=new H,Ar=new H,Rr=new H,C_=new H,Nh=new H,Oh=new H,Ph=new H,zh=new sn,Fh=new sn,Ih=new sn;class Ui{constructor(t=new H,i=new H,s=new H){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),ma.subVectors(s,i),Lh.subVectors(t,i);const f=Di.dot(Di),h=Di.dot(ma),m=Di.dot(Lh),p=ma.dot(ma),g=ma.dot(Lh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,x=(p*m-h*g)*y,E=(f*g-h*m)*y;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return zh.setScalar(0),Fh.setScalar(0),Ih.setScalar(0),zh.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(zh,c.x),f.addScaledVector(Fh,c.y),f.addScaledVector(Ih,c.z),f}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),ma.subVectors(t,i),Di.cross(ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Di.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Ar.subVectors(l,s),Rr.subVectors(c,s),Nh.subVectors(t,s);const m=Ar.dot(Nh),p=Rr.dot(Nh);if(m<=0&&p<=0)return i.copy(s);Oh.subVectors(t,l);const g=Ar.dot(Oh),_=Rr.dot(Oh);if(g>=0&&_<=g)return i.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ar,f);Ph.subVectors(t,c);const x=Ar.dot(Ph),E=Rr.dot(Ph);if(E>=0&&x<=E)return i.copy(c);const T=x*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Rr,h);const S=g*E-x*_;if(S<=0&&_-g>=0&&x-E>=0)return C_.subVectors(c,l),h=(_-g)/(_-g+(x-E)),i.copy(l).addScaledVector(C_,h);const v=1/(S+T+y);return f=T*v,h=y*v,i.copy(s).addScaledVector(Ar,f).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Bh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=lM(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Bh(f,c,t+1/3),this.g=Bh(f,c,t),this.b=Bh(f,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=Wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ce.workingToColorSpace(zn.copy(this),t),Math.round(xe(zn.r*255,0,255))*65536+Math.round(xe(zn.g*255,0,255))*256+Math.round(xe(zn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=xi){Ce.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(bc);const s=Sh(ts.h,bc.h,i),l=Sh(ts.s,bc.s,i),c=Sh(ts.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new be;be.NAMES=Wv;let EM=0;class kr extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=zr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ed&&(s.blendSrc=this.blendSrc),this.blendDst!==nd&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class su extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new H,Tc=new ce;let bM=0;class Xi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=p_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p_&&(t.usage=this.usage),t}}class qv extends Xi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Yv extends Xi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class en extends Xi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let TM=0;const vi=new tn,Hh=new Sn,Cr=new H,ri=new il,Xo=new il,yn=new H;class Vn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?Yv:qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new en(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Xo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ri.min,Xo.min),ri.expandByPoint(yn),yn.addVectors(ri.max,Xo.max),ri.expandByPoint(yn)):(ri.expandByPoint(Xo.min),ri.expandByPoint(Xo.max))}ri.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)yn.fromBufferAttribute(h,p),m&&(Cr.fromBufferAttribute(t,p),yn.add(Cr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<s.count;W++)h[W]=new H,m[W]=new H;const p=new H,g=new H,_=new H,y=new ce,x=new ce,E=new ce,T=new H,S=new H;function v(W,A,U){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),y.fromBufferAttribute(c,W),x.fromBufferAttribute(c,A),E.fromBufferAttribute(c,U),g.sub(p),_.sub(p),x.sub(y),E.sub(y);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(T),h[A].add(T),h[U].add(T),m[W].add(S),m[A].add(S),m[U].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let W=0,A=D.length;W<A;++W){const U=D[W],G=U.start,Z=U.count;for(let q=G,nt=G+Z;q<nt;q+=3)v(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const L=new H,R=new H,N=new H,P=new H;function O(W){N.fromBufferAttribute(l,W),P.copy(N);const A=h[W];L.copy(A),L.sub(N.multiplyScalar(N.dot(A))).normalize(),R.crossVectors(P,A);const G=R.dot(m[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,A=D.length;W<A;++W){const U=D[W],G=U.start,Z=U.count;for(let q=G,nt=G+Z;q<nt;q+=3)O(t.getX(q+0)),O(t.getX(q+1)),O(t.getX(q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new H,c=new H,f=new H,h=new H,m=new H,p=new H,g=new H,_=new H;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),T=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,y=new p.constructor(m.length*g);let x=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?x=m[T]*h.data.stride+h.offset:x=m[T]*g;for(let v=0;v<g;v++)y[E++]=p[x++]}return new Xi(y,g,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const y=p[g],x=t(y,s);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,x=_.length;y<x;y++)g.push(_[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w_=new tn,As=new au,Ac=new iu,D_=new H,Rc=new H,Cc=new H,wc=new H,Gh=new H,Dc=new H,U_=new H,Uc=new H;class Si extends Sn{constructor(t=new Vn,i=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Gh.fromBufferAttribute(_,t),f?Dc.addScaledVector(Gh,g):Dc.addScaledVector(Gh.sub(i),g))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),As.copy(t.ray).recast(t.near),!(Ac.containsPoint(As.origin)===!1&&(As.intersectSphere(Ac,D_)===null||As.origin.distanceToSquared(D_)>(t.far-t.near)**2))&&(w_.copy(c).invert(),As.copy(t.ray).applyMatrix4(w_),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const S=y[E],v=f[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,N=L;R<N;R+=3){const P=h.getX(R),O=h.getX(R+1),W=h.getX(R+2);l=Lc(this,v,t,s,p,g,_,P,O,W),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=E,v=T;S<v;S+=3){const D=h.getX(S),L=h.getX(S+1),R=h.getX(S+2);l=Lc(this,f,t,s,p,g,_,D,L,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const S=y[E],v=f[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,N=L;R<N;R+=3){const P=R,O=R+1,W=R+2;l=Lc(this,v,t,s,p,g,_,P,O,W),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let S=E,v=T;S<v;S+=3){const D=S,L=S+1,R=S+2;l=Lc(this,f,t,s,p,g,_,D,L,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function AM(r,t,i,s,l,c,f,h){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===as,h),m===null)return null;Uc.copy(h),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Rc),r.getVertexPosition(m,Cc),r.getVertexPosition(p,wc);const g=AM(r,t,i,s,Rc,Cc,wc,U_);if(g){const _=new H;Ui.getBarycoord(U_,Rc,Cc,wc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,m,p,_,new ce)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,m,p,_,new ce)),f&&(g.normal=Ui.getInterpolatedAttribute(f,h,m,p,_,new H),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new H,materialIndex:0};Ui.getNormal(Rc,Cc,wc,y.normal),g.face=y,g.barycoord=_}return g}class al extends Vn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let y=0,x=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(_,2));function E(T,S,v,D,L,R,N,P,O,W,A){const U=R/O,G=N/W,Z=R/2,q=N/2,nt=P/2,it=O+1,F=W+1;let B=0,tt=0;const Mt=new H;for(let _t=0;_t<F;_t++){const z=_t*G-q;for(let J=0;J<it;J++){const pt=J*U-Z;Mt[T]=pt*D,Mt[S]=z*L,Mt[v]=nt,p.push(Mt.x,Mt.y,Mt.z),Mt[T]=0,Mt[S]=0,Mt[v]=P>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(J/O),_.push(1-_t/W),B+=1}}for(let _t=0;_t<W;_t++)for(let z=0;z<O;z++){const J=y+z+it*_t,pt=y+z+it*(_t+1),Dt=y+(z+1)+it*(_t+1),It=y+(z+1)+it*_t;m.push(J,pt,It),m.push(pt,Dt,It),tt+=6}h.addGroup(x,tt,A),x+=tt,y+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Vr(r[i]);for(const l in s)t[l]=s[l]}return t}function RM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function jv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const CM={clone:Vr,merge:Hn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=RM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zv extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new H,L_=new ce,N_=new ce;class yi extends Zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,L_,N_),i.subVectors(N_,L_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const wr=-90,Dr=1;class UM extends Sn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(wr,Dr,t,i);l.layers=this.layers,this.add(l);const c=new yi(wr,Dr,t,i);c.layers=this.layers,this.add(c);const f=new yi(wr,Dr,t,i);f.layers=this.layers,this.add(f);const h=new yi(wr,Dr,t,i);h.layers=this.layers,this.add(h);const m=new yi(wr,Dr,t,i);m.layers=this.layers,this.add(m);const p=new yi(wr,Dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,y,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Kv extends Gn{constructor(t=[],i=Os,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qv extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Kv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ya});c.uniforms.tEquirect.value=i;const f=new Si(l,c),h=i.minFilter;return i.minFilter===Ls&&(i.minFilter=In),new UM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Nc extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&y>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Nc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class NM extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class OM extends Gn{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Ln,g=Ln,_,y){super(null,f,h,m,p,g,l,c,_,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new H,PM=new H,zM=new pe;class _a{constructor(t=new H(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=kh.subVectors(s,i).cross(PM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(kh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||zM.getNormalMatrix(t),l=this.coplanarPoint(kh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new iu,FM=new ce(.5,.5),Oc=new H;class pp{constructor(t=new _a,i=new _a,s=new _a,l=new _a,c=new _a,f=new _a){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],x=c[7],E=c[8],T=c[9],S=c[10],v=c[11],D=c[12],L=c[13],R=c[14],N=c[15];if(l[0].setComponents(p-f,x-g,v-E,N-D).normalize(),l[1].setComponents(p+f,x+g,v+E,N+D).normalize(),l[2].setComponents(p+h,x+_,v+T,N+L).normalize(),l[3].setComponents(p-h,x-_,v-T,N-L).normalize(),s)l[4].setComponents(m,y,S,R).normalize(),l[5].setComponents(p-m,x-y,v-S,N-R).normalize();else if(l[4].setComponents(p-m,x-y,v-S,N-R).normalize(),i===Gi)l[5].setComponents(p+m,x+y,v+S,N+R).normalize();else if(i===Kc)l[5].setComponents(m,y,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=FM.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jc=new H,$c=new H,O_=new tn,Wo=new au,Pc=new iu,Xh=new H,P_=new H;class Jv extends Sn{constructor(t=new Vn,i=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);t.setAttribute("lineDistance",new en(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;O_.copy(l).invert(),Wo.copy(t.ray).applyMatrix4(O_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const x=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=x,S=E-1;T<S;T+=p){const v=g.getX(T),D=g.getX(T+1),L=zc(this,t,Wo,m,v,D,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(x),v=zc(this,t,Wo,m,T,S,E-1);v&&i.push(v)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let T=x,S=E-1;T<S;T+=p){const v=zc(this,t,Wo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=zc(this,t,Wo,m,E-1,x,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(Jc.fromBufferAttribute(h,l),$c.fromBufferAttribute(h,c),i.distanceSqToSegment(Jc,$c,Xh,P_)>s)return;Xh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Xh);if(!(p<t.near||p>t.far))return{distance:p,point:P_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const z_=new H,F_=new H;class IM extends Jv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)z_.fromBufferAttribute(i,l),F_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+z_.distanceTo(F_);t.setAttribute("lineDistance",new en(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class el extends Gn{constructor(t,i,s=Wi,l,c,f,h=Ln,m=Ln,p,g=Ea,_=1){if(g!==Ea&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class BM extends el{constructor(t,i=Wi,s=Os,l,c,f=Ln,h=Ln,m,p=Ea){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $v extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gp extends Vn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],y=[],x=[];let E=0;const T=[],S=s/2;let v=0;D(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(x,2));function D(){const R=new H,N=new H;let P=0;const O=(i-t)/s;for(let W=0;W<=c;W++){const A=[],U=W/c,G=U*(i-t)+t;for(let Z=0;Z<=l;Z++){const q=Z/l,nt=q*m+h,it=Math.sin(nt),F=Math.cos(nt);N.x=G*it,N.y=-U*s+S,N.z=G*F,_.push(N.x,N.y,N.z),R.set(it,O,F).normalize(),y.push(R.x,R.y,R.z),x.push(q,1-U),A.push(E++)}T.push(A)}for(let W=0;W<l;W++)for(let A=0;A<c;A++){const U=T[A][W],G=T[A+1][W],Z=T[A+1][W+1],q=T[A][W+1];(t>0||A!==0)&&(g.push(U,G,q),P+=3),(i>0||A!==c-1)&&(g.push(G,Z,q),P+=3)}p.addGroup(v,P,0),v+=P}function L(R){const N=E,P=new ce,O=new H;let W=0;const A=R===!0?t:i,U=R===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,S*U,0),y.push(0,U,0),x.push(.5,.5),E++;const G=E;for(let Z=0;Z<=l;Z++){const nt=Z/l*m+h,it=Math.cos(nt),F=Math.sin(nt);O.x=A*F,O.y=S*U,O.z=A*it,_.push(O.x,O.y,O.z),y.push(0,U,0),P.x=it*.5+.5,P.y=F*.5*U+.5,x.push(P.x,P.y),E++}for(let Z=0;Z<l;Z++){const q=N+Z,nt=G+Z;R===!0?g.push(nt,nt+1,q):g.push(nt+1,nt,q),W+=3}p.addGroup(v,W,R===!0?1:2),v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _p extends gp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new _p(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ru extends Vn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,y=i/m,x=[],E=[],T=[],S=[];for(let v=0;v<g;v++){const D=v*y-f;for(let L=0;L<p;L++){const R=L*_-c;E.push(R,-D,0),T.push(0,0,1),S.push(L/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const L=D+p*v,R=D+p*(v+1),N=D+1+p*(v+1),P=D+1+p*v;x.push(L,R,P),x.push(R,N,P)}this.setIndex(x),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class vp extends Vn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new H,y=new H,x=[],E=[],T=[],S=[];for(let v=0;v<=s;v++){const D=[],L=v/s;let R=0;v===0&&f===0?R=.5/i:v===s&&m===Math.PI&&(R=-.5/i);for(let N=0;N<=i;N++){const P=N/i;_.x=-t*Math.cos(l+P*c)*Math.sin(f+L*h),_.y=t*Math.cos(f+L*h),_.z=t*Math.sin(l+P*c)*Math.sin(f+L*h),E.push(_.x,_.y,_.z),y.copy(_).normalize(),T.push(y.x,y.y,y.z),S.push(P+R,1-L),D.push(p++)}g.push(D)}for(let v=0;v<s;v++)for(let D=0;D<i;D++){const L=g[v][D+1],R=g[v][D],N=g[v+1][D],P=g[v+1][D+1];(v!==0||f>0)&&x.push(L,R,P),(v!==s-1||m<Math.PI)&&x.push(R,N,P)}this.setIndex(x),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tu extends Vn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new H,_=new H,y=new H;for(let x=0;x<=s;x++)for(let E=0;E<=l;E++){const T=E/l*c,S=x/s*Math.PI*2;_.x=(t+i*Math.cos(S))*Math.cos(T),_.y=(t+i*Math.cos(S))*Math.sin(T),_.z=i*Math.sin(S),h.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),y.subVectors(_,g).normalize(),m.push(y.x,y.y,y.z),p.push(E/l),p.push(x/s)}for(let x=1;x<=s;x++)for(let E=1;E<=l;E++){const T=(l+1)*x+E-1,S=(l+1)*(x-1)+E-1,v=(l+1)*(x-1)+E,D=(l+1)*x+E;f.push(T,S,D),f.push(S,v,D)}this.setIndex(f),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(m,3)),this.setAttribute("uv",new en(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class HM extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class GM extends kr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class VM extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kM extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tx extends Sn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Wh=new tn,I_=new H,B_=new H;class XM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;I_.setFromMatrixPosition(t.matrixWorld),i.position.copy(I_),B_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(B_),i.updateMatrixWorld(),Wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends Zv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WM extends XM{constructor(){super(new xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends tx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new WM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class qM extends tx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class YM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const G_=new tn;class V_{constructor(t,i,s=0,l=1/0){this.ray=new au(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Re("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return G_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(G_),this}intersectObject(t,i=!0,s=[]){return Yd(t,this,s,i),s.sort(k_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Yd(t[l],this,s,i);return s.sort(k_),s}}function k_(r,t){return r.distance-t.distance}function Yd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Yd(c[f],t,i,!0)}}class X_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jM extends IM{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,f=t/i,h=t/2,m=[],p=[];for(let y=0,x=0,E=-h;y<=i;y++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const T=y===c?s:l;T.toArray(p,x),x+=3,T.toArray(p,x),x+=3,T.toArray(p,x),x+=3,T.toArray(p,x),x+=3}const g=new Vn;g.setAttribute("position",new en(m,3)),g.setAttribute("color",new en(p,3));const _=new mp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const W_=new H;let Fc,qh;class Yh extends Sn{constructor(t=new H(0,0,1),i=new H(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",Fc===void 0&&(Fc=new Vn,Fc.setAttribute("position",new en([0,0,0,0,1,0],3)),qh=new _p(.5,1,5,1),qh.translate(0,-.5,0)),this.position.copy(i),this.line=new Jv(Fc,new mp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Si(qh,new su({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{W_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(W_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ZM extends Ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function q_(r,t,i,s){const l=KM(s);switch(i){case Bv:return r*t;case Gv:return r*t/l.components*l.byteLength;case op:return r*t/l.components*l.byteLength;case Hr:return r*t*2/l.components*l.byteLength;case lp:return r*t*2/l.components*l.byteLength;case Hv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case cp:return r*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:case _d:return Math.max(r,16)*Math.max(t,8)/4;case pd:case gd:return Math.max(r,8)*Math.max(t,8)/2;case vd:case xd:case Sd:case Md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yd:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bd:case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KM(r){switch(r){case oi:case Pv:return{byteLength:1,components:1};case Jo:case zv:case Ma:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case Wi:case ap:case Hi:return{byteLength:4,components:1};case Fv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function QM(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<_.length;x++){const E=_[y],T=_[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,_[y]=T)}_.length=y+1;for(let x=0,E=_.length;x<E;x++){const T=_[x];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
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
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
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
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fE=`#ifdef USE_IRIDESCENCE
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
#endif`,hE=`#ifdef USE_BUMPMAP
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
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SE=`#define PI 3.141592653589793
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
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`vec3 transformedNormal = objectNormal;
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
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kE=`uniform bool receiveShadow;
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
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
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
#endif`,KE=`uniform sampler2D dfgLUT;
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
}`,QE=`
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
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
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ob=`#if defined( USE_POINTS_UV )
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
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
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
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zb=`float getShadowMask() {
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,S1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,E1=`#define TOON
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
}`,b1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:JM,alphahash_pars_fragment:$M,alphamap_fragment:tE,alphamap_pars_fragment:eE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:rE,batching_vertex:oE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:fE,bumpmap_pars_fragment:hE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:_E,color_pars_fragment:vE,color_pars_vertex:xE,color_vertex:yE,common:SE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:EE,displacementmap_pars_vertex:bE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:RE,colorspace_fragment:CE,colorspace_pars_fragment:wE,envmap_fragment:DE,envmap_common_pars_fragment:UE,envmap_pars_fragment:LE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:XE,envmap_vertex:OE,fog_vertex:PE,fog_pars_vertex:zE,fog_fragment:FE,fog_pars_fragment:IE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:HE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:VE,lights_pars_begin:kE,lights_toon_fragment:WE,lights_toon_pars_fragment:qE,lights_phong_fragment:YE,lights_phong_pars_fragment:jE,lights_physical_fragment:ZE,lights_physical_pars_fragment:KE,lights_fragment_begin:QE,lights_fragment_maps:JE,lights_fragment_end:$E,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:ab,map_pars_fragment:sb,map_particle_fragment:rb,map_particle_pars_fragment:ob,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:fb,morphnormal_vertex:hb,morphtarget_pars_vertex:db,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:vb,normal_vertex:xb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:bb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:Rb,project_vertex:Cb,dithering_fragment:wb,dithering_pars_fragment:Db,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ob,shadowmap_vertex:Pb,shadowmask_pars_fragment:zb,skinbase_vertex:Fb,skinning_pars_vertex:Ib,skinning_vertex:Bb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:kb,tonemapping_pars_fragment:Xb,transmission_fragment:Wb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:jb,uv_vertex:Zb,worldpos_vertex:Kb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:$b,backgroundCube_frag:t1,cube_vert:e1,cube_frag:n1,depth_vert:i1,depth_frag:a1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:f1,meshbasic_frag:h1,meshlambert_vert:d1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:_1,meshnormal_frag:v1,meshphong_vert:x1,meshphong_frag:y1,meshphysical_vert:S1,meshphysical_frag:M1,meshtoon_vert:E1,meshtoon_frag:b1,points_vert:T1,points_frag:A1,shadow_vert:R1,shadow_frag:C1,sprite_vert:w1,sprite_frag:D1},Ft={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new be(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Hn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Hn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new be(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Hn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Hn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Hn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Hn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Hn([Ft.common,Ft.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Hn([Ft.lights,Ft.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Ic={r:0,b:0,g:0},Cs=new qi,U1=new tn;function L1(r,t,i,s,l,c,f){const h=new be(0);let m=c===!0?0:1,p,g,_=null,y=0,x=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:t).get(R)),R}function T(L){let R=!1;const N=E(L);N===null?v(h,m):N&&N.isColor&&(v(N,1),R=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===nu)?(g===void 0&&(g=new Si(new al(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Vr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(R.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Cs)),g.material.toneMapped=Ce.getTransfer(N.colorSpace)!==Ge,(_!==N||y!==N.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,_=N,y=N.version,x=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Si(new ru(2,2),new Yi({name:"BackgroundMaterial",uniforms:Vr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||y!==N.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,y=N.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,R){L.getRGB(Ic,jv(r)),s.buffers.color.setClear(Ic.r,Ic.g,Ic.b,R,f)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,R=1){h.set(L),m=R,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:T,addToRenderList:S,dispose:D}}function N1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function h(U,G,Z,q,nt){let it=!1;const F=_(q,Z,G);c!==F&&(c=F,p(c.object)),it=x(U,q,Z,nt),it&&E(U,q,Z,nt),nt!==null&&t.update(nt,r.ELEMENT_ARRAY_BUFFER),(it||f)&&(f=!1,R(U,G,Z,q),nt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function _(U,G,Z){const q=Z.wireframe===!0;let nt=s[U.id];nt===void 0&&(nt={},s[U.id]=nt);let it=nt[G.id];it===void 0&&(it={},nt[G.id]=it);let F=it[q];return F===void 0&&(F=y(m()),it[q]=F),F}function y(U){const G=[],Z=[],q=[];for(let nt=0;nt<i;nt++)G[nt]=0,Z[nt]=0,q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:q,object:U,attributes:{},index:null}}function x(U,G,Z,q){const nt=c.attributes,it=G.attributes;let F=0;const B=Z.getAttributes();for(const tt in B)if(B[tt].location>=0){const _t=nt[tt];let z=it[tt];if(z===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),_t===void 0||_t.attribute!==z||z&&_t.data!==z.data)return!0;F++}return c.attributesNum!==F||c.index!==q}function E(U,G,Z,q){const nt={},it=G.attributes;let F=0;const B=Z.getAttributes();for(const tt in B)if(B[tt].location>=0){let _t=it[tt];_t===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(_t=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(_t=U.instanceColor));const z={};z.attribute=_t,_t&&_t.data&&(z.data=_t.data),nt[tt]=z,F++}c.attributes=nt,c.attributesNum=F,c.index=q}function T(){const U=c.newAttributes;for(let G=0,Z=U.length;G<Z;G++)U[G]=0}function S(U){v(U,0)}function v(U,G){const Z=c.newAttributes,q=c.enabledAttributes,nt=c.attributeDivisors;Z[U]=1,q[U]===0&&(r.enableVertexAttribArray(U),q[U]=1),nt[U]!==G&&(r.vertexAttribDivisor(U,G),nt[U]=G)}function D(){const U=c.newAttributes,G=c.enabledAttributes;for(let Z=0,q=G.length;Z<q;Z++)G[Z]!==U[Z]&&(r.disableVertexAttribArray(Z),G[Z]=0)}function L(U,G,Z,q,nt,it,F){F===!0?r.vertexAttribIPointer(U,G,Z,nt,it):r.vertexAttribPointer(U,G,Z,q,nt,it)}function R(U,G,Z,q){T();const nt=q.attributes,it=Z.getAttributes(),F=G.defaultAttributeValues;for(const B in it){const tt=it[B];if(tt.location>=0){let Mt=nt[B];if(Mt===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor)),Mt!==void 0){const _t=Mt.normalized,z=Mt.itemSize,J=t.get(Mt);if(J===void 0)continue;const pt=J.buffer,Dt=J.type,It=J.bytesPerElement,et=Dt===r.INT||Dt===r.UNSIGNED_INT||Mt.gpuType===ap;if(Mt.isInterleavedBufferAttribute){const ht=Mt.data,Ot=ht.stride,Gt=Mt.offset;if(ht.isInstancedInterleavedBuffer){for(let Bt=0;Bt<tt.locationSize;Bt++)v(tt.location+Bt,ht.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Bt=0;Bt<tt.locationSize;Bt++)S(tt.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Bt=0;Bt<tt.locationSize;Bt++)L(tt.location+Bt,z/tt.locationSize,Dt,_t,Ot*It,(Gt+z/tt.locationSize*Bt)*It,et)}else{if(Mt.isInstancedBufferAttribute){for(let ht=0;ht<tt.locationSize;ht++)v(tt.location+ht,Mt.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ht=0;ht<tt.locationSize;ht++)S(tt.location+ht);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ht=0;ht<tt.locationSize;ht++)L(tt.location+ht,z/tt.locationSize,Dt,_t,z*It,z/tt.locationSize*ht*It,et)}}else if(F!==void 0){const _t=F[B];if(_t!==void 0)switch(_t.length){case 2:r.vertexAttrib2fv(tt.location,_t);break;case 3:r.vertexAttrib3fv(tt.location,_t);break;case 4:r.vertexAttrib4fv(tt.location,_t);break;default:r.vertexAttrib1fv(tt.location,_t)}}}}D()}function N(){W();for(const U in s){const G=s[U];for(const Z in G){const q=G[Z];for(const nt in q)g(q[nt].object),delete q[nt];delete G[Z]}delete s[U]}}function P(U){if(s[U.id]===void 0)return;const G=s[U.id];for(const Z in G){const q=G[Z];for(const nt in q)g(q[nt].object),delete q[nt];delete G[Z]}delete s[U.id]}function O(U){for(const G in s){const Z=s[G];if(Z[U.id]===void 0)continue;const q=Z[U.id];for(const nt in q)g(q[nt].object),delete q[nt];delete Z[U.id]}}function W(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function O1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];i.update(x,s,1)}function m(p,g,_,y){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)f(p[E],g[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function P1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const W=O===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==oi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!W)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(se("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,maxSamples:N,samples:P}}function z1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new _a,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||s!==0||l;return l=y,s=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,x){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const D=c?0:s,L=D*4;let R=v.clippingState||null;m.value=R,R=g(E,y,L,x);for(let N=0;N!==L;++N)R[N]=i[N];v.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,y,x,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const v=x+T*4,D=y.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,R=x;L!==T;++L,R+=4)f.copy(_[L]).applyMatrix4(D,h),f.normal.toArray(S,R),S[R+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function F1(r){let t=new WeakMap;function i(f,h){return h===ud?f.mapping=Os:h===fd&&(f.mapping=Br),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ud||h===fd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Qv(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const is=4,Y_=[.125,.215,.35,.446,.526,.582],Us=20,I1=256,qo=new xp,j_=new be;let jh=null,Zh=0,Kh=0,Qh=!1;const B1=new H;class Z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=B1}=c;jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Zh,Kh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ma,format:Li,colorSpace:Gr,depthBuffer:!1},l=K_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H1(c)),this._blurMaterial=V1(c,t,i),this._ggxMaterial=G1(c,t,i)}return l}_compileMaterial(t){const i=new Si(new Vn,t);this._renderer.compile(i,qo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(j_),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new al,new su({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let v=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,v=!0):(S.color.copy(j_),v=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):R===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const N=this._cubeSize;Ur(l,R*N,L>2?N:0,N,N),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=x,_.autoClear=y,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Os||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),y=0+p*1.25,x=_*y,{_lodMax:E}=this,T=this._sizeLods[s],S=3*T*(s>E-is?s-E+is:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-i,Ur(c,S,v,3*T,2*T),l.setRenderTarget(c),l.render(h,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ur(t,S,v,3*T,2*T),l.setRenderTarget(t),l.render(h,qo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const y=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Us-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Us;S>Us&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Us}`);const v=[];let D=0;for(let O=0;O<Us;++O){const W=O/T,A=Math.exp(-W*W/2);v.push(A),O===0?D+=A:O<S&&(D+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/D;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const R=this._sizeLods[l],N=3*R*(l>L-is?l-L+is:0),P=4*(this._cubeSize-R);Ur(i,N,P,3*R,2*R),m.setRenderTarget(i),m.render(_,qo)}}function H1(r){const t=[],i=[],s=[];let l=r;const c=r-is+1+Y_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-is?m=Y_[f-r+is-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,T=3,S=2,v=1,D=new Float32Array(T*E*x),L=new Float32Array(S*E*x),R=new Float32Array(v*E*x);for(let P=0;P<x;P++){const O=P%3*2/3-1,W=P>2?0:-1,A=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];D.set(A,T*E*P),L.set(y,S*E*P);const U=[P,P,P,P,P,P];R.set(U,v*E*P)}const N=new Vn;N.setAttribute("position",new Xi(D,T)),N.setAttribute("uv",new Xi(L,S)),N.setAttribute("faceIndex",new Xi(R,v)),s.push(new Si(N,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function K_(r,t,i){const s=new ki(r,t,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function G1(r,t,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function V1(r,t,i){const s=new Float32Array(Us),l=new H(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Q_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function J_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function k1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===ud||m===fd,g=m===Os||m===Br;if(p||g){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&l(x)?(i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function X1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function W1(r,t,i,s){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const x in y)t.update(y[x],r.ARRAY_BUFFER)}function p(_){const y=[],x=_.index,E=_.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let L=0,R=D.length;L<R;L+=3){const N=D[L+0],P=D[L+1],O=D[L+2];y.push(N,P,P,O,O,N)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const N=L+0,P=L+1,O=L+2;y.push(N,P,P,O,O,N)}}else return;const S=new(kv(y)?Yv:qv)(y,1);S.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const y=c.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function q1(r,t,i){let s;function l(y){s=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,x){r.drawElements(s,x,c,y*f),i.update(x,s,1)}function p(y,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,y*f,E),i.update(x,s,E))}function g(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,E);let S=0;for(let v=0;v<E;v++)S+=x[v];i.update(S,s,1)}function _(y,x,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)p(y[v]/f,x[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,x,0,c,y,0,T,0,E);let v=0;for(let D=0;D<E;D++)v+=x[D]*T[D];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Y1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Re("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function j1(r,t,i){const s=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let y=s.get(h);if(y===void 0||y.count!==_){let U=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var x=U;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let N=h.attributes.position.count*R,P=1;N>t.maxTextureSize&&(P=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*P*4*_),W=new Xv(O,N,P,_);W.type=Hi,W.needsUpdate=!0;const A=R*4;for(let G=0;G<_;G++){const Z=v[G],q=D[G],nt=L[G],it=N*P*4*G;for(let F=0;F<Z.count;F++){const B=F*A;E===!0&&(l.fromBufferAttribute(Z,F),O[it+B+0]=l.x,O[it+B+1]=l.y,O[it+B+2]=l.z,O[it+B+3]=0),T===!0&&(l.fromBufferAttribute(q,F),O[it+B+4]=l.x,O[it+B+5]=l.y,O[it+B+6]=l.z,O[it+B+7]=0),S===!0&&(l.fromBufferAttribute(nt,F),O[it+B+8]=l.x,O[it+B+9]=l.y,O[it+B+10]=l.z,O[it+B+11]=nt.itemSize===4?l.w:1)}}y={count:_,texture:W,size:new ce(N,P)},s.set(h,y),h.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function Z1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const K1={[Rv]:"LINEAR_TONE_MAPPING",[Cv]:"REINHARD_TONE_MAPPING",[wv]:"CINEON_TONE_MAPPING",[Dv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Nv]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function Q1(r,t,i,s,l){const c=new ki(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ki(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),h=new Vn;h.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new en([0,2,0,0,2,0],2));const m=new HM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Si(h,m),g=new xp(-1,1,1,-1,0,1);let _=null,y=null,x=!1,E,T=null,S=[],v=!1;this.setSize=function(D,L){c.setSize(D,L),f.setSize(D,L);for(let R=0;R<S.length;R++){const N=S[R];N.setSize&&N.setSize(D,L)}},this.setEffects=function(D){S=D,v=S.length>0&&S[0].isRenderPass===!0;const L=c.width,R=c.height;for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(L,R)}},this.begin=function(D,L){if(x||D.toneMapping===Vi&&S.length===0)return!1;if(T=L,L!==null){const R=L.width,N=L.height;(c.width!==R||c.height!==N)&&this.setSize(R,N)}return v===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Vi,!0},this.hasRenderPass=function(){return v},this.end=function(D,L){D.toneMapping=E,x=!0;let R=c,N=f;for(let P=0;P<S.length;P++){const O=S[P];if(O.enabled!==!1&&(O.render(D,N,R,L),O.needsSwap!==!1)){const W=R;R=N,N=W}}if(_!==D.outputColorSpace||y!==D.toneMapping){_=D.outputColorSpace,y=D.toneMapping,m.defines={},Ce.getTransfer(_)===Ge&&(m.defines.SRGB_TRANSFER="");const P=K1[y];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=R.texture,D.setRenderTarget(T),D.render(p,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const nx=new Gn,jd=new el(1,1),ix=new Xv,ax=new mM,sx=new Kv,$_=[],tv=[],ev=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Xr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=$_[l];if(c===void 0&&(c=new Float32Array(l),$_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function lu(r,t){let i=tv[t];i===void 0&&(i=new Int32Array(t),tv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function J1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function $1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function nT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;iv.set(s),r.uniformMatrix2fv(this.addr,!1,iv),vn(i,s)}}function iT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;nv.set(s),r.uniformMatrix3fv(this.addr,!1,nv),vn(i,s)}}function aT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;ev.set(s),r.uniformMatrix4fv(this.addr,!1,ev),vn(i,s)}}function sT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function cT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function dT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jd.compareFunction=i.isReversedDepthBuffer()?fp:up,c=jd):c=nx,i.setTexture2D(t||c,l)}function pT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ax,l)}function mT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||sx,l)}function gT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ix,l)}function _T(r){switch(r){case 5126:return J1;case 35664:return $1;case 35665:return tT;case 35666:return eT;case 35674:return nT;case 35675:return iT;case 35676:return aT;case 5124:case 35670:return sT;case 35667:case 35671:return rT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(r,t){r.uniform1fv(this.addr,t)}function xT(r,t){const i=Xr(t,this.size,2);r.uniform2fv(this.addr,i)}function yT(r,t){const i=Xr(t,this.size,3);r.uniform3fv(this.addr,i)}function ST(r,t){const i=Xr(t,this.size,4);r.uniform4fv(this.addr,i)}function MT(r,t){const i=Xr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ET(r,t){const i=Xr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function bT(r,t){const i=Xr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function TT(r,t){r.uniform1iv(this.addr,t)}function AT(r,t){r.uniform2iv(this.addr,t)}function RT(r,t){r.uniform3iv(this.addr,t)}function CT(r,t){r.uniform4iv(this.addr,t)}function wT(r,t){r.uniform1uiv(this.addr,t)}function DT(r,t){r.uniform2uiv(this.addr,t)}function UT(r,t){r.uniform3uiv(this.addr,t)}function LT(r,t){r.uniform4uiv(this.addr,t)}function NT(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=jd:f=nx;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function OT(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ax,c[f])}function PT(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||sx,c[f])}function zT(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ix,c[f])}function FT(r){switch(r){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return bT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return wT;case 36294:return DT;case 36295:return UT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}class IT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=_T(i.type)}}class BT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FT(i.type)}}class HT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function av(r,t){r.seq.push(t),r.map[t.id]=t}function GT(r,t,i){const s=r.name,l=s.length;for(Jh.lastIndex=0;;){const c=Jh.exec(s),f=Jh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){av(i,p===void 0?new IT(h,r,t):new BT(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new HT(h),av(i,_)),i=_}}}class Yc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);GT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function sv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const VT=37297;let kT=0;function XT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const rv=new pe;function WT(r){Ce._getMatrix(rv,Ce.workingColorSpace,r);const t=`mat3( ${rv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Zc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ov(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+XT(r.getShaderSource(t),h)}else return c}function qT(r,t){const i=WT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const YT={[Rv]:"Linear",[Cv]:"Reinhard",[wv]:"Cineon",[Dv]:"ACESFilmic",[Lv]:"AgX",[Nv]:"Neutral",[Uv]:"Custom"};function jT(r,t){const i=YT[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new H;function ZT(){Ce.getLuminanceCoefficients(Bc);const r=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function QT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function JT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Qo(r){return r!==""}function lv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(r){return r.replace($T,eA)}const tA=new Map;function eA(r,t){let i=me[t];if(i===void 0){const s=tA.get(t);if(s!==void 0)i=me[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zd(i)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(nA,iA)}function iA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const aA={[Gc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function sA(r){return aA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rA={[Os]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function oA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const lA={[Br]:"ENVMAP_MODE_REFRACTION"};function cA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uA={[Av]:"ENVMAP_BLENDING_MULTIPLY",[ZS]:"ENVMAP_BLENDING_MIX",[KS]:"ENVMAP_BLENDING_ADD"};function fA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":uA[r.combine]||"ENVMAP_BLENDING_NONE"}function hA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function dA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=sA(i),p=oA(i),g=cA(i),_=fA(i),y=hA(i),x=KT(i),E=QT(c),T=l.createProgram();let S,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(S=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?me.tonemapping_pars_fragment:"",i.toneMapping!==Vi?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,qT("linearToOutputTexel",i.outputColorSpace),ZT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=Zd(f),f=lv(f,i),f=cv(f,i),h=Zd(h),h=lv(h,i),h=cv(h,i),f=uv(f),h=uv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+S+f,R=D+v+h,N=sv(l,l.VERTEX_SHADER,L),P=sv(l,l.FRAGMENT_SHADER,R);l.attachShader(T,N),l.attachShader(T,P),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(G){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",q=l.getShaderInfoLog(N)||"",nt=l.getShaderInfoLog(P)||"",it=Z.trim(),F=q.trim(),B=nt.trim();let tt=!0,Mt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,N,P);else{const _t=ov(l,N,"vertex"),z=ov(l,P,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+it+`
`+_t+`
`+z)}else it!==""?se("WebGLProgram: Program Info Log:",it):(F===""||B==="")&&(Mt=!1);Mt&&(G.diagnostics={runnable:tt,programLog:it,vertexShader:{log:F,prefix:S},fragmentShader:{log:B,prefix:v}})}l.deleteShader(N),l.deleteShader(P),W=new Yc(l,T),A=JT(l,T)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,VT)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=P,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new gA(t),i.set(t,s)),s}}class gA{constructor(t){this.id=pA++,this.code=t,this.usedTimes=0}}function _A(r,t,i,s,l,c,f){const h=new dp,m=new mA,p=new Set,g=[],_=new Map,y=l.logarithmicDepthBuffer;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function S(A,U,G,Z,q){const nt=Z.fog,it=q.geometry,F=A.isMeshStandardMaterial?Z.environment:null,B=(A.isMeshStandardMaterial?i:t).get(A.envMap||F),tt=B&&B.mapping===nu?B.image.height:null,Mt=E[A.type];A.precision!==null&&(x=l.getMaxPrecision(A.precision),x!==A.precision&&se("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const _t=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,z=_t!==void 0?_t.length:0;let J=0;it.morphAttributes.position!==void 0&&(J=1),it.morphAttributes.normal!==void 0&&(J=2),it.morphAttributes.color!==void 0&&(J=3);let pt,Dt,It,et;if(Mt){const Ae=Bi[Mt];pt=Ae.vertexShader,Dt=Ae.fragmentShader}else pt=A.vertexShader,Dt=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),et=m.getFragmentShaderID(A);const ht=r.getRenderTarget(),Ot=r.state.buffers.depth.getReversed(),Gt=q.isInstancedMesh===!0,Bt=q.isBatchedMesh===!0,ae=!!A.map,Le=!!A.matcap,ge=!!B,he=!!A.aoMap,Te=!!A.lightMap,oe=!!A.bumpMap,Qe=!!A.normalMap,X=!!A.displacementMap,Ye=!!A.emissiveMap,ye=!!A.metalnessMap,we=!!A.roughnessMap,Xt=A.anisotropy>0,I=A.clearcoat>0,b=A.dispersion>0,j=A.iridescence>0,gt=A.sheen>0,bt=A.transmission>0,ft=Xt&&!!A.anisotropyMap,Yt=I&&!!A.clearcoatMap,Nt=I&&!!A.clearcoatNormalMap,Wt=I&&!!A.clearcoatRoughnessMap,ee=j&&!!A.iridescenceMap,Rt=j&&!!A.iridescenceThicknessMap,wt=gt&&!!A.sheenColorMap,rt=gt&&!!A.sheenRoughnessMap,vt=!!A.specularMap,St=!!A.specularColorMap,qt=!!A.specularIntensityMap,k=bt&&!!A.transmissionMap,Ut=bt&&!!A.thicknessMap,Tt=!!A.gradientMap,Lt=!!A.alphaMap,xt=A.alphaTest>0,dt=!!A.alphaHash,Ct=!!A.extensions;let re=Vi;A.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(re=r.toneMapping);const Fe={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:pt,fragmentShader:Dt,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:et,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Bt,batchingColor:Bt&&q._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&q.instanceColor!==null,instancingMorph:Gt&&q.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Gr,alphaToCoverage:!!A.alphaToCoverage,map:ae,matcap:Le,envMap:ge,envMapMode:ge&&B.mapping,envMapCubeUVHeight:tt,aoMap:he,lightMap:Te,bumpMap:oe,normalMap:Qe,displacementMap:X,emissiveMap:Ye,normalMapObjectSpace:Qe&&A.normalMapType===$S,normalMapTangentSpace:Qe&&A.normalMapType===Vv,metalnessMap:ye,roughnessMap:we,anisotropy:Xt,anisotropyMap:ft,clearcoat:I,clearcoatMap:Yt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:j,iridescenceMap:ee,iridescenceThicknessMap:Rt,sheen:gt,sheenColorMap:wt,sheenRoughnessMap:rt,specularMap:vt,specularColorMap:St,specularIntensityMap:qt,transmission:bt,transmissionMap:k,thicknessMap:Ut,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===zr&&A.alphaToCoverage===!1,alphaMap:Lt,alphaTest:xt,alphaHash:dt,combine:A.combine,mapUv:ae&&T(A.map.channel),aoMapUv:he&&T(A.aoMap.channel),lightMapUv:Te&&T(A.lightMap.channel),bumpMapUv:oe&&T(A.bumpMap.channel),normalMapUv:Qe&&T(A.normalMap.channel),displacementMapUv:X&&T(A.displacementMap.channel),emissiveMapUv:Ye&&T(A.emissiveMap.channel),metalnessMapUv:ye&&T(A.metalnessMap.channel),roughnessMapUv:we&&T(A.roughnessMap.channel),anisotropyMapUv:ft&&T(A.anisotropyMap.channel),clearcoatMapUv:Yt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:rt&&T(A.sheenRoughnessMap.channel),specularMapUv:vt&&T(A.specularMap.channel),specularColorMapUv:St&&T(A.specularColorMap.channel),specularIntensityMapUv:qt&&T(A.specularIntensityMap.channel),transmissionMapUv:k&&T(A.transmissionMap.channel),thicknessMapUv:Ut&&T(A.thicknessMap.channel),alphaMapUv:Lt&&T(A.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Qe||Xt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!it.attributes.uv&&(ae||Lt),fog:!!nt,useFog:A.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ot,skinning:q.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:J,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ae&&A.map.isVideoTexture===!0&&Ce.getTransfer(A.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ye&&A.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(A.emissiveMap.colorSpace)===Ge,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===va,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ct&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&A.extensions.multiDraw===!0||Bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)U.push(G),U.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(D(U,A),L(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function D(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function L(A,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),A.push(h.mask)}function R(A){const U=E[A.type];let G;if(U){const Z=Bi[U];G=CM.clone(Z.uniforms)}else G=A.uniforms;return G}function N(A,U){let G=_.get(U);return G!==void 0?++G.usedTimes:(G=new dA(r,U,A,c),g.push(G),_.set(U,G)),G}function P(A){if(--A.usedTimes===0){const U=g.indexOf(A);g[U]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function O(A){m.remove(A)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:R,acquireProgram:N,releaseProgram:P,releaseShaderCache:O,programs:g,dispose:W}}function vA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function xA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function dv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,y,x,E,T,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:x,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=x,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=S),t++,v}function h(_,y,x,E,T,S){const v=f(_,y,x,E,T,S);x.transmission>0?s.push(v):x.transparent===!0?l.push(v):i.push(v)}function m(_,y,x,E,T,S){const v=f(_,y,x,E,T,S);x.transmission>0?s.unshift(v):x.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,y){i.length>1&&i.sort(_||xA),s.length>1&&s.sort(y||hv),l.length>1&&l.sort(y||hv)}function g(){for(let _=t,y=r.length;_<y;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function yA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new dv,r.set(s,[f])):l>=c.length?(f=new dv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new H,color:new be};break;case"SpotLight":i={position:new H,direction:new H,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new H,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new H,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=i,i}}}function MA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let EA=0;function bA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TA(r){const t=new SA,i=MA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new H);const l=new H,c=new tn,f=new tn;function h(p){let g=0,_=0,y=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let x=0,E=0,T=0,S=0,v=0,D=0,L=0,R=0,N=0,P=0,O=0;p.sort(bA);for(let A=0,U=p.length;A<U;A++){const G=p[A],Z=G.color,q=G.intensity,nt=G.distance;let it=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Hr?it=G.shadow.map.texture:it=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Z.r*q,_+=Z.g*q,y+=Z.b*q;else if(G.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(G.sh.coefficients[F],q);O++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,tt=i.get(G);tt.shadowIntensity=B.intensity,tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,s.directionalShadow[x]=tt,s.directionalShadowMap[x]=it,s.directionalShadowMatrix[x]=G.shadow.matrix,D++}s.directional[x]=F,x++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(Z).multiplyScalar(q),F.distance=nt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,s.spot[T]=F;const B=G.shadow;if(G.map&&(s.spotLightMap[N]=G.map,N++,B.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[T]=B.matrix,G.castShadow){const tt=i.get(G);tt.shadowIntensity=B.intensity,tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,s.spotShadow[T]=tt,s.spotShadowMap[T]=it,R++}T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(Z).multiplyScalar(q),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=F,S++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const B=G.shadow,tt=i.get(G);tt.shadowIntensity=B.intensity,tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,tt.shadowCameraNear=B.camera.near,tt.shadowCameraFar=B.camera.far,s.pointShadow[E]=tt,s.pointShadowMap[E]=it,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=F,E++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(q),F.groundColor.copy(G.groundColor).multiplyScalar(q),s.hemi[v]=F,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=y;const W=s.hash;(W.directionalLength!==x||W.pointLength!==E||W.spotLength!==T||W.rectAreaLength!==S||W.hemiLength!==v||W.numDirectionalShadows!==D||W.numPointShadows!==L||W.numSpotShadows!==R||W.numSpotMaps!==N||W.numLightProbes!==O)&&(s.directional.length=x,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+N-P,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=O,W.directionalLength=x,W.pointLength=E,W.spotLength=T,W.rectAreaLength=S,W.hemiLength=v,W.numDirectionalShadows=D,W.numPointShadows=L,W.numSpotShadows=R,W.numSpotMaps=N,W.numLightProbes=O,s.version=EA++)}function m(p,g){let _=0,y=0,x=0,E=0,T=0;const S=g.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const L=p[v];if(L.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),_++}else if(L.isSpotLight){const R=s.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function pv(r){const t=new TA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function AA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new pv(r),t.set(l,[h])):c>=f.length?(h=new pv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`,wA=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],DA=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],mv=new tn,Yo=new H,$h=new H;function UA(r,t,i){let s=new pp;const l=new ce,c=new ce,f=new sn,h=new VM,m=new kM,p={},g=i.maxTextureSize,_={[as]:Qn,[Qn]:as,[va]:va},y=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:RA,fragmentShader:CA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new Vn;E.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Si(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let v=this.type;this.render=function(P,O,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;P.type===DS&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Gc);const A=r.getRenderTarget(),U=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ya),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=v!==this.type;q&&O.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(it=>it.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,it=P.length;nt<it;nt++){const F=P[nt],B=F.shadow;if(B===void 0){se("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const tt=B.getFrameExtents();if(l.multiply(tt),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/tt.x),l.x=c.x*tt.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/tt.y),l.y=c.y*tt.y,B.mapSize.y=c.y)),B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ko){if(F.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ki(l.x,l.y,{format:Hr,type:Ma,minFilter:In,magFilter:In,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new el(l.x,l.y,Hi),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Ea,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln}else{F.isPointLight?(B.map=new Qv(l.x),B.map.depthTexture=new BM(l.x,Wi)):(B.map=new ki(l.x,l.y),B.map.depthTexture=new el(l.x,l.y,Wi)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Ea;const _t=r.state.buffers.depth.getReversed();this.type===Gc?(B.map.depthTexture.compareFunction=_t?fp:up,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln)}B.camera.updateProjectionMatrix()}const Mt=B.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<Mt;_t++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,_t),r.clear();else{_t===0&&(r.setRenderTarget(B.map),r.clear());const z=B.getViewport(_t);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),Z.viewport(f)}if(F.isPointLight){const z=B.camera,J=B.matrix,pt=F.distance||z.far;pt!==z.far&&(z.far=pt,z.updateProjectionMatrix()),Yo.setFromMatrixPosition(F.matrixWorld),z.position.copy(Yo),$h.copy(z.position),$h.add(wA[_t]),z.up.copy(DA[_t]),z.lookAt($h),z.updateMatrixWorld(),J.makeTranslation(-Yo.x,-Yo.y,-Yo.z),mv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(mv,z.coordinateSystem,z.reversedDepth)}else B.updateMatrices(F);s=B.getFrustum(),R(O,W,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===Ko&&D(B,W),B.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(A,U,G)};function D(P,O){const W=t.update(T);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ki(l.x,l.y,{format:Hr,type:Ma})),y.uniforms.shadow_pass.value=P.map.depthTexture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(O,null,W,y,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(O,null,W,x,T,null)}function L(P,O,W,A){let U=null;const G=W.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)U=G;else if(U=W.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=U.uuid,q=O.uuid;let nt=p[Z];nt===void 0&&(nt={},p[Z]=nt);let it=nt[q];it===void 0&&(it=U.clone(),nt[q]=it,O.addEventListener("dispose",N)),U=it}if(U.visible=O.visible,U.wireframe=O.wireframe,A===Ko?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:_[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,W.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const Z=r.properties.get(U);Z.light=W}return U}function R(P,O,W,A,U){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&U===Ko)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld);const q=t.update(P),nt=P.material;if(Array.isArray(nt)){const it=q.groups;for(let F=0,B=it.length;F<B;F++){const tt=it[F],Mt=nt[tt.materialIndex];if(Mt&&Mt.visible){const _t=L(P,Mt,A,U);P.onBeforeShadow(r,P,O,W,q,_t,tt),r.renderBufferDirect(W,null,q,_t,P,tt),P.onAfterShadow(r,P,O,W,q,_t,tt)}}}else if(nt.visible){const it=L(P,nt,A,U);P.onBeforeShadow(r,P,O,W,q,it,null),r.renderBufferDirect(W,null,q,it,P,null),P.onAfterShadow(r,P,O,W,q,it,null)}}const Z=P.children;for(let q=0,nt=Z.length;q<nt;q++)R(Z[q],O,W,A,U)}function N(P){P.target.removeEventListener("dispose",N);for(const W in p){const A=p[W],U=P.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const LA={[id]:ad,[sd]:ld,[rd]:cd,[Ir]:od,[ad]:id,[ld]:sd,[cd]:rd,[od]:Ir};function NA(r,t){function i(){let k=!1;const Ut=new sn;let Tt=null;const Lt=new sn(0,0,0,0);return{setMask:function(xt){Tt!==xt&&!k&&(r.colorMask(xt,xt,xt,xt),Tt=xt)},setLocked:function(xt){k=xt},setClear:function(xt,dt,Ct,re,Fe){Fe===!0&&(xt*=re,dt*=re,Ct*=re),Ut.set(xt,dt,Ct,re),Lt.equals(Ut)===!1&&(r.clearColor(xt,dt,Ct,re),Lt.copy(Ut))},reset:function(){k=!1,Tt=null,Lt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,Tt=null,Lt=null,xt=null;return{setReversed:function(dt){if(Ut!==dt){const Ct=t.get("EXT_clip_control");dt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Ut=dt;const re=xt;xt=null,this.setClear(re)}},getReversed:function(){return Ut},setTest:function(dt){dt?ht(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(dt){Tt!==dt&&!k&&(r.depthMask(dt),Tt=dt)},setFunc:function(dt){if(Ut&&(dt=LA[dt]),Lt!==dt){switch(dt){case id:r.depthFunc(r.NEVER);break;case ad:r.depthFunc(r.ALWAYS);break;case sd:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case rd:r.depthFunc(r.EQUAL);break;case od:r.depthFunc(r.GEQUAL);break;case ld:r.depthFunc(r.GREATER);break;case cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Lt=dt}},setLocked:function(dt){k=dt},setClear:function(dt){xt!==dt&&(Ut&&(dt=1-dt),r.clearDepth(dt),xt=dt)},reset:function(){k=!1,Tt=null,Lt=null,xt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Tt=null,Lt=null,xt=null,dt=null,Ct=null,re=null,Fe=null;return{setTest:function(Ae){k||(Ae?ht(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!k&&(r.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,Nn,Mi){(Tt!==Ae||Lt!==Nn||xt!==Mi)&&(r.stencilFunc(Ae,Nn,Mi),Tt=Ae,Lt=Nn,xt=Mi)},setOp:function(Ae,Nn,Mi){(dt!==Ae||Ct!==Nn||re!==Mi)&&(r.stencilOp(Ae,Nn,Mi),dt=Ae,Ct=Nn,re=Mi)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Fe!==Ae&&(r.clearStencil(Ae),Fe=Ae)},reset:function(){k=!1,Ut=null,Tt=null,Lt=null,xt=null,dt=null,Ct=null,re=null,Fe=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,x=[],E=null,T=!1,S=null,v=null,D=null,L=null,R=null,N=null,P=null,O=new be(0,0,0),W=0,A=!1,U=null,G=null,Z=null,q=null,nt=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(tt)[1]),F=B>=1):tt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),F=B>=2);let Mt=null,_t={};const z=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),pt=new sn().fromArray(z),Dt=new sn().fromArray(J);function It(k,Ut,Tt,Lt){const xt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(k,dt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<Tt;Ct++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(Ut+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return dt}const et={};et[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Ir),oe(!1),Qe(c_),ht(r.CULL_FACE),he(ya);function ht(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Ot(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Gt(k,Ut){return _[k]!==Ut?(r.bindFramebuffer(k,Ut),_[k]=Ut,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ut),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Bt(k,Ut){let Tt=x,Lt=!1;if(k){Tt=y.get(Ut),Tt===void 0&&(Tt=[],y.set(Ut,Tt));const xt=k.textures;if(Tt.length!==xt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Ct=xt.length;dt<Ct;dt++)Tt[dt]=r.COLOR_ATTACHMENT0+dt;Tt.length=xt.length,Lt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Lt=!0);Lt&&r.drawBuffers(Tt)}function ae(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const Le={[Ds]:r.FUNC_ADD,[LS]:r.FUNC_SUBTRACT,[NS]:r.FUNC_REVERSE_SUBTRACT};Le[OS]=r.MIN,Le[PS]=r.MAX;const ge={[zS]:r.ZERO,[FS]:r.ONE,[IS]:r.SRC_COLOR,[ed]:r.SRC_ALPHA,[XS]:r.SRC_ALPHA_SATURATE,[VS]:r.DST_COLOR,[HS]:r.DST_ALPHA,[BS]:r.ONE_MINUS_SRC_COLOR,[nd]:r.ONE_MINUS_SRC_ALPHA,[kS]:r.ONE_MINUS_DST_COLOR,[GS]:r.ONE_MINUS_DST_ALPHA,[WS]:r.CONSTANT_COLOR,[qS]:r.ONE_MINUS_CONSTANT_COLOR,[YS]:r.CONSTANT_ALPHA,[jS]:r.ONE_MINUS_CONSTANT_ALPHA};function he(k,Ut,Tt,Lt,xt,dt,Ct,re,Fe,Ae){if(k===ya){T===!0&&(Ot(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),k!==US){if(k!==S||Ae!==A){if((v!==Ds||R!==Ds)&&(r.blendEquation(r.FUNC_ADD),v=Ds,R=Ds),Ae)switch(k){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case u_:r.blendFunc(r.ONE,r.ONE);break;case f_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case h_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",k);break}else switch(k){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case u_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case f_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",k);break}D=null,L=null,N=null,P=null,O.set(0,0,0),W=0,S=k,A=Ae}return}xt=xt||Ut,dt=dt||Tt,Ct=Ct||Lt,(Ut!==v||xt!==R)&&(r.blendEquationSeparate(Le[Ut],Le[xt]),v=Ut,R=xt),(Tt!==D||Lt!==L||dt!==N||Ct!==P)&&(r.blendFuncSeparate(ge[Tt],ge[Lt],ge[dt],ge[Ct]),D=Tt,L=Lt,N=dt,P=Ct),(re.equals(O)===!1||Fe!==W)&&(r.blendColor(re.r,re.g,re.b,Fe),O.copy(re),W=Fe),S=k,A=!1}function Te(k,Ut){k.side===va?Ot(r.CULL_FACE):ht(r.CULL_FACE);let Tt=k.side===Qn;Ut&&(Tt=!Tt),oe(Tt),k.blending===zr&&k.transparent===!1?he(ya):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Lt=k.stencilWrite;h.setTest(Lt),Lt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){U!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),U=k)}function Qe(k){k!==CS?(ht(r.CULL_FACE),k!==G&&(k===c_?r.cullFace(r.BACK):k===wS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),G=k}function X(k){k!==Z&&(F&&r.lineWidth(k),Z=k)}function Ye(k,Ut,Tt){k?(ht(r.POLYGON_OFFSET_FILL),(q!==Ut||nt!==Tt)&&(r.polygonOffset(Ut,Tt),q=Ut,nt=Tt)):Ot(r.POLYGON_OFFSET_FILL)}function ye(k){k?ht(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function we(k){k===void 0&&(k=r.TEXTURE0+it-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function Xt(k,Ut,Tt){Tt===void 0&&(Mt===null?Tt=r.TEXTURE0+it-1:Tt=Mt);let Lt=_t[Tt];Lt===void 0&&(Lt={type:void 0,texture:void 0},_t[Tt]=Lt),(Lt.type!==k||Lt.texture!==Ut)&&(Mt!==Tt&&(r.activeTexture(Tt),Mt=Tt),r.bindTexture(k,Ut||et[k]),Lt.type=k,Lt.texture=Ut)}function I(){const k=_t[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function gt(){try{r.texSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function bt(){try{r.texSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Nt(){try{r.texStorage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Wt(){try{r.texStorage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ee(){try{r.texImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Rt(){try{r.texImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function wt(k){pt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function rt(k){Dt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function vt(k,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Lt=Tt.get(k);Lt===void 0&&(Lt=r.getUniformBlockIndex(Ut,k.name),Tt.set(k,Lt))}function St(k,Ut){const Lt=p.get(Ut).get(k);m.get(Ut)!==Lt&&(r.uniformBlockBinding(Ut,Lt,k.__bindingPointIndex),m.set(Ut,Lt))}function qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Mt=null,_t={},_={},y=new WeakMap,x=[],E=null,T=!1,S=null,v=null,D=null,L=null,R=null,N=null,P=null,O=new be(0,0,0),W=0,A=!1,U=null,G=null,Z=null,q=null,nt=null,pt.set(0,0,r.canvas.width,r.canvas.height),Dt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Ot,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:ae,setBlending:he,setMaterial:Te,setFlipSided:oe,setCullFace:Qe,setLineWidth:X,setPolygonOffset:Ye,setScissorTest:ye,activeTexture:we,bindTexture:Xt,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:ee,texImage3D:Rt,updateUBOMapping:vt,uniformBlockBinding:St,texStorage2D:Nt,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:bt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Yt,scissor:wt,viewport:rt,reset:qt}}function OA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,g=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,b){return x?new OffscreenCanvas(I,b):Qc("canvas")}function T(I,b,j){let gt=1;const bt=Xt(I);if((bt.width>j||bt.height>j)&&(gt=j/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ft=Math.floor(gt*bt.width),Yt=Math.floor(gt*bt.height);_===void 0&&(_=E(ft,Yt));const Nt=b?E(ft,Yt):_;return Nt.width=ft,Nt.height=Yt,Nt.getContext("2d").drawImage(I,0,0,ft,Yt),se("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ft+"x"+Yt+")."),Nt}else return"data"in I&&se("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),I;return I}function S(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,b,j,gt,bt=!1){if(I!==null){if(r[I]!==void 0)return r[I];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ft=b;if(b===r.RED&&(j===r.FLOAT&&(ft=r.R32F),j===r.HALF_FLOAT&&(ft=r.R16F),j===r.UNSIGNED_BYTE&&(ft=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ft=r.R8UI),j===r.UNSIGNED_SHORT&&(ft=r.R16UI),j===r.UNSIGNED_INT&&(ft=r.R32UI),j===r.BYTE&&(ft=r.R8I),j===r.SHORT&&(ft=r.R16I),j===r.INT&&(ft=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ft=r.RG32F),j===r.HALF_FLOAT&&(ft=r.RG16F),j===r.UNSIGNED_BYTE&&(ft=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ft=r.RG8UI),j===r.UNSIGNED_SHORT&&(ft=r.RG16UI),j===r.UNSIGNED_INT&&(ft=r.RG32UI),j===r.BYTE&&(ft=r.RG8I),j===r.SHORT&&(ft=r.RG16I),j===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),j===r.UNSIGNED_INT&&(ft=r.RGB32UI),j===r.BYTE&&(ft=r.RGB8I),j===r.SHORT&&(ft=r.RGB16I),j===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),j===r.UNSIGNED_INT&&(ft=r.RGBA32UI),j===r.BYTE&&(ft=r.RGBA8I),j===r.SHORT&&(ft=r.RGBA16I),j===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const Yt=bt?Zc:Ce.getTransfer(gt);j===r.FLOAT&&(ft=r.RGBA32F),j===r.HALF_FLOAT&&(ft=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ft=Yt===Ge?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function R(I,b){let j;return I?b===null||b===Wi||b===$o?j=r.DEPTH24_STENCIL8:b===Hi?j=r.DEPTH32F_STENCIL8:b===Jo&&(j=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===$o?j=r.DEPTH_COMPONENT24:b===Hi?j=r.DEPTH_COMPONENT32F:b===Jo&&(j=r.DEPTH_COMPONENT16),j}function N(I,b){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ln&&I.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),W(b),b.isVideoTexture&&g.delete(b)}function O(I){const b=I.target;b.removeEventListener("dispose",O),U(b)}function W(I){const b=s.get(I);if(b.__webglInit===void 0)return;const j=I.source,gt=y.get(j);if(gt){const bt=gt[b.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&A(I),Object.keys(gt).length===0&&y.delete(j)}s.remove(I)}function A(I){const b=s.get(I);r.deleteTexture(b.__webglTexture);const j=I.source,gt=y.get(j);delete gt[b.__cacheKey],f.memory.textures--}function U(I){const b=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let bt=0;bt<b.__webglFramebuffer[gt].length;bt++)r.deleteFramebuffer(b.__webglFramebuffer[gt][bt]);else r.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)r.deleteFramebuffer(b.__webglFramebuffer[gt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=I.textures;for(let gt=0,bt=j.length;gt<bt;gt++){const ft=s.get(j[gt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),s.remove(j[gt])}s.remove(I)}let G=0;function Z(){G=0}function q(){const I=G;return I>=l.maxTextures&&se("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),G+=1,I}function nt(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function it(I,b){const j=s.get(I);if(I.isVideoTexture&&ye(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const gt=I.image;if(gt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,I,b);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function F(I,b){const j=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){et(j,I,b);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function B(I,b){const j=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){et(j,I,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function tt(I,b){const j=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){ht(j,I,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const Mt={[hd]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[dd]:r.MIRRORED_REPEAT},_t={[Ln]:r.NEAREST,[QS]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},z={[tM]:r.NEVER,[sM]:r.ALWAYS,[eM]:r.LESS,[up]:r.LEQUAL,[nM]:r.EQUAL,[fp]:r.GEQUAL,[iM]:r.GREATER,[aM]:r.NOTEQUAL};function J(I,b){if(b.type===Hi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===yh||b.magFilter===gc||b.magFilter===Ls||b.minFilter===In||b.minFilter===yh||b.minFilter===gc||b.minFilter===Ls)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Mt[b.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Mt[b.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Mt[b.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,_t[b.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==gc&&b.minFilter!==Ls||b.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function pt(I,b){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const gt=b.source;let bt=y.get(gt);bt===void 0&&(bt={},y.set(gt,bt));const ft=nt(b);if(ft!==I.__cacheKey){bt[ft]===void 0&&(bt[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),bt[ft].usedTimes++;const Yt=bt[I.__cacheKey];Yt!==void 0&&(bt[I.__cacheKey].usedTimes--,Yt.usedTimes===0&&A(b)),I.__cacheKey=ft,I.__webglTexture=bt[ft].texture}return j}function Dt(I,b,j){return Math.floor(Math.floor(I/j)/b)}function It(I,b,j,gt){const ft=I.updateRanges;if(ft.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,gt,b.data);else{ft.sort((Rt,wt)=>Rt.start-wt.start);let Yt=0;for(let Rt=1;Rt<ft.length;Rt++){const wt=ft[Yt],rt=ft[Rt],vt=wt.start+wt.count,St=Dt(rt.start,b.width,4),qt=Dt(wt.start,b.width,4);rt.start<=vt+1&&St===qt&&Dt(rt.start+rt.count-1,b.width,4)===St?wt.count=Math.max(wt.count,rt.start+rt.count-wt.start):(++Yt,ft[Yt]=rt)}ft.length=Yt+1;const Nt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Rt=0,wt=ft.length;Rt<wt;Rt++){const rt=ft[Rt],vt=Math.floor(rt.start/4),St=Math.ceil(rt.count/4),qt=vt%b.width,k=Math.floor(vt/b.width),Ut=St,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,qt,k,Ut,Tt,j,gt,b.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Nt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function et(I,b,j){let gt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=r.TEXTURE_3D);const bt=pt(I,b),ft=b.source;i.bindTexture(gt,I.__webglTexture,r.TEXTURE0+j);const Yt=s.get(ft);if(ft.version!==Yt.__version||bt===!0){i.activeTexture(r.TEXTURE0+j);const Nt=Ce.getPrimaries(Ce.workingColorSpace),Wt=b.colorSpace===ns?null:Ce.getPrimaries(b.colorSpace),ee=b.colorSpace===ns||Nt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Rt=T(b.image,!1,l.maxTextureSize);Rt=we(b,Rt);const wt=c.convert(b.format,b.colorSpace),rt=c.convert(b.type);let vt=L(b.internalFormat,wt,rt,b.colorSpace,b.isVideoTexture);J(gt,b);let St;const qt=b.mipmaps,k=b.isVideoTexture!==!0,Ut=Yt.__version===void 0||bt===!0,Tt=ft.dataReady,Lt=N(b,Rt);if(b.isDepthTexture)vt=R(b.format===Ns,b.type),Ut&&(k?i.texStorage2D(r.TEXTURE_2D,1,vt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,vt,Rt.width,Rt.height,0,wt,rt,null));else if(b.isDataTexture)if(qt.length>0){k&&Ut&&i.texStorage2D(r.TEXTURE_2D,Lt,vt,qt[0].width,qt[0].height);for(let xt=0,dt=qt.length;xt<dt;xt++)St=qt[xt],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,St.width,St.height,wt,rt,St.data):i.texImage2D(r.TEXTURE_2D,xt,vt,St.width,St.height,0,wt,rt,St.data);b.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(r.TEXTURE_2D,Lt,vt,Rt.width,Rt.height),Tt&&It(b,Rt,wt,rt)):i.texImage2D(r.TEXTURE_2D,0,vt,Rt.width,Rt.height,0,wt,rt,Rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,vt,qt[0].width,qt[0].height,Rt.depth);for(let xt=0,dt=qt.length;xt<dt;xt++)if(St=qt[xt],b.format!==Li)if(wt!==null)if(k){if(Tt)if(b.layerUpdates.size>0){const Ct=q_(St.width,St.height,b.format,b.type);for(const re of b.layerUpdates){const Fe=St.data.subarray(re*Ct/St.data.BYTES_PER_ELEMENT,(re+1)*Ct/St.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,re,St.width,St.height,1,wt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,Rt.depth,wt,St.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xt,vt,St.width,St.height,Rt.depth,0,St.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,Rt.depth,wt,rt,St.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xt,vt,St.width,St.height,Rt.depth,0,wt,rt,St.data)}else{k&&Ut&&i.texStorage2D(r.TEXTURE_2D,Lt,vt,qt[0].width,qt[0].height);for(let xt=0,dt=qt.length;xt<dt;xt++)St=qt[xt],b.format!==Li?wt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,xt,0,0,St.width,St.height,wt,St.data):i.compressedTexImage2D(r.TEXTURE_2D,xt,vt,St.width,St.height,0,St.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,St.width,St.height,wt,rt,St.data):i.texImage2D(r.TEXTURE_2D,xt,vt,St.width,St.height,0,wt,rt,St.data)}else if(b.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,vt,Rt.width,Rt.height,Rt.depth),Tt)if(b.layerUpdates.size>0){const xt=q_(Rt.width,Rt.height,b.format,b.type);for(const dt of b.layerUpdates){const Ct=Rt.data.subarray(dt*xt/Rt.data.BYTES_PER_ELEMENT,(dt+1)*xt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,Rt.width,Rt.height,1,wt,rt,Ct)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,wt,rt,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,Rt.width,Rt.height,Rt.depth,0,wt,rt,Rt.data);else if(b.isData3DTexture)k?(Ut&&i.texStorage3D(r.TEXTURE_3D,Lt,vt,Rt.width,Rt.height,Rt.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,wt,rt,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,vt,Rt.width,Rt.height,Rt.depth,0,wt,rt,Rt.data);else if(b.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(r.TEXTURE_2D,Lt,vt,Rt.width,Rt.height);else{let xt=Rt.width,dt=Rt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,vt,xt,dt,0,wt,rt,null),xt>>=1,dt>>=1}}else if(qt.length>0){if(k&&Ut){const xt=Xt(qt[0]);i.texStorage2D(r.TEXTURE_2D,Lt,vt,xt.width,xt.height)}for(let xt=0,dt=qt.length;xt<dt;xt++)St=qt[xt],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,wt,rt,St):i.texImage2D(r.TEXTURE_2D,xt,vt,wt,rt,St);b.generateMipmaps=!1}else if(k){if(Ut){const xt=Xt(Rt);i.texStorage2D(r.TEXTURE_2D,Lt,vt,xt.width,xt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,rt,Rt)}else i.texImage2D(r.TEXTURE_2D,0,vt,wt,rt,Rt);S(b)&&v(gt),Yt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ht(I,b,j){if(b.image.length!==6)return;const gt=pt(I,b),bt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+j);const ft=s.get(bt);if(bt.version!==ft.__version||gt===!0){i.activeTexture(r.TEXTURE0+j);const Yt=Ce.getPrimaries(Ce.workingColorSpace),Nt=b.colorSpace===ns?null:Ce.getPrimaries(b.colorSpace),Wt=b.colorSpace===ns||Yt===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let dt=0;dt<6;dt++)!ee&&!Rt?wt[dt]=T(b.image[dt],!0,l.maxCubemapSize):wt[dt]=Rt?b.image[dt].image:b.image[dt],wt[dt]=we(b,wt[dt]);const rt=wt[0],vt=c.convert(b.format,b.colorSpace),St=c.convert(b.type),qt=L(b.internalFormat,vt,St,b.colorSpace),k=b.isVideoTexture!==!0,Ut=ft.__version===void 0||gt===!0,Tt=bt.dataReady;let Lt=N(b,rt);J(r.TEXTURE_CUBE_MAP,b);let xt;if(ee){k&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,qt,rt.width,rt.height);for(let dt=0;dt<6;dt++){xt=wt[dt].mipmaps;for(let Ct=0;Ct<xt.length;Ct++){const re=xt[Ct];b.format!==Li?vt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,re.width,re.height,vt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,qt,re.width,re.height,0,re.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,re.width,re.height,vt,St,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,qt,re.width,re.height,0,vt,St,re.data)}}}else{if(xt=b.mipmaps,k&&Ut){xt.length>0&&Lt++;const dt=Xt(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,qt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Rt){k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,wt[dt].width,wt[dt].height,vt,St,wt[dt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,qt,wt[dt].width,wt[dt].height,0,vt,St,wt[dt].data);for(let Ct=0;Ct<xt.length;Ct++){const Fe=xt[Ct].image[dt].image;k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,Fe.width,Fe.height,vt,St,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,qt,Fe.width,Fe.height,0,vt,St,Fe.data)}}else{k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,vt,St,wt[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,qt,vt,St,wt[dt]);for(let Ct=0;Ct<xt.length;Ct++){const re=xt[Ct];k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,vt,St,re.image[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,qt,vt,St,re.image[dt])}}}S(b)&&v(r.TEXTURE_CUBE_MAP),ft.__version=bt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ot(I,b,j,gt,bt,ft){const Yt=c.convert(j.format,j.colorSpace),Nt=c.convert(j.type),Wt=L(j.internalFormat,Yt,Nt,j.colorSpace),ee=s.get(b),Rt=s.get(j);if(Rt.__renderTarget=b,!ee.__hasExternalTextures){const wt=Math.max(1,b.width>>ft),rt=Math.max(1,b.height>>ft);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,ft,Wt,wt,rt,b.depth,0,Yt,Nt,null):i.texImage2D(bt,ft,Wt,wt,rt,0,Yt,Nt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),Ye(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,bt,Rt.__webglTexture,0,X(b)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,bt,Rt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(I,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,I),b.depthBuffer){const gt=b.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,ft=R(b.stencilBuffer,bt),Yt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ye(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),ft,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,I)}else{const gt=b.textures;for(let bt=0;bt<gt.length;bt++){const ft=gt[bt],Yt=c.convert(ft.format,ft.colorSpace),Nt=c.convert(ft.type),Wt=L(ft.internalFormat,Yt,Nt,ft.colorSpace);Ye(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),Wt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),Wt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(I,b,j){const gt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(b.depthTexture);if(bt.__renderTarget=b,(!bt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),bt.__webglTexture===void 0){bt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,bt.__webglTexture),J(r.TEXTURE_CUBE_MAP,b.depthTexture);const ee=c.convert(b.depthTexture.format),Rt=c.convert(b.depthTexture.type);let wt;b.depthTexture.format===Ea?wt=r.DEPTH_COMPONENT24:b.depthTexture.format===Ns&&(wt=r.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,wt,b.width,b.height,0,ee,Rt,null)}}else it(b.depthTexture,0);const ft=bt.__webglTexture,Yt=X(b),Nt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Wt=b.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)Ye(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Nt,ft,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Nt,ft,0);else if(b.depthTexture.format===Ns)Ye(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Nt,ft,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Nt,ft,0);else throw new Error("Unknown depthTexture format")}function ae(I){const b=s.get(I),j=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const gt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const bt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),b.__depthDisposeCallback=bt}b.__boundDepthTexture=gt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let gt=0;gt<6;gt++)Bt(b.__webglFramebuffer[gt],I,gt);else{const gt=I.texture.mipmaps;gt&&gt.length>0?Bt(b.__webglFramebuffer[0],I,0):Bt(b.__webglFramebuffer,I,0)}else if(j){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=r.createRenderbuffer(),Gt(b.__webglDepthbuffer[gt],I,!1);else{const bt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,ft)}}else{const gt=I.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Gt(b.__webglDepthbuffer,I,!1);else{const bt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,ft)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(I,b,j){const gt=s.get(I);b!==void 0&&Ot(gt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&ae(I)}function ge(I){const b=I.texture,j=s.get(I),gt=s.get(b);I.addEventListener("dispose",O);const bt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,Yt=bt.length>1;if(Yt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=b.version,f.memory.textures++),ft){j.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Nt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)j.__webglFramebuffer[Nt][Wt]=r.createFramebuffer()}else j.__webglFramebuffer[Nt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)j.__webglFramebuffer[Nt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Nt=0,Wt=bt.length;Nt<Wt;Nt++){const ee=s.get(bt[Nt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&Ye(I)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const Wt=bt[Nt];j.__webglColorRenderbuffer[Nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Nt]);const ee=c.convert(Wt.format,Wt.colorSpace),Rt=c.convert(Wt.type),wt=L(Wt.internalFormat,ee,Rt,Wt.colorSpace,I.isXRRenderTarget===!0),rt=X(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,wt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,j.__webglColorRenderbuffer[Nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(j.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),J(r.TEXTURE_CUBE_MAP,b);for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Ot(j.__webglFramebuffer[Nt][Wt],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Wt);else Ot(j.__webglFramebuffer[Nt],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Nt=0,Wt=bt.length;Nt<Wt;Nt++){const ee=bt[Nt],Rt=s.get(ee);let wt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(wt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Rt.__webglTexture),J(wt,ee),Ot(j.__webglFramebuffer,I,ee,r.COLOR_ATTACHMENT0+Nt,wt,0),S(ee)&&v(wt)}i.unbindTexture()}else{let Nt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,gt.__webglTexture),J(Nt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Ot(j.__webglFramebuffer[Wt],I,b,r.COLOR_ATTACHMENT0,Nt,Wt);else Ot(j.__webglFramebuffer,I,b,r.COLOR_ATTACHMENT0,Nt,0);S(b)&&v(Nt),i.unbindTexture()}I.depthBuffer&&ae(I)}function he(I){const b=I.textures;for(let j=0,gt=b.length;j<gt;j++){const bt=b[j];if(S(bt)){const ft=D(I),Yt=s.get(bt).__webglTexture;i.bindTexture(ft,Yt),v(ft),i.unbindTexture()}}}const Te=[],oe=[];function Qe(I){if(I.samples>0){if(Ye(I)===!1){const b=I.textures,j=I.width,gt=I.height;let bt=r.COLOR_BUFFER_BIT;const ft=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(I),Nt=b.length>1;if(Nt)for(let ee=0;ee<b.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=I.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),Nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ee]);const Rt=s.get(b[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,j,gt,0,0,j,gt,bt,r.NEAREST),m===!0&&(Te.length=0,oe.length=0,Te.push(r.COLOR_ATTACHMENT0+ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Te.push(ft),oe.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Nt)for(let ee=0;ee<b.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ee]);const Rt=s.get(b[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function X(I){return Math.min(l.maxSamples,I.samples)}function Ye(I){const b=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(I){const b=f.render.frame;g.get(I)!==b&&(g.set(I,b),I.update())}function we(I,b){const j=I.colorSpace,gt=I.format,bt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Gr&&j!==ns&&(Ce.getTransfer(j)===Ge?(gt!==Li||bt!==oi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",j)),b}function Xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=it,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=Le,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function PA(r,t){function i(s,l=ns){let c;const f=Ce.getTransfer(l);if(s===oi)return r.UNSIGNED_BYTE;if(s===sp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Fv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Pv)return r.BYTE;if(s===zv)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===ap)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===Bv)return r.ALPHA;if(s===Hv)return r.RGB;if(s===Li)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===Gv)return r.RED;if(s===op)return r.RED_INTEGER;if(s===Hr)return r.RG;if(s===lp)return r.RG_INTEGER;if(s===cp)return r.RGBA_INTEGER;if(s===Vc||s===kc||s===Xc||s===Wc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pd||s===md||s===gd||s===_d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===pd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===vd||s===xd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Sd)return c.COMPRESSED_R11_EAC;if(s===Md)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ed)return c.COMPRESSED_RG11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Td)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ud)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ld)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Od)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bd||s===Hd||s===Gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Bd)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vd||s===kd||s===Xd||s===Wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new $v(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Yi({vertexShader:zA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends Ps{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,y=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",S=new IA,v={},D=i.getContextAttributes();let L=null,R=null;const N=[],P=[],O=new ce;let W=null;const A=new yi;A.viewport=new sn;const U=new yi;U.viewport=new sn;const G=[A,U],Z=new YM;let q=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=N[et];return ht===void 0&&(ht=new Vh,N[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=N[et];return ht===void 0&&(ht=new Vh,N[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=N[et];return ht===void 0&&(ht=new Vh,N[et]=ht),ht.getHandSpace()};function it(et){const ht=P.indexOf(et.inputSource);if(ht===-1)return;const Ot=N[ht];Ot!==void 0&&(Ot.update(et.inputSource,et.frame,p||f),Ot.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",B);for(let et=0;et<N.length;et++){const ht=P[et];ht!==null&&(P[et]=null,N[et].disconnect(ht))}q=null,nt=null,S.reset();for(const et in v)delete v[et];t.setRenderTarget(L),x=null,y=null,_=null,l=null,R=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(W),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",F),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Gt=null,Bt=null;D.depth&&(Bt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ot=D.stencil?Ns:Ea,Gt=D.stencil?$o:Wi);const ae={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(ae),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),R=new ki(y.textureWidth,y.textureHeight,{format:Li,type:oi,depthTexture:new el(y.textureWidth,y.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ot={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Ot),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ki(x.framebufferWidth,x.framebufferHeight,{format:Li,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(et){for(let ht=0;ht<et.removed.length;ht++){const Ot=et.removed[ht],Gt=P.indexOf(Ot);Gt>=0&&(P[Gt]=null,N[Gt].disconnect(Ot))}for(let ht=0;ht<et.added.length;ht++){const Ot=et.added[ht];let Gt=P.indexOf(Ot);if(Gt===-1){for(let ae=0;ae<N.length;ae++)if(ae>=P.length){P.push(Ot),Gt=ae;break}else if(P[ae]===null){P[ae]=Ot,Gt=ae;break}if(Gt===-1)break}const Bt=N[Gt];Bt&&Bt.connect(Ot)}}const tt=new H,Mt=new H;function _t(et,ht,Ot){tt.setFromMatrixPosition(ht.matrixWorld),Mt.setFromMatrixPosition(Ot.matrixWorld);const Gt=tt.distanceTo(Mt),Bt=ht.projectionMatrix.elements,ae=Ot.projectionMatrix.elements,Le=Bt[14]/(Bt[10]-1),ge=Bt[14]/(Bt[10]+1),he=(Bt[9]+1)/Bt[5],Te=(Bt[9]-1)/Bt[5],oe=(Bt[8]-1)/Bt[0],Qe=(ae[8]+1)/ae[0],X=Le*oe,Ye=Le*Qe,ye=Gt/(-oe+Qe),we=ye*-oe;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(we),et.translateZ(ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Bt[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Xt=Le+ye,I=ge+ye,b=X-we,j=Ye+(Gt-we),gt=he*ge/I*Xt,bt=Te*ge/I*Xt;et.projectionMatrix.makePerspective(b,j,gt,bt,Xt,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function z(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ht=et.near,Ot=et.far;S.texture!==null&&(S.depthNear>0&&(ht=S.depthNear),S.depthFar>0&&(Ot=S.depthFar)),Z.near=U.near=A.near=ht,Z.far=U.far=A.far=Ot,(q!==Z.near||nt!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),q=Z.near,nt=Z.far),Z.layers.mask=et.layers.mask|6,A.layers.mask=Z.layers.mask&3,U.layers.mask=Z.layers.mask&5;const Gt=et.parent,Bt=Z.cameras;z(Z,Gt);for(let ae=0;ae<Bt.length;ae++)z(Bt[ae],Gt);Bt.length===2?_t(Z,A,U):Z.projectionMatrix.copy(A.projectionMatrix),J(et,Z,Gt)};function J(et,ht,Ot){Ot===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(Ot.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=qd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(et){m=et,y!==null&&(y.fixedFoveation=et),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(et){return v[et]};let pt=null;function Dt(et,ht){if(g=ht.getViewerPose(p||f),E=ht,g!==null){const Ot=g.views;x!==null&&(t.setRenderTargetFramebuffer(R,x.framebuffer),t.setRenderTarget(R));let Gt=!1;Ot.length!==Z.cameras.length&&(Z.cameras.length=0,Gt=!0);for(let ge=0;ge<Ot.length;ge++){const he=Ot[ge];let Te=null;if(x!==null)Te=x.getViewport(he);else{const Qe=_.getViewSubImage(y,he);Te=Qe.viewport,ge===0&&(t.setRenderTargetTextures(R,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(R))}let oe=G[ge];oe===void 0&&(oe=new yi,oe.layers.enable(ge),oe.viewport=new sn,G[ge]=oe),oe.matrix.fromArray(he.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(he.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Te.x,Te.y,Te.width,Te.height),ge===0&&(Z.matrix.copy(oe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Gt===!0&&Z.cameras.push(oe)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const ge=_.getDepthInformation(Ot[0]);ge&&ge.isValid&&ge.texture&&S.init(ge,l.renderState)}if(Bt&&Bt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let ge=0;ge<Ot.length;ge++){const he=Ot[ge].camera;if(he){let Te=v[he];Te||(Te=new $v,v[he]=Te);const oe=_.getCameraImage(he);Te.sourceTexture=oe}}}}for(let Ot=0;Ot<N.length;Ot++){const Gt=P[Ot],Bt=N[Ot];Gt!==null&&Bt!==void 0&&Bt.update(Gt,ht,p||f)}pt&&pt(et,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const It=new ex;It.setAnimationLoop(Dt),this.setAnimationLoop=function(et){pt=et},this.dispose=function(){}}}const ws=new qi,HA=new tn;function GA(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,jv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,D,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),y(S,v),v.isMeshPhysicalMaterial&&x(S,v,R)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,D,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Qn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Qn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=t.get(v),L=D.envMap,R=D.envMapRotation;L&&(S.envMap.value=L,ws.copy(R),ws.x*=-1,ws.y*=-1,ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),S.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(ws)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,D,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function x(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const D=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function VA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const R=L.program;s.uniformBlockBinding(D,R)}function p(D,L){let R=l[D.id];R===void 0&&(E(D),R=g(D),l[D.id]=R,D.addEventListener("dispose",S));const N=L.program;s.updateUBOMapping(D,N);const P=t.render.frame;c[D.id]!==P&&(y(D),c[D.id]=P)}function g(D){const L=_();D.__bindingPointIndex=L;const R=r.createBuffer(),N=D.__size,P=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,N,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const L=l[D.id],R=D.uniforms,N=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let P=0,O=R.length;P<O;P++){const W=Array.isArray(R[P])?R[P]:[R[P]];for(let A=0,U=W.length;A<U;A++){const G=W[A];if(x(G,P,A,N)===!0){const Z=G.__offset,q=Array.isArray(G.value)?G.value:[G.value];let nt=0;for(let it=0;it<q.length;it++){const F=q[it],B=T(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Z+nt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,nt),nt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(D,L,R,N){const P=D.value,O=L+"_"+R;if(N[O]===void 0)return typeof P=="number"||typeof P=="boolean"?N[O]=P:N[O]=P.clone(),!0;{const W=N[O];if(typeof P=="number"||typeof P=="boolean"){if(W!==P)return N[O]=P,!0}else if(W.equals(P)===!1)return W.copy(P),!0}return!1}function E(D){const L=D.uniforms;let R=0;const N=16;for(let O=0,W=L.length;O<W;O++){const A=Array.isArray(L[O])?L[O]:[L[O]];for(let U=0,G=A.length;U<G;U++){const Z=A[U],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let nt=0,it=q.length;nt<it;nt++){const F=q[nt],B=T(F),tt=R%N,Mt=tt%B.boundary,_t=tt+Mt;R+=Mt,_t!==0&&N-_t<B.storage&&(R+=N-_t),Z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=B.storage}}}const P=R%N;return P>0&&(R+=N-P),D.__size=R,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const kA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function XA(){return Ii===null&&(Ii=new OM(kA,16,16,Hr,Ma),Ii.name="DFG_LUT",Ii.minFilter=In,Ii.magFilter=In,Ii.wrapS=xa,Ii.wrapT=xa,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class WA{constructor(t={}){const{canvas:i=rM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:x=oi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=x,S=new Set([cp,lp,op]),v=new Set([oi,Wi,Jo,$o,sp,rp]),D=new Uint32Array(4),L=new Int32Array(4);let R=null,N=null;const P=[],O=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=xi;let G=0,Z=0,q=null,nt=-1,it=null;const F=new sn,B=new sn;let tt=null;const Mt=new be(0);let _t=0,z=i.width,J=i.height,pt=1,Dt=null,It=null;const et=new sn(0,0,z,J),ht=new sn(0,0,z,J);let Ot=!1;const Gt=new pp;let Bt=!1,ae=!1;const Le=new tn,ge=new H,he=new sn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Qe(){return q===null?pt:1}let X=s;function Ye(w,K){return i.getContext(w,K)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",re,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),X===null){const K="webgl2";if(X=Ye(K,w),X===null)throw Ye(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Re("WebGLRenderer: "+w.message),w}let ye,we,Xt,I,b,j,gt,bt,ft,Yt,Nt,Wt,ee,Rt,wt,rt,vt,St,qt,k,Ut,Tt,Lt,xt;function dt(){ye=new X1(X),ye.init(),Tt=new PA(X,ye),we=new P1(X,ye,t,Tt),Xt=new NA(X,ye),we.reversedDepthBuffer&&y&&Xt.buffers.depth.setReversed(!0),I=new Y1(X),b=new vA,j=new OA(X,ye,Xt,b,we,Tt,I),gt=new F1(A),bt=new k1(A),ft=new QM(X),Lt=new N1(X,ft),Yt=new W1(X,ft,I,Lt),Nt=new Z1(X,Yt,ft,I),qt=new j1(X,we,j),rt=new z1(b),Wt=new _A(A,gt,bt,ye,we,Lt,rt),ee=new GA(A,b),Rt=new yA,wt=new AA(ye),St=new L1(A,gt,bt,Xt,Nt,E,m),vt=new UA(A,Nt,we),xt=new VA(X,I,we,Xt),k=new O1(X,ye,I),Ut=new q1(X,ye,I),I.programs=Wt.programs,A.capabilities=we,A.extensions=ye,A.properties=b,A.renderLists=Rt,A.shadowMap=vt,A.state=Xt,A.info=I}dt(),T!==oi&&(W=new Q1(T,i.width,i.height,l,c));const Ct=new BA(A,X);this.xr=Ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(w){w!==void 0&&(pt=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,K,ct=!0){if(Ct.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=K,i.width=Math.floor(w*pt),i.height=Math.floor(K*pt),ct===!0&&(i.style.width=w+"px",i.style.height=K+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(z*pt,J*pt).floor()},this.setDrawingBufferSize=function(w,K,ct){z=w,J=K,pt=ct,i.width=Math.floor(w*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(T===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,K,ct,ot){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,K,ct,ot),Xt.viewport(F.copy(et).multiplyScalar(pt).round())},this.getScissor=function(w){return w.copy(ht)},this.setScissor=function(w,K,ct,ot){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,K,ct,ot),Xt.scissor(B.copy(ht).multiplyScalar(pt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){Xt.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){Dt=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,ct=!0){let ot=0;if(w){let $=!1;if(q!==null){const Pt=q.texture.format;$=S.has(Pt)}if($){const Pt=q.texture.type,Ht=v.has(Pt),zt=St.getClearColor(),Vt=St.getClearAlpha(),Zt=zt.r,te=zt.g,Kt=zt.b;Ht?(D[0]=Zt,D[1]=te,D[2]=Kt,D[3]=Vt,X.clearBufferuiv(X.COLOR,0,D)):(L[0]=Zt,L[1]=te,L[2]=Kt,L[3]=Vt,X.clearBufferiv(X.COLOR,0,L))}else ot|=X.COLOR_BUFFER_BIT}K&&(ot|=X.DEPTH_BUFFER_BIT),ct&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",re,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),St.dispose(),Rt.dispose(),wt.dispose(),b.dispose(),gt.dispose(),bt.dispose(),Nt.dispose(),Lt.dispose(),xt.dispose(),Wt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Fs),Ct.removeEventListener("sessionend",Yr),Ni.stop()};function re(w){w.preventDefault(),__("WebGLRenderer: Context Lost."),U=!0}function Fe(){__("WebGLRenderer: Context Restored."),U=!1;const w=I.autoReset,K=vt.enabled,ct=vt.autoUpdate,ot=vt.needsUpdate,$=vt.type;dt(),I.autoReset=w,vt.enabled=K,vt.autoUpdate=ct,vt.needsUpdate=ot,vt.type=$}function Ae(w){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nn(w){const K=w.target;K.removeEventListener("dispose",Nn),Mi(K)}function Mi(w){sl(w),b.remove(w)}function sl(w){const K=b.get(w).programs;K!==void 0&&(K.forEach(function(ct){Wt.releaseProgram(ct)}),w.isShaderMaterial&&Wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ct,ot,$,Pt){K===null&&(K=Te);const Ht=$.isMesh&&$.matrixWorld.determinant()<0,zt=rs(w,K,ct,ot,$);Xt.setMaterial(ot,Ht);let Vt=ct.index,Zt=1;if(ot.wireframe===!0){if(Vt=Yt.getWireframeAttribute(ct),Vt===void 0)return;Zt=2}const te=ct.drawRange,Kt=ct.attributes.position;let ne=te.start*Zt,Ne=(te.start+te.count)*Zt;Pt!==null&&(ne=Math.max(ne,Pt.start*Zt),Ne=Math.min(Ne,(Pt.start+Pt.count)*Zt)),Vt!==null?(ne=Math.max(ne,0),Ne=Math.min(Ne,Vt.count)):Kt!=null&&(ne=Math.max(ne,0),Ne=Math.min(Ne,Kt.count));const Je=Ne-ne;if(Je<0||Je===1/0)return;Lt.setup($,ot,zt,ct,Vt);let je,ze=k;if(Vt!==null&&(je=ft.get(Vt),ze=Ut,ze.setIndex(je)),$.isMesh)ot.wireframe===!0?(Xt.setLineWidth(ot.wireframeLinewidth*Qe()),ze.setMode(X.LINES)):ze.setMode(X.TRIANGLES);else if($.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Xt.setLineWidth(Jt*Qe()),$.isLineSegments?ze.setMode(X.LINES):$.isLineLoop?ze.setMode(X.LINE_LOOP):ze.setMode(X.LINE_STRIP)}else $.isPoints?ze.setMode(X.POINTS):$.isSprite&&ze.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ze.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,Oe=$._multiDrawCounts,le=$._multiDrawCount,En=Vt?ft.get(Vt).bytesPerElement:1,ji=b.get(ot).currentProgram.getUniforms();for(let bn=0;bn<le;bn++)ji.setValue(X,"_gl_DrawID",bn),ze.render(Jt[bn]/En,Oe[bn])}else if($.isInstancedMesh)ze.renderInstances(ne,Je,$.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Oe=Math.min(ct.instanceCount,Jt);ze.renderInstances(ne,Je,Oe)}else ze.render(ne,Je)};function Wr(w,K,ct){w.transparent===!0&&w.side===va&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Bs(w,K,ct),w.side=as,w.needsUpdate=!0,Bs(w,K,ct),w.side=va):Bs(w,K,ct)}this.compile=function(w,K,ct=null){ct===null&&(ct=w),N=wt.get(ct),N.init(K),O.push(N),ct.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(N.pushLight($),$.castShadow&&N.pushShadow($))}),w!==ct&&w.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(N.pushLight($),$.castShadow&&N.pushShadow($))}),N.setupLights();const ot=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let Ht=0;Ht<Pt.length;Ht++){const zt=Pt[Ht];Wr(zt,ct,$),ot.add(zt)}else Wr(Pt,ct,$),ot.add(Pt)}),N=O.pop(),ot},this.compileAsync=function(w,K,ct=null){const ot=this.compile(w,K,ct);return new Promise($=>{function Pt(){if(ot.forEach(function(Ht){b.get(Ht).currentProgram.isReady()&&ot.delete(Ht)}),ot.size===0){$(w);return}setTimeout(Pt,10)}ye.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let zs=null;function qr(w){zs&&zs(w)}function Fs(){Ni.stop()}function Yr(){Ni.start()}const Ni=new ex;Ni.setAnimationLoop(qr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){zs=w,Ct.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},Ct.addEventListener("sessionstart",Fs),Ct.addEventListener("sessionend",Yr),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ct=Ct.enabled===!0&&Ct.isPresenting===!0,ot=W!==null&&(q===null||ct)&&W.begin(A,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,K,q),N=wt.get(w,O.length),N.init(K),O.push(N),Le.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Gt.setFromProjectionMatrix(Le,Gi,K.reversedDepth),ae=this.localClippingEnabled,Bt=rt.init(this.clippingPlanes,ae),R=Rt.get(w,P.length),R.init(),P.push(R),Ct.enabled===!0&&Ct.isPresenting===!0){const Ht=A.xr.getDepthSensingMesh();Ht!==null&&li(Ht,K,-1/0,A.sortObjects)}li(w,K,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(Dt,It),oe=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,oe&&St.addToRenderList(R,w),this.info.render.frame++,Bt===!0&&rt.beginShadows();const $=N.state.shadowsArray;if(vt.render($,w,K),Bt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&W.hasRenderPass())===!1){const Ht=R.opaque,zt=R.transmissive;if(N.setupLights(),K.isArrayCamera){const Vt=K.cameras;if(zt.length>0)for(let Zt=0,te=Vt.length;Zt<te;Zt++){const Kt=Vt[Zt];Mn(Ht,zt,w,Kt)}oe&&St.render(w);for(let Zt=0,te=Vt.length;Zt<te;Zt++){const Kt=Vt[Zt];ln(R,w,Kt,Kt.viewport)}}else zt.length>0&&Mn(Ht,zt,w,K),oe&&St.render(w),ln(R,w,K)}q!==null&&Z===0&&(j.updateMultisampleRenderTarget(q),j.updateRenderTargetMipmap(q)),ot&&W.end(A),w.isScene===!0&&w.onAfterRender(A,w,K),Lt.resetDefaultState(),nt=-1,it=null,O.pop(),O.length>0?(N=O[O.length-1],Bt===!0&&rt.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?R=P[P.length-1]:R=null};function li(w,K,ct,ot){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ct=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Gt.intersectsSprite(w)){ot&&he.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Le);const Ht=Nt.update(w),zt=w.material;zt.visible&&R.push(w,Ht,zt,ct,he.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Gt.intersectsObject(w))){const Ht=Nt.update(w),zt=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),he.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),he.copy(Ht.boundingSphere.center)),he.applyMatrix4(w.matrixWorld).applyMatrix4(Le)),Array.isArray(zt)){const Vt=Ht.groups;for(let Zt=0,te=Vt.length;Zt<te;Zt++){const Kt=Vt[Zt],ne=zt[Kt.materialIndex];ne&&ne.visible&&R.push(w,Ht,ne,ct,he.z,Kt)}}else zt.visible&&R.push(w,Ht,zt,ct,he.z,null)}}const Pt=w.children;for(let Ht=0,zt=Pt.length;Ht<zt;Ht++)li(Pt[Ht],K,ct,ot)}function ln(w,K,ct,ot){const{opaque:$,transmissive:Pt,transparent:Ht}=w;N.setupLightsView(ct),Bt===!0&&rt.setGlobalState(A.clippingPlanes,ct),ot&&Xt.viewport(F.copy(ot)),$.length>0&&Ei($,K,ct),Pt.length>0&&Ei(Pt,K,ct),Ht.length>0&&Ei(Ht,K,ct),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Mn(w,K,ct,ot){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ot.id]===void 0){const ne=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ot.id]=new ki(1,1,{generateMipmaps:!0,type:ne?Ma:oi,minFilter:Ls,samples:we.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Pt=N.state.transmissionRenderTarget[ot.id],Ht=ot.viewport||F;Pt.setSize(Ht.z*A.transmissionResolutionScale,Ht.w*A.transmissionResolutionScale);const zt=A.getRenderTarget(),Vt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(Mt),_t=A.getClearAlpha(),_t<1&&A.setClearColor(16777215,.5),A.clear(),oe&&St.render(ct);const te=A.toneMapping;A.toneMapping=Vi;const Kt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),N.setupLightsView(ot),Bt===!0&&rt.setGlobalState(A.clippingPlanes,ot),Ei(w,ct,ot),j.updateMultisampleRenderTarget(Pt),j.updateRenderTargetMipmap(Pt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ne=0,Je=K.length;Ne<Je;Ne++){const je=K[Ne],{object:ze,geometry:Jt,material:Oe,group:le}=je;if(Oe.side===va&&ze.layers.test(ot.layers)){const En=Oe.side;Oe.side=Qn,Oe.needsUpdate=!0,Is(ze,ct,ot,Jt,Oe,le),Oe.side=En,Oe.needsUpdate=!0,ne=!0}}ne===!0&&(j.updateMultisampleRenderTarget(Pt),j.updateRenderTargetMipmap(Pt))}A.setRenderTarget(zt,Vt,Zt),A.setClearColor(Mt,_t),Kt!==void 0&&(ot.viewport=Kt),A.toneMapping=te}function Ei(w,K,ct){const ot=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Pt=w.length;$<Pt;$++){const Ht=w[$],{object:zt,geometry:Vt,group:Zt}=Ht;let te=Ht.material;te.allowOverride===!0&&ot!==null&&(te=ot),zt.layers.test(ct.layers)&&Is(zt,K,ct,Vt,te,Zt)}}function Is(w,K,ct,ot,$,Pt){w.onBeforeRender(A,K,ct,ot,$,Pt),w.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(A,K,ct,ot,w,Pt),$.transparent===!0&&$.side===va&&$.forceSinglePass===!1?($.side=Qn,$.needsUpdate=!0,A.renderBufferDirect(ct,K,ot,$,w,Pt),$.side=as,$.needsUpdate=!0,A.renderBufferDirect(ct,K,ot,$,w,Pt),$.side=va):A.renderBufferDirect(ct,K,ot,$,w,Pt),w.onAfterRender(A,K,ct,ot,$,Pt)}function Bs(w,K,ct){K.isScene!==!0&&(K=Te);const ot=b.get(w),$=N.state.lights,Pt=N.state.shadowsArray,Ht=$.state.version,zt=Wt.getParameters(w,$.state,Pt,K,ct),Vt=Wt.getProgramCacheKey(zt);let Zt=ot.programs;ot.environment=w.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(w.isMeshStandardMaterial?bt:gt).get(w.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Zt===void 0&&(w.addEventListener("dispose",Nn),Zt=new Map,ot.programs=Zt);let te=Zt.get(Vt);if(te!==void 0){if(ot.currentProgram===te&&ot.lightsStateVersion===Ht)return jr(w,zt),te}else zt.uniforms=Wt.getUniforms(w),w.onBeforeCompile(zt,A),te=Wt.acquireProgram(zt,Vt),Zt.set(Vt,te),ot.uniforms=zt.uniforms;const Kt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=rt.uniform),jr(w,zt),ot.needsLights=ba(w),ot.lightsStateVersion=Ht,ot.needsLights&&(Kt.ambientLightColor.value=$.state.ambient,Kt.lightProbe.value=$.state.probe,Kt.directionalLights.value=$.state.directional,Kt.directionalLightShadows.value=$.state.directionalShadow,Kt.spotLights.value=$.state.spot,Kt.spotLightShadows.value=$.state.spotShadow,Kt.rectAreaLights.value=$.state.rectArea,Kt.ltc_1.value=$.state.rectAreaLTC1,Kt.ltc_2.value=$.state.rectAreaLTC2,Kt.pointLights.value=$.state.point,Kt.pointLightShadows.value=$.state.pointShadow,Kt.hemisphereLights.value=$.state.hemi,Kt.directionalShadowMap.value=$.state.directionalShadowMap,Kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Kt.spotShadowMap.value=$.state.spotShadowMap,Kt.spotLightMatrix.value=$.state.spotLightMatrix,Kt.spotLightMap.value=$.state.spotLightMap,Kt.pointShadowMap.value=$.state.pointShadowMap,Kt.pointShadowMatrix.value=$.state.pointShadowMatrix),ot.currentProgram=te,ot.uniformsList=null,te}function rl(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=Yc.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function jr(w,K){const ct=b.get(w);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function rs(w,K,ct,ot,$){K.isScene!==!0&&(K=Te),j.resetTextureUnits();const Pt=K.fog,Ht=ot.isMeshStandardMaterial?K.environment:null,zt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Gr,Vt=(ot.isMeshStandardMaterial?bt:gt).get(ot.envMap||Ht),Zt=ot.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,te=!!ct.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Kt=!!ct.morphAttributes.position,ne=!!ct.morphAttributes.normal,Ne=!!ct.morphAttributes.color;let Je=Vi;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Je=A.toneMapping);const je=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,ze=je!==void 0?je.length:0,Jt=b.get(ot),Oe=N.state.lights;if(Bt===!0&&(ae===!0||w!==it)){const An=w===it&&ot.id===nt;rt.setState(ot,w,An)}let le=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Oe.state.version||Jt.outputColorSpace!==zt||$.isBatchedMesh&&Jt.batching===!1||!$.isBatchedMesh&&Jt.batching===!0||$.isBatchedMesh&&Jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Jt.instancing===!1||!$.isInstancedMesh&&Jt.instancing===!0||$.isSkinnedMesh&&Jt.skinning===!1||!$.isSkinnedMesh&&Jt.skinning===!0||$.isInstancedMesh&&Jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Jt.instancingMorph===!1&&$.morphTexture!==null||Jt.envMap!==Vt||ot.fog===!0&&Jt.fog!==Pt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==rt.numPlanes||Jt.numIntersection!==rt.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==te||Jt.morphTargets!==Kt||Jt.morphNormals!==ne||Jt.morphColors!==Ne||Jt.toneMapping!==Je||Jt.morphTargetsCount!==ze)&&(le=!0):(le=!0,Jt.__version=ot.version);let En=Jt.currentProgram;le===!0&&(En=Bs(ot,K,$));let ji=!1,bn=!1,ci=!1;const Ie=En.getUniforms(),Tn=Jt.uniforms;if(Xt.useProgram(En.program)&&(ji=!0,bn=!0,ci=!0),ot.id!==nt&&(nt=ot.id,bn=!0),ji||it!==w){Xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(X,"projectionMatrix",w.projectionMatrix),Ie.setValue(X,"viewMatrix",w.matrixWorldInverse);const Rn=Ie.map.cameraPosition;Rn!==void 0&&Rn.setValue(X,ge.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&Ie.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ie.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),it!==w&&(it=w,bn=!0,ci=!0)}if(Jt.needsLights&&(Oe.state.directionalShadowMap.length>0&&Ie.setValue(X,"directionalShadowMap",Oe.state.directionalShadowMap,j),Oe.state.spotShadowMap.length>0&&Ie.setValue(X,"spotShadowMap",Oe.state.spotShadowMap,j),Oe.state.pointShadowMap.length>0&&Ie.setValue(X,"pointShadowMap",Oe.state.pointShadowMap,j)),$.isSkinnedMesh){Ie.setOptional(X,$,"bindMatrix"),Ie.setOptional(X,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ie.setValue(X,"boneTexture",An.boneTexture,j))}$.isBatchedMesh&&(Ie.setOptional(X,$,"batchingTexture"),Ie.setValue(X,"batchingTexture",$._matricesTexture,j),Ie.setOptional(X,$,"batchingIdTexture"),Ie.setValue(X,"batchingIdTexture",$._indirectTexture,j),Ie.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Ie.setValue(X,"batchingColorTexture",$._colorsTexture,j));const pn=ct.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&qt.update($,ct,En),(bn||Jt.receiveShadow!==$.receiveShadow)&&(Jt.receiveShadow=$.receiveShadow,Ie.setValue(X,"receiveShadow",$.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Tn.envMap.value=Vt,Tn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Tn.envMapIntensity.value=K.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=XA()),bn&&(Ie.setValue(X,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&Zr(Tn,ci),Pt&&ot.fog===!0&&ee.refreshFogUniforms(Tn,Pt),ee.refreshMaterialUniforms(Tn,ot,pt,J,N.state.transmissionRenderTarget[w.id]),Yc.upload(X,rl(Jt),Tn,j)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Yc.upload(X,rl(Jt),Tn,j),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ie.setValue(X,"center",$.center),Ie.setValue(X,"modelViewMatrix",$.modelViewMatrix),Ie.setValue(X,"normalMatrix",$.normalMatrix),Ie.setValue(X,"modelMatrix",$.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const An=ot.uniformsGroups;for(let Rn=0,Hs=An.length;Rn<Hs;Rn++){const bi=An[Rn];xt.update(bi,En),xt.bind(bi,En)}}return En}function Zr(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function ba(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,K,ct){const ot=b.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=K,b.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ct,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const ct=b.get(w);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Ta=X.createFramebuffer();this.setRenderTarget=function(w,K=0,ct=0){q=w,G=K,Z=ct;let ot=null,$=!1,Pt=!1;if(w){const zt=b.get(w);if(zt.__useDefaultFramebuffer!==void 0){Xt.bindFramebuffer(X.FRAMEBUFFER,zt.__webglFramebuffer),F.copy(w.viewport),B.copy(w.scissor),tt=w.scissorTest,Xt.viewport(F),Xt.scissor(B),Xt.setScissorTest(tt),nt=-1;return}else if(zt.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(zt.__hasExternalTextures)j.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const te=w.depthTexture;if(zt.__boundDepthTexture!==te){if(te!==null&&b.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}const Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Pt=!0);const Zt=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[K])?ot=Zt[K][ct]:ot=Zt[K],$=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?ot=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?ot=Zt[ct]:ot=Zt,F.copy(w.viewport),B.copy(w.scissor),tt=w.scissorTest}else F.copy(et).multiplyScalar(pt).floor(),B.copy(ht).multiplyScalar(pt).floor(),tt=Ot;if(ct!==0&&(ot=Ta),Xt.bindFramebuffer(X.FRAMEBUFFER,ot)&&Xt.drawBuffers(w,ot),Xt.viewport(F),Xt.scissor(B),Xt.setScissorTest(tt),$){const zt=b.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,zt.__webglTexture,ct)}else if(Pt){const zt=K;for(let Vt=0;Vt<w.textures.length;Vt++){const Zt=b.get(w.textures[Vt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Vt,Zt.__webglTexture,ct,zt)}}else if(w!==null&&ct!==0){const zt=b.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zt.__webglTexture,ct)}nt=-1},this.readRenderTargetPixels=function(w,K,ct,ot,$,Pt,Ht,zt=0){if(!(w&&w.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt){Xt.bindFramebuffer(X.FRAMEBUFFER,Vt);try{const Zt=w.textures[zt],te=Zt.format,Kt=Zt.type;if(!we.textureFormatReadable(te)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Kt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ot&&ct>=0&&ct<=w.height-$&&(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),X.readPixels(K,ct,ot,$,Tt.convert(te),Tt.convert(Kt),Pt))}finally{const Zt=q!==null?b.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(X.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(w,K,ct,ot,$,Pt,Ht,zt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt)if(K>=0&&K<=w.width-ot&&ct>=0&&ct<=w.height-$){Xt.bindFramebuffer(X.FRAMEBUFFER,Vt);const Zt=w.textures[zt],te=Zt.format,Kt=Zt.type;if(!we.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ne),X.bufferData(X.PIXEL_PACK_BUFFER,Pt.byteLength,X.STREAM_READ),w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),X.readPixels(K,ct,ot,$,Tt.convert(te),Tt.convert(Kt),0);const Ne=q!==null?b.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(X.FRAMEBUFFER,Ne);const Je=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await oM(X,Je,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ne),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Pt),X.deleteBuffer(ne),X.deleteSync(Je),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,ct=0){const ot=Math.pow(2,-ct),$=Math.floor(w.image.width*ot),Pt=Math.floor(w.image.height*ot),Ht=K!==null?K.x:0,zt=K!==null?K.y:0;j.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ct,0,0,Ht,zt,$,Pt),Xt.unbindTexture()};const os=X.createFramebuffer(),Aa=X.createFramebuffer();this.copyTextureToTexture=function(w,K,ct=null,ot=null,$=0,Pt=null){Pt===null&&($!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=$,$=0):Pt=0);let Ht,zt,Vt,Zt,te,Kt,ne,Ne,Je;const je=w.isCompressedTexture?w.mipmaps[Pt]:w.image;if(ct!==null)Ht=ct.max.x-ct.min.x,zt=ct.max.y-ct.min.y,Vt=ct.isBox3?ct.max.z-ct.min.z:1,Zt=ct.min.x,te=ct.min.y,Kt=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-$);Ht=Math.floor(je.width*pn),zt=Math.floor(je.height*pn),w.isDataArrayTexture?Vt=je.depth:w.isData3DTexture?Vt=Math.floor(je.depth*pn):Vt=1,Zt=0,te=0,Kt=0}ot!==null?(ne=ot.x,Ne=ot.y,Je=ot.z):(ne=0,Ne=0,Je=0);const ze=Tt.convert(K.format),Jt=Tt.convert(K.type);let Oe;K.isData3DTexture?(j.setTexture3D(K,0),Oe=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(j.setTexture2DArray(K,0),Oe=X.TEXTURE_2D_ARRAY):(j.setTexture2D(K,0),Oe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const le=X.getParameter(X.UNPACK_ROW_LENGTH),En=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ji=X.getParameter(X.UNPACK_SKIP_PIXELS),bn=X.getParameter(X.UNPACK_SKIP_ROWS),ci=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zt),X.pixelStorei(X.UNPACK_SKIP_ROWS,te),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Kt);const Ie=w.isDataArrayTexture||w.isData3DTexture,Tn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const pn=b.get(w),An=b.get(K),Rn=b.get(pn.__renderTarget),Hs=b.get(An.__renderTarget);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let bi=0;bi<Vt;bi++)Ie&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(w).__webglTexture,$,Kt+bi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(K).__webglTexture,Pt,Je+bi)),X.blitFramebuffer(Zt,te,Ht,zt,ne,Ne,Ht,zt,X.DEPTH_BUFFER_BIT,X.NEAREST);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||b.has(w)){const pn=b.get(w),An=b.get(K);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,os),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Aa);for(let Rn=0;Rn<Vt;Rn++)Ie?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pn.__webglTexture,$,Kt+Rn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,pn.__webglTexture,$),Tn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,An.__webglTexture,Pt,Je+Rn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,An.__webglTexture,Pt),$!==0?X.blitFramebuffer(Zt,te,Ht,zt,ne,Ne,Ht,zt,X.COLOR_BUFFER_BIT,X.NEAREST):Tn?X.copyTexSubImage3D(Oe,Pt,ne,Ne,Je+Rn,Zt,te,Ht,zt):X.copyTexSubImage2D(Oe,Pt,ne,Ne,Zt,te,Ht,zt);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Oe,Pt,ne,Ne,Je,Ht,zt,Vt,ze,Jt,je.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Oe,Pt,ne,Ne,Je,Ht,zt,Vt,ze,je.data):X.texSubImage3D(Oe,Pt,ne,Ne,Je,Ht,zt,Vt,ze,Jt,je):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Pt,ne,Ne,Ht,zt,ze,Jt,je.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Pt,ne,Ne,je.width,je.height,ze,je.data):X.texSubImage2D(X.TEXTURE_2D,Pt,ne,Ne,Ht,zt,ze,Jt,je);X.pixelStorei(X.UNPACK_ROW_LENGTH,le),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,En),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ji),X.pixelStorei(X.UNPACK_SKIP_ROWS,bn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ci),Pt===0&&K.generateMipmaps&&X.generateMipmap(Oe),Xt.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),Xt.unbindTexture()},this.resetState=function(){G=0,Z=0,q=null,Xt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}function qA(r,t){const i=t.clone().sub(r.clone().multiplyScalar(t.dot(r)));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=r.clone().cross(i);return c=>new H(c.dot(r),c.dot(i),c.dot(s))}function YA(r){const t=new H;for(const i of r)t.add(i);return t.multiplyScalar(1/r.length)}let rx=0;function jA(){rx=0}function eu(r={}){return{id:r.id??rx++,pos:r.pos?r.pos.clone():new H,vel:r.vel?r.vel.clone():new H,moment:r.moment?r.moment.clone():new H(1,0,0),omega:r.omega?r.omega.clone():new H,color:r.color??"#93b5c9",group:r.group??"",f:new H,tau:new H,fixed:r.fixed??!1}}function ZA(r,t=.3){const i=new H((Math.random()-.5)*t,(Math.random()-.5)*t,(Math.random()-.5)*t);return cu(r,{pos:r.pos.clone().add(i)})}function cu(r,t){return{...r,...t}}function jo(r,t=6,i=1){return r?r.toArray().map(s=>(s*i).toFixed(t)):"(undefined)"}function Kd(r){const t=new H;return{m_pos:jo(r.pos,6,1e3),m_vel:jo(r.vel??t,6,1e3),moment:jo(r.moment),f:jo(r.f??t),tau:jo(r.tau??t)}}function KA(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(h=>h.id===t),l=r.find(h=>h.id===i);if(!s||!l)return;const c=qA(s.moment,l.pos.clone().sub(s.pos));if(!c)return;const f=s.pos;return r.map(h=>cu(h,{pos:c(h.pos.clone().sub(f)),vel:c(h.vel??new H),moment:c(h.moment),f:c(h.f??new H),tau:c(h.tau??new H)}))}function QA(r,t){return r.map(i=>({...i,pos:i.pos.multiplyScalar(t)})).map(eu)}function JA(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.toArray().join(", "),moment:c.moment.toArray().join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function $A(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const h=f.split(",").map(m=>parseFloat(m.trim()));if(h.length===3&&h.every(m=>!isNaN(m)))return new H(...h)}return f};for(const f of t.magnets){const h={};for(const[m,p]of Object.entries(f))h[m]=c(p);h.pos,h.moment.normalize(),l.push(h)}return{name:i,unit:s,magnets:l}}async function gv(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:f}=$A(s),h={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in h))throw new Error(`Unknown unit in preset: ${c}`);const m=h[c];return{name:l||r,magnets:QA(f,m)}}catch{if(r in Qd){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=Qd[r]();return l.map(c=>c.pos.multiplyScalar(t)),{name:r,magnets:l.map(eu)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function tR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(Qd).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const Qd={chain:()=>Array.from({length:5},(r,t)=>({pos:new H((t-2)*2*1.1,0,0),m:new H(1,0,0),color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:new H(s*Math.cos(i),s*Math.sin(i),0),m:new H(Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0),color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:new H((Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4),m:new H(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map(i=>new H(...i)).map((i,s)=>({pos:i.multiplyScalar(2.4),m:new H(0,0,s<4?1:-1),color:s<4?16729156:4474111}))},ox=4*Math.PI*1e-7;function eR(r,t,i,s,l){const c=l.length(),f=l.clone().multiplyScalar(1/c),h=i.dot(f),m=s.dot(f),p=i.dot(s),g=4*Math.PI*ox*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:h,q:m,r:p,K:g,m1:i,m2:s,d:l}}function nR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function iR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:h,m2:m}=r,p=t**4,g=3*f/p,_=c-5*s*l;return i.clone().multiplyScalar(_).add(h.clone().multiplyScalar(l)).add(m.clone().multiplyScalar(s)).multiplyScalar(g)}function aR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:h}=r,m=c/t**3,p=f.clone().cross(h),g=f.clone().cross(i).multiplyScalar(-3*l).add(p).multiplyScalar(-m),_=h.clone().cross(i).multiplyScalar(-3*s).add(p.negate()).multiplyScalar(-m);return{tor1:g,tor2:_}}function sR(r,t,i,s,l){const c=eR(r,t,i,s,l),f=nR(c),h=iR(c),{tor1:m,tor2:p}=aR(c);return{U:f,force1:h.clone().negate(),force2:h,torque1:m,torque2:p}}const rR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3,rollingFriction:.005};class oR{constructor(t={}){const i={...rR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.rollingFriction=i.rollingFriction,this.mMag=i.br/ox,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function Jd(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function _v(r,t,i,s){if(Math.abs(r)<1e-20)return Jd(t,i,s);const l=t/r,c=i/r,f=s/r,h=l/3,m=c-l*l/3,p=f-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),y=Math.cbrt(-p/2+_),x=Math.cbrt(-p/2-_);return[y+x-h]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),y=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,x=2*Math.cbrt(_);return[x*Math.cos(y)-h,x*Math.cos(y+2*Math.PI/3)-h,x*Math.cos(y+4*Math.PI/3)-h]}else{const _=Math.cbrt(-p/2);return[2*_-h,-_-h]}}function lR(r,t,i,s,l){if(Math.abs(r)<1e-20)return _v(t,i,s,l);const c=t/r,f=i/r,h=s/r,m=l/r,p=c/4,g=f-3*c*c/8,_=h-c*f/2+c*c*c/8,y=m-c*h/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const D=[];for(const L of Jd(1,g,y))if(L>=-1e-12){const R=Math.sqrt(Math.max(0,L));D.push(R-p,-R-p)}return D}const x=_v(1,g/2,(g*g-4*y)/16,-_*_/64),E=Math.max(...x,1e-12),T=Math.sqrt(Math.max(E,0));if(T<1e-12)return[];const S=_/(4*T),v=[];for(const[D,L]of[[1,-S],[-1,S]])for(const R of Jd(1,D*T,g/2+E+L))v.push(R-p);return v}function $d(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],m=r[c].clone().sub(f),p=m.length();p<=t&&i.push({i:l,j:c,normal:m.multiplyScalar(1/p),dist:p})}return i}function vv(r,t,i,s=null,l=20,c=1e-7){const f=r.map(y=>y.clone()),h=$d(f,t+i),m=t-i,p=t-i/2,g=s||r.map(()=>!1),_=new H;for(let y=0;y<l;y++){let x=0;for(const{i:E,j:T}of h){_.copy(f[T]).sub(f[E]);const S=_.length(),v=_.multiplyScalar(1/S);let D=0;if(S<m?(D=p-S,x=Math.max(x,t-S)):S<t&&(D=(t-S)*.5,x=Math.max(x,t-S)),D>c){const L=f[E],R=f[T],N=+g[E]-+g[T],P=D*((1-N)*.5),O=D*((1+N)*.5);L.x-=v.x*P,L.y-=v.y*P,L.z-=v.z*P,R.x+=v.x*O,R.y+=v.y*O,R.z+=v.z*O}}if(x<c)break}return f}function cR(r,t,i,s,l=null,c=.3,f=1e-7){const h=l||r.map(()=>!1),m=t.map((y,x)=>h[x]?new H(0,0,0):y.clone()),p=i.map((y,x)=>h[x]?new H(0,0,0):y.clone()),g=lx(s,h),_=new Float64Array(s.length);if(g.length>0){const y=g.map(E=>s[E]);gR(p,y,h,f);const x=uR(m,p,y,h,c,5,f);g.forEach((E,T)=>{_[E]=x[T]})}return{constrainedForces:m,constrainedVel:p,forceLambda:_}}function lx(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function uR(r,t,i,s,l=.3,c=5,f=1e-7){const h=i.length,m=new Float64Array(h);if(h===0)return m;const p=i.map(L=>dR(L.normal)),g=new Array(h).fill(!0),_=new H,y=i.map((L,R)=>{const{i:N,j:P,normal:O}=L;_.copy(t[P]).sub(t[N]);const W=_.dot(O),A=O.clone().multiplyScalar(W).sub(_).negate(),U=A.length();return U>f?(g[R]=!1,A.multiplyScalar(-1/U)):new H}),x=r.map(L=>L.clone()),E=i.map(()=>new H);for(let L=0;L<c;L++){const{A:R,b:N,eqMap:P}=Sv(i,s,x,p,g),O=tp(R,N);if(!O)break;const W=xv(O,P,g);if(fR(W,g,l,f)){for(let A=0;A<h;A++){m[A]=W[A].fn;const U=yv(p[A],W[A],g[A],E[A]);jc(r,i[A],U,s)}return m}r.forEach((A,U)=>x[U].copy(A));for(let A=0;A<h;A++)g[A]||(hR(p[A],W[A],E[A],y[A],l,f),jc(x,i[A],E[A],s))}const{A:T,b:S,eqMap:v}=Sv(i,s,x,p,g),D=tp(T,S);if(D){const L=xv(D,v,g);for(let R=0;R<h;R++){m[R]=L[R].fn;const N=yv(p[R],L[R],g[R],E[R]);jc(r,i[R],N,s)}}return m}function jc(r,t,i,s){const{i:l,j:c}=t;s[l]||r[l].add(i),s[c]||r[c].sub(i)}function xv(r,t,i){return Array.from(t,(s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,h=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:h}})}function fR(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:h,ft2:m}=r[c],p=Math.sqrt(h*h+m*m),g=i*Math.abs(f);t[c]&&p>g+s?(t[c]=!1,l=!1):!t[c]&&p<=g-s}return l}function yv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[h,m,p]=r,g=new H(l*h.x+c*m.x+f*p.x,l*h.y+c*m.y+f*p.y,l*h.z+c*m.z+f*p.z);return i||g.add(s),g}function hR(r,t,i,s,l,c){const[f,h,m]=r,{fn:p,ft1:g,ft2:_}=t,y=l*Math.abs(p);if(s.x!==0||s.y!==0||s.z!==0)i.copy(s).multiplyScalar(y);else{const x=Math.sqrt(g*g+_*_);if(x>c){const E=y/x;i.x=(g*h.x+_*m.x)*E,i.y=(g*h.y+_*m.y)*E,i.z=(g*h.z+_*m.z)*E}else i.set(0,0,0)}}function dR(r){const i=(Math.abs(r.x)<.9?new H(1,0,0):new H(0,1,0)).cross(r).normalize().negate(),s=r.clone().cross(i);return[r,i,s]}function Sv(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let h=0;for(let x=0;x<c;x++)f[x]=h,h+=l[x]?3:1;const m=[],p=[],g=[],_=new Float64Array(h);for(let x=0;x<c;x++){const E=r[x],T=E.i,S=E.j,v=t[T]?0:1,D=t[S]?0:1,L=l[x]?3:1;for(let R=0;R<L;R++){const N=s[x][R],P=f[x]+R;_[P]=v*i[T].dot(N)-D*i[S].dot(N);for(let O=0;O<c;O++){const W=r[O],A=W.i,U=W.j,G=l[O]?3:1;for(let Z=0;Z<G;Z++){const q=s[O][Z],nt=f[O]+Z,it=N.dot(q);let F=0;T===A&&(F-=v*it),T===U&&(F+=v*it),S===A&&(F+=D*it),S===U&&(F-=D*it),Math.abs(F)>1e-15&&(m.push(P),p.push(nt),g.push(F))}}}}return{A:cx(h,m,p,g),b:_,neq:h,eqMap:f}}function cx(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],h=new Int32Array(f),m=new Float64Array(f),p=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],y=c[_]+p[_];let x=!1;for(let E=c[_];E<y;E++)if(h[E]===i[g]){m[E]+=s[g],x=!0;break}x||(h[y]=i[g],m[y]=s[g],p[_]++)}return{n:r,rowPtr:c,colIdx:h,values:m}}function pR(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],h=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],y=_.i,x=_.j,E=_.normal,T=i[y]?0:1,S=i[x]?0:1;c[g]=T*s[y].dot(E)-S*s[x].dot(E);for(let v=0;v<l;v++){const D=r[t[v]],L=D.i,R=D.j,N=D.normal,P=E.dot(N);let O=0;y===L&&(O-=T*P),y===R&&(O+=T*P),x===L&&(O+=S*P),x===R&&(O-=S*P),Math.abs(O)>1e-15&&(f.push(g),h.push(v),m.push(O))}}return{A:cx(l,f,h,m),b:c}}function tp(r,t){const i=r.n;if(i===0)return new Float64Array(0);const s=Array.from({length:i},()=>new Float64Array(i));let l=0;for(let p=0;p<i;p++)for(let g=r.rowPtr[p];g<r.rowPtr[p+1];g++){s[p][r.colIdx[g]]=r.values[g];const _=Math.abs(r.values[g]);_>l&&(l=_)}const c=new Float64Array(t),f=Math.max(l*i*22e-17,1e-20),h=new Uint8Array(i);for(let p=0;p<i;p++){let g=Math.abs(s[p][p]),_=p;for(let x=p+1;x<i;x++){const E=Math.abs(s[x][p]);E>g&&(g=E,_=x)}if(g<f){h[p]=0;continue}if(h[p]=1,_!==p){const x=s[p];s[p]=s[_],s[_]=x;const E=c[p];c[p]=c[_],c[_]=E}const y=s[p][p];for(let x=p+1;x<i;x++){const E=s[x][p]/y;s[x][p]=0;for(let T=p+1;T<i;T++)s[x][T]-=E*s[p][T];c[x]-=E*c[p]}}const m=new Float64Array(i);for(let p=i-1;p>=0;p--){if(!h[p])continue;let g=c[p];for(let _=p+1;_<i;_++)g-=s[p][_]*m[_];m[p]=g/s[p][p]}return m}function mR(r,t,i,s,l,c,f){for(let h=0;h<i.length;h++){const m=l[h],p=i[h];Math.abs(m)<f||jc(r,t[p],t[p].normal.clone().multiplyScalar(m),s)}}function gR(r,t,i,s=1e-7){if(t.length===0)return r;const l=lx(t,i);if(l.length===0)return r;const{A:c,b:f}=pR(t,l,i,r),h=tp(c,f);return h&&mR(r,t,l,i,h,null,s),r}function _R(r,t,i,s,l,c,f=1e-7){const h=s.clone().sub(i).multiplyScalar(.5),m=r.dot(r)-l*l;if(m<=0)return 0;const p=2*r.dot(t),g=2*r.dot(h)+t.dot(t),_=2*t.dot(h),y=h.dot(h),x=lR(y,_,g,p,m),E=(l*(1+f))**2;let T=null;for(const S of x)if(S>1e-12&&S<=c+1e-12){if(y*S*S*S*S+_*S*S*S+g*S*S+p*S+m+l*l>E)continue;(T===null||S<T)&&(T=S)}return T}function vR(r,t,i,s,l,c,f=null){if(c<1e-12)return{newPos:r.map(S=>S.clone()),newVel:i.map(S=>S.clone()),safedt:0,reason:"zero delta time"};const h=f||r.map(()=>!1),m=r.length,p=t.map((S,v)=>S.clone().multiplyScalar(+!h[v]/s));let g=c,_="max delta time";const y=new H,x=new H;for(let S=0;S<m;S++)for(let v=S+1;v<m;v++){if(h[S]&&h[v])continue;y.copy(r[v]).sub(r[S]),x.copy(i[v]).sub(i[S]);const D=_R(y,x,p[S],p[v],l,g);D!==null&&D<g&&(g=Math.max(D-1e-12,0),_=`collision between ${S} and ${v}`)}for(let S=0;S<m;S++)if(!h[S]){const v=l/2,D=i[S],L=p[S],R=D.length(),N=L.length();let P;if(N>1e-12)P=(-R+Math.sqrt(R*R+2*N*v))/N;else if(R>1e-12)P=v/R;else continue;P<g&&(g=P,_=`max movement of ${S}`)}const E=r.map((S,v)=>{if(h[v])return S.clone();const D=g,L=.5*g*g,R=i[v],N=p[v];return new H(S.x+R.x*D+N.x*L,S.y+R.y*D+N.y*L,S.z+R.z*D+N.z*L)}),T=i.map((S,v)=>{if(h[v])return new H(0,0,0);const D=g,L=p[v];return new H(S.x+L.x*D,S.y+L.y*D,S.z+L.z*D)});return{newPos:E,newVel:T,safedt:g,reason:_}}function xR(r,t,i,s,l){return t.map((f,h)=>{const m=r[h],p=f.moment,g=f.omega,_=yR(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function yR(r,t,i,s,l,c=.3){const f=i.clone().multiplyScalar(1/l),m=i.dot(t)<0?c:1,p=new H(t.x*m+f.x*s,t.y*m+f.y*s,t.z*m+f.z*s),g=p.length();if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),y=p.clone().multiplyScalar(1/g);return{moment:r.clone().applyAxisAngle(y,_).normalize(),omega:p}}function SR(r,t,i){return()=>(r.current=new MR(i),t(!0),()=>{})}class MR{constructor(t=.0025){this.params=new oR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>new H(0,0,0)),f=t.map(()=>new H(0,0,0)),h=t.map(()=>new Map),m=new H;for(let p=0;p<l;p++)for(let g=p+1;g<l;g++){const _=sR(i,s,t[p].moment,t[g].moment,m.copy(t[g].pos).sub(t[p].pos));c[p].add(_.force1),c[g].add(_.force2),f[p].add(_.torque1),f[g].add(_.torque2),h[p].set(`M#${g}`,_.force1),h[g].set(`M#${p}`,_.force2)}return{coforces:c,torques:f,forces:h}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(R=>!!R.fixed),f=t.map(R=>R.pos),h=vv(f,l,this.params.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((R,N)=>({pos:h[N],moment:R.moment})),this.params.radius,this.params.mMag);if(s){const R=this.params.gravity;m.forEach((N,P)=>{if(!c[P]){const O=R*this.params.mass;N.y+=O,g[P].set("Gravity",new H(0,O,0))}})}const _=$d(h,l+this.params.shellThickness),{constrainedForces:y,constrainedVel:x}=cR(h,m,t.map(R=>R.vel),_,c,this.params.rollingFriction),{newPos:E,newVel:T,safedt:S,reason:v}=vR(h,y,x,this.params.mass,l-this.params.shellThickness,i,c),D=vv(E,l,this.params.shellThickness,c);$d(D,l+this.params.shellThickness).map(R=>{if(R.dist<this.params.radius)throw new Error(`球${R.i}-球${R.j}重叠过深: dist=${(R.dist*1e3).toFixed(4)}mm`)});const L=xR(p,t.map(R=>({moment:R.moment,omega:R.omega})),S,this.params.inertia,.3);return{newMagnets:t.map((R,N)=>cu(R,{pos:D[N],vel:T[N],f:y[N],tau:p[N],moment:L[N].moment,omega:L[N].omega})),safedt:S,forces:g,reason:v}}}function ER({getMagnets:r,selectedId:t,onApplySnap:i}){const s=jt.useRef([]),l=jt.useRef(-1),c=m=>m.map(p=>({...p,pos:p.pos.clone(),vel:p.vel.clone(),moment:p.moment.clone()})),f=jt.useCallback(m=>{const p=s.current;if(p.length>0){const g=p[p.length-1];if(bR(g,m))return}p.push(c(m)),p.length>100&&p.shift(),l.current=-1},[]),h=jt.useCallback(()=>{s.current=[],l.current=-1},[]);return jt.useEffect(()=>{const m=p=>{if(p.key!=="ArrowUp"&&p.key!=="ArrowDown")return;p.preventDefault();const g=s.current;if(g.length!==0)if(p.key==="ArrowUp"){if(l.current===-1)g.push(c(r())),l.current=g.length-2;else if(l.current>0)l.current--;else return;i(g[l.current])}else{if(l.current===-1)return;if(l.current++,l.current>=g.length-1){const _=g.pop();l.current=-1,i(_)}else i(g[l.current])}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[r,i,t]),{push:f,reset:h,histIdxRef:l}}function bR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const h=s[f],m=l[f];if(Array.isArray(h)&&Array.isArray(m)){if(h.length!==m.length||h.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(h instanceof H&&m instanceof H){if(h.distanceTo(m)>1e-12)return!1}else if(h!==m)return!1}}return!0}const TR=32,Lr=.1;function AR(r,t,i,s,l,c,f,h,m,p,g,_,y,x,E){const T=jt.useRef(null),S=jt.useRef(""),v=jt.useCallback(()=>{const{magnets:D,isSimulating:L,simSpeed:R,useGravity:N}=t.current,P=r.current;if(!L||!P||D.length<2)return;const{newMagnets:O,safedt:W,reason:A}=P.step(D,R,N);S.current=`${W*1e3}ms (${A})`,y(q=>q+W);const U=new Map(D.map((q,nt)=>[q.id,nt])),G=O.map((q,nt)=>{const it=new H(Math.max(Math.min(q.pos.x,Lr),-Lr),Math.max(Math.min(q.pos.y,Lr),-Lr),Math.max(Math.min(q.pos.z,Lr),-Lr));if(it.x!==q.pos.x||it.y!==q.pos.y||it.z!==q.pos.z)throw`磁铁${q.id}位置超出边界: ${q.pos.toArray().map(F=>(F*1e3).toFixed(1)).join(",")}mm`;return cu(D[U.get(q.id)],{...q,pos:it})});g(G),m.current=!0;const Z=p.current;if(Z.size===1){const q=G.find(nt=>Z.has(nt.id));q&&_(nt=>nt&&{...nt,...Kd(q)})}},[t,r,m,p,g,_,y,E]);return jt.useEffect(()=>{const D=s.current,L=l.current,R=c.current,N=f.current,P=h.current;if(!D||!L||!R||!N||!i)return;let O=performance.now();const W=A=>{T.current=requestAnimationFrame(W),A-O>TR&&(v(),O=A),P==null||P.update(),N.render(L,R)};return T.current=requestAnimationFrame(W),()=>{cancelAnimationFrame(T.current)}},[i,v,s,l,c,f,h]),{stepDeltaTimeRef:S}}function ux(r,t=""){let i=t.trim(),s=`${t.trim()}-`,l=1;for(t===""&&(s="#",i=`#${l}`);r[i];l++)i=`${s}${l}`;return i}function RR({selectedIds:r,setSelectedIds:t,keyTrapRef:i,stateRef:s}){const[l,c]=jt.useState({}),[f,h]=jt.useState(null),[m,p]=jt.useState(""),g=jt.useCallback(()=>{const v=new Set;if(f&&l[f])for(const D of l[f])v.add(D);return v},[f,l]),_=jt.useCallback(()=>{if(r.size===0)return;const v=ux(l,m.trim()||"");c(D=>({...D,[v]:new Set(r)})),p(v),h(v),setTimeout(()=>{i.current&&i.current.focus()},0)},[r,l,m]),y=jt.useCallback(v=>{c(D=>{const L={...D};return delete L[v],L}),f===v&&h(null)},[f]),x=jt.useCallback(v=>{if(f===v){h(null),p("");return}t(new Set(l[v]||[])),h(v),p(""),setTimeout(()=>{i.current&&i.current.focus()},0)},[f,l,t]),E=jt.useCallback(()=>{if(!f||!m.trim())return;const v=m.trim();if(v===f){p("");return}l[v]||(c(D=>{const L={};for(const[R,N]of Object.entries(D))L[R===f?v:R]=N;return L}),h(v),p(""))},[f,m,l]),T=jt.useCallback(v=>{c(D=>{const L={};for(const[R,N]of Object.entries(D)){const P=new Set([...N].filter(O=>!v.has(O)));P.size>0&&(L[R]=P)}return L})},[]),S=jt.useCallback(()=>{c({}),h(null),p("")},[]);return jt.useEffect(()=>{const v=D=>{D.target.tagName==="INPUT"&&D.target!==i.current||((D.key==="g"||D.key==="G")&&(D.ctrlKey||D.metaKey)?(D.preventDefault(),D.stopPropagation(),D.stopImmediatePropagation(),D.shiftKey?f&&y(f):_()):(D.key==="a"||D.key==="A")&&(D.ctrlKey||D.metaKey)&&(D.preventDefault(),D.stopPropagation(),D.stopImmediatePropagation(),t(L=>{const R=f?[...l[f]||[]]:s.current.magnets.map(P=>P.id),N=D.shiftKey?R.filter(P=>!L.has(P)):R;return new Set(N)})))};return window.addEventListener("keydown",v,!0),()=>window.removeEventListener("keydown",v,!0)},[_,y,f,l,t]),{groups:l,setGroups:c,activeGroup:f,setActiveGroup:h,newGroupName:m,setNewGroupName:p,getIdsInAffectedGroup:g,createGroup:_,deleteGroup:y,selectGroup:x,confirmRename:E,cleanupIds:T,resetGroups:S}}const Fn={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},Mv={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},fx={padding:"10px",background:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},ep={fontSize:"11px",color:"#888",marginBottom:"6px"},hx={...Fn,padding:"2px",fontSize:"8px",lineHeight:"1"},CR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},wR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},DR=["X","Y","Z"];function Zo({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return At.jsxs("div",{children:[At.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),At.jsx("div",{style:wR,children:DR.map((h,m)=>{var p;return At.jsx("input",{placeholder:h,disabled:!s,style:{...CR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(y=>{const x={...y,[r]:[...y[r]]};return x[r][m]=_,x})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},h)})})]})}function UR({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,useGravity:l,magnets:c,selectedId:f,refYId:h,setRefYId:m,onToggle:p,onResetVel:g,onPerturb:_,onReframe:y,onSimSpeedChange:x,onGravityChange:E}){return At.jsxs("div",{style:{padding:"12px",background:r?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${r?"#2a4a2a":"#2a2a4a"}`},children:[At.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),At.jsx("button",{onClick:p,style:{width:"100%",padding:"12px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),At.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[At.jsx("button",{onClick:g,style:Fn,children:"重置速度"}),At.jsx("button",{onClick:_,style:Fn,children:"扰动位置"})]}),At.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:At.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[At.jsxs("select",{value:h??"",onChange:T=>m(T.target.value===""?null:parseInt(T.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[At.jsx("option",{value:"",children:"— y 方向参考球 —"}),c.map(T=>At.jsxs("option",{value:T.id,children:["球 #",T.id]},T.id))]}),At.jsx("button",{onClick:y,disabled:f===null||h===null||f===h,style:{...Fn,opacity:f!==null&&h!==null&&f!==h?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),At.jsxs("div",{style:{marginTop:"10px"},children:[At.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),At.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),At.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),At.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:T=>x(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(T.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),At.jsx(NR,{label:"重力 (y 方向)",checked:l,onChange:E})]})}function LR({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:f,onRemove:h,onCommit:m}){const p={draft:s,setDraft:l,onCommit:m};return At.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[At.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[At.jsxs("button",{disabled:!0,style:{...Fn,flex:1,opacity:1},children:["选中磁球 #",r]}),At.jsx("button",{onClick:c,style:{...Fn,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),At.jsx("button",{onClick:f,style:{...Fn,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),At.jsx("button",{onClick:h,style:{...Fn,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),At.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",At.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&At.jsxs(At.Fragment,{children:[At.jsx(Zo,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...p}),At.jsx(Zo,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...p}),At.jsx(Zo,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...p}),At.jsx(Zo,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...p}),At.jsx(Zo,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...p})]})]})}function NR({label:r,checked:t,onChange:i}){return At.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[At.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),At.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}function OR({groups:r,activeGroup:t,presets:i,customPresets:s,setCustomPresets:l,applyPreset:c,saveGroupAsPreset:f}){return At.jsxs("div",{children:[At.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),At.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:i.map(h=>At.jsx("button",{onClick:()=>c(h),style:Mv,children:h},h))}),Object.keys(s).length>0&&At.jsxs(At.Fragment,{children:[At.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"8px",marginBottom:"4px"},children:"自定义预设（拖放到视图中添加）"}),At.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:Object.entries(s).map(([h,m])=>At.jsxs("span",{draggable:!0,onDragStart:p=>{p.dataTransfer.setData("text/x-preset-name",h),p.dataTransfer.effectAllowed="copy"},style:{...Mv,cursor:"grab",display:"inline-flex",alignItems:"center",gap:"4px"},children:[h," ",At.jsxs("span",{style:{opacity:.5},children:["(",m.magnets.length,")"]}),At.jsx("button",{onClick:p=>{p.stopPropagation(),l(g=>{const _={...g};return delete _[h],_})},style:{...hx,color:"#ff6b6b",cursor:"pointer"},title:"删除预设",children:"✕"})]},h))})]}),t&&r[t]&&r[t].size>0&&At.jsxs("button",{onClick:f,style:{...Fn,marginTop:"6px",width:"100%",background:"#1a2a3a",borderColor:"#2a4a6a"},children:["💾 保存「",t,"」为预设"]})]})}function PR({grouping:r,selectedIds:t,onDeselect:i,onRemoveMagnet:s}){const{groups:l,activeGroup:c,newGroupName:f,setNewGroupName:h,createGroup:m,selectGroup:p,deleteGroup:g,confirmRename:_}=r,y=f.trim()&&f.trim()!==c;return At.jsxs("div",{style:fx,children:[At.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...ep},children:[At.jsx("span",{children:"分组"}),t.size>0&&At.jsx("span",{onClick:m,style:{fontSize:"10px",color:"#6bd5ff",cursor:"pointer",marginLeft:"auto"},children:"创建分组 (Ctrl+G)"}),c&&At.jsx("span",{onClick:()=>y?_():i(),style:{fontSize:"10px",color:y?"#8ab4f8":"#aaa",cursor:"pointer",marginLeft:"auto"},children:y?"重命名":"取消选择"}),c&&At.jsx("span",{onClick:()=>g(c),style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"取消分组 (Ctrl+Shift+G)"})]}),At.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginBottom:"4px",flexWrap:"wrap"},children:Object.entries(l).map(([x,E])=>c===x?At.jsx("input",{autoFocus:!0,value:f,placeholder:x,onChange:T=>h(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(f.trim()&&f.trim()!==x?_():i()),T.key==="Escape"&&i()},style:{padding:"2px 6px",borderRadius:"10px",fontSize:"11px",background:"rgba(68,136,255,0.15)",border:"1px solid #4488ff",color:"#e0e0e0",outline:"none",width:"80px"}},x):At.jsxs("span",{onClick:()=>p(x),style:{padding:"2px 8px",borderRadius:"10px",fontSize:"11px",cursor:"pointer",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",color:"#aaa"},children:[x," ",At.jsxs("span",{style:{opacity:.5},children:["(",E.size,")"]}),At.jsx("button",{onClick:T=>{T.stopPropagation(),g(x)},style:{...hx,color:"#ff6b6b"},title:"删除组",children:"✕"})]},x))}),c&&At.jsx("div",{style:{fontSize:"10px",color:"#555",marginTop:"6px"},children:"↑↓←→ 移动 · PgUp/Home PgDn/End Tab/Shift+Tab 旋转"}),At.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...ep,marginTop:"8px"},children:[At.jsxs("span",{children:[t.size>0?"Shift+单击多选":"单击选择","(",t.size,")",c&&` · 「${c}」`]}),t.size>0&&At.jsx("span",{onClick:s,style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"删除"})]}),t.size>0&&At.jsx("div",{style:{display:"flex",gap:"3px",flexWrap:"wrap",marginBottom:"6px"},children:[...t].map(x=>At.jsxs("span",{style:{padding:"0 5px",borderRadius:"3px",fontSize:"10px",background:"rgba(68,136,255,0.15)",border:"1px solid rgba(68,136,255,0.3)",color:"#8ab4f8"},children:["#",x]},x))})]})}function zR(r,t,i){if(!t||!i)return 0;const s=r??new H(0,0,0),l=t.position.distanceTo(s),c=t.fov*Math.PI/180;return i.domElement.height/(2*l*Math.tan(c/2))}function FR(r,t,i,s){const l=s*2*.999,c=new Map,f=r.length;for(let h=0;h<f;h++){if(!t.has(r[h].id))continue;const m=new H(...r[h].pos).add(i);c.set(r[h].id,m);for(const{id:p,pos:g}of r){if(t.has(p))continue;if(m.distanceTo(g)<l)return}}return c}function IR(r,t,i,s,l){const c=l*2*.999,f=new Map,h=r.length;for(let m=0;m<h;m++){if(!t.has(r[m].id))continue;const p=i.clone().add(r[m].pos.clone().sub(i).applyQuaternion(s));f.set(r[m].id,{pos:p});for(const{id:g,pos:_}of r){if(t.has(g))continue;if(p.distanceTo(_)<c)return}}return f.forEach((m,p)=>{const g=r.find(_=>_.id===p);f.get(p).moment=g.moment.clone().applyQuaternion(s)}),f}function BR(r){const t=new H;r.getWorldDirection(t);const i=new H;i.crossVectors(t,r.up).normalize();const s=new H;return s.crossVectors(i,t).normalize(),{forward:t,right:i,up:s}}function HR({stateRef:r,cameraRef:t,rendererRef:i,setMagnets:s,needsSyncRef:l,getIdsInAffectedGroup:c},f,h,m){return{handleKeyDown:jt.useCallback(g=>{if(r.current.isSimulating)return;const _=c();if(_.size===0)return;const y=t.current;if(!y)return;const{forward:x,right:E,up:T}=BR(y),S=YA(r.current.magnets.filter(R=>_.has(R.id)).map(R=>R.pos)),v=f/h/zR(S,y,i.current);let D=null,L=null;switch(g.key){case"ArrowRight":D=E.multiplyScalar(v);break;case"ArrowLeft":D=E.multiplyScalar(-v);break;case"ArrowUp":D=T.multiplyScalar(v);break;case"ArrowDown":D=T.multiplyScalar(-v);break;case"PageUp":L=E.negate();break;case"PageDown":L=E;break;case"Home":L=T.negate();break;case"End":L=T;break;case"Tab":L=g.shiftKey?x.negate():x;break}if(D)g.preventDefault(),s(R=>{const N=FR(R,_,D,m);return N?(l.current=!0,R.map(P=>_.has(P.id)?{...P,pos:N.get(P.id)}:P)):R});else if(L){g.preventDefault();const R=Math.atan2(v,m),N=L,P=new ss().setFromAxisAngle(N,R);s(O=>{const W=IR(O,_,S,P,m);return W?(l.current=!0,O.map(A=>{if(!_.has(A.id))return A;const U=W.get(A.id);return{...A,pos:U.pos,moment:U.moment}})):O})}},[c,m])}}const Ev={type:"change"},yp={type:"start"},dx={type:"end"},Hc=new au,bv=new _a,GR=Math.cos(70*cM.DEG2RAD),gn=new H,Kn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},td=1e-6;class VR extends ZM{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new ss,this._lastTargetPosition=new H,this._quat=new ss().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new X_,this._sphericalDelta=new X_,this._scale=1,this._panOffset=new H,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new H,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XR.bind(this),this._onPointerDown=kR.bind(this),this._onPointerUp=WR.bind(this),this._onContextMenu=JR.bind(this),this._onMouseWheel=jR.bind(this),this._onKeyDown=ZR.bind(this),this._onTouchStart=KR.bind(this),this._onTouchMove=QR.bind(this),this._onMouseDown=qR.bind(this),this._onMouseMove=YR.bind(this),this._interceptControlDown=$R.bind(this),this._interceptControlUp=t2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ev),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=gn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new H(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<GR?this.object.lookAt(this.target):(bv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(bv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>td||this._lastTargetPosition.distanceToSquared(this.target)>td?(this.dispatchEvent(Ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function kR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function XR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function WR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dx),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function qR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case Pr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case Pr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(yp)}function YR(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function jR(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dx))}function ZR(r){this.enabled!==!1&&this._handleKeyDown(r)}function KR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(yp)}function QR(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function JR(r){this.enabled!==!1&&r.preventDefault()}function $R(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e2({containerRef:r,sceneRef:t,cameraRef:i,rendererRef:s,controlsRef:l},{magnets:c,selectedIds:f,activeGroup:h,groups:m,showVectors:p,ready:g,getIdsInAffectedGroup:_,keyTrapRef:y},x,E,T){const S=jt.useRef([]),v=jt.useRef([]),D=jt.useRef([]),L=jt.useRef([]),R=jt.useRef([]);return jt.useEffect(()=>{const N=r.current;if(!N||!g)return;let P=N.clientWidth||800,O=N.clientHeight||600;const W=new NM;W.background=new be(657941),t.current=W;const A=new yi(50,P/O,.1,1e3);A.position.set(0,0,12),i.current=A;const U=new WA({antialias:!0});U.setSize(P,O),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.appendChild(U.domElement),s.current=U;const G=new VR(A,U.domElement);G.enableDamping=!0,G.dampingFactor=.05,G.rotateSpeed=.5,G.zoomSpeed=.8,G.panSpeed=.5,G.minDistance=2,G.maxDistance=50,l.current=G;const Z=()=>{y.current&&document.activeElement!==y.current&&y.current.focus()};G.addEventListener("end",Z),W.add(new qM(16777215,.5));const q=new H_(16777215,.8);q.position.set(5,5,5),W.add(q);const nt=new H_(4482815,.3);nt.position.set(-5,-5,-5),W.add(nt);const it=new jM(16,16,3355477,2236979);it.rotation.x=Math.PI/2,W.add(it);const F=()=>{const B=N.clientWidth||800,tt=N.clientHeight||600;A.aspect=B/tt,A.updateProjectionMatrix(),U.setSize(B,tt)};return window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F),G.removeEventListener("end",Z),G.dispose(),U.dispose(),t.current=null,N.contains(U.domElement)&&N.removeChild(U.domElement)}},[g]),jt.useEffect(()=>{const N=t.current;if(!N)return;const P=q=>{q&&(N.remove(q),q.geometry&&q.geometry.dispose(),q.material&&(Array.isArray(q.material)?q.material.forEach(nt=>nt.dispose()):q.material.dispose()),q.children&&q.children.forEach(P))};[...S.current,...v.current,...D.current,...L.current,...R.current].forEach(P);const O=new H(0,1,0),W=[],A=[],U=[],G=[],Z=[];c.forEach(q=>{const nt=new vp(x,32,32),it=new GM({color:q.color,metalness:.8,roughness:.2,emissive:q.color,emissiveIntensity:.15}),F=new Si(nt,it);F.userData.id=q.id,N.add(F),W.push(F);const B=new tu(x*1.12,.02,16,64),tt=new su({color:16777215,transparent:!0,opacity:.85,depthTest:!1}),Mt=new Si(B,tt);if(Mt.visible=!1,Mt.renderOrder=999,N.add(Mt),Z.push(Mt),!p){A.push(null),U.push(null),G.push(null);return}const _t=new Yh(O,new H,x*3.6,16768256,x*.5,x*.3);N.add(_t),A.push(_t);const z=new Yh(O,new H,x,65535,x*.4,x*.24);z.visible=!1,N.add(z),U.push(z);const J=new Yh(O,new H,x,16711935,x*.32,x*.2);J.visible=!1,N.add(J),G.push(J)}),S.current=W,v.current=A,D.current=U,L.current=G,R.current=Z},[c.length,p,g]),jt.useEffect(()=>{const N=i.current,P=s.current;if(!t.current||!N||!P)return;const O=S.current,W=v.current,A=D.current,U=L.current,G=R.current,Z=_();c.forEach((q,nt)=>{const it=q.pos.clone().multiplyScalar(E),F=O[nt];F&&(F.position.copy(it),F.material.emissiveIntensity=f.has(q.id)?.4:.15);const B=G[nt];if(B){const z=Z.has(q.id);if(B.visible=z,B.visible){B.position.copy(it),B.lookAt(N.position);const J=N.position.distanceTo(it),pt=N.fov*Math.PI/180,Dt=P.domElement.height/(2*J*Math.tan(pt/2)),It=T/Dt,et=x+It*1.5,ht=It*.5;B.geometry.dispose(),B.geometry=new tu(et,ht,8,64)}}if(!p)return;const tt=W[nt];if(tt){const z=q.moment.clone().normalize();tt.position.copy(it),tt.setDirection(z),tt.setLength(x*3.6,x*.5,x*.3)}const Mt=A[nt];if(Mt){const z=q.f?q.f.length():0;if(z>1e-25){Mt.visible=!0;const J=q.f.clone().normalize(),pt=x*Math.min(6,Math.max(.5,Math.log10(z+1e-10)+10));Mt.position.copy(it),Mt.setDirection(J),Mt.setLength(pt,x*.4,x*.24)}else Mt.visible=!1}const _t=U[nt];if(_t){const z=q.tau?q.tau.length():0;if(z>1e-25){_t.visible=!0;const J=q.tau.clone().normalize(),pt=x*Math.min(5,Math.max(.4,Math.log10(z+1e-10)+8));_t.position.copy(it),_t.setDirection(J),_t.setLength(pt,x*.32,x*.2)}else _t.visible=!1}})},[c,f,h,m,p,g]),{meshesRef:S}}const Nr=100,Tv=3;function n2(r){const t=new H(0,0,0),i=r.length;return i===0||(r.forEach(s=>t.add(s.pos)),t.divideScalar(i)),t}function i2(){const t=.0025*Nr,[i,s]=jt.useState([]),[l,c]=jt.useState(new Set),[f,h]=jt.useState(null),[m,p]=jt.useState(!1),[g,_]=jt.useState(4e-5),[y,x]=jt.useState(!0),[E,T]=jt.useState(!1),[S,v]=jt.useState(!0),[D,L]=jt.useState(0),[R,N]=jt.useState(null),[P,O]=jt.useState([]),[W,A]=jt.useState(!1),[U,G]=jt.useState({}),Z=jt.useRef(null),q=jt.useRef(null),nt=jt.useRef(null),it=jt.useRef(null),F=jt.useRef(null),B=jt.useRef(!0),tt=jt.useRef(new Set);tt.current=l;const Mt=jt.useRef(null),_t=jt.useRef({magnets:i,isSimulating:m,simSpeed:g,rotateMoments:y,useGravity:E});_t.current={magnets:i,isSimulating:m,simSpeed:g,rotateMoments:y,useGravity:E};const z=RR({selectedIds:l,setSelectedIds:c,keyTrapRef:Mt,stateRef:_t}),{activeGroup:J,groups:pt,setGroups:Dt,setActiveGroup:It,getIdsInAffectedGroup:et,cleanupIds:ht,resetGroups:Ot}=z,Gt=jt.useRef(null);jt.useEffect(SR(Gt,A,.0025),[]);const Bt=rt=>(rt==null?void 0:rt.toFixed(6))??"N/A";jt.useEffect(()=>{tR().then(rt=>(O(rt),gv(rt[0],.0025))).then(rt=>s(rt.magnets)).catch(console.error)},[]);const ae=l.size===1?[...l][0]:null,{push:Le,reset:ge,histIdxRef:he}=ER({getMagnets:()=>_t.current.magnets,selectedId:ae,onApplySnap:rt=>{B.current=!0,s(rt);const vt=rt.find(St=>St.id===ae);vt&&N(Kd(vt))}}),{stepDeltaTimeRef:Te}=AR(Gt,_t,W,Z,q,nt,it,F,B,tt,s,N,L,p,Bt),{meshesRef:oe}=e2({containerRef:Z,sceneRef:q,cameraRef:nt,rendererRef:it,controlsRef:F},{magnets:i,selectedIds:l,activeGroup:J,groups:pt,showVectors:S,ready:W,getIdsInAffectedGroup:et,keyTrapRef:Mt},t,Nr,Tv);jt.useEffect(()=>{if(ae===null){N(null);return}const rt=i.find(vt=>vt.id===ae);N(rt?Kd(rt):null)},[ae]);const{handleKeyDown:Qe}=HR({stateRef:_t,cameraRef:nt,rendererRef:it,setMagnets:s,needsSyncRef:B,getIdsInAffectedGroup:et},Tv,Nr,.0025),X=jt.useRef(null),Ye=rt=>{X.current={x:rt.clientX,y:rt.clientY}},ye=rt=>{const vt=Z.current,St=nt.current;if(!vt||!St)return;const qt=X.current;if(qt){const dt=rt.clientX-qt.x,Ct=rt.clientY-qt.y;if(dt*dt+Ct*Ct>25)return}const k=vt.getBoundingClientRect(),Ut=new ce((rt.clientX-k.left)/k.width*2-1,-((rt.clientY-k.top)/k.height)*2+1),Tt=new V_;Tt.setFromCamera(Ut,St);const Lt=Tt.intersectObjects(oe.current),xt=Lt.length>0?Lt[0].object.userData.id:null;xt===null?rt.shiftKey||c(new Set):rt.shiftKey?c(dt=>{const Ct=new Set(dt);return Ct.has(xt)?Ct.delete(xt):Ct.add(xt),Ct}):c(new Set([xt]))},we=()=>{B.current=!0,s(rt=>[...rt,eu({pos:new H((Math.random()-.5)*.02,(Math.random()-.5)*.02,0),color:Math.random()>.5?4474111:16729156})]),L(0)},Xt=()=>{const rt=et();rt.size!==0&&(B.current=!0,s(vt=>vt.filter(St=>!rt.has(St.id))),ht(rt),c(new Set),L(0))},I=rt=>{var vt;(vt=Gt.current)==null||vt.reset(),ge(),B.current=!0,jA(),gv(rt,.0025).then(St=>s(St.magnets)),c(new Set),Ot(),p(!1),L(0)},b=(rt,vt,St)=>{const qt=parseFloat(St);if(isNaN(qt))return;const Ut={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[rt];if(!Ut)return;const[Tt,Lt]=Ut;Le(i);const xt=i.map(dt=>{if(dt.id!==ae)return dt;const Ct=[...dt[Tt].toArray?dt[Tt].toArray():dt[Tt]??[0,0,0]];return Ct[vt]=qt*Lt,{...dt,[Tt]:new H(...Ct)}});Le(xt),he.current=-1,B.current=!0,s(xt),N(dt=>{if(!dt)return dt;const Ct={...dt,[rt]:[...dt[rt]]};return Ct[rt][vt]=Bt(qt),Ct})},j=jt.useCallback(rt=>{const vt=JA(i.map(St=>({...St,pos:St.pos.clone().multiplyScalar(400)})),"exported","radius");if(rt==="copy")navigator.clipboard.writeText(vt).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const St=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([vt],{type:"application/json"})),download:`magnets_${Date.now()}.json`});St.click(),URL.revokeObjectURL(St.href)}},[i]),gt=()=>{const rt=KA(i,ae,f);rt&&(Le(i),Le(rt),B.current=!0,s(rt))},bt=()=>{m||(B.current=!0),p(rt=>!rt)},ft=jt.useCallback(()=>{if(!J||!pt[J])return;const rt=pt[J],vt=i.filter(k=>rt.has(k.id));if(vt.length===0)return;const St=n2(vt),qt=vt.map(k=>({pos:k.pos.clone().sub(St),moment:k.moment.clone(),color:k.color}));G(k=>({...k,[J]:{magnets:qt}}))},[J,pt,i]),Yt=jt.useCallback((rt,vt)=>{const St=Z.current,qt=nt.current;if(!St||!qt)return[0,0,0];const k=St.getBoundingClientRect(),Ut=new ce((rt-k.left)/k.width*2-1,-((vt-k.top)/k.height)*2+1),Tt=new V_;Tt.setFromCamera(Ut,qt);const Lt=new _a(new H(0,0,1),0),xt=new H;return Tt.ray.intersectPlane(Lt,xt)||Tt.ray.at(10,xt),[xt.x/Nr,xt.y/Nr,xt.z/Nr]},[]),Nt=jt.useCallback((rt,vt)=>{const St=U[rt];if(!St)return;B.current=!0;const qt=new Set;s(Ut=>{const Tt=[...Ut];for(const Lt of St.magnets){const xt=eu({pos:Lt.pos.clone().add(vt),vel:Lt.vel.clone(),moment:Lt.moment.clone(),color:Lt.color,fixed:Lt.fixed});qt.add(xt.id),Tt.push(xt)}return Tt});const k=ux(pt,rt);Dt(Ut=>({...Ut,[k]:qt})),c(qt),It(k),L(0)},[U,pt]),Wt=jt.useCallback(rt=>{rt.preventDefault(),rt.dataTransfer.dropEffect="copy"},[]),ee=jt.useCallback(rt=>{rt.preventDefault();const vt=rt.dataTransfer.getData("text/x-preset-name");if(!vt||!U[vt])return;const St=Yt(rt.clientX,rt.clientY);Nt(vt,St)},[U,Yt,Nt]),Rt=(rt,vt)=>{const St=et();if(St.size===0)return;Le(i),B.current=!0;const qt=i.map(k=>St.has(k.id)?{...k,[rt]:vt}:k);Le(qt),he.current=-1,s(qt)};if(!W)return At.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:At.jsxs("div",{children:[At.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),At.jsx("div",{children:"Loading physics engine..."})]})});const wt=et();return At.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[At.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[At.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[At.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",At.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),At.jsx(UR,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:Te,totalSimTime:D,useGravity:E,magnets:i,selectedId:ae,refYId:f,setRefYId:h,onToggle:bt,onResetVel:()=>{B.current=!0,s(rt=>rt.map(vt=>({...vt,vel:new H,omega:new H})))},onPerturb:()=>{B.current=!0,s(rt=>rt.map(vt=>ZA(vt,.2*.0025)))},onReframe:gt,onSimSpeedChange:_,onGravityChange:T}),At.jsxs("div",{style:{display:"flex",gap:"8px"},children:[At.jsx("button",{onClick:we,style:{...Fn,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),At.jsx("button",{onClick:()=>j("download"),style:{...Fn,flex:1},children:"⬇ 导出"}),At.jsx("button",{onClick:()=>j("copy"),style:{...Fn,flex:1},children:"📋 复制"})]}),At.jsx(OR,{groups:pt,activeGroup:J,presets:P,customPresets:U,setCustomPresets:G,applyPreset:I,saveGroupAsPreset:ft}),At.jsx(PR,{grouping:z,selectedIds:l,onDeselect:()=>{z.setActiveGroup(null),z.setNewGroupName("")},onRemoveMagnet:Xt}),wt.size>1&&At.jsxs("div",{style:fx,children:[At.jsxs("div",{style:ep,children:["批量修改 (",wt.size,")"]}),At.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"4px"},children:"颜色"}),At.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[[16729156,4474111,4521796,16768256,16729343,4521983,16746496,8930559].map(rt=>At.jsx("button",{onClick:()=>Rt("color",rt),style:{width:"22px",height:"22px",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",background:`#${rt.toString(16).padStart(6,"0")}`}},rt)),At.jsx("input",{type:"color",onChange:rt=>Rt("color",parseInt(rt.target.value.slice(1),16)),style:{width:"22px",height:"22px",padding:0,border:"none",borderRadius:"4px",cursor:"pointer"}})]}),At.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[At.jsx("button",{onClick:()=>Rt("vel",new H),style:Fn,children:"清零速度"}),At.jsx("button",{onClick:()=>Rt("omega",new H),style:Fn,children:"清零角速度"}),At.jsx("button",{onClick:()=>{const rt=et();B.current=!0,s(vt=>vt.map(St=>rt.has(St.id)?{...St,fixed:!St.fixed}:St))},style:Fn,children:"切换固定"})]}),At.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"6px",marginBottom:"4px"},children:"磁矩方向"}),At.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[["+X",[1,0,0]],["−X",[-1,0,0]],["+Y",[0,1,0]],["−Y",[0,-1,0]],["+Z",[0,0,1]],["−Z",[0,0,-1]]].map(([rt,vt])=>At.jsx("button",{onClick:()=>{const St=et();Le(i),B.current=!0;const qt=i.map(k=>{if(!St.has(k.id))return k;const Ut=Math.sqrt(k.moment[0]**2+k.moment[1]**2+k.moment[2]**2);return{...k,moment:new H(...vt).multiplyScalar(Ut)}});Le(qt),he.current=-1,s(qt)},style:Fn,children:rt},rt))})]}),ae!==null&&At.jsx(LR,{selectedId:ae,selectedMag:i.find(rt=>rt.id===ae),isSimulating:m,editDraft:R,setEditDraft:N,onToggle:bt,onToggleFixed:()=>{B.current=!0,s(rt=>rt.map(vt=>vt.id===ae?{...vt,fixed:!vt.fixed}:vt))},onRemove:Xt,onCommit:b}),At.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[At.jsx("input",{type:"checkbox",checked:S,onChange:rt=>v(rt.target.checked),style:{accentColor:"#4488ff"}}),At.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),At.jsx("div",{ref:Z,onClick:ye,onMouseDown:Ye,onDragOver:Wt,onDrop:ee,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer",position:"relative"},children:At.jsx("textarea",{ref:Mt,onKeyDown:Qe,style:{position:"absolute",left:0,top:0,width:"1px",height:"1px",opacity:0,padding:0,border:"none",outline:"none",resize:"none",overflow:"hidden",pointerEvents:"none"},tabIndex:-1})})]})}RS.createRoot(document.getElementById("root")).render(At.jsx(jt.StrictMode,{children:At.jsx(i2,{})}));
