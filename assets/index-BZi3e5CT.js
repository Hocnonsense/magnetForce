(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sh={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function Ry(){if(s_)return qo;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=i,qo.jsxs=i,qo}var r_;function Cy(){return r_||(r_=1,Sh.exports=Ry()),Sh.exports}var bt=Cy(),yh={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function wy(){if(o_)return pe;o_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(I,et,xt){this.props=I,this.context=et,this.refs=M,this.updater=xt||E}v.prototype.isReactComponent={},v.prototype.setState=function(I,et){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,et,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=v.prototype;function U(I,et,xt){this.props=I,this.context=et,this.refs=M,this.updater=xt||E}var D=U.prototype=new w;D.constructor=U,T(D,v.prototype),D.isPureReactComponent=!0;var N=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function A(I,et,xt){var wt=xt.ref;return{$$typeof:r,type:I,key:et,ref:wt!==void 0?wt:null,props:xt}}function L(I,et){return A(I.type,et,I.props)}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function j(I){var et={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xt){return et[xt]})}var $=/\/+/g;function ct(I,et){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):et.toString(36)}function ut(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(et){I.status==="pending"&&(I.status="fulfilled",I.value=et)},function(et){I.status==="pending"&&(I.status="rejected",I.reason=et)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,et,xt,wt,Ft){var st=typeof I;(st==="undefined"||st==="boolean")&&(I=null);var dt=!1;if(I===null)dt=!0;else switch(st){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(I.$$typeof){case r:case t:dt=!0;break;case g:return dt=I._init,F(dt(I._payload),et,xt,wt,Ft)}}if(dt)return Ft=Ft(I),dt=wt===""?"."+ct(I,0):wt,N(Ft)?(xt="",dt!=null&&(xt=dt.replace($,"$&/")+"/"),F(Ft,et,xt,"",function(Xt){return Xt})):Ft!=null&&(k(Ft)&&(Ft=L(Ft,xt+(Ft.key==null||I&&I.key===Ft.key?"":(""+Ft.key).replace($,"$&/")+"/")+dt)),et.push(Ft)),1;dt=0;var Dt=wt===""?".":wt+":";if(N(I))for(var Wt=0;Wt<I.length;Wt++)wt=I[Wt],st=Dt+ct(wt,Wt),dt+=F(wt,et,xt,st,Ft);else if(Wt=S(I),typeof Wt=="function")for(I=Wt.call(I),Wt=0;!(wt=I.next()).done;)wt=wt.value,st=Dt+ct(wt,Wt++),dt+=F(wt,et,xt,st,Ft);else if(st==="object"){if(typeof I.then=="function")return F(ut(I),et,xt,wt,Ft);throw et=String(I),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return dt}function H(I,et,xt){if(I==null)return I;var wt=[],Ft=0;return F(I,wt,"","",function(st){return et.call(xt,st,Ft++)}),wt}function rt(I){if(I._status===-1){var et=I._result;et=et(),et.then(function(xt){(I._status===0||I._status===-1)&&(I._status=1,I._result=xt)},function(xt){(I._status===0||I._status===-1)&&(I._status=2,I._result=xt)}),I._status===-1&&(I._status=0,I._result=et)}if(I._status===1)return I._result.default;throw I._result}var Tt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Et={map:H,forEach:function(I,et,xt){H(I,function(){et.apply(this,arguments)},xt)},count:function(I){var et=0;return H(I,function(){et++}),et},toArray:function(I){return H(I,function(et){return et})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return pe.Activity=_,pe.Children=Et,pe.Component=v,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=U,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,pe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},pe.cache=function(I){return function(){return I.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(I,et,xt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var wt=T({},I.props),Ft=I.key;if(et!=null)for(st in et.key!==void 0&&(Ft=""+et.key),et)!V.call(et,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&et.ref===void 0||(wt[st]=et[st]);var st=arguments.length-2;if(st===1)wt.children=xt;else if(1<st){for(var dt=Array(st),Dt=0;Dt<st;Dt++)dt[Dt]=arguments[Dt+2];wt.children=dt}return A(I.type,Ft,wt)},pe.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},pe.createElement=function(I,et,xt){var wt,Ft={},st=null;if(et!=null)for(wt in et.key!==void 0&&(st=""+et.key),et)V.call(et,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ft[wt]=et[wt]);var dt=arguments.length-2;if(dt===1)Ft.children=xt;else if(1<dt){for(var Dt=Array(dt),Wt=0;Wt<dt;Wt++)Dt[Wt]=arguments[Wt+2];Ft.children=Dt}if(I&&I.defaultProps)for(wt in dt=I.defaultProps,dt)Ft[wt]===void 0&&(Ft[wt]=dt[wt]);return A(I,st,Ft)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(I){return{$$typeof:h,render:I}},pe.isValidElement=k,pe.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:rt}},pe.memo=function(I,et){return{$$typeof:p,type:I,compare:et===void 0?null:et}},pe.startTransition=function(I){var et=O.T,xt={};O.T=xt;try{var wt=I(),Ft=O.S;Ft!==null&&Ft(xt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(z,Tt)}catch(st){Tt(st)}finally{et!==null&&xt.types!==null&&(et.types=xt.types),O.T=et}},pe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},pe.use=function(I){return O.H.use(I)},pe.useActionState=function(I,et,xt){return O.H.useActionState(I,et,xt)},pe.useCallback=function(I,et){return O.H.useCallback(I,et)},pe.useContext=function(I){return O.H.useContext(I)},pe.useDebugValue=function(){},pe.useDeferredValue=function(I,et){return O.H.useDeferredValue(I,et)},pe.useEffect=function(I,et){return O.H.useEffect(I,et)},pe.useEffectEvent=function(I){return O.H.useEffectEvent(I)},pe.useId=function(){return O.H.useId()},pe.useImperativeHandle=function(I,et,xt){return O.H.useImperativeHandle(I,et,xt)},pe.useInsertionEffect=function(I,et){return O.H.useInsertionEffect(I,et)},pe.useLayoutEffect=function(I,et){return O.H.useLayoutEffect(I,et)},pe.useMemo=function(I,et){return O.H.useMemo(I,et)},pe.useOptimistic=function(I,et){return O.H.useOptimistic(I,et)},pe.useReducer=function(I,et,xt){return O.H.useReducer(I,et,xt)},pe.useRef=function(I){return O.H.useRef(I)},pe.useState=function(I){return O.H.useState(I)},pe.useSyncExternalStore=function(I,et,xt){return O.H.useSyncExternalStore(I,et,xt)},pe.useTransition=function(){return O.H.useTransition()},pe.version="19.2.3",pe}var l_;function lp(){return l_||(l_=1,yh.exports=wy()),yh.exports}var jt=lp(),Mh={exports:{}},Yo={},Eh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function Dy(){return c_||(c_=1,(function(r){function t(F,H){var rt=F.length;F.push(H);t:for(;0<rt;){var Tt=rt-1>>>1,Et=F[Tt];if(0<l(Et,H))F[Tt]=H,F[rt]=Et,rt=Tt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var H=F[0],rt=F.pop();if(rt!==H){F[0]=rt;t:for(var Tt=0,Et=F.length,I=Et>>>1;Tt<I;){var et=2*(Tt+1)-1,xt=F[et],wt=et+1,Ft=F[wt];if(0>l(xt,rt))wt<Et&&0>l(Ft,xt)?(F[Tt]=Ft,F[wt]=rt,Tt=wt):(F[Tt]=xt,F[et]=rt,Tt=et);else if(wt<Et&&0>l(Ft,rt))F[Tt]=Ft,F[wt]=rt,Tt=wt;else break t}}return H}function l(F,H){var rt=F.sortIndex-H.sortIndex;return rt!==0?rt:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,x=3,S=!1,E=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=F)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function N(F){if(T=!1,D(F),!E)if(i(m)!==null)E=!0,z||(z=!0,j());else{var H=i(p);H!==null&&ut(N,H.startTime-F)}}var z=!1,O=-1,V=5,A=-1;function L(){return M?!0:!(r.unstable_now()-A<V)}function k(){if(M=!1,z){var F=r.unstable_now();A=F;var H=!0;try{t:{E=!1,T&&(T=!1,w(O),O=-1),S=!0;var rt=x;try{e:{for(D(F),_=i(m);_!==null&&!(_.expirationTime>F&&L());){var Tt=_.callback;if(typeof Tt=="function"){_.callback=null,x=_.priorityLevel;var Et=Tt(_.expirationTime<=F);if(F=r.unstable_now(),typeof Et=="function"){_.callback=Et,D(F),H=!0;break e}_===i(m)&&s(m),D(F)}else s(m);_=i(m)}if(_!==null)H=!0;else{var I=i(p);I!==null&&ut(N,I.startTime-F),H=!1}}break t}finally{_=null,x=rt,S=!1}H=void 0}}finally{H?j():z=!1}}}var j;if(typeof U=="function")j=function(){U(k)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=k,j=function(){ct.postMessage(null)}}else j=function(){v(k,0)};function ut(F,H){O=v(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var rt=x;x=H;try{return F()}finally{x=rt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var rt=x;x=F;try{return H()}finally{x=rt}},r.unstable_scheduleCallback=function(F,H,rt){var Tt=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?Tt+rt:Tt):rt=Tt,F){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=rt+Et,F={id:g++,callback:H,priorityLevel:F,startTime:rt,expirationTime:Et,sortIndex:-1},rt>Tt?(F.sortIndex=rt,t(p,F),i(m)===null&&F===i(p)&&(T?(w(O),O=-1):T=!0,ut(N,rt-Tt))):(F.sortIndex=Et,t(m,F),E||S||(E=!0,z||(z=!0,j()))),F},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(F){var H=x;return function(){var rt=x;x=H;try{return F.apply(this,arguments)}finally{x=rt}}}})(bh)),bh}var u_;function Uy(){return u_||(u_=1,Eh.exports=Dy()),Eh.exports}var Th={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function Ly(){if(f_)return qn;f_=1;var r=lp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},qn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},qn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},qn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},qn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},qn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},qn.requestFormReset=function(m){s.d.r(m)},qn.unstable_batchedUpdates=function(m,p){return m(p)},qn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},qn.useFormStatus=function(){return f.H.useHostTransitionStatus()},qn.version="19.2.3",qn}var h_;function Ny(){if(h_)return Th.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=Ly(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Oy(){if(d_)return Yo;d_=1;var r=Uy(),t=lp(),i=Ny();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},Tt=[],Et=-1;function I(e){return{current:e}}function et(e){0>Et||(e.current=Tt[Et],Tt[Et]=null,Et--)}function xt(e,n){Et++,Tt[Et]=e.current,e.current=n}var wt=I(null),Ft=I(null),st=I(null),dt=I(null);function Dt(e,n){switch(xt(st,n),xt(Ft,e),xt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(wt),xt(wt,e)}function Wt(){et(wt),et(Ft),et(st)}function Xt(e){e.memoizedState!==null&&xt(dt,e);var n=wt.current,a=wg(n,e.type);n!==a&&(xt(Ft,e),xt(wt,a))}function ue(e){Ft.current===e&&(et(wt),et(Ft)),dt.current===e&&(et(dt),Vo._currentValue=rt)}var rn,Ee;function ve(e){if(rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rn=n&&n[1]||"",Ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+Ee}var Me=!1;function fe(e,n){if(!e||Me)return"";Me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ht){var lt=ht}Reflect.construct(e,[],St)}else{try{St.call()}catch(ht){lt=ht}e.call(St.prototype)}}else{try{throw Error()}catch(ht){lt=ht}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ht){if(ht&&lt&&typeof ht.stack=="string")return[ht.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var B=y.split(`
`),at=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===at.length)for(o=B.length-1,u=at.length-1;1<=o&&0<=u&&B[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==at[u]){var gt=`
`+B[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return ve("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var en=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Qt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,Kt=r.log,se=r.unstable_setDisableYieldValue,At=null,Rt=null;function Gt(e){if(typeof Kt=="function"&&se(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(At,e)}catch{}}var zt=Math.clz32?Math.clz32:q,Lt=Math.log,me=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Lt(e)/me|0)|0}var Nt=256,Ct=262144,W=4194304;function J(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=J(o):(y&=R,y!==0?u=J(y):a||(a=R&~e,a!==0&&(u=J(a))))):(R=o&~d,R!==0?u=J(R):y!==0?u=J(y):a||(a=o&~e,a!==0&&(u=J(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function mt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Mt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var e=W;return W<<=1,(W&62914560)===0&&(W=4194304),e}function Ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function te(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,n,a,o,u,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,at=e.hiddenUpdates;for(a=y&~a;0<a;){var gt=31-zt(a),St=1<<gt;R[gt]=0,B[gt]=-1;var lt=at[gt];if(lt!==null)for(at[gt]=null,gt=0;gt<lt.length;gt++){var ht=lt[gt];ht!==null&&(ht.lane&=-536870913)}a&=~St}o!==0&&re(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function re(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ge(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Be(e,n){var a=n&-n;return a=(a&42)!==0?1:dn(a),(a&(e.suspendedLanes|n))!==0?0:a}function dn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function je(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _n(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function on(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var $e=Math.random().toString(36).slice(2),Ce="__reactFiber$"+$e,fn="__reactProps$"+$e,Pn="__reactContainer$"+$e,Pa="__reactEvents$"+$e,na="__reactListeners$"+$e,Ks="__reactHandles$"+$e,vs="__reactResources$"+$e,xs="__reactMarker$"+$e;function io(e){delete e[Ce],delete e[fn],delete e[Pa],delete e[na],delete e[Ks]}function za(e){var n=e[Ce];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[Ce]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zg(e);e!==null;){if(a=e[Ce])return a;e=zg(e)}return n}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[Ce]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ss(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Fa(e){var n=e[vs];return n||(n=e[vs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[xs]=!0}var K=new Set,ft={};function ot(e,n){nt(e,n),nt(e+"Capture",n)}function nt(e,n){for(ft[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},It={};function qt(e){return en.call(It,e)?!0:en.call(kt,e)?!1:Pt.test(e)?It[e]=!0:(kt[e]=!0,!1)}function Jt(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function $t(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function oe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function He(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ln(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nn(e){if(!e._valueTracker){var n=He(e)?"checked":"value";e._valueTracker=ln(e,n,""+e[n])}}function ke(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=He(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ge=/[\n"\\]/g;function he(e){return e.replace(Ge,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,d,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+oe(n)):e.value!==""+oe(n)&&(e.value=""+oe(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?In(e,y,oe(n)):a!=null?In(e,y,oe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+oe(R):e.removeAttribute("name")}function ia(e,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){nn(e);return}a=a!=null?""+oe(a):"",n=n!=null?""+oe(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),nn(e)}function In(e,n,a){n==="number"&&ne(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+oe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Xe(e,n,a){if(n!=null&&(n=""+oe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+oe(a):""}function Fn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=oe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),nn(e)}function An(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Hn(e,d,n[d])}function Ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ex=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,$s=null;function Rp(e){var n=Ia(e);if(n&&(e=n.stateNode)){var a=e[fn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[fn]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ke(o)}break t;case"textarea":Xe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Si(e,!!a.multiple,n,!1)}}}var vu=!1;function Cp(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,(Js!==null||$s!==null)&&(tc(),Js&&(n=Js,e=$s,$s=Js=null,Rp(n),e)))for(n=0;n<e.length;n++)Rp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[fn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(sa)try{var so={};Object.defineProperty(so,"passive",{get:function(){xu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{xu=!1}var Ba=null,Su=null,pl=null;function wp(){if(pl)return pl;var e,n=Su,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Dp(){return!1}function ei(e){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Dp,this.isPropagationStopped=Dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=ei(ys),ro=_({},ys,{view:0,detail:0}),Tx=ei(ro),yu,Mu,oo,vl=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(yu=e.screenX-oo.screenX,Mu=e.screenY-oo.screenY):Mu=yu=0,oo=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Up=ei(vl),Ax=_({},vl,{dataTransfer:0}),Rx=ei(Ax),Cx=_({},ro,{relatedTarget:0}),Eu=ei(Cx),wx=_({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=ei(wx),Ux=_({},ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lx=ei(Ux),Nx=_({},ys,{data:0}),Lp=ei(Nx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zx[e])?!!n[e]:!1}function bu(){return Ix}var Fx=_({},ro,{key:function(e){if(e.key){var n=Ox[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Px[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bx=ei(Fx),Hx=_({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=ei(Hx),Gx=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Vx=ei(Gx),kx=_({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xx=ei(kx),Wx=_({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=ei(Wx),Yx=_({},ys,{newState:0,oldState:0}),jx=ei(Yx),Zx=[9,13,27,32],Tu=sa&&"CompositionEvent"in window,lo=null;sa&&"documentMode"in document&&(lo=document.documentMode);var Kx=sa&&"TextEvent"in window&&!lo,Op=sa&&(!Tu||lo&&8<lo&&11>=lo),Pp=" ",zp=!1;function Ip(e,n){switch(e){case"keyup":return Zx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function Qx(e,n){switch(e){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(zp=!0,Pp);case"textInput":return e=n.data,e===Pp&&zp?null:e;default:return null}}function Jx(e,n){if(tr)return e==="compositionend"||!Tu&&Ip(e,n)?(e=wp(),pl=Su=Ba=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$x[e.type]:n==="textarea"}function Hp(e,n,a,o){Js?$s?$s.push(o):$s=[o]:Js=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function tS(e){Mg(e,0)}function xl(e){var n=Ss(e);if(ke(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(sa){var Au;if(sa){var Ru="oninput"in document;if(!Ru){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ru=typeof kp.oninput=="function"}Au=Ru}else Au=!1;Vp=Au&&(!document.documentMode||9<document.documentMode)}function Xp(){co&&(co.detachEvent("onpropertychange",Wp),uo=co=null)}function Wp(e){if(e.propertyName==="value"&&xl(uo)){var n=[];Hp(n,uo,e,_u(e)),Cp(tS,n)}}function eS(e,n,a){e==="focusin"?(Xp(),co=n,uo=a,co.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function nS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(uo)}function iS(e,n){if(e==="click")return xl(n)}function aS(e,n){if(e==="input"||e==="change")return xl(n)}function sS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:sS;function fo(e,n){if(ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!en.call(n,u)||!ui(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ne(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ne(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var rS=sa&&"documentMode"in document&&11>=document.documentMode,er=null,wu=null,ho=null,Du=!1;function Kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||er==null||er!==ne(o)||(o=er,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=oc(wu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=er)))}function Ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var nr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Uu={},Qp={};sa&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Es(e){if(Uu[e])return Uu[e];if(!nr[e])return e;var n=nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Uu[e]=n[a];return e}var Jp=Es("animationend"),$p=Es("animationiteration"),tm=Es("animationstart"),oS=Es("transitionrun"),lS=Es("transitionstart"),cS=Es("transitioncancel"),em=Es("transitionend"),nm=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Oi(e,n){nm.set(e,n),ot(n,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],ir=0,Nu=0;function yl(){for(var e=ir,n=Nu=ir=0;n<e;){var a=yi[n];yi[n++]=null;var o=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var d=yi[n];if(yi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&im(a,u,d)}}function Ml(e,n,a,o){yi[ir++]=e,yi[ir++]=n,yi[ir++]=a,yi[ir++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return Ml(e,n,a,o),El(e)}function bs(e,n){return Ml(e,null,null,n),El(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-zt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(e){if(50<Po)throw Po=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ar={};function uS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,n,a,o){return new uS(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=fi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,d){var y=0;if(o=e,typeof e=="function")Pu(e)&&(y=1);else if(typeof e=="string")y=my(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=fi(31,a,n,u),e.elementType=A,e.lanes=d,e;case T:return Ts(a.children,u,d,n);case M:y=8,u|=24;break;case v:return e=fi(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case N:return e=fi(13,a,n,u),e.elementType=N,e.lanes=d,e;case z:return e=fi(19,a,n,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case w:y=9;break t;case D:y=11;break t;case O:y=14;break t;case V:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=fi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Ts(e,n,a,o){return e=fi(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=fi(6,e,null,n),e.lanes=a,e}function sm(e){var n=fi(18,null,null,0);return n.stateNode=e,n}function Iu(e,n,a){return n=fi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},rm.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var sr=[],rr=0,Tl=null,po=0,Ei=[],bi=0,Ha=null,Vi=1,ki="";function oa(e,n){sr[rr++]=po,sr[rr++]=Tl,Tl=e,po=n}function om(e,n,a){Ei[bi++]=Vi,Ei[bi++]=ki,Ei[bi++]=Ha,Ha=e;var o=Vi;e=ki;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var d=32-zt(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Vi=1<<32-zt(n)+u|a<<u|o,ki=d+e}else Vi=1<<d|a<<u|o,ki=e}function Fu(e){e.return!==null&&(oa(e,1),om(e,1,0))}function Bu(e){for(;e===Tl;)Tl=sr[--rr],sr[rr]=null,po=sr[--rr],sr[rr]=null;for(;e===Ha;)Ha=Ei[--bi],Ei[bi]=null,ki=Ei[--bi],Ei[bi]=null,Vi=Ei[--bi],Ei[bi]=null}function lm(e,n){Ei[bi++]=Vi,Ei[bi++]=ki,Ei[bi++]=Ha,Vi=n.id,ki=n.overflow,Ha=e}var Gn=null,an=null,Le=!1,Ga=null,Ti=!1,Hu=Error(s(519));function Va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(Mi(n,e)),Hu}function cm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ce]=e,n[fn]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Ae(Io[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),ia(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Fn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Va(e,!0)}function um(e){for(Gn=e.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Gn=Gn.return}}function or(e){if(e!==Gn)return!1;if(!Le)return um(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sh(e.type,e.memoizedProps)),a=!a),a&&an&&Va(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));an=Pg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));an=Pg(e)}else n===27?(n=an,ns(e.type)?(e=uh,uh=null,an=e):an=n):an=Gn?Ri(e.stateNode.nextSibling):null;return!0}function As(){an=Gn=null,Le=!1}function Gu(){var e=Ga;return e!==null&&(si===null?si=e:si.push.apply(si,e),Ga=null),e}function mo(e){Ga===null?Ga=[e]:Ga.push(e)}var Vu=I(null),Rs=null,la=null;function ka(e,n,a){xt(Vu,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=Vu.current,et(Vu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),ku(d.return,a,e),o||(y=null);break t}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),ku(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function lr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ui(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===dt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&Xu(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){Rs=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vn(e){return fm(Rs,e)}function Rl(e,n){return Rs===null&&Cs(e),fm(e,n)}function fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(e===null)throw Error(s(308));la=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else la=la.next=n;return a}var fS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},hS=r.unstable_scheduleCallback,dS=r.unstable_NormalPriority,yn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new fS,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&hS(dS,function(){e.controller.abort()})}var _o=null,qu=0,cr=0,ur=null;function pS(e,n){if(_o===null){var a=_o=[];qu=0,cr=Kf(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(hm,hm),n}function hm(){if(--qu===0&&_o!==null){ur!==null&&(ur.status="fulfilled");var e=_o;_o=null,cr=0,ur=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=F.S;F.S=function(e,n){K0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pS(e,n),dm!==null&&dm(e,n)};var ws=I(null);function Yu(){var e=ws.current;return e!==null?e:tn.pooledCache}function Cl(e,n){n===null?xt(ws,ws.current):xt(ws,n.pool)}function pm(){var e=Yu();return e===null?null:{parent:yn._currentValue,pool:e}}var fr=Error(s(460)),ju=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e}throw Us=n,fr}}function Ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,fr):a}}var Us=null;function _m(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function vm(e){if(e===fr||e===wl)throw Error(s(483))}var hr=null,vo=0;function Ul(e){var n=vo;return vo+=1,hr===null&&(hr=[]),gm(hr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xm(e){function n(Q,X){if(e){var it=Q.deletions;it===null?(Q.deletions=[X],Q.flags|=16):it.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ra(Q,X),Q.index=0,Q.sibling=null,Q}function d(Q,X,it){return Q.index=it,e?(it=Q.alternate,it!==null?(it=it.index,it<X?(Q.flags|=67108866,X):it):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,it,vt){return X===null||X.tag!==6?(X=zu(it,Q.mode,vt),X.return=Q,X):(X=u(X,it),X.return=Q,X)}function B(Q,X,it,vt){var ie=it.type;return ie===T?gt(Q,X,it.props.children,vt,it.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===V&&Ds(ie)===X.type)?(X=u(X,it.props),xo(X,it),X.return=Q,X):(X=bl(it.type,it.key,it.props,null,Q.mode,vt),xo(X,it),X.return=Q,X)}function at(Q,X,it,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==it.containerInfo||X.stateNode.implementation!==it.implementation?(X=Iu(it,Q.mode,vt),X.return=Q,X):(X=u(X,it.children||[]),X.return=Q,X)}function gt(Q,X,it,vt,ie){return X===null||X.tag!==7?(X=Ts(it,Q.mode,vt,ie),X.return=Q,X):(X=u(X,it),X.return=Q,X)}function St(Q,X,it){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=zu(""+X,Q.mode,it),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return it=bl(X.type,X.key,X.props,null,Q.mode,it),xo(it,X),it.return=Q,it;case E:return X=Iu(X,Q.mode,it),X.return=Q,X;case V:return X=Ds(X),St(Q,X,it)}if(ut(X)||j(X))return X=Ts(X,Q.mode,it,null),X.return=Q,X;if(typeof X.then=="function")return St(Q,Ul(X),it);if(X.$$typeof===U)return St(Q,Rl(Q,X),it);Ll(Q,X)}return null}function lt(Q,X,it,vt){var ie=X!==null?X.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ie!==null?null:R(Q,X,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case S:return it.key===ie?B(Q,X,it,vt):null;case E:return it.key===ie?at(Q,X,it,vt):null;case V:return it=Ds(it),lt(Q,X,it,vt)}if(ut(it)||j(it))return ie!==null?null:gt(Q,X,it,vt,null);if(typeof it.then=="function")return lt(Q,X,Ul(it),vt);if(it.$$typeof===U)return lt(Q,X,Rl(Q,it),vt);Ll(Q,it)}return null}function ht(Q,X,it,vt,ie){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(it)||null,R(X,Q,""+vt,ie);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return Q=Q.get(vt.key===null?it:vt.key)||null,B(X,Q,vt,ie);case E:return Q=Q.get(vt.key===null?it:vt.key)||null,at(X,Q,vt,ie);case V:return vt=Ds(vt),ht(Q,X,it,vt,ie)}if(ut(vt)||j(vt))return Q=Q.get(it)||null,gt(X,Q,vt,ie,null);if(typeof vt.then=="function")return ht(Q,X,it,Ul(vt),ie);if(vt.$$typeof===U)return ht(Q,X,it,Rl(X,vt),ie);Ll(X,vt)}return null}function Yt(Q,X,it,vt){for(var ie=null,Ie=null,ee=X,xe=X=0,De=null;ee!==null&&xe<it.length;xe++){ee.index>xe?(De=ee,ee=null):De=ee.sibling;var Fe=lt(Q,ee,it[xe],vt);if(Fe===null){ee===null&&(ee=De);break}e&&ee&&Fe.alternate===null&&n(Q,ee),X=d(Fe,X,xe),Ie===null?ie=Fe:Ie.sibling=Fe,Ie=Fe,ee=De}if(xe===it.length)return a(Q,ee),Le&&oa(Q,xe),ie;if(ee===null){for(;xe<it.length;xe++)ee=St(Q,it[xe],vt),ee!==null&&(X=d(ee,X,xe),Ie===null?ie=ee:Ie.sibling=ee,Ie=ee);return Le&&oa(Q,xe),ie}for(ee=o(ee);xe<it.length;xe++)De=ht(ee,Q,xe,it[xe],vt),De!==null&&(e&&De.alternate!==null&&ee.delete(De.key===null?xe:De.key),X=d(De,X,xe),Ie===null?ie=De:Ie.sibling=De,Ie=De);return e&&ee.forEach(function(os){return n(Q,os)}),Le&&oa(Q,xe),ie}function le(Q,X,it,vt){if(it==null)throw Error(s(151));for(var ie=null,Ie=null,ee=X,xe=X=0,De=null,Fe=it.next();ee!==null&&!Fe.done;xe++,Fe=it.next()){ee.index>xe?(De=ee,ee=null):De=ee.sibling;var os=lt(Q,ee,Fe.value,vt);if(os===null){ee===null&&(ee=De);break}e&&ee&&os.alternate===null&&n(Q,ee),X=d(os,X,xe),Ie===null?ie=os:Ie.sibling=os,Ie=os,ee=De}if(Fe.done)return a(Q,ee),Le&&oa(Q,xe),ie;if(ee===null){for(;!Fe.done;xe++,Fe=it.next())Fe=St(Q,Fe.value,vt),Fe!==null&&(X=d(Fe,X,xe),Ie===null?ie=Fe:Ie.sibling=Fe,Ie=Fe);return Le&&oa(Q,xe),ie}for(ee=o(ee);!Fe.done;xe++,Fe=it.next())Fe=ht(ee,Q,xe,Fe.value,vt),Fe!==null&&(e&&Fe.alternate!==null&&ee.delete(Fe.key===null?xe:Fe.key),X=d(Fe,X,xe),Ie===null?ie=Fe:Ie.sibling=Fe,Ie=Fe);return e&&ee.forEach(function(Ay){return n(Q,Ay)}),Le&&oa(Q,xe),ie}function Qe(Q,X,it,vt){if(typeof it=="object"&&it!==null&&it.type===T&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case S:t:{for(var ie=it.key;X!==null;){if(X.key===ie){if(ie=it.type,ie===T){if(X.tag===7){a(Q,X.sibling),vt=u(X,it.props.children),vt.return=Q,Q=vt;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===V&&Ds(ie)===X.type){a(Q,X.sibling),vt=u(X,it.props),xo(vt,it),vt.return=Q,Q=vt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}it.type===T?(vt=Ts(it.props.children,Q.mode,vt,it.key),vt.return=Q,Q=vt):(vt=bl(it.type,it.key,it.props,null,Q.mode,vt),xo(vt,it),vt.return=Q,Q=vt)}return y(Q);case E:t:{for(ie=it.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===it.containerInfo&&X.stateNode.implementation===it.implementation){a(Q,X.sibling),vt=u(X,it.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}vt=Iu(it,Q.mode,vt),vt.return=Q,Q=vt}return y(Q);case V:return it=Ds(it),Qe(Q,X,it,vt)}if(ut(it))return Yt(Q,X,it,vt);if(j(it)){if(ie=j(it),typeof ie!="function")throw Error(s(150));return it=ie.call(it),le(Q,X,it,vt)}if(typeof it.then=="function")return Qe(Q,X,Ul(it),vt);if(it.$$typeof===U)return Qe(Q,X,Rl(Q,it),vt);Ll(Q,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,X!==null&&X.tag===6?(a(Q,X.sibling),vt=u(X,it),vt.return=Q,Q=vt):(a(Q,X),vt=zu(it,Q.mode,vt),vt.return=Q,Q=vt),y(Q)):a(Q,X)}return function(Q,X,it,vt){try{vo=0;var ie=Qe(Q,X,it,vt);return hr=null,ie}catch(ee){if(ee===fr||ee===wl)throw ee;var Ie=fi(29,ee,null,Q.mode);return Ie.lanes=vt,Ie.return=Q,Ie}finally{}}}var Ls=xm(!0),Sm=xm(!1),Xa=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),im(e,null,a),n}return Ml(e,o,n,a),El(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ge(e,a)}}function Qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ju=!1;function yo(){if(Ju){var e=ur;if(e!==null)throw e}}function Mo(e,n,a,o){Ju=!1;var u=e.updateQueue;Xa=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,at=B.next;B.next=null,y===null?d=at:y.next=at,y=B;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==y&&(R===null?gt.firstBaseUpdate=at:R.next=at,gt.lastBaseUpdate=B))}if(d!==null){var St=u.baseState;y=0,gt=at=B=null,R=d;do{var lt=R.lane&-536870913,ht=lt!==R.lane;if(ht?(we&lt)===lt:(o&lt)===lt){lt!==0&&lt===cr&&(Ju=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Yt=e,le=R;lt=n;var Qe=a;switch(le.tag){case 1:if(Yt=le.payload,typeof Yt=="function"){St=Yt.call(Qe,St,lt);break t}St=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=le.payload,lt=typeof Yt=="function"?Yt.call(Qe,St,lt):Yt,lt==null)break t;St=_({},St,lt);break t;case 2:Xa=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[lt]:ht.push(lt))}else ht={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(at=gt=ht,B=St):gt=gt.next=ht,y|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);gt===null&&(B=St),u.baseState=B,u.firstBaseUpdate=at,u.lastBaseUpdate=gt,d===null&&(u.shared.lanes=0),Qa|=y,e.lanes=y,e.memoizedState=St}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var dr=I(null),Nl=I(0);function Em(e,n){e=va,xt(Nl,e),xt(dr,n),va=e|n.baseLanes}function $u(){xt(Nl,va),xt(dr,dr.current)}function tf(){va=Nl.current,et(dr),et(Nl)}var hi=I(null),Ai=null;function Ya(e){var n=e.alternate;xt(vn,vn.current&1),xt(hi,e),Ai===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(Ai=e)}function ef(e){xt(vn,vn.current),xt(hi,e),Ai===null&&(Ai=e)}function bm(e){e.tag===22?(xt(vn,vn.current),xt(hi,e),Ai===null&&(Ai=e)):ja()}function ja(){xt(vn,vn.current),xt(hi,hi.current)}function di(e){et(hi),Ai===e&&(Ai=null),et(vn)}var vn=I(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,_e=null,Ze=null,Mn=null,Pl=!1,pr=!1,Ns=!1,zl=0,Eo=0,mr=null,gS=0;function pn(){throw Error(s(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ui(e[a],n[a]))return!1;return!0}function af(e,n,a,o,u,d){return ua=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?o0:xf,Ns=!1,d=a(o,u),Ns=!1,pr&&(d=Am(n,a,o,u)),Tm(e),d}function Tm(e){F.H=Ao;var n=Ze!==null&&Ze.next!==null;if(ua=0,Mn=Ze=_e=null,Pl=!1,Eo=0,mr=null,n)throw Error(s(300));e===null||En||(e=e.dependencies,e!==null&&Al(e)&&(En=!0))}function Am(e,n,a,o){_e=e;var u=0;do{if(pr&&(mr=null),Eo=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,Mn=Ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=l0,d=n(a,o)}while(pr);return d}function _S(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?bo(n):n,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(_e.flags|=1024),n}function sf(){var e=zl!==0;return zl=0,e}function rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}ua=0,Mn=Ze=_e=null,pr=!1,Eo=zl=0,mr=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?_e.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function xn(){if(Ze===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=Mn===null?_e.memoizedState:Mn.next;if(n!==null)Mn=n,Ze=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Mn===null?_e.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var n=Eo;return Eo+=1,mr===null&&(mr=[]),e=gm(mr,e,n),n=_e,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?o0:xf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===U)return Vn(e)}throw Error(s(438,String(e)))}function lf(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=L;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=xn();return cf(n,Ze,e)}function cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=y=null,B=null,at=n,gt=!1;do{var St=at.lane&-536870913;if(St!==at.lane?(we&St)===St:(ua&St)===St){var lt=at.revertLane;if(lt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),St===cr&&(gt=!0);else if((ua&lt)===lt){at=at.next,lt===cr&&(gt=!0);continue}else St={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},B===null?(R=B=St,y=d):B=B.next=St,_e.lanes|=lt,Qa|=lt;St=at.action,Ns&&a(d,St),d=at.hasEagerState?at.eagerState:a(d,St)}else lt={lane:St,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},B===null?(R=B=lt,y=d):B=B.next=lt,_e.lanes|=St,Qa|=St;at=at.next}while(at!==null&&at!==n);if(B===null?y=d:B.next=R,!ui(d,e.memoizedState)&&(En=!0,gt&&(a=ur,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var n=xn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);ui(d,n.memoizedState)||(En=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(e,n,a){var o=_e,u=xn(),d=Le;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ui((Ze||u).memoizedState,a);if(y&&(u.memoizedState=a,En=!0),u=u.queue,df(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),tn===null)throw Error(s(349));d||(ua&127)!==0||Cm(o,n,a)}return a}function Cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Il(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Lm(e)}function Dm(e,n,a){return a(function(){Um(n)&&Lm(e)})}function Um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ui(e,a)}catch{return!0}}function Lm(e){var n=bs(e,2);n!==null&&ri(n,e,2)}function ff(e){var n=Qn();if(typeof e=="function"){var a=e;if(e=a(),Ns){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function Nm(e,n,a,o){return e.baseState=a,cf(e,Ze,typeof o=="function"?o:fa)}function vS(e,n,a,o,u){if(Vl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=F.T,y={};F.T=y;try{var R=a(u,o),B=F.S;B!==null&&B(y,R),Pm(e,n,R)}catch(at){hf(e,n,at)}finally{d!==null&&y.types!==null&&(d.types=y.types),F.T=d}}else try{d=a(u,o),Pm(e,n,d)}catch(at){hf(e,n,at)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,n,o)},function(o){return hf(e,n,o)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Om(e,a)))}function hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fm(e,n){return n}function Bm(e,n){if(Le){var a=tn.formState;if(a!==null){t:{var o=_e;if(Le){if(an){e:{for(var u=an,d=Ti;u.nodeType!==8;){if(!d){u=null;break e}if(u=Ri(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){an=Ri(u.nextSibling),o=u.data==="F!";break t}}Va(o)}o=!1}o&&(n=a[0])}}return a=Qn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=a0.bind(null,_e,o),o.dispatch=a,o=ff(!1),d=vf.bind(null,_e,!1,o.queue),o=Qn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=vS.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hm(e){var n=xn();return Gm(n,Ze,e)}function Gm(e,n,a){if(n=cf(e,n,Fm)[0],e=Bl(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(y){throw y===fr?wl:y}else o=n;n=xn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,gr(9,{destroy:void 0},xS.bind(null,u,a),null)),[o,d,e]}function xS(e,n){e.action=n}function Vm(e){var n=xn(),a=Ze;if(a!==null)return Gm(n,a,e);xn(),n=n.memoizedState,a=xn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function gr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Il(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function km(){return xn().memoizedState}function Hl(e,n,a,o){var u=Qn();_e.flags|=e,u.memoizedState=gr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,n,a,o){var u=xn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ze!==null&&o!==null&&nf(o,Ze.memoizedState.deps)?u.memoizedState=gr(n,d,a,o):(_e.flags|=e,u.memoizedState=gr(1|n,d,a,o))}function Xm(e,n){Hl(8390656,8,e,n)}function df(e,n){Gl(2048,8,e,n)}function SS(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Il(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=xn().memoizedState;return SS({ref:n,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(e,n){return Gl(4,2,e,n)}function Ym(e,n){return Gl(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zm(e,n,a){a=a!=null?a.concat([e]):null,Gl(4,4,jm.bind(null,n,e),a)}function pf(){}function Km(e,n){var a=xn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Qm(e,n){var a=xn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=e(),Ns){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function mf(e,n,a){return a===void 0||(ua&1073741824)!==0&&(we&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=J0(),_e.lanes|=e,Qa|=e,a)}function Jm(e,n,a,o){return ui(a,n)?a:dr.current!==null?(e=mf(e,a,o),ui(e,n)||(En=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(we&261930)===0?(En=!0,e.memoizedState=a):(e=J0(),_e.lanes|=e,Qa|=e,n)}function $m(e,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var y=F.T,R={};F.T=R,vf(e,!1,n,a);try{var B=u(),at=F.S;if(at!==null&&at(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var gt=mS(B,o);To(e,n,gt,gi(e))}else To(e,n,o,gi(e))}catch(St){To(e,n,{then:function(){},status:"rejected",reason:St},gi())}finally{H.p=d,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function yS(){}function gf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=t0(e).queue;$m(e,u,n,rt,a===null?yS:function(){return e0(e),a(o)})}function t0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function e0(e){var n=t0(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},gi())}function _f(){return Vn(Vo)}function n0(){return xn().memoizedState}function i0(){return xn().memoizedState}function MS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();e=Wa(a);var o=qa(n,e,a);o!==null&&(ri(o,n,a),So(o,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function ES(e,n,a){var o=gi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?s0(n,a):(a=Ou(e,n,a,o),a!==null&&(ri(a,e,o),r0(a,n,o)))}function a0(e,n,a){var o=gi();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))s0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,ui(R,y))return Ml(e,n,u,0),tn===null&&yl(),!1}catch{}finally{}if(a=Ou(e,n,u,o),a!==null)return ri(a,e,o),r0(a,n,o),!0}return!1}function vf(e,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&ri(n,e,2)}function Vl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function s0(e,n){pr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ge(e,a)}}var Ao={readContext:Vn,use:Fl,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};Ao.useEffectEvent=pn;var o0={readContext:Vn,use:Fl,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:Vn,useEffect:Xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Qn();n=n===void 0?null:n;var o=e();if(Ns){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Qn();if(a!==void 0){var u=a(n);if(Ns){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ES.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:function(e){e=ff(e);var n=e.queue,a=a0.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=Qn();return mf(a,e,n)},useTransition:function(){var e=ff(!1);return e=$m.bind(null,_e,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Qn();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(we&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Dm.bind(null,o,d,e),[e]),o.flags|=2048,gr(9,{destroy:void 0},wm.bind(null,o,d,a,n),null),a},useId:function(){var e=Qn(),n=tn.identifierPrefix;if(Le){var a=ki,o=Vi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=Qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:lf,useCacheRefresh:function(){return Qn().memoizedState=MS.bind(null,_e)},useEffectEvent:function(e){var n=Qn(),a={impl:e};return n.memoizedState=a,function(){if((Ve&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Vn,use:Fl,useCallback:Km,useContext:Vn,useEffect:df,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:Bl,useRef:km,useState:function(){return Bl(fa)},useDebugValue:pf,useDeferredValue:function(e,n){var a=xn();return Jm(a,Ze.memoizedState,e,n)},useTransition:function(){var e=Bl(fa)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:_f,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=xn();return Nm(a,Ze,e,n)},useMemoCache:lf,useCacheRefresh:i0};xf.useEffectEvent=Wm;var l0={readContext:Vn,use:Fl,useCallback:Km,useContext:Vn,useEffect:df,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:uf,useRef:km,useState:function(){return uf(fa)},useDebugValue:pf,useDeferredValue:function(e,n){var a=xn();return Ze===null?mf(a,e,n):Jm(a,Ze.memoizedState,e,n)},useTransition:function(){var e=uf(fa)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:_f,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=xn();return Ze!==null?Nm(a,Ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=gi(),u=Wa(o);u.payload=n,a!=null&&(u.callback=a),n=qa(e,u,o),n!==null&&(ri(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=gi(),u=Wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=qa(e,u,o),n!==null&&(ri(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=gi(),o=Wa(a);o.tag=2,n!=null&&(o.callback=n),n=qa(e,o,a),n!==null&&(ri(n,e,a),So(n,e,a))}};function c0(e,n,a,o,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,d):!0}function u0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function Os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function f0(e){Sl(e)}function h0(e){console.error(e)}function d0(e){Sl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function m0(e){return e=Wa(e),e.tag=3,e}function g0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){p0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){p0(n,a,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function bS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?ec():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,u)),!1}throw Error(s(435,a.tag))}return Yf(e,o,u),ec(),!1}if(Le)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(s(422),{cause:o}),mo(Mi(e,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),mo(Mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Mi(o,a),u=Mf(e.stateNode,o,u),Qu(e,u),mn!==4&&(mn=2)),!1;var d=Error(s(520),{cause:o});if(d=Mi(d,a),Oo===null?Oo=[d]:Oo.push(d),mn!==4&&(mn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,o,e),Qu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ja===null||!Ja.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,e,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),En=!1;function kn(e,n,a,o){n.child=e===null?Sm(n,null,a,o):Ls(n,e.child,a,o)}function _0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Cs(n),o=af(e,n,a,y,d,u),R=sf(),e!==null&&!En?(rf(e,n,u),ha(e,n,u)):(Le&&R&&Fu(n),n.flags|=1,kn(e,n,o,u),n.child)}function v0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,x0(e,n,d,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Uf(e,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(y,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=ra(d,o),e.ref=n.ref,e.return=n,n.child=e}function x0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(fo(d,o)&&e.ref===n.ref)if(En=!1,n.pendingProps=o=d,Uf(e,u))(e.flags&131072)!==0&&(En=!0);else return n.lanes=e.lanes,ha(e,n,u)}return bf(e,n,a,o,u)}function S0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return y0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,d!==null?d.cachePool:null),d!==null?Em(n,d):$u(),bm(n);else return o=n.lanes=536870912,y0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Cl(n,d.cachePool),Em(n,d),ja(),n.memoizedState=null):(e!==null&&Cl(n,null),$u(),ja());return kn(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(e,n,a,o,u){var d=Yu();return d=d===null?null:{parent:yn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Cl(n,null),$u(),bm(n),e!==null&&lr(e,n,o,!0),n.childLanes=u,null}function Xl(e,n){return n=ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function M0(e,n,a){return Ls(n,e.child,null,a),e=Xl(n,n.pendingProps),e.flags|=2,di(n),n.memoizedState=null,e}function TS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Le){if(o.mode==="hidden")return e=Xl(n,o),n.lanes=536870912,Ro(null,e);if(ef(n),(e=an)?(e=Og(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Gn=n,an=null)):e=null,e===null)throw Va(n);return n.lanes=536870912,null}return Xl(n,o)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=M0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(En||lr(e,n,a,!1),u=(a&e.childLanes)!==0,En||u){if(o=tn,o!==null&&(y=Be(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,bs(e,y),ri(o,e,y),Ef;ec(),n=M0(e,n,a)}else e=d.treeContext,an=Ri(y.nextSibling),Gn=n,Le=!0,Ga=null,Ti=!1,e!==null&&lm(n,e),n=Xl(n,o),n.flags|=4096;return n}return e=ra(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bf(e,n,a,o,u){return Cs(n),a=af(e,n,a,o,void 0,u),o=sf(),e!==null&&!En?(rf(e,n,u),ha(e,n,u)):(Le&&o&&Fu(n),n.flags|=1,kn(e,n,a,u),n.child)}function E0(e,n,a,o,u,d){return Cs(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(e),o=sf(),e!==null&&!En?(rf(e,n,d),ha(e,n,d)):(Le&&o&&Fu(n),n.flags|=1,kn(e,n,a,d),n.child)}function b0(e,n,a,o,u){if(Cs(n),n.stateNode===null){var d=ar,y=a.contextType;typeof y=="object"&&y!==null&&(d=Vn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Zu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Vn(y):ar,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Sf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&yf.enqueueReplaceState(d,d.state,null),Mo(n,o,d,u),yo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,B=Os(a,R);d.props=B;var at=d.context,gt=a.contextType;y=ar,typeof gt=="object"&&gt!==null&&(y=Vn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||at!==y)&&u0(n,d,o,y),Xa=!1;var lt=n.memoizedState;d.state=lt,Mo(n,o,d,u),yo(),at=n.memoizedState,R||lt!==at||Xa?(typeof St=="function"&&(Sf(n,a,St,o),at=n.memoizedState),(B=Xa||c0(n,a,B,o,lt,at,y))?(gt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),d.props=o,d.state=at,d.context=y,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ku(e,n),y=n.memoizedProps,gt=Os(a,y),d.props=gt,St=n.pendingProps,lt=d.context,at=a.contextType,B=ar,typeof at=="object"&&at!==null&&(B=Vn(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==St||lt!==B)&&u0(n,d,o,B),Xa=!1,lt=n.memoizedState,d.state=lt,Mo(n,o,d,u),yo();var ht=n.memoizedState;y!==St||lt!==ht||Xa||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof R=="function"&&(Sf(n,a,R,o),ht=n.memoizedState),(gt=Xa||c0(n,a,gt,o,lt,ht,B)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(at||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),d.props=o,d.state=ht,d.context=B,o=gt):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Wl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Ls(n,e.child,null,u),n.child=Ls(n,null,a,u)):kn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ha(e,n,u),e}function T0(e,n,a,o){return As(),n.flags|=256,kn(e,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:pm()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=mi),e}function A0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?Ya(n):ja(),(e=an)?(e=Og(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Gn=n,an=null)):e=null,e===null)throw Va(n);return ch(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ja(),u=n.mode,R=ql({mode:"hidden",children:R},u),o=Ts(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,y,a),n.memoizedState=Tf,Ro(null,o)):(Ya(n),Cf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(Ya(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(ja(),n.child=e.child,n.flags|=128,n=null):(ja(),R=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),R=Ts(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ls(n,e.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,y,a),n.memoizedState=Tf,n=Ro(null,o));else if(Ya(n),ch(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var at=y.dgst;y=at,o=Error(s(419)),o.stack="",o.digest=y,mo({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(En||lr(e,n,a,!1),y=(a&e.childLanes)!==0,En||y){if(y=tn,y!==null&&(o=Be(y,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,bs(e,o),ri(y,e,o),Ef;lh(R)||ec(),n=wf(e,n,a)}else lh(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,an=Ri(R.nextSibling),Gn=n,Le=!0,Ga=null,Ti=!1,e!==null&&lm(n,e),n=Cf(n,o.children),n.flags|=4096);return n}return u?(ja(),R=o.fallback,u=n.mode,B=e.child,at=B.sibling,o=ra(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,at!==null?R=ra(at,R):(R=Ts(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ro(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Af(a):(u=R.cachePool,u!==null?(B=yn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=pm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Rf(e,y,a),n.memoizedState=Tf,Ro(e.child,o)):(Ya(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Cf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=fi(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return Ls(n,e.child,null,a),e=Cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Df(e,n,a,o,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function C0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=vn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,xt(vn,y),kn(e,n,o,a),o=Le?po:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,a,n);else if(e.tag===19)R0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,d,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(lr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function AS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),ka(n,yn,e.memoizedState.cache),As();break;case 27:case 5:Xt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(e,n,a):(Ya(n),e=ha(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(vn,vn.current),o)break;return null;case 22:return n.lanes=0,S0(e,n,a,n.pendingProps);case 24:ka(n,yn,e.memoizedState.cache)}return ha(e,n,a)}function w0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)En=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return En=!1,AS(e,n,a);En=(e.flags&131072)!==0}else En=!1,Le&&(n.flags&1048576)!==0&&om(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ds(n.elementType),n.type=e,typeof e=="function")Pu(e)?(o=Os(e,o),n.tag=1,n=b0(null,n,e,o,a)):(n.tag=0,n=bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=_0(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=v0(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Os(o,n.pendingProps),b0(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ku(e,n),Mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ka(n,yn,o),o!==d.cache&&Xu(n,[yn],a,!0),yo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=T0(e,n,o,a);break t}else if(o!==u){u=Mi(Error(s(424)),n),mo(u),n=T0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=Ri(e.firstChild),Gn=n,Le=!0,Ga=null,Ti=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(As(),o===u){n=ha(e,n,a);break t}kn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,o=lc(st.current).createElement(a),o[Ce]=n,o[fn]=e,Xn(o,a,e),C(o),n.stateNode=o):n.memoizedState=Hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Le&&(o=n.stateNode=Ig(n.type,n.pendingProps,st.current),Gn=n,Ti=!0,u=an,ns(n.type)?(uh=u,an=Ri(o.firstChild)):an=u),kn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=an)&&(o=ny(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Gn=n,an=Ri(o.firstChild),Ti=!1,u=!0):u=!1),u||Va(n)),Xt(n),u=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,o=d.children,sh(u,d)?o=null:y!==null&&sh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=af(e,n,_S,null,null,a),Vo._currentValue=u),Wl(e,n),kn(e,n,o,a),n.child;case 6:return e===null&&Le&&((e=a=an)&&(a=iy(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Gn=n,an=null,e=!0):e=!1),e||Va(n)),null;case 13:return A0(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ls(n,null,o,a):kn(e,n,o,a),n.child;case 11:return _0(e,n,n.type,n.pendingProps,a);case 7:return kn(e,n,n.pendingProps,a),n.child;case 8:return kn(e,n,n.pendingProps.children,a),n.child;case 12:return kn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),kn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Cs(n),u=Vn(u),o=o(u),n.flags|=1,kn(e,n,o,a),n.child;case 14:return v0(e,n,n.type,n.pendingProps,a);case 15:return x0(e,n,n.type,n.pendingProps,a);case 19:return C0(e,n,a);case 31:return TS(e,n,a);case 22:return S0(e,n,a,n.pendingProps);case 24:return Cs(n),o=Vn(yn),e===null?(u=Yu(),u===null&&(u=tn,d=Wu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Zu(n),ka(n,yn,u)):((e.lanes&a)!==0&&(Ku(e,n),Mo(n,null,null,a),yo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,yn,o)):(o=d.cache,ka(n,yn,o),o!==u.cache&&Xu(n,[yn],a,!0))),kn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(e){e.flags|=4}function Lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw Us=Dl,ju}else e.flags&=-16777217}function D0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wg(n))if(ng())e.flags|=8192;else throw Us=Dl,ju}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Vt():536870912,e.lanes|=n,Sr|=n)}function Co(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function RS(e,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return sn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(yn),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(or(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),sn(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(da(n),d!==null?(sn(n),D0(n,d)):(sn(n),Lf(n,u,null,o,a))):d?d!==e.memoizedState?(da(n),sn(n),D0(n,d)):(sn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&da(n),sn(n),Lf(n,u,e,o,a)),null;case 27:if(ue(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return sn(n),null}e=wt.current,or(n)?cm(n):(e=Ig(u,o,a),n.stateNode=e,da(n))}return sn(n),null;case 5:if(ue(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return sn(n),null}if(d=wt.current,or(n))cm(n);else{var y=lc(st.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[Ce]=n,d[fn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;t:switch(Xn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(n)}}return sn(n),Lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,or(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Gn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ce]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(e.nodeValue,a)),e||Va(n,!0)}else e=lc(e).createTextNode(o),e[Ce]=n,n.stateNode=e}return sn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=or(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ce]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return sn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=or(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ce]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),u=!1}else u=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),sn(n),null);case 4:return Wt(),e===null&&th(n.stateNode.containerInfo),sn(n),null;case 10:return ca(n.type),sn(n),null;case 19:if(et(vn),o=n.memoizedState,o===null)return sn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Co(o,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ol(e),d!==null){for(n.flags|=128,Co(o,!1),e=d.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return xt(vn,vn.current&1|2),Le&&oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Jl&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ol(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Le)return sn(n),null}else 2*b()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=vn.current,xt(vn,u?a&1|2:a&1),Le&&oa(n,o.treeForkCount),e):(sn(n),null);case 22:case 23:return di(n),tf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(yn),sn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function CS(e,n){switch(Bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(yn),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));As()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(di(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(vn),null;case 4:return Wt(),null;case 10:return ca(n.type),null;case 22:case 23:return di(n),tf(),e!==null&&et(ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(yn),null;case 25:return null;default:return null}}function U0(e,n){switch(Bu(n),n.tag){case 3:ca(yn),Wt();break;case 26:case 27:case 5:ue(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:et(vn);break;case 10:ca(n.type);break;case 22:case 23:di(n),tf(),e!==null&&et(ws);break;case 24:ca(yn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){qe(n,n.return,R)}}function Za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var B=a,at=R;try{at()}catch(gt){qe(u,B,gt)}}}o=o.next}while(o!==d)}}catch(gt){qe(n,n.return,gt)}}function L0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mm(n,a)}catch(o){qe(e,e.return,o)}}}function N0(e,n,a){a.props=Os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){qe(e,n,u)}}function Xi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function O0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function Nf(e,n,a){try{var o=e.stateNode;KS(o,e.type,a,n),o[fn]=n}catch(u){qe(e,e.return,u)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pf(e,n,a),e=e.sibling;e!==null;)Pf(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Xn(n,o,a),n[Ce]=e,n[fn]=a}catch(d){qe(e,e.return,d)}}var pa=!1,bn=!1,zf=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Un=null;function wS(e,n){if(e=e.containerInfo,ih=mc,e=Zp(e),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var y=0,R=-1,B=-1,at=0,gt=0,St=e,lt=null;e:for(;;){for(var ht;St!==a||u!==0&&St.nodeType!==3||(R=y+u),St!==d||o!==0&&St.nodeType!==3||(B=y+o),St.nodeType===3&&(y+=St.nodeValue.length),(ht=St.firstChild)!==null;)lt=St,St=ht;for(;;){if(St===e)break e;if(lt===a&&++at===u&&(R=y),lt===d&&++gt===o&&(B=y),(ht=St.nextSibling)!==null)break;St=lt,lt=St.parentNode}St=ht}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:e,selectionRange:a},mc=!1,Un=n;Un!==null;)if(n=Un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Un=e;else for(;Un!==null;){switch(n=Un,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Yt=Os(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){qe(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Un=e;break}Un=n.return}}function F0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&wo(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){qe(a,a.return,y)}else{var u=Os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){qe(a,a.return,y)}}o&64&&L0(a),o&512&&Do(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(e,n)}catch(y){qe(a,a.return,y)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:ga(e,a),n===null&&o&4&&O0(a),o&512&&Do(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&G0(e,a);break;case 13:ga(e,a),o&4&&V0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=FS.bind(null,a),ay(e,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||bn,u=pa;var d=bn;pa=o,(bn=n)&&!d?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=u,bn=d}break;case 30:break;default:ga(e,a)}}function B0(e){var n=e.alternate;n!==null&&(e.alternate=null,B0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cn=null,ni=!1;function ma(e,n,a){for(a=a.child;a!==null;)H0(e,n,a),a=a.sibling}function H0(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:bn||Xi(a,n),ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Xi(a,n);var o=cn,u=ni;ns(a.type)&&(cn=a.stateNode,ni=!1),ma(e,n,a),Bo(a.stateNode),cn=o,ni=u;break;case 5:bn||Xi(a,n);case 6:if(o=cn,u=ni,cn=null,ma(e,n,a),cn=o,ni=u,cn!==null)if(ni)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(a.stateNode)}catch(d){qe(a,n,d)}else try{cn.removeChild(a.stateNode)}catch(d){qe(a,n,d)}break;case 18:cn!==null&&(ni?(e=cn,Lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cr(e)):Lg(cn,a.stateNode));break;case 4:o=cn,u=ni,cn=a.stateNode.containerInfo,ni=!0,ma(e,n,a),cn=o,ni=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),bn||Za(4,a,n),ma(e,n,a);break;case 1:bn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&N0(a,n,o)),ma(e,n,a);break;case 21:ma(e,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,ma(e,n,a),bn=o;break;default:ma(e,n,a)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(a){qe(n,n.return,a)}}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(a){qe(n,n.return,a)}}function DS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I0),n;default:throw Error(s(435,e.tag))}}function Zl(e,n){var a=DS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=BS.bind(null,e,o);o.then(u,u)}})}function ii(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(ns(R.type)){cn=R.stateNode,ni=!1;break t}break;case 5:cn=R.stateNode,ni=!1;break t;case 3:case 4:cn=R.stateNode.containerInfo,ni=!0;break t}R=R.return}if(cn===null)throw Error(s(160));H0(d,y,u),cn=null,ni=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,e),n=n.sibling}var Pi=null;function k0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),o&4&&(Za(3,e,e.return),wo(3,e),Za(5,e,e.return));break;case 1:ii(n,e),ai(e),o&512&&(bn||a===null||Xi(a,a.return)),o&64&&pa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if(ii(n,e),ai(e),o&512&&(bn||a===null||Xi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[xs]||d[Ce]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Xn(d,o,a),d[Ce]=e,C(d),o=d;break t;case"link":var y=kg("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}d=u.createElement(o),Xn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=kg("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}d=u.createElement(o),Xn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[Ce]=e,C(d),o=d}e.stateNode=o}else Xg(u,e.type,e.stateNode);else e.stateNode=Vg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,e.type,e.stateNode):Vg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ii(n,e),ai(e),o&512&&(bn||a===null||Xi(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ii(n,e),ai(e),o&512&&(bn||a===null||Xi(a,a.return)),e.flags&32){u=e.stateNode;try{An(u,"")}catch(Yt){qe(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(ii(n,e),ai(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){qe(e,e.return,Yt)}}break;case 3:if(fc=null,u=Pi,Pi=cc(n.containerInfo),ii(n,e),Pi=u,ai(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(Yt){qe(e,e.return,Yt)}zf&&(zf=!1,X0(e));break;case 4:o=Pi,Pi=cc(e.stateNode.containerInfo),ii(n,e),ai(e),Pi=o;break;case 12:ii(n,e),ai(e);break;case 31:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,at=pa,gt=bn;if(pa=at||u,bn=gt||B,ii(n,e),bn=gt,pa=at,ai(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||pa||bn||Ps(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=B.stateNode;var St=B.memoizedProps.style,lt=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Yt){qe(B,B.return,Yt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Yt){qe(B,B.return,Yt)}}}else if(n.tag===18){if(a===null){B=n;try{var ht=B.stateNode;u?Ng(ht,!0):Ng(B.stateNode,!1)}catch(Yt){qe(B,B.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Of(e);jl(e,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(An(y,""),a.flags&=-33);var R=Of(e);jl(e,R,y);break;case 3:case 4:var B=a.stateNode.containerInfo,at=Of(e);Pf(e,at,B);break;default:throw Error(s(161))}}catch(gt){qe(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(e,n.alternate,n),n=n.sibling}function Ps(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Ps(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&N0(n,n.return,a),Ps(n);break;case 27:Bo(n.stateNode);case 26:case 5:Xi(n,n.return),Ps(n);break;case 22:n.memoizedState===null&&Ps(n);break;case 30:Ps(n);break;default:Ps(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,a),wo(4,d);break;case 1:if(_a(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){qe(o,o.return,at)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)ym(B[u],R)}catch(at){qe(o,o.return,at)}}a&&y&64&&L0(d),Do(d,d.return);break;case 27:z0(d);case 26:case 5:_a(u,d,a),a&&o===null&&y&4&&O0(d),Do(d,d.return);break;case 12:_a(u,d,a);break;case 31:_a(u,d,a),a&&y&4&&G0(u,d);break;case 13:_a(u,d,a),a&&y&4&&V0(u,d);break;case 22:d.memoizedState===null&&_a(u,d,a),Do(d,d.return);break;case 30:break;default:_a(u,d,a)}n=n.sibling}}function If(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function zi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(e,n,a,o),n=n.sibling}function W0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n,a,o),u&2048&&wo(9,n);break;case 1:zi(e,n,a,o);break;case 3:zi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){zi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){qe(n,n.return,B)}}else zi(e,n,a,o);break;case 31:zi(e,n,a,o);break;case 13:zi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?zi(e,n,a,o):Uo(e,n):d._visibility&2?zi(e,n,a,o):(d._visibility|=2,_r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(y,n);break;case 24:zi(e,n,a,o),u&2048&&Ff(n.alternate,n);break;default:zi(e,n,a,o)}}function _r(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,R=a,B=o,at=y.flags;switch(y.tag){case 0:case 11:case 15:_r(d,y,R,B,u),wo(8,y);break;case 23:break;case 22:var gt=y.stateNode;y.memoizedState!==null?gt._visibility&2?_r(d,y,R,B,u):Uo(d,y):(gt._visibility|=2,_r(d,y,R,B,u)),u&&at&2048&&If(y.alternate,y);break;case 24:_r(d,y,R,B,u),u&&at&2048&&Ff(y.alternate,y);break;default:_r(d,y,R,B,u)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&If(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Ff(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Lo=8192;function vr(e,n,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)q0(e,n,a),e=e.sibling}function q0(e,n,a){switch(e.tag){case 26:vr(e,n,a),e.flags&Lo&&e.memoizedState!==null&&gy(a,Pi,e.memoizedState,e.memoizedProps);break;case 5:vr(e,n,a);break;case 3:case 4:var o=Pi;Pi=cc(e.stateNode.containerInfo),vr(e,n,a),Pi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,vr(e,n,a),Lo=o):vr(e,n,a));break;default:vr(e,n,a)}}function Y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,Z0(o,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j0(e),e=e.sibling}function j0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Za(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):No(e);break;default:No(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,Z0(o,e)}Y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function Z0(e,n){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Un=o;else t:for(a=e;Un!==null;){o=Un;var u=o.sibling,d=o.return;if(B0(o),o===a){Un=null;break t}if(u!==null){u.return=d,Un=u;break t}Un=d}}}var US={getCacheForType:function(e){var n=Vn(yn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Vn(yn).controller.signal}},LS=typeof WeakMap=="function"?WeakMap:Map,Ve=0,tn=null,Te=null,we=0,We=0,pi=null,Ka=!1,xr=!1,Bf=!1,va=0,mn=0,Qa=0,zs=0,Hf=0,mi=0,Sr=0,Oo=null,si=null,Gf=!1,Ql=0,K0=0,Jl=1/0,$l=null,Ja=null,Rn=0,$a=null,yr=null,xa=0,Vf=0,kf=null,Q0=null,Po=0,Xf=null;function gi(){return(Ve&2)!==0&&we!==0?we&-we:F.T!==null?Kf():_n()}function J0(){if(mi===0)if((we&536870912)===0||Le){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),mi=e}else mi=536870912;return e=hi.current,e!==null&&(e.flags|=32),mi}function ri(e,n,a){(e===tn&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),ts(e,we,mi,!1)),te(e,a),((Ve&2)===0||e!==tn)&&(e===tn&&((Ve&2)===0&&(zs|=a),mn===4&&ts(e,we,mi,!1)),Wi(e))}function $0(e,n,a){if((Ve&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||mt(e,n),u=o?PS(e,n):qf(e,n,!0),d=o;do{if(u===0){xr&&!o&&ts(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!NS(a)){u=qf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Oo;var B=R.current.memoizedState.isDehydrated;if(B&&(Mr(R,y).flags|=256),y=qf(R,y,!1),y!==2){if(Bf&&!B){R.errorRecoveryDisabledLanes|=d,zs|=d,u=4;break t}d=si,si=u,d!==null&&(si===null?si=d:si.push.apply(si,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Mr(e,0),ts(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ts(o,n,mi,!Ka);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-b(),10<u)){if(ts(o,n,mi,!Ka),tt(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=Dg(tg.bind(null,o,a,si,$l,Gf,n,mi,zs,Sr,Ka,d,"Throttled",-0,0),u);break t}tg(o,a,si,$l,Gf,n,mi,zs,Sr,Ka,d,null,-0,0)}}break}while(!0);Wi(e)}function tg(e,n,a,o,u,d,y,R,B,at,gt,St,lt,ht){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},q0(n,d,St);var Yt=(d&62914560)===d?Ql-b():(d&4194048)===d?K0-b():0;if(Yt=_y(St,Yt),Yt!==null){xa=d,e.cancelPendingCommit=Yt(lg.bind(null,e,n,d,a,o,u,y,R,B,gt,St,null,lt,ht)),ts(e,d,y,!at);return}}lg(e,n,d,a,o,u,y,R,B)}function NS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ui(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(e,n,a,o){n&=~Hf,n&=~zs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-zt(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&re(e,a,n)}function tc(){return(Ve&6)===0?(zo(0),!1):!0}function Wf(){if(Te!==null){if(We===0)var e=Te.return;else e=Te,la=Rs=null,of(e),hr=null,vo=0,e=Te;for(;e!==null;)U0(e.alternate,e),e=e.return;Te=null}}function Mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$S(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,Wf(),tn=e,Te=a=ra(e.current,null),we=n,We=0,pi=null,Ka=!1,xr=mt(e,n),Bf=!1,Sr=mi=Hf=zs=Qa=mn=0,si=Oo=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),d=1<<u;n|=e[u],o&=~d}return va=n,yl(),a}function eg(e,n){_e=null,F.H=Ao,n===fr||n===wl?(n=_m(),We=3):n===ju?(n=_m(),We=4):We=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Te===null&&(mn=1,kl(e,Mi(n,e.current)))}function ng(){var e=hi.current;return e===null?!0:(we&4194048)===we?Ai===null:(we&62914560)===we||(we&536870912)!==0?e===Ai:!1}function ig(){var e=F.H;return F.H=Ao,e===null?Ao:e}function ag(){var e=F.A;return F.A=US,e}function ec(){mn=4,Ka||(we&4194048)!==we&&hi.current!==null||(xr=!0),(Qa&134217727)===0&&(zs&134217727)===0||tn===null||ts(tn,we,mi,!1)}function qf(e,n,a){var o=Ve;Ve|=2;var u=ig(),d=ag();(tn!==e||we!==n)&&($l=null,Mr(e,n)),n=!1;var y=mn;t:do try{if(We!==0&&Te!==null){var R=Te,B=pi;switch(We){case 8:Wf(),y=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var at=We;if(We=0,pi=null,Er(e,R,B,at),a&&xr){y=0;break t}break;default:at=We,We=0,pi=null,Er(e,R,B,at)}}OS(),y=mn;break}catch(gt){eg(e,gt)}while(!0);return n&&e.shellSuspendCounter++,la=Rs=null,Ve=o,F.H=u,F.A=d,Te===null&&(tn=null,we=0,yl()),y}function OS(){for(;Te!==null;)sg(Te)}function PS(e,n){var a=Ve;Ve|=2;var o=ig(),u=ag();tn!==e||we!==n?($l=null,Jl=b()+500,Mr(e,n)):xr=mt(e,n);t:do try{if(We!==0&&Te!==null){n=Te;var d=pi;e:switch(We){case 1:We=0,pi=null,Er(e,n,d,1);break;case 2:case 9:if(mm(d)){We=0,pi=null,rg(n);break}n=function(){We!==2&&We!==9||tn!==e||(We=7),Wi(e)},d.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:mm(d)?(We=0,pi=null,rg(n)):(We=0,pi=null,Er(e,n,d,7));break;case 5:var y=null;switch(Te.tag){case 26:y=Te.memoizedState;case 5:case 27:var R=Te;if(y?Wg(y):R.stateNode.complete){We=0,pi=null;var B=R.sibling;if(B!==null)Te=B;else{var at=R.return;at!==null?(Te=at,nc(at)):Te=null}break e}}We=0,pi=null,Er(e,n,d,5);break;case 6:We=0,pi=null,Er(e,n,d,6);break;case 8:Wf(),mn=6;break t;default:throw Error(s(462))}}zS();break}catch(gt){eg(e,gt)}while(!0);return la=Rs=null,F.H=o,F.A=u,Ve=a,Te!==null?0:(tn=null,we=0,yl(),mn)}function zS(){for(;Te!==null&&!Zt();)sg(Te)}function sg(e){var n=w0(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?nc(e):Te=n}function rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:of(n);default:U0(a,n),n=Te=am(n,va),n=w0(a,n,va)}e.memoizedProps=e.pendingProps,n===null?nc(e):Te=n}function Er(e,n,a,o){la=Rs=null,of(n),hr=null,vo=0;var u=n.return;try{if(bS(e,u,n,a,we)){mn=1,kl(e,Mi(a,e.current)),Te=null;return}}catch(d){if(u!==null)throw Te=u,d;mn=1,kl(e,Mi(a,e.current)),Te=null;return}n.flags&32768?(Le||o===1?e=!0:xr||(we&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){og(n,Ka);return}e=n.return;var a=RS(n.alternate,n,va);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);mn===0&&(mn=5)}function og(e,n){do{var a=CS(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);mn=6,Te=null}function lg(e,n,a,o,u,d,y,R,B){e.cancelPendingCommit=null;do ic();while(Rn!==0);if((Ve&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Nu,Bt(e,a,d,y,R,B),e===tn&&(Te=tn=null,we=0),yr=n,$a=e,xa=a,Vf=d,kf=u,Q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,HS(pt,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=H.p,H.p=2,y=Ve,Ve|=4;try{wS(e,n,a)}finally{Ve=y,H.p=u,F.T=o}}Rn=1,cg(),ug(),fg()}}function cg(){if(Rn===1){Rn=0;var e=$a,n=yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Ve;Ve|=4;try{k0(n,e);var d=ah,y=Zp(e.containerInfo),R=d.focusedElem,B=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&jp(R.ownerDocument.documentElement,R)){if(B!==null&&Cu(R)){var at=B.start,gt=B.end;if(gt===void 0&&(gt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(gt,R.value.length);else{var St=R.ownerDocument||document,lt=St&&St.defaultView||window;if(lt.getSelection){var ht=lt.getSelection(),Yt=R.textContent.length,le=Math.min(B.start,Yt),Qe=B.end===void 0?le:Math.min(B.end,Yt);!ht.extend&&le>Qe&&(y=Qe,Qe=le,le=y);var Q=Yp(R,le),X=Yp(R,Qe);if(Q&&X&&(ht.rangeCount!==1||ht.anchorNode!==Q.node||ht.anchorOffset!==Q.offset||ht.focusNode!==X.node||ht.focusOffset!==X.offset)){var it=St.createRange();it.setStart(Q.node,Q.offset),ht.removeAllRanges(),le>Qe?(ht.addRange(it),ht.extend(X.node,X.offset)):(it.setEnd(X.node,X.offset),ht.addRange(it))}}}}for(St=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&St.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var vt=St[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}mc=!!ih,ah=ih=null}finally{Ve=u,H.p=o,F.T=a}}e.current=n,Rn=2}}function ug(){if(Rn===2){Rn=0;var e=$a,n=yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Ve;Ve|=4;try{F0(e,n.alternate,n)}finally{Ve=u,H.p=o,F.T=a}}Rn=3}}function fg(){if(Rn===4||Rn===3){Rn=0,P();var e=$a,n=yr,a=xa,o=Q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,yr=$a=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ja=null),je(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var d=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=u}}(xa&3)!==0&&ic(),Wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xf?Po++:(Po=0,Xf=e):Po=0,zo(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function ic(){return cg(),ug(),fg(),dg()}function dg(){if(Rn!==5)return!1;var e=$a,n=Vf;Vf=0;var a=je(xa),o=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=kf,kf=null;var d=$a,y=xa;if(Rn=0,yr=$a=null,xa=0,(Ve&6)!==0)throw Error(s(331));var R=Ve;if(Ve|=4,j0(d.current),W0(d,d.current,y,a),Ve=R,zo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(At,d)}catch{}return!0}finally{H.p=u,F.T=o,hg(e,n)}}function pg(e,n,a){n=Mi(a,n),n=Mf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(te(e,2),Wi(e))}function qe(e,n,a){if(e.tag===3)pg(e,e,a);else for(;n!==null;){if(n.tag===3){pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){e=Mi(a,e),a=m0(2),o=qa(n,a,2),o!==null&&(g0(a,o,n,e),te(o,2),Wi(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new LS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),e=IS.bind(null,e,n,a),n.then(e,e))}function IS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(we&a)===a&&(mn===4||mn===3&&(we&62914560)===we&&300>b()-Ql?(Ve&2)===0&&Mr(e,0):Hf|=a,Sr===we&&(Sr=0)),Wi(e)}function mg(e,n){n===0&&(n=Vt()),e=bs(e,n),e!==null&&(te(e,n),Wi(e))}function FS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(e,a)}function BS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),mg(e,a)}function HS(e,n){return be(e,n)}var ac=null,br=null,jf=!1,sc=!1,Zf=!1,es=0;function Wi(e){e!==br&&e.next===null&&(br===null?ac=br=e:br=br.next=e),sc=!0,jf||(jf=!0,VS())}function zo(e,n){if(!Zf&&sc){Zf=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xg(o,d))}else d=we,d=tt(o,o===tn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||mt(o,d)||(a=!0,xg(o,d));o=o.next}while(a);Zf=!1}}function GS(){gg()}function gg(){sc=jf=!1;var e=0;es!==0&&JS()&&(e=es);for(var n=b(),a=null,o=ac;o!==null;){var u=o.next,d=_g(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(br=a)):(a=o,(e!==0||(d&3)!==0)&&(sc=!0)),o=u}Rn!==0&&Rn!==5||zo(e),es!==0&&(es=0)}function _g(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-zt(d),R=1<<y,B=u[y];B===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Mt(R,n)):B<=n&&(e.expiredLanes|=R),d&=~R}if(n=tn,a=we,a=tt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(We===2||We===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||mt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ze(o),je(a)){case 2:case 8:a=yt;break;case 32:a=pt;break;case 268435456:a=Ut;break;default:a=pt}return o=vg.bind(null,e),a=be(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function vg(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=we;return o=tt(e,e===tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($0(e,o,n),_g(e,b()),e.callbackNode!=null&&e.callbackNode===a?vg.bind(null,e):null)}function xg(e,n){if(ic())return null;$0(e,n,!0)}function VS(){ty(function(){(Ve&6)!==0?be(_t,GS):gg()})}function Kf(){if(es===0){var e=cr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),es=e}return es}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function kS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Sg((u[fn]||null).action),y=o.submitter;y&&(n=(n=y[fn]||null)?Sg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new _l("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var B=y?yg(u,y):new FormData(u);gf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=y?yg(u,y):new FormData(u),gf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],XS=Jf.toLowerCase(),WS=Jf[0].toUpperCase()+Jf.slice(1);Oi(XS,"on"+WS)}Oi(Jp,"onAnimationEnd"),Oi($p,"onAnimationIteration"),Oi(tm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(oS,"onTransitionRun"),Oi(lS,"onTransitionStart"),Oi(cS,"onTransitionCancel"),Oi(em,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Mg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],B=R.instance,at=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=at;try{d(u)}catch(gt){Sl(gt)}u.currentTarget=null,d=B}else for(y=0;y<o.length;y++){if(R=o[y],B=R.instance,at=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=at;try{d(u)}catch(gt){Sl(gt)}u.currentTarget=null,d=B}}}}function Ae(e,n){var a=n[Pa];a===void 0&&(a=n[Pa]=new Set);var o=e+"__bubble";a.has(o)||(Eg(n,e,2,!1),a.add(o))}function $f(e,n,a){var o=0;n&&(o|=4),Eg(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[rc]){e[rc]=!0,K.forEach(function(a){a!=="selectionchange"&&(qS.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,$f("selectionchange",!1,n))}}function Eg(e,n,a,o){switch(Jg(n)){case 2:var u=Sy;break;case 8:u=yy;break;default:u=mh}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function eh(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=za(R),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=d=y;continue t}R=R.parentNode}}o=o.return}Cp(function(){var at=d,gt=_u(a),St=[];t:{var lt=nm.get(e);if(lt!==void 0){var ht=_l,Yt=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ht=Bx;break;case"focusin":Yt="focus",ht=Eu;break;case"focusout":Yt="blur",ht=Eu;break;case"beforeblur":case"afterblur":ht=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Vx;break;case Jp:case $p:case tm:ht=Dx;break;case em:ht=Xx;break;case"scroll":case"scrollend":ht=Tx;break;case"wheel":ht=qx;break;case"copy":case"cut":case"paste":ht=Lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Np;break;case"toggle":case"beforetoggle":ht=jx}var le=(n&4)!==0,Qe=!le&&(e==="scroll"||e==="scrollend"),Q=le?lt!==null?lt+"Capture":null:lt;le=[];for(var X=at,it;X!==null;){var vt=X;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||Q===null||(vt=ao(X,Q),vt!=null&&le.push(Fo(X,vt,it))),Qe)break;X=X.return}0<le.length&&(lt=new ht(lt,Yt,null,a,gt),St.push({event:lt,listeners:le}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",lt&&a!==gu&&(Yt=a.relatedTarget||a.fromElement)&&(za(Yt)||Yt[Pn]))break t;if((ht||lt)&&(lt=gt.window===gt?gt:(lt=gt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ht?(Yt=a.relatedTarget||a.toElement,ht=at,Yt=Yt?za(Yt):null,Yt!==null&&(Qe=c(Yt),le=Yt.tag,Yt!==Qe||le!==5&&le!==27&&le!==6)&&(Yt=null)):(ht=null,Yt=at),ht!==Yt)){if(le=Up,vt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(le=Np,vt="onPointerLeave",Q="onPointerEnter",X="pointer"),Qe=ht==null?lt:Ss(ht),it=Yt==null?lt:Ss(Yt),lt=new le(vt,X+"leave",ht,a,gt),lt.target=Qe,lt.relatedTarget=it,vt=null,za(gt)===at&&(le=new le(Q,X+"enter",Yt,a,gt),le.target=it,le.relatedTarget=Qe,vt=le),Qe=vt,ht&&Yt)e:{for(le=YS,Q=ht,X=Yt,it=0,vt=Q;vt;vt=le(vt))it++;vt=0;for(var ie=X;ie;ie=le(ie))vt++;for(;0<it-vt;)Q=le(Q),it--;for(;0<vt-it;)X=le(X),vt--;for(;it--;){if(Q===X||X!==null&&Q===X.alternate){le=Q;break e}Q=le(Q),X=le(X)}le=null}else le=null;ht!==null&&bg(St,lt,ht,le,!1),Yt!==null&&Qe!==null&&bg(St,Qe,Yt,le,!0)}}t:{if(lt=at?Ss(at):window,ht=lt.nodeName&&lt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&lt.type==="file")var Ie=Gp;else if(Bp(lt))if(Vp)Ie=aS;else{Ie=nS;var ee=eS}else ht=lt.nodeName,!ht||ht.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?at&&Ni(at.elementType)&&(Ie=Gp):Ie=iS;if(Ie&&(Ie=Ie(e,at))){Hp(St,Ie,a,gt);break t}ee&&ee(e,lt,at),e==="focusout"&&at&&lt.type==="number"&&at.memoizedProps.value!=null&&In(lt,"number",lt.value)}switch(ee=at?Ss(at):window,e){case"focusin":(Bp(ee)||ee.contentEditable==="true")&&(er=ee,wu=at,ho=null);break;case"focusout":ho=wu=er=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Kp(St,a,gt);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":Kp(St,a,gt)}var xe;if(Tu)t:{switch(e){case"compositionstart":var De="onCompositionStart";break t;case"compositionend":De="onCompositionEnd";break t;case"compositionupdate":De="onCompositionUpdate";break t}De=void 0}else tr?Ip(e,a)&&(De="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(Op&&a.locale!=="ko"&&(tr||De!=="onCompositionStart"?De==="onCompositionEnd"&&tr&&(xe=wp()):(Ba=gt,Su="value"in Ba?Ba.value:Ba.textContent,tr=!0)),ee=oc(at,De),0<ee.length&&(De=new Lp(De,e,null,a,gt),St.push({event:De,listeners:ee}),xe?De.data=xe:(xe=Fp(a),xe!==null&&(De.data=xe)))),(xe=Kx?Qx(e,a):Jx(e,a))&&(De=oc(at,"onBeforeInput"),0<De.length&&(ee=new Lp("onBeforeInput","beforeinput",null,a,gt),St.push({event:ee,listeners:De}),ee.data=xe)),kS(St,e,at,a,gt)}Mg(St,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ao(e,a),u!=null&&o.unshift(Fo(e,u,d)),u=ao(e,n),u!=null&&o.push(Fo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function YS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,B=R.alternate,at=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||at===null||(B=at,u?(at=ao(a,d),at!=null&&y.unshift(Fo(a,at,B))):u||(at=ao(a,d),at!=null&&y.push(Fo(a,at,B)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var jS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(jS,`
`).replace(ZS,"")}function Ag(e,n){return n=Tg(n),Tg(e)===n}function Ke(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||An(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&An(e,""+o);break;case"className":ae(e,"class",o);break;case"tabIndex":ae(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(e,a,o);break;case"style":Qs(e,o,d);break;case"data":if(n!=="object"){ae(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ke(e,n,"name",u.name,u,null),Ke(e,n,"formEncType",u.formEncType,u,null),Ke(e,n,"formMethod",u.formMethod,u,null),Ke(e,n,"formTarget",u.formTarget,u,null)):(Ke(e,n,"encType",u.encType,u,null),Ke(e,n,"method",u.method,u,null),Ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Jt(e,"popover",o);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ex.get(a)||a,Jt(e,a,o))}}function nh(e,n,a,o,u,d){switch(a){case"style":Qs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?An(e,o):(typeof o=="number"||typeof o=="bigint")&&An(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ft.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[fn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Jt(e,a,o)}}}function Xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,d,y,a,null)}}u&&Ke(e,n,"srcSet",a.srcSet,a,null),o&&Ke(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var R=d=y=u=null,B=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":y=gt;break;case"checked":B=gt;break;case"defaultChecked":at=gt;break;case"value":d=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Ke(e,n,o,gt,a,null)}}ia(e,d,R,B,at,y,u,!1);return;case"select":Ae("invalid",e),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Ke(e,n,u,R,a,null)}n=d,a=y,e.multiple=!!o,n!=null?Si(e,!!o,n,!1):a!=null&&Si(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ke(e,n,y,R,a,null)}Fn(e,o,u,d);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ke(e,n,B,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)Ae(Io[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,at,o,a,null)}return;default:if(Ni(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&nh(e,n,gt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ke(e,n,R,o,a,null))}function KS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,B=null,at=null,gt=null;for(ht in a){var St=a[ht];if(a.hasOwnProperty(ht)&&St!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":B=St;default:o.hasOwnProperty(ht)||Ke(e,n,ht,null,o,St)}}for(var lt in o){var ht=o[lt];if(St=a[lt],o.hasOwnProperty(lt)&&(ht!=null||St!=null))switch(lt){case"type":d=ht;break;case"name":u=ht;break;case"checked":at=ht;break;case"defaultChecked":gt=ht;break;case"value":y=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==St&&Ke(e,n,lt,ht,o,St)}}zn(e,y,R,B,at,gt,d,u);return;case"select":ht=y=R=lt=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ht=B;default:o.hasOwnProperty(d)||Ke(e,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":lt=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==B&&Ke(e,n,u,d,o,B)}n=R,a=y,o=ht,lt!=null?Si(e,!!a,lt,!1):!!o!=!!a&&(n!=null?Si(e,!!a,n,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":ht=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ke(e,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":lt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ke(e,n,y,u,o,d)}Xe(e,lt,ht);return;case"option":for(var Yt in a)if(lt=a[Yt],a.hasOwnProperty(Yt)&&lt!=null&&!o.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Ke(e,n,Yt,null,o,lt)}for(B in o)if(lt=o[B],ht=a[B],o.hasOwnProperty(B)&&lt!==ht&&(lt!=null||ht!=null))switch(B){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Ke(e,n,B,lt,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)lt=a[le],a.hasOwnProperty(le)&&lt!=null&&!o.hasOwnProperty(le)&&Ke(e,n,le,null,o,lt);for(at in o)if(lt=o[at],ht=a[at],o.hasOwnProperty(at)&&lt!==ht&&(lt!=null||ht!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Ke(e,n,at,lt,o,ht)}return;default:if(Ni(n)){for(var Qe in a)lt=a[Qe],a.hasOwnProperty(Qe)&&lt!==void 0&&!o.hasOwnProperty(Qe)&&nh(e,n,Qe,void 0,o,lt);for(gt in o)lt=o[gt],ht=a[gt],!o.hasOwnProperty(gt)||lt===ht||lt===void 0&&ht===void 0||nh(e,n,gt,lt,o,ht);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&Ke(e,n,Q,null,o,lt);for(St in o)lt=o[St],ht=a[St],!o.hasOwnProperty(St)||lt===ht||lt==null&&ht==null||Ke(e,n,St,lt,o,ht)}function Rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function QS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&Rg(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],at=B.startTime;if(at>R)break;var gt=B.transferSize,St=B.initiatorType;gt&&Rg(St)&&(B=B.responseEnd,y+=gt*(B<R?1:(R-at)/(B-at)))}if(--o,n+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ih=null,ah=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function JS(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,$S=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(ey)}:Dg;function ey(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function Lg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[xs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);Cr(n)}function Ng(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ny(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[xs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function iy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function Og(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ay(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function Pg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ig(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var Ci=new Map,Fg=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=H.d;H.d={f:sy,r:ry,D:oy,C:ly,L:cy,m:uy,X:hy,S:fy,M:dy};function sy(){var e=Sa.f(),n=tc();return e||n}function ry(e){var n=Ia(e);n!==null&&n.tag===5&&n.type==="form"?e0(n):Sa.r(e)}var Tr=typeof document>"u"?null:document;function Bg(e,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Fg.has(u)||(Fg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Xn(n,"link",e),C(n),o.head.appendChild(n)))}}function oy(e){Sa.D(e),Bg("dns-prefetch",e,null)}function ly(e,n){Sa.C(e,n),Bg("preconnect",e,n)}function cy(e,n,a){Sa.L(e,n,a);var o=Tr;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var d=u;switch(n){case"style":d=Ar(e);break;case"script":d=Rr(e)}Ci.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(d))||n==="script"&&o.querySelector(Go(d))||(n=o.createElement("link"),Xn(n,"link",e),C(n),o.head.appendChild(n)))}}function uy(e,n){Sa.m(e,n);var a=Tr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Rr(e)}if(!Ci.has(d)&&(e=_({rel:"modulepreload",href:e},n),Ci.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(d)))return}o=a.createElement("link"),Xn(o,"link",e),C(o),a.head.appendChild(o)}}}function fy(e,n,a){Sa.S(e,n,a);var o=Tr;if(o&&e){var u=Fa(o).hoistableStyles,d=Ar(e);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Ho(d)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(d))&&fh(e,a);var B=y=o.createElement("link");C(B),Xn(B,"link",e),B._p=new Promise(function(at,gt){B.onload=at,B.onerror=gt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,uc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function hy(e,n){Sa.X(e,n);var a=Tr;if(a&&e){var o=Fa(a).hoistableScripts,u=Rr(e),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(e=_({src:e,async:!0},n),(n=Ci.get(u))&&hh(e,n),d=a.createElement("script"),C(d),Xn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function dy(e,n){Sa.M(e,n);var a=Tr;if(a&&e){var o=Fa(a).hoistableScripts,u=Rr(e),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Ci.get(u))&&hh(e,n),d=a.createElement("script"),C(d),Xn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Hg(e,n,a,o){var u=(u=st.current)?cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ar(a.href),a=Fa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ar(a.href);var d=Fa(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(Ho(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,a),d||py(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Fa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ar(e){return'href="'+he(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Xn(n,"link",a),C(n),e.head.appendChild(n))}function Rr(e){return'[src="'+he(e)+'"]'}function Go(e){return"script[async]"+e}function Vg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Xn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ar(a.href);var d=e.querySelector(Ho(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=Gg(a),(u=Ci.get(u))&&fh(o,u),d=(e.ownerDocument||e).createElement("link"),C(d);var y=d;return y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Xn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,e),n.instance=d;case"script":return d=Rr(a.src),(u=e.querySelector(Go(d)))?(n.instance=u,C(u),u):(o=a,(u=Ci.get(d))&&(o=_({},a),hh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Xn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function kg(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[xs]||d[Ce]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function Xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function my(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),d=n.querySelector(Ho(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=Gg(o),(u=Ci.get(u))&&fh(o,u),d=d.createElement("link"),C(d);var y=d;y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Xn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function _y(e,n){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&dh===0&&(dh=62500*QS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>dh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(vy,e),dc=null,hc.call(e))}function vy(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function xy(e,n,a,o,u,d,y,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function qg(e,n,a,o,u,d,y,R,B,at,gt,St){return e=new xy(e,n,a,y,B,at,gt,St,R),n=1,d===!0&&(n|=24),d=fi(3,null,null,n),e.current=d,d.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Zu(d),e}function Yg(e){return e?(e=ar,e):ar}function jg(e,n,a,o,u,d){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=qa(e,o,n),a!==null&&(ri(a,e,n),So(a,e,n))}function Zg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ph(e,n){Zg(e,n),(e=e.alternate)&&Zg(e,n)}function Kg(e){if(e.tag===13||e.tag===31){var n=bs(e,67108864);n!==null&&ri(n,e,67108864),ph(e,67108864)}}function Qg(e){if(e.tag===13||e.tag===31){var n=gi();n=dn(n);var a=bs(e,n);a!==null&&ri(a,e,n),ph(e,n)}}var mc=!0;function Sy(e,n,a,o){var u=F.T;F.T=null;var d=H.p;try{H.p=2,mh(e,n,a,o)}finally{H.p=d,F.T=u}}function yy(e,n,a,o){var u=F.T;F.T=null;var d=H.p;try{H.p=8,mh(e,n,a,o)}finally{H.p=d,F.T=u}}function mh(e,n,a,o){if(mc){var u=gh(o);if(u===null)eh(e,n,o,gc,a),$g(e,o);else if(Ey(u,e,n,a,o))o.stopPropagation();else if($g(e,o),n&4&&-1<My.indexOf(e)){for(;u!==null;){var d=Ia(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=J(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var B=1<<31-zt(y);R.entanglements[1]|=B,y&=~B}Wi(d),(Ve&6)===0&&(Jl=b()+500,zo(0))}}break;case 31:case 13:R=bs(d,2),R!==null&&ri(R,d,2),tc(),ph(d,2)}if(d=gh(o),d===null&&eh(e,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else eh(e,n,o,null,a)}}function gh(e){return e=_u(e),_h(e)}var gc=null;function _h(e){if(gc=null,e=za(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case _t:return 2;case yt:return 8;case pt:case Qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var vh=!1,is=null,as=null,ss=null,ko=new Map,Xo=new Map,rs=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ia(n),n!==null&&Kg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ey(e,n,a,o,u){switch(n){case"focusin":return is=Wo(is,e,n,a,o,u),!0;case"dragenter":return as=Wo(as,e,n,a,o,u),!0;case"mouseover":return ss=Wo(ss,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return ko.set(d,Wo(ko.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Xo.set(d,Wo(Xo.get(d)||null,e,n,a,o,u)),!0}return!1}function t_(e){var n=za(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,on(e.priority,function(){Qg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,on(e.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Ia(a),n!==null&&Kg(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){_c(e)&&a.delete(n)}function by(){vh=!1,is!==null&&_c(is)&&(is=null),as!==null&&_c(as)&&(as=null),ss!==null&&_c(ss)&&(ss=null),ko.forEach(e_),Xo.forEach(e_)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,by)))}var xc=null;function n_(e){xc!==e&&(xc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var d=Ia(a);d!==null&&(e.splice(n,3),n-=3,gf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(e){function n(B){return vc(B,e)}is!==null&&vc(is,e),as!==null&&vc(as,e),ss!==null&&vc(ss,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<rs.length;a++){var o=rs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[fn]||null;if(typeof d=="function")y||n_(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[fn]||null)R=y.formAction;else if(_h(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(e){this._internalRoot=e}Sc.prototype.render=xh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=gi();jg(a,o,e,n,null,null)},Sc.prototype.unmount=xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jg(e.current,2,null,e,null,null),tc(),n[Pn]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=_n();e={blockedOn:null,target:e,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,e),a===0&&t_(e)}};var a_=t.version;if(a_!=="19.2.3")throw Error(s(527,a_,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{At=yc.inject(Ty),Rt=yc}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=f0,d=h0,y=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=qg(e,1,!1,null,null,a,o,null,u,d,y,i_),e[Pn]=n.current,th(e),new xh(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=f0,y=h0,R=d0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=qg(e,1,!0,n,a??null,o,u,B,d,y,R,i_),n.context=Yg(null),a=n.current,o=gi(),o=dn(o),u=Wa(o),u.callback=null,qa(a,u,o),a=o,n.current.lanes=a,te(n,a),Wi(n),e[Pn]=n.current,th(e),new Sc(n)},Yo.version="19.2.3",Yo}var p_;function Py(){if(p_)return Mh.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=Oy(),Mh.exports}var zy=Py();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="182",qr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,m_=1,Fy=2,Yc=1,By=2,il=3,_s=0,ci=1,Ra=2,wa=0,Yr=1,g_=2,__=3,v_=4,Hy=5,ks=100,Gy=101,Vy=102,ky=103,Xy=104,Wy=200,qy=201,Yy=202,jy=203,ld=204,cd=205,Zy=206,Ky=207,Qy=208,Jy=209,$y=210,tM=211,eM=212,nM=213,iM=214,ud=0,fd=1,hd=2,Zr=3,dd=4,pd=5,md=6,gd=7,Ov=0,aM=1,sM=2,Ki=0,Pv=1,zv=2,Iv=3,Fv=4,Bv=5,Hv=6,Gv=7,Vv=300,Ys=301,Kr=302,_d=303,vd=304,lu=306,xd=1e3,Ca=1001,Sd=1002,Wn=1003,rM=1004,Mc=1005,Kn=1006,Ah=1007,Ws=1008,xi=1009,kv=1010,Xv=1011,sl=1012,up=1013,$i=1014,ji=1015,Ua=1016,fp=1017,hp=1018,rl=1020,Wv=35902,qv=35899,Yv=1021,jv=1022,Gi=1023,La=1026,qs=1027,Zv=1028,dp=1029,Qr=1030,pp=1031,mp=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,yd=35840,Md=35841,Ed=35842,bd=35843,Td=36196,Ad=37492,Rd=37496,Cd=37488,wd=37489,Dd=37490,Ud=37491,Ld=37808,Nd=37809,Od=37810,Pd=37811,zd=37812,Id=37813,Fd=37814,Bd=37815,Hd=37816,Gd=37817,Vd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,jd=36495,Zd=36283,Kd=36284,Qd=36285,Jd=36286,oM=3200,Kv=0,lM=1,ps="",Di="srgb",Jr="srgb-linear",eu="linear",Ye="srgb",wr=7680,x_=519,cM=512,uM=513,fM=514,gp=515,hM=516,dM=517,_p=518,pM=519,S_=35044,y_="300 es",Zi=2e3,nu=2001;function Qv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mM(){const r=iu("canvas");return r.style.display="block",r}const M_={};function E_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ce(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Oe(...r){const t="THREE."+r.shift();console.error(t,...r)}function ol(...r){const t=r.join(" ");t in M_||(M_[t]=!0,ce(...r))}function gM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class js{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,$d=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]).toLowerCase()}function Re(r,t,i){return Math.max(t,Math.min(i,r))}function _M(r,t){return(r%t+t)%t}function Rh(r,t,i){return(1-i)*r+i*t}function jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vM={DEG2RAD:Jc};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Na{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==x||p!==S||g!==E){let M=m*x+p*S+g*E+_*T;M<0&&(x=-x,S=-S,E=-E,T=-T,M=-M);let v=1-h;if(M<.9995){const w=Math.acos(M),U=Math.sin(w);v=Math.sin(v*w)/U,h=Math.sin(h*w)/U,m=m*v+x*h,p=p*v+S*h,g=g*v+E*h,_=_*v+T*h}else{m=m*v+x*h,p=p*v+S*h,g=g*v+E*h,_=_*v+T*h;const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*_+m*S-p*x,t[i+1]=m*E+g*x+p*_-h*S,t[i+2]=p*E+g*S+h*x-m*_,t[i+3]=g*E-h*_-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"YZX":this._x=x*g*_+p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_-x*S*E;break;case"XZY":this._x=x*g*_-p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_+x*S*E;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>h&&s>_){const S=2*Math.sqrt(1+s-h-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-s-_);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(b_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new Y,b_=new Na;class Se{constructor(t,i,s,l,c,f,h,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],S=s[5],E=s[8],T=l[0],M=l[3],v=l[6],w=l[1],U=l[4],D=l[7],N=l[2],z=l[5],O=l[8];return c[0]=f*T+h*w+m*N,c[3]=f*M+h*U+m*z,c[6]=f*v+h*D+m*O,c[1]=p*T+g*w+_*N,c[4]=p*M+g*U+_*z,c[7]=p*v+g*D+_*O,c[2]=x*T+S*w+E*N,c[5]=x*M+S*U+E*z,c[8]=x*v+S*D+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,x=h*m-g*c,S=p*c-f*m,E=i*_+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=S*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(wh.makeScale(t,i)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,i){return this.premultiply(wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new Se,T_=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const r={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ye&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ye&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ps?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Jr]:{primaries:t,whitePoint:s,transfer:eu,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const Pe=xM();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class SM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Dr===void 0&&(Dr=iu("canvas")),Dr.width=t.width,Dr.height=t.height;const l=Dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=iu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Da(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dh(l[f].image)):c.push(Dh(l[f]))}else c=Dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let MM=0;const Uh=new Y;class $n extends js{constructor(t=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,s=Ca,l=Ca,c=Kn,f=Ws,h=Gi,m=xi,p=$n.DEFAULT_ANISOTROPY,g=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=cl(),this.name="",this.source=new vp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Vv;$n.DEFAULT_ANISOTROPY=1;class gn{constructor(t=0,i=0,s=0,l=1){gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],S=m[5],E=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(S+1)/2,N=(v+1)/2,z=(g+x)/4,O=(_+T)/4,V=(E+M)/4;return U>D&&U>N?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=z/s,c=O/s):D>N?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=z/l,c=V/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=O/c,l=V/c),this.set(s,l,c,i),this}let w=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(_-T)/w,this.z=(x-g)/w,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends js{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new $n(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends EM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Jv extends $n{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends $n{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ec.copy(s.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),bc.subVectors(this.max,Zo),Ur.subVectors(t.a,Zo),Lr.subVectors(t.b,Zo),Nr.subVectors(t.c,Zo),ls.subVectors(Lr,Ur),cs.subVectors(Nr,Lr),Is.subVectors(Ur,Nr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Is.z,Is.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Is.z,0,-Is.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Is.y,Is.x,0];return!Lh(i,Ur,Lr,Nr,bc)||(i=[1,0,0,0,1,0,0,0,1],!Lh(i,Ur,Lr,Nr,bc))?!1:(Tc.crossVectors(ls,cs),i=[Tc.x,Tc.y,Tc.z],Lh(i,Ur,Lr,Nr,bc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ii=new Y,Ec=new ul,Ur=new Y,Lr=new Y,Nr=new Y,ls=new Y,cs=new Y,Is=new Y,Zo=new Y,bc=new Y,Tc=new Y,Fs=new Y;function Lh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Fs.fromArray(r,c);const h=l.x*Math.abs(Fs.x)+l.y*Math.abs(Fs.y)+l.z*Math.abs(Fs.z),m=t.dot(Fs),p=i.dot(Fs),g=s.dot(Fs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const TM=new ul,Ko=new Y,Nh=new Y;class cu{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):TM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Nh)),this.expandByPoint(Ko.copy(t.center).sub(Nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ma=new Y,Oh=new Y,Ac=new Y,us=new Y,Ph=new Y,Rc=new Y,zh=new Y;class uu{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Oh.copy(t).add(i).multiplyScalar(.5),Ac.copy(i).sub(t).normalize(),us.copy(this.origin).sub(Oh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ac),h=us.dot(this.direction),m=-us.dot(Ac),p=us.lengthSq(),g=Math.abs(1-f*f);let _,x,S,E;if(g>0)if(_=f*m-h,x=f*h-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,S=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Oh).addScaledVector(Ac,x),S}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){Ph.subVectors(i,t),Rc.subVectors(s,t),zh.crossVectors(Ph,Rc);let f=this.direction.dot(zh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;us.subVectors(this.origin,t);const m=h*this.direction.dot(Rc.crossVectors(us,Rc));if(m<0)return null;const p=h*this.direction.dot(Ph.cross(us));if(p<0||m+p>f)return null;const g=-h*us.dot(zh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,i,s,l,c,f,h,m,p,g,_,x,S,E,T,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,_,x,S,E,T,M)}set(t,i,s,l,c,f,h,m,p,g,_,x,S,E,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Or.setFromMatrixColumn(t,0).length(),c=1/Or.setFromMatrixColumn(t,1).length(),f=1/Or.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,S=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,S=m*_,E=p*g,T=p*_;i[0]=x+T*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,S=m*_,E=p*g,T=p*_;i[0]=x-T*h,i[4]=-f*_,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,S=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*p-S,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-x*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*_+E,i[10]=x-T*_}else if(t.order==="XZY"){const x=f*m,S=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=h*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AM,t,RM)}lookAt(t,i,s){const l=this.elements;return _i.subVectors(t,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),fs.crossVectors(s,_i),fs.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),fs.crossVectors(s,_i)),fs.normalize(),Cc.crossVectors(_i,fs),l[0]=fs.x,l[4]=Cc.x,l[8]=_i.x,l[1]=fs.y,l[5]=Cc.y,l[9]=_i.y,l[2]=fs.z,l[6]=Cc.z,l[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],S=s[13],E=s[2],T=s[6],M=s[10],v=s[14],w=s[3],U=s[7],D=s[11],N=s[15],z=l[0],O=l[4],V=l[8],A=l[12],L=l[1],k=l[5],j=l[9],$=l[13],ct=l[2],ut=l[6],F=l[10],H=l[14],rt=l[3],Tt=l[7],Et=l[11],I=l[15];return c[0]=f*z+h*L+m*ct+p*rt,c[4]=f*O+h*k+m*ut+p*Tt,c[8]=f*V+h*j+m*F+p*Et,c[12]=f*A+h*$+m*H+p*I,c[1]=g*z+_*L+x*ct+S*rt,c[5]=g*O+_*k+x*ut+S*Tt,c[9]=g*V+_*j+x*F+S*Et,c[13]=g*A+_*$+x*H+S*I,c[2]=E*z+T*L+M*ct+v*rt,c[6]=E*O+T*k+M*ut+v*Tt,c[10]=E*V+T*j+M*F+v*Et,c[14]=E*A+T*$+M*H+v*I,c[3]=w*z+U*L+D*ct+N*rt,c[7]=w*O+U*k+D*ut+N*Tt,c[11]=w*V+U*j+D*F+N*Et,c[15]=w*A+U*$+D*H+N*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],S=t[14],E=t[3],T=t[7],M=t[11],v=t[15],w=m*S-p*x,U=h*S-p*_,D=h*x-m*_,N=f*S-p*g,z=f*x-m*g,O=f*_-h*g;return i*(T*w-M*U+v*D)-s*(E*w-M*N+v*z)+l*(E*U-T*N+v*O)-c*(E*D-T*z+M*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],S=t[11],E=t[12],T=t[13],M=t[14],v=t[15],w=_*M*p-T*x*p+T*m*S-h*M*S-_*m*v+h*x*v,U=E*x*p-g*M*p-E*m*S+f*M*S+g*m*v-f*x*v,D=g*T*p-E*_*p+E*h*S-f*T*S-g*h*v+f*_*v,N=E*_*m-g*T*m-E*h*x+f*T*x+g*h*M-f*_*M,z=i*w+s*U+l*D+c*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=w*O,t[1]=(T*x*c-_*M*c-T*l*S+s*M*S+_*l*v-s*x*v)*O,t[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*v+s*m*v)*O,t[3]=(_*m*c-h*x*c-_*l*p+s*x*p+h*l*S-s*m*S)*O,t[4]=U*O,t[5]=(g*M*c-E*x*c+E*l*S-i*M*S-g*l*v+i*x*v)*O,t[6]=(E*m*c-f*M*c-E*l*p+i*M*p+f*l*v-i*m*v)*O,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*S+i*m*S)*O,t[8]=D*O,t[9]=(E*_*c-g*T*c-E*s*S+i*T*S+g*s*v-i*_*v)*O,t[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*v+i*h*v)*O,t[11]=(g*h*c-f*_*c-g*s*p+i*_*p+f*s*S-i*h*S)*O,t[12]=N*O,t[13]=(g*T*l-E*_*l+E*s*x-i*T*x-g*s*M+i*_*M)*O,t[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*M-i*h*M)*O,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*x+i*h*x)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,x=c*p,S=c*g,E=c*_,T=f*g,M=f*_,v=h*_,w=m*p,U=m*g,D=m*_,N=s.x,z=s.y,O=s.z;return l[0]=(1-(T+v))*N,l[1]=(S+D)*N,l[2]=(E-U)*N,l[3]=0,l[4]=(S-D)*z,l[5]=(1-(x+v))*z,l[6]=(M+w)*z,l[7]=0,l[8]=(E+U)*O,l[9]=(M-w)*O,l[10]=(1-(x+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Or.set(l[0],l[1],l[2]).length();const f=Or.set(l[4],l[5],l[6]).length(),h=Or.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Fi.copy(this);const p=1/c,g=1/f,_=1/h;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Zi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Zi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===nu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Zi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Zi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===nu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Or=new Y,Fi=new un,AM=new Y(0,0,0),RM=new Y(1,1,1),fs=new Y,Cc=new Y,_i=new Y,R_=new un,C_=new Na;class ta{constructor(t=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return R_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(R_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return C_.setFromEuler(this),this.setFromQuaternion(C_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let CM=0;const w_=new Y,Pr=new Na,Ea=new un,wc=new Y,Qo=new Y,wM=new Y,DM=new Na,D_=new Y(1,0,0),U_=new Y(0,1,0),L_=new Y(0,0,1),N_={type:"added"},UM={type:"removed"},zr={type:"childadded",child:null},Ih={type:"childremoved",child:null};class On extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new Y,i=new ta,s=new Na,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new Se}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(L_,t)}translateOnAxis(t,i){return w_.copy(t).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(L_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?wc.copy(t):wc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Qo,wc,this.up):Ea.lookAt(wc,Qo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Pr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(N_),zr.child=t,this.dispatchEvent(zr),zr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(UM),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(N_),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,wM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,DM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new Y(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new Y,ba=new Y,Fh=new Y,Ta=new Y,Ir=new Y,Fr=new Y,O_=new Y,Bh=new Y,Hh=new Y,Gh=new Y,Vh=new gn,kh=new gn,Xh=new gn;class Hi{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),ba.subVectors(s,i),Fh.subVectors(t,i);const f=Bi.dot(Bi),h=Bi.dot(ba),m=Bi.dot(Fh),p=ba.dot(ba),g=ba.dot(Fh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(f,Ta.y),m.addScaledVector(h,Ta.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Vh,c.x),f.addScaledVector(kh,c.y),f.addScaledVector(Xh,c.z),f}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),ba.subVectors(t,i),Bi.cross(ba).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Bi.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Hi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Ir.subVectors(l,s),Fr.subVectors(c,s),Bh.subVectors(t,s);const m=Ir.dot(Bh),p=Fr.dot(Bh);if(m<=0&&p<=0)return i.copy(s);Hh.subVectors(t,l);const g=Ir.dot(Hh),_=Fr.dot(Hh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ir,f);Gh.subVectors(t,c);const S=Ir.dot(Gh),E=Fr.dot(Gh);if(E>=0&&S<=E)return i.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Fr,h);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return O_.subVectors(c,l),h=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(O_,h);const v=1/(M+T+x);return f=T*v,h=x*v,i.copy(s).addScaledVector(Ir,f).addScaledVector(Fr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Wh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ne{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Pe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Pe.workingColorSpace){if(t=_M(t,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Wh(f,c,t+1/3),this.g=Wh(f,c,t),this.b=Wh(f,c,t-1/3)}return Pe.colorSpaceToWorking(this,l),this}setStyle(t,i=Di){function s(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Di){const s=$v[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return Pe.workingToColorSpace(jn.copy(this),t),Math.round(Re(jn.r*255,0,255))*65536+Math.round(Re(jn.g*255,0,255))*256+Math.round(Re(jn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pe.workingColorSpace){Pe.workingToColorSpace(jn.copy(this),i);const s=jn.r,l=jn.g,c=jn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Pe.workingColorSpace){return Pe.workingToColorSpace(jn.copy(this),i),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=Di){Pe.workingToColorSpace(jn.copy(this),t);const i=jn.r,s=jn.g,l=jn.b;return t!==Di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+i,hs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(hs),t.getHSL(Dc);const s=Rh(hs.h,Dc.h,i),l=Rh(hs.s,Dc.s,i),c=Rh(hs.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Ne;Ne.NAMES=$v;let LM=0;class eo extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Yr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==_s&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ld&&(s.blendSrc=this.blendSrc),this.blendDst!==cd&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fu extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tn=new Y,Uc=new de;let NM=0;class Ji{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=S_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(t),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=jo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=oi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array),c=oi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==S_&&(t.usage=this.usage),t}}class tx extends Ji{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ex extends Ji{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class hn extends Ji{constructor(t,i,s){super(new Float32Array(t),i,s)}}let OM=0;const wi=new un,qh=new On,Br=new Y,vi=new ul,Jo=new ul,Ln=new Y;class ti extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qv(t)?ex:tx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new hn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(vi.min,Jo.min),vi.expandByPoint(Ln),Ln.addVectors(vi.max,Jo.max),vi.expandByPoint(Ln)):(vi.expandByPoint(Jo.min),vi.expandByPoint(Jo.max))}vi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Ln.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Ln));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Ln.fromBufferAttribute(h,p),m&&(Br.fromBufferAttribute(t,p),Ln.add(Br)),l=Math.max(l,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let V=0;V<s.count;V++)h[V]=new Y,m[V]=new Y;const p=new Y,g=new Y,_=new Y,x=new de,S=new de,E=new de,T=new Y,M=new Y;function v(V,A,L){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,A),E.fromBufferAttribute(c,L),g.sub(p),_.sub(p),S.sub(x),E.sub(x);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(k),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(k),h[V].add(T),h[A].add(T),h[L].add(T),m[V].add(M),m[A].add(M),m[L].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let V=0,A=w.length;V<A;++V){const L=w[V],k=L.start,j=L.count;for(let $=k,ct=k+j;$<ct;$+=3)v(t.getX($+0),t.getX($+1),t.getX($+2))}const U=new Y,D=new Y,N=new Y,z=new Y;function O(V){N.fromBufferAttribute(l,V),z.copy(N);const A=h[V];U.copy(A),U.sub(N.multiplyScalar(N.dot(A))).normalize(),D.crossVectors(z,A);const k=D.dot(m[V])<0?-1:1;f.setXYZW(V,U.x,U.y,U.z,k)}for(let V=0,A=w.length;V<A;++V){const L=w[V],k=L.start,j=L.count;for(let $=k,ct=k+j;$<ct;$+=3)O(t.getX($+0)),O(t.getX($+1)),O(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new Y,c=new Y,f=new Y,h=new Y,m=new Y,p=new Y,g=new Y,_=new Y;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Ln.fromBufferAttribute(t,i),Ln.normalize(),t.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?S=m[T]*h.data.stride+h.offset:S=m[T]*g;for(let v=0;v<g;v++)x[E++]=p[S++]}return new Ji(x,g,_)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=t(x,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P_=new un,Bs=new uu,Lc=new cu,z_=new Y,Nc=new Y,Oc=new Y,Pc=new Y,Yh=new Y,zc=new Y,I_=new Y,Ic=new Y;class Li extends On{constructor(t=new ti,i=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Yh.fromBufferAttribute(_,t),f?zc.addScaledVector(Yh,g):zc.addScaledVector(Yh.sub(i),g))}i.add(zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),Bs.copy(t.ray).recast(t.near),!(Lc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Lc,z_)===null||Bs.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(P_.copy(c).invert(),Bs.copy(t.ray).applyMatrix4(P_),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Bs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],v=f[M.materialIndex],w=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=w,N=U;D<N;D+=3){const z=h.getX(D),O=h.getX(D+1),V=h.getX(D+2);l=Fc(this,v,t,s,p,g,_,z,O,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let M=E,v=T;M<v;M+=3){const w=h.getX(M),U=h.getX(M+1),D=h.getX(M+2);l=Fc(this,f,t,s,p,g,_,w,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],v=f[M.materialIndex],w=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=w,N=U;D<N;D+=3){const z=D,O=D+1,V=D+2;l=Fc(this,v,t,s,p,g,_,z,O,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=E,v=T;M<v;M+=3){const w=M,U=M+1,D=M+2;l=Fc(this,f,t,s,p,g,_,w,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function PM(r,t,i,s,l,c,f,h){let m;if(t.side===ci?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===_s,h),m===null)return null;Ic.copy(h),Ic.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:r}}function Fc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Nc),r.getVertexPosition(m,Oc),r.getVertexPosition(p,Pc);const g=PM(r,t,i,s,Nc,Oc,Pc,I_);if(g){const _=new Y;Hi.getBarycoord(I_,Nc,Oc,Pc,_),l&&(g.uv=Hi.getInterpolatedAttribute(l,h,m,p,_,new de)),c&&(g.uv1=Hi.getInterpolatedAttribute(c,h,m,p,_,new de)),f&&(g.normal=Hi.getInterpolatedAttribute(f,h,m,p,_,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Y,materialIndex:0};Hi.getNormal(Nc,Oc,Pc,x.normal),g.face=x,g.barycoord=_}return g}class fl extends ti{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(_,2));function E(T,M,v,w,U,D,N,z,O,V,A){const L=D/O,k=N/V,j=D/2,$=N/2,ct=z/2,ut=O+1,F=V+1;let H=0,rt=0;const Tt=new Y;for(let Et=0;Et<F;Et++){const I=Et*k-$;for(let et=0;et<ut;et++){const xt=et*L-j;Tt[T]=xt*w,Tt[M]=I*U,Tt[v]=ct,p.push(Tt.x,Tt.y,Tt.z),Tt[T]=0,Tt[M]=0,Tt[v]=z>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),_.push(et/O),_.push(1-Et/V),H+=1}}for(let Et=0;Et<V;Et++)for(let I=0;I<O;I++){const et=x+I+ut*Et,xt=x+I+ut*(Et+1),wt=x+(I+1)+ut*(Et+1),Ft=x+(I+1)+ut*Et;m.push(et,xt,Ft),m.push(xt,wt,Ft),rt+=6}h.addGroup(S,rt,A),S+=rt,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $r(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Jn(r){const t={};for(let i=0;i<r.length;i++){const s=$r(r[i]);for(const l in s)t[l]=s[l]}return t}function zM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function nx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const IM={clone:$r,merge:Jn};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$r(t.uniforms),this.uniformsGroups=zM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ix extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new Y,F_=new de,B_=new de;class Ui extends ix{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,i){return this.getViewBounds(t,F_,B_),i.subVectors(B_,F_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Hr=-90,Gr=1;class HM extends On{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Hr,Gr,t,i);l.layers=this.layers,this.add(l);const c=new Ui(Hr,Gr,t,i);c.layers=this.layers,this.add(c);const f=new Ui(Hr,Gr,t,i);f.layers=this.layers,this.add(f);const h=new Ui(Hr,Gr,t,i);h.layers=this.layers,this.add(h);const m=new Ui(Hr,Gr,t,i);m.layers=this.layers,this.add(m);const p=new Ui(Hr,Gr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ax extends $n{constructor(t=[],i=Ys,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sx extends Qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ax(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:$r(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ci,blending:wa});c.uniforms.tEquirect.value=i;const f=new Li(l,c),h=i.minFilter;return i.minFilter===Ws&&(i.minFilter=Kn),new HM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Bc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class VM extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class kM extends $n{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Wn,g=Wn,_,x){super(null,f,h,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new Y,XM=new Y,WM=new Se;class Aa{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Zh.subVectors(s,i).cross(XM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Zh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||WM.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new cu,qM=new de(.5,.5),Hc=new Y;class Sp{constructor(t=new Aa,i=new Aa,s=new Aa,l=new Aa,c=new Aa,f=new Aa){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Zi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],S=c[7],E=c[8],T=c[9],M=c[10],v=c[11],w=c[12],U=c[13],D=c[14],N=c[15];if(l[0].setComponents(p-f,S-g,v-E,N-w).normalize(),l[1].setComponents(p+f,S+g,v+E,N+w).normalize(),l[2].setComponents(p+h,S+_,v+T,N+U).normalize(),l[3].setComponents(p-h,S-_,v-T,N-U).normalize(),s)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,S-x,v-M,N-D).normalize();else if(l[4].setComponents(p-m,S-x,v-M,N-D).normalize(),i===Zi)l[5].setComponents(p+m,S+x,v+M,N+D).normalize();else if(i===nu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){Hs.center.set(0,0,0);const i=qM.distanceTo(t.center);return Hs.radius=.7071067811865476+i,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yp extends eo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const au=new Y,su=new Y,H_=new un,$o=new uu,Gc=new cu,Kh=new Y,G_=new Y;class rx extends On{constructor(t=new ti,i=new yp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)au.fromBufferAttribute(i,l-1),su.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=au.distanceTo(su);t.setAttribute("lineDistance",new hn(s,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;H_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(H_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=p){const v=g.getX(T),w=g.getX(T+1),U=Vc(this,t,$o,m,v,w,T);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(S),v=Vc(this,t,$o,m,T,M,E-1);v&&i.push(v)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=p){const v=Vc(this,t,$o,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Vc(this,t,$o,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(au.fromBufferAttribute(h,l),su.fromBufferAttribute(h,c),i.distanceSqToSegment(au,su,Kh,G_)>s)return;Kh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Kh);if(!(p<t.near||p>t.far))return{distance:p,point:G_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const V_=new Y,k_=new Y;class YM extends rx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)V_.fromBufferAttribute(i,l),k_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+V_.distanceTo(k_);t.setAttribute("lineDistance",new hn(s,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends $n{constructor(t,i,s=$i,l,c,f,h=Wn,m=Wn,p,g=La,_=1){if(g!==La&&g!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jM extends ll{constructor(t,i=$i,s=Ys,l,c,f=Wn,h=Wn,m,p=La){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ox extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mp extends ti{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],S=[];let E=0;const T=[],M=s/2;let v=0;w(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(x,3)),this.setAttribute("uv",new hn(S,2));function w(){const D=new Y,N=new Y;let z=0;const O=(i-t)/s;for(let V=0;V<=c;V++){const A=[],L=V/c,k=L*(i-t)+t;for(let j=0;j<=l;j++){const $=j/l,ct=$*m+h,ut=Math.sin(ct),F=Math.cos(ct);N.x=k*ut,N.y=-L*s+M,N.z=k*F,_.push(N.x,N.y,N.z),D.set(ut,O,F).normalize(),x.push(D.x,D.y,D.z),S.push($,1-L),A.push(E++)}T.push(A)}for(let V=0;V<l;V++)for(let A=0;A<c;A++){const L=T[A][V],k=T[A+1][V],j=T[A+1][V+1],$=T[A][V+1];(t>0||A!==0)&&(g.push(L,k,$),z+=3),(i>0||A!==c-1)&&(g.push(k,j,$),z+=3)}p.addGroup(v,z,0),v+=z}function U(D){const N=E,z=new de,O=new Y;let V=0;const A=D===!0?t:i,L=D===!0?1:-1;for(let j=1;j<=l;j++)_.push(0,M*L,0),x.push(0,L,0),S.push(.5,.5),E++;const k=E;for(let j=0;j<=l;j++){const ct=j/l*m+h,ut=Math.cos(ct),F=Math.sin(ct);O.x=A*F,O.y=M*L,O.z=A*ut,_.push(O.x,O.y,O.z),x.push(0,L,0),z.x=ut*.5+.5,z.y=F*.5*L+.5,S.push(z.x,z.y),E++}for(let j=0;j<l;j++){const $=N+j,ct=k+j;D===!0?g.push(ct,ct+1,$):g.push(ct+1,ct,$),V+=3}p.addGroup(v,V,D===!0?1:2),v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ep extends Mp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new Ep(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hu extends ti{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,x=i/m,S=[],E=[],T=[],M=[];for(let v=0;v<g;v++){const w=v*x-f;for(let U=0;U<p;U++){const D=U*_-c;E.push(D,-w,0),T.push(0,0,1),M.push(U/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<h;w++){const U=w+p*v,D=w+p*(v+1),N=w+1+p*(v+1),z=w+1+p*v;S.push(U,D,z),S.push(D,N,z)}this.setIndex(S),this.setAttribute("position",new hn(E,3)),this.setAttribute("normal",new hn(T,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class bp extends ti{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new Y,x=new Y,S=[],E=[],T=[],M=[];for(let v=0;v<=s;v++){const w=[],U=v/s;let D=0;v===0&&f===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let N=0;N<=i;N++){const z=N/i;_.x=-t*Math.cos(l+z*c)*Math.sin(f+U*h),_.y=t*Math.cos(f+U*h),_.z=t*Math.sin(l+z*c)*Math.sin(f+U*h),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),M.push(z+D,1-U),w.push(p++)}g.push(w)}for(let v=0;v<s;v++)for(let w=0;w<i;w++){const U=g[v][w+1],D=g[v][w],N=g[v+1][w],z=g[v+1][w+1];(v!==0||f>0)&&S.push(U,D,z),(v!==s-1||m<Math.PI)&&S.push(D,N,z)}this.setIndex(S),this.setAttribute("position",new hn(E,3)),this.setAttribute("normal",new hn(T,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ru extends ti{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new Y,_=new Y,x=new Y;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const T=E/l*c,M=S/s*Math.PI*2;_.x=(t+i*Math.cos(M))*Math.cos(T),_.y=(t+i*Math.cos(M))*Math.sin(T),_.z=i*Math.sin(M),h.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const T=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,v=(l+1)*(S-1)+E,w=(l+1)*S+E;f.push(T,M,w),f.push(M,v,w)}this.setIndex(f),this.setAttribute("position",new hn(h,3)),this.setAttribute("normal",new hn(m,3)),this.setAttribute("uv",new hn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ZM extends ea{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class KM extends eo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kv,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class QM extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JM extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lx extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Qh=new un,X_=new Y,W_=new Y;class $M{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;X_.setFromMatrixPosition(t.matrixWorld),i.position.copy(X_),W_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(W_),i.updateMatrixWorld(),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tp extends ix{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tE extends $M{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q_ extends lx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new tE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class eE extends lx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class nE extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Y_=new un;class j_{constructor(t,i,s=0,l=1/0){this.ray=new uu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Oe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Y_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Y_),this}intersectObject(t,i=!0,s=[]){return tp(t,this,s,i),s.sort(Z_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)tp(t[l],this,s,i);return s.sort(Z_),s}}function Z_(r,t){return r.distance-t.distance}function tp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)tp(c[f],t,i,!0)}}class K_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Re(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iE extends YM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Ne(s),l=new Ne(l);const c=i/2,f=t/i,h=t/2,m=[],p=[];for(let x=0,S=0,E=-h;x<=i;x++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const T=x===c?s:l;T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3}const g=new ti;g.setAttribute("position",new hn(m,3)),g.setAttribute("color",new hn(p,3));const _=new yp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Q_=new Y;let kc,Jh;class $h extends On{constructor(t=new Y(0,0,1),i=new Y(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",kc===void 0&&(kc=new ti,kc.setAttribute("position",new hn([0,0,0,0,1,0],3)),Jh=new Ep(.5,1,5,1),Jh.translate(0,-.5,0)),this.position.copy(i),this.line=new rx(kc,new yp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Li(Jh,new fu({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Q_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Q_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class aE extends js{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function J_(r,t,i,s){const l=sE(s);switch(i){case Yv:return r*t;case Zv:return r*t/l.components*l.byteLength;case dp:return r*t/l.components*l.byteLength;case Qr:return r*t*2/l.components*l.byteLength;case pp:return r*t*2/l.components*l.byteLength;case jv:return r*t*3/l.components*l.byteLength;case Gi:return r*t*4/l.components*l.byteLength;case mp:return r*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:case bd:return Math.max(r,16)*Math.max(t,8)/4;case yd:case Ed:return Math.max(r,8)*Math.max(t,8)/2;case Td:case Ad:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rd:case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sE(r){switch(r){case xi:case kv:return{byteLength:1,components:1};case sl:case Xv:case Ua:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case $i:case up:case ji:return{byteLength:4,components:1};case Wv:case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rE(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lE=`#ifdef USE_ALPHAHASH
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
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,pE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mE=`#ifdef USE_BATCHING
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
#endif`,gE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DE=`#define PI 3.141592653589793
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
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LE=`vec3 transformedNormal = objectNormal;
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
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
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
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
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
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
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
#endif`,sb=`uniform sampler2D dfgLUT;
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
}`,rb=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gb=`#if defined( USE_POINTS_UV )
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
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wb=`float getShadowMask() {
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
}`,qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,Kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o1=`uniform sampler2D t2D;
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,p1=`#define DISTANCE
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
}`,m1=`#define DISTANCE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
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
}`,x1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,M1=`#define LAMBERT
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
}`,E1=`#define LAMBERT
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
}`,b1=`#define MATCAP
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
}`,T1=`#define MATCAP
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
}`,A1=`#define NORMAL
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
}`,R1=`#define NORMAL
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
}`,C1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,D1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,L1=`#define TOON
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
}`,N1=`#define TOON
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
}`,O1=`uniform float size;
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
}`,P1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,B1=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:oE,alphahash_pars_fragment:lE,alphamap_fragment:cE,alphamap_pars_fragment:uE,alphatest_fragment:fE,alphatest_pars_fragment:hE,aomap_fragment:dE,aomap_pars_fragment:pE,batching_pars_vertex:mE,batching_vertex:gE,begin_vertex:_E,beginnormal_vertex:vE,bsdfs:xE,iridescence_fragment:SE,bumpmap_pars_fragment:yE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:EE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:TE,color_fragment:AE,color_pars_fragment:RE,color_pars_vertex:CE,color_vertex:wE,common:DE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:LE,displacementmap_pars_vertex:NE,displacementmap_vertex:OE,emissivemap_fragment:PE,emissivemap_pars_fragment:zE,colorspace_fragment:IE,colorspace_pars_fragment:FE,envmap_fragment:BE,envmap_common_pars_fragment:HE,envmap_pars_fragment:GE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:$E,envmap_vertex:kE,fog_vertex:XE,fog_pars_vertex:WE,fog_fragment:qE,fog_pars_fragment:YE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:ZE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:QE,lights_pars_begin:JE,lights_toon_fragment:tb,lights_toon_pars_fragment:eb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:ab,lights_physical_pars_fragment:sb,lights_fragment_begin:rb,lights_fragment_maps:ob,lights_fragment_end:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:hb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:vb,morphinstance_vertex:xb,morphcolor_vertex:Sb,morphnormal_vertex:yb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Eb,normal_fragment_begin:bb,normal_fragment_maps:Tb,normal_pars_fragment:Ab,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Db,clearcoat_normal_fragment_maps:Ub,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Nb,opaque_fragment:Ob,packing:Pb,premultiplied_alpha_fragment:zb,project_vertex:Ib,dithering_fragment:Fb,dithering_pars_fragment:Bb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:kb,shadowmap_vertex:Xb,shadowmask_pars_fragment:Wb,skinbase_vertex:qb,skinning_pars_vertex:Yb,skinning_vertex:jb,skinnormal_vertex:Zb,specularmap_fragment:Kb,specularmap_pars_fragment:Qb,tonemapping_fragment:Jb,tonemapping_pars_fragment:$b,transmission_fragment:t1,transmission_pars_fragment:e1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:a1,worldpos_vertex:s1,background_vert:r1,background_frag:o1,backgroundCube_vert:l1,backgroundCube_frag:c1,cube_vert:u1,cube_frag:f1,depth_vert:h1,depth_frag:d1,distance_vert:p1,distance_frag:m1,equirect_vert:g1,equirect_frag:_1,linedashed_vert:v1,linedashed_frag:x1,meshbasic_vert:S1,meshbasic_frag:y1,meshlambert_vert:M1,meshlambert_frag:E1,meshmatcap_vert:b1,meshmatcap_frag:T1,meshnormal_vert:A1,meshnormal_frag:R1,meshphong_vert:C1,meshphong_frag:w1,meshphysical_vert:D1,meshphysical_frag:U1,meshtoon_vert:L1,meshtoon_frag:N1,points_vert:O1,points_frag:P1,shadow_vert:z1,shadow_frag:I1,sprite_vert:F1,sprite_frag:B1},Ht={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Yi={basic:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Jn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Jn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Jn([Ht.points,Ht.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Jn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Jn([Ht.common,Ht.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Jn([Ht.sprite,Ht.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Jn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Jn([Ht.lights,Ht.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Yi.physical={uniforms:Jn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Xc={r:0,b:0,g:0},Gs=new ta,H1=new un;function G1(r,t,i,s,l,c,f){const h=new Ne(0);let m=c===!0?0:1,p,g,_=null,x=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function T(U){let D=!1;const N=E(U);N===null?v(h,m):N&&N.isColor&&(v(N,1),D=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const N=E(D);N&&(N.isCubeTexture||N.mapping===lu)?(g===void 0&&(g=new Li(new fl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:$r(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Gs.copy(D.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(Gs)),g.material.toneMapped=Pe.getTransfer(N.colorSpace)!==Ye,(_!==N||x!==N.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=N,x=N.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Li(new hu(2,2),new ea({name:"BackgroundMaterial",uniforms:$r(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(N.colorSpace)!==Ye,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,x=N.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,D){U.getRGB(Xc,nx(r)),s.buffers.color.setClear(Xc.r,Xc.g,Xc.b,D,f)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:T,addToRenderList:M,dispose:w}}function V1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(L,k,j,$,ct){let ut=!1;const F=_($,j,k);c!==F&&(c=F,p(c.object)),ut=S(L,$,j,ct),ut&&E(L,$,j,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,D(L,k,j,$),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(L){return r.bindVertexArray(L)}function g(L){return r.deleteVertexArray(L)}function _(L,k,j){const $=j.wireframe===!0;let ct=s[L.id];ct===void 0&&(ct={},s[L.id]=ct);let ut=ct[k.id];ut===void 0&&(ut={},ct[k.id]=ut);let F=ut[$];return F===void 0&&(F=x(m()),ut[$]=F),F}function x(L){const k=[],j=[],$=[];for(let ct=0;ct<i;ct++)k[ct]=0,j[ct]=0,$[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:$,object:L,attributes:{},index:null}}function S(L,k,j,$){const ct=c.attributes,ut=k.attributes;let F=0;const H=j.getAttributes();for(const rt in H)if(H[rt].location>=0){const Et=ct[rt];let I=ut[rt];if(I===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),Et===void 0||Et.attribute!==I||I&&Et.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==$}function E(L,k,j,$){const ct={},ut=k.attributes;let F=0;const H=j.getAttributes();for(const rt in H)if(H[rt].location>=0){let Et=ut[rt];Et===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(Et=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(Et=L.instanceColor));const I={};I.attribute=Et,Et&&Et.data&&(I.data=Et.data),ct[rt]=I,F++}c.attributes=ct,c.attributesNum=F,c.index=$}function T(){const L=c.newAttributes;for(let k=0,j=L.length;k<j;k++)L[k]=0}function M(L){v(L,0)}function v(L,k){const j=c.newAttributes,$=c.enabledAttributes,ct=c.attributeDivisors;j[L]=1,$[L]===0&&(r.enableVertexAttribArray(L),$[L]=1),ct[L]!==k&&(r.vertexAttribDivisor(L,k),ct[L]=k)}function w(){const L=c.newAttributes,k=c.enabledAttributes;for(let j=0,$=k.length;j<$;j++)k[j]!==L[j]&&(r.disableVertexAttribArray(j),k[j]=0)}function U(L,k,j,$,ct,ut,F){F===!0?r.vertexAttribIPointer(L,k,j,ct,ut):r.vertexAttribPointer(L,k,j,$,ct,ut)}function D(L,k,j,$){T();const ct=$.attributes,ut=j.getAttributes(),F=k.defaultAttributeValues;for(const H in ut){const rt=ut[H];if(rt.location>=0){let Tt=ct[H];if(Tt===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),Tt!==void 0){const Et=Tt.normalized,I=Tt.itemSize,et=t.get(Tt);if(et===void 0)continue;const xt=et.buffer,wt=et.type,Ft=et.bytesPerElement,st=wt===r.INT||wt===r.UNSIGNED_INT||Tt.gpuType===up;if(Tt.isInterleavedBufferAttribute){const dt=Tt.data,Dt=dt.stride,Wt=Tt.offset;if(dt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<rt.locationSize;Xt++)v(rt.location+Xt,dt.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Xt=0;Xt<rt.locationSize;Xt++)M(rt.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Xt=0;Xt<rt.locationSize;Xt++)U(rt.location+Xt,I/rt.locationSize,wt,Et,Dt*Ft,(Wt+I/rt.locationSize*Xt)*Ft,st)}else{if(Tt.isInstancedBufferAttribute){for(let dt=0;dt<rt.locationSize;dt++)v(rt.location+dt,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let dt=0;dt<rt.locationSize;dt++)M(rt.location+dt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let dt=0;dt<rt.locationSize;dt++)U(rt.location+dt,I/rt.locationSize,wt,Et,I*Ft,I/rt.locationSize*dt*Ft,st)}}else if(F!==void 0){const Et=F[H];if(Et!==void 0)switch(Et.length){case 2:r.vertexAttrib2fv(rt.location,Et);break;case 3:r.vertexAttrib3fv(rt.location,Et);break;case 4:r.vertexAttrib4fv(rt.location,Et);break;default:r.vertexAttrib1fv(rt.location,Et)}}}}w()}function N(){V();for(const L in s){const k=s[L];for(const j in k){const $=k[j];for(const ct in $)g($[ct].object),delete $[ct];delete k[j]}delete s[L]}}function z(L){if(s[L.id]===void 0)return;const k=s[L.id];for(const j in k){const $=k[j];for(const ct in $)g($[ct].object),delete $[ct];delete k[j]}delete s[L.id]}function O(L){for(const k in s){const j=s[k];if(j[L.id]===void 0)continue;const $=j[L.id];for(const ct in $)g($[ct].object),delete $[ct];delete j[L.id]}}function V(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:M,disableUnusedAttributes:w}}function k1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,s,1)}function m(p,g,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function X1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Gi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const V=O===Ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==xi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!V)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ce("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:D,maxSamples:N,samples:z}}function W1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Aa,h=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const w=c?0:s,U=w*4;let D=v.clippingState||null;m.value=D,D=g(E,x,U,S);for(let N=0;N!==U;++N)D[N]=i[N];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,S,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const v=S+T*4,w=x.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,D=S;U!==T;++U,D+=4)f.copy(_[U]).applyMatrix4(w,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function q1(r){let t=new WeakMap;function i(f,h){return h===_d?f.mapping=Ys:h===vd&&(f.mapping=Kr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===_d||h===vd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new sx(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ms=4,$_=[.125,.215,.35,.446,.526,.582],Xs=20,Y1=256,tl=new Tp,tv=new Ne;let td=null,ed=0,nd=0,id=!1;const j1=new Y;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=j1}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ys||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ua,format:Gi,colorSpace:Jr,depthBuffer:!1},l=nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=Q1(c,t,i),this._ggxMaterial=K1(c,t,i)}return l}_compileMaterial(t){const i=new Li(new ti,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(tv),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new fl,new fu({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,v=!0):(M.color.copy(tv),v=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const N=this._cubeSize;Vr(l,D*N,U>2?N:0,N,N),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=S,_.autoClear=x,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ys||t.mapping===Kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Vr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,S=_*x,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-ms?s-E+ms:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Vr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(h,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Vr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(h,tl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xs-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Xs;M>Xs&&ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Xs}`);const v=[];let w=0;for(let O=0;O<Xs;++O){const V=O/T,A=Math.exp(-V*V/2);v.push(A),O===0?w+=A:O<M&&(w+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/w;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const D=this._sizeLods[l],N=3*D*(l>U-ms?l-U+ms:0),z=4*(this._cubeSize-D);Vr(i,N,z,3*D,2*D),m.setRenderTarget(i),m.render(_,tl)}}function Z1(r){const t=[],i=[],s=[];let l=r;const c=r-ms+1+$_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-ms?m=$_[f-r+ms-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,M=2,v=1,w=new Float32Array(T*E*S),U=new Float32Array(M*E*S),D=new Float32Array(v*E*S);for(let z=0;z<S;z++){const O=z%3*2/3-1,V=z>2?0:-1,A=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];w.set(A,T*E*z),U.set(x,M*E*z);const L=[z,z,z,z,z,z];D.set(L,v*E*z)}const N=new ti;N.setAttribute("position",new Ji(w,T)),N.setAttribute("uv",new Ji(U,M)),N.setAttribute("faceIndex",new Ji(D,v)),s.push(new Li(N,null)),l>ms&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function nv(r,t,i){const s=new Qi(r,t,i);return s.texture.mapping=lu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function K1(r,t,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Q1(r,t,i){const s=new Float32Array(Xs),l=new Y(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function iv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function av(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function J1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===_d||m===vd,g=m===Ys||m===Kr;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new ev(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new ev(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function $1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ol("WebGLRenderer: "+s+" extension not supported."),l}}}function tT(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const w=S.array;T=S.version;for(let U=0,D=w.length;U<D;U+=3){const N=w[U+0],z=w[U+1],O=w[U+2];x.push(N,z,z,O,O,N)}}else if(E!==void 0){const w=E.array;T=E.version;for(let U=0,D=w.length/3-1;U<D;U+=3){const N=U+0,z=U+1,O=U+2;x.push(N,z,z,O,O,N)}}else return;const M=new(Qv(x)?ex:tx)(x,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function eT(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*f),i.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*f,E),i.update(S,s,E))}function g(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];i.update(M,s,1)}function _(x,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,S[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,T,0,E);let v=0;for(let w=0;w<E;w++)v+=S[w]*T[w];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function nT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Oe("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function iT(r,t,i){const s=new WeakMap,l=new gn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let L=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",L)};var S=L;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let N=h.attributes.position.count*D,z=1;N>t.maxTextureSize&&(z=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*z*4*_),V=new Jv(O,N,z,_);V.type=ji,V.needsUpdate=!0;const A=D*4;for(let k=0;k<_;k++){const j=v[k],$=w[k],ct=U[k],ut=N*z*4*k;for(let F=0;F<j.count;F++){const H=F*A;E===!0&&(l.fromBufferAttribute(j,F),O[ut+H+0]=l.x,O[ut+H+1]=l.y,O[ut+H+2]=l.z,O[ut+H+3]=0),T===!0&&(l.fromBufferAttribute($,F),O[ut+H+4]=l.x,O[ut+H+5]=l.y,O[ut+H+6]=l.z,O[ut+H+7]=0),M===!0&&(l.fromBufferAttribute(ct,F),O[ut+H+8]=l.x,O[ut+H+9]=l.y,O[ut+H+10]=l.z,O[ut+H+11]=ct.itemSize===4?l.w:1)}}x={count:_,texture:V,size:new de(N,z)},s.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function aT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const sT={[Pv]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[Iv]:"CINEON_TONE_MAPPING",[Fv]:"ACES_FILMIC_TONE_MAPPING",[Hv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[Bv]:"CUSTOM_TONE_MAPPING"};function rT(r,t,i,s,l){const c=new Qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Qi(t,i,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),h=new ti;h.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new hn([0,2,0,0,2,0],2));const m=new ZM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Li(h,m),g=new Tp(-1,1,1,-1,0,1);let _=null,x=null,S=!1,E,T=null,M=[],v=!1;this.setSize=function(w,U){c.setSize(w,U),f.setSize(w,U);for(let D=0;D<M.length;D++){const N=M[D];N.setSize&&N.setSize(w,U)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(U,D)}},this.begin=function(w,U){if(S||w.toneMapping===Ki&&M.length===0)return!1;if(T=U,U!==null){const D=U.width,N=U.height;(c.width!==D||c.height!==N)&&this.setSize(D,N)}return v===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Ki,!0},this.hasRenderPass=function(){return v},this.end=function(w,U){w.toneMapping=E,S=!0;let D=c,N=f;for(let z=0;z<M.length;z++){const O=M[z];if(O.enabled!==!1&&(O.render(w,N,D,U),O.needsSwap!==!1)){const V=D;D=N,N=V}}if(_!==w.outputColorSpace||x!==w.toneMapping){_=w.outputColorSpace,x=w.toneMapping,m.defines={},Pe.getTransfer(_)===Ye&&(m.defines.SRGB_TRANSFER="");const z=sT[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(T),w.render(p,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const ux=new $n,ep=new ll(1,1),fx=new Jv,hx=new bM,dx=new ax,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function no(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function wn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Dn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function pu(r,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function oT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2fv(this.addr,t),Dn(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wn(i,t))return;r.uniform3fv(this.addr,t),Dn(i,t)}}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4fv(this.addr,t),Dn(i,t)}}function fT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,s))return;cv.set(s),r.uniformMatrix2fv(this.addr,!1,cv),Dn(i,s)}}function hT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,s))return;lv.set(s),r.uniformMatrix3fv(this.addr,!1,lv),Dn(i,s)}}function dT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,s))return;ov.set(s),r.uniformMatrix4fv(this.addr,!1,ov),Dn(i,s)}}function pT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2iv(this.addr,t),Dn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;r.uniform3iv(this.addr,t),Dn(i,t)}}function _T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4iv(this.addr,t),Dn(i,t)}}function vT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function xT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2uiv(this.addr,t),Dn(i,t)}}function ST(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;r.uniform3uiv(this.addr,t),Dn(i,t)}}function yT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4uiv(this.addr,t),Dn(i,t)}}function MT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?_p:gp,c=ep):c=ux,i.setTexture2D(t||c,l)}function ET(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||hx,l)}function bT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||dx,l)}function TT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||fx,l)}function AT(r){switch(r){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return ST;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(r,t){r.uniform1fv(this.addr,t)}function CT(r,t){const i=no(t,this.size,2);r.uniform2fv(this.addr,i)}function wT(r,t){const i=no(t,this.size,3);r.uniform3fv(this.addr,i)}function DT(r,t){const i=no(t,this.size,4);r.uniform4fv(this.addr,i)}function UT(r,t){const i=no(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function LT(r,t){const i=no(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function NT(r,t){const i=no(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function OT(r,t){r.uniform1iv(this.addr,t)}function PT(r,t){r.uniform2iv(this.addr,t)}function zT(r,t){r.uniform3iv(this.addr,t)}function IT(r,t){r.uniform4iv(this.addr,t)}function FT(r,t){r.uniform1uiv(this.addr,t)}function BT(r,t){r.uniform2uiv(this.addr,t)}function HT(r,t){r.uniform3uiv(this.addr,t)}function GT(r,t){r.uniform4uiv(this.addr,t)}function VT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ep:f=ux;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function kT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||hx,c[f])}function XT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||dx,c[f])}function WT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Dn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||fx,c[f])}function qT(r){switch(r){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return BT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class jT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class ZT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function uv(r,t){r.seq.push(t),r.map[t.id]=t}function KT(r,t,i){const s=r.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),f=ad.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){uv(i,p===void 0?new YT(h,r,t):new jT(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new ZT(h),uv(i,_)),i=_}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);KT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function fv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const QT=37297;let JT=0;function $T(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const hv=new Se;function tA(r){Pe._getMatrix(hv,Pe.workingColorSpace,r);const t=`mat3( ${hv.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(r)){case eu:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+$T(r.getShaderSource(t),h)}else return c}function eA(r,t){const i=tA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nA={[Pv]:"Linear",[zv]:"Reinhard",[Iv]:"Cineon",[Fv]:"ACESFilmic",[Hv]:"AgX",[Gv]:"Neutral",[Bv]:"Custom"};function iA(r,t){const i=nA[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Y;function aA(){Pe.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function rA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function oA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function al(r){return r!==""}function pv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(r){return r.replace(lA,uA)}const cA=new Map;function uA(r,t){let i=ye[t];if(i===void 0){const s=cA.get(t);if(s!==void 0)i=ye[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return np(i)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(fA,hA)}function hA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const dA={[Yc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function pA(r){return dA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mA={[Ys]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function gA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _A={[Kr]:"ENVMAP_MODE_REFRACTION"};function vA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_A[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xA={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[aM]:"ENVMAP_BLENDING_MIX",[sM]:"ENVMAP_BLENDING_ADD"};function SA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xA[r.combine]||"ENVMAP_BLENDING_NONE"}function yA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function MA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=pA(i),p=gA(i),g=vA(i),_=SA(i),x=yA(i),S=sA(i),E=rA(c),T=l.createProgram();let M,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),v.length>0&&(v+=`
`)):(M=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),v=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?ye.tonemapping_pars_fragment:"",i.toneMapping!==Ki?iA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,eA("linearToOutputTexel",i.outputColorSpace),aA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=np(f),f=pv(f,i),f=mv(f,i),h=np(h),h=pv(h,i),h=mv(h,i),f=gv(f),h=gv(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=w+M+f,D=w+v+h,N=fv(l,l.VERTEX_SHADER,U),z=fv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,N),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(k){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(T)||"",$=l.getShaderInfoLog(N)||"",ct=l.getShaderInfoLog(z)||"",ut=j.trim(),F=$.trim(),H=ct.trim();let rt=!0,Tt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,N,z);else{const Et=dv(l,N,"vertex"),I=dv(l,z,"fragment");Oe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ut+`
`+Et+`
`+I)}else ut!==""?ce("WebGLProgram: Program Info Log:",ut):(F===""||H==="")&&(Tt=!1);Tt&&(k.diagnostics={runnable:rt,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(N),l.deleteShader(z),V=new $c(l,T),A=oA(l,T)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(T,QT)),L},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=z,this}let EA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new TA(t),i.set(t,s)),s}}class TA{constructor(t){this.id=EA++,this.code=t,this.usedTimes=0}}function AA(r,t,i,s,l,c,f){const h=new xp,m=new bA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,L,k,j,$){const ct=j.fog,ut=$.geometry,F=A.isMeshStandardMaterial?j.environment:null,H=(A.isMeshStandardMaterial?i:t).get(A.envMap||F),rt=H&&H.mapping===lu?H.image.height:null,Tt=E[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&ce("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const Et=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,I=Et!==void 0?Et.length:0;let et=0;ut.morphAttributes.position!==void 0&&(et=1),ut.morphAttributes.normal!==void 0&&(et=2),ut.morphAttributes.color!==void 0&&(et=3);let xt,wt,Ft,st;if(Tt){const Ot=Yi[Tt];xt=Ot.vertexShader,wt=Ot.fragmentShader}else xt=A.vertexShader,wt=A.fragmentShader,m.update(A),Ft=m.getVertexShaderID(A),st=m.getFragmentShaderID(A);const dt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Wt=$.isInstancedMesh===!0,Xt=$.isBatchedMesh===!0,ue=!!A.map,rn=!!A.matcap,Ee=!!H,ve=!!A.aoMap,Me=!!A.lightMap,fe=!!A.bumpMap,Ue=!!A.normalMap,G=!!A.displacementMap,en=!!A.emissiveMap,be=!!A.metalnessMap,ze=!!A.roughnessMap,Zt=A.anisotropy>0,P=A.clearcoat>0,b=A.dispersion>0,Z=A.iridescence>0,_t=A.sheen>0,yt=A.transmission>0,pt=Zt&&!!A.anisotropyMap,Qt=P&&!!A.clearcoatMap,Ut=P&&!!A.clearcoatNormalMap,Kt=P&&!!A.clearcoatRoughnessMap,se=Z&&!!A.iridescenceMap,At=Z&&!!A.iridescenceThicknessMap,Rt=_t&&!!A.sheenColorMap,Gt=_t&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Lt=!!A.specularColorMap,me=!!A.specularIntensityMap,q=yt&&!!A.transmissionMap,Nt=yt&&!!A.thicknessMap,Ct=!!A.gradientMap,W=!!A.alphaMap,J=A.alphaTest>0,tt=!!A.alphaHash,mt=!!A.extensions;let Mt=Ki;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Mt=r.toneMapping);const Vt={shaderID:Tt,shaderType:A.type,shaderName:A.name,vertexShader:xt,fragmentShader:wt,defines:A.defines,customVertexShaderID:Ft,customFragmentShaderID:st,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Xt,batchingColor:Xt&&$._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&$.instanceColor!==null,instancingMorph:Wt&&$.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Jr,alphaToCoverage:!!A.alphaToCoverage,map:ue,matcap:rn,envMap:Ee,envMapMode:Ee&&H.mapping,envMapCubeUVHeight:rt,aoMap:ve,lightMap:Me,bumpMap:fe,normalMap:Ue,displacementMap:G,emissiveMap:en,normalMapObjectSpace:Ue&&A.normalMapType===lM,normalMapTangentSpace:Ue&&A.normalMapType===Kv,metalnessMap:be,roughnessMap:ze,anisotropy:Zt,anisotropyMap:pt,clearcoat:P,clearcoatMap:Qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:Z,iridescenceMap:se,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:Rt,sheenRoughnessMap:Gt,specularMap:zt,specularColorMap:Lt,specularIntensityMap:me,transmission:yt,transmissionMap:q,thicknessMap:Nt,gradientMap:Ct,opaque:A.transparent===!1&&A.blending===Yr&&A.alphaToCoverage===!1,alphaMap:W,alphaTest:J,alphaHash:tt,combine:A.combine,mapUv:ue&&T(A.map.channel),aoMapUv:ve&&T(A.aoMap.channel),lightMapUv:Me&&T(A.lightMap.channel),bumpMapUv:fe&&T(A.bumpMap.channel),normalMapUv:Ue&&T(A.normalMap.channel),displacementMapUv:G&&T(A.displacementMap.channel),emissiveMapUv:en&&T(A.emissiveMap.channel),metalnessMapUv:be&&T(A.metalnessMap.channel),roughnessMapUv:ze&&T(A.roughnessMap.channel),anisotropyMapUv:pt&&T(A.anisotropyMap.channel),clearcoatMapUv:Qt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:At&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:Lt&&T(A.specularColorMap.channel),specularIntensityMapUv:me&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:Nt&&T(A.thicknessMap.channel),alphaMapUv:W&&T(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ue||Zt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ut.attributes.uv&&(ue||W),fog:!!ct,useFog:A.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Dt,skinning:$.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:et,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ue&&A.map.isVideoTexture===!0&&Pe.getTransfer(A.map.colorSpace)===Ye,decodeVideoTextureEmissive:en&&A.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(A.emissiveMap.colorSpace)===Ye,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ra,flipSided:A.side===ci,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:mt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&A.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function v(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)L.push(k),L.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(w(L,A),U(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function w(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function U(A,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),A.push(h.mask)}function D(A){const L=E[A.type];let k;if(L){const j=Yi[L];k=IM.clone(j.uniforms)}else k=A.uniforms;return k}function N(A,L){let k=_.get(L);return k!==void 0?++k.usedTimes:(k=new MA(r,L,A,c),g.push(k),_.set(L,k)),k}function z(A){if(--A.usedTimes===0){const L=g.indexOf(A);g[L]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function O(A){m.remove(A)}function V(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:N,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:V}}function RA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function CA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,S,E,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function h(_,x,S,E,T,M){const v=f(_,x,S,E,T,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,x,S,E,T,M){const v=f(_,x,S,E,T,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||CA),s.length>1&&s.sort(x||vv),l.length>1&&l.sort(x||vv)}function g(){for(let _=t,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function wA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new xv,r.set(s,[f])):l>=c.length?(f=new xv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function DA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new Ne};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=i,i}}}function UA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let LA=0;function NA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function OA(r){const t=new DA,i=UA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new un,f=new un;function h(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let S=0,E=0,T=0,M=0,v=0,w=0,U=0,D=0,N=0,z=0,O=0;p.sort(NA);for(let A=0,L=p.length;A<L;A++){const k=p[A],j=k.color,$=k.intensity,ct=k.distance;let ut=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Qr?ut=k.shadow.map.texture:ut=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*$,_+=j.g*$,x+=j.b*$;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],$);O++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,rt=i.get(k);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,s.directionalShadow[S]=rt,s.directionalShadowMap[S]=ut,s.directionalShadowMatrix[S]=k.shadow.matrix,w++}s.directional[S]=F,S++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(j).multiplyScalar($),F.distance=ct,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[T]=F;const H=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,H.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[T]=H.matrix,k.castShadow){const rt=i.get(k);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,s.spotShadow[T]=rt,s.spotShadowMap[T]=ut,D++}T++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(j).multiplyScalar($),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=F,M++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,rt=i.get(k);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,rt.shadowCameraNear=H.camera.near,rt.shadowCameraFar=H.camera.far,s.pointShadow[E]=rt,s.pointShadowMap[E]=ut,s.pointShadowMatrix[E]=k.shadow.matrix,U++}s.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar($),F.groundColor.copy(k.groundColor).multiplyScalar($),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==T||V.rectAreaLength!==M||V.hemiLength!==v||V.numDirectionalShadows!==w||V.numPointShadows!==U||V.numSpotShadows!==D||V.numSpotMaps!==N||V.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=O,V.directionalLength=S,V.pointLength=E,V.spotLength=T,V.rectAreaLength=M,V.hemiLength=v,V.numDirectionalShadows=w,V.numPointShadows=U,V.numSpotShadows=D,V.numSpotMaps=N,V.numLightProbes=O,s.version=LA++)}function m(p,g){let _=0,x=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const U=p[v];if(U.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function Sv(r){const t=new OA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function PA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Sv(r),t.set(l,[h])):c>=f.length?(h=new Sv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`,FA=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],BA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],yv=new un,el=new Y,sd=new Y;function HA(r,t,i){let s=new Sp;const l=new de,c=new de,f=new gn,h=new QM,m=new JM,p={},g=i.maxTextureSize,_={[_s]:ci,[ci]:_s,[Ra]:Ra},x=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:zA,fragmentShader:IA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new ti;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Li(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let v=this.type;this.render=function(z,O,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===By&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=Yc);const A=r.getRenderTarget(),L=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),j=r.state;j.setBlending(wa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const $=v!==this.type;$&&O.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(ut=>ut.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,ut=z.length;ct<ut;ct++){const F=z[ct],H=F.shadow;if(H===void 0){ce("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const rt=H.getFrameExtents();if(l.multiply(rt),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/rt.x),l.x=c.x*rt.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/rt.y),l.y=c.y*rt.y,H.mapSize.y=c.y)),H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===il){if(F.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qi(l.x,l.y,{format:Qr,type:Ua,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new ll(l.x,l.y,ji),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=La,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wn,H.map.depthTexture.magFilter=Wn}else{F.isPointLight?(H.map=new sx(l.x),H.map.depthTexture=new jM(l.x,$i)):(H.map=new Qi(l.x,l.y),H.map.depthTexture=new ll(l.x,l.y,$i)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=La;const Et=r.state.buffers.depth.getReversed();this.type===Yc?(H.map.depthTexture.compareFunction=Et?_p:gp,H.map.depthTexture.minFilter=Kn,H.map.depthTexture.magFilter=Kn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wn,H.map.depthTexture.magFilter=Wn)}H.camera.updateProjectionMatrix()}const Tt=H.map.isWebGLCubeRenderTarget?6:1;for(let Et=0;Et<Tt;Et++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Et),r.clear();else{Et===0&&(r.setRenderTarget(H.map),r.clear());const I=H.getViewport(Et);f.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),j.viewport(f)}if(F.isPointLight){const I=H.camera,et=H.matrix,xt=F.distance||I.far;xt!==I.far&&(I.far=xt,I.updateProjectionMatrix()),el.setFromMatrixPosition(F.matrixWorld),I.position.copy(el),sd.copy(I.position),sd.add(FA[Et]),I.up.copy(BA[Et]),I.lookAt(sd),I.updateMatrixWorld(),et.makeTranslation(-el.x,-el.y,-el.z),yv.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yv,I.coordinateSystem,I.reversedDepth)}else H.updateMatrices(F);s=H.getFrustum(),D(O,V,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===il&&w(H,V),H.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,L,k)};function w(z,O){const V=t.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qi(l.x,l.y,{format:Qr,type:Ua})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(O,null,V,x,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(O,null,V,S,T,null)}function U(z,O,V,A){let L=null;const k=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)L=k;else if(L=V.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=L.uuid,$=O.uuid;let ct=p[j];ct===void 0&&(ct={},p[j]=ct);let ut=ct[$];ut===void 0&&(ut=L.clone(),ct[$]=ut,O.addEventListener("dispose",N)),L=ut}if(L.visible=O.visible,L.wireframe=O.wireframe,A===il?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:_[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,V.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const j=r.properties.get(L);j.light=V}return L}function D(z,O,V,A,L){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===il)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const $=t.update(z),ct=z.material;if(Array.isArray(ct)){const ut=$.groups;for(let F=0,H=ut.length;F<H;F++){const rt=ut[F],Tt=ct[rt.materialIndex];if(Tt&&Tt.visible){const Et=U(z,Tt,A,L);z.onBeforeShadow(r,z,O,V,$,Et,rt),r.renderBufferDirect(V,null,$,Et,z,rt),z.onAfterShadow(r,z,O,V,$,Et,rt)}}}else if(ct.visible){const ut=U(z,ct,A,L);z.onBeforeShadow(r,z,O,V,$,ut,null),r.renderBufferDirect(V,null,$,ut,z,null),z.onAfterShadow(r,z,O,V,$,ut,null)}}const j=z.children;for(let $=0,ct=j.length;$<ct;$++)D(j[$],O,V,A,L)}function N(z){z.target.removeEventListener("dispose",N);for(const V in p){const A=p[V],L=z.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const GA={[ud]:fd,[hd]:md,[dd]:gd,[Zr]:pd,[fd]:ud,[md]:hd,[gd]:dd,[pd]:Zr};function VA(r,t){function i(){let q=!1;const Nt=new gn;let Ct=null;const W=new gn(0,0,0,0);return{setMask:function(J){Ct!==J&&!q&&(r.colorMask(J,J,J,J),Ct=J)},setLocked:function(J){q=J},setClear:function(J,tt,mt,Mt,Vt){Vt===!0&&(J*=Mt,tt*=Mt,mt*=Mt),Nt.set(J,tt,mt,Mt),W.equals(Nt)===!1&&(r.clearColor(J,tt,mt,Mt),W.copy(Nt))},reset:function(){q=!1,Ct=null,W.set(-1,0,0,0)}}}function s(){let q=!1,Nt=!1,Ct=null,W=null,J=null;return{setReversed:function(tt){if(Nt!==tt){const mt=t.get("EXT_clip_control");tt?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),Nt=tt;const Mt=J;J=null,this.setClear(Mt)}},getReversed:function(){return Nt},setTest:function(tt){tt?dt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(tt){Ct!==tt&&!q&&(r.depthMask(tt),Ct=tt)},setFunc:function(tt){if(Nt&&(tt=GA[tt]),W!==tt){switch(tt){case ud:r.depthFunc(r.NEVER);break;case fd:r.depthFunc(r.ALWAYS);break;case hd:r.depthFunc(r.LESS);break;case Zr:r.depthFunc(r.LEQUAL);break;case dd:r.depthFunc(r.EQUAL);break;case pd:r.depthFunc(r.GEQUAL);break;case md:r.depthFunc(r.GREATER);break;case gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}W=tt}},setLocked:function(tt){q=tt},setClear:function(tt){J!==tt&&(Nt&&(tt=1-tt),r.clearDepth(tt),J=tt)},reset:function(){q=!1,Ct=null,W=null,J=null,Nt=!1}}}function l(){let q=!1,Nt=null,Ct=null,W=null,J=null,tt=null,mt=null,Mt=null,Vt=null;return{setTest:function(Ot){q||(Ot?dt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ot){Nt!==Ot&&!q&&(r.stencilMask(Ot),Nt=Ot)},setFunc:function(Ot,te,Bt){(Ct!==Ot||W!==te||J!==Bt)&&(r.stencilFunc(Ot,te,Bt),Ct=Ot,W=te,J=Bt)},setOp:function(Ot,te,Bt){(tt!==Ot||mt!==te||Mt!==Bt)&&(r.stencilOp(Ot,te,Bt),tt=Ot,mt=te,Mt=Bt)},setLocked:function(Ot){q=Ot},setClear:function(Ot){Vt!==Ot&&(r.clearStencil(Ot),Vt=Ot)},reset:function(){q=!1,Nt=null,Ct=null,W=null,J=null,tt=null,mt=null,Mt=null,Vt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,T=!1,M=null,v=null,w=null,U=null,D=null,N=null,z=null,O=new Ne(0,0,0),V=0,A=!1,L=null,k=null,j=null,$=null,ct=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const rt=r.getParameter(r.VERSION);rt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(rt)[1]),F=H>=1):rt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),F=H>=2);let Tt=null,Et={};const I=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),xt=new gn().fromArray(I),wt=new gn().fromArray(et);function Ft(q,Nt,Ct,W){const J=new Uint8Array(4),tt=r.createTexture();r.bindTexture(q,tt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let mt=0;mt<Ct;mt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,W,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(Nt+mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return tt}const st={};st[r.TEXTURE_2D]=Ft(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=Ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=Ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=Ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),dt(r.DEPTH_TEST),f.setFunc(Zr),fe(!1),Ue(m_),dt(r.CULL_FACE),ve(wa);function dt(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Dt(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Wt(q,Nt){return _[q]!==Nt?(r.bindFramebuffer(q,Nt),_[q]=Nt,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Xt(q,Nt){let Ct=S,W=!1;if(q){Ct=x.get(Nt),Ct===void 0&&(Ct=[],x.set(Nt,Ct));const J=q.textures;if(Ct.length!==J.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,mt=J.length;tt<mt;tt++)Ct[tt]=r.COLOR_ATTACHMENT0+tt;Ct.length=J.length,W=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,W=!0);W&&r.drawBuffers(Ct)}function ue(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const rn={[ks]:r.FUNC_ADD,[Gy]:r.FUNC_SUBTRACT,[Vy]:r.FUNC_REVERSE_SUBTRACT};rn[ky]=r.MIN,rn[Xy]=r.MAX;const Ee={[Wy]:r.ZERO,[qy]:r.ONE,[Yy]:r.SRC_COLOR,[ld]:r.SRC_ALPHA,[$y]:r.SRC_ALPHA_SATURATE,[Qy]:r.DST_COLOR,[Zy]:r.DST_ALPHA,[jy]:r.ONE_MINUS_SRC_COLOR,[cd]:r.ONE_MINUS_SRC_ALPHA,[Jy]:r.ONE_MINUS_DST_COLOR,[Ky]:r.ONE_MINUS_DST_ALPHA,[tM]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[nM]:r.CONSTANT_ALPHA,[iM]:r.ONE_MINUS_CONSTANT_ALPHA};function ve(q,Nt,Ct,W,J,tt,mt,Mt,Vt,Ot){if(q===wa){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(dt(r.BLEND),T=!0),q!==Hy){if(q!==M||Ot!==A){if((v!==ks||D!==ks)&&(r.blendEquation(r.FUNC_ADD),v=ks,D=ks),Ot)switch(q){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFunc(r.ONE,r.ONE);break;case __:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case v_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Oe("WebGLState: Invalid blending: ",q);break}else switch(q){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case __:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",q);break}w=null,U=null,N=null,z=null,O.set(0,0,0),V=0,M=q,A=Ot}return}J=J||Nt,tt=tt||Ct,mt=mt||W,(Nt!==v||J!==D)&&(r.blendEquationSeparate(rn[Nt],rn[J]),v=Nt,D=J),(Ct!==w||W!==U||tt!==N||mt!==z)&&(r.blendFuncSeparate(Ee[Ct],Ee[W],Ee[tt],Ee[mt]),w=Ct,U=W,N=tt,z=mt),(Mt.equals(O)===!1||Vt!==V)&&(r.blendColor(Mt.r,Mt.g,Mt.b,Vt),O.copy(Mt),V=Vt),M=q,A=!1}function Me(q,Nt){q.side===Ra?Dt(r.CULL_FACE):dt(r.CULL_FACE);let Ct=q.side===ci;Nt&&(Ct=!Ct),fe(Ct),q.blending===Yr&&q.transparent===!1?ve(wa):ve(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const W=q.stencilWrite;h.setTest(W),W&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),en(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function fe(q){L!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),L=q)}function Ue(q){q!==Iy?(dt(r.CULL_FACE),q!==k&&(q===m_?r.cullFace(r.BACK):q===Fy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),k=q}function G(q){q!==j&&(F&&r.lineWidth(q),j=q)}function en(q,Nt,Ct){q?(dt(r.POLYGON_OFFSET_FILL),($!==Nt||ct!==Ct)&&(r.polygonOffset(Nt,Ct),$=Nt,ct=Ct)):Dt(r.POLYGON_OFFSET_FILL)}function be(q){q?dt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ze(q){q===void 0&&(q=r.TEXTURE0+ut-1),Tt!==q&&(r.activeTexture(q),Tt=q)}function Zt(q,Nt,Ct){Ct===void 0&&(Tt===null?Ct=r.TEXTURE0+ut-1:Ct=Tt);let W=Et[Ct];W===void 0&&(W={type:void 0,texture:void 0},Et[Ct]=W),(W.type!==q||W.texture!==Nt)&&(Tt!==Ct&&(r.activeTexture(Ct),Tt=Ct),r.bindTexture(q,Nt||st[q]),W.type=q,W.texture=Nt)}function P(){const q=Et[Tt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(q){Oe("WebGLState:",q)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(q){Oe("WebGLState:",q)}}function _t(){try{r.texSubImage2D(...arguments)}catch(q){Oe("WebGLState:",q)}}function yt(){try{r.texSubImage3D(...arguments)}catch(q){Oe("WebGLState:",q)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Oe("WebGLState:",q)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Oe("WebGLState:",q)}}function Ut(){try{r.texStorage2D(...arguments)}catch(q){Oe("WebGLState:",q)}}function Kt(){try{r.texStorage3D(...arguments)}catch(q){Oe("WebGLState:",q)}}function se(){try{r.texImage2D(...arguments)}catch(q){Oe("WebGLState:",q)}}function At(){try{r.texImage3D(...arguments)}catch(q){Oe("WebGLState:",q)}}function Rt(q){xt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),xt.copy(q))}function Gt(q){wt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),wt.copy(q))}function zt(q,Nt){let Ct=p.get(Nt);Ct===void 0&&(Ct=new WeakMap,p.set(Nt,Ct));let W=Ct.get(q);W===void 0&&(W=r.getUniformBlockIndex(Nt,q.name),Ct.set(q,W))}function Lt(q,Nt){const W=p.get(Nt).get(q);m.get(Nt)!==W&&(r.uniformBlockBinding(Nt,W,q.__bindingPointIndex),m.set(Nt,W))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Tt=null,Et={},_={},x=new WeakMap,S=[],E=null,T=!1,M=null,v=null,w=null,U=null,D=null,N=null,z=null,O=new Ne(0,0,0),V=0,A=!1,L=null,k=null,j=null,$=null,ct=null,xt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:dt,disable:Dt,bindFramebuffer:Wt,drawBuffers:Xt,useProgram:ue,setBlending:ve,setMaterial:Me,setFlipSided:fe,setCullFace:Ue,setLineWidth:G,setPolygonOffset:en,setScissorTest:be,activeTexture:ze,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:se,texImage3D:At,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:_t,texSubImage3D:yt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Qt,scissor:Rt,viewport:Gt,reset:me}}function kA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return S?new OffscreenCanvas(P,b):iu("canvas")}function T(P,b,Z){let _t=1;const yt=Zt(P);if((yt.width>Z||yt.height>Z)&&(_t=Z/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pt=Math.floor(_t*yt.width),Qt=Math.floor(_t*yt.height);_===void 0&&(_=E(pt,Qt));const Ut=b?E(pt,Qt):_;return Ut.width=pt,Ut.height=Qt,Ut.getContext("2d").drawImage(P,0,0,pt,Qt),ce("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Qt+")."),Ut}else return"data"in P&&ce("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),P;return P}function M(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,b,Z,_t,yt=!1){if(P!==null){if(r[P]!==void 0)return r[P];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt=b;if(b===r.RED&&(Z===r.FLOAT&&(pt=r.R32F),Z===r.HALF_FLOAT&&(pt=r.R16F),Z===r.UNSIGNED_BYTE&&(pt=r.R8)),b===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.R8UI),Z===r.UNSIGNED_SHORT&&(pt=r.R16UI),Z===r.UNSIGNED_INT&&(pt=r.R32UI),Z===r.BYTE&&(pt=r.R8I),Z===r.SHORT&&(pt=r.R16I),Z===r.INT&&(pt=r.R32I)),b===r.RG&&(Z===r.FLOAT&&(pt=r.RG32F),Z===r.HALF_FLOAT&&(pt=r.RG16F),Z===r.UNSIGNED_BYTE&&(pt=r.RG8)),b===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RG16UI),Z===r.UNSIGNED_INT&&(pt=r.RG32UI),Z===r.BYTE&&(pt=r.RG8I),Z===r.SHORT&&(pt=r.RG16I),Z===r.INT&&(pt=r.RG32I)),b===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),Z===r.UNSIGNED_INT&&(pt=r.RGB32UI),Z===r.BYTE&&(pt=r.RGB8I),Z===r.SHORT&&(pt=r.RGB16I),Z===r.INT&&(pt=r.RGB32I)),b===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(pt=r.RGBA32UI),Z===r.BYTE&&(pt=r.RGBA8I),Z===r.SHORT&&(pt=r.RGBA16I),Z===r.INT&&(pt=r.RGBA32I)),b===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),b===r.RGBA){const Qt=yt?eu:Pe.getTransfer(_t);Z===r.FLOAT&&(pt=r.RGBA32F),Z===r.HALF_FLOAT&&(pt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(pt=Qt===Ye?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(P,b){let Z;return P?b===null||b===$i||b===rl?Z=r.DEPTH24_STENCIL8:b===ji?Z=r.DEPTH32F_STENCIL8:b===sl&&(Z=r.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===rl?Z=r.DEPTH_COMPONENT24:b===ji?Z=r.DEPTH_COMPONENT32F:b===sl&&(Z=r.DEPTH_COMPONENT16),Z}function N(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wn&&P.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function z(P){const b=P.target;b.removeEventListener("dispose",z),V(b),b.isVideoTexture&&g.delete(b)}function O(P){const b=P.target;b.removeEventListener("dispose",O),L(b)}function V(P){const b=s.get(P);if(b.__webglInit===void 0)return;const Z=P.source,_t=x.get(Z);if(_t){const yt=_t[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(P),Object.keys(_t).length===0&&x.delete(Z)}s.remove(P)}function A(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const Z=P.source,_t=x.get(Z);delete _t[b.__cacheKey],f.memory.textures--}function L(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let yt=0;yt<b.__webglFramebuffer[_t].length;yt++)r.deleteFramebuffer(b.__webglFramebuffer[_t][yt]);else r.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)r.deleteFramebuffer(b.__webglFramebuffer[_t]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=P.textures;for(let _t=0,yt=Z.length;_t<yt;_t++){const pt=s.get(Z[_t]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(Z[_t])}s.remove(P)}let k=0;function j(){k=0}function $(){const P=k;return P>=l.maxTextures&&ce("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function ct(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ut(P,b){const Z=s.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){const _t=P.image;if(_t===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{st(Z,P,b);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+b)}function F(P,b){const Z=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){st(Z,P,b);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+b)}function H(P,b){const Z=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){st(Z,P,b);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+b)}function rt(P,b){const Z=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){dt(Z,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+b)}const Tt={[xd]:r.REPEAT,[Ca]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},Et={[Wn]:r.NEAREST,[rM]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[Ah]:r.LINEAR_MIPMAP_NEAREST,[Ws]:r.LINEAR_MIPMAP_LINEAR},I={[cM]:r.NEVER,[pM]:r.ALWAYS,[uM]:r.LESS,[gp]:r.LEQUAL,[fM]:r.EQUAL,[_p]:r.GEQUAL,[hM]:r.GREATER,[dM]:r.NOTEQUAL};function et(P,b){if(b.type===ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===Ah||b.magFilter===Mc||b.magFilter===Ws||b.minFilter===Kn||b.minFilter===Ah||b.minFilter===Mc||b.minFilter===Ws)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Tt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Tt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Tt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Et[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wn||b.minFilter!==Mc&&b.minFilter!==Ws||b.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function xt(P,b){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",z));const _t=b.source;let yt=x.get(_t);yt===void 0&&(yt={},x.set(_t,yt));const pt=ct(b);if(pt!==P.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),yt[pt].usedTimes++;const Qt=yt[P.__cacheKey];Qt!==void 0&&(yt[P.__cacheKey].usedTimes--,Qt.usedTimes===0&&A(b)),P.__cacheKey=pt,P.__webglTexture=yt[pt].texture}return Z}function wt(P,b,Z){return Math.floor(Math.floor(P/Z)/b)}function Ft(P,b,Z,_t){const pt=P.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Z,_t,b.data);else{pt.sort((At,Rt)=>At.start-Rt.start);let Qt=0;for(let At=1;At<pt.length;At++){const Rt=pt[Qt],Gt=pt[At],zt=Rt.start+Rt.count,Lt=wt(Gt.start,b.width,4),me=wt(Rt.start,b.width,4);Gt.start<=zt+1&&Lt===me&&wt(Gt.start+Gt.count-1,b.width,4)===Lt?Rt.count=Math.max(Rt.count,Gt.start+Gt.count-Rt.start):(++Qt,pt[Qt]=Gt)}pt.length=Qt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let At=0,Rt=pt.length;At<Rt;At++){const Gt=pt[At],zt=Math.floor(Gt.start/4),Lt=Math.ceil(Gt.count/4),me=zt%b.width,q=Math.floor(zt/b.width),Nt=Lt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,me,q,Nt,Ct,Z,_t,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function st(P,b,Z){let _t=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=r.TEXTURE_3D);const yt=xt(P,b),pt=b.source;i.bindTexture(_t,P.__webglTexture,r.TEXTURE0+Z);const Qt=s.get(pt);if(pt.version!==Qt.__version||yt===!0){i.activeTexture(r.TEXTURE0+Z);const Ut=Pe.getPrimaries(Pe.workingColorSpace),Kt=b.colorSpace===ps?null:Pe.getPrimaries(b.colorSpace),se=b.colorSpace===ps||Ut===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let At=T(b.image,!1,l.maxTextureSize);At=ze(b,At);const Rt=c.convert(b.format,b.colorSpace),Gt=c.convert(b.type);let zt=U(b.internalFormat,Rt,Gt,b.colorSpace,b.isVideoTexture);et(_t,b);let Lt;const me=b.mipmaps,q=b.isVideoTexture!==!0,Nt=Qt.__version===void 0||yt===!0,Ct=pt.dataReady,W=N(b,At);if(b.isDepthTexture)zt=D(b.format===qs,b.type),Nt&&(q?i.texStorage2D(r.TEXTURE_2D,1,zt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,zt,At.width,At.height,0,Rt,Gt,null));else if(b.isDataTexture)if(me.length>0){q&&Nt&&i.texStorage2D(r.TEXTURE_2D,W,zt,me[0].width,me[0].height);for(let J=0,tt=me.length;J<tt;J++)Lt=me[J],q?Ct&&i.texSubImage2D(r.TEXTURE_2D,J,0,0,Lt.width,Lt.height,Rt,Gt,Lt.data):i.texImage2D(r.TEXTURE_2D,J,zt,Lt.width,Lt.height,0,Rt,Gt,Lt.data);b.generateMipmaps=!1}else q?(Nt&&i.texStorage2D(r.TEXTURE_2D,W,zt,At.width,At.height),Ct&&Ft(b,At,Rt,Gt)):i.texImage2D(r.TEXTURE_2D,0,zt,At.width,At.height,0,Rt,Gt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,W,zt,me[0].width,me[0].height,At.depth);for(let J=0,tt=me.length;J<tt;J++)if(Lt=me[J],b.format!==Gi)if(Rt!==null)if(q){if(Ct)if(b.layerUpdates.size>0){const mt=J_(Lt.width,Lt.height,b.format,b.type);for(const Mt of b.layerUpdates){const Vt=Lt.data.subarray(Mt*mt/Lt.data.BYTES_PER_ELEMENT,(Mt+1)*mt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Mt,Lt.width,Lt.height,1,Rt,Vt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Lt.width,Lt.height,At.depth,Rt,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,zt,Lt.width,Lt.height,At.depth,0,Lt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ct&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Lt.width,Lt.height,At.depth,Rt,Gt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,J,zt,Lt.width,Lt.height,At.depth,0,Rt,Gt,Lt.data)}else{q&&Nt&&i.texStorage2D(r.TEXTURE_2D,W,zt,me[0].width,me[0].height);for(let J=0,tt=me.length;J<tt;J++)Lt=me[J],b.format!==Gi?Rt!==null?q?Ct&&i.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Lt.width,Lt.height,Rt,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,J,zt,Lt.width,Lt.height,0,Lt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ct&&i.texSubImage2D(r.TEXTURE_2D,J,0,0,Lt.width,Lt.height,Rt,Gt,Lt.data):i.texImage2D(r.TEXTURE_2D,J,zt,Lt.width,Lt.height,0,Rt,Gt,Lt.data)}else if(b.isDataArrayTexture)if(q){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,W,zt,At.width,At.height,At.depth),Ct)if(b.layerUpdates.size>0){const J=J_(At.width,At.height,b.format,b.type);for(const tt of b.layerUpdates){const mt=At.data.subarray(tt*J/At.data.BYTES_PER_ELEMENT,(tt+1)*J/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,At.width,At.height,1,Rt,Gt,mt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Rt,Gt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,At.width,At.height,At.depth,0,Rt,Gt,At.data);else if(b.isData3DTexture)q?(Nt&&i.texStorage3D(r.TEXTURE_3D,W,zt,At.width,At.height,At.depth),Ct&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Rt,Gt,At.data)):i.texImage3D(r.TEXTURE_3D,0,zt,At.width,At.height,At.depth,0,Rt,Gt,At.data);else if(b.isFramebufferTexture){if(Nt)if(q)i.texStorage2D(r.TEXTURE_2D,W,zt,At.width,At.height);else{let J=At.width,tt=At.height;for(let mt=0;mt<W;mt++)i.texImage2D(r.TEXTURE_2D,mt,zt,J,tt,0,Rt,Gt,null),J>>=1,tt>>=1}}else if(me.length>0){if(q&&Nt){const J=Zt(me[0]);i.texStorage2D(r.TEXTURE_2D,W,zt,J.width,J.height)}for(let J=0,tt=me.length;J<tt;J++)Lt=me[J],q?Ct&&i.texSubImage2D(r.TEXTURE_2D,J,0,0,Rt,Gt,Lt):i.texImage2D(r.TEXTURE_2D,J,zt,Rt,Gt,Lt);b.generateMipmaps=!1}else if(q){if(Nt){const J=Zt(At);i.texStorage2D(r.TEXTURE_2D,W,zt,J.width,J.height)}Ct&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Gt,At)}else i.texImage2D(r.TEXTURE_2D,0,zt,Rt,Gt,At);M(b)&&v(_t),Qt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function dt(P,b,Z){if(b.image.length!==6)return;const _t=xt(P,b),yt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);const pt=s.get(yt);if(yt.version!==pt.__version||_t===!0){i.activeTexture(r.TEXTURE0+Z);const Qt=Pe.getPrimaries(Pe.workingColorSpace),Ut=b.colorSpace===ps?null:Pe.getPrimaries(b.colorSpace),Kt=b.colorSpace===ps||Qt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let tt=0;tt<6;tt++)!se&&!At?Rt[tt]=T(b.image[tt],!0,l.maxCubemapSize):Rt[tt]=At?b.image[tt].image:b.image[tt],Rt[tt]=ze(b,Rt[tt]);const Gt=Rt[0],zt=c.convert(b.format,b.colorSpace),Lt=c.convert(b.type),me=U(b.internalFormat,zt,Lt,b.colorSpace),q=b.isVideoTexture!==!0,Nt=pt.__version===void 0||_t===!0,Ct=yt.dataReady;let W=N(b,Gt);et(r.TEXTURE_CUBE_MAP,b);let J;if(se){q&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,W,me,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){J=Rt[tt].mipmaps;for(let mt=0;mt<J.length;mt++){const Mt=J[mt];b.format!==Gi?zt!==null?q?Ct&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,Mt.width,Mt.height,zt,Mt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,me,Mt.width,Mt.height,0,Mt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,Mt.width,Mt.height,zt,Lt,Mt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,me,Mt.width,Mt.height,0,zt,Lt,Mt.data)}}}else{if(J=b.mipmaps,q&&Nt){J.length>0&&W++;const tt=Zt(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,W,me,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(At){q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt[tt].width,Rt[tt].height,zt,Lt,Rt[tt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,me,Rt[tt].width,Rt[tt].height,0,zt,Lt,Rt[tt].data);for(let mt=0;mt<J.length;mt++){const Vt=J[mt].image[tt].image;q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Vt.width,Vt.height,zt,Lt,Vt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,me,Vt.width,Vt.height,0,zt,Lt,Vt.data)}}else{q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,Lt,Rt[tt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,me,zt,Lt,Rt[tt]);for(let mt=0;mt<J.length;mt++){const Mt=J[mt];q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,zt,Lt,Mt.image[tt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,me,zt,Lt,Mt.image[tt])}}}M(b)&&v(r.TEXTURE_CUBE_MAP),pt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Dt(P,b,Z,_t,yt,pt){const Qt=c.convert(Z.format,Z.colorSpace),Ut=c.convert(Z.type),Kt=U(Z.internalFormat,Qt,Ut,Z.colorSpace),se=s.get(b),At=s.get(Z);if(At.__renderTarget=b,!se.__hasExternalTextures){const Rt=Math.max(1,b.width>>pt),Gt=Math.max(1,b.height>>pt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,Kt,Rt,Gt,b.depth,0,Qt,Ut,null):i.texImage2D(yt,pt,Kt,Rt,Gt,0,Qt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),en(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,yt,At.__webglTexture,0,G(b)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,yt,At.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(P,b,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const _t=b.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,pt=D(b.stencilBuffer,yt),Qt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;en(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),pt,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,P)}else{const _t=b.textures;for(let yt=0;yt<_t.length;yt++){const pt=_t[yt],Qt=c.convert(pt.format,pt.colorSpace),Ut=c.convert(pt.type),Kt=U(pt.internalFormat,Qt,Ut,pt.colorSpace);en(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),Kt,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),Kt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(P,b,Z){const _t=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(b.depthTexture);if(yt.__renderTarget=b,(!yt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),et(r.TEXTURE_CUBE_MAP,b.depthTexture);const se=c.convert(b.depthTexture.format),At=c.convert(b.depthTexture.type);let Rt;b.depthTexture.format===La?Rt=r.DEPTH_COMPONENT24:b.depthTexture.format===qs&&(Rt=r.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Rt,b.width,b.height,0,se,At,null)}}else ut(b.depthTexture,0);const pt=yt.__webglTexture,Qt=G(b),Ut=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Kt=b.depthTexture.format===qs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===La)en(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Ut,pt,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Ut,pt,0);else if(b.depthTexture.format===qs)en(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Ut,pt,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Ut,pt,0);else throw new Error("Unknown depthTexture format")}function ue(P){const b=s.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const _t=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=_t}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let _t=0;_t<6;_t++)Xt(b.__webglFramebuffer[_t],P,_t);else{const _t=P.texture.mipmaps;_t&&_t.length>0?Xt(b.__webglFramebuffer[0],P,0):Xt(b.__webglFramebuffer,P,0)}else if(Z){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=r.createRenderbuffer(),Wt(b.__webglDepthbuffer[_t],P,!1);else{const yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}else{const _t=P.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Wt(b.__webglDepthbuffer,P,!1);else{const yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function rn(P,b,Z){const _t=s.get(P);b!==void 0&&Dt(_t.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ue(P)}function Ee(P){const b=P.texture,Z=s.get(P),_t=s.get(b);P.addEventListener("dispose",O);const yt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,Qt=yt.length>1;if(Qt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=b.version,f.memory.textures++),pt){Z.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)Z.__webglFramebuffer[Ut][Kt]=r.createFramebuffer()}else Z.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)Z.__webglFramebuffer[Ut]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let Ut=0,Kt=yt.length;Ut<Kt;Ut++){const se=s.get(yt[Ut]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&en(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ut=0;Ut<yt.length;Ut++){const Kt=yt[Ut];Z.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ut]);const se=c.convert(Kt.format,Kt.colorSpace),At=c.convert(Kt.type),Rt=U(Kt.internalFormat,se,At,Kt.colorSpace,P.isXRRenderTarget===!0),Gt=G(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Rt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(Z.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),et(r.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Dt(Z.__webglFramebuffer[Ut][Kt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Dt(Z.__webglFramebuffer[Ut],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Ut=0,Kt=yt.length;Ut<Kt;Ut++){const se=yt[Ut],At=s.get(se);let Rt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,At.__webglTexture),et(Rt,se),Dt(Z.__webglFramebuffer,P,se,r.COLOR_ATTACHMENT0+Ut,Rt,0),M(se)&&v(Rt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,_t.__webglTexture),et(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Dt(Z.__webglFramebuffer[Kt],P,b,r.COLOR_ATTACHMENT0,Ut,Kt);else Dt(Z.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Ut,0);M(b)&&v(Ut),i.unbindTexture()}P.depthBuffer&&ue(P)}function ve(P){const b=P.textures;for(let Z=0,_t=b.length;Z<_t;Z++){const yt=b[Z];if(M(yt)){const pt=w(P),Qt=s.get(yt).__webglTexture;i.bindTexture(pt,Qt),v(pt),i.unbindTexture()}}}const Me=[],fe=[];function Ue(P){if(P.samples>0){if(en(P)===!1){const b=P.textures,Z=P.width,_t=P.height;let yt=r.COLOR_BUFFER_BIT;const pt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(P),Ut=b.length>1;if(Ut)for(let se=0;se<b.length;se++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const Kt=P.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let se=0;se<b.length;se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[se]);const At=s.get(b[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,Z,_t,0,0,Z,_t,yt,r.NEAREST),m===!0&&(Me.length=0,fe.length=0,Me.push(r.COLOR_ATTACHMENT0+se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Me.push(pt),fe.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let se=0;se<b.length;se++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[se]);const At=s.get(b[se]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function G(P){return Math.min(l.maxSamples,P.samples)}function en(P){const b=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(P){const b=f.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function ze(P,b){const Z=P.colorSpace,_t=P.format,yt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Jr&&Z!==ps&&(Pe.getTransfer(Z)===Ye?(_t!==Gi||yt!==xi)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",Z)),b}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=j,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=rt,this.rebindTextures=rn,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XA(r,t){function i(s,l=ps){let c;const f=Pe.getTransfer(l);if(s===xi)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===qv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===kv)return r.BYTE;if(s===Xv)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Ua)return r.HALF_FLOAT;if(s===Yv)return r.ALPHA;if(s===jv)return r.RGB;if(s===Gi)return r.RGBA;if(s===La)return r.DEPTH_COMPONENT;if(s===qs)return r.DEPTH_STENCIL;if(s===Zv)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===Qr)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===jc||s===Zc||s===Kc||s===Qc)if(f===Ye)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Td||s===Ad)return f===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Rd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cd)return c.COMPRESSED_R11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Dd)return c.COMPRESSED_RG11_EAC;if(s===Ud)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ld)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Id)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wd)return f===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===qd)return f===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ox(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ea({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new hu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends js{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",M=new YA,v={},w=i.getContextAttributes();let U=null,D=null;const N=[],z=[],O=new de;let V=null;const A=new Ui;A.viewport=new gn;const L=new Ui;L.viewport=new gn;const k=[A,L],j=new nE;let $=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let dt=N[st];return dt===void 0&&(dt=new jh,N[st]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(st){let dt=N[st];return dt===void 0&&(dt=new jh,N[st]=dt),dt.getGripSpace()},this.getHand=function(st){let dt=N[st];return dt===void 0&&(dt=new jh,N[st]=dt),dt.getHandSpace()};function ut(st){const dt=z.indexOf(st.inputSource);if(dt===-1)return;const Dt=N[dt];Dt!==void 0&&(Dt.update(st.inputSource,st.frame,p||f),Dt.dispatchEvent({type:st.type,data:st.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let st=0;st<N.length;st++){const dt=z[st];dt!==null&&(z[st]=null,N[st].disconnect(dt))}$=null,ct=null,M.reset();for(const st in v)delete v[st];t.setRenderTarget(U),S=null,x=null,_=null,l=null,D=null,Ft.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Wt=null,Xt=null;w.depth&&(Xt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=w.stencil?qs:La,Wt=w.stencil?rl:$i);const ue={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(ue),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Qi(x.textureWidth,x.textureHeight,{format:Gi,type:xi,depthTexture:new ll(x.textureWidth,x.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Qi(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(st){for(let dt=0;dt<st.removed.length;dt++){const Dt=st.removed[dt],Wt=z.indexOf(Dt);Wt>=0&&(z[Wt]=null,N[Wt].disconnect(Dt))}for(let dt=0;dt<st.added.length;dt++){const Dt=st.added[dt];let Wt=z.indexOf(Dt);if(Wt===-1){for(let ue=0;ue<N.length;ue++)if(ue>=z.length){z.push(Dt),Wt=ue;break}else if(z[ue]===null){z[ue]=Dt,Wt=ue;break}if(Wt===-1)break}const Xt=N[Wt];Xt&&Xt.connect(Dt)}}const rt=new Y,Tt=new Y;function Et(st,dt,Dt){rt.setFromMatrixPosition(dt.matrixWorld),Tt.setFromMatrixPosition(Dt.matrixWorld);const Wt=rt.distanceTo(Tt),Xt=dt.projectionMatrix.elements,ue=Dt.projectionMatrix.elements,rn=Xt[14]/(Xt[10]-1),Ee=Xt[14]/(Xt[10]+1),ve=(Xt[9]+1)/Xt[5],Me=(Xt[9]-1)/Xt[5],fe=(Xt[8]-1)/Xt[0],Ue=(ue[8]+1)/ue[0],G=rn*fe,en=rn*Ue,be=Wt/(-fe+Ue),ze=be*-fe;if(dt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ze),st.translateZ(be),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Xt[10]===-1)st.projectionMatrix.copy(dt.projectionMatrix),st.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Zt=rn+be,P=Ee+be,b=G-ze,Z=en+(Wt-ze),_t=ve*Ee/P*Zt,yt=Me*Ee/P*Zt;st.projectionMatrix.makePerspective(b,Z,_t,yt,Zt,P),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function I(st,dt){dt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(dt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let dt=st.near,Dt=st.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),j.near=L.near=A.near=dt,j.far=L.far=A.far=Dt,($!==j.near||ct!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),$=j.near,ct=j.far),j.layers.mask=st.layers.mask|6,A.layers.mask=j.layers.mask&3,L.layers.mask=j.layers.mask&5;const Wt=st.parent,Xt=j.cameras;I(j,Wt);for(let ue=0;ue<Xt.length;ue++)I(Xt[ue],Wt);Xt.length===2?Et(j,A,L):j.projectionMatrix.copy(A.projectionMatrix),et(st,j,Wt)};function et(st,dt,Dt){Dt===null?st.matrix.copy(dt.matrixWorld):(st.matrix.copy(Dt.matrixWorld),st.matrix.invert(),st.matrix.multiply(dt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(dt.projectionMatrix),st.projectionMatrixInverse.copy(dt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=$d*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(st){m=st,x!==null&&(x.fixedFoveation=st),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(st){return v[st]};let xt=null;function wt(st,dt){if(g=dt.getViewerPose(p||f),E=dt,g!==null){const Dt=g.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Wt=!1;Dt.length!==j.cameras.length&&(j.cameras.length=0,Wt=!0);for(let Ee=0;Ee<Dt.length;Ee++){const ve=Dt[Ee];let Me=null;if(S!==null)Me=S.getViewport(ve);else{const Ue=_.getViewSubImage(x,ve);Me=Ue.viewport,Ee===0&&(t.setRenderTargetTextures(D,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(D))}let fe=k[Ee];fe===void 0&&(fe=new Ui,fe.layers.enable(Ee),fe.viewport=new gn,k[Ee]=fe),fe.matrix.fromArray(ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Me.x,Me.y,Me.width,Me.height),Ee===0&&(j.matrix.copy(fe.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Wt===!0&&j.cameras.push(fe)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const Ee=_.getDepthInformation(Dt[0]);Ee&&Ee.isValid&&Ee.texture&&M.init(Ee,l.renderState)}if(Xt&&Xt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let Ee=0;Ee<Dt.length;Ee++){const ve=Dt[Ee].camera;if(ve){let Me=v[ve];Me||(Me=new ox,v[ve]=Me);const fe=_.getCameraImage(ve);Me.sourceTexture=fe}}}}for(let Dt=0;Dt<N.length;Dt++){const Wt=z[Dt],Xt=N[Dt];Wt!==null&&Xt!==void 0&&Xt.update(Wt,dt,p||f)}xt&&xt(st,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Ft=new cx;Ft.setAnimationLoop(wt),this.setAnimationLoop=function(st){xt=st},this.dispose=function(){}}}const Vs=new ta,ZA=new un;function KA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,nx(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,w,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&S(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,w,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===ci&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===ci&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const w=t.get(v),U=w.envMap,D=w.envMapRotation;U&&(M.envMap.value=U,Vs.copy(D),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(Vs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,w,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*w,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,w){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ci&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const w=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const D=U.program;s.uniformBlockBinding(w,D)}function p(w,U){let D=l[w.id];D===void 0&&(E(w),D=g(w),l[w.id]=D,w.addEventListener("dispose",M));const N=U.program;s.updateUBOMapping(w,N);const z=t.render.frame;c[w.id]!==z&&(x(w),c[w.id]=z)}function g(w){const U=_();w.__bindingPointIndex=U;const D=r.createBuffer(),N=w.__size,z=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,N,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const U=l[w.id],D=w.uniforms,N=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,O=D.length;z<O;z++){const V=Array.isArray(D[z])?D[z]:[D[z]];for(let A=0,L=V.length;A<L;A++){const k=V[A];if(S(k,z,A,N)===!0){const j=k.__offset,$=Array.isArray(k.value)?k.value:[k.value];let ct=0;for(let ut=0;ut<$.length;ut++){const F=$[ut],H=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,j+ct,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ct),ct+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(w,U,D,N){const z=w.value,O=U+"_"+D;if(N[O]===void 0)return typeof z=="number"||typeof z=="boolean"?N[O]=z:N[O]=z.clone(),!0;{const V=N[O];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return N[O]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function E(w){const U=w.uniforms;let D=0;const N=16;for(let O=0,V=U.length;O<V;O++){const A=Array.isArray(U[O])?U[O]:[U[O]];for(let L=0,k=A.length;L<k;L++){const j=A[L],$=Array.isArray(j.value)?j.value:[j.value];for(let ct=0,ut=$.length;ct<ut;ct++){const F=$[ct],H=T(F),rt=D%N,Tt=rt%H.boundary,Et=rt+Tt;D+=Tt,Et!==0&&N-Et<H.storage&&(D+=N-Et),j.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=D,D+=H.storage}}}const z=D%N;return z>0&&(D+=N-z),w.__size=D,w.__cache={},this}function T(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ce("WebGLRenderer: Unsupported uniform value type.",w),U}function M(w){const U=w.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function $A(){return qi===null&&(qi=new kM(JA,16,16,Qr,Ua),qi.name="DFG_LUT",qi.minFilter=Kn,qi.magFilter=Kn,qi.wrapS=Ca,qi.wrapT=Ca,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class tR{constructor(t={}){const{canvas:i=mM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:S=xi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=S,M=new Set([mp,pp,dp]),v=new Set([xi,$i,sl,rl,fp,hp]),w=new Uint32Array(4),U=new Int32Array(4);let D=null,N=null;const z=[],O=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Di;let k=0,j=0,$=null,ct=-1,ut=null;const F=new gn,H=new gn;let rt=null;const Tt=new Ne(0);let Et=0,I=i.width,et=i.height,xt=1,wt=null,Ft=null;const st=new gn(0,0,I,et),dt=new gn(0,0,I,et);let Dt=!1;const Wt=new Sp;let Xt=!1,ue=!1;const rn=new un,Ee=new Y,ve=new gn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ue(){return $===null?xt:1}let G=s;function en(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),G===null){const K="webgl2";if(G=en(K,C),G===null)throw en(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Oe("WebGLRenderer: "+C.message),C}let be,ze,Zt,P,b,Z,_t,yt,pt,Qt,Ut,Kt,se,At,Rt,Gt,zt,Lt,me,q,Nt,Ct,W,J;function tt(){be=new $1(G),be.init(),Ct=new XA(G,be),ze=new X1(G,be,t,Ct),Zt=new VA(G,be),ze.reversedDepthBuffer&&x&&Zt.buffers.depth.setReversed(!0),P=new nT(G),b=new RA,Z=new kA(G,be,Zt,b,ze,Ct,P),_t=new q1(A),yt=new J1(A),pt=new rE(G),W=new V1(G,pt),Qt=new tT(G,pt,P,W),Ut=new aT(G,Qt,pt,P),me=new iT(G,ze,Z),Gt=new W1(b),Kt=new AA(A,_t,yt,be,ze,W,Gt),se=new KA(A,b),At=new wA,Rt=new PA(be),Lt=new G1(A,_t,yt,Zt,Ut,E,m),zt=new HA(A,Ut,ze),J=new QA(G,P,ze,Zt),q=new k1(G,be,P),Nt=new eT(G,be,P),P.programs=Kt.programs,A.capabilities=ze,A.extensions=be,A.properties=b,A.renderLists=At,A.shadowMap=zt,A.state=Zt,A.info=P}tt(),T!==xi&&(V=new rT(T,i.width,i.height,l,c));const mt=new jA(A,G);this.xr=mt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(C){C!==void 0&&(xt=C,this.setSize(I,et,!1))},this.getSize=function(C){return C.set(I,et)},this.setSize=function(C,K,ft=!0){if(mt.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,et=K,i.width=Math.floor(C*xt),i.height=Math.floor(K*xt),ft===!0&&(i.style.width=C+"px",i.style.height=K+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(I*xt,et*xt).floor()},this.setDrawingBufferSize=function(C,K,ft){I=C,et=K,xt=ft,i.width=Math.floor(C*ft),i.height=Math.floor(K*ft),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(T===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(st)},this.setViewport=function(C,K,ft,ot){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,K,ft,ot),Zt.viewport(F.copy(st).multiplyScalar(xt).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,K,ft,ot){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,K,ft,ot),Zt.scissor(H.copy(dt).multiplyScalar(xt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(C){Zt.setScissorTest(Dt=C)},this.setOpaqueSort=function(C){wt=C},this.setTransparentSort=function(C){Ft=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ft=!0){let ot=0;if(C){let nt=!1;if($!==null){const Pt=$.texture.format;nt=M.has(Pt)}if(nt){const Pt=$.texture.type,kt=v.has(Pt),It=Lt.getClearColor(),qt=Lt.getClearAlpha(),Jt=It.r,ae=It.g,$t=It.b;kt?(w[0]=Jt,w[1]=ae,w[2]=$t,w[3]=qt,G.clearBufferuiv(G.COLOR,0,w)):(U[0]=Jt,U[1]=ae,U[2]=$t,U[3]=qt,G.clearBufferiv(G.COLOR,0,U))}else ot|=G.COLOR_BUFFER_BIT}K&&(ot|=G.DEPTH_BUFFER_BIT),ft&&(ot|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),Lt.dispose(),At.dispose(),Rt.dispose(),b.dispose(),_t.dispose(),yt.dispose(),Ut.dispose(),W.dispose(),J.dispose(),Kt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",je),mt.removeEventListener("sessionend",_n),on.stop()};function Mt(C){C.preventDefault(),E_("WebGLRenderer: Context Lost."),L=!0}function Vt(){E_("WebGLRenderer: Context Restored."),L=!1;const C=P.autoReset,K=zt.enabled,ft=zt.autoUpdate,ot=zt.needsUpdate,nt=zt.type;tt(),P.autoReset=C,zt.enabled=K,zt.autoUpdate=ft,zt.needsUpdate=ot,zt.type=nt}function Ot(C){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const K=C.target;K.removeEventListener("dispose",te),Bt(K)}function Bt(C){re(C),b.remove(C)}function re(C){const K=b.get(C).programs;K!==void 0&&(K.forEach(function(ft){Kt.releaseProgram(ft)}),C.isShaderMaterial&&Kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ft,ot,nt,Pt){K===null&&(K=Me);const kt=nt.isMesh&&nt.matrixWorld.determinant()<0,It=xs(C,K,ft,ot,nt);Zt.setMaterial(ot,kt);let qt=ft.index,Jt=1;if(ot.wireframe===!0){if(qt=Qt.getWireframeAttribute(ft),qt===void 0)return;Jt=2}const ae=ft.drawRange,$t=ft.attributes.position;let oe=ae.start*Jt,He=(ae.start+ae.count)*Jt;Pt!==null&&(oe=Math.max(oe,Pt.start*Jt),He=Math.min(He,(Pt.start+Pt.count)*Jt)),qt!==null?(oe=Math.max(oe,0),He=Math.min(He,qt.count)):$t!=null&&(oe=Math.max(oe,0),He=Math.min(He,$t.count));const ln=He-oe;if(ln<0||ln===1/0)return;W.setup(nt,ot,It,ft,qt);let nn,ke=q;if(qt!==null&&(nn=pt.get(qt),ke=Nt,ke.setIndex(nn)),nt.isMesh)ot.wireframe===!0?(Zt.setLineWidth(ot.wireframeLinewidth*Ue()),ke.setMode(G.LINES)):ke.setMode(G.TRIANGLES);else if(nt.isLine){let ne=ot.linewidth;ne===void 0&&(ne=1),Zt.setLineWidth(ne*Ue()),nt.isLineSegments?ke.setMode(G.LINES):nt.isLineLoop?ke.setMode(G.LINE_LOOP):ke.setMode(G.LINE_STRIP)}else nt.isPoints?ke.setMode(G.POINTS):nt.isSprite&&ke.setMode(G.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))ke.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const ne=nt._multiDrawStarts,Ge=nt._multiDrawCounts,he=nt._multiDrawCount,zn=qt?pt.get(qt).bytesPerElement:1,ia=b.get(ot).currentProgram.getUniforms();for(let In=0;In<he;In++)ia.setValue(G,"_gl_DrawID",In),ke.render(ne[In]/zn,Ge[In])}else if(nt.isInstancedMesh)ke.renderInstances(oe,ln,nt.count);else if(ft.isInstancedBufferGeometry){const ne=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ge=Math.min(ft.instanceCount,ne);ke.renderInstances(oe,ln,Ge)}else ke.render(oe,ln)};function ge(C,K,ft){C.transparent===!0&&C.side===Ra&&C.forceSinglePass===!1?(C.side=ci,C.needsUpdate=!0,na(C,K,ft),C.side=_s,C.needsUpdate=!0,na(C,K,ft),C.side=Ra):na(C,K,ft)}this.compile=function(C,K,ft=null){ft===null&&(ft=C),N=Rt.get(ft),N.init(K),O.push(N),ft.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),C!==ft&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),N.setupLights();const ot=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Pt=nt.material;if(Pt)if(Array.isArray(Pt))for(let kt=0;kt<Pt.length;kt++){const It=Pt[kt];ge(It,ft,nt),ot.add(It)}else ge(Pt,ft,nt),ot.add(Pt)}),N=O.pop(),ot},this.compileAsync=function(C,K,ft=null){const ot=this.compile(C,K,ft);return new Promise(nt=>{function Pt(){if(ot.forEach(function(kt){b.get(kt).currentProgram.isReady()&&ot.delete(kt)}),ot.size===0){nt(C);return}setTimeout(Pt,10)}be.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Be=null;function dn(C){Be&&Be(C)}function je(){on.stop()}function _n(){on.start()}const on=new cx;on.setAnimationLoop(dn),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(C){Be=C,mt.setAnimationLoop(C),C===null?on.stop():on.start()},mt.addEventListener("sessionstart",je),mt.addEventListener("sessionend",_n),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ft=mt.enabled===!0&&mt.isPresenting===!0,ot=V!==null&&($===null||ft)&&V.begin(A,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(K),K=mt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,K,$),N=Rt.get(C,O.length),N.init(K),O.push(N),rn.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Wt.setFromProjectionMatrix(rn,Zi,K.reversedDepth),ue=this.localClippingEnabled,Xt=Gt.init(this.clippingPlanes,ue),D=At.get(C,z.length),D.init(),z.push(D),mt.enabled===!0&&mt.isPresenting===!0){const kt=A.xr.getDepthSensingMesh();kt!==null&&$e(kt,K,-1/0,A.sortObjects)}$e(C,K,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(wt,Ft),fe=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,fe&&Lt.addToRenderList(D,C),this.info.render.frame++,Xt===!0&&Gt.beginShadows();const nt=N.state.shadowsArray;if(zt.render(nt,C,K),Xt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&V.hasRenderPass())===!1){const kt=D.opaque,It=D.transmissive;if(N.setupLights(),K.isArrayCamera){const qt=K.cameras;if(It.length>0)for(let Jt=0,ae=qt.length;Jt<ae;Jt++){const $t=qt[Jt];fn(kt,It,C,$t)}fe&&Lt.render(C);for(let Jt=0,ae=qt.length;Jt<ae;Jt++){const $t=qt[Jt];Ce(D,C,$t,$t.viewport)}}else It.length>0&&fn(kt,It,C,K),fe&&Lt.render(C),Ce(D,C,K)}$!==null&&j===0&&(Z.updateMultisampleRenderTarget($),Z.updateRenderTargetMipmap($)),ot&&V.end(A),C.isScene===!0&&C.onAfterRender(A,C,K),W.resetDefaultState(),ct=-1,ut=null,O.pop(),O.length>0?(N=O[O.length-1],Xt===!0&&Gt.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?D=z[z.length-1]:D=null};function $e(C,K,ft,ot){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Wt.intersectsSprite(C)){ot&&ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4(rn);const kt=Ut.update(C),It=C.material;It.visible&&D.push(C,kt,It,ft,ve.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Wt.intersectsObject(C))){const kt=Ut.update(C),It=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ve.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ve.copy(kt.boundingSphere.center)),ve.applyMatrix4(C.matrixWorld).applyMatrix4(rn)),Array.isArray(It)){const qt=kt.groups;for(let Jt=0,ae=qt.length;Jt<ae;Jt++){const $t=qt[Jt],oe=It[$t.materialIndex];oe&&oe.visible&&D.push(C,kt,oe,ft,ve.z,$t)}}else It.visible&&D.push(C,kt,It,ft,ve.z,null)}}const Pt=C.children;for(let kt=0,It=Pt.length;kt<It;kt++)$e(Pt[kt],K,ft,ot)}function Ce(C,K,ft,ot){const{opaque:nt,transmissive:Pt,transparent:kt}=C;N.setupLightsView(ft),Xt===!0&&Gt.setGlobalState(A.clippingPlanes,ft),ot&&Zt.viewport(F.copy(ot)),nt.length>0&&Pn(nt,K,ft),Pt.length>0&&Pn(Pt,K,ft),kt.length>0&&Pn(kt,K,ft),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function fn(C,K,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ot.id]===void 0){const oe=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ot.id]=new Qi(1,1,{generateMipmaps:!0,type:oe?Ua:xi,minFilter:Ws,samples:ze.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Pt=N.state.transmissionRenderTarget[ot.id],kt=ot.viewport||F;Pt.setSize(kt.z*A.transmissionResolutionScale,kt.w*A.transmissionResolutionScale);const It=A.getRenderTarget(),qt=A.getActiveCubeFace(),Jt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(Tt),Et=A.getClearAlpha(),Et<1&&A.setClearColor(16777215,.5),A.clear(),fe&&Lt.render(ft);const ae=A.toneMapping;A.toneMapping=Ki;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),N.setupLightsView(ot),Xt===!0&&Gt.setGlobalState(A.clippingPlanes,ot),Pn(C,ft,ot),Z.updateMultisampleRenderTarget(Pt),Z.updateRenderTargetMipmap(Pt),be.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let He=0,ln=K.length;He<ln;He++){const nn=K[He],{object:ke,geometry:ne,material:Ge,group:he}=nn;if(Ge.side===Ra&&ke.layers.test(ot.layers)){const zn=Ge.side;Ge.side=ci,Ge.needsUpdate=!0,Pa(ke,ft,ot,ne,Ge,he),Ge.side=zn,Ge.needsUpdate=!0,oe=!0}}oe===!0&&(Z.updateMultisampleRenderTarget(Pt),Z.updateRenderTargetMipmap(Pt))}A.setRenderTarget(It,qt,Jt),A.setClearColor(Tt,Et),$t!==void 0&&(ot.viewport=$t),A.toneMapping=ae}function Pn(C,K,ft){const ot=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,Pt=C.length;nt<Pt;nt++){const kt=C[nt],{object:It,geometry:qt,group:Jt}=kt;let ae=kt.material;ae.allowOverride===!0&&ot!==null&&(ae=ot),It.layers.test(ft.layers)&&Pa(It,K,ft,qt,ae,Jt)}}function Pa(C,K,ft,ot,nt,Pt){C.onBeforeRender(A,K,ft,ot,nt,Pt),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(A,K,ft,ot,C,Pt),nt.transparent===!0&&nt.side===Ra&&nt.forceSinglePass===!1?(nt.side=ci,nt.needsUpdate=!0,A.renderBufferDirect(ft,K,ot,nt,C,Pt),nt.side=_s,nt.needsUpdate=!0,A.renderBufferDirect(ft,K,ot,nt,C,Pt),nt.side=Ra):A.renderBufferDirect(ft,K,ot,nt,C,Pt),C.onAfterRender(A,K,ft,ot,nt,Pt)}function na(C,K,ft){K.isScene!==!0&&(K=Me);const ot=b.get(C),nt=N.state.lights,Pt=N.state.shadowsArray,kt=nt.state.version,It=Kt.getParameters(C,nt.state,Pt,K,ft),qt=Kt.getProgramCacheKey(It);let Jt=ot.programs;ot.environment=C.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(C.isMeshStandardMaterial?yt:_t).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",te),Jt=new Map,ot.programs=Jt);let ae=Jt.get(qt);if(ae!==void 0){if(ot.currentProgram===ae&&ot.lightsStateVersion===kt)return vs(C,It),ae}else It.uniforms=Kt.getUniforms(C),C.onBeforeCompile(It,A),ae=Kt.acquireProgram(It,qt),Jt.set(qt,ae),ot.uniforms=It.uniforms;const $t=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($t.clippingPlanes=Gt.uniform),vs(C,It),ot.needsLights=za(C),ot.lightsStateVersion=kt,ot.needsLights&&($t.ambientLightColor.value=nt.state.ambient,$t.lightProbe.value=nt.state.probe,$t.directionalLights.value=nt.state.directional,$t.directionalLightShadows.value=nt.state.directionalShadow,$t.spotLights.value=nt.state.spot,$t.spotLightShadows.value=nt.state.spotShadow,$t.rectAreaLights.value=nt.state.rectArea,$t.ltc_1.value=nt.state.rectAreaLTC1,$t.ltc_2.value=nt.state.rectAreaLTC2,$t.pointLights.value=nt.state.point,$t.pointLightShadows.value=nt.state.pointShadow,$t.hemisphereLights.value=nt.state.hemi,$t.directionalShadowMap.value=nt.state.directionalShadowMap,$t.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,$t.spotShadowMap.value=nt.state.spotShadowMap,$t.spotLightMatrix.value=nt.state.spotLightMatrix,$t.spotLightMap.value=nt.state.spotLightMap,$t.pointShadowMap.value=nt.state.pointShadowMap,$t.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=ae,ot.uniformsList=null,ae}function Ks(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function vs(C,K){const ft=b.get(C);ft.outputColorSpace=K.outputColorSpace,ft.batching=K.batching,ft.batchingColor=K.batchingColor,ft.instancing=K.instancing,ft.instancingColor=K.instancingColor,ft.instancingMorph=K.instancingMorph,ft.skinning=K.skinning,ft.morphTargets=K.morphTargets,ft.morphNormals=K.morphNormals,ft.morphColors=K.morphColors,ft.morphTargetsCount=K.morphTargetsCount,ft.numClippingPlanes=K.numClippingPlanes,ft.numIntersection=K.numClipIntersection,ft.vertexAlphas=K.vertexAlphas,ft.vertexTangents=K.vertexTangents,ft.toneMapping=K.toneMapping}function xs(C,K,ft,ot,nt){K.isScene!==!0&&(K=Me),Z.resetTextureUnits();const Pt=K.fog,kt=ot.isMeshStandardMaterial?K.environment:null,It=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Jr,qt=(ot.isMeshStandardMaterial?yt:_t).get(ot.envMap||kt),Jt=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ae=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!ft.morphAttributes.position,oe=!!ft.morphAttributes.normal,He=!!ft.morphAttributes.color;let ln=Ki;ot.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ln=A.toneMapping);const nn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,ke=nn!==void 0?nn.length:0,ne=b.get(ot),Ge=N.state.lights;if(Xt===!0&&(ue===!0||C!==ut)){const Bn=C===ut&&ot.id===ct;Gt.setState(ot,C,Bn)}let he=!1;ot.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ge.state.version||ne.outputColorSpace!==It||nt.isBatchedMesh&&ne.batching===!1||!nt.isBatchedMesh&&ne.batching===!0||nt.isBatchedMesh&&ne.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&ne.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&ne.instancing===!1||!nt.isInstancedMesh&&ne.instancing===!0||nt.isSkinnedMesh&&ne.skinning===!1||!nt.isSkinnedMesh&&ne.skinning===!0||nt.isInstancedMesh&&ne.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ne.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ne.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ne.instancingMorph===!1&&nt.morphTexture!==null||ne.envMap!==qt||ot.fog===!0&&ne.fog!==Pt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Gt.numPlanes||ne.numIntersection!==Gt.numIntersection)||ne.vertexAlphas!==Jt||ne.vertexTangents!==ae||ne.morphTargets!==$t||ne.morphNormals!==oe||ne.morphColors!==He||ne.toneMapping!==ln||ne.morphTargetsCount!==ke)&&(he=!0):(he=!0,ne.__version=ot.version);let zn=ne.currentProgram;he===!0&&(zn=na(ot,K,nt));let ia=!1,In=!1,Si=!1;const Xe=zn.getUniforms(),Fn=ne.uniforms;if(Zt.useProgram(zn.program)&&(ia=!0,In=!0,Si=!0),ot.id!==ct&&(ct=ot.id,In=!0),ia||ut!==C){Zt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xe.setValue(G,"projectionMatrix",C.projectionMatrix),Xe.setValue(G,"viewMatrix",C.matrixWorldInverse);const Hn=Xe.map.cameraPosition;Hn!==void 0&&Hn.setValue(G,Ee.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&Xe.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Xe.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),ut!==C&&(ut=C,In=!0,Si=!0)}if(ne.needsLights&&(Ge.state.directionalShadowMap.length>0&&Xe.setValue(G,"directionalShadowMap",Ge.state.directionalShadowMap,Z),Ge.state.spotShadowMap.length>0&&Xe.setValue(G,"spotShadowMap",Ge.state.spotShadowMap,Z),Ge.state.pointShadowMap.length>0&&Xe.setValue(G,"pointShadowMap",Ge.state.pointShadowMap,Z)),nt.isSkinnedMesh){Xe.setOptional(G,nt,"bindMatrix"),Xe.setOptional(G,nt,"bindMatrixInverse");const Bn=nt.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Xe.setValue(G,"boneTexture",Bn.boneTexture,Z))}nt.isBatchedMesh&&(Xe.setOptional(G,nt,"batchingTexture"),Xe.setValue(G,"batchingTexture",nt._matricesTexture,Z),Xe.setOptional(G,nt,"batchingIdTexture"),Xe.setValue(G,"batchingIdTexture",nt._indirectTexture,Z),Xe.setOptional(G,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Xe.setValue(G,"batchingColorTexture",nt._colorsTexture,Z));const An=ft.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&me.update(nt,ft,zn),(In||ne.receiveShadow!==nt.receiveShadow)&&(ne.receiveShadow=nt.receiveShadow,Xe.setValue(G,"receiveShadow",nt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Fn.envMap.value=qt,Fn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Fn.envMapIntensity.value=K.environmentIntensity),Fn.dfgLUT!==void 0&&(Fn.dfgLUT.value=$A()),In&&(Xe.setValue(G,"toneMappingExposure",A.toneMappingExposure),ne.needsLights&&io(Fn,Si),Pt&&ot.fog===!0&&se.refreshFogUniforms(Fn,Pt),se.refreshMaterialUniforms(Fn,ot,xt,et,N.state.transmissionRenderTarget[C.id]),$c.upload(G,Ks(ne),Fn,Z)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&($c.upload(G,Ks(ne),Fn,Z),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Xe.setValue(G,"center",nt.center),Xe.setValue(G,"modelViewMatrix",nt.modelViewMatrix),Xe.setValue(G,"normalMatrix",nt.normalMatrix),Xe.setValue(G,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Bn=ot.uniformsGroups;for(let Hn=0,Qs=Bn.length;Hn<Qs;Hn++){const Ni=Bn[Hn];J.update(Ni,zn),J.bind(Ni,zn)}}return zn}function io(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function za(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,K,ft){const ot=b.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=K,b.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ft=b.get(C);ft.__webglFramebuffer=K,ft.__useDefaultFramebuffer=K===void 0};const Ia=G.createFramebuffer();this.setRenderTarget=function(C,K=0,ft=0){$=C,k=K,j=ft;let ot=null,nt=!1,Pt=!1;if(C){const It=b.get(C);if(It.__useDefaultFramebuffer!==void 0){Zt.bindFramebuffer(G.FRAMEBUFFER,It.__webglFramebuffer),F.copy(C.viewport),H.copy(C.scissor),rt=C.scissorTest,Zt.viewport(F),Zt.scissor(H),Zt.setScissorTest(rt),ct=-1;return}else if(It.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(It.__hasExternalTextures)Z.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ae=C.depthTexture;if(It.__boundDepthTexture!==ae){if(ae!==null&&b.has(ae)&&(C.width!==ae.image.width||C.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const Jt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[K])?ot=Jt[K][ft]:ot=Jt[K],nt=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?ot=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?ot=Jt[ft]:ot=Jt,F.copy(C.viewport),H.copy(C.scissor),rt=C.scissorTest}else F.copy(st).multiplyScalar(xt).floor(),H.copy(dt).multiplyScalar(xt).floor(),rt=Dt;if(ft!==0&&(ot=Ia),Zt.bindFramebuffer(G.FRAMEBUFFER,ot)&&Zt.drawBuffers(C,ot),Zt.viewport(F),Zt.scissor(H),Zt.setScissorTest(rt),nt){const It=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,It.__webglTexture,ft)}else if(Pt){const It=K;for(let qt=0;qt<C.textures.length;qt++){const Jt=b.get(C.textures[qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qt,Jt.__webglTexture,ft,It)}}else if(C!==null&&ft!==0){const It=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,It.__webglTexture,ft)}ct=-1},this.readRenderTargetPixels=function(C,K,ft,ot,nt,Pt,kt,It=0){if(!(C&&C.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(qt=qt[kt]),qt){Zt.bindFramebuffer(G.FRAMEBUFFER,qt);try{const Jt=C.textures[It],ae=Jt.format,$t=Jt.type;if(!ze.textureFormatReadable(ae)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable($t)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ot&&ft>=0&&ft<=C.height-nt&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(K,ft,ot,nt,Ct.convert(ae),Ct.convert($t),Pt))}finally{const Jt=$!==null?b.get($).__webglFramebuffer:null;Zt.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ft,ot,nt,Pt,kt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(qt=qt[kt]),qt)if(K>=0&&K<=C.width-ot&&ft>=0&&ft<=C.height-nt){Zt.bindFramebuffer(G.FRAMEBUFFER,qt);const Jt=C.textures[It],ae=Jt.format,$t=Jt.type;if(!ze.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,oe),G.bufferData(G.PIXEL_PACK_BUFFER,Pt.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(K,ft,ot,nt,Ct.convert(ae),Ct.convert($t),0);const He=$!==null?b.get($).__webglFramebuffer:null;Zt.bindFramebuffer(G.FRAMEBUFFER,He);const ln=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await gM(G,ln,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,oe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Pt),G.deleteBuffer(oe),G.deleteSync(ln),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ft=0){const ot=Math.pow(2,-ft),nt=Math.floor(C.image.width*ot),Pt=Math.floor(C.image.height*ot),kt=K!==null?K.x:0,It=K!==null?K.y:0;Z.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ft,0,0,kt,It,nt,Pt),Zt.unbindTexture()};const Ss=G.createFramebuffer(),Fa=G.createFramebuffer();this.copyTextureToTexture=function(C,K,ft=null,ot=null,nt=0,Pt=null){Pt===null&&(nt!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=nt,nt=0):Pt=0);let kt,It,qt,Jt,ae,$t,oe,He,ln;const nn=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(ft!==null)kt=ft.max.x-ft.min.x,It=ft.max.y-ft.min.y,qt=ft.isBox3?ft.max.z-ft.min.z:1,Jt=ft.min.x,ae=ft.min.y,$t=ft.isBox3?ft.min.z:0;else{const An=Math.pow(2,-nt);kt=Math.floor(nn.width*An),It=Math.floor(nn.height*An),C.isDataArrayTexture?qt=nn.depth:C.isData3DTexture?qt=Math.floor(nn.depth*An):qt=1,Jt=0,ae=0,$t=0}ot!==null?(oe=ot.x,He=ot.y,ln=ot.z):(oe=0,He=0,ln=0);const ke=Ct.convert(K.format),ne=Ct.convert(K.type);let Ge;K.isData3DTexture?(Z.setTexture3D(K,0),Ge=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Z.setTexture2DArray(K,0),Ge=G.TEXTURE_2D_ARRAY):(Z.setTexture2D(K,0),Ge=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const he=G.getParameter(G.UNPACK_ROW_LENGTH),zn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ia=G.getParameter(G.UNPACK_SKIP_PIXELS),In=G.getParameter(G.UNPACK_SKIP_ROWS),Si=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,nn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ae),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$t);const Xe=C.isDataArrayTexture||C.isData3DTexture,Fn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const An=b.get(C),Bn=b.get(K),Hn=b.get(An.__renderTarget),Qs=b.get(Bn.__renderTarget);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,Hn.__webglFramebuffer),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let Ni=0;Ni<qt;Ni++)Xe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(C).__webglTexture,nt,$t+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(K).__webglTexture,Pt,ln+Ni)),G.blitFramebuffer(Jt,ae,kt,It,oe,He,kt,It,G.DEPTH_BUFFER_BIT,G.NEAREST);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||b.has(C)){const An=b.get(C),Bn=b.get(K);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,Ss),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fa);for(let Hn=0;Hn<qt;Hn++)Xe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,nt,$t+Hn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,nt),Fn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bn.__webglTexture,Pt,ln+Hn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bn.__webglTexture,Pt),nt!==0?G.blitFramebuffer(Jt,ae,kt,It,oe,He,kt,It,G.COLOR_BUFFER_BIT,G.NEAREST):Fn?G.copyTexSubImage3D(Ge,Pt,oe,He,ln+Hn,Jt,ae,kt,It):G.copyTexSubImage2D(Ge,Pt,oe,He,Jt,ae,kt,It);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Fn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ge,Pt,oe,He,ln,kt,It,qt,ke,ne,nn.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(Ge,Pt,oe,He,ln,kt,It,qt,ke,nn.data):G.texSubImage3D(Ge,Pt,oe,He,ln,kt,It,qt,ke,ne,nn):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Pt,oe,He,kt,It,ke,ne,nn.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Pt,oe,He,nn.width,nn.height,ke,nn.data):G.texSubImage2D(G.TEXTURE_2D,Pt,oe,He,kt,It,ke,ne,nn);G.pixelStorei(G.UNPACK_ROW_LENGTH,he),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ia),G.pixelStorei(G.UNPACK_SKIP_ROWS,In),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Si),Pt===0&&K.generateMipmaps&&G.generateMipmap(Ge),Zt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),Zt.unbindTexture()},this.resetState=function(){k=0,j=0,$=null,Zt.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pe._getUnpackColorSpace()}}const Mv={type:"change"},Ap={type:"start"},px={type:"end"},qc=new uu,Ev=new Aa,eR=Math.cos(70*vM.DEG2RAD),Cn=new Y,li=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class nR extends aE{constructor(t,i=null){super(t,i),this.state=Je.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Na,this._lastTargetPosition=new Y,this._quat=new Na().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K_,this._sphericalDelta=new K_,this._scale=1,this._panOffset=new Y,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new Y,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aR.bind(this),this._onPointerDown=iR.bind(this),this._onPointerUp=sR.bind(this),this._onContextMenu=hR.bind(this),this._onMouseWheel=lR.bind(this),this._onKeyDown=cR.bind(this),this._onTouchStart=uR.bind(this),this._onTouchMove=fR.bind(this),this._onMouseDown=rR.bind(this),this._onMouseMove=oR.bind(this),this._interceptControlDown=dR.bind(this),this._interceptControlUp=pR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mv),this.update(),this.state=Je.NONE}update(t=null){const i=this.object.position;Cn.copy(i).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=li:s>Math.PI&&(s-=li),l<-Math.PI?l+=li:l>Math.PI&&(l-=li),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=Cn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<eR?this.object.lookAt(this.target):(Ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(Ev,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(Mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?li/60*this.autoRotateSpeed*t:li/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Cn.setFromMatrixColumn(i,0),Cn.multiplyScalar(-t),this._panOffset.add(Cn)}_panUp(t,i){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(i,1):(Cn.setFromMatrixColumn(i,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(t),this._panOffset.add(Cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Cn.copy(l).sub(this.target);let c=Cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(li*this._rotateDelta.x/i.clientHeight),this._rotateUp(li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(li*this._rotateDelta.x/i.clientHeight),this._rotateUp(li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function iR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function aR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function sR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(px),this.state=Je.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function rR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Je.DOLLY;break;case qr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}break;case qr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Ap)}function oR(r){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function lR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(r.preventDefault(),this.dispatchEvent(Ap),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(px))}function cR(r){this.enabled!==!1&&this._handleKeyDown(r)}function uR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Je.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Je.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Ap)}function fR(r){switch(this._trackPointer(r),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Je.NONE}}function hR(r){this.enabled!==!1&&r.preventDefault()}function dR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mR(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function to(r){if(!mR(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function bv(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Wr(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function Oa(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function Zs(r){return Math.sqrt(Sn(r,r))}function gR(r,t){return r.map(i=>i*t)}function Nn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function mx(r){const t=Zs(r);return gR(r,1/t)}function hl(r){const t=Zs(r);return Nn(r,1/t)}function Sn(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function gs(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function _R(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=Sn(t,r),f=gs(t,r);return r[0]=r[0]*s+f[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+f[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+f[2]*l+t[2]*c*(1-s),r}function vR(r,t){const i=hl(Wr([...t],Nn([...r],-Sn(t,r))));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=gs(r,i),l=[r,i,s];return f=>to(l.map(h=>Sn(h,f)))}let gx=0;function xR(){gx=0}function ou(r={}){return{id:r.id??gx++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],moment:r.moment?[...r.moment]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0],fixed:r.fixed??!1}}function mu(r,t){return{...r,...t}}function SR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(h=>h.id===t),l=r.find(h=>h.id===i);if(!s||!l)return;const c=vR(hl([...s.moment]),Oa(s.pos,l.pos));if(!c)return;const f=s.pos;return r.map(h=>mu(h,{pos:c(Oa(f,h.pos)),vel:c(h.vel??[0,0,0]),moment:c(h.moment),f:c(h.f??[0,0,0]),tau:c(h.tau??[0,0,0])}))}function yR(r,t){return r.map(i=>({...i,pos:Nn(i.pos,t)})).map(ou)}function MR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.join(", "),moment:c.moment.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function ER(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const h=f.split(",").map(m=>parseFloat(m.trim()));if(h.length===3&&h.every(m=>!isNaN(m)))return h}return f};for(const f of t.magnets){const h={};for(const[m,p]of Object.entries(f))h[m]=c(p);to(h.pos),to(hl(h.moment)),l.push(h)}return{name:i,unit:s,magnets:l}}async function Tv(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:f}=ER(s),h={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in h))throw new Error(`Unknown unit in preset: ${c}`);const m=h[c];return{name:l||r,magnets:yR(f,m)}}catch{if(r in ip){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=ip[r]();return l.map(c=>Nn(c.pos,t)),{name:r,magnets:l.map(ou)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function bR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(ip).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const ip={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:hl([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},_x=4*Math.PI*1e-7;function TR(r,t,i,s,l){const c=Zs(l),f=mx(l),h=Sn(i,f),m=Sn(s,f),p=Sn(i,s),g=4*Math.PI*_x*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:h,q:m,r:p,K:g,m1:i,m2:s,d:l}}function AR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function RR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:h,m2:m}=r,p=t**4,g=3*f/p,_=5*s*l-c;return Nn([i[0]*_-h[0]*l-m[0]*s,i[1]*_-h[1]*l-m[1]*s,i[2]*_-h[2]*l-m[2]*s],g)}function CR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:h}=r,m=c/t**3,p=Nn(bv(Nn(gs(f,i),-3*l),gs(f,h)),-m),g=Nn(bv(Nn(gs(h,i),-3*s),gs(h,f)),-m);return{tor1:p,tor2:g}}function wR(r,t,i,s,l){const c=TR(r,t,i,s,l),f=AR(c),h=RR(c),m=Nn([...h],-1),{tor1:p,tor2:g}=CR(c);return{U:f,force1:h,force2:m,torque1:p,torque2:g}}const DR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3,rollingFriction:.005};class UR{constructor(t={}){const i={...DR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.rollingFriction=i.rollingFriction,this.mMag=i.br/_x,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function ap(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Av(r,t,i,s){if(Math.abs(r)<1e-20)return ap(t,i,s);const l=t/r,c=i/r,f=s/r,h=l/3,m=c-l*l/3,p=f-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),S=Math.cbrt(-p/2-_);return[x+S-h]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,S=2*Math.cbrt(_);return[S*Math.cos(x)-h,S*Math.cos(x+2*Math.PI/3)-h,S*Math.cos(x+4*Math.PI/3)-h]}else{const _=Math.cbrt(-p/2);return[2*_-h,-_-h]}}function LR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Av(t,i,s,l);const c=t/r,f=i/r,h=s/r,m=l/r,p=c/4,g=f-3*c*c/8,_=h-c*f/2+c*c*c/8,x=m-c*h/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const w=[];for(const U of ap(1,g,x))if(U>=-1e-12){const D=Math.sqrt(Math.max(0,U));w.push(D-p,-D-p)}return w}const S=Av(1,g/2,(g*g-4*x)/16,-_*_/64),E=Math.max(...S,1e-12),T=Math.sqrt(Math.max(E,0));if(T<1e-12)return[];const M=_/(4*T),v=[];for(const[w,U]of[[1,-M],[-1,M]])for(const D of ap(1,w*T,g/2+E+U))v.push(D-p);return v}function sp(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],h=r[c],m=Oa(f,h),p=Zs(m);p<=t&&i.push({i:l,j:c,normal:Nn(m,1/p),dist:p})}return i}function Rv(r,t,i,s=null,l=20,c=1e-7){const f=r.map(_=>[..._]),h=sp(f,t+i),m=t-i,p=t-i/2,g=s||r.map(()=>!1);for(let _=0;_<l;_++){let x=0;for(const{i:S,j:E}of h){const T=Oa(f[S],f[E]),M=Zs(T),v=Nn(T,1/M);let w=0;if(M<m?(w=p-M,x=Math.max(x,t-M)):M<t&&(w=(t-M)*.5,x=Math.max(x,t-M)),w>c){const U=f[S],D=f[E],N=+g[S]-+g[E],z=w*((1-N)*.5),O=w*((1+N)*.5);U[0]-=v[0]*z,U[1]-=v[1]*z,U[2]-=v[2]*z,D[0]+=v[0]*O,D[1]+=v[1]*O,D[2]+=v[2]*O}}if(x<c)break}return f}function NR(r,t,i,s,l=null,c=.3,f=1e-7){const h=l||r.map(()=>!1),m=t.map((x,S)=>h[S]?[0,0,0]:[...x]),p=i.map((x,S)=>h[S]?[0,0,0]:[...x]),g=vx(s,h),_=new Float64Array(s.length);if(g.length>0){const x=g.map(E=>s[E]);HR(p,x,h,f);const S=OR(m,p,x,h,c,5,f);g.forEach((E,T)=>{_[E]=S[T]})}return{constrainedForces:m,constrainedVel:p,forceLambda:_}}function vx(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function OR(r,t,i,s,l=.3,c=5,f=1e-7){const h=i.length,m=new Float64Array(h);if(h===0)return m;const p=i.map(w=>{const U=w.normal,[D,N]=IR(U);return[U,D,N]}),g=new Array(h).fill(!0),_=i.map((w,U)=>{const{i:D,j:N,normal:z}=w,O=Oa(t[N],t[D]),V=Sn(O,z),A=[O[0]-z[0]*V,O[1]-z[1]*V,O[2]-z[2]*V],L=Zs(A);return L>f?(g[U]=!1,Nn(A,-1/L)):[0,0,0]}),x=r.map(w=>[...w]),S=i.map(()=>[0,0,0]);for(let w=0;w<c;w++){const{A:U,b:D,eqMap:N}=Dv(i,s,x,p,g),z=rp(U,D);if(!z)break;const O=Cv(z,N,g);if(PR(O,g,l,f)){for(let V=0;V<h;V++){m[V]=O[V].fn;const A=wv(p[V],O[V],g[V],S[V]);tu(r,i[V],A,s)}return m}r.forEach((V,A)=>{const L=x[A];L[0]=V[0],L[1]=V[1],L[2]=V[2]});for(let V=0;V<h;V++)g[V]||(zR(p[V],O[V],S[V],_[V],l,f),tu(x,i[V],S[V],s))}const{A:E,b:T,eqMap:M}=Dv(i,s,x,p,g),v=rp(E,T);if(v){const w=Cv(v,M,g);for(let U=0;U<h;U++){m[U]=w[U].fn;const D=wv(p[U],w[U],g[U],S[U]);tu(r,i[U],D,s)}}return m}function tu(r,t,i,s){const{i:l,j:c}=t;if(!s[l]){const f=r[l];f[0]+=i[0],f[1]+=i[1],f[2]+=i[2]}if(!s[c]){const f=r[c];f[0]-=i[0],f[1]-=i[1],f[2]-=i[2]}}function Cv(r,t,i){return Array.from(t,(s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,h=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:h}})}function PR(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:h,ft2:m}=r[c],p=Math.sqrt(h*h+m*m),g=i*Math.abs(f);t[c]&&p>g+s?(t[c]=!1,l=!1):!t[c]&&p<=g-s}return l}function wv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[h,m,p]=r,g=[l*h[0]+c*m[0]+f*p[0],l*h[1]+c*m[1]+f*p[1],l*h[2]+c*m[2]+f*p[2]];return i||Wr(g,s),g}function zR(r,t,i,s,l,c){const[f,h,m]=r,{fn:p,ft1:g,ft2:_}=t,x=l*Math.abs(p);if(s[0]!==0||s[1]!==0||s[2]!==0)i[0]=s[0]*x,i[1]=s[1]*x,i[2]=s[2]*x;else{const S=Math.sqrt(g*g+_*_);if(S>c){const E=x/S;i[0]=(g*h[0]+_*m[0])*E,i[1]=(g*h[1]+_*m[1])*E,i[2]=(g*h[2]+_*m[2])*E}else i[0]=0,i[1]=0,i[2]=0}}function IR(r){const t=Math.abs(r[0])<.9?[1,0,0]:[0,1,0],i=mx(gs(r,t)),s=gs(r,i);return[i,s]}function Dv(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let h=0;for(let S=0;S<c;S++)f[S]=h,h+=l[S]?3:1;const m=[],p=[],g=[],_=new Float64Array(h);for(let S=0;S<c;S++){const E=r[S],T=E.i,M=E.j,v=t[T]?0:1,w=t[M]?0:1,U=l[S]?3:1;for(let D=0;D<U;D++){const N=s[S][D],z=f[S]+D;_[z]=v*Sn(i[T],N)-w*Sn(i[M],N);for(let O=0;O<c;O++){const V=r[O],A=V.i,L=V.j,k=l[O]?3:1;for(let j=0;j<k;j++){const $=s[O][j],ct=f[O]+j,ut=Sn(N,$);let F=0;T===A&&(F-=v*ut),T===L&&(F+=v*ut),M===A&&(F+=w*ut),M===L&&(F-=w*ut),Math.abs(F)>1e-15&&(m.push(z),p.push(ct),g.push(F))}}}}return{A:xx(h,m,p,g),b:_,neq:h,eqMap:f}}function xx(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],h=new Int32Array(f),m=new Float64Array(f),p=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],x=c[_]+p[_];let S=!1;for(let E=c[_];E<x;E++)if(h[E]===i[g]){m[E]+=s[g],S=!0;break}S||(h[x]=i[g],m[x]=s[g],p[_]++)}return{n:r,rowPtr:c,colIdx:h,values:m}}function FR(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],h=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],x=_.i,S=_.j,E=_.normal,T=i[x]?0:1,M=i[S]?0:1;c[g]=T*Sn(s[x],E)-M*Sn(s[S],E);for(let v=0;v<l;v++){const w=r[t[v]],U=w.i,D=w.j,N=w.normal,z=Sn(E,N);let O=0;x===U&&(O-=T*z),x===D&&(O+=T*z),S===U&&(O+=M*z),S===D&&(O-=M*z),Math.abs(O)>1e-15&&(f.push(g),h.push(v),m.push(O))}}return{A:xx(l,f,h,m),b:c}}function rp(r,t){const i=r.n,s=Array.from({length:i},()=>new Float64Array(i));for(let f=0;f<i;f++)for(let h=r.rowPtr[f];h<r.rowPtr[f+1];h++)s[f][r.colIdx[h]]=r.values[h];const l=new Float64Array(t);for(let f=0;f<i;f++){let h=Math.abs(s[f][f]),m=f;for(let g=f+1;g<i;g++){const _=Math.abs(s[g][f]);_>h&&(h=_,m=g)}if(h<1e-12)return null;if(m!==f){const g=s[f];s[f]=s[m],s[m]=g;const _=l[f];l[f]=l[m],l[m]=_}const p=s[f][f];for(let g=f+1;g<i;g++){const _=s[g][f]/p;s[g][f]=0;for(let x=f+1;x<i;x++)s[g][x]-=_*s[f][x];l[g]-=_*l[f]}}const c=new Float64Array(i);for(let f=i-1;f>=0;f--){let h=l[f];for(let m=f+1;m<i;m++)h-=s[f][m]*c[m];c[f]=h/s[f][f]}return c}function BR(r,t,i,s,l,c,f){for(let h=0;h<i.length;h++){const m=l[h],p=i[h];Math.abs(m)<f||tu(r,t[p],Nn(t[p].normal,m),s)}}function HR(r,t,i,s=1e-7){if(t.length===0)return r;const l=vx(t,i);if(l.length===0)return r;const{A:c,b:f}=FR(t,l,i,r),h=rp(c,f);return h&&BR(r,t,l,i,h,null,s),r}function GR(r,t,i,s,l,c,f=1e-7){const h=Oa(i,s),m=Nn(h,.5),p=Sn(r,r)-l*l;if(p<=0)return 0;const g=2*Sn(r,t),_=2*Sn(r,m)+Sn(t,t),x=2*Sn(t,m),S=Sn(m,m),E=LR(S,x,_,g,p),T=(l*(1+f))**2;let M=null;for(const v of E)if(v>1e-12&&v<=c+1e-12){if(S*v*v*v*v+x*v*v*v+_*v*v+g*v+p+l*l>T)continue;(M===null||v<M)&&(M=v)}return M}function VR(r,t,i,s,l,c,f=null){if(c<1e-12)return{newPos:r.map(E=>[...E]),newVel:i.map(E=>[...E]),safedt:0,reason:"zero delta time"};const h=f||r.map(()=>!1),m=r.length,p=t.map((E,T)=>Nn(to([...E]),+!h[T]/s));let g=c,_="max delta time";for(let E=0;E<m;E++)for(let T=E+1;T<m;T++){if(h[E]&&h[T])continue;const M=Oa(r[E],r[T]),v=Oa(i[E],i[T]),w=GR(M,v,p[E],p[T],l,g);w!==null&&w<g&&(g=Math.max(w-1e-12,0),_=`collision between ${E} and ${T}`)}for(let E=0;E<m;E++)if(!h[E]){const T=l/2,M=i[E],v=p[E],w=Math.hypot(M[0],M[1],M[2]),U=Math.hypot(v[0],v[1],v[2]);let D;if(U>1e-12)D=(-w+Math.sqrt(w*w+2*U*T))/U;else if(w>1e-12)D=T/w;else continue;D<g&&(g=D,_=`max movement of ${E}`)}const x=r.map((E,T)=>{if(h[T])return[...E];const M=g,v=.5*g*g,w=i[T],U=p[T];return[E[0]+w[0]*M+U[0]*v,E[1]+w[1]*M+U[1]*v,E[2]+w[2]*M+U[2]*v]}),S=i.map((E,T)=>{if(h[T])return[0,0,0];const M=g,v=p[T];return[E[0]+v[0]*M,E[1]+v[1]*M,E[2]+v[2]*M]});return{newPos:x,newVel:S,safedt:g,reason:_}}function kR(r,t,i,s,l){return t.map((f,h)=>{const m=r[h],p=f.moment,g=f.omega,_=XR(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function XR(r,t,i,s,l,c=.3){const f=Nn([...i],1/l),m=Sn(i,t)<0?c:1,p=[t[0]*m+f[0]*s,t[1]*m+f[1]*s,t[2]*m+f[2]*s],g=Zs(p);if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),x=Nn([...p],1/g),S=_R([...r],x,_);return{moment:hl(S),omega:p}}function WR(r,t,i){return()=>(r.current=new qR(i),t(!0),()=>{})}class qR{constructor(t=.0025){this.params=new UR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>[0,0,0]),f=t.map(()=>[0,0,0]),h=t.map(()=>new Map);for(let m=0;m<l;m++)for(let p=m+1;p<l;p++){const g=wR(i,s,t[m].moment,t[p].moment,Oa(t[m].pos,t[p].pos));Wr(c[m],g.force1),Wr(c[p],g.force2),Wr(f[m],g.torque1),Wr(f[p],g.torque2),h[m].set(`M#${p}`,g.force1),h[p].set(`M#${m}`,g.force2)}return{coforces:c,torques:f,forces:h}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(D=>!!D.fixed),f=t.map(D=>D.pos),h=Rv(f,l,this.params.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((D,N)=>({pos:h[N],moment:D.moment})),this.params.radius,this.params.mMag);if(s){const D=this.params.gravity;m.forEach((N,z)=>{if(!c[z]){const O=D*this.params.mass;N[1]+=O,g[z].set("Gravity",[0,O,0])}})}const _=sp(h,l+this.params.shellThickness),{constrainedForces:x,constrainedVel:S}=NR(h,m,t.map(D=>D.vel),_,c,this.params.rollingFriction),{newPos:E,newVel:T,safedt:M,reason:v}=VR(h,x,S,this.params.mass,l-this.params.shellThickness,i,c),w=Rv(E,l,this.params.shellThickness,c);sp(w,l+this.params.shellThickness).map(D=>{if(D.dist<this.params.radius)throw new Error(`球${D.i}-球${D.j}重叠过深: dist=${(D.dist*1e3).toFixed(4)}mm`)});const U=kR(p,t.map(D=>({moment:D.moment,omega:D.omega})),M,this.params.inertia,.3);return{newMagnets:t.map((D,N)=>mu(D,{pos:w[N],vel:T[N],f:x[N],tau:p[N],moment:U[N].moment,omega:U[N].omega})),safedt:M,forces:g,reason:v}}}function YR({getMagnets:r,setMagnets:t,selectedId:i,onApplySnap:s}){const l=jt.useRef([]),c=jt.useRef(-1),f=p=>p.map(g=>({...g,pos:[...g.pos],vel:[...g.vel],moment:[...g.moment]})),h=jt.useCallback(p=>{const g=l.current;if(g.length>0){const _=g[g.length-1];if(jR(_,p))return}g.push(f(p)),g.length>100&&g.shift(),c.current=-1},[]),m=jt.useCallback(()=>{l.current=[],c.current=-1},[]);return jt.useEffect(()=>{const p=g=>{if(g.key!=="ArrowUp"&&g.key!=="ArrowDown")return;g.preventDefault();const _=l.current;if(_.length!==0)if(g.key==="ArrowUp"){if(c.current===-1)_.push(f(r())),c.current=_.length-2;else if(c.current>0)c.current--;else return;s(_[c.current])}else{if(c.current===-1)return;if(c.current++,c.current>=_.length-1){const x=_.pop();c.current=-1,s(x)}else s(_[c.current])}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,s,i]),{push:h,reset:m,histIdxRef:c}}function jR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const h=s[f],m=l[f];if(Array.isArray(h)&&Array.isArray(m)){if(h.length!==m.length||h.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(h!==m)return!1}}return!0}const ZR=32,od=.1;function KR(r,t,i,s,l,c,f,h,m,p,g,_,x,S){const E=jt.useRef(null),T=jt.useRef(""),M=jt.useCallback(()=>{const{magnets:v,isSimulating:w,simSpeed:U,useGravity:D}=t.current,N=r.current;if(!w||!N||v.length<2)return;const{newMagnets:z,safedt:O,reason:V}=N.step(v,U,D);T.current=`${O*1e3}ms (${V})`,x(j=>j+O);const A=new Map(v.map((j,$)=>[j.id,$])),L=z.map((j,$)=>mu(v[A.get(j.id)],{...j,pos:to(j.pos.map(ct=>{if(Math.abs(ct)>od)throw new Error(`球${$}超出边界: ${j.pos.map(ut=>(ut*1e3).toFixed(1)).join(",")}mm`);return Math.max(Math.min(ct,od),-od)}))}));g(L),m.current=!0;const k=p.current;if(k.size===1){const j=L.find($=>k.has($.id));j&&_($=>$&&{...$,m_pos:j.pos.map(ct=>ct*1e3).map(S),m_vel:(j.vel??[0,0,0]).map(ct=>ct*1e3).map(S),moment:j.moment.map(S),f:(j.f??[0,0,0]).map(S),tau:(j.tau??[0,0,0]).map(S)})}},[t,r,m,p,g,_,x,S]);return jt.useEffect(()=>{const v=s.current,w=l.current,U=c.current,D=f.current,N=h.current;if(!v||!w||!U||!D||!i)return;let z=performance.now();const O=V=>{E.current=requestAnimationFrame(O),V-z>ZR&&(M(),z=V),N==null||N.update(),D.render(w,U)};return E.current=requestAnimationFrame(O),()=>{cancelAnimationFrame(E.current)}},[i,M,s,l,c,f,h]),{stepDeltaTimeRef:T}}function Sx(r,t=""){let i=t.trim(),s=`${t.trim()}-`,l=1;for(t===""&&(s="#",i=`#${l}`);r[i];l++)i=`${s}${l}`;return i}function QR({selectedIds:r,setSelectedIds:t,keyTrapRef:i,stateRef:s}){const[l,c]=jt.useState({}),[f,h]=jt.useState(null),[m,p]=jt.useState(""),g=jt.useCallback(()=>{const v=new Set;if(f&&l[f])for(const w of l[f])v.add(w);return v},[f,l]),_=jt.useCallback(()=>{if(r.size===0)return;const v=Sx(l,m.trim()||"");c(w=>({...w,[v]:new Set(r)})),p(v),h(v),setTimeout(()=>{i.current&&i.current.focus()},0)},[r,l,m]),x=jt.useCallback(v=>{c(w=>{const U={...w};return delete U[v],U}),f===v&&h(null)},[f]),S=jt.useCallback(v=>{if(f===v){h(null),p("");return}t(new Set(l[v]||[])),h(v),p(""),setTimeout(()=>{i.current&&i.current.focus()},0)},[f,l,t]),E=jt.useCallback(()=>{if(!f||!m.trim())return;const v=m.trim();if(v===f){p("");return}l[v]||(c(w=>{const U={};for(const[D,N]of Object.entries(w))U[D===f?v:D]=N;return U}),h(v),p(""))},[f,m,l]),T=jt.useCallback(v=>{c(w=>{const U={};for(const[D,N]of Object.entries(w)){const z=new Set([...N].filter(O=>!v.has(O)));z.size>0&&(U[D]=z)}return U})},[]),M=jt.useCallback(()=>{c({}),h(null),p("")},[]);return jt.useEffect(()=>{const v=w=>{w.target.tagName==="INPUT"&&w.target!==i.current||((w.key==="g"||w.key==="G")&&(w.ctrlKey||w.metaKey)?(w.preventDefault(),w.stopPropagation(),w.stopImmediatePropagation(),w.shiftKey?f&&x(f):_()):(w.key==="a"||w.key==="A")&&(w.ctrlKey||w.metaKey)&&(w.preventDefault(),w.stopPropagation(),w.stopImmediatePropagation(),t(U=>{const D=f?[...l[f]||[]]:s.current.magnets.map(z=>z.id),N=w.shiftKey?D.filter(z=>!U.has(z)):D;return new Set(N)})))};return window.addEventListener("keydown",v,!0),()=>window.removeEventListener("keydown",v,!0)},[_,x,f,l,t]),{groups:l,setGroups:c,activeGroup:f,setActiveGroup:h,newGroupName:m,setNewGroupName:p,getIdsInAffectedGroup:g,createGroup:_,deleteGroup:x,selectGroup:S,confirmRename:E,cleanupIds:T,resetGroups:M}}const Zn={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},Uv={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},yx={padding:"10px",background:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},op={fontSize:"11px",color:"#888",marginBottom:"6px"},Mx={...Zn,padding:"2px",fontSize:"8px",lineHeight:"1"},JR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},$R={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},t2=["X","Y","Z"];function nl({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return bt.jsxs("div",{children:[bt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),bt.jsx("div",{style:$R,children:t2.map((h,m)=>{var p;return bt.jsx("input",{placeholder:h,disabled:!s,style:{...JR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const S={...x,[r]:[...x[r]]};return S[r][m]=_,S})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},h)})})]})}function e2({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,useGravity:l,magnets:c,selectedId:f,refYId:h,setRefYId:m,onToggle:p,onResetVel:g,onPerturb:_,onReframe:x,onSimSpeedChange:S,onGravityChange:E}){return bt.jsxs("div",{style:{padding:"12px",background:r?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${r?"#2a4a2a":"#2a2a4a"}`},children:[bt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),bt.jsx("button",{onClick:p,style:{width:"100%",padding:"12px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),bt.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[bt.jsx("button",{onClick:g,style:Zn,children:"重置速度"}),bt.jsx("button",{onClick:_,style:Zn,children:"扰动位置"})]}),bt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:bt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[bt.jsxs("select",{value:h??"",onChange:T=>m(T.target.value===""?null:parseInt(T.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[bt.jsx("option",{value:"",children:"— y 方向参考球 —"}),c.map(T=>bt.jsxs("option",{value:T.id,children:["球 #",T.id]},T.id))]}),bt.jsx("button",{onClick:x,disabled:f===null||h===null||f===h,style:{...Zn,opacity:f!==null&&h!==null&&f!==h?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),bt.jsxs("div",{style:{marginTop:"10px"},children:[bt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),bt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),bt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),bt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:T=>S(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(T.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),bt.jsx(i2,{label:"重力 (y 方向)",checked:l,onChange:E})]})}function n2({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:f,onRemove:h,onCommit:m}){const p={draft:s,setDraft:l,onCommit:m};return bt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[bt.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[bt.jsxs("button",{disabled:!0,style:{...Zn,flex:1,opacity:1},children:["选中磁球 #",r]}),bt.jsx("button",{onClick:c,style:{...Zn,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),bt.jsx("button",{onClick:f,style:{...Zn,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),bt.jsx("button",{onClick:h,style:{...Zn,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),bt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",bt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&bt.jsxs(bt.Fragment,{children:[bt.jsx(nl,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...p}),bt.jsx(nl,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...p}),bt.jsx(nl,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...p}),bt.jsx(nl,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...p}),bt.jsx(nl,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...p})]})]})}function i2({label:r,checked:t,onChange:i}){return bt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[bt.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),bt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}function a2({groups:r,activeGroup:t,presets:i,customPresets:s,setCustomPresets:l,applyPreset:c,saveGroupAsPreset:f}){return bt.jsxs("div",{children:[bt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),bt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:i.map(h=>bt.jsx("button",{onClick:()=>c(h),style:Uv,children:h},h))}),Object.keys(s).length>0&&bt.jsxs(bt.Fragment,{children:[bt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"8px",marginBottom:"4px"},children:"自定义预设（拖放到视图中添加）"}),bt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:Object.entries(s).map(([h,m])=>bt.jsxs("span",{draggable:!0,onDragStart:p=>{p.dataTransfer.setData("text/x-preset-name",h),p.dataTransfer.effectAllowed="copy"},style:{...Uv,cursor:"grab",display:"inline-flex",alignItems:"center",gap:"4px"},children:[h," ",bt.jsxs("span",{style:{opacity:.5},children:["(",m.magnets.length,")"]}),bt.jsx("button",{onClick:p=>{p.stopPropagation(),l(g=>{const _={...g};return delete _[h],_})},style:{...Mx,color:"#ff6b6b",cursor:"pointer"},title:"删除预设",children:"✕"})]},h))})]}),t&&r[t]&&r[t].size>0&&bt.jsxs("button",{onClick:f,style:{...Zn,marginTop:"6px",width:"100%",background:"#1a2a3a",borderColor:"#2a4a6a"},children:["💾 保存「",t,"」为预设"]})]})}function s2({grouping:r,selectedIds:t,onDeselect:i,onRemoveMagnet:s}){const{groups:l,activeGroup:c,newGroupName:f,setNewGroupName:h,createGroup:m,selectGroup:p,deleteGroup:g,confirmRename:_}=r,x=f.trim()&&f.trim()!==c;return bt.jsxs("div",{style:yx,children:[bt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...op},children:[bt.jsx("span",{children:"分组"}),t.size>0&&bt.jsx("span",{onClick:m,style:{fontSize:"10px",color:"#6bd5ff",cursor:"pointer",marginLeft:"auto"},children:"创建分组 (Ctrl+G)"}),c&&bt.jsx("span",{onClick:()=>x?_():i(),style:{fontSize:"10px",color:x?"#8ab4f8":"#aaa",cursor:"pointer",marginLeft:"auto"},children:x?"重命名":"取消选择"}),c&&bt.jsx("span",{onClick:()=>g(c),style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"取消分组 (Ctrl+Shift+G)"})]}),bt.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginBottom:"4px",flexWrap:"wrap"},children:Object.entries(l).map(([S,E])=>c===S?bt.jsx("input",{autoFocus:!0,value:f,placeholder:S,onChange:T=>h(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(f.trim()&&f.trim()!==S?_():i()),T.key==="Escape"&&i()},style:{padding:"2px 6px",borderRadius:"10px",fontSize:"11px",background:"rgba(68,136,255,0.15)",border:"1px solid #4488ff",color:"#e0e0e0",outline:"none",width:"80px"}},S):bt.jsxs("span",{onClick:()=>p(S),style:{padding:"2px 8px",borderRadius:"10px",fontSize:"11px",cursor:"pointer",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",color:"#aaa"},children:[S," ",bt.jsxs("span",{style:{opacity:.5},children:["(",E.size,")"]}),bt.jsx("button",{onClick:T=>{T.stopPropagation(),g(S)},style:{...Mx,color:"#ff6b6b"},title:"删除组",children:"✕"})]},S))}),c&&bt.jsx("div",{style:{fontSize:"10px",color:"#555",marginTop:"6px"},children:"↑↓←→ 移动 · PgUp/Home PgDn/End Tab/Shift+Tab 旋转"}),bt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...op,marginTop:"8px"},children:[bt.jsxs("span",{children:[t.size>0?"Shift+单击多选":"单击选择","(",t.size,")",c&&` · 「${c}」`]}),t.size>0&&bt.jsx("span",{onClick:s,style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"删除"})]}),t.size>0&&bt.jsx("div",{style:{display:"flex",gap:"3px",flexWrap:"wrap",marginBottom:"6px"},children:[...t].map(S=>bt.jsxs("span",{style:{padding:"0 5px",borderRadius:"3px",fontSize:"10px",background:"rgba(68,136,255,0.15)",border:"1px solid rgba(68,136,255,0.3)",color:"#8ab4f8"},children:["#",S]},S))})]})}const kr=100,Lv=3;function r2(r,t,i){if(!t||!i)return 0;const s=r??new Y(0,0,0),l=t.position.distanceTo(s),c=t.fov*Math.PI/180;return i.domElement.height/(2*l*Math.tan(c/2))}function Nv(r){const t=new Y(0,0,0),i=r.length;return i===0||(r.forEach(s=>{t.add(new Y(s.pos[0],s.pos[1],s.pos[2]))}),t.divideScalar(i)),t}function o2(){const t=.0025*kr,[i,s]=jt.useState([]),[l,c]=jt.useState(new Set),[f,h]=jt.useState(null),[m,p]=jt.useState(!1),[g,_]=jt.useState(4e-5),[x,S]=jt.useState(!0),[E,T]=jt.useState(!1),[M,v]=jt.useState(!0),[w,U]=jt.useState(0),[D,N]=jt.useState(null),[z,O]=jt.useState([]),[V,A]=jt.useState(!1),[L,k]=jt.useState({}),j=jt.useRef(null),$=jt.useRef(null),ct=jt.useRef(null),ut=jt.useRef(null),F=jt.useRef(null),H=jt.useRef([]),rt=jt.useRef([]),Tt=jt.useRef([]),Et=jt.useRef([]),I=jt.useRef([]),et=jt.useRef(!0),xt=jt.useRef(new Set);xt.current=l;const wt=jt.useRef(null),Ft=jt.useRef({magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:E});Ft.current={magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:E};const st=QR({selectedIds:l,setSelectedIds:c,keyTrapRef:wt,stateRef:Ft}),{activeGroup:dt,groups:Dt,setGroups:Wt,setActiveGroup:Xt,getIdsInAffectedGroup:ue,cleanupIds:rn,resetGroups:Ee}=st,ve=jt.useRef(null);jt.useEffect(WR(ve,A,.0025),[]);const Me=W=>(W==null?void 0:W.toFixed(6))??"N/A",fe=W=>({m_pos:W.pos.map(J=>J*1e3).map(Me),m_vel:W.vel.map(J=>J*1e3).map(Me),moment:W.moment.map(Me),f:(W.f??[0,0,0]).map(Me),tau:(W.tau??[0,0,0]).map(Me)});jt.useEffect(()=>{bR().then(W=>(O(W),Tv(W[0],.0025))).then(W=>s(W.magnets)).catch(console.error)},[]);const Ue=l.size===1?[...l][0]:null,{push:G,reset:en,histIdxRef:be}=YR({getMagnets:()=>Ft.current.magnets,setMagnets:s,selectedId:Ue,onApplySnap:W=>{et.current=!0,s(W);const J=W.find(tt=>tt.id===Ue);J&&N(fe(J))}}),{stepDeltaTimeRef:ze}=KR(ve,Ft,V,j,$,ct,ut,F,et,xt,s,N,U,Me),Zt=jt.useCallback((W,J,tt)=>{for(const Mt of W){if(!J.has(Mt.id))continue;const Vt=Mt.pos.map((Ot,te)=>Ot+tt[te]);for(const Ot of W){if(Ot.id===Mt.id||J.has(Ot.id))continue;const te=Vt[0]-Ot.pos[0],Bt=Vt[1]-Ot.pos[1],re=Vt[2]-Ot.pos[2];if(Math.sqrt(te*te+Bt*Bt+re*re)<.004995)return!1}}return!0},[.0025]),P=jt.useCallback((W,J,tt,mt,Mt)=>{const Ot=new Na().setFromAxisAngle(mt,Mt),te=new Map;for(const Bt of W)if(J.has(Bt.id)){const re=new Y(...Bt.pos).sub(tt);re.applyQuaternion(Ot).add(tt),te.set(Bt.id,[re.x,re.y,re.z])}for(const[Bt,re]of te)for(const ge of W){if(ge.id===Bt||J.has(ge.id))continue;const Be=re[0]-ge.pos[0],dn=re[1]-ge.pos[1],je=re[2]-ge.pos[2];if(Math.sqrt(Be*Be+dn*dn+je*je)<.004995)return!1}return!0},[.0025]);jt.useEffect(()=>{const W=j.current;if(!W||!V)return;let J=W.clientWidth||800,tt=W.clientHeight||600;const mt=new VM;mt.background=new Ne(657941),$.current=mt;const Mt=new Ui(50,J/tt,.1,1e3);Mt.position.set(0,0,12),ct.current=Mt;const Vt=new tR({antialias:!0});Vt.setSize(J,tt),Vt.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.appendChild(Vt.domElement),ut.current=Vt;const Ot=new nR(Mt,Vt.domElement);Ot.enableDamping=!0,Ot.dampingFactor=.05,Ot.rotateSpeed=.5,Ot.zoomSpeed=.8,Ot.panSpeed=.5,Ot.minDistance=2,Ot.maxDistance=50,F.current=Ot;const te=()=>{wt.current&&document.activeElement!==wt.current&&wt.current.focus()};Ot.addEventListener("end",te),mt.add(new eE(16777215,.5));const Bt=new q_(16777215,.8);Bt.position.set(5,5,5),mt.add(Bt);const re=new q_(4482815,.3);re.position.set(-5,-5,-5),mt.add(re);const ge=new iE(16,16,3355477,2236979);ge.rotation.x=Math.PI/2,mt.add(ge);const Be=()=>{const dn=W.clientWidth||800,je=W.clientHeight||600;Mt.aspect=dn/je,Mt.updateProjectionMatrix(),Vt.setSize(dn,je)};return window.addEventListener("resize",Be),()=>{window.removeEventListener("resize",Be),Ot.removeEventListener("end",te),Ot.dispose(),Vt.dispose(),$.current=null,W.contains(Vt.domElement)&&W.removeChild(Vt.domElement)}},[V]),jt.useEffect(()=>{const W=$.current;if(!W)return;const J=Bt=>{Bt&&(W.remove(Bt),Bt.geometry&&Bt.geometry.dispose(),Bt.material&&(Array.isArray(Bt.material)?Bt.material.forEach(re=>re.dispose()):Bt.material.dispose()),Bt.children&&Bt.children.forEach(J))};[...H.current,...rt.current,...Tt.current,...Et.current,...I.current].forEach(J);const tt=new Y(0,1,0),mt=[],Mt=[],Vt=[],Ot=[],te=[];i.forEach(Bt=>{const re=new bp(t,32,32),ge=new KM({color:Bt.color,metalness:.8,roughness:.2,emissive:Bt.color,emissiveIntensity:.15}),Be=new Li(re,ge);Be.userData.id=Bt.id,W.add(Be),mt.push(Be);const dn=new ru(t*1.12,.02,16,64),je=new fu({color:16777215,transparent:!0,opacity:.85,depthTest:!1}),_n=new Li(dn,je);if(_n.visible=!1,_n.renderOrder=999,W.add(_n),te.push(_n),!M){Mt.push(null),Vt.push(null),Ot.push(null);return}const on=new $h(tt,new Y,t*3.6,16768256,t*.5,t*.3);W.add(on),Mt.push(on);const $e=new $h(tt,new Y,t,65535,t*.4,t*.24);$e.visible=!1,W.add($e),Vt.push($e);const Ce=new $h(tt,new Y,t,16711935,t*.32,t*.2);Ce.visible=!1,W.add(Ce),Ot.push(Ce)}),H.current=mt,rt.current=Mt,Tt.current=Vt,Et.current=Ot,I.current=te},[i.length,M,V]),jt.useEffect(()=>{const W=ct.current,J=ut.current;if(!$.current||!W||!J)return;const tt=H.current,mt=rt.current,Mt=Tt.current,Vt=Et.current,Ot=I.current,te=ue();i.forEach((Bt,re)=>{const ge=Bt.pos.map(Ce=>Ce*kr),Be=new Y(ge[0],ge[1],ge[2]),dn=tt[re];dn&&(dn.position.copy(Be),dn.material.emissiveIntensity=l.has(Bt.id)?.4:.15);const je=Ot[re];if(je){const Ce=te.has(Bt.id);if(je.visible=Ce,je.visible){je.position.copy(Be),je.lookAt(W.position);const fn=W.position.distanceTo(Be),Pn=W.fov*Math.PI/180,Pa=J.domElement.height/(2*fn*Math.tan(Pn/2)),na=Lv/Pa,Ks=t+na*1.5,vs=na*.5;je.geometry.dispose(),je.geometry=new ru(Ks,vs,8,64)}}if(!M)return;const _n=mt[re];if(_n){const Ce=new Y(...Bt.moment).normalize();_n.position.copy(Be),_n.setDirection(Ce),_n.setLength(t*3.6,t*.5,t*.3)}const on=Mt[re];if(on){const Ce=Bt.f?new Y(...Bt.f).length():0;if(Ce>1e-25){on.visible=!0;const fn=new Y(...Bt.f).normalize(),Pn=t*Math.min(6,Math.max(.5,Math.log10(Ce+1e-10)+10));on.position.copy(Be),on.setDirection(fn),on.setLength(Pn,t*.4,t*.24)}else on.visible=!1}const $e=Vt[re];if($e){const Ce=Bt.tau?new Y(...Bt.tau).length():0;if(Ce>1e-25){$e.visible=!0;const fn=new Y(...Bt.tau).normalize(),Pn=t*Math.min(5,Math.max(.4,Math.log10(Ce+1e-10)+8));$e.position.copy(Be),$e.setDirection(fn),$e.setLength(Pn,t*.32,t*.2)}else $e.visible=!1}})},[i,l,dt,Dt,M,V]),jt.useEffect(()=>{if(Ue===null){N(null);return}const W=i.find(J=>J.id===Ue);N(W?fe(W):null)},[Ue]);const b=jt.useCallback(W=>{if(Ft.current.isSimulating)return;const J=ue();if(J.size===0)return;const tt=ct.current;if(!tt)return;const mt=new Y;tt.getWorldDirection(mt);const Mt=new Y;Mt.crossVectors(mt,tt.up).normalize();const Vt=new Y;Vt.crossVectors(Mt,mt).normalize();const Ot=Nv(Ft.current.magnets.filter(ge=>J.has(ge.id))),te=Lv/kr/r2(Ot,tt,ut.current);let Bt=null,re=null;switch(W.key){case"ArrowRight":Bt=[Mt.x*te,Mt.y*te,Mt.z*te];break;case"ArrowLeft":Bt=[-Mt.x*te,-Mt.y*te,-Mt.z*te];break;case"ArrowUp":Bt=[Vt.x*te,Vt.y*te,Vt.z*te];break;case"ArrowDown":Bt=[-Vt.x*te,-Vt.y*te,-Vt.z*te];break;case"PageUp":re=Mt.clone().negate();break;case"PageDown":re=Mt.clone();break;case"Home":re=Vt.clone().negate();break;case"End":re=Vt.clone();break;case"Tab":W.preventDefault(),re=W.shiftKey?mt.clone().negate():mt.clone();break}if(Bt){W.preventDefault(),s(ge=>Zt(ge,J,Bt)?(et.current=!0,ge.map(Be=>J.has(Be.id)?{...Be,pos:Be.pos.map((dn,je)=>dn+Bt[je])}:Be)):ge);return}else if(re){W.preventDefault();const ge=Math.atan2(te,.0025),Be=re,dn=new Na().setFromAxisAngle(Be,ge);s(je=>P(je,J,Ot,Be,ge)?(et.current=!0,je.map(_n=>{if(!J.has(_n.id))return _n;const on=new Y(..._n.pos).sub(Ot).applyQuaternion(dn).add(Ot),$e=new Y(..._n.moment).applyQuaternion(dn);return{..._n,pos:[on.x,on.y,on.z],moment:[$e.x,$e.y,$e.z]}})):je)}},[ue,Zt,P,.0025]),Z=jt.useRef(null),_t=W=>{Z.current={x:W.clientX,y:W.clientY}},yt=W=>{const J=j.current,tt=ct.current;if(!J||!tt)return;const mt=Z.current;if(mt){const re=W.clientX-mt.x,ge=W.clientY-mt.y;if(re*re+ge*ge>25)return}const Mt=J.getBoundingClientRect(),Vt=new de((W.clientX-Mt.left)/Mt.width*2-1,-((W.clientY-Mt.top)/Mt.height)*2+1),Ot=new j_;Ot.setFromCamera(Vt,tt);const te=Ot.intersectObjects(H.current),Bt=te.length>0?te[0].object.userData.id:null;Bt===null?W.shiftKey||c(new Set):W.shiftKey?c(re=>{const ge=new Set(re);return ge.has(Bt)?ge.delete(Bt):ge.add(Bt),ge}):c(new Set([Bt]))},pt=()=>{et.current=!0,s(W=>[...W,ou({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),U(0)},Qt=()=>{const W=ue();W.size!==0&&(et.current=!0,s(J=>J.filter(tt=>!W.has(tt.id))),rn(W),c(new Set),U(0))},Ut=W=>{var J;(J=ve.current)==null||J.reset(),en(),et.current=!0,xR(),Tv(W,.0025).then(tt=>s(tt.magnets)),c(new Set),Ee(),p(!1),U(0)},Kt=(W,J,tt)=>{const mt=parseFloat(tt);if(isNaN(mt))return;const Vt={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[W];if(!Vt)return;const[Ot,te]=Vt;G(i);const Bt=i.map(re=>{if(re.id!==Ue)return re;const ge=[...re[Ot]??[0,0,0]];return ge[J]=mt*te,{...re,[Ot]:ge}});G(Bt),be.current=-1,et.current=!0,s(Bt),N(re=>{if(!re)return re;const ge={...re,[W]:[...re[W]]};return ge[W][J]=Me(mt),ge})},se=jt.useCallback(W=>{const J=MR(i.map(tt=>({...tt,pos:tt.pos.map(mt=>mt/.0025)})),"exported","radius");if(W==="copy")navigator.clipboard.writeText(J).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const tt=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([J],{type:"application/json"})),download:`magnets_${Date.now()}.json`});tt.click(),URL.revokeObjectURL(tt.href)}},[i]),At=()=>{const W=SR(i,Ue,f);W&&(G(i),G(W),et.current=!0,s(W))},Rt=()=>{m||(et.current=!0),p(W=>!W)},Gt=jt.useCallback(()=>{if(!dt||!Dt[dt])return;const W=Dt[dt],J=i.filter(Mt=>W.has(Mt.id));if(J.length===0)return;const tt=Nv(J),mt=J.map(Mt=>({pos:[Mt.pos[0]-tt.x,Mt.pos[1]-tt.y,Mt.pos[2]-tt.z],moment:[...Mt.moment],color:Mt.color}));k(Mt=>({...Mt,[dt]:{magnets:mt}}))},[dt,Dt,i]),zt=jt.useCallback((W,J)=>{const tt=j.current,mt=ct.current;if(!tt||!mt)return[0,0,0];const Mt=tt.getBoundingClientRect(),Vt=new de((W-Mt.left)/Mt.width*2-1,-((J-Mt.top)/Mt.height)*2+1),Ot=new j_;Ot.setFromCamera(Vt,mt);const te=new Aa(new Y(0,0,1),0),Bt=new Y;return Ot.ray.intersectPlane(te,Bt)||Ot.ray.at(10,Bt),[Bt.x/kr,Bt.y/kr,Bt.z/kr]},[]),Lt=jt.useCallback((W,J)=>{const tt=L[W];if(!tt)return;et.current=!0;const mt=new Set;s(Vt=>{const Ot=[...Vt];for(const te of tt.magnets){const Bt=ou({pos:[te.pos[0]+J[0],te.pos[1]+J[1],te.pos[2]+J[2]],vel:te.vel,moment:te.moment,color:te.color,fixed:te.fixed});mt.add(Bt.id),Ot.push(Bt)}return Ot});const Mt=Sx(Dt,W);Wt(Vt=>({...Vt,[Mt]:mt})),c(mt),Xt(Mt),U(0)},[L,Dt]),me=jt.useCallback(W=>{W.preventDefault(),W.dataTransfer.dropEffect="copy"},[]),q=jt.useCallback(W=>{W.preventDefault();const J=W.dataTransfer.getData("text/x-preset-name");if(!J||!L[J])return;const tt=zt(W.clientX,W.clientY);Lt(J,tt)},[L,zt,Lt]),Nt=(W,J)=>{const tt=ue();if(tt.size===0)return;G(i),et.current=!0;const mt=i.map(Mt=>tt.has(Mt.id)?{...Mt,[W]:J}:Mt);G(mt),be.current=-1,s(mt)};if(!V)return bt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:bt.jsxs("div",{children:[bt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),bt.jsx("div",{children:"Loading physics engine..."})]})});const Ct=ue();return bt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[bt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[bt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[bt.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",bt.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),bt.jsx(e2,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:ze,totalSimTime:w,useGravity:E,magnets:i,selectedId:Ue,refYId:f,setRefYId:h,onToggle:Rt,onResetVel:()=>{et.current=!0,s(W=>W.map(J=>({...J,vel:[0,0,0],omega:[0,0,0]})))},onPerturb:()=>{et.current=!0,s(W=>W.map(J=>mu(J,{pos:to(J.pos.map(tt=>tt+(Math.random()-.5)*.3*.0025))})))},onReframe:At,onSimSpeedChange:_,onGravityChange:T}),bt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[bt.jsx("button",{onClick:pt,style:{...Zn,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),bt.jsx("button",{onClick:()=>se("download"),style:{...Zn,flex:1},children:"⬇ 导出"}),bt.jsx("button",{onClick:()=>se("copy"),style:{...Zn,flex:1},children:"📋 复制"})]}),bt.jsx(a2,{groups:Dt,activeGroup:dt,presets:z,customPresets:L,setCustomPresets:k,applyPreset:Ut,saveGroupAsPreset:Gt}),bt.jsx(s2,{grouping:st,selectedIds:l,onDeselect:()=>{st.setActiveGroup(null),st.setNewGroupName("")},onRemoveMagnet:Qt}),Ct.size>1&&bt.jsxs("div",{style:yx,children:[bt.jsxs("div",{style:op,children:["批量修改 (",Ct.size,")"]}),bt.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"4px"},children:"颜色"}),bt.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[[16729156,4474111,4521796,16768256,16729343,4521983,16746496,8930559].map(W=>bt.jsx("button",{onClick:()=>Nt("color",W),style:{width:"22px",height:"22px",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",background:`#${W.toString(16).padStart(6,"0")}`}},W)),bt.jsx("input",{type:"color",onChange:W=>Nt("color",parseInt(W.target.value.slice(1),16)),style:{width:"22px",height:"22px",padding:0,border:"none",borderRadius:"4px",cursor:"pointer"}})]}),bt.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[bt.jsx("button",{onClick:()=>Nt("vel",[0,0,0]),style:Zn,children:"清零速度"}),bt.jsx("button",{onClick:()=>Nt("omega",[0,0,0]),style:Zn,children:"清零角速度"}),bt.jsx("button",{onClick:()=>{const W=ue();et.current=!0,s(J=>J.map(tt=>W.has(tt.id)?{...tt,fixed:!tt.fixed}:tt))},style:Zn,children:"切换固定"})]}),bt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"6px",marginBottom:"4px"},children:"磁矩方向"}),bt.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[["+X",[1,0,0]],["−X",[-1,0,0]],["+Y",[0,1,0]],["−Y",[0,-1,0]],["+Z",[0,0,1]],["−Z",[0,0,-1]]].map(([W,J])=>bt.jsx("button",{onClick:()=>{const tt=ue();G(i),et.current=!0;const mt=i.map(Mt=>{if(!tt.has(Mt.id))return Mt;const Vt=Math.sqrt(Mt.moment[0]**2+Mt.moment[1]**2+Mt.moment[2]**2);return{...Mt,moment:J.map(Ot=>Ot*Vt)}});G(mt),be.current=-1,s(mt)},style:Zn,children:W},W))})]}),Ue!==null&&bt.jsx(n2,{selectedId:Ue,selectedMag:i.find(W=>W.id===Ue),isSimulating:m,editDraft:D,setEditDraft:N,onToggle:Rt,onToggleFixed:()=>{et.current=!0,s(W=>W.map(J=>J.id===Ue?{...J,fixed:!J.fixed}:J))},onRemove:Qt,onCommit:Kt}),bt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[bt.jsx("input",{type:"checkbox",checked:M,onChange:W=>v(W.target.checked),style:{accentColor:"#4488ff"}}),bt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),bt.jsx("div",{ref:j,onClick:yt,onMouseDown:_t,onDragOver:me,onDrop:q,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer",position:"relative"},children:bt.jsx("textarea",{ref:wt,onKeyDown:b,style:{position:"absolute",left:0,top:0,width:"1px",height:"1px",opacity:0,padding:0,border:"none",outline:"none",resize:"none",overflow:"hidden",pointerEvents:"none"},tabIndex:-1})})]})}zy.createRoot(document.getElementById("root")).render(bt.jsx(jt.StrictMode,{children:bt.jsx(o2,{})}));
