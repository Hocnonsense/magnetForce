(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vh={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function yy(){if(a_)return Xo;a_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var s_;function My(){return s_||(s_=1,vh.exports=yy()),vh.exports}var At=My(),xh={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function Ey(){if(r_)return de;r_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(z,rt,yt){this.props=z,this.context=rt,this.refs=M,this.updater=yt||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,rt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,rt,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=v.prototype;function L(z,rt,yt){this.props=z,this.context=rt,this.refs=M,this.updater=yt||E}var w=L.prototype=new U;w.constructor=L,T(w,v.prototype),w.isPureReactComponent=!0;var O=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function A(z,rt,yt){var wt=yt.ref;return{$$typeof:r,type:z,key:rt,ref:wt!==void 0?wt:null,props:yt}}function D(z,rt){return A(z.type,rt,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Y(z){var rt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(yt){return rt[yt]})}var J=/\/+/g;function ut(z,rt){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):rt.toString(36)}function ft(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(I,I):(z.status="pending",z.then(function(rt){z.status==="pending"&&(z.status="fulfilled",z.value=rt)},function(rt){z.status==="pending"&&(z.status="rejected",z.reason=rt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,rt,yt,wt,Gt){var tt=typeof z;(tt==="undefined"||tt==="boolean")&&(z=null);var gt=!1;if(z===null)gt=!0;else switch(tt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(z.$$typeof){case r:case t:gt=!0;break;case g:return gt=z._init,F(gt(z._payload),rt,yt,wt,Gt)}}if(gt)return Gt=Gt(z),gt=wt===""?"."+ut(z,0):wt,O(Gt)?(yt="",gt!=null&&(yt=gt.replace(J,"$&/")+"/"),F(Gt,rt,yt,"",function(Ht){return Ht})):Gt!=null&&(k(Gt)&&(Gt=D(Gt,yt+(Gt.key==null||z&&z.key===Gt.key?"":(""+Gt.key).replace(J,"$&/")+"/")+gt)),rt.push(Gt)),1;gt=0;var Ut=wt===""?".":wt+":";if(O(z))for(var Xt=0;Xt<z.length;Xt++)wt=z[Xt],tt=Ut+ut(wt,Xt),gt+=F(wt,rt,yt,tt,Gt);else if(Xt=y(z),typeof Xt=="function")for(z=Xt.call(z),Xt=0;!(wt=z.next()).done;)wt=wt.value,tt=Ut+ut(wt,Xt++),gt+=F(wt,rt,yt,tt,Gt);else if(tt==="object"){if(typeof z.then=="function")return F(ft(z),rt,yt,wt,Gt);throw rt=String(z),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return gt}function G(z,rt,yt){if(z==null)return z;var wt=[],Gt=0;return F(z,wt,"","",function(tt){return rt.call(yt,tt,Gt++)}),wt}function st(z){if(z._status===-1){var rt=z._result;rt=rt(),rt.then(function(yt){(z._status===0||z._status===-1)&&(z._status=1,z._result=yt)},function(yt){(z._status===0||z._status===-1)&&(z._status=2,z._result=yt)}),z._status===-1&&(z._status=0,z._result=rt)}if(z._status===1)return z._result.default;throw z._result}var Tt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},bt={map:G,forEach:function(z,rt,yt){G(z,function(){rt.apply(this,arguments)},yt)},count:function(z){var rt=0;return G(z,function(){rt++}),rt},toArray:function(z){return G(z,function(rt){return rt})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return de.Activity=_,de.Children=bt,de.Component=v,de.Fragment=i,de.Profiler=l,de.PureComponent=L,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,de.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},de.cache=function(z){return function(){return z.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(z,rt,yt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var wt=T({},z.props),Gt=z.key;if(rt!=null)for(tt in rt.key!==void 0&&(Gt=""+rt.key),rt)!V.call(rt,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&rt.ref===void 0||(wt[tt]=rt[tt]);var tt=arguments.length-2;if(tt===1)wt.children=yt;else if(1<tt){for(var gt=Array(tt),Ut=0;Ut<tt;Ut++)gt[Ut]=arguments[Ut+2];wt.children=gt}return A(z.type,Gt,wt)},de.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},de.createElement=function(z,rt,yt){var wt,Gt={},tt=null;if(rt!=null)for(wt in rt.key!==void 0&&(tt=""+rt.key),rt)V.call(rt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Gt[wt]=rt[wt]);var gt=arguments.length-2;if(gt===1)Gt.children=yt;else if(1<gt){for(var Ut=Array(gt),Xt=0;Xt<gt;Xt++)Ut[Xt]=arguments[Xt+2];Gt.children=Ut}if(z&&z.defaultProps)for(wt in gt=z.defaultProps,gt)Gt[wt]===void 0&&(Gt[wt]=gt[wt]);return A(z,tt,Gt)},de.createRef=function(){return{current:null}},de.forwardRef=function(z){return{$$typeof:d,render:z}},de.isValidElement=k,de.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:st}},de.memo=function(z,rt){return{$$typeof:p,type:z,compare:rt===void 0?null:rt}},de.startTransition=function(z){var rt=N.T,yt={};N.T=yt;try{var wt=z(),Gt=N.S;Gt!==null&&Gt(yt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(I,Tt)}catch(tt){Tt(tt)}finally{rt!==null&&yt.types!==null&&(rt.types=yt.types),N.T=rt}},de.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},de.use=function(z){return N.H.use(z)},de.useActionState=function(z,rt,yt){return N.H.useActionState(z,rt,yt)},de.useCallback=function(z,rt){return N.H.useCallback(z,rt)},de.useContext=function(z){return N.H.useContext(z)},de.useDebugValue=function(){},de.useDeferredValue=function(z,rt){return N.H.useDeferredValue(z,rt)},de.useEffect=function(z,rt){return N.H.useEffect(z,rt)},de.useEffectEvent=function(z){return N.H.useEffectEvent(z)},de.useId=function(){return N.H.useId()},de.useImperativeHandle=function(z,rt,yt){return N.H.useImperativeHandle(z,rt,yt)},de.useInsertionEffect=function(z,rt){return N.H.useInsertionEffect(z,rt)},de.useLayoutEffect=function(z,rt){return N.H.useLayoutEffect(z,rt)},de.useMemo=function(z,rt){return N.H.useMemo(z,rt)},de.useOptimistic=function(z,rt){return N.H.useOptimistic(z,rt)},de.useReducer=function(z,rt,yt){return N.H.useReducer(z,rt,yt)},de.useRef=function(z){return N.H.useRef(z)},de.useState=function(z){return N.H.useState(z)},de.useSyncExternalStore=function(z,rt,yt){return N.H.useSyncExternalStore(z,rt,yt)},de.useTransition=function(){return N.H.useTransition()},de.version="19.2.3",de}var o_;function rp(){return o_||(o_=1,xh.exports=Ey()),xh.exports}var re=rp(),Sh={exports:{}},Wo={},yh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function by(){return l_||(l_=1,(function(r){function t(F,G){var st=F.length;F.push(G);t:for(;0<st;){var Tt=st-1>>>1,bt=F[Tt];if(0<l(bt,G))F[Tt]=G,F[st]=bt,st=Tt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],st=F.pop();if(st!==G){F[0]=st;t:for(var Tt=0,bt=F.length,z=bt>>>1;Tt<z;){var rt=2*(Tt+1)-1,yt=F[rt],wt=rt+1,Gt=F[wt];if(0>l(yt,st))wt<bt&&0>l(Gt,yt)?(F[Tt]=Gt,F[wt]=st,Tt=wt):(F[Tt]=yt,F[rt]=st,Tt=rt);else if(wt<bt&&0>l(Gt,st))F[Tt]=Gt,F[wt]=st,Tt=wt;else break t}}return G}function l(F,G){var st=F.sortIndex-G.sortIndex;return st!==0?st:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,E=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=F)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function O(F){if(T=!1,w(F),!E)if(i(m)!==null)E=!0,I||(I=!0,Y());else{var G=i(p);G!==null&&ft(O,G.startTime-F)}}var I=!1,N=-1,V=5,A=-1;function D(){return M?!0:!(r.unstable_now()-A<V)}function k(){if(M=!1,I){var F=r.unstable_now();A=F;var G=!0;try{t:{E=!1,T&&(T=!1,U(N),N=-1),y=!0;var st=x;try{e:{for(w(F),_=i(m);_!==null&&!(_.expirationTime>F&&D());){var Tt=_.callback;if(typeof Tt=="function"){_.callback=null,x=_.priorityLevel;var bt=Tt(_.expirationTime<=F);if(F=r.unstable_now(),typeof bt=="function"){_.callback=bt,w(F),G=!0;break e}_===i(m)&&s(m),w(F)}else s(m);_=i(m)}if(_!==null)G=!0;else{var z=i(p);z!==null&&ft(O,z.startTime-F),G=!1}}break t}finally{_=null,x=st,y=!1}G=void 0}}finally{G?Y():I=!1}}}var Y;if(typeof L=="function")Y=function(){L(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ut=J.port2;J.port1.onmessage=k,Y=function(){ut.postMessage(null)}}else Y=function(){v(k,0)};function ft(F,G){N=v(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var st=x;x=G;try{return F()}finally{x=st}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var st=x;x=F;try{return G()}finally{x=st}},r.unstable_scheduleCallback=function(F,G,st){var Tt=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?Tt+st:Tt):st=Tt,F){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=st+bt,F={id:g++,callback:G,priorityLevel:F,startTime:st,expirationTime:bt,sortIndex:-1},st>Tt?(F.sortIndex=st,t(p,F),i(m)===null&&F===i(p)&&(T?(U(N),N=-1):T=!0,ft(O,st-Tt))):(F.sortIndex=bt,t(m,F),E||y||(E=!0,I||(I=!0,Y()))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var G=x;return function(){var st=x;x=G;try{return F.apply(this,arguments)}finally{x=st}}}})(Mh)),Mh}var c_;function Ty(){return c_||(c_=1,yh.exports=by()),yh.exports}var Eh={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function Ay(){if(u_)return qn;u_=1;var r=rp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},qn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},qn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},qn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},qn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},qn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},qn.requestFormReset=function(m){s.d.r(m)},qn.unstable_batchedUpdates=function(m,p){return m(p)},qn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},qn.useFormStatus=function(){return f.H.useHostTransitionStatus()},qn.version="19.2.3",qn}var f_;function Ry(){if(f_)return Eh.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=Ay(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function Cy(){if(h_)return Wo;h_=1;var r=Ty(),t=rp(),i=Ry();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=h;break}if(R===o){S=!0,o=u,a=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===a){S=!0,a=h,o=u;break}if(R===o){S=!0,o=h,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var ft=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},Tt=[],bt=-1;function z(e){return{current:e}}function rt(e){0>bt||(e.current=Tt[bt],Tt[bt]=null,bt--)}function yt(e,n){bt++,Tt[bt]=e.current,e.current=n}var wt=z(null),Gt=z(null),tt=z(null),gt=z(null);function Ut(e,n){switch(yt(tt,n),yt(Gt,e),yt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=Cg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(wt),yt(wt,e)}function Xt(){rt(wt),rt(Gt),rt(tt)}function Ht(e){e.memoizedState!==null&&yt(gt,e);var n=wt.current,a=Cg(n,e.type);n!==a&&(yt(Gt,e),yt(wt,a))}function xe(e){Gt.current===e&&(rt(wt),rt(Gt)),gt.current===e&&(rt(gt),Ho._currentValue=st)}var Re,ue;function ce(e){if(Re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Re=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+e+ue}var De=!1;function oe(e,n){if(!e||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var lt=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){lt=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){lt=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&lt&&typeof dt.stack=="string")return[dt.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var B=S.split(`
`),at=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===at.length)for(o=B.length-1,u=at.length-1;1<=o&&0<=u&&B[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==at[u]){var vt=`
`+B[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ce(a):""}function nn(e,n){switch(e.tag){case 26:case 27:case 5:return ce(e.type);case 16:return ce("Lazy");case 13:return e.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return ce("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=nn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ze=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,jt=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,xt=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Yt=r.log,ie=r.unstable_setDisableYieldValue,Rt=null,Ct=null;function It(e){if(typeof Yt=="function"&&ie(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Rt,e)}catch{}}var zt=Math.clz32?Math.clz32:q,Nt=Math.log,fe=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Nt(e)/fe|0)|0}var H=256,$=262144,mt=4194304;function ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function it(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=ct(o):(S&=R,S!==0?u=ct(S):a||(a=R&~e,a!==0&&(u=ct(a))))):(R=o&~h,R!==0?u=ct(R):S!==0?u=ct(S):a||(a=o&~e,a!==0&&(u=ct(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function _t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Dt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(){var e=mt;return mt<<=1,(mt&62914560)===0&&(mt=4194304),e}function Ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Kt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ge(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,at=e.hiddenUpdates;for(a=S&~a;0<a;){var vt=31-zt(a),Mt=1<<vt;R[vt]=0,B[vt]=-1;var lt=at[vt];if(lt!==null)for(at[vt]=null,vt=0;vt<lt.length;vt++){var dt=lt[vt];dt!==null&&(dt.lane&=-536870913)}a&=~Mt}o!==0&&He(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function He(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function cn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function an(e,n){var a=n&-n;return a=(a&42)!==0?1:dn(a),(a&(e.suspendedLanes|n))!==0?0:a}function dn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _n(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vn(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Qg(e.type))}function Ke(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var Dn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Dn,bn="__reactProps$"+Dn,ti="__reactContainer$"+Dn,Na="__reactEvents$"+Dn,Oa="__reactListeners$"+Dn,fl="__reactHandles$"+Dn,to="__reactResources$"+Dn,vs="__reactMarker$"+Dn;function eo(e){delete e[Je],delete e[bn],delete e[Na],delete e[Oa],delete e[fl]}function Pa(e){var n=e[Je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ti]||a[Je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Pg(e);e!==null;){if(a=e[Je])return a;e=Pg(e)}return n}e=a,a=e.parentNode}return null}function za(e){if(e=e[Je]||e[ti]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function xs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ia(e){var n=e[to];return n||(n=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[vs]=!0}var K=new Set,ht={};function ot(e,n){et(e,n),et(e+"Capture",n)}function et(e,n){for(ht[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Ft={};function Wt(e){return Ze.call(Ft,e)?!0:Ze.call(Vt,e)?!1:Pt.test(e)?Ft[e]=!0:(Vt[e]=!0,!1)}function Qt(e,n,a){if(Wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $e(e){if(!e._valueTracker){var n=ze(e)?"checked":"value";e._valueTracker=sn(e,n,""+e[n])}}function Be(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ze(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ie=/[\n"\\]/g;function he(e){return e.replace(Ie,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pn(e,n,a,o,u,h,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?zn(e,S,ae(n)):a!=null?zn(e,S,ae(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ae(R):e.removeAttribute("name")}function na(e,n,a,o,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){$e(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),$e(e)}function zn(e,n,a){n==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ge(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function In(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),$e(e)}function Tn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Fn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Bn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Bn(e,h,n[h])}function Ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _x=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return vx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ia(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Qs=null;function Ap(e){var n=za(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Pn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Be(o)}break t;case"textarea":Ge(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Si(e,!!a.multiple,n,!1)}}}var gu=!1;function Rp(e,n,a){if(gu)return e(n,a);gu=!0;try{var o=e(n);return o}finally{if(gu=!1,(Ks!==null||Qs!==null)&&($l(),Ks&&(n=Ks,e=Qs,Qs=Ks=null,Ap(n),e)))for(n=0;n<e.length;n++)Ap(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(aa)try{var io={};Object.defineProperty(io,"passive",{get:function(){_u=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{_u=!1}var Fa=null,vu=null,dl=null;function Cp(){if(dl)return dl;var e,n=vu,a=n.length,o,u="value"in Fa?Fa.value:Fa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function wp(){return!1}function ei(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ml:wp,this.isPropagationStopped=wp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=ei(Ss),ao=_({},Ss,{view:0,detail:0}),xx=ei(ao),xu,Su,so,_l=_({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(xu=e.screenX-so.screenX,Su=e.screenY-so.screenY):Su=xu=0,so=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Dp=ei(_l),Sx=_({},_l,{dataTransfer:0}),yx=ei(Sx),Mx=_({},ao,{relatedTarget:0}),yu=ei(Mx),Ex=_({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=ei(Ex),Tx=_({},Ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ax=ei(Tx),Rx=_({},Ss,{data:0}),Up=ei(Rx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ux(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Dx[e])?!!n[e]:!1}function Mu(){return Ux}var Lx=_({},ao,{key:function(e){if(e.key){var n=Cx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nx=ei(Lx),Ox=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=ei(Ox),Px=_({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),zx=ei(Px),Ix=_({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=ei(Ix),Bx=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=ei(Bx),Gx=_({},Ss,{newState:0,oldState:0}),Vx=ei(Gx),kx=[9,13,27,32],Eu=aa&&"CompositionEvent"in window,ro=null;aa&&"documentMode"in document&&(ro=document.documentMode);var Xx=aa&&"TextEvent"in window&&!ro,Np=aa&&(!Eu||ro&&8<ro&&11>=ro),Op=" ",Pp=!1;function zp(e,n){switch(e){case"keyup":return kx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function Wx(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Pp=!0,Op);case"textInput":return e=n.data,e===Op&&Pp?null:e;default:return null}}function qx(e,n){if(Js)return e==="compositionend"||!Eu&&zp(e,n)?(e=Cp(),dl=vu=Fa=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Np&&n.locale!=="ko"?null:n.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Yx[e.type]:n==="textarea"}function Bp(e,n,a,o){Ks?Qs?Qs.push(o):Qs=[o]:Ks=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function jx(e){yg(e,0)}function vl(e){var n=xs(e);if(Be(n))return e}function Hp(e,n){if(e==="change")return n}var Gp=!1;if(aa){var bu;if(aa){var Tu="oninput"in document;if(!Tu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Tu=typeof Vp.oninput=="function"}bu=Tu}else bu=!1;Gp=bu&&(!document.documentMode||9<document.documentMode)}function kp(){oo&&(oo.detachEvent("onpropertychange",Xp),lo=oo=null)}function Xp(e){if(e.propertyName==="value"&&vl(lo)){var n=[];Bp(n,lo,e,mu(e)),Rp(jx,n)}}function Zx(e,n,a){e==="focusin"?(kp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Xp)):e==="focusout"&&kp()}function Kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(lo)}function Qx(e,n){if(e==="click")return vl(n)}function Jx(e,n){if(e==="input"||e==="change")return vl(n)}function $x(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:$x;function co(e,n){if(ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ze.call(n,u)||!ui(e[u],n[u]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,n){var a=Wp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wp(a)}}function Yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=te(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=te(e.document)}return n}function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tS=aa&&"documentMode"in document&&11>=document.documentMode,$s=null,Ru=null,uo=null,Cu=!1;function Zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||$s==null||$s!==te(o)||(o=$s,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=rc(Ru,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=$s)))}function ys(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var tr={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},wu={},Kp={};aa&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ms(e){if(wu[e])return wu[e];if(!tr[e])return e;var n=tr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return wu[e]=n[a];return e}var Qp=Ms("animationend"),Jp=Ms("animationiteration"),$p=Ms("animationstart"),eS=Ms("transitionrun"),nS=Ms("transitionstart"),iS=Ms("transitioncancel"),tm=Ms("transitionend"),em=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Oi(e,n){em.set(e,n),ot(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],er=0,Uu=0;function Sl(){for(var e=er,n=Uu=er=0;n<e;){var a=yi[n];yi[n++]=null;var o=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var h=yi[n];if(yi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&nm(a,u,h)}}function yl(e,n,a,o){yi[er++]=e,yi[er++]=n,yi[er++]=a,yi[er++]=o,Uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Lu(e,n,a,o){return yl(e,n,a,o),Ml(e)}function Es(e,n){return yl(e,null,null,n),Ml(e)}function nm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-zt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ml(e){if(50<No)throw No=0,Vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var nr={};function aS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,n,a,o){return new aS(e,n,a,o)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,n){var a=e.alternate;return a===null?(a=fi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function im(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Nu(e)&&(S=1);else if(typeof e=="string")S=cy(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=fi(31,a,n,u),e.elementType=A,e.lanes=h,e;case T:return bs(a.children,u,h,n);case M:S=8,u|=24;break;case v:return e=fi(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case O:return e=fi(13,a,n,u),e.elementType=O,e.lanes=h,e;case I:return e=fi(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case U:S=9;break t;case w:S=11;break t;case N:S=14;break t;case V:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=fi(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function bs(e,n,a,o){return e=fi(7,e,o,n),e.lanes=a,e}function Ou(e,n,a){return e=fi(6,e,null,n),e.lanes=a,e}function am(e){var n=fi(18,null,null,0);return n.stateNode=e,n}function Pu(e,n,a){return n=fi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var sm=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=sm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},sm.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var ir=[],ar=0,bl=null,fo=0,Ei=[],bi=0,Ba=null,Vi=1,ki="";function ra(e,n){ir[ar++]=fo,ir[ar++]=bl,bl=e,fo=n}function rm(e,n,a){Ei[bi++]=Vi,Ei[bi++]=ki,Ei[bi++]=Ba,Ba=e;var o=Vi;e=ki;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var h=32-zt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Vi=1<<32-zt(n)+u|a<<u|o,ki=h+e}else Vi=1<<h|a<<u|o,ki=e}function zu(e){e.return!==null&&(ra(e,1),rm(e,1,0))}function Iu(e){for(;e===bl;)bl=ir[--ar],ir[ar]=null,fo=ir[--ar],ir[ar]=null;for(;e===Ba;)Ba=Ei[--bi],Ei[bi]=null,ki=Ei[--bi],Ei[bi]=null,Vi=Ei[--bi],Ei[bi]=null}function om(e,n){Ei[bi++]=Vi,Ei[bi++]=ki,Ei[bi++]=Ba,Vi=n.id,ki=n.overflow,Ba=e}var Hn=null,tn=null,Ce=!1,Ha=null,Ti=!1,Fu=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(Mi(n,e)),Fu}function lm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Je]=e,n[bn]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)Ee(Po[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),na(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),In(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Tg(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ga(e,!0)}function cm(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Hn=Hn.return}}function sr(e){if(e!==Hn)return!1;if(!Ce)return cm(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&tn&&Ga(e),cm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=Og(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=Og(e)}else n===27?(n=tn,es(e.type)?(e=lh,lh=null,tn=e):tn=n):tn=Hn?Ri(e.stateNode.nextSibling):null;return!0}function Ts(){tn=Hn=null,Ce=!1}function Bu(){var e=Ha;return e!==null&&(si===null?si=e:si.push.apply(si,e),Ha=null),e}function ho(e){Ha===null?Ha=[e]:Ha.push(e)}var Hu=z(null),As=null,oa=null;function Va(e,n,a){yt(Hu,n._currentValue),n._currentValue=a}function la(e){e._currentValue=Hu.current,rt(Hu)}function Gu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Vu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Gu(h.return,a,e),o||(S=null);break t}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Gu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function rr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;ui(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===gt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Vu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){As=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gn(e){return um(As,e)}function Al(e,n){return As===null&&Rs(e),um(e,n)}function um(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(s(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var sS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},rS=r.unstable_scheduleCallback,oS=r.unstable_NormalPriority,xn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new sS,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&rS(oS,function(){e.controller.abort()})}var mo=null,Xu=0,or=0,lr=null;function lS(e,n){if(mo===null){var a=mo=[];Xu=0,or=jf(),lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(fm,fm),n}function fm(){if(--Xu===0&&mo!==null){lr!==null&&(lr.status="fulfilled");var e=mo;mo=null,or=0,lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var hm=F.S;F.S=function(e,n){Z0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lS(e,n),hm!==null&&hm(e,n)};var Cs=z(null);function Wu(){var e=Cs.current;return e!==null?e:Qe.pooledCache}function Rl(e,n){n===null?yt(Cs,Cs.current):yt(Cs,n.pool)}function dm(){var e=Wu();return e===null?null:{parent:xn._currentValue,pool:e}}var cr=Error(s(460)),qu=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e;default:if(typeof n.status=="string")n.then(ia,ia);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e}throw Ds=n,cr}}function ws(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,cr):a}}var Ds=null;function gm(){if(Ds===null)throw Error(s(459));var e=Ds;return Ds=null,e}function _m(e){if(e===cr||e===Cl)throw Error(s(483))}var ur=null,go=0;function Dl(e){var n=go;return go+=1,ur===null&&(ur=[]),mm(ur,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vm(e){function n(Q,W){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[W],Q.flags|=16):nt.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=sa(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<W?(Q.flags|=67108866,W):nt):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,nt,St){return W===null||W.tag!==6?(W=Ou(nt,Q.mode,St),W.return=Q,W):(W=u(W,nt),W.return=Q,W)}function B(Q,W,nt,St){var ee=nt.type;return ee===T?vt(Q,W,nt.props.children,St,nt.key):W!==null&&(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===V&&ws(ee)===W.type)?(W=u(W,nt.props),_o(W,nt),W.return=Q,W):(W=El(nt.type,nt.key,nt.props,null,Q.mode,St),_o(W,nt),W.return=Q,W)}function at(Q,W,nt,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=Pu(nt,Q.mode,St),W.return=Q,W):(W=u(W,nt.children||[]),W.return=Q,W)}function vt(Q,W,nt,St,ee){return W===null||W.tag!==7?(W=bs(nt,Q.mode,St,ee),W.return=Q,W):(W=u(W,nt),W.return=Q,W)}function Mt(Q,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ou(""+W,Q.mode,nt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return nt=El(W.type,W.key,W.props,null,Q.mode,nt),_o(nt,W),nt.return=Q,nt;case E:return W=Pu(W,Q.mode,nt),W.return=Q,W;case V:return W=ws(W),Mt(Q,W,nt)}if(ft(W)||Y(W))return W=bs(W,Q.mode,nt,null),W.return=Q,W;if(typeof W.then=="function")return Mt(Q,Dl(W),nt);if(W.$$typeof===L)return Mt(Q,Al(Q,W),nt);Ul(Q,W)}return null}function lt(Q,W,nt,St){var ee=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ee!==null?null:R(Q,W,""+nt,St);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===ee?B(Q,W,nt,St):null;case E:return nt.key===ee?at(Q,W,nt,St):null;case V:return nt=ws(nt),lt(Q,W,nt,St)}if(ft(nt)||Y(nt))return ee!==null?null:vt(Q,W,nt,St,null);if(typeof nt.then=="function")return lt(Q,W,Dl(nt),St);if(nt.$$typeof===L)return lt(Q,W,Al(Q,nt),St);Ul(Q,nt)}return null}function dt(Q,W,nt,St,ee){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(nt)||null,R(W,Q,""+St,ee);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return Q=Q.get(St.key===null?nt:St.key)||null,B(W,Q,St,ee);case E:return Q=Q.get(St.key===null?nt:St.key)||null,at(W,Q,St,ee);case V:return St=ws(St),dt(Q,W,nt,St,ee)}if(ft(St)||Y(St))return Q=Q.get(nt)||null,vt(W,Q,St,ee,null);if(typeof St.then=="function")return dt(Q,W,nt,Dl(St),ee);if(St.$$typeof===L)return dt(Q,W,nt,Al(W,St),ee);Ul(W,St)}return null}function qt(Q,W,nt,St){for(var ee=null,Oe=null,$t=W,_e=W=0,Ae=null;$t!==null&&_e<nt.length;_e++){$t.index>_e?(Ae=$t,$t=null):Ae=$t.sibling;var Pe=lt(Q,$t,nt[_e],St);if(Pe===null){$t===null&&($t=Ae);break}e&&$t&&Pe.alternate===null&&n(Q,$t),W=h(Pe,W,_e),Oe===null?ee=Pe:Oe.sibling=Pe,Oe=Pe,$t=Ae}if(_e===nt.length)return a(Q,$t),Ce&&ra(Q,_e),ee;if($t===null){for(;_e<nt.length;_e++)$t=Mt(Q,nt[_e],St),$t!==null&&(W=h($t,W,_e),Oe===null?ee=$t:Oe.sibling=$t,Oe=$t);return Ce&&ra(Q,_e),ee}for($t=o($t);_e<nt.length;_e++)Ae=dt($t,Q,_e,nt[_e],St),Ae!==null&&(e&&Ae.alternate!==null&&$t.delete(Ae.key===null?_e:Ae.key),W=h(Ae,W,_e),Oe===null?ee=Ae:Oe.sibling=Ae,Oe=Ae);return e&&$t.forEach(function(rs){return n(Q,rs)}),Ce&&ra(Q,_e),ee}function se(Q,W,nt,St){if(nt==null)throw Error(s(151));for(var ee=null,Oe=null,$t=W,_e=W=0,Ae=null,Pe=nt.next();$t!==null&&!Pe.done;_e++,Pe=nt.next()){$t.index>_e?(Ae=$t,$t=null):Ae=$t.sibling;var rs=lt(Q,$t,Pe.value,St);if(rs===null){$t===null&&($t=Ae);break}e&&$t&&rs.alternate===null&&n(Q,$t),W=h(rs,W,_e),Oe===null?ee=rs:Oe.sibling=rs,Oe=rs,$t=Ae}if(Pe.done)return a(Q,$t),Ce&&ra(Q,_e),ee;if($t===null){for(;!Pe.done;_e++,Pe=nt.next())Pe=Mt(Q,Pe.value,St),Pe!==null&&(W=h(Pe,W,_e),Oe===null?ee=Pe:Oe.sibling=Pe,Oe=Pe);return Ce&&ra(Q,_e),ee}for($t=o($t);!Pe.done;_e++,Pe=nt.next())Pe=dt($t,Q,_e,Pe.value,St),Pe!==null&&(e&&Pe.alternate!==null&&$t.delete(Pe.key===null?_e:Pe.key),W=h(Pe,W,_e),Oe===null?ee=Pe:Oe.sibling=Pe,Oe=Pe);return e&&$t.forEach(function(Sy){return n(Q,Sy)}),Ce&&ra(Q,_e),ee}function Ye(Q,W,nt,St){if(typeof nt=="object"&&nt!==null&&nt.type===T&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var ee=nt.key;W!==null;){if(W.key===ee){if(ee=nt.type,ee===T){if(W.tag===7){a(Q,W.sibling),St=u(W,nt.props.children),St.return=Q,Q=St;break t}}else if(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===V&&ws(ee)===W.type){a(Q,W.sibling),St=u(W,nt.props),_o(St,nt),St.return=Q,Q=St;break t}a(Q,W);break}else n(Q,W);W=W.sibling}nt.type===T?(St=bs(nt.props.children,Q.mode,St,nt.key),St.return=Q,Q=St):(St=El(nt.type,nt.key,nt.props,null,Q.mode,St),_o(St,nt),St.return=Q,Q=St)}return S(Q);case E:t:{for(ee=nt.key;W!==null;){if(W.key===ee)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(Q,W.sibling),St=u(W,nt.children||[]),St.return=Q,Q=St;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}St=Pu(nt,Q.mode,St),St.return=Q,Q=St}return S(Q);case V:return nt=ws(nt),Ye(Q,W,nt,St)}if(ft(nt))return qt(Q,W,nt,St);if(Y(nt)){if(ee=Y(nt),typeof ee!="function")throw Error(s(150));return nt=ee.call(nt),se(Q,W,nt,St)}if(typeof nt.then=="function")return Ye(Q,W,Dl(nt),St);if(nt.$$typeof===L)return Ye(Q,W,Al(Q,nt),St);Ul(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(Q,W.sibling),St=u(W,nt),St.return=Q,Q=St):(a(Q,W),St=Ou(nt,Q.mode,St),St.return=Q,Q=St),S(Q)):a(Q,W)}return function(Q,W,nt,St){try{go=0;var ee=Ye(Q,W,nt,St);return ur=null,ee}catch($t){if($t===cr||$t===Cl)throw $t;var Oe=fi(29,$t,null,Q.mode);return Oe.lanes=St,Oe.return=Q,Oe}finally{}}}var Us=vm(!0),xm=vm(!1),ka=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),nm(e,null,a),n}return yl(e,o,n,a),Ml(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,cn(e,a)}}function Zu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ku=!1;function xo(){if(Ku){var e=lr;if(e!==null)throw e}}function So(e,n,a,o){Ku=!1;var u=e.updateQueue;ka=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,at=B.next;B.next=null,S===null?h=at:S.next=at,S=B;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,R=vt.lastBaseUpdate,R!==S&&(R===null?vt.firstBaseUpdate=at:R.next=at,vt.lastBaseUpdate=B))}if(h!==null){var Mt=u.baseState;S=0,vt=at=B=null,R=h;do{var lt=R.lane&-536870913,dt=lt!==R.lane;if(dt?(Te&lt)===lt:(o&lt)===lt){lt!==0&&lt===or&&(Ku=!0),vt!==null&&(vt=vt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var qt=e,se=R;lt=n;var Ye=a;switch(se.tag){case 1:if(qt=se.payload,typeof qt=="function"){Mt=qt.call(Ye,Mt,lt);break t}Mt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=se.payload,lt=typeof qt=="function"?qt.call(Ye,Mt,lt):qt,lt==null)break t;Mt=_({},Mt,lt);break t;case 2:ka=!0}}lt=R.callback,lt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[lt]:dt.push(lt))}else dt={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},vt===null?(at=vt=dt,B=Mt):vt=vt.next=dt,S|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;dt=R,R=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);vt===null&&(B=Mt),u.baseState=B,u.firstBaseUpdate=at,u.lastBaseUpdate=vt,h===null&&(u.shared.lanes=0),Ka|=S,e.lanes=S,e.memoizedState=Mt}}function Sm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ym(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sm(a[e],n)}var fr=z(null),Ll=z(0);function Mm(e,n){e=_a,yt(Ll,e),yt(fr,n),_a=e|n.baseLanes}function Qu(){yt(Ll,_a),yt(fr,fr.current)}function Ju(){_a=Ll.current,rt(fr),rt(Ll)}var hi=z(null),Ai=null;function qa(e){var n=e.alternate;yt(pn,pn.current&1),yt(hi,e),Ai===null&&(n===null||fr.current!==null||n.memoizedState!==null)&&(Ai=e)}function $u(e){yt(pn,pn.current),yt(hi,e),Ai===null&&(Ai=e)}function Em(e){e.tag===22?(yt(pn,pn.current),yt(hi,e),Ai===null&&(Ai=e)):Ya()}function Ya(){yt(pn,pn.current),yt(hi,hi.current)}function di(e){rt(hi),Ai===e&&(Ai=null),rt(pn)}var pn=z(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,me=null,We=null,Sn=null,Ol=!1,hr=!1,Ls=!1,Pl=0,yo=0,dr=null,uS=0;function un(){throw Error(s(321))}function tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ui(e[a],n[a]))return!1;return!0}function ef(e,n,a,o,u,h){return ca=h,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?r0:_f,Ls=!1,h=a(o,u),Ls=!1,hr&&(h=Tm(n,a,o,u)),bm(e),h}function bm(e){F.H=bo;var n=We!==null&&We.next!==null;if(ca=0,Sn=We=me=null,Ol=!1,yo=0,dr=null,n)throw Error(s(300));e===null||yn||(e=e.dependencies,e!==null&&Tl(e)&&(yn=!0))}function Tm(e,n,a,o){me=e;var u=0;do{if(hr&&(dr=null),yo=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,Sn=We=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=o0,h=n(a,o)}while(hr);return h}function fS(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(me.flags|=1024),n}function nf(){var e=Pl!==0;return Pl=0,e}function af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function sf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}ca=0,Sn=We=me=null,hr=!1,yo=Pl=0,dr=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?me.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function mn(){if(We===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var n=Sn===null?me.memoizedState:Sn.next;if(n!==null)Sn=n,We=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Sn===null?me.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,dr===null&&(dr=[]),e=mm(dr,e,n),n=me,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?r0:_f),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===L)return Gn(e)}throw Error(s(438,String(e)))}function rf(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function ua(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=mn();return of(n,We,e)}function of(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=S=null,B=null,at=n,vt=!1;do{var Mt=at.lane&-536870913;if(Mt!==at.lane?(Te&Mt)===Mt:(ca&Mt)===Mt){var lt=at.revertLane;if(lt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Mt===or&&(vt=!0);else if((ca&lt)===lt){at=at.next,lt===or&&(vt=!0);continue}else Mt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},B===null?(R=B=Mt,S=h):B=B.next=Mt,me.lanes|=lt,Ka|=lt;Mt=at.action,Ls&&a(h,Mt),h=at.hasEagerState?at.eagerState:a(h,Mt)}else lt={lane:Mt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},B===null?(R=B=lt,S=h):B=B.next=lt,me.lanes|=Mt,Ka|=Mt;at=at.next}while(at!==null&&at!==n);if(B===null?S=h:B.next=R,!ui(h,e.memoizedState)&&(yn=!0,vt&&(a=lr,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function lf(e){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);ui(h,n.memoizedState)||(yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Am(e,n,a){var o=me,u=mn(),h=Ce;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ui((We||u).memoizedState,a);if(S&&(u.memoizedState=a,yn=!0),u=u.queue,ff(wm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,pr(9,{destroy:void 0},Cm.bind(null,o,u,a,n),null),Qe===null)throw Error(s(349));h||(ca&127)!==0||Rm(o,n,a)}return a}function Rm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=zl(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Cm(e,n,a,o){n.value=a,n.getSnapshot=o,Dm(n)&&Um(e)}function wm(e,n,a){return a(function(){Dm(n)&&Um(e)})}function Dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ui(e,a)}catch{return!0}}function Um(e){var n=Es(e,2);n!==null&&ri(n,e,2)}function cf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Ls){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},n}function Lm(e,n,a,o){return e.baseState=a,of(e,We,typeof o=="function"?o:ua)}function hS(e,n,a,o,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Nm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Nm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var R=a(u,o),B=F.S;B!==null&&B(S,R),Om(e,n,R)}catch(at){uf(e,n,at)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=a(u,o),Om(e,n,h)}catch(at){uf(e,n,at)}}function Om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Pm(e,n,o)},function(o){return uf(e,n,o)}):Pm(e,n,a)}function Pm(e,n,a){n.status="fulfilled",n.value=a,zm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Nm(e,a)))}function uf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,zm(n),n=n.next;while(n!==o)}e.action=null}function zm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Im(e,n){return n}function Fm(e,n){if(Ce){var a=Qe.formState;if(a!==null){t:{var o=me;if(Ce){if(tn){e:{for(var u=tn,h=Ti;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ri(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){tn=Ri(u.nextSibling),o=u.data==="F!";break t}}Ga(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=i0.bind(null,me,o),o.dispatch=a,o=cf(!1),h=gf.bind(null,me,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=hS.bind(null,me,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Bm(e){var n=mn();return Hm(n,We,e)}function Hm(e,n,a){if(n=of(e,n,Im)[0],e=Fl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(S){throw S===cr?Cl:S}else o=n;n=mn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,pr(9,{destroy:void 0},dS.bind(null,u,a),null)),[o,h,e]}function dS(e,n){e.action=n}function Gm(e){var n=mn(),a=We;if(a!==null)return Hm(n,a,e);mn(),n=n.memoizedState,a=mn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function pr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=zl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Vm(){return mn().memoizedState}function Bl(e,n,a,o){var u=Kn();me.flags|=e,u.memoizedState=pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=mn();o=o===void 0?null:o;var h=u.memoizedState.inst;We!==null&&o!==null&&tf(o,We.memoizedState.deps)?u.memoizedState=pr(n,h,a,o):(me.flags|=e,u.memoizedState=pr(1|n,h,a,o))}function km(e,n){Bl(8390656,8,e,n)}function ff(e,n){Hl(2048,8,e,n)}function pS(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=zl(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Xm(e){var n=mn().memoizedState;return pS({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Wm(e,n){return Hl(4,2,e,n)}function qm(e,n){return Hl(4,4,e,n)}function Ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,Ym.bind(null,n,e),a)}function hf(){}function Zm(e,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Km(e,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=e(),Ls){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o}function df(e,n,a){return a===void 0||(ca&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Q0(),me.lanes|=e,Ka|=e,a)}function Qm(e,n,a,o){return ui(a,n)?a:fr.current!==null?(e=df(e,a,o),ui(e,n)||(yn=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(Te&261930)===0?(yn=!0,e.memoizedState=a):(e=Q0(),me.lanes|=e,Ka|=e,n)}function Jm(e,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var S=F.T,R={};F.T=R,gf(e,!1,n,a);try{var B=u(),at=F.S;if(at!==null&&at(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var vt=cS(B,o);Eo(e,n,vt,gi(e))}else Eo(e,n,o,gi(e))}catch(Mt){Eo(e,n,{then:function(){},status:"rejected",reason:Mt},gi())}finally{G.p=h,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function mS(){}function pf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=$m(e).queue;Jm(e,u,n,st,a===null?mS:function(){return t0(e),a(o)})}function $m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function t0(e){var n=$m(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},gi())}function mf(){return Gn(Ho)}function e0(){return mn().memoizedState}function n0(){return mn().memoizedState}function gS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();e=Xa(a);var o=Wa(n,e,a);o!==null&&(ri(o,n,a),vo(o,n,a)),n={cache:ku()},e.payload=n;return}n=n.return}}function _S(e,n,a){var o=gi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?a0(n,a):(a=Lu(e,n,a,o),a!==null&&(ri(a,e,o),s0(a,n,o)))}function i0(e,n,a){var o=gi();Eo(e,n,a,o)}function Eo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))a0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,a);if(u.hasEagerState=!0,u.eagerState=R,ui(R,S))return yl(e,n,u,0),Qe===null&&Sl(),!1}catch{}finally{}if(a=Lu(e,n,u,o),a!==null)return ri(a,e,o),s0(a,n,o),!0}return!1}function gf(e,n,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=Lu(e,a,o,2),n!==null&&ri(n,e,2)}function Gl(e){var n=e.alternate;return e===me||n!==null&&n===me}function a0(e,n){hr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function s0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,cn(e,a)}}var bo={readContext:Gn,use:Il,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};bo.useEffectEvent=un;var r0={readContext:Gn,use:Il,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Gn,useEffect:km,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(Ls){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Ls){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=_S.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=cf(e);var n=e.queue,a=i0.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,n){var a=Kn();return df(a,e,n)},useTransition:function(){var e=cf(!1);return e=Jm.bind(null,me,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=me,u=Kn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Te&127)!==0||Rm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,km(wm.bind(null,o,h,e),[e]),o.flags|=2048,pr(9,{destroy:void 0},Cm.bind(null,o,h,a,n),null),a},useId:function(){var e=Kn(),n=Qe.identifierPrefix;if(Ce){var a=ki,o=Vi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=uS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:rf,useCacheRefresh:function(){return Kn().memoizedState=gS.bind(null,me)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:Gn,use:Il,useCallback:Zm,useContext:Gn,useEffect:ff,useImperativeHandle:jm,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:Fl,useRef:Vm,useState:function(){return Fl(ua)},useDebugValue:hf,useDeferredValue:function(e,n){var a=mn();return Qm(a,We.memoizedState,e,n)},useTransition:function(){var e=Fl(ua)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Am,useId:e0,useHostTransitionStatus:mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,n){var a=mn();return Lm(a,We,e,n)},useMemoCache:rf,useCacheRefresh:n0};_f.useEffectEvent=Xm;var o0={readContext:Gn,use:Il,useCallback:Zm,useContext:Gn,useEffect:ff,useImperativeHandle:jm,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:lf,useRef:Vm,useState:function(){return lf(ua)},useDebugValue:hf,useDeferredValue:function(e,n){var a=mn();return We===null?df(a,e,n):Qm(a,We.memoizedState,e,n)},useTransition:function(){var e=lf(ua)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Am,useId:e0,useHostTransitionStatus:mf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,n){var a=mn();return We!==null?Lm(a,We,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:n0};o0.useEffectEvent=Xm;function vf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=gi(),u=Xa(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(ri(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=gi(),u=Xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(ri(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=gi(),o=Xa(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(e,o,a),n!==null&&(ri(n,e,a),vo(n,e,a))}};function l0(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,h):!0}function c0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&xf.enqueueReplaceState(n,n.state,null)}function Ns(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function u0(e){xl(e)}function f0(e){console.error(e)}function h0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function d0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(e,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function p0(e){return e=Xa(e),e.tag=3,e}function m0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){d0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){d0(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function vS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?tc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(e,o,u)),!1}throw Error(s(435,a.tag))}return Wf(e,o,u),tc(),!1}if(Ce)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(e=Error(s(422),{cause:o}),ho(Mi(e,a)))):(o!==Fu&&(n=Error(s(423),{cause:o}),ho(Mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Mi(o,a),u=Sf(e.stateNode,o,u),Zu(e,u),fn!==4&&(fn=2)),!1;var h=Error(s(520),{cause:o});if(h=Mi(h,a),Lo===null?Lo=[h]:Lo.push(h),fn!==4&&(fn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Sf(a.stateNode,o,e),Zu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qa===null||!Qa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=p0(u),m0(u,e,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),yn=!1;function Vn(e,n,a,o){n.child=e===null?xm(n,null,a,o):Us(n,e.child,a,o)}function g0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Rs(n),o=ef(e,n,a,S,h,u),R=nf(),e!==null&&!yn?(af(e,n,u),fa(e,n,u)):(Ce&&R&&zu(n),n.flags|=1,Vn(e,n,o,u),n.child)}function _0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,v0(e,n,h,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!wf(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(S,o)&&e.ref===n.ref)return fa(e,n,u)}return n.flags|=1,e=sa(h,o),e.ref=n.ref,e.return=n,n.child=e}function v0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(co(h,o)&&e.ref===n.ref)if(yn=!1,n.pendingProps=o=h,wf(e,u))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,fa(e,n,u)}return Mf(e,n,a,o,u)}function x0(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return S0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,h!==null?h.cachePool:null),h!==null?Mm(n,h):Qu(),Em(n);else return o=n.lanes=536870912,S0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Rl(n,h.cachePool),Mm(n,h),Ya(),n.memoizedState=null):(e!==null&&Rl(n,null),Qu(),Ya());return Vn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function S0(e,n,a,o,u){var h=Wu();return h=h===null?null:{parent:xn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Rl(n,null),Qu(),Em(n),e!==null&&rr(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function y0(e,n,a){return Us(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,di(n),n.memoizedState=null,e}function xS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,To(null,e);if($u(n),(e=tn)?(e=Ng(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=am(e),a.return=n,n.child=a,Hn=n,tn=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return kl(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=y0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(yn||rr(e,n,a,!1),u=(a&e.childLanes)!==0,yn||u){if(o=Qe,o!==null&&(S=an(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,Es(e,S),ri(o,e,S),yf;tc(),n=y0(e,n,a)}else e=h.treeContext,tn=Ri(S.nextSibling),Hn=n,Ce=!0,Ha=null,Ti=!1,e!==null&&om(n,e),n=kl(n,o),n.flags|=4096;return n}return e=sa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mf(e,n,a,o,u){return Rs(n),a=ef(e,n,a,o,void 0,u),o=nf(),e!==null&&!yn?(af(e,n,u),fa(e,n,u)):(Ce&&o&&zu(n),n.flags|=1,Vn(e,n,a,u),n.child)}function M0(e,n,a,o,u,h){return Rs(n),n.updateQueue=null,a=Tm(n,o,a,u),bm(e),o=nf(),e!==null&&!yn?(af(e,n,h),fa(e,n,h)):(Ce&&o&&zu(n),n.flags|=1,Vn(e,n,a,h),n.child)}function E0(e,n,a,o,u){if(Rs(n),n.stateNode===null){var h=nr,S=a.contextType;typeof S=="object"&&S!==null&&(h=Gn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=xf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Yu(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Gn(S):nr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(vf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&xf.enqueueReplaceState(h,h.state,null),So(n,o,h,u),xo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,B=Ns(a,R);h.props=B;var at=h.context,vt=a.contextType;S=nr,typeof vt=="object"&&vt!==null&&(S=Gn(vt));var Mt=a.getDerivedStateFromProps;vt=typeof Mt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,vt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||at!==S)&&c0(n,h,o,S),ka=!1;var lt=n.memoizedState;h.state=lt,So(n,o,h,u),xo(),at=n.memoizedState,R||lt!==at||ka?(typeof Mt=="function"&&(vf(n,a,Mt,o),at=n.memoizedState),(B=ka||l0(n,a,B,o,lt,at,S))?(vt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),h.props=o,h.state=at,h.context=S,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ju(e,n),S=n.memoizedProps,vt=Ns(a,S),h.props=vt,Mt=n.pendingProps,lt=h.context,at=a.contextType,B=nr,typeof at=="object"&&at!==null&&(B=Gn(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Mt||lt!==B)&&c0(n,h,o,B),ka=!1,lt=n.memoizedState,h.state=lt,So(n,o,h,u),xo();var dt=n.memoizedState;S!==Mt||lt!==dt||ka||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof R=="function"&&(vf(n,a,R,o),dt=n.memoizedState),(vt=ka||l0(n,a,vt,o,lt,dt,B)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,dt,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,dt,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),h.props=o,h.state=dt,h.context=B,o=vt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Xl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Us(n,e.child,null,u),n.child=Us(n,null,a,u)):Vn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=fa(e,n,u),e}function b0(e,n,a,o){return Ts(),n.flags|=256,Vn(e,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:dm()}}function Tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=mi),e}function T0(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?qa(n):Ya(),(e=tn)?(e=Ng(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=am(e),a.return=n,n.child=a,Hn=n,tn=null)):e=null,e===null)throw Ga(n);return oh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ya(),u=n.mode,R=Wl({mode:"hidden",children:R},u),o=bs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(e,S,a),n.memoizedState=Ef,To(null,o)):(qa(n),Af(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(h)n.flags&256?(qa(n),n.flags&=-257,n=Rf(e,n,a)):n.memoizedState!==null?(Ya(),n.child=e.child,n.flags|=128,n=null):(Ya(),R=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),R=bs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Us(n,e.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(e,S,a),n.memoizedState=Ef,n=To(null,o));else if(qa(n),oh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var at=S.dgst;S=at,o=Error(s(419)),o.stack="",o.digest=S,ho({value:o,source:null,stack:null}),n=Rf(e,n,a)}else if(yn||rr(e,n,a,!1),S=(a&e.childLanes)!==0,yn||S){if(S=Qe,S!==null&&(o=an(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Es(e,o),ri(S,e,o),yf;rh(R)||tc(),n=Rf(e,n,a)}else rh(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,tn=Ri(R.nextSibling),Hn=n,Ce=!0,Ha=null,Ti=!1,e!==null&&om(n,e),n=Af(n,o.children),n.flags|=4096);return n}return u?(Ya(),R=o.fallback,u=n.mode,B=e.child,at=B.sibling,o=sa(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,at!==null?R=sa(at,R):(R=bs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,To(null,o),o=n.child,R=e.child.memoizedState,R===null?R=bf(a):(u=R.cachePool,u!==null?(B=xn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=dm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Tf(e,S,a),n.memoizedState=Ef,To(e.child,o)):(qa(n),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Af(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=fi(22,e,null,n),e.lanes=0,e}function Rf(e,n,a){return Us(n,e.child,null,a),e=Af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function A0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Gu(e.return,n,a)}function Cf(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function R0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=pn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,yt(pn,S),Vn(e,n,o,a),o=Ce?fo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A0(e,a,n);else if(e.tag===19)A0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Cf(n,!0,a,null,h,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(rr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function SS(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Va(n,xn,e.memoizedState.cache),Ts();break;case 27:case 5:Ht(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T0(e,n,a):(qa(n),e=fa(e,n,a),e!==null?e.sibling:null);qa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return R0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(pn,pn.current),o)break;return null;case 22:return n.lanes=0,x0(e,n,a,n.pendingProps);case 24:Va(n,xn,e.memoizedState.cache)}return fa(e,n,a)}function C0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!wf(e,a)&&(n.flags&128)===0)return yn=!1,SS(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,Ce&&(n.flags&1048576)!==0&&rm(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ws(n.elementType),n.type=e,typeof e=="function")Nu(e)?(o=Ns(e,o),n.tag=1,n=E0(null,n,e,o,a)):(n.tag=0,n=Mf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=g0(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=_0(null,n,e,o,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ns(o,n.pendingProps),E0(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,ju(e,n),So(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Va(n,xn,o),o!==h.cache&&Vu(n,[xn],a,!0),xo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=b0(e,n,o,a);break t}else if(o!==u){u=Mi(Error(s(424)),n),ho(u),n=b0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Ri(e.firstChild),Hn=n,Ce=!0,Ha=null,Ti=!0,a=xm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ts(),o===u){n=fa(e,n,a);break t}Vn(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=oc(tt.current).createElement(a),o[Je]=n,o[bn]=e,kn(o,a,e),C(o),n.stateNode=o):n.memoizedState=Bg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Ce&&(o=n.stateNode=zg(n.type,n.pendingProps,tt.current),Hn=n,Ti=!0,u=tn,es(n.type)?(lh=u,tn=Ri(o.firstChild)):tn=u),Vn(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=tn)&&(o=KS(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Hn=n,tn=Ri(o.firstChild),Ti=!1,u=!0):u=!1),u||Ga(n)),Ht(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,ih(u,h)?o=null:S!==null&&ih(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(e,n,fS,null,null,a),Ho._currentValue=u),Xl(e,n),Vn(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=tn)&&(a=QS(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Hn=n,tn=null,e=!0):e=!1),e||Ga(n)),null;case 13:return T0(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Us(n,null,o,a):Vn(e,n,o,a),n.child;case 11:return g0(e,n,n.type,n.pendingProps,a);case 7:return Vn(e,n,n.pendingProps,a),n.child;case 8:return Vn(e,n,n.pendingProps.children,a),n.child;case 12:return Vn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Va(n,n.type,o.value),Vn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rs(n),u=Gn(u),o=o(u),n.flags|=1,Vn(e,n,o,a),n.child;case 14:return _0(e,n,n.type,n.pendingProps,a);case 15:return v0(e,n,n.type,n.pendingProps,a);case 19:return R0(e,n,a);case 31:return xS(e,n,a);case 22:return x0(e,n,a,n.pendingProps);case 24:return Rs(n),o=Gn(xn),e===null?(u=Wu(),u===null&&(u=Qe,h=ku(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Yu(n),Va(n,xn,u)):((e.lanes&a)!==0&&(ju(e,n),So(n,null,null,a),xo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Va(n,xn,o)):(o=h.cache,Va(n,xn,o),o!==u.cache&&Vu(n,[xn],a,!0))),Vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(e){e.flags|=4}function Df(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(eg())e.flags|=8192;else throw Ds=wl,qu}else e.flags&=-16777217}function w0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xg(n))if(eg())e.flags|=8192;else throw Ds=wl,qu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?kt():536870912,e.lanes|=n,vr|=n)}function Ao(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function yS(e,n,a){var o=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(xn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(sr(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),en(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ha(n),h!==null?(en(n),w0(n,h)):(en(n),Df(n,u,null,o,a))):h?h!==e.memoizedState?(ha(n),en(n),w0(n,h)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ha(n),en(n),Df(n,u,e,o,a)),null;case 27:if(xe(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}e=wt.current,sr(n)?lm(n):(e=zg(u,o,a),n.stateNode=e,ha(n))}return en(n),null;case 5:if(xe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(h=wt.current,sr(n))lm(n);else{var S=oc(tt.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[Je]=n,h[bn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(kn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ha(n)}}return en(n),Df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,sr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Je]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Tg(e.nodeValue,a)),e||Ga(n,!0)}else e=oc(e).createTextNode(o),e[Je]=n,n.stateNode=e}return en(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=sr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Je]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else a=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=sr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Je]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),en(n),null);case 4:return Xt(),e===null&&Jf(n.stateNode.containerInfo),en(n),null;case 10:return la(n.type),en(n),null;case 19:if(rt(pn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ao(o,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Nl(e),h!==null){for(n.flags|=128,Ao(o,!1),e=h.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)im(a,e),a=a.sibling;return yt(pn,pn.current&1|2),Ce&&ra(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Ql&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ce)return en(n),null}else 2*b()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=pn.current,yt(pn,u?a&1|2:a&1),Ce&&ra(n,o.treeForkCount),e):(en(n),null);case 22:case 23:return di(n),Ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(Cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(xn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function MS(e,n){switch(Iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(xn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xe(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));Ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(di(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(pn),null;case 4:return Xt(),null;case 10:return la(n.type),null;case 22:case 23:return di(n),Ju(),e!==null&&rt(Cs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(xn),null;case 25:return null;default:return null}}function D0(e,n){switch(Iu(n),n.tag){case 3:la(xn),Xt();break;case 26:case 27:case 5:xe(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:rt(pn);break;case 10:la(n.type);break;case 22:case 23:di(n),Ju(),e!==null&&rt(Cs);break;case 24:la(xn)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){ke(n,n.return,R)}}function ja(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var B=a,at=R;try{at()}catch(vt){ke(u,B,vt)}}}o=o.next}while(o!==h)}}catch(vt){ke(n,n.return,vt)}}function U0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ym(n,a)}catch(o){ke(e,e.return,o)}}}function L0(e,n,a){a.props=Ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ke(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ke(e,n,u)}}function Xi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ke(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(e,n,u)}else a.current=null}function N0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ke(e,e.return,u)}}function Uf(e,n,a){try{var o=e.stateNode;XS(o,e.type,a,n),o[bn]=n}catch(u){ke(e,e.return,u)}}function O0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function Lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&es(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Nf(e,n,a),e=e.sibling;e!==null;)Nf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&es(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function P0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);kn(n,o,a),n[Je]=e,n[bn]=a}catch(h){ke(e,e.return,h)}}var da=!1,Mn=!1,Of=!1,z0=typeof WeakSet=="function"?WeakSet:Set,Un=null;function ES(e,n){if(e=e.containerInfo,eh=pc,e=jp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,R=-1,B=-1,at=0,vt=0,Mt=e,lt=null;e:for(;;){for(var dt;Mt!==a||u!==0&&Mt.nodeType!==3||(R=S+u),Mt!==h||o!==0&&Mt.nodeType!==3||(B=S+o),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)lt=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(lt===a&&++at===u&&(R=S),lt===h&&++vt===o&&(B=S),(dt=Mt.nextSibling)!==null)break;Mt=lt,lt=Mt.parentNode}Mt=dt}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},pc=!1,Un=n;Un!==null;)if(n=Un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Un=e;else for(;Un!==null;){switch(n=Un,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var qt=Ns(a.type,u);e=o.getSnapshotBeforeUpdate(qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){ke(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Un=e;break}Un=n.return}}function I0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),o&4&&Ro(5,a);break;case 1:if(ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){ke(a,a.return,S)}else{var u=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ke(a,a.return,S)}}o&64&&U0(a),o&512&&Co(a,a.return);break;case 3:if(ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(e,n)}catch(S){ke(a,a.return,S)}}break;case 27:n===null&&o&4&&P0(a);case 26:case 5:ma(e,a),n===null&&o&4&&N0(a),o&512&&Co(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),o&4&&H0(e,a);break;case 13:ma(e,a),o&4&&G0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=LS.bind(null,a),JS(e,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||Mn,u=da;var h=Mn;da=o,(Mn=n)&&!h?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),da=u,Mn=h}break;case 30:break;default:ma(e,a)}}function F0(e){var n=e.alternate;n!==null&&(e.alternate=null,F0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,ni=!1;function pa(e,n,a){for(a=a.child;a!==null;)B0(e,n,a),a=a.sibling}function B0(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:Mn||Xi(a,n),pa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||Xi(a,n);var o=rn,u=ni;es(a.type)&&(rn=a.stateNode,ni=!1),pa(e,n,a),Io(a.stateNode),rn=o,ni=u;break;case 5:Mn||Xi(a,n);case 6:if(o=rn,u=ni,rn=null,pa(e,n,a),rn=o,ni=u,rn!==null)if(ni)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(h){ke(a,n,h)}else try{rn.removeChild(a.stateNode)}catch(h){ke(a,n,h)}break;case 18:rn!==null&&(ni?(e=rn,Ug(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ar(e)):Ug(rn,a.stateNode));break;case 4:o=rn,u=ni,rn=a.stateNode.containerInfo,ni=!0,pa(e,n,a),rn=o,ni=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Mn||ja(4,a,n),pa(e,n,a);break;case 1:Mn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,n,o)),pa(e,n,a);break;case 21:pa(e,n,a);break;case 22:Mn=(o=Mn)||a.memoizedState!==null,pa(e,n,a),Mn=o;break;default:pa(e,n,a)}}function H0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ar(e)}catch(a){ke(n,n.return,a)}}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ar(e)}catch(a){ke(n,n.return,a)}}function bS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new z0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new z0),n;default:throw Error(s(435,e.tag))}}function jl(e,n){var a=bS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=NS.bind(null,e,o);o.then(u,u)}})}function ii(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(es(R.type)){rn=R.stateNode,ni=!1;break t}break;case 5:rn=R.stateNode,ni=!1;break t;case 3:case 4:rn=R.stateNode.containerInfo,ni=!0;break t}R=R.return}if(rn===null)throw Error(s(160));B0(h,S,u),rn=null,ni=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,e),n=n.sibling}var Pi=null;function V0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),o&4&&(ja(3,e,e.return),Ro(3,e),ja(5,e,e.return));break;case 1:ii(n,e),ai(e),o&512&&(Mn||a===null||Xi(a,a.return)),o&64&&da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if(ii(n,e),ai(e),o&512&&(Mn||a===null||Xi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[vs]||h[Je]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),kn(h,o,a),h[Je]=e,C(h),o=h;break t;case"link":var S=Vg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}h=u.createElement(o),kn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Vg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}h=u.createElement(o),kn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[Je]=e,C(h),o=h}e.stateNode=o}else kg(u,e.type,e.stateNode);else e.stateNode=Gg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?kg(u,e.type,e.stateNode):Gg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ii(n,e),ai(e),o&512&&(Mn||a===null||Xi(a,a.return)),a!==null&&o&4&&Uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ii(n,e),ai(e),o&512&&(Mn||a===null||Xi(a,a.return)),e.flags&32){u=e.stateNode;try{Tn(u,"")}catch(qt){ke(e,e.return,qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Uf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(ii(n,e),ai(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){ke(e,e.return,qt)}}break;case 3:if(uc=null,u=Pi,Pi=lc(n.containerInfo),ii(n,e),Pi=u,ai(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(qt){ke(e,e.return,qt)}Of&&(Of=!1,k0(e));break;case 4:o=Pi,Pi=lc(e.stateNode.containerInfo),ii(n,e),ai(e),Pi=o;break;case 12:ii(n,e),ai(e);break;case 31:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,at=da,vt=Mn;if(da=at||u,Mn=vt||B,ii(n,e),Mn=vt,da=at,ai(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||da||Mn||Os(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=B.stateNode;var Mt=B.memoizedProps.style,lt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(qt){ke(B,B.return,qt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(qt){ke(B,B.return,qt)}}}else if(n.tag===18){if(a===null){B=n;try{var dt=B.stateNode;u?Lg(dt,!0):Lg(B.stateNode,!1)}catch(qt){ke(B,B.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(O0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Lf(e);Yl(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(Tn(S,""),a.flags&=-33);var R=Lf(e);Yl(e,R,S);break;case 3:case 4:var B=a.stateNode.containerInfo,at=Lf(e);Nf(e,at,B);break;default:throw Error(s(161))}}catch(vt){ke(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function k0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;k0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(e,n.alternate,n),n=n.sibling}function Os(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Os(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),Os(n);break;case 27:Io(n.stateNode);case 26:case 5:Xi(n,n.return),Os(n);break;case 22:n.memoizedState===null&&Os(n);break;case 30:Os(n);break;default:Os(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ga(u,h,a),Ro(4,h);break;case 1:if(ga(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){ke(o,o.return,at)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Sm(B[u],R)}catch(at){ke(o,o.return,at)}}a&&S&64&&U0(h),Co(h,h.return);break;case 27:P0(h);case 26:case 5:ga(u,h,a),a&&o===null&&S&4&&N0(h),Co(h,h.return);break;case 12:ga(u,h,a);break;case 31:ga(u,h,a),a&&S&4&&H0(u,h);break;case 13:ga(u,h,a),a&&S&4&&G0(u,h);break;case 22:h.memoizedState===null&&ga(u,h,a),Co(h,h.return);break;case 30:break;default:ga(u,h,a)}n=n.sibling}}function Pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function zf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function zi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)X0(e,n,a,o),n=n.sibling}function X0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n,a,o),u&2048&&Ro(9,n);break;case 1:zi(e,n,a,o);break;case 3:zi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){zi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ke(n,n.return,B)}}else zi(e,n,a,o);break;case 31:zi(e,n,a,o);break;case 13:zi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?zi(e,n,a,o):wo(e,n):h._visibility&2?zi(e,n,a,o):(h._visibility|=2,mr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(S,n);break;case 24:zi(e,n,a,o),u&2048&&zf(n.alternate,n);break;default:zi(e,n,a,o)}}function mr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,R=a,B=o,at=S.flags;switch(S.tag){case 0:case 11:case 15:mr(h,S,R,B,u),Ro(8,S);break;case 23:break;case 22:var vt=S.stateNode;S.memoizedState!==null?vt._visibility&2?mr(h,S,R,B,u):wo(h,S):(vt._visibility|=2,mr(h,S,R,B,u)),u&&at&2048&&Pf(S.alternate,S);break;case 24:mr(h,S,R,B,u),u&&at&2048&&zf(S.alternate,S);break;default:mr(h,S,R,B,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Pf(o.alternate,o);break;case 24:wo(a,o),u&2048&&zf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function gr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)W0(e,n,a),e=e.sibling}function W0(e,n,a){switch(e.tag){case 26:gr(e,n,a),e.flags&Do&&e.memoizedState!==null&&uy(a,Pi,e.memoizedState,e.memoizedProps);break;case 5:gr(e,n,a);break;case 3:case 4:var o=Pi;Pi=lc(e.stateNode.containerInfo),gr(e,n,a),Pi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,gr(e,n,a),Do=o):gr(e,n,a));break;default:gr(e,n,a)}}function q0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,j0(o,e)}q0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Y0(e),e=e.sibling}function Y0(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Uo(e);break;default:Uo(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,j0(o,e)}q0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function j0(e,n){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Un=o;else t:for(a=e;Un!==null;){o=Un;var u=o.sibling,h=o.return;if(F0(o),o===a){Un=null;break t}if(u!==null){u.return=h,Un=u;break t}Un=h}}}var TS={getCacheForType:function(e){var n=Gn(xn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Gn(xn).controller.signal}},AS=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Me=null,Te=0,Ve=0,pi=null,Za=!1,_r=!1,If=!1,_a=0,fn=0,Ka=0,Ps=0,Ff=0,mi=0,vr=0,Lo=null,si=null,Bf=!1,Kl=0,Z0=0,Ql=1/0,Jl=null,Qa=null,An=0,Ja=null,xr=null,va=0,Hf=0,Gf=null,K0=null,No=0,Vf=null;function gi(){return(Fe&2)!==0&&Te!==0?Te&-Te:F.T!==null?jf():vn()}function Q0(){if(mi===0)if((Te&536870912)===0||Ce){var e=$;$<<=1,($&3932160)===0&&($=262144),mi=e}else mi=536870912;return e=hi.current,e!==null&&(e.flags|=32),mi}function ri(e,n,a){(e===Qe&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Sr(e,0),$a(e,Te,mi,!1)),Kt(e,a),((Fe&2)===0||e!==Qe)&&(e===Qe&&((Fe&2)===0&&(Ps|=a),fn===4&&$a(e,Te,mi,!1)),Wi(e))}function J0(e,n,a){if((Fe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||_t(e,n),u=o?wS(e,n):Xf(e,n,!0),h=o;do{if(u===0){_r&&!o&&$a(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!RS(a)){u=Xf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=Lo;var B=R.current.memoizedState.isDehydrated;if(B&&(Sr(R,S).flags|=256),S=Xf(R,S,!1),S!==2){if(If&&!B){R.errorRecoveryDisabledLanes|=h,Ps|=h,u=4;break t}h=si,si=u,h!==null&&(si===null?si=h:si.push.apply(si,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){Sr(e,0),$a(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$a(o,n,mi,!Za);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-b(),10<u)){if($a(o,n,mi,!Za),it(o,0,!0)!==0)break t;va=n,o.timeoutHandle=wg($0.bind(null,o,a,si,Jl,Bf,n,mi,Ps,vr,Za,h,"Throttled",-0,0),u);break t}$0(o,a,si,Jl,Bf,n,mi,Ps,vr,Za,h,null,-0,0)}}break}while(!0);Wi(e)}function $0(e,n,a,o,u,h,S,R,B,at,vt,Mt,lt,dt){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},W0(n,h,Mt);var qt=(h&62914560)===h?Kl-b():(h&4194048)===h?Z0-b():0;if(qt=fy(Mt,qt),qt!==null){va=h,e.cancelPendingCommit=qt(og.bind(null,e,n,h,a,o,u,S,R,B,vt,Mt,null,lt,dt)),$a(e,h,S,!at);return}}og(e,n,h,a,o,u,S,R,B)}function RS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ui(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(e,n,a,o){n&=~Ff,n&=~Ps,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-zt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&He(e,a,n)}function $l(){return(Fe&6)===0?(Oo(0),!1):!0}function kf(){if(Me!==null){if(Ve===0)var e=Me.return;else e=Me,oa=As=null,sf(e),ur=null,go=0,e=Me;for(;e!==null;)D0(e.alternate,e),e=e.return;Me=null}}function Sr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,YS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,kf(),Qe=e,Me=a=sa(e.current,null),Te=n,Ve=0,pi=null,Za=!1,_r=_t(e,n),If=!1,vr=mi=Ff=Ps=Ka=fn=0,si=Lo=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),h=1<<u;n|=e[u],o&=~h}return _a=n,Sl(),a}function tg(e,n){me=null,F.H=bo,n===cr||n===Cl?(n=gm(),Ve=3):n===qu?(n=gm(),Ve=4):Ve=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Me===null&&(fn=1,Vl(e,Mi(n,e.current)))}function eg(){var e=hi.current;return e===null?!0:(Te&4194048)===Te?Ai===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ai:!1}function ng(){var e=F.H;return F.H=bo,e===null?bo:e}function ig(){var e=F.A;return F.A=TS,e}function tc(){fn=4,Za||(Te&4194048)!==Te&&hi.current!==null||(_r=!0),(Ka&134217727)===0&&(Ps&134217727)===0||Qe===null||$a(Qe,Te,mi,!1)}function Xf(e,n,a){var o=Fe;Fe|=2;var u=ng(),h=ig();(Qe!==e||Te!==n)&&(Jl=null,Sr(e,n)),n=!1;var S=fn;t:do try{if(Ve!==0&&Me!==null){var R=Me,B=pi;switch(Ve){case 8:kf(),S=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var at=Ve;if(Ve=0,pi=null,yr(e,R,B,at),a&&_r){S=0;break t}break;default:at=Ve,Ve=0,pi=null,yr(e,R,B,at)}}CS(),S=fn;break}catch(vt){tg(e,vt)}while(!0);return n&&e.shellSuspendCounter++,oa=As=null,Fe=o,F.H=u,F.A=h,Me===null&&(Qe=null,Te=0,Sl()),S}function CS(){for(;Me!==null;)ag(Me)}function wS(e,n){var a=Fe;Fe|=2;var o=ng(),u=ig();Qe!==e||Te!==n?(Jl=null,Ql=b()+500,Sr(e,n)):_r=_t(e,n);t:do try{if(Ve!==0&&Me!==null){n=Me;var h=pi;e:switch(Ve){case 1:Ve=0,pi=null,yr(e,n,h,1);break;case 2:case 9:if(pm(h)){Ve=0,pi=null,sg(n);break}n=function(){Ve!==2&&Ve!==9||Qe!==e||(Ve=7),Wi(e)},h.then(n,n);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:pm(h)?(Ve=0,pi=null,sg(n)):(Ve=0,pi=null,yr(e,n,h,7));break;case 5:var S=null;switch(Me.tag){case 26:S=Me.memoizedState;case 5:case 27:var R=Me;if(S?Xg(S):R.stateNode.complete){Ve=0,pi=null;var B=R.sibling;if(B!==null)Me=B;else{var at=R.return;at!==null?(Me=at,ec(at)):Me=null}break e}}Ve=0,pi=null,yr(e,n,h,5);break;case 6:Ve=0,pi=null,yr(e,n,h,6);break;case 8:kf(),fn=6;break t;default:throw Error(s(462))}}DS();break}catch(vt){tg(e,vt)}while(!0);return oa=As=null,F.H=o,F.A=u,Fe=a,Me!==null?0:(Qe=null,Te=0,Sl(),fn)}function DS(){for(;Me!==null&&!jt();)ag(Me)}function ag(e){var n=C0(e.alternate,e,_a);e.memoizedProps=e.pendingProps,n===null?ec(e):Me=n}function sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=M0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=M0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:sf(n);default:D0(a,n),n=Me=im(n,_a),n=C0(a,n,_a)}e.memoizedProps=e.pendingProps,n===null?ec(e):Me=n}function yr(e,n,a,o){oa=As=null,sf(n),ur=null,go=0;var u=n.return;try{if(vS(e,u,n,a,Te)){fn=1,Vl(e,Mi(a,e.current)),Me=null;return}}catch(h){if(u!==null)throw Me=u,h;fn=1,Vl(e,Mi(a,e.current)),Me=null;return}n.flags&32768?(Ce||o===1?e=!0:_r||(Te&536870912)!==0?e=!1:(Za=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),rg(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){rg(n,Za);return}e=n.return;var a=yS(n.alternate,n,_a);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);fn===0&&(fn=5)}function rg(e,n){do{var a=MS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);fn=6,Me=null}function og(e,n,a,o,u,h,S,R,B){e.cancelPendingCommit=null;do nc();while(An!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Uu,ge(e,a,h,S,R,B),e===Qe&&(Me=Qe=null,Te=0),xr=n,Ja=e,va=a,Hf=h,Gf=u,K0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,OS(pt,function(){return hg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,S=Fe,Fe|=4;try{ES(e,n,a)}finally{Fe=S,G.p=u,F.T=o}}An=1,lg(),cg(),ug()}}function lg(){if(An===1){An=0;var e=Ja,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Fe;Fe|=4;try{V0(n,e);var h=nh,S=jp(e.containerInfo),R=h.focusedElem,B=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&Yp(R.ownerDocument.documentElement,R)){if(B!==null&&Au(R)){var at=B.start,vt=B.end;if(vt===void 0&&(vt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(vt,R.value.length);else{var Mt=R.ownerDocument||document,lt=Mt&&Mt.defaultView||window;if(lt.getSelection){var dt=lt.getSelection(),qt=R.textContent.length,se=Math.min(B.start,qt),Ye=B.end===void 0?se:Math.min(B.end,qt);!dt.extend&&se>Ye&&(S=Ye,Ye=se,se=S);var Q=qp(R,se),W=qp(R,Ye);if(Q&&W&&(dt.rangeCount!==1||dt.anchorNode!==Q.node||dt.anchorOffset!==Q.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var nt=Mt.createRange();nt.setStart(Q.node,Q.offset),dt.removeAllRanges(),se>Ye?(dt.addRange(nt),dt.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),dt.addRange(nt))}}}}for(Mt=[],dt=R;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var St=Mt[R];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}pc=!!eh,nh=eh=null}finally{Fe=u,G.p=o,F.T=a}}e.current=n,An=2}}function cg(){if(An===2){An=0;var e=Ja,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Fe;Fe|=4;try{I0(e,n.alternate,n)}finally{Fe=u,G.p=o,F.T=a}}An=3}}function ug(){if(An===4||An===3){An=0,P();var e=Ja,n=xr,a=va,o=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,xr=Ja=null,fg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Qa=null),_n(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];h(R.value,{componentStack:R.stack})}}finally{F.T=n,G.p=u}}(va&3)!==0&&nc(),Wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Vf?No++:(No=0,Vf=e):No=0,Oo(0)}}function fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function nc(){return lg(),cg(),ug(),hg()}function hg(){if(An!==5)return!1;var e=Ja,n=Hf;Hf=0;var a=_n(va),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Gf,Gf=null;var h=Ja,S=va;if(An=0,xr=Ja=null,va=0,(Fe&6)!==0)throw Error(s(331));var R=Fe;if(Fe|=4,Y0(h.current),X0(h,h.current,S,a),Fe=R,Oo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Rt,h)}catch{}return!0}finally{G.p=u,F.T=o,fg(e,n)}}function dg(e,n,a){n=Mi(a,n),n=Sf(e.stateNode,n,2),e=Wa(e,n,2),e!==null&&(Kt(e,2),Wi(e))}function ke(e,n,a){if(e.tag===3)dg(e,e,a);else for(;n!==null;){if(n.tag===3){dg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){e=Mi(a,e),a=p0(2),o=Wa(n,a,2),o!==null&&(m0(a,o,n,e),Kt(o,2),Wi(o));break}}n=n.return}}function Wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new AS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(If=!0,u.add(a),e=US.bind(null,e,n,a),n.then(e,e))}function US(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Te&a)===a&&(fn===4||fn===3&&(Te&62914560)===Te&&300>b()-Kl?(Fe&2)===0&&Sr(e,0):Ff|=a,vr===Te&&(vr=0)),Wi(e)}function pg(e,n){n===0&&(n=kt()),e=Es(e,n),e!==null&&(Kt(e,n),Wi(e))}function LS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),pg(e,a)}function NS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),pg(e,a)}function OS(e,n){return ye(e,n)}var ic=null,Mr=null,qf=!1,ac=!1,Yf=!1,ts=0;function Wi(e){e!==Mr&&e.next===null&&(Mr===null?ic=Mr=e:Mr=Mr.next=e),ac=!0,qf||(qf=!0,zS())}function Oo(e,n){if(!Yf&&ac){Yf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-zt(42|e)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,vg(o,h))}else h=Te,h=it(o,o===Qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||_t(o,h)||(a=!0,vg(o,h));o=o.next}while(a);Yf=!1}}function PS(){mg()}function mg(){ac=qf=!1;var e=0;ts!==0&&qS()&&(e=ts);for(var n=b(),a=null,o=ic;o!==null;){var u=o.next,h=gg(o,n);h===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(Mr=a)):(a=o,(e!==0||(h&3)!==0)&&(ac=!0)),o=u}An!==0&&An!==5||Oo(e),ts!==0&&(ts=0)}function gg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-zt(h),R=1<<S,B=u[S];B===-1?((R&a)===0||(R&o)!==0)&&(u[S]=Dt(R,n)):B<=n&&(e.expiredLanes|=R),h&=~R}if(n=Qe,a=Te,a=it(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),_n(a)){case 2:case 8:a=Et;break;case 32:a=pt;break;case 268435456:a=Lt;break;default:a=pt}return o=_g.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=Te;return o=it(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(J0(e,o,n),gg(e,b()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function vg(e,n){if(nc())return null;J0(e,n,!0)}function zS(){jS(function(){(Fe&6)!==0?ye(xt,PS):mg()})}function jf(){if(ts===0){var e=or;e===0&&(e=H,H<<=1,(H&261888)===0&&(H=256)),ts=e}return ts}function xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function Sg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function IS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=xg((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?xg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new gl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var B=S?Sg(u,S):new FormData(u);pf(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(R.preventDefault(),B=S?Sg(u,S):new FormData(u),pf(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],FS=Kf.toLowerCase(),BS=Kf[0].toUpperCase()+Kf.slice(1);Oi(FS,"on"+BS)}Oi(Qp,"onAnimationEnd"),Oi(Jp,"onAnimationIteration"),Oi($p,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(eS,"onTransitionRun"),Oi(nS,"onTransitionStart"),Oi(iS,"onTransitionCancel"),Oi(tm,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],B=R.instance,at=R.currentTarget;if(R=R.listener,B!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=at;try{h(u)}catch(vt){xl(vt)}u.currentTarget=null,h=B}else for(S=0;S<o.length;S++){if(R=o[S],B=R.instance,at=R.currentTarget,R=R.listener,B!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=at;try{h(u)}catch(vt){xl(vt)}u.currentTarget=null,h=B}}}}function Ee(e,n){var a=n[Na];a===void 0&&(a=n[Na]=new Set);var o=e+"__bubble";a.has(o)||(Mg(n,e,2,!1),a.add(o))}function Qf(e,n,a){var o=0;n&&(o|=4),Mg(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[sc]){e[sc]=!0,K.forEach(function(a){a!=="selectionchange"&&(HS.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,Qf("selectionchange",!1,n))}}function Mg(e,n,a,o){switch(Qg(n)){case 2:var u=py;break;case 8:u=my;break;default:u=dh}a=u.bind(null,n,a,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function $f(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Pa(R),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=h=S;continue t}R=R.parentNode}}o=o.return}Rp(function(){var at=h,vt=mu(a),Mt=[];t:{var lt=em.get(e);if(lt!==void 0){var dt=gl,qt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":dt=Nx;break;case"focusin":qt="focus",dt=yu;break;case"focusout":qt="blur",dt=yu;break;case"beforeblur":case"afterblur":dt=yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=zx;break;case Qp:case Jp:case $p:dt=bx;break;case tm:dt=Fx;break;case"scroll":case"scrollend":dt=xx;break;case"wheel":dt=Hx;break;case"copy":case"cut":case"paste":dt=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Lp;break;case"toggle":case"beforetoggle":dt=Vx}var se=(n&4)!==0,Ye=!se&&(e==="scroll"||e==="scrollend"),Q=se?lt!==null?lt+"Capture":null:lt;se=[];for(var W=at,nt;W!==null;){var St=W;if(nt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||nt===null||Q===null||(St=no(W,Q),St!=null&&se.push(zo(W,St,nt))),Ye)break;W=W.return}0<se.length&&(lt=new dt(lt,qt,null,a,vt),Mt.push({event:lt,listeners:se}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",lt&&a!==pu&&(qt=a.relatedTarget||a.fromElement)&&(Pa(qt)||qt[ti]))break t;if((dt||lt)&&(lt=vt.window===vt?vt:(lt=vt.ownerDocument)?lt.defaultView||lt.parentWindow:window,dt?(qt=a.relatedTarget||a.toElement,dt=at,qt=qt?Pa(qt):null,qt!==null&&(Ye=c(qt),se=qt.tag,qt!==Ye||se!==5&&se!==27&&se!==6)&&(qt=null)):(dt=null,qt=at),dt!==qt)){if(se=Dp,St="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=Lp,St="onPointerLeave",Q="onPointerEnter",W="pointer"),Ye=dt==null?lt:xs(dt),nt=qt==null?lt:xs(qt),lt=new se(St,W+"leave",dt,a,vt),lt.target=Ye,lt.relatedTarget=nt,St=null,Pa(vt)===at&&(se=new se(Q,W+"enter",qt,a,vt),se.target=nt,se.relatedTarget=Ye,St=se),Ye=St,dt&&qt)e:{for(se=GS,Q=dt,W=qt,nt=0,St=Q;St;St=se(St))nt++;St=0;for(var ee=W;ee;ee=se(ee))St++;for(;0<nt-St;)Q=se(Q),nt--;for(;0<St-nt;)W=se(W),St--;for(;nt--;){if(Q===W||W!==null&&Q===W.alternate){se=Q;break e}Q=se(Q),W=se(W)}se=null}else se=null;dt!==null&&Eg(Mt,lt,dt,se,!1),qt!==null&&Ye!==null&&Eg(Mt,Ye,qt,se,!0)}}t:{if(lt=at?xs(at):window,dt=lt.nodeName&&lt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&lt.type==="file")var Oe=Hp;else if(Fp(lt))if(Gp)Oe=Jx;else{Oe=Kx;var $t=Zx}else dt=lt.nodeName,!dt||dt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?at&&Ni(at.elementType)&&(Oe=Hp):Oe=Qx;if(Oe&&(Oe=Oe(e,at))){Bp(Mt,Oe,a,vt);break t}$t&&$t(e,lt,at),e==="focusout"&&at&&lt.type==="number"&&at.memoizedProps.value!=null&&zn(lt,"number",lt.value)}switch($t=at?xs(at):window,e){case"focusin":(Fp($t)||$t.contentEditable==="true")&&($s=$t,Ru=at,uo=null);break;case"focusout":uo=Ru=$s=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Zp(Mt,a,vt);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":Zp(Mt,a,vt)}var _e;if(Eu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Js?zp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Np&&a.locale!=="ko"&&(Js||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Js&&(_e=Cp()):(Fa=vt,vu="value"in Fa?Fa.value:Fa.textContent,Js=!0)),$t=rc(at,Ae),0<$t.length&&(Ae=new Up(Ae,e,null,a,vt),Mt.push({event:Ae,listeners:$t}),_e?Ae.data=_e:(_e=Ip(a),_e!==null&&(Ae.data=_e)))),(_e=Xx?Wx(e,a):qx(e,a))&&(Ae=rc(at,"onBeforeInput"),0<Ae.length&&($t=new Up("onBeforeInput","beforeinput",null,a,vt),Mt.push({event:$t,listeners:Ae}),$t.data=_e)),IS(Mt,e,at,a,vt)}yg(Mt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=no(e,a),u!=null&&o.unshift(zo(e,u,h)),u=no(e,n),u!=null&&o.push(zo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function GS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eg(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var R=a,B=R.alternate,at=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||at===null||(B=at,u?(at=no(a,h),at!=null&&S.unshift(zo(a,at,B))):u||(at=no(a,h),at!=null&&S.push(zo(a,at,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var VS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(VS,`
`).replace(kS,"")}function Tg(e,n){return n=bg(n),bg(e)===n}function qe(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Tn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Tn(e,""+o);break;case"className":ne(e,"class",o);break;case"tabIndex":ne(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,a,o);break;case"style":Zs(e,o,h);break;case"data":if(n!=="object"){ne(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",u.name,u,null),qe(e,n,"formEncType",u.formEncType,u,null),qe(e,n,"formMethod",u.formMethod,u,null),qe(e,n,"formTarget",u.formTarget,u,null)):(qe(e,n,"encType",u.encType,u,null),qe(e,n,"method",u.method,u,null),qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ia);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Qt(e,"popover",o);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Qt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_x.get(a)||a,Qt(e,a,o))}}function th(e,n,a,o,u,h){switch(a){case"style":Zs(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Tn(e,o):(typeof o=="number"||typeof o=="bigint")&&Tn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[bn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Qt(e,a,o)}}}function kn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,h,S,a,null)}}u&&qe(e,n,"srcSet",a.srcSet,a,null),o&&qe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=h=S=u=null,B=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":S=vt;break;case"checked":B=vt;break;case"defaultChecked":at=vt;break;case"value":h=vt;break;case"defaultValue":R=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:qe(e,n,o,vt,a,null)}}na(e,h,R,B,at,S,u,!1);return;case"select":Ee("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:qe(e,n,u,R,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Si(e,!!o,n,!1):a!=null&&Si(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qe(e,n,S,R,a,null)}In(e,o,u,h);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qe(e,n,B,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)Ee(Po[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,at,o,a,null)}return;default:if(Ni(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&th(e,n,vt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qe(e,n,R,o,a,null))}function XS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,B=null,at=null,vt=null;for(dt in a){var Mt=a[dt];if(a.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":B=Mt;default:o.hasOwnProperty(dt)||qe(e,n,dt,null,o,Mt)}}for(var lt in o){var dt=o[lt];if(Mt=a[lt],o.hasOwnProperty(lt)&&(dt!=null||Mt!=null))switch(lt){case"type":h=dt;break;case"name":u=dt;break;case"checked":at=dt;break;case"defaultChecked":vt=dt;break;case"value":S=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==Mt&&qe(e,n,lt,dt,o,Mt)}}Pn(e,S,R,B,at,vt,h,u);return;case"select":dt=S=R=lt=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":dt=B;default:o.hasOwnProperty(h)||qe(e,n,h,null,o,B)}for(u in o)if(h=o[u],B=a[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":lt=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==B&&qe(e,n,u,h,o,B)}n=R,a=S,o=dt,lt!=null?Si(e,!!a,lt,!1):!!o!=!!a&&(n!=null?Si(e,!!a,n,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":dt=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qe(e,n,R,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":lt=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&qe(e,n,S,u,o,h)}Ge(e,lt,dt);return;case"option":for(var qt in a)if(lt=a[qt],a.hasOwnProperty(qt)&&lt!=null&&!o.hasOwnProperty(qt))switch(qt){case"selected":e.selected=!1;break;default:qe(e,n,qt,null,o,lt)}for(B in o)if(lt=o[B],dt=a[B],o.hasOwnProperty(B)&&lt!==dt&&(lt!=null||dt!=null))switch(B){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:qe(e,n,B,lt,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)lt=a[se],a.hasOwnProperty(se)&&lt!=null&&!o.hasOwnProperty(se)&&qe(e,n,se,null,o,lt);for(at in o)if(lt=o[at],dt=a[at],o.hasOwnProperty(at)&&lt!==dt&&(lt!=null||dt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:qe(e,n,at,lt,o,dt)}return;default:if(Ni(n)){for(var Ye in a)lt=a[Ye],a.hasOwnProperty(Ye)&&lt!==void 0&&!o.hasOwnProperty(Ye)&&th(e,n,Ye,void 0,o,lt);for(vt in o)lt=o[vt],dt=a[vt],!o.hasOwnProperty(vt)||lt===dt||lt===void 0&&dt===void 0||th(e,n,vt,lt,o,dt);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&qe(e,n,Q,null,o,lt);for(Mt in o)lt=o[Mt],dt=a[Mt],!o.hasOwnProperty(Mt)||lt===dt||lt==null&&dt==null||qe(e,n,Mt,lt,o,dt)}function Ag(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,R=u.duration;if(h&&R&&Ag(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],at=B.startTime;if(at>R)break;var vt=B.transferSize,Mt=B.initiatorType;vt&&Ag(Mt)&&(B=B.responseEnd,S+=vt*(B<R?1:(R-at)/(B-at)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eh=null,nh=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ih(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function qS(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(e){return Dg.resolve(null).then(e).catch(ZS)}:wg;function ZS(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function Ug(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var h=a.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[vs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);Ar(n)}function Lg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function KS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[vs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function QS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function Ng(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function JS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var lh=null;function Og(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Pg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function zg(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var Ci=new Map,Ig=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=G.d;G.d={f:$S,r:ty,D:ey,C:ny,L:iy,m:ay,X:ry,S:sy,M:oy};function $S(){var e=xa.f(),n=$l();return e||n}function ty(e){var n=za(e);n!==null&&n.tag===5&&n.type==="form"?t0(n):xa.r(e)}var Er=typeof document>"u"?null:document;function Fg(e,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),kn(n,"link",e),C(n),o.head.appendChild(n)))}}function ey(e){xa.D(e),Fg("dns-prefetch",e,null)}function ny(e,n){xa.C(e,n),Fg("preconnect",e,n)}function iy(e,n,a){xa.L(e,n,a);var o=Er;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var h=u;switch(n){case"style":h=br(e);break;case"script":h=Tr(e)}Ci.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(h))||n==="script"&&o.querySelector(Bo(h))||(n=o.createElement("link"),kn(n,"link",e),C(n),o.head.appendChild(n)))}}function ay(e,n){xa.m(e,n);var a=Er;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Tr(e)}if(!Ci.has(h)&&(e=_({rel:"modulepreload",href:e},n),Ci.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(h)))return}o=a.createElement("link"),kn(o,"link",e),C(o),a.head.appendChild(o)}}}function sy(e,n,a){xa.S(e,n,a);var o=Er;if(o&&e){var u=Ia(o).hoistableStyles,h=br(e);n=n||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Fo(h)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(h))&&ch(e,a);var B=S=o.createElement("link");C(B),kn(B,"link",e),B._p=new Promise(function(at,vt){B.onload=at,B.onerror=vt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function ry(e,n){xa.X(e,n);var a=Er;if(a&&e){var o=Ia(a).hoistableScripts,u=Tr(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=_({src:e,async:!0},n),(n=Ci.get(u))&&uh(e,n),h=a.createElement("script"),C(h),kn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function oy(e,n){xa.M(e,n);var a=Er;if(a&&e){var o=Ia(a).hoistableScripts,u=Tr(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=Ci.get(u))&&uh(e,n),h=a.createElement("script"),C(h),kn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Bg(e,n,a,o){var u=(u=tt.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=Ia(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var h=Ia(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Fo(e)))&&!h._p&&(S.instance=h,S.state.loading=5),Ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,a),h||ly(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(a),a=Ia(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+he(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function Hg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ly(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",a),C(n),e.head.appendChild(n))}function Tr(e){return'[src="'+he(e)+'"]'}function Bo(e){return"script[async]"+e}function Gg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),kn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=br(a.href);var h=e.querySelector(Fo(u));if(h)return n.state.loading|=4,n.instance=h,C(h),h;o=Hg(a),(u=Ci.get(u))&&ch(o,u),h=(e.ownerDocument||e).createElement("link"),C(h);var S=h;return S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),kn(h,"link",o),n.state.loading|=4,cc(h,a.precedence,e),n.instance=h;case"script":return h=Tr(a.src),(u=e.querySelector(Bo(h)))?(n.instance=u,C(u),u):(o=a,(u=Ci.get(h))&&(o=_({},a),uh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),kn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Vg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[vs]||h[Je]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function kg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),h=n.querySelector(Fo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,C(h);return}h=n.ownerDocument||n,o=Hg(o),(u=Ci.get(u))&&ch(o,u),h=h.createElement("link"),C(h);var S=h;S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),kn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var fh=0;function fy(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&fh===0&&(fh=62500*WS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>fh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(hy,e),hc=null,fc.call(e))}function hy(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:L,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function dy(e,n,a,o,u,h,S,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Wg(e,n,a,o,u,h,S,R,B,at,vt,Mt){return e=new dy(e,n,a,S,B,at,vt,Mt,R),n=1,h===!0&&(n|=24),h=fi(3,null,null,n),e.current=h,h.stateNode=e,n=ku(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Yu(h),e}function qg(e){return e?(e=nr,e):nr}function Yg(e,n,a,o,u,h){u=qg(u),o.context===null?o.context=u:o.pendingContext=u,o=Xa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Wa(e,o,n),a!==null&&(ri(a,e,n),vo(a,e,n))}function jg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function hh(e,n){jg(e,n),(e=e.alternate)&&jg(e,n)}function Zg(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&ri(n,e,67108864),hh(e,67108864)}}function Kg(e){if(e.tag===13||e.tag===31){var n=gi();n=dn(n);var a=Es(e,n);a!==null&&ri(a,e,n),hh(e,n)}}var pc=!0;function py(e,n,a,o){var u=F.T;F.T=null;var h=G.p;try{G.p=2,dh(e,n,a,o)}finally{G.p=h,F.T=u}}function my(e,n,a,o){var u=F.T;F.T=null;var h=G.p;try{G.p=8,dh(e,n,a,o)}finally{G.p=h,F.T=u}}function dh(e,n,a,o){if(pc){var u=ph(o);if(u===null)$f(e,n,o,mc,a),Jg(e,o);else if(_y(u,e,n,a,o))o.stopPropagation();else if(Jg(e,o),n&4&&-1<gy.indexOf(e)){for(;u!==null;){var h=za(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=ct(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var B=1<<31-zt(S);R.entanglements[1]|=B,S&=~B}Wi(h),(Fe&6)===0&&(Ql=b()+500,Oo(0))}}break;case 31:case 13:R=Es(h,2),R!==null&&ri(R,h,2),$l(),hh(h,2)}if(h=ph(o),h===null&&$f(e,n,o,mc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else $f(e,n,o,null,a)}}function ph(e){return e=mu(e),mh(e)}var mc=null;function mh(e){if(mc=null,e=Pa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function Qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case xt:return 2;case Et:return 8;case pt:case Zt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var gh=!1,ns=null,is=null,as=null,Go=new Map,Vo=new Map,ss=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jg(e,n){switch(e){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=za(n),n!==null&&Zg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function _y(e,n,a,o,u){switch(n){case"focusin":return ns=ko(ns,e,n,a,o,u),!0;case"dragenter":return is=ko(is,e,n,a,o,u),!0;case"mouseover":return as=ko(as,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Go.set(h,ko(Go.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Vo.set(h,ko(Vo.get(h)||null,e,n,a,o,u)),!0}return!1}function $g(e){var n=Pa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ke(e.priority,function(){Kg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ke(e.priority,function(){Kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=za(a),n!==null&&Zg(n),e.blockedOn=a,!1;n.shift()}return!0}function t_(e,n,a){gc(e)&&a.delete(n)}function vy(){gh=!1,ns!==null&&gc(ns)&&(ns=null),is!==null&&gc(is)&&(is=null),as!==null&&gc(as)&&(as=null),Go.forEach(t_),Vo.forEach(t_)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vy)))}var vc=null;function e_(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var h=za(a);h!==null&&(e.splice(n,3),n-=3,pf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ar(e){function n(B){return _c(B,e)}ns!==null&&_c(ns,e),is!==null&&_c(is,e),as!==null&&_c(as,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<ss.length;a++){var o=ss[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)$g(a),a.blockedOn===null&&ss.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[bn]||null;if(typeof h=="function")S||e_(a);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[bn]||null)R=S.formAction;else if(mh(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),e_(a)}}}function n_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _h(e){this._internalRoot=e}xc.prototype.render=_h.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=gi();Yg(a,o,e,n,null,null)},xc.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yg(e.current,2,null,e,null,null),$l(),n[ti]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=vn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,e),a===0&&$g(e)}};var i_=t.version;if(i_!=="19.2.3")throw Error(s(527,i_,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var xy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Rt=Sc.inject(xy),Ct=Sc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=u0,h=f0,S=h0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Wg(e,1,!1,null,null,a,o,null,u,h,S,n_),e[ti]=n.current,Jf(e),new _h(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=u0,S=f0,R=h0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Wg(e,1,!0,n,a??null,o,u,B,h,S,R,n_),n.context=qg(null),a=n.current,o=gi(),o=dn(o),u=Xa(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,Kt(n,a),Wi(n),e[ti]=n.current,Jf(e),new xc(n)},Wo.version="19.2.3",Wo}var d_;function wy(){if(d_)return Sh.exports;d_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=Cy(),Sh.exports}var Dy=wy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="182",kr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uy=0,p_=1,Ly=2,qc=1,Ny=2,el=3,_s=0,ci=1,Ta=2,Ra=0,Xr=1,m_=2,g_=3,__=4,Oy=5,Vs=100,Py=101,zy=102,Iy=103,Fy=104,By=200,Hy=201,Gy=202,Vy=203,od=204,ld=205,ky=206,Xy=207,Wy=208,qy=209,Yy=210,jy=211,Zy=212,Ky=213,Qy=214,cd=0,ud=1,fd=2,qr=3,hd=4,dd=5,pd=6,md=7,Uv=0,Jy=1,$y=2,Ki=0,Lv=1,Nv=2,Ov=3,Pv=4,zv=5,Iv=6,Fv=7,Bv=300,qs=301,Yr=302,gd=303,_d=304,ru=306,vd=1e3,Aa=1001,xd=1002,Wn=1003,tM=1004,yc=1005,Zn=1006,bh=1007,Xs=1008,xi=1009,Hv=1010,Gv=1011,il=1012,lp=1013,$i=1014,ji=1015,wa=1016,cp=1017,up=1018,al=1020,Vv=35902,kv=35899,Xv=1021,Wv=1022,Gi=1023,Da=1026,Ws=1027,qv=1028,fp=1029,jr=1030,hp=1031,dp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,Sd=35840,yd=35841,Md=35842,Ed=35843,bd=36196,Td=37492,Ad=37496,Rd=37488,Cd=37489,wd=37490,Dd=37491,Ud=37808,Ld=37809,Nd=37810,Od=37811,Pd=37812,zd=37813,Id=37814,Fd=37815,Bd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,qd=36494,Yd=36495,jd=36283,Zd=36284,Kd=36285,Qd=36286,eM=3200,Yv=0,nM=1,ps="",Di="srgb",Zr="srgb-linear",tu="linear",Xe="srgb",Rr=7680,v_=519,iM=512,aM=513,sM=514,pp=515,rM=516,oM=517,mp=518,lM=519,x_=35044,S_="300 es",Zi=2e3,eu=2001;function jv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cM(){const r=nu("canvas");return r.style.display="block",r}const y_={};function M_(...r){const t="THREE."+r.shift();console.log(t,...r)}function le(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ue(...r){const t="THREE."+r.shift();console.error(t,...r)}function sl(...r){const t=r.join(" ");t in y_||(y_[t]=!0,le(...r))}function uM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ys{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Jd=180/Math.PI;function ol(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]).toLowerCase()}function be(r,t,i){return Math.max(t,Math.min(i,r))}function fM(r,t){return(r%t+t)%t}function Th(r,t,i){return(1-i)*r+i*t}function qo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hM={DEG2RAD:Qc};class pe{constructor(t=0,i=0){pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ua{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==x||p!==y||g!==E){let M=m*x+p*y+g*E+_*T;M<0&&(x=-x,y=-y,E=-E,T=-T,M=-M);let v=1-d;if(M<.9995){const U=Math.acos(M),L=Math.sin(U);v=Math.sin(v*U)/L,d=Math.sin(d*U)/L,m=m*v+x*d,p=p*v+y*d,g=g*v+E*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+y*d,g=g*v+E*d,_=_*v+T*d;const U=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=U,p*=U,g*=U,_*=U}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*y-p*x,t[i+1]=m*E+g*x+p*_-d*y,t[i+2]=p*E+g*y+d*x-m*_,t[i+3]=g*E-d*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"YZX":this._x=x*g*_+p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_-x*y*E;break;case"XZY":this._x=x*g*_-p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_+x*y*E;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(E_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(E_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new j,E_=new Ua;class ve{constructor(t,i,s,l,c,f,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],E=s[8],T=l[0],M=l[3],v=l[6],U=l[1],L=l[4],w=l[7],O=l[2],I=l[5],N=l[8];return c[0]=f*T+d*U+m*O,c[3]=f*M+d*L+m*I,c[6]=f*v+d*w+m*N,c[1]=p*T+g*U+_*O,c[4]=p*M+g*L+_*I,c[7]=p*v+g*w+_*N,c[2]=x*T+y*U+E*O,c[5]=x*M+y*L+E*I,c[8]=x*v+y*w+E*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,x=d*m-g*c,y=p*c-f*m,E=i*_+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new ve,b_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ps?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:b_,fromXYZ:T_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:s,transfer:Xe,toXYZ:b_,fromXYZ:T_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const Le=dM();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class pM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=nu("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ca(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mM=0;class gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Ch(l[f].image)):c.push(Ch(l[f]))}else c=Ch(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let gM=0;const wh=new j;class Jn extends Ys{constructor(t=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Aa,l=Aa,c=Zn,f=Xs,d=Gi,m=xi,p=Jn.DEFAULT_ANISOTROPY,g=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=ol(),this.name="",this.source=new gp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vd:t.x=t.x-Math.floor(t.x);break;case Aa:t.x=t.x<0?0:1;break;case xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vd:t.y=t.y-Math.floor(t.y);break;case Aa:t.y=t.y<0?0:1;break;case xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Bv;Jn.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,i=0,s=0,l=1){hn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],E=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(y+1)/2,O=(v+1)/2,I=(g+x)/4,N=(_+T)/4,V=(E+M)/4;return L>w&&L>O?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=N/s):w>O?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=I/l,c=V/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=N/c,l=V/c),this.set(s,l,c,i),this}let U=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(M-E)/U,this.y=(_-T)/U,this.z=(x-g)/U,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends Ys{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new hn(0,0,t,i),this.scissorTest=!1,this.viewport=new hn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Jn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends _M{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Zv extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Ec.subVectors(this.max,Yo),wr.subVectors(t.a,Yo),Dr.subVectors(t.b,Yo),Ur.subVectors(t.c,Yo),os.subVectors(Dr,wr),ls.subVectors(Ur,Dr),zs.subVectors(wr,Ur);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-zs.z,zs.y,os.z,0,-os.x,ls.z,0,-ls.x,zs.z,0,-zs.x,-os.y,os.x,0,-ls.y,ls.x,0,-zs.y,zs.x,0];return!Dh(i,wr,Dr,Ur,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,wr,Dr,Ur,Ec))?!1:(bc.crossVectors(os,ls),i=[bc.x,bc.y,bc.z],Dh(i,wr,Dr,Ur,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new j,new j,new j,new j,new j,new j,new j,new j],Ii=new j,Mc=new ll,wr=new j,Dr=new j,Ur=new j,os=new j,ls=new j,zs=new j,Yo=new j,Ec=new j,bc=new j,Is=new j;function Dh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Is.fromArray(r,c);const d=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=t.dot(Is),p=i.dot(Is),g=s.dot(Is);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const xM=new ll,jo=new j,Uh=new j;class ou{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):xM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Uh)),this.expandByPoint(jo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ya=new j,Lh=new j,Tc=new j,cs=new j,Nh=new j,Ac=new j,Oh=new j;class lu{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Lh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),cs.copy(this.origin).sub(Lh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Tc),d=cs.dot(this.direction),m=-cs.dot(Tc),p=cs.lengthSq(),g=Math.abs(1-f*f);let _,x,y,E;if(g>0)if(_=f*m-d,x=f*d-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,y=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Lh).addScaledVector(Tc,x),y}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){Nh.subVectors(i,t),Ac.subVectors(s,t),Oh.crossVectors(Nh,Ac);let f=this.direction.dot(Oh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cs.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(cs,Ac));if(m<0)return null;const p=d*this.direction.dot(Nh.cross(cs));if(p<0||m+p>f)return null;const g=-d*cs.dot(Oh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,i,s,l,c,f,d,m,p,g,_,x,y,E,T,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,x,y,E,T,M)}set(t,i,s,l,c,f,d,m,p,g,_,x,y,E,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Lr.setFromMatrixColumn(t,0).length(),c=1/Lr.setFromMatrixColumn(t,1).length(),f=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,E=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,E=p*g,T=p*_;i[0]=x+T*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=y*d-E,i[6]=T+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,E=p*g,T=p*_;i[0]=x-T*d,i[4]=-f*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*g,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*_,E=d*g,T=d*_;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-x*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+E,i[10]=x-T*_}else if(t.order==="XZY"){const x=f*m,y=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,yM)}lookAt(t,i,s){const l=this.elements;return _i.subVectors(t,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),us.crossVectors(s,_i),us.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),us.crossVectors(s,_i)),us.normalize(),Rc.crossVectors(_i,us),l[0]=us.x,l[4]=Rc.x,l[8]=_i.x,l[1]=us.y,l[5]=Rc.y,l[9]=_i.y,l[2]=us.z,l[6]=Rc.z,l[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],E=s[2],T=s[6],M=s[10],v=s[14],U=s[3],L=s[7],w=s[11],O=s[15],I=l[0],N=l[4],V=l[8],A=l[12],D=l[1],k=l[5],Y=l[9],J=l[13],ut=l[2],ft=l[6],F=l[10],G=l[14],st=l[3],Tt=l[7],bt=l[11],z=l[15];return c[0]=f*I+d*D+m*ut+p*st,c[4]=f*N+d*k+m*ft+p*Tt,c[8]=f*V+d*Y+m*F+p*bt,c[12]=f*A+d*J+m*G+p*z,c[1]=g*I+_*D+x*ut+y*st,c[5]=g*N+_*k+x*ft+y*Tt,c[9]=g*V+_*Y+x*F+y*bt,c[13]=g*A+_*J+x*G+y*z,c[2]=E*I+T*D+M*ut+v*st,c[6]=E*N+T*k+M*ft+v*Tt,c[10]=E*V+T*Y+M*F+v*bt,c[14]=E*A+T*J+M*G+v*z,c[3]=U*I+L*D+w*ut+O*st,c[7]=U*N+L*k+w*ft+O*Tt,c[11]=U*V+L*Y+w*F+O*bt,c[15]=U*A+L*J+w*G+O*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],E=t[3],T=t[7],M=t[11],v=t[15],U=m*y-p*x,L=d*y-p*_,w=d*x-m*_,O=f*y-p*g,I=f*x-m*g,N=f*_-d*g;return i*(T*U-M*L+v*w)-s*(E*U-M*O+v*I)+l*(E*L-T*O+v*N)-c*(E*w-T*I+M*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],E=t[12],T=t[13],M=t[14],v=t[15],U=_*M*p-T*x*p+T*m*y-d*M*y-_*m*v+d*x*v,L=E*x*p-g*M*p-E*m*y+f*M*y+g*m*v-f*x*v,w=g*T*p-E*_*p+E*d*y-f*T*y-g*d*v+f*_*v,O=E*_*m-g*T*m-E*d*x+f*T*x+g*d*M-f*_*M,I=i*U+s*L+l*w+c*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return t[0]=U*N,t[1]=(T*x*c-_*M*c-T*l*y+s*M*y+_*l*v-s*x*v)*N,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*v+s*m*v)*N,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*y-s*m*y)*N,t[4]=L*N,t[5]=(g*M*c-E*x*c+E*l*y-i*M*y-g*l*v+i*x*v)*N,t[6]=(E*m*c-f*M*c-E*l*p+i*M*p+f*l*v-i*m*v)*N,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*y+i*m*y)*N,t[8]=w*N,t[9]=(E*_*c-g*T*c-E*s*y+i*T*y+g*s*v-i*_*v)*N,t[10]=(f*T*c-E*d*c+E*s*p-i*T*p-f*s*v+i*d*v)*N,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*y-i*d*y)*N,t[12]=O*N,t[13]=(g*T*l-E*_*l+E*s*x-i*T*x-g*s*M+i*_*M)*N,t[14]=(E*d*l-f*T*l-E*s*m+i*T*m+f*s*M-i*d*M)*N,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*x+i*d*x)*N,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,x=c*p,y=c*g,E=c*_,T=f*g,M=f*_,v=d*_,U=m*p,L=m*g,w=m*_,O=s.x,I=s.y,N=s.z;return l[0]=(1-(T+v))*O,l[1]=(y+w)*O,l[2]=(E-L)*O,l[3]=0,l[4]=(y-w)*I,l[5]=(1-(x+v))*I,l[6]=(M+U)*I,l[7]=0,l[8]=(E+L)*N,l[9]=(M-U)*N,l[10]=(1-(x+T))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Lr.set(l[0],l[1],l[2]).length();const f=Lr.set(l[4],l[5],l[6]).length(),d=Lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Fi.copy(this);const p=1/c,g=1/f,_=1/d;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=Zi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(d===Zi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===eu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Zi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(d===Zi)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===eu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Lr=new j,Fi=new on,SM=new j(0,0,0),yM=new j(1,1,1),us=new j,Rc=new j,_i=new j,A_=new on,R_=new Ua;class ta{constructor(t=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return A_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(A_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return R_.setFromEuler(this),this.setFromQuaternion(R_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let MM=0;const C_=new j,Nr=new Ua,Ma=new on,Cc=new j,Zo=new j,EM=new j,bM=new Ua,w_=new j(1,0,0),D_=new j(0,1,0),U_=new j(0,0,1),L_={type:"added"},TM={type:"removed"},Or={type:"childadded",child:null},Ph={type:"childremoved",child:null};class On extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new j,i=new ta,s=new Ua,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ve}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(D_,t)}rotateZ(t){return this.rotateOnAxis(U_,t)}translateOnAxis(t,i){return C_.copy(t).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(D_,t)}translateZ(t){return this.translateOnAxis(U_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Zo,Cc,this.up):Ma.lookAt(Cc,Zo,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L_),Or.child=t,this.dispatchEvent(Or),Or.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L_),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,EM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,bM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new j(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new j,Ea=new j,zh=new j,ba=new j,Pr=new j,zr=new j,N_=new j,Ih=new j,Fh=new j,Bh=new j,Hh=new hn,Gh=new hn,Vh=new hn;class Hi{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),Ea.subVectors(s,i),zh.subVectors(t,i);const f=Bi.dot(Bi),d=Bi.dot(Ea),m=Bi.dot(zh),p=Ea.dot(Ea),g=Ea.dot(zh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,E=(f*g-d*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(f,ba.y),m.addScaledVector(d,ba.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),Ea.subVectors(t,i),Bi.cross(Ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Bi.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Hi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Pr.subVectors(l,s),zr.subVectors(c,s),Ih.subVectors(t,s);const m=Pr.dot(Ih),p=zr.dot(Ih);if(m<=0&&p<=0)return i.copy(s);Fh.subVectors(t,l);const g=Pr.dot(Fh),_=zr.dot(Fh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Pr,f);Bh.subVectors(t,c);const y=Pr.dot(Bh),E=zr.dot(Bh);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(zr,d);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return N_.subVectors(c,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(N_,d);const v=1/(M+T+x);return f=T*v,d=x*v,i.copy(s).addScaledVector(Pr,f).addScaledVector(zr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},wc={h:0,s:0,l:0};function kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class we{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=fM(t,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Di){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Di){const s=Kv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return Le.workingToColorSpace(jn.copy(this),t),Math.round(be(jn.r*255,0,255))*65536+Math.round(be(jn.g*255,0,255))*256+Math.round(be(jn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(jn.copy(this),i);const s=jn.r,l=jn.g,c=jn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(jn.copy(this),i),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=Di){Le.workingToColorSpace(jn.copy(this),t);const i=jn.r,s=jn.g,l=jn.b;return t!==Di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+i,fs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(fs),t.getHSL(wc);const s=Th(fs.h,wc.h,i),l=Th(fs.s,wc.s,i),c=Th(fs.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new we;we.NAMES=Kv;let AM=0;class Jr extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Xr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==_s&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==od&&(s.blendSrc=this.blendSrc),this.blendDst!==ld&&(s.blendDst=this.blendDst),this.blendEquation!==Vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cu extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const En=new j,Dc=new pe;let RM=0;class Ji{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=x_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=qo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=oi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(t,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array),c=oi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==x_&&(t.usage=this.usage),t}}class Qv extends Ji{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Jv extends Ji{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ln extends Ji{constructor(t,i,s){super(new Float32Array(t),i,s)}}let CM=0;const wi=new on,Xh=new On,Ir=new j,vi=new ll,Ko=new ll,Ln=new j;class $n extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jv(t)?Jv:Qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ln(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(Ln.addVectors(vi.min,Ko.min),vi.expandByPoint(Ln),Ln.addVectors(vi.max,Ko.max),vi.expandByPoint(Ln)):(vi.expandByPoint(Ko.min),vi.expandByPoint(Ko.max))}vi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Ln.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Ln));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Ln.fromBufferAttribute(d,p),m&&(Ir.fromBufferAttribute(t,p),Ln.add(Ir)),l=Math.max(l,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new j,m[V]=new j;const p=new j,g=new j,_=new j,x=new pe,y=new pe,E=new pe,T=new j,M=new j;function v(V,A,D){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,D),x.fromBufferAttribute(c,V),y.fromBufferAttribute(c,A),E.fromBufferAttribute(c,D),g.sub(p),_.sub(p),y.sub(x),E.sub(x);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),d[V].add(T),d[A].add(T),d[D].add(T),m[V].add(M),m[A].add(M),m[D].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let V=0,A=U.length;V<A;++V){const D=U[V],k=D.start,Y=D.count;for(let J=k,ut=k+Y;J<ut;J+=3)v(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new j,w=new j,O=new j,I=new j;function N(V){O.fromBufferAttribute(l,V),I.copy(O);const A=d[V];L.copy(A),L.sub(O.multiplyScalar(O.dot(A))).normalize(),w.crossVectors(I,A);const k=w.dot(m[V])<0?-1:1;f.setXYZW(V,L.x,L.y,L.z,k)}for(let V=0,A=U.length;V<A;++V){const D=U[V],k=D.start,Y=D.count;for(let J=k,ut=k+Y;J<ut;J+=3)N(t.getX(J+0)),N(t.getX(J+1)),N(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new j,c=new j,f=new j,d=new j,m=new j,p=new j,g=new j,_=new j;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Ln.fromBufferAttribute(t,i),Ln.normalize(),t.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let v=0;v<g;v++)x[E++]=p[y++]}return new Ji(x,g,_)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new on,Fs=new lu,Uc=new ou,P_=new j,Lc=new j,Nc=new j,Oc=new j,Wh=new j,Pc=new j,z_=new j,zc=new j;class Li extends On{constructor(t=new $n,i=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Wh.fromBufferAttribute(_,t),f?Pc.addScaledVector(Wh,g):Pc.addScaledVector(Wh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),Fs.copy(t.ray).recast(t.near),!(Uc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Uc,P_)===null||Fs.origin.distanceToSquared(P_)>(t.far-t.near)**2))&&(O_.copy(c).invert(),Fs.copy(t.ray).applyMatrix4(O_),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Fs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],v=f[M.materialIndex],U=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=U,O=L;w<O;w+=3){const I=d.getX(w),N=d.getX(w+1),V=d.getX(w+2);l=Ic(this,v,t,s,p,g,_,I,N,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=E,v=T;M<v;M+=3){const U=d.getX(M),L=d.getX(M+1),w=d.getX(M+2);l=Ic(this,f,t,s,p,g,_,U,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],v=f[M.materialIndex],U=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=U,O=L;w<O;w+=3){const I=w,N=w+1,V=w+2;l=Ic(this,v,t,s,p,g,_,I,N,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,v=T;M<v;M+=3){const U=M,L=M+1,w=M+2;l=Ic(this,f,t,s,p,g,_,U,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function wM(r,t,i,s,l,c,f,d){let m;if(t.side===ci?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===_s,d),m===null)return null;zc.copy(d),zc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:r}}function Ic(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const g=wM(r,t,i,s,Lc,Nc,Oc,z_);if(g){const _=new j;Hi.getBarycoord(z_,Lc,Nc,Oc,_),l&&(g.uv=Hi.getInterpolatedAttribute(l,d,m,p,_,new pe)),c&&(g.uv1=Hi.getInterpolatedAttribute(c,d,m,p,_,new pe)),f&&(g.normal=Hi.getInterpolatedAttribute(f,d,m,p,_,new j),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};Hi.getNormal(Lc,Nc,Oc,x.normal),g.face=x,g.barycoord=_}return g}class cl extends $n{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(_,2));function E(T,M,v,U,L,w,O,I,N,V,A){const D=w/N,k=O/V,Y=w/2,J=O/2,ut=I/2,ft=N+1,F=V+1;let G=0,st=0;const Tt=new j;for(let bt=0;bt<F;bt++){const z=bt*k-J;for(let rt=0;rt<ft;rt++){const yt=rt*D-Y;Tt[T]=yt*U,Tt[M]=z*L,Tt[v]=ut,p.push(Tt.x,Tt.y,Tt.z),Tt[T]=0,Tt[M]=0,Tt[v]=I>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),_.push(rt/N),_.push(1-bt/V),G+=1}}for(let bt=0;bt<V;bt++)for(let z=0;z<N;z++){const rt=x+z+ft*bt,yt=x+z+ft*(bt+1),wt=x+(z+1)+ft*(bt+1),Gt=x+(z+1)+ft*bt;m.push(rt,yt,Gt),m.push(yt,wt,Gt),st+=6}d.addGroup(y,st,A),y+=st,x+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Qn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function DM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function $v(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const UM={clone:Kr,merge:Qn};var LM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=DM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tx extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new j,I_=new pe,F_=new pe;class Ui extends tx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,i){return this.getViewBounds(t,I_,F_),i.subVectors(F_,I_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Fr=-90,Br=1;class OM extends On{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Fr,Br,t,i);l.layers=this.layers,this.add(l);const c=new Ui(Fr,Br,t,i);c.layers=this.layers,this.add(c);const f=new Ui(Fr,Br,t,i);f.layers=this.layers,this.add(f);const d=new Ui(Fr,Br,t,i);d.layers=this.layers,this.add(d);const m=new Ui(Fr,Br,t,i);m.layers=this.layers,this.add(m);const p=new Ui(Fr,Br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ex extends Jn{constructor(t=[],i=qs,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nx extends Qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ex(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ci,blending:Ra});c.uniforms.tEquirect.value=i;const f=new Li(l,c),d=i.minFilter;return i.minFilter===Xs&&(i.minFilter=Zn),new OM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Fc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PM={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class zM extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IM extends Jn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Wn,g=Wn,_,x){super(null,f,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new j,FM=new j,BM=new ve;class ds{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Yh.subVectors(s,i).cross(FM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||BM.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new ou,HM=new pe(.5,.5),Bc=new j;class vp{constructor(t=new ds,i=new ds,s=new ds,l=new ds,c=new ds,f=new ds){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Zi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],E=c[8],T=c[9],M=c[10],v=c[11],U=c[12],L=c[13],w=c[14],O=c[15];if(l[0].setComponents(p-f,y-g,v-E,O-U).normalize(),l[1].setComponents(p+f,y+g,v+E,O+U).normalize(),l[2].setComponents(p+d,y+_,v+T,O+L).normalize(),l[3].setComponents(p-d,y-_,v-T,O-L).normalize(),s)l[4].setComponents(m,x,M,w).normalize(),l[5].setComponents(p-m,y-x,v-M,O-w).normalize();else if(l[4].setComponents(p-m,y-x,v-M,O-w).normalize(),i===Zi)l[5].setComponents(p+m,y+x,v+M,O+w).normalize();else if(i===eu)l[5].setComponents(m,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);const i=HM.distanceTo(t.center);return Bs.radius=.7071067811865476+i,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new j,au=new j,B_=new on,Qo=new lu,Hc=new ou,jh=new j,H_=new j;class ix extends On{constructor(t=new $n,i=new xp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new ln(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;B_.copy(l).invert(),Qo.copy(t.ray).applyMatrix4(B_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=p){const v=g.getX(T),U=g.getX(T+1),L=Gc(this,t,Qo,m,v,U,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(y),v=Gc(this,t,Qo,m,T,M,E-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=p){const v=Gc(this,t,Qo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Gc(this,t,Qo,m,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(iu.fromBufferAttribute(d,l),au.fromBufferAttribute(d,c),i.distanceSqToSegment(iu,au,jh,H_)>s)return;jh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(jh);if(!(p<t.near||p>t.far))return{distance:p,point:H_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const G_=new j,V_=new j;class GM extends ix{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)G_.fromBufferAttribute(i,l),V_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+G_.distanceTo(V_);t.setAttribute("lineDistance",new ln(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rl extends Jn{constructor(t,i,s=$i,l,c,f,d=Wn,m=Wn,p,g=Da,_=1){if(g!==Da&&g!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class VM extends rl{constructor(t,i=$i,s=qs,l,c,f=Wn,d=Wn,m,p=Da){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ax extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sp extends $n{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],y=[];let E=0;const T=[],M=s/2;let v=0;U(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(y,2));function U(){const w=new j,O=new j;let I=0;const N=(i-t)/s;for(let V=0;V<=c;V++){const A=[],D=V/c,k=D*(i-t)+t;for(let Y=0;Y<=l;Y++){const J=Y/l,ut=J*m+d,ft=Math.sin(ut),F=Math.cos(ut);O.x=k*ft,O.y=-D*s+M,O.z=k*F,_.push(O.x,O.y,O.z),w.set(ft,N,F).normalize(),x.push(w.x,w.y,w.z),y.push(J,1-D),A.push(E++)}T.push(A)}for(let V=0;V<l;V++)for(let A=0;A<c;A++){const D=T[A][V],k=T[A+1][V],Y=T[A+1][V+1],J=T[A][V+1];(t>0||A!==0)&&(g.push(D,k,J),I+=3),(i>0||A!==c-1)&&(g.push(k,Y,J),I+=3)}p.addGroup(v,I,0),v+=I}function L(w){const O=E,I=new pe,N=new j;let V=0;const A=w===!0?t:i,D=w===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,M*D,0),x.push(0,D,0),y.push(.5,.5),E++;const k=E;for(let Y=0;Y<=l;Y++){const ut=Y/l*m+d,ft=Math.cos(ut),F=Math.sin(ut);N.x=A*F,N.y=M*D,N.z=A*ft,_.push(N.x,N.y,N.z),x.push(0,D,0),I.x=ft*.5+.5,I.y=F*.5*D+.5,y.push(I.x,I.y),E++}for(let Y=0;Y<l;Y++){const J=O+Y,ut=k+Y;w===!0?g.push(ut,ut+1,J):g.push(ut+1,ut,J),V+=3}p.addGroup(v,V,w===!0?1:2),v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yp extends Sp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new yp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uu extends $n{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,y=[],E=[],T=[],M=[];for(let v=0;v<g;v++){const U=v*x-f;for(let L=0;L<p;L++){const w=L*_-c;E.push(w,-U,0),T.push(0,0,1),M.push(L/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<d;U++){const L=U+p*v,w=U+p*(v+1),O=U+1+p*(v+1),I=U+1+p*v;y.push(L,w,I),y.push(w,O,I)}this.setIndex(y),this.setAttribute("position",new ln(E,3)),this.setAttribute("normal",new ln(T,3)),this.setAttribute("uv",new ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mp extends $n{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const g=[],_=new j,x=new j,y=[],E=[],T=[],M=[];for(let v=0;v<=s;v++){const U=[],L=v/s;let w=0;v===0&&f===0?w=.5/i:v===s&&m===Math.PI&&(w=-.5/i);for(let O=0;O<=i;O++){const I=O/i;_.x=-t*Math.cos(l+I*c)*Math.sin(f+L*d),_.y=t*Math.cos(f+L*d),_.z=t*Math.sin(l+I*c)*Math.sin(f+L*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),M.push(I+w,1-L),U.push(p++)}g.push(U)}for(let v=0;v<s;v++)for(let U=0;U<i;U++){const L=g[v][U+1],w=g[v][U],O=g[v+1][U],I=g[v+1][U+1];(v!==0||f>0)&&y.push(L,w,I),(v!==s-1||m<Math.PI)&&y.push(w,O,I)}this.setIndex(y),this.setAttribute("position",new ln(E,3)),this.setAttribute("normal",new ln(T,3)),this.setAttribute("uv",new ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class su extends $n{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],m=[],p=[],g=new j,_=new j,x=new j;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const T=E/l*c,M=y/s*Math.PI*2;_.x=(t+i*Math.cos(M))*Math.cos(T),_.y=(t+i*Math.cos(M))*Math.sin(T),_.z=i*Math.sin(M),d.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const T=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,v=(l+1)*(y-1)+E,U=(l+1)*y+E;f.push(T,M,U),f.push(M,v,U)}this.setIndex(f),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(m,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kM extends ea{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XM extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WM extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qM extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sx extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Zh=new on,k_=new j,X_=new j;class YM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;k_.setFromMatrixPosition(t.matrixWorld),i.position.copy(k_),X_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ep extends tx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jM extends YM{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W_ extends sx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new jM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ZM extends sx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class KM extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const q_=new on;class QM{constructor(t,i,s=0,l=1/0){this.ray=new lu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new _p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ue("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return q_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(q_),this}intersectObject(t,i=!0,s=[]){return $d(t,this,s,i),s.sort(Y_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)$d(t[l],this,s,i);return s.sort(Y_),s}}function Y_(r,t){return r.distance-t.distance}function $d(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)$d(c[f],t,i,!0)}}class j_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JM extends GM{constructor(t=10,i=10,s=4473924,l=8947848){s=new we(s),l=new we(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let x=0,y=0,E=-d;x<=i;x++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const T=x===c?s:l;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const g=new $n;g.setAttribute("position",new ln(m,3)),g.setAttribute("color",new ln(p,3));const _=new xp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Z_=new j;let Vc,Kh;class Qh extends On{constructor(t=new j(0,0,1),i=new j(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",Vc===void 0&&(Vc=new $n,Vc.setAttribute("position",new ln([0,0,0,0,1,0],3)),Kh=new yp(.5,1,5,1),Kh.translate(0,-.5,0)),this.position.copy(i),this.line=new ix(Vc,new xp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Li(Kh,new cu({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Z_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Z_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $M extends Ys{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function K_(r,t,i,s){const l=tE(s);switch(i){case Xv:return r*t;case qv:return r*t/l.components*l.byteLength;case fp:return r*t/l.components*l.byteLength;case jr:return r*t*2/l.components*l.byteLength;case hp:return r*t*2/l.components*l.byteLength;case Wv:return r*t*3/l.components*l.byteLength;case Gi:return r*t*4/l.components*l.byteLength;case dp:return r*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:case Ed:return Math.max(r,16)*Math.max(t,8)/4;case Sd:case Md:return Math.max(r,8)*Math.max(t,8)/2;case bd:case Td:case Rd:case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ad:case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tE(r){switch(r){case xi:case Hv:return{byteLength:1,components:1};case il:case Gv:case wa:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case $i:case lp:case ji:return{byteLength:4,components:1};case Vv:case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function eE(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var nE=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yb=`#ifndef FLAT_SHADED
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
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,S1=`#define MATCAP
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
}`,y1=`#define NORMAL
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
}`,Se={alphahash_fragment:nE,alphahash_pars_fragment:iE,alphamap_fragment:aE,alphamap_pars_fragment:sE,alphatest_fragment:rE,alphatest_pars_fragment:oE,aomap_fragment:lE,aomap_pars_fragment:cE,batching_pars_vertex:uE,batching_vertex:fE,begin_vertex:hE,beginnormal_vertex:dE,bsdfs:pE,iridescence_fragment:mE,bumpmap_pars_fragment:gE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:xE,clipping_planes_vertex:SE,color_fragment:yE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:bE,common:TE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:RE,displacementmap_pars_vertex:CE,displacementmap_vertex:wE,emissivemap_fragment:DE,emissivemap_pars_fragment:UE,colorspace_fragment:LE,colorspace_pars_fragment:NE,envmap_fragment:OE,envmap_common_pars_fragment:PE,envmap_pars_fragment:zE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:jE,envmap_vertex:FE,fog_vertex:BE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:VE,gradientmap_pars_fragment:kE,lightmap_pars_fragment:XE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:qE,lights_pars_begin:YE,lights_toon_fragment:ZE,lights_toon_pars_fragment:KE,lights_phong_fragment:QE,lights_phong_pars_fragment:JE,lights_physical_fragment:$E,lights_physical_pars_fragment:tb,lights_fragment_begin:eb,lights_fragment_maps:nb,lights_fragment_end:ib,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:sb,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:ob,map_fragment:lb,map_pars_fragment:cb,map_particle_fragment:ub,map_particle_pars_fragment:fb,metalnessmap_fragment:hb,metalnessmap_pars_fragment:db,morphinstance_vertex:pb,morphcolor_vertex:mb,morphnormal_vertex:gb,morphtarget_pars_vertex:_b,morphtarget_vertex:vb,normal_fragment_begin:xb,normal_fragment_maps:Sb,normal_pars_fragment:yb,normal_pars_vertex:Mb,normal_vertex:Eb,normalmap_pars_fragment:bb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Cb,opaque_fragment:wb,packing:Db,premultiplied_alpha_fragment:Ub,project_vertex:Lb,dithering_fragment:Nb,dithering_pars_fragment:Ob,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Fb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Vb,skinning_vertex:kb,skinnormal_vertex:Xb,specularmap_fragment:Wb,specularmap_pars_fragment:qb,tonemapping_fragment:Yb,tonemapping_pars_fragment:jb,transmission_fragment:Zb,transmission_pars_fragment:Kb,uv_pars_fragment:Qb,uv_pars_vertex:Jb,uv_vertex:$b,worldpos_vertex:t1,background_vert:e1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:a1,cube_vert:s1,cube_frag:r1,depth_vert:o1,depth_frag:l1,distance_vert:c1,distance_frag:u1,equirect_vert:f1,equirect_frag:h1,linedashed_vert:d1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:_1,meshlambert_frag:v1,meshmatcap_vert:x1,meshmatcap_frag:S1,meshnormal_vert:y1,meshnormal_frag:M1,meshphong_vert:E1,meshphong_frag:b1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:R1,meshtoon_frag:C1,points_vert:w1,points_frag:D1,shadow_vert:U1,shadow_frag:L1,sprite_vert:N1,sprite_frag:O1},Bt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Yi={basic:{uniforms:Qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Qn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Qn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Qn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Qn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Qn([Bt.points,Bt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Qn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Qn([Bt.common,Bt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Qn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Qn([Bt.sprite,Bt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Qn([Bt.common,Bt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Qn([Bt.lights,Bt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Yi.physical={uniforms:Qn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const kc={r:0,b:0,g:0},Hs=new ta,P1=new on;function z1(r,t,i,s,l,c,f){const d=new we(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const O=E(L);O===null?v(d,m):O&&O.isColor&&(v(O,1),w=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,w){const O=E(w);O&&(O.isCubeTexture||O.mapping===ru)?(g===void 0&&(g=new Li(new cl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Kr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Hs.copy(w.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Hs)),g.material.toneMapped=Le.getTransfer(O.colorSpace)!==Xe,(_!==O||x!==O.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=O,x=O.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Li(new uu(2,2),new ea({name:"BackgroundMaterial",uniforms:Kr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Le.getTransfer(O.colorSpace)!==Xe,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=O,x=O.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,w){L.getRGB(kc,$v(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,w,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:T,addToRenderList:M,dispose:U}}function I1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(D,k,Y,J,ut){let ft=!1;const F=_(J,Y,k);c!==F&&(c=F,p(c.object)),ft=y(D,J,Y,ut),ft&&E(D,J,Y,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,w(D,k,Y,J),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,k,Y){const J=Y.wireframe===!0;let ut=s[D.id];ut===void 0&&(ut={},s[D.id]=ut);let ft=ut[k.id];ft===void 0&&(ft={},ut[k.id]=ft);let F=ft[J];return F===void 0&&(F=x(m()),ft[J]=F),F}function x(D){const k=[],Y=[],J=[];for(let ut=0;ut<i;ut++)k[ut]=0,Y[ut]=0,J[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:J,object:D,attributes:{},index:null}}function y(D,k,Y,J){const ut=c.attributes,ft=k.attributes;let F=0;const G=Y.getAttributes();for(const st in G)if(G[st].location>=0){const bt=ut[st];let z=ft[st];if(z===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),bt===void 0||bt.attribute!==z||z&&bt.data!==z.data)return!0;F++}return c.attributesNum!==F||c.index!==J}function E(D,k,Y,J){const ut={},ft=k.attributes;let F=0;const G=Y.getAttributes();for(const st in G)if(G[st].location>=0){let bt=ft[st];bt===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor));const z={};z.attribute=bt,bt&&bt.data&&(z.data=bt.data),ut[st]=z,F++}c.attributes=ut,c.attributesNum=F,c.index=J}function T(){const D=c.newAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]=0}function M(D){v(D,0)}function v(D,k){const Y=c.newAttributes,J=c.enabledAttributes,ut=c.attributeDivisors;Y[D]=1,J[D]===0&&(r.enableVertexAttribArray(D),J[D]=1),ut[D]!==k&&(r.vertexAttribDivisor(D,k),ut[D]=k)}function U(){const D=c.newAttributes,k=c.enabledAttributes;for(let Y=0,J=k.length;Y<J;Y++)k[Y]!==D[Y]&&(r.disableVertexAttribArray(Y),k[Y]=0)}function L(D,k,Y,J,ut,ft,F){F===!0?r.vertexAttribIPointer(D,k,Y,ut,ft):r.vertexAttribPointer(D,k,Y,J,ut,ft)}function w(D,k,Y,J){T();const ut=J.attributes,ft=Y.getAttributes(),F=k.defaultAttributeValues;for(const G in ft){const st=ft[G];if(st.location>=0){let Tt=ut[G];if(Tt===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor)),Tt!==void 0){const bt=Tt.normalized,z=Tt.itemSize,rt=t.get(Tt);if(rt===void 0)continue;const yt=rt.buffer,wt=rt.type,Gt=rt.bytesPerElement,tt=wt===r.INT||wt===r.UNSIGNED_INT||Tt.gpuType===lp;if(Tt.isInterleavedBufferAttribute){const gt=Tt.data,Ut=gt.stride,Xt=Tt.offset;if(gt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<st.locationSize;Ht++)v(st.location+Ht,gt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ht=0;Ht<st.locationSize;Ht++)M(st.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Ht=0;Ht<st.locationSize;Ht++)L(st.location+Ht,z/st.locationSize,wt,bt,Ut*Gt,(Xt+z/st.locationSize*Ht)*Gt,tt)}else{if(Tt.isInstancedBufferAttribute){for(let gt=0;gt<st.locationSize;gt++)v(st.location+gt,Tt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let gt=0;gt<st.locationSize;gt++)M(st.location+gt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let gt=0;gt<st.locationSize;gt++)L(st.location+gt,z/st.locationSize,wt,bt,z*Gt,z/st.locationSize*gt*Gt,tt)}}else if(F!==void 0){const bt=F[G];if(bt!==void 0)switch(bt.length){case 2:r.vertexAttrib2fv(st.location,bt);break;case 3:r.vertexAttrib3fv(st.location,bt);break;case 4:r.vertexAttrib4fv(st.location,bt);break;default:r.vertexAttrib1fv(st.location,bt)}}}}U()}function O(){V();for(const D in s){const k=s[D];for(const Y in k){const J=k[Y];for(const ut in J)g(J[ut].object),delete J[ut];delete k[Y]}delete s[D]}}function I(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const Y in k){const J=k[Y];for(const ut in J)g(J[ut].object),delete J[ut];delete k[Y]}delete s[D.id]}function N(D){for(const k in s){const Y=s[k];if(Y[D.id]===void 0)continue;const J=Y[D.id];for(const ut in J)g(J[ut].object),delete J[ut];delete Y[D.id]}}function V(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function F1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function B1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Gi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const V=N===wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==xi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ji&&!V)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(le("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:w,maxSamples:O,samples:I}}function H1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ds,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const U=c?0:s,L=U*4;let w=v.clippingState||null;m.value=w,w=g(E,x,L,y);for(let O=0;O!==L;++O)w[O]=i[O];v.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const v=y+T*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,w=y;L!==T;++L,w+=4)f.copy(_[L]).applyMatrix4(U,d),f.normal.toArray(M,w),M[w+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function G1(r){let t=new WeakMap;function i(f,d){return d===gd?f.mapping=qs:d===_d&&(f.mapping=Yr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===gd||d===_d)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new nx(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ms=4,Q_=[.125,.215,.35,.446,.526,.582],ks=20,V1=256,Jo=new Ep,J_=new we;let Jh=null,$h=0,td=0,ed=!1;const k1=new j;class $_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=k1}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===Yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:wa,format:Gi,colorSpace:Zr,depthBuffer:!1},l=tv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X1(c)),this._blurMaterial=q1(c,t,i),this._ggxMaterial=W1(c,t,i)}return l}_compileMaterial(t){const i=new Li(new $n,t);this._renderer.compile(i,Jo)}_sceneToCubeUV(t,i,s,l,c){const m=new Ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(J_),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new cl,new cu({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const U=t.background;U?U.isColor&&(M.color.copy(U),t.background=null,v=!0):(M.color.copy(J_),v=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):w===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const O=this._cubeSize;Hr(l,w*O,L>2?O:0,O,O),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=y,_.autoClear=x,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===Yr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,y=_*x,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-ms?s-E+ms:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Hr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Hr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,Jo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ks-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):ks;M>ks&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ks}`);const v=[];let U=0;for(let N=0;N<ks;++N){const V=N/T,A=Math.exp(-V*V/2);v.push(A),N===0?U+=A:N<M&&(U+=2*A)}for(let N=0;N<v.length;N++)v[N]=v[N]/U;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const w=this._sizeLods[l],O=3*w*(l>L-ms?l-L+ms:0),I=4*(this._cubeSize-w);Hr(i,O,I,3*w,2*w),m.setRenderTarget(i),m.render(_,Jo)}}function X1(r){const t=[],i=[],s=[];let l=r;const c=r-ms+1+Q_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ms?m=Q_[f-r+ms-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,M=2,v=1,U=new Float32Array(T*E*y),L=new Float32Array(M*E*y),w=new Float32Array(v*E*y);for(let I=0;I<y;I++){const N=I%3*2/3-1,V=I>2?0:-1,A=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];U.set(A,T*E*I),L.set(x,M*E*I);const D=[I,I,I,I,I,I];w.set(D,v*E*I)}const O=new $n;O.setAttribute("position",new Ji(U,T)),O.setAttribute("uv",new Ji(L,M)),O.setAttribute("faceIndex",new Ji(w,v)),s.push(new Li(O,null)),l>ms&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function tv(r,t,i){const s=new Qi(r,t,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function W1(r,t,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function q1(r,t,i){const s=new Float32Array(ks),l=new j(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function ev(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function nv(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function Y1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===gd||m===_d,g=m===qs||m===Yr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new $_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new $_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function j1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sl("WebGLRenderer: "+s+" extension not supported."),l}}}function Z1(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let L=0,w=U.length;L<w;L+=3){const O=U[L+0],I=U[L+1],N=U[L+2];x.push(O,I,I,N,N,O)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,w=U.length/3-1;L<w;L+=3){const O=L+0,I=L+1,N=L+2;x.push(O,I,I,N,N,O)}}else return;const M=new(jv(x)?Jv:Qv)(x,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function K1(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*f,E),i.update(y,s,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,s,1)}function _(x,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,T,0,E);let v=0;for(let U=0;U<E;U++)v+=y[U]*T[U];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Q1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function J1(r,t,i){const s=new WeakMap,l=new hn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let D=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var y=D;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),M===!0&&(w=3);let O=d.attributes.position.count*w,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*I*4*_),V=new Zv(N,O,I,_);V.type=ji,V.needsUpdate=!0;const A=w*4;for(let k=0;k<_;k++){const Y=v[k],J=U[k],ut=L[k],ft=O*I*4*k;for(let F=0;F<Y.count;F++){const G=F*A;E===!0&&(l.fromBufferAttribute(Y,F),N[ft+G+0]=l.x,N[ft+G+1]=l.y,N[ft+G+2]=l.z,N[ft+G+3]=0),T===!0&&(l.fromBufferAttribute(J,F),N[ft+G+4]=l.x,N[ft+G+5]=l.y,N[ft+G+6]=l.z,N[ft+G+7]=0),M===!0&&(l.fromBufferAttribute(ut,F),N[ft+G+8]=l.x,N[ft+G+9]=l.y,N[ft+G+10]=l.z,N[ft+G+11]=ut.itemSize===4?l.w:1)}}x={count:_,texture:V,size:new pe(O,I)},s.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function $1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const tT={[Lv]:"LINEAR_TONE_MAPPING",[Nv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[Pv]:"ACES_FILMIC_TONE_MAPPING",[Iv]:"AGX_TONE_MAPPING",[Fv]:"NEUTRAL_TONE_MAPPING",[zv]:"CUSTOM_TONE_MAPPING"};function eT(r,t,i,s,l){const c=new Qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Qi(t,i,{type:wa,depthBuffer:!1,stencilBuffer:!1}),d=new $n;d.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ln([0,2,0,0,2,0],2));const m=new kM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Li(d,m),g=new Ep(-1,1,1,-1,0,1);let _=null,x=null,y=!1,E,T=null,M=[],v=!1;this.setSize=function(U,L){c.setSize(U,L),f.setSize(U,L);for(let w=0;w<M.length;w++){const O=M[w];O.setSize&&O.setSize(U,L)}},this.setEffects=function(U){M=U,v=M.length>0&&M[0].isRenderPass===!0;const L=c.width,w=c.height;for(let O=0;O<M.length;O++){const I=M[O];I.setSize&&I.setSize(L,w)}},this.begin=function(U,L){if(y||U.toneMapping===Ki&&M.length===0)return!1;if(T=L,L!==null){const w=L.width,O=L.height;(c.width!==w||c.height!==O)&&this.setSize(w,O)}return v===!1&&U.setRenderTarget(c),E=U.toneMapping,U.toneMapping=Ki,!0},this.hasRenderPass=function(){return v},this.end=function(U,L){U.toneMapping=E,y=!0;let w=c,O=f;for(let I=0;I<M.length;I++){const N=M[I];if(N.enabled!==!1&&(N.render(U,O,w,L),N.needsSwap!==!1)){const V=w;w=O,O=V}}if(_!==U.outputColorSpace||x!==U.toneMapping){_=U.outputColorSpace,x=U.toneMapping,m.defines={},Le.getTransfer(_)===Xe&&(m.defines.SRGB_TRANSFER="");const I=tT[x];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,U.setRenderTarget(T),U.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const ox=new Jn,tp=new rl(1,1),lx=new Zv,cx=new vM,ux=new ex,iv=[],av=[],sv=new Float32Array(16),rv=new Float32Array(9),ov=new Float32Array(4);function $r(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=iv[l];if(c===void 0&&(c=new Float32Array(l),iv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Cn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function wn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=av[t];i===void 0&&(i=new Int32Array(t),av[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function nT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;r.uniform2fv(this.addr,t),wn(i,t)}}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Cn(i,t))return;r.uniform3fv(this.addr,t),wn(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;r.uniform4fv(this.addr,t),wn(i,t)}}function rT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Cn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,s))return;ov.set(s),r.uniformMatrix2fv(this.addr,!1,ov),wn(i,s)}}function oT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Cn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,s))return;rv.set(s),r.uniformMatrix3fv(this.addr,!1,rv),wn(i,s)}}function lT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Cn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,s))return;sv.set(s),r.uniformMatrix4fv(this.addr,!1,sv),wn(i,s)}}function cT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;r.uniform2iv(this.addr,t),wn(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;r.uniform3iv(this.addr,t),wn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;r.uniform4iv(this.addr,t),wn(i,t)}}function dT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;r.uniform2uiv(this.addr,t),wn(i,t)}}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;r.uniform3uiv(this.addr,t),wn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;r.uniform4uiv(this.addr,t),wn(i,t)}}function _T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tp.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=tp):c=ox,i.setTexture2D(t||c,l)}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||cx,l)}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ux,l)}function ST(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||lx,l)}function yT(r){switch(r){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return ST}}function MT(r,t){r.uniform1fv(this.addr,t)}function ET(r,t){const i=$r(t,this.size,2);r.uniform2fv(this.addr,i)}function bT(r,t){const i=$r(t,this.size,3);r.uniform3fv(this.addr,i)}function TT(r,t){const i=$r(t,this.size,4);r.uniform4fv(this.addr,i)}function AT(r,t){const i=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function RT(r,t){const i=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function CT(r,t){const i=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function wT(r,t){r.uniform1iv(this.addr,t)}function DT(r,t){r.uniform2iv(this.addr,t)}function UT(r,t){r.uniform3iv(this.addr,t)}function LT(r,t){r.uniform4iv(this.addr,t)}function NT(r,t){r.uniform1uiv(this.addr,t)}function OT(r,t){r.uniform2uiv(this.addr,t)}function PT(r,t){r.uniform3uiv(this.addr,t)}function zT(r,t){r.uniform4uiv(this.addr,t)}function IT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=tp:f=ox;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function FT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||cx,c[f])}function BT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ux,c[f])}function HT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Cn(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||lx,c[f])}function GT(r){switch(r){case 5126:return MT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yT(i.type)}}class kT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class XT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function lv(r,t){r.seq.push(t),r.map[t.id]=t}function WT(r,t,i){const s=r.name,l=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),f=nd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){lv(i,p===void 0?new VT(d,r,t):new kT(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new XT(d),lv(i,_)),i=_}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);WT(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function cv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const qT=37297;let YT=0;function jT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const uv=new ve;function ZT(r){Le._getMatrix(uv,Le.workingColorSpace,r);const t=`mat3( ${uv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case tu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function fv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+jT(r.getShaderSource(t),d)}else return c}function KT(r,t){const i=ZT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QT={[Lv]:"Linear",[Nv]:"Reinhard",[Ov]:"Cineon",[Pv]:"ACESFilmic",[Iv]:"AgX",[Fv]:"Neutral",[zv]:"Custom"};function JT(r,t){const i=QT[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new j;function $T(){Le.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function eA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function nl(r){return r!==""}function hv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(iA,sA)}const aA=new Map;function sA(r,t){let i=Se[t];if(i===void 0){const s=aA.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(r){return r.replace(rA,oA)}function oA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function mv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const lA={[qc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function cA(r){return lA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uA={[qs]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function fA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":uA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const hA={[Yr]:"ENVMAP_MODE_REFRACTION"};function dA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":hA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pA={[Uv]:"ENVMAP_BLENDING_MULTIPLY",[Jy]:"ENVMAP_BLENDING_MIX",[$y]:"ENVMAP_BLENDING_ADD"};function mA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pA[r.combine]||"ENVMAP_BLENDING_NONE"}function gA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _A(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=cA(i),p=fA(i),g=dA(i),_=mA(i),x=gA(i),y=tA(i),E=eA(c),T=l.createProgram();let M,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),v.length>0&&(v+=`
`)):(M=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),v=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?Se.tonemapping_pars_fragment:"",i.toneMapping!==Ki?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),f=ep(f),f=hv(f,i),f=dv(f,i),d=ep(d),d=hv(d,i),d=dv(d,i),f=pv(f),d=pv(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+M+f,w=U+v+d,O=cv(l,l.VERTEX_SHADER,L),I=cv(l,l.FRAGMENT_SHADER,w);l.attachShader(T,O),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function N(k){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",J=l.getShaderInfoLog(O)||"",ut=l.getShaderInfoLog(I)||"",ft=Y.trim(),F=J.trim(),G=ut.trim();let st=!0,Tt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,O,I);else{const bt=fv(l,O,"vertex"),z=fv(l,I,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+bt+`
`+z)}else ft!==""?le("WebGLProgram: Program Info Log:",ft):(F===""||G==="")&&(Tt=!1);Tt&&(k.diagnostics={runnable:st,programLog:ft,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:v}})}l.deleteShader(O),l.deleteShader(I),V=new Jc(l,T),A=nA(l,T)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,qT)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=I,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new SA(t),i.set(t,s)),s}}class SA{constructor(t){this.id=vA++,this.code=t,this.usedTimes=0}}function yA(r,t,i,s,l,c,f){const d=new _p,m=new xA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,D,k,Y,J){const ut=Y.fog,ft=J.geometry,F=A.isMeshStandardMaterial?Y.environment:null,G=(A.isMeshStandardMaterial?i:t).get(A.envMap||F),st=G&&G.mapping===ru?G.image.height:null,Tt=E[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&le("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const bt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,z=bt!==void 0?bt.length:0;let rt=0;ft.morphAttributes.position!==void 0&&(rt=1),ft.morphAttributes.normal!==void 0&&(rt=2),ft.morphAttributes.color!==void 0&&(rt=3);let yt,wt,Gt,tt;if(Tt){const Ot=Yi[Tt];yt=Ot.vertexShader,wt=Ot.fragmentShader}else yt=A.vertexShader,wt=A.fragmentShader,m.update(A),Gt=m.getVertexShaderID(A),tt=m.getFragmentShaderID(A);const gt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Xt=J.isInstancedMesh===!0,Ht=J.isBatchedMesh===!0,xe=!!A.map,Re=!!A.matcap,ue=!!G,ce=!!A.aoMap,De=!!A.lightMap,oe=!!A.bumpMap,nn=!!A.normalMap,X=!!A.displacementMap,Ze=!!A.emissiveMap,ye=!!A.metalnessMap,Ne=!!A.roughnessMap,jt=A.anisotropy>0,P=A.clearcoat>0,b=A.dispersion>0,Z=A.iridescence>0,xt=A.sheen>0,Et=A.transmission>0,pt=jt&&!!A.anisotropyMap,Zt=P&&!!A.clearcoatMap,Lt=P&&!!A.clearcoatNormalMap,Yt=P&&!!A.clearcoatRoughnessMap,ie=Z&&!!A.iridescenceMap,Rt=Z&&!!A.iridescenceThicknessMap,Ct=xt&&!!A.sheenColorMap,It=xt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Nt=!!A.specularColorMap,fe=!!A.specularIntensityMap,q=Et&&!!A.transmissionMap,H=Et&&!!A.thicknessMap,$=!!A.gradientMap,mt=!!A.alphaMap,ct=A.alphaTest>0,it=!!A.alphaHash,_t=!!A.extensions;let Dt=Ki;A.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Dt=r.toneMapping);const kt={shaderID:Tt,shaderType:A.type,shaderName:A.name,vertexShader:yt,fragmentShader:wt,defines:A.defines,customVertexShaderID:Gt,customFragmentShaderID:tt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&J._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&J.instanceColor!==null,instancingMorph:Xt&&J.morphTexture!==null,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Zr,alphaToCoverage:!!A.alphaToCoverage,map:xe,matcap:Re,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:st,aoMap:ce,lightMap:De,bumpMap:oe,normalMap:nn,displacementMap:X,emissiveMap:Ze,normalMapObjectSpace:nn&&A.normalMapType===nM,normalMapTangentSpace:nn&&A.normalMapType===Yv,metalnessMap:ye,roughnessMap:Ne,anisotropy:jt,anisotropyMap:pt,clearcoat:P,clearcoatMap:Zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Yt,dispersion:b,iridescence:Z,iridescenceMap:ie,iridescenceThicknessMap:Rt,sheen:xt,sheenColorMap:Ct,sheenRoughnessMap:It,specularMap:zt,specularColorMap:Nt,specularIntensityMap:fe,transmission:Et,transmissionMap:q,thicknessMap:H,gradientMap:$,opaque:A.transparent===!1&&A.blending===Xr&&A.alphaToCoverage===!1,alphaMap:mt,alphaTest:ct,alphaHash:it,combine:A.combine,mapUv:xe&&T(A.map.channel),aoMapUv:ce&&T(A.aoMap.channel),lightMapUv:De&&T(A.lightMap.channel),bumpMapUv:oe&&T(A.bumpMap.channel),normalMapUv:nn&&T(A.normalMap.channel),displacementMapUv:X&&T(A.displacementMap.channel),emissiveMapUv:Ze&&T(A.emissiveMap.channel),metalnessMapUv:ye&&T(A.metalnessMap.channel),roughnessMapUv:Ne&&T(A.roughnessMap.channel),anisotropyMapUv:pt&&T(A.anisotropyMap.channel),clearcoatMapUv:Zt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:Nt&&T(A.specularColorMap.channel),specularIntensityMapUv:fe&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:H&&T(A.thicknessMap.channel),alphaMapUv:mt&&T(A.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(nn||jt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ft.attributes.uv&&(xe||mt),fog:!!ut,useFog:A.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ut,skinning:J.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:rt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Dt,decodeVideoTexture:xe&&A.map.isVideoTexture===!0&&Le.getTransfer(A.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ze&&A.emissiveMap.isVideoTexture===!0&&Le.getTransfer(A.emissiveMap.colorSpace)===Xe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ta,flipSided:A.side===ci,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:_t&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&A.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return kt.vertexUv1s=p.has(1),kt.vertexUv2s=p.has(2),kt.vertexUv3s=p.has(3),p.clear(),kt}function v(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)D.push(k),D.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(U(D,A),L(D,A),D.push(r.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function U(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function L(A,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),A.push(d.mask)}function w(A){const D=E[A.type];let k;if(D){const Y=Yi[D];k=UM.clone(Y.uniforms)}else k=A.uniforms;return k}function O(A,D){let k=_.get(D);return k!==void 0?++k.usedTimes:(k=new _A(r,D,A,c),g.push(k),_.set(D,k)),k}function I(A){if(--A.usedTimes===0){const D=g.indexOf(A);g[D]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){m.remove(A)}function V(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:w,acquireProgram:O,releaseProgram:I,releaseShaderCache:N,programs:g,dispose:V}}function MA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function EA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function gv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _v(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,E,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function d(_,x,y,E,T,M){const v=f(_,x,y,E,T,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,E,T,M){const v=f(_,x,y,E,T,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||EA),s.length>1&&s.sort(x||gv),l.length>1&&l.sort(x||gv)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function bA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new _v,r.set(s,[f])):l>=c.length?(f=new _v,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function TA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new we};break;case"SpotLight":i={position:new j,direction:new j,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function AA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let RA=0;function CA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wA(r){const t=new TA,i=AA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new on,f=new on;function d(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,T=0,M=0,v=0,U=0,L=0,w=0,O=0,I=0,N=0;p.sort(CA);for(let A=0,D=p.length;A<D;A++){const k=p[A],Y=k.color,J=k.intensity,ut=k.distance;let ft=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===jr?ft=k.shadow.map.texture:ft=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=Y.r*J,_+=Y.g*J,x+=Y.b*J;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],J);N++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,st=i.get(k);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=ft,s.directionalShadowMatrix[y]=k.shadow.matrix,U++}s.directional[y]=F,y++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(Y).multiplyScalar(J),F.distance=ut,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[T]=F;const G=k.shadow;if(k.map&&(s.spotLightMap[O]=k.map,O++,G.updateMatrices(k),k.castShadow&&I++),s.spotLightMatrix[T]=G.matrix,k.castShadow){const st=i.get(k);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.spotShadow[T]=st,s.spotShadowMap[T]=ft,w++}T++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(Y).multiplyScalar(J),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=F,M++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const G=k.shadow,st=i.get(k);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,st.shadowCameraNear=G.camera.near,st.shadowCameraFar=G.camera.far,s.pointShadow[E]=st,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=k.shadow.matrix,L++}s.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(J),F.groundColor.copy(k.groundColor).multiplyScalar(J),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==y||V.pointLength!==E||V.spotLength!==T||V.rectAreaLength!==M||V.hemiLength!==v||V.numDirectionalShadows!==U||V.numPointShadows!==L||V.numSpotShadows!==w||V.numSpotMaps!==O||V.numLightProbes!==N)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+O-I,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=N,V.directionalLength=y,V.pointLength=E,V.spotLength=T,V.rectAreaLength=M,V.hemiLength=v,V.numDirectionalShadows=U,V.numPointShadows=L,V.numSpotShadows=w,V.numSpotMaps=O,V.numLightProbes=N,s.version=RA++)}function m(p,g){let _=0,x=0,y=0,E=0,T=0;const M=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(L.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const w=s.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function vv(r){const t=new wA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function DA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new vv(r),t.set(l,[d])):c>=f.length?(d=new vv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const UA=`void main() {
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
}`,NA=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],OA=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],xv=new on,$o=new j,id=new j;function PA(r,t,i){let s=new vp;const l=new pe,c=new pe,f=new hn,d=new WM,m=new qM,p={},g=i.maxTextureSize,_={[_s]:ci,[ci]:_s,[Ta]:Ta},x=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Li(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let v=this.type;this.render=function(I,N,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===Ny&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=qc);const A=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ra),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=v!==this.type;J&&N.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(ft=>ft.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,ft=I.length;ut<ft;ut++){const F=I[ut],G=F.shadow;if(G===void 0){le("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const st=G.getFrameExtents();if(l.multiply(st),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/st.x),l.x=c.x*st.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/st.y),l.y=c.y*st.y,G.mapSize.y=c.y)),G.map===null||J===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===el){if(F.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qi(l.x,l.y,{format:jr,type:wa,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new rl(l.x,l.y,ji),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Da,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wn,G.map.depthTexture.magFilter=Wn}else{F.isPointLight?(G.map=new nx(l.x),G.map.depthTexture=new VM(l.x,$i)):(G.map=new Qi(l.x,l.y),G.map.depthTexture=new rl(l.x,l.y,$i)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Da;const bt=r.state.buffers.depth.getReversed();this.type===qc?(G.map.depthTexture.compareFunction=bt?mp:pp,G.map.depthTexture.minFilter=Zn,G.map.depthTexture.magFilter=Zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wn,G.map.depthTexture.magFilter=Wn)}G.camera.updateProjectionMatrix()}const Tt=G.map.isWebGLCubeRenderTarget?6:1;for(let bt=0;bt<Tt;bt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,bt),r.clear();else{bt===0&&(r.setRenderTarget(G.map),r.clear());const z=G.getViewport(bt);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),Y.viewport(f)}if(F.isPointLight){const z=G.camera,rt=G.matrix,yt=F.distance||z.far;yt!==z.far&&(z.far=yt,z.updateProjectionMatrix()),$o.setFromMatrixPosition(F.matrixWorld),z.position.copy($o),id.copy(z.position),id.add(NA[bt]),z.up.copy(OA[bt]),z.lookAt(id),z.updateMatrixWorld(),rt.makeTranslation(-$o.x,-$o.y,-$o.z),xv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xv,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),w(N,V,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===el&&U(G,V),G.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,D,k)};function U(I,N){const V=t.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qi(l.x,l.y,{format:jr,type:wa})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(N,null,V,x,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(N,null,V,y,T,null)}function L(I,N,V,A){let D=null;const k=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)D=k;else if(D=V.isPointLight===!0?m:d,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=D.uuid,J=N.uuid;let ut=p[Y];ut===void 0&&(ut={},p[Y]=ut);let ft=ut[J];ft===void 0&&(ft=D.clone(),ut[J]=ft,N.addEventListener("dispose",O)),D=ft}if(D.visible=N.visible,D.wireframe=N.wireframe,A===el?D.side=N.shadowSide!==null?N.shadowSide:N.side:D.side=N.shadowSide!==null?N.shadowSide:_[N.side],D.alphaMap=N.alphaMap,D.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,D.map=N.map,D.clipShadows=N.clipShadows,D.clippingPlanes=N.clippingPlanes,D.clipIntersection=N.clipIntersection,D.displacementMap=N.displacementMap,D.displacementScale=N.displacementScale,D.displacementBias=N.displacementBias,D.wireframeLinewidth=N.wireframeLinewidth,D.linewidth=N.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Y=r.properties.get(D);Y.light=V}return D}function w(I,N,V,A,D){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===el)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const J=t.update(I),ut=I.material;if(Array.isArray(ut)){const ft=J.groups;for(let F=0,G=ft.length;F<G;F++){const st=ft[F],Tt=ut[st.materialIndex];if(Tt&&Tt.visible){const bt=L(I,Tt,A,D);I.onBeforeShadow(r,I,N,V,J,bt,st),r.renderBufferDirect(V,null,J,bt,I,st),I.onAfterShadow(r,I,N,V,J,bt,st)}}}else if(ut.visible){const ft=L(I,ut,A,D);I.onBeforeShadow(r,I,N,V,J,ft,null),r.renderBufferDirect(V,null,J,ft,I,null),I.onAfterShadow(r,I,N,V,J,ft,null)}}const Y=I.children;for(let J=0,ut=Y.length;J<ut;J++)w(Y[J],N,V,A,D)}function O(I){I.target.removeEventListener("dispose",O);for(const V in p){const A=p[V],D=I.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const zA={[cd]:ud,[fd]:pd,[hd]:md,[qr]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:qr};function IA(r,t){function i(){let q=!1;const H=new hn;let $=null;const mt=new hn(0,0,0,0);return{setMask:function(ct){$!==ct&&!q&&(r.colorMask(ct,ct,ct,ct),$=ct)},setLocked:function(ct){q=ct},setClear:function(ct,it,_t,Dt,kt){kt===!0&&(ct*=Dt,it*=Dt,_t*=Dt),H.set(ct,it,_t,Dt),mt.equals(H)===!1&&(r.clearColor(ct,it,_t,Dt),mt.copy(H))},reset:function(){q=!1,$=null,mt.set(-1,0,0,0)}}}function s(){let q=!1,H=!1,$=null,mt=null,ct=null;return{setReversed:function(it){if(H!==it){const _t=t.get("EXT_clip_control");it?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),H=it;const Dt=ct;ct=null,this.setClear(Dt)}},getReversed:function(){return H},setTest:function(it){it?gt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(it){$!==it&&!q&&(r.depthMask(it),$=it)},setFunc:function(it){if(H&&(it=zA[it]),mt!==it){switch(it){case cd:r.depthFunc(r.NEVER);break;case ud:r.depthFunc(r.ALWAYS);break;case fd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case hd:r.depthFunc(r.EQUAL);break;case dd:r.depthFunc(r.GEQUAL);break;case pd:r.depthFunc(r.GREATER);break;case md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=it}},setLocked:function(it){q=it},setClear:function(it){ct!==it&&(H&&(it=1-it),r.clearDepth(it),ct=it)},reset:function(){q=!1,$=null,mt=null,ct=null,H=!1}}}function l(){let q=!1,H=null,$=null,mt=null,ct=null,it=null,_t=null,Dt=null,kt=null;return{setTest:function(Ot){q||(Ot?gt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(Ot){H!==Ot&&!q&&(r.stencilMask(Ot),H=Ot)},setFunc:function(Ot,Kt,ge){($!==Ot||mt!==Kt||ct!==ge)&&(r.stencilFunc(Ot,Kt,ge),$=Ot,mt=Kt,ct=ge)},setOp:function(Ot,Kt,ge){(it!==Ot||_t!==Kt||Dt!==ge)&&(r.stencilOp(Ot,Kt,ge),it=Ot,_t=Kt,Dt=ge)},setLocked:function(Ot){q=Ot},setClear:function(Ot){kt!==Ot&&(r.clearStencil(Ot),kt=Ot)},reset:function(){q=!1,H=null,$=null,mt=null,ct=null,it=null,_t=null,Dt=null,kt=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,T=!1,M=null,v=null,U=null,L=null,w=null,O=null,I=null,N=new we(0,0,0),V=0,A=!1,D=null,k=null,Y=null,J=null,ut=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(st)[1]),F=G>=1):st.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),F=G>=2);let Tt=null,bt={};const z=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),yt=new hn().fromArray(z),wt=new hn().fromArray(rt);function Gt(q,H,$,mt){const ct=new Uint8Array(4),it=r.createTexture();r.bindTexture(q,it),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _t=0;_t<$;_t++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(H,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(H+_t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return it}const tt={};tt[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),gt(r.DEPTH_TEST),f.setFunc(qr),oe(!1),nn(p_),gt(r.CULL_FACE),ce(Ra);function gt(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Ut(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Xt(q,H){return _[q]!==H?(r.bindFramebuffer(q,H),_[q]=H,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=H),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=H),!0):!1}function Ht(q,H){let $=y,mt=!1;if(q){$=x.get(H),$===void 0&&($=[],x.set(H,$));const ct=q.textures;if($.length!==ct.length||$[0]!==r.COLOR_ATTACHMENT0){for(let it=0,_t=ct.length;it<_t;it++)$[it]=r.COLOR_ATTACHMENT0+it;$.length=ct.length,mt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,mt=!0);mt&&r.drawBuffers($)}function xe(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const Re={[Vs]:r.FUNC_ADD,[Py]:r.FUNC_SUBTRACT,[zy]:r.FUNC_REVERSE_SUBTRACT};Re[Iy]=r.MIN,Re[Fy]=r.MAX;const ue={[By]:r.ZERO,[Hy]:r.ONE,[Gy]:r.SRC_COLOR,[od]:r.SRC_ALPHA,[Yy]:r.SRC_ALPHA_SATURATE,[Wy]:r.DST_COLOR,[ky]:r.DST_ALPHA,[Vy]:r.ONE_MINUS_SRC_COLOR,[ld]:r.ONE_MINUS_SRC_ALPHA,[qy]:r.ONE_MINUS_DST_COLOR,[Xy]:r.ONE_MINUS_DST_ALPHA,[jy]:r.CONSTANT_COLOR,[Zy]:r.ONE_MINUS_CONSTANT_COLOR,[Ky]:r.CONSTANT_ALPHA,[Qy]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(q,H,$,mt,ct,it,_t,Dt,kt,Ot){if(q===Ra){T===!0&&(Ut(r.BLEND),T=!1);return}if(T===!1&&(gt(r.BLEND),T=!0),q!==Oy){if(q!==M||Ot!==A){if((v!==Vs||w!==Vs)&&(r.blendEquation(r.FUNC_ADD),v=Vs,w=Vs),Ot)switch(q){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case m_:r.blendFunc(r.ONE,r.ONE);break;case g_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case __:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",q);break}else switch(q){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case m_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case g_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",q);break}U=null,L=null,O=null,I=null,N.set(0,0,0),V=0,M=q,A=Ot}return}ct=ct||H,it=it||$,_t=_t||mt,(H!==v||ct!==w)&&(r.blendEquationSeparate(Re[H],Re[ct]),v=H,w=ct),($!==U||mt!==L||it!==O||_t!==I)&&(r.blendFuncSeparate(ue[$],ue[mt],ue[it],ue[_t]),U=$,L=mt,O=it,I=_t),(Dt.equals(N)===!1||kt!==V)&&(r.blendColor(Dt.r,Dt.g,Dt.b,kt),N.copy(Dt),V=kt),M=q,A=!1}function De(q,H){q.side===Ta?Ut(r.CULL_FACE):gt(r.CULL_FACE);let $=q.side===ci;H&&($=!$),oe($),q.blending===Xr&&q.transparent===!1?ce(Ra):ce(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const mt=q.stencilWrite;d.setTest(mt),mt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ze(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(q){D!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),D=q)}function nn(q){q!==Uy?(gt(r.CULL_FACE),q!==k&&(q===p_?r.cullFace(r.BACK):q===Ly?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),k=q}function X(q){q!==Y&&(F&&r.lineWidth(q),Y=q)}function Ze(q,H,$){q?(gt(r.POLYGON_OFFSET_FILL),(J!==H||ut!==$)&&(r.polygonOffset(H,$),J=H,ut=$)):Ut(r.POLYGON_OFFSET_FILL)}function ye(q){q?gt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function Ne(q){q===void 0&&(q=r.TEXTURE0+ft-1),Tt!==q&&(r.activeTexture(q),Tt=q)}function jt(q,H,$){$===void 0&&(Tt===null?$=r.TEXTURE0+ft-1:$=Tt);let mt=bt[$];mt===void 0&&(mt={type:void 0,texture:void 0},bt[$]=mt),(mt.type!==q||mt.texture!==H)&&(Tt!==$&&(r.activeTexture($),Tt=$),r.bindTexture(q,H||tt[q]),mt.type=q,mt.texture=H)}function P(){const q=bt[Tt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function xt(){try{r.texSubImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Et(){try{r.texSubImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Lt(){try{r.texStorage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Yt(){try{r.texStorage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function ie(){try{r.texImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Rt(){try{r.texImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Ct(q){yt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),yt.copy(q))}function It(q){wt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),wt.copy(q))}function zt(q,H){let $=p.get(H);$===void 0&&($=new WeakMap,p.set(H,$));let mt=$.get(q);mt===void 0&&(mt=r.getUniformBlockIndex(H,q.name),$.set(q,mt))}function Nt(q,H){const mt=p.get(H).get(q);m.get(H)!==mt&&(r.uniformBlockBinding(H,mt,q.__bindingPointIndex),m.set(H,mt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Tt=null,bt={},_={},x=new WeakMap,y=[],E=null,T=!1,M=null,v=null,U=null,L=null,w=null,O=null,I=null,N=new we(0,0,0),V=0,A=!1,D=null,k=null,Y=null,J=null,ut=null,yt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:gt,disable:Ut,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:xe,setBlending:ce,setMaterial:De,setFlipSided:oe,setCullFace:nn,setLineWidth:X,setPolygonOffset:Ze,setScissorTest:ye,activeTexture:Ne,bindTexture:jt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:ie,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:Nt,texStorage2D:Lt,texStorage3D:Yt,texSubImage2D:xt,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:Zt,scissor:Ct,viewport:It,reset:fe}}function FA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return y?new OffscreenCanvas(P,b):nu("canvas")}function T(P,b,Z){let xt=1;const Et=jt(P);if((Et.width>Z||Et.height>Z)&&(xt=Z/Math.max(Et.width,Et.height)),xt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pt=Math.floor(xt*Et.width),Zt=Math.floor(xt*Et.height);_===void 0&&(_=E(pt,Zt));const Lt=b?E(pt,Zt):_;return Lt.width=pt,Lt.height=Zt,Lt.getContext("2d").drawImage(P,0,0,pt,Zt),le("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+Zt+")."),Lt}else return"data"in P&&le("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),P;return P}function M(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,b,Z,xt,Et=!1){if(P!==null){if(r[P]!==void 0)return r[P];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt=b;if(b===r.RED&&(Z===r.FLOAT&&(pt=r.R32F),Z===r.HALF_FLOAT&&(pt=r.R16F),Z===r.UNSIGNED_BYTE&&(pt=r.R8)),b===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.R8UI),Z===r.UNSIGNED_SHORT&&(pt=r.R16UI),Z===r.UNSIGNED_INT&&(pt=r.R32UI),Z===r.BYTE&&(pt=r.R8I),Z===r.SHORT&&(pt=r.R16I),Z===r.INT&&(pt=r.R32I)),b===r.RG&&(Z===r.FLOAT&&(pt=r.RG32F),Z===r.HALF_FLOAT&&(pt=r.RG16F),Z===r.UNSIGNED_BYTE&&(pt=r.RG8)),b===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RG16UI),Z===r.UNSIGNED_INT&&(pt=r.RG32UI),Z===r.BYTE&&(pt=r.RG8I),Z===r.SHORT&&(pt=r.RG16I),Z===r.INT&&(pt=r.RG32I)),b===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),Z===r.UNSIGNED_INT&&(pt=r.RGB32UI),Z===r.BYTE&&(pt=r.RGB8I),Z===r.SHORT&&(pt=r.RGB16I),Z===r.INT&&(pt=r.RGB32I)),b===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(pt=r.RGBA32UI),Z===r.BYTE&&(pt=r.RGBA8I),Z===r.SHORT&&(pt=r.RGBA16I),Z===r.INT&&(pt=r.RGBA32I)),b===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),b===r.RGBA){const Zt=Et?tu:Le.getTransfer(xt);Z===r.FLOAT&&(pt=r.RGBA32F),Z===r.HALF_FLOAT&&(pt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(pt=Zt===Xe?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function w(P,b){let Z;return P?b===null||b===$i||b===al?Z=r.DEPTH24_STENCIL8:b===ji?Z=r.DEPTH32F_STENCIL8:b===il&&(Z=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===al?Z=r.DEPTH_COMPONENT24:b===ji?Z=r.DEPTH_COMPONENT32F:b===il&&(Z=r.DEPTH_COMPONENT16),Z}function O(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wn&&P.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){const b=P.target;b.removeEventListener("dispose",I),V(b),b.isVideoTexture&&g.delete(b)}function N(P){const b=P.target;b.removeEventListener("dispose",N),D(b)}function V(P){const b=s.get(P);if(b.__webglInit===void 0)return;const Z=P.source,xt=x.get(Z);if(xt){const Et=xt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&A(P),Object.keys(xt).length===0&&x.delete(Z)}s.remove(P)}function A(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const Z=P.source,xt=x.get(Z);delete xt[b.__cacheKey],f.memory.textures--}function D(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(b.__webglFramebuffer[xt]))for(let Et=0;Et<b.__webglFramebuffer[xt].length;Et++)r.deleteFramebuffer(b.__webglFramebuffer[xt][Et]);else r.deleteFramebuffer(b.__webglFramebuffer[xt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[xt])}else{if(Array.isArray(b.__webglFramebuffer))for(let xt=0;xt<b.__webglFramebuffer.length;xt++)r.deleteFramebuffer(b.__webglFramebuffer[xt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xt=0;xt<b.__webglColorRenderbuffer.length;xt++)b.__webglColorRenderbuffer[xt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[xt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=P.textures;for(let xt=0,Et=Z.length;xt<Et;xt++){const pt=s.get(Z[xt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(Z[xt])}s.remove(P)}let k=0;function Y(){k=0}function J(){const P=k;return P>=l.maxTextures&&le("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function ut(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ft(P,b){const Z=s.get(P);if(P.isVideoTexture&&ye(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){const xt=P.image;if(xt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Z,P,b);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+b)}function F(P,b){const Z=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){tt(Z,P,b);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+b)}function G(P,b){const Z=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){tt(Z,P,b);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+b)}function st(P,b){const Z=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){gt(Z,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+b)}const Tt={[vd]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[xd]:r.MIRRORED_REPEAT},bt={[Wn]:r.NEAREST,[tM]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},z={[iM]:r.NEVER,[lM]:r.ALWAYS,[aM]:r.LESS,[pp]:r.LEQUAL,[sM]:r.EQUAL,[mp]:r.GEQUAL,[rM]:r.GREATER,[oM]:r.NOTEQUAL};function rt(P,b){if(b.type===ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Zn||b.magFilter===bh||b.magFilter===yc||b.magFilter===Xs||b.minFilter===Zn||b.minFilter===bh||b.minFilter===yc||b.minFilter===Xs)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Tt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Tt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Tt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,bt[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,bt[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wn||b.minFilter!==yc&&b.minFilter!==Xs||b.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(P,b){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",I));const xt=b.source;let Et=x.get(xt);Et===void 0&&(Et={},x.set(xt,Et));const pt=ut(b);if(pt!==P.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),Et[pt].usedTimes++;const Zt=Et[P.__cacheKey];Zt!==void 0&&(Et[P.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(b)),P.__cacheKey=pt,P.__webglTexture=Et[pt].texture}return Z}function wt(P,b,Z){return Math.floor(Math.floor(P/Z)/b)}function Gt(P,b,Z,xt){const pt=P.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Z,xt,b.data);else{pt.sort((Rt,Ct)=>Rt.start-Ct.start);let Zt=0;for(let Rt=1;Rt<pt.length;Rt++){const Ct=pt[Zt],It=pt[Rt],zt=Ct.start+Ct.count,Nt=wt(It.start,b.width,4),fe=wt(Ct.start,b.width,4);It.start<=zt+1&&Nt===fe&&wt(It.start+It.count-1,b.width,4)===Nt?Ct.count=Math.max(Ct.count,It.start+It.count-Ct.start):(++Zt,pt[Zt]=It)}pt.length=Zt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Yt=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Rt=0,Ct=pt.length;Rt<Ct;Rt++){const It=pt[Rt],zt=Math.floor(It.start/4),Nt=Math.ceil(It.count/4),fe=zt%b.width,q=Math.floor(zt/b.width),H=Nt,$=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,fe,q,H,$,Z,xt,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function tt(P,b,Z){let xt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xt=r.TEXTURE_3D);const Et=yt(P,b),pt=b.source;i.bindTexture(xt,P.__webglTexture,r.TEXTURE0+Z);const Zt=s.get(pt);if(pt.version!==Zt.__version||Et===!0){i.activeTexture(r.TEXTURE0+Z);const Lt=Le.getPrimaries(Le.workingColorSpace),Yt=b.colorSpace===ps?null:Le.getPrimaries(b.colorSpace),ie=b.colorSpace===ps||Lt===Yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Rt=T(b.image,!1,l.maxTextureSize);Rt=Ne(b,Rt);const Ct=c.convert(b.format,b.colorSpace),It=c.convert(b.type);let zt=L(b.internalFormat,Ct,It,b.colorSpace,b.isVideoTexture);rt(xt,b);let Nt;const fe=b.mipmaps,q=b.isVideoTexture!==!0,H=Zt.__version===void 0||Et===!0,$=pt.dataReady,mt=O(b,Rt);if(b.isDepthTexture)zt=w(b.format===Ws,b.type),H&&(q?i.texStorage2D(r.TEXTURE_2D,1,zt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,zt,Rt.width,Rt.height,0,Ct,It,null));else if(b.isDataTexture)if(fe.length>0){q&&H&&i.texStorage2D(r.TEXTURE_2D,mt,zt,fe[0].width,fe[0].height);for(let ct=0,it=fe.length;ct<it;ct++)Nt=fe[ct],q?$&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Nt.width,Nt.height,Ct,It,Nt.data):i.texImage2D(r.TEXTURE_2D,ct,zt,Nt.width,Nt.height,0,Ct,It,Nt.data);b.generateMipmaps=!1}else q?(H&&i.texStorage2D(r.TEXTURE_2D,mt,zt,Rt.width,Rt.height),$&&Gt(b,Rt,Ct,It)):i.texImage2D(r.TEXTURE_2D,0,zt,Rt.width,Rt.height,0,Ct,It,Rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&H&&i.texStorage3D(r.TEXTURE_2D_ARRAY,mt,zt,fe[0].width,fe[0].height,Rt.depth);for(let ct=0,it=fe.length;ct<it;ct++)if(Nt=fe[ct],b.format!==Gi)if(Ct!==null)if(q){if($)if(b.layerUpdates.size>0){const _t=K_(Nt.width,Nt.height,b.format,b.type);for(const Dt of b.layerUpdates){const kt=Nt.data.subarray(Dt*_t/Nt.data.BYTES_PER_ELEMENT,(Dt+1)*_t/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Dt,Nt.width,Nt.height,1,Ct,kt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Nt.width,Nt.height,Rt.depth,Ct,Nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,zt,Nt.width,Nt.height,Rt.depth,0,Nt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?$&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Nt.width,Nt.height,Rt.depth,Ct,It,Nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ct,zt,Nt.width,Nt.height,Rt.depth,0,Ct,It,Nt.data)}else{q&&H&&i.texStorage2D(r.TEXTURE_2D,mt,zt,fe[0].width,fe[0].height);for(let ct=0,it=fe.length;ct<it;ct++)Nt=fe[ct],b.format!==Gi?Ct!==null?q?$&&i.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,Nt.width,Nt.height,Ct,Nt.data):i.compressedTexImage2D(r.TEXTURE_2D,ct,zt,Nt.width,Nt.height,0,Nt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?$&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Nt.width,Nt.height,Ct,It,Nt.data):i.texImage2D(r.TEXTURE_2D,ct,zt,Nt.width,Nt.height,0,Ct,It,Nt.data)}else if(b.isDataArrayTexture)if(q){if(H&&i.texStorage3D(r.TEXTURE_2D_ARRAY,mt,zt,Rt.width,Rt.height,Rt.depth),$)if(b.layerUpdates.size>0){const ct=K_(Rt.width,Rt.height,b.format,b.type);for(const it of b.layerUpdates){const _t=Rt.data.subarray(it*ct/Rt.data.BYTES_PER_ELEMENT,(it+1)*ct/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,it,Rt.width,Rt.height,1,Ct,It,_t)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,It,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Rt.width,Rt.height,Rt.depth,0,Ct,It,Rt.data);else if(b.isData3DTexture)q?(H&&i.texStorage3D(r.TEXTURE_3D,mt,zt,Rt.width,Rt.height,Rt.depth),$&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,It,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Rt.width,Rt.height,Rt.depth,0,Ct,It,Rt.data);else if(b.isFramebufferTexture){if(H)if(q)i.texStorage2D(r.TEXTURE_2D,mt,zt,Rt.width,Rt.height);else{let ct=Rt.width,it=Rt.height;for(let _t=0;_t<mt;_t++)i.texImage2D(r.TEXTURE_2D,_t,zt,ct,it,0,Ct,It,null),ct>>=1,it>>=1}}else if(fe.length>0){if(q&&H){const ct=jt(fe[0]);i.texStorage2D(r.TEXTURE_2D,mt,zt,ct.width,ct.height)}for(let ct=0,it=fe.length;ct<it;ct++)Nt=fe[ct],q?$&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ct,It,Nt):i.texImage2D(r.TEXTURE_2D,ct,zt,Ct,It,Nt);b.generateMipmaps=!1}else if(q){if(H){const ct=jt(Rt);i.texStorage2D(r.TEXTURE_2D,mt,zt,ct.width,ct.height)}$&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,It,Rt)}else i.texImage2D(r.TEXTURE_2D,0,zt,Ct,It,Rt);M(b)&&v(xt),Zt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function gt(P,b,Z){if(b.image.length!==6)return;const xt=yt(P,b),Et=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);const pt=s.get(Et);if(Et.version!==pt.__version||xt===!0){i.activeTexture(r.TEXTURE0+Z);const Zt=Le.getPrimaries(Le.workingColorSpace),Lt=b.colorSpace===ps?null:Le.getPrimaries(b.colorSpace),Yt=b.colorSpace===ps||Zt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const ie=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let it=0;it<6;it++)!ie&&!Rt?Ct[it]=T(b.image[it],!0,l.maxCubemapSize):Ct[it]=Rt?b.image[it].image:b.image[it],Ct[it]=Ne(b,Ct[it]);const It=Ct[0],zt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),fe=L(b.internalFormat,zt,Nt,b.colorSpace),q=b.isVideoTexture!==!0,H=pt.__version===void 0||xt===!0,$=Et.dataReady;let mt=O(b,It);rt(r.TEXTURE_CUBE_MAP,b);let ct;if(ie){q&&H&&i.texStorage2D(r.TEXTURE_CUBE_MAP,mt,fe,It.width,It.height);for(let it=0;it<6;it++){ct=Ct[it].mipmaps;for(let _t=0;_t<ct.length;_t++){const Dt=ct[_t];b.format!==Gi?zt!==null?q?$&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,Dt.width,Dt.height,zt,Dt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,fe,Dt.width,Dt.height,0,Dt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?$&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,Dt.width,Dt.height,zt,Nt,Dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,fe,Dt.width,Dt.height,0,zt,Nt,Dt.data)}}}else{if(ct=b.mipmaps,q&&H){ct.length>0&&mt++;const it=jt(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,mt,fe,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){q?$&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct[it].width,Ct[it].height,zt,Nt,Ct[it].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,fe,Ct[it].width,Ct[it].height,0,zt,Nt,Ct[it].data);for(let _t=0;_t<ct.length;_t++){const kt=ct[_t].image[it].image;q?$&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,kt.width,kt.height,zt,Nt,kt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,fe,kt.width,kt.height,0,zt,Nt,kt.data)}}else{q?$&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,zt,Nt,Ct[it]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,fe,zt,Nt,Ct[it]);for(let _t=0;_t<ct.length;_t++){const Dt=ct[_t];q?$&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,zt,Nt,Dt.image[it]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,fe,zt,Nt,Dt.image[it])}}}M(b)&&v(r.TEXTURE_CUBE_MAP),pt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ut(P,b,Z,xt,Et,pt){const Zt=c.convert(Z.format,Z.colorSpace),Lt=c.convert(Z.type),Yt=L(Z.internalFormat,Zt,Lt,Z.colorSpace),ie=s.get(b),Rt=s.get(Z);if(Rt.__renderTarget=b,!ie.__hasExternalTextures){const Ct=Math.max(1,b.width>>pt),It=Math.max(1,b.height>>pt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,Yt,Ct,It,b.depth,0,Zt,Lt,null):i.texImage2D(Et,pt,Yt,Ct,It,0,Zt,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Ze(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,Et,Rt.__webglTexture,0,X(b)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xt,Et,Rt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(P,b,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const xt=b.depthTexture,Et=xt&&xt.isDepthTexture?xt.type:null,pt=w(b.stencilBuffer,Et),Zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),pt,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,P)}else{const xt=b.textures;for(let Et=0;Et<xt.length;Et++){const pt=xt[Et],Zt=c.convert(pt.format,pt.colorSpace),Lt=c.convert(pt.type),Yt=L(pt.internalFormat,Zt,Lt,pt.colorSpace);Ze(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(b),Yt,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(b),Yt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Yt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(P,b,Z){const xt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(b.depthTexture);if(Et.__renderTarget=b,(!Et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),xt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),rt(r.TEXTURE_CUBE_MAP,b.depthTexture);const ie=c.convert(b.depthTexture.format),Rt=c.convert(b.depthTexture.type);let Ct;b.depthTexture.format===Da?Ct=r.DEPTH_COMPONENT24:b.depthTexture.format===Ws&&(Ct=r.DEPTH24_STENCIL8);for(let It=0;It<6;It++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Ct,b.width,b.height,0,ie,Rt,null)}}else ft(b.depthTexture,0);const pt=Et.__webglTexture,Zt=X(b),Lt=xt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Yt=b.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)Ze(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Yt,Lt,pt,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Yt,Lt,pt,0);else if(b.depthTexture.format===Ws)Ze(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Yt,Lt,pt,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Yt,Lt,pt,0);else throw new Error("Unknown depthTexture format")}function xe(P){const b=s.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const xt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xt.removeEventListener("dispose",Et)};xt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=xt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let xt=0;xt<6;xt++)Ht(b.__webglFramebuffer[xt],P,xt);else{const xt=P.texture.mipmaps;xt&&xt.length>0?Ht(b.__webglFramebuffer[0],P,0):Ht(b.__webglFramebuffer,P,0)}else if(Z){b.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[xt]),b.__webglDepthbuffer[xt]===void 0)b.__webglDepthbuffer[xt]=r.createRenderbuffer(),Xt(b.__webglDepthbuffer[xt],P,!1);else{const Et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[xt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}else{const xt=P.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xt(b.__webglDepthbuffer,P,!1);else{const Et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(P,b,Z){const xt=s.get(P);b!==void 0&&Ut(xt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&xe(P)}function ue(P){const b=P.texture,Z=s.get(P),xt=s.get(b);P.addEventListener("dispose",N);const Et=P.textures,pt=P.isWebGLCubeRenderTarget===!0,Zt=Et.length>1;if(Zt||(xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture()),xt.__version=b.version,f.memory.textures++),pt){Z.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[Lt]=[];for(let Yt=0;Yt<b.mipmaps.length;Yt++)Z.__webglFramebuffer[Lt][Yt]=r.createFramebuffer()}else Z.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)Z.__webglFramebuffer[Lt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Lt=0,Yt=Et.length;Lt<Yt;Lt++){const ie=s.get(Et[Lt]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Ze(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Et.length;Lt++){const Yt=Et[Lt];Z.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Lt]);const ie=c.convert(Yt.format,Yt.colorSpace),Rt=c.convert(Yt.type),Ct=L(Yt.internalFormat,ie,Rt,Yt.colorSpace,P.isXRRenderTarget===!0),It=X(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,Ct,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(Z.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),rt(r.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Yt=0;Yt<b.mipmaps.length;Yt++)Ut(Z.__webglFramebuffer[Lt][Yt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Yt);else Ut(Z.__webglFramebuffer[Lt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Lt=0,Yt=Et.length;Lt<Yt;Lt++){const ie=Et[Lt],Rt=s.get(ie);let Ct=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Rt.__webglTexture),rt(Ct,ie),Ut(Z.__webglFramebuffer,P,ie,r.COLOR_ATTACHMENT0+Lt,Ct,0),M(ie)&&v(Ct)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,xt.__webglTexture),rt(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Yt=0;Yt<b.mipmaps.length;Yt++)Ut(Z.__webglFramebuffer[Yt],P,b,r.COLOR_ATTACHMENT0,Lt,Yt);else Ut(Z.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Lt,0);M(b)&&v(Lt),i.unbindTexture()}P.depthBuffer&&xe(P)}function ce(P){const b=P.textures;for(let Z=0,xt=b.length;Z<xt;Z++){const Et=b[Z];if(M(Et)){const pt=U(P),Zt=s.get(Et).__webglTexture;i.bindTexture(pt,Zt),v(pt),i.unbindTexture()}}}const De=[],oe=[];function nn(P){if(P.samples>0){if(Ze(P)===!1){const b=P.textures,Z=P.width,xt=P.height;let Et=r.COLOR_BUFFER_BIT;const pt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(P),Lt=b.length>1;if(Lt)for(let ie=0;ie<b.length;ie++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Yt=P.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ie=0;ie<b.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const Rt=s.get(b[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,Z,xt,0,0,Z,xt,Et,r.NEAREST),m===!0&&(De.length=0,oe.length=0,De.push(r.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(De.push(pt),oe.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let ie=0;ie<b.length;ie++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const Rt=s.get(b[ie]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function X(P){return Math.min(l.maxSamples,P.samples)}function Ze(P){const b=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(P){const b=f.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Ne(P,b){const Z=P.colorSpace,xt=P.format,Et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Zr&&Z!==ps&&(Le.getTransfer(Z)===Xe?(xt!==Gi||Et!==xi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",Z)),b}function jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=ft,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=st,this.rebindTextures=Re,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BA(r,t){function i(s,l=ps){let c;const f=Le.getTransfer(l);if(s===xi)return r.UNSIGNED_BYTE;if(s===cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Vv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===kv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Hv)return r.BYTE;if(s===Gv)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===lp)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===wa)return r.HALF_FLOAT;if(s===Xv)return r.ALPHA;if(s===Wv)return r.RGB;if(s===Gi)return r.RGBA;if(s===Da)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===qv)return r.RED;if(s===fp)return r.RED_INTEGER;if(s===jr)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sd||s===yd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===bd||s===Td)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ad)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rd)return c.COMPRESSED_R11_EAC;if(s===Cd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===wd)return c.COMPRESSED_RG11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ud)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Id)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===qd||s===Yd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jd||s===Zd||s===Kd||s===Qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const HA=`
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

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ax(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ea({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends Ys{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new VA,v={},U=i.getContextAttributes();let L=null,w=null;const O=[],I=[],N=new pe;let V=null;const A=new Ui;A.viewport=new hn;const D=new Ui;D.viewport=new hn;const k=[A,D],Y=new KM;let J=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=O[tt];return gt===void 0&&(gt=new qh,O[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=O[tt];return gt===void 0&&(gt=new qh,O[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=O[tt];return gt===void 0&&(gt=new qh,O[tt]=gt),gt.getHandSpace()};function ft(tt){const gt=I.indexOf(tt.inputSource);if(gt===-1)return;const Ut=O[gt];Ut!==void 0&&(Ut.update(tt.inputSource,tt.frame,p||f),Ut.dispatchEvent({type:tt.type,data:tt.inputSource}))}function F(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let tt=0;tt<O.length;tt++){const gt=I[tt];gt!==null&&(I[tt]=null,O[tt].disconnect(gt))}J=null,ut=null,M.reset();for(const tt in v)delete v[tt];t.setRenderTarget(L),y=null,x=null,_=null,l=null,w=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),U.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(N),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Xt=null,Ht=null;U.depth&&(Ht=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=U.stencil?Ws:Da,Xt=U.stencil?al:$i);const xe={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(xe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),w=new Qi(x.textureWidth,x.textureHeight,{format:Gi,type:xi,depthTexture:new rl(x.textureWidth,x.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ut={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new Qi(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(tt){for(let gt=0;gt<tt.removed.length;gt++){const Ut=tt.removed[gt],Xt=I.indexOf(Ut);Xt>=0&&(I[Xt]=null,O[Xt].disconnect(Ut))}for(let gt=0;gt<tt.added.length;gt++){const Ut=tt.added[gt];let Xt=I.indexOf(Ut);if(Xt===-1){for(let xe=0;xe<O.length;xe++)if(xe>=I.length){I.push(Ut),Xt=xe;break}else if(I[xe]===null){I[xe]=Ut,Xt=xe;break}if(Xt===-1)break}const Ht=O[Xt];Ht&&Ht.connect(Ut)}}const st=new j,Tt=new j;function bt(tt,gt,Ut){st.setFromMatrixPosition(gt.matrixWorld),Tt.setFromMatrixPosition(Ut.matrixWorld);const Xt=st.distanceTo(Tt),Ht=gt.projectionMatrix.elements,xe=Ut.projectionMatrix.elements,Re=Ht[14]/(Ht[10]-1),ue=Ht[14]/(Ht[10]+1),ce=(Ht[9]+1)/Ht[5],De=(Ht[9]-1)/Ht[5],oe=(Ht[8]-1)/Ht[0],nn=(xe[8]+1)/xe[0],X=Re*oe,Ze=Re*nn,ye=Xt/(-oe+nn),Ne=ye*-oe;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ne),tt.translateZ(ye),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ht[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const jt=Re+ye,P=ue+ye,b=X-Ne,Z=Ze+(Xt-Ne),xt=ce*ue/P*jt,Et=De*ue/P*jt;tt.projectionMatrix.makePerspective(b,Z,xt,Et,jt,P),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function z(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let gt=tt.near,Ut=tt.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),Y.near=D.near=A.near=gt,Y.far=D.far=A.far=Ut,(J!==Y.near||ut!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,ut=Y.far),Y.layers.mask=tt.layers.mask|6,A.layers.mask=Y.layers.mask&3,D.layers.mask=Y.layers.mask&5;const Xt=tt.parent,Ht=Y.cameras;z(Y,Xt);for(let xe=0;xe<Ht.length;xe++)z(Ht[xe],Xt);Ht.length===2?bt(Y,A,D):Y.projectionMatrix.copy(A.projectionMatrix),rt(tt,Y,Xt)};function rt(tt,gt,Ut){Ut===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(Ut.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Jd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(tt){return v[tt]};let yt=null;function wt(tt,gt){if(g=gt.getViewerPose(p||f),E=gt,g!==null){const Ut=g.views;y!==null&&(t.setRenderTargetFramebuffer(w,y.framebuffer),t.setRenderTarget(w));let Xt=!1;Ut.length!==Y.cameras.length&&(Y.cameras.length=0,Xt=!0);for(let ue=0;ue<Ut.length;ue++){const ce=Ut[ue];let De=null;if(y!==null)De=y.getViewport(ce);else{const nn=_.getViewSubImage(x,ce);De=nn.viewport,ue===0&&(t.setRenderTargetTextures(w,nn.colorTexture,nn.depthStencilTexture),t.setRenderTarget(w))}let oe=k[ue];oe===void 0&&(oe=new Ui,oe.layers.enable(ue),oe.viewport=new hn,k[ue]=oe),oe.matrix.fromArray(ce.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ce.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(De.x,De.y,De.width,De.height),ue===0&&(Y.matrix.copy(oe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Xt===!0&&Y.cameras.push(oe)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const ue=_.getDepthInformation(Ut[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,l.renderState)}if(Ht&&Ht.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let ue=0;ue<Ut.length;ue++){const ce=Ut[ue].camera;if(ce){let De=v[ce];De||(De=new ax,v[ce]=De);const oe=_.getCameraImage(ce);De.sourceTexture=oe}}}}for(let Ut=0;Ut<O.length;Ut++){const Xt=I[Ut],Ht=O[Ut];Xt!==null&&Ht!==void 0&&Ht.update(Xt,gt,p||f)}yt&&yt(tt,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Gt=new rx;Gt.setAnimationLoop(wt),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const Gs=new ta,XA=new on;function WA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,$v(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,U,L,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,w)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,U,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===ci&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===ci&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const U=t.get(v),L=U.envMap,w=U.envMapRotation;L&&(M.envMap.value=L,Gs.copy(w),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),M.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Gs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,U,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*U,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,U){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ci&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const U=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qA(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const w=L.program;s.uniformBlockBinding(U,w)}function p(U,L){let w=l[U.id];w===void 0&&(E(U),w=g(U),l[U.id]=w,U.addEventListener("dispose",M));const O=L.program;s.updateUBOMapping(U,O);const I=t.render.frame;c[U.id]!==I&&(x(U),c[U.id]=I)}function g(U){const L=_();U.__bindingPointIndex=L;const w=r.createBuffer(),O=U.__size,I=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,O,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function _(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=l[U.id],w=U.uniforms,O=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,N=w.length;I<N;I++){const V=Array.isArray(w[I])?w[I]:[w[I]];for(let A=0,D=V.length;A<D;A++){const k=V[A];if(y(k,I,A,O)===!0){const Y=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let ut=0;for(let ft=0;ft<J.length;ft++){const F=J[ft],G=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Y+ut,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ut),ut+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(U,L,w,O){const I=U.value,N=L+"_"+w;if(O[N]===void 0)return typeof I=="number"||typeof I=="boolean"?O[N]=I:O[N]=I.clone(),!0;{const V=O[N];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return O[N]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function E(U){const L=U.uniforms;let w=0;const O=16;for(let N=0,V=L.length;N<V;N++){const A=Array.isArray(L[N])?L[N]:[L[N]];for(let D=0,k=A.length;D<k;D++){const Y=A[D],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let ut=0,ft=J.length;ut<ft;ut++){const F=J[ut],G=T(F),st=w%O,Tt=st%G.boundary,bt=st+Tt;w+=Tt,bt!==0&&O-bt<G.storage&&(w+=O-bt),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=G.storage}}}const I=w%O;return I>0&&(w+=O-I),U.__size=w,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const YA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function jA(){return qi===null&&(qi=new IM(YA,16,16,jr,wa),qi.name="DFG_LUT",qi.minFilter=Zn,qi.magFilter=Zn,qi.wrapS=Aa,qi.wrapT=Aa,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class ZA{constructor(t={}){const{canvas:i=cM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=xi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=y,M=new Set([dp,hp,fp]),v=new Set([xi,$i,il,al,cp,up]),U=new Uint32Array(4),L=new Int32Array(4);let w=null,O=null;const I=[],N=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=Di;let k=0,Y=0,J=null,ut=-1,ft=null;const F=new hn,G=new hn;let st=null;const Tt=new we(0);let bt=0,z=i.width,rt=i.height,yt=1,wt=null,Gt=null;const tt=new hn(0,0,z,rt),gt=new hn(0,0,z,rt);let Ut=!1;const Xt=new vp;let Ht=!1,xe=!1;const Re=new on,ue=new j,ce=new hn,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function nn(){return J===null?yt:1}let X=s;function Ze(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),X===null){const K="webgl2";if(X=Ze(K,C),X===null)throw Ze(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ue("WebGLRenderer: "+C.message),C}let ye,Ne,jt,P,b,Z,xt,Et,pt,Zt,Lt,Yt,ie,Rt,Ct,It,zt,Nt,fe,q,H,$,mt,ct;function it(){ye=new j1(X),ye.init(),$=new BA(X,ye),Ne=new B1(X,ye,t,$),jt=new IA(X,ye),Ne.reversedDepthBuffer&&x&&jt.buffers.depth.setReversed(!0),P=new Q1(X),b=new MA,Z=new FA(X,ye,jt,b,Ne,$,P),xt=new G1(A),Et=new Y1(A),pt=new eE(X),mt=new I1(X,pt),Zt=new Z1(X,pt,P,mt),Lt=new $1(X,Zt,pt,P),fe=new J1(X,Ne,Z),It=new H1(b),Yt=new yA(A,xt,Et,ye,Ne,mt,It),ie=new WA(A,b),Rt=new bA,Ct=new DA(ye),Nt=new z1(A,xt,Et,jt,Lt,E,m),zt=new PA(A,Lt,Ne),ct=new qA(X,P,Ne,jt),q=new F1(X,ye,P),H=new K1(X,ye,P),P.programs=Yt.programs,A.capabilities=Ne,A.extensions=ye,A.properties=b,A.renderLists=Rt,A.shadowMap=zt,A.state=jt,A.info=P}it(),T!==xi&&(V=new eT(T,i.width,i.height,l,c));const _t=new kA(A,X);this.xr=_t,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(C){C!==void 0&&(yt=C,this.setSize(z,rt,!1))},this.getSize=function(C){return C.set(z,rt)},this.setSize=function(C,K,ht=!0){if(_t.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,rt=K,i.width=Math.floor(C*yt),i.height=Math.floor(K*yt),ht===!0&&(i.style.width=C+"px",i.style.height=K+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(z*yt,rt*yt).floor()},this.setDrawingBufferSize=function(C,K,ht){z=C,rt=K,yt=ht,i.width=Math.floor(C*ht),i.height=Math.floor(K*ht),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(T===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,K,ht,ot){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,K,ht,ot),jt.viewport(F.copy(tt).multiplyScalar(yt).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,K,ht,ot){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,K,ht,ot),jt.scissor(G.copy(gt).multiplyScalar(yt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(C){jt.setScissorTest(Ut=C)},this.setOpaqueSort=function(C){wt=C},this.setTransparentSort=function(C){Gt=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ht=!0){let ot=0;if(C){let et=!1;if(J!==null){const Pt=J.texture.format;et=M.has(Pt)}if(et){const Pt=J.texture.type,Vt=v.has(Pt),Ft=Nt.getClearColor(),Wt=Nt.getClearAlpha(),Qt=Ft.r,ne=Ft.g,Jt=Ft.b;Vt?(U[0]=Qt,U[1]=ne,U[2]=Jt,U[3]=Wt,X.clearBufferuiv(X.COLOR,0,U)):(L[0]=Qt,L[1]=ne,L[2]=Jt,L[3]=Wt,X.clearBufferiv(X.COLOR,0,L))}else ot|=X.COLOR_BUFFER_BIT}K&&(ot|=X.DEPTH_BUFFER_BIT),ht&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),Nt.dispose(),Rt.dispose(),Ct.dispose(),b.dispose(),xt.dispose(),Et.dispose(),Lt.dispose(),mt.dispose(),ct.dispose(),Yt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",_n),_t.removeEventListener("sessionend",vn),Ke.stop()};function Dt(C){C.preventDefault(),M_("WebGLRenderer: Context Lost."),D=!0}function kt(){M_("WebGLRenderer: Context Restored."),D=!1;const C=P.autoReset,K=zt.enabled,ht=zt.autoUpdate,ot=zt.needsUpdate,et=zt.type;it(),P.autoReset=C,zt.enabled=K,zt.autoUpdate=ht,zt.needsUpdate=ot,zt.type=et}function Ot(C){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Kt(C){const K=C.target;K.removeEventListener("dispose",Kt),ge(K)}function ge(C){He(C),b.remove(C)}function He(C){const K=b.get(C).programs;K!==void 0&&(K.forEach(function(ht){Yt.releaseProgram(ht)}),C.isShaderMaterial&&Yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ht,ot,et,Pt){K===null&&(K=De);const Vt=et.isMesh&&et.matrixWorld.determinant()<0,Ft=vs(C,K,ht,ot,et);jt.setMaterial(ot,Vt);let Wt=ht.index,Qt=1;if(ot.wireframe===!0){if(Wt=Zt.getWireframeAttribute(ht),Wt===void 0)return;Qt=2}const ne=ht.drawRange,Jt=ht.attributes.position;let ae=ne.start*Qt,ze=(ne.start+ne.count)*Qt;Pt!==null&&(ae=Math.max(ae,Pt.start*Qt),ze=Math.min(ze,(Pt.start+Pt.count)*Qt)),Wt!==null?(ae=Math.max(ae,0),ze=Math.min(ze,Wt.count)):Jt!=null&&(ae=Math.max(ae,0),ze=Math.min(ze,Jt.count));const sn=ze-ae;if(sn<0||sn===1/0)return;mt.setup(et,ot,Ft,ht,Wt);let $e,Be=q;if(Wt!==null&&($e=pt.get(Wt),Be=H,Be.setIndex($e)),et.isMesh)ot.wireframe===!0?(jt.setLineWidth(ot.wireframeLinewidth*nn()),Be.setMode(X.LINES)):Be.setMode(X.TRIANGLES);else if(et.isLine){let te=ot.linewidth;te===void 0&&(te=1),jt.setLineWidth(te*nn()),et.isLineSegments?Be.setMode(X.LINES):et.isLineLoop?Be.setMode(X.LINE_LOOP):Be.setMode(X.LINE_STRIP)}else et.isPoints?Be.setMode(X.POINTS):et.isSprite&&Be.setMode(X.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Be.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const te=et._multiDrawStarts,Ie=et._multiDrawCounts,he=et._multiDrawCount,Pn=Wt?pt.get(Wt).bytesPerElement:1,na=b.get(ot).currentProgram.getUniforms();for(let zn=0;zn<he;zn++)na.setValue(X,"_gl_DrawID",zn),Be.render(te[zn]/Pn,Ie[zn])}else if(et.isInstancedMesh)Be.renderInstances(ae,sn,et.count);else if(ht.isInstancedBufferGeometry){const te=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Ie=Math.min(ht.instanceCount,te);Be.renderInstances(ae,sn,Ie)}else Be.render(ae,sn)};function cn(C,K,ht){C.transparent===!0&&C.side===Ta&&C.forceSinglePass===!1?(C.side=ci,C.needsUpdate=!0,Oa(C,K,ht),C.side=_s,C.needsUpdate=!0,Oa(C,K,ht),C.side=Ta):Oa(C,K,ht)}this.compile=function(C,K,ht=null){ht===null&&(ht=C),O=Ct.get(ht),O.init(K),N.push(O),ht.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(O.pushLight(et),et.castShadow&&O.pushShadow(et))}),C!==ht&&C.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(O.pushLight(et),et.castShadow&&O.pushShadow(et))}),O.setupLights();const ot=new Set;return C.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Pt=et.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){const Ft=Pt[Vt];cn(Ft,ht,et),ot.add(Ft)}else cn(Pt,ht,et),ot.add(Pt)}),O=N.pop(),ot},this.compileAsync=function(C,K,ht=null){const ot=this.compile(C,K,ht);return new Promise(et=>{function Pt(){if(ot.forEach(function(Vt){b.get(Vt).currentProgram.isReady()&&ot.delete(Vt)}),ot.size===0){et(C);return}setTimeout(Pt,10)}ye.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let an=null;function dn(C){an&&an(C)}function _n(){Ke.stop()}function vn(){Ke.start()}const Ke=new rx;Ke.setAnimationLoop(dn),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(C){an=C,_t.setAnimationLoop(C),C===null?Ke.stop():Ke.start()},_t.addEventListener("sessionstart",_n),_t.addEventListener("sessionend",vn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ht=_t.enabled===!0&&_t.isPresenting===!0,ot=V!==null&&(J===null||ht)&&V.begin(A,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(K),K=_t.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,K,J),O=Ct.get(C,N.length),O.init(K),N.push(O),Re.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Xt.setFromProjectionMatrix(Re,Zi,K.reversedDepth),xe=this.localClippingEnabled,Ht=It.init(this.clippingPlanes,xe),w=Rt.get(C,I.length),w.init(),I.push(w),_t.enabled===!0&&_t.isPresenting===!0){const Vt=A.xr.getDepthSensingMesh();Vt!==null&&Dn(Vt,K,-1/0,A.sortObjects)}Dn(C,K,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(wt,Gt),oe=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,oe&&Nt.addToRenderList(w,C),this.info.render.frame++,Ht===!0&&It.beginShadows();const et=O.state.shadowsArray;if(zt.render(et,C,K),Ht===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&V.hasRenderPass())===!1){const Vt=w.opaque,Ft=w.transmissive;if(O.setupLights(),K.isArrayCamera){const Wt=K.cameras;if(Ft.length>0)for(let Qt=0,ne=Wt.length;Qt<ne;Qt++){const Jt=Wt[Qt];bn(Vt,Ft,C,Jt)}oe&&Nt.render(C);for(let Qt=0,ne=Wt.length;Qt<ne;Qt++){const Jt=Wt[Qt];Je(w,C,Jt,Jt.viewport)}}else Ft.length>0&&bn(Vt,Ft,C,K),oe&&Nt.render(C),Je(w,C,K)}J!==null&&Y===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),ot&&V.end(A),C.isScene===!0&&C.onAfterRender(A,C,K),mt.resetDefaultState(),ut=-1,ft=null,N.pop(),N.length>0?(O=N[N.length-1],Ht===!0&&It.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,I.pop(),I.length>0?w=I[I.length-1]:w=null};function Dn(C,K,ht,ot){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ht=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xt.intersectsSprite(C)){ot&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const Vt=Lt.update(C),Ft=C.material;Ft.visible&&w.push(C,Vt,Ft,ht,ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xt.intersectsObject(C))){const Vt=Lt.update(C),Ft=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(Ft)){const Wt=Vt.groups;for(let Qt=0,ne=Wt.length;Qt<ne;Qt++){const Jt=Wt[Qt],ae=Ft[Jt.materialIndex];ae&&ae.visible&&w.push(C,Vt,ae,ht,ce.z,Jt)}}else Ft.visible&&w.push(C,Vt,Ft,ht,ce.z,null)}}const Pt=C.children;for(let Vt=0,Ft=Pt.length;Vt<Ft;Vt++)Dn(Pt[Vt],K,ht,ot)}function Je(C,K,ht,ot){const{opaque:et,transmissive:Pt,transparent:Vt}=C;O.setupLightsView(ht),Ht===!0&&It.setGlobalState(A.clippingPlanes,ht),ot&&jt.viewport(F.copy(ot)),et.length>0&&ti(et,K,ht),Pt.length>0&&ti(Pt,K,ht),Vt.length>0&&ti(Vt,K,ht),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function bn(C,K,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ot.id]===void 0){const ae=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ot.id]=new Qi(1,1,{generateMipmaps:!0,type:ae?wa:xi,minFilter:Xs,samples:Ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Pt=O.state.transmissionRenderTarget[ot.id],Vt=ot.viewport||F;Pt.setSize(Vt.z*A.transmissionResolutionScale,Vt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Wt=A.getActiveCubeFace(),Qt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(Tt),bt=A.getClearAlpha(),bt<1&&A.setClearColor(16777215,.5),A.clear(),oe&&Nt.render(ht);const ne=A.toneMapping;A.toneMapping=Ki;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),O.setupLightsView(ot),Ht===!0&&It.setGlobalState(A.clippingPlanes,ot),ti(C,ht,ot),Z.updateMultisampleRenderTarget(Pt),Z.updateRenderTargetMipmap(Pt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ze=0,sn=K.length;ze<sn;ze++){const $e=K[ze],{object:Be,geometry:te,material:Ie,group:he}=$e;if(Ie.side===Ta&&Be.layers.test(ot.layers)){const Pn=Ie.side;Ie.side=ci,Ie.needsUpdate=!0,Na(Be,ht,ot,te,Ie,he),Ie.side=Pn,Ie.needsUpdate=!0,ae=!0}}ae===!0&&(Z.updateMultisampleRenderTarget(Pt),Z.updateRenderTargetMipmap(Pt))}A.setRenderTarget(Ft,Wt,Qt),A.setClearColor(Tt,bt),Jt!==void 0&&(ot.viewport=Jt),A.toneMapping=ne}function ti(C,K,ht){const ot=K.isScene===!0?K.overrideMaterial:null;for(let et=0,Pt=C.length;et<Pt;et++){const Vt=C[et],{object:Ft,geometry:Wt,group:Qt}=Vt;let ne=Vt.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),Ft.layers.test(ht.layers)&&Na(Ft,K,ht,Wt,ne,Qt)}}function Na(C,K,ht,ot,et,Pt){C.onBeforeRender(A,K,ht,ot,et,Pt),C.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),et.onBeforeRender(A,K,ht,ot,C,Pt),et.transparent===!0&&et.side===Ta&&et.forceSinglePass===!1?(et.side=ci,et.needsUpdate=!0,A.renderBufferDirect(ht,K,ot,et,C,Pt),et.side=_s,et.needsUpdate=!0,A.renderBufferDirect(ht,K,ot,et,C,Pt),et.side=Ta):A.renderBufferDirect(ht,K,ot,et,C,Pt),C.onAfterRender(A,K,ht,ot,et,Pt)}function Oa(C,K,ht){K.isScene!==!0&&(K=De);const ot=b.get(C),et=O.state.lights,Pt=O.state.shadowsArray,Vt=et.state.version,Ft=Yt.getParameters(C,et.state,Pt,K,ht),Wt=Yt.getProgramCacheKey(Ft);let Qt=ot.programs;ot.environment=C.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(C.isMeshStandardMaterial?Et:xt).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",Kt),Qt=new Map,ot.programs=Qt);let ne=Qt.get(Wt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Vt)return to(C,Ft),ne}else Ft.uniforms=Yt.getUniforms(C),C.onBeforeCompile(Ft,A),ne=Yt.acquireProgram(Ft,Wt),Qt.set(Wt,ne),ot.uniforms=Ft.uniforms;const Jt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=It.uniform),to(C,Ft),ot.needsLights=Pa(C),ot.lightsStateVersion=Vt,ot.needsLights&&(Jt.ambientLightColor.value=et.state.ambient,Jt.lightProbe.value=et.state.probe,Jt.directionalLights.value=et.state.directional,Jt.directionalLightShadows.value=et.state.directionalShadow,Jt.spotLights.value=et.state.spot,Jt.spotLightShadows.value=et.state.spotShadow,Jt.rectAreaLights.value=et.state.rectArea,Jt.ltc_1.value=et.state.rectAreaLTC1,Jt.ltc_2.value=et.state.rectAreaLTC2,Jt.pointLights.value=et.state.point,Jt.pointLightShadows.value=et.state.pointShadow,Jt.hemisphereLights.value=et.state.hemi,Jt.directionalShadowMap.value=et.state.directionalShadowMap,Jt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Jt.spotShadowMap.value=et.state.spotShadowMap,Jt.spotLightMatrix.value=et.state.spotLightMatrix,Jt.spotLightMap.value=et.state.spotLightMap,Jt.pointShadowMap.value=et.state.pointShadowMap,Jt.pointShadowMatrix.value=et.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function fl(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Jc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function to(C,K){const ht=b.get(C);ht.outputColorSpace=K.outputColorSpace,ht.batching=K.batching,ht.batchingColor=K.batchingColor,ht.instancing=K.instancing,ht.instancingColor=K.instancingColor,ht.instancingMorph=K.instancingMorph,ht.skinning=K.skinning,ht.morphTargets=K.morphTargets,ht.morphNormals=K.morphNormals,ht.morphColors=K.morphColors,ht.morphTargetsCount=K.morphTargetsCount,ht.numClippingPlanes=K.numClippingPlanes,ht.numIntersection=K.numClipIntersection,ht.vertexAlphas=K.vertexAlphas,ht.vertexTangents=K.vertexTangents,ht.toneMapping=K.toneMapping}function vs(C,K,ht,ot,et){K.isScene!==!0&&(K=De),Z.resetTextureUnits();const Pt=K.fog,Vt=ot.isMeshStandardMaterial?K.environment:null,Ft=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zr,Wt=(ot.isMeshStandardMaterial?Et:xt).get(ot.envMap||Vt),Qt=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ne=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!ht.morphAttributes.position,ae=!!ht.morphAttributes.normal,ze=!!ht.morphAttributes.color;let sn=Ki;ot.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(sn=A.toneMapping);const $e=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Be=$e!==void 0?$e.length:0,te=b.get(ot),Ie=O.state.lights;if(Ht===!0&&(xe===!0||C!==ft)){const Fn=C===ft&&ot.id===ut;It.setState(ot,C,Fn)}let he=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ie.state.version||te.outputColorSpace!==Ft||et.isBatchedMesh&&te.batching===!1||!et.isBatchedMesh&&te.batching===!0||et.isBatchedMesh&&te.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&te.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&te.instancing===!1||!et.isInstancedMesh&&te.instancing===!0||et.isSkinnedMesh&&te.skinning===!1||!et.isSkinnedMesh&&te.skinning===!0||et.isInstancedMesh&&te.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&te.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&te.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&te.instancingMorph===!1&&et.morphTexture!==null||te.envMap!==Wt||ot.fog===!0&&te.fog!==Pt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==It.numPlanes||te.numIntersection!==It.numIntersection)||te.vertexAlphas!==Qt||te.vertexTangents!==ne||te.morphTargets!==Jt||te.morphNormals!==ae||te.morphColors!==ze||te.toneMapping!==sn||te.morphTargetsCount!==Be)&&(he=!0):(he=!0,te.__version=ot.version);let Pn=te.currentProgram;he===!0&&(Pn=Oa(ot,K,et));let na=!1,zn=!1,Si=!1;const Ge=Pn.getUniforms(),In=te.uniforms;if(jt.useProgram(Pn.program)&&(na=!0,zn=!0,Si=!0),ot.id!==ut&&(ut=ot.id,zn=!0),na||ft!==C){jt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ge.setValue(X,"projectionMatrix",C.projectionMatrix),Ge.setValue(X,"viewMatrix",C.matrixWorldInverse);const Bn=Ge.map.cameraPosition;Bn!==void 0&&Bn.setValue(X,ue.setFromMatrixPosition(C.matrixWorld)),Ne.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),ft!==C&&(ft=C,zn=!0,Si=!0)}if(te.needsLights&&(Ie.state.directionalShadowMap.length>0&&Ge.setValue(X,"directionalShadowMap",Ie.state.directionalShadowMap,Z),Ie.state.spotShadowMap.length>0&&Ge.setValue(X,"spotShadowMap",Ie.state.spotShadowMap,Z),Ie.state.pointShadowMap.length>0&&Ge.setValue(X,"pointShadowMap",Ie.state.pointShadowMap,Z)),et.isSkinnedMesh){Ge.setOptional(X,et,"bindMatrix"),Ge.setOptional(X,et,"bindMatrixInverse");const Fn=et.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ge.setValue(X,"boneTexture",Fn.boneTexture,Z))}et.isBatchedMesh&&(Ge.setOptional(X,et,"batchingTexture"),Ge.setValue(X,"batchingTexture",et._matricesTexture,Z),Ge.setOptional(X,et,"batchingIdTexture"),Ge.setValue(X,"batchingIdTexture",et._indirectTexture,Z),Ge.setOptional(X,et,"batchingColorTexture"),et._colorsTexture!==null&&Ge.setValue(X,"batchingColorTexture",et._colorsTexture,Z));const Tn=ht.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&fe.update(et,ht,Pn),(zn||te.receiveShadow!==et.receiveShadow)&&(te.receiveShadow=et.receiveShadow,Ge.setValue(X,"receiveShadow",et.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(In.envMap.value=Wt,In.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(In.envMapIntensity.value=K.environmentIntensity),In.dfgLUT!==void 0&&(In.dfgLUT.value=jA()),zn&&(Ge.setValue(X,"toneMappingExposure",A.toneMappingExposure),te.needsLights&&eo(In,Si),Pt&&ot.fog===!0&&ie.refreshFogUniforms(In,Pt),ie.refreshMaterialUniforms(In,ot,yt,rt,O.state.transmissionRenderTarget[C.id]),Jc.upload(X,fl(te),In,Z)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Jc.upload(X,fl(te),In,Z),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(X,"center",et.center),Ge.setValue(X,"modelViewMatrix",et.modelViewMatrix),Ge.setValue(X,"normalMatrix",et.normalMatrix),Ge.setValue(X,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Fn=ot.uniformsGroups;for(let Bn=0,Zs=Fn.length;Bn<Zs;Bn++){const Ni=Fn[Bn];ct.update(Ni,Pn),ct.bind(Ni,Pn)}}return Pn}function eo(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Pa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,K,ht){const ot=b.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=K,b.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ht=b.get(C);ht.__webglFramebuffer=K,ht.__useDefaultFramebuffer=K===void 0};const za=X.createFramebuffer();this.setRenderTarget=function(C,K=0,ht=0){J=C,k=K,Y=ht;let ot=null,et=!1,Pt=!1;if(C){const Ft=b.get(C);if(Ft.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(X.FRAMEBUFFER,Ft.__webglFramebuffer),F.copy(C.viewport),G.copy(C.scissor),st=C.scissorTest,jt.viewport(F),jt.scissor(G),jt.setScissorTest(st),ut=-1;return}else if(Ft.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(Ft.__hasExternalTextures)Z.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ne=C.depthTexture;if(Ft.__boundDepthTexture!==ne){if(ne!==null&&b.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const Qt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[K])?ot=Qt[K][ht]:ot=Qt[K],et=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?ot=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?ot=Qt[ht]:ot=Qt,F.copy(C.viewport),G.copy(C.scissor),st=C.scissorTest}else F.copy(tt).multiplyScalar(yt).floor(),G.copy(gt).multiplyScalar(yt).floor(),st=Ut;if(ht!==0&&(ot=za),jt.bindFramebuffer(X.FRAMEBUFFER,ot)&&jt.drawBuffers(C,ot),jt.viewport(F),jt.scissor(G),jt.setScissorTest(st),et){const Ft=b.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,ht)}else if(Pt){const Ft=K;for(let Wt=0;Wt<C.textures.length;Wt++){const Qt=b.get(C.textures[Wt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Wt,Qt.__webglTexture,ht,Ft)}}else if(C!==null&&ht!==0){const Ft=b.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ft.__webglTexture,ht)}ut=-1},this.readRenderTargetPixels=function(C,K,ht,ot,et,Pt,Vt,Ft=0){if(!(C&&C.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){jt.bindFramebuffer(X.FRAMEBUFFER,Wt);try{const Qt=C.textures[Ft],ne=Qt.format,Jt=Qt.type;if(!Ne.textureFormatReadable(ne)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Jt)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ot&&ht>=0&&ht<=C.height-et&&(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ft),X.readPixels(K,ht,ot,et,$.convert(ne),$.convert(Jt),Pt))}finally{const Qt=J!==null?b.get(J).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ht,ot,et,Pt,Vt,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt)if(K>=0&&K<=C.width-ot&&ht>=0&&ht<=C.height-et){jt.bindFramebuffer(X.FRAMEBUFFER,Wt);const Qt=C.textures[Ft],ne=Qt.format,Jt=Qt.type;if(!Ne.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ae),X.bufferData(X.PIXEL_PACK_BUFFER,Pt.byteLength,X.STREAM_READ),C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ft),X.readPixels(K,ht,ot,et,$.convert(ne),$.convert(Jt),0);const ze=J!==null?b.get(J).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,ze);const sn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await uM(X,sn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ae),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Pt),X.deleteBuffer(ae),X.deleteSync(sn),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ht=0){const ot=Math.pow(2,-ht),et=Math.floor(C.image.width*ot),Pt=Math.floor(C.image.height*ot),Vt=K!==null?K.x:0,Ft=K!==null?K.y:0;Z.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ht,0,0,Vt,Ft,et,Pt),jt.unbindTexture()};const xs=X.createFramebuffer(),Ia=X.createFramebuffer();this.copyTextureToTexture=function(C,K,ht=null,ot=null,et=0,Pt=null){Pt===null&&(et!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=et,et=0):Pt=0);let Vt,Ft,Wt,Qt,ne,Jt,ae,ze,sn;const $e=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(ht!==null)Vt=ht.max.x-ht.min.x,Ft=ht.max.y-ht.min.y,Wt=ht.isBox3?ht.max.z-ht.min.z:1,Qt=ht.min.x,ne=ht.min.y,Jt=ht.isBox3?ht.min.z:0;else{const Tn=Math.pow(2,-et);Vt=Math.floor($e.width*Tn),Ft=Math.floor($e.height*Tn),C.isDataArrayTexture?Wt=$e.depth:C.isData3DTexture?Wt=Math.floor($e.depth*Tn):Wt=1,Qt=0,ne=0,Jt=0}ot!==null?(ae=ot.x,ze=ot.y,sn=ot.z):(ae=0,ze=0,sn=0);const Be=$.convert(K.format),te=$.convert(K.type);let Ie;K.isData3DTexture?(Z.setTexture3D(K,0),Ie=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Z.setTexture2DArray(K,0),Ie=X.TEXTURE_2D_ARRAY):(Z.setTexture2D(K,0),Ie=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const he=X.getParameter(X.UNPACK_ROW_LENGTH),Pn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),na=X.getParameter(X.UNPACK_SKIP_PIXELS),zn=X.getParameter(X.UNPACK_SKIP_ROWS),Si=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,$e.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$e.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ne),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Jt);const Ge=C.isDataArrayTexture||C.isData3DTexture,In=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Tn=b.get(C),Fn=b.get(K),Bn=b.get(Tn.__renderTarget),Zs=b.get(Fn.__renderTarget);jt.bindFramebuffer(X.READ_FRAMEBUFFER,Bn.__webglFramebuffer),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Ni=0;Ni<Wt;Ni++)Ge&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(C).__webglTexture,et,Jt+Ni),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(K).__webglTexture,Pt,sn+Ni)),X.blitFramebuffer(Qt,ne,Vt,Ft,ae,ze,Vt,Ft,X.DEPTH_BUFFER_BIT,X.NEAREST);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(et!==0||C.isRenderTargetTexture||b.has(C)){const Tn=b.get(C),Fn=b.get(K);jt.bindFramebuffer(X.READ_FRAMEBUFFER,xs),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ia);for(let Bn=0;Bn<Wt;Bn++)Ge?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Tn.__webglTexture,et,Jt+Bn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Tn.__webglTexture,et),In?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Fn.__webglTexture,Pt,sn+Bn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Fn.__webglTexture,Pt),et!==0?X.blitFramebuffer(Qt,ne,Vt,Ft,ae,ze,Vt,Ft,X.COLOR_BUFFER_BIT,X.NEAREST):In?X.copyTexSubImage3D(Ie,Pt,ae,ze,sn+Bn,Qt,ne,Vt,Ft):X.copyTexSubImage2D(Ie,Pt,ae,ze,Qt,ne,Vt,Ft);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else In?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Ie,Pt,ae,ze,sn,Vt,Ft,Wt,Be,te,$e.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Ie,Pt,ae,ze,sn,Vt,Ft,Wt,Be,$e.data):X.texSubImage3D(Ie,Pt,ae,ze,sn,Vt,Ft,Wt,Be,te,$e):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Pt,ae,ze,Vt,Ft,Be,te,$e.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Pt,ae,ze,$e.width,$e.height,Be,$e.data):X.texSubImage2D(X.TEXTURE_2D,Pt,ae,ze,Vt,Ft,Be,te,$e);X.pixelStorei(X.UNPACK_ROW_LENGTH,he),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,na),X.pixelStorei(X.UNPACK_SKIP_ROWS,zn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Si),Pt===0&&K.generateMipmaps&&X.generateMipmap(Ie),jt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),jt.unbindTexture()},this.resetState=function(){k=0,Y=0,J=null,jt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Sv={type:"change"},bp={type:"start"},fx={type:"end"},Wc=new lu,yv=new ds,KA=Math.cos(70*hM.DEG2RAD),Rn=new j,li=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ad=1e-6;class QA extends $M{constructor(t,i=null){super(t,i),this.state=je.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Ua,this._lastTargetPosition=new j,this._quat=new Ua().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new j_,this._sphericalDelta=new j_,this._scale=1,this._panOffset=new j,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new j,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$A.bind(this),this._onPointerDown=JA.bind(this),this._onPointerUp=tR.bind(this),this._onContextMenu=oR.bind(this),this._onMouseWheel=iR.bind(this),this._onKeyDown=aR.bind(this),this._onTouchStart=sR.bind(this),this._onTouchMove=rR.bind(this),this._onMouseDown=eR.bind(this),this._onMouseMove=nR.bind(this),this._interceptControlDown=lR.bind(this),this._interceptControlUp=cR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sv),this.update(),this.state=je.NONE}update(t=null){const i=this.object.position;Rn.copy(i).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=li:s>Math.PI&&(s-=li),l<-Math.PI?l+=li:l>Math.PI&&(l-=li),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Rn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<KA?this.object.lookAt(this.target):(yv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(yv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ad||this._lastTargetPosition.distanceToSquared(this.target)>ad?(this.dispatchEvent(Sv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?li/60*this.autoRotateSpeed*t:li/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Rn.setFromMatrixColumn(i,0),Rn.multiplyScalar(-t),this._panOffset.add(Rn)}_panUp(t,i){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(i,1):(Rn.setFromMatrixColumn(i,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(t),this._panOffset.add(Rn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Rn.copy(l).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(li*this._rotateDelta.x/i.clientHeight),this._rotateUp(li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(li*this._rotateDelta.x/i.clientHeight),this._rotateUp(li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new pe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function JA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function $A(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function tR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fx),this.state=je.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function eR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(bp)}function nR(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function iR(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent(bp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(fx))}function aR(r){this.enabled!==!1&&this._handleKeyDown(r)}function sR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(bp)}function rR(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function oR(r){this.enabled!==!1&&r.preventDefault()}function lR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uR(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function Qr(r){if(!uR(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function Mv(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Vr(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function La(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function js(r){return Math.sqrt(gn(r,r))}function fR(r,t){return r.map(i=>i*t)}function Nn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function hx(r){const t=js(r);return fR(r,1/t)}function ul(r){const t=js(r);return Nn(r,1/t)}function gn(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function gs(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function hR(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=gn(t,r),f=gs(t,r);return r[0]=r[0]*s+f[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+f[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+f[2]*l+t[2]*c*(1-s),r}function dR(r,t){const i=ul(Vr([...t],Nn([...r],-gn(t,r))));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=gs(r,i),l=[r,i,s];return f=>Qr(l.map(d=>gn(d,f)))}let dx=0;function pR(){dx=0}function Tp(r={}){return{id:r.id??dx++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],moment:r.moment?[...r.moment]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0],fixed:r.fixed??!1}}function du(r,t){return{...r,...t}}function mR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(d=>d.id===t),l=r.find(d=>d.id===i);if(!s||!l)return;const c=dR(ul([...s.moment]),La(s.pos,l.pos));if(!c)return;const f=s.pos;return r.map(d=>du(d,{pos:c(La(f,d.pos)),vel:c(d.vel??[0,0,0]),moment:c(d.moment),f:c(d.f??[0,0,0]),tau:c(d.tau??[0,0,0])}))}function gR(r,t){return r.map(i=>({...i,pos:Nn(i.pos,t)})).map(Tp)}function _R(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.join(", "),moment:c.moment.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function vR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const d=f.split(",").map(m=>parseFloat(m.trim()));if(d.length===3&&d.every(m=>!isNaN(m)))return d}return f};for(const f of t.magnets){const d={};for(const[m,p]of Object.entries(f))d[m]=c(p);Qr(d.pos),Qr(ul(d.moment)),l.push(d)}return{name:i,unit:s,magnets:l}}async function Ev(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:f}=vR(s),d={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in d))throw new Error(`Unknown unit in preset: ${c}`);const m=d[c];return{name:l||r,magnets:gR(f,m)}}catch{if(r in np){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=np[r]();return l.map(c=>Nn(c.pos,t)),{name:r,magnets:l.map(Tp)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function xR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(np).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const np={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:ul([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},px=4*Math.PI*1e-7;function SR(r,t,i,s,l){const c=js(l),f=hx(l),d=gn(i,f),m=gn(s,f),p=gn(i,s),g=4*Math.PI*px*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:d,q:m,r:p,K:g,m1:i,m2:s,d:l}}function yR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function MR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:d,m2:m}=r,p=t**4,g=3*f/p,_=5*s*l-c;return Nn([i[0]*_-d[0]*l-m[0]*s,i[1]*_-d[1]*l-m[1]*s,i[2]*_-d[2]*l-m[2]*s],g)}function ER(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:d}=r,m=c/t**3,p=Nn(Mv(Nn(gs(f,i),-3*l),gs(f,d)),-m),g=Nn(Mv(Nn(gs(d,i),-3*s),gs(d,f)),-m);return{tor1:p,tor2:g}}function bR(r,t,i,s,l){const c=SR(r,t,i,s,l),f=yR(c),d=MR(c),m=Nn([...d],-1),{tor1:p,tor2:g}=ER(c);return{U:f,force1:d,force2:m,torque1:p,torque2:g}}const TR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3,rollingFriction:.005};class AR{constructor(t={}){const i={...TR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.rollingFriction=i.rollingFriction,this.mMag=i.br/px,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function ip(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function bv(r,t,i,s){if(Math.abs(r)<1e-20)return ip(t,i,s);const l=t/r,c=i/r,f=s/r,d=l/3,m=c-l*l/3,p=f-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),y=Math.cbrt(-p/2-_);return[x+y-d]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,y=2*Math.cbrt(_);return[y*Math.cos(x)-d,y*Math.cos(x+2*Math.PI/3)-d,y*Math.cos(x+4*Math.PI/3)-d]}else{const _=Math.cbrt(-p/2);return[2*_-d,-_-d]}}function RR(r,t,i,s,l){if(Math.abs(r)<1e-20)return bv(t,i,s,l);const c=t/r,f=i/r,d=s/r,m=l/r,p=c/4,g=f-3*c*c/8,_=d-c*f/2+c*c*c/8,x=m-c*d/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const U=[];for(const L of ip(1,g,x))if(L>=-1e-12){const w=Math.sqrt(Math.max(0,L));U.push(w-p,-w-p)}return U}const y=bv(1,g/2,(g*g-4*x)/16,-_*_/64),E=Math.max(...y,1e-12),T=Math.sqrt(Math.max(E,0));if(T<1e-12)return[];const M=_/(4*T),v=[];for(const[U,L]of[[1,-M],[-1,M]])for(const w of ip(1,U*T,g/2+E+L))v.push(w-p);return v}function ap(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],d=r[c],m=La(f,d),p=js(m);p<=t&&i.push({i:l,j:c,normal:Nn(m,1/p),dist:p})}return i}function Tv(r,t,i,s=null,l=20,c=1e-7){const f=r.map(_=>[..._]),d=ap(f,t+i),m=t-i,p=t-i/2,g=s||r.map(()=>!1);for(let _=0;_<l;_++){let x=0;for(const{i:y,j:E}of d){const T=La(f[y],f[E]),M=js(T),v=Nn(T,1/M);let U=0;if(M<m?(U=p-M,x=Math.max(x,t-M)):M<t&&(U=(t-M)*.5,x=Math.max(x,t-M)),U>c){const L=f[y],w=f[E],O=+g[y]-+g[E],I=U*((1-O)*.5),N=U*((1+O)*.5);L[0]-=v[0]*I,L[1]-=v[1]*I,L[2]-=v[2]*I,w[0]+=v[0]*N,w[1]+=v[1]*N,w[2]+=v[2]*N}}if(x<c)break}return f}function CR(r,t,i,s,l=null,c=.3,f=1e-7){const d=l||r.map(()=>!1),m=t.map((x,y)=>d[y]?[0,0,0]:[...x]),p=i.map((x,y)=>d[y]?[0,0,0]:[...x]),g=mx(s,d),_=new Float64Array(s.length);if(g.length>0){const x=g.map(E=>s[E]);PR(p,x,d,f);const y=wR(m,p,x,d,c,5,f);g.forEach((E,T)=>{_[E]=y[T]})}return{constrainedForces:m,constrainedVel:p,forceLambda:_}}function mx(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function wR(r,t,i,s,l=.3,c=5,f=1e-7){const d=i.length,m=new Float64Array(d);if(d===0)return m;const p=i.map(U=>{const L=U.normal,[w,O]=LR(L);return[L,w,O]}),g=new Array(d).fill(!0),_=i.map((U,L)=>{const{i:w,j:O,normal:I}=U,N=La(t[O],t[w]),V=gn(N,I),A=[N[0]-I[0]*V,N[1]-I[1]*V,N[2]-I[2]*V],D=js(A);return D>f?(g[L]=!1,Nn(A,-1/D)):[0,0,0]}),x=r.map(U=>[...U]),y=i.map(()=>[0,0,0]);for(let U=0;U<c;U++){const{A:L,b:w,eqMap:O}=Cv(i,s,x,p,g),I=sp(L,w);if(!I)break;const N=Av(I,O,g);if(DR(N,g,l,f)){for(let V=0;V<d;V++){m[V]=N[V].fn;const A=Rv(p[V],N[V],g[V],y[V]);$c(r,i[V],A,s)}return m}r.forEach((V,A)=>{const D=x[A];D[0]=V[0],D[1]=V[1],D[2]=V[2]});for(let V=0;V<d;V++)g[V]||(UR(p[V],N[V],y[V],_[V],l,f),$c(x,i[V],y[V],s))}const{A:E,b:T,eqMap:M}=Cv(i,s,x,p,g),v=sp(E,T);if(v){const U=Av(v,M,g);for(let L=0;L<d;L++){m[L]=U[L].fn;const w=Rv(p[L],U[L],g[L],y[L]);$c(r,i[L],w,s)}}return m}function $c(r,t,i,s){const{i:l,j:c}=t;if(!s[l]){const f=r[l];f[0]+=i[0],f[1]+=i[1],f[2]+=i[2]}if(!s[c]){const f=r[c];f[0]-=i[0],f[1]-=i[1],f[2]-=i[2]}}function Av(r,t,i){return Array.from(t,(s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,d=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:d}})}function DR(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:d,ft2:m}=r[c],p=Math.sqrt(d*d+m*m),g=i*Math.abs(f);t[c]&&p>g+s?(t[c]=!1,l=!1):!t[c]&&p<=g-s}return l}function Rv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[d,m,p]=r,g=[l*d[0]+c*m[0]+f*p[0],l*d[1]+c*m[1]+f*p[1],l*d[2]+c*m[2]+f*p[2]];return i||Vr(g,s),g}function UR(r,t,i,s,l,c){const[f,d,m]=r,{fn:p,ft1:g,ft2:_}=t,x=l*Math.abs(p);if(s[0]!==0||s[1]!==0||s[2]!==0)i[0]=s[0]*x,i[1]=s[1]*x,i[2]=s[2]*x;else{const y=Math.sqrt(g*g+_*_);if(y>c){const E=x/y;i[0]=(g*d[0]+_*m[0])*E,i[1]=(g*d[1]+_*m[1])*E,i[2]=(g*d[2]+_*m[2])*E}else i[0]=0,i[1]=0,i[2]=0}}function LR(r){const t=Math.abs(r[0])<.9?[1,0,0]:[0,1,0],i=hx(gs(r,t)),s=gs(r,i);return[i,s]}function Cv(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let d=0;for(let y=0;y<c;y++)f[y]=d,d+=l[y]?3:1;const m=[],p=[],g=[],_=new Float64Array(d);for(let y=0;y<c;y++){const E=r[y],T=E.i,M=E.j,v=t[T]?0:1,U=t[M]?0:1,L=l[y]?3:1;for(let w=0;w<L;w++){const O=s[y][w],I=f[y]+w;_[I]=v*gn(i[T],O)-U*gn(i[M],O);for(let N=0;N<c;N++){const V=r[N],A=V.i,D=V.j,k=l[N]?3:1;for(let Y=0;Y<k;Y++){const J=s[N][Y],ut=f[N]+Y,ft=gn(O,J);let F=0;T===A&&(F-=v*ft),T===D&&(F+=v*ft),M===A&&(F+=U*ft),M===D&&(F-=U*ft),Math.abs(F)>1e-15&&(m.push(I),p.push(ut),g.push(F))}}}}return{A:gx(d,m,p,g),b:_,neq:d,eqMap:f}}function gx(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],d=new Int32Array(f),m=new Float64Array(f),p=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],x=c[_]+p[_];let y=!1;for(let E=c[_];E<x;E++)if(d[E]===i[g]){m[E]+=s[g],y=!0;break}y||(d[x]=i[g],m[x]=s[g],p[_]++)}return{n:r,rowPtr:c,colIdx:d,values:m}}function NR(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],d=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],x=_.i,y=_.j,E=_.normal,T=i[x]?0:1,M=i[y]?0:1;c[g]=T*gn(s[x],E)-M*gn(s[y],E);for(let v=0;v<l;v++){const U=r[t[v]],L=U.i,w=U.j,O=U.normal,I=gn(E,O);let N=0;x===L&&(N-=T*I),x===w&&(N+=T*I),y===L&&(N+=M*I),y===w&&(N-=M*I),Math.abs(N)>1e-15&&(f.push(g),d.push(v),m.push(N))}}return{A:gx(l,f,d,m),b:c}}function sp(r,t){const i=r.n,s=Array.from({length:i},()=>new Float64Array(i));for(let f=0;f<i;f++)for(let d=r.rowPtr[f];d<r.rowPtr[f+1];d++)s[f][r.colIdx[d]]=r.values[d];const l=new Float64Array(t);for(let f=0;f<i;f++){let d=Math.abs(s[f][f]),m=f;for(let g=f+1;g<i;g++){const _=Math.abs(s[g][f]);_>d&&(d=_,m=g)}if(d<1e-12)return null;if(m!==f){const g=s[f];s[f]=s[m],s[m]=g;const _=l[f];l[f]=l[m],l[m]=_}const p=s[f][f];for(let g=f+1;g<i;g++){const _=s[g][f]/p;s[g][f]=0;for(let x=f+1;x<i;x++)s[g][x]-=_*s[f][x];l[g]-=_*l[f]}}const c=new Float64Array(i);for(let f=i-1;f>=0;f--){let d=l[f];for(let m=f+1;m<i;m++)d-=s[f][m]*c[m];c[f]=d/s[f][f]}return c}function OR(r,t,i,s,l,c,f){for(let d=0;d<i.length;d++){const m=l[d],p=i[d];Math.abs(m)<f||$c(r,t[p],Nn(t[p].normal,m),s)}}function PR(r,t,i,s=1e-7){if(t.length===0)return r;const l=mx(t,i);if(l.length===0)return r;const{A:c,b:f}=NR(t,l,i,r),d=sp(c,f);return d&&OR(r,t,l,i,d,null,s),r}function zR(r,t,i,s,l,c,f=1e-7){const d=La(i,s),m=Nn(d,.5),p=gn(r,r)-l*l;if(p<=0)return 0;const g=2*gn(r,t),_=2*gn(r,m)+gn(t,t),x=2*gn(t,m),y=gn(m,m),E=RR(y,x,_,g,p),T=(l*(1+f))**2;let M=null;for(const v of E)if(v>1e-12&&v<=c+1e-12){if(y*v*v*v*v+x*v*v*v+_*v*v+g*v+p+l*l>T)continue;(M===null||v<M)&&(M=v)}return M}function IR(r,t,i,s,l,c,f=null){if(c<1e-12)return{newPos:r.map(E=>[...E]),newVel:i.map(E=>[...E]),safedt:0,reason:"zero delta time"};const d=f||r.map(()=>!1),m=r.length,p=t.map((E,T)=>Nn(Qr([...E]),+!d[T]/s));let g=c,_="max delta time";for(let E=0;E<m;E++)for(let T=E+1;T<m;T++){if(d[E]&&d[T])continue;const M=La(r[E],r[T]),v=La(i[E],i[T]),U=zR(M,v,p[E],p[T],l,g);U!==null&&U<g&&(g=Math.max(U-1e-12,0),_=`collision between ${E} and ${T}`)}for(let E=0;E<m;E++)if(!d[E]){const T=l/2,M=i[E],v=p[E],U=Math.hypot(M[0],M[1],M[2]),L=Math.hypot(v[0],v[1],v[2]);let w;if(L>1e-12)w=(-U+Math.sqrt(U*U+2*L*T))/L;else if(U>1e-12)w=T/U;else continue;w<g&&(g=w,_=`max movement of ${E}`)}const x=r.map((E,T)=>{if(d[T])return[...E];const M=g,v=.5*g*g,U=i[T],L=p[T];return[E[0]+U[0]*M+L[0]*v,E[1]+U[1]*M+L[1]*v,E[2]+U[2]*M+L[2]*v]}),y=i.map((E,T)=>{if(d[T])return[0,0,0];const M=g,v=p[T];return[E[0]+v[0]*M,E[1]+v[1]*M,E[2]+v[2]*M]});return{newPos:x,newVel:y,safedt:g,reason:_}}function FR(r,t,i,s,l){return t.map((f,d)=>{const m=r[d],p=f.moment,g=f.omega,_=BR(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function BR(r,t,i,s,l,c=.3){const f=Nn([...i],1/l),m=gn(i,t)<0?c:1,p=[t[0]*m+f[0]*s,t[1]*m+f[1]*s,t[2]*m+f[2]*s],g=js(p);if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),x=Nn([...p],1/g),y=hR([...r],x,_);return{moment:ul(y),omega:p}}function HR(r,t,i){return()=>(r.current=new GR(i),t(!0),()=>{})}class GR{constructor(t=.0025){this.params=new AR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>[0,0,0]),f=t.map(()=>[0,0,0]),d=t.map(()=>new Map);for(let m=0;m<l;m++)for(let p=m+1;p<l;p++){const g=bR(i,s,t[m].moment,t[p].moment,La(t[m].pos,t[p].pos));Vr(c[m],g.force1),Vr(c[p],g.force2),Vr(f[m],g.torque1),Vr(f[p],g.torque2),d[m].set(`M#${p}`,g.force1),d[p].set(`M#${m}`,g.force2)}return{coforces:c,torques:f,forces:d}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(w=>!!w.fixed),f=t.map(w=>w.pos),d=Tv(f,l,this.params.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((w,O)=>({pos:d[O],moment:w.moment})),this.params.radius,this.params.mMag);if(s){const w=this.params.gravity;m.forEach((O,I)=>{if(!c[I]){const N=w*this.params.mass;O[1]+=N,g[I].set("Gravity",[0,N,0])}})}const _=ap(d,l+this.params.shellThickness),{constrainedForces:x,constrainedVel:y}=CR(d,m,t.map(w=>w.vel),_,c,this.params.rollingFriction),{newPos:E,newVel:T,safedt:M,reason:v}=IR(d,x,y,this.params.mass,l-this.params.shellThickness,i,c),U=Tv(E,l,this.params.shellThickness,c);ap(U,l+this.params.shellThickness).map(w=>{if(w.dist<this.params.radius)throw new Error(`球${w.i}-球${w.j}重叠过深: dist=${(w.dist*1e3).toFixed(4)}mm`)});const L=FR(p,t.map(w=>({moment:w.moment,omega:w.omega})),M,this.params.inertia,.3);return{newMagnets:t.map((w,O)=>du(w,{pos:U[O],vel:T[O],f:x[O],tau:p[O],moment:L[O].moment,omega:L[O].omega})),safedt:M,forces:g,reason:v}}}function VR({getMagnets:r,setMagnets:t,selectedId:i,onApplySnap:s}){const l=re.useRef([]),c=re.useRef(-1),f=p=>p.map(g=>({...g,pos:[...g.pos],vel:[...g.vel],moment:[...g.moment]})),d=re.useCallback(p=>{const g=l.current;if(g.length>0){const _=g[g.length-1];if(kR(_,p))return}g.push(f(p)),g.length>100&&g.shift(),c.current=-1},[]),m=re.useCallback(()=>{l.current=[],c.current=-1},[]);return re.useEffect(()=>{const p=g=>{if(g.key!=="ArrowUp"&&g.key!=="ArrowDown")return;g.preventDefault();const _=l.current;if(_.length!==0)if(g.key==="ArrowUp"){if(c.current===-1)_.push(f(r())),c.current=_.length-2;else if(c.current>0)c.current--;else return;s(_[c.current])}else{if(c.current===-1)return;if(c.current++,c.current>=_.length-1){const x=_.pop();c.current=-1,s(x)}else s(_[c.current])}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,s,i]),{push:d,reset:m,histIdxRef:c}}function kR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const d=s[f],m=l[f];if(Array.isArray(d)&&Array.isArray(m)){if(d.length!==m.length||d.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(d!==m)return!1}}return!0}const XR=32,sd=.1;function WR(r,t,i,s,l,c,f,d,m,p,g,_,x,y){const E=re.useRef(null),T=re.useRef(""),M=re.useCallback(()=>{const{magnets:v,isSimulating:U,simSpeed:L,useGravity:w}=t.current,O=r.current;if(!U||!O||v.length<2)return;const{newMagnets:I,safedt:N,reason:V}=O.step(v,L,w);T.current=`${N*1e3}ms (${V})`,x(Y=>Y+N);const A=new Map(v.map((Y,J)=>[Y.id,J])),D=I.map((Y,J)=>du(v[A.get(Y.id)],{...Y,pos:Qr(Y.pos.map(ut=>{if(Math.abs(ut)>sd)throw new Error(`球${J}超出边界: ${Y.pos.map(ft=>(ft*1e3).toFixed(1)).join(",")}mm`);return Math.max(Math.min(ut,sd),-sd)}))}));g(D),m.current=!0;const k=p.current;if(k.size===1){const Y=D.find(J=>k.has(J.id));Y&&_(J=>J&&{...J,m_pos:Y.pos.map(ut=>ut*1e3).map(y),m_vel:(Y.vel??[0,0,0]).map(ut=>ut*1e3).map(y),moment:Y.moment.map(y),f:(Y.f??[0,0,0]).map(y),tau:(Y.tau??[0,0,0]).map(y)})}},[t,r,m,p,g,_,x,y]);return re.useEffect(()=>{const v=s.current,U=l.current,L=c.current,w=f.current,O=d.current;if(!v||!U||!L||!w||!i)return;let I=performance.now();const N=V=>{E.current=requestAnimationFrame(N),V-I>XR&&(M(),I=V),O==null||O.update(),w.render(U,L)};return E.current=requestAnimationFrame(N),()=>{cancelAnimationFrame(E.current)}},[i,M,s,l,c,f,d]),{stepDeltaTimeRef:T}}const Xn={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},qR={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},YR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},jR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},ZR=["X","Y","Z"];function tl({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return At.jsxs("div",{children:[At.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),At.jsx("div",{style:jR,children:ZR.map((d,m)=>{var p;return At.jsx("input",{placeholder:d,disabled:!s,style:{...YR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const y={...x,[r]:[...x[r]]};return y[r][m]=_,y})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},d)})})]})}function KR({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,rotateMoments:l,useGravity:c,magnets:f,selectedId:d,refYId:m,setRefYId:p,onToggle:g,onResetVel:_,onPerturb:x,onReframe:y,onSimSpeedChange:E,onRotateMomentsChange:T,onGravityChange:M}){return At.jsxs("div",{style:{padding:"12px",background:r?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${r?"#2a4a2a":"#2a2a4a"}`},children:[At.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),At.jsx("button",{onClick:g,style:{width:"100%",padding:"12px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),At.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[At.jsx("button",{onClick:_,style:Xn,children:"重置速度"}),At.jsx("button",{onClick:x,style:Xn,children:"扰动位置"})]}),At.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:At.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[At.jsxs("select",{value:m??"",onChange:v=>p(v.target.value===""?null:parseInt(v.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[At.jsx("option",{value:"",children:"— y 方向参考球 —"}),f.map(v=>At.jsxs("option",{value:v.id,children:["球 #",v.id]},v.id))]}),At.jsx("button",{onClick:y,disabled:d===null||m===null||d===m,style:{...Xn,opacity:d!==null&&m!==null&&d!==m?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),At.jsxs("div",{style:{marginTop:"10px"},children:[At.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),At.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),At.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),At.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:v=>E(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(v.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),At.jsx(wv,{label:"允许磁矩旋转",checked:l,onChange:T}),At.jsx(wv,{label:"重力 (y 方向)",checked:c,onChange:M})]})}function QR({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:f,onRemove:d,onCommit:m}){const p={draft:s,setDraft:l,onCommit:m};return At.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[At.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[At.jsxs("button",{disabled:!0,style:{...Xn,flex:1,opacity:1},children:["选中磁球 #",r]}),At.jsx("button",{onClick:c,style:{...Xn,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),At.jsx("button",{onClick:f,style:{...Xn,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),At.jsx("button",{onClick:d,style:{...Xn,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),At.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",At.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&At.jsxs(At.Fragment,{children:[At.jsx(tl,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...p}),At.jsx(tl,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...p}),At.jsx(tl,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...p}),At.jsx(tl,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...p}),At.jsx(tl,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...p})]})]})}function wv({label:r,checked:t,onChange:i}){return At.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[At.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),At.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}const rd=100,Dv=3;function JR(r,t,i){if(!t||!i)return 0;const s=r??new j(0,0,0),l=t.position.distanceTo(s),c=t.fov*Math.PI/180;return i.domElement.height/(2*l*Math.tan(c/2))}function $R(r){const t=new j(0,0,0),i=r.length;return i===0||(r.forEach(s=>{t.add(new j(s.pos[0],s.pos[1],s.pos[2]))}),t.divideScalar(i)),t}function t2(){const t=.0025*rd,[i,s]=re.useState([]),[l,c]=re.useState(new Set),[f,d]=re.useState(null),[m,p]=re.useState(!1),[g,_]=re.useState(4e-5),[x,y]=re.useState(!0),[E,T]=re.useState(!0),[M,v]=re.useState(!0),[U,L]=re.useState(0),[w,O]=re.useState(null),[I,N]=re.useState([]),[V,A]=re.useState(!1),[D,k]=re.useState({}),[Y,J]=re.useState(null),[ut,ft]=re.useState(""),F=re.useRef(null),G=re.useRef(null),st=re.useRef(null),Tt=re.useRef(null),bt=re.useRef(null),z=re.useRef([]),rt=re.useRef([]),yt=re.useRef([]),wt=re.useRef([]),Gt=re.useRef([]),tt=re.useRef(!0),gt=re.useRef(new Set);gt.current=l;const Ut=re.useRef({magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:E});Ut.current={magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:E};const Xt=re.useRef(null);re.useEffect(HR(Xt,A,.0025),[]);const Ht=H=>(H==null?void 0:H.toFixed(6))??"N/A",xe=H=>({m_pos:H.pos.map($=>$*1e3).map(Ht),m_vel:H.vel.map($=>$*1e3).map(Ht),moment:H.moment.map(Ht),f:(H.f??[0,0,0]).map(Ht),tau:(H.tau??[0,0,0]).map(Ht)});re.useEffect(()=>{xR().then(H=>(N(H),Ev(H[0],.0025))).then(H=>s(H.magnets)).catch(console.error)},[]);const Re=l.size===1?[...l][0]:null,ue=re.useCallback(()=>{const H=new Set(l);if(Y&&D[Y])for(const $ of D[Y])H.add($);return H},[l,Y,D]),{push:ce,reset:De,histIdxRef:oe}=VR({getMagnets:()=>Ut.current.magnets,setMagnets:s,selectedId:Re,onApplySnap:H=>{tt.current=!0,s(H);const $=H.find(mt=>mt.id===Re);$&&O(xe($))}}),{stepDeltaTimeRef:nn}=WR(Xt,Ut,V,F,G,st,Tt,bt,tt,gt,s,O,L,Ht),X=re.useCallback((H,$,mt)=>{for(const it of H){if(!$.has(it.id))continue;const _t=it.pos.map((Dt,kt)=>Dt+mt[kt]);for(const Dt of H){if(Dt.id===it.id||$.has(Dt.id))continue;const kt=_t[0]-Dt.pos[0],Ot=_t[1]-Dt.pos[1],Kt=_t[2]-Dt.pos[2];if(Math.sqrt(kt*kt+Ot*Ot+Kt*Kt)<.004995)return!1}}return!0},[.0025]),Ze=re.useCallback((H,$,mt,ct,it)=>{const Dt=new Ua().setFromAxisAngle(ct,it),kt=new Map;for(const Ot of H)if($.has(Ot.id)){const Kt=new j(...Ot.pos).sub(mt);Kt.applyQuaternion(Dt).add(mt),kt.set(Ot.id,[Kt.x,Kt.y,Kt.z])}for(const[Ot,Kt]of kt)for(const ge of H){if(ge.id===Ot||$.has(ge.id))continue;const He=Kt[0]-ge.pos[0],cn=Kt[1]-ge.pos[1],an=Kt[2]-ge.pos[2];if(Math.sqrt(He*He+cn*cn+an*an)<.004995)return!1}return!0},[.0025]);re.useEffect(()=>{const H=F.current;if(!H||!V)return;let $=H.clientWidth||800,mt=H.clientHeight||600;const ct=new zM;ct.background=new we(657941),G.current=ct;const it=new Ui(50,$/mt,.1,1e3);it.position.set(0,0,12),st.current=it;const _t=new ZA({antialias:!0});_t.setSize($,mt),_t.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.appendChild(_t.domElement),Tt.current=_t;const Dt=new QA(it,_t.domElement);Dt.enableDamping=!0,Dt.dampingFactor=.05,Dt.rotateSpeed=.5,Dt.zoomSpeed=.8,Dt.panSpeed=.5,Dt.minDistance=2,Dt.maxDistance=50,bt.current=Dt,ct.add(new ZM(16777215,.5));const kt=new W_(16777215,.8);kt.position.set(5,5,5),ct.add(kt);const Ot=new W_(4482815,.3);Ot.position.set(-5,-5,-5),ct.add(Ot);const Kt=new JM(16,16,3355477,2236979);Kt.rotation.x=Math.PI/2,ct.add(Kt);const ge=()=>{const He=H.clientWidth||800,cn=H.clientHeight||600;it.aspect=He/cn,it.updateProjectionMatrix(),_t.setSize(He,cn)};return window.addEventListener("resize",ge),()=>{window.removeEventListener("resize",ge),Dt.dispose(),_t.dispose(),G.current=null,H.contains(_t.domElement)&&H.removeChild(_t.domElement)}},[V]),re.useEffect(()=>{const H=G.current;if(!H)return;const $=Ot=>{Ot&&(H.remove(Ot),Ot.geometry&&Ot.geometry.dispose(),Ot.material&&(Array.isArray(Ot.material)?Ot.material.forEach(Kt=>Kt.dispose()):Ot.material.dispose()),Ot.children&&Ot.children.forEach($))};[...z.current,...rt.current,...yt.current,...wt.current,...Gt.current].forEach($);const mt=new j(0,1,0),ct=[],it=[],_t=[],Dt=[],kt=[];i.forEach(Ot=>{const Kt=new Mp(t,32,32),ge=new XM({color:Ot.color,metalness:.8,roughness:.2,emissive:Ot.color,emissiveIntensity:.15}),He=new Li(Kt,ge);He.userData.id=Ot.id,H.add(He),ct.push(He);const cn=new su(t*1.12,.02,16,64),an=new cu({color:16777215,transparent:!0,opacity:.85,depthTest:!1}),dn=new Li(cn,an);if(dn.visible=!1,dn.renderOrder=999,H.add(dn),kt.push(dn),!M){it.push(null),_t.push(null),Dt.push(null);return}const _n=new Qh(mt,new j,t*3.6,16768256,t*.5,t*.3);H.add(_n),it.push(_n);const vn=new Qh(mt,new j,t,65535,t*.4,t*.24);vn.visible=!1,H.add(vn),_t.push(vn);const Ke=new Qh(mt,new j,t,16711935,t*.32,t*.2);Ke.visible=!1,H.add(Ke),Dt.push(Ke)}),z.current=ct,rt.current=it,yt.current=_t,wt.current=Dt,Gt.current=kt},[i.length,M,V]),re.useEffect(()=>{const H=st.current,$=Tt.current;if(!G.current||!H||!$)return;const mt=z.current,ct=rt.current,it=yt.current,_t=wt.current,Dt=Gt.current,kt=ue();i.forEach((Ot,Kt)=>{const ge=Ot.pos.map(Ke=>Ke*rd),He=new j(ge[0],ge[1],ge[2]),cn=mt[Kt];cn&&(cn.position.copy(He),cn.material.emissiveIntensity=kt.has(Ot.id)?.4:.15);const an=Dt[Kt];if(an){const Ke=kt.has(Ot.id);if(an.visible=Ke,Ke){an.position.copy(He),an.lookAt(H.position);const Dn=H.position.distanceTo(He),Je=H.fov*Math.PI/180,bn=$.domElement.height/(2*Dn*Math.tan(Je/2)),ti=Dv/bn,Na=t+ti*1.5,Oa=ti*.5;an.geometry.dispose(),an.geometry=new su(Na,Oa,8,64)}}if(!M)return;const dn=ct[Kt];if(dn){const Ke=new j(...Ot.moment).normalize();dn.position.copy(He),dn.setDirection(Ke),dn.setLength(t*3.6,t*.5,t*.3)}const _n=it[Kt];if(_n){const Ke=Ot.f?new j(...Ot.f).length():0;if(Ke>1e-25){_n.visible=!0;const Dn=new j(...Ot.f).normalize(),Je=t*Math.min(6,Math.max(.5,Math.log10(Ke+1e-10)+10));_n.position.copy(He),_n.setDirection(Dn),_n.setLength(Je,t*.4,t*.24)}else _n.visible=!1}const vn=_t[Kt];if(vn){const Ke=Ot.tau?new j(...Ot.tau).length():0;if(Ke>1e-25){vn.visible=!0;const Dn=new j(...Ot.tau).normalize(),Je=t*Math.min(5,Math.max(.4,Math.log10(Ke+1e-10)+8));vn.position.copy(He),vn.setDirection(Dn),vn.setLength(Je,t*.32,t*.2)}else vn.visible=!1}})},[i,l,Y,D,M,V]),re.useEffect(()=>{if(Re===null){O(null);return}const H=i.find($=>$.id===Re);O(H?xe(H):null)},[Re]);const ye=re.useRef(null),Ne=re.useCallback(H=>{if(Ut.current.isSimulating)return;const $=ue();if($.size===0)return;const mt=st.current;if(!mt)return;const ct=new j;mt.getWorldDirection(ct);const it=new j;it.crossVectors(ct,mt.up).normalize();const _t=new j;_t.crossVectors(it,ct).normalize();const Dt=$R(Ut.current.magnets.filter(ge=>$.has(ge.id))),kt=Dv/rd/JR(Dt,mt,Tt.current);let Ot=null,Kt=null;switch(H.key){case"ArrowRight":Ot=[it.x*kt,it.y*kt,it.z*kt];break;case"ArrowLeft":Ot=[-it.x*kt,-it.y*kt,-it.z*kt];break;case"ArrowUp":Ot=[_t.x*kt,_t.y*kt,_t.z*kt];break;case"ArrowDown":Ot=[-_t.x*kt,-_t.y*kt,-_t.z*kt];break;case"PageUp":Kt=it.clone().negate();break;case"PageDown":Kt=it.clone();break;case"Home":Kt=_t.clone().negate();break;case"End":Kt=_t.clone();break}if(Ot){H.preventDefault(),s(ge=>X(ge,$,Ot)?(tt.current=!0,ge.map(He=>$.has(He.id)?{...He,pos:He.pos.map((cn,an)=>cn+Ot[an])}:He)):ge);return}else if(Kt){H.preventDefault();const ge=Math.atan2(kt,.0025),He=Kt,cn=new Ua().setFromAxisAngle(He,ge);s(an=>Ze(an,$,Dt,He,ge)?(tt.current=!0,an.map(dn=>{if(!$.has(dn.id))return dn;const _n=new j(...dn.pos).sub(Dt).applyQuaternion(cn).add(Dt),vn=new j(...dn.moment).applyQuaternion(cn);return{...dn,pos:[_n.x,_n.y,_n.z],moment:[vn.x,vn.y,vn.z]}})):an)}},[ue,X,Ze,.0025]),jt=H=>{const $=F.current,mt=st.current;if(!$||!mt)return;const ct=$.getBoundingClientRect(),it=new pe((H.clientX-ct.left)/ct.width*2-1,-((H.clientY-ct.top)/ct.height)*2+1),_t=new QM;_t.setFromCamera(it,mt);const Dt=_t.intersectObjects(z.current),kt=Dt.length>0?Dt[0].object.userData.id:null;if(kt===null){!H.ctrlKey&&!H.metaKey&&c(new Set);return}H.ctrlKey||H.metaKey?c(Ot=>{const Kt=new Set(Ot);return Kt.has(kt)?Kt.delete(kt):Kt.add(kt),Kt}):c(new Set([kt]))},P=()=>{tt.current=!0,s(H=>[...H,Tp({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),L(0)},b=()=>{const H=ue();H.size!==0&&(tt.current=!0,s($=>$.filter(mt=>!H.has(mt.id))),k($=>{const mt={};for(const[ct,it]of Object.entries($)){const _t=new Set([...it].filter(Dt=>!H.has(Dt)));_t.size>0&&(mt[ct]=_t)}return mt}),c(new Set),L(0))},Z=H=>{var $;($=Xt.current)==null||$.reset(),De(),tt.current=!0,pR(),Ev(H,.0025).then(mt=>s(mt.magnets)),c(new Set),k({}),J(null),p(!1),L(0)},xt=(H,$,mt)=>{const ct=parseFloat(mt);if(isNaN(ct))return;const _t={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[H];if(!_t)return;const[Dt,kt]=_t;ce(i);const Ot=i.map(Kt=>{if(Kt.id!==Re)return Kt;const ge=[...Kt[Dt]??[0,0,0]];return ge[$]=ct*kt,{...Kt,[Dt]:ge}});ce(Ot),oe.current=-1,tt.current=!0,s(Ot),O(Kt=>{if(!Kt)return Kt;const ge={...Kt,[H]:[...Kt[H]]};return ge[H][$]=Ht(ct),ge})},Et=re.useCallback(H=>{const $=_R(i.map(mt=>({...mt,pos:mt.pos.map(ct=>ct/.0025)})),"exported","radius");if(H==="copy")navigator.clipboard.writeText($).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const mt=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([$],{type:"application/json"})),download:`magnets_${Date.now()}.json`});mt.click(),URL.revokeObjectURL(mt.href)}},[i]),pt=()=>{const H=mR(i,Re,f);H&&(ce(i),ce(H),tt.current=!0,s(H))},Zt=()=>{m||(tt.current=!0),p(H=>!H)},Lt=()=>{const H=ut.trim();!H||D[H]||l.size===0||(k($=>({...$,[H]:new Set(l)})),ft(""),J(H))},Yt=H=>{k($=>{const mt=new Set($[H]||[]);for(const ct of l)mt.add(ct);return{...$,[H]:mt}})},ie=H=>{k($=>{const mt=new Set([...$[H]||[]].filter(ct=>!l.has(ct)));if(mt.size===0){const ct={...$};return delete ct[H],Y===H&&J(null),ct}return{...$,[H]:mt}})},Rt=H=>{k($=>{const mt={...$};return delete mt[H],mt}),Y===H&&J(null)},Ct=H=>{if(Y===H){J(null);return}c(new Set(D[H]||[])),J(H),setTimeout(()=>{ye.current&&ye.current.focus()},0)},It=(H,$)=>{const mt=ue();if(mt.size===0)return;ce(i),tt.current=!0;const ct=i.map(it=>mt.has(it.id)?{...it,[H]:$}:it);ce(ct),oe.current=-1,s(ct)},zt={padding:"10px",background:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},Nt={fontSize:"11px",color:"#888",marginBottom:"6px"},fe={...Xn,padding:"2px 6px",fontSize:"10px",lineHeight:"1.2"};if(!V)return At.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:At.jsxs("div",{children:[At.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),At.jsx("div",{children:"Loading physics engine..."})]})});const q=ue();return At.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[At.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[At.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[At.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",At.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),At.jsx(KR,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:nn,totalSimTime:U,rotateMoments:x,useGravity:E,magnets:i,selectedId:Re,refYId:f,setRefYId:d,onToggle:Zt,onResetVel:()=>{tt.current=!0,s(H=>H.map($=>({...$,vel:[0,0,0],omega:[0,0,0]})))},onPerturb:()=>{tt.current=!0,s(H=>H.map($=>du($,{pos:Qr($.pos.map(mt=>mt+(Math.random()-.5)*.3*.0025))})))},onReframe:pt,onSimSpeedChange:_,onRotateMomentsChange:y,onGravityChange:T}),At.jsxs("div",{style:{display:"flex",gap:"8px"},children:[At.jsx("button",{onClick:P,style:{...Xn,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),At.jsx("button",{onClick:()=>Et("download"),style:{...Xn,flex:1},children:"⬇ 导出"}),At.jsx("button",{onClick:()=>Et("copy"),style:{...Xn,flex:1},children:"📋 复制"})]}),At.jsxs("div",{children:[At.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),At.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:I.map(H=>At.jsx("button",{onClick:()=>Z(H),style:qR,children:H},H))})]}),At.jsxs("div",{style:zt,children:[At.jsxs("div",{style:Nt,children:["选择 (",q.size,")",Y&&` · 「${Y}」`,At.jsx("span",{style:{fontSize:"10px",color:"#555",marginLeft:"4px"},children:"Ctrl+点击多选"})]}),l.size>0&&At.jsx("div",{style:{display:"flex",gap:"3px",flexWrap:"wrap",marginBottom:"6px"},children:[...l].map(H=>At.jsxs("span",{style:{padding:"0 5px",borderRadius:"3px",fontSize:"10px",background:"rgba(68,136,255,0.15)",border:"1px solid rgba(68,136,255,0.3)",color:"#8ab4f8"},children:["#",H]},H))}),q.size>0&&At.jsxs("button",{onClick:b,style:{...Xn,background:"#3a1a1a",borderColor:"#5a2a2a",width:"100%"},children:["🗑 删除 (",q.size,")"]}),At.jsx("div",{style:{fontSize:"10px",color:"#555",marginTop:"6px"},children:"↑↓←→ 移动 · Shift+↑↓ 前后 · PgUp/Home PgDn/End 旋转 · 选择分组后可用"})]}),At.jsxs("div",{style:zt,children:[At.jsxs("div",{style:Nt,children:["分组 ",At.jsx("span",{style:{color:"#555"},children:"（球可属于多组）"})]}),At.jsxs("div",{style:{display:"flex",gap:"4px",marginBottom:"6px"},children:[At.jsx("input",{value:ut,onChange:H=>ft(H.target.value),onKeyDown:H=>H.key==="Enter"&&Lt(),placeholder:"分组名…",style:{flex:1,padding:"3px 6px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"4px",color:"#e0e0e0",fontSize:"11px",outline:"none"}}),At.jsx("button",{onClick:Lt,disabled:!ut.trim()||l.size===0,style:{...Xn,opacity:!ut.trim()||l.size===0?.4:1},children:"+"})]}),Object.keys(D).length===0&&At.jsx("div",{style:{fontSize:"10px",color:"#555",fontStyle:"italic"},children:"选择球后创建分组"}),Object.entries(D).map(([H,$])=>At.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginBottom:"4px",flexWrap:"wrap"},children:[At.jsxs("span",{onClick:()=>Ct(H),style:{padding:"2px 8px",borderRadius:"10px",fontSize:"11px",cursor:"pointer",background:Y===H?"rgba(68,136,255,0.2)":"rgba(255,255,255,0.06)",border:`1px solid ${Y===H?"#4488ff":"rgba(255,255,255,0.12)"}`,color:Y===H?"#8ab4f8":"#aaa"},children:[H," ",At.jsxs("span",{style:{opacity:.5},children:["(",$.size,")"]})]}),l.size>0&&At.jsxs(At.Fragment,{children:[At.jsx("button",{onClick:()=>Yt(H),style:fe,title:"添加选中",children:"+"}),At.jsx("button",{onClick:()=>ie(H),style:fe,title:"移除选中",children:"−"})]}),At.jsx("button",{onClick:()=>Rt(H),style:{...fe,color:"#ff6b6b"},title:"删除组",children:"✕"})]},H))]}),q.size>1&&At.jsxs("div",{style:zt,children:[At.jsxs("div",{style:Nt,children:["批量修改 (",q.size,")"]}),At.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"4px"},children:"颜色"}),At.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[[16729156,4474111,4521796,16768256,16729343,4521983,16746496,8930559].map(H=>At.jsx("button",{onClick:()=>It("color",H),style:{width:"22px",height:"22px",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",background:`#${H.toString(16).padStart(6,"0")}`}},H)),At.jsx("input",{type:"color",onChange:H=>It("color",parseInt(H.target.value.slice(1),16)),style:{width:"22px",height:"22px",padding:0,border:"none",borderRadius:"4px",cursor:"pointer"}})]}),At.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[At.jsx("button",{onClick:()=>It("vel",[0,0,0]),style:Xn,children:"清零速度"}),At.jsx("button",{onClick:()=>It("omega",[0,0,0]),style:Xn,children:"清零角速度"}),At.jsx("button",{onClick:()=>{const H=ue();tt.current=!0,s($=>$.map(mt=>H.has(mt.id)?{...mt,fixed:!mt.fixed}:mt))},style:Xn,children:"切换固定"})]}),At.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"6px",marginBottom:"4px"},children:"磁矩方向"}),At.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[["+X",[1,0,0]],["−X",[-1,0,0]],["+Y",[0,1,0]],["−Y",[0,-1,0]],["+Z",[0,0,1]],["−Z",[0,0,-1]]].map(([H,$])=>At.jsx("button",{onClick:()=>{const mt=ue();ce(i),tt.current=!0;const ct=i.map(it=>{if(!mt.has(it.id))return it;const _t=Math.sqrt(it.moment[0]**2+it.moment[1]**2+it.moment[2]**2);return{...it,moment:$.map(Dt=>Dt*_t)}});ce(ct),oe.current=-1,s(ct)},style:Xn,children:H},H))})]}),Re!==null&&At.jsx(QR,{selectedId:Re,selectedMag:i.find(H=>H.id===Re),isSimulating:m,editDraft:w,setEditDraft:O,onToggle:Zt,onToggleFixed:()=>{tt.current=!0,s(H=>H.map($=>$.id===Re?{...$,fixed:!$.fixed}:$))},onRemove:b,onCommit:xt}),At.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[At.jsx("input",{type:"checkbox",checked:M,onChange:H=>v(H.target.checked),style:{accentColor:"#4488ff"}}),At.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),At.jsx("div",{ref:F,onClick:jt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer",position:"relative"},children:At.jsx("textarea",{ref:ye,onKeyDown:Ne,style:{position:"absolute",left:0,top:0,width:"1px",height:"1px",opacity:0,padding:0,border:"none",outline:"none",resize:"none",overflow:"hidden",pointerEvents:"none"},tabIndex:-1})})]})}Dy.createRoot(document.getElementById("root")).render(At.jsx(re.StrictMode,{children:At.jsx(t2,{})}));
