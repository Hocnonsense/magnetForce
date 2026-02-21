var uy=Object.defineProperty;var fy=(r,t,i)=>t in r?uy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var t_=(r,t,i)=>fy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function hy(){if(e_)return ko;e_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var n_;function dy(){return n_||(n_=1,gh.exports=hy()),gh.exports}var Jt=dy(),_h={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function py(){if(i_)return ce;i_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(N,it,mt){this.props=N,this.context=it,this.refs=M,this.updater=mt||b}x.prototype.isReactComponent={},x.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=x.prototype;function P(N,it,mt){this.props=N,this.context=it,this.refs=M,this.updater=mt||b}var L=P.prototype=new O;L.constructor=P,T(L,x.prototype),L.isPureReactComponent=!0;var I=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(N,it,mt){var Rt=mt.ref;return{$$typeof:r,type:N,key:it,ref:Rt!==void 0?Rt:null,props:mt}}function U(N,it){return C(N.type,it,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function J(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(mt){return it[mt]})}var tt=/\/+/g;function ft(N,it){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):it.toString(36)}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,it,mt,Rt,Gt){var K=typeof N;(K==="undefined"||K==="boolean")&&(N=null);var ht=!1;if(N===null)ht=!0;else switch(K){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(N.$$typeof){case r:case t:ht=!0;break;case g:return ht=N._init,F(ht(N._payload),it,mt,Rt,Gt)}}if(ht)return Gt=Gt(N),ht=Rt===""?"."+ft(N,0):Rt,I(Gt)?(mt="",ht!=null&&(mt=ht.replace(tt,"$&/")+"/"),F(Gt,it,mt,"",function(Xt){return Xt})):Gt!=null&&(V(Gt)&&(Gt=U(Gt,mt+(Gt.key==null||N&&N.key===Gt.key?"":(""+Gt.key).replace(tt,"$&/")+"/")+ht)),it.push(Gt)),1;ht=0;var Dt=Rt===""?".":Rt+":";if(I(N))for(var qt=0;qt<N.length;qt++)Rt=N[qt],K=Dt+ft(Rt,qt),ht+=F(Rt,it,mt,K,Gt);else if(qt=y(N),typeof qt=="function")for(N=qt.call(N),qt=0;!(Rt=N.next()).done;)Rt=Rt.value,K=Dt+ft(Rt,qt++),ht+=F(Rt,it,mt,K,Gt);else if(K==="object"){if(typeof N.then=="function")return F(ut(N),it,mt,Rt,Gt);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(N,it,mt){if(N==null)return N;var Rt=[],Gt=0;return F(N,Rt,"","",function(K){return it.call(mt,K,Gt++)}),Rt}function rt(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=mt)},function(mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=mt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var St=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},vt={map:G,forEach:function(N,it,mt){G(N,function(){it.apply(this,arguments)},mt)},count:function(N){var it=0;return G(N,function(){it++}),it},toArray:function(N){return G(N,function(it){return it})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ce.Activity=_,ce.Children=vt,ce.Component=x,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=P,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},ce.cache=function(N){return function(){return N.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(N,it,mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=T({},N.props),Gt=N.key;if(it!=null)for(K in it.key!==void 0&&(Gt=""+it.key),it)!j.call(it,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&it.ref===void 0||(Rt[K]=it[K]);var K=arguments.length-2;if(K===1)Rt.children=mt;else if(1<K){for(var ht=Array(K),Dt=0;Dt<K;Dt++)ht[Dt]=arguments[Dt+2];Rt.children=ht}return C(N.type,Gt,Rt)},ce.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ce.createElement=function(N,it,mt){var Rt,Gt={},K=null;if(it!=null)for(Rt in it.key!==void 0&&(K=""+it.key),it)j.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Gt[Rt]=it[Rt]);var ht=arguments.length-2;if(ht===1)Gt.children=mt;else if(1<ht){for(var Dt=Array(ht),qt=0;qt<ht;qt++)Dt[qt]=arguments[qt+2];Gt.children=Dt}if(N&&N.defaultProps)for(Rt in ht=N.defaultProps,ht)Gt[Rt]===void 0&&(Gt[Rt]=ht[Rt]);return C(N,K,Gt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:d,render:N}},ce.isValidElement=V,ce.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:rt}},ce.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},ce.startTransition=function(N){var it=z.T,mt={};z.T=mt;try{var Rt=N(),Gt=z.S;Gt!==null&&Gt(mt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(B,St)}catch(K){St(K)}finally{it!==null&&mt.types!==null&&(it.types=mt.types),z.T=it}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(N){return z.H.use(N)},ce.useActionState=function(N,it,mt){return z.H.useActionState(N,it,mt)},ce.useCallback=function(N,it){return z.H.useCallback(N,it)},ce.useContext=function(N){return z.H.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N,it){return z.H.useDeferredValue(N,it)},ce.useEffect=function(N,it){return z.H.useEffect(N,it)},ce.useEffectEvent=function(N){return z.H.useEffectEvent(N)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(N,it,mt){return z.H.useImperativeHandle(N,it,mt)},ce.useInsertionEffect=function(N,it){return z.H.useInsertionEffect(N,it)},ce.useLayoutEffect=function(N,it){return z.H.useLayoutEffect(N,it)},ce.useMemo=function(N,it){return z.H.useMemo(N,it)},ce.useOptimistic=function(N,it){return z.H.useOptimistic(N,it)},ce.useReducer=function(N,it,mt){return z.H.useReducer(N,it,mt)},ce.useRef=function(N){return z.H.useRef(N)},ce.useState=function(N){return z.H.useState(N)},ce.useSyncExternalStore=function(N,it,mt){return z.H.useSyncExternalStore(N,it,mt)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.2.3",ce}var a_;function tp(){return a_||(a_=1,_h.exports=py()),_h.exports}var ye=tp(),vh={exports:{}},Xo={},xh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function my(){return s_||(s_=1,(function(r){function t(F,G){var rt=F.length;F.push(G);t:for(;0<rt;){var St=rt-1>>>1,vt=F[St];if(0<l(vt,G))F[St]=G,F[rt]=vt,rt=St;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],rt=F.pop();if(rt!==G){F[0]=rt;t:for(var St=0,vt=F.length,N=vt>>>1;St<N;){var it=2*(St+1)-1,mt=F[it],Rt=it+1,Gt=F[Rt];if(0>l(mt,rt))Rt<vt&&0>l(Gt,mt)?(F[St]=Gt,F[Rt]=rt,St=Rt):(F[St]=mt,F[it]=rt,St=it);else if(Rt<vt&&0>l(Gt,rt))F[St]=Gt,F[Rt]=rt,St=Rt;else break t}}return G}function l(F,G){var rt=F.sortIndex-G.sortIndex;return rt!==0?rt:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,v=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(F){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=F)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function I(F){if(T=!1,L(F),!b)if(i(m)!==null)b=!0,B||(B=!0,J());else{var G=i(p);G!==null&&ut(I,G.startTime-F)}}var B=!1,z=-1,j=5,C=-1;function U(){return M?!0:!(r.unstable_now()-C<j)}function V(){if(M=!1,B){var F=r.unstable_now();C=F;var G=!0;try{t:{b=!1,T&&(T=!1,O(z),z=-1),y=!0;var rt=v;try{e:{for(L(F),_=i(m);_!==null&&!(_.expirationTime>F&&U());){var St=_.callback;if(typeof St=="function"){_.callback=null,v=_.priorityLevel;var vt=St(_.expirationTime<=F);if(F=r.unstable_now(),typeof vt=="function"){_.callback=vt,L(F),G=!0;break e}_===i(m)&&s(m),L(F)}else s(m);_=i(m)}if(_!==null)G=!0;else{var N=i(p);N!==null&&ut(I,N.startTime-F),G=!1}}break t}finally{_=null,v=rt,y=!1}G=void 0}}finally{G?J():B=!1}}}var J;if(typeof P=="function")J=function(){P(V)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ft=tt.port2;tt.port1.onmessage=V,J=function(){ft.postMessage(null)}}else J=function(){x(V,0)};function ut(F,G){z=x(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var rt=v;v=G;try{return F()}finally{v=rt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var rt=v;v=F;try{return G()}finally{v=rt}},r.unstable_scheduleCallback=function(F,G,rt){var St=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?St+rt:St):rt=St,F){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=rt+vt,F={id:g++,callback:G,priorityLevel:F,startTime:rt,expirationTime:vt,sortIndex:-1},rt>St?(F.sortIndex=rt,t(p,F),i(m)===null&&F===i(p)&&(T?(O(z),z=-1):T=!0,ut(I,rt-St))):(F.sortIndex=vt,t(m,F),b||y||(b=!0,B||(B=!0,J()))),F},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(F){var G=v;return function(){var rt=v;v=G;try{return F.apply(this,arguments)}finally{v=rt}}}})(Sh)),Sh}var r_;function gy(){return r_||(r_=1,xh.exports=my()),xh.exports}var yh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function _y(){if(o_)return zn;o_=1;var r=tp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var l_;function vy(){if(l_)return yh.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=_y(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function xy(){if(c_)return Xo;c_=1;var r=gy(),t=tp(),i=vy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case P:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},St=[],vt=-1;function N(e){return{current:e}}function it(e){0>vt||(e.current=St[vt],St[vt]=null,vt--)}function mt(e,n){vt++,St[vt]=e.current,e.current=n}var Rt=N(null),Gt=N(null),K=N(null),ht=N(null);function Dt(e,n){switch(mt(K,n),mt(Gt,e),mt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Rt),mt(Rt,e)}function qt(){it(Rt),it(Gt),it(K)}function Xt(e){e.memoizedState!==null&&mt(ht,e);var n=Rt.current,a=bg(n,e.type);n!==a&&(mt(Gt,e),mt(Rt,a))}function _e(e){Gt.current===e&&(it(Rt),it(Gt)),ht.current===e&&(it(ht),Bo._currentValue=rt)}var Qe,ve;function me(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+ve}var Ee=!1;function oe(e,n){if(!e||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var st=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){st=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){st=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var H=S.split(`
`),nt=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function je(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return me("Activity");default:return""}}function w(e){try{var n="",a=null;do n+=je(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,Wt=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,Et=r.unstable_shouldYield,D=r.unstable_requestPaint,E=r.unstable_now,X=r.unstable_getCurrentPriorityLevel,ct=r.unstable_ImmediatePriority,dt=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,Lt=r.unstable_LowPriority,Tt=r.unstable_IdlePriority,Vt=r.log,$t=r.unstable_setDisableYieldValue,yt=null,bt=null;function Bt(e){if(typeof Vt=="function"&&$t(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(yt,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,Ut=Math.log,he=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ut(e)/he|0)|0}var Ot=256,At=262144,Ht=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Mt(o):(S&=A,S!==0?u=Mt(S):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~f,A!==0?u=Mt(A):S!==0?u=Mt(S):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Pt(a),_t=1<<pt;A[pt]=0,H[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var lt=st[pt];lt!==null&&(lt.lane&=-536870913)}a&=~_t}o!==0&&ul(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function ul(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Hs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Oi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ci=Math.random().toString(36).slice(2),on="__reactFiber$"+ci,bn="__reactProps$"+ci,Ei="__reactContainer$"+ci,Vs="__reactEvents$"+ci,ks="__reactListeners$"+ci,fl="__reactHandles$"+ci,$r="__reactResources$"+ci,cs="__reactMarker$"+ci;function to(e){delete e[on],delete e[bn],delete e[Vs],delete e[ks],delete e[fl]}function Aa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ug(e);e!==null;){if(a=e[on])return a;e=Ug(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[on]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[cs]=!0}var q=new Set,ot={};function at(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(ot[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},zt={};function Yt(e){return Ct.call(zt,e)?!0:Ct.call(kt,e)?!1:Nt.test(e)?zt[e]=!0:(kt[e]=!0,!1)}function Zt(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Ne(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function le(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,u,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,ie(n)):a!=null?An(e,S,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ie(A):e.removeAttribute("name")}function Ki(e,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ye(e)}function An(e,n,a){n==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&wn(e,f,n[f])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Mp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ze(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ui(e,!!a.multiple,n,!1)}}}var pu=!1;function Ep(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(Ws!==null||qs!==null)&&($l(),Ws&&(n=Ws,e=qs,qs=Ws=null,Mp(n),e)))for(n=0;n<e.length;n++)Mp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Ji)try{var no={};Object.defineProperty(no,"passive",{get:function(){mu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{mu=!1}var wa=null,gu=null,dl=null;function bp(){if(dl)return dl;var e,n=gu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Tp(){return!1}function kn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:Tp,this.isPropagationStopped=Tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=kn(fs),io=_({},fs,{view:0,detail:0}),lx=kn(io),_u,vu,ao,_l=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(_u=e.screenX-ao.screenX,vu=e.screenY-ao.screenY):vu=_u=0,ao=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Ap=kn(_l),cx=_({},_l,{dataTransfer:0}),ux=kn(cx),fx=_({},io,{relatedTarget:0}),xu=kn(fx),hx=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=kn(hx),px=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mx=kn(px),gx=_({},fs,{data:0}),Rp=kn(gx),_x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xx[e])?!!n[e]:!1}function Su(){return Sx}var yx=_({},io,{key:function(e){if(e.key){var n=_x[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mx=kn(yx),Ex=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=kn(Ex),bx=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Tx=kn(bx),Ax=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rx=kn(Ax),Cx=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=kn(Cx),Dx=_({},fs,{newState:0,oldState:0}),Ux=kn(Dx),Lx=[9,13,27,32],yu=Ji&&"CompositionEvent"in window,so=null;Ji&&"documentMode"in document&&(so=document.documentMode);var Nx=Ji&&"TextEvent"in window&&!so,wp=Ji&&(!yu||so&&8<so&&11>=so),Dp=" ",Up=!1;function Lp(e,n){switch(e){case"keyup":return Lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Ox(e,n){switch(e){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return e=n.data,e===Dp&&Up?null:e;default:return null}}function Px(e,n){if(Ys)return e==="compositionend"||!yu&&Lp(e,n)?(e=bp(),dl=gu=wa=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zx[e.type]:n==="textarea"}function Pp(e,n,a,o){Ws?qs?qs.push(o):qs=[o]:Ws=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Ix(e){_g(e,0)}function vl(e){var n=us(e);if(ze(n))return e}function zp(e,n){if(e==="change")return n}var Ip=!1;if(Ji){var Mu;if(Ji){var Eu="oninput"in document;if(!Eu){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Eu=typeof Fp.oninput=="function"}Mu=Eu}else Mu=!1;Ip=Mu&&(!document.documentMode||9<document.documentMode)}function Bp(){ro&&(ro.detachEvent("onpropertychange",Hp),oo=ro=null)}function Hp(e){if(e.propertyName==="value"&&vl(oo)){var n=[];Pp(n,oo,e,du(e)),Ep(Ix,n)}}function Fx(e,n,a){e==="focusin"?(Bp(),ro=n,oo=a,ro.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(oo)}function Hx(e,n){if(e==="click")return vl(n)}function Gx(e,n){if(e==="input"||e==="change")return vl(n)}function Vx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Vx;function lo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ct.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,n){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=te(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=te(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kx=Ji&&"documentMode"in document&&11>=document.documentMode,js=null,Tu=null,co=null,Au=!1;function Wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||js==null||js!==te(o)||(o=js,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=rc(Tu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ru={},qp={};Ji&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ds(e){if(Ru[e])return Ru[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Ru[e]=n[a];return e}var Yp=ds("animationend"),jp=ds("animationiteration"),Zp=ds("animationstart"),Xx=ds("transitionrun"),Wx=ds("transitionstart"),qx=ds("transitioncancel"),Kp=ds("transitionend"),Qp=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function Ti(e,n){Qp.set(e,n),at(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Ks=0,wu=0;function Sl(){for(var e=Ks,n=wu=Ks=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Jp(a,u,f)}}function yl(e,n,a,o){fi[Ks++]=e,fi[Ks++]=n,fi[Ks++]=a,fi[Ks++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return yl(e,n,a,o),Ml(e)}function ps(e,n){return yl(e,null,null,n),Ml(e)}function Jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ml(e){if(50<Lo)throw Lo=0,Hf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function Yx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new Yx(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")Uu(e)&&(S=1);else if(typeof e=="string")S=JS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ti(31,a,n,u),e.elementType=C,e.lanes=f,e;case T:return ms(a.children,u,f,n);case M:S=8,u|=24;break;case x:return e=ti(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case I:return e=ti(13,a,n,u),e.elementType=I,e.lanes=f,e;case B:return e=ti(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:S=10;break t;case O:S=9;break t;case L:S=11;break t;case z:S=14;break t;case j:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function tm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Nu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var em=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(n={value:e,source:n,stack:w(n)},em.set(e,n),n)}return{value:e,source:n,stack:w(n)}}var Js=[],$s=0,bl=null,uo=0,di=[],pi=0,Da=null,Pi=1,zi="";function ta(e,n){Js[$s++]=uo,Js[$s++]=bl,bl=e,uo=n}function nm(e,n,a){di[pi++]=Pi,di[pi++]=zi,di[pi++]=Da,Da=e;var o=Pi;e=zi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Pi=1<<32-Pt(n)+u|a<<u|o,zi=f+e}else Pi=1<<f|a<<u|o,zi=e}function Ou(e){e.return!==null&&(ta(e,1),nm(e,1,0))}function Pu(e){for(;e===bl;)bl=Js[--$s],Js[$s]=null,uo=Js[--$s],Js[$s]=null;for(;e===Da;)Da=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function im(e,n){di[pi++]=Pi,di[pi++]=zi,di[pi++]=Da,Pi=n.id,zi=n.overflow,Da=e}var Dn=null,Ze=null,Ae=!1,Ua=null,mi=!1,zu=Error(s(519));function La(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(hi(n,e)),zu}function am(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[bn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)Se(Oo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Ki(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yg(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||La(e,!0)}function sm(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Dn=Dn.return}}function tr(e){if(e!==Dn)return!1;if(!Ae)return sm(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&Ze&&La(e),sm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Dg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Dg(e)}else n===27?(n=Ze,qa(e.type)?(e=rh,rh=null,Ze=e):Ze=n):Ze=Dn?_i(e.stateNode.nextSibling):null;return!0}function gs(){Ze=Dn=null,Ae=!1}function Iu(){var e=Ua;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ua=null),e}function fo(e){Ua===null?Ua=[e]:Ua.push(e)}var Fu=N(null),_s=null,ea=null;function Na(e,n,a){mt(Fu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Fu.current,it(Fu)}function Bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Hu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Bu(f.return,a,e),o||(S=null);break t}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Bu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function er(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;$n(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Hu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return rm(_s,e)}function Al(e,n){return _s===null&&vs(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var jx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zx=r.unstable_scheduleCallback,Kx=r.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new jx,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&Zx(Kx,function(){e.controller.abort()})}var po=null,Vu=0,nr=0,ir=null;function Qx(e,n){if(po===null){var a=po=[];Vu=0,nr=qf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(om,om),n}function om(){if(--Vu===0&&po!==null){ir!==null&&(ir.status="fulfilled");var e=po;po=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=F.S;F.S=function(e,n){W0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qx(e,n),lm!==null&&lm(e,n)};var xs=N(null);function ku(){var e=xs.current;return e!==null?e:qe.pooledCache}function Rl(e,n){n===null?mt(xs,xs.current):mt(xs,n.pool)}function cm(){var e=ku();return e===null?null:{parent:ln._currentValue,pool:e}}var ar=Error(s(460)),Xu=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e}throw ys=n,ar}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,ar):a}}var ys=null;function hm(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function dm(e){if(e===ar||e===Cl)throw Error(s(483))}var sr=null,mo=0;function Dl(e){var n=mo;return mo+=1,sr===null&&(sr=[]),fm(sr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pm(e){function n(Y,k){if(e){var et=Y.deletions;et===null?(Y.deletions=[k],Y.flags|=16):et.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=$i(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,et){return Y.index=et,e?(et=Y.alternate,et!==null?(et=et.index,et<k?(Y.flags|=67108866,k):et):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,et,gt){return k===null||k.tag!==6?(k=Lu(et,Y.mode,gt),k.return=Y,k):(k=u(k,et),k.return=Y,k)}function H(Y,k,et,gt){var ee=et.type;return ee===T?pt(Y,k,et.props.children,gt,et.key):k!==null&&(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===j&&Ss(ee)===k.type)?(k=u(k,et.props),go(k,et),k.return=Y,k):(k=El(et.type,et.key,et.props,null,Y.mode,gt),go(k,et),k.return=Y,k)}function nt(Y,k,et,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Nu(et,Y.mode,gt),k.return=Y,k):(k=u(k,et.children||[]),k.return=Y,k)}function pt(Y,k,et,gt,ee){return k===null||k.tag!==7?(k=ms(et,Y.mode,gt,ee),k.return=Y,k):(k=u(k,et),k.return=Y,k)}function _t(Y,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Lu(""+k,Y.mode,et),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return et=El(k.type,k.key,k.props,null,Y.mode,et),go(et,k),et.return=Y,et;case b:return k=Nu(k,Y.mode,et),k.return=Y,k;case j:return k=Ss(k),_t(Y,k,et)}if(ut(k)||J(k))return k=ms(k,Y.mode,et,null),k.return=Y,k;if(typeof k.then=="function")return _t(Y,Dl(k),et);if(k.$$typeof===P)return _t(Y,Al(Y,k),et);Ul(Y,k)}return null}function st(Y,k,et,gt){var ee=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ee!==null?null:A(Y,k,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===ee?H(Y,k,et,gt):null;case b:return et.key===ee?nt(Y,k,et,gt):null;case j:return et=Ss(et),st(Y,k,et,gt)}if(ut(et)||J(et))return ee!==null?null:pt(Y,k,et,gt,null);if(typeof et.then=="function")return st(Y,k,Dl(et),gt);if(et.$$typeof===P)return st(Y,k,Al(Y,et),gt);Ul(Y,et)}return null}function lt(Y,k,et,gt,ee){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(et)||null,A(k,Y,""+gt,ee);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Y=Y.get(gt.key===null?et:gt.key)||null,H(k,Y,gt,ee);case b:return Y=Y.get(gt.key===null?et:gt.key)||null,nt(k,Y,gt,ee);case j:return gt=Ss(gt),lt(Y,k,et,gt,ee)}if(ut(gt)||J(gt))return Y=Y.get(et)||null,pt(k,Y,gt,ee,null);if(typeof gt.then=="function")return lt(Y,k,et,Dl(gt),ee);if(gt.$$typeof===P)return lt(Y,k,et,Al(k,gt),ee);Ul(k,gt)}return null}function jt(Y,k,et,gt){for(var ee=null,Ue=null,Qt=k,de=k=0,Te=null;Qt!==null&&de<et.length;de++){Qt.index>de?(Te=Qt,Qt=null):Te=Qt.sibling;var Le=st(Y,Qt,et[de],gt);if(Le===null){Qt===null&&(Qt=Te);break}e&&Qt&&Le.alternate===null&&n(Y,Qt),k=f(Le,k,de),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le,Qt=Te}if(de===et.length)return a(Y,Qt),Ae&&ta(Y,de),ee;if(Qt===null){for(;de<et.length;de++)Qt=_t(Y,et[de],gt),Qt!==null&&(k=f(Qt,k,de),Ue===null?ee=Qt:Ue.sibling=Qt,Ue=Qt);return Ae&&ta(Y,de),ee}for(Qt=o(Qt);de<et.length;de++)Te=lt(Qt,Y,de,et[de],gt),Te!==null&&(e&&Te.alternate!==null&&Qt.delete(Te.key===null?de:Te.key),k=f(Te,k,de),Ue===null?ee=Te:Ue.sibling=Te,Ue=Te);return e&&Qt.forEach(function(Qa){return n(Y,Qa)}),Ae&&ta(Y,de),ee}function ae(Y,k,et,gt){if(et==null)throw Error(s(151));for(var ee=null,Ue=null,Qt=k,de=k=0,Te=null,Le=et.next();Qt!==null&&!Le.done;de++,Le=et.next()){Qt.index>de?(Te=Qt,Qt=null):Te=Qt.sibling;var Qa=st(Y,Qt,Le.value,gt);if(Qa===null){Qt===null&&(Qt=Te);break}e&&Qt&&Qa.alternate===null&&n(Y,Qt),k=f(Qa,k,de),Ue===null?ee=Qa:Ue.sibling=Qa,Ue=Qa,Qt=Te}if(Le.done)return a(Y,Qt),Ae&&ta(Y,de),ee;if(Qt===null){for(;!Le.done;de++,Le=et.next())Le=_t(Y,Le.value,gt),Le!==null&&(k=f(Le,k,de),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le);return Ae&&ta(Y,de),ee}for(Qt=o(Qt);!Le.done;de++,Le=et.next())Le=lt(Qt,Y,de,Le.value,gt),Le!==null&&(e&&Le.alternate!==null&&Qt.delete(Le.key===null?de:Le.key),k=f(Le,k,de),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le);return e&&Qt.forEach(function(cy){return n(Y,cy)}),Ae&&ta(Y,de),ee}function Xe(Y,k,et,gt){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var ee=et.key;k!==null;){if(k.key===ee){if(ee=et.type,ee===T){if(k.tag===7){a(Y,k.sibling),gt=u(k,et.props.children),gt.return=Y,Y=gt;break t}}else if(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===j&&Ss(ee)===k.type){a(Y,k.sibling),gt=u(k,et.props),go(gt,et),gt.return=Y,Y=gt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}et.type===T?(gt=ms(et.props.children,Y.mode,gt,et.key),gt.return=Y,Y=gt):(gt=El(et.type,et.key,et.props,null,Y.mode,gt),go(gt,et),gt.return=Y,Y=gt)}return S(Y);case b:t:{for(ee=et.key;k!==null;){if(k.key===ee)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Y,k.sibling),gt=u(k,et.children||[]),gt.return=Y,Y=gt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}gt=Nu(et,Y.mode,gt),gt.return=Y,Y=gt}return S(Y);case j:return et=Ss(et),Xe(Y,k,et,gt)}if(ut(et))return jt(Y,k,et,gt);if(J(et)){if(ee=J(et),typeof ee!="function")throw Error(s(150));return et=ee.call(et),ae(Y,k,et,gt)}if(typeof et.then=="function")return Xe(Y,k,Dl(et),gt);if(et.$$typeof===P)return Xe(Y,k,Al(Y,et),gt);Ul(Y,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Y,k.sibling),gt=u(k,et),gt.return=Y,Y=gt):(a(Y,k),gt=Lu(et,Y.mode,gt),gt.return=Y,Y=gt),S(Y)):a(Y,k)}return function(Y,k,et,gt){try{mo=0;var ee=Xe(Y,k,et,gt);return sr=null,ee}catch(Qt){if(Qt===ar||Qt===Cl)throw Qt;var Ue=ti(29,Qt,null,Y.mode);return Ue.lanes=gt,Ue.return=Y,Ue}finally{}}}var Ms=pm(!0),mm=pm(!1),Oa=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),Jp(e,null,a),n}return yl(e,o,n,a),Ml(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function vo(){if(ju){var e=ir;if(e!==null)throw e}}function xo(e,n,a,o){ju=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,nt=H.next;H.next=null,S===null?f=nt:S.next=nt,S=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==S&&(A===null?pt.firstBaseUpdate=nt:A.next=nt,pt.lastBaseUpdate=H))}if(f!==null){var _t=u.baseState;S=0,pt=nt=H=null,A=f;do{var st=A.lane&-536870913,lt=st!==A.lane;if(lt?(be&st)===st:(o&st)===st){st!==0&&st===nr&&(ju=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var jt=e,ae=A;st=n;var Xe=a;switch(ae.tag){case 1:if(jt=ae.payload,typeof jt=="function"){_t=jt.call(Xe,_t,st);break t}_t=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ae.payload,st=typeof jt=="function"?jt.call(Xe,_t,st):jt,st==null)break t;_t=_({},_t,st);break t;case 2:Oa=!0}}st=A.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(nt=pt=lt,H=_t):pt=pt.next=lt,S|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);pt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Ga|=S,e.lanes=S,e.memoizedState=_t}}function gm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],n)}var rr=N(null),Ll=N(0);function vm(e,n){e=fa,mt(Ll,e),mt(rr,n),fa=e|n.baseLanes}function Zu(){mt(Ll,fa),mt(rr,rr.current)}function Ku(){fa=Ll.current,it(rr),it(Ll)}var ei=N(null),gi=null;function Ia(e){var n=e.alternate;mt(sn,sn.current&1),mt(ei,e),gi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(gi=e)}function Qu(e){mt(sn,sn.current),mt(ei,e),gi===null&&(gi=e)}function xm(e){e.tag===22?(mt(sn,sn.current),mt(ei,e),gi===null&&(gi=e)):Fa()}function Fa(){mt(sn,sn.current),mt(ei,ei.current)}function ni(e){it(ei),gi===e&&(gi=null),it(sn)}var sn=N(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ah(a)||sh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,fe=null,Ve=null,cn=null,Ol=!1,or=!1,Es=!1,Pl=0,So=0,lr=null,$x=0;function en(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,f){return ia=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?n0:mf,Es=!1,f=a(o,u),Es=!1,or&&(f=ym(n,a,o,u)),Sm(e),f}function Sm(e){F.H=Eo;var n=Ve!==null&&Ve.next!==null;if(ia=0,cn=Ve=fe=null,Ol=!1,So=0,lr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Tl(e)&&(un=!0))}function ym(e,n,a,o){fe=e;var u=0;do{if(or&&(lr=null),So=0,or=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=i0,f=n(a,o)}while(or);return f}function tS(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(fe.flags|=1024),n}function tf(){var e=Pl!==0;return Pl=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}ia=0,cn=Ve=fe=null,or=!1,So=Pl=0,lr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ve===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,Ve=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?fe.memoizedState=cn=e:cn=cn.next=e}return cn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,lr===null&&(lr=[]),e=fm(lr,e,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?n0:mf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===P)return Un(e)}throw Error(s(438,String(e)))}function af(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=rn();return sf(n,Ve,e)}function sf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=S=null,H=null,nt=n,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(be&_t)===_t:(ia&_t)===_t){var st=nt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===nr&&(pt=!0);else if((ia&st)===st){nt=nt.next,st===nr&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=_t,S=f):H=H.next=_t,fe.lanes|=st,Ga|=st;_t=nt.action,Es&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else st={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=st,S=f):H=H.next=st,fe.lanes|=_t,Ga|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?S=f:H.next=A,!$n(f,e.memoizedState)&&(un=!0,pt&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);$n(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mm(e,n,a){var o=fe,u=rn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!$n((Ve||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,cf(Tm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(ia&127)!==0||Em(o,n,a)}return a}function Em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=zl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bm(e,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(e)}function Tm(e,n,a){return a(function(){Am(n)&&Rm(e)})}function Am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Rm(e){var n=ps(e,2);n!==null&&jn(n,e,2)}function of(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Es){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function Cm(e,n,a,o){return e.baseState=a,sf(e,Ve,typeof o=="function"?o:aa)}function eS(e,n,a,o,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,wm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var A=a(u,o),H=F.S;H!==null&&H(S,A),Dm(e,n,A)}catch(nt){lf(e,n,nt)}finally{f!==null&&S.types!==null&&(f.types=S.types),F.T=f}}else try{f=a(u,o),Dm(e,n,f)}catch(nt){lf(e,n,nt)}}function Dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(e,n,o)},function(o){return lf(e,n,o)}):Um(e,n,a)}function Um(e,n,a){n.status="fulfilled",n.value=a,Lm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wm(e,a)))}function lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Lm(n),n=n.next;while(n!==o)}e.action=null}function Lm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Nm(e,n){return n}function Om(e,n){if(Ae){var a=qe.formState;if(a!==null){t:{var o=fe;if(Ae){if(Ze){e:{for(var u=Ze,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}La(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:n},a.queue=o,a=$m.bind(null,fe,o),o.dispatch=a,o=of(!1),f=pf.bind(null,fe,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=eS.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Pm(e){var n=rn();return zm(n,Ve,e)}function zm(e,n,a){if(n=sf(e,n,Nm)[0],e=Fl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(S){throw S===ar?Cl:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,cr(9,{destroy:void 0},nS.bind(null,u,a),null)),[o,f,e]}function nS(e,n){e.action=n}function Im(e){var n=rn(),a=Ve;if(a!==null)return zm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=zl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fm(){return rn().memoizedState}function Bl(e,n,a,o){var u=Hn();fe.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ve!==null&&o!==null&&Ju(o,Ve.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(fe.flags|=e,u.memoizedState=cr(1|n,f,a,o))}function Bm(e,n){Bl(8390656,8,e,n)}function cf(e,n){Hl(2048,8,e,n)}function iS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=zl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hm(e){var n=rn().memoizedState;return iS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gm(e,n){return Hl(4,2,e,n)}function Vm(e,n){return Hl(4,4,e,n)}function km(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,km.bind(null,n,e),a)}function uf(){}function Wm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),Es){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(ia&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Y0(),fe.lanes|=e,Ga|=e,a)}function Ym(e,n,a,o){return $n(a,n)?a:rr.current!==null?(e=ff(e,a,o),$n(e,n)||(un=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(be&261930)===0?(un=!0,e.memoizedState=a):(e=Y0(),fe.lanes|=e,Ga|=e,n)}function jm(e,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=F.T,A={};F.T=A,pf(e,!1,n,a);try{var H=u(),nt=F.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=Jx(H,o);Mo(e,n,pt,si(e))}else Mo(e,n,o,si(e))}catch(_t){Mo(e,n,{then:function(){},status:"rejected",reason:_t},si())}finally{G.p=f,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function aS(){}function hf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Zm(e).queue;jm(e,u,n,rt,a===null?aS:function(){return Km(e),a(o)})}function Zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Km(e){var n=Zm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},si())}function df(){return Un(Bo)}function Qm(){return rn().memoizedState}function Jm(){return rn().memoizedState}function sS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Pa(a);var o=za(n,e,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:Gu()},e.payload=n;return}n=n.return}}function rS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?t0(n,a):(a=Du(e,n,a,o),a!==null&&(jn(a,e,o),e0(a,n,o)))}function $m(e,n,a){var o=si();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))t0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,S))return yl(e,n,u,0),qe===null&&Sl(),!1}catch{}finally{}if(a=Du(e,n,u,o),a!==null)return jn(a,e,o),e0(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=Du(e,a,o,2),n!==null&&jn(n,e,2)}function Gl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function t0(e,n){or=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function e0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:Un,use:Il,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Eo.useEffectEvent=en;var n0={readContext:Un,use:Il,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,km.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Es){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Es){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=rS.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=of(e);var n=e.queue,a=$m.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=Hn();return ff(a,e,n)},useTransition:function(){var e=of(!1);return e=jm.bind(null,fe,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Hn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(be&127)!==0||Em(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bm(Tm.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=qe.identifierPrefix;if(Ae){var a=zi,o=Pi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$x++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:Om,useActionState:Om,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:af,useCacheRefresh:function(){return Hn().memoizedState=sS.bind(null,fe)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Un,use:Il,useCallback:Wm,useContext:Un,useEffect:cf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Fl,useRef:Fm,useState:function(){return Fl(aa)},useDebugValue:uf,useDeferredValue:function(e,n){var a=rn();return Ym(a,Ve.memoizedState,e,n)},useTransition:function(){var e=Fl(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:df,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,n){var a=rn();return Cm(a,Ve,e,n)},useMemoCache:af,useCacheRefresh:Jm};mf.useEffectEvent=Hm;var i0={readContext:Un,use:Il,useCallback:Wm,useContext:Un,useEffect:cf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:rf,useRef:Fm,useState:function(){return rf(aa)},useDebugValue:uf,useDeferredValue:function(e,n){var a=rn();return Ve===null?ff(a,e,n):Ym(a,Ve.memoizedState,e,n)},useTransition:function(){var e=rf(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:df,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=rn();return Ve!==null?Cm(a,Ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Jm};i0.useEffectEvent=Hm;function gf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _f={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(jn(n,e,a),_o(n,e,a))}};function a0(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function s0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&_f.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function r0(e){xl(e)}function o0(e){console.error(e)}function l0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function c0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function u0(e){return e=Pa(e),e.tag=3,e}function f0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){c0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){c0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function oS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?tc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(s(435,a.tag))}return kf(e,o,u),tc(),!1}if(Ae)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(e=Error(s(422),{cause:o}),fo(hi(e,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),fo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=vf(e.stateNode,o,u),Yu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=hi(f,a),Uo===null?Uo=[f]:Uo.push(f),nn!==4&&(nn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vf(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=u0(u),f0(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),un=!1;function Ln(e,n,a,o){n.child=e===null?mm(n,null,a,o):Ms(n,e.child,a,o)}function h0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return vs(n),o=$u(e,n,a,S,f,u),A=tf(),e!==null&&!un?(ef(e,n,u),sa(e,n,u)):(Ae&&A&&Ou(n),n.flags|=1,Ln(e,n,o,u),n.child)}function d0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,p0(e,n,f,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Rf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(S,o)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(f,o),e.ref=n.ref,e.return=n,n.child=e}function p0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Rf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,sa(e,n,u)}return Sf(e,n,a,o,u)}function m0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return g0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?vm(n,f):Zu(),xm(n);else return o=n.lanes=536870912,g0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rl(n,f.cachePool),vm(n,f),Fa(),n.memoizedState=null):(e!==null&&Rl(n,null),Zu(),Fa());return Ln(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function g0(e,n,a,o,u){var f=ku();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rl(n,null),Zu(),xm(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _0(e,n,a){return Ms(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function lS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,bo(null,e);if(Qu(n),(e=Ze)?(e=wg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return kl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=_0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||er(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=qe,o!==null&&(S=Hs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ps(e,S),jn(o,e,S),xf;tc(),n=_0(e,n,a)}else e=f.treeContext,Ze=_i(S.nextSibling),Dn=n,Ae=!0,Ua=null,mi=!1,e!==null&&im(n,e),n=kl(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sf(e,n,a,o,u){return vs(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!un?(ef(e,n,u),sa(e,n,u)):(Ae&&o&&Ou(n),n.flags|=1,Ln(e,n,a,u),n.child)}function v0(e,n,a,o,u,f){return vs(n),n.updateQueue=null,a=ym(n,o,a,u),Sm(e),o=tf(),e!==null&&!un?(ef(e,n,f),sa(e,n,f)):(Ae&&o&&Ou(n),n.flags|=1,Ln(e,n,a,f),n.child)}function x0(e,n,a,o,u){if(vs(n),n.stateNode===null){var f=Qs,S=a.contextType;typeof S=="object"&&S!==null&&(f=Un(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_f,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Un(S):Qs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&_f.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=bs(a,A);f.props=H;var nt=f.context,pt=a.contextType;S=Qs,typeof pt=="object"&&pt!==null&&(S=Un(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==S)&&s0(n,f,o,S),Oa=!1;var st=n.memoizedState;f.state=st,xo(n,o,f,u),vo(),nt=n.memoizedState,A||st!==nt||Oa?(typeof _t=="function"&&(gf(n,a,_t,o),nt=n.memoizedState),(H=Oa||a0(n,a,H,o,st,nt,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=S,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,qu(e,n),S=n.memoizedProps,pt=bs(a,S),f.props=pt,_t=n.pendingProps,st=f.context,nt=a.contextType,H=Qs,typeof nt=="object"&&nt!==null&&(H=Un(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||st!==H)&&s0(n,f,o,H),Oa=!1,st=n.memoizedState,f.state=st,xo(n,o,f,u),vo();var lt=n.memoizedState;S!==_t||st!==lt||Oa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof A=="function"&&(gf(n,a,A,o),lt=n.memoizedState),(pt=Oa||a0(n,a,pt,o,st,lt,H)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=H,o=pt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Ln(e,n,a,u),n.memoizedState=f.state,e=n.child):e=sa(e,n,u),e}function S0(e,n,a,o){return gs(),n.flags|=256,Ln(e,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:cm()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function y0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ia(n):Fa(),(e=Ze)?(e=wg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw La(n);return sh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Fa(),u=n.mode,A=Wl({mode:"hidden",children:A},u),o=ms(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(e,S,a),n.memoizedState=yf,bo(null,o)):(Ia(n),bf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),A=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),A=ms(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(e,S,a),n.memoizedState=yf,n=bo(null,o));else if(Ia(n),sh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var nt=S.dgst;S=nt,o=Error(s(419)),o.stack="",o.digest=S,fo({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(un||er(e,n,a,!1),S=(a&e.childLanes)!==0,un||S){if(S=qe,S!==null&&(o=Hs(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ps(e,o),jn(S,e,o),xf;ah(A)||tc(),n=Tf(e,n,a)}else ah(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=_i(A.nextSibling),Dn=n,Ae=!0,Ua=null,mi=!1,e!==null&&im(n,e),n=bf(n,o.children),n.flags|=4096);return n}return u?(Fa(),A=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=$i(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=$i(nt,A):(A=ms(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Mf(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Ef(e,S,a),n.memoizedState=yf,bo(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return Ms(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Bu(e.return,n,a)}function Af(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function E0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,mt(sn,S),Ln(e,n,o,a),o=Ae?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,n);else if(e.tag===19)M0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,f,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function cS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Na(n,ln,e.memoizedState.cache),gs();break;case 27:case 5:Xt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(e,n,a):(Ia(n),e=sa(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return E0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,m0(e,n,a,n.pendingProps);case 24:Na(n,ln,e.memoizedState.cache)}return sa(e,n,a)}function b0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Rf(e,a)&&(n.flags&128)===0)return un=!1,cS(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ae&&(n.flags&1048576)!==0&&nm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Uu(e)?(o=bs(e,o),n.tag=1,n=x0(null,n,e,o,a)):(n.tag=0,n=Sf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=h0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=d0(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return Sf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),x0(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,qu(e,n),xo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Na(n,ln,o),o!==f.cache&&Hu(n,[ln],a,!0),vo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),fo(u),n=S0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),Dn=n,Ae=!0,Ua=null,mi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),o===u){n=sa(e,n,a);break t}Ln(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=oc(K.current).createElement(a),o[on]=n,o[bn]=e,Nn(o,a,e),R(o),n.stateNode=o):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Ae&&(o=n.stateNode=Lg(n.type,n.pendingProps,K.current),Dn=n,mi=!0,u=Ze,qa(n.type)?(rh=u,Ze=_i(o.firstChild)):Ze=u),Ln(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Ze)&&(o=BS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Dn=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||La(n)),Xt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,eh(u,f)?o=null:S!==null&&eh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,tS,null,null,a),Bo._currentValue=u),Xl(e,n),Ln(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=HS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||La(n)),null;case 13:return y0(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Ln(e,n,o,a),n.child;case 11:return h0(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Ln(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Un(u),o=o(u),n.flags|=1,Ln(e,n,o,a),n.child;case 14:return d0(e,n,n.type,n.pendingProps,a);case 15:return p0(e,n,n.type,n.pendingProps,a);case 19:return E0(e,n,a);case 31:return lS(e,n,a);case 22:return m0(e,n,a,n.pendingProps);case 24:return vs(n),o=Un(ln),e===null?(u=ku(),u===null&&(u=qe,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Wu(n),Na(n,ln,u)):((e.lanes&a)!==0&&(qu(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,ln,o)):(o=f.cache,Na(n,ln,o),o!==u.cache&&Hu(n,[ln],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function Cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Q0())e.flags|=8192;else throw ys=wl,Xu}else e.flags&=-16777217}function T0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n))if(Q0())e.flags|=8192;else throw ys=wl,Xu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,dr|=n)}function To(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function uS(e,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(ln),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Ke(n),T0(n,f)):(Ke(n),Cf(n,u,null,o,a))):f?f!==e.memoizedState?(ra(n),Ke(n),T0(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ke(n),Cf(n,u,e,o,a)),null;case 27:if(_e(n),a=K.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Rt.current,tr(n)?am(n):(e=Lg(u,o,a),n.stateNode=e,ra(n))}return Ke(n),null;case 5:if(_e(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Rt.current,tr(n))am(n);else{var S=oc(K.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[on]=n,f[bn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ke(n),Cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=K.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||La(n,!0)}else e=oc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ke(n),null);case 4:return qt(),e===null&&Kf(n.stateNode.containerInfo),Ke(n),null;case 10:return na(n.type),Ke(n),null;case 19:if(it(sn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)To(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nl(e),f!==null){for(n.flags|=128,To(o,!1),e=f.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return mt(sn,sn.current&1|2),Ae&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Ql&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Ke(n),null}else 2*E()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,mt(sn,u?a&1|2:a&1),Ae&&ta(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),Ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&it(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function fS(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(ln),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return _e(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(sn),null;case 4:return qt(),null;case 10:return na(n.type),null;case 22:case 23:return ni(n),Ku(),e!==null&&it(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(ln),null;case 25:return null;default:return null}}function A0(e,n){switch(Pu(n),n.tag){case 3:na(ln),qt();break;case 26:case 27:case 5:_e(n);break;case 4:qt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:it(sn);break;case 10:na(n.type);break;case 22:case 23:ni(n),Ku(),e!==null&&it(xs);break;case 24:na(ln)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){He(n,n.return,A)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,nt=A;try{nt()}catch(pt){He(u,H,pt)}}}o=o.next}while(o!==f)}}catch(pt){He(n,n.return,pt)}}function R0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(o){He(e,e.return,o)}}}function C0(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){He(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function w0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function wf(e,n,a){try{var o=e.stateNode;NS(o,e.type,a,n),o[bn]=n}catch(u){He(e,e.return,u)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Uf(e,n,a),e=e.sibling;e!==null;)Uf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function U0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[on]=e,n[bn]=a}catch(f){He(e,e.return,f)}}var oa=!1,fn=!1,Lf=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function hS(e,n){if(e=e.containerInfo,$f=pc,e=Xp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,nt=0,pt=0,_t=e,st=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(A=S+u),_t!==f||o!==0&&_t.nodeType!==3||(H=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)st=_t,_t=lt;for(;;){if(_t===e)break e;if(st===a&&++nt===u&&(A=S),st===f&&++pt===o&&(H=S),(lt=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=lt}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:e,selectionRange:a},pc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var jt=bs(a.type,u);e=o.getSnapshotBeforeUpdate(jt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){He(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function N0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&Ao(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}o&64&&R0(a),o&512&&Ro(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_m(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&o&4&&U0(a);case 26:case 5:ca(e,a),n===null&&o&4&&w0(a),o&512&&Ro(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&z0(e,a);break;case 13:ca(e,a),o&4&&I0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yS.bind(null,a),GS(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||fn,u=oa;var f=fn;oa=o,(fn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,fn=f}break;case 30:break;default:ca(e,a)}}function O0(e){var n=e.alternate;n!==null&&(e.alternate=null,O0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function la(e,n,a){for(a=a.child;a!==null;)P0(e,n,a),a=a.sibling}function P0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var o=$e,u=Xn;qa(a.type)&&($e=a.stateNode,Xn=!1),la(e,n,a),zo(a.stateNode),$e=o,Xn=u;break;case 5:fn||Ii(a,n);case 6:if(o=$e,u=Xn,$e=null,la(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:$e!==null&&(Xn?(e=$e,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):Rg($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,la(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),fn||Ba(4,a,n),la(e,n,a);break;case 1:fn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&C0(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,la(e,n,a),fn=o;break;default:la(e,n,a)}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){He(n,n.return,a)}}}function I0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){He(n,n.return,a)}}function dS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new L0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new L0),n;default:throw Error(s(435,e.tag))}}function jl(e,n){var a=dS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=MS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){$e=A.stateNode,Xn=!1;break t}break;case 5:$e=A.stateNode,Xn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if($e===null)throw Error(s(160));P0(f,S,u),$e=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F0(n,e),n=n.sibling}var Ai=null;function F0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ba(3,e,e.return),Ao(3,e),Ba(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,a),f[on]=e,R(f),o=f;break t;case"link":var S=Fg("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=Fg("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,R(f),o=f}e.stateNode=o}else Bg(u,e.type,e.stateNode);else e.stateNode=Ig(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Bg(u,e.type,e.stateNode):Ig(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),a!==null&&o&4&&wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(jt){He(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){He(e,e.return,jt)}}break;case 3:if(uc=null,u=Ai,Ai=lc(n.containerInfo),Wn(n,e),Ai=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(jt){He(e,e.return,jt)}Lf&&(Lf=!1,B0(e));break;case 4:o=Ai,Ai=lc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ai=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=oa,pt=fn;if(oa=nt||u,fn=pt||H,Wn(n,e),fn=pt,oa=nt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||oa||fn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var _t=H.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(jt){He(H,H.return,jt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(jt){He(H,H.return,jt)}}}else if(n.tag===18){if(a===null){H=n;try{var lt=H.stateNode;u?Cg(lt,!0):Cg(H.stateNode,!1)}catch(jt){He(H,H.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(D0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Df(e);Yl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var A=Df(e);Yl(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=Df(e);Uf(e,nt,H);break;default:throw Error(s(161))}}catch(pt){He(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),Ts(n);break;case 27:zo(n.stateNode);case 26:case 5:Ii(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),Ao(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){He(o,o.return,nt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)gm(H[u],A)}catch(nt){He(o,o.return,nt)}}a&&S&64&&R0(f),Ro(f,f.return);break;case 27:U0(f);case 26:case 5:ua(u,f,a),a&&o===null&&S&4&&w0(f),Ro(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&S&4&&z0(u,f);break;case 13:ua(u,f,a),a&&S&4&&I0(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),Ro(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(e,n,a,o),n=n.sibling}function H0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){He(n,n.return,H)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(e,n,a,o):Co(e,n):f._visibility&2?Ri(e,n,a,o):(f._visibility|=2,ur(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(S,n);break;case 24:Ri(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ri(e,n,a,o)}}function ur(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,H=o,nt=S.flags;switch(S.tag){case 0:case 11:case 15:ur(f,S,A,H,u),Ao(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?ur(f,S,A,H,u):Co(f,S):(pt._visibility|=2,ur(f,S,A,H,u)),u&&nt&2048&&Nf(S.alternate,S);break;case 24:ur(f,S,A,H,u),u&&nt&2048&&Of(S.alternate,S);break;default:ur(f,S,A,H,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Nf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Of(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function fr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)G0(e,n,a),e=e.sibling}function G0(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&wo&&e.memoizedState!==null&&$S(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var o=Ai;Ai=lc(e.stateNode.containerInfo),fr(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,fr(e,n,a),wo=o):fr(e,n,a));break;default:fr(e,n,a)}}function V0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,X0(o,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Do(e);break;default:Do(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,X0(o,e)}V0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function X0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(O0(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var pS={getCacheForType:function(e){var n=Un(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(ln).controller.signal}},mS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,xe=null,be=0,Be=0,ii=null,Ha=!1,hr=!1,Pf=!1,fa=0,nn=0,Ga=0,As=0,zf=0,ai=0,dr=0,Uo=null,Yn=null,If=!1,Kl=0,W0=0,Ql=1/0,Jl=null,Va=null,gn=0,ka=null,pr=null,ha=0,Ff=0,Bf=null,q0=null,Lo=0,Hf=null;function si(){return(Pe&2)!==0&&be!==0?be&-be:F.T!==null?qf():Jr()}function Y0(){if(ai===0)if((be&536870912)===0||Ae){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Xa(e,be,ai,!1)),Pn(e,a),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(As|=a),nn===4&&Xa(e,be,ai,!1)),Fi(e))}function j0(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||wt(e,n),u=o?vS(e,n):Vf(e,n,!0),f=o;do{if(u===0){hr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!gS(a)){u=Vf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Uo;var H=A.current.memoizedState.isDehydrated;if(H&&(mr(A,S).flags|=256),S=Vf(A,S,!1),S!==2){if(Pf&&!H){A.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){mr(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ha);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-E(),10<u)){if(Xa(o,n,ai,!Ha),xt(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=Tg(Z0.bind(null,o,a,Yn,Jl,If,n,ai,As,dr,Ha,f,"Throttled",-0,0),u);break t}Z0(o,a,Yn,Jl,If,n,ai,As,dr,Ha,f,null,-0,0)}}break}while(!0);Fi(e)}function Z0(e,n,a,o,u,f,S,A,H,nt,pt,_t,st,lt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},G0(n,f,_t);var jt=(f&62914560)===f?Kl-E():(f&4194048)===f?W0-E():0;if(jt=ty(_t,jt),jt!==null){ha=f,e.cancelPendingCommit=jt(ig.bind(null,e,n,f,a,o,u,S,A,H,pt,_t,null,st,lt)),Xa(e,f,S,!nt);return}}ig(e,n,f,a,o,u,S,A,H)}function gS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~zf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&ul(e,a,n)}function $l(){return(Pe&6)===0?(No(0),!1):!0}function Gf(){if(xe!==null){if(Be===0)var e=xe.return;else e=xe,ea=_s=null,nf(e),sr=null,mo=0,e=xe;for(;e!==null;)A0(e.alternate,e),e=e.return;xe=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Gf(),qe=e,xe=a=$i(e.current,null),be=n,Be=0,ii=null,Ha=!1,hr=wt(e,n),Pf=!1,dr=ai=zf=As=Ga=nn=0,Yn=Uo=null,If=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return fa=n,Sl(),a}function K0(e,n){fe=null,F.H=Eo,n===ar||n===Cl?(n=hm(),Be=3):n===Xu?(n=hm(),Be=4):Be=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xe===null&&(nn=1,Vl(e,hi(n,e.current)))}function Q0(){var e=ei.current;return e===null?!0:(be&4194048)===be?gi===null:(be&62914560)===be||(be&536870912)!==0?e===gi:!1}function J0(){var e=F.H;return F.H=Eo,e===null?Eo:e}function $0(){var e=F.A;return F.A=pS,e}function tc(){nn=4,Ha||(be&4194048)!==be&&ei.current!==null||(hr=!0),(Ga&134217727)===0&&(As&134217727)===0||qe===null||Xa(qe,be,ai,!1)}function Vf(e,n,a){var o=Pe;Pe|=2;var u=J0(),f=$0();(qe!==e||be!==n)&&(Jl=null,mr(e,n)),n=!1;var S=nn;t:do try{if(Be!==0&&xe!==null){var A=xe,H=ii;switch(Be){case 8:Gf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Be;if(Be=0,ii=null,gr(e,A,H,nt),a&&hr){S=0;break t}break;default:nt=Be,Be=0,ii=null,gr(e,A,H,nt)}}_S(),S=nn;break}catch(pt){K0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ea=_s=null,Pe=o,F.H=u,F.A=f,xe===null&&(qe=null,be=0,Sl()),S}function _S(){for(;xe!==null;)tg(xe)}function vS(e,n){var a=Pe;Pe|=2;var o=J0(),u=$0();qe!==e||be!==n?(Jl=null,Ql=E()+500,mr(e,n)):hr=wt(e,n);t:do try{if(Be!==0&&xe!==null){n=xe;var f=ii;e:switch(Be){case 1:Be=0,ii=null,gr(e,n,f,1);break;case 2:case 9:if(um(f)){Be=0,ii=null,eg(n);break}n=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Fi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:um(f)?(Be=0,ii=null,eg(n)):(Be=0,ii=null,gr(e,n,f,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var A=xe;if(S?Hg(S):A.stateNode.complete){Be=0,ii=null;var H=A.sibling;if(H!==null)xe=H;else{var nt=A.return;nt!==null?(xe=nt,ec(nt)):xe=null}break e}}Be=0,ii=null,gr(e,n,f,5);break;case 6:Be=0,ii=null,gr(e,n,f,6);break;case 8:Gf(),nn=6;break t;default:throw Error(s(462))}}xS();break}catch(pt){K0(e,pt)}while(!0);return ea=_s=null,F.H=o,F.A=u,Pe=a,xe!==null?0:(qe=null,be=0,Sl(),nn)}function xS(){for(;xe!==null&&!Et();)tg(xe)}function tg(e){var n=b0(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?ec(e):xe=n}function eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:nf(n);default:A0(a,n),n=xe=$p(n,fa),n=b0(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?ec(e):xe=n}function gr(e,n,a,o){ea=_s=null,nf(n),sr=null,mo=0;var u=n.return;try{if(oS(e,u,n,a,be)){nn=1,Vl(e,hi(a,e.current)),xe=null;return}}catch(f){if(u!==null)throw xe=u,f;nn=1,Vl(e,hi(a,e.current)),xe=null;return}n.flags&32768?(Ae||o===1?e=!0:hr||(be&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),ng(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){ng(n,Ha);return}e=n.return;var a=uS(n.alternate,n,fa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);nn===0&&(nn=5)}function ng(e,n){do{var a=fS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);nn=6,xe=null}function ig(e,n,a,o,u,f,S,A,H){e.cancelPendingCommit=null;do nc();while(gn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=wu,Mi(e,a,f,S,A,H),e===qe&&(xe=qe=null,be=0),pr=n,ka=e,ha=a,Ff=f,Bf=u,q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ES($,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,S=Pe,Pe|=4;try{hS(e,n,a)}finally{Pe=S,G.p=u,F.T=o}}gn=1,ag(),sg(),rg()}}function ag(){if(gn===1){gn=0;var e=ka,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Pe;Pe|=4;try{F0(n,e);var f=th,S=Xp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(H!==null&&bu(A)){var nt=H.start,pt=H.end;if(pt===void 0&&(pt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(pt,A.value.length);else{var _t=A.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var lt=st.getSelection(),jt=A.textContent.length,ae=Math.min(H.start,jt),Xe=H.end===void 0?ae:Math.min(H.end,jt);!lt.extend&&ae>Xe&&(S=Xe,Xe=ae,ae=S);var Y=Vp(A,ae),k=Vp(A,Xe);if(Y&&k&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var et=_t.createRange();et.setStart(Y.node,Y.offset),lt.removeAllRanges(),ae>Xe?(lt.addRange(et),lt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),lt.addRange(et))}}}}for(_t=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var gt=_t[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}pc=!!$f,th=$f=null}finally{Pe=u,G.p=o,F.T=a}}e.current=n,gn=2}}function sg(){if(gn===2){gn=0;var e=ka,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Pe;Pe|=4;try{N0(e,n.alternate,n)}finally{Pe=u,G.p=o,F.T=a}}gn=3}}function rg(){if(gn===4||gn===3){gn=0,D();var e=ka,n=pr,a=ha,o=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,pr=ka=null,og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Gs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{F.T=n,G.p=u}}(ha&3)!==0&&nc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Hf?Lo++:(Lo=0,Hf=e):Lo=0,No(0)}}function og(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function nc(){return ag(),sg(),rg(),lg()}function lg(){if(gn!==5)return!1;var e=ka,n=Ff;Ff=0;var a=Gs(ha),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Bf,Bf=null;var f=ka,S=ha;if(gn=0,pr=ka=null,ha=0,(Pe&6)!==0)throw Error(s(331));var A=Pe;if(Pe|=4,k0(f.current),H0(f,f.current,S,a),Pe=A,No(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{G.p=u,F.T=o,og(e,n)}}function cg(e,n,a){n=hi(a,n),n=vf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Pn(e,2),Fi(e))}function He(e,n,a){if(e.tag===3)cg(e,e,a);else for(;n!==null;){if(n.tag===3){cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=hi(a,e),a=u0(2),o=za(n,a,2),o!==null&&(f0(a,o,n,e),Pn(o,2),Fi(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new mS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=SS.bind(null,e,n,a),n.then(e,e))}function SS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>E()-Kl?(Pe&2)===0&&mr(e,0):zf|=a,dr===be&&(dr=0)),Fi(e)}function ug(e,n){n===0&&(n=Ie()),e=ps(e,n),e!==null&&(Pn(e,n),Fi(e))}function yS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ug(e,a)}function MS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ug(e,a)}function ES(e,n){return Wt(e,n)}var ic=null,_r=null,Xf=!1,ac=!1,Wf=!1,Wa=0;function Fi(e){e!==_r&&e.next===null&&(_r===null?ic=_r=e:_r=_r.next=e),ac=!0,Xf||(Xf=!0,TS())}function No(e,n){if(!Wf&&ac){Wf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pg(o,f))}else f=be,f=xt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||wt(o,f)||(a=!0,pg(o,f));o=o.next}while(a);Wf=!1}}function bS(){fg()}function fg(){ac=Xf=!1;var e=0;Wa!==0&&PS()&&(e=Wa);for(var n=E(),a=null,o=ic;o!==null;){var u=o.next,f=hg(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(f&3)!==0)&&(ac=!0)),o=u}gn!==0&&gn!==5||No(e),Wa!==0&&(Wa=0)}function hg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=re(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=qe,a=be,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&It(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&It(o),Gs(a)){case 2:case 8:a=dt;break;case 32:a=$;break;case 268435456:a=Tt;break;default:a=$}return o=dg.bind(null,e),a=Wt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&It(o),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=be;return o=xt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(j0(e,o,n),hg(e,E()),e.callbackNode!=null&&e.callbackNode===a?dg.bind(null,e):null)}function pg(e,n){if(nc())return null;j0(e,n,!0)}function TS(){IS(function(){(Pe&6)!==0?Wt(ct,bS):fg()})}function qf(){if(Wa===0){var e=nr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Wa=e}return Wa}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function AS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?mg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new gl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=S?gg(u,S):new FormData(u);hf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=S?gg(u,S):new FormData(u),hf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var jf=Cu[Yf],RS=jf.toLowerCase(),CS=jf[0].toUpperCase()+jf.slice(1);Ti(RS,"on"+CS)}Ti(Yp,"onAnimationEnd"),Ti(jp,"onAnimationIteration"),Ti(Zp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Xx,"onTransitionRun"),Ti(Wx,"onTransitionStart"),Ti(qx,"onTransitionCancel"),Ti(Kp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(pt){xl(pt)}u.currentTarget=null,f=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,nt=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(pt){xl(pt)}u.currentTarget=null,f=H}}}}function Se(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var o=e+"__bubble";a.has(o)||(vg(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),vg(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[sc]){e[sc]=!0,q.forEach(function(a){a!=="selectionchange"&&(wS.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,Zf("selectionchange",!1,n))}}function vg(e,n,a,o){switch(Yg(n)){case 2:var u=iy;break;case 8:u=ay;break;default:u=fh}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=f=S;continue t}A=A.parentNode}}o=o.return}Ep(function(){var nt=f,pt=du(a),_t=[];t:{var st=Qp.get(e);if(st!==void 0){var lt=gl,jt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":lt=Mx;break;case"focusin":jt="focus",lt=xu;break;case"focusout":jt="blur",lt=xu;break;case"beforeblur":case"afterblur":lt=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Tx;break;case Yp:case jp:case Zp:lt=dx;break;case Kp:lt=Rx;break;case"scroll":case"scrollend":lt=lx;break;case"wheel":lt=wx;break;case"copy":case"cut":case"paste":lt=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Cp;break;case"toggle":case"beforetoggle":lt=Ux}var ae=(n&4)!==0,Xe=!ae&&(e==="scroll"||e==="scrollend"),Y=ae?st!==null?st+"Capture":null:st;ae=[];for(var k=nt,et;k!==null;){var gt=k;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||Y===null||(gt=eo(k,Y),gt!=null&&ae.push(Po(k,gt,et))),Xe)break;k=k.return}0<ae.length&&(st=new lt(st,jt,null,a,pt),_t.push({event:st,listeners:ae}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&a!==hu&&(jt=a.relatedTarget||a.fromElement)&&(Aa(jt)||jt[Ei]))break t;if((lt||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(jt=a.relatedTarget||a.toElement,lt=nt,jt=jt?Aa(jt):null,jt!==null&&(Xe=c(jt),ae=jt.tag,jt!==Xe||ae!==5&&ae!==27&&ae!==6)&&(jt=null)):(lt=null,jt=nt),lt!==jt)){if(ae=Ap,gt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Cp,gt="onPointerLeave",Y="onPointerEnter",k="pointer"),Xe=lt==null?st:us(lt),et=jt==null?st:us(jt),st=new ae(gt,k+"leave",lt,a,pt),st.target=Xe,st.relatedTarget=et,gt=null,Aa(pt)===nt&&(ae=new ae(Y,k+"enter",jt,a,pt),ae.target=et,ae.relatedTarget=Xe,gt=ae),Xe=gt,lt&&jt)e:{for(ae=DS,Y=lt,k=jt,et=0,gt=Y;gt;gt=ae(gt))et++;gt=0;for(var ee=k;ee;ee=ae(ee))gt++;for(;0<et-gt;)Y=ae(Y),et--;for(;0<gt-et;)k=ae(k),gt--;for(;et--;){if(Y===k||k!==null&&Y===k.alternate){ae=Y;break e}Y=ae(Y),k=ae(k)}ae=null}else ae=null;lt!==null&&xg(_t,st,lt,ae,!1),jt!==null&&Xe!==null&&xg(_t,Xe,jt,ae,!0)}}t:{if(st=nt?us(nt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ue=zp;else if(Op(st))if(Ip)Ue=Gx;else{Ue=Bx;var Qt=Fx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&bi(nt.elementType)&&(Ue=zp):Ue=Hx;if(Ue&&(Ue=Ue(e,nt))){Pp(_t,Ue,a,pt);break t}Qt&&Qt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&An(st,"number",st.value)}switch(Qt=nt?us(nt):window,e){case"focusin":(Op(Qt)||Qt.contentEditable==="true")&&(js=Qt,Tu=nt,co=null);break;case"focusout":co=Tu=js=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Wp(_t,a,pt);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Wp(_t,a,pt)}var de;if(yu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Ys?Lp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(wp&&a.locale!=="ko"&&(Ys||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ys&&(de=bp()):(wa=pt,gu="value"in wa?wa.value:wa.textContent,Ys=!0)),Qt=rc(nt,Te),0<Qt.length&&(Te=new Rp(Te,e,null,a,pt),_t.push({event:Te,listeners:Qt}),de?Te.data=de:(de=Np(a),de!==null&&(Te.data=de)))),(de=Nx?Ox(e,a):Px(e,a))&&(Te=rc(nt,"onBeforeInput"),0<Te.length&&(Qt=new Rp("onBeforeInput","beforeinput",null,a,pt),_t.push({event:Qt,listeners:Te}),Qt.data=de)),AS(_t,e,nt,a,pt)}_g(_t,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function DS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,u?(nt=eo(a,f),nt!=null&&S.unshift(Po(a,nt,H))):u||(nt=eo(a,f),nt!=null&&S.push(Po(a,nt,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var US=/\r\n?/g,LS=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(US,`
`).replace(LS,"")}function yg(e,n){return n=Sg(n),Sg(e)===n}function ke(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":ne(e,"class",o);break;case"tabIndex":ne(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,a,o);break;case"style":Xs(e,o,f);break;case"data":if(n!=="object"){ne(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",u.name,u,null),ke(e,n,"formEncType",u.formEncType,u,null),ke(e,n,"formMethod",u.formMethod,u,null),ke(e,n,"formTarget",u.formTarget,u,null)):(ke(e,n,"encType",u.encType,u,null),ke(e,n,"method",u.method,u,null),ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Zt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rx.get(a)||a,Zt(e,a,o))}}function Jf(e,n,a,o,u,f){switch(a){case"style":Xs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Zt(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,f,S,a,null)}}u&&ke(e,n,"srcSet",a.srcSet,a,null),o&&ke(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var A=f=S=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":S=pt;break;case"checked":H=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:ke(e,n,o,pt,a,null)}}Ki(e,f,A,H,nt,S,u,!1);return;case"select":Se("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:ke(e,n,u,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?ui(e,!!o,n,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":Se("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ke(e,n,S,A,a,null)}Rn(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ke(e,n,H,o,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)Se(Oo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,nt,o,a,null)}return;default:if(bi(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Jf(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ke(e,n,A,o,a,null))}function NS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,H=null,nt=null,pt=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=_t;default:o.hasOwnProperty(lt)||ke(e,n,lt,null,o,_t)}}for(var st in o){var lt=o[st];if(_t=a[st],o.hasOwnProperty(st)&&(lt!=null||_t!=null))switch(st){case"type":f=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":pt=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==_t&&ke(e,n,st,lt,o,_t)}}Tn(e,S,A,H,nt,pt,f,u);return;case"select":lt=S=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":lt=H;default:o.hasOwnProperty(f)||ke(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==H&&ke(e,n,u,f,o,H)}n=A,a=S,o=lt,st!=null?ui(e,!!a,st,!1):!!o!=!!a&&(n!=null?ui(e,!!a,n,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ke(e,n,S,u,o,f)}Fe(e,st,lt);return;case"option":for(var jt in a)if(st=a[jt],a.hasOwnProperty(jt)&&st!=null&&!o.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:ke(e,n,jt,null,o,st)}for(H in o)if(st=o[H],lt=a[H],o.hasOwnProperty(H)&&st!==lt&&(st!=null||lt!=null))switch(H){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:ke(e,n,H,st,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)st=a[ae],a.hasOwnProperty(ae)&&st!=null&&!o.hasOwnProperty(ae)&&ke(e,n,ae,null,o,st);for(nt in o)if(st=o[nt],lt=a[nt],o.hasOwnProperty(nt)&&st!==lt&&(st!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:ke(e,n,nt,st,o,lt)}return;default:if(bi(n)){for(var Xe in a)st=a[Xe],a.hasOwnProperty(Xe)&&st!==void 0&&!o.hasOwnProperty(Xe)&&Jf(e,n,Xe,void 0,o,st);for(pt in o)st=o[pt],lt=a[pt],!o.hasOwnProperty(pt)||st===lt||st===void 0&&lt===void 0||Jf(e,n,pt,st,o,lt);return}}for(var Y in a)st=a[Y],a.hasOwnProperty(Y)&&st!=null&&!o.hasOwnProperty(Y)&&ke(e,n,Y,null,o,st);for(_t in o)st=o[_t],lt=a[_t],!o.hasOwnProperty(_t)||st===lt||st==null&&lt==null||ke(e,n,_t,st,o,lt)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&Mg(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>A)break;var pt=H.transferSize,_t=H.initiatorType;pt&&Mg(_t)&&(H=H.responseEnd,S+=pt*(H<A?1:(A-nt)/(H-nt)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,th=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function PS(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(FS)}:Tg;function FS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function Rg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[cs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);yr(n)}function Cg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function BS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function HS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$?"||e.data==="$~"}function sh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function GS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function Dg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Lg(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var vi=new Map,Ng=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=G.d;G.d={f:VS,r:kS,D:XS,C:WS,L:qS,m:YS,X:ZS,S:jS,M:KS};function VS(){var e=da.f(),n=$l();return e||n}function kS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Km(n):da.r(e)}var vr=typeof document>"u"?null:document;function Og(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ng.has(u)||(Ng.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),R(n),o.head.appendChild(n)))}}function XS(e){da.D(e),Og("dns-prefetch",e,null)}function WS(e,n){da.C(e,n),Og("preconnect",e,n)}function qS(e,n,a){da.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var f=u;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}vi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Nn(n,"link",e),R(n),o.head.appendChild(n)))}}function YS(e,n){da.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!vi.has(f)&&(e=_({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Nn(o,"link",e),R(o),a.head.appendChild(o)}}}function jS(e,n,a){da.S(e,n,a);var o=vr;if(o&&e){var u=Ca(o).hoistableStyles,f=xr(e);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Io(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&oh(e,a);var H=S=o.createElement("link");R(H),Nn(H,"link",e),H._p=new Promise(function(nt,pt){H.onload=nt,H.onerror=pt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function ZS(e,n){da.X(e,n);var a=vr;if(a&&e){var o=Ca(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0},n),(n=vi.get(u))&&lh(e,n),f=a.createElement("script"),R(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function KS(e,n){da.M(e,n);var a=vr;if(a&&e){var o=Ca(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&lh(e,n),f=a.createElement("script"),R(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Pg(e,n,a,o){var u=(u=K.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=Ca(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Io(e)))&&!f._p&&(S.instance=f,S.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||QS(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+le(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function QS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),R(n),e.head.appendChild(n))}function Sr(e){return'[src="'+le(e)+'"]'}function Fo(e){return"script[async]"+e}function Ig(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Nn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=xr(a.href);var f=e.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=zg(a),(u=vi.get(u))&&oh(o,u),f=(e.ownerDocument||e).createElement("link"),R(f);var S=f;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Nn(f,"link",o),n.state.loading|=4,cc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Fo(f)))?(n.instance=u,R(u),u):(o=a,(u=vi.get(f))&&(o=_({},a),lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Fg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function JS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $S(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=zg(o),(u=vi.get(u))&&oh(o,u),f=f.createElement("link"),R(f);var S=f;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Nn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ch=0;function ty(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ch===0&&(ch=62500*OS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ch?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(ey,e),hc=null,fc.call(e))}function ey(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function ny(e,n,a,o,u,f,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Gg(e,n,a,o,u,f,S,A,H,nt,pt,_t){return e=new ny(e,n,a,S,H,nt,pt,_t,A),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wu(f),e}function Vg(e){return e?(e=Qs,e):Qs}function kg(e,n,a,o,u,f){u=Vg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(jn(a,e,n),_o(a,e,n))}function Xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){Xg(e,n),(e=e.alternate)&&Xg(e,n)}function Wg(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&jn(n,e,67108864),uh(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var n=si();n=Qr(n);var a=ps(e,n);a!==null&&jn(a,e,n),uh(e,n)}}var pc=!0;function iy(e,n,a,o){var u=F.T;F.T=null;var f=G.p;try{G.p=2,fh(e,n,a,o)}finally{G.p=f,F.T=u}}function ay(e,n,a,o){var u=F.T;F.T=null;var f=G.p;try{G.p=8,fh(e,n,a,o)}finally{G.p=f,F.T=u}}function fh(e,n,a,o){if(pc){var u=hh(o);if(u===null)Qf(e,n,o,mc,a),jg(e,o);else if(ry(u,e,n,a,o))o.stopPropagation();else if(jg(e,o),n&4&&-1<sy.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Mt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Pt(S);A.entanglements[1]|=H,S&=~H}Fi(f),(Pe&6)===0&&(Ql=E()+500,No(0))}}break;case 31:case 13:A=ps(f,2),A!==null&&jn(A,f,2),$l(),uh(f,2)}if(f=hh(o),f===null&&Qf(e,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function hh(e){return e=du(e),dh(e)}var mc=null;function dh(e){if(mc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case ct:return 2;case dt:return 8;case $:case Lt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var ph=!1,Ya=null,ja=null,Za=null,Ho=new Map,Go=new Map,Ka=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&Wg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ry(e,n,a,o,u){switch(n){case"focusin":return Ya=Vo(Ya,e,n,a,o,u),!0;case"dragenter":return ja=Vo(ja,e,n,a,o,u),!0;case"mouseover":return Za=Vo(Za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function Zg(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){qg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=hh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=Ra(a),n!==null&&Wg(n),e.blockedOn=a,!1;n.shift()}return!0}function Kg(e,n,a){gc(e)&&a.delete(n)}function oy(){ph=!1,Ya!==null&&gc(Ya)&&(Ya=null),ja!==null&&gc(ja)&&(ja=null),Za!==null&&gc(Za)&&(Za=null),Ho.forEach(Kg),Go.forEach(Kg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,ph||(ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,oy)))}var vc=null;function Qg(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(dh(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,hf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(H){return _c(H,e)}Ya!==null&&_c(Ya,e),ja!==null&&_c(ja,e),Za!==null&&_c(Za,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[bn]||null;if(typeof f=="function")S||Qg(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[bn]||null)A=S.formAction;else if(dh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Qg(a)}}}function Jg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function mh(e){this._internalRoot=e}xc.prototype.render=mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();kg(a,o,e,n,null,null)},xc.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kg(e.current,2,null,e,null,null),$l(),n[Ei]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.3")throw Error(s(527,$g,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{yt=Sc.inject(ly),bt=Sc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=r0,f=o0,S=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Gg(e,1,!1,null,null,a,o,null,u,f,S,Jg),e[Ei]=n.current,Kf(e),new mh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=r0,S=o0,A=l0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Gg(e,1,!0,n,a??null,o,u,H,f,S,A,Jg),n.context=Vg(null),a=n.current,o=si(),o=Qr(o),u=Pa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Fi(n),e[Ei]=n.current,Kf(e),new xc(n)},Xo.version="19.2.3",Xo}var u_;function Sy(){if(u_)return vh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=xy(),vh.exports}var yy=Sy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="182",Br={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},My=0,f_=1,Ey=2,Yc=1,by=2,tl=3,os=0,Qn=1,Sa=2,Ma=0,Hr=1,h_=2,d_=3,p_=4,Ty=5,Ns=100,Ay=101,Ry=102,Cy=103,wy=104,Dy=200,Uy=201,Ly=202,Ny=203,id=204,ad=205,Oy=206,Py=207,zy=208,Iy=209,Fy=210,By=211,Hy=212,Gy=213,Vy=214,sd=0,rd=1,od=2,Vr=3,ld=4,cd=5,ud=6,fd=7,Tv=0,ky=1,Xy=2,Xi=0,Av=1,Rv=2,Cv=3,wv=4,Dv=5,Uv=6,Lv=7,Nv=300,Is=301,kr=302,hd=303,dd=304,ru=306,pd=1e3,ya=1001,md=1002,On=1003,Wy=1004,yc=1005,Bn=1006,Mh=1007,Ps=1008,li=1009,Ov=1010,Pv=1011,nl=1012,np=1013,Yi=1014,Gi=1015,ba=1016,ip=1017,ap=1018,il=1020,zv=35902,Iv=35899,Fv=1021,Bv=1022,Li=1023,Ta=1026,zs=1027,Hv=1028,sp=1029,Xr=1030,rp=1031,op=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,yd=37492,Md=37496,Ed=37488,bd=37489,Td=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,zd=37817,Id=37818,Fd=37819,Bd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,qd=36285,Yd=36286,qy=3200,Gv=0,Yy=1,ss="",Si="srgb",Wr="srgb-linear",tu="linear",Ge="srgb",Mr=7680,m_=519,jy=512,Zy=513,Ky=514,lp=515,Qy=516,Jy=517,cp=518,$y=519,g_=35044,__="300 es",Vi=2e3,eu=2001;function Vv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tM(){const r=nu("canvas");return r.style.display="block",r}const v_={};function x_(...r){const t="THREE."+r.shift();console.log(t,...r)}function se(...r){const t="THREE."+r.shift();console.warn(t,...r)}function we(...r){const t="THREE."+r.shift();console.error(t,...r)}function al(...r){const t=r.join(" ");t in v_||(v_[t]=!0,se(...r))}function eM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,jd=180/Math.PI;function ol(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Me(r,t,i){return Math.max(t,Math.min(i,r))}function nM(r,t){return(r%t+t)%t}function Eh(r,t,i){return(1-i)*r+i*t}function Wo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const iM={DEG2RAD:Jc};class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],v=c[h+0],y=c[h+1],b=c[h+2],T=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=v,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==v||p!==y||g!==b){let M=m*v+p*y+g*b+_*T;M<0&&(v=-v,y=-y,b=-b,T=-T,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),P=Math.sin(O);x=Math.sin(x*O)/P,d=Math.sin(d*O)/P,m=m*x+v*d,p=p*x+y*d,g=g*x+b*d,_=_*x+T*d}else{m=m*x+v*d,p=p*x+y*d,g=g*x+b*d,_=_*x+T*d;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],v=c[h+1],y=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*y-p*v,t[i+1]=m*b+g*v+p*_-d*y,t[i+2]=p*b+g*y+d*v-m*_,t[i+3]=g*b-d*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),v=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"YXZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"ZXY":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"ZYX":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"YZX":this._x=v*g*_+p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_-v*y*b;break;case"XZY":this._x=v*g*_-p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_+v*y*b;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(S_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(S_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new Z,S_=new Fs;class pe{constructor(t,i,s,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],b=s[8],T=l[0],M=l[3],x=l[6],O=l[1],P=l[4],L=l[7],I=l[2],B=l[5],z=l[8];return c[0]=h*T+d*O+m*I,c[3]=h*M+d*P+m*B,c[6]=h*x+d*L+m*z,c[1]=p*T+g*O+_*I,c[4]=p*M+g*P+_*B,c[7]=p*x+g*L+_*z,c[2]=v*T+y*O+b*I,c[5]=v*M+y*P+b*B,c[8]=v*x+y*L+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,v=d*m-g*c,y=p*c-h*m,b=i*_+s*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=v*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Th.makeScale(t,i)),this}rotate(t){return this.premultiply(Th.makeRotation(-t)),this}translate(t,i){return this.premultiply(Th.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new pe,y_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:y_,fromXYZ:M_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:y_,fromXYZ:M_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const De=aM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class sM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=nu("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Ah(l[h].image)):c.push(Ah(l[h]))}else c=Ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let oM=0;const Rh=new Z;class Vn extends Bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ya,l=ya,c=Bn,h=Ps,d=Li,m=li,p=Vn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ol(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Nv;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],b=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(y+1)/2,I=(x+1)/2,B=(g+v)/4,z=(_+T)/4,j=(b+M)/4;return P>L&&P>I?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=B/s,c=z/s):L>I?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=B/l,c=j/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=j/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(_-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends lM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class kv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ci):Ci.fromBufferAttribute(c,h),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Ec.subVectors(this.max,qo),br.subVectors(t.a,qo),Tr.subVectors(t.b,qo),Ar.subVectors(t.c,qo),Ja.subVectors(Tr,br),$a.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Rs.z,Rs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Rs.z,0,-Rs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Rs.y,Rs.x,0];return!Ch(i,br,Tr,Ar,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Ch(i,br,Tr,Ar,Ec))?!1:(bc.crossVectors(Ja,$a),i=[bc.x,bc.y,bc.z],Ch(i,br,Tr,Ar,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ci=new Z,Mc=new ll,br=new Z,Tr=new Z,Ar=new Z,Ja=new Z,$a=new Z,Rs=new Z,qo=new Z,Ec=new Z,bc=new Z,Cs=new Z;function Ch(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const uM=new ll,Yo=new Z,wh=new Z;class ou{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):uM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(wh)),this.expandByPoint(Yo.copy(t.center).sub(wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new Z,Dh=new Z,Tc=new Z,ts=new Z,Uh=new Z,Ac=new Z,Lh=new Z;class lu{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Dh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Dh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=ts.dot(this.direction),m=-ts.dot(Tc),p=ts.lengthSq(),g=Math.abs(1-h*h);let _,v,y,b;if(g>0)if(_=h*m-d,v=h*d-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const T=1/g;_*=T,v*=T,y=_*(_+h*v+2*d)+v*(h*_+v+2*m)+p}else v=c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;else v<=-b?(_=Math.max(0,-(-h*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(h*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=h>0?-c:c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Dh).addScaledVector(Tc,v),y}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){Uh.subVectors(i,t),Ac.subVectors(s,t),Lh.crossVectors(Uh,Ac);let h=this.direction.dot(Lh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(ts,Ac));if(m<0)return null;const p=d*this.direction.dot(Uh.cross(ts));if(p<0||m+p>h)return null;const g=-d*ts.dot(Lh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,h,d,m,p,g,_,v,y,b,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,v,y,b,T,M)}set(t,i,s,l,c,h,d,m,p,g,_,v,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=h*g,y=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+b*p,i[5]=v-T*p,i[9]=-d*m,i[2]=T-v*p,i[6]=b+y*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,b=p*g,T=p*_;i[0]=v+T*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=T+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,b=p*g,T=p*_;i[0]=v-T*d,i[4]=-h*_,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=T-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=b*p-y,i[8]=v*p+T,i[1]=m*_,i[5]=T*p+v,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=T-v*_,i[8]=b*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+b,i[10]=v-T*_}else if(t.order==="XZY"){const v=h*m,y=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+T,i[5]=h*g,i[9]=y*_-b,i[2]=b*_-y,i[6]=d*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,hM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Rc.crossVectors(ri,es),l[0]=es.x,l[4]=Rc.x,l[8]=ri.x,l[1]=es.y,l[5]=Rc.y,l[9]=ri.y,l[2]=es.z,l[6]=Rc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],b=s[2],T=s[6],M=s[10],x=s[14],O=s[3],P=s[7],L=s[11],I=s[15],B=l[0],z=l[4],j=l[8],C=l[12],U=l[1],V=l[5],J=l[9],tt=l[13],ft=l[2],ut=l[6],F=l[10],G=l[14],rt=l[3],St=l[7],vt=l[11],N=l[15];return c[0]=h*B+d*U+m*ft+p*rt,c[4]=h*z+d*V+m*ut+p*St,c[8]=h*j+d*J+m*F+p*vt,c[12]=h*C+d*tt+m*G+p*N,c[1]=g*B+_*U+v*ft+y*rt,c[5]=g*z+_*V+v*ut+y*St,c[9]=g*j+_*J+v*F+y*vt,c[13]=g*C+_*tt+v*G+y*N,c[2]=b*B+T*U+M*ft+x*rt,c[6]=b*z+T*V+M*ut+x*St,c[10]=b*j+T*J+M*F+x*vt,c[14]=b*C+T*tt+M*G+x*N,c[3]=O*B+P*U+L*ft+I*rt,c[7]=O*z+P*V+L*ut+I*St,c[11]=O*j+P*J+L*F+I*vt,c[15]=O*C+P*tt+L*G+I*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15],O=m*y-p*v,P=d*y-p*_,L=d*v-m*_,I=h*y-p*g,B=h*v-m*g,z=h*_-d*g;return i*(T*O-M*P+x*L)-s*(b*O-M*I+x*B)+l*(b*P-T*I+x*z)-c*(b*L-T*B+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],O=_*M*p-T*v*p+T*m*y-d*M*y-_*m*x+d*v*x,P=b*v*p-g*M*p-b*m*y+h*M*y+g*m*x-h*v*x,L=g*T*p-b*_*p+b*d*y-h*T*y-g*d*x+h*_*x,I=b*_*m-g*T*m-b*d*v+h*T*v+g*d*M-h*_*M,B=i*O+s*P+l*L+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=O*z,t[1]=(T*v*c-_*M*c-T*l*y+s*M*y+_*l*x-s*v*x)*z,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*x+s*m*x)*z,t[3]=(_*m*c-d*v*c-_*l*p+s*v*p+d*l*y-s*m*y)*z,t[4]=P*z,t[5]=(g*M*c-b*v*c+b*l*y-i*M*y-g*l*x+i*v*x)*z,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*x-i*m*x)*z,t[7]=(h*v*c-g*m*c+g*l*p-i*v*p-h*l*y+i*m*y)*z,t[8]=L*z,t[9]=(b*_*c-g*T*c-b*s*y+i*T*y+g*s*x-i*_*x)*z,t[10]=(h*T*c-b*d*c+b*s*p-i*T*p-h*s*x+i*d*x)*z,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*y-i*d*y)*z,t[12]=I*z,t[13]=(g*T*l-b*_*l+b*s*v-i*T*v-g*s*M+i*_*M)*z,t[14]=(b*d*l-h*T*l-b*s*m+i*T*m+h*s*M-i*d*M)*z,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*v+i*d*v)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,v=c*p,y=c*g,b=c*_,T=h*g,M=h*_,x=d*_,O=m*p,P=m*g,L=m*_,I=s.x,B=s.y,z=s.z;return l[0]=(1-(T+x))*I,l[1]=(y+L)*I,l[2]=(b-P)*I,l[3]=0,l[4]=(y-L)*B,l[5]=(1-(v+x))*B,l[6]=(M+O)*B,l[7]=0,l[8]=(b+P)*z,l[9]=(M-O)*z,l[10]=(1-(v+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/h,_=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let b,T;if(m)b=c/(h-c),T=h*c/(h-c);else if(d===Vi)b=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===eu)b=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,T;if(m)b=1/(h-c),T=h/(h-c);else if(d===Vi)b=-2/(h-c),T=-(h+c)/(h-c);else if(d===eu)b=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new Z,wi=new tn,fM=new Z(0,0,0),hM=new Z(1,1,1),es=new Z,Rc=new Z,ri=new Z,E_=new tn,b_=new Fs;class ji{constructor(t=0,i=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return E_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(E_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return b_.setFromEuler(this),this.setFromQuaternion(b_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const T_=new Z,Cr=new Fs,ga=new tn,Cc=new Z,jo=new Z,pM=new Z,mM=new Fs,A_=new Z(1,0,0),R_=new Z(0,1,0),C_=new Z(0,0,1),w_={type:"added"},gM={type:"removed"},wr={type:"childadded",child:null},Nh={type:"childremoved",child:null};class En extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new Z,i=new ji,s=new Fs,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new pe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(A_,t)}rotateY(t){return this.rotateOnAxis(R_,t)}rotateZ(t){return this.rotateOnAxis(C_,t)}translateOnAxis(t,i){return T_.copy(t).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(A_,t)}translateY(t){return this.translateOnAxis(R_,t)}translateZ(t){return this.translateOnAxis(C_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Cc,this.up):ga.lookAt(Cc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(ga),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(w_),wr.child=t,this.dispatchEvent(wr),wr.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gM),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(w_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new Z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Z,_a=new Z,Oh=new Z,va=new Z,Dr=new Z,Ur=new Z,D_=new Z,Ph=new Z,zh=new Z,Ih=new Z,Fh=new an,Bh=new an,Hh=new an;class Ui{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),_a.subVectors(s,i),Oh.subVectors(t,i);const h=Di.dot(Di),d=Di.dot(_a),m=Di.dot(Oh),p=_a.dot(_a),g=_a.dot(Oh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-d*g)*v,b=(h*g-d*m)*v;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(h,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Fh.setScalar(0),Bh.setScalar(0),Hh.setScalar(0),Fh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,s),Hh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Fh,c.x),h.addScaledVector(Bh,c.y),h.addScaledVector(Hh,c.z),h}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),_a.subVectors(t,i),Di.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Di.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(c,s),Ph.subVectors(t,s);const m=Dr.dot(Ph),p=Ur.dot(Ph);if(m<=0&&p<=0)return i.copy(s);zh.subVectors(t,l);const g=Dr.dot(zh),_=Ur.dot(zh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Dr,h);Ih.subVectors(t,c);const y=Dr.dot(Ih),b=Ur.dot(Ih);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ur,d);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return D_.subVectors(c,l),d=(_-g)/(_-g+(y-b)),i.copy(l).addScaledVector(D_,d);const x=1/(M+T+v);return h=T*x,d=v*x,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Gh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=nM(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Gh(h,c,t+1/3),this.g=Gh(h,c,t),this.b=Gh(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=Xv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return De.workingToColorSpace(Fn.copy(this),t),Math.round(Me(Fn.r*255,0,255))*65536+Math.round(Me(Fn.g*255,0,255))*256+Math.round(Me(Fn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Si){De.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(wc);const s=Eh(ns.h,wc.h,i),l=Eh(ns.s,wc.s,i),c=Eh(ns.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Re;Re.NAMES=Xv;let _M=0;class jr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Hr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==id&&(s.blendSrc=this.blendSrc),this.blendDst!==ad&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hp extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new Z,Dc=new ue;let vM=0;class qi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=g_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==g_&&(t.usage=this.usage),t}}class Wv extends qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class qv extends qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pn extends qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let xM=0;const xi=new tn,Vh=new En,Lr=new Z,oi=new ll,Zo=new ll,yn=new Z;class Jn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vv(t)?qv:Wv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(oi.min,Zo.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Zo.max),oi.expandByPoint(yn)):(oi.expandByPoint(Zo.min),oi.expandByPoint(Zo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),yn.add(Lr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new Z,m[j]=new Z;const p=new Z,g=new Z,_=new Z,v=new ue,y=new ue,b=new ue,T=new Z,M=new Z;function x(j,C,U){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,U),v.fromBufferAttribute(c,j),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,U),g.sub(p),_.sub(p),y.sub(v),b.sub(v);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(V),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),d[j].add(T),d[C].add(T),d[U].add(T),m[j].add(M),m[C].add(M),m[U].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let j=0,C=O.length;j<C;++j){const U=O[j],V=U.start,J=U.count;for(let tt=V,ft=V+J;tt<ft;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const P=new Z,L=new Z,I=new Z,B=new Z;function z(j){I.fromBufferAttribute(l,j),B.copy(I);const C=d[j];P.copy(C),P.sub(I.multiplyScalar(I.dot(C))).normalize(),L.crossVectors(B,C);const V=L.dot(m[j])<0?-1:1;h.setXYZW(j,P.x,P.y,P.z,V)}for(let j=0,C=O.length;j<C;++j){const U=O[j],V=U.start,J=U.count;for(let tt=V,ft=V+J;tt<ft;tt+=3)z(t.getX(tt+0)),z(t.getX(tt+1)),z(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let x=0;x<g;x++)v[b++]=p[y++]}return new qi(v,g,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U_=new tn,ws=new lu,Uc=new ou,L_=new Z,Lc=new Z,Nc=new Z,Oc=new Z,kh=new Z,Pc=new Z,N_=new Z,zc=new Z;class Ni extends En{constructor(t=new Jn,i=new hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(kh.fromBufferAttribute(_,t),h?Pc.addScaledVector(kh,g):Pc.addScaledVector(kh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uc,L_)===null||ws.origin.distanceToSquared(L_)>(t.far-t.near)**2))&&(U_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(U_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=h[M.materialIndex],O=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=O,I=P;L<I;L+=3){const B=d.getX(L),z=d.getX(L+1),j=d.getX(L+2);l=Ic(this,x,t,s,p,g,_,B,z,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=d.getX(M),P=d.getX(M+1),L=d.getX(M+2);l=Ic(this,h,t,s,p,g,_,O,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=h[M.materialIndex],O=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=O,I=P;L<I;L+=3){const B=L,z=L+1,j=L+2;l=Ic(this,x,t,s,p,g,_,B,z,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=M,P=M+1,L=M+2;l=Ic(this,h,t,s,p,g,_,O,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function SM(r,t,i,s,l,c,h,d){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===os,d),m===null)return null;zc.copy(d),zc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:r}}function Ic(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const g=SM(r,t,i,s,Lc,Nc,Oc,N_);if(g){const _=new Z;Ui.getBarycoord(N_,Lc,Nc,Oc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,d,m,p,_,new ue)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,d,m,p,_,new ue)),h&&(g.normal=Ui.getInterpolatedAttribute(h,d,m,p,_,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new Z,materialIndex:0};Ui.getNormal(Lc,Nc,Oc,v.normal),g.face=v,g.barycoord=_}return g}class cl extends Jn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let v=0,y=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(_,2));function b(T,M,x,O,P,L,I,B,z,j,C){const U=L/z,V=I/j,J=L/2,tt=I/2,ft=B/2,ut=z+1,F=j+1;let G=0,rt=0;const St=new Z;for(let vt=0;vt<F;vt++){const N=vt*V-tt;for(let it=0;it<ut;it++){const mt=it*U-J;St[T]=mt*O,St[M]=N*P,St[x]=ft,p.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[x]=B>0?1:-1,g.push(St.x,St.y,St.z),_.push(it/z),_.push(1-vt/j),G+=1}}for(let vt=0;vt<j;vt++)for(let N=0;N<z;N++){const it=v+N+ut*vt,mt=v+N+ut*(vt+1),Rt=v+(N+1)+ut*(vt+1),Gt=v+(N+1)+ut*vt;m.push(it,mt,Gt),m.push(mt,Rt,Gt),rt+=6}d.addGroup(y,rt,C),y+=rt,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function yM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Yv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const MM={clone:qr,merge:Gn};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=yM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class jv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new Z,O_=new ue,P_=new ue;class yi extends jv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,O_,P_),i.subVectors(P_,O_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Or=1;class TM extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Nr,Or,t,i);l.layers=this.layers,this.add(l);const c=new yi(Nr,Or,t,i);c.layers=this.layers,this.add(c);const h=new yi(Nr,Or,t,i);h.layers=this.layers,this.add(h);const d=new yi(Nr,Or,t,i);d.layers=this.layers,this.add(d);const m=new yi(Nr,Or,t,i);m.layers=this.layers,this.add(m);const p=new yi(Nr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Zv extends Vn{constructor(t=[],i=Is,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new Ni(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new TM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Fc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class RM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CM extends Vn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=On,g=On,_,v){super(null,h,d,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new Z,wM=new Z,DM=new pe;class as{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(wM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||DM.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new ou,UM=new ue(.5,.5),Bc=new Z;class dp{constructor(t=new as,i=new as,s=new as,l=new as,c=new as,h=new as){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],O=c[12],P=c[13],L=c[14],I=c[15];if(l[0].setComponents(p-h,y-g,x-b,I-O).normalize(),l[1].setComponents(p+h,y+g,x+b,I+O).normalize(),l[2].setComponents(p+d,y+_,x+T,I+P).normalize(),l[3].setComponents(p-d,y-_,x-T,I-P).normalize(),s)l[4].setComponents(m,v,M,L).normalize(),l[5].setComponents(p-m,y-v,x-M,I-L).normalize();else if(l[4].setComponents(p-m,y-v,x-M,I-L).normalize(),i===Vi)l[5].setComponents(p+m,y+v,x+M,I+L).normalize();else if(i===eu)l[5].setComponents(m,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=UM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new Z,au=new Z,z_=new tn,Ko=new lu,Hc=new ou,qh=new Z,I_=new Z;class Qv extends En{constructor(t=new Jn,i=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new pn(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;z_.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(z_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let T=y,M=b-1;T<M;T+=p){const x=g.getX(T),O=g.getX(T+1),P=Gc(this,t,Ko,m,x,O,T);P&&i.push(P)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(y),x=Gc(this,t,Ko,m,T,M,b-1);x&&i.push(x)}}else{const y=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let T=y,M=b-1;T<M;T+=p){const x=Gc(this,t,Ko,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Gc(this,t,Ko,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(iu.fromBufferAttribute(d,l),au.fromBufferAttribute(d,c),i.distanceSqToSegment(iu,au,qh,I_)>s)return;qh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(qh);if(!(p<t.near||p>t.far))return{distance:p,point:I_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const F_=new Z,B_=new Z;class LM extends Qv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)F_.fromBufferAttribute(i,l),B_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+F_.distanceTo(B_);t.setAttribute("lineDistance",new pn(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sl extends Vn{constructor(t,i,s=Yi,l,c,h,d=On,m=On,p,g=Ta,_=1){if(g!==Ta&&g!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class NM extends sl{constructor(t,i=Yi,s=Is,l,c,h=On,d=On,m,p=Ta){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mp extends Jn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],y=[];let b=0;const T=[],M=s/2;let x=0;O(),h===!1&&(t>0&&P(!0),i>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(y,2));function O(){const L=new Z,I=new Z;let B=0;const z=(i-t)/s;for(let j=0;j<=c;j++){const C=[],U=j/c,V=U*(i-t)+t;for(let J=0;J<=l;J++){const tt=J/l,ft=tt*m+d,ut=Math.sin(ft),F=Math.cos(ft);I.x=V*ut,I.y=-U*s+M,I.z=V*F,_.push(I.x,I.y,I.z),L.set(ut,z,F).normalize(),v.push(L.x,L.y,L.z),y.push(tt,1-U),C.push(b++)}T.push(C)}for(let j=0;j<l;j++)for(let C=0;C<c;C++){const U=T[C][j],V=T[C+1][j],J=T[C+1][j+1],tt=T[C][j+1];(t>0||C!==0)&&(g.push(U,V,tt),B+=3),(i>0||C!==c-1)&&(g.push(V,J,tt),B+=3)}p.addGroup(x,B,0),x+=B}function P(L){const I=b,B=new ue,z=new Z;let j=0;const C=L===!0?t:i,U=L===!0?1:-1;for(let J=1;J<=l;J++)_.push(0,M*U,0),v.push(0,U,0),y.push(.5,.5),b++;const V=b;for(let J=0;J<=l;J++){const ft=J/l*m+d,ut=Math.cos(ft),F=Math.sin(ft);z.x=C*F,z.y=M*U,z.z=C*ut,_.push(z.x,z.y,z.z),v.push(0,U,0),B.x=ut*.5+.5,B.y=F*.5*U+.5,y.push(B.x,B.y),b++}for(let J=0;J<l;J++){const tt=I+J,ft=V+J;L===!0?g.push(ft,ft+1,tt):g.push(ft+1,ft,tt),j+=3}p.addGroup(x,j,L===!0?1:2),x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gp extends mp{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new gp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cu extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=i/m,y=[],b=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*v-h;for(let P=0;P<p;P++){const L=P*_-c;b.push(L,-O,0),T.push(0,0,1),M.push(P/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const P=O+p*x,L=O+p*(x+1),I=O+1+p*(x+1),B=O+1+p*x;y.push(P,L,B),y.push(L,I,B)}this.setIndex(y),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.widthSegments,t.heightSegments)}}class _p extends Jn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new Z,v=new Z,y=[],b=[],T=[],M=[];for(let x=0;x<=s;x++){const O=[],P=x/s;let L=0;x===0&&h===0?L=.5/i:x===s&&m===Math.PI&&(L=-.5/i);for(let I=0;I<=i;I++){const B=I/i;_.x=-t*Math.cos(l+B*c)*Math.sin(h+P*d),_.y=t*Math.cos(h+P*d),_.z=t*Math.sin(l+B*c)*Math.sin(h+P*d),b.push(_.x,_.y,_.z),v.copy(_).normalize(),T.push(v.x,v.y,v.z),M.push(B+L,1-P),O.push(p++)}g.push(O)}for(let x=0;x<s;x++)for(let O=0;O<i;O++){const P=g[x][O+1],L=g[x][O],I=g[x+1][O],B=g[x+1][O+1];(x!==0||h>0)&&y.push(P,L,B),(x!==s-1||m<Math.PI)&&y.push(L,I,B)}this.setIndex(y),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _p(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class OM extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PM extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gv,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zM extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IM extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $v extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Yh=new tn,H_=new Z,G_=new Z;class FM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dp,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;H_.setFromMatrixPosition(t.matrixWorld),i.position.copy(H_),G_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(G_),i.updateMatrixWorld(),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vp extends jv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BM extends FM{constructor(){super(new vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends $v{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new BM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class HM extends $v{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class GM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const k_=new tn;class VM{constructor(t,i,s=0,l=1/0){this.ray=new lu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):we("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return k_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(k_),this}intersectObject(t,i=!0,s=[]){return Zd(t,this,s,i),s.sort(X_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Zd(t[l],this,s,i);return s.sort(X_),s}}function X_(r,t){return r.distance-t.distance}function Zd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Zd(c[h],t,i,!0)}}class W_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kM extends LM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let v=0,y=0,b=-d;v<=i;v++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const T=v===c?s:l;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const g=new Jn;g.setAttribute("position",new pn(m,3)),g.setAttribute("color",new pn(p,3));const _=new pp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const q_=new Z;let Vc,jh;class Zh extends En{constructor(t=new Z(0,0,1),i=new Z(0,0,0),s=1,l=16776960,c=s*.2,h=c*.2){super(),this.type="ArrowHelper",Vc===void 0&&(Vc=new Jn,Vc.setAttribute("position",new pn([0,0,0,0,1,0],3)),jh=new gp(.5,1,5,1),jh.translate(0,-.5,0)),this.position.copy(i),this.line=new Qv(Vc,new pp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ni(jh,new hp({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,h)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{q_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(q_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class XM extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Y_(r,t,i,s){const l=WM(s);switch(i){case Fv:return r*t;case Hv:return r*t/l.components*l.byteLength;case sp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case rp:return r*t*2/l.components*l.byteLength;case Bv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case op:return r*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(r,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case yd:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Md:case Td:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WM(r){switch(r){case li:case Ov:return{byteLength:1,components:1};case nl:case Pv:case ba:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case Yi:case np:case Gi:return{byteLength:4,components:1};case zv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function qM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<_.length;y++){const b=_[v],T=_[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,b=_.length;y<b;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eE=`#ifdef USE_BATCHING
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
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,oE=`#ifdef USE_BUMPMAP
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gE=`#define PI 3.141592653589793
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
} // validated`,_E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vE=`vec3 transformedNormal = objectNormal;
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
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
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
}`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
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
#endif`,WE=`uniform sampler2D dfgLUT;
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
}`,qE=`
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ub=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yb=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,tT=`#define DISTANCE
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
}`,eT=`#define DISTANCE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#define LAMBERT
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
}`,cT=`#define LAMBERT
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
}`,uT=`#define MATCAP
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
}`,fT=`#define MATCAP
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
}`,hT=`#define NORMAL
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
}`,dT=`#define NORMAL
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
}`,pT=`#define PHONG
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
}`,mT=`#define PHONG
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
}`,gT=`#define STANDARD
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
}`,_T=`#define STANDARD
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
}`,vT=`#define TOON
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
}`,xT=`#define TOON
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
}`,ST=`uniform float size;
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
}`,yT=`uniform vec3 diffuse;
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
}`,MT=`#include <common>
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
}`,ET=`uniform vec3 color;
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
}`,bT=`uniform float rotation;
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
}`,TT=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:YM,alphahash_pars_fragment:jM,alphamap_fragment:ZM,alphamap_pars_fragment:KM,alphatest_fragment:QM,alphatest_pars_fragment:JM,aomap_fragment:$M,aomap_pars_fragment:tE,batching_pars_vertex:eE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:aE,bsdfs:sE,iridescence_fragment:rE,bumpmap_pars_fragment:oE,clipping_planes_fragment:lE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:fE,color_fragment:hE,color_pars_fragment:dE,color_pars_vertex:pE,color_vertex:mE,common:gE,cube_uv_reflection_fragment:_E,defaultnormal_vertex:vE,displacementmap_pars_vertex:xE,displacementmap_vertex:SE,emissivemap_fragment:yE,emissivemap_pars_fragment:ME,colorspace_fragment:EE,colorspace_pars_fragment:bE,envmap_fragment:TE,envmap_common_pars_fragment:AE,envmap_pars_fragment:RE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:BE,envmap_vertex:wE,fog_vertex:DE,fog_pars_vertex:UE,fog_fragment:LE,fog_pars_fragment:NE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:PE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:IE,lights_pars_begin:FE,lights_toon_fragment:HE,lights_toon_pars_fragment:GE,lights_phong_fragment:VE,lights_phong_pars_fragment:kE,lights_physical_fragment:XE,lights_physical_pars_fragment:WE,lights_fragment_begin:qE,lights_fragment_maps:YE,lights_fragment_end:jE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:JE,map_fragment:$E,map_pars_fragment:tb,map_particle_fragment:eb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:sb,morphcolor_vertex:rb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:cb,normal_fragment_begin:ub,normal_fragment_maps:fb,normal_pars_fragment:hb,normal_pars_vertex:db,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:Sb,packing:yb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:bb,dithering_pars_fragment:Tb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:wb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ub,skinbase_vertex:Lb,skinning_pars_vertex:Nb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:zb,specularmap_pars_fragment:Ib,tonemapping_fragment:Fb,tonemapping_pars_fragment:Bb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Xb,worldpos_vertex:Wb,background_vert:qb,background_frag:Yb,backgroundCube_vert:jb,backgroundCube_frag:Zb,cube_vert:Kb,cube_frag:Qb,depth_vert:Jb,depth_frag:$b,distance_vert:tT,distance_frag:eT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:aT,linedashed_frag:sT,meshbasic_vert:rT,meshbasic_frag:oT,meshlambert_vert:lT,meshlambert_frag:cT,meshmatcap_vert:uT,meshmatcap_frag:fT,meshnormal_vert:hT,meshnormal_frag:dT,meshphong_vert:pT,meshphong_frag:mT,meshphysical_vert:gT,meshphysical_frag:_T,meshtoon_vert:vT,meshtoon_frag:xT,points_vert:ST,points_frag:yT,shadow_vert:MT,shadow_frag:ET,sprite_vert:bT,sprite_frag:TT},Ft={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Gn([Ft.points,Ft.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Gn([Ft.common,Ft.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Gn([Ft.sprite,Ft.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Gn([Ft.lights,Ft.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const kc={r:0,b:0,g:0},Us=new ji,AT=new tn;function RT(r,t,i,s,l,c,h){const d=new Re(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function b(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:t).get(L)),L}function T(P){let L=!1;const I=b(P);I===null?x(d,m):I&&I.isColor&&(x(I,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(P,L){const I=b(L);I&&(I.isCubeTexture||I.mapping===ru)?(g===void 0&&(g=new Ni(new cl(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:qr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(L.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AT.makeRotationFromEuler(Us)),g.material.toneMapped=De.getTransfer(I.colorSpace)!==Ge,(_!==I||v!==I.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,y=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ni(new cu(2,2),new Zi({name:"BackgroundMaterial",uniforms:qr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=De.getTransfer(I.colorSpace)!==Ge,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,v=I.version,y=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,L){P.getRGB(kc,Yv(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,L,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,L=1){d.set(P),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:T,addToRenderList:M,dispose:O}}function CT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(U,V,J,tt,ft){let ut=!1;const F=_(tt,J,V);c!==F&&(c=F,p(c.object)),ut=y(U,tt,J,ft),ut&&b(U,tt,J,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,L(U,V,J,tt),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function _(U,V,J){const tt=J.wireframe===!0;let ft=s[U.id];ft===void 0&&(ft={},s[U.id]=ft);let ut=ft[V.id];ut===void 0&&(ut={},ft[V.id]=ut);let F=ut[tt];return F===void 0&&(F=v(m()),ut[tt]=F),F}function v(U){const V=[],J=[],tt=[];for(let ft=0;ft<i;ft++)V[ft]=0,J[ft]=0,tt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:tt,object:U,attributes:{},index:null}}function y(U,V,J,tt){const ft=c.attributes,ut=V.attributes;let F=0;const G=J.getAttributes();for(const rt in G)if(G[rt].location>=0){const vt=ft[rt];let N=ut[rt];if(N===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),vt===void 0||vt.attribute!==N||N&&vt.data!==N.data)return!0;F++}return c.attributesNum!==F||c.index!==tt}function b(U,V,J,tt){const ft={},ut=V.attributes;let F=0;const G=J.getAttributes();for(const rt in G)if(G[rt].location>=0){let vt=ut[rt];vt===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(vt=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(vt=U.instanceColor));const N={};N.attribute=vt,vt&&vt.data&&(N.data=vt.data),ft[rt]=N,F++}c.attributes=ft,c.attributesNum=F,c.index=tt}function T(){const U=c.newAttributes;for(let V=0,J=U.length;V<J;V++)U[V]=0}function M(U){x(U,0)}function x(U,V){const J=c.newAttributes,tt=c.enabledAttributes,ft=c.attributeDivisors;J[U]=1,tt[U]===0&&(r.enableVertexAttribArray(U),tt[U]=1),ft[U]!==V&&(r.vertexAttribDivisor(U,V),ft[U]=V)}function O(){const U=c.newAttributes,V=c.enabledAttributes;for(let J=0,tt=V.length;J<tt;J++)V[J]!==U[J]&&(r.disableVertexAttribArray(J),V[J]=0)}function P(U,V,J,tt,ft,ut,F){F===!0?r.vertexAttribIPointer(U,V,J,ft,ut):r.vertexAttribPointer(U,V,J,tt,ft,ut)}function L(U,V,J,tt){T();const ft=tt.attributes,ut=J.getAttributes(),F=V.defaultAttributeValues;for(const G in ut){const rt=ut[G];if(rt.location>=0){let St=ft[G];if(St===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(St=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(St=U.instanceColor)),St!==void 0){const vt=St.normalized,N=St.itemSize,it=t.get(St);if(it===void 0)continue;const mt=it.buffer,Rt=it.type,Gt=it.bytesPerElement,K=Rt===r.INT||Rt===r.UNSIGNED_INT||St.gpuType===np;if(St.isInterleavedBufferAttribute){const ht=St.data,Dt=ht.stride,qt=St.offset;if(ht.isInstancedInterleavedBuffer){for(let Xt=0;Xt<rt.locationSize;Xt++)x(rt.location+Xt,ht.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Xt=0;Xt<rt.locationSize;Xt++)M(rt.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Xt=0;Xt<rt.locationSize;Xt++)P(rt.location+Xt,N/rt.locationSize,Rt,vt,Dt*Gt,(qt+N/rt.locationSize*Xt)*Gt,K)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<rt.locationSize;ht++)x(rt.location+ht,St.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<rt.locationSize;ht++)M(rt.location+ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ht=0;ht<rt.locationSize;ht++)P(rt.location+ht,N/rt.locationSize,Rt,vt,N*Gt,N/rt.locationSize*ht*Gt,K)}}else if(F!==void 0){const vt=F[G];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv(rt.location,vt);break;case 3:r.vertexAttrib3fv(rt.location,vt);break;case 4:r.vertexAttrib4fv(rt.location,vt);break;default:r.vertexAttrib1fv(rt.location,vt)}}}}O()}function I(){j();for(const U in s){const V=s[U];for(const J in V){const tt=V[J];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete V[J]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const V=s[U.id];for(const J in V){const tt=V[J];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete V[J]}delete s[U.id]}function z(U){for(const V in s){const J=s[V];if(J[U.id]===void 0)continue;const tt=J[U.id];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete J[U.id]}}function j(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function wT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];i.update(y,s,1)}function m(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*v[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function DT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Li&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==li&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Gi&&!j)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(se("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:L,maxSamples:I,samples:B}}function UT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new as,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,P=O*4;let L=x.clippingState||null;m.value=L,L=g(b,v,P,y);for(let I=0;I!==P;++I)L[I]=i[I];x.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const x=y+T*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,L=y;P!==T;++P,L+=4)h.copy(_[P]).applyMatrix4(O,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function LT(r){let t=new WeakMap;function i(h,d){return d===hd?h.mapping=Is:d===dd&&(h.mapping=kr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===hd||d===dd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Kv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,j_=[.125,.215,.35,.446,.526,.582],Os=20,NT=256,Qo=new vp,Z_=new Re;let Kh=null,Qh=0,Jh=0,$h=!1;const OT=new Z;class K_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=OT}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ba,format:Li,colorSpace:Wr,depthBuffer:!1},l=Q_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PT(c)),this._blurMaterial=IT(c,t,i),this._ggxMaterial=zT(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new Jn,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Z_),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new cl,new hp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,x=!0):(M.color.copy(Z_),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const I=this._cubeSize;Pr(l,L*I,P>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(T,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,y=_*v,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-rs?s-b+rs:0),x=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Pr(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Pr(t,M,x,3*T,2*T),l.setRenderTarget(t),l.render(d,Qo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Os-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Os;M>Os&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const x=[];let O=0;for(let z=0;z<Os;++z){const j=z/T,C=Math.exp(-j*j/2);x.push(C),z===0?O+=C:z<M&&(O+=2*C)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-s;const L=this._sizeLods[l],I=3*L*(l>P-rs?l-P+rs:0),B=4*(this._cubeSize-L);Pr(i,I,B,3*L,2*L),m.setRenderTarget(i),m.render(_,Qo)}}function PT(r){const t=[],i=[],s=[];let l=r;const c=r-rs+1+j_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-rs?m=j_[h-r+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,T=3,M=2,x=1,O=new Float32Array(T*b*y),P=new Float32Array(M*b*y),L=new Float32Array(x*b*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,j=B>2?0:-1,C=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];O.set(C,T*b*B),P.set(v,M*b*B);const U=[B,B,B,B,B,B];L.set(U,x*b*B)}const I=new Jn;I.setAttribute("position",new qi(O,T)),I.setAttribute("uv",new qi(P,M)),I.setAttribute("faceIndex",new qi(L,x)),s.push(new Ni(I,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Q_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function zT(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function IT(r,t,i){const s=new Float32Array(Os),l=new Z(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function J_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function $_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}function FT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===hd||m===dd,g=m===Is||m===kr;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new K_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new K_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function BT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("WebGLRenderer: "+s+" extension not supported."),l}}}function HT(r,t,i,s){const l={},c=new WeakMap;function h(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,b=_.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let P=0,L=O.length;P<L;P+=3){const I=O[P+0],B=O[P+1],z=O[P+2];v.push(I,B,B,z,z,I)}}else if(b!==void 0){const O=b.array;T=b.version;for(let P=0,L=O.length/3-1;P<L;P+=3){const I=P+0,B=P+1,z=P+2;v.push(I,B,B,z,z,I)}}else return;const M=new(Vv(v)?qv:Wv)(v,1);M.version=T;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function GT(r,t,i){let s;function l(v){s=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*h),i.update(y,s,1)}function p(v,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,v*h,b),i.update(y,s,b))}function g(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];i.update(M,s,1)}function _(v,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/h,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,T,0,b);let x=0;for(let O=0;O<b;O++)x+=y[O]*T[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function VT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:we("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function kT(r,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let U=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var y=U;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),M===!0&&(L=3);let I=d.attributes.position.count*L,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*B*4*_),j=new kv(z,I,B,_);j.type=Gi,j.needsUpdate=!0;const C=L*4;for(let V=0;V<_;V++){const J=x[V],tt=O[V],ft=P[V],ut=I*B*4*V;for(let F=0;F<J.count;F++){const G=F*C;b===!0&&(l.fromBufferAttribute(J,F),z[ut+G+0]=l.x,z[ut+G+1]=l.y,z[ut+G+2]=l.z,z[ut+G+3]=0),T===!0&&(l.fromBufferAttribute(tt,F),z[ut+G+4]=l.x,z[ut+G+5]=l.y,z[ut+G+6]=l.z,z[ut+G+7]=0),M===!0&&(l.fromBufferAttribute(ft,F),z[ut+G+8]=l.x,z[ut+G+9]=l.y,z[ut+G+10]=l.z,z[ut+G+11]=ft.itemSize===4?l.w:1)}}v={count:_,texture:j,size:new ue(I,B)},s.set(d,v),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function XT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const WT={[Av]:"LINEAR_TONE_MAPPING",[Rv]:"REINHARD_TONE_MAPPING",[Cv]:"CINEON_TONE_MAPPING",[wv]:"ACES_FILMIC_TONE_MAPPING",[Uv]:"AGX_TONE_MAPPING",[Lv]:"NEUTRAL_TONE_MAPPING",[Dv]:"CUSTOM_TONE_MAPPING"};function qT(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Jn;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const m=new OM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new vp(-1,1,1,-1,0,1);let _=null,v=null,y=!1,b,T=null,M=[],x=!1;this.setSize=function(O,P){c.setSize(O,P),h.setSize(O,P);for(let L=0;L<M.length;L++){const I=M[L];I.setSize&&I.setSize(O,P)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const P=c.width,L=c.height;for(let I=0;I<M.length;I++){const B=M[I];B.setSize&&B.setSize(P,L)}},this.begin=function(O,P){if(y||O.toneMapping===Xi&&M.length===0)return!1;if(T=P,P!==null){const L=P.width,I=P.height;(c.width!==L||c.height!==I)&&this.setSize(L,I)}return x===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=Xi,!0},this.hasRenderPass=function(){return x},this.end=function(O,P){O.toneMapping=b,y=!0;let L=c,I=h;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(O,I,L,P),z.needsSwap!==!1)){const j=L;L=I,I=j}}if(_!==O.outputColorSpace||v!==O.toneMapping){_=O.outputColorSpace,v=O.toneMapping,m.defines={},De.getTransfer(_)===Ge&&(m.defines.SRGB_TRANSFER="");const B=WT[v];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,O.setRenderTarget(T),O.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const ex=new Vn,Kd=new sl(1,1),nx=new kv,ix=new cM,ax=new Zv,tv=[],ev=[],nv=new Float32Array(16),iv=new Float32Array(9),av=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=tv[l];if(c===void 0&&(c=new Float32Array(l),tv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fu(r,t){let i=ev[t];i===void 0&&(i=new Int32Array(t),ev[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function YT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function QT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;av.set(s),r.uniformMatrix2fv(this.addr,!1,av),xn(i,s)}}function JT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;iv.set(s),r.uniformMatrix3fv(this.addr,!1,iv),xn(i,s)}}function $T(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;nv.set(s),r.uniformMatrix4fv(this.addr,!1,nv),xn(i,s)}}function t1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function e1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function n1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function a1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function s1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function r1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function o1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function l1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Kd.compareFunction=i.isReversedDepthBuffer()?cp:lp,c=Kd):c=ex,i.setTexture2D(t||c,l)}function c1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ix,l)}function u1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ax,l)}function f1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||nx,l)}function h1(r){switch(r){case 5126:return YT;case 35664:return jT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return a1;case 36294:return s1;case 36295:return r1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}function d1(r,t){r.uniform1fv(this.addr,t)}function p1(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function m1(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function g1(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function _1(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function v1(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function x1(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function S1(r,t){r.uniform1iv(this.addr,t)}function y1(r,t){r.uniform2iv(this.addr,t)}function M1(r,t){r.uniform3iv(this.addr,t)}function E1(r,t){r.uniform4iv(this.addr,t)}function b1(r,t){r.uniform1uiv(this.addr,t)}function T1(r,t){r.uniform2uiv(this.addr,t)}function A1(r,t){r.uniform3uiv(this.addr,t)}function R1(r,t){r.uniform4uiv(this.addr,t)}function C1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Kd:h=ex;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function w1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ix,c[h])}function D1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ax,c[h])}function U1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||nx,c[h])}function L1(r){switch(r){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return y1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return b1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}class N1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=h1(i.type)}}class O1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=L1(i.type)}}class P1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const td=/(\w+)(\])?(\[|\.)?/g;function sv(r,t){r.seq.push(t),r.map[t.id]=t}function z1(r,t,i){const s=r.name,l=s.length;for(td.lastIndex=0;;){const c=td.exec(s),h=td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){sv(i,p===void 0?new N1(d,r,t):new O1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new P1(d),sv(i,_)),i=_}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);z1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function rv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const I1=37297;let F1=0;function B1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const ov=new pe;function H1(r){De._getMatrix(ov,De.workingColorSpace,r);const t=`mat3( ${ov.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case tu:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+B1(r.getShaderSource(t),d)}else return c}function G1(r,t){const i=H1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const V1={[Av]:"Linear",[Rv]:"Reinhard",[Cv]:"Cineon",[wv]:"ACESFilmic",[Uv]:"AgX",[Lv]:"Neutral",[Dv]:"Custom"};function k1(r,t){const i=V1[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new Z;function X1(){De.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function q1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Y1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function el(r){return r!==""}function cv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(r){return r.replace(j1,K1)}const Z1=new Map;function K1(r,t){let i=ge[t];if(i===void 0){const s=Z1.get(t);if(s!==void 0)i=ge[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Qd(i)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(r){return r.replace(Q1,J1)}function J1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const $1={[Yc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function tA(r){return $1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eA={[Is]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function nA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const iA={[kr]:"ENVMAP_MODE_REFRACTION"};function aA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":iA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sA={[Tv]:"ENVMAP_BLENDING_MULTIPLY",[ky]:"ENVMAP_BLENDING_MIX",[Xy]:"ENVMAP_BLENDING_ADD"};function rA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":sA[r.combine]||"ENVMAP_BLENDING_NONE"}function oA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function lA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=tA(i),p=nA(i),g=aA(i),_=rA(i),v=oA(i),y=W1(i),b=q1(c),T=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),x.length>0&&(x+=`
`)):(M=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ge.tonemapping_pars_fragment:"",i.toneMapping!==Xi?k1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,G1("linearToOutputTexel",i.outputColorSpace),X1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),h=Qd(h),h=cv(h,i),h=uv(h,i),d=Qd(d),d=cv(d,i),d=uv(d,i),h=fv(h),d=fv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=O+M+h,L=O+x+d,I=rv(l,l.VERTEX_SHADER,P),B=rv(l,l.FRAGMENT_SHADER,L);l.attachShader(T,I),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(V){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",tt=l.getShaderInfoLog(I)||"",ft=l.getShaderInfoLog(B)||"",ut=J.trim(),F=tt.trim(),G=ft.trim();let rt=!0,St=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,B);else{const vt=lv(l,I,"vertex"),N=lv(l,B,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+vt+`
`+N)}else ut!==""?se("WebGLProgram: Program Info Log:",ut):(F===""||G==="")&&(St=!1);St&&(V.diagnostics={runnable:rt,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(B),j=new $c(l,T),C=Y1(l,T)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,I1)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=B,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new fA(t),i.set(t,s)),s}}class fA{constructor(t){this.id=cA++,this.code=t,this.usedTimes=0}}function hA(r,t,i,s,l,c,h){const d=new fp,m=new uA,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,U,V,J,tt){const ft=J.fog,ut=tt.geometry,F=C.isMeshStandardMaterial?J.environment:null,G=(C.isMeshStandardMaterial?i:t).get(C.envMap||F),rt=G&&G.mapping===ru?G.image.height:null,St=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&se("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const vt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,N=vt!==void 0?vt.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let mt,Rt,Gt,K;if(St){const Ce=Hi[St];mt=Ce.vertexShader,Rt=Ce.fragmentShader}else mt=C.vertexShader,Rt=C.fragmentShader,m.update(C),Gt=m.getVertexShaderID(C),K=m.getFragmentShaderID(C);const ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),qt=tt.isInstancedMesh===!0,Xt=tt.isBatchedMesh===!0,_e=!!C.map,Qe=!!C.matcap,ve=!!G,me=!!C.aoMap,Ee=!!C.lightMap,oe=!!C.bumpMap,je=!!C.normalMap,w=!!C.displacementMap,Ct=!!C.emissiveMap,Wt=!!C.metalnessMap,It=!!C.roughnessMap,Et=C.anisotropy>0,D=C.clearcoat>0,E=C.dispersion>0,X=C.iridescence>0,ct=C.sheen>0,dt=C.transmission>0,$=Et&&!!C.anisotropyMap,Lt=D&&!!C.clearcoatMap,Tt=D&&!!C.clearcoatNormalMap,Vt=D&&!!C.clearcoatRoughnessMap,$t=X&&!!C.iridescenceMap,yt=X&&!!C.iridescenceThicknessMap,bt=ct&&!!C.sheenColorMap,Bt=ct&&!!C.sheenRoughnessMap,Pt=!!C.specularMap,Ut=!!C.specularColorMap,he=!!C.specularIntensityMap,W=dt&&!!C.transmissionMap,Ot=dt&&!!C.thicknessMap,At=!!C.gradientMap,Ht=!!C.alphaMap,Mt=C.alphaTest>0,xt=!!C.alphaHash,wt=!!C.extensions;let re=Xi;C.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(re=r.toneMapping);const Ie={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:mt,fragmentShader:Rt,defines:C.defines,customVertexShaderID:Gt,customFragmentShaderID:K,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&tt._colorsTexture!==null,instancing:qt,instancingColor:qt&&tt.instanceColor!==null,instancingMorph:qt&&tt.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Wr,alphaToCoverage:!!C.alphaToCoverage,map:_e,matcap:Qe,envMap:ve,envMapMode:ve&&G.mapping,envMapCubeUVHeight:rt,aoMap:me,lightMap:Ee,bumpMap:oe,normalMap:je,displacementMap:w,emissiveMap:Ct,normalMapObjectSpace:je&&C.normalMapType===Yy,normalMapTangentSpace:je&&C.normalMapType===Gv,metalnessMap:Wt,roughnessMap:It,anisotropy:Et,anisotropyMap:$,clearcoat:D,clearcoatMap:Lt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Vt,dispersion:E,iridescence:X,iridescenceMap:$t,iridescenceThicknessMap:yt,sheen:ct,sheenColorMap:bt,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:he,transmission:dt,transmissionMap:W,thicknessMap:Ot,gradientMap:At,opaque:C.transparent===!1&&C.blending===Hr&&C.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Mt,alphaHash:xt,combine:C.combine,mapUv:_e&&T(C.map.channel),aoMapUv:me&&T(C.aoMap.channel),lightMapUv:Ee&&T(C.lightMap.channel),bumpMapUv:oe&&T(C.bumpMap.channel),normalMapUv:je&&T(C.normalMap.channel),displacementMapUv:w&&T(C.displacementMap.channel),emissiveMapUv:Ct&&T(C.emissiveMap.channel),metalnessMapUv:Wt&&T(C.metalnessMap.channel),roughnessMapUv:It&&T(C.roughnessMap.channel),anisotropyMapUv:$&&T(C.anisotropyMap.channel),clearcoatMapUv:Lt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(C.sheenRoughnessMap.channel),specularMapUv:Pt&&T(C.specularMap.channel),specularColorMapUv:Ut&&T(C.specularColorMap.channel),specularIntensityMapUv:he&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Ot&&T(C.thicknessMap.channel),alphaMapUv:Ht&&T(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(je||Et),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ut.attributes.uv&&(_e||Ht),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:tt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:_e&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ct&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Sa,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:wt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&C.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)U.push(V),U.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(O(U,C),P(U,C),U.push(r.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function O(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function P(C,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),C.push(d.mask)}function L(C){const U=b[C.type];let V;if(U){const J=Hi[U];V=MM.clone(J.uniforms)}else V=C.uniforms;return V}function I(C,U){let V=_.get(U);return V!==void 0?++V.usedTimes:(V=new lA(r,U,C,c),g.push(V),_.set(U,V)),V}function B(C){if(--C.usedTimes===0){const U=g.indexOf(C);g[U]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function z(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:j}}function dA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function pA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,v,y,b,T,M){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=T,x.group=M),t++,x}function d(_,v,y,b,T,M){const x=h(_,v,y,b,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,v,y,b,T,M){const x=h(_,v,y,b,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||pA),s.length>1&&s.sort(v||dv),l.length>1&&l.sort(v||dv)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function mA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new pv,r.set(s,[h])):l>=c.length?(h=new pv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function gA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Re};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function _A(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let vA=0;function xA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function SA(r){const t=new gA,i=_A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new tn,h=new tn;function d(p){let g=0,_=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,O=0,P=0,L=0,I=0,B=0,z=0;p.sort(xA);for(let C=0,U=p.length;C<U;C++){const V=p[C],J=V.color,tt=V.intensity,ft=V.distance;let ut=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Xr?ut=V.shadow.map.texture:ut=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=J.r*tt,_+=J.g*tt,v+=J.b*tt;else if(V.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(V.sh.coefficients[F],tt);z++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,rt=i.get(V);rt.shadowIntensity=G.intensity,rt.shadowBias=G.bias,rt.shadowNormalBias=G.normalBias,rt.shadowRadius=G.radius,rt.shadowMapSize=G.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=V.shadow.matrix,O++}s.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(J).multiplyScalar(tt),F.distance=ft,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,s.spot[T]=F;const G=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,G.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[T]=G.matrix,V.castShadow){const rt=i.get(V);rt.shadowIntensity=G.intensity,rt.shadowBias=G.bias,rt.shadowNormalBias=G.normalBias,rt.shadowRadius=G.radius,rt.shadowMapSize=G.mapSize,s.spotShadow[T]=rt,s.spotShadowMap[T]=ut,L++}T++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(J).multiplyScalar(tt),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const G=V.shadow,rt=i.get(V);rt.shadowIntensity=G.intensity,rt.shadowBias=G.bias,rt.shadowNormalBias=G.normalBias,rt.shadowRadius=G.radius,rt.shadowMapSize=G.mapSize,rt.shadowCameraNear=G.camera.near,rt.shadowCameraFar=G.camera.far,s.pointShadow[b]=rt,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=V.shadow.matrix,P++}s.point[b]=F,b++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(tt),F.groundColor.copy(V.groundColor).multiplyScalar(tt),s.hemi[x]=F,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==O||j.numPointShadows!==P||j.numSpotShadows!==L||j.numSpotMaps!==I||j.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,j.directionalLength=y,j.pointLength=b,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=O,j.numPointShadows=P,j.numSpotShadows=L,j.numSpotMaps=I,j.numLightProbes=z,s.version=vA++)}function m(p,g){let _=0,v=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const P=p[x];if(P.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),_++}else if(P.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),v++}else if(P.isHemisphereLight){const L=s.hemi[T];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function mv(r){const t=new SA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function yA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new mv(r),t.set(l,[d])):c>=h.length?(d=new mv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
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
}`,bA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],TA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],gv=new tn,Jo=new Z,ed=new Z;function AA(r,t,i){let s=new dp;const l=new ue,c=new ue,h=new an,d=new zM,m=new IM,p={},g=i.maxTextureSize,_={[os]:Qn,[Qn]:os,[Sa]:Sa},v=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:MA,fragmentShader:EA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Jn;b.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let x=this.type;this.render=function(B,z,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===by&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Yc);const C=r.getRenderTarget(),U=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const tt=x!==this.type;tt&&z.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(ut=>ut.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,ut=B.length;ft<ut;ft++){const F=B[ft],G=F.shadow;if(G===void 0){se("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const rt=G.getFrameExtents();if(l.multiply(rt),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/rt.x),l.x=c.x*rt.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/rt.y),l.y=c.y*rt.y,G.mapSize.y=c.y)),G.map===null||tt===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tl){if(F.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wi(l.x,l.y,{format:Xr,type:ba,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new sl(l.x,l.y,Gi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ta,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{F.isPointLight?(G.map=new Kv(l.x),G.map.depthTexture=new NM(l.x,Yi)):(G.map=new Wi(l.x,l.y),G.map.depthTexture=new sl(l.x,l.y,Yi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ta;const vt=r.state.buffers.depth.getReversed();this.type===Yc?(G.map.depthTexture.compareFunction=vt?cp:lp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const St=G.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<St;vt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(G.map),r.clear());const N=G.getViewport(vt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),J.viewport(h)}if(F.isPointLight){const N=G.camera,it=G.matrix,mt=F.distance||N.far;mt!==N.far&&(N.far=mt,N.updateProjectionMatrix()),Jo.setFromMatrixPosition(F.matrixWorld),N.position.copy(Jo),ed.copy(N.position),ed.add(bA[vt]),N.up.copy(TA[vt]),N.lookAt(ed),N.updateMatrixWorld(),it.makeTranslation(-Jo.x,-Jo.y,-Jo.z),gv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G._frustum.setFromProjectionMatrix(gv,N.coordinateSystem,N.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),L(z,j,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===tl&&O(G,j),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(C,U,V)};function O(B,z){const j=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Wi(l.x,l.y,{format:Xr,type:ba})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,j,v,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,j,y,T,null)}function P(B,z,j,C){let U=null;const V=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)U=V;else if(U=j.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=U.uuid,tt=z.uuid;let ft=p[J];ft===void 0&&(ft={},p[J]=ft);let ut=ft[tt];ut===void 0&&(ut=U.clone(),ft[tt]=ut,z.addEventListener("dispose",I)),U=ut}if(U.visible=z.visible,U.wireframe=z.wireframe,C===tl?U.side=z.shadowSide!==null?z.shadowSide:z.side:U.side=z.shadowSide!==null?z.shadowSide:_[z.side],U.alphaMap=z.alphaMap,U.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,U.map=z.map,U.clipShadows=z.clipShadows,U.clippingPlanes=z.clippingPlanes,U.clipIntersection=z.clipIntersection,U.displacementMap=z.displacementMap,U.displacementScale=z.displacementScale,U.displacementBias=z.displacementBias,U.wireframeLinewidth=z.wireframeLinewidth,U.linewidth=z.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const J=r.properties.get(U);J.light=j}return U}function L(B,z,j,C,U){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===tl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ft=B.material;if(Array.isArray(ft)){const ut=tt.groups;for(let F=0,G=ut.length;F<G;F++){const rt=ut[F],St=ft[rt.materialIndex];if(St&&St.visible){const vt=P(B,St,C,U);B.onBeforeShadow(r,B,z,j,tt,vt,rt),r.renderBufferDirect(j,null,tt,vt,B,rt),B.onAfterShadow(r,B,z,j,tt,vt,rt)}}}else if(ft.visible){const ut=P(B,ft,C,U);B.onBeforeShadow(r,B,z,j,tt,ut,null),r.renderBufferDirect(j,null,tt,ut,B,null),B.onAfterShadow(r,B,z,j,tt,ut,null)}}const J=B.children;for(let tt=0,ft=J.length;tt<ft;tt++)L(J[tt],z,j,C,U)}function I(B){B.target.removeEventListener("dispose",I);for(const j in p){const C=p[j],U=B.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const RA={[sd]:rd,[od]:ud,[ld]:fd,[Vr]:cd,[rd]:sd,[ud]:od,[fd]:ld,[cd]:Vr};function CA(r,t){function i(){let W=!1;const Ot=new an;let At=null;const Ht=new an(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,xt,wt,re,Ie){Ie===!0&&(Mt*=re,xt*=re,wt*=re),Ot.set(Mt,xt,wt,re),Ht.equals(Ot)===!1&&(r.clearColor(Mt,xt,wt,re),Ht.copy(Ot))},reset:function(){W=!1,At=null,Ht.set(-1,0,0,0)}}}function s(){let W=!1,Ot=!1,At=null,Ht=null,Mt=null;return{setReversed:function(xt){if(Ot!==xt){const wt=t.get("EXT_clip_control");xt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Ot=xt;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return Ot},setTest:function(xt){xt?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(xt){At!==xt&&!W&&(r.depthMask(xt),At=xt)},setFunc:function(xt){if(Ot&&(xt=RA[xt]),Ht!==xt){switch(xt){case sd:r.depthFunc(r.NEVER);break;case rd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case ld:r.depthFunc(r.EQUAL);break;case cd:r.depthFunc(r.GEQUAL);break;case ud:r.depthFunc(r.GREATER);break;case fd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Mt!==xt&&(Ot&&(xt=1-xt),r.clearDepth(xt),Mt=xt)},reset:function(){W=!1,At=null,Ht=null,Mt=null,Ot=!1}}}function l(){let W=!1,Ot=null,At=null,Ht=null,Mt=null,xt=null,wt=null,re=null,Ie=null;return{setTest:function(Ce){W||(Ce?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ce){Ot!==Ce&&!W&&(r.stencilMask(Ce),Ot=Ce)},setFunc:function(Ce,Pn,Mi){(At!==Ce||Ht!==Pn||Mt!==Mi)&&(r.stencilFunc(Ce,Pn,Mi),At=Ce,Ht=Pn,Mt=Mi)},setOp:function(Ce,Pn,Mi){(xt!==Ce||wt!==Pn||re!==Mi)&&(r.stencilOp(Ce,Pn,Mi),xt=Ce,wt=Pn,re=Mi)},setLocked:function(Ce){W=Ce},setClear:function(Ce){Ie!==Ce&&(r.clearStencil(Ce),Ie=Ce)},reset:function(){W=!1,Ot=null,At=null,Ht=null,Mt=null,xt=null,wt=null,re=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,P=null,L=null,I=null,B=null,z=new Re(0,0,0),j=0,C=!1,U=null,V=null,J=null,tt=null,ft=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const rt=r.getParameter(r.VERSION);rt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(rt)[1]),F=G>=1):rt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),F=G>=2);let St=null,vt={};const N=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),mt=new an().fromArray(N),Rt=new an().fromArray(it);function Gt(W,Ot,At,Ht){const Mt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(W,xt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<At;wt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Ot+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return xt}const K={};K[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),h.setFunc(Vr),oe(!1),je(f_),ht(r.CULL_FACE),me(Ma);function ht(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function qt(W,Ot){return _[W]!==Ot?(r.bindFramebuffer(W,Ot),_[W]=Ot,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Xt(W,Ot){let At=y,Ht=!1;if(W){At=v.get(Ot),At===void 0&&(At=[],v.set(Ot,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,wt=Mt.length;xt<wt;xt++)At[xt]=r.COLOR_ATTACHMENT0+xt;At.length=Mt.length,Ht=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(At)}function _e(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Qe={[Ns]:r.FUNC_ADD,[Ay]:r.FUNC_SUBTRACT,[Ry]:r.FUNC_REVERSE_SUBTRACT};Qe[Cy]=r.MIN,Qe[wy]=r.MAX;const ve={[Dy]:r.ZERO,[Uy]:r.ONE,[Ly]:r.SRC_COLOR,[id]:r.SRC_ALPHA,[Fy]:r.SRC_ALPHA_SATURATE,[zy]:r.DST_COLOR,[Oy]:r.DST_ALPHA,[Ny]:r.ONE_MINUS_SRC_COLOR,[ad]:r.ONE_MINUS_SRC_ALPHA,[Iy]:r.ONE_MINUS_DST_COLOR,[Py]:r.ONE_MINUS_DST_ALPHA,[By]:r.CONSTANT_COLOR,[Hy]:r.ONE_MINUS_CONSTANT_COLOR,[Gy]:r.CONSTANT_ALPHA,[Vy]:r.ONE_MINUS_CONSTANT_ALPHA};function me(W,Ot,At,Ht,Mt,xt,wt,re,Ie,Ce){if(W===Ma){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),W!==Ty){if(W!==M||Ce!==C){if((x!==Ns||L!==Ns)&&(r.blendEquation(r.FUNC_ADD),x=Ns,L=Ns),Ce)switch(W){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h_:r.blendFunc(r.ONE,r.ONE);break;case d_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",W);break}else switch(W){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case d_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",W);break}O=null,P=null,I=null,B=null,z.set(0,0,0),j=0,M=W,C=Ce}return}Mt=Mt||Ot,xt=xt||At,wt=wt||Ht,(Ot!==x||Mt!==L)&&(r.blendEquationSeparate(Qe[Ot],Qe[Mt]),x=Ot,L=Mt),(At!==O||Ht!==P||xt!==I||wt!==B)&&(r.blendFuncSeparate(ve[At],ve[Ht],ve[xt],ve[wt]),O=At,P=Ht,I=xt,B=wt),(re.equals(z)===!1||Ie!==j)&&(r.blendColor(re.r,re.g,re.b,Ie),z.copy(re),j=Ie),M=W,C=!1}function Ee(W,Ot){W.side===Sa?Dt(r.CULL_FACE):ht(r.CULL_FACE);let At=W.side===Qn;Ot&&(At=!At),oe(At),W.blending===Hr&&W.transparent===!1?me(Ma):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ht=W.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){U!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),U=W)}function je(W){W!==My?(ht(r.CULL_FACE),W!==V&&(W===f_?r.cullFace(r.BACK):W===Ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),V=W}function w(W){W!==J&&(F&&r.lineWidth(W),J=W)}function Ct(W,Ot,At){W?(ht(r.POLYGON_OFFSET_FILL),(tt!==Ot||ft!==At)&&(r.polygonOffset(Ot,At),tt=Ot,ft=At)):Dt(r.POLYGON_OFFSET_FILL)}function Wt(W){W?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function It(W){W===void 0&&(W=r.TEXTURE0+ut-1),St!==W&&(r.activeTexture(W),St=W)}function Et(W,Ot,At){At===void 0&&(St===null?At=r.TEXTURE0+ut-1:At=St);let Ht=vt[At];Ht===void 0&&(Ht={type:void 0,texture:void 0},vt[At]=Ht),(Ht.type!==W||Ht.texture!==Ot)&&(St!==At&&(r.activeTexture(At),St=At),r.bindTexture(W,Ot||K[W]),Ht.type=W,Ht.texture=Ot)}function D(){const W=vt[St];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function ct(){try{r.texSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function dt(){try{r.texSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Lt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function Tt(){try{r.texStorage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Vt(){try{r.texStorage3D(...arguments)}catch(W){we("WebGLState:",W)}}function $t(){try{r.texImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function yt(){try{r.texImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function bt(W){mt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),mt.copy(W))}function Bt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Pt(W,Ot){let At=p.get(Ot);At===void 0&&(At=new WeakMap,p.set(Ot,At));let Ht=At.get(W);Ht===void 0&&(Ht=r.getUniformBlockIndex(Ot,W.name),At.set(W,Ht))}function Ut(W,Ot){const Ht=p.get(Ot).get(W);m.get(Ot)!==Ht&&(r.uniformBlockBinding(Ot,Ht,W.__bindingPointIndex),m.set(Ot,Ht))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,vt={},_={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,P=null,L=null,I=null,B=null,z=new Re(0,0,0),j=0,C=!1,U=null,V=null,J=null,tt=null,ft=null,mt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:Dt,bindFramebuffer:qt,drawBuffers:Xt,useProgram:_e,setBlending:me,setMaterial:Ee,setFlipSided:oe,setCullFace:je,setLineWidth:w,setPolygonOffset:Ct,setScissorTest:Wt,activeTexture:It,bindTexture:Et,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:$t,texImage3D:yt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:Tt,texStorage3D:Vt,texSubImage2D:ct,texSubImage3D:dt,compressedTexSubImage2D:$,compressedTexSubImage3D:Lt,scissor:bt,viewport:Bt,reset:he}}function wA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,E){return y?new OffscreenCanvas(D,E):nu("canvas")}function T(D,E,X){let ct=1;const dt=Et(D);if((dt.width>X||dt.height>X)&&(ct=X/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(ct*dt.width),Lt=Math.floor(ct*dt.height);_===void 0&&(_=b($,Lt));const Tt=E?b($,Lt):_;return Tt.width=$,Tt.height=Lt,Tt.getContext("2d").drawImage(D,0,0,$,Lt),se("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+$+"x"+Lt+")."),Tt}else return"data"in D&&se("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,E,X,ct,dt=!1){if(D!==null){if(r[D]!==void 0)return r[D];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=E;if(E===r.RED&&(X===r.FLOAT&&($=r.R32F),X===r.HALF_FLOAT&&($=r.R16F),X===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.R8UI),X===r.UNSIGNED_SHORT&&($=r.R16UI),X===r.UNSIGNED_INT&&($=r.R32UI),X===r.BYTE&&($=r.R8I),X===r.SHORT&&($=r.R16I),X===r.INT&&($=r.R32I)),E===r.RG&&(X===r.FLOAT&&($=r.RG32F),X===r.HALF_FLOAT&&($=r.RG16F),X===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RG8UI),X===r.UNSIGNED_SHORT&&($=r.RG16UI),X===r.UNSIGNED_INT&&($=r.RG32UI),X===r.BYTE&&($=r.RG8I),X===r.SHORT&&($=r.RG16I),X===r.INT&&($=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RGB8UI),X===r.UNSIGNED_SHORT&&($=r.RGB16UI),X===r.UNSIGNED_INT&&($=r.RGB32UI),X===r.BYTE&&($=r.RGB8I),X===r.SHORT&&($=r.RGB16I),X===r.INT&&($=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RGBA8UI),X===r.UNSIGNED_SHORT&&($=r.RGBA16UI),X===r.UNSIGNED_INT&&($=r.RGBA32UI),X===r.BYTE&&($=r.RGBA8I),X===r.SHORT&&($=r.RGBA16I),X===r.INT&&($=r.RGBA32I)),E===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),E===r.RGBA){const Lt=dt?tu:De.getTransfer(ct);X===r.FLOAT&&($=r.RGBA32F),X===r.HALF_FLOAT&&($=r.RGBA16F),X===r.UNSIGNED_BYTE&&($=Lt===Ge?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function L(D,E){let X;return D?E===null||E===Yi||E===il?X=r.DEPTH24_STENCIL8:E===Gi?X=r.DEPTH32F_STENCIL8:E===nl&&(X=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===il?X=r.DEPTH_COMPONENT24:E===Gi?X=r.DEPTH_COMPONENT32F:E===nl&&(X=r.DEPTH_COMPONENT16),X}function I(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function B(D){const E=D.target;E.removeEventListener("dispose",B),j(E),E.isVideoTexture&&g.delete(E)}function z(D){const E=D.target;E.removeEventListener("dispose",z),U(E)}function j(D){const E=s.get(D);if(E.__webglInit===void 0)return;const X=D.source,ct=v.get(X);if(ct){const dt=ct[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&C(D),Object.keys(ct).length===0&&v.delete(X)}s.remove(D)}function C(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const X=D.source,ct=v.get(X);delete ct[E.__cacheKey],h.memory.textures--}function U(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let dt=0;dt<E.__webglFramebuffer[ct].length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[ct][dt]);else r.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)r.deleteFramebuffer(E.__webglFramebuffer[ct]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=D.textures;for(let ct=0,dt=X.length;ct<dt;ct++){const $=s.get(X[ct]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),h.memory.textures--),s.remove(X[ct])}s.remove(D)}let V=0;function J(){V=0}function tt(){const D=V;return D>=l.maxTextures&&se("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function ft(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ut(D,E){const X=s.get(D);if(D.isVideoTexture&&Wt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){const ct=D.image;if(ct===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,D,E);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function F(D,E){const X=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){K(X,D,E);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function G(D,E){const X=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){K(X,D,E);return}i.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function rt(D,E){const X=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){ht(X,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const St={[pd]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},vt={[On]:r.NEAREST,[Wy]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Mh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},N={[jy]:r.NEVER,[$y]:r.ALWAYS,[Zy]:r.LESS,[lp]:r.LEQUAL,[Ky]:r.EQUAL,[cp]:r.GEQUAL,[Qy]:r.GREATER,[Jy]:r.NOTEQUAL};function it(D,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Mh||E.magFilter===yc||E.magFilter===Ps||E.minFilter===Bn||E.minFilter===Mh||E.minFilter===yc||E.minFilter===Ps)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,St[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,St[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,St[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,vt[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==yc&&E.minFilter!==Ps||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(D,E){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",B));const ct=E.source;let dt=v.get(ct);dt===void 0&&(dt={},v.set(ct,dt));const $=ft(E);if($!==D.__cacheKey){dt[$]===void 0&&(dt[$]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,X=!0),dt[$].usedTimes++;const Lt=dt[D.__cacheKey];Lt!==void 0&&(dt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&C(E)),D.__cacheKey=$,D.__webglTexture=dt[$].texture}return X}function Rt(D,E,X){return Math.floor(Math.floor(D/X)/E)}function Gt(D,E,X,ct){const $=D.updateRanges;if($.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,X,ct,E.data);else{$.sort((yt,bt)=>yt.start-bt.start);let Lt=0;for(let yt=1;yt<$.length;yt++){const bt=$[Lt],Bt=$[yt],Pt=bt.start+bt.count,Ut=Rt(Bt.start,E.width,4),he=Rt(bt.start,E.width,4);Bt.start<=Pt+1&&Ut===he&&Rt(Bt.start+Bt.count-1,E.width,4)===Ut?bt.count=Math.max(bt.count,Bt.start+Bt.count-bt.start):(++Lt,$[Lt]=Bt)}$.length=Lt+1;const Tt=r.getParameter(r.UNPACK_ROW_LENGTH),Vt=r.getParameter(r.UNPACK_SKIP_PIXELS),$t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let yt=0,bt=$.length;yt<bt;yt++){const Bt=$[yt],Pt=Math.floor(Bt.start/4),Ut=Math.ceil(Bt.count/4),he=Pt%E.width,W=Math.floor(Pt/E.width),Ot=Ut,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,he,W,Ot,At,X,ct,E.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Tt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$t)}}function K(D,E,X){let ct=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=r.TEXTURE_3D);const dt=mt(D,E),$=E.source;i.bindTexture(ct,D.__webglTexture,r.TEXTURE0+X);const Lt=s.get($);if($.version!==Lt.__version||dt===!0){i.activeTexture(r.TEXTURE0+X);const Tt=De.getPrimaries(De.workingColorSpace),Vt=E.colorSpace===ss?null:De.getPrimaries(E.colorSpace),$t=E.colorSpace===ss||Tt===Vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let yt=T(E.image,!1,l.maxTextureSize);yt=It(E,yt);const bt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type);let Pt=P(E.internalFormat,bt,Bt,E.colorSpace,E.isVideoTexture);it(ct,E);let Ut;const he=E.mipmaps,W=E.isVideoTexture!==!0,Ot=Lt.__version===void 0||dt===!0,At=$.dataReady,Ht=I(E,yt);if(E.isDepthTexture)Pt=L(E.format===zs,E.type),Ot&&(W?i.texStorage2D(r.TEXTURE_2D,1,Pt,yt.width,yt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,yt.width,yt.height,0,bt,Bt,null));else if(E.isDataTexture)if(he.length>0){W&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,Pt,he[0].width,he[0].height);for(let Mt=0,xt=he.length;Mt<xt;Mt++)Ut=he[Mt],W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Bt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,bt,Bt,Ut.data);E.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,Pt,yt.width,yt.height),At&&Gt(E,yt,bt,Bt)):i.texImage2D(r.TEXTURE_2D,0,Pt,yt.width,yt.height,0,bt,Bt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Pt,he[0].width,he[0].height,yt.depth);for(let Mt=0,xt=he.length;Mt<xt;Mt++)if(Ut=he[Mt],E.format!==Li)if(bt!==null)if(W){if(At)if(E.layerUpdates.size>0){const wt=Y_(Ut.width,Ut.height,E.format,E.type);for(const re of E.layerUpdates){const Ie=Ut.data.subarray(re*wt/Ut.data.BYTES_PER_ELEMENT,(re+1)*wt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,re,Ut.width,Ut.height,1,bt,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,yt.depth,bt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,yt.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,yt.depth,bt,Bt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,yt.depth,0,bt,Bt,Ut.data)}else{W&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,Pt,he[0].width,he[0].height);for(let Mt=0,xt=he.length;Mt<xt;Mt++)Ut=he[Mt],E.format!==Li?bt!==null?W?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Bt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,bt,Bt,Ut.data)}else if(E.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Pt,yt.width,yt.height,yt.depth),At)if(E.layerUpdates.size>0){const Mt=Y_(yt.width,yt.height,E.format,E.type);for(const xt of E.layerUpdates){const wt=yt.data.subarray(xt*Mt/yt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,yt.width,yt.height,1,bt,Bt,wt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,bt,Bt,yt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,yt.width,yt.height,yt.depth,0,bt,Bt,yt.data);else if(E.isData3DTexture)W?(Ot&&i.texStorage3D(r.TEXTURE_3D,Ht,Pt,yt.width,yt.height,yt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,bt,Bt,yt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,yt.width,yt.height,yt.depth,0,bt,Bt,yt.data);else if(E.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(r.TEXTURE_2D,Ht,Pt,yt.width,yt.height);else{let Mt=yt.width,xt=yt.height;for(let wt=0;wt<Ht;wt++)i.texImage2D(r.TEXTURE_2D,wt,Pt,Mt,xt,0,bt,Bt,null),Mt>>=1,xt>>=1}}else if(he.length>0){if(W&&Ot){const Mt=Et(he[0]);i.texStorage2D(r.TEXTURE_2D,Ht,Pt,Mt.width,Mt.height)}for(let Mt=0,xt=he.length;Mt<xt;Mt++)Ut=he[Mt],W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,Bt,Ut):i.texImage2D(r.TEXTURE_2D,Mt,Pt,bt,Bt,Ut);E.generateMipmaps=!1}else if(W){if(Ot){const Mt=Et(yt);i.texStorage2D(r.TEXTURE_2D,Ht,Pt,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Bt,yt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,bt,Bt,yt);M(E)&&x(ct),Lt.__version=$.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ht(D,E,X){if(E.image.length!==6)return;const ct=mt(D,E),dt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+X);const $=s.get(dt);if(dt.version!==$.__version||ct===!0){i.activeTexture(r.TEXTURE0+X);const Lt=De.getPrimaries(De.workingColorSpace),Tt=E.colorSpace===ss?null:De.getPrimaries(E.colorSpace),Vt=E.colorSpace===ss||Lt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!$t&&!yt?bt[xt]=T(E.image[xt],!0,l.maxCubemapSize):bt[xt]=yt?E.image[xt].image:E.image[xt],bt[xt]=It(E,bt[xt]);const Bt=bt[0],Pt=c.convert(E.format,E.colorSpace),Ut=c.convert(E.type),he=P(E.internalFormat,Pt,Ut,E.colorSpace),W=E.isVideoTexture!==!0,Ot=$.__version===void 0||ct===!0,At=dt.dataReady;let Ht=I(E,Bt);it(r.TEXTURE_CUBE_MAP,E);let Mt;if($t){W&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,he,Bt.width,Bt.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let wt=0;wt<Mt.length;wt++){const re=Mt[wt];E.format!==Li?Pt!==null?W?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,re.width,re.height,Pt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,he,re.width,re.height,0,re.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,re.width,re.height,Pt,Ut,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,he,re.width,re.height,0,Pt,Ut,re.data)}}}else{if(Mt=E.mipmaps,W&&Ot){Mt.length>0&&Ht++;const xt=Et(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,he,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(yt){W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Pt,Ut,bt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,he,bt[xt].width,bt[xt].height,0,Pt,Ut,bt[xt].data);for(let wt=0;wt<Mt.length;wt++){const Ie=Mt[wt].image[xt].image;W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Ie.width,Ie.height,Pt,Ut,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,he,Ie.width,Ie.height,0,Pt,Ut,Ie.data)}}else{W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt,Ut,bt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,he,Pt,Ut,bt[xt]);for(let wt=0;wt<Mt.length;wt++){const re=Mt[wt];W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Pt,Ut,re.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,he,Pt,Ut,re.image[xt])}}}M(E)&&x(r.TEXTURE_CUBE_MAP),$.__version=dt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Dt(D,E,X,ct,dt,$){const Lt=c.convert(X.format,X.colorSpace),Tt=c.convert(X.type),Vt=P(X.internalFormat,Lt,Tt,X.colorSpace),$t=s.get(E),yt=s.get(X);if(yt.__renderTarget=E,!$t.__hasExternalTextures){const bt=Math.max(1,E.width>>$),Bt=Math.max(1,E.height>>$);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?i.texImage3D(dt,$,Vt,bt,Bt,E.depth,0,Lt,Tt,null):i.texImage2D(dt,$,Vt,bt,Bt,0,Lt,Tt,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),Ct(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,dt,yt.__webglTexture,0,w(E)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,dt,yt.__webglTexture,$),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(D,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const ct=E.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,$=L(E.stencilBuffer,dt),Lt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ct(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,w(E),$,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,w(E),$,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,D)}else{const ct=E.textures;for(let dt=0;dt<ct.length;dt++){const $=ct[dt],Lt=c.convert($.format,$.colorSpace),Tt=c.convert($.type),Vt=P($.internalFormat,Lt,Tt,$.colorSpace);Ct(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,w(E),Vt,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,w(E),Vt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Vt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(D,E,X){const ct=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);if(dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),dt.__webglTexture===void 0){dt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),it(r.TEXTURE_CUBE_MAP,E.depthTexture);const $t=c.convert(E.depthTexture.format),yt=c.convert(E.depthTexture.type);let bt;E.depthTexture.format===Ta?bt=r.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(bt=r.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,bt,E.width,E.height,0,$t,yt,null)}}else ut(E.depthTexture,0);const $=dt.__webglTexture,Lt=w(E),Tt=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,Vt=E.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ta)Ct(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Vt,Tt,$,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,Vt,Tt,$,0);else if(E.depthTexture.format===zs)Ct(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Vt,Tt,$,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,Vt,Tt,$,0);else throw new Error("Unknown depthTexture format")}function _e(D){const E=s.get(D),X=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ct=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ct}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ct=0;ct<6;ct++)Xt(E.__webglFramebuffer[ct],D,ct);else{const ct=D.texture.mipmaps;ct&&ct.length>0?Xt(E.__webglFramebuffer[0],D,0):Xt(E.__webglFramebuffer,D,0)}else if(X){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=r.createRenderbuffer(),qt(E.__webglDepthbuffer[ct],D,!1);else{const dt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,$)}}else{const ct=D.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),qt(E.__webglDepthbuffer,D,!1);else{const dt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,$)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(D,E,X){const ct=s.get(D);E!==void 0&&Dt(ct.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&_e(D)}function ve(D){const E=D.texture,X=s.get(D),ct=s.get(E);D.addEventListener("dispose",z);const dt=D.textures,$=D.isWebGLCubeRenderTarget===!0,Lt=dt.length>1;if(Lt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=E.version,h.memory.textures++),$){X.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Tt]=[];for(let Vt=0;Vt<E.mipmaps.length;Vt++)X.__webglFramebuffer[Tt][Vt]=r.createFramebuffer()}else X.__webglFramebuffer[Tt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)X.__webglFramebuffer[Tt]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Lt)for(let Tt=0,Vt=dt.length;Tt<Vt;Tt++){const $t=s.get(dt[Tt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&Ct(D)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Tt=0;Tt<dt.length;Tt++){const Vt=dt[Tt];X.__webglColorRenderbuffer[Tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Tt]);const $t=c.convert(Vt.format,Vt.colorSpace),yt=c.convert(Vt.type),bt=P(Vt.internalFormat,$t,yt,Vt.colorSpace,D.isXRRenderTarget===!0),Bt=w(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,bt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,X.__webglColorRenderbuffer[Tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(X.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){i.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),it(r.TEXTURE_CUBE_MAP,E);for(let Tt=0;Tt<6;Tt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Vt=0;Vt<E.mipmaps.length;Vt++)Dt(X.__webglFramebuffer[Tt][Vt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Vt);else Dt(X.__webglFramebuffer[Tt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);M(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let Tt=0,Vt=dt.length;Tt<Vt;Tt++){const $t=dt[Tt],yt=s.get($t);let bt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,yt.__webglTexture),it(bt,$t),Dt(X.__webglFramebuffer,D,$t,r.COLOR_ATTACHMENT0+Tt,bt,0),M($t)&&x(bt)}i.unbindTexture()}else{let Tt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Tt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,ct.__webglTexture),it(Tt,E),E.mipmaps&&E.mipmaps.length>0)for(let Vt=0;Vt<E.mipmaps.length;Vt++)Dt(X.__webglFramebuffer[Vt],D,E,r.COLOR_ATTACHMENT0,Tt,Vt);else Dt(X.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,Tt,0);M(E)&&x(Tt),i.unbindTexture()}D.depthBuffer&&_e(D)}function me(D){const E=D.textures;for(let X=0,ct=E.length;X<ct;X++){const dt=E[X];if(M(dt)){const $=O(D),Lt=s.get(dt).__webglTexture;i.bindTexture($,Lt),x($),i.unbindTexture()}}}const Ee=[],oe=[];function je(D){if(D.samples>0){if(Ct(D)===!1){const E=D.textures,X=D.width,ct=D.height;let dt=r.COLOR_BUFFER_BIT;const $=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=s.get(D),Tt=E.length>1;if(Tt)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Vt=D.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),Tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,X,ct,0,0,X,ct,dt,r.NEAREST),m===!0&&(Ee.length=0,oe.length=0,Ee.push(r.COLOR_ATTACHMENT0+$t),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ee.push($),oe.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Tt)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,yt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function w(D){return Math.min(l.maxSamples,D.samples)}function Ct(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(D){const E=h.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function It(D,E){const X=D.colorSpace,ct=D.format,dt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Wr&&X!==ss&&(De.getTransfer(X)===Ge?(ct!==Li||dt!==li)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",X)),E}function Et(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=J,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=rt,this.rebindTextures=Qe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function DA(r,t){function i(s,l=ss){let c;const h=De.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===ip)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ov)return r.BYTE;if(s===Pv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===np)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===Fv)return r.ALPHA;if(s===Bv)return r.RGB;if(s===Li)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===Hv)return r.RED;if(s===sp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===rp)return r.RG_INTEGER;if(s===op)return r.RGBA_INTEGER;if(s===jc||s===Zc||s===Kc||s===Qc)if(h===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===yd)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return c.COMPRESSED_R11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Td)return c.COMPRESSED_RG11_EAC;if(s===Ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ud)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Od)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Gd)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Wd||s===qd||s===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
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

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Jv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:UA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new cu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new NA,x={},O=i.getContextAttributes();let P=null,L=null;const I=[],B=[],z=new ue;let j=null;const C=new yi;C.viewport=new an;const U=new yi;U.viewport=new an;const V=[C,U],J=new GM;let tt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=I[K];return ht===void 0&&(ht=new Xh,I[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=I[K];return ht===void 0&&(ht=new Xh,I[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=I[K];return ht===void 0&&(ht=new Xh,I[K]=ht),ht.getHandSpace()};function ut(K){const ht=B.indexOf(K.inputSource);if(ht===-1)return;const Dt=I[ht];Dt!==void 0&&(Dt.update(K.inputSource,K.frame,p||h),Dt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let K=0;K<I.length;K++){const ht=B[K];ht!==null&&(B[K]=null,I[K].disconnect(ht))}tt=null,ft=null,M.reset();for(const K in x)delete x[K];t.setRenderTarget(P),y=null,v=null,_=null,l=null,L=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,qt=null,Xt=null;O.depth&&(Xt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=O.stencil?zs:Ta,qt=O.stencil?il:Yi);const _e={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(_e),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Wi(v.textureWidth,v.textureHeight,{format:Li,type:li,depthTexture:new sl(v.textureWidth,v.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Dt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Li,type:li,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(K){for(let ht=0;ht<K.removed.length;ht++){const Dt=K.removed[ht],qt=B.indexOf(Dt);qt>=0&&(B[qt]=null,I[qt].disconnect(Dt))}for(let ht=0;ht<K.added.length;ht++){const Dt=K.added[ht];let qt=B.indexOf(Dt);if(qt===-1){for(let _e=0;_e<I.length;_e++)if(_e>=B.length){B.push(Dt),qt=_e;break}else if(B[_e]===null){B[_e]=Dt,qt=_e;break}if(qt===-1)break}const Xt=I[qt];Xt&&Xt.connect(Dt)}}const rt=new Z,St=new Z;function vt(K,ht,Dt){rt.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(Dt.matrixWorld);const qt=rt.distanceTo(St),Xt=ht.projectionMatrix.elements,_e=Dt.projectionMatrix.elements,Qe=Xt[14]/(Xt[10]-1),ve=Xt[14]/(Xt[10]+1),me=(Xt[9]+1)/Xt[5],Ee=(Xt[9]-1)/Xt[5],oe=(Xt[8]-1)/Xt[0],je=(_e[8]+1)/_e[0],w=Qe*oe,Ct=Qe*je,Wt=qt/(-oe+je),It=Wt*-oe;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(It),K.translateZ(Wt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Xt[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Et=Qe+Wt,D=ve+Wt,E=w-It,X=Ct+(qt-It),ct=me*ve/D*Et,dt=Ee*ve/D*Et;K.projectionMatrix.makePerspective(E,X,ct,dt,Et,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function N(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ht=K.near,Dt=K.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),J.near=U.near=C.near=ht,J.far=U.far=C.far=Dt,(tt!==J.near||ft!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),tt=J.near,ft=J.far),J.layers.mask=K.layers.mask|6,C.layers.mask=J.layers.mask&3,U.layers.mask=J.layers.mask&5;const qt=K.parent,Xt=J.cameras;N(J,qt);for(let _e=0;_e<Xt.length;_e++)N(Xt[_e],qt);Xt.length===2?vt(J,C,U):J.projectionMatrix.copy(C.projectionMatrix),it(K,J,qt)};function it(K,ht,Dt){Dt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(Dt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(K){m=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(K){return x[K]};let mt=null;function Rt(K,ht){if(g=ht.getViewerPose(p||h),b=ht,g!==null){const Dt=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let qt=!1;Dt.length!==J.cameras.length&&(J.cameras.length=0,qt=!0);for(let ve=0;ve<Dt.length;ve++){const me=Dt[ve];let Ee=null;if(y!==null)Ee=y.getViewport(me);else{const je=_.getViewSubImage(v,me);Ee=je.viewport,ve===0&&(t.setRenderTargetTextures(L,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(L))}let oe=V[ve];oe===void 0&&(oe=new yi,oe.layers.enable(ve),oe.viewport=new an,V[ve]=oe),oe.matrix.fromArray(me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ve===0&&(J.matrix.copy(oe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),qt===!0&&J.cameras.push(oe)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const ve=_.getDepthInformation(Dt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(Xt&&Xt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let ve=0;ve<Dt.length;ve++){const me=Dt[ve].camera;if(me){let Ee=x[me];Ee||(Ee=new Jv,x[me]=Ee);const oe=_.getCameraImage(me);Ee.sourceTexture=oe}}}}for(let Dt=0;Dt<I.length;Dt++){const qt=B[Dt],Xt=I[Dt];qt!==null&&Xt!==void 0&&Xt.update(qt,ht,p||h)}mt&&mt(K,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Gt=new tx;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(K){mt=K},this.dispose=function(){}}}const Ls=new ji,PA=new tn;function zA(r,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Yv(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,P,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=t.get(x),P=O.envMap,L=O.envMapRotation;P&&(M.envMap.value=P,Ls.copy(L),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),M.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(Ls)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,P){const L=P.program;s.uniformBlockBinding(O,L)}function p(O,P){let L=l[O.id];L===void 0&&(b(O),L=g(O),l[O.id]=L,O.addEventListener("dispose",M));const I=P.program;s.updateUBOMapping(O,I);const B=t.render.frame;c[O.id]!==B&&(v(O),c[O.id]=B)}function g(O){const P=_();O.__bindingPointIndex=P;const L=r.createBuffer(),I=O.__size,B=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,I,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,L),L}function _(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const P=l[O.id],L=O.uniforms,I=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let B=0,z=L.length;B<z;B++){const j=Array.isArray(L[B])?L[B]:[L[B]];for(let C=0,U=j.length;C<U;C++){const V=j[C];if(y(V,B,C,I)===!0){const J=V.__offset,tt=Array.isArray(V.value)?V.value:[V.value];let ft=0;for(let ut=0;ut<tt.length;ut++){const F=tt[ut],G=T(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,J+ft,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,ft),ft+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,P,L,I){const B=O.value,z=P+"_"+L;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const j=I[z];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return I[z]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function b(O){const P=O.uniforms;let L=0;const I=16;for(let z=0,j=P.length;z<j;z++){const C=Array.isArray(P[z])?P[z]:[P[z]];for(let U=0,V=C.length;U<V;U++){const J=C[U],tt=Array.isArray(J.value)?J.value:[J.value];for(let ft=0,ut=tt.length;ft<ut;ft++){const F=tt[ft],G=T(F),rt=L%I,St=rt%G.boundary,vt=rt+St;L+=St,vt!==0&&I-vt<G.storage&&(L+=I-vt),J.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=G.storage}}}const B=L%I;return B>0&&(L+=I-B),O.__size=L,O.__cache={},this}function T(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",O),P}function M(O){const P=O.target;P.removeEventListener("dispose",M);const L=h.indexOf(P.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function x(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const FA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function BA(){return Bi===null&&(Bi=new CM(FA,16,16,Xr,ba),Bi.name="DFG_LUT",Bi.minFilter=Bn,Bi.magFilter=Bn,Bi.wrapS=ya,Bi.wrapT=ya,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class HA{constructor(t={}){const{canvas:i=tM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=li}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=y,M=new Set([op,rp,sp]),x=new Set([li,Yi,nl,il,ip,ap]),O=new Uint32Array(4),P=new Int32Array(4);let L=null,I=null;const B=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=Si;let V=0,J=0,tt=null,ft=-1,ut=null;const F=new an,G=new an;let rt=null;const St=new Re(0);let vt=0,N=i.width,it=i.height,mt=1,Rt=null,Gt=null;const K=new an(0,0,N,it),ht=new an(0,0,N,it);let Dt=!1;const qt=new dp;let Xt=!1,_e=!1;const Qe=new tn,ve=new Z,me=new an,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function je(){return tt===null?mt:1}let w=s;function Ct(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ep}`),i.addEventListener("webglcontextlost",re,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),w===null){const q="webgl2";if(w=Ct(q,R),w===null)throw Ct(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw we("WebGLRenderer: "+R.message),R}let Wt,It,Et,D,E,X,ct,dt,$,Lt,Tt,Vt,$t,yt,bt,Bt,Pt,Ut,he,W,Ot,At,Ht,Mt;function xt(){Wt=new BT(w),Wt.init(),At=new DA(w,Wt),It=new DT(w,Wt,t,At),Et=new CA(w,Wt),It.reversedDepthBuffer&&v&&Et.buffers.depth.setReversed(!0),D=new VT(w),E=new dA,X=new wA(w,Wt,Et,E,It,At,D),ct=new LT(C),dt=new FT(C),$=new qM(w),Ht=new CT(w,$),Lt=new HT(w,$,D,Ht),Tt=new XT(w,Lt,$,D),he=new kT(w,It,X),Bt=new UT(E),Vt=new hA(C,ct,dt,Wt,It,Ht,Bt),$t=new zA(C,E),yt=new mA,bt=new yA(Wt),Ut=new RT(C,ct,dt,Et,Tt,b,m),Pt=new AA(C,Tt,It),Mt=new IA(w,D,It,Et),W=new wT(w,Wt,D),Ot=new GT(w,Wt,D),D.programs=Vt.programs,C.capabilities=It,C.extensions=Wt,C.properties=E,C.renderLists=yt,C.shadowMap=Pt,C.state=Et,C.info=D}xt(),T!==li&&(j=new qT(T,i.width,i.height,l,c));const wt=new OA(C,w);this.xr=wt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const R=Wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(R){R!==void 0&&(mt=R,this.setSize(N,it,!1))},this.getSize=function(R){return R.set(N,it)},this.setSize=function(R,q,ot=!0){if(wt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,it=q,i.width=Math.floor(R*mt),i.height=Math.floor(q*mt),ot===!0&&(i.style.width=R+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(N*mt,it*mt).floor()},this.setDrawingBufferSize=function(R,q,ot){N=R,it=q,mt=ot,i.width=Math.floor(R*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,q,ot,at){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,q,ot,at),Et.viewport(F.copy(K).multiplyScalar(mt).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,q,ot,at){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,q,ot,at),Et.scissor(G.copy(ht).multiplyScalar(mt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){Et.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){Gt=R},this.getClearColor=function(R){return R.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ot=!0){let at=0;if(R){let Q=!1;if(tt!==null){const Nt=tt.texture.format;Q=M.has(Nt)}if(Q){const Nt=tt.texture.type,kt=x.has(Nt),zt=Ut.getClearColor(),Yt=Ut.getClearAlpha(),Zt=zt.r,ne=zt.g,Kt=zt.b;kt?(O[0]=Zt,O[1]=ne,O[2]=Kt,O[3]=Yt,w.clearBufferuiv(w.COLOR,0,O)):(P[0]=Zt,P[1]=ne,P[2]=Kt,P[3]=Yt,w.clearBufferiv(w.COLOR,0,P))}else at|=w.COLOR_BUFFER_BIT}q&&(at|=w.DEPTH_BUFFER_BIT),ot&&(at|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",re,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),Ut.dispose(),yt.dispose(),bt.dispose(),E.dispose(),ct.dispose(),dt.dispose(),Tt.dispose(),Ht.dispose(),Mt.dispose(),Vt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Gs),wt.removeEventListener("sessionend",Jr),Oi.stop()};function re(R){R.preventDefault(),x_("WebGLRenderer: Context Lost."),U=!0}function Ie(){x_("WebGLRenderer: Context Restored."),U=!1;const R=D.autoReset,q=Pt.enabled,ot=Pt.autoUpdate,at=Pt.needsUpdate,Q=Pt.type;xt(),D.autoReset=R,Pt.enabled=q,Pt.autoUpdate=ot,Pt.needsUpdate=at,Pt.type=Q}function Ce(R){we("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pn(R){const q=R.target;q.removeEventListener("dispose",Pn),Mi(q)}function Mi(R){ul(R),E.remove(R)}function ul(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(ot){Vt.releaseProgram(ot)}),R.isShaderMaterial&&Vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ot,at,Q,Nt){q===null&&(q=Ee);const kt=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=cs(R,q,ot,at,Q);Et.setMaterial(at,kt);let Yt=ot.index,Zt=1;if(at.wireframe===!0){if(Yt=Lt.getWireframeAttribute(ot),Yt===void 0)return;Zt=2}const ne=ot.drawRange,Kt=ot.attributes.position;let ie=ne.start*Zt,Ne=(ne.start+ne.count)*Zt;Nt!==null&&(ie=Math.max(ie,Nt.start*Zt),Ne=Math.min(Ne,(Nt.start+Nt.count)*Zt)),Yt!==null?(ie=Math.max(ie,0),Ne=Math.min(Ne,Yt.count)):Kt!=null&&(ie=Math.max(ie,0),Ne=Math.min(Ne,Kt.count));const Je=Ne-ie;if(Je<0||Je===1/0)return;Ht.setup(Q,at,zt,ot,Yt);let Ye,ze=W;if(Yt!==null&&(Ye=$.get(Yt),ze=Ot,ze.setIndex(Ye)),Q.isMesh)at.wireframe===!0?(Et.setLineWidth(at.wireframeLinewidth*je()),ze.setMode(w.LINES)):ze.setMode(w.TRIANGLES);else if(Q.isLine){let te=at.linewidth;te===void 0&&(te=1),Et.setLineWidth(te*je()),Q.isLineSegments?ze.setMode(w.LINES):Q.isLineLoop?ze.setMode(w.LINE_LOOP):ze.setMode(w.LINE_STRIP)}else Q.isPoints?ze.setMode(w.POINTS):Q.isSprite&&ze.setMode(w.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ze.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Oe=Q._multiDrawCounts,le=Q._multiDrawCount,Tn=Yt?$.get(Yt).bytesPerElement:1,Ki=E.get(at).currentProgram.getUniforms();for(let An=0;An<le;An++)Ki.setValue(w,"_gl_DrawID",An),ze.render(te[An]/Tn,Oe[An])}else if(Q.isInstancedMesh)ze.renderInstances(ie,Je,Q.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Oe=Math.min(ot.instanceCount,te);ze.renderInstances(ie,Je,Oe)}else ze.render(ie,Je)};function Kr(R,q,ot){R.transparent===!0&&R.side===Sa&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,ks(R,q,ot),R.side=os,R.needsUpdate=!0,ks(R,q,ot),R.side=Sa):ks(R,q,ot)}this.compile=function(R,q,ot=null){ot===null&&(ot=R),I=bt.get(ot),I.init(q),z.push(I),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),R!==ot&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const at=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Nt=Q.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){const zt=Nt[kt];Kr(zt,ot,Q),at.add(zt)}else Kr(Nt,ot,Q),at.add(Nt)}),I=z.pop(),at},this.compileAsync=function(R,q,ot=null){const at=this.compile(R,q,ot);return new Promise(Q=>{function Nt(){if(at.forEach(function(kt){E.get(kt).currentProgram.isReady()&&at.delete(kt)}),at.size===0){Q(R);return}setTimeout(Nt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Hs=null;function Qr(R){Hs&&Hs(R)}function Gs(){Oi.stop()}function Jr(){Oi.start()}const Oi=new tx;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){Hs=R,wt.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},wt.addEventListener("sessionstart",Gs),wt.addEventListener("sessionend",Jr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ot=wt.enabled===!0&&wt.isPresenting===!0,at=j!==null&&(tt===null||ot)&&j.begin(C,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,tt),I=bt.get(R,z.length),I.init(q),z.push(I),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),qt.setFromProjectionMatrix(Qe,Vi,q.reversedDepth),_e=this.localClippingEnabled,Xt=Bt.init(this.clippingPlanes,_e),L=yt.get(R,B.length),L.init(),B.push(L),wt.enabled===!0&&wt.isPresenting===!0){const kt=C.xr.getDepthSensingMesh();kt!==null&&ci(kt,q,-1/0,C.sortObjects)}ci(R,q,0,C.sortObjects),L.finish(),C.sortObjects===!0&&L.sort(Rt,Gt),oe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,oe&&Ut.addToRenderList(L,R),this.info.render.frame++,Xt===!0&&Bt.beginShadows();const Q=I.state.shadowsArray;if(Pt.render(Q,R,q),Xt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&j.hasRenderPass())===!1){const kt=L.opaque,zt=L.transmissive;if(I.setupLights(),q.isArrayCamera){const Yt=q.cameras;if(zt.length>0)for(let Zt=0,ne=Yt.length;Zt<ne;Zt++){const Kt=Yt[Zt];bn(kt,zt,R,Kt)}oe&&Ut.render(R);for(let Zt=0,ne=Yt.length;Zt<ne;Zt++){const Kt=Yt[Zt];on(L,R,Kt,Kt.viewport)}}else zt.length>0&&bn(kt,zt,R,q),oe&&Ut.render(R),on(L,R,q)}tt!==null&&J===0&&(X.updateMultisampleRenderTarget(tt),X.updateRenderTargetMipmap(tt)),at&&j.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Ht.resetDefaultState(),ft=-1,ut=null,z.pop(),z.length>0?(I=z[z.length-1],Xt===!0&&Bt.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function ci(R,q,ot,at){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||qt.intersectsSprite(R)){at&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qe);const kt=Tt.update(R),zt=R.material;zt.visible&&L.push(R,kt,zt,ot,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||qt.intersectsObject(R))){const kt=Tt.update(R),zt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),me.copy(kt.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Qe)),Array.isArray(zt)){const Yt=kt.groups;for(let Zt=0,ne=Yt.length;Zt<ne;Zt++){const Kt=Yt[Zt],ie=zt[Kt.materialIndex];ie&&ie.visible&&L.push(R,kt,ie,ot,me.z,Kt)}}else zt.visible&&L.push(R,kt,zt,ot,me.z,null)}}const Nt=R.children;for(let kt=0,zt=Nt.length;kt<zt;kt++)ci(Nt[kt],q,ot,at)}function on(R,q,ot,at){const{opaque:Q,transmissive:Nt,transparent:kt}=R;I.setupLightsView(ot),Xt===!0&&Bt.setGlobalState(C.clippingPlanes,ot),at&&Et.viewport(F.copy(at)),Q.length>0&&Ei(Q,q,ot),Nt.length>0&&Ei(Nt,q,ot),kt.length>0&&Ei(kt,q,ot),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function bn(R,q,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[at.id]===void 0){const ie=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[at.id]=new Wi(1,1,{generateMipmaps:!0,type:ie?ba:li,minFilter:Ps,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Nt=I.state.transmissionRenderTarget[at.id],kt=at.viewport||F;Nt.setSize(kt.z*C.transmissionResolutionScale,kt.w*C.transmissionResolutionScale);const zt=C.getRenderTarget(),Yt=C.getActiveCubeFace(),Zt=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(St),vt=C.getClearAlpha(),vt<1&&C.setClearColor(16777215,.5),C.clear(),oe&&Ut.render(ot);const ne=C.toneMapping;C.toneMapping=Xi;const Kt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),I.setupLightsView(at),Xt===!0&&Bt.setGlobalState(C.clippingPlanes,at),Ei(R,ot,at),X.updateMultisampleRenderTarget(Nt),X.updateRenderTargetMipmap(Nt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ne=0,Je=q.length;Ne<Je;Ne++){const Ye=q[Ne],{object:ze,geometry:te,material:Oe,group:le}=Ye;if(Oe.side===Sa&&ze.layers.test(at.layers)){const Tn=Oe.side;Oe.side=Qn,Oe.needsUpdate=!0,Vs(ze,ot,at,te,Oe,le),Oe.side=Tn,Oe.needsUpdate=!0,ie=!0}}ie===!0&&(X.updateMultisampleRenderTarget(Nt),X.updateRenderTargetMipmap(Nt))}C.setRenderTarget(zt,Yt,Zt),C.setClearColor(St,vt),Kt!==void 0&&(at.viewport=Kt),C.toneMapping=ne}function Ei(R,q,ot){const at=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Nt=R.length;Q<Nt;Q++){const kt=R[Q],{object:zt,geometry:Yt,group:Zt}=kt;let ne=kt.material;ne.allowOverride===!0&&at!==null&&(ne=at),zt.layers.test(ot.layers)&&Vs(zt,q,ot,Yt,ne,Zt)}}function Vs(R,q,ot,at,Q,Nt){R.onBeforeRender(C,q,ot,at,Q,Nt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,q,ot,at,R,Nt),Q.transparent===!0&&Q.side===Sa&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,C.renderBufferDirect(ot,q,at,Q,R,Nt),Q.side=os,Q.needsUpdate=!0,C.renderBufferDirect(ot,q,at,Q,R,Nt),Q.side=Sa):C.renderBufferDirect(ot,q,at,Q,R,Nt),R.onAfterRender(C,q,ot,at,Q,Nt)}function ks(R,q,ot){q.isScene!==!0&&(q=Ee);const at=E.get(R),Q=I.state.lights,Nt=I.state.shadowsArray,kt=Q.state.version,zt=Vt.getParameters(R,Q.state,Nt,q,ot),Yt=Vt.getProgramCacheKey(zt);let Zt=at.programs;at.environment=R.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(R.isMeshStandardMaterial?dt:ct).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",Pn),Zt=new Map,at.programs=Zt);let ne=Zt.get(Yt);if(ne!==void 0){if(at.currentProgram===ne&&at.lightsStateVersion===kt)return $r(R,zt),ne}else zt.uniforms=Vt.getUniforms(R),R.onBeforeCompile(zt,C),ne=Vt.acquireProgram(zt,Yt),Zt.set(Yt,ne),at.uniforms=zt.uniforms;const Kt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Bt.uniform),$r(R,zt),at.needsLights=Aa(R),at.lightsStateVersion=kt,at.needsLights&&(Kt.ambientLightColor.value=Q.state.ambient,Kt.lightProbe.value=Q.state.probe,Kt.directionalLights.value=Q.state.directional,Kt.directionalLightShadows.value=Q.state.directionalShadow,Kt.spotLights.value=Q.state.spot,Kt.spotLightShadows.value=Q.state.spotShadow,Kt.rectAreaLights.value=Q.state.rectArea,Kt.ltc_1.value=Q.state.rectAreaLTC1,Kt.ltc_2.value=Q.state.rectAreaLTC2,Kt.pointLights.value=Q.state.point,Kt.pointLightShadows.value=Q.state.pointShadow,Kt.hemisphereLights.value=Q.state.hemi,Kt.directionalShadowMap.value=Q.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Kt.spotShadowMap.value=Q.state.spotShadowMap,Kt.spotLightMatrix.value=Q.state.spotLightMatrix,Kt.spotLightMap.value=Q.state.spotLightMap,Kt.pointShadowMap.value=Q.state.pointShadowMap,Kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),at.currentProgram=ne,at.uniformsList=null,ne}function fl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=$c.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function $r(R,q){const ot=E.get(R);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function cs(R,q,ot,at,Q){q.isScene!==!0&&(q=Ee),X.resetTextureUnits();const Nt=q.fog,kt=at.isMeshStandardMaterial?q.environment:null,zt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Wr,Yt=(at.isMeshStandardMaterial?dt:ct).get(at.envMap||kt),Zt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Kt=!!ot.morphAttributes.position,ie=!!ot.morphAttributes.normal,Ne=!!ot.morphAttributes.color;let Je=Xi;at.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Je=C.toneMapping);const Ye=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ze=Ye!==void 0?Ye.length:0,te=E.get(at),Oe=I.state.lights;if(Xt===!0&&(_e===!0||R!==ut)){const Cn=R===ut&&at.id===ft;Bt.setState(at,R,Cn)}let le=!1;at.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Oe.state.version||te.outputColorSpace!==zt||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Yt||at.fog===!0&&te.fog!==Nt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Bt.numPlanes||te.numIntersection!==Bt.numIntersection)||te.vertexAlphas!==Zt||te.vertexTangents!==ne||te.morphTargets!==Kt||te.morphNormals!==ie||te.morphColors!==Ne||te.toneMapping!==Je||te.morphTargetsCount!==ze)&&(le=!0):(le=!0,te.__version=at.version);let Tn=te.currentProgram;le===!0&&(Tn=ks(at,q,Q));let Ki=!1,An=!1,ui=!1;const Fe=Tn.getUniforms(),Rn=te.uniforms;if(Et.useProgram(Tn.program)&&(Ki=!0,An=!0,ui=!0),at.id!==ft&&(ft=at.id,An=!0),Ki||ut!==R){Et.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(w,"projectionMatrix",R.projectionMatrix),Fe.setValue(w,"viewMatrix",R.matrixWorldInverse);const wn=Fe.map.cameraPosition;wn!==void 0&&wn.setValue(w,ve.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&Fe.setValue(w,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Fe.setValue(w,"isOrthographic",R.isOrthographicCamera===!0),ut!==R&&(ut=R,An=!0,ui=!0)}if(te.needsLights&&(Oe.state.directionalShadowMap.length>0&&Fe.setValue(w,"directionalShadowMap",Oe.state.directionalShadowMap,X),Oe.state.spotShadowMap.length>0&&Fe.setValue(w,"spotShadowMap",Oe.state.spotShadowMap,X),Oe.state.pointShadowMap.length>0&&Fe.setValue(w,"pointShadowMap",Oe.state.pointShadowMap,X)),Q.isSkinnedMesh){Fe.setOptional(w,Q,"bindMatrix"),Fe.setOptional(w,Q,"bindMatrixInverse");const Cn=Q.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Fe.setValue(w,"boneTexture",Cn.boneTexture,X))}Q.isBatchedMesh&&(Fe.setOptional(w,Q,"batchingTexture"),Fe.setValue(w,"batchingTexture",Q._matricesTexture,X),Fe.setOptional(w,Q,"batchingIdTexture"),Fe.setValue(w,"batchingIdTexture",Q._indirectTexture,X),Fe.setOptional(w,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Fe.setValue(w,"batchingColorTexture",Q._colorsTexture,X));const mn=ot.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&he.update(Q,ot,Tn),(An||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Fe.setValue(w,"receiveShadow",Q.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Rn.envMap.value=Yt,Rn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=BA()),An&&(Fe.setValue(w,"toneMappingExposure",C.toneMappingExposure),te.needsLights&&to(Rn,ui),Nt&&at.fog===!0&&$t.refreshFogUniforms(Rn,Nt),$t.refreshMaterialUniforms(Rn,at,mt,it,I.state.transmissionRenderTarget[R.id]),$c.upload(w,fl(te),Rn,X)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&($c.upload(w,fl(te),Rn,X),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Fe.setValue(w,"center",Q.center),Fe.setValue(w,"modelViewMatrix",Q.modelViewMatrix),Fe.setValue(w,"normalMatrix",Q.normalMatrix),Fe.setValue(w,"modelMatrix",Q.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Cn=at.uniformsGroups;for(let wn=0,Xs=Cn.length;wn<Xs;wn++){const bi=Cn[wn];Mt.update(bi,Tn),Mt.bind(bi,Tn)}}return Tn}function to(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,q,ot){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ot=E.get(R);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const Ra=w.createFramebuffer();this.setRenderTarget=function(R,q=0,ot=0){tt=R,V=q,J=ot;let at=null,Q=!1,Nt=!1;if(R){const zt=E.get(R);if(zt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(w.FRAMEBUFFER,zt.__webglFramebuffer),F.copy(R.viewport),G.copy(R.scissor),rt=R.scissorTest,Et.viewport(F),Et.scissor(G),Et.setScissorTest(rt),ft=-1;return}else if(zt.__webglFramebuffer===void 0)X.setupRenderTarget(R);else if(zt.__hasExternalTextures)X.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(zt.__boundDepthTexture!==ne){if(ne!==null&&E.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const Zt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?at=Zt[q][ot]:at=Zt[q],Q=!0):R.samples>0&&X.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?at=Zt[ot]:at=Zt,F.copy(R.viewport),G.copy(R.scissor),rt=R.scissorTest}else F.copy(K).multiplyScalar(mt).floor(),G.copy(ht).multiplyScalar(mt).floor(),rt=Dt;if(ot!==0&&(at=Ra),Et.bindFramebuffer(w.FRAMEBUFFER,at)&&Et.drawBuffers(R,at),Et.viewport(F),Et.scissor(G),Et.setScissorTest(rt),Q){const zt=E.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,ot)}else if(Nt){const zt=q;for(let Yt=0;Yt<R.textures.length;Yt++){const Zt=E.get(R.textures[Yt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Yt,Zt.__webglTexture,ot,zt)}}else if(R!==null&&ot!==0){const zt=E.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,zt.__webglTexture,ot)}ft=-1},this.readRenderTargetPixels=function(R,q,ot,at,Q,Nt,kt,zt=0){if(!(R&&R.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){Et.bindFramebuffer(w.FRAMEBUFFER,Yt);try{const Zt=R.textures[zt],ne=Zt.format,Kt=Zt.type;if(!It.textureFormatReadable(ne)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Kt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-at&&ot>=0&&ot<=R.height-Q&&(R.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+zt),w.readPixels(q,ot,at,Q,At.convert(ne),At.convert(Kt),Nt))}finally{const Zt=tt!==null?E.get(tt).__webglFramebuffer:null;Et.bindFramebuffer(w.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,q,ot,at,Q,Nt,kt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(q>=0&&q<=R.width-at&&ot>=0&&ot<=R.height-Q){Et.bindFramebuffer(w.FRAMEBUFFER,Yt);const Zt=R.textures[zt],ne=Zt.format,Kt=Zt.type;if(!It.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ie),w.bufferData(w.PIXEL_PACK_BUFFER,Nt.byteLength,w.STREAM_READ),R.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+zt),w.readPixels(q,ot,at,Q,At.convert(ne),At.convert(Kt),0);const Ne=tt!==null?E.get(tt).__webglFramebuffer:null;Et.bindFramebuffer(w.FRAMEBUFFER,Ne);const Je=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await eM(w,Je,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ie),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Nt),w.deleteBuffer(ie),w.deleteSync(Je),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ot=0){const at=Math.pow(2,-ot),Q=Math.floor(R.image.width*at),Nt=Math.floor(R.image.height*at),kt=q!==null?q.x:0,zt=q!==null?q.y:0;X.setTexture2D(R,0),w.copyTexSubImage2D(w.TEXTURE_2D,ot,0,0,kt,zt,Q,Nt),Et.unbindTexture()};const us=w.createFramebuffer(),Ca=w.createFramebuffer();this.copyTextureToTexture=function(R,q,ot=null,at=null,Q=0,Nt=null){Nt===null&&(Q!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=Q,Q=0):Nt=0);let kt,zt,Yt,Zt,ne,Kt,ie,Ne,Je;const Ye=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(ot!==null)kt=ot.max.x-ot.min.x,zt=ot.max.y-ot.min.y,Yt=ot.isBox3?ot.max.z-ot.min.z:1,Zt=ot.min.x,ne=ot.min.y,Kt=ot.isBox3?ot.min.z:0;else{const mn=Math.pow(2,-Q);kt=Math.floor(Ye.width*mn),zt=Math.floor(Ye.height*mn),R.isDataArrayTexture?Yt=Ye.depth:R.isData3DTexture?Yt=Math.floor(Ye.depth*mn):Yt=1,Zt=0,ne=0,Kt=0}at!==null?(ie=at.x,Ne=at.y,Je=at.z):(ie=0,Ne=0,Je=0);const ze=At.convert(q.format),te=At.convert(q.type);let Oe;q.isData3DTexture?(X.setTexture3D(q,0),Oe=w.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(X.setTexture2DArray(q,0),Oe=w.TEXTURE_2D_ARRAY):(X.setTexture2D(q,0),Oe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);const le=w.getParameter(w.UNPACK_ROW_LENGTH),Tn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ki=w.getParameter(w.UNPACK_SKIP_PIXELS),An=w.getParameter(w.UNPACK_SKIP_ROWS),ui=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ye.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ye.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Zt),w.pixelStorei(w.UNPACK_SKIP_ROWS,ne),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Kt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const mn=E.get(R),Cn=E.get(q),wn=E.get(mn.__renderTarget),Xs=E.get(Cn.__renderTarget);Et.bindFramebuffer(w.READ_FRAMEBUFFER,wn.__webglFramebuffer),Et.bindFramebuffer(w.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let bi=0;bi<Yt;bi++)Fe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Q,Kt+bi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Nt,Je+bi)),w.blitFramebuffer(Zt,ne,kt,zt,ie,Ne,kt,zt,w.DEPTH_BUFFER_BIT,w.NEAREST);Et.bindFramebuffer(w.READ_FRAMEBUFFER,null),Et.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||E.has(R)){const mn=E.get(R),Cn=E.get(q);Et.bindFramebuffer(w.READ_FRAMEBUFFER,us),Et.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ca);for(let wn=0;wn<Yt;wn++)Fe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,mn.__webglTexture,Q,Kt+wn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mn.__webglTexture,Q),Rn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Cn.__webglTexture,Nt,Je+wn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Cn.__webglTexture,Nt),Q!==0?w.blitFramebuffer(Zt,ne,kt,zt,ie,Ne,kt,zt,w.COLOR_BUFFER_BIT,w.NEAREST):Rn?w.copyTexSubImage3D(Oe,Nt,ie,Ne,Je+wn,Zt,ne,kt,zt):w.copyTexSubImage2D(Oe,Nt,ie,Ne,Zt,ne,kt,zt);Et.bindFramebuffer(w.READ_FRAMEBUFFER,null),Et.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Rn?R.isDataTexture||R.isData3DTexture?w.texSubImage3D(Oe,Nt,ie,Ne,Je,kt,zt,Yt,ze,te,Ye.data):q.isCompressedArrayTexture?w.compressedTexSubImage3D(Oe,Nt,ie,Ne,Je,kt,zt,Yt,ze,Ye.data):w.texSubImage3D(Oe,Nt,ie,Ne,Je,kt,zt,Yt,ze,te,Ye):R.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Nt,ie,Ne,kt,zt,ze,te,Ye.data):R.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Nt,ie,Ne,Ye.width,Ye.height,ze,Ye.data):w.texSubImage2D(w.TEXTURE_2D,Nt,ie,Ne,kt,zt,ze,te,Ye);w.pixelStorei(w.UNPACK_ROW_LENGTH,le),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Tn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ki),w.pixelStorei(w.UNPACK_SKIP_ROWS,An),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ui),Nt===0&&q.generateMipmaps&&w.generateMipmap(Oe),Et.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&X.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?X.setTextureCube(R,0):R.isData3DTexture?X.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?X.setTexture2DArray(R,0):X.setTexture2D(R,0),Et.unbindTexture()},this.resetState=function(){V=0,J=0,tt=null,Et.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}function GA(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function Yr(r){if(!GA(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function _v(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Ir(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function ki(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function ls(r){return Math.sqrt(Mn(r,r))}function VA(r,t){return r.map(i=>i*t)}function dn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function kA(r){const t=ls(r);return VA(r,1/t)}function rl(r){const t=ls(r);return dn(r,1/t)}function Mn(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function Fr(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function vv(r,t,i){return i[0]+=r[1]*t[2]-r[2]*t[1],i[1]+=r[2]*t[0]-r[0]*t[2],i[2]+=r[0]*t[1]-r[1]*t[0],i}function XA(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=Mn(t,r),h=Fr(t,r);return r[0]=r[0]*s+h[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+h[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+h[2]*l+t[2]*c*(1-s),r}const xv={type:"change"},xp={type:"start"},sx={type:"end"},Wc=new lu,Sv=new as,WA=Math.cos(70*iM.DEG2RAD),_n=new Z,Kn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nd=1e-6;class qA extends XM{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Fs,this._lastTargetPosition=new Z,this._quat=new Fs().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new W_,this._sphericalDelta=new W_,this._scale=1,this._panOffset=new Z,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new Z,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jA.bind(this),this._onPointerDown=YA.bind(this),this._onPointerUp=ZA.bind(this),this._onContextMenu=nR.bind(this),this._onMouseWheel=JA.bind(this),this._onKeyDown=$A.bind(this),this._onTouchStart=tR.bind(this),this._onTouchMove=eR.bind(this),this._onMouseDown=KA.bind(this),this._onMouseMove=QA.bind(this),this._interceptControlDown=iR.bind(this),this._interceptControlUp=aR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xv),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<WA?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nd||this._lastTargetPosition.distanceToSquared(this.target)>nd?(this.dispatchEvent(xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ue,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function YA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function jA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function ZA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sx),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function KA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case Br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case Br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(xp)}function QA(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function JA(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(xp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(sx))}function $A(r){this.enabled!==!1&&this._handleKeyDown(r)}function tR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(xp)}function eR(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function nR(r){this.enabled!==!1&&r.preventDefault()}function iR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let sR=0;function Sp(r={}){return{id:r.id??sR++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],m:r.m?[...r.m]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0]}}function su(r,t){return{...r,...t}}function rR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(v=>v.id===t),l=r.find(v=>v.id===i);if(!s||!l)return;const c=rl([...s.m]),h=ki(s.pos,l.pos),d=rl(Ir(h,dn(c,-Mn(h,c))));if(Math.hypot(...d)<.5){alert("两球连线与磁轴平行，无法确定 y 方向");return}const m=Fr(c,d),p=[c,d,m],g=v=>Yr(p.map(y=>Mn(y,v))),_=s.pos;return r.map(v=>su(v,{pos:g(ki(_,v.pos)),vel:g(v.vel??[0,0,0]),m:g(v.m),f:g(v.f??[0,0,0]),tau:g(v.tau??[0,0,0])}))}const yp=4*Math.PI*1e-7,oR=yp/(4*Math.PI),lR=.3;function cR(r){const t=[],i=Math.PI*(3-Math.sqrt(5));for(let s=0;s<r;s++){const l=1-s/(r-1)*2,c=Math.sqrt(1-l*l),h=i*s;t.push([c*Math.cos(h),l,c*Math.sin(h)])}return t}function uR(r){const t=r+1>>2,i=cR(t),s=[];for(const l of i)s.push(l),s.push([-l[0],l[1],-l[2]]),s.push([-l[0],-l[1],-l[2]]),s.push([l[0],-l[1],l[2]]);return s}class fR{constructor(t=.0025,i=1.2,s=5e-4,l=50){t_(this,"_rotateSphereSamplesTo",(t,i)=>{const s=t[1],l=1-s*s;if(l<1e-9){if(s>0)for(let p=0;p<this.n_samples;p++){const g=this.sphere_samples[p],_=i[p];_[0]=g[0],_[1]=g[1],_[2]=g[2]}else for(let p=0;p<this.n_samples;p++){const g=this.sphere_samples[p],_=i[p];_[0]=-g[0],_[1]=-g[1],_[2]=-g[2]}return}const c=Math.sqrt(l),h=t[2]/c,d=-t[0]/c,m=1-s;for(let p=0;p<this.n_samples;p++){const g=this.sphere_samples[p],_=i[p],v=g[0],y=g[1],b=g[2],T=h*v+d*b,M=-d*y,x=d*v-h*b,O=h*y;_[0]=v*s+M*c+h*T*m,_[1]=y*s+x*c,_[2]=b*s+O*c+d*T*m}});this.radius=t,this.br=i,this.mMag=i/yp,this.mass=s,this.sphere_samples=uR(l),this.n_samples=this.sphere_samples.length,this.area_per_sample=4*Math.PI*t*t/this.n_samples;const c=this.mMag*this.area_per_sample;this.sample_q=this.sphere_samples.map(h=>h[1]*c),this.inertia=.4*this.mass*this.radius**2,this._rotBuf1=Array.from({length:this.n_samples},()=>[0,0,0]),this._rotBuf2=Array.from({length:this.n_samples},()=>[0,0,0]),this._r2dBuf=Array.from({length:this.n_samples},()=>[0,0,0])}calculateMagnet(t,i,s){return gR(this.radius,this.mMag,i,s,t)}calcForceAndTorque(t,i,s){const l=this.radius,c=l/this.n_samples;this._rotateSphereSamplesTo(i,this._rotBuf1),this._rotateSphereSamplesTo(s,this._rotBuf2);const h=this._rotBuf1,d=this._rotBuf2;for(let v=0;v<this.n_samples;v++)h[v][0]*=l,h[v][1]*=l,h[v][2]*=l,d[v][0]*=l,d[v][1]*=l,d[v][2]*=l,this._r2dBuf[v][0]=d[v][0]+t[0],this._r2dBuf[v][1]=d[v][1]+t[1],this._r2dBuf[v][2]=d[v][2]+t[2];const m=this._r2dBuf,p=[0,0,0],g=[0,0,0],_=[0,0,0];for(let v=0;v<this.n_samples;v++){const y=h[v],b=this.sample_q[v];for(let T=0;T<this.n_samples;T++){const M=m[T],x=ki(y,M),O=Math.max(ls(x),c),P=this.sample_q[T],L=oR*b*P/O**2,I=dn(x,L/O);Ir(p,I),vv(d[T],I,_),vv(y,dn(I,-1),g)}}return{force1:dn([...p],-1),force2:p,torque1:g,torque2:_}}applyTorque(t,i,s,l){const c=dn([...s],1/this.inertia),d=Mn(s,i)<0?lR:1,m=[i[0]*d+c[0]*l,i[1]*d+c[1]*l,i[2]*d+c[2]*l],p=ls(m);if(p<1e-20)return{moment:t,omega:m};const g=Math.min(p*l,.5),_=dn([...m],1/p),v=XA([...t],_,g);return{moment:rl(v),omega:m}}}function hR(r,t,i,s,l){const c=ls(l),h=kA(l),d=Mn(i,h),m=Mn(s,h),p=Mn(i,s),g=4*Math.PI*yp*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:h,p:d,q:m,r:p,K:g,m1:i,m2:s,d:l}}function dR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function pR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:h,m1:d,m2:m}=r,p=t**4,g=3*h/p,_=5*s*l-c;return dn([i[0]*_-d[0]*l-m[0]*s,i[1]*_-d[1]*l-m[1]*s,i[2]*_-d[2]*l-m[2]*s],g)}function mR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:h,m2:d}=r,m=c/t**3,p=dn(_v(dn(Fr(h,i),-3*l),Fr(h,d)),-m),g=dn(_v(dn(Fr(d,i),-3*s),Fr(d,h)),-m);return{tor1:p,tor2:g}}function gR(r,t,i,s,l){const c=hR(r,t,i,s,l),h=dR(c),d=pR(c),m=dn([...d],-1),{tor1:p,tor2:g}=mR(c);return{U:h,force1:d,force2:m,torque1:p,torque2:g}}function Jd(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function yv(r,t,i,s){if(Math.abs(r)<1e-20)return Jd(t,i,s);const l=t/r,c=i/r,h=s/r,d=l/3,m=c-l*l/3,p=h-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),v=Math.cbrt(-p/2+_),y=Math.cbrt(-p/2-_);return[v+y-d]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),v=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,y=2*Math.cbrt(_);return[y*Math.cos(v)-d,y*Math.cos(v+2*Math.PI/3)-d,y*Math.cos(v+4*Math.PI/3)-d]}else{const _=Math.cbrt(-p/2);return[2*_-d,-_-d]}}function _R(r,t,i,s,l){if(Math.abs(r)<1e-20)return yv(t,i,s,l);const c=t/r,h=i/r,d=s/r,m=l/r,p=c/4,g=h-3*c*c/8,_=d-c*h/2+c*c*c/8,v=m-c*d/4+c*c*h/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const O=[];for(const P of Jd(1,g,v))if(P>=-1e-12){const L=Math.sqrt(Math.max(0,P));O.push(L-p,-L-p)}return O}const y=yv(1,g/2,(g*g-4*v)/16,-_*_/64),b=Math.max(...y,1e-12),T=Math.sqrt(Math.max(b,0));if(T<1e-12)return[];const M=_/(4*T),x=[];for(const[O,P]of[[1,-M],[-1,M]])for(const L of Jd(1,O*T,g/2+b+P))x.push(L-p);return x}const vR=1,xR=5e-4,qc={NONE:"none",SHELL:"shell",HARD:"hard"};function SR(r,t,i){return()=>(r.current=new yR(i),t(!0),()=>{})}class yR{constructor(t=.0025){this.contactStates=new Map,this.radius=t,this.shellThickness=this.radius*.01,this.ball=new fR(this.radius-this.shellThickness,vR,xR,200)}reset(){this.contactStates.clear()}_contactKey(t,i){return t<i?`${t},${i}`:`${i},${t}`}_getContactState(t){const i=this.radius*2;return t<=i-this.shellThickness?qc.HARD:t<=i+this.shellThickness?qc.SHELL:qc.NONE}_reportStateChange(t,i,s){const l=this._contactKey(t,i),c=this._getContactState(s),h=this.contactStates.get(l)||qc.NONE;if(c!==h){const d=this.radius*2-s;(s*1e3).toFixed(4),(d*1e6).toFixed(2),this.contactStates.set(l,c)}}getContacts(t){const i=[],s=t.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const h=t[l],d=t[c],m=ki(h,d),p=ls(m);this._reportStateChange(l,c,p);const g=this.radius*2-p;g>=-this.shellThickness&&i.push({i:l,j:c,normal:dn(m,1/p),dist:p,penetration:g})}return i}calcMagneticForces(t){const i=t.length,s=t.map(()=>[0,0,0]),l=t.map(()=>[0,0,0]);for(let c=0;c<i;c++)for(let h=c+1;h<i;h++){const d=this.ball.calculateMagnet(ki(t[c].pos,t[h].pos),t[c].moment,t[h].moment);Ir(s[c],d.force1),Ir(s[h],d.force2),Ir(l[c],d.torque1),Ir(l[h],d.torque2)}return{forces:s,torques:l}}step(t,i){const s=this.radius*2,l=t.map(T=>T.pos),c=Mv(l,this.getContacts(l),s,this.shellThickness),{forces:h,torques:d}=this.calcMagneticForces(t.map((T,M)=>({pos:c[M],moment:T.m,omega:T.omega}))),{constrainedForces:m,constrainedVel:p}=MR(c,t.map(T=>T.vel),h,this.getContacts(c)),{newPos:g,newVel:_,safedt:v}=this.safeStep(c,m,p,s,i),y=Mv(g,this.getContacts(g),s,this.shellThickness),b=this.rotateMoments(d,t.map(T=>({moment:T.m,omega:T.omega})),v);return{newMagnets:t.map((T,M)=>su(T,{pos:y[M],vel:_[M],f:m[M],tau:d[M],m:b[M].moment,omega:b[M].omega})),safedt:v}}safeStep(t,i,s,l,c){if(c<1e-12)return{newPos:t.map(y=>[...y]),newVel:s.map(y=>[...y]),safedt:0};const h=this.ball.mass,d=t.length,m=i.map(y=>dn(Yr([...y]),1/h)),p=l-this.shellThickness;let g=c;for(let y=0;y<d;y++)for(let b=y+1;b<d;b++){const T=ki(t[y],t[b]),M=ki(s[y],s[b]),x=ER(T,M,m[y],m[b],p,g);x!==null&&x<g&&(g=Math.max(x-1e-12,0))}const _=t.map((y,b)=>{const T=g,M=.5*g*g,x=s[b],O=m[b];return[y[0]+x[0]*T+O[0]*M,y[1]+x[1]*T+O[1]*M,y[2]+x[2]*T+O[2]*M]}),v=s.map((y,b)=>{const T=g,M=m[b];return[y[0]+M[0]*T,y[1]+M[1]*T,y[2]+M[2]*T]});return{newPos:_,newVel:v,safedt:g}}rotateMoments(t,i,s){return i.map((c,h)=>{const d=t[h],m=c.moment,p=c.omega,g=this.ball.applyTorque(m,p,d,s);return{moment:g.moment,omega:g.omega}})}}function Mv(r,t,i,s,l=20){const c=r.map(m=>[...m]),h=i-s,d=1e-7;for(let m=0;m<l;m++){let p=0;for(const{i:g,j:_}of t){const v=ki(c[g],c[_]),y=ls(v),b=dn(v,1/y);let T=0;if(y<h?(T=(i-y)/2,p=Math.max(p,i-y)):y<i&&(T=(i-y)/2*.5,p=Math.max(p,i-y)),T>d){const M=c[g],x=c[_];M[0]-=b[0]*T,M[1]-=b[1]*T,M[2]-=b[2]*T,x[0]+=b[0]*T,x[1]+=b[1]*T,x[2]+=b[2]*T}}if(p<d)break}return c}function MR(r,t,i,s,l=8){const c=i.map(d=>[...d]),h=t.map(d=>[...d]);if(s.length===0)return{constrainedForces:c,constrainedVel:h};for(const d of s){const m=ki(r[d.i],r[d.j]),p=ls(m);d.normal=dn(m,1/p)}for(let d=0;d<l;d++){let m=0;for(const{i:p,j:g,normal:_}of s){const v=Mn(c[p],_),y=Mn(c[g],_),b=(v-y)/2;if(b>0){m=Math.max(m,b);const T=c[p],M=c[g];T[0]-=_[0]*b,T[1]-=_[1]*b,T[2]-=_[2]*b,M[0]+=_[0]*b,M[1]+=_[1]*b,M[2]+=_[2]*b}}if(m<1e-7)break}for(let d=0;d<l;d++){let m=0;for(const{i:p,j:g,normal:_}of s){const v=Mn(h[p],_),y=Mn(h[g],_),b=y-v;if(Math.abs(b)>1e-12){const T=(v+y)/2,M=T-v,x=T-y;m=Math.max(m,Math.abs(M)+Math.abs(x));const O=h[p],P=h[g];O[0]+=_[0]*M,O[1]+=_[1]*M,O[2]+=_[2]*M,P[0]+=_[0]*x,P[1]+=_[1]*x,P[2]+=_[2]*x}}if(m<1e-7)break}return{constrainedForces:c,constrainedVel:h}}function ER(r,t,i,s,l,c){const h=ki(i,s),d=dn(h,.5),m=Mn(r,r)-l*l;if(m<=0)return 0;const p=2*Mn(r,t),g=2*Mn(r,d)+Mn(t,t),_=2*Mn(t,d),v=Mn(d,d),y=_R(v,_,g,p,m);let b=null;for(const T of y)T>1e-12&&T<=c+1e-12&&(b===null||T<b)&&(b=T);return b}function bR(r,t){return r.map(i=>({...i,pos:dn(i.pos,t)})).map(Sp)}function TR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const h={pos:c.pos.join(", "),moment:c.m.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?h:{...h,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function AR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=h=>{if(typeof h=="string"){const d=h.split(",").map(m=>parseFloat(m.trim()));if(d.length===3&&d.every(m=>!isNaN(m)))return d}return h};for(const h of t.magnets){const d={};for(const[m,p]of Object.entries(h))d[m==="moment"?"m":m]=c(p);Yr(d.pos),Yr(rl(d.m)),l.push(d)}return{name:i,unit:s,magnets:l}}async function Ev(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:h}=AR(s),d={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in d))throw new Error(`Unknown unit in preset: ${c}`);const m=d[c];return{name:l||r,magnets:bR(h,m)}}catch{if(r in $d){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=$d[r]();return l.map(c=>dn(c.pos,t)),{name:r,magnets:l.map(Sp)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function RR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys($d).filter(l=>!t.includes(l)),s=[...t,...i];return"pair"in s?["pair",...s.filter(l=>l!=="pair")]:s}const $d={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:rl([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},bv=100,CR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},wR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},DR=["X","Y","Z"];function $o({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:h}){return Jt.jsxs("div",{children:[Jt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),Jt.jsx("div",{style:wR,children:DR.map((d,m)=>{var p;return Jt.jsx("input",{placeholder:d,disabled:!s,style:{...CR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(v=>{const y={...v,[r]:[...v[r]]};return y[r][m]=_,y})},onKeyDown:g=>{s&&g.key==="Enter"&&(h(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>g.target.style.borderColor="#333"},d)})})]})}function UR(){const t=.0025*bv,i=.02,s=ye.useRef(null),[l,c]=ye.useState(null),h=ye.useRef(null);h.current=l;const[d,m]=ye.useState(null),[p,g]=ye.useState(!1),[_,v]=ye.useState(2e-5),[y,b]=ye.useState(!0),[T,M]=ye.useState(!0),x=ye.useRef(0),[O,P]=ye.useState(0),[L,I]=ye.useState(null),B=ye.useRef([]),z=ye.useRef(-1),j=ye.useRef(null),C=ye.useRef(null),U=ye.useRef(null),V=ye.useRef([]),J=ye.useRef([]),tt=ye.useRef([]),ft=ye.useRef([]),ut=ye.useRef(null),F=ye.useRef(null),[G,rt]=ye.useState([]),[St,vt]=ye.useState([]);ye.useEffect(()=>{RR().then(w=>(rt(w),Ev(w[0],.0025))).then(w=>vt(w.magnets)).catch(w=>console.error("Failed to load presets:",w))},[]);const[N,it]=ye.useState(!1),mt=ye.useRef(!0),Rt=ye.useRef({magnets:St,isSimulating:p,simSpeed:_,rotateMoments:y});Rt.current={magnets:St,isSimulating:p,simSpeed:_,rotateMoments:y};const Gt=ye.useRef(null);ye.useEffect(SR(Gt,it,.0025),[]);const K=w=>(w==null?void 0:w.toFixed(6))??"N/A";ye.useEffect(()=>{if(l===null){I(null);return}const w=St.find(Ct=>Ct.id===l);if(!w){I(null);return}I({m_pos:w.pos.map(Ct=>Ct*1e3).map(K),m_vel:w.vel.map(Ct=>Ct*1e3).map(K),m:w.m.map(K),f:w.f.map(K),tau:w.tau.map(K)})},[l]),ye.useEffect(()=>{const w=Wt=>{if(mt.current=!0,vt(Wt),l!==null){const It=Wt.find(Et=>Et.id===l);It&&I({m_pos:It.pos.map(Et=>Et*1e3).map(K),m_vel:It.vel.map(Et=>Et*1e3).map(K),m:It.m.map(K),f:(It.f??[0,0,0]).map(K),tau:(It.tau??[0,0,0]).map(K)})}},Ct=Wt=>{const It=B.current;if(Wt.key==="ArrowUp"){if(Wt.preventDefault(),It.length===0)return;if(z.current===-1){const Et=Rt.current.magnets;It.push(Et.map(D=>({...D,pos:[...D.pos],vel:[...D.vel],m:[...D.m]}))),z.current=It.length-2}else if(z.current>0)z.current--;else return;w(It[z.current])}else if(Wt.key==="ArrowDown"){if(Wt.preventDefault(),z.current===-1)return;if(z.current++,z.current>=It.length-1){const Et=It.pop();z.current=-1,w(Et)}else w(It[z.current])}};return window.addEventListener("keydown",Ct),()=>window.removeEventListener("keydown",Ct)},[l]);const ht=ye.useCallback(()=>{const{magnets:w,isSimulating:Ct,simSpeed:Wt,rotateMoments:It}=Rt.current,Et=Gt.current;if(!Ct||!Et||w.length<2)return;const{newMagnets:D,safedt:E}=Et.step(w,Wt);x.current=E,P($=>$+E);const X=new Map(w.map(($,Lt)=>[$.id,Lt])),ct=D.map($=>su(w[X.get($.id)],{...$,pos:Yr($.pos.map(Lt=>Math.max(-i,Math.min(i,Lt))))}));vt(ct);const dt=h.current;if(dt!==null){const $=ct.find(Lt=>Lt.id===dt);$&&I(Lt=>Lt&&{...Lt,m_pos:$.pos.map(Tt=>Tt*1e3).map(K),m_vel:($.vel??[0,0,0]).map(Tt=>Tt*1e3).map(K),m:$.m.map(K),f:($.f??[0,0,0]).map(K),tau:($.tau??[0,0,0]).map(K)})}},[]);ye.useEffect(()=>{const w=s.current;if(!w||!N)return;let Ct=w.clientWidth||800,Wt=w.clientHeight||600;const It=new RM;It.background=new Re(657941),j.current=It;const Et=new yi(50,Ct/Wt,.1,1e3);Et.position.set(0,0,12),Et.lookAt(0,0,0),C.current=Et;const D=new HA({antialias:!0});D.setSize(Ct,Wt),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.appendChild(D.domElement),U.current=D;const E=new qA(Et,D.domElement);E.enableDamping=!0,E.dampingFactor=.05,E.rotateSpeed=.5,E.zoomSpeed=.8,E.panSpeed=.5,E.minDistance=2,E.maxDistance=50,F.current=E,It.add(new HM(16777215,.5));const X=new V_(16777215,.8);X.position.set(5,5,5),It.add(X);const ct=new V_(4482815,.3);ct.position.set(-5,-5,-5),It.add(ct);const dt=new kM(16,16,3355477,2236979);dt.rotation.x=Math.PI/2,It.add(dt);let $=performance.now();const Lt=Vt=>{ut.current=requestAnimationFrame(Lt),Vt-$>16&&(mt.current=!0,ht(),$=Vt),E.update(),D.render(It,Et)};Lt(performance.now());const Tt=()=>{const Vt=w.clientWidth||800,$t=w.clientHeight||600;Et.aspect=Vt/$t,Et.updateProjectionMatrix(),D.setSize(Vt,$t)};return window.addEventListener("resize",Tt),()=>{window.removeEventListener("resize",Tt),cancelAnimationFrame(ut.current),E.dispose(),D.dispose(),j.current=null,w.contains(D.domElement)&&w.removeChild(D.domElement)}},[ht,N]),ye.useEffect(()=>{const w=j.current;w&&(V.current.forEach(Ct=>w.remove(Ct)),J.current.forEach(Ct=>w.remove(Ct)),tt.current.forEach(Ct=>w.remove(Ct)),ft.current.forEach(Ct=>w.remove(Ct)),V.current=[],J.current=[],tt.current=[],ft.current=[],St.forEach(Ct=>{const Wt=new _p(t,32,32),It=new PM({color:Ct.color,metalness:.8,roughness:.2,emissive:Ct.color,emissiveIntensity:l===Ct.id?.4:.15}),Et=new Ni(Wt,It),D=Ct.pos.map(E=>E*bv);if(Et.position.set(D[0],D[1],D[2]),Et.userData.id=Ct.id,w.add(Et),V.current.push(Et),T){const E=t*3.6,X=t*.5,ct=t*.3,dt=new Z(...Ct.m).normalize(),$=new Z(...D),Lt=new Zh(dt,$,E,16768256,X,ct);if(w.add(Lt),J.current.push(Lt),Ct.f){const Tt=Ct.f,Vt=new Z(...Tt).length();if(Vt>1e-25){const $t=new Z(...Tt).normalize(),yt=t*Math.min(6,Math.max(.5,Math.log10(Vt+1e-10)+10)),bt=new Zh($t,$,yt,65535,t*.4,t*.24);w.add(bt),tt.current.push(bt)}if(Ct.tau){const $t=Ct.tau,yt=new Z(...$t).length();if(yt>1e-25){const bt=new Z(...$t).normalize(),Bt=t*Math.min(5,Math.max(.4,Math.log10(yt+1e-10)+8)),Pt=new Zh(bt,$,Bt,16711935,t*.32,t*.2);w.add(Pt),ft.current.push(Pt)}}}}}))},[St,l,T,N]);const Dt=w=>{const Ct=s.current,Wt=C.current;if(!Ct||!Wt)return;const It=Ct.getBoundingClientRect(),Et=new ue((w.clientX-It.left)/It.width*2-1,-((w.clientY-It.top)/It.height)*2+1),D=new VM;D.setFromCamera(Et,Wt);const E=D.intersectObjects(V.current);E.length>0?c(E[0].object.userData.id):c(null)},qt=()=>{mt.current=!0,vt(w=>[...w,Sp({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),P(0)},Xt=()=>{l!==null&&(mt.current=!0,vt(w=>w.filter(Ct=>Ct.id!==l)),c(null),P(0))},_e=()=>{mt.current=!0,vt(w=>w.map(Ct=>({...Ct,vel:[0,0,0],omega:[0,0,0]})))},Qe=()=>{mt.current=!0,vt(w=>w.map(Ct=>su(Ct,{pos:Yr(Ct.pos.map(Wt=>Wt+(Math.random()-.5)*.3*.0025))})))},ve=()=>{const w=rR(St,l,d);w&&(Ee(St),Ee(w),mt.current=!0,vt(w))},me=ye.useCallback(w=>{const Ct=TR(St.map(Wt=>({...Wt,pos:Wt.pos.map(It=>It/.0025)})),"exported","radius");if(w==="copy")navigator.clipboard.writeText(Ct).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败，请手动复制"));else{const Wt=new Blob([Ct],{type:"application/json"}),It=URL.createObjectURL(Wt),Et=document.createElement("a");Et.href=It,Et.download=`magnets_${Date.now()}.json`,Et.click(),URL.revokeObjectURL(It)}},[St]),Ee=w=>{for(const Ct of B.current){if(Ct.length!==w.length)continue;let Wt=!0;for(let It=0;It<Ct.length;It++){const Et=Ct[It],D=w[It],E=new Set([...Object.keys(Et),...Object.keys(D)]);for(const X of E){const ct=Et[X],dt=D[X];if(Array.isArray(ct)&&Array.isArray(dt)){if(ct.length!==dt.length||ct.some(($,Lt)=>Math.abs($-dt[Lt])>1e-6)){Wt=!1;break}}else if(ct!==dt){Wt=!1;break}}if(!Wt)break}if(Wt)return}B.current.push(w.map(Ct=>({...Ct,pos:[...Ct.pos],vel:[...Ct.vel],m:[...Ct.m]}))),B.current.length>100&&B.current.shift()},oe=(w,Ct,Wt)=>{const It=parseFloat(Wt);if(isNaN(It))return;const D={m_pos:["pos",.001],m_vel:["vel",.001],m:["m",1]}[w]??null;if(!D)return;const[E,X]=D;Ee(St);const ct=St.map(dt=>{if(dt.id!==l)return dt;const $=[...dt[E]||[0,0,0]];return $[Ct]=It*X,{...dt,[E]:$}});Ee(ct),z.current=-1,mt.current=!0,vt(ct),I(dt=>{if(!dt)return dt;const $={...dt,[w]:[...dt[w]]};return $[w][Ct]=K(It),$})},je=()=>{p||(mt.current=!0),g(!p)};return N?Jt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[Jt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[Jt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[Jt.jsx("span",{style:{fontSize:"24px"},children:"🧲"}),"NdFeB 磁力球模拟",Jt.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"Rapier3D"})]}),Jt.jsxs("div",{style:{padding:"12px",background:p?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${p?"#2a4a2a":"#2a2a4a"}`},children:[Jt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),Jt.jsx("button",{onClick:je,style:{width:"100%",padding:"12px",background:p?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px"},children:p?"⏸ 暂停模拟":"▶ 开始模拟"}),Jt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Jt.jsx("button",{onClick:_e,style:xa,children:"重置速度"}),Jt.jsx("button",{onClick:Qe,style:xa,children:"扰动位置"})]}),Jt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:Jt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[Jt.jsxs("select",{value:d??"",onChange:w=>{const Ct=w.target.value===""?null:parseInt(w.target.value);m(Ct)},style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[Jt.jsx("option",{value:"",children:"— y 方向参考球 —"}),St.map(w=>Jt.jsxs("option",{value:w.id,children:["球 #",w.id]},w.id))]}),Jt.jsx("button",{onClick:ve,disabled:l===null||d===null||l===d,style:{...xa,opacity:l!==null&&d!==null&&l!==d?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),Jt.jsxs("div",{style:{marginTop:"10px"},children:[Jt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",_,"×"]}),Jt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",x.current*1e3,"ms"]}),Jt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",O,"s"]}),Jt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(_),onChange:w=>{const Ct=parseFloat(w.target.value),Wt=Math.max(-6,Math.min(0,Ct));v(Math.pow(10,Wt))},style:{width:"100%",accentColor:"#4488ff"}})]}),Jt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[Jt.jsx("input",{type:"checkbox",checked:y,onChange:w=>b(w.target.checked),style:{accentColor:"#4488ff"}}),Jt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"允许磁矩旋转"})]})]}),Jt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Jt.jsx("button",{onClick:qt,style:{...xa,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),Jt.jsx("button",{onClick:()=>me("download"),style:{...xa,flex:1},title:"下载 JSON",children:"⬇ 导出"}),Jt.jsx("button",{onClick:()=>me("copy"),style:{...xa,flex:1},title:"复制到剪贴板",children:"📋 复制"})]}),Jt.jsxs("div",{children:[Jt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),Jt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:G.map(w=>Jt.jsx("button",{onClick:()=>Ev(w,.0025).then(Ct=>vt(Ct.magnets)),style:LR,children:w},w))})]}),l!==null&&Jt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[Jt.jsxs("div",{style:{fontSize:"12px",color:"#aaa",marginBottom:"10px"},children:[Jt.jsxs("button",{disabled:!0,style:{...xa,flex:1,opacity:1},children:["选中磁球 #",l]}),Jt.jsx("button",{onClick:je,disabled:l===null,style:{...xa,flex:1,background:p?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)",opacity:1},children:p?"⏸ 暂停模拟":"▶ 开始模拟"}),Jt.jsx("button",{onClick:Xt,disabled:l===null,style:{...xa,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a",opacity:1},children:"− 移除"})]}),Jt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginTop:"10px",marginBottom:"6px"},children:[p?"数据":"编辑数据",Jt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:p?"":"(回车确认 · Ctrl+Z 撤销)"})]}),L&&(()=>{const w={draft:L,setDraft:I,onCommit:oe};return Jt.jsxs(Jt.Fragment,{children:[Jt.jsx($o,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!p,...w}),Jt.jsx($o,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!p,...w}),Jt.jsx($o,{field:"m",label:"磁矩 (方向)",color:"#ffdd00",editable:!p,...w}),Jt.jsx($o,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...w}),Jt.jsx($o,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...w})]})})()]}),Jt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[Jt.jsx("input",{type:"checkbox",checked:T,onChange:w=>M(w.target.checked),style:{accentColor:"#4488ff"}}),Jt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),Jt.jsx("div",{ref:s,onClick:Dt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer"}})]}):Jt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:Jt.jsxs("div",{children:[Jt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),Jt.jsx("div",{children:"Loading physics engine..."})]})})}const xa={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},LR={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"};yy.createRoot(document.getElementById("root")).render(Jt.jsx(ye.StrictMode,{children:Jt.jsx(UR,{})}));
