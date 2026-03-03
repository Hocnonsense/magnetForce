(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var mh={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function ES(){if(n_)return Io;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var i_;function bS(){return i_||(i_=1,mh.exports=ES()),mh.exports}var yt=bS(),gh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function TS(){if(a_)return fe;a_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function v(F,J,ft){this.props=F,this.context=J,this.refs=S,this.updater=ft||E}v.prototype.isReactComponent={},v.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=v.prototype;function U(F,J,ft){this.props=F,this.context=J,this.refs=S,this.updater=ft||E}var w=U.prototype=new D;w.constructor=U,b(w,v.prototype),w.isPureReactComponent=!0;var N=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function A(F,J,ft){var bt=ft.ref;return{$$typeof:r,type:F,key:J,ref:bt!==void 0?bt:null,props:ft}}function L(F,J){return A(F.type,J,F.props)}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function tt(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ft){return J[ft]})}var X=/\/+/g;function st(F,J){return typeof F=="object"&&F!==null&&F.key!=null?tt(""+F.key):J.toString(36)}function et(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(z,z):(F.status="pending",F.then(function(J){F.status==="pending"&&(F.status="fulfilled",F.value=J)},function(J){F.status==="pending"&&(F.status="rejected",F.reason=J)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function P(F,J,ft,bt,wt){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var lt=!1;if(F===null)lt=!0;else switch(it){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(F.$$typeof){case r:case t:lt=!0;break;case g:return lt=F._init,P(lt(F._payload),J,ft,bt,wt)}}if(lt)return wt=wt(F),lt=bt===""?"."+st(F,0):bt,N(wt)?(ft="",lt!=null&&(ft=lt.replace(X,"$&/")+"/"),P(wt,J,ft,"",function(Pt){return Pt})):wt!=null&&(V(wt)&&(wt=L(wt,ft+(wt.key==null||F&&F.key===wt.key?"":(""+wt.key).replace(X,"$&/")+"/")+lt)),J.push(wt)),1;lt=0;var Tt=bt===""?".":bt+":";if(N(F))for(var Dt=0;Dt<F.length;Dt++)bt=F[Dt],it=Tt+st(bt,Dt),lt+=P(bt,J,ft,it,wt);else if(Dt=y(F),typeof Dt=="function")for(F=Dt.call(F),Dt=0;!(bt=F.next()).done;)bt=bt.value,it=Tt+st(bt,Dt++),lt+=P(bt,J,ft,it,wt);else if(it==="object"){if(typeof F.then=="function")return P(et(F),J,ft,bt,wt);throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return lt}function B(F,J,ft){if(F==null)return F;var bt=[],wt=0;return P(F,bt,"","",function(it){return J.call(ft,it,wt++)}),bt}function K(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(ft){(F._status===0||F._status===-1)&&(F._status=1,F._result=ft)},function(ft){(F._status===0||F._status===-1)&&(F._status=2,F._result=ft)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var mt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},gt={map:B,forEach:function(F,J,ft){B(F,function(){J.apply(this,arguments)},ft)},count:function(F){var J=0;return B(F,function(){J++}),J},toArray:function(F){return B(F,function(J){return J})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return fe.Activity=_,fe.Children=gt,fe.Component=v,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=U,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return O.H.useMemoCache(F)}},fe.cache=function(F){return function(){return F.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(F,J,ft){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var bt=b({},F.props),wt=F.key;if(J!=null)for(it in J.key!==void 0&&(wt=""+J.key),J)!q.call(J,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&J.ref===void 0||(bt[it]=J[it]);var it=arguments.length-2;if(it===1)bt.children=ft;else if(1<it){for(var lt=Array(it),Tt=0;Tt<it;Tt++)lt[Tt]=arguments[Tt+2];bt.children=lt}return A(F.type,wt,bt)},fe.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},fe.createElement=function(F,J,ft){var bt,wt={},it=null;if(J!=null)for(bt in J.key!==void 0&&(it=""+J.key),J)q.call(J,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(wt[bt]=J[bt]);var lt=arguments.length-2;if(lt===1)wt.children=ft;else if(1<lt){for(var Tt=Array(lt),Dt=0;Dt<lt;Dt++)Tt[Dt]=arguments[Dt+2];wt.children=Tt}if(F&&F.defaultProps)for(bt in lt=F.defaultProps,lt)wt[bt]===void 0&&(wt[bt]=lt[bt]);return A(F,it,wt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(F){return{$$typeof:h,render:F}},fe.isValidElement=V,fe.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:K}},fe.memo=function(F,J){return{$$typeof:p,type:F,compare:J===void 0?null:J}},fe.startTransition=function(F){var J=O.T,ft={};O.T=ft;try{var bt=F(),wt=O.S;wt!==null&&wt(ft,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(z,mt)}catch(it){mt(it)}finally{J!==null&&ft.types!==null&&(J.types=ft.types),O.T=J}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(F){return O.H.use(F)},fe.useActionState=function(F,J,ft){return O.H.useActionState(F,J,ft)},fe.useCallback=function(F,J){return O.H.useCallback(F,J)},fe.useContext=function(F){return O.H.useContext(F)},fe.useDebugValue=function(){},fe.useDeferredValue=function(F,J){return O.H.useDeferredValue(F,J)},fe.useEffect=function(F,J){return O.H.useEffect(F,J)},fe.useEffectEvent=function(F){return O.H.useEffectEvent(F)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(F,J,ft){return O.H.useImperativeHandle(F,J,ft)},fe.useInsertionEffect=function(F,J){return O.H.useInsertionEffect(F,J)},fe.useLayoutEffect=function(F,J){return O.H.useLayoutEffect(F,J)},fe.useMemo=function(F,J){return O.H.useMemo(F,J)},fe.useOptimistic=function(F,J){return O.H.useOptimistic(F,J)},fe.useReducer=function(F,J,ft){return O.H.useReducer(F,J,ft)},fe.useRef=function(F){return O.H.useRef(F)},fe.useState=function(F){return O.H.useState(F)},fe.useSyncExternalStore=function(F,J,ft){return O.H.useSyncExternalStore(F,J,ft)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.2.3",fe}var s_;function sp(){return s_||(s_=1,gh.exports=TS()),gh.exports}var Vt=sp(),_h={exports:{}},Bo={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function AS(){return r_||(r_=1,(function(r){function t(P,B){var K=P.length;P.push(B);t:for(;0<K;){var mt=K-1>>>1,gt=P[mt];if(0<l(gt,B))P[mt]=B,P[K]=gt,K=mt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var B=P[0],K=P.pop();if(K!==B){P[0]=K;t:for(var mt=0,gt=P.length,F=gt>>>1;mt<F;){var J=2*(mt+1)-1,ft=P[J],bt=J+1,wt=P[bt];if(0>l(ft,K))bt<gt&&0>l(wt,ft)?(P[mt]=wt,P[bt]=K,mt=bt):(P[mt]=ft,P[J]=K,mt=J);else if(bt<gt&&0>l(wt,K))P[mt]=wt,P[bt]=K,mt=bt;else break t}}return B}function l(P,B){var K=P.sortIndex-B.sortIndex;return K!==0?K:P.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,x=3,y=!1,E=!1,b=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=P)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function N(P){if(b=!1,w(P),!E)if(i(m)!==null)E=!0,z||(z=!0,tt());else{var B=i(p);B!==null&&et(N,B.startTime-P)}}var z=!1,O=-1,q=5,A=-1;function L(){return S?!0:!(r.unstable_now()-A<q)}function V(){if(S=!1,z){var P=r.unstable_now();A=P;var B=!0;try{t:{E=!1,b&&(b=!1,D(O),O=-1),y=!0;var K=x;try{e:{for(w(P),_=i(m);_!==null&&!(_.expirationTime>P&&L());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,x=_.priorityLevel;var gt=mt(_.expirationTime<=P);if(P=r.unstable_now(),typeof gt=="function"){_.callback=gt,w(P),B=!0;break e}_===i(m)&&s(m),w(P)}else s(m);_=i(m)}if(_!==null)B=!0;else{var F=i(p);F!==null&&et(N,F.startTime-P),B=!1}}break t}finally{_=null,x=K,y=!1}B=void 0}}finally{B?tt():z=!1}}}var tt;if(typeof U=="function")tt=function(){U(V)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,st=X.port2;X.port1.onmessage=V,tt=function(){st.postMessage(null)}}else tt=function(){v(V,0)};function et(P,B){O=v(function(){P(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var K=x;x=B;try{return P()}finally{x=K}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var K=x;x=P;try{return B()}finally{x=K}},r.unstable_scheduleCallback=function(P,B,K){var mt=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?mt+K:mt):K=mt,P){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=K+gt,P={id:g++,callback:B,priorityLevel:P,startTime:K,expirationTime:gt,sortIndex:-1},K>mt?(P.sortIndex=K,t(p,P),i(m)===null&&P===i(p)&&(b?(D(O),O=-1):b=!0,et(N,K-mt))):(P.sortIndex=gt,t(m,P),E||y||(E=!0,z||(z=!0,tt()))),P},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(P){var B=x;return function(){var K=x;x=B;try{return P.apply(this,arguments)}finally{x=K}}}})(xh)),xh}var o_;function RS(){return o_||(o_=1,vh.exports=AS()),vh.exports}var yh={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function CS(){if(l_)return Bn;l_=1;var r=sp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Bn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.3",Bn}var c_;function wS(){if(c_)return yh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=CS(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function DS(){if(u_)return Bo;u_=1;var r=RS(),t=sp(),i=wS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,R=u.child;R;){if(R===a){M=!0,a=u,o=d;break}if(R===o){M=!0,o=u,a=d;break}R=R.sibling}if(!M){for(R=d.child;R;){if(R===a){M=!0,a=d,o=u;break}if(R===o){M=!0,o=d,a=u;break}R=R.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:st(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return st(e(n))}catch{}}return null}var et=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},mt=[],gt=-1;function F(e){return{current:e}}function J(e){0>gt||(e.current=mt[gt],mt[gt]=null,gt--)}function ft(e,n){gt++,mt[gt]=e.current,e.current=n}var bt=F(null),wt=F(null),it=F(null),lt=F(null);function Tt(e,n){switch(ft(it,n),ft(wt,e),ft(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?T0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=T0(n),e=A0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(bt),ft(bt,e)}function Dt(){J(bt),J(wt),J(it)}function Pt(e){e.memoizedState!==null&&ft(lt,e);var n=bt.current,a=A0(n,e.type);n!==a&&(ft(wt,e),ft(bt,a))}function re(e){wt.current===e&&(J(bt),J(wt)),lt.current===e&&(J(lt),Oo._currentValue=K)}var Ve,ve;function _e(e){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+e+ve}var Ce=!1;function le(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var ut=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){ut=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){ut=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&ut&&typeof dt.stack=="string")return[dt.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],R=d[1];if(M&&R){var G=M.split(`
`),ot=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ot.length)for(o=G.length-1,u=ot.length-1;1<=o&&0<=u&&G[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ot[u]){var _t=`
`+G[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return _e("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ke=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Ue=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,I=r.unstable_requestPaint,T=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,qt=r.log,ne=r.unstable_setDisableYieldValue,At=null,Rt=null;function Gt(e){if(typeof qt=="function"&&ne(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(At,e)}catch{}}var Bt=Math.clz32?Math.clz32:Y,Lt=Math.log,he=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Lt(e)/he|0)|0}var Nt=256,Ct=262144,Ft=4194304;function j(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=j(o):(M&=R,M!==0?u=j(M):a||(a=R&~e,a!==0&&(u=j(a))))):(R=o&~d,R!==0?u=j(R):M!==0?u=j(M):a||(a=o&~e,a!==0&&(u=j(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function zt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ie(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,ot=e.hiddenUpdates;for(a=M&~a;0<a;){var _t=31-Bt(a),Mt=1<<_t;R[_t]=0,G[_t]=-1;var ut=ot[_t];if(ut!==null)for(ot[_t]=null,_t=0;_t<ut.length;_t++){var dt=ut[_t];dt!==null&&(dt.lane&=-536870913)}a&=~Mt}o!==0&&Qe(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Qe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function nn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function dn(e,n){var a=n&-n;return a=(a&42)!==0?1:qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Z0(e.type))}function zi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var pi=Math.random().toString(36).slice(2),pn="__reactFiber$"+pi,Cn="__reactProps$"+pi,Ai="__reactContainer$"+pi,Hs="__reactEvents$"+pi,Gs="__reactListeners$"+pi,ol="__reactHandles$"+pi,jr="__reactResources$"+pi,cs="__reactMarker$"+pi;function Zr(e){delete e[pn],delete e[Cn],delete e[Hs],delete e[Gs],delete e[ol]}function Ca(e){var n=e[pn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=N0(e);e!==null;){if(a=e[pn])return a;e=N0(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[pn]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Da(e){var n=e[jr];return n||(n=e[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[cs]=!0}var Q=new Set,ht={};function ct(e,n){nt(e,n),nt(e+"Capture",n)}function nt(e,n){for(ht[e]=n,e=0;e<n.length;e++)Q.add(n[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},It={};function Xt(e){return ke.call(It,e)?!0:ke.call(kt,e)?!1:Ot.test(e)?It[e]=!0:(kt[e]=!0,!1)}function Zt(e,n,a){if(Xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=an(e,n,""+e[n])}}function Fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function ce(e){return e.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(e,n,a,o,u,d,M,R){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Dn(e,M,ae(n)):a!=null?Dn(e,M,ae(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ae(R):e.removeAttribute("name")}function Qi(e,n,a,o,u,d,M,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ke(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ke(e)}function Dn(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function Un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(et(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ke(e)}function yn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Nn(e,d,n[d])}function Ri(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return yx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function bp(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(wn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(s(90));wn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fe(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mi(e,!!a.multiple,n,!1)}}}var du=!1;function Tp(e,n,a){if(du)return e(n,a);du=!0;try{var o=e(n);return o}finally{if(du=!1,(ks!==null||Xs!==null)&&(Zl(),ks&&(n=ks,e=Xs,Xs=ks=null,bp(n),e)))for(n=0;n<e.length;n++)bp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if($i)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{pu=!1}var Ua=null,mu=null,cl=null;function Ap(){if(cl)return cl;var e,n=mu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Rp(){return!1}function Yn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:Rp,this.isPropagationStopped=Rp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Yn(fs),Jr=_({},fs,{view:0,detail:0}),Sx=Yn(Jr),gu,_u,$r,dl=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(gu=e.screenX-$r.screenX,_u=e.screenY-$r.screenY):_u=gu=0,$r=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),Cp=Yn(dl),Mx=_({},dl,{dataTransfer:0}),Ex=Yn(Mx),bx=_({},Jr,{relatedTarget:0}),vu=Yn(bx),Tx=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Yn(Tx),Rx=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cx=Yn(Rx),wx=_({},fs,{data:0}),wp=Yn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lx[e])?!!n[e]:!1}function xu(){return Nx}var Ox=_({},Jr,{key:function(e){if(e.key){var n=Dx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Px=Yn(Ox),zx=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Yn(zx),Fx=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Ix=Yn(Fx),Bx=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Yn(Bx),Gx=_({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Yn(Gx),kx=_({},fs,{newState:0,oldState:0}),Xx=Yn(kx),Wx=[9,13,27,32],yu=$i&&"CompositionEvent"in window,to=null;$i&&"documentMode"in document&&(to=document.documentMode);var qx=$i&&"TextEvent"in window&&!to,Up=$i&&(!yu||to&&8<to&&11>=to),Lp=" ",Np=!1;function Op(e,n){switch(e){case"keyup":return Wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function Yx(e,n){switch(e){case"compositionend":return Pp(n);case"keypress":return n.which!==32?null:(Np=!0,Lp);case"textInput":return e=n.data,e===Lp&&Np?null:e;default:return null}}function jx(e,n){if(Ws)return e==="compositionend"||!yu&&Op(e,n)?(e=Ap(),cl=mu=Ua=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zx[e.type]:n==="textarea"}function Fp(e,n,a,o){ks?Xs?Xs.push(o):Xs=[o]:ks=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,no=null;function Kx(e){x0(e,0)}function pl(e){var n=us(e);if(Fe(n))return e}function Ip(e,n){if(e==="change")return n}var Bp=!1;if($i){var Su;if($i){var Mu="oninput"in document;if(!Mu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Mu=typeof Hp.oninput=="function"}Su=Mu}else Su=!1;Bp=Su&&(!document.documentMode||9<document.documentMode)}function Gp(){eo&&(eo.detachEvent("onpropertychange",Vp),no=eo=null)}function Vp(e){if(e.propertyName==="value"&&pl(no)){var n=[];Fp(n,no,e,hu(e)),Tp(Kx,n)}}function Qx(e,n,a){e==="focusin"?(Gp(),eo=n,no=a,eo.attachEvent("onpropertychange",Vp)):e==="focusout"&&Gp()}function Jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(no)}function $x(e,n){if(e==="click")return pl(n)}function ty(e,n){if(e==="input"||e==="change")return pl(n)}function ey(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:ey;function io(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ke.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,n){var a=kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kp(a)}}function Wp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ny=$i&&"documentMode"in document&&11>=document.documentMode,qs=null,bu=null,ao=null,Tu=!1;function Yp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||qs==null||qs!==Jt(o)||(o=qs,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=nc(bu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=qs)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ys={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Au={},jp={};$i&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function ds(e){if(Au[e])return Au[e];if(!Ys[e])return e;var n=Ys[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jp)return Au[e]=n[a];return e}var Zp=ds("animationend"),Kp=ds("animationiteration"),Qp=ds("animationstart"),iy=ds("transitionrun"),ay=ds("transitionstart"),sy=ds("transitioncancel"),Jp=ds("transitionend"),$p=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ci(e,n){$p.set(e,n),ct(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],js=0,Cu=0;function gl(){for(var e=js,n=Cu=js=0;n<e;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var d=gi[n];if(gi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&tm(a,u,d)}}function _l(e,n,a,o){gi[js++]=e,gi[js++]=n,gi[js++]=a,gi[js++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,n,a,o){return _l(e,n,a,o),vl(e)}function ps(e,n){return _l(e,null,null,n),vl(e)}function tm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function vl(e){if(50<Ro)throw Ro=0,Bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function ry(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new ry(e,n,a,o)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function em(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Du(e)&&(M=1);else if(typeof e=="string")M=fS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ii(31,a,n,u),e.elementType=A,e.lanes=d,e;case b:return ms(a.children,u,d,n);case S:M=8,u|=24;break;case v:return e=ii(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case N:return e=ii(13,a,n,u),e.elementType=N,e.lanes=d,e;case z:return e=ii(19,a,n,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:M=10;break t;case D:M=9;break t;case w:M=11;break t;case O:M=14;break t;case q:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function ms(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function Uu(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function nm(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var im=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=im.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},im.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Ks=[],Qs=0,yl=null,so=0,vi=[],xi=0,La=null,Fi=1,Ii="";function ea(e,n){Ks[Qs++]=so,Ks[Qs++]=yl,yl=e,so=n}function am(e,n,a){vi[xi++]=Fi,vi[xi++]=Ii,vi[xi++]=La,La=e;var o=Fi;e=Ii;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var d=32-Bt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Fi=1<<32-Bt(n)+u|a<<u|o,Ii=d+e}else Fi=1<<d|a<<u|o,Ii=e}function Nu(e){e.return!==null&&(ea(e,1),am(e,1,0))}function Ou(e){for(;e===yl;)yl=Ks[--Qs],Ks[Qs]=null,so=Ks[--Qs],Ks[Qs]=null;for(;e===La;)La=vi[--xi],vi[xi]=null,Ii=vi[--xi],vi[xi]=null,Fi=vi[--xi],vi[xi]=null}function sm(e,n){vi[xi++]=Fi,vi[xi++]=Ii,vi[xi++]=La,Fi=n.id,Ii=n.overflow,La=e}var On=null,Je=null,Ae=!1,Na=null,yi=!1,Pu=Error(s(519));function Oa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(_i(n,e)),Pu}function rm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[pn]=e,n[Cn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)Se(wo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||E0(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Oa(e,!0)}function om(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:On=On.return}}function Js(e){if(e!==On)return!1;if(!Ae)return om(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&Je&&Oa(e),om(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=L0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=L0(e)}else n===27?(n=Je,ja(e.type)?(e=sh,sh=null,Je=e):Je=n):Je=On?Mi(e.stateNode.nextSibling):null;return!0}function gs(){Je=On=null,Ae=!1}function zu(){var e=Na;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Na=null),e}function ro(e){Na===null?Na=[e]:Na.push(e)}var Fu=F(null),_s=null,na=null;function Pa(e,n,a){ft(Fu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Fu.current,J(Fu)}function Iu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Iu(d.return,a,e),o||(M=null);break t}d=R.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Iu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function $s(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var R=u.type;ni(u.pendingProps.value,M.value)||(e!==null?e.push(R):e=[R])}}else if(u===lt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pn(e){return lm(_s,e)}function Ml(e,n){return _s===null&&vs(e),lm(e,n)}function lm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var oy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ly=r.unstable_scheduleCallback,cy=r.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new oy,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&ly(cy,function(){e.controller.abort()})}var lo=null,Gu=0,tr=0,er=null;function uy(e,n){if(lo===null){var a=lo=[];Gu=0,tr=Wf(),er={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(cm,cm),n}function cm(){if(--Gu===0&&lo!==null){er!==null&&(er.status="fulfilled");var e=lo;lo=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var um=P.S;P.S=function(e,n){Yg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(e,n),um!==null&&um(e,n)};var xs=F(null);function Vu(){var e=xs.current;return e!==null?e:je.pooledCache}function El(e,n){n===null?ft(xs,xs.current):ft(xs,n.pool)}function fm(){var e=Vu();return e===null?null:{parent:mn._currentValue,pool:e}}var nr=Error(s(460)),ku=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function hm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mm(e),e}throw Ss=n,nr}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,nr):a}}var Ss=null;function pm(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function mm(e){if(e===nr||e===bl)throw Error(s(483))}var ir=null,co=0;function Al(e){var n=co;return co+=1,ir===null&&(ir=[]),dm(ir,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function gm(e){function n($,W){if(e){var rt=$.deletions;rt===null?($.deletions=[W],$.flags|=16):rt.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=ta($,W),$.index=0,$.sibling=null,$}function d($,W,rt){return $.index=rt,e?(rt=$.alternate,rt!==null?(rt=rt.index,rt<W?($.flags|=67108866,W):rt):($.flags|=67108866,W)):($.flags|=1048576,W)}function M($){return e&&$.alternate===null&&($.flags|=67108866),$}function R($,W,rt,St){return W===null||W.tag!==6?(W=Uu(rt,$.mode,St),W.return=$,W):(W=u(W,rt),W.return=$,W)}function G($,W,rt,St){var $t=rt.type;return $t===b?_t($,W,rt.props.children,St,rt.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===q&&ys($t)===W.type)?(W=u(W,rt.props),uo(W,rt),W.return=$,W):(W=xl(rt.type,rt.key,rt.props,null,$.mode,St),uo(W,rt),W.return=$,W)}function ot($,W,rt,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=Lu(rt,$.mode,St),W.return=$,W):(W=u(W,rt.children||[]),W.return=$,W)}function _t($,W,rt,St,$t){return W===null||W.tag!==7?(W=ms(rt,$.mode,St,$t),W.return=$,W):(W=u(W,rt),W.return=$,W)}function Mt($,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Uu(""+W,$.mode,rt),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return rt=xl(W.type,W.key,W.props,null,$.mode,rt),uo(rt,W),rt.return=$,rt;case E:return W=Lu(W,$.mode,rt),W.return=$,W;case q:return W=ys(W),Mt($,W,rt)}if(et(W)||tt(W))return W=ms(W,$.mode,rt,null),W.return=$,W;if(typeof W.then=="function")return Mt($,Al(W),rt);if(W.$$typeof===U)return Mt($,Ml($,W),rt);Rl($,W)}return null}function ut($,W,rt,St){var $t=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return $t!==null?null:R($,W,""+rt,St);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:return rt.key===$t?G($,W,rt,St):null;case E:return rt.key===$t?ot($,W,rt,St):null;case q:return rt=ys(rt),ut($,W,rt,St)}if(et(rt)||tt(rt))return $t!==null?null:_t($,W,rt,St,null);if(typeof rt.then=="function")return ut($,W,Al(rt),St);if(rt.$$typeof===U)return ut($,W,Ml($,rt),St);Rl($,rt)}return null}function dt($,W,rt,St,$t){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(rt)||null,R(W,$,""+St,$t);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return $=$.get(St.key===null?rt:St.key)||null,G(W,$,St,$t);case E:return $=$.get(St.key===null?rt:St.key)||null,ot(W,$,St,$t);case q:return St=ys(St),dt($,W,rt,St,$t)}if(et(St)||tt(St))return $=$.get(rt)||null,_t(W,$,St,$t,null);if(typeof St.then=="function")return dt($,W,rt,Al(St),$t);if(St.$$typeof===U)return dt($,W,rt,Ml(W,St),$t);Rl(W,St)}return null}function Wt($,W,rt,St){for(var $t=null,Le=null,Qt=W,pe=W=0,Te=null;Qt!==null&&pe<rt.length;pe++){Qt.index>pe?(Te=Qt,Qt=null):Te=Qt.sibling;var Ne=ut($,Qt,rt[pe],St);if(Ne===null){Qt===null&&(Qt=Te);break}e&&Qt&&Ne.alternate===null&&n($,Qt),W=d(Ne,W,pe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne,Qt=Te}if(pe===rt.length)return a($,Qt),Ae&&ea($,pe),$t;if(Qt===null){for(;pe<rt.length;pe++)Qt=Mt($,rt[pe],St),Qt!==null&&(W=d(Qt,W,pe),Le===null?$t=Qt:Le.sibling=Qt,Le=Qt);return Ae&&ea($,pe),$t}for(Qt=o(Qt);pe<rt.length;pe++)Te=dt(Qt,$,pe,rt[pe],St),Te!==null&&(e&&Te.alternate!==null&&Qt.delete(Te.key===null?pe:Te.key),W=d(Te,W,pe),Le===null?$t=Te:Le.sibling=Te,Le=Te);return e&&Qt.forEach(function($a){return n($,$a)}),Ae&&ea($,pe),$t}function se($,W,rt,St){if(rt==null)throw Error(s(151));for(var $t=null,Le=null,Qt=W,pe=W=0,Te=null,Ne=rt.next();Qt!==null&&!Ne.done;pe++,Ne=rt.next()){Qt.index>pe?(Te=Qt,Qt=null):Te=Qt.sibling;var $a=ut($,Qt,Ne.value,St);if($a===null){Qt===null&&(Qt=Te);break}e&&Qt&&$a.alternate===null&&n($,Qt),W=d($a,W,pe),Le===null?$t=$a:Le.sibling=$a,Le=$a,Qt=Te}if(Ne.done)return a($,Qt),Ae&&ea($,pe),$t;if(Qt===null){for(;!Ne.done;pe++,Ne=rt.next())Ne=Mt($,Ne.value,St),Ne!==null&&(W=d(Ne,W,pe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return Ae&&ea($,pe),$t}for(Qt=o(Qt);!Ne.done;pe++,Ne=rt.next())Ne=dt(Qt,$,pe,Ne.value,St),Ne!==null&&(e&&Ne.alternate!==null&&Qt.delete(Ne.key===null?pe:Ne.key),W=d(Ne,W,pe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return e&&Qt.forEach(function(MS){return n($,MS)}),Ae&&ea($,pe),$t}function qe($,W,rt,St){if(typeof rt=="object"&&rt!==null&&rt.type===b&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:t:{for(var $t=rt.key;W!==null;){if(W.key===$t){if($t=rt.type,$t===b){if(W.tag===7){a($,W.sibling),St=u(W,rt.props.children),St.return=$,$=St;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===q&&ys($t)===W.type){a($,W.sibling),St=u(W,rt.props),uo(St,rt),St.return=$,$=St;break t}a($,W);break}else n($,W);W=W.sibling}rt.type===b?(St=ms(rt.props.children,$.mode,St,rt.key),St.return=$,$=St):(St=xl(rt.type,rt.key,rt.props,null,$.mode,St),uo(St,rt),St.return=$,$=St)}return M($);case E:t:{for($t=rt.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){a($,W.sibling),St=u(W,rt.children||[]),St.return=$,$=St;break t}else{a($,W);break}else n($,W);W=W.sibling}St=Lu(rt,$.mode,St),St.return=$,$=St}return M($);case q:return rt=ys(rt),qe($,W,rt,St)}if(et(rt))return Wt($,W,rt,St);if(tt(rt)){if($t=tt(rt),typeof $t!="function")throw Error(s(150));return rt=$t.call(rt),se($,W,rt,St)}if(typeof rt.then=="function")return qe($,W,Al(rt),St);if(rt.$$typeof===U)return qe($,W,Ml($,rt),St);Rl($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(a($,W.sibling),St=u(W,rt),St.return=$,$=St):(a($,W),St=Uu(rt,$.mode,St),St.return=$,$=St),M($)):a($,W)}return function($,W,rt,St){try{co=0;var $t=qe($,W,rt,St);return ir=null,$t}catch(Qt){if(Qt===nr||Qt===bl)throw Qt;var Le=ii(29,Qt,null,$.mode);return Le.lanes=St,Le.return=$,Le}finally{}}}var Ms=gm(!0),_m=gm(!1),za=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),tm(e,null,a),n}return _l(e,o,n,a),vl(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nn(e,a)}}function qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function ho(){if(Yu){var e=er;if(e!==null)throw e}}function po(e,n,a,o){Yu=!1;var u=e.updateQueue;za=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ot=G.next;G.next=null,M===null?d=ot:M.next=ot,M=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,R=_t.lastBaseUpdate,R!==M&&(R===null?_t.firstBaseUpdate=ot:R.next=ot,_t.lastBaseUpdate=G))}if(d!==null){var Mt=u.baseState;M=0,_t=ot=G=null,R=d;do{var ut=R.lane&-536870913,dt=ut!==R.lane;if(dt?(be&ut)===ut:(o&ut)===ut){ut!==0&&ut===tr&&(Yu=!0),_t!==null&&(_t=_t.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,se=R;ut=n;var qe=a;switch(se.tag){case 1:if(Wt=se.payload,typeof Wt=="function"){Mt=Wt.call(qe,Mt,ut);break t}Mt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=se.payload,ut=typeof Wt=="function"?Wt.call(qe,Mt,ut):Wt,ut==null)break t;Mt=_({},Mt,ut);break t;case 2:za=!0}}ut=R.callback,ut!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[ut]:dt.push(ut))}else dt={lane:ut,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_t===null?(ot=_t=dt,G=Mt):_t=_t.next=dt,M|=ut;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;dt=R,R=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);_t===null&&(G=Mt),u.baseState=G,u.firstBaseUpdate=ot,u.lastBaseUpdate=_t,d===null&&(u.shared.lanes=0),ka|=M,e.lanes=M,e.memoizedState=Mt}}function vm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function xm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vm(a[e],n)}var ar=F(null),Cl=F(0);function ym(e,n){e=ha,ft(Cl,e),ft(ar,n),ha=e|n.baseLanes}function ju(){ft(Cl,ha),ft(ar,ar.current)}function Zu(){ha=Cl.current,J(ar),J(Cl)}var ai=F(null),Si=null;function Ba(e){var n=e.alternate;ft(un,un.current&1),ft(ai,e),Si===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(Si=e)}function Ku(e){ft(un,un.current),ft(ai,e),Si===null&&(Si=e)}function Sm(e){e.tag===22?(ft(un,un.current),ft(ai,e),Si===null&&(Si=e)):Ha()}function Ha(){ft(un,un.current),ft(ai,ai.current)}function si(e){J(ai),Si===e&&(Si=null),J(un)}var un=F(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,de=null,Xe=null,gn=null,Dl=!1,sr=!1,Es=!1,Ul=0,mo=0,rr=null,hy=0;function on(){throw Error(s(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function Ju(e,n,a,o,u,d){return aa=d,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?ag:pf,Es=!1,d=a(o,u),Es=!1,sr&&(d=Em(n,a,o,u)),Mm(e),d}function Mm(e){P.H=vo;var n=Xe!==null&&Xe.next!==null;if(aa=0,gn=Xe=de=null,Dl=!1,mo=0,rr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&Sl(e)&&(_n=!0))}function Em(e,n,a,o){de=e;var u=0;do{if(sr&&(rr=null),mo=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,gn=Xe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=sg,d=n(a,o)}while(sr);return d}function dy(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(de.flags|=1024),n}function $u(){var e=Ul!==0;return Ul=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}aa=0,gn=Xe=de=null,sr=!1,mo=Ul=0,rr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?de.memoizedState=gn=e:gn=gn.next=e,gn}function fn(){if(Xe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=gn===null?de.memoizedState:gn.next;if(n!==null)gn=n,Xe=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},gn===null?de.memoizedState=gn=e:gn=gn.next=e}return gn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,rr===null&&(rr=[]),e=dm(rr,e,n),n=de,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?ag:pf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===U)return Pn(e)}throw Error(s(438,String(e)))}function nf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=L;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=fn();return af(n,Xe,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=M=null,G=null,ot=n,_t=!1;do{var Mt=ot.lane&-536870913;if(Mt!==ot.lane?(be&Mt)===Mt:(aa&Mt)===Mt){var ut=ot.revertLane;if(ut===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Mt===tr&&(_t=!0);else if((aa&ut)===ut){ot=ot.next,ut===tr&&(_t=!0);continue}else Mt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},G===null?(R=G=Mt,M=d):G=G.next=Mt,de.lanes|=ut,ka|=ut;Mt=ot.action,Es&&a(d,Mt),d=ot.hasEagerState?ot.eagerState:a(d,Mt)}else ut={lane:Mt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},G===null?(R=G=ut,M=d):G=G.next=ut,de.lanes|=Mt,ka|=Mt;ot=ot.next}while(ot!==null&&ot!==n);if(G===null?M=d:G.next=R,!ni(d,e.memoizedState)&&(_n=!0,_t&&(a=er,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);ni(d,n.memoizedState)||(_n=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function bm(e,n,a){var o=de,u=fn(),d=Ae;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!ni((Xe||u).memoizedState,a);if(M&&(u.memoizedState=a,_n=!0),u=u.queue,lf(Rm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,or(9,{destroy:void 0},Am.bind(null,o,u,a,n),null),je===null)throw Error(s(349));d||(aa&127)!==0||Tm(o,n,a)}return a}function Tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Ll(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Am(e,n,a,o){n.value=a,n.getSnapshot=o,Cm(n)&&wm(e)}function Rm(e,n,a){return a(function(){Cm(n)&&wm(e)})}function Cm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function wm(e){var n=ps(e,2);n!==null&&Jn(n,e,2)}function rf(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Es){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Dm(e,n,a,o){return e.baseState=a,af(e,Xe,typeof o=="function"?o:sa)}function py(e,n,a,o,u){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Um(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Um(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=P.T,M={};P.T=M;try{var R=a(u,o),G=P.S;G!==null&&G(M,R),Lm(e,n,R)}catch(ot){of(e,n,ot)}finally{d!==null&&M.types!==null&&(d.types=M.types),P.T=d}}else try{d=a(u,o),Lm(e,n,d)}catch(ot){of(e,n,ot)}}function Lm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nm(e,n,o)},function(o){return of(e,n,o)}):Nm(e,n,a)}function Nm(e,n,a){n.status="fulfilled",n.value=a,Om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Um(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Om(n),n=n.next;while(n!==o)}e.action=null}function Om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pm(e,n){return n}function zm(e,n){if(Ae){var a=je.formState;if(a!==null){t:{var o=de;if(Ae){if(Je){e:{for(var u=Je,d=yi;u.nodeType!==8;){if(!d){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Je=Mi(u.nextSibling),o=u.data==="F!";break t}}Oa(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:n},a.queue=o,a=eg.bind(null,de,o),o.dispatch=a,o=rf(!1),d=df.bind(null,de,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=py.bind(null,de,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Fm(e){var n=fn();return Im(n,Xe,e)}function Im(e,n,a){if(n=af(e,n,Pm)[0],e=Ol(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(M){throw M===nr?bl:M}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,or(9,{destroy:void 0},my.bind(null,u,a),null)),[o,d,e]}function my(e,n){e.action=n}function Bm(e){var n=fn(),a=Xe;if(a!==null)return Im(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function or(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Ll(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Hm(){return fn().memoizedState}function Pl(e,n,a,o){var u=kn();de.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Xe!==null&&o!==null&&Qu(o,Xe.memoizedState.deps)?u.memoizedState=or(n,d,a,o):(de.flags|=e,u.memoizedState=or(1|n,d,a,o))}function Gm(e,n){Pl(8390656,8,e,n)}function lf(e,n){zl(2048,8,e,n)}function gy(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Ll(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Vm(e){var n=fn().memoizedState;return gy({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function km(e,n){return zl(4,2,e,n)}function Xm(e,n){return zl(4,4,e,n)}function Wm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qm(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,Wm.bind(null,n,e),a)}function cf(){}function Ym(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function jm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=e(),Es){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function uf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Zg(),de.lanes|=e,ka|=e,a)}function Zm(e,n,a,o){return ni(a,n)?a:ar.current!==null?(e=uf(e,a,o),ni(e,n)||(_n=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(be&261930)===0?(_n=!0,e.memoizedState=a):(e=Zg(),de.lanes|=e,ka|=e,n)}function Km(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var M=P.T,R={};P.T=R,df(e,!1,n,a);try{var G=u(),ot=P.S;if(ot!==null&&ot(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=fy(G,o);_o(e,n,_t,li(e))}else _o(e,n,o,li(e))}catch(Mt){_o(e,n,{then:function(){},status:"rejected",reason:Mt},li())}finally{B.p=d,M!==null&&R.types!==null&&(M.types=R.types),P.T=M}}function _y(){}function ff(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Qm(e).queue;Km(e,u,n,K,a===null?_y:function(){return Jm(e),a(o)})}function Qm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jm(e){var n=Qm(e);n.next===null&&(n=e.alternate.memoizedState),_o(e,n.next.queue,{},li())}function hf(){return Pn(Oo)}function $m(){return fn().memoizedState}function tg(){return fn().memoizedState}function vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Fa(a);var o=Ia(n,e,a);o!==null&&(Jn(o,n,a),fo(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function xy(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?ng(n,a):(a=wu(e,n,a,o),a!==null&&(Jn(a,e,o),ig(a,n,o)))}function eg(e,n,a){var o=li();_o(e,n,a,o)}function _o(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))ng(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,R=d(M,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,M))return _l(e,n,u,0),je===null&&gl(),!1}catch{}finally{}if(a=wu(e,n,u,o),a!==null)return Jn(a,e,o),ig(a,n,o),!0}return!1}function df(e,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=wu(e,a,o,2),n!==null&&Jn(n,e,2)}function Fl(e){var n=e.alternate;return e===de||n!==null&&n===de}function ng(e,n){sr=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ig(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nn(e,a)}}var vo={readContext:Pn,use:Nl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};vo.useEffectEvent=on;var ag={readContext:Pn,use:Nl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:Gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Wm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var o=e();if(Es){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Es){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xy.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=rf(e);var n=e.queue,a=eg.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=kn();return uf(a,e,n)},useTransition:function(){var e=rf(!1);return e=Km.bind(null,de,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=kn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(be&127)!==0||Tm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Gm(Rm.bind(null,o,d,e),[e]),o.flags|=2048,or(9,{destroy:void 0},Am.bind(null,o,d,a,n),null),a},useId:function(){var e=kn(),n=je.identifierPrefix;if(Ae){var a=Ii,o=Fi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:zm,useActionState:zm,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return kn().memoizedState=vy.bind(null,de)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Pn,use:Nl,useCallback:Ym,useContext:Pn,useEffect:lf,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:jm,useReducer:Ol,useRef:Hm,useState:function(){return Ol(sa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=fn();return Zm(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Ol(sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:bm,useId:$m,useHostTransitionStatus:hf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,n){var a=fn();return Dm(a,Xe,e,n)},useMemoCache:nf,useCacheRefresh:tg};pf.useEffectEvent=Vm;var sg={readContext:Pn,use:Nl,useCallback:Ym,useContext:Pn,useEffect:lf,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:jm,useReducer:sf,useRef:Hm,useState:function(){return sf(sa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=fn();return Xe===null?uf(a,e,n):Zm(a,Xe.memoizedState,e,n)},useTransition:function(){var e=sf(sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:bm,useId:$m,useHostTransitionStatus:hf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,n){var a=fn();return Xe!==null?Dm(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:tg};sg.useEffectEvent=Vm;function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Jn(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Jn(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(Jn(n,e,a),fo(n,e,a))}};function rg(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,d):!0}function og(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function lg(e){ml(e)}function cg(e){console.error(e)}function ug(e){ml(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function hg(e){return e=Fa(e),e.tag=3,e}function dg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){fg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){fg(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function yy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?Kl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(e,o,u)),!1}throw Error(s(435,a.tag))}return Vf(e,o,u),Kl(),!1}if(Ae)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(e=Error(s(422),{cause:o}),ro(_i(e,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),ro(_i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=_i(o,a),u=_f(e.stateNode,o,u),qu(e,u),ln!==4&&(ln=2)),!1;var d=Error(s(520),{cause:o});if(d=_i(d,a),Ao===null?Ao=[d]:Ao.push(d),ln!==4&&(ln=2),n===null)return!0;o=_i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),qu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hg(u),dg(u,e,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(s(461)),_n=!1;function zn(e,n,a,o){n.child=e===null?_m(n,null,a,o):Ms(n,e.child,a,o)}function pg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var R in o)R!=="ref"&&(M[R]=o[R])}else M=o;return vs(n),o=Ju(e,n,a,M,d,u),R=$u(),e!==null&&!_n?(tf(e,n,u),ra(e,n,u)):(Ae&&R&&Nu(n),n.flags|=1,zn(e,n,o,u),n.child)}function mg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Du(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,gg(e,n,d,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Af(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(M,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(d,o),e.ref=n.ref,e.return=n,n.child=e}function gg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(io(d,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=d,Af(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,ra(e,n,u)}return xf(e,n,a,o,u)}function _g(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return vg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,d!==null?d.cachePool:null),d!==null?ym(n,d):ju(),Sm(n);else return o=n.lanes=536870912,vg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(El(n,d.cachePool),ym(n,d),Ha(),n.memoizedState=null):(e!==null&&El(n,null),ju(),Ha());return zn(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vg(e,n,a,o,u){var d=Vu();return d=d===null?null:{parent:mn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&El(n,null),ju(),Sm(n),e!==null&&$s(e,n,o,!0),n.childLanes=u,null}function Bl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xg(e,n,a){return Ms(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function Sy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,xo(null,e);if(Ku(n),(e=Je)?(e=U0(e,yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=nm(e),a.return=n,n.child=a,On=n,Je=null)):e=null,e===null)throw Oa(n);return n.lanes=536870912,null}return Bl(n,o)}var d=e.memoizedState;if(d!==null){var M=d.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=xg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||$s(e,n,a,!1),u=(a&e.childLanes)!==0,_n||u){if(o=je,o!==null&&(M=dn(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,ps(e,M),Jn(o,e,M),vf;Kl(),n=xg(e,n,a)}else e=d.treeContext,Je=Mi(M.nextSibling),On=n,Ae=!0,Na=null,yi=!1,e!==null&&sm(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,o,u){return vs(n),a=Ju(e,n,a,o,void 0,u),o=$u(),e!==null&&!_n?(tf(e,n,u),ra(e,n,u)):(Ae&&o&&Nu(n),n.flags|=1,zn(e,n,a,u),n.child)}function yg(e,n,a,o,u,d){return vs(n),n.updateQueue=null,a=Em(n,o,a,u),Mm(e),o=$u(),e!==null&&!_n?(tf(e,n,d),ra(e,n,d)):(Ae&&o&&Nu(n),n.flags|=1,zn(e,n,a,d),n.child)}function Sg(e,n,a,o,u){if(vs(n),n.stateNode===null){var d=Zs,M=a.contextType;typeof M=="object"&&M!==null&&(d=Pn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Xu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Pn(M):Zs,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(mf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&gf.enqueueReplaceState(d,d.state,null),po(n,o,d,u),ho(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,G=bs(a,R);d.props=G;var ot=d.context,_t=a.contextType;M=Zs,typeof _t=="object"&&_t!==null&&(M=Pn(_t));var Mt=a.getDerivedStateFromProps;_t=typeof Mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_t||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ot!==M)&&og(n,d,o,M),za=!1;var ut=n.memoizedState;d.state=ut,po(n,o,d,u),ho(),ot=n.memoizedState,R||ut!==ot||za?(typeof Mt=="function"&&(mf(n,a,Mt,o),ot=n.memoizedState),(G=za||rg(n,a,G,o,ut,ot,M))?(_t||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),d.props=o,d.state=ot,d.context=M,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Wu(e,n),M=n.memoizedProps,_t=bs(a,M),d.props=_t,Mt=n.pendingProps,ut=d.context,ot=a.contextType,G=Zs,typeof ot=="object"&&ot!==null&&(G=Pn(ot)),R=a.getDerivedStateFromProps,(ot=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Mt||ut!==G)&&og(n,d,o,G),za=!1,ut=n.memoizedState,d.state=ut,po(n,o,d,u),ho();var dt=n.memoizedState;M!==Mt||ut!==dt||za||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof R=="function"&&(mf(n,a,R,o),dt=n.memoizedState),(_t=za||rg(n,a,_t,o,ut,dt,G)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(ot||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,dt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,dt,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),d.props=o,d.state=dt,d.context=G,o=_t):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Hl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):zn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ra(e,n,u),e}function Mg(e,n,a,o){return gs(),n.flags|=256,zn(e,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:fm()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Eg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ba(n):Ha(),(e=Je)?(e=U0(e,yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=nm(e),a.return=n,n.child=a,On=n,Je=null)):e=null,e===null)throw Oa(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ha(),u=n.mode,R=Gl({mode:"hidden",children:R},u),o=ms(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(e,M,a),n.memoizedState=yf,xo(null,o)):(Ba(n),Ef(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(d)n.flags&256?(Ba(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Ha(),n.child=e.child,n.flags|=128,n=null):(Ha(),R=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),R=ms(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(e,M,a),n.memoizedState=yf,n=xo(null,o));else if(Ba(n),ah(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var ot=M.dgst;M=ot,o=Error(s(419)),o.stack="",o.digest=M,ro({value:o,source:null,stack:null}),n=bf(e,n,a)}else if(_n||$s(e,n,a,!1),M=(a&e.childLanes)!==0,_n||M){if(M=je,M!==null&&(o=dn(M,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ps(e,o),Jn(M,e,o),vf;ih(R)||Kl(),n=bf(e,n,a)}else ih(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Je=Mi(R.nextSibling),On=n,Ae=!0,Na=null,yi=!1,e!==null&&sm(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Ha(),R=o.fallback,u=n.mode,G=e.child,ot=G.sibling,o=ta(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ot!==null?R=ta(ot,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,xo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Sf(a):(u=R.cachePool,u!==null?(G=mn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=fm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Mf(e,M,a),n.memoizedState=yf,xo(e.child,o)):(Ba(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return Ms(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Iu(e.return,n,a)}function Tf(e,n,a,o,u,d){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function Tg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=un.current,R=(M&2)!==0;if(R?(M=M&1|2,n.flags|=128):M&=1,ft(un,M),zn(e,n,o,a),o=Ae?so:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,a,n);else if(e.tag===19)bg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,d,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function My(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Pa(n,mn,e.memoizedState.cache),gs();break;case 27:case 5:Pt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eg(e,n,a):(Ba(n),e=ra(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ft(un,un.current),o)break;return null;case 22:return n.lanes=0,_g(e,n,a,n.pendingProps);case 24:Pa(n,mn,e.memoizedState.cache)}return ra(e,n,a)}function Ag(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return _n=!1,My(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ae&&(n.flags&1048576)!==0&&am(n,so,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Du(e)?(o=bs(e,o),n.tag=1,n=Sg(null,n,e,o,a)):(n.tag=0,n=xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=pg(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=mg(null,n,e,o,a);break t}}throw n=st(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),Sg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Wu(e,n),po(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Pa(n,mn,o),o!==d.cache&&Bu(n,[mn],a,!0),ho(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Mg(e,n,o,a);break t}else if(o!==u){u=_i(Error(s(424)),n),ro(u),n=Mg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Mi(e.firstChild),On=n,Ae=!0,Na=null,yi=!0,a=_m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),o===u){n=ra(e,n,a);break t}zn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=F0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=ic(it.current).createElement(a),o[pn]=n,o[Cn]=e,Fn(o,a,e),C(o),n.stateNode=o):n.memoizedState=F0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pt(n),e===null&&Ae&&(o=n.stateNode=O0(n.type,n.pendingProps,it.current),On=n,yi=!0,u=Je,ja(n.type)?(sh=u,Je=Mi(o.firstChild)):Je=u),zn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Je)&&(o=Jy(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,On=n,Je=Mi(o.firstChild),yi=!1,u=!0):u=!1),u||Oa(n)),Pt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,th(u,d)?o=null:M!==null&&th(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,dy,null,null,a),Oo._currentValue=u),Hl(e,n),zn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Je)&&(a=$y(a,n.pendingProps,yi),a!==null?(n.stateNode=a,On=n,Je=null,e=!0):e=!1),e||Oa(n)),null;case 13:return Eg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):zn(e,n,o,a),n.child;case 11:return pg(e,n,n.type,n.pendingProps,a);case 7:return zn(e,n,n.pendingProps,a),n.child;case 8:return zn(e,n,n.pendingProps.children,a),n.child;case 12:return zn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),zn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Pn(u),o=o(u),n.flags|=1,zn(e,n,o,a),n.child;case 14:return mg(e,n,n.type,n.pendingProps,a);case 15:return gg(e,n,n.type,n.pendingProps,a);case 19:return Tg(e,n,a);case 31:return Sy(e,n,a);case 22:return _g(e,n,a,n.pendingProps);case 24:return vs(n),o=Pn(mn),e===null?(u=Vu(),u===null&&(u=je,d=Hu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Xu(n),Pa(n,mn,u)):((e.lanes&a)!==0&&(Wu(e,n),po(n,null,null,a),ho()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,mn,o)):(o=d.cache,Pa(n,mn,o),o!==u.cache&&Bu(n,[mn],a,!0))),zn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function Rf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if($g())e.flags|=8192;else throw Ss=Tl,ku}else e.flags&=-16777217}function Rg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!V0(n))if($g())e.flags|=8192;else throw Ss=Tl,ku}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ie():536870912,e.lanes|=n,fr|=n)}function yo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ey(e,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(mn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),$e(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(oa(n),d!==null?($e(n),Rg(n,d)):($e(n),Rf(n,u,null,o,a))):d?d!==e.memoizedState?(oa(n),$e(n),Rg(n,d)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),$e(n),Rf(n,u,e,o,a)),null;case 27:if(re(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=bt.current,Js(n)?rm(n):(e=O0(u,o,a),n.stateNode=e,oa(n))}return $e(n),null;case 5:if(re(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(d=bt.current,Js(n))rm(n);else{var M=ic(it.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[pn]=n,d[Cn]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;t:switch(Fn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return $e(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E0(e.nodeValue,a)),e||Oa(n,!0)}else e=ic(e).createTextNode(o),e[pn]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[pn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),$e(n),null);case 4:return Dt(),e===null&&Zf(n.stateNode.containerInfo),$e(n),null;case 10:return ia(n.type),$e(n),null;case 19:if(J(un),o=n.memoizedState,o===null)return $e(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)yo(o,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=wl(e),d!==null){for(n.flags|=128,yo(o,!1),e=d.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)em(a,e),a=a.sibling;return ft(un,un.current&1|2),Ae&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Yl&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ae)return $e(n),null}else 2*T()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=un.current,ft(un,u?a&1|2:a&1),Ae&&ea(n,o.treeForkCount),e):($e(n),null);case 22:case 23:return si(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(mn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function by(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(mn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return re(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(un),null;case 4:return Dt(),null;case 10:return ia(n.type),null;case 22:case 23:return si(n),Zu(),e!==null&&J(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(mn),null;case 25:return null;default:return null}}function Cg(e,n){switch(Ou(n),n.tag){case 3:ia(mn),Dt();break;case 26:case 27:case 5:re(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:J(un);break;case 10:ia(n.type);break;case 22:case 23:si(n),Zu(),e!==null&&J(xs);break;case 24:ia(mn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(R){He(n,n.return,R)}}function Ga(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,u=n;var G=a,ot=R;try{ot()}catch(_t){He(u,G,_t)}}}o=o.next}while(o!==d)}}catch(_t){He(n,n.return,_t)}}function wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xm(n,a)}catch(o){He(e,e.return,o)}}}function Dg(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){He(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function Ug(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function Cf(e,n,a){try{var o=e.stateNode;qy(o,e.type,a,n),o[Cn]=n}catch(u){He(e,e.return,u)}}function Lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function Ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Fn(n,o,a),n[pn]=e,n[Cn]=a}catch(d){He(e,e.return,d)}}var la=!1,vn=!1,Uf=!1,Og=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Ty(e,n){if(e=e.containerInfo,Jf=uc,e=qp(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,R=-1,G=-1,ot=0,_t=0,Mt=e,ut=null;e:for(;;){for(var dt;Mt!==a||u!==0&&Mt.nodeType!==3||(R=M+u),Mt!==d||o!==0&&Mt.nodeType!==3||(G=M+o),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)ut=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(ut===a&&++ot===u&&(R=M),ut===d&&++_t===o&&(G=M),(dt=Mt.nextSibling)!==null)break;Mt=ut,ut=Mt.parentNode}Mt=dt}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},uc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Wt=bs(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){He(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function Pg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&So(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){He(a,a.return,M)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){He(a,a.return,M)}}o&64&&wg(a),o&512&&Mo(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xm(e,n)}catch(M){He(a,a.return,M)}}break;case 27:n===null&&o&4&&Ng(a);case 26:case 5:ua(e,a),n===null&&o&4&&Ug(a),o&512&&Mo(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&Ig(e,a);break;case 13:ua(e,a),o&4&&Bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Oy.bind(null,a),tS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||vn,u=la;var d=vn;la=o,(vn=n)&&!d?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,vn=d}break;case 30:break;default:ua(e,a)}}function zg(e){var n=e.alternate;n!==null&&(e.alternate=null,zg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,jn=!1;function ca(e,n,a){for(a=a.child;a!==null;)Fg(e,n,a),a=a.sibling}function Fg(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:vn||Bi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Bi(a,n);var o=sn,u=jn;ja(a.type)&&(sn=a.stateNode,jn=!1),ca(e,n,a),Uo(a.stateNode),sn=o,jn=u;break;case 5:vn||Bi(a,n);case 6:if(o=sn,u=jn,sn=null,ca(e,n,a),sn=o,jn=u,sn!==null)if(jn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode)}catch(d){He(a,n,d)}else try{sn.removeChild(a.stateNode)}catch(d){He(a,n,d)}break;case 18:sn!==null&&(jn?(e=sn,w0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):w0(sn,a.stateNode));break;case 4:o=sn,u=jn,sn=a.stateNode.containerInfo,jn=!0,ca(e,n,a),sn=o,jn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),vn||Ga(4,a,n),ca(e,n,a);break;case 1:vn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Dg(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ca(e,n,a),vn=o;break;default:ca(e,n,a)}}function Ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){He(n,n.return,a)}}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){He(n,n.return,a)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Og),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=Ay(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Py.bind(null,e,o);o.then(u,u)}})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,R=M;t:for(;R!==null;){switch(R.tag){case 27:if(ja(R.type)){sn=R.stateNode,jn=!1;break t}break;case 5:sn=R.stateNode,jn=!1;break t;case 3:case 4:sn=R.stateNode.containerInfo,jn=!0;break t}R=R.return}if(sn===null)throw Error(s(160));Fg(d,M,u),sn=null,jn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hg(n,e),n=n.sibling}var wi=null;function Hg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),o&4&&(Ga(3,e,e.return),So(3,e),Ga(5,e,e.return));break;case 1:Zn(n,e),Kn(e),o&512&&(vn||a===null||Bi(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Zn(n,e),Kn(e),o&512&&(vn||a===null||Bi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[cs]||d[pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Fn(d,o,a),d[pn]=e,C(d),o=d;break t;case"link":var M=H0("link","href",u).get(o+(a.href||""));if(M){for(var R=0;R<M.length;R++)if(d=M[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(R,1);break e}}d=u.createElement(o),Fn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=H0("meta","content",u).get(o+(a.content||""))){for(R=0;R<M.length;R++)if(d=M[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(R,1);break e}}d=u.createElement(o),Fn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[pn]=e,C(d),o=d}e.stateNode=o}else G0(u,e.type,e.stateNode);else e.stateNode=B0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?G0(u,e.type,e.stateNode):B0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),o&512&&(vn||a===null||Bi(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),o&512&&(vn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{yn(u,"")}catch(Wt){He(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Zn(n,e),Kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){He(e,e.return,Wt)}}break;case 3:if(rc=null,u=wi,wi=ac(n.containerInfo),Zn(n,e),wi=u,Kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Wt){He(e,e.return,Wt)}Uf&&(Uf=!1,Gg(e));break;case 4:o=wi,wi=ac(e.stateNode.containerInfo),Zn(n,e),Kn(e),wi=o;break;case 12:Zn(n,e),Kn(e);break;case 31:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ot=la,_t=vn;if(la=ot||u,vn=_t||G,Zn(n,e),vn=_t,la=ot,Kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||la||vn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=G.stateNode;var Mt=G.memoizedProps.style,ut=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Wt){He(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){He(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var dt=G.stateNode;u?D0(dt,!0):D0(G.stateNode,!1)}catch(Wt){He(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Lg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=wf(e);kl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(yn(M,""),a.flags&=-33);var R=wf(e);kl(e,R,M);break;case 3:case 4:var G=a.stateNode.containerInfo,ot=wf(e);Df(e,ot,G);break;default:throw Error(s(161))}}catch(_t){He(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pg(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Ts(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dg(n,n.return,a),Ts(n);break;case 27:Uo(n.stateNode);case 26:case 5:Bi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:fa(u,d,a),So(4,d);break;case 1:if(fa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){He(o,o.return,ot)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)vm(G[u],R)}catch(ot){He(o,o.return,ot)}}a&&M&64&&wg(d),Mo(d,d.return);break;case 27:Ng(d);case 26:case 5:fa(u,d,a),a&&o===null&&M&4&&Ug(d),Mo(d,d.return);break;case 12:fa(u,d,a);break;case 31:fa(u,d,a),a&&M&4&&Ig(u,d);break;case 13:fa(u,d,a),a&&M&4&&Bg(u,d);break;case 22:d.memoizedState===null&&fa(u,d,a),Mo(d,d.return);break;case 30:break;default:fa(u,d,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vg(e,n,a,o),n=n.sibling}function Vg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),u&2048&&So(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Di(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,R=d.onPostCommit;typeof R=="function"&&R(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){He(n,n.return,G)}}else Di(e,n,a,o);break;case 31:Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Di(e,n,a,o):Eo(e,n):d._visibility&2?Di(e,n,a,o):(d._visibility|=2,lr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(M,n);break;case 24:Di(e,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Di(e,n,a,o)}}function lr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,M=n,R=a,G=o,ot=M.flags;switch(M.tag){case 0:case 11:case 15:lr(d,M,R,G,u),So(8,M);break;case 23:break;case 22:var _t=M.stateNode;M.memoizedState!==null?_t._visibility&2?lr(d,M,R,G,u):Eo(d,M):(_t._visibility|=2,lr(d,M,R,G,u)),u&&ot&2048&&Lf(M.alternate,M);break;case 24:lr(d,M,R,G,u),u&&ot&2048&&Nf(M.alternate,M);break;default:lr(d,M,R,G,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Nf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function cr(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)kg(e,n,a),e=e.sibling}function kg(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&bo&&e.memoizedState!==null&&hS(a,wi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var o=wi;wi=ac(e.stateNode.containerInfo),cr(e,n,a),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,cr(e,n,a),bo=o):cr(e,n,a));break;default:cr(e,n,a)}}function Xg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,qg(o,e)}Xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):To(e);break;default:To(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,qg(o,e)}Xg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function qg(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,d=o.return;if(zg(o),o===a){Tn=null;break t}if(u!==null){u.return=d,Tn=u;break t}Tn=d}}}var Ry={getCacheForType:function(e){var n=Pn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Pn(mn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,ye=null,be=0,Be=0,ri=null,Va=!1,ur=!1,Of=!1,ha=0,ln=0,ka=0,As=0,Pf=0,oi=0,fr=0,Ao=null,Qn=null,zf=!1,ql=0,Yg=0,Yl=1/0,jl=null,Xa=null,Sn=0,Wa=null,hr=null,da=0,Ff=0,If=null,jg=null,Ro=0,Bf=null;function li(){return(ze&2)!==0&&be!==0?be&-be:P.T!==null?Wf():Yr()}function Zg(){if(oi===0)if((be&536870912)===0||Ae){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===je&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(dr(e,0),qa(e,be,oi,!1)),xe(e,a),((ze&2)===0||e!==je)&&(e===je&&((ze&2)===0&&(As|=a),ln===4&&qa(e,be,oi,!1)),Hi(e))}function Kg(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||xt(e,n),u=o?Uy(e,n):Gf(e,n,!0),d=o;do{if(u===0){ur&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!wy(a)){u=Gf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var R=e;u=Ao;var G=R.current.memoizedState.isDehydrated;if(G&&(dr(R,M).flags|=256),M=Gf(R,M,!1),M!==2){if(Of&&!G){R.errorRecoveryDisabledLanes|=d,As|=d,u=4;break t}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){dr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,oi,!Va);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-T(),10<u)){if(qa(o,n,oi,!Va),at(o,0,!0)!==0)break t;da=n,o.timeoutHandle=R0(Qg.bind(null,o,a,Qn,jl,zf,n,oi,As,fr,Va,d,"Throttled",-0,0),u);break t}Qg(o,a,Qn,jl,zf,n,oi,As,fr,Va,d,null,-0,0)}}break}while(!0);Hi(e)}function Qg(e,n,a,o,u,d,M,R,G,ot,_t,Mt,ut,dt){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},kg(n,d,Mt);var Wt=(d&62914560)===d?ql-T():(d&4194048)===d?Yg-T():0;if(Wt=dS(Mt,Wt),Wt!==null){da=d,e.cancelPendingCommit=Wt(s0.bind(null,e,n,d,a,o,u,M,R,G,_t,Mt,null,ut,dt)),qa(e,d,M,!ot);return}}s0(e,n,d,a,o,u,M,R,G)}function wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ni(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~Pf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Bt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Qe(e,a,n)}function Zl(){return(ze&6)===0?(Co(0),!1):!0}function Hf(){if(ye!==null){if(Be===0)var e=ye.return;else e=ye,na=_s=null,ef(e),ir=null,co=0,e=ye;for(;e!==null;)Cg(e.alternate,e),e=e.return;ye=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Hf(),je=e,ye=a=ta(e.current,null),be=n,Be=0,ri=null,Va=!1,ur=xt(e,n),Of=!1,fr=oi=Pf=As=ka=ln=0,Qn=Ao=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),d=1<<u;n|=e[u],o&=~d}return ha=n,gl(),a}function Jg(e,n){de=null,P.H=vo,n===nr||n===bl?(n=pm(),Be=3):n===ku?(n=pm(),Be=4):Be=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,ye===null&&(ln=1,Il(e,_i(n,e.current)))}function $g(){var e=ai.current;return e===null?!0:(be&4194048)===be?Si===null:(be&62914560)===be||(be&536870912)!==0?e===Si:!1}function t0(){var e=P.H;return P.H=vo,e===null?vo:e}function e0(){var e=P.A;return P.A=Ry,e}function Kl(){ln=4,Va||(be&4194048)!==be&&ai.current!==null||(ur=!0),(ka&134217727)===0&&(As&134217727)===0||je===null||qa(je,be,oi,!1)}function Gf(e,n,a){var o=ze;ze|=2;var u=t0(),d=e0();(je!==e||be!==n)&&(jl=null,dr(e,n)),n=!1;var M=ln;t:do try{if(Be!==0&&ye!==null){var R=ye,G=ri;switch(Be){case 8:Hf(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ot=Be;if(Be=0,ri=null,pr(e,R,G,ot),a&&ur){M=0;break t}break;default:ot=Be,Be=0,ri=null,pr(e,R,G,ot)}}Dy(),M=ln;break}catch(_t){Jg(e,_t)}while(!0);return n&&e.shellSuspendCounter++,na=_s=null,ze=o,P.H=u,P.A=d,ye===null&&(je=null,be=0,gl()),M}function Dy(){for(;ye!==null;)n0(ye)}function Uy(e,n){var a=ze;ze|=2;var o=t0(),u=e0();je!==e||be!==n?(jl=null,Yl=T()+500,dr(e,n)):ur=xt(e,n);t:do try{if(Be!==0&&ye!==null){n=ye;var d=ri;e:switch(Be){case 1:Be=0,ri=null,pr(e,n,d,1);break;case 2:case 9:if(hm(d)){Be=0,ri=null,i0(n);break}n=function(){Be!==2&&Be!==9||je!==e||(Be=7),Hi(e)},d.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:hm(d)?(Be=0,ri=null,i0(n)):(Be=0,ri=null,pr(e,n,d,7));break;case 5:var M=null;switch(ye.tag){case 26:M=ye.memoizedState;case 5:case 27:var R=ye;if(M?V0(M):R.stateNode.complete){Be=0,ri=null;var G=R.sibling;if(G!==null)ye=G;else{var ot=R.return;ot!==null?(ye=ot,Ql(ot)):ye=null}break e}}Be=0,ri=null,pr(e,n,d,5);break;case 6:Be=0,ri=null,pr(e,n,d,6);break;case 8:Hf(),ln=6;break t;default:throw Error(s(462))}}Ly();break}catch(_t){Jg(e,_t)}while(!0);return na=_s=null,P.H=o,P.A=u,ze=a,ye!==null?0:(je=null,be=0,gl(),ln)}function Ly(){for(;ye!==null&&!Yt();)n0(ye)}function n0(e){var n=Ag(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?Ql(e):ye=n}function i0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=yg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=yg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:ef(n);default:Cg(a,n),n=ye=em(n,ha),n=Ag(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?Ql(e):ye=n}function pr(e,n,a,o){na=_s=null,ef(n),ir=null,co=0;var u=n.return;try{if(yy(e,u,n,a,be)){ln=1,Il(e,_i(a,e.current)),ye=null;return}}catch(d){if(u!==null)throw ye=u,d;ln=1,Il(e,_i(a,e.current)),ye=null;return}n.flags&32768?(Ae||o===1?e=!0:ur||(be&536870912)!==0?e=!1:(Va=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),a0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){a0(n,Va);return}e=n.return;var a=Ey(n.alternate,n,ha);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);ln===0&&(ln=5)}function a0(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);ln=6,ye=null}function s0(e,n,a,o,u,d,M,R,G){e.cancelPendingCommit=null;do Jl();while(Sn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Cu,Ze(e,a,d,M,R,G),e===je&&(ye=je=null,be=0),hr=n,Wa=e,da=a,Ff=d,If=u,jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zy(pt,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=B.p,B.p=2,M=ze,ze|=4;try{Ty(e,n,a)}finally{ze=M,B.p=u,P.T=o}}Sn=1,r0(),o0(),l0()}}function r0(){if(Sn===1){Sn=0;var e=Wa,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=ze;ze|=4;try{Hg(n,e);var d=$f,M=qp(e.containerInfo),R=d.focusedElem,G=d.selectionRange;if(M!==R&&R&&R.ownerDocument&&Wp(R.ownerDocument.documentElement,R)){if(G!==null&&Eu(R)){var ot=G.start,_t=G.end;if(_t===void 0&&(_t=ot),"selectionStart"in R)R.selectionStart=ot,R.selectionEnd=Math.min(_t,R.value.length);else{var Mt=R.ownerDocument||document,ut=Mt&&Mt.defaultView||window;if(ut.getSelection){var dt=ut.getSelection(),Wt=R.textContent.length,se=Math.min(G.start,Wt),qe=G.end===void 0?se:Math.min(G.end,Wt);!dt.extend&&se>qe&&(M=qe,qe=se,se=M);var $=Xp(R,se),W=Xp(R,qe);if($&&W&&(dt.rangeCount!==1||dt.anchorNode!==$.node||dt.anchorOffset!==$.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var rt=Mt.createRange();rt.setStart($.node,$.offset),dt.removeAllRanges(),se>qe?(dt.addRange(rt),dt.extend(W.node,W.offset)):(rt.setEnd(W.node,W.offset),dt.addRange(rt))}}}}for(Mt=[],dt=R;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var St=Mt[R];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}uc=!!Jf,$f=Jf=null}finally{ze=u,B.p=o,P.T=a}}e.current=n,Sn=2}}function o0(){if(Sn===2){Sn=0;var e=Wa,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=ze;ze|=4;try{Pg(e,n.alternate,n)}finally{ze=u,B.p=o,P.T=a}}Sn=3}}function l0(){if(Sn===4||Sn===3){Sn=0,I();var e=Wa,n=hr,a=da,o=jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,hr=Wa=null,c0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Bs(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=B.p,B.p=2,P.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var R=o[M];d(R.value,{componentStack:R.stack})}}finally{P.T=n,B.p=u}}(da&3)!==0&&Jl(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Bf?Ro++:(Ro=0,Bf=e):Ro=0,Co(0)}}function c0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Jl(){return r0(),o0(),l0(),u0()}function u0(){if(Sn!==5)return!1;var e=Wa,n=Ff;Ff=0;var a=Bs(da),o=P.T,u=B.p;try{B.p=32>a?32:a,P.T=null,a=If,If=null;var d=Wa,M=da;if(Sn=0,hr=Wa=null,da=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,Wg(d.current),Vg(d,d.current,M,a),ze=R,Co(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(At,d)}catch{}return!0}finally{B.p=u,P.T=o,c0(e,n)}}function f0(e,n,a){n=_i(a,n),n=_f(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(xe(e,2),Hi(e))}function He(e,n,a){if(e.tag===3)f0(e,e,a);else for(;n!==null;){if(n.tag===3){f0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=_i(a,e),a=hg(2),o=Ia(n,a,2),o!==null&&(dg(a,o,n,e),xe(o,2),Hi(o));break}}n=n.return}}function Vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Cy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),e=Ny.bind(null,e,n,a),n.then(e,e))}function Ny(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(be&a)===a&&(ln===4||ln===3&&(be&62914560)===be&&300>T()-ql?(ze&2)===0&&dr(e,0):Pf|=a,fr===be&&(fr=0)),Hi(e)}function h0(e,n){n===0&&(n=ie()),e=ps(e,n),e!==null&&(xe(e,n),Hi(e))}function Oy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),h0(e,a)}function Py(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),h0(e,a)}function zy(e,n){return Ee(e,n)}var $l=null,mr=null,kf=!1,tc=!1,Xf=!1,Ya=0;function Hi(e){e!==mr&&e.next===null&&(mr===null?$l=mr=e:mr=mr.next=e),tc=!0,kf||(kf=!0,Iy())}function Co(e,n){if(!Xf&&tc){Xf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Bt(42|e)+1)-1,d&=u&~(M&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,g0(o,d))}else d=be,d=at(o,o===je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||xt(o,d)||(a=!0,g0(o,d));o=o.next}while(a);Xf=!1}}function Fy(){d0()}function d0(){tc=kf=!1;var e=0;Ya!==0&&jy()&&(e=Ya);for(var n=T(),a=null,o=$l;o!==null;){var u=o.next,d=p0(o,n);d===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(mr=a)):(a=o,(e!==0||(d&3)!==0)&&(tc=!0)),o=u}Sn!==0&&Sn!==5||Co(e),Ya!==0&&(Ya=0)}function p0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Bt(d),R=1<<M,G=u[M];G===-1?((R&a)===0||(R&o)!==0)&&(u[M]=zt(R,n)):G<=n&&(e.expiredLanes|=R),d&=~R}if(n=je,a=be,a=at(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ue(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ue(o),Bs(a)){case 2:case 8:a=Et;break;case 32:a=pt;break;case 268435456:a=Ut;break;default:a=pt}return o=m0.bind(null,e),a=Ee(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ue(o),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=be;return o=at(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Kg(e,o,n),p0(e,T()),e.callbackNode!=null&&e.callbackNode===a?m0.bind(null,e):null)}function g0(e,n){if(Jl())return null;Kg(e,n,!0)}function Iy(){Ky(function(){(ze&6)!==0?Ee(vt,Fy):d0()})}function Wf(){if(Ya===0){var e=tr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Ya=e}return Ya}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function v0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function By(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=_0((u[Cn]||null).action),M=o.submitter;M&&(n=(n=M[Cn]||null)?_0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var R=new hl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var G=M?v0(u,M):new FormData(u);ff(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(R.preventDefault(),G=M?v0(u,M):new FormData(u),ff(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var qf=0;qf<Ru.length;qf++){var Yf=Ru[qf],Hy=Yf.toLowerCase(),Gy=Yf[0].toUpperCase()+Yf.slice(1);Ci(Hy,"on"+Gy)}Ci(Zp,"onAnimationEnd"),Ci(Kp,"onAnimationIteration"),Ci(Qp,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(iy,"onTransitionRun"),Ci(ay,"onTransitionStart"),Ci(sy,"onTransitionCancel"),Ci(Jp,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function x0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var R=o[M],G=R.instance,ot=R.currentTarget;if(R=R.listener,G!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=ot;try{d(u)}catch(_t){ml(_t)}u.currentTarget=null,d=G}else for(M=0;M<o.length;M++){if(R=o[M],G=R.instance,ot=R.currentTarget,R=R.listener,G!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=ot;try{d(u)}catch(_t){ml(_t)}u.currentTarget=null,d=G}}}}function Se(e,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var o=e+"__bubble";a.has(o)||(y0(n,e,2,!1),a.add(o))}function jf(e,n,a){var o=0;n&&(o|=4),y0(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[ec]){e[ec]=!0,Q.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,jf("selectionchange",!1,n))}}function y0(e,n,a,o){switch(Z0(n)){case 2:var u=gS;break;case 8:u=_S;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var R=o.stateNode.containerInfo;if(R===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;R!==null;){if(M=Ca(R),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=d=M;continue t}R=R.parentNode}}o=o.return}Tp(function(){var ot=d,_t=hu(a),Mt=[];t:{var ut=$p.get(e);if(ut!==void 0){var dt=hl,Wt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":dt=Px;break;case"focusin":Wt="focus",dt=vu;break;case"focusout":Wt="blur",dt=vu;break;case"beforeblur":case"afterblur":dt=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Ix;break;case Zp:case Kp:case Qp:dt=Ax;break;case Jp:dt=Hx;break;case"scroll":case"scrollend":dt=Sx;break;case"wheel":dt=Vx;break;case"copy":case"cut":case"paste":dt=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Dp;break;case"toggle":case"beforetoggle":dt=Xx}var se=(n&4)!==0,qe=!se&&(e==="scroll"||e==="scrollend"),$=se?ut!==null?ut+"Capture":null:ut;se=[];for(var W=ot,rt;W!==null;){var St=W;if(rt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||rt===null||$===null||(St=Kr(W,$),St!=null&&se.push(Do(W,St,rt))),qe)break;W=W.return}0<se.length&&(ut=new dt(ut,Wt,null,a,_t),Mt.push({event:ut,listeners:se}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ut&&a!==fu&&(Wt=a.relatedTarget||a.fromElement)&&(Ca(Wt)||Wt[Ai]))break t;if((dt||ut)&&(ut=_t.window===_t?_t:(ut=_t.ownerDocument)?ut.defaultView||ut.parentWindow:window,dt?(Wt=a.relatedTarget||a.toElement,dt=ot,Wt=Wt?Ca(Wt):null,Wt!==null&&(qe=c(Wt),se=Wt.tag,Wt!==qe||se!==5&&se!==27&&se!==6)&&(Wt=null)):(dt=null,Wt=ot),dt!==Wt)){if(se=Cp,St="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=Dp,St="onPointerLeave",$="onPointerEnter",W="pointer"),qe=dt==null?ut:us(dt),rt=Wt==null?ut:us(Wt),ut=new se(St,W+"leave",dt,a,_t),ut.target=qe,ut.relatedTarget=rt,St=null,Ca(_t)===ot&&(se=new se($,W+"enter",Wt,a,_t),se.target=rt,se.relatedTarget=qe,St=se),qe=St,dt&&Wt)e:{for(se=ky,$=dt,W=Wt,rt=0,St=$;St;St=se(St))rt++;St=0;for(var $t=W;$t;$t=se($t))St++;for(;0<rt-St;)$=se($),rt--;for(;0<St-rt;)W=se(W),St--;for(;rt--;){if($===W||W!==null&&$===W.alternate){se=$;break e}$=se($),W=se(W)}se=null}else se=null;dt!==null&&S0(Mt,ut,dt,se,!1),Wt!==null&&qe!==null&&S0(Mt,qe,Wt,se,!0)}}t:{if(ut=ot?us(ot):window,dt=ut.nodeName&&ut.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ut.type==="file")var Le=Ip;else if(zp(ut))if(Bp)Le=ty;else{Le=Jx;var Qt=Qx}else dt=ut.nodeName,!dt||dt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?ot&&Ri(ot.elementType)&&(Le=Ip):Le=$x;if(Le&&(Le=Le(e,ot))){Fp(Mt,Le,a,_t);break t}Qt&&Qt(e,ut,ot),e==="focusout"&&ot&&ut.type==="number"&&ot.memoizedProps.value!=null&&Dn(ut,"number",ut.value)}switch(Qt=ot?us(ot):window,e){case"focusin":(zp(Qt)||Qt.contentEditable==="true")&&(qs=Qt,bu=ot,ao=null);break;case"focusout":ao=bu=qs=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Yp(Mt,a,_t);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Yp(Mt,a,_t)}var pe;if(yu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Ws?Op(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Up&&a.locale!=="ko"&&(Ws||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ws&&(pe=Ap()):(Ua=_t,mu="value"in Ua?Ua.value:Ua.textContent,Ws=!0)),Qt=nc(ot,Te),0<Qt.length&&(Te=new wp(Te,e,null,a,_t),Mt.push({event:Te,listeners:Qt}),pe?Te.data=pe:(pe=Pp(a),pe!==null&&(Te.data=pe)))),(pe=qx?Yx(e,a):jx(e,a))&&(Te=nc(ot,"onBeforeInput"),0<Te.length&&(Qt=new wp("onBeforeInput","beforeinput",null,a,_t),Mt.push({event:Qt,listeners:Te}),Qt.data=pe)),By(Mt,e,ot,a,_t)}x0(Mt,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Kr(e,a),u!=null&&o.unshift(Do(e,u,d)),u=Kr(e,n),u!=null&&o.push(Do(e,u,d))),e.tag===3)return o;e=e.return}return[]}function ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var R=a,G=R.alternate,ot=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||ot===null||(G=ot,u?(ot=Kr(a,d),ot!=null&&M.unshift(Do(a,ot,G))):u||(ot=Kr(a,d),ot!=null&&M.push(Do(a,ot,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Xy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function M0(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Wy,"")}function E0(e,n){return n=M0(n),M0(e)===n}function We(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":Vs(e,o,d);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Zt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xx.get(a)||a,Zt(e,a,o))}}function Qf(e,n,a,o,u,d){switch(a){case"style":Vs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?yn(e,o):(typeof o=="number"||typeof o=="bigint")&&yn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Cn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Zt(e,a,o)}}}function Fn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,d,M,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),o&&We(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var R=d=M=u=null,G=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":M=_t;break;case"checked":G=_t;break;case"defaultChecked":ot=_t;break;case"value":d=_t;break;case"defaultValue":R=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:We(e,n,o,_t,a,null)}}Qi(e,d,R,G,ot,M,u,!1);return;case"select":Se("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":M=R;break;case"multiple":o=R;default:We(e,n,u,R,a,null)}n=d,a=M,e.multiple=!!o,n!=null?mi(e,!!o,n,!1):a!=null&&mi(e,!!o,a,!0);return;case"textarea":Se("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(R=a[M],R!=null))switch(M){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:We(e,n,M,R,a,null)}Un(e,o,u,d);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:We(e,n,G,o,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)Se(wo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,ot,o,a,null)}return;default:if(Ri(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&Qf(e,n,_t,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&We(e,n,R,o,a,null))}function qy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,R=null,G=null,ot=null,_t=null;for(dt in a){var Mt=a[dt];if(a.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=Mt;default:o.hasOwnProperty(dt)||We(e,n,dt,null,o,Mt)}}for(var ut in o){var dt=o[ut];if(Mt=a[ut],o.hasOwnProperty(ut)&&(dt!=null||Mt!=null))switch(ut){case"type":d=dt;break;case"name":u=dt;break;case"checked":ot=dt;break;case"defaultChecked":_t=dt;break;case"value":M=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==Mt&&We(e,n,ut,dt,o,Mt)}}wn(e,M,R,G,ot,_t,d,u);return;case"select":dt=M=R=ut=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":dt=G;default:o.hasOwnProperty(d)||We(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":ut=d;break;case"defaultValue":R=d;break;case"multiple":M=d;default:d!==G&&We(e,n,u,d,o,G)}n=R,a=M,o=dt,ut!=null?mi(e,!!a,ut,!1):!!o!=!!a&&(n!=null?mi(e,!!a,n,!0):mi(e,!!a,a?[]:"",!1));return;case"textarea":dt=ut=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(e,n,R,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":ut=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&We(e,n,M,u,o,d)}Ie(e,ut,dt);return;case"option":for(var Wt in a)if(ut=a[Wt],a.hasOwnProperty(Wt)&&ut!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:We(e,n,Wt,null,o,ut)}for(G in o)if(ut=o[G],dt=a[G],o.hasOwnProperty(G)&&ut!==dt&&(ut!=null||dt!=null))switch(G){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:We(e,n,G,ut,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ut=a[se],a.hasOwnProperty(se)&&ut!=null&&!o.hasOwnProperty(se)&&We(e,n,se,null,o,ut);for(ot in o)if(ut=o[ot],dt=a[ot],o.hasOwnProperty(ot)&&ut!==dt&&(ut!=null||dt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:We(e,n,ot,ut,o,dt)}return;default:if(Ri(n)){for(var qe in a)ut=a[qe],a.hasOwnProperty(qe)&&ut!==void 0&&!o.hasOwnProperty(qe)&&Qf(e,n,qe,void 0,o,ut);for(_t in o)ut=o[_t],dt=a[_t],!o.hasOwnProperty(_t)||ut===dt||ut===void 0&&dt===void 0||Qf(e,n,_t,ut,o,dt);return}}for(var $ in a)ut=a[$],a.hasOwnProperty($)&&ut!=null&&!o.hasOwnProperty($)&&We(e,n,$,null,o,ut);for(Mt in o)ut=o[Mt],dt=a[Mt],!o.hasOwnProperty(Mt)||ut===dt||ut==null&&dt==null||We(e,n,Mt,ut,o,dt)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,R=u.duration;if(d&&R&&b0(M)){for(M=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ot=G.startTime;if(ot>R)break;var _t=G.transferSize,Mt=G.initiatorType;_t&&b0(Mt)&&(G=G.responseEnd,M+=_t*(G<R?1:(R-ot)/(G-ot)))}if(--o,n+=8*(d+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function T0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function jy(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(e){return C0.resolve(null).then(e).catch(Qy)}:R0;function Qy(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function w0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),xr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var M=d.nextSibling,R=d.nodeName;d[cs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&Uo(e.ownerDocument.body);a=u}while(a);xr(n)}function D0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function $y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function U0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sh=null;function L0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function N0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function O0(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zr(e)}var Ei=new Map,P0=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=B.d;B.d={f:eS,r:nS,D:iS,C:aS,L:sS,m:rS,X:lS,S:oS,M:cS};function eS(){var e=pa.f(),n=Zl();return e||n}function nS(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?Jm(n):pa.r(e)}var gr=typeof document>"u"?null:document;function z0(e,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=ce(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),P0.has(u)||(P0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Fn(n,"link",e),C(n),o.head.appendChild(n)))}}function iS(e){pa.D(e),z0("dns-prefetch",e,null)}function aS(e,n){pa.C(e,n),z0("preconnect",e,n)}function sS(e,n,a){pa.L(e,n,a);var o=gr;if(o&&e&&n){var u='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ce(a.imageSizes)+'"]')):u+='[href="'+ce(e)+'"]';var d=u;switch(n){case"style":d=_r(e);break;case"script":d=vr(e)}Ei.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ei.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Fn(n,"link",e),C(n),o.head.appendChild(n)))}}function rS(e,n){pa.m(e,n);var a=gr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ce(o)+'"][href="'+ce(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vr(e)}if(!Ei.has(d)&&(e=_({rel:"modulepreload",href:e},n),Ei.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Fn(o,"link",e),C(o),a.head.appendChild(o)}}}function oS(e,n,a){pa.S(e,n,a);var o=gr;if(o&&e){var u=Da(o).hoistableStyles,d=_r(e);n=n||"default";var M=u.get(d);if(!M){var R={loading:0,preload:null};if(M=o.querySelector(Lo(d)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ei.get(d))&&rh(e,a);var G=M=o.createElement("link");C(G),Fn(G,"link",e),G._p=new Promise(function(ot,_t){G.onload=ot,G.onerror=_t}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:R},u.set(d,M)}}}function lS(e,n){pa.X(e,n);var a=gr;if(a&&e){var o=Da(a).hoistableScripts,u=vr(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=_({src:e,async:!0},n),(n=Ei.get(u))&&oh(e,n),d=a.createElement("script"),C(d),Fn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function cS(e,n){pa.M(e,n);var a=gr;if(a&&e){var o=Da(a).hoistableScripts,u=vr(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Ei.get(u))&&oh(e,n),d=a.createElement("script"),C(d),Fn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function F0(e,n,a,o){var u=(u=it.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=Da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var d=Da(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Lo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),Ei.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(e,a),d||uS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=Da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+ce(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function I0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function uS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Fn(n,"link",a),C(n),e.head.appendChild(n))}function vr(e){return'[src="'+ce(e)+'"]'}function No(e){return"script[async]"+e}function B0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ce(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Fn(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=_r(a.href);var d=e.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=I0(a),(u=Ei.get(u))&&rh(o,u),d=(e.ownerDocument||e).createElement("link"),C(d);var M=d;return M._p=new Promise(function(R,G){M.onload=R,M.onerror=G}),Fn(d,"link",o),n.state.loading|=4,sc(d,a.precedence,e),n.instance=d;case"script":return d=vr(a.src),(u=e.querySelector(No(d)))?(n.instance=u,C(u),u):(o=a,(u=Ei.get(d))&&(o=_({},a),oh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Fn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var R=o[M];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function H0(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[cs]||d[pn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var R=o.get(M);R?R.push(d):o.set(M,[d])}}return o}function G0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function V0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),d=n.querySelector(Lo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=I0(o),(u=Ei.get(u))&&rh(o,u),d=d.createElement("link"),C(d);var M=d;M._p=new Promise(function(R,G){M.onload=R,M.onerror=G}),Fn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function dS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*Yy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(pS,e),lc=null,oc.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Oo={$$typeof:U,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function mS(e,n,a,o,u,d,M,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=te(0),this.hiddenUpdates=te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function k0(e,n,a,o,u,d,M,R,G,ot,_t,Mt){return e=new mS(e,n,a,M,G,ot,_t,Mt,R),n=1,d===!0&&(n|=24),d=ii(3,null,null,n),e.current=d,d.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Xu(d),e}function X0(e){return e?(e=Zs,e):Zs}function W0(e,n,a,o,u,d){u=X0(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ia(e,o,n),a!==null&&(Jn(a,e,n),fo(a,e,n))}function q0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){q0(e,n),(e=e.alternate)&&q0(e,n)}function Y0(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&Jn(n,e,67108864),ch(e,67108864)}}function j0(e){if(e.tag===13||e.tag===31){var n=li();n=qr(n);var a=ps(e,n);a!==null&&Jn(a,e,n),ch(e,n)}}var uc=!0;function gS(e,n,a,o){var u=P.T;P.T=null;var d=B.p;try{B.p=2,uh(e,n,a,o)}finally{B.p=d,P.T=u}}function _S(e,n,a,o){var u=P.T;P.T=null;var d=B.p;try{B.p=8,uh(e,n,a,o)}finally{B.p=d,P.T=u}}function uh(e,n,a,o){if(uc){var u=fh(o);if(u===null)Kf(e,n,o,fc,a),K0(e,o);else if(xS(u,e,n,a,o))o.stopPropagation();else if(K0(e,o),n&4&&-1<vS.indexOf(e)){for(;u!==null;){var d=wa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=j(d.pendingLanes);if(M!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var G=1<<31-Bt(M);R.entanglements[1]|=G,M&=~G}Hi(d),(ze&6)===0&&(Yl=T()+500,Co(0))}}break;case 31:case 13:R=ps(d,2),R!==null&&Jn(R,d,2),Zl(),ch(d,2)}if(d=fh(o),d===null&&Kf(e,n,o,fc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Kf(e,n,o,null,a)}}function fh(e){return e=hu(e),hh(e)}var fc=null;function hh(e){if(fc=null,e=Ca(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case vt:return 2;case Et:return 8;case pt:case jt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var dh=!1,Za=null,Ka=null,Qa=null,Po=new Map,zo=new Map,Ja=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,n){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Fo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&Y0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xS(e,n,a,o,u){switch(n){case"focusin":return Za=Fo(Za,e,n,a,o,u),!0;case"dragenter":return Ka=Fo(Ka,e,n,a,o,u),!0;case"mouseover":return Qa=Fo(Qa,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,Fo(Po.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,zo.set(d,Fo(zo.get(d)||null,e,n,a,o,u)),!0}return!1}function Q0(e){var n=Ca(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,zi(e.priority,function(){j0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,zi(e.priority,function(){j0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=wa(a),n!==null&&Y0(n),e.blockedOn=a,!1;n.shift()}return!0}function J0(e,n,a){hc(e)&&a.delete(n)}function yS(){dh=!1,Za!==null&&hc(Za)&&(Za=null),Ka!==null&&hc(Ka)&&(Ka=null),Qa!==null&&hc(Qa)&&(Qa=null),Po.forEach(J0),zo.forEach(J0)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yS)))}var pc=null;function $0(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var d=wa(a);d!==null&&(e.splice(n,3),n-=3,ff(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xr(e){function n(G){return dc(G,e)}Za!==null&&dc(Za,e),Ka!==null&&dc(Ka,e),Qa!==null&&dc(Qa,e),Po.forEach(n),zo.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Q0(a),a.blockedOn===null&&Ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[Cn]||null;if(typeof d=="function")M||$0(a);else if(M){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[Cn]||null)R=M.formAction;else if(hh(u)!==null)continue}else R=M.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),$0(a)}}}function t_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}mc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();W0(a,o,e,n,null,null)},mc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;W0(e.current,2,null,e,null,null),Zl(),n[Ai]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,e),a===0&&Q0(e)}};var e_=t.version;if(e_!=="19.2.3")throw Error(s(527,e_,"19.2.3"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{At=gc.inject(SS),Rt=gc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=lg,d=cg,M=ug;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=k0(e,1,!1,null,null,a,o,null,u,d,M,t_),e[Ai]=n.current,Zf(e),new ph(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=lg,M=cg,R=ug,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=k0(e,1,!0,n,a??null,o,u,G,d,M,R,t_),n.context=X0(null),a=n.current,o=li(),o=qr(o),u=Fa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,xe(n,a),Hi(n),e[Ai]=n.current,Zf(e),new mc(n)},Bo.version="19.2.3",Bo}var f_;function US(){if(f_)return _h.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=DS(),_h.exports}var LS=US();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="182",zr={ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,h_=1,OS=2,kc=1,PS=2,Ko=3,ls=0,ei=1,Sa=2,Ea=0,Fr=1,d_=2,p_=3,m_=4,zS=5,Ns=100,FS=101,IS=102,BS=103,HS=104,GS=200,VS=201,kS=202,XS=203,ad=204,sd=205,WS=206,qS=207,YS=208,jS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,rd=0,od=1,ld=2,Br=3,cd=4,ud=5,fd=6,hd=7,Cv=0,tM=1,eM=2,Wi=0,wv=1,Dv=2,Uv=3,Lv=4,Nv=5,Ov=6,Pv=7,zv=300,Fs=301,Hr=302,dd=303,pd=304,iu=306,md=1e3,Ma=1001,gd=1002,In=1003,nM=1004,_c=1005,Vn=1006,Sh=1007,Ps=1008,hi=1009,Fv=1010,Iv=1011,$o=1012,op=1013,ji=1014,ki=1015,Ta=1016,lp=1017,cp=1018,tl=1020,Bv=35902,Hv=35899,Gv=1021,Vv=1022,Pi=1023,Aa=1026,zs=1027,kv=1028,up=1029,Gr=1030,fp=1031,hp=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,_d=35840,vd=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,bd=37488,Td=37489,Ad=37490,Rd=37491,Cd=37808,wd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,zd=37816,Fd=37817,Id=37818,Bd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,jd=36286,iM=3200,Xv=0,aM=1,rs="",Ti="srgb",Vr="srgb-linear",Jc="linear",Ge="srgb",yr=7680,g_=519,sM=512,rM=513,oM=514,dp=515,lM=516,cM=517,pp=518,uM=519,__=35044,v_="300 es",Xi=2e3,$c=2001;function Wv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=tu("canvas");return r.style.display="block",r}const x_={};function y_(...r){const t="THREE."+r.shift();console.log(t,...r)}function oe(...r){const t="THREE."+r.shift();console.warn(t,...r)}function we(...r){const t="THREE."+r.shift();console.error(t,...r)}function el(...r){const t=r.join(" ");t in x_||(x_[t]=!0,oe(...r))}function hM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=Math.PI/180,Zd=180/Math.PI;function al(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function Me(r,t,i){return Math.max(t,Math.min(i,r))}function dM(r,t){return(r%t+t)%t}function Mh(r,t,i){return(1-i)*r+i*t}function Ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const pM={DEG2RAD:jc};class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ra{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],y=c[f+1],E=c[f+2],b=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=b;return}if(_!==b||m!==x||p!==y||g!==E){let S=m*x+p*y+g*E+_*b;S<0&&(x=-x,y=-y,E=-E,b=-b,S=-S);let v=1-h;if(S<.9995){const D=Math.acos(S),U=Math.sin(D);v=Math.sin(v*D)/U,h=Math.sin(h*D)/U,m=m*v+x*h,p=p*v+y*h,g=g*v+E*h,_=_*v+b*h}else{m=m*v+x*h,p=p*v+y*h,g=g*v+E*h,_=_*v+b*h;const D=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=D,p*=D,g*=D,_*=D}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[i]=h*E+g*_+m*y-p*x,t[i+1]=m*E+g*x+p*_-h*y,t[i+2]=p*E+g*y+h*x-m*_,t[i+3]=g*E-h*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),x=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"YZX":this._x=x*g*_+p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_-x*y*E;break;case"XZY":this._x=x*g*_-p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_+x*y*E;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,i=0,s=0){H.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(S_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(S_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new H,S_=new Ra;class me{constructor(t,i,s,l,c,f,h,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],E=s[8],b=l[0],S=l[3],v=l[6],D=l[1],U=l[4],w=l[7],N=l[2],z=l[5],O=l[8];return c[0]=f*b+h*D+m*N,c[3]=f*S+h*U+m*z,c[6]=f*v+h*w+m*O,c[1]=p*b+g*D+_*N,c[4]=p*S+g*U+_*z,c[7]=p*v+g*w+_*O,c[2]=x*b+y*D+E*N,c[5]=x*S+y*U+E*z,c[8]=x*v+y*w+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,x=h*m-g*c,y=p*c-f*m,E=i*_+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*p-g*s)*b,t[2]=(h*s-l*f)*b,t[3]=x*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-h*i)*b,t[6]=y*b,t[7]=(s*m-p*i)*b,t[8]=(f*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(bh.makeScale(t,i)),this}rotate(t){return this.premultiply(bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new me,M_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?Jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:s,transfer:Jc,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),r}const De=mM();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class gM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=tu("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Th(l[f].image)):c.push(Th(l[f]))}else c=Th(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Th(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let vM=0;const Ah=new H;class Wn extends Is{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Vn,f=Ps,h=Pi,m=hi,p=Wn.DEFAULT_ANISOTROPY,g=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=al(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=zv;Wn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],E=m[9],b=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(y+1)/2,N=(v+1)/2,z=(g+x)/4,O=(_+b)/4,q=(E+S)/4;return U>w&&U>N?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=z/s,c=O/s):w>N?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=z/l,c=q/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=O/c,l=q/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(_-b)/D,this.z=(x-g)/D,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Is{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Wn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new mp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends xM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class qv extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new H(1/0,1/0,1/0),i=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),xc.subVectors(this.max,Go),Mr.subVectors(t.a,Go),Er.subVectors(t.b,Go),br.subVectors(t.c,Go),ts.subVectors(Er,Mr),es.subVectors(br,Er),Rs.subVectors(Mr,br);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Rs.z,Rs.y,ts.z,0,-ts.x,es.z,0,-es.x,Rs.z,0,-Rs.x,-ts.y,ts.x,0,-es.y,es.x,0,-Rs.y,Rs.x,0];return!Rh(i,Mr,Er,br,xc)||(i=[1,0,0,0,1,0,0,0,1],!Rh(i,Mr,Er,br,xc))?!1:(yc.crossVectors(ts,es),i=[yc.x,yc.y,yc.z],Rh(i,Mr,Er,br,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new H,new H,new H,new H,new H,new H,new H,new H],Ui=new H,vc=new sl,Mr=new H,Er=new H,br=new H,ts=new H,es=new H,Rs=new H,Go=new H,xc=new H,yc=new H,Cs=new H;function Rh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Cs.fromArray(r,c);const h=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const SM=new sl,Vo=new H,Ch=new H;class au{constructor(t=new H,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):SM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Ch)),this.expandByPoint(Vo.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new H,wh=new H,Sc=new H,ns=new H,Dh=new H,Mc=new H,Uh=new H;class su{constructor(t=new H,i=new H(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wh.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),ns.copy(this.origin).sub(wh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Sc),h=ns.dot(this.direction),m=-ns.dot(Sc),p=ns.lengthSq(),g=Math.abs(1-f*f);let _,x,y,E;if(g>0)if(_=f*m-h,x=f*h-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const b=1/g;_*=b,x*=b,y=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(wh).addScaledVector(Sc,x),y}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){Dh.subVectors(i,t),Mc.subVectors(s,t),Uh.crossVectors(Dh,Mc);let f=this.direction.dot(Uh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ns.subVectors(this.origin,t);const m=h*this.direction.dot(Mc.crossVectors(ns,Mc));if(m<0)return null;const p=h*this.direction.dot(Dh.cross(ns));if(p<0||m+p>f)return null;const g=-h*ns.dot(Uh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,f,h,m,p,g,_,x,y,E,b,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,_,x,y,E,b,S)}set(t,i,s,l,c,f,h,m,p,g,_,x,y,E,b,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=b,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),f=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,E=h*g,b=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=x-b*p,i[9]=-h*m,i[2]=b-x*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,E=p*g,b=p*_;i[0]=x+b*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=y*h-E,i[6]=b+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,E=p*g,b=p*_;i[0]=x-b*h,i[4]=-f*_,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*g,i[9]=b-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*_,E=h*g,b=h*_;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+b,i[1]=m*_,i[5]=b*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,E=h*m,b=h*p;i[0]=m*g,i[4]=b-x*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+E,i[10]=x-b*_}else if(t.order==="XZY"){const x=f*m,y=f*p,E=h*m,b=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+b,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=h*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MM,t,EM)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),is.crossVectors(s,ci),is.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),is.crossVectors(s,ci)),is.normalize(),Ec.crossVectors(ci,is),l[0]=is.x,l[4]=Ec.x,l[8]=ci.x,l[1]=is.y,l[5]=Ec.y,l[9]=ci.y,l[2]=is.z,l[6]=Ec.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],E=s[2],b=s[6],S=s[10],v=s[14],D=s[3],U=s[7],w=s[11],N=s[15],z=l[0],O=l[4],q=l[8],A=l[12],L=l[1],V=l[5],tt=l[9],X=l[13],st=l[2],et=l[6],P=l[10],B=l[14],K=l[3],mt=l[7],gt=l[11],F=l[15];return c[0]=f*z+h*L+m*st+p*K,c[4]=f*O+h*V+m*et+p*mt,c[8]=f*q+h*tt+m*P+p*gt,c[12]=f*A+h*X+m*B+p*F,c[1]=g*z+_*L+x*st+y*K,c[5]=g*O+_*V+x*et+y*mt,c[9]=g*q+_*tt+x*P+y*gt,c[13]=g*A+_*X+x*B+y*F,c[2]=E*z+b*L+S*st+v*K,c[6]=E*O+b*V+S*et+v*mt,c[10]=E*q+b*tt+S*P+v*gt,c[14]=E*A+b*X+S*B+v*F,c[3]=D*z+U*L+w*st+N*K,c[7]=D*O+U*V+w*et+N*mt,c[11]=D*q+U*tt+w*P+N*gt,c[15]=D*A+U*X+w*B+N*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],E=t[3],b=t[7],S=t[11],v=t[15],D=m*y-p*x,U=h*y-p*_,w=h*x-m*_,N=f*y-p*g,z=f*x-m*g,O=f*_-h*g;return i*(b*D-S*U+v*w)-s*(E*D-S*N+v*z)+l*(E*U-b*N+v*O)-c*(E*w-b*z+S*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],E=t[12],b=t[13],S=t[14],v=t[15],D=_*S*p-b*x*p+b*m*y-h*S*y-_*m*v+h*x*v,U=E*x*p-g*S*p-E*m*y+f*S*y+g*m*v-f*x*v,w=g*b*p-E*_*p+E*h*y-f*b*y-g*h*v+f*_*v,N=E*_*m-g*b*m-E*h*x+f*b*x+g*h*S-f*_*S,z=i*D+s*U+l*w+c*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=D*O,t[1]=(b*x*c-_*S*c-b*l*y+s*S*y+_*l*v-s*x*v)*O,t[2]=(h*S*c-b*m*c+b*l*p-s*S*p-h*l*v+s*m*v)*O,t[3]=(_*m*c-h*x*c-_*l*p+s*x*p+h*l*y-s*m*y)*O,t[4]=U*O,t[5]=(g*S*c-E*x*c+E*l*y-i*S*y-g*l*v+i*x*v)*O,t[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*v-i*m*v)*O,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*y+i*m*y)*O,t[8]=w*O,t[9]=(E*_*c-g*b*c-E*s*y+i*b*y+g*s*v-i*_*v)*O,t[10]=(f*b*c-E*h*c+E*s*p-i*b*p-f*s*v+i*h*v)*O,t[11]=(g*h*c-f*_*c-g*s*p+i*_*p+f*s*y-i*h*y)*O,t[12]=N*O,t[13]=(g*b*l-E*_*l+E*s*x-i*b*x-g*s*S+i*_*S)*O,t[14]=(E*h*l-f*b*l-E*s*m+i*b*m+f*s*S-i*h*S)*O,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*x+i*h*x)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,x=c*p,y=c*g,E=c*_,b=f*g,S=f*_,v=h*_,D=m*p,U=m*g,w=m*_,N=s.x,z=s.y,O=s.z;return l[0]=(1-(b+v))*N,l[1]=(y+w)*N,l[2]=(E-U)*N,l[3]=0,l[4]=(y-w)*z,l[5]=(1-(x+v))*z,l[6]=(S+D)*z,l[7]=0,l[8]=(E+U)*O,l[9]=(S-D)*O,l[10]=(1-(x+b))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Tr.set(l[0],l[1],l[2]).length();const f=Tr.set(l[4],l[5],l[6]).length(),h=Tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Li.copy(this);const p=1/c,g=1/f,_=1/h;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Xi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let E,b;if(m)E=c/(f-c),b=f*c/(f-c);else if(h===Xi)E=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===$c)E=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Xi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,b;if(m)E=1/(f-c),b=f/(f-c);else if(h===Xi)E=-2/(f-c),b=-(f+c)/(f-c);else if(h===$c)E=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new H,Li=new tn,MM=new H(0,0,0),EM=new H(1,1,1),is=new H,Ec=new H,ci=new H,b_=new tn,T_=new Ra;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T_.setFromEuler(this),this.setFromQuaternion(T_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const A_=new H,Ar=new Ra,_a=new tn,bc=new H,ko=new H,TM=new H,AM=new Ra,R_=new H(1,0,0),C_=new H(0,1,0),w_=new H(0,0,1),D_={type:"added"},RM={type:"removed"},Rr={type:"childadded",child:null},Lh={type:"childremoved",child:null};class Rn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new H,i=new Zi,s=new Ra,l=new H(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new me}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(R_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(w_,t)}translateOnAxis(t,i){return A_.copy(t).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(R_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(w_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(ko,bc,this.up):_a.lookAt(bc,ko,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(_a),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(RM),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,TM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,AM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new H(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new H,va=new H,Nh=new H,xa=new H,Cr=new H,wr=new H,U_=new H,Oh=new H,Ph=new H,zh=new H,Fh=new cn,Ih=new cn,Bh=new cn;class Oi{constructor(t=new H,i=new H,s=new H){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),va.subVectors(s,i),Nh.subVectors(t,i);const f=Ni.dot(Ni),h=Ni.dot(va),m=Ni.dot(Nh),p=va.dot(va),g=va.dot(Nh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(f,xa.y),m.addScaledVector(h,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Fh.setScalar(0),Ih.setScalar(0),Bh.setScalar(0),Fh.fromBufferAttribute(t,i),Ih.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Fh,c.x),f.addScaledVector(Ih,c.y),f.addScaledVector(Bh,c.z),f}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),va.subVectors(t,i),Ni.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ni.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Oi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Cr.subVectors(l,s),wr.subVectors(c,s),Oh.subVectors(t,s);const m=Cr.dot(Oh),p=wr.dot(Oh);if(m<=0&&p<=0)return i.copy(s);Ph.subVectors(t,l);const g=Cr.dot(Ph),_=wr.dot(Ph);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Cr,f);zh.subVectors(t,c);const y=Cr.dot(zh),E=wr.dot(zh);if(E>=0&&y<=E)return i.copy(c);const b=y*p-m*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(wr,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return U_.subVectors(c,l),h=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(U_,h);const v=1/(S+b+x);return f=b*v,h=x*v,i.copy(s).addScaledVector(Cr,f).addScaledVector(wr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Hh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=dM(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Hh(f,c,t+1/3),this.g=Hh(f,c,t),this.b=Hh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=Yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return De.workingToColorSpace(Gn.copy(this),t),Math.round(Me(Gn.r*255,0,255))*65536+Math.round(Me(Gn.g*255,0,255))*256+Math.round(Me(Gn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Ti){De.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(as),this.setHSL(as.h+t,as.s+i,as.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(as),t.getHSL(Tc);const s=Mh(as.h,Tc.h,i),l=Mh(as.s,Tc.s,i),c=Mh(as.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Re;Re.NAMES=Yv;let CM=0;class Xr extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Fr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=sd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ad&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nl extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new H,Ac=new ue;let wM=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=__,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==__&&(t.usage=this.usage),t}}class jv extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Zv extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class rn extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let DM=0;const bi=new tn,Gh=new Rn,Dr=new H,ui=new sl,Xo=new sl,An=new H;class qn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wv(t)?Zv:jv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,i,s){return bi.makeTranslation(t,i,s),this.applyMatrix4(bi),this}scale(t,i,s){return bi.makeScale(t,i,s),this.applyMatrix4(bi),this}lookAt(t){return Gh.lookAt(t),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new rn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Xo.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ui.min,Xo.min),ui.expandByPoint(An),An.addVectors(ui.max,Xo.max),ui.expandByPoint(An)):(ui.expandByPoint(Xo.min),ui.expandByPoint(Xo.max))}ui.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)An.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)An.fromBufferAttribute(h,p),m&&(Dr.fromBufferAttribute(t,p),An.add(Dr)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new H,m[q]=new H;const p=new H,g=new H,_=new H,x=new ue,y=new ue,E=new ue,b=new H,S=new H;function v(q,A,L){p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),x.fromBufferAttribute(c,q),y.fromBufferAttribute(c,A),E.fromBufferAttribute(c,L),g.sub(p),_.sub(p),y.sub(x),E.sub(x);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[q].add(b),h[A].add(b),h[L].add(b),m[q].add(S),m[A].add(S),m[L].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let q=0,A=D.length;q<A;++q){const L=D[q],V=L.start,tt=L.count;for(let X=V,st=V+tt;X<st;X+=3)v(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const U=new H,w=new H,N=new H,z=new H;function O(q){N.fromBufferAttribute(l,q),z.copy(N);const A=h[q];U.copy(A),U.sub(N.multiplyScalar(N.dot(A))).normalize(),w.crossVectors(z,A);const V=w.dot(m[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,A=D.length;q<A;++q){const L=D[q],V=L.start,tt=L.count;for(let X=V,st=V+tt;X<st;X+=3)O(t.getX(X+0)),O(t.getX(X+1)),O(t.getX(X+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new H,c=new H,f=new H,h=new H,m=new H,p=new H,g=new H,_=new H;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),b=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let b=0,S=m.length;b<S;b++){h.isInterleavedBufferAttribute?y=m[b]*h.data.stride+h.offset:y=m[b]*g;for(let v=0;v<g;v++)x[E++]=p[y++]}return new Yi(x,g,_)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new tn,ws=new su,Rc=new au,N_=new H,Cc=new H,wc=new H,Dc=new H,Vh=new H,Uc=new H,O_=new H,Lc=new H;class di extends Rn{constructor(t=new qn,i=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Vh.fromBufferAttribute(_,t),f?Uc.addScaledVector(Vh,g):Uc.addScaledVector(Vh.sub(i),g))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Rc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Rc,N_)===null||ws.origin.distanceToSquared(N_)>(t.far-t.near)**2))&&(L_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(L_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=f[S.materialIndex],D=Math.max(S.start,y.start),U=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=D,N=U;w<N;w+=3){const z=h.getX(w),O=h.getX(w+1),q=h.getX(w+2);l=Nc(this,v,t,s,p,g,_,z,O,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=E,v=b;S<v;S+=3){const D=h.getX(S),U=h.getX(S+1),w=h.getX(S+2);l=Nc(this,f,t,s,p,g,_,D,U,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=f[S.materialIndex],D=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let w=D,N=U;w<N;w+=3){const z=w,O=w+1,q=w+2;l=Nc(this,v,t,s,p,g,_,z,O,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let S=E,v=b;S<v;S+=3){const D=S,U=S+1,w=S+2;l=Nc(this,f,t,s,p,g,_,D,U,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function UM(r,t,i,s,l,c,f,h){let m;if(t.side===ei?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ls,h),m===null)return null;Lc.copy(h),Lc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:r}}function Nc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Cc),r.getVertexPosition(m,wc),r.getVertexPosition(p,Dc);const g=UM(r,t,i,s,Cc,wc,Dc,O_);if(g){const _=new H;Oi.getBarycoord(O_,Cc,wc,Dc,_),l&&(g.uv=Oi.getInterpolatedAttribute(l,h,m,p,_,new ue)),c&&(g.uv1=Oi.getInterpolatedAttribute(c,h,m,p,_,new ue)),f&&(g.normal=Oi.getInterpolatedAttribute(f,h,m,p,_,new H),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new H,materialIndex:0};Oi.getNormal(Cc,wc,Dc,x.normal),g.face=x,g.barycoord=_}return g}class rl extends qn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(_,2));function E(b,S,v,D,U,w,N,z,O,q,A){const L=w/O,V=N/q,tt=w/2,X=N/2,st=z/2,et=O+1,P=q+1;let B=0,K=0;const mt=new H;for(let gt=0;gt<P;gt++){const F=gt*V-X;for(let J=0;J<et;J++){const ft=J*L-tt;mt[b]=ft*D,mt[S]=F*U,mt[v]=st,p.push(mt.x,mt.y,mt.z),mt[b]=0,mt[S]=0,mt[v]=z>0?1:-1,g.push(mt.x,mt.y,mt.z),_.push(J/O),_.push(1-gt/q),B+=1}}for(let gt=0;gt<q;gt++)for(let F=0;F<O;F++){const J=x+F+et*gt,ft=x+F+et*(gt+1),bt=x+(F+1)+et*(gt+1),wt=x+(F+1)+et*gt;m.push(J,ft,wt),m.push(ft,bt,wt),K+=6}h.addGroup(y,K,A),y+=K,x+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Xn(r){const t={};for(let i=0;i<r.length;i++){const s=kr(r[i]);for(const l in s)t[l]=s[l]}return t}function LM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Kv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const NM={clone:kr,merge:Xn};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=LM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Qv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new H,P_=new ue,z_=new ue;class fi extends Qv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,i){return this.getViewBounds(t,P_,z_),i.subVectors(z_,P_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class zM extends Rn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new fi(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const f=new fi(Ur,Lr,t,i);f.layers=this.layers,this.add(f);const h=new fi(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const m=new fi(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new fi(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===$c)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Jv extends Wn{constructor(t=[],i=Fs,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $v extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Jv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:Ea});c.uniforms.tEquirect.value=i;const f=new di(l,c),h=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Vn),new zM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Oc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,s),v=this._getHandJoint(p,b);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class IM extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class BM extends Wn{constructor(t=null,i=1,s=1,l,c,f,h,m,p=In,g=In,_,x){super(null,f,h,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new H,HM=new H,GM=new me;class ya{constructor(t=new H(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Xh.subVectors(s,i).cross(HM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||GM.getNormalMatrix(t),l=this.coplanarPoint(Xh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new au,VM=new ue(.5,.5),Pc=new H;class _p{constructor(t=new ya,i=new ya,s=new ya,l=new ya,c=new ya,f=new ya){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],E=c[8],b=c[9],S=c[10],v=c[11],D=c[12],U=c[13],w=c[14],N=c[15];if(l[0].setComponents(p-f,y-g,v-E,N-D).normalize(),l[1].setComponents(p+f,y+g,v+E,N+D).normalize(),l[2].setComponents(p+h,y+_,v+b,N+U).normalize(),l[3].setComponents(p-h,y-_,v-b,N-U).normalize(),s)l[4].setComponents(m,x,S,w).normalize(),l[5].setComponents(p-m,y-x,v-S,N-w).normalize();else if(l[4].setComponents(p-m,y-x,v-S,N-w).normalize(),i===Xi)l[5].setComponents(p+m,y+x,v+S,N+w).normalize();else if(i===$c)l[5].setComponents(m,x,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=VM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vp extends Xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eu=new H,nu=new H,F_=new tn,Wo=new su,zc=new au,Wh=new H,I_=new H;class tx extends Rn{constructor(t=new qn,i=new vp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)eu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new rn(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;F_.copy(l).invert(),Wo.copy(t.ray).applyMatrix4(F_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let b=y,S=E-1;b<S;b+=p){const v=g.getX(b),D=g.getX(b+1),U=Fc(this,t,Wo,m,v,D,b);U&&i.push(U)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(y),v=Fc(this,t,Wo,m,b,S,E-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let b=y,S=E-1;b<S;b+=p){const v=Fc(this,t,Wo,m,b,b+1,b);v&&i.push(v)}if(this.isLineLoop){const b=Fc(this,t,Wo,m,E-1,y,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(eu.fromBufferAttribute(h,l),nu.fromBufferAttribute(h,c),i.distanceSqToSegment(eu,nu,Wh,I_)>s)return;Wh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Wh);if(!(p<t.near||p>t.far))return{distance:p,point:I_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const B_=new H,H_=new H;class kM extends tx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)B_.fromBufferAttribute(i,l),H_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+B_.distanceTo(H_);t.setAttribute("lineDistance",new rn(s,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class il extends Wn{constructor(t,i,s=ji,l,c,f,h=In,m=In,p,g=Aa,_=1){if(g!==Aa&&g!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class XM extends il{constructor(t,i=ji,s=Fs,l,c,f=In,h=In,m,p=Aa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ex extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xp extends qn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],y=[];let E=0;const b=[],S=s/2;let v=0;D(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(y,2));function D(){const w=new H,N=new H;let z=0;const O=(i-t)/s;for(let q=0;q<=c;q++){const A=[],L=q/c,V=L*(i-t)+t;for(let tt=0;tt<=l;tt++){const X=tt/l,st=X*m+h,et=Math.sin(st),P=Math.cos(st);N.x=V*et,N.y=-L*s+S,N.z=V*P,_.push(N.x,N.y,N.z),w.set(et,O,P).normalize(),x.push(w.x,w.y,w.z),y.push(X,1-L),A.push(E++)}b.push(A)}for(let q=0;q<l;q++)for(let A=0;A<c;A++){const L=b[A][q],V=b[A+1][q],tt=b[A+1][q+1],X=b[A][q+1];(t>0||A!==0)&&(g.push(L,V,X),z+=3),(i>0||A!==c-1)&&(g.push(V,tt,X),z+=3)}p.addGroup(v,z,0),v+=z}function U(w){const N=E,z=new ue,O=new H;let q=0;const A=w===!0?t:i,L=w===!0?1:-1;for(let tt=1;tt<=l;tt++)_.push(0,S*L,0),x.push(0,L,0),y.push(.5,.5),E++;const V=E;for(let tt=0;tt<=l;tt++){const st=tt/l*m+h,et=Math.cos(st),P=Math.sin(st);O.x=A*P,O.y=S*L,O.z=A*et,_.push(O.x,O.y,O.z),x.push(0,L,0),z.x=et*.5+.5,z.y=P*.5*L+.5,y.push(z.x,z.y),E++}for(let tt=0;tt<l;tt++){const X=N+tt,st=V+tt;w===!0?g.push(st,st+1,X):g.push(st+1,st,X),q+=3}p.addGroup(v,q,w===!0?1:2),v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yp extends xp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new yp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ru extends qn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,x=i/m,y=[],E=[],b=[],S=[];for(let v=0;v<g;v++){const D=v*x-f;for(let U=0;U<p;U++){const w=U*_-c;E.push(w,-D,0),b.push(0,0,1),S.push(U/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const U=D+p*v,w=D+p*(v+1),N=D+1+p*(v+1),z=D+1+p*v;y.push(U,w,z),y.push(w,N,z)}this.setIndex(y),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sp extends qn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new H,x=new H,y=[],E=[],b=[],S=[];for(let v=0;v<=s;v++){const D=[],U=v/s;let w=0;v===0&&f===0?w=.5/i:v===s&&m===Math.PI&&(w=-.5/i);for(let N=0;N<=i;N++){const z=N/i;_.x=-t*Math.cos(l+z*c)*Math.sin(f+U*h),_.y=t*Math.cos(f+U*h),_.z=t*Math.sin(l+z*c)*Math.sin(f+U*h),E.push(_.x,_.y,_.z),x.copy(_).normalize(),b.push(x.x,x.y,x.z),S.push(z+w,1-U),D.push(p++)}g.push(D)}for(let v=0;v<s;v++)for(let D=0;D<i;D++){const U=g[v][D+1],w=g[v][D],N=g[v+1][D],z=g[v+1][D+1];(v!==0||f>0)&&y.push(U,w,z),(v!==s-1||m<Math.PI)&&y.push(w,N,z)}this.setIndex(y),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jo extends qn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new H,_=new H,x=new H;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const b=E/l*c,S=y/s*Math.PI*2;_.x=(t+i*Math.cos(S))*Math.cos(b),_.y=(t+i*Math.cos(S))*Math.sin(b),_.z=i*Math.sin(S),h.push(_.x,_.y,_.z),g.x=t*Math.cos(b),g.y=t*Math.sin(b),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const b=(l+1)*y+E-1,S=(l+1)*(y-1)+E-1,v=(l+1)*(y-1)+E,D=(l+1)*y+E;f.push(b,S,D),f.push(S,v,D)}this.setIndex(f),this.setAttribute("position",new rn(h,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class WM extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qM extends Xr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xv,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class YM extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jM extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nx extends Rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new tn,G_=new H,V_=new H;class ZM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ou extends Qv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KM extends ZM{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k_ extends nx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new KM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class QM extends nx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class JM extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const X_=new tn;class ix{constructor(t,i,s=0,l=1/0){this.ray=new su(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):we("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return X_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(t,i=!0,s=[]){return Kd(t,this,s,i),s.sort(W_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Kd(t[l],this,s,i);return s.sort(W_),s}}function W_(r,t){return r.distance-t.distance}function Kd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Kd(c[f],t,i,!0)}}class q_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $M extends kM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const c=i/2,f=t/i,h=t/2,m=[],p=[];for(let x=0,y=0,E=-h;x<=i;x++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const b=x===c?s:l;b.toArray(p,y),y+=3,b.toArray(p,y),y+=3,b.toArray(p,y),y+=3,b.toArray(p,y),y+=3}const g=new qn;g.setAttribute("position",new rn(m,3)),g.setAttribute("color",new rn(p,3));const _=new vp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Y_=new H;let Ic,Yh;class jh extends Rn{constructor(t=new H(0,0,1),i=new H(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",Ic===void 0&&(Ic=new qn,Ic.setAttribute("position",new rn([0,0,0,0,1,0],3)),Yh=new yp(.5,1,5,1),Yh.translate(0,-.5,0)),this.position.copy(i),this.line=new tx(Ic,new vp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new di(Yh,new nl({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Y_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Y_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class tE extends Is{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function j_(r,t,i,s){const l=eE(s);switch(i){case Gv:return r*t;case kv:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case Gr:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case Vv:return r*t*3/l.components*l.byteLength;case Pi:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:case yd:return Math.max(r,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case Md:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ed:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eE(r){switch(r){case hi:case Fv:return{byteLength:1,components:1};case $o:case Iv:case Ta:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case ji:case op:case ki:return{byteLength:4,components:1};case Bv:case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ax(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function nE(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],b=_[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,_[x]=b)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const b=_[y];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var iE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
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
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gE=`#ifdef USE_IRIDESCENCE
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
#endif`,_E=`#ifdef USE_BUMPMAP
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CE=`vec3 transformedNormal = objectNormal;
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
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NE="gl_FragColor = linearToOutputTexel( gl_FragColor );",OE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jE=`uniform bool receiveShadow;
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
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
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
#endif`,eb=`uniform sampler2D dfgLUT;
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
}`,nb=`
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hb=`#if defined( USE_POINTS_UV )
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
#endif`,db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
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
#endif`,xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gb=`float getShadowMask() {
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
}`,Vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,y1=`#define MATCAP
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
}`,M1=`#define NORMAL
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
}`,E1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,T1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,R1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,w1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,U1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,N1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,P1=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:iE,alphahash_pars_fragment:aE,alphamap_fragment:sE,alphamap_pars_fragment:rE,alphatest_fragment:oE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,batching_pars_vertex:fE,batching_vertex:hE,begin_vertex:dE,beginnormal_vertex:pE,bsdfs:mE,iridescence_fragment:gE,bumpmap_pars_fragment:_E,clipping_planes_fragment:vE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:yE,clipping_planes_vertex:SE,color_fragment:ME,color_pars_fragment:EE,color_pars_vertex:bE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:CE,displacementmap_pars_vertex:wE,displacementmap_vertex:DE,emissivemap_fragment:UE,emissivemap_pars_fragment:LE,colorspace_fragment:NE,colorspace_pars_fragment:OE,envmap_fragment:PE,envmap_common_pars_fragment:zE,envmap_pars_fragment:FE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:ZE,envmap_vertex:BE,fog_vertex:HE,fog_pars_vertex:GE,fog_fragment:VE,fog_pars_fragment:kE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:WE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:YE,lights_pars_begin:jE,lights_toon_fragment:KE,lights_toon_pars_fragment:QE,lights_phong_fragment:JE,lights_phong_pars_fragment:$E,lights_physical_fragment:tb,lights_physical_pars_fragment:eb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:ab,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:rb,logdepthbuf_pars_vertex:ob,logdepthbuf_vertex:lb,map_fragment:cb,map_pars_fragment:ub,map_particle_fragment:fb,map_particle_pars_fragment:hb,metalnessmap_fragment:db,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:_b,morphtarget_pars_vertex:vb,morphtarget_vertex:xb,normal_fragment_begin:yb,normal_fragment_maps:Sb,normal_pars_fragment:Mb,normal_pars_vertex:Eb,normal_vertex:bb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:wb,opaque_fragment:Db,packing:Ub,premultiplied_alpha_fragment:Lb,project_vertex:Nb,dithering_fragment:Ob,dithering_pars_fragment:Pb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Bb,shadowmap_vertex:Hb,shadowmask_pars_fragment:Gb,skinbase_vertex:Vb,skinning_pars_vertex:kb,skinning_vertex:Xb,skinnormal_vertex:Wb,specularmap_fragment:qb,specularmap_pars_fragment:Yb,tonemapping_fragment:jb,tonemapping_pars_fragment:Zb,transmission_fragment:Kb,transmission_pars_fragment:Qb,uv_pars_fragment:Jb,uv_pars_vertex:$b,uv_vertex:t1,worldpos_vertex:e1,background_vert:n1,background_frag:i1,backgroundCube_vert:a1,backgroundCube_frag:s1,cube_vert:r1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distance_vert:u1,distance_frag:f1,equirect_vert:h1,equirect_frag:d1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:y1,meshmatcap_frag:S1,meshnormal_vert:M1,meshnormal_frag:E1,meshphong_vert:b1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:R1,meshtoon_vert:C1,meshtoon_frag:w1,points_vert:D1,points_frag:U1,shadow_vert:L1,shadow_frag:N1,sprite_vert:O1,sprite_frag:P1},Ht={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Vi={basic:{uniforms:Xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Xn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Xn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Xn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Xn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Xn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Xn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Xn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Xn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Xn([Ht.common,Ht.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Xn([Ht.lights,Ht.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Vi.physical={uniforms:Xn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Bc={r:0,b:0,g:0},Us=new Zi,z1=new tn;function F1(r,t,i,s,l,c,f){const h=new Re(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function b(U){let w=!1;const N=E(U);N===null?v(h,m):N&&N.isColor&&(v(N,1),w=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,w){const N=E(w);N&&(N.isCubeTexture||N.mapping===iu)?(g===void 0&&(g=new di(new rl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:kr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(w.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(z1.makeRotationFromEuler(Us)),g.material.toneMapped=De.getTransfer(N.colorSpace)!==Ge,(_!==N||x!==N.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=N,x=N.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new di(new ru(2,2),new Ki({name:"BackgroundMaterial",uniforms:kr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=De.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,x=N.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,w){U.getRGB(Bc,Kv(r)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,w,f)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),m=w,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:b,addToRenderList:S,dispose:D}}function I1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(L,V,tt,X,st){let et=!1;const P=_(X,tt,V);c!==P&&(c=P,p(c.object)),et=y(L,X,tt,st),et&&E(L,X,tt,st),st!==null&&t.update(st,r.ELEMENT_ARRAY_BUFFER),(et||f)&&(f=!1,w(L,V,tt,X),st!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function m(){return r.createVertexArray()}function p(L){return r.bindVertexArray(L)}function g(L){return r.deleteVertexArray(L)}function _(L,V,tt){const X=tt.wireframe===!0;let st=s[L.id];st===void 0&&(st={},s[L.id]=st);let et=st[V.id];et===void 0&&(et={},st[V.id]=et);let P=et[X];return P===void 0&&(P=x(m()),et[X]=P),P}function x(L){const V=[],tt=[],X=[];for(let st=0;st<i;st++)V[st]=0,tt[st]=0,X[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:X,object:L,attributes:{},index:null}}function y(L,V,tt,X){const st=c.attributes,et=V.attributes;let P=0;const B=tt.getAttributes();for(const K in B)if(B[K].location>=0){const gt=st[K];let F=et[K];if(F===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),gt===void 0||gt.attribute!==F||F&&gt.data!==F.data)return!0;P++}return c.attributesNum!==P||c.index!==X}function E(L,V,tt,X){const st={},et=V.attributes;let P=0;const B=tt.getAttributes();for(const K in B)if(B[K].location>=0){let gt=et[K];gt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor));const F={};F.attribute=gt,gt&&gt.data&&(F.data=gt.data),st[K]=F,P++}c.attributes=st,c.attributesNum=P,c.index=X}function b(){const L=c.newAttributes;for(let V=0,tt=L.length;V<tt;V++)L[V]=0}function S(L){v(L,0)}function v(L,V){const tt=c.newAttributes,X=c.enabledAttributes,st=c.attributeDivisors;tt[L]=1,X[L]===0&&(r.enableVertexAttribArray(L),X[L]=1),st[L]!==V&&(r.vertexAttribDivisor(L,V),st[L]=V)}function D(){const L=c.newAttributes,V=c.enabledAttributes;for(let tt=0,X=V.length;tt<X;tt++)V[tt]!==L[tt]&&(r.disableVertexAttribArray(tt),V[tt]=0)}function U(L,V,tt,X,st,et,P){P===!0?r.vertexAttribIPointer(L,V,tt,st,et):r.vertexAttribPointer(L,V,tt,X,st,et)}function w(L,V,tt,X){b();const st=X.attributes,et=tt.getAttributes(),P=V.defaultAttributeValues;for(const B in et){const K=et[B];if(K.location>=0){let mt=st[B];if(mt===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor)),mt!==void 0){const gt=mt.normalized,F=mt.itemSize,J=t.get(mt);if(J===void 0)continue;const ft=J.buffer,bt=J.type,wt=J.bytesPerElement,it=bt===r.INT||bt===r.UNSIGNED_INT||mt.gpuType===op;if(mt.isInterleavedBufferAttribute){const lt=mt.data,Tt=lt.stride,Dt=mt.offset;if(lt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<K.locationSize;Pt++)v(K.location+Pt,lt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Pt=0;Pt<K.locationSize;Pt++)S(K.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let Pt=0;Pt<K.locationSize;Pt++)U(K.location+Pt,F/K.locationSize,bt,gt,Tt*wt,(Dt+F/K.locationSize*Pt)*wt,it)}else{if(mt.isInstancedBufferAttribute){for(let lt=0;lt<K.locationSize;lt++)v(K.location+lt,mt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let lt=0;lt<K.locationSize;lt++)S(K.location+lt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let lt=0;lt<K.locationSize;lt++)U(K.location+lt,F/K.locationSize,bt,gt,F*wt,F/K.locationSize*lt*wt,it)}}else if(P!==void 0){const gt=P[B];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(K.location,gt);break;case 3:r.vertexAttrib3fv(K.location,gt);break;case 4:r.vertexAttrib4fv(K.location,gt);break;default:r.vertexAttrib1fv(K.location,gt)}}}}D()}function N(){q();for(const L in s){const V=s[L];for(const tt in V){const X=V[tt];for(const st in X)g(X[st].object),delete X[st];delete V[tt]}delete s[L]}}function z(L){if(s[L.id]===void 0)return;const V=s[L.id];for(const tt in V){const X=V[tt];for(const st in X)g(X[st].object),delete X[st];delete V[tt]}delete s[L.id]}function O(L){for(const V in s){const tt=s[V];if(tt[L.id]===void 0)continue;const X=tt[L.id];for(const st in X)g(X[st].object),delete X[st];delete tt[L.id]}}function q(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function B1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function H1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Pi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const q=O===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==hi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ki&&!q)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(oe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:w,maxSamples:N,samples:z}}function G1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ya,h=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const D=c?0:s,U=D*4;let w=v.clippingState||null;m.value=w,w=g(E,x,U,y);for(let N=0;N!==U;++N)w[N]=i[N];v.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const v=y+b*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,w=y;U!==b;++U,w+=4)f.copy(_[U]).applyMatrix4(D,h),f.normal.toArray(S,w),S[w+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function V1(r){let t=new WeakMap;function i(f,h){return h===dd?f.mapping=Fs:h===pd&&(f.mapping=Hr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===dd||h===pd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new $v(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const os=4,Z_=[.125,.215,.35,.446,.526,.582],Os=20,k1=256,qo=new ou,K_=new Re;let Zh=null,Kh=0,Qh=0,Jh=!1;const X1=new H;class Q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=X1}=c;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ta,format:Pi,colorSpace:Vr,depthBuffer:!1},l=J_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W1(c)),this._blurMaterial=Y1(c,t,i),this._ggxMaterial=q1(c,t,i)}return l}_compileMaterial(t){const i=new di(new qn,t);this._renderer.compile(i,qo)}_sceneToCubeUV(t,i,s,l,c){const m=new fi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(K_),_.toneMapping=Wi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new rl,new nl({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let v=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,v=!0):(S.color.copy(K_),v=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const N=this._cubeSize;Nr(l,w*N,U>2?N:0,N,N),_.setRenderTarget(l),v&&_.render(b,m),_.render(t,m)}_.toneMapping=y,_.autoClear=x,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===Hr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,y=_*x,{_lodMax:E}=this,b=this._sizeLods[s],S=3*b*(s>E-os?s-E+os:0),v=4*(this._cubeSize-b);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Nr(c,S,v,3*b,2*b),l.setRenderTarget(c),l.render(h,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Nr(t,S,v,3*b,2*b),l.setRenderTarget(t),l.render(h,qo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Os-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Os;S>Os&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Os}`);const v=[];let D=0;for(let O=0;O<Os;++O){const q=O/b,A=Math.exp(-q*q/2);v.push(A),O===0?D+=A:O<S&&(D+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/D;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const w=this._sizeLods[l],N=3*w*(l>U-os?l-U+os:0),z=4*(this._cubeSize-w);Nr(i,N,z,3*w,2*w),m.setRenderTarget(i),m.render(_,qo)}}function W1(r){const t=[],i=[],s=[];let l=r;const c=r-os+1+Z_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-os?m=Z_[f-r+os-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,b=3,S=2,v=1,D=new Float32Array(b*E*y),U=new Float32Array(S*E*y),w=new Float32Array(v*E*y);for(let z=0;z<y;z++){const O=z%3*2/3-1,q=z>2?0:-1,A=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];D.set(A,b*E*z),U.set(x,S*E*z);const L=[z,z,z,z,z,z];w.set(L,v*E*z)}const N=new qn;N.setAttribute("position",new Yi(D,b)),N.setAttribute("uv",new Yi(U,S)),N.setAttribute("faceIndex",new Yi(w,v)),s.push(new di(N,null)),l>os&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function J_(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function q1(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Y1(r,t,i){const s=new Float32Array(Os),l=new H(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function $_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function tv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function j1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===dd||m===pd,g=m===Fs||m===Hr;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Z1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&el("WebGLRenderer: "+s+" extension not supported."),l}}}function K1(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let b=0;if(y!==null){const D=y.array;b=y.version;for(let U=0,w=D.length;U<w;U+=3){const N=D[U+0],z=D[U+1],O=D[U+2];x.push(N,z,z,O,O,N)}}else if(E!==void 0){const D=E.array;b=E.version;for(let U=0,w=D.length/3-1;U<w;U+=3){const N=U+0,z=U+1,O=U+2;x.push(N,z,z,O,O,N)}}else return;const S=new(Wv(x)?Zv:jv)(x,1);S.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function Q1(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*f,E),i.update(y,s,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];i.update(S,s,1)}function _(x,y,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],b[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,b,0,E);let v=0;for(let D=0;D<E;D++)v+=y[D]*b[D];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function J1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:we("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function $1(r,t,i){const s=new WeakMap,l=new cn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let L=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",L)};var y=L;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let N=h.attributes.position.count*w,z=1;N>t.maxTextureSize&&(z=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*z*4*_),q=new qv(O,N,z,_);q.type=ki,q.needsUpdate=!0;const A=w*4;for(let V=0;V<_;V++){const tt=v[V],X=D[V],st=U[V],et=N*z*4*V;for(let P=0;P<tt.count;P++){const B=P*A;E===!0&&(l.fromBufferAttribute(tt,P),O[et+B+0]=l.x,O[et+B+1]=l.y,O[et+B+2]=l.z,O[et+B+3]=0),b===!0&&(l.fromBufferAttribute(X,P),O[et+B+4]=l.x,O[et+B+5]=l.y,O[et+B+6]=l.z,O[et+B+7]=0),S===!0&&(l.fromBufferAttribute(st,P),O[et+B+8]=l.x,O[et+B+9]=l.y,O[et+B+10]=l.z,O[et+B+11]=st.itemSize===4?l.w:1)}}x={count:_,texture:q,size:new ue(N,z)},s.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function tT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const eT={[wv]:"LINEAR_TONE_MAPPING",[Dv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Lv]:"ACES_FILMIC_TONE_MAPPING",[Ov]:"AGX_TONE_MAPPING",[Pv]:"NEUTRAL_TONE_MAPPING",[Nv]:"CUSTOM_TONE_MAPPING"};function nT(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new qi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),h=new qn;h.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rn([0,2,0,0,2,0],2));const m=new WM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new di(h,m),g=new ou(-1,1,1,-1,0,1);let _=null,x=null,y=!1,E,b=null,S=[],v=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let w=0;w<S.length;w++){const N=S[w];N.setSize&&N.setSize(D,U)}},this.setEffects=function(D){S=D,v=S.length>0&&S[0].isRenderPass===!0;const U=c.width,w=c.height;for(let N=0;N<S.length;N++){const z=S[N];z.setSize&&z.setSize(U,w)}},this.begin=function(D,U){if(y||D.toneMapping===Wi&&S.length===0)return!1;if(b=U,U!==null){const w=U.width,N=U.height;(c.width!==w||c.height!==N)&&this.setSize(w,N)}return v===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Wi,!0},this.hasRenderPass=function(){return v},this.end=function(D,U){D.toneMapping=E,y=!0;let w=c,N=f;for(let z=0;z<S.length;z++){const O=S[z];if(O.enabled!==!1&&(O.render(D,N,w,U),O.needsSwap!==!1)){const q=w;w=N,N=q}}if(_!==D.outputColorSpace||x!==D.toneMapping){_=D.outputColorSpace,x=D.toneMapping,m.defines={},De.getTransfer(_)===Ge&&(m.defines.SRGB_TRANSFER="");const z=eT[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,D.setRenderTarget(b),D.render(p,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const sx=new Wn,Qd=new il(1,1),rx=new qv,ox=new yM,lx=new Jv,ev=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function Wr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function En(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function bn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function cu(r,t){let i=nv[t];i===void 0&&(i=new Int32Array(t),nv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function iT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;r.uniform2fv(this.addr,t),bn(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;r.uniform3fv(this.addr,t),bn(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;r.uniform4fv(this.addr,t),bn(i,t)}}function oT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;sv.set(s),r.uniformMatrix2fv(this.addr,!1,sv),bn(i,s)}}function lT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;av.set(s),r.uniformMatrix3fv(this.addr,!1,av),bn(i,s)}}function cT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;iv.set(s),r.uniformMatrix4fv(this.addr,!1,iv),bn(i,s)}}function uT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;r.uniform2iv(this.addr,t),bn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;r.uniform3iv(this.addr,t),bn(i,t)}}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;r.uniform4iv(this.addr,t),bn(i,t)}}function pT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;r.uniform2uiv(this.addr,t),bn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;r.uniform3uiv(this.addr,t),bn(i,t)}}function _T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;r.uniform4uiv(this.addr,t),bn(i,t)}}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Qd.compareFunction=i.isReversedDepthBuffer()?pp:dp,c=Qd):c=sx,i.setTexture2D(t||c,l)}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ox,l)}function yT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||lx,l)}function ST(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||rx,l)}function MT(r){switch(r){case 5126:return iT;case 35664:return aT;case 35665:return sT;case 35666:return rT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(r,t){r.uniform1fv(this.addr,t)}function bT(r,t){const i=Wr(t,this.size,2);r.uniform2fv(this.addr,i)}function TT(r,t){const i=Wr(t,this.size,3);r.uniform3fv(this.addr,i)}function AT(r,t){const i=Wr(t,this.size,4);r.uniform4fv(this.addr,i)}function RT(r,t){const i=Wr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function CT(r,t){const i=Wr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function wT(r,t){const i=Wr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function DT(r,t){r.uniform1iv(this.addr,t)}function UT(r,t){r.uniform2iv(this.addr,t)}function LT(r,t){r.uniform3iv(this.addr,t)}function NT(r,t){r.uniform4iv(this.addr,t)}function OT(r,t){r.uniform1uiv(this.addr,t)}function PT(r,t){r.uniform2uiv(this.addr,t)}function zT(r,t){r.uniform3uiv(this.addr,t)}function FT(r,t){r.uniform4uiv(this.addr,t)}function IT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Qd:f=sx;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function BT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ox,c[f])}function HT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||lx,c[f])}function GT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||rx,c[f])}function VT(r){switch(r){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return LT;case 35669:case 35673:return NT;case 5125:return OT;case 36294:return PT;case 36295:return zT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class kT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class XT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VT(i.type)}}class WT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function rv(r,t){r.seq.push(t),r.map[t.id]=t}function qT(r,t,i){const s=r.name,l=s.length;for($h.lastIndex=0;;){const c=$h.exec(s),f=$h.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){rv(i,p===void 0?new kT(h,r,t):new XT(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new WT(h),rv(i,_)),i=_}}}class Zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);qT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function ov(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const YT=37297;let jT=0;function ZT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const lv=new me;function KT(r){De._getMatrix(lv,De.workingColorSpace,r);const t=`mat3( ${lv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case Jc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function cv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+ZT(r.getShaderSource(t),h)}else return c}function QT(r,t){const i=KT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const JT={[wv]:"Linear",[Dv]:"Reinhard",[Uv]:"Cineon",[Lv]:"ACESFilmic",[Ov]:"AgX",[Pv]:"Neutral",[Nv]:"Custom"};function $T(r,t){const i=JT[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new H;function tA(){De.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function nA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function iA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Qo(r){return r!==""}function uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(aA,rA)}const sA=new Map;function rA(r,t){let i=ge[t];if(i===void 0){const s=sA.get(t);if(s!==void 0)i=ge[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(r){return r.replace(oA,lA)}function lA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function dv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const cA={[kc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function uA(r){return cA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fA={[Fs]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function hA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":fA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const dA={[Hr]:"ENVMAP_MODE_REFRACTION"};function pA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mA={[Cv]:"ENVMAP_BLENDING_MULTIPLY",[tM]:"ENVMAP_BLENDING_MIX",[eM]:"ENVMAP_BLENDING_ADD"};function gA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":mA[r.combine]||"ENVMAP_BLENDING_NONE"}function _A(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=uA(i),p=hA(i),g=pA(i),_=gA(i),x=_A(i),y=eA(i),E=nA(c),b=l.createProgram();let S,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(S=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?ge.tonemapping_pars_fragment:"",i.toneMapping!==Wi?$T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,QT("linearToOutputTexel",i.outputColorSpace),tA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=Jd(f),f=uv(f,i),f=fv(f,i),h=Jd(h),h=uv(h,i),h=fv(h,i),f=hv(f),h=hv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=D+S+f,w=D+v+h,N=ov(l,l.VERTEX_SHADER,U),z=ov(l,l.FRAGMENT_SHADER,w);l.attachShader(b,N),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(V){if(r.debug.checkShaderErrors){const tt=l.getProgramInfoLog(b)||"",X=l.getShaderInfoLog(N)||"",st=l.getShaderInfoLog(z)||"",et=tt.trim(),P=X.trim(),B=st.trim();let K=!0,mt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,N,z);else{const gt=cv(l,N,"vertex"),F=cv(l,z,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+et+`
`+gt+`
`+F)}else et!==""?oe("WebGLProgram: Program Info Log:",et):(P===""||B==="")&&(mt=!1);mt&&(V.diagnostics={runnable:K,programLog:et,vertexShader:{log:P,prefix:S},fragmentShader:{log:B,prefix:v}})}l.deleteShader(N),l.deleteShader(z),q=new Zc(l,b),A=iA(l,b)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(b,YT)),L},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=z,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new SA(t),i.set(t,s)),s}}class SA{constructor(t){this.id=xA++,this.code=t,this.usedTimes=0}}function MA(r,t,i,s,l,c,f){const h=new gp,m=new yA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return p.add(A),A===0?"uv":`uv${A}`}function S(A,L,V,tt,X){const st=tt.fog,et=X.geometry,P=A.isMeshStandardMaterial?tt.environment:null,B=(A.isMeshStandardMaterial?i:t).get(A.envMap||P),K=B&&B.mapping===iu?B.image.height:null,mt=E[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&oe("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const gt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,F=gt!==void 0?gt.length:0;let J=0;et.morphAttributes.position!==void 0&&(J=1),et.morphAttributes.normal!==void 0&&(J=2),et.morphAttributes.color!==void 0&&(J=3);let ft,bt,wt,it;if(mt){const te=Vi[mt];ft=te.vertexShader,bt=te.fragmentShader}else ft=A.vertexShader,bt=A.fragmentShader,m.update(A),wt=m.getVertexShaderID(A),it=m.getFragmentShaderID(A);const lt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Dt=X.isInstancedMesh===!0,Pt=X.isBatchedMesh===!0,re=!!A.map,Ve=!!A.matcap,ve=!!B,_e=!!A.aoMap,Ce=!!A.lightMap,le=!!A.bumpMap,en=!!A.normalMap,k=!!A.displacementMap,ke=!!A.emissiveMap,Ee=!!A.metalnessMap,Ue=!!A.roughnessMap,Yt=A.anisotropy>0,I=A.clearcoat>0,T=A.dispersion>0,Z=A.iridescence>0,vt=A.sheen>0,Et=A.transmission>0,pt=Yt&&!!A.anisotropyMap,jt=I&&!!A.clearcoatMap,Ut=I&&!!A.clearcoatNormalMap,qt=I&&!!A.clearcoatRoughnessMap,ne=Z&&!!A.iridescenceMap,At=Z&&!!A.iridescenceThicknessMap,Rt=vt&&!!A.sheenColorMap,Gt=vt&&!!A.sheenRoughnessMap,Bt=!!A.specularMap,Lt=!!A.specularColorMap,he=!!A.specularIntensityMap,Y=Et&&!!A.transmissionMap,Nt=Et&&!!A.thicknessMap,Ct=!!A.gradientMap,Ft=!!A.alphaMap,j=A.alphaTest>0,at=!!A.alphaHash,xt=!!A.extensions;let zt=Wi;A.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(zt=r.toneMapping);const ie={shaderID:mt,shaderType:A.type,shaderName:A.name,vertexShader:ft,fragmentShader:bt,defines:A.defines,customVertexShaderID:wt,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&X._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&X.instanceColor!==null,instancingMorph:Dt&&X.morphTexture!==null,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Vr,alphaToCoverage:!!A.alphaToCoverage,map:re,matcap:Ve,envMap:ve,envMapMode:ve&&B.mapping,envMapCubeUVHeight:K,aoMap:_e,lightMap:Ce,bumpMap:le,normalMap:en,displacementMap:k,emissiveMap:ke,normalMapObjectSpace:en&&A.normalMapType===aM,normalMapTangentSpace:en&&A.normalMapType===Xv,metalnessMap:Ee,roughnessMap:Ue,anisotropy:Yt,anisotropyMap:pt,clearcoat:I,clearcoatMap:jt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:qt,dispersion:T,iridescence:Z,iridescenceMap:ne,iridescenceThicknessMap:At,sheen:vt,sheenColorMap:Rt,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:he,transmission:Et,transmissionMap:Y,thicknessMap:Nt,gradientMap:Ct,opaque:A.transparent===!1&&A.blending===Fr&&A.alphaToCoverage===!1,alphaMap:Ft,alphaTest:j,alphaHash:at,combine:A.combine,mapUv:re&&b(A.map.channel),aoMapUv:_e&&b(A.aoMap.channel),lightMapUv:Ce&&b(A.lightMap.channel),bumpMapUv:le&&b(A.bumpMap.channel),normalMapUv:en&&b(A.normalMap.channel),displacementMapUv:k&&b(A.displacementMap.channel),emissiveMapUv:ke&&b(A.emissiveMap.channel),metalnessMapUv:Ee&&b(A.metalnessMap.channel),roughnessMapUv:Ue&&b(A.roughnessMap.channel),anisotropyMapUv:pt&&b(A.anisotropyMap.channel),clearcoatMapUv:jt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&b(A.sheenRoughnessMap.channel),specularMapUv:Bt&&b(A.specularMap.channel),specularColorMapUv:Lt&&b(A.specularColorMap.channel),specularIntensityMapUv:he&&b(A.specularIntensityMap.channel),transmissionMapUv:Y&&b(A.transmissionMap.channel),thicknessMapUv:Nt&&b(A.thicknessMap.channel),alphaMapUv:Ft&&b(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(en||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!et.attributes.uv&&(re||Ft),fog:!!st,useFog:A.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:X.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:re&&A.map.isVideoTexture===!0&&De.getTransfer(A.map.colorSpace)===Ge,decodeVideoTextureEmissive:ke&&A.emissiveMap.isVideoTexture===!0&&De.getTransfer(A.emissiveMap.colorSpace)===Ge,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:xt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&A.extensions.multiDraw===!0||Pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ie.vertexUv1s=p.has(1),ie.vertexUv2s=p.has(2),ie.vertexUv3s=p.has(3),p.clear(),ie}function v(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)L.push(V),L.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(D(L,A),U(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function D(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function U(A,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),A.push(h.mask)}function w(A){const L=E[A.type];let V;if(L){const tt=Vi[L];V=NM.clone(tt.uniforms)}else V=A.uniforms;return V}function N(A,L){let V=_.get(L);return V!==void 0?++V.usedTimes:(V=new vA(r,L,A,c),g.push(V),_.set(L,V)),V}function z(A){if(--A.usedTimes===0){const L=g.indexOf(A);g[L]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function O(A){m.remove(A)}function q(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:w,acquireProgram:N,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:q}}function EA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function bA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function mv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,E,b,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=S),t++,v}function h(_,x,y,E,b,S){const v=f(_,x,y,E,b,S);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,E,b,S){const v=f(_,x,y,E,b,S);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||bA),s.length>1&&s.sort(x||pv),l.length>1&&l.sort(x||pv)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function TA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new mv,r.set(s,[f])):l>=c.length?(f=new mv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function AA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new H,color:new Re};break;case"SpotLight":i={position:new H,direction:new H,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new H,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new H,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=i,i}}}function RA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let CA=0;function wA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function DA(r){const t=new AA,i=RA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new H);const l=new H,c=new tn,f=new tn;function h(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,b=0,S=0,v=0,D=0,U=0,w=0,N=0,z=0,O=0;p.sort(wA);for(let A=0,L=p.length;A<L;A++){const V=p[A],tt=V.color,X=V.intensity,st=V.distance;let et=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Gr?et=V.shadow.map.texture:et=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=tt.r*X,_+=tt.g*X,x+=tt.b*X;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],X);O++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,K=i.get(V);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,s.directionalShadow[y]=K,s.directionalShadowMap[y]=et,s.directionalShadowMatrix[y]=V.shadow.matrix,D++}s.directional[y]=P,y++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(tt).multiplyScalar(X),P.distance=st,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[b]=P;const B=V.shadow;if(V.map&&(s.spotLightMap[N]=V.map,N++,B.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[b]=B.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,s.spotShadow[b]=K,s.spotShadowMap[b]=et,w++}b++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(tt).multiplyScalar(X),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=P,S++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const B=V.shadow,K=i.get(V);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,s.pointShadow[E]=K,s.pointShadowMap[E]=et,s.pointShadowMatrix[E]=V.shadow.matrix,U++}s.point[E]=P,E++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(X),P.groundColor.copy(V.groundColor).multiplyScalar(X),s.hemi[v]=P,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==y||q.pointLength!==E||q.spotLength!==b||q.rectAreaLength!==S||q.hemiLength!==v||q.numDirectionalShadows!==D||q.numPointShadows!==U||q.numSpotShadows!==w||q.numSpotMaps!==N||q.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=w+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=O,q.directionalLength=y,q.pointLength=E,q.spotLength=b,q.rectAreaLength=S,q.hemiLength=v,q.numDirectionalShadows=D,q.numPointShadows=U,q.numSpotShadows=w,q.numSpotMaps=N,q.numLightProbes=O,s.version=CA++)}function m(p,g){let _=0,x=0,y=0,E=0,b=0;const S=g.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const U=p[v];if(U.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),_++}else if(U.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const w=s.hemi[b];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:h,setupView:m,state:s}}function gv(r){const t=new DA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function UA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new gv(r),t.set(l,[h])):c>=f.length?(h=new gv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
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
}`,OA=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],PA=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],_v=new tn,Yo=new H,td=new H;function zA(r,t,i){let s=new _p;const l=new ue,c=new ue,f=new cn,h=new YM,m=new jM,p={},g=i.maxTextureSize,_={[ls]:ei,[ei]:ls,[Sa]:Sa},x=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:LA,fragmentShader:NA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let v=this.type;this.render=function(z,O,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;z.type===PS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=kc);const A=r.getRenderTarget(),L=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),tt=r.state;tt.setBlending(Ea),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const X=v!==this.type;X&&O.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(et=>et.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,et=z.length;st<et;st++){const P=z[st],B=P.shadow;if(B===void 0){oe("WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const K=B.getFrameExtents();if(l.multiply(K),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/K.x),l.x=c.x*K.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/K.y),l.y=c.y*K.y,B.mapSize.y=c.y)),B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ko){if(P.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new qi(l.x,l.y,{format:Gr,type:Ta,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),B.map.texture.name=P.name+".shadowMap",B.map.depthTexture=new il(l.x,l.y,ki),B.map.depthTexture.name=P.name+".shadowMapDepth",B.map.depthTexture.format=Aa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In}else{P.isPointLight?(B.map=new $v(l.x),B.map.depthTexture=new XM(l.x,ji)):(B.map=new qi(l.x,l.y),B.map.depthTexture=new il(l.x,l.y,ji)),B.map.depthTexture.name=P.name+".shadowMap",B.map.depthTexture.format=Aa;const gt=r.state.buffers.depth.getReversed();this.type===kc?(B.map.depthTexture.compareFunction=gt?pp:dp,B.map.depthTexture.minFilter=Vn,B.map.depthTexture.magFilter=Vn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In)}B.camera.updateProjectionMatrix()}const mt=B.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<mt;gt++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,gt),r.clear();else{gt===0&&(r.setRenderTarget(B.map),r.clear());const F=B.getViewport(gt);f.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),tt.viewport(f)}if(P.isPointLight){const F=B.camera,J=B.matrix,ft=P.distance||F.far;ft!==F.far&&(F.far=ft,F.updateProjectionMatrix()),Yo.setFromMatrixPosition(P.matrixWorld),F.position.copy(Yo),td.copy(F.position),td.add(OA[gt]),F.up.copy(PA[gt]),F.lookAt(td),F.updateMatrixWorld(),J.makeTranslation(-Yo.x,-Yo.y,-Yo.z),_v.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_v,F.coordinateSystem,F.reversedDepth)}else B.updateMatrices(P);s=B.getFrustum(),w(O,q,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===Ko&&D(B,q),B.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(A,L,V)};function D(z,O){const q=t.update(b);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qi(l.x,l.y,{format:Gr,type:Ta})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(O,null,q,x,b,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(O,null,q,y,b,null)}function U(z,O,q,A){let L=null;const V=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)L=V;else if(L=q.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const tt=L.uuid,X=O.uuid;let st=p[tt];st===void 0&&(st={},p[tt]=st);let et=st[X];et===void 0&&(et=L.clone(),st[X]=et,O.addEventListener("dispose",N)),L=et}if(L.visible=O.visible,L.wireframe=O.wireframe,A===Ko?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:_[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,q.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const tt=r.properties.get(L);tt.light=q}return L}function w(z,O,q,A,L){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===Ko)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const X=t.update(z),st=z.material;if(Array.isArray(st)){const et=X.groups;for(let P=0,B=et.length;P<B;P++){const K=et[P],mt=st[K.materialIndex];if(mt&&mt.visible){const gt=U(z,mt,A,L);z.onBeforeShadow(r,z,O,q,X,gt,K),r.renderBufferDirect(q,null,X,gt,z,K),z.onAfterShadow(r,z,O,q,X,gt,K)}}}else if(st.visible){const et=U(z,st,A,L);z.onBeforeShadow(r,z,O,q,X,et,null),r.renderBufferDirect(q,null,X,et,z,null),z.onAfterShadow(r,z,O,q,X,et,null)}}const tt=z.children;for(let X=0,st=tt.length;X<st;X++)w(tt[X],O,q,A,L)}function N(z){z.target.removeEventListener("dispose",N);for(const q in p){const A=p[q],L=z.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const FA={[rd]:od,[ld]:fd,[cd]:hd,[Br]:ud,[od]:rd,[fd]:ld,[hd]:cd,[ud]:Br};function IA(r,t){function i(){let Y=!1;const Nt=new cn;let Ct=null;const Ft=new cn(0,0,0,0);return{setMask:function(j){Ct!==j&&!Y&&(r.colorMask(j,j,j,j),Ct=j)},setLocked:function(j){Y=j},setClear:function(j,at,xt,zt,ie){ie===!0&&(j*=zt,at*=zt,xt*=zt),Nt.set(j,at,xt,zt),Ft.equals(Nt)===!1&&(r.clearColor(j,at,xt,zt),Ft.copy(Nt))},reset:function(){Y=!1,Ct=null,Ft.set(-1,0,0,0)}}}function s(){let Y=!1,Nt=!1,Ct=null,Ft=null,j=null;return{setReversed:function(at){if(Nt!==at){const xt=t.get("EXT_clip_control");at?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),Nt=at;const zt=j;j=null,this.setClear(zt)}},getReversed:function(){return Nt},setTest:function(at){at?lt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(at){Ct!==at&&!Y&&(r.depthMask(at),Ct=at)},setFunc:function(at){if(Nt&&(at=FA[at]),Ft!==at){switch(at){case rd:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=at}},setLocked:function(at){Y=at},setClear:function(at){j!==at&&(Nt&&(at=1-at),r.clearDepth(at),j=at)},reset:function(){Y=!1,Ct=null,Ft=null,j=null,Nt=!1}}}function l(){let Y=!1,Nt=null,Ct=null,Ft=null,j=null,at=null,xt=null,zt=null,ie=null;return{setTest:function(te){Y||(te?lt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(te){Nt!==te&&!Y&&(r.stencilMask(te),Nt=te)},setFunc:function(te,xe,Ze){(Ct!==te||Ft!==xe||j!==Ze)&&(r.stencilFunc(te,xe,Ze),Ct=te,Ft=xe,j=Ze)},setOp:function(te,xe,Ze){(at!==te||xt!==xe||zt!==Ze)&&(r.stencilOp(te,xe,Ze),at=te,xt=xe,zt=Ze)},setLocked:function(te){Y=te},setClear:function(te){ie!==te&&(r.clearStencil(te),ie=te)},reset:function(){Y=!1,Nt=null,Ct=null,Ft=null,j=null,at=null,xt=null,zt=null,ie=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,b=!1,S=null,v=null,D=null,U=null,w=null,N=null,z=null,O=new Re(0,0,0),q=0,A=!1,L=null,V=null,tt=null,X=null,st=null;const et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,B=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(K)[1]),P=B>=1):K.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),P=B>=2);let mt=null,gt={};const F=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ft=new cn().fromArray(F),bt=new cn().fromArray(J);function wt(Y,Nt,Ct,Ft){const j=new Uint8Array(4),at=r.createTexture();r.bindTexture(Y,at),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xt=0;xt<Ct;xt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(Nt+xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return at}const it={};it[r.TEXTURE_2D]=wt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),lt(r.DEPTH_TEST),f.setFunc(Br),le(!1),en(h_),lt(r.CULL_FACE),_e(Ea);function lt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Tt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Dt(Y,Nt){return _[Y]!==Nt?(r.bindFramebuffer(Y,Nt),_[Y]=Nt,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Pt(Y,Nt){let Ct=y,Ft=!1;if(Y){Ct=x.get(Nt),Ct===void 0&&(Ct=[],x.set(Nt,Ct));const j=Y.textures;if(Ct.length!==j.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let at=0,xt=j.length;at<xt;at++)Ct[at]=r.COLOR_ATTACHMENT0+at;Ct.length=j.length,Ft=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(Ct)}function re(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const Ve={[Ns]:r.FUNC_ADD,[FS]:r.FUNC_SUBTRACT,[IS]:r.FUNC_REVERSE_SUBTRACT};Ve[BS]=r.MIN,Ve[HS]=r.MAX;const ve={[GS]:r.ZERO,[VS]:r.ONE,[kS]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[ZS]:r.SRC_ALPHA_SATURATE,[YS]:r.DST_COLOR,[WS]:r.DST_ALPHA,[XS]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[jS]:r.ONE_MINUS_DST_COLOR,[qS]:r.ONE_MINUS_DST_ALPHA,[KS]:r.CONSTANT_COLOR,[QS]:r.ONE_MINUS_CONSTANT_COLOR,[JS]:r.CONSTANT_ALPHA,[$S]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(Y,Nt,Ct,Ft,j,at,xt,zt,ie,te){if(Y===Ea){b===!0&&(Tt(r.BLEND),b=!1);return}if(b===!1&&(lt(r.BLEND),b=!0),Y!==zS){if(Y!==S||te!==A){if((v!==Ns||w!==Ns)&&(r.blendEquation(r.FUNC_ADD),v=Ns,w=Ns),te)switch(Y){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFunc(r.ONE,r.ONE);break;case p_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case m_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case p_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",Y);break}D=null,U=null,N=null,z=null,O.set(0,0,0),q=0,S=Y,A=te}return}j=j||Nt,at=at||Ct,xt=xt||Ft,(Nt!==v||j!==w)&&(r.blendEquationSeparate(Ve[Nt],Ve[j]),v=Nt,w=j),(Ct!==D||Ft!==U||at!==N||xt!==z)&&(r.blendFuncSeparate(ve[Ct],ve[Ft],ve[at],ve[xt]),D=Ct,U=Ft,N=at,z=xt),(zt.equals(O)===!1||ie!==q)&&(r.blendColor(zt.r,zt.g,zt.b,ie),O.copy(zt),q=ie),S=Y,A=!1}function Ce(Y,Nt){Y.side===Sa?Tt(r.CULL_FACE):lt(r.CULL_FACE);let Ct=Y.side===ei;Nt&&(Ct=!Ct),le(Ct),Y.blending===Fr&&Y.transparent===!1?_e(Ea):_e(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ft=Y.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ke(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(Y){L!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),L=Y)}function en(Y){Y!==NS?(lt(r.CULL_FACE),Y!==V&&(Y===h_?r.cullFace(r.BACK):Y===OS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),V=Y}function k(Y){Y!==tt&&(P&&r.lineWidth(Y),tt=Y)}function ke(Y,Nt,Ct){Y?(lt(r.POLYGON_OFFSET_FILL),(X!==Nt||st!==Ct)&&(r.polygonOffset(Nt,Ct),X=Nt,st=Ct)):Tt(r.POLYGON_OFFSET_FILL)}function Ee(Y){Y?lt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Ue(Y){Y===void 0&&(Y=r.TEXTURE0+et-1),mt!==Y&&(r.activeTexture(Y),mt=Y)}function Yt(Y,Nt,Ct){Ct===void 0&&(mt===null?Ct=r.TEXTURE0+et-1:Ct=mt);let Ft=gt[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},gt[Ct]=Ft),(Ft.type!==Y||Ft.texture!==Nt)&&(mt!==Ct&&(r.activeTexture(Ct),mt=Ct),r.bindTexture(Y,Nt||it[Y]),Ft.type=Y,Ft.texture=Nt)}function I(){const Y=gt[mt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function vt(){try{r.texSubImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function Et(){try{r.texSubImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function Ut(){try{r.texStorage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function qt(){try{r.texStorage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function ne(){try{r.texImage2D(...arguments)}catch(Y){we("WebGLState:",Y)}}function At(){try{r.texImage3D(...arguments)}catch(Y){we("WebGLState:",Y)}}function Rt(Y){ft.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),ft.copy(Y))}function Gt(Y){bt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),bt.copy(Y))}function Bt(Y,Nt){let Ct=p.get(Nt);Ct===void 0&&(Ct=new WeakMap,p.set(Nt,Ct));let Ft=Ct.get(Y);Ft===void 0&&(Ft=r.getUniformBlockIndex(Nt,Y.name),Ct.set(Y,Ft))}function Lt(Y,Nt){const Ft=p.get(Nt).get(Y);m.get(Nt)!==Ft&&(r.uniformBlockBinding(Nt,Ft,Y.__bindingPointIndex),m.set(Nt,Ft))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},mt=null,gt={},_={},x=new WeakMap,y=[],E=null,b=!1,S=null,v=null,D=null,U=null,w=null,N=null,z=null,O=new Re(0,0,0),q=0,A=!1,L=null,V=null,tt=null,X=null,st=null,ft.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:lt,disable:Tt,bindFramebuffer:Dt,drawBuffers:Pt,useProgram:re,setBlending:_e,setMaterial:Ce,setFlipSided:le,setCullFace:en,setLineWidth:k,setPolygonOffset:ke,setScissorTest:Ee,activeTexture:Ue,bindTexture:Yt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:ne,texImage3D:At,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Ut,texStorage3D:qt,texSubImage2D:vt,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:jt,scissor:Rt,viewport:Gt,reset:he}}function BA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return y?new OffscreenCanvas(I,T):tu("canvas")}function b(I,T,Z){let vt=1;const Et=Yt(I);if((Et.width>Z||Et.height>Z)&&(vt=Z/Math.max(Et.width,Et.height)),vt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(vt*Et.width),jt=Math.floor(vt*Et.height);_===void 0&&(_=E(pt,jt));const Ut=T?E(pt,jt):_;return Ut.width=pt,Ut.height=jt,Ut.getContext("2d").drawImage(I,0,0,pt,jt),oe("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+jt+")."),Ut}else return"data"in I&&oe("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),I;return I}function S(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(I,T,Z,vt,Et=!1){if(I!==null){if(r[I]!==void 0)return r[I];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt=T;if(T===r.RED&&(Z===r.FLOAT&&(pt=r.R32F),Z===r.HALF_FLOAT&&(pt=r.R16F),Z===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.R8UI),Z===r.UNSIGNED_SHORT&&(pt=r.R16UI),Z===r.UNSIGNED_INT&&(pt=r.R32UI),Z===r.BYTE&&(pt=r.R8I),Z===r.SHORT&&(pt=r.R16I),Z===r.INT&&(pt=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(pt=r.RG32F),Z===r.HALF_FLOAT&&(pt=r.RG16F),Z===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RG16UI),Z===r.UNSIGNED_INT&&(pt=r.RG32UI),Z===r.BYTE&&(pt=r.RG8I),Z===r.SHORT&&(pt=r.RG16I),Z===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),Z===r.UNSIGNED_INT&&(pt=r.RGB32UI),Z===r.BYTE&&(pt=r.RGB8I),Z===r.SHORT&&(pt=r.RGB16I),Z===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(pt=r.RGBA32UI),Z===r.BYTE&&(pt=r.RGBA8I),Z===r.SHORT&&(pt=r.RGBA16I),Z===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),T===r.RGBA){const jt=Et?Jc:De.getTransfer(vt);Z===r.FLOAT&&(pt=r.RGBA32F),Z===r.HALF_FLOAT&&(pt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(pt=jt===Ge?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function w(I,T){let Z;return I?T===null||T===ji||T===tl?Z=r.DEPTH24_STENCIL8:T===ki?Z=r.DEPTH32F_STENCIL8:T===$o&&(Z=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===tl?Z=r.DEPTH_COMPONENT24:T===ki?Z=r.DEPTH_COMPONENT32F:T===$o&&(Z=r.DEPTH_COMPONENT16),Z}function N(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function z(I){const T=I.target;T.removeEventListener("dispose",z),q(T),T.isVideoTexture&&g.delete(T)}function O(I){const T=I.target;T.removeEventListener("dispose",O),L(T)}function q(I){const T=s.get(I);if(T.__webglInit===void 0)return;const Z=I.source,vt=x.get(Z);if(vt){const Et=vt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&A(I),Object.keys(vt).length===0&&x.delete(Z)}s.remove(I)}function A(I){const T=s.get(I);r.deleteTexture(T.__webglTexture);const Z=I.source,vt=x.get(Z);delete vt[T.__cacheKey],f.memory.textures--}function L(I){const T=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let Et=0;Et<T.__webglFramebuffer[vt].length;Et++)r.deleteFramebuffer(T.__webglFramebuffer[vt][Et]);else r.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)r.deleteFramebuffer(T.__webglFramebuffer[vt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=I.textures;for(let vt=0,Et=Z.length;vt<Et;vt++){const pt=s.get(Z[vt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(Z[vt])}s.remove(I)}let V=0;function tt(){V=0}function X(){const I=V;return I>=l.maxTextures&&oe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),V+=1,I}function st(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function et(I,T){const Z=s.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const vt=I.image;if(vt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,I,T);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function P(I,T){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){it(Z,I,T);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function B(I,T){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){it(Z,I,T);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function K(I,T){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){lt(Z,I,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const mt={[md]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},gt={[In]:r.NEAREST,[nM]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Sh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},F={[sM]:r.NEVER,[uM]:r.ALWAYS,[rM]:r.LESS,[dp]:r.LEQUAL,[oM]:r.EQUAL,[pp]:r.GEQUAL,[lM]:r.GREATER,[cM]:r.NOTEQUAL};function J(I,T){if(T.type===ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===Sh||T.magFilter===_c||T.magFilter===Ps||T.minFilter===Vn||T.minFilter===Sh||T.minFilter===_c||T.minFilter===Ps)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,mt[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,mt[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,mt[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,gt[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,gt[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==_c&&T.minFilter!==Ps||T.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ft(I,T){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",z));const vt=T.source;let Et=x.get(vt);Et===void 0&&(Et={},x.set(vt,Et));const pt=st(T);if(pt!==I.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),Et[pt].usedTimes++;const jt=Et[I.__cacheKey];jt!==void 0&&(Et[I.__cacheKey].usedTimes--,jt.usedTimes===0&&A(T)),I.__cacheKey=pt,I.__webglTexture=Et[pt].texture}return Z}function bt(I,T,Z){return Math.floor(Math.floor(I/Z)/T)}function wt(I,T,Z,vt){const pt=I.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Z,vt,T.data);else{pt.sort((At,Rt)=>At.start-Rt.start);let jt=0;for(let At=1;At<pt.length;At++){const Rt=pt[jt],Gt=pt[At],Bt=Rt.start+Rt.count,Lt=bt(Gt.start,T.width,4),he=bt(Rt.start,T.width,4);Gt.start<=Bt+1&&Lt===he&&bt(Gt.start+Gt.count-1,T.width,4)===Lt?Rt.count=Math.max(Rt.count,Gt.start+Gt.count-Rt.start):(++jt,pt[jt]=Gt)}pt.length=jt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),qt=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let At=0,Rt=pt.length;At<Rt;At++){const Gt=pt[At],Bt=Math.floor(Gt.start/4),Lt=Math.ceil(Gt.count/4),he=Bt%T.width,Y=Math.floor(Bt/T.width),Nt=Lt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,he,Y,Nt,Ct,Z,vt,T.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function it(I,T,Z){let vt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=r.TEXTURE_3D);const Et=ft(I,T),pt=T.source;i.bindTexture(vt,I.__webglTexture,r.TEXTURE0+Z);const jt=s.get(pt);if(pt.version!==jt.__version||Et===!0){i.activeTexture(r.TEXTURE0+Z);const Ut=De.getPrimaries(De.workingColorSpace),qt=T.colorSpace===rs?null:De.getPrimaries(T.colorSpace),ne=T.colorSpace===rs||Ut===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let At=b(T.image,!1,l.maxTextureSize);At=Ue(T,At);const Rt=c.convert(T.format,T.colorSpace),Gt=c.convert(T.type);let Bt=U(T.internalFormat,Rt,Gt,T.colorSpace,T.isVideoTexture);J(vt,T);let Lt;const he=T.mipmaps,Y=T.isVideoTexture!==!0,Nt=jt.__version===void 0||Et===!0,Ct=pt.dataReady,Ft=N(T,At);if(T.isDepthTexture)Bt=w(T.format===zs,T.type),Nt&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Bt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Bt,At.width,At.height,0,Rt,Gt,null));else if(T.isDataTexture)if(he.length>0){Y&&Nt&&i.texStorage2D(r.TEXTURE_2D,Ft,Bt,he[0].width,he[0].height);for(let j=0,at=he.length;j<at;j++)Lt=he[j],Y?Ct&&i.texSubImage2D(r.TEXTURE_2D,j,0,0,Lt.width,Lt.height,Rt,Gt,Lt.data):i.texImage2D(r.TEXTURE_2D,j,Bt,Lt.width,Lt.height,0,Rt,Gt,Lt.data);T.generateMipmaps=!1}else Y?(Nt&&i.texStorage2D(r.TEXTURE_2D,Ft,Bt,At.width,At.height),Ct&&wt(T,At,Rt,Gt)):i.texImage2D(r.TEXTURE_2D,0,Bt,At.width,At.height,0,Rt,Gt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Y&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Bt,he[0].width,he[0].height,At.depth);for(let j=0,at=he.length;j<at;j++)if(Lt=he[j],T.format!==Pi)if(Rt!==null)if(Y){if(Ct)if(T.layerUpdates.size>0){const xt=j_(Lt.width,Lt.height,T.format,T.type);for(const zt of T.layerUpdates){const ie=Lt.data.subarray(zt*xt/Lt.data.BYTES_PER_ELEMENT,(zt+1)*xt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,zt,Lt.width,Lt.height,1,Rt,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Lt.width,Lt.height,At.depth,Rt,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Bt,Lt.width,Lt.height,At.depth,0,Lt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ct&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Lt.width,Lt.height,At.depth,Rt,Gt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,j,Bt,Lt.width,Lt.height,At.depth,0,Rt,Gt,Lt.data)}else{Y&&Nt&&i.texStorage2D(r.TEXTURE_2D,Ft,Bt,he[0].width,he[0].height);for(let j=0,at=he.length;j<at;j++)Lt=he[j],T.format!==Pi?Rt!==null?Y?Ct&&i.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Lt.width,Lt.height,Rt,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,j,Bt,Lt.width,Lt.height,0,Lt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ct&&i.texSubImage2D(r.TEXTURE_2D,j,0,0,Lt.width,Lt.height,Rt,Gt,Lt.data):i.texImage2D(r.TEXTURE_2D,j,Bt,Lt.width,Lt.height,0,Rt,Gt,Lt.data)}else if(T.isDataArrayTexture)if(Y){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Bt,At.width,At.height,At.depth),Ct)if(T.layerUpdates.size>0){const j=j_(At.width,At.height,T.format,T.type);for(const at of T.layerUpdates){const xt=At.data.subarray(at*j/At.data.BYTES_PER_ELEMENT,(at+1)*j/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,At.width,At.height,1,Rt,Gt,xt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Rt,Gt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,At.width,At.height,At.depth,0,Rt,Gt,At.data);else if(T.isData3DTexture)Y?(Nt&&i.texStorage3D(r.TEXTURE_3D,Ft,Bt,At.width,At.height,At.depth),Ct&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Rt,Gt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Bt,At.width,At.height,At.depth,0,Rt,Gt,At.data);else if(T.isFramebufferTexture){if(Nt)if(Y)i.texStorage2D(r.TEXTURE_2D,Ft,Bt,At.width,At.height);else{let j=At.width,at=At.height;for(let xt=0;xt<Ft;xt++)i.texImage2D(r.TEXTURE_2D,xt,Bt,j,at,0,Rt,Gt,null),j>>=1,at>>=1}}else if(he.length>0){if(Y&&Nt){const j=Yt(he[0]);i.texStorage2D(r.TEXTURE_2D,Ft,Bt,j.width,j.height)}for(let j=0,at=he.length;j<at;j++)Lt=he[j],Y?Ct&&i.texSubImage2D(r.TEXTURE_2D,j,0,0,Rt,Gt,Lt):i.texImage2D(r.TEXTURE_2D,j,Bt,Rt,Gt,Lt);T.generateMipmaps=!1}else if(Y){if(Nt){const j=Yt(At);i.texStorage2D(r.TEXTURE_2D,Ft,Bt,j.width,j.height)}Ct&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Gt,At)}else i.texImage2D(r.TEXTURE_2D,0,Bt,Rt,Gt,At);S(T)&&v(vt),jt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function lt(I,T,Z){if(T.image.length!==6)return;const vt=ft(I,T),Et=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const pt=s.get(Et);if(Et.version!==pt.__version||vt===!0){i.activeTexture(r.TEXTURE0+Z);const jt=De.getPrimaries(De.workingColorSpace),Ut=T.colorSpace===rs?null:De.getPrimaries(T.colorSpace),qt=T.colorSpace===rs||jt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let at=0;at<6;at++)!ne&&!At?Rt[at]=b(T.image[at],!0,l.maxCubemapSize):Rt[at]=At?T.image[at].image:T.image[at],Rt[at]=Ue(T,Rt[at]);const Gt=Rt[0],Bt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),he=U(T.internalFormat,Bt,Lt,T.colorSpace),Y=T.isVideoTexture!==!0,Nt=pt.__version===void 0||vt===!0,Ct=Et.dataReady;let Ft=N(T,Gt);J(r.TEXTURE_CUBE_MAP,T);let j;if(ne){Y&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,he,Gt.width,Gt.height);for(let at=0;at<6;at++){j=Rt[at].mipmaps;for(let xt=0;xt<j.length;xt++){const zt=j[xt];T.format!==Pi?Bt!==null?Y?Ct&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,zt.width,zt.height,Bt,zt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,he,zt.width,zt.height,0,zt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,zt.width,zt.height,Bt,Lt,zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,he,zt.width,zt.height,0,Bt,Lt,zt.data)}}}else{if(j=T.mipmaps,Y&&Nt){j.length>0&&Ft++;const at=Yt(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,he,at.width,at.height)}for(let at=0;at<6;at++)if(At){Y?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Rt[at].width,Rt[at].height,Bt,Lt,Rt[at].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,he,Rt[at].width,Rt[at].height,0,Bt,Lt,Rt[at].data);for(let xt=0;xt<j.length;xt++){const ie=j[xt].image[at].image;Y?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,ie.width,ie.height,Bt,Lt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,he,ie.width,ie.height,0,Bt,Lt,ie.data)}}else{Y?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Lt,Rt[at]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,he,Bt,Lt,Rt[at]);for(let xt=0;xt<j.length;xt++){const zt=j[xt];Y?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,Bt,Lt,zt.image[at]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,he,Bt,Lt,zt.image[at])}}}S(T)&&v(r.TEXTURE_CUBE_MAP),pt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Tt(I,T,Z,vt,Et,pt){const jt=c.convert(Z.format,Z.colorSpace),Ut=c.convert(Z.type),qt=U(Z.internalFormat,jt,Ut,Z.colorSpace),ne=s.get(T),At=s.get(Z);if(At.__renderTarget=T,!ne.__hasExternalTextures){const Rt=Math.max(1,T.width>>pt),Gt=Math.max(1,T.height>>pt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,qt,Rt,Gt,T.depth,0,jt,Ut,null):i.texImage2D(Et,pt,qt,Rt,Gt,0,jt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),ke(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Et,At.__webglTexture,0,k(T)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Et,At.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(I,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const vt=T.depthTexture,Et=vt&&vt.isDepthTexture?vt.type:null,pt=w(T.stencilBuffer,Et),jt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ke(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),pt,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,I)}else{const vt=T.textures;for(let Et=0;Et<vt.length;Et++){const pt=vt[Et],jt=c.convert(pt.format,pt.colorSpace),Ut=c.convert(pt.type),qt=U(pt.internalFormat,jt,Ut,pt.colorSpace);ke(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),qt,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),qt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,qt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pt(I,T,Z){const vt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(T.depthTexture);if(Et.__renderTarget=T,(!Et.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),vt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),J(r.TEXTURE_CUBE_MAP,T.depthTexture);const ne=c.convert(T.depthTexture.format),At=c.convert(T.depthTexture.type);let Rt;T.depthTexture.format===Aa?Rt=r.DEPTH_COMPONENT24:T.depthTexture.format===zs&&(Rt=r.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Rt,T.width,T.height,0,ne,At,null)}}else et(T.depthTexture,0);const pt=Et.__webglTexture,jt=k(T),Ut=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,qt=T.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Aa)ke(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,pt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,pt,0);else if(T.depthTexture.format===zs)ke(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,pt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,pt,0);else throw new Error("Unknown depthTexture format")}function re(I){const T=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const vt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",Et)};vt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=vt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let vt=0;vt<6;vt++)Pt(T.__webglFramebuffer[vt],I,vt);else{const vt=I.texture.mipmaps;vt&&vt.length>0?Pt(T.__webglFramebuffer[0],I,0):Pt(T.__webglFramebuffer,I,0)}else if(Z){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=r.createRenderbuffer(),Dt(T.__webglDepthbuffer[vt],I,!1);else{const Et=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}else{const vt=I.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Dt(T.__webglDepthbuffer,I,!1);else{const Et=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(I,T,Z){const vt=s.get(I);T!==void 0&&Tt(vt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&re(I)}function ve(I){const T=I.texture,Z=s.get(I),vt=s.get(T);I.addEventListener("dispose",O);const Et=I.textures,pt=I.isWebGLCubeRenderTarget===!0,jt=Et.length>1;if(jt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=T.version,f.memory.textures++),pt){Z.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ut]=[];for(let qt=0;qt<T.mipmaps.length;qt++)Z.__webglFramebuffer[Ut][qt]=r.createFramebuffer()}else Z.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)Z.__webglFramebuffer[Ut]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Ut=0,qt=Et.length;Ut<qt;Ut++){const ne=s.get(Et[Ut]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&ke(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Et.length;Ut++){const qt=Et[Ut];Z.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ut]);const ne=c.convert(qt.format,qt.colorSpace),At=c.convert(qt.type),Rt=U(qt.internalFormat,ne,At,qt.colorSpace,I.isXRRenderTarget===!0),Gt=k(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Rt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),J(r.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)Tt(Z.__webglFramebuffer[Ut][qt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,qt);else Tt(Z.__webglFramebuffer[Ut],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ut=0,qt=Et.length;Ut<qt;Ut++){const ne=Et[Ut],At=s.get(ne);let Rt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Rt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,At.__webglTexture),J(Rt,ne),Tt(Z.__webglFramebuffer,I,ne,r.COLOR_ATTACHMENT0+Ut,Rt,0),S(ne)&&v(Rt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ut=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,vt.__webglTexture),J(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)Tt(Z.__webglFramebuffer[qt],I,T,r.COLOR_ATTACHMENT0,Ut,qt);else Tt(Z.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,Ut,0);S(T)&&v(Ut),i.unbindTexture()}I.depthBuffer&&re(I)}function _e(I){const T=I.textures;for(let Z=0,vt=T.length;Z<vt;Z++){const Et=T[Z];if(S(Et)){const pt=D(I),jt=s.get(Et).__webglTexture;i.bindTexture(pt,jt),v(pt),i.unbindTexture()}}}const Ce=[],le=[];function en(I){if(I.samples>0){if(ke(I)===!1){const T=I.textures,Z=I.width,vt=I.height;let Et=r.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(I),Ut=T.length>1;if(Ut)for(let ne=0;ne<T.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const qt=I.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[ne]);const At=s.get(T[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,Z,vt,0,0,Z,vt,Et,r.NEAREST),m===!0&&(Ce.length=0,le.length=0,Ce.push(r.COLOR_ATTACHMENT0+ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ce.push(pt),le.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let ne=0;ne<T.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,jt.__webglColorRenderbuffer[ne]);const At=s.get(T[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(I){return Math.min(l.maxSamples,I.samples)}function ke(I){const T=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(I){const T=f.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Ue(I,T){const Z=I.colorSpace,vt=I.format,Et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Vr&&Z!==rs&&(De.getTransfer(Z)===Ge?(vt!==Pi||Et!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",Z)),T}function Yt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=tt,this.setTexture2D=et,this.setTexture2DArray=P,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=Ve,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function HA(r,t){function i(s,l=rs){let c;const f=De.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Hv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fv)return r.BYTE;if(s===Iv)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===Gv)return r.ALPHA;if(s===Vv)return r.RGB;if(s===Pi)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===kv)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Gr)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===Xc||s===Wc||s===qc||s===Yc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===vd||s===xd||s===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===Md)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ed)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bd)return c.COMPRESSED_R11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ad)return c.COMPRESSED_RG11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Cd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ld)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
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

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ex(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:GA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XA extends Is{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,E=null;const b=typeof XRWebGLBinding<"u",S=new kA,v={},D=i.getContextAttributes();let U=null,w=null;const N=[],z=[],O=new ue;let q=null;const A=new fi;A.viewport=new cn;const L=new fi;L.viewport=new cn;const V=[A,L],tt=new JM;let X=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let lt=N[it];return lt===void 0&&(lt=new kh,N[it]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(it){let lt=N[it];return lt===void 0&&(lt=new kh,N[it]=lt),lt.getGripSpace()},this.getHand=function(it){let lt=N[it];return lt===void 0&&(lt=new kh,N[it]=lt),lt.getHandSpace()};function et(it){const lt=z.indexOf(it.inputSource);if(lt===-1)return;const Tt=N[lt];Tt!==void 0&&(Tt.update(it.inputSource,it.frame,p||f),Tt.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",B);for(let it=0;it<N.length;it++){const lt=z[it];lt!==null&&(z[it]=null,N[it].disconnect(lt))}X=null,st=null,S.reset();for(const it in v)delete v[it];t.setRenderTarget(U),y=null,x=null,_=null,l=null,w=null,wt.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",P),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Dt=null,Pt=null;D.depth&&(Pt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=D.stencil?zs:Aa,Dt=D.stencil?tl:ji);const re={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(re),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),w=new qi(x.textureWidth,x.textureHeight,{format:Pi,type:hi,depthTexture:new il(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new qi(y.framebufferWidth,y.framebufferHeight,{format:Pi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(it){for(let lt=0;lt<it.removed.length;lt++){const Tt=it.removed[lt],Dt=z.indexOf(Tt);Dt>=0&&(z[Dt]=null,N[Dt].disconnect(Tt))}for(let lt=0;lt<it.added.length;lt++){const Tt=it.added[lt];let Dt=z.indexOf(Tt);if(Dt===-1){for(let re=0;re<N.length;re++)if(re>=z.length){z.push(Tt),Dt=re;break}else if(z[re]===null){z[re]=Tt,Dt=re;break}if(Dt===-1)break}const Pt=N[Dt];Pt&&Pt.connect(Tt)}}const K=new H,mt=new H;function gt(it,lt,Tt){K.setFromMatrixPosition(lt.matrixWorld),mt.setFromMatrixPosition(Tt.matrixWorld);const Dt=K.distanceTo(mt),Pt=lt.projectionMatrix.elements,re=Tt.projectionMatrix.elements,Ve=Pt[14]/(Pt[10]-1),ve=Pt[14]/(Pt[10]+1),_e=(Pt[9]+1)/Pt[5],Ce=(Pt[9]-1)/Pt[5],le=(Pt[8]-1)/Pt[0],en=(re[8]+1)/re[0],k=Ve*le,ke=Ve*en,Ee=Dt/(-le+en),Ue=Ee*-le;if(lt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ue),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Pt[10]===-1)it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Yt=Ve+Ee,I=ve+Ee,T=k-Ue,Z=ke+(Dt-Ue),vt=_e*ve/I*Yt,Et=Ce*ve/I*Yt;it.projectionMatrix.makePerspective(T,Z,vt,Et,Yt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,lt){lt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(lt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let lt=it.near,Tt=it.far;S.texture!==null&&(S.depthNear>0&&(lt=S.depthNear),S.depthFar>0&&(Tt=S.depthFar)),tt.near=L.near=A.near=lt,tt.far=L.far=A.far=Tt,(X!==tt.near||st!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),X=tt.near,st=tt.far),tt.layers.mask=it.layers.mask|6,A.layers.mask=tt.layers.mask&3,L.layers.mask=tt.layers.mask&5;const Dt=it.parent,Pt=tt.cameras;F(tt,Dt);for(let re=0;re<Pt.length;re++)F(Pt[re],Dt);Pt.length===2?gt(tt,A,L):tt.projectionMatrix.copy(A.projectionMatrix),J(it,tt,Dt)};function J(it,lt,Tt){Tt===null?it.matrix.copy(lt.matrixWorld):(it.matrix.copy(Tt.matrixWorld),it.matrix.invert(),it.matrix.multiply(lt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(tt)},this.getCameraTexture=function(it){return v[it]};let ft=null;function bt(it,lt){if(g=lt.getViewerPose(p||f),E=lt,g!==null){const Tt=g.views;y!==null&&(t.setRenderTargetFramebuffer(w,y.framebuffer),t.setRenderTarget(w));let Dt=!1;Tt.length!==tt.cameras.length&&(tt.cameras.length=0,Dt=!0);for(let ve=0;ve<Tt.length;ve++){const _e=Tt[ve];let Ce=null;if(y!==null)Ce=y.getViewport(_e);else{const en=_.getViewSubImage(x,_e);Ce=en.viewport,ve===0&&(t.setRenderTargetTextures(w,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(w))}let le=V[ve];le===void 0&&(le=new fi,le.layers.enable(ve),le.viewport=new cn,V[ve]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ve===0&&(tt.matrix.copy(le.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Dt===!0&&tt.cameras.push(le)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const ve=_.getDepthInformation(Tt[0]);ve&&ve.isValid&&ve.texture&&S.init(ve,l.renderState)}if(Pt&&Pt.includes("camera-access")&&b){t.state.unbindTexture(),_=s.getBinding();for(let ve=0;ve<Tt.length;ve++){const _e=Tt[ve].camera;if(_e){let Ce=v[_e];Ce||(Ce=new ex,v[_e]=Ce);const le=_.getCameraImage(_e);Ce.sourceTexture=le}}}}for(let Tt=0;Tt<N.length;Tt++){const Dt=z[Tt],Pt=N[Tt];Dt!==null&&Pt!==void 0&&Pt.update(Dt,lt,p||f)}ft&&ft(it,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),E=null}const wt=new ax;wt.setAnimationLoop(bt),this.setAnimationLoop=function(it){ft=it},this.dispose=function(){}}}const Ls=new Zi,WA=new tn;function qA(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Kv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,D,U,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,w)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),b(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,D,U):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ei&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ei&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=t.get(v),U=D.envMap,w=D.envMapRotation;U&&(S.envMap.value=U,Ls.copy(w),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(WA.makeRotationFromEuler(Ls)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,D,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=U*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ei&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function b(S,v){const D=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function YA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const w=U.program;s.uniformBlockBinding(D,w)}function p(D,U){let w=l[D.id];w===void 0&&(E(D),w=g(D),l[D.id]=w,D.addEventListener("dispose",S));const N=U.program;s.updateUBOMapping(D,N);const z=t.render.frame;c[D.id]!==z&&(x(D),c[D.id]=z)}function g(D){const U=_();D.__bindingPointIndex=U;const w=r.createBuffer(),N=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,N,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,w),w}function _(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const U=l[D.id],w=D.uniforms,N=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,O=w.length;z<O;z++){const q=Array.isArray(w[z])?w[z]:[w[z]];for(let A=0,L=q.length;A<L;A++){const V=q[A];if(y(V,z,A,N)===!0){const tt=V.__offset,X=Array.isArray(V.value)?V.value:[V.value];let st=0;for(let et=0;et<X.length;et++){const P=X[et],B=b(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,tt+st,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,st),st+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,tt,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,U,w,N){const z=D.value,O=U+"_"+w;if(N[O]===void 0)return typeof z=="number"||typeof z=="boolean"?N[O]=z:N[O]=z.clone(),!0;{const q=N[O];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return N[O]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function E(D){const U=D.uniforms;let w=0;const N=16;for(let O=0,q=U.length;O<q;O++){const A=Array.isArray(U[O])?U[O]:[U[O]];for(let L=0,V=A.length;L<V;L++){const tt=A[L],X=Array.isArray(tt.value)?tt.value:[tt.value];for(let st=0,et=X.length;st<et;st++){const P=X[st],B=b(P),K=w%N,mt=K%B.boundary,gt=K+mt;w+=mt,gt!==0&&N-gt<B.storage&&(w+=N-gt),tt.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=w,w+=B.storage}}}const z=w%N;return z>0&&(w+=N-z),D.__size=w,D.__cache={},this}function b(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",D),U}function S(D){const U=D.target;U.removeEventListener("dispose",S);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const jA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function ZA(){return Gi===null&&(Gi=new BM(jA,16,16,Gr,Ta),Gi.name="DFG_LUT",Gi.minFilter=Vn,Gi.magFilter=Vn,Gi.wrapS=Ma,Gi.wrapT=Ma,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class KA{constructor(t={}){const{canvas:i=fM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const b=y,S=new Set([hp,fp,up]),v=new Set([hi,ji,$o,tl,lp,cp]),D=new Uint32Array(4),U=new Int32Array(4);let w=null,N=null;const z=[],O=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Ti;let V=0,tt=0,X=null,st=-1,et=null;const P=new cn,B=new cn;let K=null;const mt=new Re(0);let gt=0,F=i.width,J=i.height,ft=1,bt=null,wt=null;const it=new cn(0,0,F,J),lt=new cn(0,0,F,J);let Tt=!1;const Dt=new _p;let Pt=!1,re=!1;const Ve=new tn,ve=new H,_e=new cn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function en(){return X===null?ft:1}let k=s;function ke(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",te,!1),k===null){const Q="webgl2";if(k=ke(Q,C),k===null)throw ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw we("WebGLRenderer: "+C.message),C}let Ee,Ue,Yt,I,T,Z,vt,Et,pt,jt,Ut,qt,ne,At,Rt,Gt,Bt,Lt,he,Y,Nt,Ct,Ft,j;function at(){Ee=new Z1(k),Ee.init(),Ct=new HA(k,Ee),Ue=new H1(k,Ee,t,Ct),Yt=new IA(k,Ee),Ue.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),I=new J1(k),T=new EA,Z=new BA(k,Ee,Yt,T,Ue,Ct,I),vt=new V1(A),Et=new j1(A),pt=new nE(k),Ft=new I1(k,pt),jt=new K1(k,pt,I,Ft),Ut=new tT(k,jt,pt,I),he=new $1(k,Ue,Z),Gt=new G1(T),qt=new MA(A,vt,Et,Ee,Ue,Ft,Gt),ne=new qA(A,T),At=new TA,Rt=new UA(Ee),Lt=new F1(A,vt,Et,Yt,Ut,E,m),Bt=new zA(A,Ut,Ue),j=new YA(k,I,Ue,Yt),Y=new B1(k,Ee,I),Nt=new Q1(k,Ee,I),I.programs=qt.programs,A.capabilities=Ue,A.extensions=Ee,A.properties=T,A.renderLists=At,A.shadowMap=Bt,A.state=Yt,A.info=I}at(),b!==hi&&(q=new nT(b,i.width,i.height,l,c));const xt=new XA(A,k);this.xr=xt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(C){C!==void 0&&(ft=C,this.setSize(F,J,!1))},this.getSize=function(C){return C.set(F,J)},this.setSize=function(C,Q,ht=!0){if(xt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,J=Q,i.width=Math.floor(C*ft),i.height=Math.floor(Q*ft),ht===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(F*ft,J*ft).floor()},this.setDrawingBufferSize=function(C,Q,ht){F=C,J=Q,ft=ht,i.width=Math.floor(C*ht),i.height=Math.floor(Q*ht),this.setViewport(0,0,C,Q)},this.setEffects=function(C){if(b===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Q=0;Q<C.length;Q++)if(C[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,Q,ht,ct){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Q,ht,ct),Yt.viewport(P.copy(it).multiplyScalar(ft).round())},this.getScissor=function(C){return C.copy(lt)},this.setScissor=function(C,Q,ht,ct){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,Q,ht,ct),Yt.scissor(B.copy(lt).multiplyScalar(ft).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(C){Yt.setScissorTest(Tt=C)},this.setOpaqueSort=function(C){bt=C},this.setTransparentSort=function(C){wt=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ht=!0){let ct=0;if(C){let nt=!1;if(X!==null){const Ot=X.texture.format;nt=S.has(Ot)}if(nt){const Ot=X.texture.type,kt=v.has(Ot),It=Lt.getClearColor(),Xt=Lt.getClearAlpha(),Zt=It.r,ee=It.g,Kt=It.b;kt?(D[0]=Zt,D[1]=ee,D[2]=Kt,D[3]=Xt,k.clearBufferuiv(k.COLOR,0,D)):(U[0]=Zt,U[1]=ee,U[2]=Kt,U[3]=Xt,k.clearBufferiv(k.COLOR,0,U))}else ct|=k.COLOR_BUFFER_BIT}Q&&(ct|=k.DEPTH_BUFFER_BIT),ht&&(ct|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",te,!1),Lt.dispose(),At.dispose(),Rt.dispose(),T.dispose(),vt.dispose(),Et.dispose(),Ut.dispose(),Ft.dispose(),j.dispose(),qt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Bs),xt.removeEventListener("sessionend",Yr),zi.stop()};function zt(C){C.preventDefault(),y_("WebGLRenderer: Context Lost."),L=!0}function ie(){y_("WebGLRenderer: Context Restored."),L=!1;const C=I.autoReset,Q=Bt.enabled,ht=Bt.autoUpdate,ct=Bt.needsUpdate,nt=Bt.type;at(),I.autoReset=C,Bt.enabled=Q,Bt.autoUpdate=ht,Bt.needsUpdate=ct,Bt.type=nt}function te(C){we("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const Q=C.target;Q.removeEventListener("dispose",xe),Ze(Q)}function Ze(C){Qe(C),T.remove(C)}function Qe(C){const Q=T.get(C).programs;Q!==void 0&&(Q.forEach(function(ht){qt.releaseProgram(ht)}),C.isShaderMaterial&&qt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ht,ct,nt,Ot){Q===null&&(Q=Ce);const kt=nt.isMesh&&nt.matrixWorld.determinant()<0,It=cs(C,Q,ht,ct,nt);Yt.setMaterial(ct,kt);let Xt=ht.index,Zt=1;if(ct.wireframe===!0){if(Xt=jt.getWireframeAttribute(ht),Xt===void 0)return;Zt=2}const ee=ht.drawRange,Kt=ht.attributes.position;let ae=ee.start*Zt,Oe=(ee.start+ee.count)*Zt;Ot!==null&&(ae=Math.max(ae,Ot.start*Zt),Oe=Math.min(Oe,(Ot.start+Ot.count)*Zt)),Xt!==null?(ae=Math.max(ae,0),Oe=Math.min(Oe,Xt.count)):Kt!=null&&(ae=Math.max(ae,0),Oe=Math.min(Oe,Kt.count));const an=Oe-ae;if(an<0||an===1/0)return;Ft.setup(nt,ct,It,ht,Xt);let Ke,Fe=Y;if(Xt!==null&&(Ke=pt.get(Xt),Fe=Nt,Fe.setIndex(Ke)),nt.isMesh)ct.wireframe===!0?(Yt.setLineWidth(ct.wireframeLinewidth*en()),Fe.setMode(k.LINES)):Fe.setMode(k.TRIANGLES);else if(nt.isLine){let Jt=ct.linewidth;Jt===void 0&&(Jt=1),Yt.setLineWidth(Jt*en()),nt.isLineSegments?Fe.setMode(k.LINES):nt.isLineLoop?Fe.setMode(k.LINE_LOOP):Fe.setMode(k.LINE_STRIP)}else nt.isPoints?Fe.setMode(k.POINTS):nt.isSprite&&Fe.setMode(k.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Fe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Jt=nt._multiDrawStarts,Pe=nt._multiDrawCounts,ce=nt._multiDrawCount,wn=Xt?pt.get(Xt).bytesPerElement:1,Qi=T.get(ct).currentProgram.getUniforms();for(let Dn=0;Dn<ce;Dn++)Qi.setValue(k,"_gl_DrawID",Dn),Fe.render(Jt[Dn]/wn,Pe[Dn])}else if(nt.isInstancedMesh)Fe.renderInstances(ae,an,nt.count);else if(ht.isInstancedBufferGeometry){const Jt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Pe=Math.min(ht.instanceCount,Jt);Fe.renderInstances(ae,an,Pe)}else Fe.render(ae,an)};function nn(C,Q,ht){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,Gs(C,Q,ht),C.side=ls,C.needsUpdate=!0,Gs(C,Q,ht),C.side=Sa):Gs(C,Q,ht)}this.compile=function(C,Q,ht=null){ht===null&&(ht=C),N=Rt.get(ht),N.init(Q),O.push(N),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),C!==ht&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),N.setupLights();const ct=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ot=nt.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){const It=Ot[kt];nn(It,ht,nt),ct.add(It)}else nn(Ot,ht,nt),ct.add(Ot)}),N=O.pop(),ct},this.compileAsync=function(C,Q,ht=null){const ct=this.compile(C,Q,ht);return new Promise(nt=>{function Ot(){if(ct.forEach(function(kt){T.get(kt).currentProgram.isReady()&&ct.delete(kt)}),ct.size===0){nt(C);return}setTimeout(Ot,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let dn=null;function qr(C){dn&&dn(C)}function Bs(){zi.stop()}function Yr(){zi.start()}const zi=new ax;zi.setAnimationLoop(qr),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(C){dn=C,xt.setAnimationLoop(C),C===null?zi.stop():zi.start()},xt.addEventListener("sessionstart",Bs),xt.addEventListener("sessionend",Yr),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ht=xt.enabled===!0&&xt.isPresenting===!0,ct=q!==null&&(X===null||ht)&&q.begin(A,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Q),Q=xt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Q,X),N=Rt.get(C,O.length),N.init(Q),O.push(N),Ve.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Dt.setFromProjectionMatrix(Ve,Xi,Q.reversedDepth),re=this.localClippingEnabled,Pt=Gt.init(this.clippingPlanes,re),w=At.get(C,z.length),w.init(),z.push(w),xt.enabled===!0&&xt.isPresenting===!0){const kt=A.xr.getDepthSensingMesh();kt!==null&&pi(kt,Q,-1/0,A.sortObjects)}pi(C,Q,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(bt,wt),le=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,le&&Lt.addToRenderList(w,C),this.info.render.frame++,Pt===!0&&Gt.beginShadows();const nt=N.state.shadowsArray;if(Bt.render(nt,C,Q),Pt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct&&q.hasRenderPass())===!1){const kt=w.opaque,It=w.transmissive;if(N.setupLights(),Q.isArrayCamera){const Xt=Q.cameras;if(It.length>0)for(let Zt=0,ee=Xt.length;Zt<ee;Zt++){const Kt=Xt[Zt];Cn(kt,It,C,Kt)}le&&Lt.render(C);for(let Zt=0,ee=Xt.length;Zt<ee;Zt++){const Kt=Xt[Zt];pn(w,C,Kt,Kt.viewport)}}else It.length>0&&Cn(kt,It,C,Q),le&&Lt.render(C),pn(w,C,Q)}X!==null&&tt===0&&(Z.updateMultisampleRenderTarget(X),Z.updateRenderTargetMipmap(X)),ct&&q.end(A),C.isScene===!0&&C.onAfterRender(A,C,Q),Ft.resetDefaultState(),st=-1,et=null,O.pop(),O.length>0?(N=O[O.length-1],Pt===!0&&Gt.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?w=z[z.length-1]:w=null};function pi(C,Q,ht,ct){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ht=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Dt.intersectsSprite(C)){ct&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ve);const kt=Ut.update(C),It=C.material;It.visible&&w.push(C,kt,It,ht,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Dt.intersectsObject(C))){const kt=Ut.update(C),It=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_e.copy(kt.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(Ve)),Array.isArray(It)){const Xt=kt.groups;for(let Zt=0,ee=Xt.length;Zt<ee;Zt++){const Kt=Xt[Zt],ae=It[Kt.materialIndex];ae&&ae.visible&&w.push(C,kt,ae,ht,_e.z,Kt)}}else It.visible&&w.push(C,kt,It,ht,_e.z,null)}}const Ot=C.children;for(let kt=0,It=Ot.length;kt<It;kt++)pi(Ot[kt],Q,ht,ct)}function pn(C,Q,ht,ct){const{opaque:nt,transmissive:Ot,transparent:kt}=C;N.setupLightsView(ht),Pt===!0&&Gt.setGlobalState(A.clippingPlanes,ht),ct&&Yt.viewport(P.copy(ct)),nt.length>0&&Ai(nt,Q,ht),Ot.length>0&&Ai(Ot,Q,ht),kt.length>0&&Ai(kt,Q,ht),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Cn(C,Q,ht,ct){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ct.id]===void 0){const ae=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ct.id]=new qi(1,1,{generateMipmaps:!0,type:ae?Ta:hi,minFilter:Ps,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ot=N.state.transmissionRenderTarget[ct.id],kt=ct.viewport||P;Ot.setSize(kt.z*A.transmissionResolutionScale,kt.w*A.transmissionResolutionScale);const It=A.getRenderTarget(),Xt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(Ot),A.getClearColor(mt),gt=A.getClearAlpha(),gt<1&&A.setClearColor(16777215,.5),A.clear(),le&&Lt.render(ht);const ee=A.toneMapping;A.toneMapping=Wi;const Kt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),N.setupLightsView(ct),Pt===!0&&Gt.setGlobalState(A.clippingPlanes,ct),Ai(C,ht,ct),Z.updateMultisampleRenderTarget(Ot),Z.updateRenderTargetMipmap(Ot),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Oe=0,an=Q.length;Oe<an;Oe++){const Ke=Q[Oe],{object:Fe,geometry:Jt,material:Pe,group:ce}=Ke;if(Pe.side===Sa&&Fe.layers.test(ct.layers)){const wn=Pe.side;Pe.side=ei,Pe.needsUpdate=!0,Hs(Fe,ht,ct,Jt,Pe,ce),Pe.side=wn,Pe.needsUpdate=!0,ae=!0}}ae===!0&&(Z.updateMultisampleRenderTarget(Ot),Z.updateRenderTargetMipmap(Ot))}A.setRenderTarget(It,Xt,Zt),A.setClearColor(mt,gt),Kt!==void 0&&(ct.viewport=Kt),A.toneMapping=ee}function Ai(C,Q,ht){const ct=Q.isScene===!0?Q.overrideMaterial:null;for(let nt=0,Ot=C.length;nt<Ot;nt++){const kt=C[nt],{object:It,geometry:Xt,group:Zt}=kt;let ee=kt.material;ee.allowOverride===!0&&ct!==null&&(ee=ct),It.layers.test(ht.layers)&&Hs(It,Q,ht,Xt,ee,Zt)}}function Hs(C,Q,ht,ct,nt,Ot){C.onBeforeRender(A,Q,ht,ct,nt,Ot),C.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(A,Q,ht,ct,C,Ot),nt.transparent===!0&&nt.side===Sa&&nt.forceSinglePass===!1?(nt.side=ei,nt.needsUpdate=!0,A.renderBufferDirect(ht,Q,ct,nt,C,Ot),nt.side=ls,nt.needsUpdate=!0,A.renderBufferDirect(ht,Q,ct,nt,C,Ot),nt.side=Sa):A.renderBufferDirect(ht,Q,ct,nt,C,Ot),C.onAfterRender(A,Q,ht,ct,nt,Ot)}function Gs(C,Q,ht){Q.isScene!==!0&&(Q=Ce);const ct=T.get(C),nt=N.state.lights,Ot=N.state.shadowsArray,kt=nt.state.version,It=qt.getParameters(C,nt.state,Ot,Q,ht),Xt=qt.getProgramCacheKey(It);let Zt=ct.programs;ct.environment=C.isMeshStandardMaterial?Q.environment:null,ct.fog=Q.fog,ct.envMap=(C.isMeshStandardMaterial?Et:vt).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",xe),Zt=new Map,ct.programs=Zt);let ee=Zt.get(Xt);if(ee!==void 0){if(ct.currentProgram===ee&&ct.lightsStateVersion===kt)return jr(C,It),ee}else It.uniforms=qt.getUniforms(C),C.onBeforeCompile(It,A),ee=qt.acquireProgram(It,Xt),Zt.set(Xt,ee),ct.uniforms=It.uniforms;const Kt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Kt.clippingPlanes=Gt.uniform),jr(C,It),ct.needsLights=Ca(C),ct.lightsStateVersion=kt,ct.needsLights&&(Kt.ambientLightColor.value=nt.state.ambient,Kt.lightProbe.value=nt.state.probe,Kt.directionalLights.value=nt.state.directional,Kt.directionalLightShadows.value=nt.state.directionalShadow,Kt.spotLights.value=nt.state.spot,Kt.spotLightShadows.value=nt.state.spotShadow,Kt.rectAreaLights.value=nt.state.rectArea,Kt.ltc_1.value=nt.state.rectAreaLTC1,Kt.ltc_2.value=nt.state.rectAreaLTC2,Kt.pointLights.value=nt.state.point,Kt.pointLightShadows.value=nt.state.pointShadow,Kt.hemisphereLights.value=nt.state.hemi,Kt.directionalShadowMap.value=nt.state.directionalShadowMap,Kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Kt.spotShadowMap.value=nt.state.spotShadowMap,Kt.spotLightMatrix.value=nt.state.spotLightMatrix,Kt.spotLightMap.value=nt.state.spotLightMap,Kt.pointShadowMap.value=nt.state.pointShadowMap,Kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=ee,ct.uniformsList=null,ee}function ol(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Zc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function jr(C,Q){const ht=T.get(C);ht.outputColorSpace=Q.outputColorSpace,ht.batching=Q.batching,ht.batchingColor=Q.batchingColor,ht.instancing=Q.instancing,ht.instancingColor=Q.instancingColor,ht.instancingMorph=Q.instancingMorph,ht.skinning=Q.skinning,ht.morphTargets=Q.morphTargets,ht.morphNormals=Q.morphNormals,ht.morphColors=Q.morphColors,ht.morphTargetsCount=Q.morphTargetsCount,ht.numClippingPlanes=Q.numClippingPlanes,ht.numIntersection=Q.numClipIntersection,ht.vertexAlphas=Q.vertexAlphas,ht.vertexTangents=Q.vertexTangents,ht.toneMapping=Q.toneMapping}function cs(C,Q,ht,ct,nt){Q.isScene!==!0&&(Q=Ce),Z.resetTextureUnits();const Ot=Q.fog,kt=ct.isMeshStandardMaterial?Q.environment:null,It=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vr,Xt=(ct.isMeshStandardMaterial?Et:vt).get(ct.envMap||kt),Zt=ct.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ee=!!ht.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Kt=!!ht.morphAttributes.position,ae=!!ht.morphAttributes.normal,Oe=!!ht.morphAttributes.color;let an=Wi;ct.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(an=A.toneMapping);const Ke=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Fe=Ke!==void 0?Ke.length:0,Jt=T.get(ct),Pe=N.state.lights;if(Pt===!0&&(re===!0||C!==et)){const Ln=C===et&&ct.id===st;Gt.setState(ct,C,Ln)}let ce=!1;ct.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Pe.state.version||Jt.outputColorSpace!==It||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isBatchedMesh&&Jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==Xt||ct.fog===!0&&Jt.fog!==Ot||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==ee||Jt.morphTargets!==Kt||Jt.morphNormals!==ae||Jt.morphColors!==Oe||Jt.toneMapping!==an||Jt.morphTargetsCount!==Fe)&&(ce=!0):(ce=!0,Jt.__version=ct.version);let wn=Jt.currentProgram;ce===!0&&(wn=Gs(ct,Q,nt));let Qi=!1,Dn=!1,mi=!1;const Ie=wn.getUniforms(),Un=Jt.uniforms;if(Yt.useProgram(wn.program)&&(Qi=!0,Dn=!0,mi=!0),ct.id!==st&&(st=ct.id,Dn=!0),Qi||et!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ie.setValue(k,"projectionMatrix",C.projectionMatrix),Ie.setValue(k,"viewMatrix",C.matrixWorldInverse);const Nn=Ie.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,ve.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&Ie.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ie.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),et!==C&&(et=C,Dn=!0,mi=!0)}if(Jt.needsLights&&(Pe.state.directionalShadowMap.length>0&&Ie.setValue(k,"directionalShadowMap",Pe.state.directionalShadowMap,Z),Pe.state.spotShadowMap.length>0&&Ie.setValue(k,"spotShadowMap",Pe.state.spotShadowMap,Z),Pe.state.pointShadowMap.length>0&&Ie.setValue(k,"pointShadowMap",Pe.state.pointShadowMap,Z)),nt.isSkinnedMesh){Ie.setOptional(k,nt,"bindMatrix"),Ie.setOptional(k,nt,"bindMatrixInverse");const Ln=nt.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ie.setValue(k,"boneTexture",Ln.boneTexture,Z))}nt.isBatchedMesh&&(Ie.setOptional(k,nt,"batchingTexture"),Ie.setValue(k,"batchingTexture",nt._matricesTexture,Z),Ie.setOptional(k,nt,"batchingIdTexture"),Ie.setValue(k,"batchingIdTexture",nt._indirectTexture,Z),Ie.setOptional(k,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ie.setValue(k,"batchingColorTexture",nt._colorsTexture,Z));const yn=ht.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&he.update(nt,ht,wn),(Dn||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,Ie.setValue(k,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Un.envMap.value=Xt,Un.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Q.environment!==null&&(Un.envMapIntensity.value=Q.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=ZA()),Dn&&(Ie.setValue(k,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&Zr(Un,mi),Ot&&ct.fog===!0&&ne.refreshFogUniforms(Un,Ot),ne.refreshMaterialUniforms(Un,ct,ft,J,N.state.transmissionRenderTarget[C.id]),Zc.upload(k,ol(Jt),Un,Z)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Zc.upload(k,ol(Jt),Un,Z),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ie.setValue(k,"center",nt.center),Ie.setValue(k,"modelViewMatrix",nt.modelViewMatrix),Ie.setValue(k,"normalMatrix",nt.normalMatrix),Ie.setValue(k,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Ln=ct.uniformsGroups;for(let Nn=0,Vs=Ln.length;Nn<Vs;Nn++){const Ri=Ln[Nn];j.update(Ri,wn),j.bind(Ri,wn)}}return wn}function Zr(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function Ca(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,Q,ht){const ct=T.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=Q,T.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ht,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const ht=T.get(C);ht.__webglFramebuffer=Q,ht.__useDefaultFramebuffer=Q===void 0};const wa=k.createFramebuffer();this.setRenderTarget=function(C,Q=0,ht=0){X=C,V=Q,tt=ht;let ct=null,nt=!1,Ot=!1;if(C){const It=T.get(C);if(It.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(k.FRAMEBUFFER,It.__webglFramebuffer),P.copy(C.viewport),B.copy(C.scissor),K=C.scissorTest,Yt.viewport(P),Yt.scissor(B),Yt.setScissorTest(K),st=-1;return}else if(It.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(It.__hasExternalTextures)Z.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(It.__boundDepthTexture!==ee){if(ee!==null&&T.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ot=!0);const Zt=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[Q])?ct=Zt[Q][ht]:ct=Zt[Q],nt=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?ct=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?ct=Zt[ht]:ct=Zt,P.copy(C.viewport),B.copy(C.scissor),K=C.scissorTest}else P.copy(it).multiplyScalar(ft).floor(),B.copy(lt).multiplyScalar(ft).floor(),K=Tt;if(ht!==0&&(ct=wa),Yt.bindFramebuffer(k.FRAMEBUFFER,ct)&&Yt.drawBuffers(C,ct),Yt.viewport(P),Yt.scissor(B),Yt.setScissorTest(K),nt){const It=T.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,It.__webglTexture,ht)}else if(Ot){const It=Q;for(let Xt=0;Xt<C.textures.length;Xt++){const Zt=T.get(C.textures[Xt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Xt,Zt.__webglTexture,ht,It)}}else if(C!==null&&ht!==0){const It=T.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,It.__webglTexture,ht)}st=-1},this.readRenderTargetPixels=function(C,Q,ht,ct,nt,Ot,kt,It=0){if(!(C&&C.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Xt=Xt[kt]),Xt){Yt.bindFramebuffer(k.FRAMEBUFFER,Xt);try{const Zt=C.textures[It],ee=Zt.format,Kt=Zt.type;if(!Ue.textureFormatReadable(ee)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Kt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ct&&ht>=0&&ht<=C.height-nt&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),k.readPixels(Q,ht,ct,nt,Ct.convert(ee),Ct.convert(Kt),Ot))}finally{const Zt=X!==null?T.get(X).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ht,ct,nt,Ot,kt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Xt=Xt[kt]),Xt)if(Q>=0&&Q<=C.width-ct&&ht>=0&&ht<=C.height-nt){Yt.bindFramebuffer(k.FRAMEBUFFER,Xt);const Zt=C.textures[It],ee=Zt.format,Kt=Zt.type;if(!Ue.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.bufferData(k.PIXEL_PACK_BUFFER,Ot.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),k.readPixels(Q,ht,ct,nt,Ct.convert(ee),Ct.convert(Kt),0);const Oe=X!==null?T.get(X).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,Oe);const an=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hM(k,an,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ot),k.deleteBuffer(ae),k.deleteSync(an),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,ht=0){const ct=Math.pow(2,-ht),nt=Math.floor(C.image.width*ct),Ot=Math.floor(C.image.height*ct),kt=Q!==null?Q.x:0,It=Q!==null?Q.y:0;Z.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ht,0,0,kt,It,nt,Ot),Yt.unbindTexture()};const us=k.createFramebuffer(),Da=k.createFramebuffer();this.copyTextureToTexture=function(C,Q,ht=null,ct=null,nt=0,Ot=null){Ot===null&&(nt!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=nt,nt=0):Ot=0);let kt,It,Xt,Zt,ee,Kt,ae,Oe,an;const Ke=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ht!==null)kt=ht.max.x-ht.min.x,It=ht.max.y-ht.min.y,Xt=ht.isBox3?ht.max.z-ht.min.z:1,Zt=ht.min.x,ee=ht.min.y,Kt=ht.isBox3?ht.min.z:0;else{const yn=Math.pow(2,-nt);kt=Math.floor(Ke.width*yn),It=Math.floor(Ke.height*yn),C.isDataArrayTexture?Xt=Ke.depth:C.isData3DTexture?Xt=Math.floor(Ke.depth*yn):Xt=1,Zt=0,ee=0,Kt=0}ct!==null?(ae=ct.x,Oe=ct.y,an=ct.z):(ae=0,Oe=0,an=0);const Fe=Ct.convert(Q.format),Jt=Ct.convert(Q.type);let Pe;Q.isData3DTexture?(Z.setTexture3D(Q,0),Pe=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Pe=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Pe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const ce=k.getParameter(k.UNPACK_ROW_LENGTH),wn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qi=k.getParameter(k.UNPACK_SKIP_PIXELS),Dn=k.getParameter(k.UNPACK_SKIP_ROWS),mi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kt);const Ie=C.isDataArrayTexture||C.isData3DTexture,Un=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const yn=T.get(C),Ln=T.get(Q),Nn=T.get(yn.__renderTarget),Vs=T.get(Ln.__renderTarget);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Ri=0;Ri<Xt;Ri++)Ie&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(C).__webglTexture,nt,Kt+Ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(Q).__webglTexture,Ot,an+Ri)),k.blitFramebuffer(Zt,ee,kt,It,ae,Oe,kt,It,k.DEPTH_BUFFER_BIT,k.NEAREST);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||T.has(C)){const yn=T.get(C),Ln=T.get(Q);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,us),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Da);for(let Nn=0;Nn<Xt;Nn++)Ie?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,nt,Kt+Nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,nt),Un?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ln.__webglTexture,Ot,an+Nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ln.__webglTexture,Ot),nt!==0?k.blitFramebuffer(Zt,ee,kt,It,ae,Oe,kt,It,k.COLOR_BUFFER_BIT,k.NEAREST):Un?k.copyTexSubImage3D(Pe,Ot,ae,Oe,an+Nn,Zt,ee,kt,It):k.copyTexSubImage2D(Pe,Ot,ae,Oe,Zt,ee,kt,It);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Un?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Pe,Ot,ae,Oe,an,kt,It,Xt,Fe,Jt,Ke.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(Pe,Ot,ae,Oe,an,kt,It,Xt,Fe,Ke.data):k.texSubImage3D(Pe,Ot,ae,Oe,an,kt,It,Xt,Fe,Jt,Ke):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ot,ae,Oe,kt,It,Fe,Jt,Ke.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ot,ae,Oe,Ke.width,Ke.height,Fe,Ke.data):k.texSubImage2D(k.TEXTURE_2D,Ot,ae,Oe,kt,It,Fe,Jt,Ke);k.pixelStorei(k.UNPACK_ROW_LENGTH,ce),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mi),Ot===0&&Q.generateMipmaps&&k.generateMipmap(Pe),Yt.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){V=0,tt=0,X=null,Yt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const hn={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},vv={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},xv={padding:"10px",background:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},Kc={fontSize:"11px",color:"#888",marginBottom:"6px"},cx={...hn,padding:"2px",fontSize:"8px",lineHeight:"1"};function ux({label:r,defaultOpen:t=!0,style:i=xv,children:s}){const[l,c]=Vt.useState(t);return yt.jsxs("div",{style:i??xv,children:[yt.jsx("div",{onClick:()=>c(f=>!f),style:{cursor:"pointer"},children:r}),l&&s]})}function QA({grouping:r,selectedIds:t,onDeselect:i,adsorbToAxis:s,saveGroupAsPreset:l,presetPanel:c}){const{groups:f,activeGroup:h,newGroupName:m,setNewGroupName:p,createGroup:g,selectGroup:_,deleteGroup:x,confirmRename:y}=r,E=m.trim()&&m.trim()!==h;return yt.jsxs(ux,{label:yt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"分组"}),children:[yt.jsxs("div",{style:{gap:"6px",display:"flex",flexWrap:"wrap",...Kc},children:[t.size>1&&yt.jsx("button",{onClick:g,style:{...hn,color:"#6bd5ff"},children:"创建分组 (Ctrl+G)"}),h&&yt.jsx("button",{onClick:()=>E?y():i(),style:{...hn,color:E?"#8ab4f8":"#aaa"},children:E?"重命名":"取消选择"}),h&&yt.jsx("button",{onClick:()=>x(h),style:{...hn,color:"#ff6b6b"},children:"取消分组 (Ctrl+Shift+G)"}),h&&yt.jsx("button",{onClick:()=>l(h),style:{...hn,color:"#817f0d"},children:"💾 存为预设"}),h&&t.size>0&&yt.jsx("button",{onClick:()=>s(),style:{...hn,color:"#972cbe"},children:"吸附轴线"})]}),yt.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginBottom:"4px",flexWrap:"wrap"},children:Object.entries(f).map(([b,S])=>h===b?yt.jsx("input",{autoFocus:!0,value:m,placeholder:b,onChange:v=>p(v.target.value),onKeyDown:v=>{v.key==="Enter"&&(m.trim()!==b?y():i()),v.key==="Escape"&&i()},style:{padding:"2px 6px",borderRadius:"10px",fontSize:"11px",background:"rgba(68,136,255,0.15)",border:"1px solid #4488ff",color:"#e0e0e0",outline:"none",width:"80px"}},b):yt.jsxs("span",{onClick:()=>_(b),style:{padding:"2px 8px",borderRadius:"10px",fontSize:"11px",cursor:"pointer",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",color:"#aaa"},children:[b," ",yt.jsxs("span",{style:{opacity:.5},children:["(",S.size,")"]}),yt.jsx("button",{onClick:v=>{v.stopPropagation(),x(b)},style:{...cx,color:"#ff6b6b"},title:"删除组",children:"✕"})]},b))}),h&&yt.jsx("div",{style:{fontSize:"10px",color:"#555",marginTop:"6px"},children:"↑↓←→ 移动 · PgUp/Home PgDn/End Tab/Shift+Tab 旋转"}),c&&yt.jsxs("div",{style:{alignItems:"center",gap:"6px",...Kc,marginTop:"8px"},children:[yt.jsx("div",{style:Kc,children:"预设结构"}),yt.jsx("div",{className:"group-panel-footer",children:c})]})]})}const JA={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},$A={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},tR=["X","Y","Z"];function jo({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return yt.jsxs("div",{children:[yt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),yt.jsx("div",{style:$A,children:tR.map((h,m)=>{var p;return yt.jsx("input",{placeholder:h,disabled:!s,style:{...JA,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const y={...x,[r]:[...x[r]]};return y[r][m]=_,y})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},h)})})]})}function eR({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,onToggle:l,onResetVel:c,onPerturb:f,onSimSpeedChange:h}){return yt.jsxs("div",{children:[yt.jsx("button",{onClick:l,style:{width:"100%",padding:"8px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),yt.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[yt.jsx("button",{onClick:c,style:hn,children:"重置速度"}),yt.jsx("button",{onClick:f,style:hn,children:"扰动位置"})]}),yt.jsxs("div",{style:{marginTop:"10px"},children:[yt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),yt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),yt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),yt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:m=>h(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(m.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]})]})}function nR({magnets:r,selectedId:t,refYId:i,setRefYId:s,onReframe:l}){const c=t!==null&&i!==null&&t!==i;return yt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:yt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[yt.jsxs("select",{value:i??"",onChange:f=>s(f.target.value===""?null:parseInt(f.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[yt.jsx("option",{value:"",children:"— y 方向参考球 —"}),r.map(f=>yt.jsxs("option",{value:f.id,children:["球 #",f.id]},f.id))]}),yt.jsx("button",{onClick:l,disabled:!c,style:{...hn,opacity:c?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})})}function iR({selectedIds:r,selectedMag:t,isSimulating:i,onToggle:s,onToggleFixed:l,onRemove:c,children:f}){return yt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[yt.jsxs("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:[r.size>0?"Shift+单击多选":"单击选择",yt.jsxs("span",{children:[" (",r.size,")"]})]}),r.size>0&&yt.jsx("div",{style:{display:"flex",gap:"3px",flexWrap:"wrap",marginBottom:"6px"},children:[...r].map(h=>yt.jsxs("span",{style:{padding:"0 5px",borderRadius:"3px",fontSize:"10px",background:"rgba(68,136,255,0.15)",border:"1px solid rgba(68,136,255,0.3)",color:"#8ab4f8"},children:["#",h]},h))}),yt.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[yt.jsx("button",{onClick:s,style:{...hn,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),yt.jsx("button",{onClick:l,style:{...hn,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),r.size>0&&yt.jsx("button",{onClick:c,style:{...hn,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),f]})}function aR({isSimulating:r,editDraft:t,setEditDraft:i,onCommit:s}){const l={draft:t,setDraft:i,onCommit:s};return yt.jsxs(yt.Fragment,{children:[yt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[r?"数据":"编辑数据",yt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:r?"":"(回车确认 · ctrl + z 撤销)"})]}),t&&yt.jsxs(yt.Fragment,{children:[yt.jsx(jo,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!r,...l}),yt.jsx(jo,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!r,...l}),yt.jsx(jo,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!r,...l}),yt.jsx(jo,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...l}),yt.jsx(jo,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...l})]})]})}function ed({label:r,checked:t,onChange:i}){return yt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[yt.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),yt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}function sR({presets:r,customPresets:t,setCustomPresets:i,applyPreset:s}){const l=(h,m)=>{h.dataTransfer.setData("text/x-preset-name",m.toString().trim()),h.dataTransfer.effectAllowed="copy"},c={fontSize:"10px",color:"#666",marginTop:"8px",marginBottom:"4px"},f={display:"flex",gap:"4px"};return yt.jsxs("div",{children:[Object.keys(t).length>0&&yt.jsxs(yt.Fragment,{children:[yt.jsx("div",{style:c,children:"自定义预设"}),yt.jsx("div",{style:{...f,flexWrap:"wrap"},children:Object.entries(t).map(([h,m])=>yt.jsxs("button",{draggable:!0,onDragStart:p=>l(p,h),style:vv,children:[h,yt.jsxs("span",{style:{opacity:.5},children:["(",m.magnets.length,")"]}),yt.jsx("button",{onClick:p=>{p.stopPropagation(),i(g=>{const _={...g};return delete _[h],_})},style:{...cx,color:"#ff6b6b",cursor:"pointer"},title:"删除预设",children:"✕"})]},h))})]}),yt.jsxs(yt.Fragment,{children:[Object.keys(t).length>0&&yt.jsx("div",{style:c,children:"默认预设"}),yt.jsx("div",{style:{...f,flexWrap:"wrap"},children:r.map(h=>yt.jsx("button",{draggable:!0,onDragStart:m=>l(m,h),onClick:()=>s(h),style:vv,children:h},h))})]})]})}function rR({importMagnets:r}){return yt.jsx("button",{onDragOver:t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"},onDrop:t=>{var s;t.preventDefault();const i=(s=t.dataTransfer.files)==null?void 0:s[0];i?i.text().then(r):r(t.dataTransfer.getData("text"))},onPaste:t=>{const i=t.clipboardData.getData("text");i&&r(i)},tabIndex:0,style:{...hn,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a",textAlign:"center",cursor:"pointer",outline:"none"},children:"📥 导入 (粘贴/拖放)"})}function oR(r,t){const i=t.clone().sub(r.clone().multiplyScalar(t.dot(r)));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=r.clone().cross(i);return c=>new H(c.dot(r),c.dot(i),c.dot(s))}function $d(r){const t=new H;for(const i of r)t.add(i);return t.multiplyScalar(1/r.length)}function lR(r,t,i){const s=r.filter(b=>t.has(b.id));if(s.length<2)return null;const l=s.map(b=>b.pos.clone().sub(i)),c=l.length,f=[[0,0,0],[0,0,0],[0,0,0]];for(const b of l){const S=[b.x,b.y,b.z];for(let v=0;v<3;v++)for(let D=0;D<3;D++)f[v][D]+=S[v]*S[D]}for(let b=0;b<3;b++)for(let S=0;S<3;S++)f[b][S]/=c;const{eigenvalues:h,eigenvectors:m}=cR(f),p=[0,1,2];p.sort((b,S)=>h[S]-h[b]);let g=new H(...m[p[0]]),_=new H(...m[p[1]]),x;g.x<0&&(g.negate(),_.negate()),_.y<0&&_.negate(),x=g.clone().cross(_).normalize(),_.copy(x).cross(g).normalize();const E=new tn().makeBasis(g,_,x).clone().invert();return new Ra().setFromRotationMatrix(E)}function cR(r){const t=r.map(s=>[...s]),i=[[1,0,0],[0,1,0],[0,0,1]];for(let s=0;s<100;s++){let l=0,c=0,f=1;for(let _=0;_<3;_++)for(let x=_+1;x<3;x++)Math.abs(t[_][x])>l&&(l=Math.abs(t[_][x]),c=_,f=x);if(l<1e-12)break;const h=.5*Math.atan2(2*t[c][f],t[c][c]-t[f][f]),m=Math.cos(h),p=Math.sin(h),g=t.map(_=>[..._]);for(let _=0;_<3;_++)_===c||_===f||(g[_][c]=g[c][_]=m*t[_][c]+p*t[_][f],g[_][f]=g[f][_]=-p*t[_][c]+m*t[_][f]);g[c][c]=m*m*t[c][c]+2*p*m*t[c][f]+p*p*t[f][f],g[f][f]=p*p*t[c][c]-2*p*m*t[c][f]+m*m*t[f][f],g[c][f]=g[f][c]=0;for(let _=0;_<3;_++)for(let x=0;x<3;x++)t[_][x]=g[_][x];for(let _=0;_<3;_++){const x=i[_][c],y=i[_][f];i[_][c]=m*x+p*y,i[_][f]=-p*x+m*y}}return{eigenvalues:[t[0][0],t[1][1],t[2][2]],eigenvectors:[[i[0][0],i[1][0],i[2][0]],[i[0][1],i[1][1],i[2][1]],[i[0][2],i[1][2],i[2][2]]]}}let fx=0;function uR(){fx=0}function Mp(r={}){return{id:r.id??fx++,pos:r.pos?r.pos.clone():new H,vel:r.vel?r.vel.clone():new H,moment:r.moment?r.moment.clone():new H(1,0,0),omega:r.omega?r.omega.clone():new H,color:r.color??"#93b5c9",group:r.group??"",f:new H,tau:new H,fixed:r.fixed??!1}}function fR(r,t=.001){const i=new H((Math.random()-.5)*t,(Math.random()-.5)*t,(Math.random()-.5)*t);return uu(r,{pos:r.pos.clone().add(i)})}function uu(r,t){return{...r,...t}}function Zo(r,t=6,i=1){return r?r.toArray().map(s=>(s*i).toFixed(t)):"(undefined)"}function tp(r){const t=new H;return{m_pos:Zo(r.pos,6,1e3),m_vel:Zo(r.vel??t,6,1e3),moment:Zo(r.moment),f:Zo(r.f??t),tau:Zo(r.tau??t)}}function hR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(h=>h.id===t),l=r.find(h=>h.id===i);if(!s||!l)return;const c=oR(s.moment,l.pos.clone().sub(s.pos));if(!c)return;const f=s.pos;return r.map(h=>uu(h,{pos:c(h.pos.clone().sub(f)),vel:c(h.vel??new H),moment:c(h.moment),f:c(h.f??new H),tau:c(h.tau??new H)}))}function hx(r,t,i,s){const l=s*2*.999,c=new Map,f=r.length;for(let h=0;h<f;h++){if(!t.has(r[h].id))continue;const m=new H(...r[h].pos).add(i);c.set(r[h].id,m);for(const{id:p,pos:g}of r){if(t.has(p))continue;if(m.distanceTo(g)<l)return}}return c}function dx(r,t,i,s,l){const c=l*2*.999,f=new Map,h=r.length;for(let m=0;m<h;m++){if(!t.has(r[m].id))continue;const p=i.clone().add(r[m].pos.clone().sub(i).applyQuaternion(s));f.set(r[m].id,{pos:p});for(const{id:g,pos:_}of r){if(t.has(g))continue;if(p.distanceTo(_)<c)return}}return f.forEach((m,p)=>{const g=r.find(_=>_.id===p);f.get(p).moment=g.moment.clone().applyQuaternion(s)}),f}function dR(r,t){return r.map(i=>({...i,pos:i.pos.multiplyScalar(t)})).map(Mp)}function pR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.toArray().join(", "),moment:c.moment.toArray().join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function mR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const h=f.split(",").map(m=>parseFloat(m.trim()));if(h.length===3&&h.every(m=>!isNaN(m)))return new H(...h)}return f};for(const f of t.magnets){const h={};for(const[m,p]of Object.entries(f))h[m]=c(p);h.pos,h.moment.normalize(),l.push(h)}return{name:i,unit:s,magnets:l}}function px(r,t){const{name:i,unit:s,magnets:l}=mR(r),c={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(s in c))throw new Error(`Unknown unit in preset: ${s}`);const f=c[s];return{name:i,scale:f,magnets:dR(l,f)}}async function nd(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,scale:c,magnets:f}=px(s,t);return{name:l||r,magnets:f}}catch{if(r in ep){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=ep[r]();return l.map(c=>c.pos.multiplyScalar(t)),{name:r,magnets:l.map(Mp)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function gR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(ep).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const ep={chain:()=>Array.from({length:5},(r,t)=>({pos:new H((t-2)*2*1.1,0,0),m:new H(1,0,0),color:t%2?"#4444ff":"#ff4444"})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:new H(s*Math.cos(i),s*Math.sin(i),0),m:new H(Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0),color:t%2?"#4444ff":"#ff4444"}}),random:()=>Array.from({length:8},(r,t)=>({pos:new H((Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4),m:new H(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),color:t%2?"#4444ff":"#ff4444"})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map(i=>new H(...i)).map((i,s)=>({pos:i.multiplyScalar(2.4),m:new H(0,0,s<4?1:-1),color:s<4?"#ff4444":"#4444ff"}))};function _R(r,t=""){let i=t.trim(),s=`${t.trim()}-`,l=1;for(t===""&&(s="#",i=`#${l}`);r[i];l++)i=`${s}${l}`;return i}function vR({selectedIds:r,setSelectedIds:t,keyTrapRef:i,stateRef:s}){const[l,c]=Vt.useState({}),[f,h]=Vt.useState(null),[m,p]=Vt.useState(""),g=Vt.useCallback(()=>{const S=new Set;if(f&&l[f])for(const v of l[f])S.add(v);return S},[f,l]),_=Vt.useCallback(()=>{if(r.size===0)return;const S=_R(l,m.trim()||"");c(v=>({...v,[S]:new Set(r)})),p(S),h(S),setTimeout(()=>{i.current&&i.current.focus()},0)},[r,l,m]),x=Vt.useCallback(S=>{c(v=>{const D={...v};return delete D[S],D}),f===S&&h(null)},[f]),y=Vt.useCallback(S=>{if(f===S){h(null),p("");return}t(new Set(l[S]||[])),h(S),p(""),setTimeout(()=>{i.current&&i.current.focus()},0)},[f,l,t]),E=Vt.useCallback(()=>{if(!f||!m.trim())return;const S=m.trim();if(S===f){p("");return}l[S]||(c(v=>{const D={};for(const[U,w]of Object.entries(v))D[U===f?S:U]=w;return D}),h(S),p(""))},[f,m,l]),b=Vt.useCallback(S=>{c(v=>{const D={};for(const[U,w]of Object.entries(v)){const N=new Set([...w].filter(z=>!S.has(z)));N.size>0&&(D[U]=N)}return D})},[]);return Vt.useEffect(()=>{const S=v=>{v.target.tagName==="INPUT"&&v.target!==i.current||((v.key==="g"||v.key==="G")&&(v.ctrlKey||v.metaKey)?(v.preventDefault(),v.stopPropagation(),v.stopImmediatePropagation(),v.shiftKey?f&&x(f):_()):(v.key==="a"||v.key==="A")&&(v.ctrlKey||v.metaKey)&&(v.preventDefault(),v.stopPropagation(),v.stopImmediatePropagation(),t(D=>{const U=f?[...l[f]||[]]:s.current.magnets.map(N=>N.id),w=v.shiftKey?U.filter(N=>!D.has(N)):U;return new Set(w)})))};return window.addEventListener("keydown",S,!0),()=>window.removeEventListener("keydown",S,!0)},[_,x,f,l,t]),{groups:l,setGroups:c,activeGroup:f,setActiveGroup:h,newGroupName:m,setNewGroupName:p,getIdsInActiveGroup:g,createGroup:_,deleteGroup:x,selectGroup:y,confirmRename:E,cleanupIds:b}}function xR(r,t,i){if(!t||!i)return 0;const s=r??new H(0,0,0),l=t.position.distanceTo(s),c=t.fov*Math.PI/180;return i.domElement.height/(2*l*Math.tan(c/2))}function yR(r){const t=new H;r.getWorldDirection(t);const i=new H;i.crossVectors(t,r.up).normalize();const s=new H;return s.crossVectors(i,t).normalize(),{forward:t,right:i,up:s}}function SR({stateRef:r,cameraRef:t,rendererRef:i,setMagnets:s,needsSyncRef:l,getIdsInActiveGroup:c},f,h,m){return{handleKeyDown:Vt.useCallback(g=>{if(r.current.isSimulating)return;const _=c();if(_.size===0)return;const x=t.current;if(!x)return;const{forward:y,right:E,up:b}=yR(x),S=$d(r.current.magnets.filter(w=>_.has(w.id)).map(w=>w.pos)),v=f/h/xR(S,x,i.current);let D=null,U=null;switch(g.key){case"ArrowRight":D=E.multiplyScalar(v);break;case"ArrowLeft":D=E.multiplyScalar(-v);break;case"ArrowUp":D=b.multiplyScalar(v);break;case"ArrowDown":D=b.multiplyScalar(-v);break;case"PageUp":U=E.negate();break;case"PageDown":U=E;break;case"Home":U=b.negate();break;case"End":U=b;break;case"Tab":U=g.shiftKey?y.negate():y;break}if(D)g.preventDefault(),s(w=>{const N=hx(w,_,D,m);return N?w.map(z=>_.has(z.id)?{...z,pos:N.get(z.id)}:z):w});else if(U){g.preventDefault();const w=Math.atan2(v,m),N=U,z=new Ra().setFromAxisAngle(N,w);s(O=>{const q=dx(O,_,S,z,m);return q?O.map(A=>{if(!_.has(A.id))return A;const L=q.get(A.id);return{...A,pos:L.pos,moment:L.moment}}):O})}},[c,m])}}const MR=32,Or=.1;function ER({magnetWorldRef:r,stateRef:t,needsSyncRef:i,selectedIdsRef:s},{setMagnets:l,setEditDraft:c,setTotalSimTime:f,setIsSimulating:h}){const m=Vt.useRef("");return{tick:Vt.useCallback(()=>{const{magnets:g,isSimulating:_,simSpeed:x,useGravity:y}=t.current,E=r.current;if(!_||!E||g.length<2)return;const{newMagnets:b,safedt:S,reason:v}=E.step(g,x,y);m.current=`${S*1e3}ms (${v})`,f(N=>N+S);const D=new Map(g.map((N,z)=>[N.id,z])),U=b.map((N,z)=>{const O=new H(Math.max(Math.min(N.pos.x,Or),-Or),Math.max(Math.min(N.pos.y,Or),-Or),Math.max(Math.min(N.pos.z,Or),-Or));if(O.x!==N.pos.x||O.y!==N.pos.y||O.z!==N.pos.z)throw`磁铁${N.id}位置超出边界: ${N.pos.toArray().map(q=>(q*1e3).toFixed(1)).join(",")}mm`;return uu(g[D.get(N.id)],{...N,pos:O})});l(U),i.current=!0;const w=s.current;if(w.size===1){const N=U.find(z=>w.has(z.id));N&&c(z=>z&&{...z,...tp(N)})}},[t,r,i,s,l,c,f]),stepDeltaTimeRef:m}}function bR({containerRef:r,sceneRef:t,cameraRef:i,rendererRef:s,controlsRef:l},{ready:c,tick:f,onBeforeRender:h}){const m=Vt.useRef(null);Vt.useEffect(()=>{const p=r.current,g=t.current,_=i.current,x=s.current,y=l.current;if(!p||!g||!_||!x||!c)return;let E=performance.now();const b=S=>{m.current=requestAnimationFrame(b),S-E>MR&&(f(),E=S),y==null||y.update(),h==null||h(),x.render(g,i.current)};return m.current=requestAnimationFrame(b),()=>{cancelAnimationFrame(m.current)}},[c,f,r,t,i,s,l,h])}const yv={type:"change"},Ep={type:"start"},mx={type:"end"},Gc=new su,Sv=new ya,TR=Math.cos(70*pM.DEG2RAD),Mn=new H,ti=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6;class AR extends tE{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Ra,this._lastTargetPosition=new H,this._quat=new Ra().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q_,this._sphericalDelta=new q_,this._scale=1,this._panOffset=new H,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new H,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CR.bind(this),this._onPointerDown=RR.bind(this),this._onPointerUp=wR.bind(this),this._onContextMenu=zR.bind(this),this._onMouseWheel=LR.bind(this),this._onKeyDown=NR.bind(this),this._onTouchStart=OR.bind(this),this._onTouchMove=PR.bind(this),this._onMouseDown=DR.bind(this),this._onMouseMove=UR.bind(this),this._interceptControlDown=FR.bind(this),this._interceptControlUp=IR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yv),this.update(),this.state=Ye.NONE}update(t=null){const i=this.object.position;Mn.copy(i).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ti:s>Math.PI&&(s-=ti),l<-Math.PI?l+=ti:l>Math.PI&&(l-=ti),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=Mn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new H(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Gc.origin.copy(this.object.position),Gc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gc.direction))<TR?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(yv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ti/60*this.autoRotateSpeed*t:ti/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Mn.setFromMatrixColumn(i,0),Mn.multiplyScalar(-t),this._panOffset.add(Mn)}_panUp(t,i){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(i,1):(Mn.setFromMatrixColumn(i,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(t),this._panOffset.add(Mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Mn.copy(l).sub(this.target);let c=Mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/i.clientHeight),this._rotateUp(ti*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/i.clientHeight),this._rotateUp(ti*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ue,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function RR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function CR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function wR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mx),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function DR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case zr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case zr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Ep)}function UR(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function LR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(Ep),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(mx))}function NR(r){this.enabled!==!1&&this._handleKeyDown(r)}function OR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Ep)}function PR(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function zR(r){this.enabled!==!1&&r.preventDefault()}function FR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BR(r,t,i,s,l){if(!r||!t)return new H;const c=r.getBoundingClientRect(),f=new ue((i-c.left)/c.width*2-1,-((s-c.top)/c.height)*2+1),h=new ix;h.setFromCamera(f,t);const m=new ya(new H(0,0,1),0),p=new H;return h.ray.intersectPlane(m,p)||h.ray.at(10,p),p.multiplyScalar(1/l)}function HR({containerRef:r,sceneRef:t,cameraRef:i,rendererRef:s,controlsRef:l},{magnets:c,selectedIds:f,ready:h,getIdsInActiveGroup:m,keyTrapRef:p},g,_,x){const y=Vt.useRef([]),E=Vt.useRef([]),b=Vt.useRef([]),S=Vt.useRef([]),v=Vt.useRef([]),D=Vt.useRef([]),[U,w]=Vt.useState(!0),[N,z]=Vt.useState(!0),O=Vt.useCallback(()=>{const X=i.current,st=l.current;!X||!st||(X.position.set(0,0,12),X.up.set(0,1,0),X.fov=50,X.updateProjectionMatrix(),st.target.set(0,0,0),st.update())},[]),q=Vt.useCallback(X=>{const st=i.current,et=l.current;if(!st||!et)return;const P=st.position.distanceTo(et.target),B=et.target.clone();X==="x"&&(B.x+=P,st.up.set(0,1,0)),X==="y"&&(B.y+=P,st.up.set(0,0,-1)),X==="z"&&(B.z+=P,st.up.set(0,1,0)),st.position.copy(B),et.update()},[]),A=Vt.useCallback(()=>{const X=i.current,st=s.current;if(!(!X||!st)){if(X.isPerspectiveCamera){const P=X.position.distanceTo(l.current.target)*Math.tan(X.fov*Math.PI/180/2),B=X.aspect,K=new ou(-P*B,P*B,P,-P,.01,1e3);K.position.copy(X.position),K.quaternion.copy(X.quaternion),i.current=K,l.current.object=K}else{const et=(X.top-X.bottom)/2,P=X.position.distanceTo(l.current.target),B=2*Math.atan(et/P)*180/Math.PI,K=new fi(B,X.right/X.top,.01,1e3);K.position.copy(X.position),K.quaternion.copy(X.quaternion),i.current=K,l.current.object=K}l.current.update()}},[]);Vt.useEffect(()=>{const X=r.current;if(!X||!h)return;let st=X.clientWidth||800,et=X.clientHeight||600;const P=new IM;P.background=new Re("#0a0a15"),t.current=P;const B=new fi(50,st/et,.1,1e3);i.current=B;const K=new KA({antialias:!0});K.setSize(st,et),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.appendChild(K.domElement),s.current=K;const mt=new AR(B,K.domElement);mt.enableDamping=!0,mt.dampingFactor=.05,mt.rotateSpeed=.5,mt.zoomSpeed=.8,mt.panSpeed=.5,mt.minDistance=2,mt.maxDistance=50,l.current=mt,O();const gt=()=>{p.current&&document.activeElement!==p.current&&p.current.focus()};mt.addEventListener("end",gt),P.add(new QM("#ffffff",.5));const F=new k_("#ffffff",.8);F.position.set(5,5,5),P.add(F);const J=new k_("#4466ff",.3);J.position.set(-5,-5,-5),P.add(J);const ft=new $M(16,16,"#333355","#222233");ft.rotation.x=Math.PI/2,P.add(ft);const bt=()=>{const wt=X.clientWidth||800,it=X.clientHeight||600,lt=i.current;if(lt){if(lt.isPerspectiveCamera)lt.aspect=wt/it;else{const Tt=wt/it,Dt=(lt.top-lt.bottom)/2;lt.left=-Dt*Tt,lt.right=Dt*Tt}lt.updateProjectionMatrix(),K.setSize(wt,it)}};return window.addEventListener("resize",bt),()=>{window.removeEventListener("resize",bt),mt.removeEventListener("end",gt),mt.dispose(),K.dispose(),t.current=null,X.contains(K.domElement)&&X.removeChild(K.domElement)}},[h]),Vt.useEffect(()=>{const X=t.current;if(!X)return;const st=J=>{J&&(X.remove(J),J.geometry&&J.geometry.dispose(),J.material&&(Array.isArray(J.material)?J.material.forEach(ft=>ft.dispose()):J.material.dispose()),J.children&&J.children.forEach(st))};[...y.current,...E.current,...b.current,...S.current,...v.current,...D.current].forEach(st);const et=new H(0,1,0),P=[],B=[],K=[],mt=[],gt=[],F=[];c.forEach(J=>{const ft=new Sp(g,32,32),bt=new qM({color:J.color,metalness:.8,roughness:.2,emissive:J.color,emissiveIntensity:.15}),wt=new di(ft,bt);wt.userData.id=J.id,X.add(wt),P.push(wt);const it=new Jo(g*1.12,.02,16,64),lt=new nl({color:"#ffffff",depthTest:!0,depthWrite:!0,transparent:!1,opacity:.85}),Tt=new di(it,lt);Tt.visible=!1,Tt.renderOrder=999,X.add(Tt),gt.push(Tt);const Dt=new nl({color:"#ffffff",transparent:!0,opacity:.35,depthTest:!1}),Pt=new di(it,Dt);if(Pt.visible=!1,Pt.renderOrder=1e3,X.add(Pt),F.push(Pt),U){const re=new jh(et,new H,g*3.6,"#ffdd00",g*.5,g*.3);X.add(re),B.push(re)}else B.push(null);if(N){const re=new jh(et,new H,g,"#00ffff",g*.4,g*.24);re.visible=!1,X.add(re),K.push(re);const Ve=new jh(et,new H,g,"#ff00ff",g*.32,g*.2);Ve.visible=!1,X.add(Ve),mt.push(Ve)}else K.push(null),mt.push(null)}),y.current=P,E.current=B,b.current=K,S.current=mt,v.current=gt,D.current=F},[c.length,U,N,h]),Vt.useEffect(()=>{const X=i.current,st=s.current;if(!t.current||!X||!st)return;const et=y.current,P=E.current,B=b.current,K=S.current;c.forEach((mt,gt)=>{const F=mt.pos.clone().multiplyScalar(_),J=et[gt];if(J&&(J.position.copy(F),J.material.emissiveIntensity=f.has(mt.id)?.4:.15),U){const ft=P[gt];if(ft){const bt=mt.moment.clone().normalize();ft.position.copy(F),ft.setDirection(bt),ft.setLength(g*3.6,g*.5,g*.3)}}if(N){const ft=B[gt];if(ft){const wt=mt.f?mt.f.length():0;if(wt>1e-25){ft.visible=!0;const it=mt.f.clone().normalize(),lt=g*Math.min(6,Math.max(.5,Math.log10(wt+1e-10)+10));ft.position.copy(F),ft.setDirection(it),ft.setLength(lt,g*.4,g*.24)}else ft.visible=!1}const bt=K[gt];if(bt){const wt=mt.tau?mt.tau.length():0;if(wt>1e-25){bt.visible=!0;const it=mt.tau.clone().normalize(),lt=g*Math.min(5,Math.max(.4,Math.log10(wt+1e-10)+8));bt.position.copy(F),bt.setDirection(it),bt.setLength(lt,g*.32,g*.2)}else bt.visible=!1}}})},[c,f,U,N,h]);const L=Vt.useRef(c);L.current=c;const V=Vt.useRef(m);return V.current=m,{meshesRef:y,showMoments:U,showForceTorques:N,updateRings:()=>{const X=v.current,st=D.current,et=i.current,P=s.current;if(!et||!P)return;const B=V.current();L.current.forEach((K,mt)=>{const gt=X[mt],F=st[mt];if(!gt)return;const J=B.has(K.id);gt.visible=J,F.visible=J;const ft=K.pos.clone().multiplyScalar(_);if(!J)return;gt.position.copy(ft),F.position.copy(ft),gt.lookAt(et.position),F.lookAt(et.position);const bt=et.position.distanceTo(ft),wt=et.fov*Math.PI/180,it=P.domElement.height/(2*bt*Math.tan(wt/2)),lt=x/it,Tt=g+lt*1.5,Dt=lt*.5,Pt=gt.userData;(Math.abs(Tt-(Pt.majorR??0))>Tt*.005||Math.abs(Dt-(Pt.minorR??0))>Dt*.005)&&(gt.geometry.dispose(),gt.geometry=new Jo(Tt,Dt,8,64),gt.userData.majorR=Tt,gt.userData.minorR=Dt,F.geometry.dispose(),F.geometry=new Jo(g+lt*1.2,lt*.2,8,64))})},setShowMoments:w,setShowForceTorques:z,resetCamera:O,setCameraView:q,toggleProjection:A}}function GR({getMagnets:r,selectedId:t,onApplySnap:i}){const s=Vt.useRef([]),l=Vt.useRef(-1),c=m=>m.map(p=>({...p,pos:p.pos.clone(),vel:p.vel.clone(),moment:p.moment.clone()})),f=Vt.useCallback(m=>{const p=s.current;if(p.length>0){const g=p[p.length-1];if(VR(g,m))return}p.push(c(m)),p.length>100&&p.shift(),l.current=-1},[]),h=Vt.useCallback(()=>{s.current=[],l.current=-1},[]);return Vt.useEffect(()=>{const m=p=>{if(!(p.ctrlKey&&["z","Z"].includes(p.key)))return;p.preventDefault();const g=s.current;if(g.length!==0)if(p.shiftKey){if(l.current===-1)return;if(l.current++,l.current>=g.length-1){const _=g.pop();l.current=-1,i(_)}else i(g[l.current])}else{if(l.current===-1)g.push(c(r())),l.current=g.length-2;else if(l.current>0)l.current--;else return;i(g[l.current])}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[r,i,t]),{push:f,reset:h,histIdxRef:l}}function VR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const h=s[f],m=l[f];if(Array.isArray(h)&&Array.isArray(m)){if(h.length!==m.length||h.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(h instanceof H&&m instanceof H){if(h.distanceTo(m)>1e-12)return!1}else if(h!==m)return!1}}return!0}const gx=4*Math.PI*1e-7;function kR(r,t,i,s,l){const c=l.length(),f=l.clone().multiplyScalar(1/c),h=i.dot(f),m=s.dot(f),p=i.dot(s),g=4*Math.PI*gx*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:h,q:m,r:p,K:g,m1:i,m2:s,d:l}}function XR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function WR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:h,m2:m}=r,p=t**4,g=3*f/p,_=c-5*s*l;return i.clone().multiplyScalar(_).add(h.clone().multiplyScalar(l)).add(m.clone().multiplyScalar(s)).multiplyScalar(g)}function qR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:h}=r,m=c/t**3,p=f.clone().cross(h),g=f.clone().cross(i).multiplyScalar(-3*l).add(p).multiplyScalar(-m),_=h.clone().cross(i).multiplyScalar(-3*s).add(p.negate()).multiplyScalar(-m);return{tor1:g,tor2:_}}function YR(r,t,i,s,l){const c=kR(r,t,i,s,l),f=XR(c),h=WR(c),{tor1:m,tor2:p}=qR(c);return{U:f,force1:h.clone().negate(),force2:h,torque1:m,torque2:p}}const jR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3,rollingFriction:.005};class ZR{constructor(t={}){const i={...jR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.rollingFriction=i.rollingFriction,this.magnetization=i.br/gx,this.inertia=.4*i.mass*i.radius**2,this.diameter=i.radius*2}}function np(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Mv(r,t,i,s){if(Math.abs(r)<1e-20)return np(t,i,s);const l=t/r,c=i/r,f=s/r,h=l/3,m=c-l*l/3,p=f-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),y=Math.cbrt(-p/2-_);return[x+y-h]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,y=2*Math.cbrt(_);return[y*Math.cos(x)-h,y*Math.cos(x+2*Math.PI/3)-h,y*Math.cos(x+4*Math.PI/3)-h]}else{const _=Math.cbrt(-p/2);return[2*_-h,-_-h]}}function KR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Mv(t,i,s,l);const c=t/r,f=i/r,h=s/r,m=l/r,p=c/4,g=f-3*c*c/8,_=h-c*f/2+c*c*c/8,x=m-c*h/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const D=[];for(const U of np(1,g,x))if(U>=-1e-12){const w=Math.sqrt(Math.max(0,U));D.push(w-p,-w-p)}return D}const y=Mv(1,g/2,(g*g-4*x)/16,-_*_/64),E=Math.max(...y,1e-12),b=Math.sqrt(Math.max(E,0));if(b<1e-12)return[];const S=_/(4*b),v=[];for(const[D,U]of[[1,-S],[-1,S]])for(const w of np(1,D*b,g/2+E+U))v.push(w-p);return v}function ip(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],m=r[c].clone().sub(f),p=m.length();p<=t&&i.push({i:l,j:c,normal:m.multiplyScalar(1/p),dist:p})}return i}function Ev(r,t,i,s=null,l=20,c=1e-7){const f=r.map(x=>x.clone()),h=ip(f,t+i),m=t-i,p=t-i/2,g=s||r.map(()=>!1),_=new H;for(let x=0;x<l;x++){let y=0;for(const{i:E,j:b}of h){_.copy(f[b]).sub(f[E]);const S=_.length(),v=_.multiplyScalar(1/S);let D=0;if(S<m?(D=p-S,y=Math.max(y,t-S)):S<t&&(D=(t-S)*.5,y=Math.max(y,t-S)),D>c){const U=f[E],w=f[b],N=+g[E]-+g[b],z=D*((1-N)*.5),O=D*((1+N)*.5);U.x-=v.x*z,U.y-=v.y*z,U.z-=v.z*z,w.x+=v.x*O,w.y+=v.y*O,w.z+=v.z*O}}if(y<c)break}return f}function QR(r,t,i,s,l=null,c=.3,f=1e-7){const h=l||r.map(()=>!1),m=t.map((x,y)=>h[y]?new H(0,0,0):x.clone()),p=i.map((x,y)=>h[y]?new H(0,0,0):x.clone()),g=_x(s,h),_=new Float64Array(s.length);if(g.length>0){const x=g.map(E=>s[E]);a2(p,x,h,f);const y=JR(m,p,x,h,c,5,f);g.forEach((E,b)=>{_[E]=y[b]})}return{constrainedForces:m,constrainedVel:p,forceLambda:_}}function _x(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function JR(r,t,i,s,l=.3,c=5,f=1e-7){const h=i.length,m=new Float64Array(h);if(h===0)return m;const p=i.map(U=>e2(U.normal)),g=new Array(h).fill(!0),_=new H,x=i.map((U,w)=>{const{i:N,j:z,normal:O}=U;_.copy(t[z]).sub(t[N]);const q=_.dot(O),A=O.clone().multiplyScalar(q).sub(_).negate(),L=A.length();return L>f?(g[w]=!1,A.multiplyScalar(-1/L)):new H}),y=r.map(U=>U.clone()),E=i.map(()=>new H);for(let U=0;U<c;U++){const{A:w,b:N,eqMap:z}=Av(i,s,y,p,g),O=ap(w,N);if(!O)break;const q=bv(O,z,g);if($R(q,g,l,f)){for(let A=0;A<h;A++){m[A]=q[A].fn;const L=Tv(p[A],q[A],g[A],E[A]);Qc(r,i[A],L,s)}return m}r.forEach((A,L)=>y[L].copy(A));for(let A=0;A<h;A++)g[A]||(t2(p[A],q[A],E[A],x[A],l,f),Qc(y,i[A],E[A],s))}const{A:b,b:S,eqMap:v}=Av(i,s,y,p,g),D=ap(b,S);if(D){const U=bv(D,v,g);for(let w=0;w<h;w++){m[w]=U[w].fn;const N=Tv(p[w],U[w],g[w],E[w]);Qc(r,i[w],N,s)}}return m}function Qc(r,t,i,s){const{i:l,j:c}=t;s[l]||r[l].add(i),s[c]||r[c].sub(i)}function bv(r,t,i){return Array.from(t,(s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,h=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:h}})}function $R(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:h,ft2:m}=r[c],p=Math.sqrt(h*h+m*m),g=i*Math.abs(f);t[c]&&p>g+s?(t[c]=!1,l=!1):!t[c]&&p<=g-s}return l}function Tv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[h,m,p]=r,g=new H(l*h.x+c*m.x+f*p.x,l*h.y+c*m.y+f*p.y,l*h.z+c*m.z+f*p.z);return i||g.add(s),g}function t2(r,t,i,s,l,c){const[f,h,m]=r,{fn:p,ft1:g,ft2:_}=t,x=l*Math.abs(p);if(s.x!==0||s.y!==0||s.z!==0)i.copy(s).multiplyScalar(x);else{const y=Math.sqrt(g*g+_*_);if(y>c){const E=x/y;i.x=(g*h.x+_*m.x)*E,i.y=(g*h.y+_*m.y)*E,i.z=(g*h.z+_*m.z)*E}else i.set(0,0,0)}}function e2(r){const i=(Math.abs(r.x)<.9?new H(1,0,0):new H(0,1,0)).cross(r).normalize().negate(),s=r.clone().cross(i);return[r,i,s]}function Av(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let h=0;for(let y=0;y<c;y++)f[y]=h,h+=l[y]?3:1;const m=[],p=[],g=[],_=new Float64Array(h);for(let y=0;y<c;y++){const E=r[y],b=E.i,S=E.j,v=t[b]?0:1,D=t[S]?0:1,U=l[y]?3:1;for(let w=0;w<U;w++){const N=s[y][w],z=f[y]+w;_[z]=v*i[b].dot(N)-D*i[S].dot(N);for(let O=0;O<c;O++){const q=r[O],A=q.i,L=q.j,V=l[O]?3:1;for(let tt=0;tt<V;tt++){const X=s[O][tt],st=f[O]+tt,et=N.dot(X);let P=0;b===A&&(P-=v*et),b===L&&(P+=v*et),S===A&&(P+=D*et),S===L&&(P-=D*et),Math.abs(P)>1e-15&&(m.push(z),p.push(st),g.push(P))}}}}return{A:vx(h,m,p,g),b:_,neq:h,eqMap:f}}function vx(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],h=new Int32Array(f),m=new Float64Array(f),p=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],x=c[_]+p[_];let y=!1;for(let E=c[_];E<x;E++)if(h[E]===i[g]){m[E]+=s[g],y=!0;break}y||(h[x]=i[g],m[x]=s[g],p[_]++)}return{n:r,rowPtr:c,colIdx:h,values:m}}function n2(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],h=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],x=_.i,y=_.j,E=_.normal,b=i[x]?0:1,S=i[y]?0:1;c[g]=b*s[x].dot(E)-S*s[y].dot(E);for(let v=0;v<l;v++){const D=r[t[v]],U=D.i,w=D.j,N=D.normal,z=E.dot(N);let O=0;x===U&&(O-=b*z),x===w&&(O+=b*z),y===U&&(O+=S*z),y===w&&(O-=S*z),Math.abs(O)>1e-15&&(f.push(g),h.push(v),m.push(O))}}return{A:vx(l,f,h,m),b:c}}function ap(r,t){const i=r.n;if(i===0)return new Float64Array(0);const s=Array.from({length:i},()=>new Float64Array(i));let l=0;for(let p=0;p<i;p++)for(let g=r.rowPtr[p];g<r.rowPtr[p+1];g++){s[p][r.colIdx[g]]=r.values[g];const _=Math.abs(r.values[g]);_>l&&(l=_)}const c=new Float64Array(t),f=Math.max(l*i*22e-17,1e-20),h=new Uint8Array(i);for(let p=0;p<i;p++){let g=Math.abs(s[p][p]),_=p;for(let y=p+1;y<i;y++){const E=Math.abs(s[y][p]);E>g&&(g=E,_=y)}if(g<f){h[p]=0;continue}if(h[p]=1,_!==p){const y=s[p];s[p]=s[_],s[_]=y;const E=c[p];c[p]=c[_],c[_]=E}const x=s[p][p];for(let y=p+1;y<i;y++){const E=s[y][p]/x;s[y][p]=0;for(let b=p+1;b<i;b++)s[y][b]-=E*s[p][b];c[y]-=E*c[p]}}const m=new Float64Array(i);for(let p=i-1;p>=0;p--){if(!h[p])continue;let g=c[p];for(let _=p+1;_<i;_++)g-=s[p][_]*m[_];m[p]=g/s[p][p]}return m}function i2(r,t,i,s,l,c,f){for(let h=0;h<i.length;h++){const m=l[h],p=i[h];Math.abs(m)<f||Qc(r,t[p],t[p].normal.clone().multiplyScalar(m),s)}}function a2(r,t,i,s=1e-7){if(t.length===0)return r;const l=_x(t,i);if(l.length===0)return r;const{A:c,b:f}=n2(t,l,i,r),h=ap(c,f);return h&&i2(r,t,l,i,h,null,s),r}function s2(r,t,i,s,l,c=1e-7){const f=i,h=r.dot(r)-s*s;if(h<=0)return 0;const m=2*r.dot(t),p=2*r.dot(f)+t.dot(t),g=2*t.dot(f),_=f.dot(f),x=KR(_,g,p,m,h),y=(s*(1+c))**2;let E=null;for(const b of x)if(b>1e-12&&b<=l+1e-12){if(_*b*b*b*b+g*b*b*b+p*b*b+m*b+h+s*s>y)continue;(E===null||b<E)&&(E=b)}return E}function r2({positions:r,forces:t,velocities:i,fixedFlags:s},{mass:l,dist:c,dt:f}){if(f<1e-12)return{newPos:r.map(v=>v.clone()),newVel:i.map(v=>v.clone()),safedt:0,reason:"zero delta time"};const h=s||r.map(()=>!1),m=r.length,p=t.map((v,D)=>v.clone().multiplyScalar(+!h[D]/l));let g=f,_="max delta time";const x=new H,y=new H,E=new H;for(let v=0;v<m;v++)for(let D=v+1;D<m;D++){if(h[v]&&h[D])continue;x.copy(r[D]).sub(r[v]),y.copy(i[D]).sub(i[v]),E.copy(p[D]).sub(p[v]).multiplyScalar(.5);const U=s2(x,y,E,c,g);U!==null&&U<g&&(g=Math.max(U-1e-12,0),_=`collision between ${v} and ${D}`)}for(let v=0;v<m;v++)if(!h[v]){const D=c/2,U=i[v],w=p[v],N=U.length(),z=w.length();let O;if(z>1e-12)O=(-N+Math.sqrt(N*N+2*z*D))/z;else if(N>1e-12)O=D/N;else continue;O<g&&(g=O,_=`max movement of ${v}`)}const b=r.map((v,D)=>{if(h[D])return v.clone();const U=g,w=.5*g*g,N=i[D],z=p[D];return new H(v.x+N.x*U+z.x*w,v.y+N.y*U+z.y*w,v.z+N.z*U+z.z*w)}),S=i.map((v,D)=>{if(h[D])return new H(0,0,0);const U=g,w=p[D];return new H(v.x+w.x*U,v.y+w.y*U,v.z+w.z*U)});return{newPos:b,newVel:S,safedt:g,reason:_}}function o2(r,t,i,s,l){return t.map((f,h)=>{const m=r[h],p=f.moment,g=f.omega,_=l2(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function l2(r,t,i,s,l,c=.3){const f=i.clone().multiplyScalar(1/l),m=i.dot(t)<0?c:1,p=new H(t.x*m+f.x*s,t.y*m+f.y*s,t.z*m+f.z*s),g=p.length();if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),x=p.clone().multiplyScalar(1/g);return{moment:r.clone().applyAxisAngle(x,_).normalize(),omega:p}}function c2(r,t,i){return()=>(r.current=new u2(i),t(!0),()=>{})}class u2{constructor(t=.0025){this.params=new ZR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>new H(0,0,0)),f=t.map(()=>new H(0,0,0)),h=t.map(()=>new Map),m=new H;for(let p=0;p<l;p++)for(let g=p+1;g<l;g++){const _=YR(i,s,t[p].moment,t[g].moment,m.copy(t[g].pos).sub(t[p].pos));c[p].add(_.force1),c[g].add(_.force2),f[p].add(_.torque1),f[g].add(_.torque2),h[p].set(`M#${g}`,_.force1),h[g].set(`M#${p}`,_.force2)}return{netForces:c,torques:f,forces:h}}step(t,i,s=!1){const l=this.params.diameter,c=t.map(w=>!!w.fixed),f=t.map(w=>w.pos),h=Ev(f,l,this.params.shellThickness,c),{netForces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((w,N)=>({pos:h[N],moment:w.moment})),this.params.radius,this.params.magnetization);if(s){const w=this.params.gravity;m.forEach((N,z)=>{if(!c[z]){const O=w*this.params.mass;N.y+=O,g[z].set("Gravity",new H(0,O,0))}})}const _=ip(h,l+this.params.shellThickness),{constrainedForces:x,constrainedVel:y}=QR(h,m,t.map(w=>w.vel),_,c,this.params.rollingFriction),{newPos:E,newVel:b,safedt:S,reason:v}=r2({positions:h,forces:x,velocities:y,fixedFlags:c},{mass:this.params.mass,dist:l-this.params.shellThickness,dt:i}),D=Ev(E,l,this.params.shellThickness,c);ip(D,l+this.params.shellThickness).map(w=>{if(w.dist<this.params.radius)throw new Error(`球${w.i}-球${w.j}重叠过深: dist=${(w.dist*1e3).toFixed(4)}mm`)});const U=o2(p,t.map(w=>({moment:w.moment,omega:w.omega})),S,this.params.inertia,.3);return{newMagnets:t.map((w,N)=>uu(w,{pos:D[N],vel:b[N],f:x[N],tau:p[N],moment:U[N].moment,omega:U[N].omega})),safedt:S,forces:g,reason:v}}}const Vc=100,Rv=3;function f2(){var Ft;const t=.0025*Vc,[i,s]=Vt.useState([]),[l,c]=Vt.useState(new Set),[f,h]=Vt.useState(null),[m,p]=Vt.useState(!1),[g,_]=Vt.useState(4e-5),[x,y]=Vt.useState(!1),[E,b]=Vt.useState(0),[S,v]=Vt.useState(null),[D,U]=Vt.useState([]),[w,N]=Vt.useState(!1),[z,O]=Vt.useState({}),q=Vt.useRef(null),A=Vt.useRef(null),L=Vt.useRef(null),V=Vt.useRef(null),tt=Vt.useRef(null),X=Vt.useRef(new Set);X.current=l;const st=Vt.useRef(null),et=Vt.useRef(!0),P=Vt.useRef({magnets:i,isSimulating:m,simSpeed:g,useGravity:x});P.current={magnets:i,isSimulating:m,simSpeed:g,useGravity:x};const B=Vt.useCallback(j=>{s(at=>{const xt=typeof j=="function"?j(at):j;return P.current.magnets=xt,et.current=!0,xt})},[]),K=vR({selectedIds:l,setSelectedIds:c,keyTrapRef:st,stateRef:P}),{activeGroup:mt,groups:gt,setNewGroupName:F,createGroup:J,getIdsInActiveGroup:ft,cleanupIds:bt,setGroups:wt,setActiveGroup:it}=K,lt=Vt.useRef(null);Vt.useEffect(c2(lt,N,.0025),[]),Vt.useEffect(()=>{gR().then(j=>(U(j),nd(j[0],.0025))).then(j=>B(j.magnets)).catch(console.error)},[]);const Tt=l.size===1?[...l][0]:null,{push:Dt,reset:Pt,histIdxRef:re}=GR({getMagnets:()=>P.current.magnets,selectedId:Tt,onApplySnap:j=>{B(j);const at=j.find(xt=>xt.id===Tt);at&&v(tp(at))}}),{meshesRef:Ve,showMoments:ve,showForceTorques:_e,updateRings:Ce,setShowMoments:le,setShowForceTorques:en,resetCamera:k,setCameraView:ke,toggleProjection:Ee}=HR({containerRef:q,sceneRef:A,cameraRef:L,rendererRef:V,controlsRef:tt},{magnets:i,selectedIds:l,ready:w,getIdsInActiveGroup:ft,keyTrapRef:st},t,Vc,Rv),{tick:Ue,stepDeltaTimeRef:Yt}=ER({magnetWorldRef:lt,stateRef:P,needsSyncRef:et,selectedIdsRef:X},{setMagnets:B,setEditDraft:v,setTotalSimTime:b,setIsSimulating:p});bR({containerRef:q,sceneRef:A,cameraRef:L,rendererRef:V,controlsRef:tt},{ready:w,tick:Ue,onBeforeRender:Ce}),Vt.useEffect(()=>{if(Tt===null){v(null);return}const j=i.find(at=>at.id===Tt);v(j?tp(j):null)},[Tt,i]);const{handleKeyDown:I}=SR({stateRef:P,cameraRef:L,rendererRef:V,setMagnets:B,needsSyncRef:et,getIdsInActiveGroup:ft},Rv,Vc,.0025),T=Vt.useRef(null),Z=j=>{T.current={x:j.clientX,y:j.clientY}},vt=j=>{const at=q.current,xt=L.current;if(!at||!xt)return;const zt=T.current;if(zt){const nn=j.clientX-zt.x,dn=j.clientY-zt.y;if(nn*nn+dn*dn>25)return}const ie=at.getBoundingClientRect(),te=new ue((j.clientX-ie.left)/ie.width*2-1,-((j.clientY-ie.top)/ie.height)*2+1),xe=new ix;xe.setFromCamera(te,xt);const Ze=xe.intersectObjects(Ve.current),Qe=Ze.length>0?Ze[0].object.userData.id:null;Qe===null?j.shiftKey||c(new Set):j.shiftKey?c(nn=>{const dn=new Set(nn);return dn.has(Qe)?dn.delete(Qe):dn.add(Qe),dn}):c(new Set([Qe]))},Et=()=>{l.size!==0&&(B(j=>j.filter(at=>!l.has(at.id))),bt(l),c(new Set),b(0))},pt=()=>{if(!mt||!gt[mt])return;const j=gt[mt];if(i.filter(xe=>j.has(xe.id)).length===0)return;const xt=ft(),zt=i.filter(xe=>xt.has(xe.id)),ie=$d(zt.map(xe=>xe.pos)),te=lR(zt,l,ie);te&&B(xe=>{const Ze=dx(xe,j,ie,te,.0025);return Ze?xe.map(Qe=>{if(!j.has(Qe.id))return Qe;const nn=Ze.get(Qe.id);return{...Qe,pos:nn.pos,moment:nn.moment}}):xe})},jt=j=>{nd(j,.0025).then(at=>Ut(at.magnets))},Ut=Vt.useCallback(j=>{var xt;(xt=lt.current)==null||xt.reset(),Pt(),uR(),B(j),c(new Set);const at={};for(const zt of j)zt.group&&(at[zt.group]||(at[zt.group]=new Set),at[zt.group].add(zt.id));wt(Object.keys(at).length>0?at:{}),it(null),F(""),p(!1),b(0)},[Pt]),qt=(j,at,xt)=>{const zt=parseFloat(xt);if(isNaN(zt))return;const te={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[j];if(!te)return;const[xe,Ze]=te;Dt(i);const Qe=i.map(nn=>{if(nn.id!==Tt)return nn;const dn=nn[xe].toArray?nn[xe].toArray():[0,0,0];return dn[at]=zt*Ze,{...nn,[xe]:new H(...dn)}});Dt(Qe),re.current=-1,B(Qe),v(nn=>{if(!nn)return nn;const dn={...nn,[j]:[...nn[j]]};return dn[j][at]=(zt==null?void 0:zt.toFixed(6))??"N/A",dn})},ne=Vt.useCallback(j=>{const at=pR(i.map(xt=>({...xt,pos:xt.pos.clone().multiplyScalar(400)})),"exported","radius");if(j==="copy")navigator.clipboard.writeText(at).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const xt=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([at],{type:"application/json"})),download:`magnets_${Date.now()}.json`});xt.click(),URL.revokeObjectURL(xt.href)}},[i]),At=Vt.useCallback(j=>{try{JSON.parse(j);const{magnets:at}=px(j,.0025);if(at.length===0)return;Ut(at)}catch(at){alert("导入失败: "+at.message)}},[Ut]),Rt=()=>{const j=hR(i,Tt,f);j&&(Dt(i),Dt(j),B(j))},Gt=()=>{m||(et.current=!0),p(j=>!j)},Bt=Vt.useCallback(j=>{const at=gt[j],xt=i.filter(te=>at.has(te.id));if(xt.length===0)return;const zt=$d(xt.map(te=>te.pos)),ie=xt.map(te=>({pos:te.pos.clone().sub(zt),moment:te.moment.clone(),color:te.color}));O(te=>({...te,[j]:{magnets:ie}}))},[gt,i]),Lt=Vt.useCallback(async(j,at)=>{const xt=new Set,zt=[],ie=z[j];if(ie)for(const Ze of ie.magnets){const Qe=Mp({pos:Ze.pos.clone().add(at),moment:Ze.moment.clone(),color:Ze.color,fixed:Ze.fixed});xt.add(Qe.id),zt.push(Qe)}else if(D.includes(j)){const Ze=await nd(j,.0025);for(const Qe of Ze.magnets)Qe.pos.add(at),xt.add(Qe.id),zt.push(Qe)}if(xt.size===0)return;const te=P.current.magnets,xe=[...te,...zt];hx(xe,xt,new H,.0025)!==null&&(Dt(te),B(xe),Dt(xe),re.current=-1,c(xt),F(j),J(),b(0))},[z,D,Dt,J]),he=Vt.useCallback(j=>{j.preventDefault(),j.dataTransfer.dropEffect="copy"},[]),Y=Vt.useCallback(j=>{j.preventDefault();const at=j.dataTransfer.getData("text/x-preset-name"),xt=BR(q.current,L.current,j.clientX,j.clientY,Vc);at&&Lt(at,xt)},[Lt]),Nt=(j,at)=>{const xt=ft();if(xt.size===0)return;Dt(i);const zt=i.map(ie=>xt.has(ie.id)?{...ie,[j]:at}:ie);Dt(zt),re.current=-1,B(zt)};if(!w)return yt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:yt.jsxs("div",{children:[yt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),yt.jsx("div",{children:"Loading physics engine..."})]})});const Ct=ft();return yt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[yt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[yt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[yt.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟"]}),yt.jsxs(ux,{label:yt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟参数"}),children:[yt.jsx(eR,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:Yt,totalSimTime:E,onToggle:Gt,onResetVel:()=>{et.current=!0,B(j=>j.map(at=>({...at,vel:new H,omega:new H})))},onPerturb:()=>{et.current=!0,B(j=>j.map(at=>fR(at,.1*.0025)))},onSimSpeedChange:_}),yt.jsx(nR,{magnets:i,selectedId:Tt,refYId:f,setRefYId:h,onReframe:Rt}),yt.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"10px",flexWrap:"wrap"},children:[yt.jsx(ed,{label:"重力 (y 方向)",checked:x,onChange:y}),yt.jsx(ed,{label:"显示磁矩",checked:ve,onChange:le}),yt.jsx(ed,{label:"显示力矩",checked:_e,onChange:en})]}),yt.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:[yt.jsx("button",{onClick:()=>ne("download"),style:{...hn,flex:1},children:"⬇ 导出"}),yt.jsx("button",{onClick:()=>ne("copy"),style:{...hn,flex:1},children:"📋 复制"}),yt.jsx(rR,{importMagnets:At})]})]}),yt.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[yt.jsx("button",{onClick:()=>ke("x"),style:hn,children:"YZ面"}),yt.jsx("button",{onClick:()=>ke("y"),style:hn,children:"XZ面"}),yt.jsx("button",{onClick:()=>ke("z"),style:hn,children:"XY面"}),yt.jsx("button",{onClick:Ee,style:hn,children:(Ft=L.current)!=null&&Ft.isPerspectiveCamera?"正交":"透视"}),yt.jsx("button",{onClick:k,style:hn,children:"重置相机"})]}),yt.jsx(QA,{grouping:K,selectedIds:l,onDeselect:()=>{K.setActiveGroup(null),K.setNewGroupName("")},adsorbToAxis:pt,saveGroupAsPreset:Bt,presetPanel:yt.jsx(sR,{presets:D,customPresets:z,setCustomPresets:O,applyPreset:jt})}),yt.jsxs(iR,{selectedIds:l,selectedMag:i.find(j=>j.id===Tt),isSimulating:m,onToggle:Gt,onToggleFixed:()=>{B(j=>j.map(at=>at.id===Tt?{...at,fixed:!at.fixed}:at))},onRemove:Et,children:[Tt!==null&&yt.jsx(aR,{isSimulating:m,editDraft:S,setEditDraft:v,onCommit:qt}),l.size>1&&yt.jsxs(yt.Fragment,{children:[yt.jsxs("div",{style:Kc,children:["批量修改 (",Ct.size,")"]}),yt.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"4px"},children:"颜色"}),yt.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[["#ff4444","#4444ff","#44ff44","#ffdd00","#ff44ff","#44ffff","#ff8800","#8844ff"].map(j=>yt.jsx("button",{onClick:()=>Nt("color",j),style:{width:"22px",height:"22px",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",background:j}},j)),yt.jsx("input",{type:"color",onChange:j=>Nt("color",parseInt(j.target.value.slice(1),16)),style:{width:"22px",height:"22px",padding:0,border:"none",borderRadius:"4px",cursor:"pointer"}})]}),yt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"6px",marginBottom:"4px"},children:"磁矩方向"}),yt.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[["+X",[1,0,0]],["−X",[-1,0,0]],["+Y",[0,1,0]],["−Y",[0,-1,0]],["+Z",[0,0,1]],["−Z",[0,0,-1]]].map(([j,at])=>yt.jsx("button",{onClick:()=>{const xt=ft();Dt(i);const zt=i.map(ie=>xt.has(ie.id)?{...ie,moment:new H(...at).normalize()}:ie);Dt(zt),re.current=-1,B(zt)},style:hn,children:j},j))})]})]})]}),yt.jsx("div",{ref:q,onClick:vt,onMouseDown:Z,onDragOver:he,onDrop:Y,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer",position:"relative"},children:yt.jsx("textarea",{ref:st,onKeyDown:I,style:{position:"absolute",left:0,top:0,width:"1px",height:"1px",opacity:0,padding:0,border:"none",outline:"none",resize:"none",overflow:"hidden",pointerEvents:"none"},tabIndex:-1})})]})}LS.createRoot(document.getElementById("root")).render(yt.jsx(Vt.StrictMode,{children:yt.jsx(f2,{})}));
