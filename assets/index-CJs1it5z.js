(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sh={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function Ay(){if(s_)return qo;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=i,qo.jsxs=i,qo}var r_;function Ry(){return r_||(r_=1,Sh.exports=Ay()),Sh.exports}var bt=Ry(),yh={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function Cy(){if(o_)return xe;o_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(z,st,vt){this.props=z,this.context=st,this.refs=M,this.updater=vt||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,st){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,st,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=v.prototype;function L(z,st,vt){this.props=z,this.context=st,this.refs=M,this.updater=vt||E}var D=L.prototype=new U;D.constructor=L,T(D,v.prototype),D.isPureReactComponent=!0;var O=Array.isArray;function F(){}var N={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function A(z,st,vt){var Dt=vt.ref;return{$$typeof:r,type:z,key:st,ref:Dt!==void 0?Dt:null,props:vt}}function w(z,st){return A(z.type,st,z.props)}function X(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function H(z){var st={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(vt){return st[vt]})}var Q=/\/+/g;function at(z,st){return typeof z=="object"&&z!==null&&z.key!=null?H(""+z.key):st.toString(36)}function lt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(F,F):(z.status="pending",z.then(function(st){z.status==="pending"&&(z.status="fulfilled",z.value=st)},function(st){z.status==="pending"&&(z.status="rejected",z.reason=st)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,st,vt,Dt,Xt){var it=typeof z;(it==="undefined"||it==="boolean")&&(z=null);var dt=!1;if(z===null)dt=!0;else switch(it){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(z.$$typeof){case r:case t:dt=!0;break;case g:return dt=z._init,I(dt(z._payload),st,vt,Dt,Xt)}}if(dt)return Xt=Xt(z),dt=Dt===""?"."+at(z,0):Dt,O(Xt)?(vt="",dt!=null&&(vt=dt.replace(Q,"$&/")+"/"),I(Xt,st,vt,"",function(kt){return kt})):Xt!=null&&(X(Xt)&&(Xt=w(Xt,vt+(Xt.key==null||z&&z.key===Xt.key?"":(""+Xt.key).replace(Q,"$&/")+"/")+dt)),st.push(Xt)),1;dt=0;var Rt=Dt===""?".":Dt+":";if(O(z))for(var jt=0;jt<z.length;jt++)Dt=z[jt],it=Rt+at(Dt,jt),dt+=I(Dt,st,vt,it,Xt);else if(jt=y(z),typeof jt=="function")for(z=jt.call(z),jt=0;!(Dt=z.next()).done;)Dt=Dt.value,it=Rt+at(Dt,jt++),dt+=I(Dt,st,vt,it,Xt);else if(it==="object"){if(typeof z.then=="function")return I(lt(z),st,vt,Dt,Xt);throw st=String(z),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return dt}function V(z,st,vt){if(z==null)return z;var Dt=[],Xt=0;return I(z,Dt,"","",function(it){return st.call(vt,it,Xt++)}),Dt}function nt(z){if(z._status===-1){var st=z._result;st=st(),st.then(function(vt){(z._status===0||z._status===-1)&&(z._status=1,z._result=vt)},function(vt){(z._status===0||z._status===-1)&&(z._status=2,z._result=vt)}),z._status===-1&&(z._status=0,z._result=st)}if(z._status===1)return z._result.default;throw z._result}var Et=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},yt={map:V,forEach:function(z,st,vt){V(z,function(){st.apply(this,arguments)},vt)},count:function(z){var st=0;return V(z,function(){st++}),st},toArray:function(z){return V(z,function(st){return st})||[]},only:function(z){if(!X(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return xe.Activity=_,xe.Children=yt,xe.Component=v,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=L,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,xe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},xe.cache=function(z){return function(){return z.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(z,st,vt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Dt=T({},z.props),Xt=z.key;if(st!=null)for(it in st.key!==void 0&&(Xt=""+st.key),st)!k.call(st,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&st.ref===void 0||(Dt[it]=st[it]);var it=arguments.length-2;if(it===1)Dt.children=vt;else if(1<it){for(var dt=Array(it),Rt=0;Rt<it;Rt++)dt[Rt]=arguments[Rt+2];Dt.children=dt}return A(z.type,Xt,Dt)},xe.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},xe.createElement=function(z,st,vt){var Dt,Xt={},it=null;if(st!=null)for(Dt in st.key!==void 0&&(it=""+st.key),st)k.call(st,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(Xt[Dt]=st[Dt]);var dt=arguments.length-2;if(dt===1)Xt.children=vt;else if(1<dt){for(var Rt=Array(dt),jt=0;jt<dt;jt++)Rt[jt]=arguments[jt+2];Xt.children=Rt}if(z&&z.defaultProps)for(Dt in dt=z.defaultProps,dt)Xt[Dt]===void 0&&(Xt[Dt]=dt[Dt]);return A(z,it,Xt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(z){return{$$typeof:h,render:z}},xe.isValidElement=X,xe.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:nt}},xe.memo=function(z,st){return{$$typeof:p,type:z,compare:st===void 0?null:st}},xe.startTransition=function(z){var st=N.T,vt={};N.T=vt;try{var Dt=z(),Xt=N.S;Xt!==null&&Xt(vt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(F,Et)}catch(it){Et(it)}finally{st!==null&&vt.types!==null&&(st.types=vt.types),N.T=st}},xe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},xe.use=function(z){return N.H.use(z)},xe.useActionState=function(z,st,vt){return N.H.useActionState(z,st,vt)},xe.useCallback=function(z,st){return N.H.useCallback(z,st)},xe.useContext=function(z){return N.H.useContext(z)},xe.useDebugValue=function(){},xe.useDeferredValue=function(z,st){return N.H.useDeferredValue(z,st)},xe.useEffect=function(z,st){return N.H.useEffect(z,st)},xe.useEffectEvent=function(z){return N.H.useEffectEvent(z)},xe.useId=function(){return N.H.useId()},xe.useImperativeHandle=function(z,st,vt){return N.H.useImperativeHandle(z,st,vt)},xe.useInsertionEffect=function(z,st){return N.H.useInsertionEffect(z,st)},xe.useLayoutEffect=function(z,st){return N.H.useLayoutEffect(z,st)},xe.useMemo=function(z,st){return N.H.useMemo(z,st)},xe.useOptimistic=function(z,st){return N.H.useOptimistic(z,st)},xe.useReducer=function(z,st,vt){return N.H.useReducer(z,st,vt)},xe.useRef=function(z){return N.H.useRef(z)},xe.useState=function(z){return N.H.useState(z)},xe.useSyncExternalStore=function(z,st,vt){return N.H.useSyncExternalStore(z,st,vt)},xe.useTransition=function(){return N.H.useTransition()},xe.version="19.2.3",xe}var l_;function lp(){return l_||(l_=1,yh.exports=Cy()),yh.exports}var ne=lp(),Mh={exports:{}},Yo={},Eh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function wy(){return c_||(c_=1,(function(r){function t(I,V){var nt=I.length;I.push(V);t:for(;0<nt;){var Et=nt-1>>>1,yt=I[Et];if(0<l(yt,V))I[Et]=V,I[nt]=yt,nt=Et;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var V=I[0],nt=I.pop();if(nt!==V){I[0]=nt;t:for(var Et=0,yt=I.length,z=yt>>>1;Et<z;){var st=2*(Et+1)-1,vt=I[st],Dt=st+1,Xt=I[Dt];if(0>l(vt,nt))Dt<yt&&0>l(Xt,vt)?(I[Et]=Xt,I[Dt]=nt,Et=Dt):(I[Et]=vt,I[st]=nt,Et=st);else if(Dt<yt&&0>l(Xt,nt))I[Et]=Xt,I[Dt]=nt,Et=Dt;else break t}}return V}function l(I,V){var nt=I.sortIndex-V.sortIndex;return nt!==0?nt:I.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,x=3,y=!1,E=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=I)s(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=i(p)}}function O(I){if(T=!1,D(I),!E)if(i(m)!==null)E=!0,F||(F=!0,H());else{var V=i(p);V!==null&&lt(O,V.startTime-I)}}var F=!1,N=-1,k=5,A=-1;function w(){return M?!0:!(r.unstable_now()-A<k)}function X(){if(M=!1,F){var I=r.unstable_now();A=I;var V=!0;try{t:{E=!1,T&&(T=!1,U(N),N=-1),y=!0;var nt=x;try{e:{for(D(I),_=i(m);_!==null&&!(_.expirationTime>I&&w());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,x=_.priorityLevel;var yt=Et(_.expirationTime<=I);if(I=r.unstable_now(),typeof yt=="function"){_.callback=yt,D(I),V=!0;break e}_===i(m)&&s(m),D(I)}else s(m);_=i(m)}if(_!==null)V=!0;else{var z=i(p);z!==null&&lt(O,z.startTime-I),V=!1}}break t}finally{_=null,x=nt,y=!1}V=void 0}}finally{V?H():F=!1}}}var H;if(typeof L=="function")H=function(){L(X)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,at=Q.port2;Q.port1.onmessage=X,H=function(){at.postMessage(null)}}else H=function(){v(X,0)};function lt(I,V){N=v(function(){I(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var nt=x;x=V;try{return I()}finally{x=nt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var nt=x;x=I;try{return V()}finally{x=nt}},r.unstable_scheduleCallback=function(I,V,nt){var Et=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?Et+nt:Et):nt=Et,I){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=nt+yt,I={id:g++,callback:V,priorityLevel:I,startTime:nt,expirationTime:yt,sortIndex:-1},nt>Et?(I.sortIndex=nt,t(p,I),i(m)===null&&I===i(p)&&(T?(U(N),N=-1):T=!0,lt(O,nt-Et))):(I.sortIndex=yt,t(m,I),E||y||(E=!0,F||(F=!0,H()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var V=x;return function(){var nt=x;x=V;try{return I.apply(this,arguments)}finally{x=nt}}}})(bh)),bh}var u_;function Dy(){return u_||(u_=1,Eh.exports=wy()),Eh.exports}var Th={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function Uy(){if(f_)return jn;f_=1;var r=lp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},jn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},jn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},jn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},jn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},jn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},jn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},jn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},jn.requestFormReset=function(m){s.d.r(m)},jn.unstable_batchedUpdates=function(m,p){return m(p)},jn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},jn.version="19.2.3",jn}var h_;function Ly(){if(h_)return Th.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=Uy(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Ny(){if(d_)return Yo;d_=1;var r=Dy(),t=lp(),i=Ly();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=d;break}if(R===o){S=!0,o=u,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=u;break}if(R===o){S=!0,o=d,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var lt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},Et=[],yt=-1;function z(e){return{current:e}}function st(e){0>yt||(e.current=Et[yt],Et[yt]=null,yt--)}function vt(e,n){yt++,Et[yt]=e.current,e.current=n}var Dt=z(null),Xt=z(null),it=z(null),dt=z(null);function Rt(e,n){switch(vt(it,n),vt(Xt,e),vt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(Dt),vt(Dt,e)}function jt(){st(Dt),st(Xt),st(it)}function kt(e){e.memoizedState!==null&&vt(dt,e);var n=Dt.current,a=wg(n,e.type);n!==a&&(vt(Xt,e),vt(Dt,a))}function Ee(e){Xt.current===e&&(st(Dt),st(Xt)),dt.current===e&&(st(dt),Vo._currentValue=nt)}var Ye,Ce;function pe(e){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",Ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+Ce}var Ae=!1;function ce(e,n){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ft){var ot=ft}Reflect.construct(e,[],St)}else{try{St.call()}catch(ft){ot=ft}e.call(St.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var B=S.split(`
`),et=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===et.length)for(o=B.length-1,u=et.length-1;1<=o&&0<=u&&B[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==et[u]){var pt=`
`+B[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function fn(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return pe("Activity");default:return""}}function W(e){try{var n="",a=null;do n+=fn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,we=r.unstable_scheduleCallback,Fe=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Jt=r.unstable_LowPriority,Nt=r.unstable_IdlePriority,Zt=r.log,ue=r.unstable_setDisableYieldValue,At=null,Ct=null;function Bt(e){if(typeof Zt=="function"&&ue(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(At,e)}catch{}}var zt=Math.clz32?Math.clz32:Y,Ot=Math.log,ve=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Ot(e)/ve|0)|0}var Pt=256,wt=262144,Ht=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Tt(o):(S&=R,S!==0?u=Tt(S):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~d,R!==0?u=Tt(R):S!==0?u=Tt(S):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function G(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ut(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function gt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ut(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-zt(a),St=1<<pt;R[pt]=0,B[pt]=-1;var ot=et[pt];if(ot!==null)for(et[pt]=null,pt=0;pt<ot.length;pt++){var ft=ot[pt];ft!==null&&(ft.lane&=-536870913)}a&=~St}o!==0&&ae(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function ae(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function se(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function fe(e,n){var a=n&-n;return a=(a&42)!==0?1:qt(a),(a&(e.suspendedLanes|n))!==0?0:a}function qt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Se(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function Pe(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Ze=Math.random().toString(36).slice(2),ye="__reactFiber$"+Ze,Be="__reactProps$"+Ze,ln="__reactContainer$"+Ze,Sn="__reactEvents$"+Ze,gn="__reactListeners$"+Ze,Wi="__reactHandles$"+Ze,Pi="__reactResources$"+Ze,la="__reactMarker$"+Ze;function Ga(e){delete e[ye],delete e[Be],delete e[Sn],delete e[gn],delete e[Wi]}function qi(e){var n=e[ye];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ln]||a[ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zg(e);e!==null;){if(a=e[ye])return a;e=zg(e)}return n}e=a,a=e.parentNode}return null}function Yi(e){if(e=e[ye]||e[ln]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ms(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Va(e){var n=e[Pi];return n||(n=e[Pi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[la]=!0}var K=new Set,ct={};function rt(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(ct[e]=n,e=0;e<n.length;e++)K.add(n[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yt={},Ft={};function Kt(e){return rn.call(Ft,e)?!0:rn.call(Yt,e)?!1:It.test(e)?Ft[e]=!0:(Yt[e]=!0,!1)}function $t(e,n,a){if(Kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function on(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=hn(e,n,""+e[n])}}function je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var We=/[\n"\\]/g;function ge(e){return e.replace(We,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fn(e,n,a,o,u,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Bn(e,S,he(n)):a!=null?Bn(e,S,he(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+he(R):e.removeAttribute("name")}function ca(e,n,a,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){on(e);return}a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),on(e)}function Bn(e,n,a){n==="number"&&ie(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ke(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Hn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),on(e)}function wn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Gn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Js(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Vn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Vn(e,d,n[d])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,tr=null;function Rp(e){var n=Yi(e);if(n&&(e=n.stateNode)){var a=e[Be]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Be]||null;if(!u)throw Error(s(90));Fn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&je(o)}break t;case"textarea":Ke(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mi(e,!!a.multiple,n,!1)}}}var vu=!1;function Cp(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,($s!==null||tr!==null)&&(tc(),$s&&(n=$s,e=tr,tr=$s=null,Rp(n),e)))for(n=0;n<e.length;n++)Rp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Be]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(fa)try{var so={};Object.defineProperty(so,"passive",{get:function(){xu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{xu=!1}var ka=null,Su=null,pl=null;function wp(){if(pl)return pl;var e,n=Su,a=n.length,o,u="value"in ka?ka.value:ka.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Dp(){return!1}function ii(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Dp,this.isPropagationStopped=Dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=ii(Es),ro=_({},Es,{view:0,detail:0}),bx=ii(ro),yu,Mu,oo,vl=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(yu=e.screenX-oo.screenX,Mu=e.screenY-oo.screenY):Mu=yu=0,oo=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Up=ii(vl),Tx=_({},vl,{dataTransfer:0}),Ax=ii(Tx),Rx=_({},ro,{relatedTarget:0}),Eu=ii(Rx),Cx=_({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=ii(Cx),Dx=_({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ux=ii(Dx),Lx=_({},Es,{data:0}),Lp=ii(Lx),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function bu(){return zx}var Ix=_({},ro,{key:function(e){if(e.key){var n=Nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fx=ii(Ix),Bx=_({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=ii(Bx),Hx=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Gx=ii(Hx),Vx=_({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=ii(Vx),Xx=_({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=ii(Xx),qx=_({},Es,{newState:0,oldState:0}),Yx=ii(qx),jx=[9,13,27,32],Tu=fa&&"CompositionEvent"in window,lo=null;fa&&"documentMode"in document&&(lo=document.documentMode);var Zx=fa&&"TextEvent"in window&&!lo,Op=fa&&(!Tu||lo&&8<lo&&11>=lo),Pp=" ",zp=!1;function Ip(e,n){switch(e){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Kx(e,n){switch(e){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(zp=!0,Pp);case"textInput":return e=n.data,e===Pp&&zp?null:e;default:return null}}function Qx(e,n){if(er)return e==="compositionend"||!Tu&&Ip(e,n)?(e=wp(),pl=Su=ka=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jx[e.type]:n==="textarea"}function Hp(e,n,a,o){$s?tr?tr.push(o):tr=[o]:$s=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function $x(e){Mg(e,0)}function xl(e){var n=Ms(e);if(je(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(fa){var Au;if(fa){var Ru="oninput"in document;if(!Ru){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ru=typeof kp.oninput=="function"}Au=Ru}else Au=!1;Vp=Au&&(!document.documentMode||9<document.documentMode)}function Xp(){co&&(co.detachEvent("onpropertychange",Wp),uo=co=null)}function Wp(e){if(e.propertyName==="value"&&xl(uo)){var n=[];Hp(n,uo,e,_u(e)),Cp($x,n)}}function tS(e,n,a){e==="focusin"?(Xp(),co=n,uo=a,co.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function eS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(uo)}function nS(e,n){if(e==="click")return xl(n)}function iS(e,n){if(e==="input"||e==="change")return xl(n)}function aS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:aS;function fo(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rn.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ie(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ie(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sS=fa&&"documentMode"in document&&11>=document.documentMode,nr=null,wu=null,ho=null,Du=!1;function Kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||nr==null||nr!==ie(o)||(o=nr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=oc(wu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=nr)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ir={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},Uu={},Qp={};fa&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ts(e){if(Uu[e])return Uu[e];if(!ir[e])return e;var n=ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Uu[e]=n[a];return e}var Jp=Ts("animationend"),$p=Ts("animationiteration"),tm=Ts("animationstart"),rS=Ts("transitionrun"),oS=Ts("transitionstart"),lS=Ts("transitioncancel"),em=Ts("transitionend"),nm=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ii(e,n){nm.set(e,n),rt(n,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],ar=0,Nu=0;function yl(){for(var e=ar,n=Nu=ar=0;n<e;){var a=Ei[n];Ei[n++]=null;var o=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var d=Ei[n];if(Ei[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&im(a,u,d)}}function Ml(e,n,a,o){Ei[ar++]=e,Ei[ar++]=n,Ei[ar++]=a,Ei[ar++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return Ml(e,n,a,o),El(e)}function As(e,n){return Ml(e,null,null,n),El(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-zt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(e){if(50<Po)throw Po=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var sr={};function cS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,n,a,o){return new cS(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,n){var a=e.alternate;return a===null?(a=di(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")Pu(e)&&(S=1);else if(typeof e=="string")S=py(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=di(31,a,n,u),e.elementType=A,e.lanes=d,e;case T:return Rs(a.children,u,d,n);case M:S=8,u|=24;break;case v:return e=di(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case O:return e=di(13,a,n,u),e.elementType=O,e.lanes=d,e;case F:return e=di(19,a,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case U:S=9;break t;case D:S=11;break t;case N:S=14;break t;case k:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=di(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Rs(e,n,a,o){return e=di(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=di(6,e,null,n),e.lanes=a,e}function sm(e){var n=di(18,null,null,0);return n.stateNode=e,n}function Iu(e,n,a){return n=di(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function bi(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:W(n)},rm.set(e,n),n)}return{value:e,source:n,stack:W(n)}}var rr=[],or=0,Tl=null,po=0,Ti=[],Ai=0,Xa=null,ji=1,Zi="";function da(e,n){rr[or++]=po,rr[or++]=Tl,Tl=e,po=n}function om(e,n,a){Ti[Ai++]=ji,Ti[Ai++]=Zi,Ti[Ai++]=Xa,Xa=e;var o=ji;e=Zi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var d=32-zt(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,ji=1<<32-zt(n)+u|a<<u|o,Zi=d+e}else ji=1<<d|a<<u|o,Zi=e}function Fu(e){e.return!==null&&(da(e,1),om(e,1,0))}function Bu(e){for(;e===Tl;)Tl=rr[--or],rr[or]=null,po=rr[--or],rr[or]=null;for(;e===Xa;)Xa=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null,ji=Ti[--Ai],Ti[Ai]=null}function lm(e,n){Ti[Ai++]=ji,Ti[Ai++]=Zi,Ti[Ai++]=Xa,ji=n.id,Zi=n.overflow,Xa=e}var kn=null,cn=null,ze=!1,Wa=null,Ri=!1,Hu=Error(s(519));function qa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(bi(n,e)),Hu}function cm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ye]=e,n[Be]=o,a){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Ue(Io[a],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),ca(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),Hn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),o.onScroll!=null&&Ue("scroll",n),o.onScrollEnd!=null&&Ue("scrollend",n),o.onClick!=null&&(n.onclick=ua),n=!0):n=!1,n||qa(e,!0)}function um(e){for(kn=e.return;kn;)switch(kn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:kn=kn.return}}function lr(e){if(e!==kn)return!1;if(!ze)return um(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sh(e.type,e.memoizedProps)),a=!a),a&&cn&&qa(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));cn=Pg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));cn=Pg(e)}else n===27?(n=cn,rs(e.type)?(e=uh,uh=null,cn=e):cn=n):cn=kn?wi(e.stateNode.nextSibling):null;return!0}function Cs(){cn=kn=null,ze=!1}function Gu(){var e=Wa;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Wa=null),e}function mo(e){Wa===null?Wa=[e]:Wa.push(e)}var Vu=z(null),ws=null,pa=null;function Ya(e,n,a){vt(Vu,n._currentValue),n._currentValue=a}function ma(e){e._currentValue=Vu.current,st(Vu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),ku(d.return,a,e),o||(S=null);break t}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),ku(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function cr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;hi(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===dt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&Xu(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ds(e){ws=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xn(e){return fm(ws,e)}function Rl(e,n){return ws===null&&Ds(e),fm(e,n)}function fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},pa===null){if(e===null)throw Error(s(308));pa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else pa=pa.next=n;return a}var uS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fS=r.unstable_scheduleCallback,hS=r.unstable_NormalPriority,bn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new uS,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&fS(hS,function(){e.controller.abort()})}var _o=null,qu=0,ur=0,fr=null;function dS(e,n){if(_o===null){var a=_o=[];qu=0,ur=Kf(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(hm,hm),n}function hm(){if(--qu===0&&_o!==null){fr!==null&&(fr.status="fulfilled");var e=_o;_o=null,ur=0,fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function pS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=I.S;I.S=function(e,n){K0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dS(e,n),dm!==null&&dm(e,n)};var Us=z(null);function Yu(){var e=Us.current;return e!==null?e:sn.pooledCache}function Cl(e,n){n===null?vt(Us,Us.current):vt(Us,n.pool)}function pm(){var e=Yu();return e===null?null:{parent:bn._currentValue,pool:e}}var hr=Error(s(460)),ju=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ua,ua),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e;default:if(typeof n.status=="string")n.then(ua,ua);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e}throw Ns=n,hr}}function Ls(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ns=a,hr):a}}var Ns=null;function _m(){if(Ns===null)throw Error(s(459));var e=Ns;return Ns=null,e}function vm(e){if(e===hr||e===wl)throw Error(s(483))}var dr=null,vo=0;function Ul(e){var n=vo;return vo+=1,dr===null&&(dr=[]),gm(dr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xm(e){function n(J,q){if(e){var tt=J.deletions;tt===null?(J.deletions=[q],J.flags|=16):tt.push(q)}}function a(J,q){if(!e)return null;for(;q!==null;)n(J,q),q=q.sibling;return null}function o(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function u(J,q){return J=ha(J,q),J.index=0,J.sibling=null,J}function d(J,q,tt){return J.index=tt,e?(tt=J.alternate,tt!==null?(tt=tt.index,tt<q?(J.flags|=67108866,q):tt):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function S(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,q,tt,_t){return q===null||q.tag!==6?(q=zu(tt,J.mode,_t),q.return=J,q):(q=u(q,tt),q.return=J,q)}function B(J,q,tt,_t){var re=tt.type;return re===T?pt(J,q,tt.props.children,_t,tt.key):q!==null&&(q.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===k&&Ls(re)===q.type)?(q=u(q,tt.props),xo(q,tt),q.return=J,q):(q=bl(tt.type,tt.key,tt.props,null,J.mode,_t),xo(q,tt),q.return=J,q)}function et(J,q,tt,_t){return q===null||q.tag!==4||q.stateNode.containerInfo!==tt.containerInfo||q.stateNode.implementation!==tt.implementation?(q=Iu(tt,J.mode,_t),q.return=J,q):(q=u(q,tt.children||[]),q.return=J,q)}function pt(J,q,tt,_t,re){return q===null||q.tag!==7?(q=Rs(tt,J.mode,_t,re),q.return=J,q):(q=u(q,tt),q.return=J,q)}function St(J,q,tt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=zu(""+q,J.mode,tt),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return tt=bl(q.type,q.key,q.props,null,J.mode,tt),xo(tt,q),tt.return=J,tt;case E:return q=Iu(q,J.mode,tt),q.return=J,q;case k:return q=Ls(q),St(J,q,tt)}if(lt(q)||H(q))return q=Rs(q,J.mode,tt,null),q.return=J,q;if(typeof q.then=="function")return St(J,Ul(q),tt);if(q.$$typeof===L)return St(J,Rl(J,q),tt);Ll(J,q)}return null}function ot(J,q,tt,_t){var re=q!==null?q.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return re!==null?null:R(J,q,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===re?B(J,q,tt,_t):null;case E:return tt.key===re?et(J,q,tt,_t):null;case k:return tt=Ls(tt),ot(J,q,tt,_t)}if(lt(tt)||H(tt))return re!==null?null:pt(J,q,tt,_t,null);if(typeof tt.then=="function")return ot(J,q,Ul(tt),_t);if(tt.$$typeof===L)return ot(J,q,Rl(J,tt),_t);Ll(J,tt)}return null}function ft(J,q,tt,_t,re){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(tt)||null,R(q,J,""+_t,re);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return J=J.get(_t.key===null?tt:_t.key)||null,B(q,J,_t,re);case E:return J=J.get(_t.key===null?tt:_t.key)||null,et(q,J,_t,re);case k:return _t=Ls(_t),ft(J,q,tt,_t,re)}if(lt(_t)||H(_t))return J=J.get(tt)||null,pt(q,J,_t,re,null);if(typeof _t.then=="function")return ft(J,q,tt,Ul(_t),re);if(_t.$$typeof===L)return ft(J,q,tt,Rl(q,_t),re);Ll(q,_t)}return null}function Qt(J,q,tt,_t){for(var re=null,Ve=null,ee=q,be=q=0,Oe=null;ee!==null&&be<tt.length;be++){ee.index>be?(Oe=ee,ee=null):Oe=ee.sibling;var ke=ot(J,ee,tt[be],_t);if(ke===null){ee===null&&(ee=Oe);break}e&&ee&&ke.alternate===null&&n(J,ee),q=d(ke,q,be),Ve===null?re=ke:Ve.sibling=ke,Ve=ke,ee=Oe}if(be===tt.length)return a(J,ee),ze&&da(J,be),re;if(ee===null){for(;be<tt.length;be++)ee=St(J,tt[be],_t),ee!==null&&(q=d(ee,q,be),Ve===null?re=ee:Ve.sibling=ee,Ve=ee);return ze&&da(J,be),re}for(ee=o(ee);be<tt.length;be++)Oe=ft(ee,J,be,tt[be],_t),Oe!==null&&(e&&Oe.alternate!==null&&ee.delete(Oe.key===null?be:Oe.key),q=d(Oe,q,be),Ve===null?re=Oe:Ve.sibling=Oe,Ve=Oe);return e&&ee.forEach(function(fs){return n(J,fs)}),ze&&da(J,be),re}function de(J,q,tt,_t){if(tt==null)throw Error(s(151));for(var re=null,Ve=null,ee=q,be=q=0,Oe=null,ke=tt.next();ee!==null&&!ke.done;be++,ke=tt.next()){ee.index>be?(Oe=ee,ee=null):Oe=ee.sibling;var fs=ot(J,ee,ke.value,_t);if(fs===null){ee===null&&(ee=Oe);break}e&&ee&&fs.alternate===null&&n(J,ee),q=d(fs,q,be),Ve===null?re=fs:Ve.sibling=fs,Ve=fs,ee=Oe}if(ke.done)return a(J,ee),ze&&da(J,be),re;if(ee===null){for(;!ke.done;be++,ke=tt.next())ke=St(J,ke.value,_t),ke!==null&&(q=d(ke,q,be),Ve===null?re=ke:Ve.sibling=ke,Ve=ke);return ze&&da(J,be),re}for(ee=o(ee);!ke.done;be++,ke=tt.next())ke=ft(ee,J,be,ke.value,_t),ke!==null&&(e&&ke.alternate!==null&&ee.delete(ke.key===null?be:ke.key),q=d(ke,q,be),Ve===null?re=ke:Ve.sibling=ke,Ve=ke);return e&&ee.forEach(function(Ty){return n(J,Ty)}),ze&&da(J,be),re}function nn(J,q,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var re=tt.key;q!==null;){if(q.key===re){if(re=tt.type,re===T){if(q.tag===7){a(J,q.sibling),_t=u(q,tt.props.children),_t.return=J,J=_t;break t}}else if(q.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===k&&Ls(re)===q.type){a(J,q.sibling),_t=u(q,tt.props),xo(_t,tt),_t.return=J,J=_t;break t}a(J,q);break}else n(J,q);q=q.sibling}tt.type===T?(_t=Rs(tt.props.children,J.mode,_t,tt.key),_t.return=J,J=_t):(_t=bl(tt.type,tt.key,tt.props,null,J.mode,_t),xo(_t,tt),_t.return=J,J=_t)}return S(J);case E:t:{for(re=tt.key;q!==null;){if(q.key===re)if(q.tag===4&&q.stateNode.containerInfo===tt.containerInfo&&q.stateNode.implementation===tt.implementation){a(J,q.sibling),_t=u(q,tt.children||[]),_t.return=J,J=_t;break t}else{a(J,q);break}else n(J,q);q=q.sibling}_t=Iu(tt,J.mode,_t),_t.return=J,J=_t}return S(J);case k:return tt=Ls(tt),nn(J,q,tt,_t)}if(lt(tt))return Qt(J,q,tt,_t);if(H(tt)){if(re=H(tt),typeof re!="function")throw Error(s(150));return tt=re.call(tt),de(J,q,tt,_t)}if(typeof tt.then=="function")return nn(J,q,Ul(tt),_t);if(tt.$$typeof===L)return nn(J,q,Rl(J,tt),_t);Ll(J,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,q!==null&&q.tag===6?(a(J,q.sibling),_t=u(q,tt),_t.return=J,J=_t):(a(J,q),_t=zu(tt,J.mode,_t),_t.return=J,J=_t),S(J)):a(J,q)}return function(J,q,tt,_t){try{vo=0;var re=nn(J,q,tt,_t);return dr=null,re}catch(ee){if(ee===hr||ee===wl)throw ee;var Ve=di(29,ee,null,J.mode);return Ve.lanes=_t,Ve.return=J,Ve}finally{}}}var Os=xm(!0),Sm=xm(!1),ja=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(qe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),im(e,null,a),n}return Ml(e,o,n,a),El(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,se(e,a)}}function Qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ju=!1;function yo(){if(Ju){var e=fr;if(e!==null)throw e}}function Mo(e,n,a,o){Ju=!1;var u=e.updateQueue;ja=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,et=B.next;B.next=null,S===null?d=et:S.next=et,S=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==S&&(R===null?pt.firstBaseUpdate=et:R.next=et,pt.lastBaseUpdate=B))}if(d!==null){var St=u.baseState;S=0,pt=et=B=null,R=d;do{var ot=R.lane&-536870913,ft=ot!==R.lane;if(ft?(Ne&ot)===ot:(o&ot)===ot){ot!==0&&ot===ur&&(Ju=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Qt=e,de=R;ot=n;var nn=a;switch(de.tag){case 1:if(Qt=de.payload,typeof Qt=="function"){St=Qt.call(nn,St,ot);break t}St=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=de.payload,ot=typeof Qt=="function"?Qt.call(nn,St,ot):Qt,ot==null)break t;St=_({},St,ot);break t;case 2:ja=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(et=pt=ft,B=St):pt=pt.next=ft,S|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(B=St),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),es|=S,e.lanes=S,e.memoizedState=St}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var pr=z(null),Nl=z(0);function Em(e,n){e=ba,vt(Nl,e),vt(pr,n),ba=e|n.baseLanes}function $u(){vt(Nl,ba),vt(pr,pr.current)}function tf(){ba=Nl.current,st(pr),st(Nl)}var pi=z(null),Ci=null;function Qa(e){var n=e.alternate;vt(yn,yn.current&1),vt(pi,e),Ci===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(Ci=e)}function ef(e){vt(yn,yn.current),vt(pi,e),Ci===null&&(Ci=e)}function bm(e){e.tag===22?(vt(yn,yn.current),vt(pi,e),Ci===null&&(Ci=e)):Ja()}function Ja(){vt(yn,yn.current),vt(pi,pi.current)}function mi(e){st(pi),Ci===e&&(Ci=null),st(yn)}var yn=z(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=0,Me=null,tn=null,Tn=null,Pl=!1,mr=!1,Ps=!1,zl=0,Eo=0,gr=null,mS=0;function _n(){throw Error(s(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function af(e,n,a,o,u,d){return ga=d,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?o0:xf,Ps=!1,d=a(o,u),Ps=!1,mr&&(d=Am(n,a,o,u)),Tm(e),d}function Tm(e){I.H=Ao;var n=tn!==null&&tn.next!==null;if(ga=0,Tn=tn=Me=null,Pl=!1,Eo=0,gr=null,n)throw Error(s(300));e===null||An||(e=e.dependencies,e!==null&&Al(e)&&(An=!0))}function Am(e,n,a,o){Me=e;var u=0;do{if(mr&&(gr=null),Eo=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,Tn=tn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=l0,d=n(a,o)}while(mr);return d}function gS(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?bo(n):n,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(Me.flags|=1024),n}function sf(){var e=zl!==0;return zl=0,e}function rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}ga=0,Tn=tn=Me=null,mr=!1,Eo=zl=0,gr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Me.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function Mn(){if(tn===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var n=Tn===null?Me.memoizedState:Tn.next;if(n!==null)Tn=n,tn=e;else{if(e===null)throw Me.alternate===null?Error(s(467)):Error(s(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Tn===null?Me.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var n=Eo;return Eo+=1,gr===null&&(gr=[]),e=gm(gr,e,n),n=Me,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?o0:xf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===L)return Xn(e)}throw Error(s(438,String(e)))}function lf(e){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function _a(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=Mn();return cf(n,tn,e)}function cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=S=null,B=null,et=n,pt=!1;do{var St=et.lane&-536870913;if(St!==et.lane?(Ne&St)===St:(ga&St)===St){var ot=et.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),St===ur&&(pt=!0);else if((ga&ot)===ot){et=et.next,ot===ur&&(pt=!0);continue}else St={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(R=B=St,S=d):B=B.next=St,Me.lanes|=ot,es|=ot;St=et.action,Ps&&a(d,St),d=et.hasEagerState?et.eagerState:a(d,St)}else ot={lane:St,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(R=B=ot,S=d):B=B.next=ot,Me.lanes|=St,es|=St;et=et.next}while(et!==null&&et!==n);if(B===null?S=d:B.next=R,!hi(d,e.memoizedState)&&(An=!0,pt&&(a=fr,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var n=Mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);hi(d,n.memoizedState)||(An=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(e,n,a){var o=Me,u=Mn(),d=ze;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!hi((tn||u).memoizedState,a);if(S&&(u.memoizedState=a,An=!0),u=u.queue,df(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||Tn!==null&&Tn.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),sn===null)throw Error(s(349));d||(ga&127)!==0||Cm(o,n,a)}return a}function Cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=Il(),Me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Lm(e)}function Dm(e,n,a){return a(function(){Um(n)&&Lm(e)})}function Um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function Lm(e){var n=As(e,2);n!==null&&li(n,e,2)}function ff(e){var n=$n();if(typeof e=="function"){var a=e;if(e=a(),Ps){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},n}function Nm(e,n,a,o){return e.baseState=a,cf(e,tn,typeof o=="function"?o:_a)}function _S(e,n,a,o,u){if(Vl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=I.T,S={};I.T=S;try{var R=a(u,o),B=I.S;B!==null&&B(S,R),Pm(e,n,R)}catch(et){hf(e,n,et)}finally{d!==null&&S.types!==null&&(d.types=S.types),I.T=d}}else try{d=a(u,o),Pm(e,n,d)}catch(et){hf(e,n,et)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,n,o)},function(o){return hf(e,n,o)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Om(e,a)))}function hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fm(e,n){return n}function Bm(e,n){if(ze){var a=sn.formState;if(a!==null){t:{var o=Me;if(ze){if(cn){e:{for(var u=cn,d=Ri;u.nodeType!==8;){if(!d){u=null;break e}if(u=wi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){cn=wi(u.nextSibling),o=u.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=$n(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=a0.bind(null,Me,o),o.dispatch=a,o=ff(!1),d=vf.bind(null,Me,!1,o.queue),o=$n(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=_S.bind(null,Me,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hm(e){var n=Mn();return Gm(n,tn,e)}function Gm(e,n,a){if(n=cf(e,n,Fm)[0],e=Bl(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(S){throw S===hr?wl:S}else o=n;n=Mn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Me.flags|=2048,_r(9,{destroy:void 0},vS.bind(null,u,a),null)),[o,d,e]}function vS(e,n){e.action=n}function Vm(e){var n=Mn(),a=tn;if(a!==null)return Gm(n,a,e);Mn(),n=n.memoizedState,a=Mn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function _r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Me.updateQueue,n===null&&(n=Il(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function km(){return Mn().memoizedState}function Hl(e,n,a,o){var u=$n();Me.flags|=e,u.memoizedState=_r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,n,a,o){var u=Mn();o=o===void 0?null:o;var d=u.memoizedState.inst;tn!==null&&o!==null&&nf(o,tn.memoizedState.deps)?u.memoizedState=_r(n,d,a,o):(Me.flags|=e,u.memoizedState=_r(1|n,d,a,o))}function Xm(e,n){Hl(8390656,8,e,n)}function df(e,n){Gl(2048,8,e,n)}function xS(e){Me.flags|=4;var n=Me.updateQueue;if(n===null)n=Il(),Me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=Mn().memoizedState;return xS({ref:n,nextImpl:e}),function(){if((qe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(e,n){return Gl(4,2,e,n)}function Ym(e,n){return Gl(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zm(e,n,a){a=a!=null?a.concat([e]):null,Gl(4,4,jm.bind(null,n,e),a)}function pf(){}function Km(e,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Qm(e,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=e(),Ps){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function mf(e,n,a){return a===void 0||(ga&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=J0(),Me.lanes|=e,es|=e,a)}function Jm(e,n,a,o){return hi(a,n)?a:pr.current!==null?(e=mf(e,a,o),hi(e,n)||(An=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(Ne&261930)===0?(An=!0,e.memoizedState=a):(e=J0(),Me.lanes|=e,es|=e,n)}function $m(e,n,a,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var S=I.T,R={};I.T=R,vf(e,!1,n,a);try{var B=u(),et=I.S;if(et!==null&&et(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=pS(B,o);To(e,n,pt,vi(e))}else To(e,n,o,vi(e))}catch(St){To(e,n,{then:function(){},status:"rejected",reason:St},vi())}finally{V.p=d,S!==null&&R.types!==null&&(S.types=R.types),I.T=S}}function SS(){}function gf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=t0(e).queue;$m(e,u,n,nt,a===null?SS:function(){return e0(e),a(o)})}function t0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function e0(e){var n=t0(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},vi())}function _f(){return Xn(Vo)}function n0(){return Mn().memoizedState}function i0(){return Mn().memoizedState}function yS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=vi();e=Za(a);var o=Ka(n,e,a);o!==null&&(li(o,n,a),So(o,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function MS(e,n,a){var o=vi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?s0(n,a):(a=Ou(e,n,a,o),a!==null&&(li(a,e,o),r0(a,n,o)))}function a0(e,n,a){var o=vi();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))s0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,a);if(u.hasEagerState=!0,u.eagerState=R,hi(R,S))return Ml(e,n,u,0),sn===null&&yl(),!1}catch{}finally{}if(a=Ou(e,n,u,o),a!==null)return li(a,e,o),r0(a,n,o),!0}return!1}function vf(e,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&li(n,e,2)}function Vl(e){var n=e.alternate;return e===Me||n!==null&&n===Me}function s0(e,n){mr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,se(e,a)}}var Ao={readContext:Xn,use:Fl,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};Ao.useEffectEvent=_n;var o0={readContext:Xn,use:Fl,useCallback:function(e,n){return $n().memoizedState=[e,n===void 0?null:n],e},useContext:Xn,useEffect:Xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=$n();n=n===void 0?null:n;var o=e();if(Ps){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=$n();if(a!==void 0){var u=a(n);if(Ps){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=MS.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var n=$n();return e={current:e},n.memoizedState=e},useState:function(e){e=ff(e);var n=e.queue,a=a0.bind(null,Me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=$n();return mf(a,e,n)},useTransition:function(){var e=ff(!1);return e=$m.bind(null,Me,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Me,u=$n();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Ne&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Dm.bind(null,o,d,e),[e]),o.flags|=2048,_r(9,{destroy:void 0},wm.bind(null,o,d,a,n),null),a},useId:function(){var e=$n(),n=sn.identifierPrefix;if(ze){var a=Zi,o=ji;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=$n();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,Me,!0,a),a.dispatch=n,[e,n]},useMemoCache:lf,useCacheRefresh:function(){return $n().memoizedState=yS.bind(null,Me)},useEffectEvent:function(e){var n=$n(),a={impl:e};return n.memoizedState=a,function(){if((qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Xn,use:Fl,useCallback:Km,useContext:Xn,useEffect:df,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:Bl,useRef:km,useState:function(){return Bl(_a)},useDebugValue:pf,useDeferredValue:function(e,n){var a=Mn();return Jm(a,tn.memoizedState,e,n)},useTransition:function(){var e=Bl(_a)[0],n=Mn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:_f,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=Mn();return Nm(a,tn,e,n)},useMemoCache:lf,useCacheRefresh:i0};xf.useEffectEvent=Wm;var l0={readContext:Xn,use:Fl,useCallback:Km,useContext:Xn,useEffect:df,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:uf,useRef:km,useState:function(){return uf(_a)},useDebugValue:pf,useDeferredValue:function(e,n){var a=Mn();return tn===null?mf(a,e,n):Jm(a,tn.memoizedState,e,n)},useTransition:function(){var e=uf(_a)[0],n=Mn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:_f,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=Mn();return tn!==null?Nm(a,tn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=vi(),u=Za(o);u.payload=n,a!=null&&(u.callback=a),n=Ka(e,u,o),n!==null&&(li(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=vi(),u=Za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(e,u,o),n!==null&&(li(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=vi(),o=Za(a);o.tag=2,n!=null&&(o.callback=n),n=Ka(e,o,a),n!==null&&(li(n,e,a),So(n,e,a))}};function c0(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,d):!0}function u0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function zs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function f0(e){Sl(e)}function h0(e){console.error(e)}function d0(e){Sl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function m0(e){return e=Za(e),e.tag=3,e}function g0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){p0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){p0(n,a,o),typeof u!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function ES(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&cr(n,a,u,!0),a=pi.current,a!==null){switch(a.tag){case 31:case 13:return Ci===null?ec():a.alternate===null&&vn===0&&(vn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,u)),!1}throw Error(s(435,a.tag))}return Yf(e,o,u),ec(),!1}if(ze)return n=pi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(s(422),{cause:o}),mo(bi(e,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),mo(bi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=bi(o,a),u=Mf(e.stateNode,o,u),Qu(e,u),vn!==4&&(vn=2)),!1;var d=Error(s(520),{cause:o});if(d=bi(d,a),Oo===null?Oo=[d]:Oo.push(d),vn!==4&&(vn=2),n===null)return!0;o=bi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,o,e),Qu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,e,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),An=!1;function Wn(e,n,a,o){n.child=e===null?Sm(n,null,a,o):Os(n,e.child,a,o)}function _0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Ds(n),o=af(e,n,a,S,d,u),R=sf(),e!==null&&!An?(rf(e,n,u),va(e,n,u)):(ze&&R&&Fu(n),n.flags|=1,Wn(e,n,o,u),n.child)}function v0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,x0(e,n,d,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Uf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(S,o)&&e.ref===n.ref)return va(e,n,u)}return n.flags|=1,e=ha(d,o),e.ref=n.ref,e.return=n,n.child=e}function x0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(fo(d,o)&&e.ref===n.ref)if(An=!1,n.pendingProps=o=d,Uf(e,u))(e.flags&131072)!==0&&(An=!0);else return n.lanes=e.lanes,va(e,n,u)}return bf(e,n,a,o,u)}function S0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return y0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,d!==null?d.cachePool:null),d!==null?Em(n,d):$u(),bm(n);else return o=n.lanes=536870912,y0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Cl(n,d.cachePool),Em(n,d),Ja(),n.memoizedState=null):(e!==null&&Cl(n,null),$u(),Ja());return Wn(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(e,n,a,o,u){var d=Yu();return d=d===null?null:{parent:bn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Cl(n,null),$u(),bm(n),e!==null&&cr(e,n,o,!0),n.childLanes=u,null}function Xl(e,n){return n=ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function M0(e,n,a){return Os(n,e.child,null,a),e=Xl(n,n.pendingProps),e.flags|=2,mi(n),n.memoizedState=null,e}function bS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(o.mode==="hidden")return e=Xl(n,o),n.lanes=536870912,Ro(null,e);if(ef(n),(e=cn)?(e=Og(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,kn=n,cn=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return Xl(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=M0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(An||cr(e,n,a,!1),u=(a&e.childLanes)!==0,An||u){if(o=sn,o!==null&&(S=fe(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,As(e,S),li(o,e,S),Ef;ec(),n=M0(e,n,a)}else e=d.treeContext,cn=wi(S.nextSibling),kn=n,ze=!0,Wa=null,Ri=!1,e!==null&&lm(n,e),n=Xl(n,o),n.flags|=4096;return n}return e=ha(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bf(e,n,a,o,u){return Ds(n),a=af(e,n,a,o,void 0,u),o=sf(),e!==null&&!An?(rf(e,n,u),va(e,n,u)):(ze&&o&&Fu(n),n.flags|=1,Wn(e,n,a,u),n.child)}function E0(e,n,a,o,u,d){return Ds(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(e),o=sf(),e!==null&&!An?(rf(e,n,d),va(e,n,d)):(ze&&o&&Fu(n),n.flags|=1,Wn(e,n,a,d),n.child)}function b0(e,n,a,o,u){if(Ds(n),n.stateNode===null){var d=sr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Xn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Zu(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Xn(S):sr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Sf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&yf.enqueueReplaceState(d,d.state,null),Mo(n,o,d,u),yo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,B=zs(a,R);d.props=B;var et=d.context,pt=a.contextType;S=sr,typeof pt=="object"&&pt!==null&&(S=Xn(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||et!==S)&&u0(n,d,o,S),ja=!1;var ot=n.memoizedState;d.state=ot,Mo(n,o,d,u),yo(),et=n.memoizedState,R||ot!==et||ja?(typeof St=="function"&&(Sf(n,a,St,o),et=n.memoizedState),(B=ja||c0(n,a,B,o,ot,et,S))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),d.props=o,d.state=et,d.context=S,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ku(e,n),S=n.memoizedProps,pt=zs(a,S),d.props=pt,St=n.pendingProps,ot=d.context,et=a.contextType,B=sr,typeof et=="object"&&et!==null&&(B=Xn(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==St||ot!==B)&&u0(n,d,o,B),ja=!1,ot=n.memoizedState,d.state=ot,Mo(n,o,d,u),yo();var ft=n.memoizedState;S!==St||ot!==ft||ja||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof R=="function"&&(Sf(n,a,R,o),ft=n.memoizedState),(pt=ja||c0(n,a,pt,o,ot,ft,B)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ft,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ft,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),d.props=o,d.state=ft,d.context=B,o=pt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Wl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Os(n,e.child,null,u),n.child=Os(n,null,a,u)):Wn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=va(e,n,u),e}function T0(e,n,a,o){return Cs(),n.flags|=256,Wn(e,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:pm()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=_i),e}function A0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(yn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?Qa(n):Ja(),(e=cn)?(e=Og(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,kn=n,cn=null)):e=null,e===null)throw qa(n);return ch(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ja(),u=n.mode,R=ql({mode:"hidden",children:R},u),o=Rs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,S,a),n.memoizedState=Tf,Ro(null,o)):(Qa(n),Cf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Ja(),n.child=e.child,n.flags|=128,n=null):(Ja(),R=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),R=Rs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Os(n,e.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,S,a),n.memoizedState=Tf,n=Ro(null,o));else if(Qa(n),ch(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var et=S.dgst;S=et,o=Error(s(419)),o.stack="",o.digest=S,mo({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(An||cr(e,n,a,!1),S=(a&e.childLanes)!==0,An||S){if(S=sn,S!==null&&(o=fe(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,As(e,o),li(S,e,o),Ef;lh(R)||ec(),n=wf(e,n,a)}else lh(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,cn=wi(R.nextSibling),kn=n,ze=!0,Wa=null,Ri=!1,e!==null&&lm(n,e),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Ja(),R=o.fallback,u=n.mode,B=e.child,et=B.sibling,o=ha(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,et!==null?R=ha(et,R):(R=Rs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ro(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Af(a):(u=R.cachePool,u!==null?(B=bn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=pm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Rf(e,S,a),n.memoizedState=Tf,Ro(e.child,o)):(Qa(n),a=e.child,e=a.sibling,a=ha(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Cf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=di(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return Os(n,e.child,null,a),e=Cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Df(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function C0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=yn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,vt(yn,S),Wn(e,n,o,a),o=ze?po:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,a,n);else if(e.tag===19)R0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,d,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function va(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),es|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(cr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ha(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function TS(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),Ya(n,bn,e.memoizedState.cache),Cs();break;case 27:case 5:kt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(e,n,a):(Qa(n),e=va(e,n,a),e!==null?e.sibling:null);Qa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(cr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(yn,yn.current),o)break;return null;case 22:return n.lanes=0,S0(e,n,a,n.pendingProps);case 24:Ya(n,bn,e.memoizedState.cache)}return va(e,n,a)}function w0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)An=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return An=!1,TS(e,n,a);An=(e.flags&131072)!==0}else An=!1,ze&&(n.flags&1048576)!==0&&om(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ls(n.elementType),n.type=e,typeof e=="function")Pu(e)?(o=zs(e,o),n.tag=1,n=b0(null,n,e,o,a)):(n.tag=0,n=bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=_0(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=v0(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=zs(o,n.pendingProps),b0(e,n,o,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ku(e,n),Mo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ya(n,bn,o),o!==d.cache&&Xu(n,[bn],a,!0),yo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=T0(e,n,o,a);break t}else if(o!==u){u=bi(Error(s(424)),n),mo(u),n=T0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(cn=wi(e.firstChild),kn=n,ze=!0,Wa=null,Ri=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Cs(),o===u){n=va(e,n,a);break t}Wn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=lc(it.current).createElement(a),o[ye]=n,o[Be]=e,qn(o,a,e),C(o),n.stateNode=o):n.memoizedState=Hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&ze&&(o=n.stateNode=Ig(n.type,n.pendingProps,it.current),kn=n,Ri=!0,u=cn,rs(n.type)?(uh=u,cn=wi(o.firstChild)):cn=u),Wn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=cn)&&(o=ey(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,kn=n,cn=wi(o.firstChild),Ri=!1,u=!0):u=!1),u||qa(n)),kt(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,sh(u,d)?o=null:S!==null&&sh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=af(e,n,gS,null,null,a),Vo._currentValue=u),Wl(e,n),Wn(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=cn)&&(a=ny(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,kn=n,cn=null,e=!0):e=!1),e||qa(n)),null;case 13:return A0(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Os(n,null,o,a):Wn(e,n,o,a),n.child;case 11:return _0(e,n,n.type,n.pendingProps,a);case 7:return Wn(e,n,n.pendingProps,a),n.child;case 8:return Wn(e,n,n.pendingProps.children,a),n.child;case 12:return Wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),Wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ds(n),u=Xn(u),o=o(u),n.flags|=1,Wn(e,n,o,a),n.child;case 14:return v0(e,n,n.type,n.pendingProps,a);case 15:return x0(e,n,n.type,n.pendingProps,a);case 19:return C0(e,n,a);case 31:return bS(e,n,a);case 22:return S0(e,n,a,n.pendingProps);case 24:return Ds(n),o=Xn(bn),e===null?(u=Yu(),u===null&&(u=sn,d=Wu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Zu(n),Ya(n,bn,u)):((e.lanes&a)!==0&&(Ku(e,n),Mo(n,null,null,a),yo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,bn,o)):(o=d.cache,Ya(n,bn,o),o!==u.cache&&Xu(n,[bn],a,!0))),Wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function xa(e){e.flags|=4}function Lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw Ns=Dl,ju}else e.flags&=-16777217}function D0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wg(n))if(ng())e.flags|=8192;else throw Ns=Dl,ju}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ut():536870912,e.lanes|=n,yr|=n)}function Co(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function un(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function AS(e,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ma(bn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(lr(n)?xa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),un(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(xa(n),d!==null?(un(n),D0(n,d)):(un(n),Lf(n,u,null,o,a))):d?d!==e.memoizedState?(xa(n),un(n),D0(n,d)):(un(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&xa(n),un(n),Lf(n,u,e,o,a)),null;case 27:if(Ee(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}e=Dt.current,lr(n)?cm(n):(e=Ig(u,o,a),n.stateNode=e,xa(n))}return un(n),null;case 5:if(Ee(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(d=Dt.current,lr(n))cm(n);else{var S=lc(it.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[ye]=n,d[Be]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(qn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&xa(n)}}return un(n),Lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,lr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=kn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ye]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(e.nodeValue,a)),e||qa(n,!0)}else e=lc(e).createTextNode(o),e[ye]=n,n.stateNode=e}return un(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=lr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ye]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(mi(n),n):(mi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ye]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(mi(n),n):(mi(n),null)}return mi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),un(n),null);case 4:return jt(),e===null&&th(n.stateNode.containerInfo),un(n),null;case 10:return ma(n.type),un(n),null;case 19:if(st(yn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Co(o,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ol(e),d!==null){for(n.flags|=128,Co(o,!1),e=d.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return vt(yn,yn.current&1|2),ze&&da(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Jl&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ol(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ze)return un(n),null}else 2*b()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=yn.current,vt(yn,u?a&1|2:a&1),ze&&da(n,o.treeForkCount),e):(un(n),null);case 22:case 23:return mi(n),tf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&st(Us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ma(bn),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function RS(e,n){switch(Bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ma(bn),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ee(n),null;case 31:if(n.memoizedState!==null){if(mi(n),n.alternate===null)throw Error(s(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(mi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(yn),null;case 4:return jt(),null;case 10:return ma(n.type),null;case 22:case 23:return mi(n),tf(),e!==null&&st(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ma(bn),null;case 25:return null;default:return null}}function U0(e,n){switch(Bu(n),n.tag){case 3:ma(bn),jt();break;case 26:case 27:case 5:Ee(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&mi(n);break;case 13:mi(n);break;case 19:st(yn);break;case 10:ma(n.type);break;case 22:case 23:mi(n),tf(),e!==null&&st(Us);break;case 24:ma(bn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Je(n,n.return,R)}}function $a(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var B=a,et=R;try{et()}catch(pt){Je(u,B,pt)}}}o=o.next}while(o!==d)}}catch(pt){Je(n,n.return,pt)}}function L0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mm(n,a)}catch(o){Je(e,e.return,o)}}}function N0(e,n,a){a.props=zs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Je(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Je(e,n,u)}}function Ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Je(e,n,u)}else a.current=null}function O0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Je(e,e.return,u)}}function Nf(e,n,a){try{var o=e.stateNode;ZS(o,e.type,a,n),o[Be]=n}catch(u){Je(e,e.return,u)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ua));else if(o!==4&&(o===27&&rs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pf(e,n,a),e=e.sibling;e!==null;)Pf(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&rs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);qn(n,o,a),n[ye]=e,n[Be]=a}catch(d){Je(e,e.return,d)}}var Sa=!1,Rn=!1,zf=!1,I0=typeof WeakSet=="function"?WeakSet:Set,On=null;function CS(e,n){if(e=e.containerInfo,ih=mc,e=Zp(e),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,R=-1,B=-1,et=0,pt=0,St=e,ot=null;e:for(;;){for(var ft;St!==a||u!==0&&St.nodeType!==3||(R=S+u),St!==d||o!==0&&St.nodeType!==3||(B=S+o),St.nodeType===3&&(S+=St.nodeValue.length),(ft=St.firstChild)!==null;)ot=St,St=ft;for(;;){if(St===e)break e;if(ot===a&&++et===u&&(R=S),ot===d&&++pt===o&&(B=S),(ft=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=ft}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:e,selectionRange:a},mc=!1,On=n;On!==null;)if(n=On,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,On=e;else for(;On!==null;){switch(n=On,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Qt=zs(a.type,u);e=o.getSnapshotBeforeUpdate(Qt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){Je(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,On=e;break}On=n.return}}function F0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&wo(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Je(a,a.return,S)}else{var u=zs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Je(a,a.return,S)}}o&64&&L0(a),o&512&&Do(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(e,n)}catch(S){Je(a,a.return,S)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:Ma(e,a),n===null&&o&4&&O0(a),o&512&&Do(a,a.return);break;case 12:Ma(e,a);break;case 31:Ma(e,a),o&4&&G0(e,a);break;case 13:Ma(e,a),o&4&&V0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=IS.bind(null,a),iy(e,a))));break;case 22:if(o=a.memoizedState!==null||Sa,!o){n=n!==null&&n.memoizedState!==null||Rn,u=Sa;var d=Rn;Sa=o,(Rn=n)&&!d?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Sa=u,Rn=d}break;case 30:break;default:Ma(e,a)}}function B0(e){var n=e.alternate;n!==null&&(e.alternate=null,B0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ga(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var dn=null,ai=!1;function ya(e,n,a){for(a=a.child;a!==null;)H0(e,n,a),a=a.sibling}function H0(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:Rn||Ki(a,n),ya(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Rn||Ki(a,n);var o=dn,u=ai;rs(a.type)&&(dn=a.stateNode,ai=!1),ya(e,n,a),Bo(a.stateNode),dn=o,ai=u;break;case 5:Rn||Ki(a,n);case 6:if(o=dn,u=ai,dn=null,ya(e,n,a),dn=o,ai=u,dn!==null)if(ai)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(a.stateNode)}catch(d){Je(a,n,d)}else try{dn.removeChild(a.stateNode)}catch(d){Je(a,n,d)}break;case 18:dn!==null&&(ai?(e=dn,Lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wr(e)):Lg(dn,a.stateNode));break;case 4:o=dn,u=ai,dn=a.stateNode.containerInfo,ai=!0,ya(e,n,a),dn=o,ai=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),Rn||$a(4,a,n),ya(e,n,a);break;case 1:Rn||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&N0(a,n,o)),ya(e,n,a);break;case 21:ya(e,n,a);break;case 22:Rn=(o=Rn)||a.memoizedState!==null,ya(e,n,a),Rn=o;break;default:ya(e,n,a)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wr(e)}catch(a){Je(n,n.return,a)}}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wr(e)}catch(a){Je(n,n.return,a)}}function wS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I0),n;default:throw Error(s(435,e.tag))}}function Zl(e,n){var a=wS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=FS.bind(null,e,o);o.then(u,u)}})}function si(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){dn=R.stateNode,ai=!1;break t}break;case 5:dn=R.stateNode,ai=!1;break t;case 3:case 4:dn=R.stateNode.containerInfo,ai=!0;break t}R=R.return}if(dn===null)throw Error(s(160));H0(d,S,u),dn=null,ai=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,e),n=n.sibling}var Fi=null;function k0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(n,e),ri(e),o&4&&($a(3,e,e.return),wo(3,e),$a(5,e,e.return));break;case 1:si(n,e),ri(e),o&512&&(Rn||a===null||Ki(a,a.return)),o&64&&Sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Fi;if(si(n,e),ri(e),o&512&&(Rn||a===null||Ki(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[la]||d[ye]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),qn(d,o,a),d[ye]=e,C(d),o=d;break t;case"link":var S=kg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}d=u.createElement(o),qn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=kg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}d=u.createElement(o),qn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ye]=e,C(d),o=d}e.stateNode=o}else Xg(u,e.type,e.stateNode);else e.stateNode=Vg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,e.type,e.stateNode):Vg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:si(n,e),ri(e),o&512&&(Rn||a===null||Ki(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(si(n,e),ri(e),o&512&&(Rn||a===null||Ki(a,a.return)),e.flags&32){u=e.stateNode;try{wn(u,"")}catch(Qt){Je(e,e.return,Qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(si(n,e),ri(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Qt){Je(e,e.return,Qt)}}break;case 3:if(fc=null,u=Fi,Fi=cc(n.containerInfo),si(n,e),Fi=u,ri(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(Qt){Je(e,e.return,Qt)}zf&&(zf=!1,X0(e));break;case 4:o=Fi,Fi=cc(e.stateNode.containerInfo),si(n,e),ri(e),Fi=o;break;case 12:si(n,e),ri(e);break;case 31:si(n,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:si(n,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=Sa,pt=Rn;if(Sa=et||u,Rn=pt||B,si(n,e),Rn=pt,Sa=et,ri(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Sa||Rn||Is(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=B.stateNode;var St=B.memoizedProps.style,ot=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Qt){Je(B,B.return,Qt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Qt){Je(B,B.return,Qt)}}}else if(n.tag===18){if(a===null){B=n;try{var ft=B.stateNode;u?Ng(ft,!0):Ng(B.stateNode,!1)}catch(Qt){Je(B,B.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:si(n,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:si(n,e),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Of(e);jl(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(wn(S,""),a.flags&=-33);var R=Of(e);jl(e,R,S);break;case 3:case 4:var B=a.stateNode.containerInfo,et=Of(e);Pf(e,et,B);break;default:throw Error(s(161))}}catch(pt){Je(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(e,n.alternate,n),n=n.sibling}function Is(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Is(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&N0(n,n.return,a),Is(n);break;case 27:Bo(n.stateNode);case 26:case 5:Ki(n,n.return),Is(n);break;case 22:n.memoizedState===null&&Is(n);break;case 30:Is(n);break;default:Is(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ea(u,d,a),wo(4,d);break;case 1:if(Ea(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Je(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)ym(B[u],R)}catch(et){Je(o,o.return,et)}}a&&S&64&&L0(d),Do(d,d.return);break;case 27:z0(d);case 26:case 5:Ea(u,d,a),a&&o===null&&S&4&&O0(d),Do(d,d.return);break;case 12:Ea(u,d,a);break;case 31:Ea(u,d,a),a&&S&4&&G0(u,d);break;case 13:Ea(u,d,a),a&&S&4&&V0(u,d);break;case 22:d.memoizedState===null&&Ea(u,d,a),Do(d,d.return);break;case 30:break;default:Ea(u,d,a)}n=n.sibling}}function If(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function Bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(e,n,a,o),n=n.sibling}function W0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n,a,o),u&2048&&wo(9,n);break;case 1:Bi(e,n,a,o);break;case 3:Bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){Bi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Je(n,n.return,B)}}else Bi(e,n,a,o);break;case 31:Bi(e,n,a,o);break;case 13:Bi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Bi(e,n,a,o):Uo(e,n):d._visibility&2?Bi(e,n,a,o):(d._visibility|=2,vr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(S,n);break;case 24:Bi(e,n,a,o),u&2048&&Ff(n.alternate,n);break;default:Bi(e,n,a,o)}}function vr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,R=a,B=o,et=S.flags;switch(S.tag){case 0:case 11:case 15:vr(d,S,R,B,u),wo(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?vr(d,S,R,B,u):Uo(d,S):(pt._visibility|=2,vr(d,S,R,B,u)),u&&et&2048&&If(S.alternate,S);break;case 24:vr(d,S,R,B,u),u&&et&2048&&Ff(S.alternate,S);break;default:vr(d,S,R,B,u)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&If(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Ff(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Lo=8192;function xr(e,n,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)q0(e,n,a),e=e.sibling}function q0(e,n,a){switch(e.tag){case 26:xr(e,n,a),e.flags&Lo&&e.memoizedState!==null&&my(a,Fi,e.memoizedState,e.memoizedProps);break;case 5:xr(e,n,a);break;case 3:case 4:var o=Fi;Fi=cc(e.stateNode.containerInfo),xr(e,n,a),Fi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,xr(e,n,a),Lo=o):xr(e,n,a));break;default:xr(e,n,a)}}function Y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Z0(o,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j0(e),e=e.sibling}function j0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&$a(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):No(e);break;default:No(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Z0(o,e)}Y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function Z0(e,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else t:for(a=e;On!==null;){o=On;var u=o.sibling,d=o.return;if(B0(o),o===a){On=null;break t}if(u!==null){u.return=d,On=u;break t}On=d}}}var DS={getCacheForType:function(e){var n=Xn(bn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Xn(bn).controller.signal}},US=typeof WeakMap=="function"?WeakMap:Map,qe=0,sn=null,De=null,Ne=0,Qe=0,gi=null,ts=!1,Sr=!1,Bf=!1,ba=0,vn=0,es=0,Fs=0,Hf=0,_i=0,yr=0,Oo=null,oi=null,Gf=!1,Ql=0,K0=0,Jl=1/0,$l=null,ns=null,Dn=0,is=null,Mr=null,Ta=0,Vf=0,kf=null,Q0=null,Po=0,Xf=null;function vi(){return(qe&2)!==0&&Ne!==0?Ne&-Ne:I.T!==null?Kf():Se()}function J0(){if(_i===0)if((Ne&536870912)===0||ze){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),_i=e}else _i=536870912;return e=pi.current,e!==null&&(e.flags|=32),_i}function li(e,n,a){(e===sn&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Er(e,0),as(e,Ne,_i,!1)),Gt(e,a),((qe&2)===0||e!==sn)&&(e===sn&&((qe&2)===0&&(Fs|=a),vn===4&&as(e,Ne,_i,!1)),Qi(e))}function $0(e,n,a){if((qe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?OS(e,n):qf(e,n,!0),d=o;do{if(u===0){Sr&&!o&&as(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!LS(a)){u=qf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=Oo;var B=R.current.memoizedState.isDehydrated;if(B&&(Er(R,S).flags|=256),S=qf(R,S,!1),S!==2){if(Bf&&!B){R.errorRecoveryDisabledLanes|=d,Fs|=d,u=4;break t}d=oi,oi=u,d!==null&&(oi===null?oi=d:oi.push.apply(oi,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){Er(e,0),as(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,_i,!ts);break t;case 2:oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-b(),10<u)){if(as(o,n,_i,!ts),xt(o,0,!0)!==0)break t;Ta=n,o.timeoutHandle=Dg(tg.bind(null,o,a,oi,$l,Gf,n,_i,Fs,yr,ts,d,"Throttled",-0,0),u);break t}tg(o,a,oi,$l,Gf,n,_i,Fs,yr,ts,d,null,-0,0)}}break}while(!0);Qi(e)}function tg(e,n,a,o,u,d,S,R,B,et,pt,St,ot,ft){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},q0(n,d,St);var Qt=(d&62914560)===d?Ql-b():(d&4194048)===d?K0-b():0;if(Qt=gy(St,Qt),Qt!==null){Ta=d,e.cancelPendingCommit=Qt(lg.bind(null,e,n,d,a,o,u,S,R,B,pt,St,null,ot,ft)),as(e,d,S,!et);return}}lg(e,n,d,a,o,u,S,R,B)}function LS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!hi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(e,n,a,o){n&=~Hf,n&=~Fs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-zt(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&ae(e,a,n)}function tc(){return(qe&6)===0?(zo(0),!1):!0}function Wf(){if(De!==null){if(Qe===0)var e=De.return;else e=De,pa=ws=null,of(e),dr=null,vo=0,e=De;for(;e!==null;)U0(e.alternate,e),e=e.return;De=null}}function Er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,JS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,Wf(),sn=e,De=a=ha(e.current,null),Ne=n,Qe=0,gi=null,ts=!1,Sr=Lt(e,n),Bf=!1,yr=_i=Hf=Fs=es=vn=0,oi=Oo=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),d=1<<u;n|=e[u],o&=~d}return ba=n,yl(),a}function eg(e,n){Me=null,I.H=Ao,n===hr||n===wl?(n=_m(),Qe=3):n===ju?(n=_m(),Qe=4):Qe=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gi=n,De===null&&(vn=1,kl(e,bi(n,e.current)))}function ng(){var e=pi.current;return e===null?!0:(Ne&4194048)===Ne?Ci===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Ci:!1}function ig(){var e=I.H;return I.H=Ao,e===null?Ao:e}function ag(){var e=I.A;return I.A=DS,e}function ec(){vn=4,ts||(Ne&4194048)!==Ne&&pi.current!==null||(Sr=!0),(es&134217727)===0&&(Fs&134217727)===0||sn===null||as(sn,Ne,_i,!1)}function qf(e,n,a){var o=qe;qe|=2;var u=ig(),d=ag();(sn!==e||Ne!==n)&&($l=null,Er(e,n)),n=!1;var S=vn;t:do try{if(Qe!==0&&De!==null){var R=De,B=gi;switch(Qe){case 8:Wf(),S=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(n=!0);var et=Qe;if(Qe=0,gi=null,br(e,R,B,et),a&&Sr){S=0;break t}break;default:et=Qe,Qe=0,gi=null,br(e,R,B,et)}}NS(),S=vn;break}catch(pt){eg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,pa=ws=null,qe=o,I.H=u,I.A=d,De===null&&(sn=null,Ne=0,yl()),S}function NS(){for(;De!==null;)sg(De)}function OS(e,n){var a=qe;qe|=2;var o=ig(),u=ag();sn!==e||Ne!==n?($l=null,Jl=b()+500,Er(e,n)):Sr=Lt(e,n);t:do try{if(Qe!==0&&De!==null){n=De;var d=gi;e:switch(Qe){case 1:Qe=0,gi=null,br(e,n,d,1);break;case 2:case 9:if(mm(d)){Qe=0,gi=null,rg(n);break}n=function(){Qe!==2&&Qe!==9||sn!==e||(Qe=7),Qi(e)},d.then(n,n);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:mm(d)?(Qe=0,gi=null,rg(n)):(Qe=0,gi=null,br(e,n,d,7));break;case 5:var S=null;switch(De.tag){case 26:S=De.memoizedState;case 5:case 27:var R=De;if(S?Wg(S):R.stateNode.complete){Qe=0,gi=null;var B=R.sibling;if(B!==null)De=B;else{var et=R.return;et!==null?(De=et,nc(et)):De=null}break e}}Qe=0,gi=null,br(e,n,d,5);break;case 6:Qe=0,gi=null,br(e,n,d,6);break;case 8:Wf(),vn=6;break t;default:throw Error(s(462))}}PS();break}catch(pt){eg(e,pt)}while(!0);return pa=ws=null,I.H=o,I.A=u,qe=a,De!==null?0:(sn=null,Ne=0,yl(),vn)}function PS(){for(;De!==null&&!Wt();)sg(De)}function sg(e){var n=w0(e.alternate,e,ba);e.memoizedProps=e.pendingProps,n===null?nc(e):De=n}function rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:of(n);default:U0(a,n),n=De=am(n,ba),n=w0(a,n,ba)}e.memoizedProps=e.pendingProps,n===null?nc(e):De=n}function br(e,n,a,o){pa=ws=null,of(n),dr=null,vo=0;var u=n.return;try{if(ES(e,u,n,a,Ne)){vn=1,kl(e,bi(a,e.current)),De=null;return}}catch(d){if(u!==null)throw De=u,d;vn=1,kl(e,bi(a,e.current)),De=null;return}n.flags&32768?(ze||o===1?e=!0:Sr||(Ne&536870912)!==0?e=!1:(ts=e=!0,(o===2||o===9||o===3||o===6)&&(o=pi.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){og(n,ts);return}e=n.return;var a=AS(n.alternate,n,ba);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=e}while(n!==null);vn===0&&(vn=5)}function og(e,n){do{var a=RS(e.alternate,e);if(a!==null){a.flags&=32767,De=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){De=e;return}De=e=a}while(e!==null);vn=6,De=null}function lg(e,n,a,o,u,d,S,R,B){e.cancelPendingCommit=null;do ic();while(Dn!==0);if((qe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Nu,Ut(e,a,d,S,R,B),e===sn&&(De=sn=null,Ne=0),Mr=n,is=e,Ta=a,Vf=d,kf=u,Q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,BS(ht,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=V.p,V.p=2,S=qe,qe|=4;try{CS(e,n,a)}finally{qe=S,V.p=u,I.T=o}}Dn=1,cg(),ug(),fg()}}function cg(){if(Dn===1){Dn=0;var e=is,n=Mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=V.p;V.p=2;var u=qe;qe|=4;try{k0(n,e);var d=ah,S=Zp(e.containerInfo),R=d.focusedElem,B=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&jp(R.ownerDocument.documentElement,R)){if(B!==null&&Cu(R)){var et=B.start,pt=B.end;if(pt===void 0&&(pt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(pt,R.value.length);else{var St=R.ownerDocument||document,ot=St&&St.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Qt=R.textContent.length,de=Math.min(B.start,Qt),nn=B.end===void 0?de:Math.min(B.end,Qt);!ft.extend&&de>nn&&(S=nn,nn=de,de=S);var J=Yp(R,de),q=Yp(R,nn);if(J&&q&&(ft.rangeCount!==1||ft.anchorNode!==J.node||ft.anchorOffset!==J.offset||ft.focusNode!==q.node||ft.focusOffset!==q.offset)){var tt=St.createRange();tt.setStart(J.node,J.offset),ft.removeAllRanges(),de>nn?(ft.addRange(tt),ft.extend(q.node,q.offset)):(tt.setEnd(q.node,q.offset),ft.addRange(tt))}}}}for(St=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&St.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var _t=St[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}mc=!!ih,ah=ih=null}finally{qe=u,V.p=o,I.T=a}}e.current=n,Dn=2}}function ug(){if(Dn===2){Dn=0;var e=is,n=Mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=V.p;V.p=2;var u=qe;qe|=4;try{F0(e,n.alternate,n)}finally{qe=u,V.p=o,I.T=a}}Dn=3}}function fg(){if(Dn===4||Dn===3){Dn=0,P();var e=is,n=Mr,a=Ta,o=Q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dn=5:(Dn=0,Mr=is=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ns=null),oe(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=V.p,V.p=2,I.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{I.T=n,V.p=u}}(Ta&3)!==0&&ic(),Qi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xf?Po++:(Po=0,Xf=e):Po=0,zo(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function ic(){return cg(),ug(),fg(),dg()}function dg(){if(Dn!==5)return!1;var e=is,n=Vf;Vf=0;var a=oe(Ta),o=I.T,u=V.p;try{V.p=32>a?32:a,I.T=null,a=kf,kf=null;var d=is,S=Ta;if(Dn=0,Mr=is=null,Ta=0,(qe&6)!==0)throw Error(s(331));var R=qe;if(qe|=4,j0(d.current),W0(d,d.current,S,a),qe=R,zo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(At,d)}catch{}return!0}finally{V.p=u,I.T=o,hg(e,n)}}function pg(e,n,a){n=bi(a,n),n=Mf(e.stateNode,n,2),e=Ka(e,n,2),e!==null&&(Gt(e,2),Qi(e))}function Je(e,n,a){if(e.tag===3)pg(e,e,a);else for(;n!==null;){if(n.tag===3){pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){e=bi(a,e),a=m0(2),o=Ka(n,a,2),o!==null&&(g0(a,o,n,e),Gt(o,2),Qi(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new US;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),e=zS.bind(null,e,n,a),n.then(e,e))}function zS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,sn===e&&(Ne&a)===a&&(vn===4||vn===3&&(Ne&62914560)===Ne&&300>b()-Ql?(qe&2)===0&&Er(e,0):Hf|=a,yr===Ne&&(yr=0)),Qi(e)}function mg(e,n){n===0&&(n=ut()),e=As(e,n),e!==null&&(Gt(e,n),Qi(e))}function IS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(e,a)}function FS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),mg(e,a)}function BS(e,n){return we(e,n)}var ac=null,Tr=null,jf=!1,sc=!1,Zf=!1,ss=0;function Qi(e){e!==Tr&&e.next===null&&(Tr===null?ac=Tr=e:Tr=Tr.next=e),sc=!0,jf||(jf=!0,GS())}function zo(e,n){if(!Zf&&sc){Zf=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xg(o,d))}else d=Ne,d=xt(o,o===sn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Lt(o,d)||(a=!0,xg(o,d));o=o.next}while(a);Zf=!1}}function HS(){gg()}function gg(){sc=jf=!1;var e=0;ss!==0&&QS()&&(e=ss);for(var n=b(),a=null,o=ac;o!==null;){var u=o.next,d=_g(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(Tr=a)):(a=o,(e!==0||(d&3)!==0)&&(sc=!0)),o=u}Dn!==0&&Dn!==5||zo(e),ss!==0&&(ss=0)}function _g(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-zt(d),R=1<<S,B=u[S];B===-1?((R&a)===0||(R&o)!==0)&&(u[S]=G(R,n)):B<=n&&(e.expiredLanes|=R),d&=~R}if(n=sn,a=Ne,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Fe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Fe(o),oe(a)){case 2:case 8:a=Mt;break;case 32:a=ht;break;case 268435456:a=Nt;break;default:a=ht}return o=vg.bind(null,e),a=we(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Fe(o),e.callbackPriority=2,e.callbackNode=null,2}function vg(e,n){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=Ne;return o=xt(e,e===sn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($0(e,o,n),_g(e,b()),e.callbackNode!=null&&e.callbackNode===a?vg.bind(null,e):null)}function xg(e,n){if(ic())return null;$0(e,n,!0)}function GS(){$S(function(){(qe&6)!==0?we(mt,HS):gg()})}function Kf(){if(ss===0){var e=ur;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),ss=e}return ss}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function VS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Sg((u[Be]||null).action),S=o.submitter;S&&(n=(n=S[Be]||null)?Sg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new _l("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var B=S?yg(u,S):new FormData(u);gf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=S?yg(u,S):new FormData(u),gf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],kS=Jf.toLowerCase(),XS=Jf[0].toUpperCase()+Jf.slice(1);Ii(kS,"on"+XS)}Ii(Jp,"onAnimationEnd"),Ii($p,"onAnimationIteration"),Ii(tm,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(rS,"onTransitionRun"),Ii(oS,"onTransitionStart"),Ii(lS,"onTransitionCancel"),Ii(em,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Mg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],B=R.instance,et=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=et;try{d(u)}catch(pt){Sl(pt)}u.currentTarget=null,d=B}else for(S=0;S<o.length;S++){if(R=o[S],B=R.instance,et=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=et;try{d(u)}catch(pt){Sl(pt)}u.currentTarget=null,d=B}}}}function Ue(e,n){var a=n[Sn];a===void 0&&(a=n[Sn]=new Set);var o=e+"__bubble";a.has(o)||(Eg(n,e,2,!1),a.add(o))}function $f(e,n,a){var o=0;n&&(o|=4),Eg(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[rc]){e[rc]=!0,K.forEach(function(a){a!=="selectionchange"&&(WS.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,$f("selectionchange",!1,n))}}function Eg(e,n,a,o){switch(Jg(n)){case 2:var u=xy;break;case 8:u=Sy;break;default:u=mh}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function eh(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=qi(R),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=d=S;continue t}R=R.parentNode}}o=o.return}Cp(function(){var et=d,pt=_u(a),St=[];t:{var ot=nm.get(e);if(ot!==void 0){var ft=_l,Qt=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ft=Fx;break;case"focusin":Qt="focus",ft=Eu;break;case"focusout":Qt="blur",ft=Eu;break;case"beforeblur":case"afterblur":ft=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Gx;break;case Jp:case $p:case tm:ft=wx;break;case em:ft=kx;break;case"scroll":case"scrollend":ft=bx;break;case"wheel":ft=Wx;break;case"copy":case"cut":case"paste":ft=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Np;break;case"toggle":case"beforetoggle":ft=Yx}var de=(n&4)!==0,nn=!de&&(e==="scroll"||e==="scrollend"),J=de?ot!==null?ot+"Capture":null:ot;de=[];for(var q=et,tt;q!==null;){var _t=q;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||J===null||(_t=ao(q,J),_t!=null&&de.push(Fo(q,_t,tt))),nn)break;q=q.return}0<de.length&&(ot=new ft(ot,Qt,null,a,pt),St.push({event:ot,listeners:de}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==gu&&(Qt=a.relatedTarget||a.fromElement)&&(qi(Qt)||Qt[ln]))break t;if((ft||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Qt=a.relatedTarget||a.toElement,ft=et,Qt=Qt?qi(Qt):null,Qt!==null&&(nn=c(Qt),de=Qt.tag,Qt!==nn||de!==5&&de!==27&&de!==6)&&(Qt=null)):(ft=null,Qt=et),ft!==Qt)){if(de=Up,_t="onMouseLeave",J="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(de=Np,_t="onPointerLeave",J="onPointerEnter",q="pointer"),nn=ft==null?ot:Ms(ft),tt=Qt==null?ot:Ms(Qt),ot=new de(_t,q+"leave",ft,a,pt),ot.target=nn,ot.relatedTarget=tt,_t=null,qi(pt)===et&&(de=new de(J,q+"enter",Qt,a,pt),de.target=tt,de.relatedTarget=nn,_t=de),nn=_t,ft&&Qt)e:{for(de=qS,J=ft,q=Qt,tt=0,_t=J;_t;_t=de(_t))tt++;_t=0;for(var re=q;re;re=de(re))_t++;for(;0<tt-_t;)J=de(J),tt--;for(;0<_t-tt;)q=de(q),_t--;for(;tt--;){if(J===q||q!==null&&J===q.alternate){de=J;break e}J=de(J),q=de(q)}de=null}else de=null;ft!==null&&bg(St,ot,ft,de,!1),Qt!==null&&nn!==null&&bg(St,nn,Qt,de,!0)}}t:{if(ot=et?Ms(et):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ve=Gp;else if(Bp(ot))if(Vp)Ve=iS;else{Ve=eS;var ee=tS}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?et&&zi(et.elementType)&&(Ve=Gp):Ve=nS;if(Ve&&(Ve=Ve(e,et))){Hp(St,Ve,a,pt);break t}ee&&ee(e,ot,et),e==="focusout"&&et&&ot.type==="number"&&et.memoizedProps.value!=null&&Bn(ot,"number",ot.value)}switch(ee=et?Ms(et):window,e){case"focusin":(Bp(ee)||ee.contentEditable==="true")&&(nr=ee,wu=et,ho=null);break;case"focusout":ho=wu=nr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Kp(St,a,pt);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":Kp(St,a,pt)}var be;if(Tu)t:{switch(e){case"compositionstart":var Oe="onCompositionStart";break t;case"compositionend":Oe="onCompositionEnd";break t;case"compositionupdate":Oe="onCompositionUpdate";break t}Oe=void 0}else er?Ip(e,a)&&(Oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(Op&&a.locale!=="ko"&&(er||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&er&&(be=wp()):(ka=pt,Su="value"in ka?ka.value:ka.textContent,er=!0)),ee=oc(et,Oe),0<ee.length&&(Oe=new Lp(Oe,e,null,a,pt),St.push({event:Oe,listeners:ee}),be?Oe.data=be:(be=Fp(a),be!==null&&(Oe.data=be)))),(be=Zx?Kx(e,a):Qx(e,a))&&(Oe=oc(et,"onBeforeInput"),0<Oe.length&&(ee=new Lp("onBeforeInput","beforeinput",null,a,pt),St.push({event:ee,listeners:Oe}),ee.data=be)),VS(St,e,et,a,pt)}Mg(St,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ao(e,a),u!=null&&o.unshift(Fo(e,u,d)),u=ao(e,n),u!=null&&o.push(Fo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function qS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var R=a,B=R.alternate,et=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||et===null||(B=et,u?(et=ao(a,d),et!=null&&S.unshift(Fo(a,et,B))):u||(et=ao(a,d),et!=null&&S.push(Fo(a,et,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var YS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(jS,"")}function Ag(e,n){return n=Tg(n),Tg(e)===n}function en(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wn(e,""+o);break;case"className":le(e,"class",o);break;case"tabIndex":le(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":le(e,a,o);break;case"style":Js(e,o,d);break;case"data":if(n!=="object"){le(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&en(e,n,"name",u.name,u,null),en(e,n,"formEncType",u.formEncType,u,null),en(e,n,"formMethod",u.formMethod,u,null),en(e,n,"formTarget",u.formTarget,u,null)):(en(e,n,"encType",u.encType,u,null),en(e,n,"method",u.method,u,null),en(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ua);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mx.get(a)||a,$t(e,a,o))}}function nh(e,n,a,o,u,d){switch(a){case"style":Js(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wn(e,o):(typeof o=="number"||typeof o=="bigint")&&wn(e,""+o);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Be]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function qn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,d,S,a,null)}}u&&en(e,n,"srcSet",a.srcSet,a,null),o&&en(e,n,"src",a.src,a,null);return;case"input":Ue("invalid",e);var R=d=S=u=null,B=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":S=pt;break;case"checked":B=pt;break;case"defaultChecked":et=pt;break;case"value":d=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:en(e,n,o,pt,a,null)}}ca(e,d,R,B,et,S,u,!1);return;case"select":Ue("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:en(e,n,u,R,a,null)}n=d,a=S,e.multiple=!!o,n!=null?Mi(e,!!o,n,!1):a!=null&&Mi(e,!!o,a,!0);return;case"textarea":Ue("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:en(e,n,S,R,a,null)}Hn(e,o,u,d);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:en(e,n,B,o,a,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)Ue(Io[o],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,et,o,a,null)}return;default:if(zi(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&nh(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&en(e,n,R,o,a,null))}function ZS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,B=null,et=null,pt=null;for(ft in a){var St=a[ft];if(a.hasOwnProperty(ft)&&St!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":B=St;default:o.hasOwnProperty(ft)||en(e,n,ft,null,o,St)}}for(var ot in o){var ft=o[ot];if(St=a[ot],o.hasOwnProperty(ot)&&(ft!=null||St!=null))switch(ot){case"type":d=ft;break;case"name":u=ft;break;case"checked":et=ft;break;case"defaultChecked":pt=ft;break;case"value":S=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==St&&en(e,n,ot,ft,o,St)}}Fn(e,S,R,B,et,pt,d,u);return;case"select":ft=S=R=ot=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ft=B;default:o.hasOwnProperty(d)||en(e,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ot=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==B&&en(e,n,u,d,o,B)}n=R,a=S,o=ft,ot!=null?Mi(e,!!a,ot,!1):!!o!=!!a&&(n!=null?Mi(e,!!a,n,!0):Mi(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:en(e,n,R,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&en(e,n,S,u,o,d)}Ke(e,ot,ft);return;case"option":for(var Qt in a)if(ot=a[Qt],a.hasOwnProperty(Qt)&&ot!=null&&!o.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:en(e,n,Qt,null,o,ot)}for(B in o)if(ot=o[B],ft=a[B],o.hasOwnProperty(B)&&ot!==ft&&(ot!=null||ft!=null))switch(B){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:en(e,n,B,ot,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)ot=a[de],a.hasOwnProperty(de)&&ot!=null&&!o.hasOwnProperty(de)&&en(e,n,de,null,o,ot);for(et in o)if(ot=o[et],ft=a[et],o.hasOwnProperty(et)&&ot!==ft&&(ot!=null||ft!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:en(e,n,et,ot,o,ft)}return;default:if(zi(n)){for(var nn in a)ot=a[nn],a.hasOwnProperty(nn)&&ot!==void 0&&!o.hasOwnProperty(nn)&&nh(e,n,nn,void 0,o,ot);for(pt in o)ot=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||ot===ft||ot===void 0&&ft===void 0||nh(e,n,pt,ot,o,ft);return}}for(var J in a)ot=a[J],a.hasOwnProperty(J)&&ot!=null&&!o.hasOwnProperty(J)&&en(e,n,J,null,o,ot);for(St in o)ot=o[St],ft=a[St],!o.hasOwnProperty(St)||ot===ft||ot==null&&ft==null||en(e,n,St,ot,o,ft)}function Rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&Rg(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],et=B.startTime;if(et>R)break;var pt=B.transferSize,St=B.initiatorType;pt&&Rg(St)&&(B=B.responseEnd,S+=pt*(B<R?1:(R-et)/(B-et)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ih=null,ah=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function QS(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(ty)}:Dg;function ty(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function Lg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),wr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[la]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);wr(n)}function Ng(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),Ga(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ey(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function ny(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wi(e.nextSibling),e===null))return null;return e}function Og(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function wi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function Pg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return wi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ig(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ga(e)}var Di=new Map,Fg=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=V.d;V.d={f:ay,r:sy,D:ry,C:oy,L:ly,m:cy,X:fy,S:uy,M:hy};function ay(){var e=Aa.f(),n=tc();return e||n}function sy(e){var n=Yi(e);n!==null&&n.tag===5&&n.type==="form"?e0(n):Aa.r(e)}var Ar=typeof document>"u"?null:document;function Bg(e,n,a){var o=Ar;if(o&&typeof n=="string"&&n){var u=ge(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Fg.has(u)||(Fg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),qn(n,"link",e),C(n),o.head.appendChild(n)))}}function ry(e){Aa.D(e),Bg("dns-prefetch",e,null)}function oy(e,n){Aa.C(e,n),Bg("preconnect",e,n)}function ly(e,n,a){Aa.L(e,n,a);var o=Ar;if(o&&e&&n){var u='link[rel="preload"][as="'+ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ge(a.imageSizes)+'"]')):u+='[href="'+ge(e)+'"]';var d=u;switch(n){case"style":d=Rr(e);break;case"script":d=Cr(e)}Di.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(d))||n==="script"&&o.querySelector(Go(d))||(n=o.createElement("link"),qn(n,"link",e),C(n),o.head.appendChild(n)))}}function cy(e,n){Aa.m(e,n);var a=Ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ge(o)+'"][href="'+ge(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Cr(e)}if(!Di.has(d)&&(e=_({rel:"modulepreload",href:e},n),Di.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(d)))return}o=a.createElement("link"),qn(o,"link",e),C(o),a.head.appendChild(o)}}}function uy(e,n,a){Aa.S(e,n,a);var o=Ar;if(o&&e){var u=Va(o).hoistableStyles,d=Rr(e);n=n||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Ho(d)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(d))&&fh(e,a);var B=S=o.createElement("link");C(B),qn(B,"link",e),B._p=new Promise(function(et,pt){B.onload=et,B.onerror=pt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,uc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function fy(e,n){Aa.X(e,n);var a=Ar;if(a&&e){var o=Va(a).hoistableScripts,u=Cr(e),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(e=_({src:e,async:!0},n),(n=Di.get(u))&&hh(e,n),d=a.createElement("script"),C(d),qn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function hy(e,n){Aa.M(e,n);var a=Ar;if(a&&e){var o=Va(a).hoistableScripts,u=Cr(e),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Di.get(u))&&hh(e,n),d=a.createElement("script"),C(d),qn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Hg(e,n,a,o){var u=(u=it.current)?cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rr(a.href),a=Va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rr(a.href);var d=Va(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Ho(e)))&&!d._p&&(S.instance=d,S.state.loading=5),Di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,a),d||dy(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cr(a),a=Va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rr(e){return'href="'+ge(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function dy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),qn(n,"link",a),C(n),e.head.appendChild(n))}function Cr(e){return'[src="'+ge(e)+'"]'}function Go(e){return"script[async]"+e}function Vg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ge(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),qn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Rr(a.href);var d=e.querySelector(Ho(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=Gg(a),(u=Di.get(u))&&fh(o,u),d=(e.ownerDocument||e).createElement("link"),C(d);var S=d;return S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),qn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,e),n.instance=d;case"script":return d=Cr(a.src),(u=e.querySelector(Go(d)))?(n.instance=u,C(u),u):(o=a,(u=Di.get(d))&&(o=_({},a),hh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),qn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function kg(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[la]||d[ye]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function Xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function py(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function my(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rr(o.href),d=n.querySelector(Ho(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=Gg(o),(u=Di.get(u))&&fh(o,u),d=d.createElement("link"),C(d);var S=d;S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),qn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function gy(e,n){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&dh===0&&(dh=62500*KS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>dh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(_y,e),dc=null,hc.call(e))}function _y(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:L,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function vy(e,n,a,o,u,d,S,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.hiddenUpdates=gt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function qg(e,n,a,o,u,d,S,R,B,et,pt,St){return e=new vy(e,n,a,S,B,et,pt,St,R),n=1,d===!0&&(n|=24),d=di(3,null,null,n),e.current=d,d.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Zu(d),e}function Yg(e){return e?(e=sr,e):sr}function jg(e,n,a,o,u,d){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ka(e,o,n),a!==null&&(li(a,e,n),So(a,e,n))}function Zg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ph(e,n){Zg(e,n),(e=e.alternate)&&Zg(e,n)}function Kg(e){if(e.tag===13||e.tag===31){var n=As(e,67108864);n!==null&&li(n,e,67108864),ph(e,67108864)}}function Qg(e){if(e.tag===13||e.tag===31){var n=vi();n=qt(n);var a=As(e,n);a!==null&&li(a,e,n),ph(e,n)}}var mc=!0;function xy(e,n,a,o){var u=I.T;I.T=null;var d=V.p;try{V.p=2,mh(e,n,a,o)}finally{V.p=d,I.T=u}}function Sy(e,n,a,o){var u=I.T;I.T=null;var d=V.p;try{V.p=8,mh(e,n,a,o)}finally{V.p=d,I.T=u}}function mh(e,n,a,o){if(mc){var u=gh(o);if(u===null)eh(e,n,o,gc,a),$g(e,o);else if(My(u,e,n,a,o))o.stopPropagation();else if($g(e,o),n&4&&-1<yy.indexOf(e)){for(;u!==null;){var d=Yi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Tt(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var B=1<<31-zt(S);R.entanglements[1]|=B,S&=~B}Qi(d),(qe&6)===0&&(Jl=b()+500,zo(0))}}break;case 31:case 13:R=As(d,2),R!==null&&li(R,d,2),tc(),ph(d,2)}if(d=gh(o),d===null&&eh(e,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else eh(e,n,o,null,a)}}function gh(e){return e=_u(e),_h(e)}var gc=null;function _h(e){if(gc=null,e=qi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case mt:return 2;case Mt:return 8;case ht:case Jt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var vh=!1,os=null,ls=null,cs=null,ko=new Map,Xo=new Map,us=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Yi(n),n!==null&&Kg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function My(e,n,a,o,u){switch(n){case"focusin":return os=Wo(os,e,n,a,o,u),!0;case"dragenter":return ls=Wo(ls,e,n,a,o,u),!0;case"mouseover":return cs=Wo(cs,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return ko.set(d,Wo(ko.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Xo.set(d,Wo(Xo.get(d)||null,e,n,a,o,u)),!0}return!1}function t_(e){var n=qi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Pe(e.priority,function(){Qg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Pe(e.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Yi(a),n!==null&&Kg(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){_c(e)&&a.delete(n)}function Ey(){vh=!1,os!==null&&_c(os)&&(os=null),ls!==null&&_c(ls)&&(ls=null),cs!==null&&_c(cs)&&(cs=null),ko.forEach(e_),Xo.forEach(e_)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ey)))}var xc=null;function n_(e){xc!==e&&(xc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var d=Yi(a);d!==null&&(e.splice(n,3),n-=3,gf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wr(e){function n(B){return vc(B,e)}os!==null&&vc(os,e),ls!==null&&vc(ls,e),cs!==null&&vc(cs,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&us.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[Be]||null;if(typeof d=="function")S||n_(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Be]||null)R=S.formAction;else if(_h(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(e){this._internalRoot=e}Sc.prototype.render=xh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=vi();jg(a,o,e,n,null,null)},Sc.prototype.unmount=xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jg(e.current,2,null,e,null,null),tc(),n[ln]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Se();e={blockedOn:null,target:e,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,e),a===0&&t_(e)}};var a_=t.version;if(a_!=="19.2.3")throw Error(s(527,a_,"19.2.3"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var by={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{At=yc.inject(by),Ct=yc}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=f0,d=h0,S=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=qg(e,1,!1,null,null,a,o,null,u,d,S,i_),e[ln]=n.current,th(e),new xh(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=f0,S=h0,R=d0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=qg(e,1,!0,n,a??null,o,u,B,d,S,R,i_),n.context=Yg(null),a=n.current,o=vi(),o=qt(o),u=Za(o),u.callback=null,Ka(a,u,o),a=o,n.current.lanes=a,Gt(n,a),Qi(n),e[ln]=n.current,th(e),new Sc(n)},Yo.version="19.2.3",Yo}var p_;function Oy(){if(p_)return Mh.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=Ny(),Mh.exports}var Py=Oy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="182",Yr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zy=0,m_=1,Iy=2,Yc=1,Fy=2,il=3,ys=0,fi=1,Na=2,Pa=0,jr=1,g_=2,__=3,v_=4,By=5,Ws=100,Hy=101,Gy=102,Vy=103,ky=104,Xy=200,Wy=201,qy=202,Yy=203,cd=204,ud=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tM=212,eM=213,nM=214,fd=0,hd=1,dd=2,Kr=3,pd=4,md=5,gd=6,_d=7,zv=0,iM=1,aM=2,na=0,Iv=1,Fv=2,Bv=3,Hv=4,Gv=5,Vv=6,kv=7,Xv=300,Zs=301,Qr=302,vd=303,xd=304,lu=306,Sd=1e3,Oa=1001,yd=1002,Yn=1003,sM=1004,Mc=1005,Jn=1006,Ah=1007,Ys=1008,yi=1009,Wv=1010,qv=1011,sl=1012,up=1013,sa=1014,ta=1015,Ia=1016,fp=1017,hp=1018,rl=1020,Yv=35902,jv=35899,Zv=1021,Kv=1022,Xi=1023,Fa=1026,js=1027,Qv=1028,dp=1029,Jr=1030,pp=1031,mp=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Rd=37492,Cd=37496,wd=37488,Dd=37489,Ud=37490,Ld=37491,Nd=37808,Od=37809,Pd=37810,zd=37811,Id=37812,Fd=37813,Bd=37814,Hd=37815,Gd=37816,Vd=37817,kd=37818,Xd=37819,Wd=37820,qd=37821,Yd=36492,jd=36494,Zd=36495,Kd=36283,Qd=36284,Jd=36285,$d=36286,rM=3200,Jv=0,oM=1,vs="",Li="srgb",$r="srgb-linear",eu="linear",$e="srgb",Dr=7680,x_=519,lM=512,cM=513,uM=514,gp=515,fM=516,hM=517,_p=518,dM=519,S_=35044,y_="300 es",ea=2e3,nu=2001;function $v(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=iu("canvas");return r.style.display="block",r}const M_={};function E_(...r){const t="THREE."+r.shift();console.log(t,...r)}function me(...r){const t="THREE."+r.shift();console.warn(t,...r)}function He(...r){const t="THREE."+r.shift();console.error(t,...r)}function ol(...r){const t=r.join(" ");t in M_||(M_[t]=!0,me(...r))}function mM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,tp=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]).toLowerCase()}function Le(r,t,i){return Math.max(t,Math.min(i,r))}function gM(r,t){return(r%t+t)%t}function Rh(r,t,i){return(1-i)*r+i*t}function jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ci(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _M={DEG2RAD:Jc};class _e{constructor(t=0,i=0){_e.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ba{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==x||p!==y||g!==E){let M=m*x+p*y+g*E+_*T;M<0&&(x=-x,y=-y,E=-E,T=-T,M=-M);let v=1-h;if(M<.9995){const U=Math.acos(M),L=Math.sin(U);v=Math.sin(v*U)/L,h=Math.sin(h*U)/L,m=m*v+x*h,p=p*v+y*h,g=g*v+E*h,_=_*v+T*h}else{m=m*v+x*h,p=p*v+y*h,g=g*v+E*h,_=_*v+T*h;const U=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=U,p*=U,g*=U,_*=U}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[i]=h*E+g*_+m*y-p*x,t[i+1]=m*E+g*x+p*_-h*y,t[i+2]=p*E+g*y+h*x-m*_,t[i+3]=g*E-h*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),x=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"YZX":this._x=x*g*_+p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_-x*y*E;break;case"XZY":this._x=x*g*_-p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_+x*y*E;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(b_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new j,b_=new Ba;class Te{constructor(t,i,s,l,c,f,h,m,p){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],E=s[8],T=l[0],M=l[3],v=l[6],U=l[1],L=l[4],D=l[7],O=l[2],F=l[5],N=l[8];return c[0]=f*T+h*U+m*O,c[3]=f*M+h*L+m*F,c[6]=f*v+h*D+m*N,c[1]=p*T+g*U+_*O,c[4]=p*M+g*L+_*F,c[7]=p*v+g*D+_*N,c[2]=x*T+y*U+E*O,c[5]=x*M+y*L+E*F,c[8]=x*v+y*D+E*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,x=h*m-g*c,y=p*c-f*m,E=i*_+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(wh.makeScale(t,i)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,i){return this.premultiply(wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new Te,T_=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vM(){const r={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$e&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$e&&(l.r=Zr(l.r),l.g=Zr(l.g),l.b=Zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$r]:{primaries:t,whitePoint:s,transfer:eu,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:s,transfer:$e,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),r}const Ge=vM();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ur;class xM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ur===void 0&&(Ur=iu("canvas")),Ur.width=t.width,Ur.height=t.height;const l=Ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ur}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=iu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=za(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let SM=0;class vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dh(l[f].image)):c.push(Dh(l[f]))}else c=Dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let yM=0;const Uh=new j;class ei extends Ks{constructor(t=ei.DEFAULT_IMAGE,i=ei.DEFAULT_MAPPING,s=Oa,l=Oa,c=Jn,f=Ys,h=Xi,m=yi,p=ei.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=cl(),this.name="",this.source=new vp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sd:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sd:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Xv;ei.DEFAULT_ANISOTROPY=1;class xn{constructor(t=0,i=0,s=0,l=1){xn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],E=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(y+1)/2,O=(v+1)/2,F=(g+x)/4,N=(_+T)/4,k=(E+M)/4;return L>D&&L>O?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=N/s):D>O?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=k/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=N/c,l=k/c),this.set(s,l,c,i),this}let U=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(M-E)/U,this.y=(_-T)/U,this.z=(x-g)/U,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this.w=Le(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this.w=Le(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MM extends Ks{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new xn(0,0,t,i),this.scissorTest=!1,this.viewport=new xn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new ei(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends MM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class tx extends ei{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends ei{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ec.copy(s.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),bc.subVectors(this.max,Zo),Lr.subVectors(t.a,Zo),Nr.subVectors(t.b,Zo),Or.subVectors(t.c,Zo),hs.subVectors(Nr,Lr),ds.subVectors(Or,Nr),Bs.subVectors(Lr,Or);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Bs.z,Bs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Bs.z,0,-Bs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Bs.y,Bs.x,0];return!Lh(i,Lr,Nr,Or,bc)||(i=[1,0,0,0,1,0,0,0,1],!Lh(i,Lr,Nr,Or,bc))?!1:(Tc.crossVectors(hs,ds),i=[Tc.x,Tc.y,Tc.z],Lh(i,Lr,Nr,Or,bc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new j,new j,new j,new j,new j,new j,new j,new j],Hi=new j,Ec=new ul,Lr=new j,Nr=new j,Or=new j,hs=new j,ds=new j,Bs=new j,Zo=new j,bc=new j,Tc=new j,Hs=new j;function Lh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Hs.fromArray(r,c);const h=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),m=t.dot(Hs),p=i.dot(Hs),g=s.dot(Hs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const bM=new ul,Ko=new j,Nh=new j;class cu{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):bM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Nh)),this.expandByPoint(Ko.copy(t.center).sub(Nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ca=new j,Oh=new j,Ac=new j,ps=new j,Ph=new j,Rc=new j,zh=new j;class uu{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Oh.copy(t).add(i).multiplyScalar(.5),Ac.copy(i).sub(t).normalize(),ps.copy(this.origin).sub(Oh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ac),h=ps.dot(this.direction),m=-ps.dot(Ac),p=ps.lengthSq(),g=Math.abs(1-f*f);let _,x,y,E;if(g>0)if(_=f*m-h,x=f*h-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,y=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Oh).addScaledVector(Ac,x),y}intersectSphere(t,i){Ca.subVectors(t.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,s,l,c){Ph.subVectors(i,t),Rc.subVectors(s,t),zh.crossVectors(Ph,Rc);let f=this.direction.dot(zh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ps.subVectors(this.origin,t);const m=h*this.direction.dot(Rc.crossVectors(ps,Rc));if(m<0)return null;const p=h*this.direction.dot(Ph.cross(ps));if(p<0||m+p>f)return null;const g=-h*ps.dot(zh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,i,s,l,c,f,h,m,p,g,_,x,y,E,T,M){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,_,x,y,E,T,M)}set(t,i,s,l,c,f,h,m,p,g,_,x,y,E,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Pr.setFromMatrixColumn(t,0).length(),c=1/Pr.setFromMatrixColumn(t,1).length(),f=1/Pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,E=p*g,T=p*_;i[0]=x+T*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=y*h-E,i[6]=T+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,E=p*g,T=p*_;i[0]=x-T*h,i[4]=-f*_,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*g,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-x*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+E,i[10]=x-T*_}else if(t.order==="XZY"){const x=f*m,y=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=h*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(TM,t,AM)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ms.crossVectors(s,xi),ms.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ms.crossVectors(s,xi)),ms.normalize(),Cc.crossVectors(xi,ms),l[0]=ms.x,l[4]=Cc.x,l[8]=xi.x,l[1]=ms.y,l[5]=Cc.y,l[9]=xi.y,l[2]=ms.z,l[6]=Cc.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],E=s[2],T=s[6],M=s[10],v=s[14],U=s[3],L=s[7],D=s[11],O=s[15],F=l[0],N=l[4],k=l[8],A=l[12],w=l[1],X=l[5],H=l[9],Q=l[13],at=l[2],lt=l[6],I=l[10],V=l[14],nt=l[3],Et=l[7],yt=l[11],z=l[15];return c[0]=f*F+h*w+m*at+p*nt,c[4]=f*N+h*X+m*lt+p*Et,c[8]=f*k+h*H+m*I+p*yt,c[12]=f*A+h*Q+m*V+p*z,c[1]=g*F+_*w+x*at+y*nt,c[5]=g*N+_*X+x*lt+y*Et,c[9]=g*k+_*H+x*I+y*yt,c[13]=g*A+_*Q+x*V+y*z,c[2]=E*F+T*w+M*at+v*nt,c[6]=E*N+T*X+M*lt+v*Et,c[10]=E*k+T*H+M*I+v*yt,c[14]=E*A+T*Q+M*V+v*z,c[3]=U*F+L*w+D*at+O*nt,c[7]=U*N+L*X+D*lt+O*Et,c[11]=U*k+L*H+D*I+O*yt,c[15]=U*A+L*Q+D*V+O*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],E=t[3],T=t[7],M=t[11],v=t[15],U=m*y-p*x,L=h*y-p*_,D=h*x-m*_,O=f*y-p*g,F=f*x-m*g,N=f*_-h*g;return i*(T*U-M*L+v*D)-s*(E*U-M*O+v*F)+l*(E*L-T*O+v*N)-c*(E*D-T*F+M*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],E=t[12],T=t[13],M=t[14],v=t[15],U=_*M*p-T*x*p+T*m*y-h*M*y-_*m*v+h*x*v,L=E*x*p-g*M*p-E*m*y+f*M*y+g*m*v-f*x*v,D=g*T*p-E*_*p+E*h*y-f*T*y-g*h*v+f*_*v,O=E*_*m-g*T*m-E*h*x+f*T*x+g*h*M-f*_*M,F=i*U+s*L+l*D+c*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return t[0]=U*N,t[1]=(T*x*c-_*M*c-T*l*y+s*M*y+_*l*v-s*x*v)*N,t[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*v+s*m*v)*N,t[3]=(_*m*c-h*x*c-_*l*p+s*x*p+h*l*y-s*m*y)*N,t[4]=L*N,t[5]=(g*M*c-E*x*c+E*l*y-i*M*y-g*l*v+i*x*v)*N,t[6]=(E*m*c-f*M*c-E*l*p+i*M*p+f*l*v-i*m*v)*N,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*y+i*m*y)*N,t[8]=D*N,t[9]=(E*_*c-g*T*c-E*s*y+i*T*y+g*s*v-i*_*v)*N,t[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*v+i*h*v)*N,t[11]=(g*h*c-f*_*c-g*s*p+i*_*p+f*s*y-i*h*y)*N,t[12]=O*N,t[13]=(g*T*l-E*_*l+E*s*x-i*T*x-g*s*M+i*_*M)*N,t[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*M-i*h*M)*N,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*x+i*h*x)*N,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,x=c*p,y=c*g,E=c*_,T=f*g,M=f*_,v=h*_,U=m*p,L=m*g,D=m*_,O=s.x,F=s.y,N=s.z;return l[0]=(1-(T+v))*O,l[1]=(y+D)*O,l[2]=(E-L)*O,l[3]=0,l[4]=(y-D)*F,l[5]=(1-(x+v))*F,l[6]=(M+U)*F,l[7]=0,l[8]=(E+L)*N,l[9]=(M-U)*N,l[10]=(1-(x+T))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Pr.set(l[0],l[1],l[2]).length();const f=Pr.set(l[4],l[5],l[6]).length(),h=Pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Gi.copy(this);const p=1/c,g=1/f,_=1/h;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,i.setFromRotationMatrix(Gi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=ea,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===ea)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===nu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=ea,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===ea)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===nu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Pr=new j,Gi=new pn,TM=new j(0,0,0),AM=new j(1,1,1),ms=new j,Cc=new j,xi=new j,R_=new pn,C_=new Ba;class ra{constructor(t=0,i=0,s=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Le(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Le(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return R_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(R_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return C_.setFromEuler(this),this.setFromQuaternion(C_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let RM=0;const w_=new j,zr=new Ba,wa=new pn,wc=new j,Qo=new j,CM=new j,wM=new Ba,D_=new j(1,0,0),U_=new j(0,1,0),L_=new j(0,0,1),N_={type:"added"},DM={type:"removed"},Ir={type:"childadded",child:null},Ih={type:"childremoved",child:null};class In extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new j,i=new ra,s=new Ba,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new Te}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(L_,t)}translateOnAxis(t,i){return w_.copy(t).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(L_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?wc.copy(t):wc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(Qo,wc,this.up):wa.lookAt(wc,Qo,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),zr.setFromRotationMatrix(wa),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(N_),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(DM),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(N_),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,CM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,wM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new j(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new j,Da=new j,Fh=new j,Ua=new j,Fr=new j,Br=new j,O_=new j,Bh=new j,Hh=new j,Gh=new j,Vh=new xn,kh=new xn,Xh=new xn;class ki{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Vi.subVectors(t,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Vi.subVectors(l,i),Da.subVectors(s,i),Fh.subVectors(t,i);const f=Vi.dot(Vi),h=Vi.dot(Da),m=Vi.dot(Fh),p=Da.dot(Da),g=Da.dot(Fh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ua.x),m.addScaledVector(f,Ua.y),m.addScaledVector(h,Ua.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Vh,c.x),f.addScaledVector(kh,c.y),f.addScaledVector(Xh,c.z),f}static isFrontFacing(t,i,s,l){return Vi.subVectors(s,i),Da.subVectors(t,i),Vi.cross(Da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Vi.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Fr.subVectors(l,s),Br.subVectors(c,s),Bh.subVectors(t,s);const m=Fr.dot(Bh),p=Br.dot(Bh);if(m<=0&&p<=0)return i.copy(s);Hh.subVectors(t,l);const g=Fr.dot(Hh),_=Br.dot(Hh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Fr,f);Gh.subVectors(t,c);const y=Fr.dot(Gh),E=Br.dot(Gh);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Br,h);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return O_.subVectors(c,l),h=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(O_,h);const v=1/(M+T+x);return f=T*v,h=x*v,i.copy(s).addScaledVector(Fr,f).addScaledVector(Br,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Wh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ie{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ge.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ge.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ge.workingColorSpace){if(t=gM(t,1),i=Le(i,0,1),s=Le(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Wh(f,c,t+1/3),this.g=Wh(f,c,t),this.b=Wh(f,c,t-1/3)}return Ge.colorSpaceToWorking(this,l),this}setStyle(t,i=Li){function s(c){c!==void 0&&parseFloat(c)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Li){const s=ex[t.toLowerCase()];return s!==void 0?this.setHex(s,i):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return Ge.workingToColorSpace(Kn.copy(this),t),Math.round(Le(Kn.r*255,0,255))*65536+Math.round(Le(Kn.g*255,0,255))*256+Math.round(Le(Kn.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ge.workingColorSpace){Ge.workingToColorSpace(Kn.copy(this),i);const s=Kn.r,l=Kn.g,c=Kn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ge.workingColorSpace){return Ge.workingToColorSpace(Kn.copy(this),i),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=Li){Ge.workingToColorSpace(Kn.copy(this),t);const i=Kn.r,s=Kn.g,l=Kn.b;return t!==Li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+i,gs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(gs),t.getHSL(Dc);const s=Rh(gs.h,Dc.h,i),l=Rh(gs.s,Dc.s,i),c=Rh(gs.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Ie;Ie.NAMES=ex;let UM=0;class no extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=jr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cd&&(s.blendSrc=this.blendSrc),this.blendDst!==ud&&(s.blendDst=this.blendDst),this.blendEquation!==Ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fu extends no{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cn=new j,Uc=new _e;let LM=0;class aa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=S_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(t),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=jo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==S_&&(t.usage=this.usage),t}}class nx extends aa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ix extends aa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class mn extends aa{constructor(t,i,s){super(new Float32Array(t),i,s)}}let NM=0;const Ui=new pn,qh=new In,Hr=new j,Si=new ul,Jo=new ul,Pn=new j;class ni extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($v(t)?ix:nx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Te().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,i,s){return Ui.makeTranslation(t,i,s),this.applyMatrix4(Ui),this}scale(t,i,s){return Ui.makeScale(t,i,s),this.applyMatrix4(Ui),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new mn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Pn.addVectors(Si.min,Jo.min),Si.expandByPoint(Pn),Pn.addVectors(Si.max,Jo.max),Si.expandByPoint(Pn)):(Si.expandByPoint(Jo.min),Si.expandByPoint(Jo.max))}Si.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Pn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Pn.fromBufferAttribute(h,p),m&&(Hr.fromBufferAttribute(t,p),Pn.add(Hr)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new aa(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<s.count;k++)h[k]=new j,m[k]=new j;const p=new j,g=new j,_=new j,x=new _e,y=new _e,E=new _e,T=new j,M=new j;function v(k,A,w){p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,k),y.fromBufferAttribute(c,A),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(x),E.sub(x);const X=1/(y.x*E.y-E.x*y.y);isFinite(X)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(X),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(X),h[k].add(T),h[A].add(T),h[w].add(T),m[k].add(M),m[A].add(M),m[w].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let k=0,A=U.length;k<A;++k){const w=U[k],X=w.start,H=w.count;for(let Q=X,at=X+H;Q<at;Q+=3)v(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const L=new j,D=new j,O=new j,F=new j;function N(k){O.fromBufferAttribute(l,k),F.copy(O);const A=h[k];L.copy(A),L.sub(O.multiplyScalar(O.dot(A))).normalize(),D.crossVectors(F,A);const X=D.dot(m[k])<0?-1:1;f.setXYZW(k,L.x,L.y,L.z,X)}for(let k=0,A=U.length;k<A;++k){const w=U[k],X=w.start,H=w.count;for(let Q=X,at=X+H;Q<at;Q+=3)N(t.getX(Q+0)),N(t.getX(Q+1)),N(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new j,c=new j,f=new j,h=new j,m=new j,p=new j,g=new j,_=new j;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Pn.fromBufferAttribute(t,i),Pn.normalize(),t.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let v=0;v<g;v++)x[E++]=p[y++]}return new aa(x,g,_)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P_=new pn,Gs=new uu,Lc=new cu,z_=new j,Nc=new j,Oc=new j,Pc=new j,Yh=new j,zc=new j,I_=new j,Ic=new j;class Oi extends In{constructor(t=new ni,i=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Yh.fromBufferAttribute(_,t),f?zc.addScaledVector(Yh,g):zc.addScaledVector(Yh.sub(i),g))}i.add(zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),Gs.copy(t.ray).recast(t.near),!(Lc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Lc,z_)===null||Gs.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(P_.copy(c).invert(),Gs.copy(t.ray).applyMatrix4(P_),!(s.boundingBox!==null&&Gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],v=f[M.materialIndex],U=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=U,O=L;D<O;D+=3){const F=h.getX(D),N=h.getX(D+1),k=h.getX(D+2);l=Fc(this,v,t,s,p,g,_,F,N,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=E,v=T;M<v;M+=3){const U=h.getX(M),L=h.getX(M+1),D=h.getX(M+2);l=Fc(this,f,t,s,p,g,_,U,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],v=f[M.materialIndex],U=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=U,O=L;D<O;D+=3){const F=D,N=D+1,k=D+2;l=Fc(this,v,t,s,p,g,_,F,N,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,v=T;M<v;M+=3){const U=M,L=M+1,D=M+2;l=Fc(this,f,t,s,p,g,_,U,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function OM(r,t,i,s,l,c,f,h){let m;if(t.side===fi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ys,h),m===null)return null;Ic.copy(h),Ic.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:r}}function Fc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Nc),r.getVertexPosition(m,Oc),r.getVertexPosition(p,Pc);const g=OM(r,t,i,s,Nc,Oc,Pc,I_);if(g){const _=new j;ki.getBarycoord(I_,Nc,Oc,Pc,_),l&&(g.uv=ki.getInterpolatedAttribute(l,h,m,p,_,new _e)),c&&(g.uv1=ki.getInterpolatedAttribute(c,h,m,p,_,new _e)),f&&(g.normal=ki.getInterpolatedAttribute(f,h,m,p,_,new j),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new j,materialIndex:0};ki.getNormal(Nc,Oc,Pc,x.normal),g.face=x,g.barycoord=_}return g}class fl extends ni{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(_,2));function E(T,M,v,U,L,D,O,F,N,k,A){const w=D/N,X=O/k,H=D/2,Q=O/2,at=F/2,lt=N+1,I=k+1;let V=0,nt=0;const Et=new j;for(let yt=0;yt<I;yt++){const z=yt*X-Q;for(let st=0;st<lt;st++){const vt=st*w-H;Et[T]=vt*U,Et[M]=z*L,Et[v]=at,p.push(Et.x,Et.y,Et.z),Et[T]=0,Et[M]=0,Et[v]=F>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(st/N),_.push(1-yt/k),V+=1}}for(let yt=0;yt<k;yt++)for(let z=0;z<N;z++){const st=x+z+lt*yt,vt=x+z+lt*(yt+1),Dt=x+(z+1)+lt*(yt+1),Xt=x+(z+1)+lt*yt;m.push(st,vt,Xt),m.push(vt,Dt,Xt),nt+=6}h.addGroup(y,nt,A),y+=nt,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function ti(r){const t={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)t[l]=s[l]}return t}function PM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ax(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const zM={clone:to,merge:ti};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oa extends no{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=PM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new j,F_=new _e,B_=new _e;class Ni extends sx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,i){return this.getViewBounds(t,F_,B_),i.subVectors(B_,F_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Gr=-90,Vr=1;class BM extends In{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ni(Gr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new Ni(Gr,Vr,t,i);c.layers=this.layers,this.add(c);const f=new Ni(Gr,Vr,t,i);f.layers=this.layers,this.add(f);const h=new Ni(Gr,Vr,t,i);h.layers=this.layers,this.add(h);const m=new Ni(Gr,Vr,t,i);m.layers=this.layers,this.add(m);const p=new Ni(Gr,Vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class rx extends ei{constructor(t=[],i=Zs,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ox extends ia{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new rx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new oa({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Pa});c.uniforms.tEquirect.value=i;const f=new Oi(l,c),h=i.minFilter;return i.minFilter===Ys&&(i.minFilter=Jn),new BM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Bc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class GM extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class VM extends ei{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Yn,g=Yn,_,x){super(null,f,h,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new j,kM=new j,XM=new Te;class La{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Zh.subVectors(s,i).cross(kM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Zh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||XM.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new cu,WM=new _e(.5,.5),Hc=new j;class Sp{constructor(t=new La,i=new La,s=new La,l=new La,c=new La,f=new La){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ea,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],E=c[8],T=c[9],M=c[10],v=c[11],U=c[12],L=c[13],D=c[14],O=c[15];if(l[0].setComponents(p-f,y-g,v-E,O-U).normalize(),l[1].setComponents(p+f,y+g,v+E,O+U).normalize(),l[2].setComponents(p+h,y+_,v+T,O+L).normalize(),l[3].setComponents(p-h,y-_,v-T,O-L).normalize(),s)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,y-x,v-M,O-D).normalize();else if(l[4].setComponents(p-m,y-x,v-M,O-D).normalize(),i===ea)l[5].setComponents(p+m,y+x,v+M,O+D).normalize();else if(i===nu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(t){Vs.center.set(0,0,0);const i=WM.distanceTo(t.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yp extends no{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const au=new j,su=new j,H_=new pn,$o=new uu,Gc=new cu,Kh=new j,G_=new j;class lx extends In{constructor(t=new ni,i=new yp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)au.fromBufferAttribute(i,l-1),su.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=au.distanceTo(su);t.setAttribute("lineDistance",new mn(s,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;H_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(H_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=p){const v=g.getX(T),U=g.getX(T+1),L=Vc(this,t,$o,m,v,U,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(y),v=Vc(this,t,$o,m,T,M,E-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=p){const v=Vc(this,t,$o,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Vc(this,t,$o,m,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(au.fromBufferAttribute(h,l),su.fromBufferAttribute(h,c),i.distanceSqToSegment(au,su,Kh,G_)>s)return;Kh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Kh);if(!(p<t.near||p>t.far))return{distance:p,point:G_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const V_=new j,k_=new j;class qM extends lx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)V_.fromBufferAttribute(i,l),k_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+V_.distanceTo(k_);t.setAttribute("lineDistance",new mn(s,1))}else me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends ei{constructor(t,i,s=sa,l,c,f,h=Yn,m=Yn,p,g=Fa,_=1){if(g!==Fa&&g!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class YM extends ll{constructor(t,i=sa,s=Zs,l,c,f=Yn,h=Yn,m,p=Fa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cx extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mp extends ni{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],y=[];let E=0;const T=[],M=s/2;let v=0;U(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(y,2));function U(){const D=new j,O=new j;let F=0;const N=(i-t)/s;for(let k=0;k<=c;k++){const A=[],w=k/c,X=w*(i-t)+t;for(let H=0;H<=l;H++){const Q=H/l,at=Q*m+h,lt=Math.sin(at),I=Math.cos(at);O.x=X*lt,O.y=-w*s+M,O.z=X*I,_.push(O.x,O.y,O.z),D.set(lt,N,I).normalize(),x.push(D.x,D.y,D.z),y.push(Q,1-w),A.push(E++)}T.push(A)}for(let k=0;k<l;k++)for(let A=0;A<c;A++){const w=T[A][k],X=T[A+1][k],H=T[A+1][k+1],Q=T[A][k+1];(t>0||A!==0)&&(g.push(w,X,Q),F+=3),(i>0||A!==c-1)&&(g.push(X,H,Q),F+=3)}p.addGroup(v,F,0),v+=F}function L(D){const O=E,F=new _e,N=new j;let k=0;const A=D===!0?t:i,w=D===!0?1:-1;for(let H=1;H<=l;H++)_.push(0,M*w,0),x.push(0,w,0),y.push(.5,.5),E++;const X=E;for(let H=0;H<=l;H++){const at=H/l*m+h,lt=Math.cos(at),I=Math.sin(at);N.x=A*I,N.y=M*w,N.z=A*lt,_.push(N.x,N.y,N.z),x.push(0,w,0),F.x=lt*.5+.5,F.y=I*.5*w+.5,y.push(F.x,F.y),E++}for(let H=0;H<l;H++){const Q=O+H,at=X+H;D===!0?g.push(at,at+1,Q):g.push(at+1,at,Q),k+=3}p.addGroup(v,k,D===!0?1:2),v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ep extends Mp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new Ep(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hu extends ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,x=i/m,y=[],E=[],T=[],M=[];for(let v=0;v<g;v++){const U=v*x-f;for(let L=0;L<p;L++){const D=L*_-c;E.push(D,-U,0),T.push(0,0,1),M.push(L/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const L=U+p*v,D=U+p*(v+1),O=U+1+p*(v+1),F=U+1+p*v;y.push(L,D,F),y.push(D,O,F)}this.setIndex(y),this.setAttribute("position",new mn(E,3)),this.setAttribute("normal",new mn(T,3)),this.setAttribute("uv",new mn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class bp extends ni{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new j,x=new j,y=[],E=[],T=[],M=[];for(let v=0;v<=s;v++){const U=[],L=v/s;let D=0;v===0&&f===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let O=0;O<=i;O++){const F=O/i;_.x=-t*Math.cos(l+F*c)*Math.sin(f+L*h),_.y=t*Math.cos(f+L*h),_.z=t*Math.sin(l+F*c)*Math.sin(f+L*h),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),M.push(F+D,1-L),U.push(p++)}g.push(U)}for(let v=0;v<s;v++)for(let U=0;U<i;U++){const L=g[v][U+1],D=g[v][U],O=g[v+1][U],F=g[v+1][U+1];(v!==0||f>0)&&y.push(L,D,F),(v!==s-1||m<Math.PI)&&y.push(D,O,F)}this.setIndex(y),this.setAttribute("position",new mn(E,3)),this.setAttribute("normal",new mn(T,3)),this.setAttribute("uv",new mn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ru extends ni{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new j,_=new j,x=new j;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const T=E/l*c,M=y/s*Math.PI*2;_.x=(t+i*Math.cos(M))*Math.cos(T),_.y=(t+i*Math.cos(M))*Math.sin(T),_.z=i*Math.sin(M),h.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const T=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,v=(l+1)*(y-1)+E,U=(l+1)*y+E;f.push(T,M,U),f.push(M,v,U)}this.setIndex(f),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jM extends oa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ZM extends no{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jv,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class KM extends no{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QM extends no{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ux extends In{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Qh=new pn,X_=new j,W_=new j;class JM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;X_.setFromMatrixPosition(t.matrixWorld),i.position.copy(X_),W_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(W_),i.updateMatrixWorld(),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tp extends sx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $M extends JM{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q_ extends ux{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new $M}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class tE extends ux{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class eE extends Ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Y_=new pn;class j_{constructor(t,i,s=0,l=1/0){this.ray=new uu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):He("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Y_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Y_),this}intersectObject(t,i=!0,s=[]){return ep(t,this,s,i),s.sort(Z_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)ep(t[l],this,s,i);return s.sort(Z_),s}}function Z_(r,t){return r.distance-t.distance}function ep(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)ep(c[f],t,i,!0)}}class K_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Le(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nE extends qM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Ie(s),l=new Ie(l);const c=i/2,f=t/i,h=t/2,m=[],p=[];for(let x=0,y=0,E=-h;x<=i;x++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const T=x===c?s:l;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const g=new ni;g.setAttribute("position",new mn(m,3)),g.setAttribute("color",new mn(p,3));const _=new yp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Q_=new j;let kc,Jh;class $h extends In{constructor(t=new j(0,0,1),i=new j(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",kc===void 0&&(kc=new ni,kc.setAttribute("position",new mn([0,0,0,0,1,0],3)),Jh=new Ep(.5,1,5,1),Jh.translate(0,-.5,0)),this.position.copy(i),this.line=new lx(kc,new yp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Oi(Jh,new fu({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Q_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Q_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class iE extends Ks{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function J_(r,t,i,s){const l=aE(s);switch(i){case Zv:return r*t;case Qv:return r*t/l.components*l.byteLength;case dp:return r*t/l.components*l.byteLength;case Jr:return r*t*2/l.components*l.byteLength;case pp:return r*t*2/l.components*l.byteLength;case Kv:return r*t*3/l.components*l.byteLength;case Xi:return r*t*4/l.components*l.byteLength;case mp:return r*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:case Td:return Math.max(r,16)*Math.max(t,8)/4;case Md:case bd:return Math.max(r,8)*Math.max(t,8)/2;case Ad:case Rd:case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cd:case Ud:case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yd:case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jd:case $d:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aE(r){switch(r){case yi:case Wv:return{byteLength:1,components:1};case sl:case qv:case Ia:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case sa:case up:case ta:return{byteLength:4,components:1};case Yv:case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function sE(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oE=`#ifdef USE_ALPHAHASH
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
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
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
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
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
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xE=`#ifdef USE_IRIDESCENCE
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
#endif`,SE=`#ifdef USE_BUMPMAP
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,DE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UE=`vec3 transformedNormal = objectNormal;
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
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",IE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
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
}`,jE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
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
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
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
#endif`,ab=`uniform sampler2D dfgLUT;
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
}`,sb=`
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mb=`#if defined( USE_POINTS_UV )
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
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
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
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,p1=`#define DISTANCE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
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
}`,v1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,y1=`#define LAMBERT
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
}`,M1=`#define LAMBERT
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
}`,E1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,A1=`#define NORMAL
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
}`,R1=`#define PHONG
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
}`,C1=`#define PHONG
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
}`,w1=`#define STANDARD
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
}`,D1=`#define STANDARD
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
}`,U1=`#define TOON
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
}`,L1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,O1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,z1=`uniform vec3 color;
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
}`,I1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:rE,alphahash_pars_fragment:oE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:fE,aomap_fragment:hE,aomap_pars_fragment:dE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:_E,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:SE,clipping_planes_fragment:yE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:bE,color_fragment:TE,color_pars_fragment:AE,color_pars_vertex:RE,color_vertex:CE,common:wE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:UE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:PE,colorspace_fragment:zE,colorspace_pars_fragment:IE,envmap_fragment:FE,envmap_common_pars_fragment:BE,envmap_pars_fragment:HE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:JE,envmap_vertex:VE,fog_vertex:kE,fog_pars_vertex:XE,fog_fragment:WE,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:jE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:KE,lights_pars_begin:QE,lights_toon_fragment:$E,lights_toon_pars_fragment:tb,lights_phong_fragment:eb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:ab,lights_fragment_begin:sb,lights_fragment_maps:rb,lights_fragment_end:ob,logdepthbuf_fragment:lb,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:fb,map_fragment:hb,map_pars_fragment:db,map_particle_fragment:pb,map_particle_pars_fragment:mb,metalnessmap_fragment:gb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:xb,morphnormal_vertex:Sb,morphtarget_pars_vertex:yb,morphtarget_vertex:Mb,normal_fragment_begin:Eb,normal_fragment_maps:bb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:Rb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Lb,opaque_fragment:Nb,packing:Ob,premultiplied_alpha_fragment:Pb,project_vertex:zb,dithering_fragment:Ib,dithering_pars_fragment:Fb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Vb,shadowmap_vertex:kb,shadowmask_pars_fragment:Xb,skinbase_vertex:Wb,skinning_pars_vertex:qb,skinning_vertex:Yb,skinnormal_vertex:jb,specularmap_fragment:Zb,specularmap_pars_fragment:Kb,tonemapping_fragment:Qb,tonemapping_pars_fragment:Jb,transmission_fragment:$b,transmission_pars_fragment:t1,uv_pars_fragment:e1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:a1,background_vert:s1,background_frag:r1,backgroundCube_vert:o1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:f1,depth_frag:h1,distance_vert:d1,distance_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:_1,linedashed_frag:v1,meshbasic_vert:x1,meshbasic_frag:S1,meshlambert_vert:y1,meshlambert_frag:M1,meshmatcap_vert:E1,meshmatcap_frag:b1,meshnormal_vert:T1,meshnormal_frag:A1,meshphong_vert:R1,meshphong_frag:C1,meshphysical_vert:w1,meshphysical_frag:D1,meshtoon_vert:U1,meshtoon_frag:L1,points_vert:N1,points_frag:O1,shadow_vert:P1,shadow_frag:z1,sprite_vert:I1,sprite_frag:F1},Vt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},$i={basic:{uniforms:ti([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ti([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ti([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ti([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ti([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ti([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ti([Vt.points,Vt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ti([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ti([Vt.common,Vt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ti([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ti([Vt.sprite,Vt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:ti([Vt.common,Vt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:ti([Vt.lights,Vt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};$i.physical={uniforms:ti([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Xc={r:0,b:0,g:0},ks=new ra,B1=new pn;function H1(r,t,i,s,l,c,f){const h=new Ie(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function T(L){let D=!1;const O=E(L);O===null?v(h,m):O&&O.isColor&&(v(O,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,D){const O=E(D);O&&(O.isCubeTexture||O.mapping===lu)?(g===void 0&&(g=new Oi(new fl(1,1,1),new oa({name:"BackgroundCubeMaterial",uniforms:to($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ks.copy(D.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(ks)),g.material.toneMapped=Ge.getTransfer(O.colorSpace)!==$e,(_!==O||x!==O.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=O,x=O.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Oi(new hu(2,2),new oa({name:"BackgroundMaterial",uniforms:to($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ge.getTransfer(O.colorSpace)!==$e,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=O,x=O.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,D){L.getRGB(Xc,ax(r)),s.buffers.color.setClear(Xc.r,Xc.g,Xc.b,D,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:T,addToRenderList:M,dispose:U}}function G1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,X,H,Q,at){let lt=!1;const I=_(Q,H,X);c!==I&&(c=I,p(c.object)),lt=y(w,Q,H,at),lt&&E(w,Q,H,at),at!==null&&t.update(at,r.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,D(w,X,H,Q),at!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,X,H){const Q=H.wireframe===!0;let at=s[w.id];at===void 0&&(at={},s[w.id]=at);let lt=at[X.id];lt===void 0&&(lt={},at[X.id]=lt);let I=lt[Q];return I===void 0&&(I=x(m()),lt[Q]=I),I}function x(w){const X=[],H=[],Q=[];for(let at=0;at<i;at++)X[at]=0,H[at]=0,Q[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:H,attributeDivisors:Q,object:w,attributes:{},index:null}}function y(w,X,H,Q){const at=c.attributes,lt=X.attributes;let I=0;const V=H.getAttributes();for(const nt in V)if(V[nt].location>=0){const yt=at[nt];let z=lt[nt];if(z===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),yt===void 0||yt.attribute!==z||z&&yt.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==Q}function E(w,X,H,Q){const at={},lt=X.attributes;let I=0;const V=H.getAttributes();for(const nt in V)if(V[nt].location>=0){let yt=lt[nt];yt===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const z={};z.attribute=yt,yt&&yt.data&&(z.data=yt.data),at[nt]=z,I++}c.attributes=at,c.attributesNum=I,c.index=Q}function T(){const w=c.newAttributes;for(let X=0,H=w.length;X<H;X++)w[X]=0}function M(w){v(w,0)}function v(w,X){const H=c.newAttributes,Q=c.enabledAttributes,at=c.attributeDivisors;H[w]=1,Q[w]===0&&(r.enableVertexAttribArray(w),Q[w]=1),at[w]!==X&&(r.vertexAttribDivisor(w,X),at[w]=X)}function U(){const w=c.newAttributes,X=c.enabledAttributes;for(let H=0,Q=X.length;H<Q;H++)X[H]!==w[H]&&(r.disableVertexAttribArray(H),X[H]=0)}function L(w,X,H,Q,at,lt,I){I===!0?r.vertexAttribIPointer(w,X,H,at,lt):r.vertexAttribPointer(w,X,H,Q,at,lt)}function D(w,X,H,Q){T();const at=Q.attributes,lt=H.getAttributes(),I=X.defaultAttributeValues;for(const V in lt){const nt=lt[V];if(nt.location>=0){let Et=at[V];if(Et===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const yt=Et.normalized,z=Et.itemSize,st=t.get(Et);if(st===void 0)continue;const vt=st.buffer,Dt=st.type,Xt=st.bytesPerElement,it=Dt===r.INT||Dt===r.UNSIGNED_INT||Et.gpuType===up;if(Et.isInterleavedBufferAttribute){const dt=Et.data,Rt=dt.stride,jt=Et.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<nt.locationSize;kt++)v(nt.location+kt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let kt=0;kt<nt.locationSize;kt++)M(nt.location+kt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let kt=0;kt<nt.locationSize;kt++)L(nt.location+kt,z/nt.locationSize,Dt,yt,Rt*Xt,(jt+z/nt.locationSize*kt)*Xt,it)}else{if(Et.isInstancedBufferAttribute){for(let dt=0;dt<nt.locationSize;dt++)v(nt.location+dt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let dt=0;dt<nt.locationSize;dt++)M(nt.location+dt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let dt=0;dt<nt.locationSize;dt++)L(nt.location+dt,z/nt.locationSize,Dt,yt,z*Xt,z/nt.locationSize*dt*Xt,it)}}else if(I!==void 0){const yt=I[V];if(yt!==void 0)switch(yt.length){case 2:r.vertexAttrib2fv(nt.location,yt);break;case 3:r.vertexAttrib3fv(nt.location,yt);break;case 4:r.vertexAttrib4fv(nt.location,yt);break;default:r.vertexAttrib1fv(nt.location,yt)}}}}U()}function O(){k();for(const w in s){const X=s[w];for(const H in X){const Q=X[H];for(const at in Q)g(Q[at].object),delete Q[at];delete X[H]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const X=s[w.id];for(const H in X){const Q=X[H];for(const at in Q)g(Q[at].object),delete Q[at];delete X[H]}delete s[w.id]}function N(w){for(const X in s){const H=s[X];if(H[w.id]===void 0)continue;const Q=H[w.id];for(const at in Q)g(Q[at].object),delete Q[at];delete H[w.id]}}function k(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function V1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function k1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Xi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const k=N===Ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==yi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ta&&!k)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(me("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:D,maxSamples:O,samples:F}}function X1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new La,h=new Te,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const U=c?0:s,L=U*4;let D=v.clippingState||null;m.value=D,D=g(E,x,L,y);for(let O=0;O!==L;++O)D[O]=i[O];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const v=y+T*4,U=x.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,D=y;L!==T;++L,D+=4)f.copy(_[L]).applyMatrix4(U,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function W1(r){let t=new WeakMap;function i(f,h){return h===vd?f.mapping=Zs:h===xd&&(f.mapping=Qr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===vd||h===xd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ox(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const xs=4,$_=[.125,.215,.35,.446,.526,.582],qs=20,q1=256,tl=new Tp,tv=new Ie;let td=null,ed=0,nd=0,id=!1;const Y1=new j;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=Y1}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Zs||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ia,format:Xi,colorSpace:$r,depthBuffer:!1},l=nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j1(c)),this._blurMaterial=K1(c,t,i),this._ggxMaterial=Z1(c,t,i)}return l}_compileMaterial(t){const i=new Oi(new ni,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ni(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(tv),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new fl,new fu({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const U=t.background;U?U.isColor&&(M.color.copy(U),t.background=null,v=!0):(M.color.copy(tv),v=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const O=this._cubeSize;kr(l,D*O,L>2?O:0,O,O),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=y,_.autoClear=x,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Zs||t.mapping===Qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,y=_*x,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-xs?s-E+xs:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,kr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(h,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,kr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(h,tl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*qs-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):qs;M>qs&&me(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${qs}`);const v=[];let U=0;for(let N=0;N<qs;++N){const k=N/T,A=Math.exp(-k*k/2);v.push(A),N===0?U+=A:N<M&&(U+=2*A)}for(let N=0;N<v.length;N++)v[N]=v[N]/U;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const D=this._sizeLods[l],O=3*D*(l>L-xs?l-L+xs:0),F=4*(this._cubeSize-D);kr(i,O,F,3*D,2*D),m.setRenderTarget(i),m.render(_,tl)}}function j1(r){const t=[],i=[],s=[];let l=r;const c=r-xs+1+$_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-xs?m=$_[f-r+xs-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,M=2,v=1,U=new Float32Array(T*E*y),L=new Float32Array(M*E*y),D=new Float32Array(v*E*y);for(let F=0;F<y;F++){const N=F%3*2/3-1,k=F>2?0:-1,A=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];U.set(A,T*E*F),L.set(x,M*E*F);const w=[F,F,F,F,F,F];D.set(w,v*E*F)}const O=new ni;O.setAttribute("position",new aa(U,T)),O.setAttribute("uv",new aa(L,M)),O.setAttribute("faceIndex",new aa(D,v)),s.push(new Oi(O,null)),l>xs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function nv(r,t,i){const s=new ia(r,t,i);return s.texture.mapping=lu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Z1(r,t,i){return new oa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function K1(r,t,i){const s=new Float32Array(qs),l=new j(0,1,0);return new oa({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function iv(){return new oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function av(){return new oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function Q1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===vd||m===xd,g=m===Zs||m===Qr;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new ev(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new ev(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function J1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ol("WebGLRenderer: "+s+" extension not supported."),l}}}function $1(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let L=0,D=U.length;L<D;L+=3){const O=U[L+0],F=U[L+1],N=U[L+2];x.push(O,F,F,N,N,O)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,D=U.length/3-1;L<D;L+=3){const O=L+0,F=L+1,N=L+2;x.push(O,F,F,N,N,O)}}else return;const M=new($v(x)?ix:nx)(x,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function tT(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*f,E),i.update(y,s,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,s,1)}function _(x,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,T,0,E);let v=0;for(let U=0;U<E;U++)v+=y[U]*T[U];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function eT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:He("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nT(r,t,i){const s=new WeakMap,l=new xn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let w=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let O=h.attributes.position.count*D,F=1;O>t.maxTextureSize&&(F=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*F*4*_),k=new tx(N,O,F,_);k.type=ta,k.needsUpdate=!0;const A=D*4;for(let X=0;X<_;X++){const H=v[X],Q=U[X],at=L[X],lt=O*F*4*X;for(let I=0;I<H.count;I++){const V=I*A;E===!0&&(l.fromBufferAttribute(H,I),N[lt+V+0]=l.x,N[lt+V+1]=l.y,N[lt+V+2]=l.z,N[lt+V+3]=0),T===!0&&(l.fromBufferAttribute(Q,I),N[lt+V+4]=l.x,N[lt+V+5]=l.y,N[lt+V+6]=l.z,N[lt+V+7]=0),M===!0&&(l.fromBufferAttribute(at,I),N[lt+V+8]=l.x,N[lt+V+9]=l.y,N[lt+V+10]=l.z,N[lt+V+11]=at.itemSize===4?l.w:1)}}x={count:_,texture:k,size:new _e(O,F)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function iT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const aT={[Iv]:"LINEAR_TONE_MAPPING",[Fv]:"REINHARD_TONE_MAPPING",[Bv]:"CINEON_TONE_MAPPING",[Hv]:"ACES_FILMIC_TONE_MAPPING",[Vv]:"AGX_TONE_MAPPING",[kv]:"NEUTRAL_TONE_MAPPING",[Gv]:"CUSTOM_TONE_MAPPING"};function sT(r,t,i,s,l){const c=new ia(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ia(t,i,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),h=new ni;h.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mn([0,2,0,0,2,0],2));const m=new jM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(h,m),g=new Tp(-1,1,1,-1,0,1);let _=null,x=null,y=!1,E,T=null,M=[],v=!1;this.setSize=function(U,L){c.setSize(U,L),f.setSize(U,L);for(let D=0;D<M.length;D++){const O=M[D];O.setSize&&O.setSize(U,L)}},this.setEffects=function(U){M=U,v=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let O=0;O<M.length;O++){const F=M[O];F.setSize&&F.setSize(L,D)}},this.begin=function(U,L){if(y||U.toneMapping===na&&M.length===0)return!1;if(T=L,L!==null){const D=L.width,O=L.height;(c.width!==D||c.height!==O)&&this.setSize(D,O)}return v===!1&&U.setRenderTarget(c),E=U.toneMapping,U.toneMapping=na,!0},this.hasRenderPass=function(){return v},this.end=function(U,L){U.toneMapping=E,y=!0;let D=c,O=f;for(let F=0;F<M.length;F++){const N=M[F];if(N.enabled!==!1&&(N.render(U,O,D,L),N.needsSwap!==!1)){const k=D;D=O,O=k}}if(_!==U.outputColorSpace||x!==U.toneMapping){_=U.outputColorSpace,x=U.toneMapping,m.defines={},Ge.getTransfer(_)===$e&&(m.defines.SRGB_TRANSFER="");const F=aT[x];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,U.setRenderTarget(T),U.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const hx=new ei,np=new ll(1,1),dx=new tx,px=new EM,mx=new rx,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function io(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Ln(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Nn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function pu(r,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function rT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2fv(this.addr,t),Nn(i,t)}}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ln(i,t))return;r.uniform3fv(this.addr,t),Nn(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4fv(this.addr,t),Nn(i,t)}}function uT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Nn(i,t)}else{if(Ln(i,s))return;cv.set(s),r.uniformMatrix2fv(this.addr,!1,cv),Nn(i,s)}}function fT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Nn(i,t)}else{if(Ln(i,s))return;lv.set(s),r.uniformMatrix3fv(this.addr,!1,lv),Nn(i,s)}}function hT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Nn(i,t)}else{if(Ln(i,s))return;ov.set(s),r.uniformMatrix4fv(this.addr,!1,ov),Nn(i,s)}}function dT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2iv(this.addr,t),Nn(i,t)}}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ln(i,t))return;r.uniform3iv(this.addr,t),Nn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4iv(this.addr,t),Nn(i,t)}}function _T(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function vT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2uiv(this.addr,t),Nn(i,t)}}function xT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ln(i,t))return;r.uniform3uiv(this.addr,t),Nn(i,t)}}function ST(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4uiv(this.addr,t),Nn(i,t)}}function yT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=i.isReversedDepthBuffer()?_p:gp,c=np):c=hx,i.setTexture2D(t||c,l)}function MT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||px,l)}function ET(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mx,l)}function bT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dx,l)}function TT(r){switch(r){case 5126:return rT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return bT}}function AT(r,t){r.uniform1fv(this.addr,t)}function RT(r,t){const i=io(t,this.size,2);r.uniform2fv(this.addr,i)}function CT(r,t){const i=io(t,this.size,3);r.uniform3fv(this.addr,i)}function wT(r,t){const i=io(t,this.size,4);r.uniform4fv(this.addr,i)}function DT(r,t){const i=io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function UT(r,t){const i=io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function LT(r,t){const i=io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function NT(r,t){r.uniform1iv(this.addr,t)}function OT(r,t){r.uniform2iv(this.addr,t)}function PT(r,t){r.uniform3iv(this.addr,t)}function zT(r,t){r.uniform4iv(this.addr,t)}function IT(r,t){r.uniform1uiv(this.addr,t)}function FT(r,t){r.uniform2uiv(this.addr,t)}function BT(r,t){r.uniform3uiv(this.addr,t)}function HT(r,t){r.uniform4uiv(this.addr,t)}function GT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=np:f=hx;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function VT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||px,c[f])}function kT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||mx,c[f])}function XT(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||dx,c[f])}function WT(r){switch(r){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return PT;case 35669:case 35673:return zT;case 5125:return IT;case 36294:return FT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}class qT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class YT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class jT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function uv(r,t){r.seq.push(t),r.map[t.id]=t}function ZT(r,t,i){const s=r.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),f=ad.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){uv(i,p===void 0?new qT(h,r,t):new YT(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new jT(h),uv(i,_)),i=_}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);ZT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function fv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const KT=37297;let QT=0;function JT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const hv=new Te;function $T(r){Ge._getMatrix(hv,Ge.workingColorSpace,r);const t=`mat3( ${hv.elements.map(i=>i.toFixed(4))} )`;switch(Ge.getTransfer(r)){case eu:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JT(r.getShaderSource(t),h)}else return c}function tA(r,t){const i=$T(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const eA={[Iv]:"Linear",[Fv]:"Reinhard",[Bv]:"Cineon",[Hv]:"ACESFilmic",[Vv]:"AgX",[kv]:"Neutral",[Gv]:"Custom"};function nA(r,t){const i=eA[t];return i===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new j;function iA(){Ge.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function sA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function rA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function al(r){return r!==""}function pv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(oA,cA)}const lA=new Map;function cA(r,t){let i=Re[t];if(i===void 0){const s=lA.get(t);if(s!==void 0)i=Re[s],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ip(i)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(uA,fA)}function fA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const hA={[Yc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function dA(r){return hA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pA={[Zs]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function mA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gA={[Qr]:"ENVMAP_MODE_REFRACTION"};function _A(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vA={[zv]:"ENVMAP_BLENDING_MULTIPLY",[iM]:"ENVMAP_BLENDING_MIX",[aM]:"ENVMAP_BLENDING_ADD"};function xA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vA[r.combine]||"ENVMAP_BLENDING_NONE"}function SA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=dA(i),p=mA(i),g=_A(i),_=xA(i),x=SA(i),y=aA(i),E=sA(c),T=l.createProgram();let M,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),v.length>0&&(v+=`
`)):(M=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),v=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?Re.tonemapping_pars_fragment:"",i.toneMapping!==na?nA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,tA("linearToOutputTexel",i.outputColorSpace),iA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=ip(f),f=pv(f,i),f=mv(f,i),h=ip(h),h=pv(h,i),h=mv(h,i),f=gv(f),h=gv(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+M+f,D=U+v+h,O=fv(l,l.VERTEX_SHADER,L),F=fv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,O),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function N(X){if(r.debug.checkShaderErrors){const H=l.getProgramInfoLog(T)||"",Q=l.getShaderInfoLog(O)||"",at=l.getShaderInfoLog(F)||"",lt=H.trim(),I=Q.trim(),V=at.trim();let nt=!0,Et=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,O,F);else{const yt=dv(l,O,"vertex"),z=dv(l,F,"fragment");He("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+lt+`
`+yt+`
`+z)}else lt!==""?me("WebGLProgram: Program Info Log:",lt):(I===""||V==="")&&(Et=!1);Et&&(X.diagnostics={runnable:nt,programLog:lt,vertexShader:{log:I,prefix:M},fragmentShader:{log:V,prefix:v}})}l.deleteShader(O),l.deleteShader(F),k=new $c(l,T),A=rA(l,T)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,KT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=F,this}let MA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new bA(t),i.set(t,s)),s}}class bA{constructor(t){this.id=MA++,this.code=t,this.usedTimes=0}}function TA(r,t,i,s,l,c,f){const h=new xp,m=new EA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,w,X,H,Q){const at=H.fog,lt=Q.geometry,I=A.isMeshStandardMaterial?H.environment:null,V=(A.isMeshStandardMaterial?i:t).get(A.envMap||I),nt=V&&V.mapping===lu?V.image.height:null,Et=E[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&me("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const yt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,z=yt!==void 0?yt.length:0;let st=0;lt.morphAttributes.position!==void 0&&(st=1),lt.morphAttributes.normal!==void 0&&(st=2),lt.morphAttributes.color!==void 0&&(st=3);let vt,Dt,Xt,it;if(Et){const gt=$i[Et];vt=gt.vertexShader,Dt=gt.fragmentShader}else vt=A.vertexShader,Dt=A.fragmentShader,m.update(A),Xt=m.getVertexShaderID(A),it=m.getFragmentShaderID(A);const dt=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),jt=Q.isInstancedMesh===!0,kt=Q.isBatchedMesh===!0,Ee=!!A.map,Ye=!!A.matcap,Ce=!!V,pe=!!A.aoMap,Ae=!!A.lightMap,ce=!!A.bumpMap,fn=!!A.normalMap,W=!!A.displacementMap,rn=!!A.emissiveMap,we=!!A.metalnessMap,Fe=!!A.roughnessMap,Wt=A.anisotropy>0,P=A.clearcoat>0,b=A.dispersion>0,Z=A.iridescence>0,mt=A.sheen>0,Mt=A.transmission>0,ht=Wt&&!!A.anisotropyMap,Jt=P&&!!A.clearcoatMap,Nt=P&&!!A.clearcoatNormalMap,Zt=P&&!!A.clearcoatRoughnessMap,ue=Z&&!!A.iridescenceMap,At=Z&&!!A.iridescenceThicknessMap,Ct=mt&&!!A.sheenColorMap,Bt=mt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Ot=!!A.specularColorMap,ve=!!A.specularIntensityMap,Y=Mt&&!!A.transmissionMap,Pt=Mt&&!!A.thicknessMap,wt=!!A.gradientMap,Ht=!!A.alphaMap,Tt=A.alphaTest>0,xt=!!A.alphaHash,Lt=!!A.extensions;let G=na;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(G=r.toneMapping);const ut={shaderID:Et,shaderType:A.type,shaderName:A.name,vertexShader:vt,fragmentShader:Dt,defines:A.defines,customVertexShaderID:Xt,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:kt,batchingColor:kt&&Q._colorsTexture!==null,instancing:jt,instancingColor:jt&&Q.instanceColor!==null,instancingMorph:jt&&Q.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:$r,alphaToCoverage:!!A.alphaToCoverage,map:Ee,matcap:Ye,envMap:Ce,envMapMode:Ce&&V.mapping,envMapCubeUVHeight:nt,aoMap:pe,lightMap:Ae,bumpMap:ce,normalMap:fn,displacementMap:W,emissiveMap:rn,normalMapObjectSpace:fn&&A.normalMapType===oM,normalMapTangentSpace:fn&&A.normalMapType===Jv,metalnessMap:we,roughnessMap:Fe,anisotropy:Wt,anisotropyMap:ht,clearcoat:P,clearcoatMap:Jt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Zt,dispersion:b,iridescence:Z,iridescenceMap:ue,iridescenceThicknessMap:At,sheen:mt,sheenColorMap:Ct,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:Ot,specularIntensityMap:ve,transmission:Mt,transmissionMap:Y,thicknessMap:Pt,gradientMap:wt,opaque:A.transparent===!1&&A.blending===jr&&A.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Tt,alphaHash:xt,combine:A.combine,mapUv:Ee&&T(A.map.channel),aoMapUv:pe&&T(A.aoMap.channel),lightMapUv:Ae&&T(A.lightMap.channel),bumpMapUv:ce&&T(A.bumpMap.channel),normalMapUv:fn&&T(A.normalMap.channel),displacementMapUv:W&&T(A.displacementMap.channel),emissiveMapUv:rn&&T(A.emissiveMap.channel),metalnessMapUv:we&&T(A.metalnessMap.channel),roughnessMapUv:Fe&&T(A.roughnessMap.channel),anisotropyMapUv:ht&&T(A.anisotropyMap.channel),clearcoatMapUv:Jt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:At&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:Ot&&T(A.specularColorMap.channel),specularIntensityMapUv:ve&&T(A.specularIntensityMap.channel),transmissionMapUv:Y&&T(A.transmissionMap.channel),thicknessMapUv:Pt&&T(A.thicknessMap.channel),alphaMapUv:Ht&&T(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(fn||Wt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!lt.attributes.uv&&(Ee||Ht),fog:!!at,useFog:A.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Rt,skinning:Q.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:st,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:G,decodeVideoTexture:Ee&&A.map.isVideoTexture===!0&&Ge.getTransfer(A.map.colorSpace)===$e,decodeVideoTextureEmissive:rn&&A.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(A.emissiveMap.colorSpace)===$e,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Na,flipSided:A.side===fi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Lt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&A.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ut.vertexUv1s=p.has(1),ut.vertexUv2s=p.has(2),ut.vertexUv3s=p.has(3),p.clear(),ut}function v(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const X in A.defines)w.push(X),w.push(A.defines[X]);return A.isRawShaderMaterial===!1&&(U(w,A),L(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function U(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function L(A,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),A.push(h.mask)}function D(A){const w=E[A.type];let X;if(w){const H=$i[w];X=zM.clone(H.uniforms)}else X=A.uniforms;return X}function O(A,w){let X=_.get(w);return X!==void 0?++X.usedTimes:(X=new yA(r,w,A,c),g.push(X),_.set(w,X)),X}function F(A){if(--A.usedTimes===0){const w=g.indexOf(A);g[w]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){m.remove(A)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:O,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:k}}function AA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function RA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,E,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function h(_,x,y,E,T,M){const v=f(_,x,y,E,T,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,E,T,M){const v=f(_,x,y,E,T,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||RA),s.length>1&&s.sort(x||vv),l.length>1&&l.sort(x||vv)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function CA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new xv,r.set(s,[f])):l>=c.length?(f=new xv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function wA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new Ie};break;case"SpotLight":i={position:new j,direction:new j,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function DA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let UA=0;function LA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function NA(r){const t=new wA,i=DA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new pn,f=new pn;function h(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,T=0,M=0,v=0,U=0,L=0,D=0,O=0,F=0,N=0;p.sort(LA);for(let A=0,w=p.length;A<w;A++){const X=p[A],H=X.color,Q=X.intensity,at=X.distance;let lt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Jr?lt=X.shadow.map.texture:lt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=H.r*Q,_+=H.g*Q,x+=H.b*Q;else if(X.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(X.sh.coefficients[I],Q);N++}else if(X.isDirectionalLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const V=X.shadow,nt=i.get(X);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,s.directionalShadow[y]=nt,s.directionalShadowMap[y]=lt,s.directionalShadowMatrix[y]=X.shadow.matrix,U++}s.directional[y]=I,y++}else if(X.isSpotLight){const I=t.get(X);I.position.setFromMatrixPosition(X.matrixWorld),I.color.copy(H).multiplyScalar(Q),I.distance=at,I.coneCos=Math.cos(X.angle),I.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),I.decay=X.decay,s.spot[T]=I;const V=X.shadow;if(X.map&&(s.spotLightMap[O]=X.map,O++,V.updateMatrices(X),X.castShadow&&F++),s.spotLightMatrix[T]=V.matrix,X.castShadow){const nt=i.get(X);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,s.spotShadow[T]=nt,s.spotShadowMap[T]=lt,D++}T++}else if(X.isRectAreaLight){const I=t.get(X);I.color.copy(H).multiplyScalar(Q),I.halfWidth.set(X.width*.5,0,0),I.halfHeight.set(0,X.height*.5,0),s.rectArea[M]=I,M++}else if(X.isPointLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),I.distance=X.distance,I.decay=X.decay,X.castShadow){const V=X.shadow,nt=i.get(X);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,nt.shadowCameraNear=V.camera.near,nt.shadowCameraFar=V.camera.far,s.pointShadow[E]=nt,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=X.shadow.matrix,L++}s.point[E]=I,E++}else if(X.isHemisphereLight){const I=t.get(X);I.skyColor.copy(X.color).multiplyScalar(Q),I.groundColor.copy(X.groundColor).multiplyScalar(Q),s.hemi[v]=I,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==M||k.hemiLength!==v||k.numDirectionalShadows!==U||k.numPointShadows!==L||k.numSpotShadows!==D||k.numSpotMaps!==O||k.numLightProbes!==N)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+O-F,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=N,k.directionalLength=y,k.pointLength=E,k.spotLength=T,k.rectAreaLength=M,k.hemiLength=v,k.numDirectionalShadows=U,k.numPointShadows=L,k.numSpotShadows=D,k.numSpotMaps=O,k.numLightProbes=N,s.version=UA++)}function m(p,g){let _=0,x=0,y=0,E=0,T=0;const M=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function Sv(r){const t=new NA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function OA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Sv(r),t.set(l,[h])):c>=f.length?(h=new Sv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
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
}`,IA=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],FA=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],yv=new pn,el=new j,sd=new j;function BA(r,t,i){let s=new Sp;const l=new _e,c=new _e,f=new xn,h=new KM,m=new QM,p={},g=i.maxTextureSize,_={[ys]:fi,[fi]:ys,[Na]:Na},x=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:PA,fragmentShader:zA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Oi(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let v=this.type;this.render=function(F,N,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===Fy&&(me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Yc);const A=r.getRenderTarget(),w=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Pa),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=v!==this.type;Q&&N.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(lt=>lt.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,lt=F.length;at<lt;at++){const I=F[at],V=I.shadow;if(V===void 0){me("WebGLShadowMap:",I,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const nt=V.getFrameExtents();if(l.multiply(nt),c.copy(V.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/nt.x),l.x=c.x*nt.x,V.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/nt.y),l.y=c.y*nt.y,V.mapSize.y=c.y)),V.map===null||Q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===il){if(I.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ia(l.x,l.y,{format:Jr,type:Ia,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),V.map.texture.name=I.name+".shadowMap",V.map.depthTexture=new ll(l.x,l.y,ta),V.map.depthTexture.name=I.name+".shadowMapDepth",V.map.depthTexture.format=Fa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn}else{I.isPointLight?(V.map=new ox(l.x),V.map.depthTexture=new YM(l.x,sa)):(V.map=new ia(l.x,l.y),V.map.depthTexture=new ll(l.x,l.y,sa)),V.map.depthTexture.name=I.name+".shadowMap",V.map.depthTexture.format=Fa;const yt=r.state.buffers.depth.getReversed();this.type===Yc?(V.map.depthTexture.compareFunction=yt?_p:gp,V.map.depthTexture.minFilter=Jn,V.map.depthTexture.magFilter=Jn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn)}V.camera.updateProjectionMatrix()}const Et=V.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<Et;yt++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,yt),r.clear();else{yt===0&&(r.setRenderTarget(V.map),r.clear());const z=V.getViewport(yt);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),H.viewport(f)}if(I.isPointLight){const z=V.camera,st=V.matrix,vt=I.distance||z.far;vt!==z.far&&(z.far=vt,z.updateProjectionMatrix()),el.setFromMatrixPosition(I.matrixWorld),z.position.copy(el),sd.copy(z.position),sd.add(IA[yt]),z.up.copy(FA[yt]),z.lookAt(sd),z.updateMatrixWorld(),st.makeTranslation(-el.x,-el.y,-el.z),yv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yv,z.coordinateSystem,z.reversedDepth)}else V.updateMatrices(I);s=V.getFrustum(),D(N,k,V.camera,I,this.type)}V.isPointLightShadow!==!0&&this.type===il&&U(V,k),V.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,w,X)};function U(F,N){const k=t.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ia(l.x,l.y,{format:Jr,type:Ia})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(N,null,k,x,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(N,null,k,y,T,null)}function L(F,N,k,A){let w=null;const X=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(X!==void 0)w=X;else if(w=k.isPointLight===!0?m:h,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const H=w.uuid,Q=N.uuid;let at=p[H];at===void 0&&(at={},p[H]=at);let lt=at[Q];lt===void 0&&(lt=w.clone(),at[Q]=lt,N.addEventListener("dispose",O)),w=lt}if(w.visible=N.visible,w.wireframe=N.wireframe,A===il?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:_[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=k}return w}function D(F,N,k,A,w){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===il)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const Q=t.update(F),at=F.material;if(Array.isArray(at)){const lt=Q.groups;for(let I=0,V=lt.length;I<V;I++){const nt=lt[I],Et=at[nt.materialIndex];if(Et&&Et.visible){const yt=L(F,Et,A,w);F.onBeforeShadow(r,F,N,k,Q,yt,nt),r.renderBufferDirect(k,null,Q,yt,F,nt),F.onAfterShadow(r,F,N,k,Q,yt,nt)}}}else if(at.visible){const lt=L(F,at,A,w);F.onBeforeShadow(r,F,N,k,Q,lt,null),r.renderBufferDirect(k,null,Q,lt,F,null),F.onAfterShadow(r,F,N,k,Q,lt,null)}}const H=F.children;for(let Q=0,at=H.length;Q<at;Q++)D(H[Q],N,k,A,w)}function O(F){F.target.removeEventListener("dispose",O);for(const k in p){const A=p[k],w=F.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const HA={[fd]:hd,[dd]:gd,[pd]:_d,[Kr]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Kr};function GA(r,t){function i(){let Y=!1;const Pt=new xn;let wt=null;const Ht=new xn(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!Y&&(r.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,xt,Lt,G,ut){ut===!0&&(Tt*=G,xt*=G,Lt*=G),Pt.set(Tt,xt,Lt,G),Ht.equals(Pt)===!1&&(r.clearColor(Tt,xt,Lt,G),Ht.copy(Pt))},reset:function(){Y=!1,wt=null,Ht.set(-1,0,0,0)}}}function s(){let Y=!1,Pt=!1,wt=null,Ht=null,Tt=null;return{setReversed:function(xt){if(Pt!==xt){const Lt=t.get("EXT_clip_control");xt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;const G=Tt;Tt=null,this.setClear(G)}},getReversed:function(){return Pt},setTest:function(xt){xt?dt(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(xt){wt!==xt&&!Y&&(r.depthMask(xt),wt=xt)},setFunc:function(xt){if(Pt&&(xt=HA[xt]),Ht!==xt){switch(xt){case fd:r.depthFunc(r.NEVER);break;case hd:r.depthFunc(r.ALWAYS);break;case dd:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case pd:r.depthFunc(r.EQUAL);break;case md:r.depthFunc(r.GEQUAL);break;case gd:r.depthFunc(r.GREATER);break;case _d:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=xt}},setLocked:function(xt){Y=xt},setClear:function(xt){Tt!==xt&&(Pt&&(xt=1-xt),r.clearDepth(xt),Tt=xt)},reset:function(){Y=!1,wt=null,Ht=null,Tt=null,Pt=!1}}}function l(){let Y=!1,Pt=null,wt=null,Ht=null,Tt=null,xt=null,Lt=null,G=null,ut=null;return{setTest:function(gt){Y||(gt?dt(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(gt){Pt!==gt&&!Y&&(r.stencilMask(gt),Pt=gt)},setFunc:function(gt,Gt,Ut){(wt!==gt||Ht!==Gt||Tt!==Ut)&&(r.stencilFunc(gt,Gt,Ut),wt=gt,Ht=Gt,Tt=Ut)},setOp:function(gt,Gt,Ut){(xt!==gt||Lt!==Gt||G!==Ut)&&(r.stencilOp(gt,Gt,Ut),xt=gt,Lt=Gt,G=Ut)},setLocked:function(gt){Y=gt},setClear:function(gt){ut!==gt&&(r.clearStencil(gt),ut=gt)},reset:function(){Y=!1,Pt=null,wt=null,Ht=null,Tt=null,xt=null,Lt=null,G=null,ut=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,T=!1,M=null,v=null,U=null,L=null,D=null,O=null,F=null,N=new Ie(0,0,0),k=0,A=!1,w=null,X=null,H=null,Q=null,at=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(nt)[1]),I=V>=1):nt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),I=V>=2);let Et=null,yt={};const z=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),vt=new xn().fromArray(z),Dt=new xn().fromArray(st);function Xt(Y,Pt,wt,Ht){const Tt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(Y,xt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<wt;Lt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Pt+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return xt}const it={};it[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),dt(r.DEPTH_TEST),f.setFunc(Kr),ce(!1),fn(m_),dt(r.CULL_FACE),pe(Pa);function dt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Rt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function jt(Y,Pt){return _[Y]!==Pt?(r.bindFramebuffer(Y,Pt),_[Y]=Pt,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pt),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function kt(Y,Pt){let wt=y,Ht=!1;if(Y){wt=x.get(Pt),wt===void 0&&(wt=[],x.set(Pt,wt));const Tt=Y.textures;if(wt.length!==Tt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Lt=Tt.length;xt<Lt;xt++)wt[xt]=r.COLOR_ATTACHMENT0+xt;wt.length=Tt.length,Ht=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(wt)}function Ee(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const Ye={[Ws]:r.FUNC_ADD,[Hy]:r.FUNC_SUBTRACT,[Gy]:r.FUNC_REVERSE_SUBTRACT};Ye[Vy]=r.MIN,Ye[ky]=r.MAX;const Ce={[Xy]:r.ZERO,[Wy]:r.ONE,[qy]:r.SRC_COLOR,[cd]:r.SRC_ALPHA,[Jy]:r.SRC_ALPHA_SATURATE,[Ky]:r.DST_COLOR,[jy]:r.DST_ALPHA,[Yy]:r.ONE_MINUS_SRC_COLOR,[ud]:r.ONE_MINUS_SRC_ALPHA,[Qy]:r.ONE_MINUS_DST_COLOR,[Zy]:r.ONE_MINUS_DST_ALPHA,[$y]:r.CONSTANT_COLOR,[tM]:r.ONE_MINUS_CONSTANT_COLOR,[eM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(Y,Pt,wt,Ht,Tt,xt,Lt,G,ut,gt){if(Y===Pa){T===!0&&(Rt(r.BLEND),T=!1);return}if(T===!1&&(dt(r.BLEND),T=!0),Y!==By){if(Y!==M||gt!==A){if((v!==Ws||D!==Ws)&&(r.blendEquation(r.FUNC_ADD),v=Ws,D=Ws),gt)switch(Y){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFunc(r.ONE,r.ONE);break;case __:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case v_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:He("WebGLState: Invalid blending: ",Y);break}else switch(Y){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case __:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",Y);break}U=null,L=null,O=null,F=null,N.set(0,0,0),k=0,M=Y,A=gt}return}Tt=Tt||Pt,xt=xt||wt,Lt=Lt||Ht,(Pt!==v||Tt!==D)&&(r.blendEquationSeparate(Ye[Pt],Ye[Tt]),v=Pt,D=Tt),(wt!==U||Ht!==L||xt!==O||Lt!==F)&&(r.blendFuncSeparate(Ce[wt],Ce[Ht],Ce[xt],Ce[Lt]),U=wt,L=Ht,O=xt,F=Lt),(G.equals(N)===!1||ut!==k)&&(r.blendColor(G.r,G.g,G.b,ut),N.copy(G),k=ut),M=Y,A=!1}function Ae(Y,Pt){Y.side===Na?Rt(r.CULL_FACE):dt(r.CULL_FACE);let wt=Y.side===fi;Pt&&(wt=!wt),ce(wt),Y.blending===jr&&Y.transparent===!1?pe(Pa):pe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ht=Y.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),rn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(Y){w!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),w=Y)}function fn(Y){Y!==zy?(dt(r.CULL_FACE),Y!==X&&(Y===m_?r.cullFace(r.BACK):Y===Iy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),X=Y}function W(Y){Y!==H&&(I&&r.lineWidth(Y),H=Y)}function rn(Y,Pt,wt){Y?(dt(r.POLYGON_OFFSET_FILL),(Q!==Pt||at!==wt)&&(r.polygonOffset(Pt,wt),Q=Pt,at=wt)):Rt(r.POLYGON_OFFSET_FILL)}function we(Y){Y?dt(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function Fe(Y){Y===void 0&&(Y=r.TEXTURE0+lt-1),Et!==Y&&(r.activeTexture(Y),Et=Y)}function Wt(Y,Pt,wt){wt===void 0&&(Et===null?wt=r.TEXTURE0+lt-1:wt=Et);let Ht=yt[wt];Ht===void 0&&(Ht={type:void 0,texture:void 0},yt[wt]=Ht),(Ht.type!==Y||Ht.texture!==Pt)&&(Et!==wt&&(r.activeTexture(wt),Et=wt),r.bindTexture(Y,Pt||it[Y]),Ht.type=Y,Ht.texture=Pt)}function P(){const Y=yt[Et];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function mt(){try{r.texSubImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Jt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Nt(){try{r.texStorage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Zt(){try{r.texStorage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function ue(){try{r.texImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function At(){try{r.texImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Ct(Y){vt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),vt.copy(Y))}function Bt(Y){Dt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Dt.copy(Y))}function zt(Y,Pt){let wt=p.get(Pt);wt===void 0&&(wt=new WeakMap,p.set(Pt,wt));let Ht=wt.get(Y);Ht===void 0&&(Ht=r.getUniformBlockIndex(Pt,Y.name),wt.set(Y,Ht))}function Ot(Y,Pt){const Ht=p.get(Pt).get(Y);m.get(Pt)!==Ht&&(r.uniformBlockBinding(Pt,Ht,Y.__bindingPointIndex),m.set(Pt,Ht))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Et=null,yt={},_={},x=new WeakMap,y=[],E=null,T=!1,M=null,v=null,U=null,L=null,D=null,O=null,F=null,N=new Ie(0,0,0),k=0,A=!1,w=null,X=null,H=null,Q=null,at=null,vt.set(0,0,r.canvas.width,r.canvas.height),Dt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:dt,disable:Rt,bindFramebuffer:jt,drawBuffers:kt,useProgram:Ee,setBlending:pe,setMaterial:Ae,setFlipSided:ce,setCullFace:fn,setLineWidth:W,setPolygonOffset:rn,setScissorTest:we,activeTexture:Fe,bindTexture:Wt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:ue,texImage3D:At,updateUBOMapping:zt,uniformBlockBinding:Ot,texStorage2D:Nt,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Jt,scissor:Ct,viewport:Bt,reset:ve}}function VA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return y?new OffscreenCanvas(P,b):iu("canvas")}function T(P,b,Z){let mt=1;const Mt=Wt(P);if((Mt.width>Z||Mt.height>Z)&&(mt=Z/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(mt*Mt.width),Jt=Math.floor(mt*Mt.height);_===void 0&&(_=E(ht,Jt));const Nt=b?E(ht,Jt):_;return Nt.width=ht,Nt.height=Jt,Nt.getContext("2d").drawImage(P,0,0,ht,Jt),me("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Jt+")."),Nt}else return"data"in P&&me("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function M(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,b,Z,mt,Mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=b;if(b===r.RED&&(Z===r.FLOAT&&(ht=r.R32F),Z===r.HALF_FLOAT&&(ht=r.R16F),Z===r.UNSIGNED_BYTE&&(ht=r.R8)),b===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ht=r.R8UI),Z===r.UNSIGNED_SHORT&&(ht=r.R16UI),Z===r.UNSIGNED_INT&&(ht=r.R32UI),Z===r.BYTE&&(ht=r.R8I),Z===r.SHORT&&(ht=r.R16I),Z===r.INT&&(ht=r.R32I)),b===r.RG&&(Z===r.FLOAT&&(ht=r.RG32F),Z===r.HALF_FLOAT&&(ht=r.RG16F),Z===r.UNSIGNED_BYTE&&(ht=r.RG8)),b===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ht=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ht=r.RG16UI),Z===r.UNSIGNED_INT&&(ht=r.RG32UI),Z===r.BYTE&&(ht=r.RG8I),Z===r.SHORT&&(ht=r.RG16I),Z===r.INT&&(ht=r.RG32I)),b===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),Z===r.UNSIGNED_INT&&(ht=r.RGB32UI),Z===r.BYTE&&(ht=r.RGB8I),Z===r.SHORT&&(ht=r.RGB16I),Z===r.INT&&(ht=r.RGB32I)),b===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ht=r.RGBA32UI),Z===r.BYTE&&(ht=r.RGBA8I),Z===r.SHORT&&(ht=r.RGBA16I),Z===r.INT&&(ht=r.RGBA32I)),b===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),b===r.RGBA){const Jt=Mt?eu:Ge.getTransfer(mt);Z===r.FLOAT&&(ht=r.RGBA32F),Z===r.HALF_FLOAT&&(ht=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ht=Jt===$e?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(P,b){let Z;return P?b===null||b===sa||b===rl?Z=r.DEPTH24_STENCIL8:b===ta?Z=r.DEPTH32F_STENCIL8:b===sl&&(Z=r.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sa||b===rl?Z=r.DEPTH_COMPONENT24:b===ta?Z=r.DEPTH_COMPONENT32F:b===sl&&(Z=r.DEPTH_COMPONENT16),Z}function O(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yn&&P.minFilter!==Jn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function F(P){const b=P.target;b.removeEventListener("dispose",F),k(b),b.isVideoTexture&&g.delete(b)}function N(P){const b=P.target;b.removeEventListener("dispose",N),w(b)}function k(P){const b=s.get(P);if(b.__webglInit===void 0)return;const Z=P.source,mt=x.get(Z);if(mt){const Mt=mt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&A(P),Object.keys(mt).length===0&&x.delete(Z)}s.remove(P)}function A(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const Z=P.source,mt=x.get(Z);delete mt[b.__cacheKey],f.memory.textures--}function w(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let Mt=0;Mt<b.__webglFramebuffer[mt].length;Mt++)r.deleteFramebuffer(b.__webglFramebuffer[mt][Mt]);else r.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[mt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=P.textures;for(let mt=0,Mt=Z.length;mt<Mt;mt++){const ht=s.get(Z[mt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove(Z[mt])}s.remove(P)}let X=0;function H(){X=0}function Q(){const P=X;return P>=l.maxTextures&&me("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),X+=1,P}function at(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function lt(P,b){const Z=s.get(P);if(P.isVideoTexture&&we(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){const mt=P.image;if(mt===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,P,b);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+b)}function I(P,b){const Z=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){it(Z,P,b);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+b)}function V(P,b){const Z=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){it(Z,P,b);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+b)}function nt(P,b){const Z=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){dt(Z,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+b)}const Et={[Sd]:r.REPEAT,[Oa]:r.CLAMP_TO_EDGE,[yd]:r.MIRRORED_REPEAT},yt={[Yn]:r.NEAREST,[sM]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[Ah]:r.LINEAR_MIPMAP_NEAREST,[Ys]:r.LINEAR_MIPMAP_LINEAR},z={[lM]:r.NEVER,[dM]:r.ALWAYS,[cM]:r.LESS,[gp]:r.LEQUAL,[uM]:r.EQUAL,[_p]:r.GEQUAL,[fM]:r.GREATER,[hM]:r.NOTEQUAL};function st(P,b){if(b.type===ta&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Jn||b.magFilter===Ah||b.magFilter===Mc||b.magFilter===Ys||b.minFilter===Jn||b.minFilter===Ah||b.minFilter===Mc||b.minFilter===Ys)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Et[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Et[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Et[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,yt[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yn||b.minFilter!==Mc&&b.minFilter!==Ys||b.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function vt(P,b){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",F));const mt=b.source;let Mt=x.get(mt);Mt===void 0&&(Mt={},x.set(mt,Mt));const ht=at(b);if(ht!==P.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),Mt[ht].usedTimes++;const Jt=Mt[P.__cacheKey];Jt!==void 0&&(Mt[P.__cacheKey].usedTimes--,Jt.usedTimes===0&&A(b)),P.__cacheKey=ht,P.__webglTexture=Mt[ht].texture}return Z}function Dt(P,b,Z){return Math.floor(Math.floor(P/Z)/b)}function Xt(P,b,Z,mt){const ht=P.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Z,mt,b.data);else{ht.sort((At,Ct)=>At.start-Ct.start);let Jt=0;for(let At=1;At<ht.length;At++){const Ct=ht[Jt],Bt=ht[At],zt=Ct.start+Ct.count,Ot=Dt(Bt.start,b.width,4),ve=Dt(Ct.start,b.width,4);Bt.start<=zt+1&&Ot===ve&&Dt(Bt.start+Bt.count-1,b.width,4)===Ot?Ct.count=Math.max(Ct.count,Bt.start+Bt.count-Ct.start):(++Jt,ht[Jt]=Bt)}ht.length=Jt+1;const Nt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),ue=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let At=0,Ct=ht.length;At<Ct;At++){const Bt=ht[At],zt=Math.floor(Bt.start/4),Ot=Math.ceil(Bt.count/4),ve=zt%b.width,Y=Math.floor(zt/b.width),Pt=Ot,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,ve,Y,Pt,wt,Z,mt,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Nt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ue)}}function it(P,b,Z){let mt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=r.TEXTURE_3D);const Mt=vt(P,b),ht=b.source;i.bindTexture(mt,P.__webglTexture,r.TEXTURE0+Z);const Jt=s.get(ht);if(ht.version!==Jt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+Z);const Nt=Ge.getPrimaries(Ge.workingColorSpace),Zt=b.colorSpace===vs?null:Ge.getPrimaries(b.colorSpace),ue=b.colorSpace===vs||Nt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let At=T(b.image,!1,l.maxTextureSize);At=Fe(b,At);const Ct=c.convert(b.format,b.colorSpace),Bt=c.convert(b.type);let zt=L(b.internalFormat,Ct,Bt,b.colorSpace,b.isVideoTexture);st(mt,b);let Ot;const ve=b.mipmaps,Y=b.isVideoTexture!==!0,Pt=Jt.__version===void 0||Mt===!0,wt=ht.dataReady,Ht=O(b,At);if(b.isDepthTexture)zt=D(b.format===js,b.type),Pt&&(Y?i.texStorage2D(r.TEXTURE_2D,1,zt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,zt,At.width,At.height,0,Ct,Bt,null));else if(b.isDataTexture)if(ve.length>0){Y&&Pt&&i.texStorage2D(r.TEXTURE_2D,Ht,zt,ve[0].width,ve[0].height);for(let Tt=0,xt=ve.length;Tt<xt;Tt++)Ot=ve[Tt],Y?wt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Ct,Bt,Ot.data):i.texImage2D(r.TEXTURE_2D,Tt,zt,Ot.width,Ot.height,0,Ct,Bt,Ot.data);b.generateMipmaps=!1}else Y?(Pt&&i.texStorage2D(r.TEXTURE_2D,Ht,zt,At.width,At.height),wt&&Xt(b,At,Ct,Bt)):i.texImage2D(r.TEXTURE_2D,0,zt,At.width,At.height,0,Ct,Bt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,zt,ve[0].width,ve[0].height,At.depth);for(let Tt=0,xt=ve.length;Tt<xt;Tt++)if(Ot=ve[Tt],b.format!==Xi)if(Ct!==null)if(Y){if(wt)if(b.layerUpdates.size>0){const Lt=J_(Ot.width,Ot.height,b.format,b.type);for(const G of b.layerUpdates){const ut=Ot.data.subarray(G*Lt/Ot.data.BYTES_PER_ELEMENT,(G+1)*Lt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,G,Ot.width,Ot.height,1,Ct,ut)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,At.depth,Ct,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,zt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,At.depth,Ct,Bt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,zt,Ot.width,Ot.height,At.depth,0,Ct,Bt,Ot.data)}else{Y&&Pt&&i.texStorage2D(r.TEXTURE_2D,Ht,zt,ve[0].width,ve[0].height);for(let Tt=0,xt=ve.length;Tt<xt;Tt++)Ot=ve[Tt],b.format!==Xi?Ct!==null?Y?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Ct,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,zt,Ot.width,Ot.height,0,Ot.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?wt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Ct,Bt,Ot.data):i.texImage2D(r.TEXTURE_2D,Tt,zt,Ot.width,Ot.height,0,Ct,Bt,Ot.data)}else if(b.isDataArrayTexture)if(Y){if(Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,zt,At.width,At.height,At.depth),wt)if(b.layerUpdates.size>0){const Tt=J_(At.width,At.height,b.format,b.type);for(const xt of b.layerUpdates){const Lt=At.data.subarray(xt*Tt/At.data.BYTES_PER_ELEMENT,(xt+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Ct,Bt,Lt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ct,Bt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,At.width,At.height,At.depth,0,Ct,Bt,At.data);else if(b.isData3DTexture)Y?(Pt&&i.texStorage3D(r.TEXTURE_3D,Ht,zt,At.width,At.height,At.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ct,Bt,At.data)):i.texImage3D(r.TEXTURE_3D,0,zt,At.width,At.height,At.depth,0,Ct,Bt,At.data);else if(b.isFramebufferTexture){if(Pt)if(Y)i.texStorage2D(r.TEXTURE_2D,Ht,zt,At.width,At.height);else{let Tt=At.width,xt=At.height;for(let Lt=0;Lt<Ht;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,zt,Tt,xt,0,Ct,Bt,null),Tt>>=1,xt>>=1}}else if(ve.length>0){if(Y&&Pt){const Tt=Wt(ve[0]);i.texStorage2D(r.TEXTURE_2D,Ht,zt,Tt.width,Tt.height)}for(let Tt=0,xt=ve.length;Tt<xt;Tt++)Ot=ve[Tt],Y?wt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ct,Bt,Ot):i.texImage2D(r.TEXTURE_2D,Tt,zt,Ct,Bt,Ot);b.generateMipmaps=!1}else if(Y){if(Pt){const Tt=Wt(At);i.texStorage2D(r.TEXTURE_2D,Ht,zt,Tt.width,Tt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Bt,At)}else i.texImage2D(r.TEXTURE_2D,0,zt,Ct,Bt,At);M(b)&&v(mt),Jt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function dt(P,b,Z){if(b.image.length!==6)return;const mt=vt(P,b),Mt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);const ht=s.get(Mt);if(Mt.version!==ht.__version||mt===!0){i.activeTexture(r.TEXTURE0+Z);const Jt=Ge.getPrimaries(Ge.workingColorSpace),Nt=b.colorSpace===vs?null:Ge.getPrimaries(b.colorSpace),Zt=b.colorSpace===vs||Jt===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const ue=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let xt=0;xt<6;xt++)!ue&&!At?Ct[xt]=T(b.image[xt],!0,l.maxCubemapSize):Ct[xt]=At?b.image[xt].image:b.image[xt],Ct[xt]=Fe(b,Ct[xt]);const Bt=Ct[0],zt=c.convert(b.format,b.colorSpace),Ot=c.convert(b.type),ve=L(b.internalFormat,zt,Ot,b.colorSpace),Y=b.isVideoTexture!==!0,Pt=ht.__version===void 0||mt===!0,wt=Mt.dataReady;let Ht=O(b,Bt);st(r.TEXTURE_CUBE_MAP,b);let Tt;if(ue){Y&&Pt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ve,Bt.width,Bt.height);for(let xt=0;xt<6;xt++){Tt=Ct[xt].mipmaps;for(let Lt=0;Lt<Tt.length;Lt++){const G=Tt[Lt];b.format!==Xi?zt!==null?Y?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,G.width,G.height,zt,G.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,ve,G.width,G.height,0,G.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,G.width,G.height,zt,Ot,G.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,ve,G.width,G.height,0,zt,Ot,G.data)}}}else{if(Tt=b.mipmaps,Y&&Pt){Tt.length>0&&Ht++;const xt=Wt(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ve,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ct[xt].width,Ct[xt].height,zt,Ot,Ct[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ve,Ct[xt].width,Ct[xt].height,0,zt,Ot,Ct[xt].data);for(let Lt=0;Lt<Tt.length;Lt++){const ut=Tt[Lt].image[xt].image;Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,ut.width,ut.height,zt,Ot,ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,ve,ut.width,ut.height,0,zt,Ot,ut.data)}}else{Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Ot,Ct[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ve,zt,Ot,Ct[xt]);for(let Lt=0;Lt<Tt.length;Lt++){const G=Tt[Lt];Y?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,zt,Ot,G.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,ve,zt,Ot,G.image[xt])}}}M(b)&&v(r.TEXTURE_CUBE_MAP),ht.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Rt(P,b,Z,mt,Mt,ht){const Jt=c.convert(Z.format,Z.colorSpace),Nt=c.convert(Z.type),Zt=L(Z.internalFormat,Jt,Nt,Z.colorSpace),ue=s.get(b),At=s.get(Z);if(At.__renderTarget=b,!ue.__hasExternalTextures){const Ct=Math.max(1,b.width>>ht),Bt=Math.max(1,b.height>>ht);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Zt,Ct,Bt,b.depth,0,Jt,Nt,null):i.texImage2D(Mt,ht,Zt,Ct,Bt,0,Jt,Nt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),rn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,Mt,At.__webglTexture,0,W(b)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,Mt,At.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(P,b,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const mt=b.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,ht=D(b.stencilBuffer,Mt),Jt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(b),ht,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Jt,r.RENDERBUFFER,P)}else{const mt=b.textures;for(let Mt=0;Mt<mt.length;Mt++){const ht=mt[Mt],Jt=c.convert(ht.format,ht.colorSpace),Nt=c.convert(ht.type),Zt=L(ht.internalFormat,Jt,Nt,ht.colorSpace);rn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(b),Zt,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(b),Zt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(P,b,Z){const mt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),st(r.TEXTURE_CUBE_MAP,b.depthTexture);const ue=c.convert(b.depthTexture.format),At=c.convert(b.depthTexture.type);let Ct;b.depthTexture.format===Fa?Ct=r.DEPTH_COMPONENT24:b.depthTexture.format===js&&(Ct=r.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Ct,b.width,b.height,0,ue,At,null)}}else lt(b.depthTexture,0);const ht=Mt.__webglTexture,Jt=W(b),Nt=mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Zt=b.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Fa)rn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,Nt,ht,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,Nt,ht,0);else if(b.depthTexture.format===js)rn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,Nt,ht,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,Nt,ht,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const b=s.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const mt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=mt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)kt(b.__webglFramebuffer[mt],P,mt);else{const mt=P.texture.mipmaps;mt&&mt.length>0?kt(b.__webglFramebuffer[0],P,0):kt(b.__webglFramebuffer,P,0)}else if(Z){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=r.createRenderbuffer(),jt(b.__webglDepthbuffer[mt],P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}else{const mt=P.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),jt(b.__webglDepthbuffer,P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(P,b,Z){const mt=s.get(P);b!==void 0&&Rt(mt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Ee(P)}function Ce(P){const b=P.texture,Z=s.get(P),mt=s.get(b);P.addEventListener("dispose",N);const Mt=P.textures,ht=P.isWebGLCubeRenderTarget===!0,Jt=Mt.length>1;if(Jt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=b.version,f.memory.textures++),ht){Z.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[Nt]=[];for(let Zt=0;Zt<b.mipmaps.length;Zt++)Z.__webglFramebuffer[Nt][Zt]=r.createFramebuffer()}else Z.__webglFramebuffer[Nt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)Z.__webglFramebuffer[Nt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Jt)for(let Nt=0,Zt=Mt.length;Nt<Zt;Nt++){const ue=s.get(Mt[Nt]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&rn(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Mt.length;Nt++){const Zt=Mt[Nt];Z.__webglColorRenderbuffer[Nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Nt]);const ue=c.convert(Zt.format,Zt.colorSpace),At=c.convert(Zt.type),Ct=L(Zt.internalFormat,ue,At,Zt.colorSpace,P.isXRRenderTarget===!0),Bt=W(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,Ct,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(Z.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),st(r.TEXTURE_CUBE_MAP,b);for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Rt(Z.__webglFramebuffer[Nt][Zt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Zt);else Rt(Z.__webglFramebuffer[Nt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);M(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let Nt=0,Zt=Mt.length;Nt<Zt;Nt++){const ue=Mt[Nt],At=s.get(ue);let Ct=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,At.__webglTexture),st(Ct,ue),Rt(Z.__webglFramebuffer,P,ue,r.COLOR_ATTACHMENT0+Nt,Ct,0),M(ue)&&v(Ct)}i.unbindTexture()}else{let Nt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Nt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,mt.__webglTexture),st(Nt,b),b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Rt(Z.__webglFramebuffer[Zt],P,b,r.COLOR_ATTACHMENT0,Nt,Zt);else Rt(Z.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Nt,0);M(b)&&v(Nt),i.unbindTexture()}P.depthBuffer&&Ee(P)}function pe(P){const b=P.textures;for(let Z=0,mt=b.length;Z<mt;Z++){const Mt=b[Z];if(M(Mt)){const ht=U(P),Jt=s.get(Mt).__webglTexture;i.bindTexture(ht,Jt),v(ht),i.unbindTexture()}}}const Ae=[],ce=[];function fn(P){if(P.samples>0){if(rn(P)===!1){const b=P.textures,Z=P.width,mt=P.height;let Mt=r.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Jt=s.get(P),Nt=b.length>1;if(Nt)for(let ue=0;ue<b.length;ue++)i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const Zt=P.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[ue]);const At=s.get(b[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,Mt,r.NEAREST),m===!0&&(Ae.length=0,ce.length=0,Ae.push(r.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ae.push(ht),ce.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Nt)for(let ue=0;ue<b.length;ue++){i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[ue]);const At=s.get(b[ue]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function W(P){return Math.min(l.maxSamples,P.samples)}function rn(P){const b=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(P){const b=f.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Fe(P,b){const Z=P.colorSpace,mt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==$r&&Z!==vs&&(Ge.getTransfer(Z)===$e?(mt!==Xi||Mt!==yi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",Z)),b}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=H,this.setTexture2D=lt,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=nt,this.rebindTextures=Ye,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function kA(r,t){function i(s,l=vs){let c;const f=Ge.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Yv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===jv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Wv)return r.BYTE;if(s===qv)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===sa)return r.UNSIGNED_INT;if(s===ta)return r.FLOAT;if(s===Ia)return r.HALF_FLOAT;if(s===Zv)return r.ALPHA;if(s===Kv)return r.RGB;if(s===Xi)return r.RGBA;if(s===Fa)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===Qv)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===Jr)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===jc||s===Zc||s===Kc||s===Qc)if(f===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Md||s===Ed||s===bd||s===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ad||s===Rd)return f===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Cd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===wd)return c.COMPRESSED_R11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ud)return c.COMPRESSED_RG11_EAC;if(s===Ld)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yd||s===jd||s===Zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Yd)return f===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kd||s===Qd||s===Jd||s===$d)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Kd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const XA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
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

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new cx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new oa({vertexShader:XA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new hu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends Ks{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new qA,v={},U=i.getContextAttributes();let L=null,D=null;const O=[],F=[],N=new _e;let k=null;const A=new Ni;A.viewport=new xn;const w=new Ni;w.viewport=new xn;const X=[A,w],H=new eE;let Q=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=O[it];return dt===void 0&&(dt=new jh,O[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=O[it];return dt===void 0&&(dt=new jh,O[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=O[it];return dt===void 0&&(dt=new jh,O[it]=dt),dt.getHandSpace()};function lt(it){const dt=F.indexOf(it.inputSource);if(dt===-1)return;const Rt=O[dt];Rt!==void 0&&(Rt.update(it.inputSource,it.frame,p||f),Rt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",V);for(let it=0;it<O.length;it++){const dt=F[it];dt!==null&&(F[it]=null,O[it].disconnect(dt))}Q=null,at=null,M.reset();for(const it in v)delete v[it];t.setRenderTarget(L),y=null,x=null,_=null,l=null,D=null,Xt.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",V),U.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(N),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,jt=null,kt=null;U.depth&&(kt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=U.stencil?js:Fa,jt=U.stencil?rl:sa);const Ee={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Ee),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new ia(x.textureWidth,x.textureHeight,{format:Xi,type:yi,depthTexture:new ll(x.textureWidth,x.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Rt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ia(y.framebufferWidth,y.framebufferHeight,{format:Xi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Xt.setContext(l),Xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(it){for(let dt=0;dt<it.removed.length;dt++){const Rt=it.removed[dt],jt=F.indexOf(Rt);jt>=0&&(F[jt]=null,O[jt].disconnect(Rt))}for(let dt=0;dt<it.added.length;dt++){const Rt=it.added[dt];let jt=F.indexOf(Rt);if(jt===-1){for(let Ee=0;Ee<O.length;Ee++)if(Ee>=F.length){F.push(Rt),jt=Ee;break}else if(F[Ee]===null){F[Ee]=Rt,jt=Ee;break}if(jt===-1)break}const kt=O[jt];kt&&kt.connect(Rt)}}const nt=new j,Et=new j;function yt(it,dt,Rt){nt.setFromMatrixPosition(dt.matrixWorld),Et.setFromMatrixPosition(Rt.matrixWorld);const jt=nt.distanceTo(Et),kt=dt.projectionMatrix.elements,Ee=Rt.projectionMatrix.elements,Ye=kt[14]/(kt[10]-1),Ce=kt[14]/(kt[10]+1),pe=(kt[9]+1)/kt[5],Ae=(kt[9]-1)/kt[5],ce=(kt[8]-1)/kt[0],fn=(Ee[8]+1)/Ee[0],W=Ye*ce,rn=Ye*fn,we=jt/(-ce+fn),Fe=we*-ce;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Fe),it.translateZ(we),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Wt=Ye+we,P=Ce+we,b=W-Fe,Z=rn+(jt-Fe),mt=pe*Ce/P*Wt,Mt=Ae*Ce/P*Wt;it.projectionMatrix.makePerspective(b,Z,mt,Mt,Wt,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function z(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let dt=it.near,Rt=it.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),H.near=w.near=A.near=dt,H.far=w.far=A.far=Rt,(Q!==H.near||at!==H.far)&&(l.updateRenderState({depthNear:H.near,depthFar:H.far}),Q=H.near,at=H.far),H.layers.mask=it.layers.mask|6,A.layers.mask=H.layers.mask&3,w.layers.mask=H.layers.mask&5;const jt=it.parent,kt=H.cameras;z(H,jt);for(let Ee=0;Ee<kt.length;Ee++)z(kt[Ee],jt);kt.length===2?yt(H,A,w):H.projectionMatrix.copy(A.projectionMatrix),st(it,H,jt)};function st(it,dt,Rt){Rt===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(Rt.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=tp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(H)},this.getCameraTexture=function(it){return v[it]};let vt=null;function Dt(it,dt){if(g=dt.getViewerPose(p||f),E=dt,g!==null){const Rt=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let jt=!1;Rt.length!==H.cameras.length&&(H.cameras.length=0,jt=!0);for(let Ce=0;Ce<Rt.length;Ce++){const pe=Rt[Ce];let Ae=null;if(y!==null)Ae=y.getViewport(pe);else{const fn=_.getViewSubImage(x,pe);Ae=fn.viewport,Ce===0&&(t.setRenderTargetTextures(D,fn.colorTexture,fn.depthStencilTexture),t.setRenderTarget(D))}let ce=X[Ce];ce===void 0&&(ce=new Ni,ce.layers.enable(Ce),ce.viewport=new xn,X[Ce]=ce),ce.matrix.fromArray(pe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(pe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Ce===0&&(H.matrix.copy(ce.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),jt===!0&&H.cameras.push(ce)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const Ce=_.getDepthInformation(Rt[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(Ce,l.renderState)}if(kt&&kt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let Ce=0;Ce<Rt.length;Ce++){const pe=Rt[Ce].camera;if(pe){let Ae=v[pe];Ae||(Ae=new cx,v[pe]=Ae);const ce=_.getCameraImage(pe);Ae.sourceTexture=ce}}}}for(let Rt=0;Rt<O.length;Rt++){const jt=F[Rt],kt=O[Rt];jt!==null&&kt!==void 0&&kt.update(jt,dt,p||f)}vt&&vt(it,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Xt=new fx;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}}const Xs=new ra,jA=new pn;function ZA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,ax(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,U,L,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,U,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===fi&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===fi&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const U=t.get(v),L=U.envMap,D=U.envMapRotation;L&&(M.envMap.value=L,Xs.copy(D),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),M.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(Xs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,U,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*U,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,U){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const U=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function KA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const D=L.program;s.uniformBlockBinding(U,D)}function p(U,L){let D=l[U.id];D===void 0&&(E(U),D=g(U),l[U.id]=D,U.addEventListener("dispose",M));const O=L.program;s.updateUBOMapping(U,O);const F=t.render.frame;c[U.id]!==F&&(x(U),c[U.id]=F)}function g(U){const L=_();U.__bindingPointIndex=L;const D=r.createBuffer(),O=U.__size,F=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,O,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function _(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=l[U.id],D=U.uniforms,O=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,N=D.length;F<N;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,w=k.length;A<w;A++){const X=k[A];if(y(X,F,A,O)===!0){const H=X.__offset,Q=Array.isArray(X.value)?X.value:[X.value];let at=0;for(let lt=0;lt<Q.length;lt++){const I=Q[lt],V=T(I);typeof I=="number"||typeof I=="boolean"?(X.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,H+at,X.__data)):I.isMatrix3?(X.__data[0]=I.elements[0],X.__data[1]=I.elements[1],X.__data[2]=I.elements[2],X.__data[3]=0,X.__data[4]=I.elements[3],X.__data[5]=I.elements[4],X.__data[6]=I.elements[5],X.__data[7]=0,X.__data[8]=I.elements[6],X.__data[9]=I.elements[7],X.__data[10]=I.elements[8],X.__data[11]=0):(I.toArray(X.__data,at),at+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(U,L,D,O){const F=U.value,N=L+"_"+D;if(O[N]===void 0)return typeof F=="number"||typeof F=="boolean"?O[N]=F:O[N]=F.clone(),!0;{const k=O[N];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return O[N]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function E(U){const L=U.uniforms;let D=0;const O=16;for(let N=0,k=L.length;N<k;N++){const A=Array.isArray(L[N])?L[N]:[L[N]];for(let w=0,X=A.length;w<X;w++){const H=A[w],Q=Array.isArray(H.value)?H.value:[H.value];for(let at=0,lt=Q.length;at<lt;at++){const I=Q[at],V=T(I),nt=D%O,Et=nt%V.boundary,yt=nt+Et;D+=Et,yt!==0&&O-yt<V.storage&&(D+=O-yt),H.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=D,D+=V.storage}}}const F=D%O;return F>0&&(D+=O-F),U.__size=D,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):me("WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const QA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function JA(){return Ji===null&&(Ji=new VM(QA,16,16,Jr,Ia),Ji.name="DFG_LUT",Ji.minFilter=Jn,Ji.magFilter=Jn,Ji.wrapS=Oa,Ji.wrapT=Oa,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class $A{constructor(t={}){const{canvas:i=pM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=yi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=y,M=new Set([mp,pp,dp]),v=new Set([yi,sa,sl,rl,fp,hp]),U=new Uint32Array(4),L=new Int32Array(4);let D=null,O=null;const F=[],N=[];let k=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=Li;let X=0,H=0,Q=null,at=-1,lt=null;const I=new xn,V=new xn;let nt=null;const Et=new Ie(0);let yt=0,z=i.width,st=i.height,vt=1,Dt=null,Xt=null;const it=new xn(0,0,z,st),dt=new xn(0,0,z,st);let Rt=!1;const jt=new Sp;let kt=!1,Ee=!1;const Ye=new pn,Ce=new j,pe=new xn,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function fn(){return Q===null?vt:1}let W=s;function rn(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",G,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",gt,!1),W===null){const K="webgl2";if(W=rn(K,C),W===null)throw rn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw He("WebGLRenderer: "+C.message),C}let we,Fe,Wt,P,b,Z,mt,Mt,ht,Jt,Nt,Zt,ue,At,Ct,Bt,zt,Ot,ve,Y,Pt,wt,Ht,Tt;function xt(){we=new J1(W),we.init(),wt=new kA(W,we),Fe=new k1(W,we,t,wt),Wt=new GA(W,we),Fe.reversedDepthBuffer&&x&&Wt.buffers.depth.setReversed(!0),P=new eT(W),b=new AA,Z=new VA(W,we,Wt,b,Fe,wt,P),mt=new W1(A),Mt=new Q1(A),ht=new sE(W),Ht=new G1(W,ht),Jt=new $1(W,ht,P,Ht),Nt=new iT(W,Jt,ht,P),ve=new nT(W,Fe,Z),Bt=new X1(b),Zt=new TA(A,mt,Mt,we,Fe,Ht,Bt),ue=new ZA(A,b),At=new CA,Ct=new OA(we),Ot=new H1(A,mt,Mt,Wt,Nt,E,m),zt=new BA(A,Nt,Fe),Tt=new KA(W,P,Fe,Wt),Y=new V1(W,we,P),Pt=new tT(W,we,P),P.programs=Zt.programs,A.capabilities=Fe,A.extensions=we,A.properties=b,A.renderLists=At,A.shadowMap=zt,A.state=Wt,A.info=P}xt(),T!==yi&&(k=new sT(T,i.width,i.height,l,c));const Lt=new YA(A,W);this.xr=Lt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(z,st,!1))},this.getSize=function(C){return C.set(z,st)},this.setSize=function(C,K,ct=!0){if(Lt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,st=K,i.width=Math.floor(C*vt),i.height=Math.floor(K*vt),ct===!0&&(i.style.width=C+"px",i.style.height=K+"px"),k!==null&&k.setSize(i.width,i.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(z*vt,st*vt).floor()},this.setDrawingBufferSize=function(C,K,ct){z=C,st=K,vt=ct,i.width=Math.floor(C*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(T===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,K,ct,rt){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,K,ct,rt),Wt.viewport(I.copy(it).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,K,ct,rt){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,K,ct,rt),Wt.scissor(V.copy(dt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(C){Wt.setScissorTest(Rt=C)},this.setOpaqueSort=function(C){Dt=C},this.setTransparentSort=function(C){Xt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ct=!0){let rt=0;if(C){let $=!1;if(Q!==null){const It=Q.texture.format;$=M.has(It)}if($){const It=Q.texture.type,Yt=v.has(It),Ft=Ot.getClearColor(),Kt=Ot.getClearAlpha(),$t=Ft.r,le=Ft.g,te=Ft.b;Yt?(U[0]=$t,U[1]=le,U[2]=te,U[3]=Kt,W.clearBufferuiv(W.COLOR,0,U)):(L[0]=$t,L[1]=le,L[2]=te,L[3]=Kt,W.clearBufferiv(W.COLOR,0,L))}else rt|=W.COLOR_BUFFER_BIT}K&&(rt|=W.DEPTH_BUFFER_BIT),ct&&(rt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",G,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),Ot.dispose(),At.dispose(),Ct.dispose(),b.dispose(),mt.dispose(),Mt.dispose(),Nt.dispose(),Ht.dispose(),Tt.dispose(),Zt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",oe),Lt.removeEventListener("sessionend",Se),Pe.stop()};function G(C){C.preventDefault(),E_("WebGLRenderer: Context Lost."),w=!0}function ut(){E_("WebGLRenderer: Context Restored."),w=!1;const C=P.autoReset,K=zt.enabled,ct=zt.autoUpdate,rt=zt.needsUpdate,$=zt.type;xt(),P.autoReset=C,zt.enabled=K,zt.autoUpdate=ct,zt.needsUpdate=rt,zt.type=$}function gt(C){He("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const K=C.target;K.removeEventListener("dispose",Gt),Ut(K)}function Ut(C){ae(C),b.remove(C)}function ae(C){const K=b.get(C).programs;K!==void 0&&(K.forEach(function(ct){Zt.releaseProgram(ct)}),C.isShaderMaterial&&Zt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ct,rt,$,It){K===null&&(K=Ae);const Yt=$.isMesh&&$.matrixWorld.determinant()<0,Ft=la(C,K,ct,rt,$);Wt.setMaterial(rt,Yt);let Kt=ct.index,$t=1;if(rt.wireframe===!0){if(Kt=Jt.getWireframeAttribute(ct),Kt===void 0)return;$t=2}const le=ct.drawRange,te=ct.attributes.position;let he=le.start*$t,Xe=(le.start+le.count)*$t;It!==null&&(he=Math.max(he,It.start*$t),Xe=Math.min(Xe,(It.start+It.count)*$t)),Kt!==null?(he=Math.max(he,0),Xe=Math.min(Xe,Kt.count)):te!=null&&(he=Math.max(he,0),Xe=Math.min(Xe,te.count));const hn=Xe-he;if(hn<0||hn===1/0)return;Ht.setup($,rt,Ft,ct,Kt);let on,je=Y;if(Kt!==null&&(on=ht.get(Kt),je=Pt,je.setIndex(on)),$.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*fn()),je.setMode(W.LINES)):je.setMode(W.TRIANGLES);else if($.isLine){let ie=rt.linewidth;ie===void 0&&(ie=1),Wt.setLineWidth(ie*fn()),$.isLineSegments?je.setMode(W.LINES):$.isLineLoop?je.setMode(W.LINE_LOOP):je.setMode(W.LINE_STRIP)}else $.isPoints?je.setMode(W.POINTS):$.isSprite&&je.setMode(W.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))je.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ie=$._multiDrawStarts,We=$._multiDrawCounts,ge=$._multiDrawCount,Fn=Kt?ht.get(Kt).bytesPerElement:1,ca=b.get(rt).currentProgram.getUniforms();for(let Bn=0;Bn<ge;Bn++)ca.setValue(W,"_gl_DrawID",Bn),je.render(ie[Bn]/Fn,We[Bn])}else if($.isInstancedMesh)je.renderInstances(he,hn,$.count);else if(ct.isInstancedBufferGeometry){const ie=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,We=Math.min(ct.instanceCount,ie);je.renderInstances(he,hn,We)}else je.render(he,hn)};function se(C,K,ct){C.transparent===!0&&C.side===Na&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,gn(C,K,ct),C.side=ys,C.needsUpdate=!0,gn(C,K,ct),C.side=Na):gn(C,K,ct)}this.compile=function(C,K,ct=null){ct===null&&(ct=C),O=Ct.get(ct),O.init(K),N.push(O),ct.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(O.pushLight($),$.castShadow&&O.pushShadow($))}),C!==ct&&C.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(O.pushLight($),$.castShadow&&O.pushShadow($))}),O.setupLights();const rt=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const It=$.material;if(It)if(Array.isArray(It))for(let Yt=0;Yt<It.length;Yt++){const Ft=It[Yt];se(Ft,ct,$),rt.add(Ft)}else se(It,ct,$),rt.add(It)}),O=N.pop(),rt},this.compileAsync=function(C,K,ct=null){const rt=this.compile(C,K,ct);return new Promise($=>{function It(){if(rt.forEach(function(Yt){b.get(Yt).currentProgram.isReady()&&rt.delete(Yt)}),rt.size===0){$(C);return}setTimeout(It,10)}we.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let fe=null;function qt(C){fe&&fe(C)}function oe(){Pe.stop()}function Se(){Pe.start()}const Pe=new fx;Pe.setAnimationLoop(qt),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(C){fe=C,Lt.setAnimationLoop(C),C===null?Pe.stop():Pe.start()},Lt.addEventListener("sessionstart",oe),Lt.addEventListener("sessionend",Se),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ct=Lt.enabled===!0&&Lt.isPresenting===!0,rt=k!==null&&(Q===null||ct)&&k.begin(A,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(K),K=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,K,Q),O=Ct.get(C,N.length),O.init(K),N.push(O),Ye.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),jt.setFromProjectionMatrix(Ye,ea,K.reversedDepth),Ee=this.localClippingEnabled,kt=Bt.init(this.clippingPlanes,Ee),D=At.get(C,F.length),D.init(),F.push(D),Lt.enabled===!0&&Lt.isPresenting===!0){const Yt=A.xr.getDepthSensingMesh();Yt!==null&&Ze(Yt,K,-1/0,A.sortObjects)}Ze(C,K,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(Dt,Xt),ce=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ce&&Ot.addToRenderList(D,C),this.info.render.frame++,kt===!0&&Bt.beginShadows();const $=O.state.shadowsArray;if(zt.render($,C,K),kt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&k.hasRenderPass())===!1){const Yt=D.opaque,Ft=D.transmissive;if(O.setupLights(),K.isArrayCamera){const Kt=K.cameras;if(Ft.length>0)for(let $t=0,le=Kt.length;$t<le;$t++){const te=Kt[$t];Be(Yt,Ft,C,te)}ce&&Ot.render(C);for(let $t=0,le=Kt.length;$t<le;$t++){const te=Kt[$t];ye(D,C,te,te.viewport)}}else Ft.length>0&&Be(Yt,Ft,C,K),ce&&Ot.render(C),ye(D,C,K)}Q!==null&&H===0&&(Z.updateMultisampleRenderTarget(Q),Z.updateRenderTargetMipmap(Q)),rt&&k.end(A),C.isScene===!0&&C.onAfterRender(A,C,K),Ht.resetDefaultState(),at=-1,lt=null,N.pop(),N.length>0?(O=N[N.length-1],kt===!0&&Bt.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Ze(C,K,ct,rt){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||jt.intersectsSprite(C)){rt&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ye);const Yt=Nt.update(C),Ft=C.material;Ft.visible&&D.push(C,Yt,Ft,ct,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||jt.intersectsObject(C))){const Yt=Nt.update(C),Ft=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),pe.copy(Yt.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ft)){const Kt=Yt.groups;for(let $t=0,le=Kt.length;$t<le;$t++){const te=Kt[$t],he=Ft[te.materialIndex];he&&he.visible&&D.push(C,Yt,he,ct,pe.z,te)}}else Ft.visible&&D.push(C,Yt,Ft,ct,pe.z,null)}}const It=C.children;for(let Yt=0,Ft=It.length;Yt<Ft;Yt++)Ze(It[Yt],K,ct,rt)}function ye(C,K,ct,rt){const{opaque:$,transmissive:It,transparent:Yt}=C;O.setupLightsView(ct),kt===!0&&Bt.setGlobalState(A.clippingPlanes,ct),rt&&Wt.viewport(I.copy(rt)),$.length>0&&ln($,K,ct),It.length>0&&ln(It,K,ct),Yt.length>0&&ln(Yt,K,ct),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Be(C,K,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[rt.id]===void 0){const he=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[rt.id]=new ia(1,1,{generateMipmaps:!0,type:he?Ia:yi,minFilter:Ys,samples:Fe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const It=O.state.transmissionRenderTarget[rt.id],Yt=rt.viewport||I;It.setSize(Yt.z*A.transmissionResolutionScale,Yt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Kt=A.getActiveCubeFace(),$t=A.getActiveMipmapLevel();A.setRenderTarget(It),A.getClearColor(Et),yt=A.getClearAlpha(),yt<1&&A.setClearColor(16777215,.5),A.clear(),ce&&Ot.render(ct);const le=A.toneMapping;A.toneMapping=na;const te=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),O.setupLightsView(rt),kt===!0&&Bt.setGlobalState(A.clippingPlanes,rt),ln(C,ct,rt),Z.updateMultisampleRenderTarget(It),Z.updateRenderTargetMipmap(It),we.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Xe=0,hn=K.length;Xe<hn;Xe++){const on=K[Xe],{object:je,geometry:ie,material:We,group:ge}=on;if(We.side===Na&&je.layers.test(rt.layers)){const Fn=We.side;We.side=fi,We.needsUpdate=!0,Sn(je,ct,rt,ie,We,ge),We.side=Fn,We.needsUpdate=!0,he=!0}}he===!0&&(Z.updateMultisampleRenderTarget(It),Z.updateRenderTargetMipmap(It))}A.setRenderTarget(Ft,Kt,$t),A.setClearColor(Et,yt),te!==void 0&&(rt.viewport=te),A.toneMapping=le}function ln(C,K,ct){const rt=K.isScene===!0?K.overrideMaterial:null;for(let $=0,It=C.length;$<It;$++){const Yt=C[$],{object:Ft,geometry:Kt,group:$t}=Yt;let le=Yt.material;le.allowOverride===!0&&rt!==null&&(le=rt),Ft.layers.test(ct.layers)&&Sn(Ft,K,ct,Kt,le,$t)}}function Sn(C,K,ct,rt,$,It){C.onBeforeRender(A,K,ct,rt,$,It),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,K,ct,rt,C,It),$.transparent===!0&&$.side===Na&&$.forceSinglePass===!1?($.side=fi,$.needsUpdate=!0,A.renderBufferDirect(ct,K,rt,$,C,It),$.side=ys,$.needsUpdate=!0,A.renderBufferDirect(ct,K,rt,$,C,It),$.side=Na):A.renderBufferDirect(ct,K,rt,$,C,It),C.onAfterRender(A,K,ct,rt,$,It)}function gn(C,K,ct){K.isScene!==!0&&(K=Ae);const rt=b.get(C),$=O.state.lights,It=O.state.shadowsArray,Yt=$.state.version,Ft=Zt.getParameters(C,$.state,It,K,ct),Kt=Zt.getProgramCacheKey(Ft);let $t=rt.programs;rt.environment=C.isMeshStandardMaterial?K.environment:null,rt.fog=K.fog,rt.envMap=(C.isMeshStandardMaterial?Mt:mt).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",Gt),$t=new Map,rt.programs=$t);let le=$t.get(Kt);if(le!==void 0){if(rt.currentProgram===le&&rt.lightsStateVersion===Yt)return Pi(C,Ft),le}else Ft.uniforms=Zt.getUniforms(C),C.onBeforeCompile(Ft,A),le=Zt.acquireProgram(Ft,Kt),$t.set(Kt,le),rt.uniforms=Ft.uniforms;const te=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=Bt.uniform),Pi(C,Ft),rt.needsLights=qi(C),rt.lightsStateVersion=Yt,rt.needsLights&&(te.ambientLightColor.value=$.state.ambient,te.lightProbe.value=$.state.probe,te.directionalLights.value=$.state.directional,te.directionalLightShadows.value=$.state.directionalShadow,te.spotLights.value=$.state.spot,te.spotLightShadows.value=$.state.spotShadow,te.rectAreaLights.value=$.state.rectArea,te.ltc_1.value=$.state.rectAreaLTC1,te.ltc_2.value=$.state.rectAreaLTC2,te.pointLights.value=$.state.point,te.pointLightShadows.value=$.state.pointShadow,te.hemisphereLights.value=$.state.hemi,te.directionalShadowMap.value=$.state.directionalShadowMap,te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,te.spotShadowMap.value=$.state.spotShadowMap,te.spotLightMatrix.value=$.state.spotLightMatrix,te.spotLightMap.value=$.state.spotLightMap,te.pointShadowMap.value=$.state.pointShadowMap,te.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=le,rt.uniformsList=null,le}function Wi(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Pi(C,K){const ct=b.get(C);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function la(C,K,ct,rt,$){K.isScene!==!0&&(K=Ae),Z.resetTextureUnits();const It=K.fog,Yt=rt.isMeshStandardMaterial?K.environment:null,Ft=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$r,Kt=(rt.isMeshStandardMaterial?Mt:mt).get(rt.envMap||Yt),$t=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,le=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),te=!!ct.morphAttributes.position,he=!!ct.morphAttributes.normal,Xe=!!ct.morphAttributes.color;let hn=na;rt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(hn=A.toneMapping);const on=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,je=on!==void 0?on.length:0,ie=b.get(rt),We=O.state.lights;if(kt===!0&&(Ee===!0||C!==lt)){const Gn=C===lt&&rt.id===at;Bt.setState(rt,C,Gn)}let ge=!1;rt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==We.state.version||ie.outputColorSpace!==Ft||$.isBatchedMesh&&ie.batching===!1||!$.isBatchedMesh&&ie.batching===!0||$.isBatchedMesh&&ie.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ie.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ie.instancing===!1||!$.isInstancedMesh&&ie.instancing===!0||$.isSkinnedMesh&&ie.skinning===!1||!$.isSkinnedMesh&&ie.skinning===!0||$.isInstancedMesh&&ie.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ie.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ie.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ie.instancingMorph===!1&&$.morphTexture!==null||ie.envMap!==Kt||rt.fog===!0&&ie.fog!==It||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Bt.numPlanes||ie.numIntersection!==Bt.numIntersection)||ie.vertexAlphas!==$t||ie.vertexTangents!==le||ie.morphTargets!==te||ie.morphNormals!==he||ie.morphColors!==Xe||ie.toneMapping!==hn||ie.morphTargetsCount!==je)&&(ge=!0):(ge=!0,ie.__version=rt.version);let Fn=ie.currentProgram;ge===!0&&(Fn=gn(rt,K,$));let ca=!1,Bn=!1,Mi=!1;const Ke=Fn.getUniforms(),Hn=ie.uniforms;if(Wt.useProgram(Fn.program)&&(ca=!0,Bn=!0,Mi=!0),rt.id!==at&&(at=rt.id,Bn=!0),ca||lt!==C){Wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ke.setValue(W,"projectionMatrix",C.projectionMatrix),Ke.setValue(W,"viewMatrix",C.matrixWorldInverse);const Vn=Ke.map.cameraPosition;Vn!==void 0&&Vn.setValue(W,Ce.setFromMatrixPosition(C.matrixWorld)),Fe.logarithmicDepthBuffer&&Ke.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ke.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),lt!==C&&(lt=C,Bn=!0,Mi=!0)}if(ie.needsLights&&(We.state.directionalShadowMap.length>0&&Ke.setValue(W,"directionalShadowMap",We.state.directionalShadowMap,Z),We.state.spotShadowMap.length>0&&Ke.setValue(W,"spotShadowMap",We.state.spotShadowMap,Z),We.state.pointShadowMap.length>0&&Ke.setValue(W,"pointShadowMap",We.state.pointShadowMap,Z)),$.isSkinnedMesh){Ke.setOptional(W,$,"bindMatrix"),Ke.setOptional(W,$,"bindMatrixInverse");const Gn=$.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ke.setValue(W,"boneTexture",Gn.boneTexture,Z))}$.isBatchedMesh&&(Ke.setOptional(W,$,"batchingTexture"),Ke.setValue(W,"batchingTexture",$._matricesTexture,Z),Ke.setOptional(W,$,"batchingIdTexture"),Ke.setValue(W,"batchingIdTexture",$._indirectTexture,Z),Ke.setOptional(W,$,"batchingColorTexture"),$._colorsTexture!==null&&Ke.setValue(W,"batchingColorTexture",$._colorsTexture,Z));const wn=ct.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&ve.update($,ct,Fn),(Bn||ie.receiveShadow!==$.receiveShadow)&&(ie.receiveShadow=$.receiveShadow,Ke.setValue(W,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Hn.envMap.value=Kt,Hn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=JA()),Bn&&(Ke.setValue(W,"toneMappingExposure",A.toneMappingExposure),ie.needsLights&&Ga(Hn,Mi),It&&rt.fog===!0&&ue.refreshFogUniforms(Hn,It),ue.refreshMaterialUniforms(Hn,rt,vt,st,O.state.transmissionRenderTarget[C.id]),$c.upload(W,Wi(ie),Hn,Z)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&($c.upload(W,Wi(ie),Hn,Z),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ke.setValue(W,"center",$.center),Ke.setValue(W,"modelViewMatrix",$.modelViewMatrix),Ke.setValue(W,"normalMatrix",$.normalMatrix),Ke.setValue(W,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Gn=rt.uniformsGroups;for(let Vn=0,Js=Gn.length;Vn<Js;Vn++){const zi=Gn[Vn];Tt.update(zi,Fn),Tt.bind(zi,Fn)}}return Fn}function Ga(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function qi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,K,ct){const rt=b.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=K,b.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ct=b.get(C);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Yi=W.createFramebuffer();this.setRenderTarget=function(C,K=0,ct=0){Q=C,X=K,H=ct;let rt=null,$=!1,It=!1;if(C){const Ft=b.get(C);if(Ft.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(W.FRAMEBUFFER,Ft.__webglFramebuffer),I.copy(C.viewport),V.copy(C.scissor),nt=C.scissorTest,Wt.viewport(I),Wt.scissor(V),Wt.setScissorTest(nt),at=-1;return}else if(Ft.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(Ft.__hasExternalTextures)Z.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const le=C.depthTexture;if(Ft.__boundDepthTexture!==le){if(le!==null&&b.has(le)&&(C.width!==le.image.width||C.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(It=!0);const $t=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[K])?rt=$t[K][ct]:rt=$t[K],$=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?rt=b.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?rt=$t[ct]:rt=$t,I.copy(C.viewport),V.copy(C.scissor),nt=C.scissorTest}else I.copy(it).multiplyScalar(vt).floor(),V.copy(dt).multiplyScalar(vt).floor(),nt=Rt;if(ct!==0&&(rt=Yi),Wt.bindFramebuffer(W.FRAMEBUFFER,rt)&&Wt.drawBuffers(C,rt),Wt.viewport(I),Wt.scissor(V),Wt.setScissorTest(nt),$){const Ft=b.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,ct)}else if(It){const Ft=K;for(let Kt=0;Kt<C.textures.length;Kt++){const $t=b.get(C.textures[Kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Kt,$t.__webglTexture,ct,Ft)}}else if(C!==null&&ct!==0){const Ft=b.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ft.__webglTexture,ct)}at=-1},this.readRenderTargetPixels=function(C,K,ct,rt,$,It,Yt,Ft=0){if(!(C&&C.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt){Wt.bindFramebuffer(W.FRAMEBUFFER,Kt);try{const $t=C.textures[Ft],le=$t.format,te=$t.type;if(!Fe.textureFormatReadable(le)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(te)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-rt&&ct>=0&&ct<=C.height-$&&(C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ft),W.readPixels(K,ct,rt,$,wt.convert(le),wt.convert(te),It))}finally{const $t=Q!==null?b.get(Q).__webglFramebuffer:null;Wt.bindFramebuffer(W.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,K,ct,rt,$,It,Yt,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt)if(K>=0&&K<=C.width-rt&&ct>=0&&ct<=C.height-$){Wt.bindFramebuffer(W.FRAMEBUFFER,Kt);const $t=C.textures[Ft],le=$t.format,te=$t.type;if(!Fe.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,he),W.bufferData(W.PIXEL_PACK_BUFFER,It.byteLength,W.STREAM_READ),C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ft),W.readPixels(K,ct,rt,$,wt.convert(le),wt.convert(te),0);const Xe=Q!==null?b.get(Q).__webglFramebuffer:null;Wt.bindFramebuffer(W.FRAMEBUFFER,Xe);const hn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await mM(W,hn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,he),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,It),W.deleteBuffer(he),W.deleteSync(hn),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ct=0){const rt=Math.pow(2,-ct),$=Math.floor(C.image.width*rt),It=Math.floor(C.image.height*rt),Yt=K!==null?K.x:0,Ft=K!==null?K.y:0;Z.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,ct,0,0,Yt,Ft,$,It),Wt.unbindTexture()};const Ms=W.createFramebuffer(),Va=W.createFramebuffer();this.copyTextureToTexture=function(C,K,ct=null,rt=null,$=0,It=null){It===null&&($!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=$,$=0):It=0);let Yt,Ft,Kt,$t,le,te,he,Xe,hn;const on=C.isCompressedTexture?C.mipmaps[It]:C.image;if(ct!==null)Yt=ct.max.x-ct.min.x,Ft=ct.max.y-ct.min.y,Kt=ct.isBox3?ct.max.z-ct.min.z:1,$t=ct.min.x,le=ct.min.y,te=ct.isBox3?ct.min.z:0;else{const wn=Math.pow(2,-$);Yt=Math.floor(on.width*wn),Ft=Math.floor(on.height*wn),C.isDataArrayTexture?Kt=on.depth:C.isData3DTexture?Kt=Math.floor(on.depth*wn):Kt=1,$t=0,le=0,te=0}rt!==null?(he=rt.x,Xe=rt.y,hn=rt.z):(he=0,Xe=0,hn=0);const je=wt.convert(K.format),ie=wt.convert(K.type);let We;K.isData3DTexture?(Z.setTexture3D(K,0),We=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Z.setTexture2DArray(K,0),We=W.TEXTURE_2D_ARRAY):(Z.setTexture2D(K,0),We=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const ge=W.getParameter(W.UNPACK_ROW_LENGTH),Fn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ca=W.getParameter(W.UNPACK_SKIP_PIXELS),Bn=W.getParameter(W.UNPACK_SKIP_ROWS),Mi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,on.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,on.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,$t),W.pixelStorei(W.UNPACK_SKIP_ROWS,le),W.pixelStorei(W.UNPACK_SKIP_IMAGES,te);const Ke=C.isDataArrayTexture||C.isData3DTexture,Hn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const wn=b.get(C),Gn=b.get(K),Vn=b.get(wn.__renderTarget),Js=b.get(Gn.__renderTarget);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Js.__webglFramebuffer);for(let zi=0;zi<Kt;zi++)Ke&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,b.get(C).__webglTexture,$,te+zi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,b.get(K).__webglTexture,It,hn+zi)),W.blitFramebuffer($t,le,Yt,Ft,he,Xe,Yt,Ft,W.DEPTH_BUFFER_BIT,W.NEAREST);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||b.has(C)){const wn=b.get(C),Gn=b.get(K);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,Ms),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Va);for(let Vn=0;Vn<Kt;Vn++)Ke?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,wn.__webglTexture,$,te+Vn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,wn.__webglTexture,$),Hn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Gn.__webglTexture,It,hn+Vn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Gn.__webglTexture,It),$!==0?W.blitFramebuffer($t,le,Yt,Ft,he,Xe,Yt,Ft,W.COLOR_BUFFER_BIT,W.NEAREST):Hn?W.copyTexSubImage3D(We,It,he,Xe,hn+Vn,$t,le,Yt,Ft):W.copyTexSubImage2D(We,It,he,Xe,$t,le,Yt,Ft);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Hn?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(We,It,he,Xe,hn,Yt,Ft,Kt,je,ie,on.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(We,It,he,Xe,hn,Yt,Ft,Kt,je,on.data):W.texSubImage3D(We,It,he,Xe,hn,Yt,Ft,Kt,je,ie,on):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,It,he,Xe,Yt,Ft,je,ie,on.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,It,he,Xe,on.width,on.height,je,on.data):W.texSubImage2D(W.TEXTURE_2D,It,he,Xe,Yt,Ft,je,ie,on);W.pixelStorei(W.UNPACK_ROW_LENGTH,ge),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Fn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ca),W.pixelStorei(W.UNPACK_SKIP_ROWS,Bn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Mi),It===0&&K.generateMipmaps&&W.generateMipmap(We),Wt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){X=0,H=0,Q=null,Wt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ge._getUnpackColorSpace()}}const Mv={type:"change"},Ap={type:"start"},gx={type:"end"},qc=new uu,Ev=new La,tR=Math.cos(70*_M.DEG2RAD),Un=new j,ui=2*Math.PI,an={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class eR extends iE{constructor(t,i=null){super(t,i),this.state=an.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Ba,this._lastTargetPosition=new j,this._quat=new Ba().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K_,this._sphericalDelta=new K_,this._scale=1,this._panOffset=new j,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new j,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iR.bind(this),this._onPointerDown=nR.bind(this),this._onPointerUp=aR.bind(this),this._onContextMenu=fR.bind(this),this._onMouseWheel=oR.bind(this),this._onKeyDown=lR.bind(this),this._onTouchStart=cR.bind(this),this._onTouchMove=uR.bind(this),this._onMouseDown=sR.bind(this),this._onMouseMove=rR.bind(this),this._interceptControlDown=hR.bind(this),this._interceptControlUp=dR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mv),this.update(),this.state=an.NONE}update(t=null){const i=this.object.position;Un.copy(i).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===an.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),l<-Math.PI?l+=ui:l>Math.PI&&(l-=ui),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),i.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=Un.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<tR?this.object.lookAt(this.target):(Ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(Ev,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(Mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Un.setFromMatrixColumn(i,0),Un.multiplyScalar(-t),this._panOffset.add(Un)}_panUp(t,i){this.screenSpacePanning===!0?Un.setFromMatrixColumn(i,1):(Un.setFromMatrixColumn(i,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(t),this._panOffset.add(Un)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Un.copy(l).sub(this.target);let c=Un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new _e,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function nR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function iR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function aR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gx),this.state=an.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function sR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=an.DOLLY;break;case Yr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=an.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=an.ROTATE}break;case Yr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=an.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=an.PAN}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(Ap)}function rR(r){switch(this.state){case an.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case an.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case an.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function oR(r){this.enabled===!1||this.enableZoom===!1||this.state!==an.NONE||(r.preventDefault(),this.dispatchEvent(Ap),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gx))}function lR(r){this.enabled!==!1&&this._handleKeyDown(r)}function cR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=an.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=an.TOUCH_PAN;break;default:this.state=an.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=an.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=an.TOUCH_DOLLY_ROTATE;break;default:this.state=an.NONE}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(Ap)}function uR(r){switch(this._trackPointer(r),this.state){case an.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case an.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case an.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case an.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=an.NONE}}function fR(r){this.enabled!==!1&&r.preventDefault()}function hR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pR(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function eo(r){if(!pR(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function bv(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function qr(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function Ha(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function Qs(r){return Math.sqrt(En(r,r))}function mR(r,t){return r.map(i=>i*t)}function zn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function _x(r){const t=Qs(r);return mR(r,1/t)}function hl(r){const t=Qs(r);return zn(r,1/t)}function En(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function Ss(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function gR(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=En(t,r),f=Ss(t,r);return r[0]=r[0]*s+f[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+f[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+f[2]*l+t[2]*c*(1-s),r}function _R(r,t){const i=hl(qr([...t],zn([...r],-En(t,r))));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=Ss(r,i),l=[r,i,s];return f=>eo(l.map(h=>En(h,f)))}let vx=0;function vR(){vx=0}function ou(r={}){return{id:r.id??vx++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],moment:r.moment?[...r.moment]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0],fixed:r.fixed??!1}}function mu(r,t){return{...r,...t}}function xR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(h=>h.id===t),l=r.find(h=>h.id===i);if(!s||!l)return;const c=_R(hl([...s.moment]),Ha(s.pos,l.pos));if(!c)return;const f=s.pos;return r.map(h=>mu(h,{pos:c(Ha(f,h.pos)),vel:c(h.vel??[0,0,0]),moment:c(h.moment),f:c(h.f??[0,0,0]),tau:c(h.tau??[0,0,0])}))}function SR(r,t){return r.map(i=>({...i,pos:zn(i.pos,t)})).map(ou)}function yR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.join(", "),moment:c.moment.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function MR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const h=f.split(",").map(m=>parseFloat(m.trim()));if(h.length===3&&h.every(m=>!isNaN(m)))return h}return f};for(const f of t.magnets){const h={};for(const[m,p]of Object.entries(f))h[m]=c(p);eo(h.pos),eo(hl(h.moment)),l.push(h)}return{name:i,unit:s,magnets:l}}async function Tv(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:f}=MR(s),h={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in h))throw new Error(`Unknown unit in preset: ${c}`);const m=h[c];return{name:l||r,magnets:SR(f,m)}}catch{if(r in ap){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=ap[r]();return l.map(c=>zn(c.pos,t)),{name:r,magnets:l.map(ou)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function ER(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(ap).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const ap={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:hl([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},xx=4*Math.PI*1e-7;function bR(r,t,i,s,l){const c=Qs(l),f=_x(l),h=En(i,f),m=En(s,f),p=En(i,s),g=4*Math.PI*xx*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:h,q:m,r:p,K:g,m1:i,m2:s,d:l}}function TR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function AR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:h,m2:m}=r,p=t**4,g=3*f/p,_=5*s*l-c;return zn([i[0]*_-h[0]*l-m[0]*s,i[1]*_-h[1]*l-m[1]*s,i[2]*_-h[2]*l-m[2]*s],g)}function RR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:h}=r,m=c/t**3,p=zn(bv(zn(Ss(f,i),-3*l),Ss(f,h)),-m),g=zn(bv(zn(Ss(h,i),-3*s),Ss(h,f)),-m);return{tor1:p,tor2:g}}function CR(r,t,i,s,l){const c=bR(r,t,i,s,l),f=TR(c),h=AR(c),m=zn([...h],-1),{tor1:p,tor2:g}=RR(c);return{U:f,force1:h,force2:m,torque1:p,torque2:g}}const wR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3,rollingFriction:.005};class DR{constructor(t={}){const i={...wR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.rollingFriction=i.rollingFriction,this.mMag=i.br/xx,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function sp(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Av(r,t,i,s){if(Math.abs(r)<1e-20)return sp(t,i,s);const l=t/r,c=i/r,f=s/r,h=l/3,m=c-l*l/3,p=f-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),y=Math.cbrt(-p/2-_);return[x+y-h]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,y=2*Math.cbrt(_);return[y*Math.cos(x)-h,y*Math.cos(x+2*Math.PI/3)-h,y*Math.cos(x+4*Math.PI/3)-h]}else{const _=Math.cbrt(-p/2);return[2*_-h,-_-h]}}function UR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Av(t,i,s,l);const c=t/r,f=i/r,h=s/r,m=l/r,p=c/4,g=f-3*c*c/8,_=h-c*f/2+c*c*c/8,x=m-c*h/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const U=[];for(const L of sp(1,g,x))if(L>=-1e-12){const D=Math.sqrt(Math.max(0,L));U.push(D-p,-D-p)}return U}const y=Av(1,g/2,(g*g-4*x)/16,-_*_/64),E=Math.max(...y,1e-12),T=Math.sqrt(Math.max(E,0));if(T<1e-12)return[];const M=_/(4*T),v=[];for(const[U,L]of[[1,-M],[-1,M]])for(const D of sp(1,U*T,g/2+E+L))v.push(D-p);return v}function rp(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],h=r[c],m=Ha(f,h),p=Qs(m);p<=t&&i.push({i:l,j:c,normal:zn(m,1/p),dist:p})}return i}function Rv(r,t,i,s=null,l=20,c=1e-7){const f=r.map(_=>[..._]),h=rp(f,t+i),m=t-i,p=t-i/2,g=s||r.map(()=>!1);for(let _=0;_<l;_++){let x=0;for(const{i:y,j:E}of h){const T=Ha(f[y],f[E]),M=Qs(T),v=zn(T,1/M);let U=0;if(M<m?(U=p-M,x=Math.max(x,t-M)):M<t&&(U=(t-M)*.5,x=Math.max(x,t-M)),U>c){const L=f[y],D=f[E],O=+g[y]-+g[E],F=U*((1-O)*.5),N=U*((1+O)*.5);L[0]-=v[0]*F,L[1]-=v[1]*F,L[2]-=v[2]*F,D[0]+=v[0]*N,D[1]+=v[1]*N,D[2]+=v[2]*N}}if(x<c)break}return f}function LR(r,t,i,s,l=null,c=.3,f=1e-7){const h=l||r.map(()=>!1),m=t.map((x,y)=>h[y]?[0,0,0]:[...x]),p=i.map((x,y)=>h[y]?[0,0,0]:[...x]),g=Sx(s,h),_=new Float64Array(s.length);if(g.length>0){const x=g.map(E=>s[E]);BR(p,x,h,f);const y=NR(m,p,x,h,c,5,f);g.forEach((E,T)=>{_[E]=y[T]})}return{constrainedForces:m,constrainedVel:p,forceLambda:_}}function Sx(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function NR(r,t,i,s,l=.3,c=5,f=1e-7){const h=i.length,m=new Float64Array(h);if(h===0)return m;const p=i.map(U=>{const L=U.normal,[D,O]=zR(L);return[L,D,O]}),g=new Array(h).fill(!0),_=i.map((U,L)=>{const{i:D,j:O,normal:F}=U,N=Ha(t[O],t[D]),k=En(N,F),A=[N[0]-F[0]*k,N[1]-F[1]*k,N[2]-F[2]*k],w=Qs(A);return w>f?(g[L]=!1,zn(A,-1/w)):[0,0,0]}),x=r.map(U=>[...U]),y=i.map(()=>[0,0,0]);for(let U=0;U<c;U++){const{A:L,b:D,eqMap:O}=Dv(i,s,x,p,g),F=op(L,D);if(!F)break;const N=Cv(F,O,g);if(OR(N,g,l,f)){for(let k=0;k<h;k++){m[k]=N[k].fn;const A=wv(p[k],N[k],g[k],y[k]);tu(r,i[k],A,s)}return m}r.forEach((k,A)=>{const w=x[A];w[0]=k[0],w[1]=k[1],w[2]=k[2]});for(let k=0;k<h;k++)g[k]||(PR(p[k],N[k],y[k],_[k],l,f),tu(x,i[k],y[k],s))}const{A:E,b:T,eqMap:M}=Dv(i,s,x,p,g),v=op(E,T);if(v){const U=Cv(v,M,g);for(let L=0;L<h;L++){m[L]=U[L].fn;const D=wv(p[L],U[L],g[L],y[L]);tu(r,i[L],D,s)}}return m}function tu(r,t,i,s){const{i:l,j:c}=t;if(!s[l]){const f=r[l];f[0]+=i[0],f[1]+=i[1],f[2]+=i[2]}if(!s[c]){const f=r[c];f[0]-=i[0],f[1]-=i[1],f[2]-=i[2]}}function Cv(r,t,i){return Array.from(t,(s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,h=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:h}})}function OR(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:h,ft2:m}=r[c],p=Math.sqrt(h*h+m*m),g=i*Math.abs(f);t[c]&&p>g+s?(t[c]=!1,l=!1):!t[c]&&p<=g-s}return l}function wv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[h,m,p]=r,g=[l*h[0]+c*m[0]+f*p[0],l*h[1]+c*m[1]+f*p[1],l*h[2]+c*m[2]+f*p[2]];return i||qr(g,s),g}function PR(r,t,i,s,l,c){const[f,h,m]=r,{fn:p,ft1:g,ft2:_}=t,x=l*Math.abs(p);if(s[0]!==0||s[1]!==0||s[2]!==0)i[0]=s[0]*x,i[1]=s[1]*x,i[2]=s[2]*x;else{const y=Math.sqrt(g*g+_*_);if(y>c){const E=x/y;i[0]=(g*h[0]+_*m[0])*E,i[1]=(g*h[1]+_*m[1])*E,i[2]=(g*h[2]+_*m[2])*E}else i[0]=0,i[1]=0,i[2]=0}}function zR(r){const t=Math.abs(r[0])<.9?[1,0,0]:[0,1,0],i=_x(Ss(r,t)),s=Ss(r,i);return[i,s]}function Dv(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let h=0;for(let y=0;y<c;y++)f[y]=h,h+=l[y]?3:1;const m=[],p=[],g=[],_=new Float64Array(h);for(let y=0;y<c;y++){const E=r[y],T=E.i,M=E.j,v=t[T]?0:1,U=t[M]?0:1,L=l[y]?3:1;for(let D=0;D<L;D++){const O=s[y][D],F=f[y]+D;_[F]=v*En(i[T],O)-U*En(i[M],O);for(let N=0;N<c;N++){const k=r[N],A=k.i,w=k.j,X=l[N]?3:1;for(let H=0;H<X;H++){const Q=s[N][H],at=f[N]+H,lt=En(O,Q);let I=0;T===A&&(I-=v*lt),T===w&&(I+=v*lt),M===A&&(I+=U*lt),M===w&&(I-=U*lt),Math.abs(I)>1e-15&&(m.push(F),p.push(at),g.push(I))}}}}return{A:yx(h,m,p,g),b:_,neq:h,eqMap:f}}function yx(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],h=new Int32Array(f),m=new Float64Array(f),p=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],x=c[_]+p[_];let y=!1;for(let E=c[_];E<x;E++)if(h[E]===i[g]){m[E]+=s[g],y=!0;break}y||(h[x]=i[g],m[x]=s[g],p[_]++)}return{n:r,rowPtr:c,colIdx:h,values:m}}function IR(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],h=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],x=_.i,y=_.j,E=_.normal,T=i[x]?0:1,M=i[y]?0:1;c[g]=T*En(s[x],E)-M*En(s[y],E);for(let v=0;v<l;v++){const U=r[t[v]],L=U.i,D=U.j,O=U.normal,F=En(E,O);let N=0;x===L&&(N-=T*F),x===D&&(N+=T*F),y===L&&(N+=M*F),y===D&&(N-=M*F),Math.abs(N)>1e-15&&(f.push(g),h.push(v),m.push(N))}}return{A:yx(l,f,h,m),b:c}}function op(r,t){const i=r.n,s=Array.from({length:i},()=>new Float64Array(i));for(let f=0;f<i;f++)for(let h=r.rowPtr[f];h<r.rowPtr[f+1];h++)s[f][r.colIdx[h]]=r.values[h];const l=new Float64Array(t);for(let f=0;f<i;f++){let h=Math.abs(s[f][f]),m=f;for(let g=f+1;g<i;g++){const _=Math.abs(s[g][f]);_>h&&(h=_,m=g)}if(h<1e-12)return null;if(m!==f){const g=s[f];s[f]=s[m],s[m]=g;const _=l[f];l[f]=l[m],l[m]=_}const p=s[f][f];for(let g=f+1;g<i;g++){const _=s[g][f]/p;s[g][f]=0;for(let x=f+1;x<i;x++)s[g][x]-=_*s[f][x];l[g]-=_*l[f]}}const c=new Float64Array(i);for(let f=i-1;f>=0;f--){let h=l[f];for(let m=f+1;m<i;m++)h-=s[f][m]*c[m];c[f]=h/s[f][f]}return c}function FR(r,t,i,s,l,c,f){for(let h=0;h<i.length;h++){const m=l[h],p=i[h];Math.abs(m)<f||tu(r,t[p],zn(t[p].normal,m),s)}}function BR(r,t,i,s=1e-7){if(t.length===0)return r;const l=Sx(t,i);if(l.length===0)return r;const{A:c,b:f}=IR(t,l,i,r),h=op(c,f);return h&&FR(r,t,l,i,h,null,s),r}function HR(r,t,i,s,l,c,f=1e-7){const h=Ha(i,s),m=zn(h,.5),p=En(r,r)-l*l;if(p<=0)return 0;const g=2*En(r,t),_=2*En(r,m)+En(t,t),x=2*En(t,m),y=En(m,m),E=UR(y,x,_,g,p),T=(l*(1+f))**2;let M=null;for(const v of E)if(v>1e-12&&v<=c+1e-12){if(y*v*v*v*v+x*v*v*v+_*v*v+g*v+p+l*l>T)continue;(M===null||v<M)&&(M=v)}return M}function GR(r,t,i,s,l,c,f=null){if(c<1e-12)return{newPos:r.map(E=>[...E]),newVel:i.map(E=>[...E]),safedt:0,reason:"zero delta time"};const h=f||r.map(()=>!1),m=r.length,p=t.map((E,T)=>zn(eo([...E]),+!h[T]/s));let g=c,_="max delta time";for(let E=0;E<m;E++)for(let T=E+1;T<m;T++){if(h[E]&&h[T])continue;const M=Ha(r[E],r[T]),v=Ha(i[E],i[T]),U=HR(M,v,p[E],p[T],l,g);U!==null&&U<g&&(g=Math.max(U-1e-12,0),_=`collision between ${E} and ${T}`)}for(let E=0;E<m;E++)if(!h[E]){const T=l/2,M=i[E],v=p[E],U=Math.hypot(M[0],M[1],M[2]),L=Math.hypot(v[0],v[1],v[2]);let D;if(L>1e-12)D=(-U+Math.sqrt(U*U+2*L*T))/L;else if(U>1e-12)D=T/U;else continue;D<g&&(g=D,_=`max movement of ${E}`)}const x=r.map((E,T)=>{if(h[T])return[...E];const M=g,v=.5*g*g,U=i[T],L=p[T];return[E[0]+U[0]*M+L[0]*v,E[1]+U[1]*M+L[1]*v,E[2]+U[2]*M+L[2]*v]}),y=i.map((E,T)=>{if(h[T])return[0,0,0];const M=g,v=p[T];return[E[0]+v[0]*M,E[1]+v[1]*M,E[2]+v[2]*M]});return{newPos:x,newVel:y,safedt:g,reason:_}}function VR(r,t,i,s,l){return t.map((f,h)=>{const m=r[h],p=f.moment,g=f.omega,_=kR(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function kR(r,t,i,s,l,c=.3){const f=zn([...i],1/l),m=En(i,t)<0?c:1,p=[t[0]*m+f[0]*s,t[1]*m+f[1]*s,t[2]*m+f[2]*s],g=Qs(p);if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),x=zn([...p],1/g),y=gR([...r],x,_);return{moment:hl(y),omega:p}}function XR(r,t,i){return()=>(r.current=new WR(i),t(!0),()=>{})}class WR{constructor(t=.0025){this.params=new DR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>[0,0,0]),f=t.map(()=>[0,0,0]),h=t.map(()=>new Map);for(let m=0;m<l;m++)for(let p=m+1;p<l;p++){const g=CR(i,s,t[m].moment,t[p].moment,Ha(t[m].pos,t[p].pos));qr(c[m],g.force1),qr(c[p],g.force2),qr(f[m],g.torque1),qr(f[p],g.torque2),h[m].set(`M#${p}`,g.force1),h[p].set(`M#${m}`,g.force2)}return{coforces:c,torques:f,forces:h}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(D=>!!D.fixed),f=t.map(D=>D.pos),h=Rv(f,l,this.params.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((D,O)=>({pos:h[O],moment:D.moment})),this.params.radius,this.params.mMag);if(s){const D=this.params.gravity;m.forEach((O,F)=>{if(!c[F]){const N=D*this.params.mass;O[1]+=N,g[F].set("Gravity",[0,N,0])}})}const _=rp(h,l+this.params.shellThickness),{constrainedForces:x,constrainedVel:y}=LR(h,m,t.map(D=>D.vel),_,c,this.params.rollingFriction),{newPos:E,newVel:T,safedt:M,reason:v}=GR(h,x,y,this.params.mass,l-this.params.shellThickness,i,c),U=Rv(E,l,this.params.shellThickness,c);rp(U,l+this.params.shellThickness).map(D=>{if(D.dist<this.params.radius)throw new Error(`球${D.i}-球${D.j}重叠过深: dist=${(D.dist*1e3).toFixed(4)}mm`)});const L=VR(p,t.map(D=>({moment:D.moment,omega:D.omega})),M,this.params.inertia,.3);return{newMagnets:t.map((D,O)=>mu(D,{pos:U[O],vel:T[O],f:x[O],tau:p[O],moment:L[O].moment,omega:L[O].omega})),safedt:M,forces:g,reason:v}}}function qR({getMagnets:r,setMagnets:t,selectedId:i,onApplySnap:s}){const l=ne.useRef([]),c=ne.useRef(-1),f=p=>p.map(g=>({...g,pos:[...g.pos],vel:[...g.vel],moment:[...g.moment]})),h=ne.useCallback(p=>{const g=l.current;if(g.length>0){const _=g[g.length-1];if(YR(_,p))return}g.push(f(p)),g.length>100&&g.shift(),c.current=-1},[]),m=ne.useCallback(()=>{l.current=[],c.current=-1},[]);return ne.useEffect(()=>{const p=g=>{if(g.key!=="ArrowUp"&&g.key!=="ArrowDown")return;g.preventDefault();const _=l.current;if(_.length!==0)if(g.key==="ArrowUp"){if(c.current===-1)_.push(f(r())),c.current=_.length-2;else if(c.current>0)c.current--;else return;s(_[c.current])}else{if(c.current===-1)return;if(c.current++,c.current>=_.length-1){const x=_.pop();c.current=-1,s(x)}else s(_[c.current])}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,s,i]),{push:h,reset:m,histIdxRef:c}}function YR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const h=s[f],m=l[f];if(Array.isArray(h)&&Array.isArray(m)){if(h.length!==m.length||h.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(h!==m)return!1}}return!0}const jR=32,od=.1;function ZR(r,t,i,s,l,c,f,h,m,p,g,_,x,y){const E=ne.useRef(null),T=ne.useRef(""),M=ne.useCallback(()=>{const{magnets:v,isSimulating:U,simSpeed:L,useGravity:D}=t.current,O=r.current;if(!U||!O||v.length<2)return;const{newMagnets:F,safedt:N,reason:k}=O.step(v,L,D);T.current=`${N*1e3}ms (${k})`,x(H=>H+N);const A=new Map(v.map((H,Q)=>[H.id,Q])),w=F.map((H,Q)=>mu(v[A.get(H.id)],{...H,pos:eo(H.pos.map(at=>{if(Math.abs(at)>od)throw new Error(`球${Q}超出边界: ${H.pos.map(lt=>(lt*1e3).toFixed(1)).join(",")}mm`);return Math.max(Math.min(at,od),-od)}))}));g(w),m.current=!0;const X=p.current;if(X.size===1){const H=w.find(Q=>X.has(Q.id));H&&_(Q=>Q&&{...Q,m_pos:H.pos.map(at=>at*1e3).map(y),m_vel:(H.vel??[0,0,0]).map(at=>at*1e3).map(y),moment:H.moment.map(y),f:(H.f??[0,0,0]).map(y),tau:(H.tau??[0,0,0]).map(y)})}},[t,r,m,p,g,_,x,y]);return ne.useEffect(()=>{const v=s.current,U=l.current,L=c.current,D=f.current,O=h.current;if(!v||!U||!L||!D||!i)return;let F=performance.now();const N=k=>{E.current=requestAnimationFrame(N),k-F>jR&&(M(),F=k),O==null||O.update(),D.render(U,L)};return E.current=requestAnimationFrame(N),()=>{cancelAnimationFrame(E.current)}},[i,M,s,l,c,f,h]),{stepDeltaTimeRef:T}}const Qn={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},Uv={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},Lv={padding:"10px",background:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},ld={fontSize:"11px",color:"#888",marginBottom:"6px"},Nv={...Qn,padding:"2px",fontSize:"8px",lineHeight:"1"},KR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},QR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},JR=["X","Y","Z"];function nl({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return bt.jsxs("div",{children:[bt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),bt.jsx("div",{style:QR,children:JR.map((h,m)=>{var p;return bt.jsx("input",{placeholder:h,disabled:!s,style:{...KR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const y={...x,[r]:[...x[r]]};return y[r][m]=_,y})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},h)})})]})}function $R({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,useGravity:l,magnets:c,selectedId:f,refYId:h,setRefYId:m,onToggle:p,onResetVel:g,onPerturb:_,onReframe:x,onSimSpeedChange:y,onGravityChange:E}){return bt.jsxs("div",{style:{padding:"12px",background:r?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${r?"#2a4a2a":"#2a2a4a"}`},children:[bt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),bt.jsx("button",{onClick:p,style:{width:"100%",padding:"12px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),bt.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[bt.jsx("button",{onClick:g,style:Qn,children:"重置速度"}),bt.jsx("button",{onClick:_,style:Qn,children:"扰动位置"})]}),bt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:bt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[bt.jsxs("select",{value:h??"",onChange:T=>m(T.target.value===""?null:parseInt(T.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[bt.jsx("option",{value:"",children:"— y 方向参考球 —"}),c.map(T=>bt.jsxs("option",{value:T.id,children:["球 #",T.id]},T.id))]}),bt.jsx("button",{onClick:x,disabled:f===null||h===null||f===h,style:{...Qn,opacity:f!==null&&h!==null&&f!==h?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),bt.jsxs("div",{style:{marginTop:"10px"},children:[bt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),bt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),bt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),bt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:T=>y(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(T.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),bt.jsx(e2,{label:"重力 (y 方向)",checked:l,onChange:E})]})}function t2({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:f,onRemove:h,onCommit:m}){const p={draft:s,setDraft:l,onCommit:m};return bt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[bt.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[bt.jsxs("button",{disabled:!0,style:{...Qn,flex:1,opacity:1},children:["选中磁球 #",r]}),bt.jsx("button",{onClick:c,style:{...Qn,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),bt.jsx("button",{onClick:f,style:{...Qn,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),bt.jsx("button",{onClick:h,style:{...Qn,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),bt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",bt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&bt.jsxs(bt.Fragment,{children:[bt.jsx(nl,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...p}),bt.jsx(nl,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...p}),bt.jsx(nl,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...p}),bt.jsx(nl,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...p}),bt.jsx(nl,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...p})]})]})}function e2({label:r,checked:t,onChange:i}){return bt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[bt.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),bt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}const Xr=100,Ov=3;function n2(r,t,i){if(!t||!i)return 0;const s=r??new j(0,0,0),l=t.position.distanceTo(s),c=t.fov*Math.PI/180;return i.domElement.height/(2*l*Math.tan(c/2))}function Pv(r){const t=new j(0,0,0),i=r.length;return i===0||(r.forEach(s=>{t.add(new j(s.pos[0],s.pos[1],s.pos[2]))}),t.divideScalar(i)),t}function i2(){const t=.0025*Xr,[i,s]=ne.useState([]),[l,c]=ne.useState(new Set),[f,h]=ne.useState(null),[m,p]=ne.useState(!1),[g,_]=ne.useState(4e-5),[x,y]=ne.useState(!0),[E,T]=ne.useState(!1),[M,v]=ne.useState(!0),[U,L]=ne.useState(0),[D,O]=ne.useState(null),[F,N]=ne.useState([]),[k,A]=ne.useState(!1),[w,X]=ne.useState({}),[H,Q]=ne.useState(null),[at,lt]=ne.useState(""),[I,V]=ne.useState({}),nt=ne.useRef(null),Et=ne.useRef(null),yt=ne.useRef(null),z=ne.useRef(null),st=ne.useRef(null),vt=ne.useRef([]),Dt=ne.useRef([]),Xt=ne.useRef([]),it=ne.useRef([]),dt=ne.useRef([]),Rt=ne.useRef(!0),jt=ne.useRef(new Set);jt.current=l;const kt=ne.useRef({magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:E});kt.current={magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:E};const Ee=ne.useRef(null);ne.useEffect(XR(Ee,A,.0025),[]);const Ye=G=>(G==null?void 0:G.toFixed(6))??"N/A",Ce=G=>({m_pos:G.pos.map(ut=>ut*1e3).map(Ye),m_vel:G.vel.map(ut=>ut*1e3).map(Ye),moment:G.moment.map(Ye),f:(G.f??[0,0,0]).map(Ye),tau:(G.tau??[0,0,0]).map(Ye)});ne.useEffect(()=>{ER().then(G=>(N(G),Tv(G[0],.0025))).then(G=>s(G.magnets)).catch(console.error)},[]);const pe=l.size===1?[...l][0]:null,Ae=ne.useCallback(()=>{const G=new Set;if(H&&w[H])for(const ut of w[H])G.add(ut);return G},[H,w]),{push:ce,reset:fn,histIdxRef:W}=qR({getMagnets:()=>kt.current.magnets,setMagnets:s,selectedId:pe,onApplySnap:G=>{Rt.current=!0,s(G);const ut=G.find(gt=>gt.id===pe);ut&&O(Ce(ut))}}),{stepDeltaTimeRef:rn}=ZR(Ee,kt,k,nt,Et,yt,z,st,Rt,jt,s,O,L,Ye),we=ne.useCallback((G,ut,gt)=>{for(const Ut of G){if(!ut.has(Ut.id))continue;const ae=Ut.pos.map((se,fe)=>se+gt[fe]);for(const se of G){if(se.id===Ut.id||ut.has(se.id))continue;const fe=ae[0]-se.pos[0],qt=ae[1]-se.pos[1],oe=ae[2]-se.pos[2];if(Math.sqrt(fe*fe+qt*qt+oe*oe)<.004995)return!1}}return!0},[.0025]),Fe=ne.useCallback((G,ut,gt,Gt,Ut)=>{const se=new Ba().setFromAxisAngle(Gt,Ut),fe=new Map;for(const qt of G)if(ut.has(qt.id)){const oe=new j(...qt.pos).sub(gt);oe.applyQuaternion(se).add(gt),fe.set(qt.id,[oe.x,oe.y,oe.z])}for(const[qt,oe]of fe)for(const Se of G){if(Se.id===qt||ut.has(Se.id))continue;const Pe=oe[0]-Se.pos[0],Ze=oe[1]-Se.pos[1],ye=oe[2]-Se.pos[2];if(Math.sqrt(Pe*Pe+Ze*Ze+ye*ye)<.004995)return!1}return!0},[.0025]);ne.useEffect(()=>{const G=nt.current;if(!G||!k)return;let ut=G.clientWidth||800,gt=G.clientHeight||600;const Gt=new GM;Gt.background=new Ie(657941),Et.current=Gt;const Ut=new Ni(50,ut/gt,.1,1e3);Ut.position.set(0,0,12),yt.current=Ut;const ae=new $A({antialias:!0});ae.setSize(ut,gt),ae.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.appendChild(ae.domElement),z.current=ae;const se=new eR(Ut,ae.domElement);se.enableDamping=!0,se.dampingFactor=.05,se.rotateSpeed=.5,se.zoomSpeed=.8,se.panSpeed=.5,se.minDistance=2,se.maxDistance=50,st.current=se;const fe=()=>{Wt.current&&document.activeElement!==Wt.current&&Wt.current.focus()};se.addEventListener("end",fe),Gt.add(new tE(16777215,.5));const qt=new q_(16777215,.8);qt.position.set(5,5,5),Gt.add(qt);const oe=new q_(4482815,.3);oe.position.set(-5,-5,-5),Gt.add(oe);const Se=new nE(16,16,3355477,2236979);Se.rotation.x=Math.PI/2,Gt.add(Se);const Pe=()=>{const Ze=G.clientWidth||800,ye=G.clientHeight||600;Ut.aspect=Ze/ye,Ut.updateProjectionMatrix(),ae.setSize(Ze,ye)};return window.addEventListener("resize",Pe),()=>{window.removeEventListener("resize",Pe),se.removeEventListener("end",fe),se.dispose(),ae.dispose(),Et.current=null,G.contains(ae.domElement)&&G.removeChild(ae.domElement)}},[k]),ne.useEffect(()=>{const G=Et.current;if(!G)return;const ut=qt=>{qt&&(G.remove(qt),qt.geometry&&qt.geometry.dispose(),qt.material&&(Array.isArray(qt.material)?qt.material.forEach(oe=>oe.dispose()):qt.material.dispose()),qt.children&&qt.children.forEach(ut))};[...vt.current,...Dt.current,...Xt.current,...it.current,...dt.current].forEach(ut);const gt=new j(0,1,0),Gt=[],Ut=[],ae=[],se=[],fe=[];i.forEach(qt=>{const oe=new bp(t,32,32),Se=new ZM({color:qt.color,metalness:.8,roughness:.2,emissive:qt.color,emissiveIntensity:.15}),Pe=new Oi(oe,Se);Pe.userData.id=qt.id,G.add(Pe),Gt.push(Pe);const Ze=new ru(t*1.12,.02,16,64),ye=new fu({color:16777215,transparent:!0,opacity:.85,depthTest:!1}),Be=new Oi(Ze,ye);if(Be.visible=!1,Be.renderOrder=999,G.add(Be),fe.push(Be),!M){Ut.push(null),ae.push(null),se.push(null);return}const ln=new $h(gt,new j,t*3.6,16768256,t*.5,t*.3);G.add(ln),Ut.push(ln);const Sn=new $h(gt,new j,t,65535,t*.4,t*.24);Sn.visible=!1,G.add(Sn),ae.push(Sn);const gn=new $h(gt,new j,t,16711935,t*.32,t*.2);gn.visible=!1,G.add(gn),se.push(gn)}),vt.current=Gt,Dt.current=Ut,Xt.current=ae,it.current=se,dt.current=fe},[i.length,M,k]),ne.useEffect(()=>{const G=yt.current,ut=z.current;if(!Et.current||!G||!ut)return;const gt=vt.current,Gt=Dt.current,Ut=Xt.current,ae=it.current,se=dt.current,fe=Ae();i.forEach((qt,oe)=>{const Se=qt.pos.map(gn=>gn*Xr),Pe=new j(Se[0],Se[1],Se[2]),Ze=gt[oe];Ze&&(Ze.position.copy(Pe),Ze.material.emissiveIntensity=l.has(qt.id)?.4:.15);const ye=se[oe];if(ye){const gn=fe.has(qt.id);if(ye.visible=gn,ye.visible){ye.position.copy(Pe),ye.lookAt(G.position);const Wi=G.position.distanceTo(Pe),Pi=G.fov*Math.PI/180,la=ut.domElement.height/(2*Wi*Math.tan(Pi/2)),Ga=Ov/la,qi=t+Ga*1.5,Yi=Ga*.5;ye.geometry.dispose(),ye.geometry=new ru(qi,Yi,8,64)}}if(!M)return;const Be=Gt[oe];if(Be){const gn=new j(...qt.moment).normalize();Be.position.copy(Pe),Be.setDirection(gn),Be.setLength(t*3.6,t*.5,t*.3)}const ln=Ut[oe];if(ln){const gn=qt.f?new j(...qt.f).length():0;if(gn>1e-25){ln.visible=!0;const Wi=new j(...qt.f).normalize(),Pi=t*Math.min(6,Math.max(.5,Math.log10(gn+1e-10)+10));ln.position.copy(Pe),ln.setDirection(Wi),ln.setLength(Pi,t*.4,t*.24)}else ln.visible=!1}const Sn=ae[oe];if(Sn){const gn=qt.tau?new j(...qt.tau).length():0;if(gn>1e-25){Sn.visible=!0;const Wi=new j(...qt.tau).normalize(),Pi=t*Math.min(5,Math.max(.4,Math.log10(gn+1e-10)+8));Sn.position.copy(Pe),Sn.setDirection(Wi),Sn.setLength(Pi,t*.32,t*.2)}else Sn.visible=!1}})},[i,l,H,w,M,k]),ne.useEffect(()=>{if(pe===null){O(null);return}const G=i.find(ut=>ut.id===pe);O(G?Ce(G):null)},[pe]);const Wt=ne.useRef(null),P=ne.useCallback(G=>{if(kt.current.isSimulating)return;const ut=Ae();if(ut.size===0)return;const gt=yt.current;if(!gt)return;const Gt=new j;gt.getWorldDirection(Gt);const Ut=new j;Ut.crossVectors(Gt,gt.up).normalize();const ae=new j;ae.crossVectors(Ut,Gt).normalize();const se=Pv(kt.current.magnets.filter(Se=>ut.has(Se.id))),fe=Ov/Xr/n2(se,gt,z.current);let qt=null,oe=null;switch(G.key){case"ArrowRight":qt=[Ut.x*fe,Ut.y*fe,Ut.z*fe];break;case"ArrowLeft":qt=[-Ut.x*fe,-Ut.y*fe,-Ut.z*fe];break;case"ArrowUp":qt=[ae.x*fe,ae.y*fe,ae.z*fe];break;case"ArrowDown":qt=[-ae.x*fe,-ae.y*fe,-ae.z*fe];break;case"PageUp":oe=Ut.clone().negate();break;case"PageDown":oe=Ut.clone();break;case"Home":oe=ae.clone().negate();break;case"End":oe=ae.clone();break;case"Tab":G.preventDefault(),oe=G.shiftKey?Gt.clone().negate():Gt.clone();break}if(qt){G.preventDefault(),s(Se=>we(Se,ut,qt)?(Rt.current=!0,Se.map(Pe=>ut.has(Pe.id)?{...Pe,pos:Pe.pos.map((Ze,ye)=>Ze+qt[ye])}:Pe)):Se);return}else if(oe){G.preventDefault();const Se=Math.atan2(fe,.0025),Pe=oe,Ze=new Ba().setFromAxisAngle(Pe,Se);s(ye=>Fe(ye,ut,se,Pe,Se)?(Rt.current=!0,ye.map(Be=>{if(!ut.has(Be.id))return Be;const ln=new j(...Be.pos).sub(se).applyQuaternion(Ze).add(se),Sn=new j(...Be.moment).applyQuaternion(Ze);return{...Be,pos:[ln.x,ln.y,ln.z],moment:[Sn.x,Sn.y,Sn.z]}})):ye)}},[Ae,we,Fe,.0025]),b=ne.useRef(null),Z=G=>{b.current={x:G.clientX,y:G.clientY}},mt=G=>{const ut=nt.current,gt=yt.current;if(!ut||!gt)return;const Gt=b.current;if(Gt){const oe=G.clientX-Gt.x,Se=G.clientY-Gt.y;if(oe*oe+Se*Se>25)return}const Ut=ut.getBoundingClientRect(),ae=new _e((G.clientX-Ut.left)/Ut.width*2-1,-((G.clientY-Ut.top)/Ut.height)*2+1),se=new j_;se.setFromCamera(ae,gt);const fe=se.intersectObjects(vt.current),qt=fe.length>0?fe[0].object.userData.id:null;qt===null?G.shiftKey||c(new Set):G.shiftKey?c(oe=>{const Se=new Set(oe);return Se.has(qt)?Se.delete(qt):Se.add(qt),Se}):c(new Set([qt]))},Mt=()=>{Rt.current=!0,s(G=>[...G,ou({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),L(0)},ht=()=>{const G=Ae();G.size!==0&&(Rt.current=!0,s(ut=>ut.filter(gt=>!G.has(gt.id))),X(ut=>{const gt={};for(const[Gt,Ut]of Object.entries(ut)){const ae=new Set([...Ut].filter(se=>!G.has(se)));ae.size>0&&(gt[Gt]=ae)}return gt}),c(new Set),L(0))},Jt=G=>{var ut;(ut=Ee.current)==null||ut.reset(),fn(),Rt.current=!0,vR(),Tv(G,.0025).then(gt=>s(gt.magnets)),c(new Set),X({}),Q(null),p(!1),L(0)},Nt=(G,ut,gt)=>{const Gt=parseFloat(gt);if(isNaN(Gt))return;const ae={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[G];if(!ae)return;const[se,fe]=ae;ce(i);const qt=i.map(oe=>{if(oe.id!==pe)return oe;const Se=[...oe[se]??[0,0,0]];return Se[ut]=Gt*fe,{...oe,[se]:Se}});ce(qt),W.current=-1,Rt.current=!0,s(qt),O(oe=>{if(!oe)return oe;const Se={...oe,[G]:[...oe[G]]};return Se[G][ut]=Ye(Gt),Se})},Zt=ne.useCallback(G=>{const ut=yR(i.map(gt=>({...gt,pos:gt.pos.map(Gt=>Gt/.0025)})),"exported","radius");if(G==="copy")navigator.clipboard.writeText(ut).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const gt=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([ut],{type:"application/json"})),download:`magnets_${Date.now()}.json`});gt.click(),URL.revokeObjectURL(gt.href)}},[i]),ue=()=>{const G=xR(i,pe,f);G&&(ce(i),ce(G),Rt.current=!0,s(G))},At=()=>{m||(Rt.current=!0),p(G=>!G)},Ct=(G,ut="")=>{let gt=ut.trim(),Gt=`${ut.trim()}-`,Ut=1;for(ut===""&&(Gt="#",gt=`#${Ut}`);G[gt];Ut++)gt=`${Gt}${Ut}`;return gt},Bt=ne.useCallback(()=>{if(l.size===0)return;const G=Ct(w,at.trim()||"");X(ut=>({...ut,[G]:new Set(l)})),lt(G),Q(G),setTimeout(()=>{Wt.current&&Wt.current.focus()},0)},[l,w,at]),zt=G=>{X(ut=>{const gt={...ut};return delete gt[G],gt}),H===G&&Q(null)},Ot=G=>{if(H===G){Q(null),lt("");return}c(new Set(w[G]||[])),Q(G),lt(""),setTimeout(()=>{Wt.current&&Wt.current.focus()},0)},ve=()=>{if(!H||!at.trim())return;const G=at.trim();if(G===H){lt("");return}w[G]||(X(ut=>{const gt={};for(const[Gt,Ut]of Object.entries(ut))gt[Gt===H?G:Gt]=Ut;return gt}),Q(G),lt(""))};ne.useEffect(()=>{const G=ut=>{ut.target.tagName==="INPUT"&&ut.target!==Wt.current||((ut.key==="g"||ut.key==="G")&&(ut.ctrlKey||ut.metaKey)?(ut.preventDefault(),ut.stopPropagation(),ut.stopImmediatePropagation(),ut.shiftKey?H&&zt(H):Bt()):(ut.key==="a"||ut.key==="A")&&(ut.ctrlKey||ut.metaKey)&&(ut.preventDefault(),ut.stopPropagation(),ut.stopImmediatePropagation(),c(gt=>{const Gt=H?[...w[H]||[]]:kt.current.magnets.map(ae=>ae.id),Ut=ut.shiftKey?Gt.filter(ae=>!gt.has(ae)):Gt;return new Set(Ut)})))};return window.addEventListener("keydown",G,!0),()=>window.removeEventListener("keydown",G,!0)},[Bt,zt,H]);const Y=ne.useCallback(()=>{if(!H||!w[H])return;const G=w[H],ut=i.filter(Ut=>G.has(Ut.id));if(ut.length===0)return;const gt=Pv(ut),Gt=ut.map(Ut=>({pos:[Ut.pos[0]-gt.x,Ut.pos[1]-gt.y,Ut.pos[2]-gt.z],vel:[0,0,0],moment:[...Ut.moment],color:Ut.color,fixed:Ut.fixed??!1}));V(Ut=>({...Ut,[H]:{magnets:Gt}}))},[H,w,i]),Pt=ne.useCallback((G,ut)=>{const gt=nt.current,Gt=yt.current;if(!gt||!Gt)return[0,0,0];const Ut=gt.getBoundingClientRect(),ae=new _e((G-Ut.left)/Ut.width*2-1,-((ut-Ut.top)/Ut.height)*2+1),se=new j_;se.setFromCamera(ae,Gt);const fe=new La(new j(0,0,1),0),qt=new j;return se.ray.intersectPlane(fe,qt)||se.ray.at(10,qt),[qt.x/Xr,qt.y/Xr,qt.z/Xr]},[]),wt=ne.useCallback((G,ut)=>{const gt=I[G];if(!gt)return;Rt.current=!0;const Gt=new Set;s(ae=>{const se=[...ae];for(const fe of gt.magnets){const qt=ou({pos:[fe.pos[0]+ut[0],fe.pos[1]+ut[1],fe.pos[2]+ut[2]],vel:fe.vel,moment:fe.moment,color:fe.color,fixed:fe.fixed});Gt.add(qt.id),se.push(qt)}return se});const Ut=Ct(w,G);X(ae=>({...ae,[Ut]:Gt})),c(Gt),Q(Ut),L(0)},[I,w]),Ht=ne.useCallback(G=>{G.preventDefault(),G.dataTransfer.dropEffect="copy"},[]),Tt=ne.useCallback(G=>{G.preventDefault();const ut=G.dataTransfer.getData("text/x-preset-name");if(!ut||!I[ut])return;const gt=Pt(G.clientX,G.clientY);wt(ut,gt)},[I,Pt,wt]),xt=(G,ut)=>{const gt=Ae();if(gt.size===0)return;ce(i),Rt.current=!0;const Gt=i.map(Ut=>gt.has(Ut.id)?{...Ut,[G]:ut}:Ut);ce(Gt),W.current=-1,s(Gt)};if(!k)return bt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:bt.jsxs("div",{children:[bt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),bt.jsx("div",{children:"Loading physics engine..."})]})});const Lt=Ae();return bt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[bt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[bt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[bt.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",bt.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),bt.jsx($R,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:rn,totalSimTime:U,useGravity:E,magnets:i,selectedId:pe,refYId:f,setRefYId:h,onToggle:At,onResetVel:()=>{Rt.current=!0,s(G=>G.map(ut=>({...ut,vel:[0,0,0],omega:[0,0,0]})))},onPerturb:()=>{Rt.current=!0,s(G=>G.map(ut=>mu(ut,{pos:eo(ut.pos.map(gt=>gt+(Math.random()-.5)*.3*.0025))})))},onReframe:ue,onSimSpeedChange:_,onGravityChange:T}),bt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[bt.jsx("button",{onClick:Mt,style:{...Qn,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),bt.jsx("button",{onClick:()=>Zt("download"),style:{...Qn,flex:1},children:"⬇ 导出"}),bt.jsx("button",{onClick:()=>Zt("copy"),style:{...Qn,flex:1},children:"📋 复制"})]}),bt.jsxs("div",{children:[bt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),bt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:F.map(G=>bt.jsx("button",{onClick:()=>Jt(G),style:Uv,children:G},G))}),Object.keys(I).length>0&&bt.jsxs(bt.Fragment,{children:[bt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"8px",marginBottom:"4px"},children:"自定义预设（拖放到视图中添加）"}),bt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:Object.entries(I).map(([G,ut])=>bt.jsxs("span",{draggable:!0,onDragStart:gt=>{gt.dataTransfer.setData("text/x-preset-name",G),gt.dataTransfer.effectAllowed="copy"},style:{...Uv,cursor:"grab",display:"inline-flex",alignItems:"center",gap:"4px"},children:[G," ",bt.jsxs("span",{style:{opacity:.5},children:["(",ut.magnets.length,")"]}),bt.jsx("button",{onClick:gt=>{gt.stopPropagation(),V(Gt=>{const Ut={...Gt};return delete Ut[G],Ut})},style:{...Nv,color:"#ff6b6b",cursor:"pointer"},title:"删除预设",children:"✕"})]},G))})]}),H&&w[H]&&w[H].size>0&&bt.jsxs("button",{onClick:Y,style:{...Qn,marginTop:"6px",width:"100%",background:"#1a2a3a",borderColor:"#2a4a6a"},children:["💾 保存「",H,"」为预设"]})]}),bt.jsxs("div",{style:Lv,children:[bt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...ld},children:[bt.jsx("span",{children:"分组"}),l.size>0&&bt.jsx("span",{onClick:Bt,style:{fontSize:"10px",color:"#6bd5ff",cursor:"pointer",marginLeft:"auto"},children:"创建分组 (Ctrl+G)"}),H&&bt.jsx("span",{onClick:()=>{at.trim()&&at.trim()!==H?ve():(Q(null),lt(""))},style:{fontSize:"10px",color:at.trim()&&at.trim()!==H?"#8ab4f8":"#aaa",cursor:"pointer",marginLeft:"auto"},children:at.trim()&&at.trim()!==H?"重命名":"取消选择"}),H&&bt.jsx("span",{onClick:()=>H&&zt(H),style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"取消分组 (Ctrl+Shift+G)"})]}),bt.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginBottom:"4px",flexWrap:"wrap"},children:Object.entries(w).map(([G,ut])=>H===G?bt.jsx("input",{autoFocus:!0,value:at,placeholder:G,onChange:gt=>lt(gt.target.value),onKeyDown:gt=>{gt.key==="Enter"&&(at.trim()&&at.trim()!==G?ve():(Q(null),lt(""))),gt.key==="Escape"&&(Q(null),lt(""))},style:{padding:"2px 6px",borderRadius:"10px",fontSize:"11px",background:"rgba(68,136,255,0.15)",border:"1px solid #4488ff",color:"#e0e0e0",outline:"none",width:"80px"}},G):bt.jsxs("span",{onClick:()=>Ot(G),style:{padding:"2px 8px",borderRadius:"10px",fontSize:"11px",cursor:"pointer",background:H===G?"rgba(68,136,255,0.2)":"rgba(255,255,255,0.06)",border:`1px solid ${H===G?"#4488ff":"rgba(255,255,255,0.12)"}`,color:H===G?"#8ab4f8":"#aaa"},children:[G," ",bt.jsxs("span",{style:{opacity:.5},children:["(",ut.size,")"]}),bt.jsx("button",{onClick:gt=>{gt.stopPropagation(),zt(G)},style:{...Nv,color:"#ff6b6b"},title:"删除组",children:"✕"})]},G))}),H&&bt.jsx("div",{style:{fontSize:"10px",color:"#555",marginTop:"6px"},children:"↑↓←→ 移动 · PgUp/Home PgDn/End Tab/Shift+Tab 旋转"}),bt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...ld,marginTop:"8px"},children:[bt.jsxs("span",{children:[l.size>0?"Shift+单击多选":"单击选择","(",l.size,")",H&&` · 「${H}」`]}),l.size>0&&bt.jsx("span",{onClick:ht,style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"删除"})]}),l.size>0&&bt.jsx("div",{style:{display:"flex",gap:"3px",flexWrap:"wrap",marginBottom:"6px"},children:[...l].map(G=>bt.jsxs("span",{style:{padding:"0 5px",borderRadius:"3px",fontSize:"10px",background:"rgba(68,136,255,0.15)",border:"1px solid rgba(68,136,255,0.3)",color:"#8ab4f8"},children:["#",G]},G))})]}),Lt.size>1&&bt.jsxs("div",{style:Lv,children:[bt.jsxs("div",{style:ld,children:["批量修改 (",Lt.size,")"]}),bt.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"4px"},children:"颜色"}),bt.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[[16729156,4474111,4521796,16768256,16729343,4521983,16746496,8930559].map(G=>bt.jsx("button",{onClick:()=>xt("color",G),style:{width:"22px",height:"22px",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",background:`#${G.toString(16).padStart(6,"0")}`}},G)),bt.jsx("input",{type:"color",onChange:G=>xt("color",parseInt(G.target.value.slice(1),16)),style:{width:"22px",height:"22px",padding:0,border:"none",borderRadius:"4px",cursor:"pointer"}})]}),bt.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[bt.jsx("button",{onClick:()=>xt("vel",[0,0,0]),style:Qn,children:"清零速度"}),bt.jsx("button",{onClick:()=>xt("omega",[0,0,0]),style:Qn,children:"清零角速度"}),bt.jsx("button",{onClick:()=>{const G=Ae();Rt.current=!0,s(ut=>ut.map(gt=>G.has(gt.id)?{...gt,fixed:!gt.fixed}:gt))},style:Qn,children:"切换固定"})]}),bt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"6px",marginBottom:"4px"},children:"磁矩方向"}),bt.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[["+X",[1,0,0]],["−X",[-1,0,0]],["+Y",[0,1,0]],["−Y",[0,-1,0]],["+Z",[0,0,1]],["−Z",[0,0,-1]]].map(([G,ut])=>bt.jsx("button",{onClick:()=>{const gt=Ae();ce(i),Rt.current=!0;const Gt=i.map(Ut=>{if(!gt.has(Ut.id))return Ut;const ae=Math.sqrt(Ut.moment[0]**2+Ut.moment[1]**2+Ut.moment[2]**2);return{...Ut,moment:ut.map(se=>se*ae)}});ce(Gt),W.current=-1,s(Gt)},style:Qn,children:G},G))})]}),pe!==null&&bt.jsx(t2,{selectedId:pe,selectedMag:i.find(G=>G.id===pe),isSimulating:m,editDraft:D,setEditDraft:O,onToggle:At,onToggleFixed:()=>{Rt.current=!0,s(G=>G.map(ut=>ut.id===pe?{...ut,fixed:!ut.fixed}:ut))},onRemove:ht,onCommit:Nt}),bt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[bt.jsx("input",{type:"checkbox",checked:M,onChange:G=>v(G.target.checked),style:{accentColor:"#4488ff"}}),bt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),bt.jsx("div",{ref:nt,onClick:mt,onMouseDown:Z,onDragOver:Ht,onDrop:Tt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer",position:"relative"},children:bt.jsx("textarea",{ref:Wt,onKeyDown:P,style:{position:"absolute",left:0,top:0,width:"1px",height:"1px",opacity:0,padding:0,border:"none",outline:"none",resize:"none",overflow:"hidden",pointerEvents:"none"},tabIndex:-1})})]})}Py.createRoot(document.getElementById("root")).render(bt.jsx(ne.StrictMode,{children:bt.jsx(i2,{})}));
