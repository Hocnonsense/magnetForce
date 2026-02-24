(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var mh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function fy(){if(t_)return ko;t_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var e_;function hy(){return e_||(e_=1,mh.exports=fy()),mh.exports}var Xt=hy(),gh={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function dy(){if(n_)return ue;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(P,$,pt){this.props=P,this.context=$,this.refs=y,this.updater=pt||b}v.prototype.isReactComponent={},v.prototype.setState=function(P,$){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,$,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=v.prototype;function w(P,$,pt){this.props=P,this.context=$,this.refs=y,this.updater=pt||b}var U=w.prototype=new L;U.constructor=w,T(U,v.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function C(P,$,pt){var Et=pt.ref;return{$$typeof:r,type:P,key:$,ref:Et!==void 0?Et:null,props:pt}}function D(P,$){return C(P.type,$,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Y(P){var $={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(pt){return $[pt]})}var Q=/\/+/g;function lt(P,$){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):$.toString(36)}function rt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function($){P.status==="pending"&&(P.status="fulfilled",P.value=$)},function($){P.status==="pending"&&(P.status="rejected",P.reason=$)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,$,pt,Et,Nt){var it=typeof P;(it==="undefined"||it==="boolean")&&(P=null);var ht=!1;if(P===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(P.$$typeof){case r:case t:ht=!0;break;case g:return ht=P._init,B(ht(P._payload),$,pt,Et,Nt)}}if(ht)return Nt=Nt(P),ht=Et===""?"."+lt(P,0):Et,z(Nt)?(pt="",ht!=null&&(pt=ht.replace(Q,"$&/")+"/"),B(Nt,$,pt,"",function(Gt){return Gt})):Nt!=null&&(V(Nt)&&(Nt=D(Nt,pt+(Nt.key==null||P&&P.key===Nt.key?"":(""+Nt.key).replace(Q,"$&/")+"/")+ht)),$.push(Nt)),1;ht=0;var Dt=Et===""?".":Et+":";if(z(P))for(var Wt=0;Wt<P.length;Wt++)Et=P[Wt],it=Dt+lt(Et,Wt),ht+=B(Et,$,pt,it,Nt);else if(Wt=M(P),typeof Wt=="function")for(P=Wt.call(P),Wt=0;!(Et=P.next()).done;)Et=Et.value,it=Dt+lt(Et,Wt++),ht+=B(Et,$,pt,it,Nt);else if(it==="object"){if(typeof P.then=="function")return B(rt(P),$,pt,Et,Nt);throw $=String(P),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(P,$,pt){if(P==null)return P;var Et=[],Nt=0;return B(P,Et,"","",function(it){return $.call(pt,it,Nt++)}),Et}function nt(P){if(P._status===-1){var $=P._result;$=$(),$.then(function(pt){(P._status===0||P._status===-1)&&(P._status=1,P._result=pt)},function(pt){(P._status===0||P._status===-1)&&(P._status=2,P._result=pt)}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var gt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},vt={map:G,forEach:function(P,$,pt){G(P,function(){$.apply(this,arguments)},pt)},count:function(P){var $=0;return G(P,function(){$++}),$},toArray:function(P){return G(P,function($){return $})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ue.Activity=_,ue.Children=vt,ue.Component=v,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=w,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},ue.cache=function(P){return function(){return P.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(P,$,pt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=T({},P.props),Nt=P.key;if($!=null)for(it in $.key!==void 0&&(Nt=""+$.key),$)!W.call($,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&$.ref===void 0||(Et[it]=$[it]);var it=arguments.length-2;if(it===1)Et.children=pt;else if(1<it){for(var ht=Array(it),Dt=0;Dt<it;Dt++)ht[Dt]=arguments[Dt+2];Et.children=ht}return C(P.type,Nt,Et)},ue.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ue.createElement=function(P,$,pt){var Et,Nt={},it=null;if($!=null)for(Et in $.key!==void 0&&(it=""+$.key),$)W.call($,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Nt[Et]=$[Et]);var ht=arguments.length-2;if(ht===1)Nt.children=pt;else if(1<ht){for(var Dt=Array(ht),Wt=0;Wt<ht;Wt++)Dt[Wt]=arguments[Wt+2];Nt.children=Dt}if(P&&P.defaultProps)for(Et in ht=P.defaultProps,ht)Nt[Et]===void 0&&(Nt[Et]=ht[Et]);return C(P,it,Nt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(P){return{$$typeof:d,render:P}},ue.isValidElement=V,ue.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:nt}},ue.memo=function(P,$){return{$$typeof:p,type:P,compare:$===void 0?null:$}},ue.startTransition=function(P){var $=O.T,pt={};O.T=pt;try{var Et=P(),Nt=O.S;Nt!==null&&Nt(pt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(F,gt)}catch(it){gt(it)}finally{$!==null&&pt.types!==null&&($.types=pt.types),O.T=$}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(P){return O.H.use(P)},ue.useActionState=function(P,$,pt){return O.H.useActionState(P,$,pt)},ue.useCallback=function(P,$){return O.H.useCallback(P,$)},ue.useContext=function(P){return O.H.useContext(P)},ue.useDebugValue=function(){},ue.useDeferredValue=function(P,$){return O.H.useDeferredValue(P,$)},ue.useEffect=function(P,$){return O.H.useEffect(P,$)},ue.useEffectEvent=function(P){return O.H.useEffectEvent(P)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(P,$,pt){return O.H.useImperativeHandle(P,$,pt)},ue.useInsertionEffect=function(P,$){return O.H.useInsertionEffect(P,$)},ue.useLayoutEffect=function(P,$){return O.H.useLayoutEffect(P,$)},ue.useMemo=function(P,$){return O.H.useMemo(P,$)},ue.useOptimistic=function(P,$){return O.H.useOptimistic(P,$)},ue.useReducer=function(P,$,pt){return O.H.useReducer(P,$,pt)},ue.useRef=function(P){return O.H.useRef(P)},ue.useState=function(P){return O.H.useState(P)},ue.useSyncExternalStore=function(P,$,pt){return O.H.useSyncExternalStore(P,$,pt)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.2.3",ue}var i_;function ep(){return i_||(i_=1,gh.exports=dy()),gh.exports}var me=ep(),_h={exports:{}},Xo={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function py(){return a_||(a_=1,(function(r){function t(B,G){var nt=B.length;B.push(G);t:for(;0<nt;){var gt=nt-1>>>1,vt=B[gt];if(0<l(vt,G))B[gt]=G,B[nt]=vt,nt=gt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],nt=B.pop();if(nt!==G){B[0]=nt;t:for(var gt=0,vt=B.length,P=vt>>>1;gt<P;){var $=2*(gt+1)-1,pt=B[$],Et=$+1,Nt=B[Et];if(0>l(pt,nt))Et<vt&&0>l(Nt,pt)?(B[gt]=Nt,B[Et]=nt,gt=Et):(B[gt]=pt,B[$]=nt,gt=$);else if(Et<vt&&0>l(Nt,nt))B[gt]=Nt,B[Et]=nt,gt=Et;else break t}}return G}function l(B,G){var nt=B.sortIndex-G.sortIndex;return nt!==0?nt:B.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=B)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function z(B){if(T=!1,U(B),!b)if(i(m)!==null)b=!0,F||(F=!0,Y());else{var G=i(p);G!==null&&rt(z,G.startTime-B)}}var F=!1,O=-1,W=5,C=-1;function D(){return y?!0:!(r.unstable_now()-C<W)}function V(){if(y=!1,F){var B=r.unstable_now();C=B;var G=!0;try{t:{b=!1,T&&(T=!1,L(O),O=-1),M=!0;var nt=x;try{e:{for(U(B),_=i(m);_!==null&&!(_.expirationTime>B&&D());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,x=_.priorityLevel;var vt=gt(_.expirationTime<=B);if(B=r.unstable_now(),typeof vt=="function"){_.callback=vt,U(B),G=!0;break e}_===i(m)&&s(m),U(B)}else s(m);_=i(m)}if(_!==null)G=!0;else{var P=i(p);P!==null&&rt(z,P.startTime-B),G=!1}}break t}finally{_=null,x=nt,M=!1}G=void 0}}finally{G?Y():F=!1}}}var Y;if(typeof w=="function")Y=function(){w(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,lt=Q.port2;Q.port1.onmessage=V,Y=function(){lt.postMessage(null)}}else Y=function(){v(V,0)};function rt(B,G){O=v(function(){B(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var nt=x;x=G;try{return B()}finally{x=nt}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var nt=x;x=B;try{return G()}finally{x=nt}},r.unstable_scheduleCallback=function(B,G,nt){var gt=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?gt+nt:gt):nt=gt,B){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=nt+vt,B={id:g++,callback:G,priorityLevel:B,startTime:nt,expirationTime:vt,sortIndex:-1},nt>gt?(B.sortIndex=nt,t(p,B),i(m)===null&&B===i(p)&&(T?(L(O),O=-1):T=!0,rt(z,nt-gt))):(B.sortIndex=vt,t(m,B),b||M||(b=!0,F||(F=!0,Y()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var G=x;return function(){var nt=x;x=G;try{return B.apply(this,arguments)}finally{x=nt}}}})(xh)),xh}var s_;function my(){return s_||(s_=1,vh.exports=py()),vh.exports}var Sh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function gy(){if(r_)return zn;r_=1;var r=ep();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var o_;function _y(){if(o_)return Sh.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=gy(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function vy(){if(l_)return Xo;l_=1;var r=my(),t=ep(),i=_y();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case w:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var rt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},gt=[],vt=-1;function P(e){return{current:e}}function $(e){0>vt||(e.current=gt[vt],gt[vt]=null,vt--)}function pt(e,n){vt++,gt[vt]=e.current,e.current=n}var Et=P(null),Nt=P(null),it=P(null),ht=P(null);function Dt(e,n){switch(pt(it,n),pt(Nt,e),pt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Et),pt(Et,e)}function Wt(){$(Et),$(Nt),$(it)}function Gt(e){e.memoizedState!==null&&pt(ht,e);var n=Et.current,a=bg(n,e.type);n!==a&&(pt(Nt,e),pt(Et,a))}function xe(e){Nt.current===e&&($(Et),$(Nt)),ht.current===e&&($(ht),Bo._currentValue=nt)}var Qe,Se;function _e(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",Se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Se}var Ce=!1;function se(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var st=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){st=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var H=S.split(`
`),et=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===et.length)for(o=H.length-1,u=et.length-1;1<=o&&0<=u&&H[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==et[u]){var dt=`
`+H[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function Tt(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return _e("Activity");default:return""}}function I(e){try{var n="",a=null;do n+=Tt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var re=Object.prototype.hasOwnProperty,$t=r.unstable_scheduleCallback,ce=r.unstable_cancelCallback,wt=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,ft=r.unstable_ImmediatePriority,mt=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,kt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,Vt=r.log,te=r.unstable_setDisableYieldValue,yt=null,bt=null;function Bt(e){if(typeof Vt=="function"&&te(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(yt,e)}catch{}}var It=Math.clz32?Math.clz32:X,Ut=Math.log,de=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ut(e)/de|0)|0}var Ot=256,At=262144,Ft=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Mt(o):(S&=A,S!==0?u=Mt(S):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~f,A!==0?u=Mt(A):S!==0?u=Mt(S):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,et=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-It(a),xt=1<<dt;A[dt]=0,H[dt]=-1;var st=et[dt];if(st!==null)for(et[dt]=null,dt=0;dt<st.length;dt++){var ct=st[dt];ct!==null&&(ct.lane&=-536870913)}a&=~xt}o!==0&&ul(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function ul(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Hs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Oi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ci=Math.random().toString(36).slice(2),on="__reactFiber$"+ci,bn="__reactProps$"+ci,Ei="__reactContainer$"+ci,Vs="__reactEvents$"+ci,ks="__reactListeners$"+ci,fl="__reactHandles$"+ci,$r="__reactResources$"+ci,cs="__reactMarker$"+ci;function to(e){delete e[on],delete e[bn],delete e[Vs],delete e[ks],delete e[fl]}function Ra(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ug(e);e!==null;){if(a=e[on])return a;e=Ug(e)}return n}e=a,a=e.parentNode}return null}function Ca(e){if(e=e[on]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function wa(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[cs]=!0}var j=new Set,ot={};function at(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(ot[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},Pt={};function qt(e){return re.call(Pt,e)?!0:re.call(Ht,e)?!1:Lt.test(e)?Pt[e]=!0:(Ht[e]=!0,!1)}function jt(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Ie(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function le(e){return e.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,u,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,ne(n)):a!=null?An(e,S,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ne(A):e.removeAttribute("name")}function Qi(e,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){je(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),je(e)}function An(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),je(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&wn(e,f,n[f])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Mp(e){var n=Ca(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ie(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ui(e,!!a.multiple,n,!1)}}}var du=!1;function Ep(e,n,a){if(du)return e(n,a);du=!0;try{var o=e(n);return o}finally{if(du=!1,(Ws!==null||qs!==null)&&($l(),Ws&&(n=Ws,e=qs,qs=Ws=null,Mp(n),e)))for(n=0;n<e.length;n++)Mp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if($i)try{var no={};Object.defineProperty(no,"passive",{get:function(){pu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{pu=!1}var Da=null,mu=null,dl=null;function bp(){if(dl)return dl;var e,n=mu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Tp(){return!1}function kn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:Tp,this.isPropagationStopped=Tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=kn(fs),io=_({},fs,{view:0,detail:0}),cx=kn(io),gu,_u,ao,_l=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(gu=e.screenX-ao.screenX,_u=e.screenY-ao.screenY):_u=gu=0,ao=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),Ap=kn(_l),ux=_({},_l,{dataTransfer:0}),fx=kn(ux),hx=_({},io,{relatedTarget:0}),vu=kn(hx),dx=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),px=kn(dx),mx=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=kn(mx),_x=_({},fs,{data:0}),Rp=kn(_x),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sx[e])?!!n[e]:!1}function xu(){return yx}var Mx=_({},io,{key:function(e){if(e.key){var n=vx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ex=kn(Mx),bx=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=kn(bx),Tx=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Ax=kn(Tx),Rx=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=kn(Rx),wx=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=kn(wx),Ux=_({},fs,{newState:0,oldState:0}),Lx=kn(Ux),Nx=[9,13,27,32],Su=$i&&"CompositionEvent"in window,so=null;$i&&"documentMode"in document&&(so=document.documentMode);var Ox=$i&&"TextEvent"in window&&!so,wp=$i&&(!Su||so&&8<so&&11>=so),Dp=" ",Up=!1;function Lp(e,n){switch(e){case"keyup":return Nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Px(e,n){switch(e){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return e=n.data,e===Dp&&Up?null:e;default:return null}}function zx(e,n){if(Ys)return e==="compositionend"||!Su&&Lp(e,n)?(e=bp(),dl=mu=Da=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ix[e.type]:n==="textarea"}function Pp(e,n,a,o){Ws?qs?qs.push(o):qs=[o]:Ws=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Fx(e){_g(e,0)}function vl(e){var n=us(e);if(Ie(n))return e}function zp(e,n){if(e==="change")return n}var Ip=!1;if($i){var yu;if($i){var Mu="oninput"in document;if(!Mu){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Mu=typeof Fp.oninput=="function"}yu=Mu}else yu=!1;Ip=yu&&(!document.documentMode||9<document.documentMode)}function Bp(){ro&&(ro.detachEvent("onpropertychange",Hp),oo=ro=null)}function Hp(e){if(e.propertyName==="value"&&vl(oo)){var n=[];Pp(n,oo,e,hu(e)),Ep(Fx,n)}}function Bx(e,n,a){e==="focusin"?(Bp(),ro=n,oo=a,ro.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function Hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(oo)}function Gx(e,n){if(e==="click")return vl(n)}function Vx(e,n){if(e==="input"||e==="change")return vl(n)}function kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:kx;function lo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!re.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,n){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xx=$i&&"documentMode"in document&&11>=document.documentMode,js=null,bu=null,co=null,Tu=!1;function Wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||js==null||js!==Qt(o)||(o=js,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=rc(bu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Au={},qp={};$i&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ds(e){if(Au[e])return Au[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Au[e]=n[a];return e}var Yp=ds("animationend"),jp=ds("animationiteration"),Zp=ds("animationstart"),Wx=ds("transitionrun"),qx=ds("transitionstart"),Yx=ds("transitioncancel"),Kp=ds("transitionend"),Qp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ti(e,n){Qp.set(e,n),at(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Ks=0,Cu=0;function Sl(){for(var e=Ks,n=Cu=Ks=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Jp(a,u,f)}}function yl(e,n,a,o){fi[Ks++]=e,fi[Ks++]=n,fi[Ks++]=a,fi[Ks++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,n,a,o){return yl(e,n,a,o),Ml(e)}function ps(e,n){return yl(e,null,null,n),Ml(e)}function Jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ml(e){if(50<Lo)throw Lo=0,Bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function jx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new jx(e,n,a,o)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")Du(e)&&(S=1);else if(typeof e=="string")S=$S(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ti(31,a,n,u),e.elementType=C,e.lanes=f,e;case T:return ms(a.children,u,f,n);case y:S=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case z:return e=ti(13,a,n,u),e.elementType=z,e.lanes=f,e;case F:return e=ti(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:S=10;break t;case L:S=9;break t;case U:S=11;break t;case O:S=14;break t;case W:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Uu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function tm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var em=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(n={value:e,source:n,stack:I(n)},em.set(e,n),n)}return{value:e,source:n,stack:I(n)}}var Js=[],$s=0,bl=null,uo=0,di=[],pi=0,Ua=null,Pi=1,zi="";function ea(e,n){Js[$s++]=uo,Js[$s++]=bl,bl=e,uo=n}function nm(e,n,a){di[pi++]=Pi,di[pi++]=zi,di[pi++]=Ua,Ua=e;var o=Pi;e=zi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Pi=1<<32-It(n)+u|a<<u|o,zi=f+e}else Pi=1<<f|a<<u|o,zi=e}function Nu(e){e.return!==null&&(ea(e,1),nm(e,1,0))}function Ou(e){for(;e===bl;)bl=Js[--$s],Js[$s]=null,uo=Js[--$s],Js[$s]=null;for(;e===Ua;)Ua=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function im(e,n){di[pi++]=Pi,di[pi++]=zi,di[pi++]=Ua,Pi=n.id,zi=n.overflow,Ua=e}var Dn=null,Ze=null,Ae=!1,La=null,mi=!1,Pu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(hi(n,e)),Pu}function am(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[bn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)Me(Oo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yg(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Na(e,!0)}function sm(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Dn=Dn.return}}function tr(e){if(e!==Dn)return!1;if(!Ae)return sm(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&Ze&&Na(e),sm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Dg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Dg(e)}else n===27?(n=Ze,Ya(e.type)?(e=sh,sh=null,Ze=e):Ze=n):Ze=Dn?_i(e.stateNode.nextSibling):null;return!0}function gs(){Ze=Dn=null,Ae=!1}function zu(){var e=La;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),La=null),e}function fo(e){La===null?La=[e]:La.push(e)}var Iu=P(null),_s=null,na=null;function Oa(e,n,a){pt(Iu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Iu.current,$(Iu)}function Fu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Fu(f.return,a,e),o||(S=null);break t}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Fu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function er(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;$n(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return rm(_s,e)}function Al(e,n){return _s===null&&vs(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var Zx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Kx=r.unstable_scheduleCallback,Qx=r.unstable_NormalPriority,ln={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Zx,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&Kx(Qx,function(){e.controller.abort()})}var po=null,Gu=0,nr=0,ir=null;function Jx(e,n){if(po===null){var a=po=[];Gu=0,nr=Wf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(om,om),n}function om(){if(--Gu===0&&po!==null){ir!==null&&(ir.status="fulfilled");var e=po;po=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $x(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=B.S;B.S=function(e,n){W0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jx(e,n),lm!==null&&lm(e,n)};var xs=P(null);function Vu(){var e=xs.current;return e!==null?e:Ye.pooledCache}function Rl(e,n){n===null?pt(xs,xs.current):pt(xs,n.pool)}function cm(){var e=Vu();return e===null?null:{parent:ln._currentValue,pool:e}}var ar=Error(s(460)),ku=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e}throw ys=n,ar}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,ar):a}}var ys=null;function hm(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function dm(e){if(e===ar||e===Cl)throw Error(s(483))}var sr=null,mo=0;function Dl(e){var n=mo;return mo+=1,sr===null&&(sr=[]),fm(sr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pm(e){function n(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=ta(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,tt,_t){return k===null||k.tag!==6?(k=Uu(tt,Z.mode,_t),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function H(Z,k,tt,_t){var Jt=tt.type;return Jt===T?dt(Z,k,tt.props.children,_t,tt.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===W&&Ss(Jt)===k.type)?(k=u(k,tt.props),go(k,tt),k.return=Z,k):(k=El(tt.type,tt.key,tt.props,null,Z.mode,_t),go(k,tt),k.return=Z,k)}function et(Z,k,tt,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=Lu(tt,Z.mode,_t),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function dt(Z,k,tt,_t,Jt){return k===null||k.tag!==7?(k=ms(tt,Z.mode,_t,Jt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function xt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Uu(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=El(k.type,k.key,k.props,null,Z.mode,tt),go(tt,k),tt.return=Z,tt;case b:return k=Lu(k,Z.mode,tt),k.return=Z,k;case W:return k=Ss(k),xt(Z,k,tt)}if(rt(k)||Y(k))return k=ms(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return xt(Z,Dl(k),tt);if(k.$$typeof===w)return xt(Z,Al(Z,k),tt);Ul(Z,k)}return null}function st(Z,k,tt,_t){var Jt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Jt!==null?null:A(Z,k,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Jt?H(Z,k,tt,_t):null;case b:return tt.key===Jt?et(Z,k,tt,_t):null;case W:return tt=Ss(tt),st(Z,k,tt,_t)}if(rt(tt)||Y(tt))return Jt!==null?null:dt(Z,k,tt,_t,null);if(typeof tt.then=="function")return st(Z,k,Dl(tt),_t);if(tt.$$typeof===w)return st(Z,k,Al(Z,tt),_t);Ul(Z,tt)}return null}function ct(Z,k,tt,_t,Jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(tt)||null,A(k,Z,""+_t,Jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return Z=Z.get(_t.key===null?tt:_t.key)||null,H(k,Z,_t,Jt);case b:return Z=Z.get(_t.key===null?tt:_t.key)||null,et(k,Z,_t,Jt);case W:return _t=Ss(_t),ct(Z,k,tt,_t,Jt)}if(rt(_t)||Y(_t))return Z=Z.get(tt)||null,dt(k,Z,_t,Jt,null);if(typeof _t.then=="function")return ct(Z,k,tt,Dl(_t),Jt);if(_t.$$typeof===w)return ct(Z,k,tt,Al(k,_t),Jt);Ul(k,_t)}return null}function Yt(Z,k,tt,_t){for(var Jt=null,Le=null,Kt=k,pe=k=0,Te=null;Kt!==null&&pe<tt.length;pe++){Kt.index>pe?(Te=Kt,Kt=null):Te=Kt.sibling;var Ne=st(Z,Kt,tt[pe],_t);if(Ne===null){Kt===null&&(Kt=Te);break}e&&Kt&&Ne.alternate===null&&n(Z,Kt),k=f(Ne,k,pe),Le===null?Jt=Ne:Le.sibling=Ne,Le=Ne,Kt=Te}if(pe===tt.length)return a(Z,Kt),Ae&&ea(Z,pe),Jt;if(Kt===null){for(;pe<tt.length;pe++)Kt=xt(Z,tt[pe],_t),Kt!==null&&(k=f(Kt,k,pe),Le===null?Jt=Kt:Le.sibling=Kt,Le=Kt);return Ae&&ea(Z,pe),Jt}for(Kt=o(Kt);pe<tt.length;pe++)Te=ct(Kt,Z,pe,tt[pe],_t),Te!==null&&(e&&Te.alternate!==null&&Kt.delete(Te.key===null?pe:Te.key),k=f(Te,k,pe),Le===null?Jt=Te:Le.sibling=Te,Le=Te);return e&&Kt.forEach(function(Ja){return n(Z,Ja)}),Ae&&ea(Z,pe),Jt}function ie(Z,k,tt,_t){if(tt==null)throw Error(s(151));for(var Jt=null,Le=null,Kt=k,pe=k=0,Te=null,Ne=tt.next();Kt!==null&&!Ne.done;pe++,Ne=tt.next()){Kt.index>pe?(Te=Kt,Kt=null):Te=Kt.sibling;var Ja=st(Z,Kt,Ne.value,_t);if(Ja===null){Kt===null&&(Kt=Te);break}e&&Kt&&Ja.alternate===null&&n(Z,Kt),k=f(Ja,k,pe),Le===null?Jt=Ja:Le.sibling=Ja,Le=Ja,Kt=Te}if(Ne.done)return a(Z,Kt),Ae&&ea(Z,pe),Jt;if(Kt===null){for(;!Ne.done;pe++,Ne=tt.next())Ne=xt(Z,Ne.value,_t),Ne!==null&&(k=f(Ne,k,pe),Le===null?Jt=Ne:Le.sibling=Ne,Le=Ne);return Ae&&ea(Z,pe),Jt}for(Kt=o(Kt);!Ne.done;pe++,Ne=tt.next())Ne=ct(Kt,Z,pe,Ne.value,_t),Ne!==null&&(e&&Ne.alternate!==null&&Kt.delete(Ne.key===null?pe:Ne.key),k=f(Ne,k,pe),Le===null?Jt=Ne:Le.sibling=Ne,Le=Ne);return e&&Kt.forEach(function(uy){return n(Z,uy)}),Ae&&ea(Z,pe),Jt}function We(Z,k,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Jt=tt.key;k!==null;){if(k.key===Jt){if(Jt=tt.type,Jt===T){if(k.tag===7){a(Z,k.sibling),_t=u(k,tt.props.children),_t.return=Z,Z=_t;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===W&&Ss(Jt)===k.type){a(Z,k.sibling),_t=u(k,tt.props),go(_t,tt),_t.return=Z,Z=_t;break t}a(Z,k);break}else n(Z,k);k=k.sibling}tt.type===T?(_t=ms(tt.props.children,Z.mode,_t,tt.key),_t.return=Z,Z=_t):(_t=El(tt.type,tt.key,tt.props,null,Z.mode,_t),go(_t,tt),_t.return=Z,Z=_t)}return S(Z);case b:t:{for(Jt=tt.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),_t=u(k,tt.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}_t=Lu(tt,Z.mode,_t),_t.return=Z,Z=_t}return S(Z);case W:return tt=Ss(tt),We(Z,k,tt,_t)}if(rt(tt))return Yt(Z,k,tt,_t);if(Y(tt)){if(Jt=Y(tt),typeof Jt!="function")throw Error(s(150));return tt=Jt.call(tt),ie(Z,k,tt,_t)}if(typeof tt.then=="function")return We(Z,k,Dl(tt),_t);if(tt.$$typeof===w)return We(Z,k,Al(Z,tt),_t);Ul(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),_t=u(k,tt),_t.return=Z,Z=_t):(a(Z,k),_t=Uu(tt,Z.mode,_t),_t.return=Z,Z=_t),S(Z)):a(Z,k)}return function(Z,k,tt,_t){try{mo=0;var Jt=We(Z,k,tt,_t);return sr=null,Jt}catch(Kt){if(Kt===ar||Kt===Cl)throw Kt;var Le=ti(29,Kt,null,Z.mode);return Le.lanes=_t,Le.return=Z,Le}finally{}}}var Ms=pm(!0),mm=pm(!1),Pa=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),Jp(e,null,a),n}return yl(e,o,n,a),Ml(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function vo(){if(Yu){var e=ir;if(e!==null)throw e}}function xo(e,n,a,o){Yu=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,et=H.next;H.next=null,S===null?f=et:S.next=et,S=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==S&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=H))}if(f!==null){var xt=u.baseState;S=0,dt=et=H=null,A=f;do{var st=A.lane&-536870913,ct=st!==A.lane;if(ct?(be&st)===st:(o&st)===st){st!==0&&st===nr&&(Yu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Yt=e,ie=A;st=n;var We=a;switch(ie.tag){case 1:if(Yt=ie.payload,typeof Yt=="function"){xt=Yt.call(We,xt,st);break t}xt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ie.payload,st=typeof Yt=="function"?Yt.call(We,xt,st):Yt,st==null)break t;xt=_({},xt,st);break t;case 2:Pa=!0}}st=A.callback,st!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=ct,H=xt):dt=dt.next=ct,S|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(H=xt),u.baseState=H,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Va|=S,e.lanes=S,e.memoizedState=xt}}function gm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],n)}var rr=P(null),Ll=P(0);function vm(e,n){e=ha,pt(Ll,e),pt(rr,n),ha=e|n.baseLanes}function ju(){pt(Ll,ha),pt(rr,rr.current)}function Zu(){ha=Ll.current,$(rr),$(Ll)}var ei=P(null),gi=null;function Fa(e){var n=e.alternate;pt(sn,sn.current&1),pt(ei,e),gi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(gi=e)}function Ku(e){pt(sn,sn.current),pt(ei,e),gi===null&&(gi=e)}function xm(e){e.tag===22?(pt(sn,sn.current),pt(ei,e),gi===null&&(gi=e)):Ba()}function Ba(){pt(sn,sn.current),pt(ei,ei.current)}function ni(e){$(ei),gi===e&&(gi=null),$(sn)}var sn=P(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,he=null,ke=null,cn=null,Ol=!1,or=!1,Es=!1,Pl=0,So=0,lr=null,tS=0;function en(){throw Error(s(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Ju(e,n,a,o,u,f){return aa=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?n0:pf,Es=!1,f=a(o,u),Es=!1,or&&(f=ym(n,a,o,u)),Sm(e),f}function Sm(e){B.H=Eo;var n=ke!==null&&ke.next!==null;if(aa=0,cn=ke=he=null,Ol=!1,So=0,lr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Tl(e)&&(un=!0))}function ym(e,n,a,o){he=e;var u=0;do{if(or&&(lr=null),So=0,or=!1,25<=u)throw Error(s(301));if(u+=1,cn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=i0,f=n(a,o)}while(or);return f}function eS(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),n}function $u(){var e=Pl!==0;return Pl=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}aa=0,cn=ke=he=null,or=!1,So=Pl=0,lr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?he.memoizedState=cn=e:cn=cn.next=e}return cn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,lr===null&&(lr=[]),e=fm(lr,e,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?n0:pf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===w)return Un(e)}throw Error(s(438,String(e)))}function nf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=rn();return af(n,ke,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=S=null,H=null,et=n,dt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(be&xt)===xt:(aa&xt)===xt){var st=et.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===nr&&(dt=!0);else if((aa&st)===st){et=et.next,st===nr&&(dt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(A=H=xt,S=f):H=H.next=xt,he.lanes|=st,Va|=st;xt=et.action,Es&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else st={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(A=H=st,S=f):H=H.next=st,he.lanes|=xt,Va|=xt;et=et.next}while(et!==null&&et!==n);if(H===null?S=f:H.next=A,!$n(f,e.memoizedState)&&(un=!0,dt&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);$n(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mm(e,n,a){var o=he,u=rn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!$n((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,lf(Tm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));f||(aa&127)!==0||Em(o,n,a)}return a}function Em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=zl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bm(e,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(e)}function Tm(e,n,a){return a(function(){Am(n)&&Rm(e)})}function Am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Rm(e){var n=ps(e,2);n!==null&&jn(n,e,2)}function rf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Es){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Cm(e,n,a,o){return e.baseState=a,af(e,ke,typeof o=="function"?o:sa)}function nS(e,n,a,o,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,wm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var A=a(u,o),H=B.S;H!==null&&H(S,A),Dm(e,n,A)}catch(et){of(e,n,et)}finally{f!==null&&S.types!==null&&(f.types=S.types),B.T=f}}else try{f=a(u,o),Dm(e,n,f)}catch(et){of(e,n,et)}}function Dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(e,n,o)},function(o){return of(e,n,o)}):Um(e,n,a)}function Um(e,n,a){n.status="fulfilled",n.value=a,Lm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Lm(n),n=n.next;while(n!==o)}e.action=null}function Lm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Nm(e,n){return n}function Om(e,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var o=he;if(Ae){if(Ze){e:{for(var u=Ze,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:n},a.queue=o,a=$m.bind(null,he,o),o.dispatch=a,o=rf(!1),f=df.bind(null,he,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=nS.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Pm(e){var n=rn();return zm(n,ke,e)}function zm(e,n,a){if(n=af(e,n,Nm)[0],e=Fl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(S){throw S===ar?Cl:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,cr(9,{destroy:void 0},iS.bind(null,u,a),null)),[o,f,e]}function iS(e,n){e.action=n}function Im(e){var n=rn(),a=ke;if(a!==null)return zm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=zl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fm(){return rn().memoizedState}function Bl(e,n,a,o){var u=Hn();he.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&Qu(o,ke.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(he.flags|=e,u.memoizedState=cr(1|n,f,a,o))}function Bm(e,n){Bl(8390656,8,e,n)}function lf(e,n){Hl(2048,8,e,n)}function aS(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=zl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hm(e){var n=rn().memoizedState;return aS({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gm(e,n){return Hl(4,2,e,n)}function Vm(e,n){return Hl(4,4,e,n)}function km(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,km.bind(null,n,e),a)}function cf(){}function Wm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=e(),Es){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function uf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Y0(),he.lanes|=e,Va|=e,a)}function Ym(e,n,a,o){return $n(a,n)?a:rr.current!==null?(e=uf(e,a,o),$n(e,n)||(un=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(be&261930)===0?(un=!0,e.memoizedState=a):(e=Y0(),he.lanes|=e,Va|=e,n)}function jm(e,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=B.T,A={};B.T=A,df(e,!1,n,a);try{var H=u(),et=B.S;if(et!==null&&et(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=$x(H,o);Mo(e,n,dt,si(e))}else Mo(e,n,o,si(e))}catch(xt){Mo(e,n,{then:function(){},status:"rejected",reason:xt},si())}finally{G.p=f,S!==null&&A.types!==null&&(S.types=A.types),B.T=S}}function sS(){}function ff(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Zm(e).queue;jm(e,u,n,nt,a===null?sS:function(){return Km(e),a(o)})}function Zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Km(e){var n=Zm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},si())}function hf(){return Un(Bo)}function Qm(){return rn().memoizedState}function Jm(){return rn().memoizedState}function rS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=za(a);var o=Ia(n,e,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function oS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?t0(n,a):(a=wu(e,n,a,o),a!==null&&(jn(a,e,o),e0(a,n,o)))}function $m(e,n,a){var o=si();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))t0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,S))return yl(e,n,u,0),Ye===null&&Sl(),!1}catch{}finally{}if(a=wu(e,n,u,o),a!==null)return jn(a,e,o),e0(a,n,o),!0}return!1}function df(e,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=wu(e,a,o,2),n!==null&&jn(n,e,2)}function Gl(e){var n=e.alternate;return e===he||n!==null&&n===he}function t0(e,n){or=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function e0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:Un,use:Il,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Eo.useEffectEvent=en;var n0={readContext:Un,use:Il,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,km.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Es){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Es){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=oS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=rf(e);var n=e.queue,a=$m.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=Hn();return uf(a,e,n)},useTransition:function(){var e=rf(!1);return e=jm.bind(null,he,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Hn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(be&127)!==0||Em(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bm(Tm.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=Ye.identifierPrefix;if(Ae){var a=zi,o=Pi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return Hn().memoizedState=rS.bind(null,he)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Un,use:Il,useCallback:Wm,useContext:Un,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Fl,useRef:Fm,useState:function(){return Fl(sa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=rn();return Ym(a,ke.memoizedState,e,n)},useTransition:function(){var e=Fl(sa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:hf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,n){var a=rn();return Cm(a,ke,e,n)},useMemoCache:nf,useCacheRefresh:Jm};pf.useEffectEvent=Hm;var i0={readContext:Un,use:Il,useCallback:Wm,useContext:Un,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:sf,useRef:Fm,useState:function(){return sf(sa)},useDebugValue:cf,useDeferredValue:function(e,n){var a=rn();return ke===null?uf(a,e,n):Ym(a,ke.memoizedState,e,n)},useTransition:function(){var e=sf(sa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:hf,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=rn();return ke!==null?Cm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Jm};i0.useEffectEvent=Hm;function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(jn(n,e,a),_o(n,e,a))}};function a0(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function s0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function r0(e){xl(e)}function o0(e){console.error(e)}function l0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function c0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function u0(e){return e=za(e),e.tag=3,e}function f0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){c0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){c0(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function lS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?tc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(e,o,u)),!1}throw Error(s(435,a.tag))}return Vf(e,o,u),tc(),!1}if(Ae)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(e=Error(s(422),{cause:o}),fo(hi(e,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),fo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=_f(e.stateNode,o,u),qu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=hi(f,a),Uo===null?Uo=[f]:Uo.push(f),nn!==4&&(nn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=u0(u),f0(u,e,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(s(461)),un=!1;function Ln(e,n,a,o){n.child=e===null?mm(n,null,a,o):Ms(n,e.child,a,o)}function h0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return vs(n),o=Ju(e,n,a,S,f,u),A=$u(),e!==null&&!un?(tf(e,n,u),ra(e,n,u)):(Ae&&A&&Nu(n),n.flags|=1,Ln(e,n,o,u),n.child)}function d0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,p0(e,n,f,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Af(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(S,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(f,o),e.ref=n.ref,e.return=n,n.child=e}function p0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Af(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ra(e,n,u)}return xf(e,n,a,o,u)}function m0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return g0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?vm(n,f):ju(),xm(n);else return o=n.lanes=536870912,g0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rl(n,f.cachePool),vm(n,f),Ba(),n.memoizedState=null):(e!==null&&Rl(n,null),ju(),Ba());return Ln(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function g0(e,n,a,o,u){var f=Vu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rl(n,null),ju(),xm(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _0(e,n,a){return Ms(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function cS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,bo(null,e);if(Ku(n),(e=Ze)?(e=wg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return kl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=_0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||er(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=Ye,o!==null&&(S=Hs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ps(e,S),jn(o,e,S),vf;tc(),n=_0(e,n,a)}else e=f.treeContext,Ze=_i(S.nextSibling),Dn=n,Ae=!0,La=null,mi=!1,e!==null&&im(n,e),n=kl(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,o,u){return vs(n),a=Ju(e,n,a,o,void 0,u),o=$u(),e!==null&&!un?(tf(e,n,u),ra(e,n,u)):(Ae&&o&&Nu(n),n.flags|=1,Ln(e,n,a,u),n.child)}function v0(e,n,a,o,u,f){return vs(n),n.updateQueue=null,a=ym(n,o,a,u),Sm(e),o=$u(),e!==null&&!un?(tf(e,n,f),ra(e,n,f)):(Ae&&o&&Nu(n),n.flags|=1,Ln(e,n,a,f),n.child)}function x0(e,n,a,o,u){if(vs(n),n.stateNode===null){var f=Qs,S=a.contextType;typeof S=="object"&&S!==null&&(f=Un(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Xu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Un(S):Qs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(mf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&gf.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=bs(a,A);f.props=H;var et=f.context,dt=a.contextType;S=Qs,typeof dt=="object"&&dt!==null&&(S=Un(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==S)&&s0(n,f,o,S),Pa=!1;var st=n.memoizedState;f.state=st,xo(n,o,f,u),vo(),et=n.memoizedState,A||st!==et||Pa?(typeof xt=="function"&&(mf(n,a,xt,o),et=n.memoizedState),(H=Pa||a0(n,a,H,o,st,et,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),f.props=o,f.state=et,f.context=S,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Wu(e,n),S=n.memoizedProps,dt=bs(a,S),f.props=dt,xt=n.pendingProps,st=f.context,et=a.contextType,H=Qs,typeof et=="object"&&et!==null&&(H=Un(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||st!==H)&&s0(n,f,o,H),Pa=!1,st=n.memoizedState,f.state=st,xo(n,o,f,u),vo();var ct=n.memoizedState;S!==xt||st!==ct||Pa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof A=="function"&&(mf(n,a,A,o),ct=n.memoizedState),(dt=Pa||a0(n,a,dt,o,st,ct,H)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=H,o=dt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Ln(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ra(e,n,u),e}function S0(e,n,a,o){return gs(),n.flags|=256,Ln(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:cm()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function y0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Fa(n):Ba(),(e=Ze)?(e=wg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw Na(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ba(),u=n.mode,A=Wl({mode:"hidden",children:A},u),o=ms(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(e,S,a),n.memoizedState=Sf,bo(null,o)):(Fa(n),Ef(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),A=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),A=ms(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(e,S,a),n.memoizedState=Sf,n=bo(null,o));else if(Fa(n),ah(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var et=S.dgst;S=et,o=Error(s(419)),o.stack="",o.digest=S,fo({value:o,source:null,stack:null}),n=bf(e,n,a)}else if(un||er(e,n,a,!1),S=(a&e.childLanes)!==0,un||S){if(S=Ye,S!==null&&(o=Hs(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ps(e,o),jn(S,e,o),vf;ih(A)||tc(),n=bf(e,n,a)}else ih(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=_i(A.nextSibling),Dn=n,Ae=!0,La=null,mi=!1,e!==null&&im(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Ba(),A=o.fallback,u=n.mode,H=e.child,et=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,et!==null?A=ta(et,A):(A=ms(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=yf(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Mf(e,S,a),n.memoizedState=Sf,bo(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return Ms(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Fu(e.return,n,a)}function Tf(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function E0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,pt(sn,S),Ln(e,n,o,a),o=Ae?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,n);else if(e.tag===19)M0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,f,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function uS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Oa(n,ln,e.memoizedState.cache),gs();break;case 27:case 5:Gt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(e,n,a):(Fa(n),e=ra(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return E0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,m0(e,n,a,n.pendingProps);case 24:Oa(n,ln,e.memoizedState.cache)}return ra(e,n,a)}function b0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return un=!1,uS(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ae&&(n.flags&1048576)!==0&&nm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Du(e)?(o=bs(e,o),n.tag=1,n=x0(null,n,e,o,a)):(n.tag=0,n=xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=h0(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=d0(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),x0(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Wu(e,n),xo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Oa(n,ln,o),o!==f.cache&&Bu(n,[ln],a,!0),vo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),fo(u),n=S0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),Dn=n,Ae=!0,La=null,mi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),o===u){n=ra(e,n,a);break t}Ln(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=oc(it.current).createElement(a),o[on]=n,o[bn]=e,Nn(o,a,e),R(o),n.stateNode=o):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Ae&&(o=n.stateNode=Lg(n.type,n.pendingProps,it.current),Dn=n,mi=!0,u=Ze,Ya(n.type)?(sh=u,Ze=_i(o.firstChild)):Ze=u),Ln(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Ze)&&(o=HS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Dn=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Na(n)),Gt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,th(u,f)?o=null:S!==null&&th(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,eS,null,null,a),Bo._currentValue=u),Xl(e,n),Ln(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=GS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||Na(n)),null;case 13:return y0(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Ln(e,n,o,a),n.child;case 11:return h0(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Ln(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Un(u),o=o(u),n.flags|=1,Ln(e,n,o,a),n.child;case 14:return d0(e,n,n.type,n.pendingProps,a);case 15:return p0(e,n,n.type,n.pendingProps,a);case 19:return E0(e,n,a);case 31:return cS(e,n,a);case 22:return m0(e,n,a,n.pendingProps);case 24:return vs(n),o=Un(ln),e===null?(u=Vu(),u===null&&(u=Ye,f=Hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Xu(n),Oa(n,ln,u)):((e.lanes&a)!==0&&(Wu(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,ln,o)):(o=f.cache,Oa(n,ln,o),o!==u.cache&&Bu(n,[ln],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function Rf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Q0())e.flags|=8192;else throw ys=wl,ku}else e.flags&=-16777217}function T0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n))if(Q0())e.flags|=8192;else throw ys=wl,ku}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,dr|=n)}function To(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fS(e,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(ln),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(oa(n),f!==null?(Ke(n),T0(n,f)):(Ke(n),Rf(n,u,null,o,a))):f?f!==e.memoizedState?(oa(n),Ke(n),T0(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),Ke(n),Rf(n,u,e,o,a)),null;case 27:if(xe(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Et.current,tr(n)?am(n):(e=Lg(u,o,a),n.stateNode=e,oa(n))}return Ke(n),null;case 5:if(xe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Et.current,tr(n))am(n);else{var S=oc(it.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[on]=n,f[bn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return Ke(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||Na(n,!0)}else e=oc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ke(n),null);case 4:return Wt(),e===null&&Zf(n.stateNode.containerInfo),Ke(n),null;case 10:return ia(n.type),Ke(n),null;case 19:if($(sn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)To(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nl(e),f!==null){for(n.flags|=128,To(o,!1),e=f.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return pt(sn,sn.current&1|2),Ae&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Ql&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Ke(n),null}else 2*E()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,pt(sn,u?a&1|2:a&1),Ae&&ea(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hS(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(ln),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xe(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(sn),null;case 4:return Wt(),null;case 10:return ia(n.type),null;case 22:case 23:return ni(n),Zu(),e!==null&&$(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function A0(e,n){switch(Ou(n),n.tag){case 3:ia(ln),Wt();break;case 26:case 27:case 5:xe(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:$(sn);break;case 10:ia(n.type);break;case 22:case 23:ni(n),Zu(),e!==null&&$(xs);break;case 24:ia(ln)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,et=A;try{et()}catch(dt){Ge(u,H,dt)}}}o=o.next}while(o!==f)}}catch(dt){Ge(n,n.return,dt)}}function R0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(o){Ge(e,e.return,o)}}}function C0(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function w0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Cf(e,n,a){try{var o=e.stateNode;OS(o,e.type,a,n),o[bn]=n}catch(u){Ge(e,e.return,u)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function U0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[on]=e,n[bn]=a}catch(f){Ge(e,e.return,f)}}var la=!1,fn=!1,Uf=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function dS(e,n){if(e=e.containerInfo,Jf=pc,e=Xp(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,et=0,dt=0,xt=e,st=null;e:for(;;){for(var ct;xt!==a||u!==0&&xt.nodeType!==3||(A=S+u),xt!==f||o!==0&&xt.nodeType!==3||(H=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)st=xt,xt=ct;for(;;){if(xt===e)break e;if(st===a&&++et===u&&(A=S),st===f&&++dt===o&&(H=S),(ct=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},pc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Yt=bs(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ge(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function N0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&Ao(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&R0(a),o&512&&Ro(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_m(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&U0(a);case 26:case 5:ua(e,a),n===null&&o&4&&w0(a),o&512&&Ro(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&z0(e,a);break;case 13:ua(e,a),o&4&&I0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=MS.bind(null,a),VS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||fn,u=la;var f=fn;la=o,(fn=n)&&!f?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,fn=f}break;case 30:break;default:ua(e,a)}}function O0(e){var n=e.alternate;n!==null&&(e.alternate=null,O0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function ca(e,n,a){for(a=a.child;a!==null;)P0(e,n,a),a=a.sibling}function P0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var o=$e,u=Xn;Ya(a.type)&&($e=a.stateNode,Xn=!1),ca(e,n,a),zo(a.stateNode),$e=o,Xn=u;break;case 5:fn||Ii(a,n);case 6:if(o=$e,u=Xn,$e=null,ca(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Xn?(e=$e,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):Rg($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,ca(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),fn||Ha(4,a,n),ca(e,n,a);break;case 1:fn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&C0(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ca(e,n,a),fn=o;break;default:ca(e,n,a)}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Ge(n,n.return,a)}}}function I0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Ge(n,n.return,a)}}function pS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new L0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new L0),n;default:throw Error(s(435,e.tag))}}function jl(e,n){var a=pS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ES.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){$e=A.stateNode,Xn=!1;break t}break;case 5:$e=A.stateNode,Xn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if($e===null)throw Error(s(160));P0(f,S,u),$e=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F0(n,e),n=n.sibling}var Ai=null;function F0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ha(3,e,e.return),Ao(3,e),Ha(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,a),f[on]=e,R(f),o=f;break t;case"link":var S=Fg("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=Fg("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,R(f),o=f}e.stateNode=o}else Bg(u,e.type,e.stateNode);else e.stateNode=Ig(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Bg(u,e.type,e.stateNode):Ig(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Yt){Ge(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Ge(e,e.return,Yt)}}break;case 3:if(uc=null,u=Ai,Ai=lc(n.containerInfo),Wn(n,e),Ai=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Yt){Ge(e,e.return,Yt)}Uf&&(Uf=!1,B0(e));break;case 4:o=Ai,Ai=lc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ai=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,et=la,dt=fn;if(la=et||u,fn=dt||H,Wn(n,e),fn=dt,la=et,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||la||fn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var xt=H.memoizedProps.style,st=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Yt){Ge(H,H.return,Yt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Yt){Ge(H,H.return,Yt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?Cg(ct,!0):Cg(H.stateNode,!1)}catch(Yt){Ge(H,H.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(D0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(e);Yl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var A=wf(e);Yl(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,et=wf(e);Df(e,et,H);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Ts(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),Ts(n);break;case 27:zo(n.stateNode);case 26:case 5:Ii(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Ao(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)gm(H[u],A)}catch(et){Ge(o,o.return,et)}}a&&S&64&&R0(f),Ro(f,f.return);break;case 27:U0(f);case 26:case 5:fa(u,f,a),a&&o===null&&S&4&&w0(f),Ro(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&S&4&&z0(u,f);break;case 13:fa(u,f,a),a&&S&4&&I0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),Ro(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(e,n,a,o),n=n.sibling}function H0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ge(n,n.return,H)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(e,n,a,o):Co(e,n):f._visibility&2?Ri(e,n,a,o):(f._visibility|=2,ur(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(S,n);break;case 24:Ri(e,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ri(e,n,a,o)}}function ur(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,H=o,et=S.flags;switch(S.tag){case 0:case 11:case 15:ur(f,S,A,H,u),Ao(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?ur(f,S,A,H,u):Co(f,S):(dt._visibility|=2,ur(f,S,A,H,u)),u&&et&2048&&Lf(S.alternate,S);break;case 24:ur(f,S,A,H,u),u&&et&2048&&Nf(S.alternate,S);break;default:ur(f,S,A,H,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Nf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function fr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)G0(e,n,a),e=e.sibling}function G0(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&wo&&e.memoizedState!==null&&ty(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var o=Ai;Ai=lc(e.stateNode.containerInfo),fr(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,fr(e,n,a),wo=o):fr(e,n,a));break;default:fr(e,n,a)}}function V0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,X0(o,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Do(e);break;default:Do(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,X0(o,e)}V0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function X0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(O0(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var mS={getCacheForType:function(e){var n=Un(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(ln).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,ye=null,be=0,He=0,ii=null,Ga=!1,hr=!1,Of=!1,ha=0,nn=0,Va=0,As=0,Pf=0,ai=0,dr=0,Uo=null,Yn=null,zf=!1,Kl=0,W0=0,Ql=1/0,Jl=null,ka=null,gn=0,Xa=null,pr=null,da=0,If=0,Ff=null,q0=null,Lo=0,Bf=null;function si(){return(ze&2)!==0&&be!==0?be&-be:B.T!==null?Wf():Jr()}function Y0(){if(ai===0)if((be&536870912)===0||Ae){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Wa(e,be,ai,!1)),Pn(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(As|=a),nn===4&&Wa(e,be,ai,!1)),Fi(e))}function j0(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=o?xS(e,n):Gf(e,n,!0),f=o;do{if(u===0){hr&&!o&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_S(a)){u=Gf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Uo;var H=A.current.memoizedState.isDehydrated;if(H&&(mr(A,S).flags|=256),S=Gf(A,S,!1),S!==2){if(Of&&!H){A.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){mr(e,0),Wa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ai,!Ga);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-E(),10<u)){if(Wa(o,n,ai,!Ga),St(o,0,!0)!==0)break t;da=n,o.timeoutHandle=Tg(Z0.bind(null,o,a,Yn,Jl,zf,n,ai,As,dr,Ga,f,"Throttled",-0,0),u);break t}Z0(o,a,Yn,Jl,zf,n,ai,As,dr,Ga,f,null,-0,0)}}break}while(!0);Fi(e)}function Z0(e,n,a,o,u,f,S,A,H,et,dt,xt,st,ct){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},G0(n,f,xt);var Yt=(f&62914560)===f?Kl-E():(f&4194048)===f?W0-E():0;if(Yt=ey(xt,Yt),Yt!==null){da=f,e.cancelPendingCommit=Yt(ig.bind(null,e,n,f,a,o,u,S,A,H,dt,xt,null,st,ct)),Wa(e,f,S,!et);return}}ig(e,n,f,a,o,u,S,A,H)}function _S(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,o){n&=~Pf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&ul(e,a,n)}function $l(){return(ze&6)===0?(No(0),!1):!0}function Hf(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,na=_s=null,ef(e),sr=null,mo=0,e=ye;for(;e!==null;)A0(e.alternate,e),e=e.return;ye=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,IS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Hf(),Ye=e,ye=a=ta(e.current,null),be=n,He=0,ii=null,Ga=!1,hr=Rt(e,n),Of=!1,dr=ai=Pf=As=Va=nn=0,Yn=Uo=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return ha=n,Sl(),a}function K0(e,n){he=null,B.H=Eo,n===ar||n===Cl?(n=hm(),He=3):n===ku?(n=hm(),He=4):He=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ye===null&&(nn=1,Vl(e,hi(n,e.current)))}function Q0(){var e=ei.current;return e===null?!0:(be&4194048)===be?gi===null:(be&62914560)===be||(be&536870912)!==0?e===gi:!1}function J0(){var e=B.H;return B.H=Eo,e===null?Eo:e}function $0(){var e=B.A;return B.A=mS,e}function tc(){nn=4,Ga||(be&4194048)!==be&&ei.current!==null||(hr=!0),(Va&134217727)===0&&(As&134217727)===0||Ye===null||Wa(Ye,be,ai,!1)}function Gf(e,n,a){var o=ze;ze|=2;var u=J0(),f=$0();(Ye!==e||be!==n)&&(Jl=null,mr(e,n)),n=!1;var S=nn;t:do try{if(He!==0&&ye!==null){var A=ye,H=ii;switch(He){case 8:Hf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var et=He;if(He=0,ii=null,gr(e,A,H,et),a&&hr){S=0;break t}break;default:et=He,He=0,ii=null,gr(e,A,H,et)}}vS(),S=nn;break}catch(dt){K0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,na=_s=null,ze=o,B.H=u,B.A=f,ye===null&&(Ye=null,be=0,Sl()),S}function vS(){for(;ye!==null;)tg(ye)}function xS(e,n){var a=ze;ze|=2;var o=J0(),u=$0();Ye!==e||be!==n?(Jl=null,Ql=E()+500,mr(e,n)):hr=Rt(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var f=ii;e:switch(He){case 1:He=0,ii=null,gr(e,n,f,1);break;case 2:case 9:if(um(f)){He=0,ii=null,eg(n);break}n=function(){He!==2&&He!==9||Ye!==e||(He=7),Fi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:um(f)?(He=0,ii=null,eg(n)):(He=0,ii=null,gr(e,n,f,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var A=ye;if(S?Hg(S):A.stateNode.complete){He=0,ii=null;var H=A.sibling;if(H!==null)ye=H;else{var et=A.return;et!==null?(ye=et,ec(et)):ye=null}break e}}He=0,ii=null,gr(e,n,f,5);break;case 6:He=0,ii=null,gr(e,n,f,6);break;case 8:Hf(),nn=6;break t;default:throw Error(s(462))}}SS();break}catch(dt){K0(e,dt)}while(!0);return na=_s=null,B.H=o,B.A=u,ze=a,ye!==null?0:(Ye=null,be=0,Sl(),nn)}function SS(){for(;ye!==null&&!wt();)tg(ye)}function tg(e){var n=b0(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?ec(e):ye=n}function eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:ef(n);default:A0(a,n),n=ye=$p(n,ha),n=b0(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?ec(e):ye=n}function gr(e,n,a,o){na=_s=null,ef(n),sr=null,mo=0;var u=n.return;try{if(lS(e,u,n,a,be)){nn=1,Vl(e,hi(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;nn=1,Vl(e,hi(a,e.current)),ye=null;return}n.flags&32768?(Ae||o===1?e=!0:hr||(be&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),ng(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){ng(n,Ga);return}e=n.return;var a=fS(n.alternate,n,ha);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);nn===0&&(nn=5)}function ng(e,n){do{var a=hS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);nn=6,ye=null}function ig(e,n,a,o,u,f,S,A,H){e.cancelPendingCommit=null;do nc();while(gn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Cu,Mi(e,a,f,S,A,H),e===Ye&&(ye=Ye=null,be=0),pr=n,Xa=e,da=a,If=f,Ff=u,q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bS(ut,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,S=ze,ze|=4;try{dS(e,n,a)}finally{ze=S,G.p=u,B.T=o}}gn=1,ag(),sg(),rg()}}function ag(){if(gn===1){gn=0;var e=Xa,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{F0(n,e);var f=$f,S=Xp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(H!==null&&Eu(A)){var et=H.start,dt=H.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var xt=A.ownerDocument||document,st=xt&&xt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),Yt=A.textContent.length,ie=Math.min(H.start,Yt),We=H.end===void 0?ie:Math.min(H.end,Yt);!ct.extend&&ie>We&&(S=We,We=ie,ie=S);var Z=Vp(A,ie),k=Vp(A,We);if(Z&&k&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=xt.createRange();tt.setStart(Z.node,Z.offset),ct.removeAllRanges(),ie>We?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(xt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var _t=xt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}pc=!!Jf,$f=Jf=null}finally{ze=u,G.p=o,B.T=a}}e.current=n,gn=2}}function sg(){if(gn===2){gn=0;var e=Xa,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{N0(e,n.alternate,n)}finally{ze=u,G.p=o,B.T=a}}gn=3}}function rg(){if(gn===4||gn===3){gn=0,N();var e=Xa,n=pr,a=da,o=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,pr=Xa=null,og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),Gs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{B.T=n,G.p=u}}(da&3)!==0&&nc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Bf?Lo++:(Lo=0,Bf=e):Lo=0,No(0)}}function og(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function nc(){return ag(),sg(),rg(),lg()}function lg(){if(gn!==5)return!1;var e=Xa,n=If;If=0;var a=Gs(da),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=Ff,Ff=null;var f=Xa,S=da;if(gn=0,pr=Xa=null,da=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,k0(f.current),H0(f,f.current,S,a),ze=A,No(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{G.p=u,B.T=o,og(e,n)}}function cg(e,n,a){n=hi(a,n),n=_f(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Pn(e,2),Fi(e))}function Ge(e,n,a){if(e.tag===3)cg(e,e,a);else for(;n!==null;){if(n.tag===3){cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=hi(a,e),a=u0(2),o=Ia(n,a,2),o!==null&&(f0(a,o,n,e),Pn(o,2),Fi(o));break}}n=n.return}}function Vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),e=yS.bind(null,e,n,a),n.then(e,e))}function yS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>E()-Kl?(ze&2)===0&&mr(e,0):Pf|=a,dr===be&&(dr=0)),Fi(e)}function ug(e,n){n===0&&(n=Fe()),e=ps(e,n),e!==null&&(Pn(e,n),Fi(e))}function MS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ug(e,a)}function ES(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ug(e,a)}function bS(e,n){return $t(e,n)}var ic=null,_r=null,kf=!1,ac=!1,Xf=!1,qa=0;function Fi(e){e!==_r&&e.next===null&&(_r===null?ic=_r=e:_r=_r.next=e),ac=!0,kf||(kf=!0,AS())}function No(e,n){if(!Xf&&ac){Xf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pg(o,f))}else f=be,f=St(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Rt(o,f)||(a=!0,pg(o,f));o=o.next}while(a);Xf=!1}}function TS(){fg()}function fg(){ac=kf=!1;var e=0;qa!==0&&zS()&&(e=qa);for(var n=E(),a=null,o=ic;o!==null;){var u=o.next,f=hg(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(f&3)!==0)&&(ac=!0)),o=u}gn!==0&&gn!==5||No(e),qa!==0&&(qa=0)}function hg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-It(f),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=oe(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ye,a=be,a=St(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ce(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ce(o),Gs(a)){case 2:case 8:a=mt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return o=dg.bind(null,e),a=$t(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ce(o),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=be;return o=St(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(j0(e,o,n),hg(e,E()),e.callbackNode!=null&&e.callbackNode===a?dg.bind(null,e):null)}function pg(e,n){if(nc())return null;j0(e,n,!0)}function AS(){FS(function(){(ze&6)!==0?$t(ft,TS):fg()})}function Wf(){if(qa===0){var e=nr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),qa=e}return qa}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function RS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?mg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new gl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var H=S?gg(u,S):new FormData(u);ff(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=S?gg(u,S):new FormData(u),ff(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var qf=0;qf<Ru.length;qf++){var Yf=Ru[qf],CS=Yf.toLowerCase(),wS=Yf[0].toUpperCase()+Yf.slice(1);Ti(CS,"on"+wS)}Ti(Yp,"onAnimationEnd"),Ti(jp,"onAnimationIteration"),Ti(Zp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Wx,"onTransitionRun"),Ti(qx,"onTransitionStart"),Ti(Yx,"onTransitionCancel"),Ti(Kp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,et=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(dt){xl(dt)}u.currentTarget=null,f=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,et=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(dt){xl(dt)}u.currentTarget=null,f=H}}}}function Me(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var o=e+"__bubble";a.has(o)||(vg(n,e,2,!1),a.add(o))}function jf(e,n,a){var o=0;n&&(o|=4),vg(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[sc]){e[sc]=!0,j.forEach(function(a){a!=="selectionchange"&&(DS.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,jf("selectionchange",!1,n))}}function vg(e,n,a,o){switch(Yg(n)){case 2:var u=ay;break;case 8:u=sy;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Ra(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=f=S;continue t}A=A.parentNode}}o=o.return}Ep(function(){var et=f,dt=hu(a),xt=[];t:{var st=Qp.get(e);if(st!==void 0){var ct=gl,Yt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":ct=Ex;break;case"focusin":Yt="focus",ct=vu;break;case"focusout":Yt="blur",ct=vu;break;case"beforeblur":case"afterblur":ct=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Ax;break;case Yp:case jp:case Zp:ct=px;break;case Kp:ct=Cx;break;case"scroll":case"scrollend":ct=cx;break;case"wheel":ct=Dx;break;case"copy":case"cut":case"paste":ct=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Cp;break;case"toggle":case"beforetoggle":ct=Lx}var ie=(n&4)!==0,We=!ie&&(e==="scroll"||e==="scrollend"),Z=ie?st!==null?st+"Capture":null:st;ie=[];for(var k=et,tt;k!==null;){var _t=k;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||Z===null||(_t=eo(k,Z),_t!=null&&ie.push(Po(k,_t,tt))),We)break;k=k.return}0<ie.length&&(st=new ct(st,Yt,null,a,dt),xt.push({event:st,listeners:ie}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",st&&a!==fu&&(Yt=a.relatedTarget||a.fromElement)&&(Ra(Yt)||Yt[Ei]))break t;if((ct||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(Yt=a.relatedTarget||a.toElement,ct=et,Yt=Yt?Ra(Yt):null,Yt!==null&&(We=c(Yt),ie=Yt.tag,Yt!==We||ie!==5&&ie!==27&&ie!==6)&&(Yt=null)):(ct=null,Yt=et),ct!==Yt)){if(ie=Ap,_t="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Cp,_t="onPointerLeave",Z="onPointerEnter",k="pointer"),We=ct==null?st:us(ct),tt=Yt==null?st:us(Yt),st=new ie(_t,k+"leave",ct,a,dt),st.target=We,st.relatedTarget=tt,_t=null,Ra(dt)===et&&(ie=new ie(Z,k+"enter",Yt,a,dt),ie.target=tt,ie.relatedTarget=We,_t=ie),We=_t,ct&&Yt)e:{for(ie=US,Z=ct,k=Yt,tt=0,_t=Z;_t;_t=ie(_t))tt++;_t=0;for(var Jt=k;Jt;Jt=ie(Jt))_t++;for(;0<tt-_t;)Z=ie(Z),tt--;for(;0<_t-tt;)k=ie(k),_t--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){ie=Z;break e}Z=ie(Z),k=ie(k)}ie=null}else ie=null;ct!==null&&xg(xt,st,ct,ie,!1),Yt!==null&&We!==null&&xg(xt,We,Yt,ie,!0)}}t:{if(st=et?us(et):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Le=zp;else if(Op(st))if(Ip)Le=Vx;else{Le=Hx;var Kt=Bx}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&bi(et.elementType)&&(Le=zp):Le=Gx;if(Le&&(Le=Le(e,et))){Pp(xt,Le,a,dt);break t}Kt&&Kt(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&An(st,"number",st.value)}switch(Kt=et?us(et):window,e){case"focusin":(Op(Kt)||Kt.contentEditable==="true")&&(js=Kt,bu=et,co=null);break;case"focusout":co=bu=js=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Wp(xt,a,dt);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Wp(xt,a,dt)}var pe;if(Su)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Ys?Lp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(wp&&a.locale!=="ko"&&(Ys||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ys&&(pe=bp()):(Da=dt,mu="value"in Da?Da.value:Da.textContent,Ys=!0)),Kt=rc(et,Te),0<Kt.length&&(Te=new Rp(Te,e,null,a,dt),xt.push({event:Te,listeners:Kt}),pe?Te.data=pe:(pe=Np(a),pe!==null&&(Te.data=pe)))),(pe=Ox?Px(e,a):zx(e,a))&&(Te=rc(et,"onBeforeInput"),0<Te.length&&(Kt=new Rp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:Kt,listeners:Te}),Kt.data=pe)),RS(xt,e,et,a,dt)}_g(xt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function US(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,et=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||et===null||(H=et,u?(et=eo(a,f),et!=null&&S.unshift(Po(a,et,H))):u||(et=eo(a,f),et!=null&&S.push(Po(a,et,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var LS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(LS,`
`).replace(NS,"")}function yg(e,n){return n=Sg(n),Sg(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":Xs(e,o,f);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),jt(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ox.get(a)||a,jt(e,a,o))}}function Qf(e,n,a,o,u,f){switch(a){case"style":Xs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jt(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,S,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=S=u=null,H=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":H=dt;break;case"defaultChecked":et=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,dt,a,null)}}Qi(e,f,A,H,et,S,u,!1);return;case"select":Me("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Xe(e,n,u,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?ui(e,!!o,n,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,S,A,a,null)}Rn(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,H,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)Me(Oo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,et,o,a,null)}return;default:if(bi(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Qf(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xe(e,n,A,o,a,null))}function OS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,H=null,et=null,dt=null;for(ct in a){var xt=a[ct];if(a.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=xt;default:o.hasOwnProperty(ct)||Xe(e,n,ct,null,o,xt)}}for(var st in o){var ct=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(ct!=null||xt!=null))switch(st){case"type":f=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==xt&&Xe(e,n,st,ct,o,xt)}}Tn(e,S,A,H,et,dt,f,u);return;case"select":ct=S=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==H&&Xe(e,n,u,f,o,H)}n=A,a=S,o=ct,st!=null?ui(e,!!a,st,!1):!!o!=!!a&&(n!=null?ui(e,!!a,n,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":st=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,S,u,o,f)}Be(e,st,ct);return;case"option":for(var Yt in a)if(st=a[Yt],a.hasOwnProperty(Yt)&&st!=null&&!o.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Xe(e,n,Yt,null,o,st)}for(H in o)if(st=o[H],ct=a[H],o.hasOwnProperty(H)&&st!==ct&&(st!=null||ct!=null))switch(H){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Xe(e,n,H,st,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!o.hasOwnProperty(ie)&&Xe(e,n,ie,null,o,st);for(et in o)if(st=o[et],ct=a[et],o.hasOwnProperty(et)&&st!==ct&&(st!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Xe(e,n,et,st,o,ct)}return;default:if(bi(n)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!o.hasOwnProperty(We)&&Qf(e,n,We,void 0,o,st);for(dt in o)st=o[dt],ct=a[dt],!o.hasOwnProperty(dt)||st===ct||st===void 0&&ct===void 0||Qf(e,n,dt,st,o,ct);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&Xe(e,n,Z,null,o,st);for(xt in o)st=o[xt],ct=a[xt],!o.hasOwnProperty(xt)||st===ct||st==null&&ct==null||Xe(e,n,xt,st,o,ct)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&Mg(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],et=H.startTime;if(et>A)break;var dt=H.transferSize,xt=H.initiatorType;dt&&Mg(xt)&&(H=H.responseEnd,S+=dt*(H<A?1:(A-et)/(H-et)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function zS(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(BS)}:Tg;function BS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Rg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[cs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);yr(n)}function Cg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function HS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function GS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sh=null;function Dg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Lg(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var vi=new Map,Ng=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=G.d;G.d={f:kS,r:XS,D:WS,C:qS,L:YS,m:jS,X:KS,S:ZS,M:QS};function kS(){var e=pa.f(),n=$l();return e||n}function XS(e){var n=Ca(e);n!==null&&n.tag===5&&n.type==="form"?Km(n):pa.r(e)}var vr=typeof document>"u"?null:document;function Og(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ng.has(u)||(Ng.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),R(n),o.head.appendChild(n)))}}function WS(e){pa.D(e),Og("dns-prefetch",e,null)}function qS(e,n){pa.C(e,n),Og("preconnect",e,n)}function YS(e,n,a){pa.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var f=u;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}vi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Nn(n,"link",e),R(n),o.head.appendChild(n)))}}function jS(e,n){pa.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!vi.has(f)&&(e=_({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Nn(o,"link",e),R(o),a.head.appendChild(o)}}}function ZS(e,n,a){pa.S(e,n,a);var o=vr;if(o&&e){var u=wa(o).hoistableStyles,f=xr(e);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Io(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&rh(e,a);var H=S=o.createElement("link");R(H),Nn(H,"link",e),H._p=new Promise(function(et,dt){H.onload=et,H.onerror=dt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function KS(e,n){pa.X(e,n);var a=vr;if(a&&e){var o=wa(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0},n),(n=vi.get(u))&&oh(e,n),f=a.createElement("script"),R(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function QS(e,n){pa.M(e,n);var a=vr;if(a&&e){var o=wa(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&oh(e,n),f=a.createElement("script"),R(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Pg(e,n,a,o){var u=(u=it.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=wa(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Io(e)))&&!f._p&&(S.instance=f,S.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||JS(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+le(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function JS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),R(n),e.head.appendChild(n))}function Sr(e){return'[src="'+le(e)+'"]'}function Fo(e){return"script[async]"+e}function Ig(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Nn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=xr(a.href);var f=e.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=zg(a),(u=vi.get(u))&&rh(o,u),f=(e.ownerDocument||e).createElement("link"),R(f);var S=f;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Nn(f,"link",o),n.state.loading|=4,cc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Fo(f)))?(n.instance=u,R(u),u):(o=a,(u=vi.get(f))&&(o=_({},a),oh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Fg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ty(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=zg(o),(u=vi.get(u))&&rh(o,u),f=f.createElement("link"),R(f);var S=f;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Nn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function ey(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*PS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(ny,e),hc=null,fc.call(e))}function ny(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:w,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function iy(e,n,a,o,u,f,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Gg(e,n,a,o,u,f,S,A,H,et,dt,xt){return e=new iy(e,n,a,S,H,et,dt,xt,A),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Xu(f),e}function Vg(e){return e?(e=Qs,e):Qs}function kg(e,n,a,o,u,f){u=Vg(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(e,o,n),a!==null&&(jn(a,e,n),_o(a,e,n))}function Xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){Xg(e,n),(e=e.alternate)&&Xg(e,n)}function Wg(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&jn(n,e,67108864),ch(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var n=si();n=Qr(n);var a=ps(e,n);a!==null&&jn(a,e,n),ch(e,n)}}var pc=!0;function ay(e,n,a,o){var u=B.T;B.T=null;var f=G.p;try{G.p=2,uh(e,n,a,o)}finally{G.p=f,B.T=u}}function sy(e,n,a,o){var u=B.T;B.T=null;var f=G.p;try{G.p=8,uh(e,n,a,o)}finally{G.p=f,B.T=u}}function uh(e,n,a,o){if(pc){var u=fh(o);if(u===null)Kf(e,n,o,mc,a),jg(e,o);else if(oy(u,e,n,a,o))o.stopPropagation();else if(jg(e,o),n&4&&-1<ry.indexOf(e)){for(;u!==null;){var f=Ca(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Mt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-It(S);A.entanglements[1]|=H,S&=~H}Fi(f),(ze&6)===0&&(Ql=E()+500,No(0))}}break;case 31:case 13:A=ps(f,2),A!==null&&jn(A,f,2),$l(),ch(f,2)}if(f=fh(o),f===null&&Kf(e,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Kf(e,n,o,null,a)}}function fh(e){return e=hu(e),hh(e)}var mc=null;function hh(e){if(mc=null,e=Ra(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ft:return 2;case mt:return 8;case ut:case kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var dh=!1,ja=null,Za=null,Ka=null,Ho=new Map,Go=new Map,Qa=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ca(n),n!==null&&Wg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oy(e,n,a,o,u){switch(n){case"focusin":return ja=Vo(ja,e,n,a,o,u),!0;case"dragenter":return Za=Vo(Za,e,n,a,o,u),!0;case"mouseover":return Ka=Vo(Ka,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function Zg(e){var n=Ra(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){qg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=Ca(a),n!==null&&Wg(n),e.blockedOn=a,!1;n.shift()}return!0}function Kg(e,n,a){gc(e)&&a.delete(n)}function ly(){dh=!1,ja!==null&&gc(ja)&&(ja=null),Za!==null&&gc(Za)&&(Za=null),Ka!==null&&gc(Ka)&&(Ka=null),Ho.forEach(Kg),Go.forEach(Kg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ly)))}var vc=null;function Qg(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var f=Ca(a);f!==null&&(e.splice(n,3),n-=3,ff(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(H){return _c(H,e)}ja!==null&&_c(ja,e),Za!==null&&_c(Za,e),Ka!==null&&_c(Ka,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[bn]||null;if(typeof f=="function")S||Qg(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[bn]||null)A=S.formAction;else if(hh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Qg(a)}}}function Jg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}xc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();kg(a,o,e,n,null,null)},xc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kg(e.current,2,null,e,null,null),$l(),n[Ei]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.3")throw Error(s(527,$g,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{yt=Sc.inject(cy),bt=Sc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=r0,f=o0,S=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Gg(e,1,!1,null,null,a,o,null,u,f,S,Jg),e[Ei]=n.current,Zf(e),new ph(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=r0,S=o0,A=l0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Gg(e,1,!0,n,a??null,o,u,H,f,S,A,Jg),n.context=Vg(null),a=n.current,o=si(),o=Qr(o),u=za(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Fi(n),e[Ei]=n.current,Zf(e),new xc(n)},Xo.version="19.2.3",Xo}var c_;function xy(){if(c_)return _h.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=vy(),_h.exports}var Sy=xy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="182",Br={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yy=0,u_=1,My=2,qc=1,Ey=2,tl=3,ls=0,Qn=1,Sa=2,Ma=0,Hr=1,f_=2,h_=3,d_=4,by=5,Ns=100,Ty=101,Ay=102,Ry=103,Cy=104,wy=200,Dy=201,Uy=202,Ly=203,id=204,ad=205,Ny=206,Oy=207,Py=208,zy=209,Iy=210,Fy=211,By=212,Hy=213,Gy=214,sd=0,rd=1,od=2,Vr=3,ld=4,cd=5,ud=6,fd=7,bv=0,Vy=1,ky=2,Xi=0,Tv=1,Av=2,Rv=3,Cv=4,wv=5,Dv=6,Uv=7,Lv=300,Is=301,kr=302,hd=303,dd=304,au=306,pd=1e3,ya=1001,md=1002,On=1003,Xy=1004,yc=1005,Bn=1006,yh=1007,Ps=1008,li=1009,Nv=1010,Ov=1011,nl=1012,ip=1013,Yi=1014,Gi=1015,Ta=1016,ap=1017,sp=1018,il=1020,Pv=35902,zv=35899,Iv=1021,Fv=1022,Li=1023,Aa=1026,zs=1027,Bv=1028,rp=1029,Xr=1030,op=1031,lp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,yd=37492,Md=37496,Ed=37488,bd=37489,Td=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,zd=37817,Id=37818,Fd=37819,Bd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,qd=36285,Yd=36286,Wy=3200,Hv=0,qy=1,rs="",Si="srgb",Wr="srgb-linear",$c="linear",Ve="srgb",Mr=7680,p_=519,Yy=512,jy=513,Zy=514,cp=515,Ky=516,Qy=517,up=518,Jy=519,m_=35044,g_="300 es",Vi=2e3,tu=2001;function Gv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $y(){const r=eu("canvas");return r.style.display="block",r}const __={};function v_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ae(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function al(...r){const t=r.join(" ");t in __||(__[t]=!0,ae(...r))}function tM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,jd=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function eM(r,t){return(r%t+t)%t}function Mh(r,t,i){return(1-i)*r+i*t}function Wo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const nM={DEG2RAD:Qc};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[h+0],M=c[h+1],b=c[h+2],T=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==x||p!==M||g!==b){let y=m*x+p*M+g*b+_*T;y<0&&(x=-x,M=-M,b=-b,T=-T,y=-y);let v=1-d;if(y<.9995){const L=Math.acos(y),w=Math.sin(L);v=Math.sin(v*L)/w,d=Math.sin(d*L)/w,m=m*v+x*d,p=p*v+M*d,g=g*v+b*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+M*d,g=g*v+b*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],x=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*M-p*x,t[i+1]=m*b+g*x+p*_-d*M,t[i+2]=p*b+g*M+d*x-m*_,t[i+3]=g*b-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_-x*M*b;break;case"YXZ":this._x=x*g*_+p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_+x*M*b;break;case"ZXY":this._x=x*g*_-p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_-x*M*b;break;case"ZYX":this._x=x*g*_-p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_+x*M*b;break;case"YZX":this._x=x*g*_+p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_-x*M*b;break;case"XZY":this._x=x*g*_-p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_+x*M*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(x_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(x_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new K,x_=new Fs;class ge{constructor(t,i,s,l,c,h,d,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],M=s[5],b=s[8],T=l[0],y=l[3],v=l[6],L=l[1],w=l[4],U=l[7],z=l[2],F=l[5],O=l[8];return c[0]=h*T+d*L+m*z,c[3]=h*y+d*w+m*F,c[6]=h*v+d*U+m*O,c[1]=p*T+g*L+_*z,c[4]=p*y+g*w+_*F,c[7]=p*v+g*U+_*O,c[2]=x*T+M*L+b*z,c[5]=x*y+M*w+b*F,c[8]=x*v+M*U+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,M=p*c-h*m,b=i*_+s*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(bh.makeScale(t,i)),this}rotate(t){return this.premultiply(bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new ge,S_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:S_,fromXYZ:y_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ue=iM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=eu("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=eu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class fp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Th(l[h].image)):c.push(Th(l[h]))}else c=Th(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Th(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let rM=0;const Ah=new K;class Vn extends Bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ya,l=ya,c=Bn,h=Ps,d=Li,m=li,p=Vn.DEFAULT_ANISOTROPY,g=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=rl(),this.name="",this.source=new fp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Lv;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,U=(M+1)/2,z=(v+1)/2,F=(g+x)/4,O=(_+T)/4,W=(b+y)/4;return w>U&&w>z?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=F/s,c=O/s):U>z?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=F/l,c=W/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=O/c,l=W/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-b)*(y-b)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends oM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Vv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ci):Ci.fromBufferAttribute(c,h),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Ec.subVectors(this.max,qo),br.subVectors(t.a,qo),Tr.subVectors(t.b,qo),Ar.subVectors(t.c,qo),$a.subVectors(Tr,br),ts.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-$a.z,$a.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,$a.z,0,-$a.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-$a.y,$a.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!Rh(i,br,Tr,Ar,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Rh(i,br,Tr,Ar,Ec))?!1:(bc.crossVectors($a,ts),i=[bc.x,bc.y,bc.z],Rh(i,br,Tr,Ar,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new K,new K,new K,new K,new K,new K,new K,new K],Ci=new K,Mc=new ol,br=new K,Tr=new K,Ar=new K,$a=new K,ts=new K,Rs=new K,qo=new K,Ec=new K,bc=new K,Cs=new K;function Rh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const cM=new ol,Yo=new K,Ch=new K;class su{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Ch)),this.expandByPoint(Yo.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new K,wh=new K,Tc=new K,es=new K,Dh=new K,Ac=new K,Uh=new K;class ru{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),es.copy(this.origin).sub(wh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=es.dot(this.direction),m=-es.dot(Tc),p=es.lengthSq(),g=Math.abs(1-h*h);let _,x,M,b;if(g>0)if(_=h*m-d,x=h*d-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const T=1/g;_*=T,x*=T,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(wh).addScaledVector(Tc,x),M}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){Dh.subVectors(i,t),Ac.subVectors(s,t),Uh.crossVectors(Dh,Ac);let h=this.direction.dot(Uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;es.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(es,Ac));if(m<0)return null;const p=d*this.direction.dot(Dh.cross(es));if(p<0||m+p>h)return null;const g=-d*es.dot(Uh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,h,d,m,p,g,_,x,M,b,T,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,x,M,b,T,y)}set(t,i,s,l,c,h,d,m,p,g,_,x,M,b,T,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,b=p*g,T=p*_;i[0]=x+T*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=T+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,b=p*g,T=p*_;i[0]=x-T*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=T-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=T-x*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=x-T*_}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ns.crossVectors(s,ri),ns.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ns.crossVectors(s,ri)),ns.normalize(),Rc.crossVectors(ri,ns),l[0]=ns.x,l[4]=Rc.x,l[8]=ri.x,l[1]=ns.y,l[5]=Rc.y,l[9]=ri.y,l[2]=ns.z,l[6]=Rc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],M=s[13],b=s[2],T=s[6],y=s[10],v=s[14],L=s[3],w=s[7],U=s[11],z=s[15],F=l[0],O=l[4],W=l[8],C=l[12],D=l[1],V=l[5],Y=l[9],Q=l[13],lt=l[2],rt=l[6],B=l[10],G=l[14],nt=l[3],gt=l[7],vt=l[11],P=l[15];return c[0]=h*F+d*D+m*lt+p*nt,c[4]=h*O+d*V+m*rt+p*gt,c[8]=h*W+d*Y+m*B+p*vt,c[12]=h*C+d*Q+m*G+p*P,c[1]=g*F+_*D+x*lt+M*nt,c[5]=g*O+_*V+x*rt+M*gt,c[9]=g*W+_*Y+x*B+M*vt,c[13]=g*C+_*Q+x*G+M*P,c[2]=b*F+T*D+y*lt+v*nt,c[6]=b*O+T*V+y*rt+v*gt,c[10]=b*W+T*Y+y*B+v*vt,c[14]=b*C+T*Q+y*G+v*P,c[3]=L*F+w*D+U*lt+z*nt,c[7]=L*O+w*V+U*rt+z*gt,c[11]=L*W+w*Y+U*B+z*vt,c[15]=L*C+w*Q+U*G+z*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],b=t[3],T=t[7],y=t[11],v=t[15],L=m*M-p*x,w=d*M-p*_,U=d*x-m*_,z=h*M-p*g,F=h*x-m*g,O=h*_-d*g;return i*(T*L-y*w+v*U)-s*(b*L-y*z+v*F)+l*(b*w-T*z+v*O)-c*(b*U-T*F+y*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],b=t[12],T=t[13],y=t[14],v=t[15],L=_*y*p-T*x*p+T*m*M-d*y*M-_*m*v+d*x*v,w=b*x*p-g*y*p-b*m*M+h*y*M+g*m*v-h*x*v,U=g*T*p-b*_*p+b*d*M-h*T*M-g*d*v+h*_*v,z=b*_*m-g*T*m-b*d*x+h*T*x+g*d*y-h*_*y,F=i*L+s*w+l*U+c*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=L*O,t[1]=(T*x*c-_*y*c-T*l*M+s*y*M+_*l*v-s*x*v)*O,t[2]=(d*y*c-T*m*c+T*l*p-s*y*p-d*l*v+s*m*v)*O,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*M-s*m*M)*O,t[4]=w*O,t[5]=(g*y*c-b*x*c+b*l*M-i*y*M-g*l*v+i*x*v)*O,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*v-i*m*v)*O,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*M+i*m*M)*O,t[8]=U*O,t[9]=(b*_*c-g*T*c-b*s*M+i*T*M+g*s*v-i*_*v)*O,t[10]=(h*T*c-b*d*c+b*s*p-i*T*p-h*s*v+i*d*v)*O,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*M-i*d*M)*O,t[12]=z*O,t[13]=(g*T*l-b*_*l+b*s*x-i*T*x-g*s*y+i*_*y)*O,t[14]=(b*d*l-h*T*l-b*s*m+i*T*m+h*s*y-i*d*y)*O,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,M=c*g,b=c*_,T=h*g,y=h*_,v=d*_,L=m*p,w=m*g,U=m*_,z=s.x,F=s.y,O=s.z;return l[0]=(1-(T+v))*z,l[1]=(M+U)*z,l[2]=(b-w)*z,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(x+v))*F,l[6]=(y+L)*F,l[7]=0,l[8]=(b+w)*O,l[9]=(y-L)*O,l[10]=(1-(x+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/h,_=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let b,T;if(m)b=c/(h-c),T=h*c/(h-c);else if(d===Vi)b=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===tu)b=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,T;if(m)b=1/(h-c),T=h/(h-c);else if(d===Vi)b=-2/(h-c),T=-(h+c)/(h-c);else if(d===tu)b=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new K,wi=new tn,uM=new K(0,0,0),fM=new K(1,1,1),ns=new K,Rc=new K,ri=new K,M_=new tn,E_=new Fs;class ji{constructor(t=0,i=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return M_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return E_.setFromEuler(this),this.setFromQuaternion(E_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const b_=new K,Cr=new Fs,_a=new tn,Cc=new K,jo=new K,dM=new K,pM=new Fs,T_=new K(1,0,0),A_=new K(0,1,0),R_=new K(0,0,1),C_={type:"added"},mM={type:"removed"},wr={type:"childadded",child:null},Lh={type:"childremoved",child:null};class En extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new K,i=new ji,s=new Fs,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ge}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(A_,t)}rotateZ(t){return this.rotateOnAxis(R_,t)}translateOnAxis(t,i){return b_.copy(t).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(A_,t)}translateZ(t){return this.translateOnAxis(R_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(jo,Cc,this.up):_a.lookAt(Cc,jo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(_a),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C_),wr.child=t,this.dispatchEvent(wr),wr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new K(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new K,va=new K,Nh=new K,xa=new K,Dr=new K,Ur=new K,w_=new K,Oh=new K,Ph=new K,zh=new K,Ih=new an,Fh=new an,Bh=new an;class Ui{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),va.subVectors(s,i),Nh.subVectors(t,i);const h=Di.dot(Di),d=Di.dot(va),m=Di.dot(Nh),p=va.dot(va),g=va.dot(Nh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Ih.setScalar(0),Fh.setScalar(0),Bh.setScalar(0),Ih.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ih,c.x),h.addScaledVector(Fh,c.y),h.addScaledVector(Bh,c.z),h}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),va.subVectors(t,i),Di.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(c,s),Oh.subVectors(t,s);const m=Dr.dot(Oh),p=Ur.dot(Oh);if(m<=0&&p<=0)return i.copy(s);Ph.subVectors(t,l);const g=Dr.dot(Ph),_=Ur.dot(Ph);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Dr,h);zh.subVectors(t,c);const M=Dr.dot(zh),b=Ur.dot(zh);if(b>=0&&M<=b)return i.copy(c);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ur,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return w_.subVectors(c,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(w_,d);const v=1/(y+T+x);return h=T*v,d=x*v,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Hh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=eM(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Hh(h,c,t+1/3),this.g=Hh(h,c,t),this.b=Hh(h,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=kv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ue.workingToColorSpace(Fn.copy(this),t),Math.round(Ee(Fn.r*255,0,255))*65536+Math.round(Ee(Fn.g*255,0,255))*256+Math.round(Ee(Fn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Si){Ue.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(wc);const s=Mh(is.h,wc.h,i),l=Mh(is.s,wc.s,i),c=Mh(is.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Re;Re.NAMES=kv;let gM=0;class jr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Hr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==id&&(s.blendSrc=this.blendSrc),this.blendDst!==ad&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dp extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new K,Dc=new fe;let _M=0;class qi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=m_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m_&&(t.usage=this.usage),t}}class Xv extends qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Wv extends qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pn extends qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let vM=0;const xi=new tn,Gh=new En,Lr=new K,oi=new ol,Zo=new ol,yn=new K;class Jn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gv(t)?Wv:Xv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return Gh.lookAt(t),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(oi.min,Zo.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Zo.max),oi.expandByPoint(yn)):(oi.expandByPoint(Zo.min),oi.expandByPoint(Zo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),yn.add(Lr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new K,m[W]=new K;const p=new K,g=new K,_=new K,x=new fe,M=new fe,b=new fe,T=new K,y=new K;function v(W,C,D){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,D),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,C),b.fromBufferAttribute(c,D),g.sub(p),_.sub(p),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(V),d[W].add(T),d[C].add(T),d[D].add(T),m[W].add(y),m[C].add(y),m[D].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let W=0,C=L.length;W<C;++W){const D=L[W],V=D.start,Y=D.count;for(let Q=V,lt=V+Y;Q<lt;Q+=3)v(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const w=new K,U=new K,z=new K,F=new K;function O(W){z.fromBufferAttribute(l,W),F.copy(z);const C=d[W];w.copy(C),w.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(F,C);const V=U.dot(m[W])<0?-1:1;h.setXYZW(W,w.x,w.y,w.z,V)}for(let W=0,C=L.length;W<C;++W){const D=L[W],V=D.start,Y=D.count;for(let Q=V,lt=V+Y;Q<lt;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,g=new K,_=new K;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),T=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*g;for(let v=0;v<g;v++)x[b++]=p[M++]}return new qi(x,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new tn,ws=new ru,Uc=new su,U_=new K,Lc=new K,Nc=new K,Oc=new K,Vh=new K,Pc=new K,L_=new K,zc=new K;class Ni extends En{constructor(t=new Jn,i=new dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Vh.fromBufferAttribute(_,t),h?Pc.addScaledVector(Vh,g):Pc.addScaledVector(Vh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uc,U_)===null||ws.origin.distanceToSquared(U_)>(t.far-t.near)**2))&&(D_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(D_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=h[y.materialIndex],L=Math.max(y.start,M.start),w=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=L,z=w;U<z;U+=3){const F=d.getX(U),O=d.getX(U+1),W=d.getX(U+2);l=Ic(this,v,t,s,p,g,_,F,O,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const L=d.getX(y),w=d.getX(y+1),U=d.getX(y+2);l=Ic(this,h,t,s,p,g,_,L,w,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=h[y.materialIndex],L=Math.max(y.start,M.start),w=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=L,z=w;U<z;U+=3){const F=U,O=U+1,W=U+2;l=Ic(this,v,t,s,p,g,_,F,O,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const L=y,w=y+1,U=y+2;l=Ic(this,h,t,s,p,g,_,L,w,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function xM(r,t,i,s,l,c,h,d){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ls,d),m===null)return null;zc.copy(d),zc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:r}}function Ic(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const g=xM(r,t,i,s,Lc,Nc,Oc,L_);if(g){const _=new K;Ui.getBarycoord(L_,Lc,Nc,Oc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,d,m,p,_,new fe)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,d,m,p,_,new fe)),h&&(g.normal=Ui.getInterpolatedAttribute(h,d,m,p,_,new K),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new K,materialIndex:0};Ui.getNormal(Lc,Nc,Oc,x.normal),g.face=x,g.barycoord=_}return g}class ll extends Jn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(_,2));function b(T,y,v,L,w,U,z,F,O,W,C){const D=U/O,V=z/W,Y=U/2,Q=z/2,lt=F/2,rt=O+1,B=W+1;let G=0,nt=0;const gt=new K;for(let vt=0;vt<B;vt++){const P=vt*V-Q;for(let $=0;$<rt;$++){const pt=$*D-Y;gt[T]=pt*L,gt[y]=P*w,gt[v]=lt,p.push(gt.x,gt.y,gt.z),gt[T]=0,gt[y]=0,gt[v]=F>0?1:-1,g.push(gt.x,gt.y,gt.z),_.push($/O),_.push(1-vt/W),G+=1}}for(let vt=0;vt<W;vt++)for(let P=0;P<O;P++){const $=x+P+rt*vt,pt=x+P+rt*(vt+1),Et=x+(P+1)+rt*(vt+1),Nt=x+(P+1)+rt*vt;m.push($,pt,Nt),m.push(pt,Et,Nt),nt+=6}d.addGroup(M,nt,C),M+=nt,x+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function SM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const yM={clone:qr,merge:Gn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Yv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new K,N_=new fe,O_=new fe;class yi extends Yv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,i){return this.getViewBounds(t,N_,O_),i.subVectors(O_,N_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Or=1;class bM extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Nr,Or,t,i);l.layers=this.layers,this.add(l);const c=new yi(Nr,Or,t,i);c.layers=this.layers,this.add(c);const h=new yi(Nr,Or,t,i);h.layers=this.layers,this.add(h);const d=new yi(Nr,Or,t,i);d.layers=this.layers,this.add(d);const m=new yi(Nr,Or,t,i);m.layers=this.layers,this.add(m);const p=new yi(Nr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class jv extends Vn{constructor(t=[],i=Is,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new jv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new Ni(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new bM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Fc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class AM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM extends Vn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=On,g=On,_,x){super(null,h,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new K,CM=new K,wM=new ge;class ss{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Xh.subVectors(s,i).cross(CM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||wM.getNormalMatrix(t),l=this.coplanarPoint(Xh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new su,DM=new fe(.5,.5),Bc=new K;class pp{constructor(t=new ss,i=new ss,s=new ss,l=new ss,c=new ss,h=new ss){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],M=c[7],b=c[8],T=c[9],y=c[10],v=c[11],L=c[12],w=c[13],U=c[14],z=c[15];if(l[0].setComponents(p-h,M-g,v-b,z-L).normalize(),l[1].setComponents(p+h,M+g,v+b,z+L).normalize(),l[2].setComponents(p+d,M+_,v+T,z+w).normalize(),l[3].setComponents(p-d,M-_,v-T,z-w).normalize(),s)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,M-x,v-y,z-U).normalize();else if(l[4].setComponents(p-m,M-x,v-y,z-U).normalize(),i===Vi)l[5].setComponents(p+m,M+x,v+y,z+U).normalize();else if(i===tu)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=DM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nu=new K,iu=new K,P_=new tn,Ko=new ru,Hc=new su,Wh=new K,z_=new K;class Kv extends En{constructor(t=new Jn,i=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)nu.fromBufferAttribute(i,l-1),iu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=nu.distanceTo(iu);t.setAttribute("lineDistance",new pn(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;P_.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(P_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let T=M,y=b-1;T<y;T+=p){const v=g.getX(T),L=g.getX(T+1),w=Gc(this,t,Ko,m,v,L,T);w&&i.push(w)}if(this.isLineLoop){const T=g.getX(b-1),y=g.getX(M),v=Gc(this,t,Ko,m,T,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let T=M,y=b-1;T<y;T+=p){const v=Gc(this,t,Ko,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Gc(this,t,Ko,m,b-1,M,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(nu.fromBufferAttribute(d,l),iu.fromBufferAttribute(d,c),i.distanceSqToSegment(nu,iu,Wh,z_)>s)return;Wh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Wh);if(!(p<t.near||p>t.far))return{distance:p,point:z_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const I_=new K,F_=new K;class UM extends Kv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)I_.fromBufferAttribute(i,l),F_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+I_.distanceTo(F_);t.setAttribute("lineDistance",new pn(s,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sl extends Vn{constructor(t,i,s=Yi,l,c,h,d=On,m=On,p,g=Aa,_=1){if(g!==Aa&&g!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class LM extends sl{constructor(t,i=Yi,s=Is,l,c,h=On,d=On,m,p=Aa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gp extends Jn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],M=[];let b=0;const T=[],y=s/2;let v=0;L(),h===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(g),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(M,2));function L(){const U=new K,z=new K;let F=0;const O=(i-t)/s;for(let W=0;W<=c;W++){const C=[],D=W/c,V=D*(i-t)+t;for(let Y=0;Y<=l;Y++){const Q=Y/l,lt=Q*m+d,rt=Math.sin(lt),B=Math.cos(lt);z.x=V*rt,z.y=-D*s+y,z.z=V*B,_.push(z.x,z.y,z.z),U.set(rt,O,B).normalize(),x.push(U.x,U.y,U.z),M.push(Q,1-D),C.push(b++)}T.push(C)}for(let W=0;W<l;W++)for(let C=0;C<c;C++){const D=T[C][W],V=T[C+1][W],Y=T[C+1][W+1],Q=T[C][W+1];(t>0||C!==0)&&(g.push(D,V,Q),F+=3),(i>0||C!==c-1)&&(g.push(V,Y,Q),F+=3)}p.addGroup(v,F,0),v+=F}function w(U){const z=b,F=new fe,O=new K;let W=0;const C=U===!0?t:i,D=U===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,y*D,0),x.push(0,D,0),M.push(.5,.5),b++;const V=b;for(let Y=0;Y<=l;Y++){const lt=Y/l*m+d,rt=Math.cos(lt),B=Math.sin(lt);O.x=C*B,O.y=y*D,O.z=C*rt,_.push(O.x,O.y,O.z),x.push(0,D,0),F.x=rt*.5+.5,F.y=B*.5*D+.5,M.push(F.x,F.y),b++}for(let Y=0;Y<l;Y++){const Q=z+Y,lt=V+Y;U===!0?g.push(lt,lt+1,Q):g.push(lt+1,lt,Q),W+=3}p.addGroup(v,W,U===!0?1:2),v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _p extends gp{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new _p(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<g;v++){const L=v*x-h;for(let w=0;w<p;w++){const U=w*_-c;b.push(U,-L,0),T.push(0,0,1),y.push(w/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const w=L+p*v,U=L+p*(v+1),z=L+1+p*(v+1),F=L+1+p*v;M.push(w,U,F),M.push(U,z,F)}this.setIndex(M),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}class vp extends Jn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new K,x=new K,M=[],b=[],T=[],y=[];for(let v=0;v<=s;v++){const L=[],w=v/s;let U=0;v===0&&h===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let z=0;z<=i;z++){const F=z/i;_.x=-t*Math.cos(l+F*c)*Math.sin(h+w*d),_.y=t*Math.cos(h+w*d),_.z=t*Math.sin(l+F*c)*Math.sin(h+w*d),b.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),y.push(F+U,1-w),L.push(p++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<i;L++){const w=g[v][L+1],U=g[v][L],z=g[v+1][L],F=g[v+1][L+1];(v!==0||h>0)&&M.push(w,U,F),(v!==s-1||m<Math.PI)&&M.push(U,z,F)}this.setIndex(M),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class NM extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class OM extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PM extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zM extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jv extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new tn,B_=new K,H_=new K;class IM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;B_.setFromMatrixPosition(t.matrixWorld),i.position.copy(B_),H_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(H_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends Yv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FM extends IM{constructor(){super(new xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G_ extends Jv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new FM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class BM extends Jv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class HM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const V_=new tn;class GM{constructor(t,i,s=0,l=1/0){this.ray=new ru(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):De("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return V_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(V_),this}intersectObject(t,i=!0,s=[]){return Zd(t,this,s,i),s.sort(k_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Zd(t[l],this,s,i);return s.sort(k_),s}}function k_(r,t){return r.distance-t.distance}function Zd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Zd(c[h],t,i,!0)}}class X_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class VM extends UM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,b=-d;x<=i;x++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const T=x===c?s:l;T.toArray(p,M),M+=3,T.toArray(p,M),M+=3,T.toArray(p,M),M+=3,T.toArray(p,M),M+=3}const g=new Jn;g.setAttribute("position",new pn(m,3)),g.setAttribute("color",new pn(p,3));const _=new mp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const W_=new K;let Vc,Yh;class jh extends En{constructor(t=new K(0,0,1),i=new K(0,0,0),s=1,l=16776960,c=s*.2,h=c*.2){super(),this.type="ArrowHelper",Vc===void 0&&(Vc=new Jn,Vc.setAttribute("position",new pn([0,0,0,0,1,0],3)),Yh=new _p(.5,1,5,1),Yh.translate(0,-.5,0)),this.position.copy(i),this.line=new Kv(Vc,new mp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ni(Yh,new dp({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,h)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{W_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(W_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class kM extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function q_(r,t,i,s){const l=XM(s);switch(i){case Iv:return r*t;case Bv:return r*t/l.components*l.byteLength;case rp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case op:return r*t*2/l.components*l.byteLength;case Fv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case lp:return r*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(r,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case yd:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Md:case Td:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XM(r){switch(r){case li:case Nv:return{byteLength:1,components:1};case nl:case Ov:case Ta:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case Yi:case ip:case Gi:return{byteLength:4,components:1};case Pv:case zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $v(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function WM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<_.length;M++){const b=_[x],T=_[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,b=_.length;M<b;M++){const T=_[M];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YM=`#ifdef USE_ALPHAHASH
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
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
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
#endif`,$M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_E=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IE=`uniform bool receiveShadow;
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
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Db=`float getShadowMask() {
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
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ob=`#ifdef USE_SKINNING
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
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
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
}`,Jb=`#if DEPTH_PACKING == 3200
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
}`,$b=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#define LAMBERT
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,h1=`#define NORMAL
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
}`,d1=`#define PHONG
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
}`,p1=`#define PHONG
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
}`,m1=`#define STANDARD
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
}`,g1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,v1=`#define TOON
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
}`,x1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,M1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:qM,alphahash_pars_fragment:YM,alphamap_fragment:jM,alphamap_pars_fragment:ZM,alphatest_fragment:KM,alphatest_pars_fragment:QM,aomap_fragment:JM,aomap_pars_fragment:$M,batching_pars_vertex:tE,batching_vertex:eE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:aE,iridescence_fragment:sE,bumpmap_pars_fragment:rE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:dE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:_E,displacementmap_pars_vertex:vE,displacementmap_vertex:xE,emissivemap_fragment:SE,emissivemap_pars_fragment:yE,colorspace_fragment:ME,colorspace_pars_fragment:EE,envmap_fragment:bE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:RE,envmap_physical_pars_fragment:FE,envmap_vertex:CE,fog_vertex:wE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:LE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:OE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:zE,lights_pars_begin:IE,lights_toon_fragment:BE,lights_toon_pars_fragment:HE,lights_phong_fragment:GE,lights_phong_pars_fragment:VE,lights_physical_fragment:kE,lights_physical_pars_fragment:XE,lights_fragment_begin:WE,lights_fragment_maps:qE,lights_fragment_end:YE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:QE,map_fragment:JE,map_pars_fragment:$E,map_particle_fragment:tb,map_particle_pars_fragment:eb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:ab,morphcolor_vertex:sb,morphnormal_vertex:rb,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:fb,normal_pars_vertex:hb,normal_vertex:db,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:Sb,premultiplied_alpha_fragment:yb,project_vertex:Mb,dithering_fragment:Eb,dithering_pars_fragment:bb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Rb,shadowmap_pars_vertex:Cb,shadowmap_vertex:wb,shadowmask_pars_fragment:Db,skinbase_vertex:Ub,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Ob,specularmap_fragment:Pb,specularmap_pars_fragment:zb,tonemapping_fragment:Ib,tonemapping_pars_fragment:Fb,transmission_fragment:Bb,transmission_pars_fragment:Hb,uv_pars_fragment:Gb,uv_pars_vertex:Vb,uv_vertex:kb,worldpos_vertex:Xb,background_vert:Wb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:jb,cube_vert:Zb,cube_frag:Kb,depth_vert:Qb,depth_frag:Jb,distance_vert:$b,distance_frag:t1,equirect_vert:e1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:a1,meshbasic_vert:s1,meshbasic_frag:r1,meshlambert_vert:o1,meshlambert_frag:l1,meshmatcap_vert:c1,meshmatcap_frag:u1,meshnormal_vert:f1,meshnormal_frag:h1,meshphong_vert:d1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:g1,meshtoon_vert:_1,meshtoon_frag:v1,points_vert:x1,points_frag:S1,shadow_vert:y1,shadow_frag:M1,sprite_vert:E1,sprite_frag:b1},zt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Gn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Gn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Gn([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Gn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Gn([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Gn([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Gn([zt.common,zt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Gn([zt.lights,zt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const kc={r:0,b:0,g:0},Us=new ji,T1=new tn;function A1(r,t,i,s,l,c,h){const d=new Re(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function b(w){let U=w.isScene===!0?w.background:null;return U&&U.isTexture&&(U=(w.backgroundBlurriness>0?i:t).get(U)),U}function T(w){let U=!1;const z=b(w);z===null?v(d,m):z&&z.isColor&&(v(z,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===au)?(g===void 0&&(g=new Ni(new ll(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:qr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(U.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Us)),g.material.toneMapped=Ue.getTransfer(z.colorSpace)!==Ve,(_!==z||x!==z.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,M=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ni(new ou(2,2),new Zi({name:"BackgroundMaterial",uniforms:qr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(z.colorSpace)!==Ve,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,M=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function v(w,U){w.getRGB(kc,qv(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,U,h)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,U=1){d.set(w),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,v(d,m)},render:T,addToRenderList:y,dispose:L}}function R1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(D,V,Y,Q,lt){let rt=!1;const B=_(Q,Y,V);c!==B&&(c=B,p(c.object)),rt=M(D,Q,Y,lt),rt&&b(D,Q,Y,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,U(D,V,Y,Q),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,V,Y){const Q=Y.wireframe===!0;let lt=s[D.id];lt===void 0&&(lt={},s[D.id]=lt);let rt=lt[V.id];rt===void 0&&(rt={},lt[V.id]=rt);let B=rt[Q];return B===void 0&&(B=x(m()),rt[Q]=B),B}function x(D){const V=[],Y=[],Q=[];for(let lt=0;lt<i;lt++)V[lt]=0,Y[lt]=0,Q[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:Q,object:D,attributes:{},index:null}}function M(D,V,Y,Q){const lt=c.attributes,rt=V.attributes;let B=0;const G=Y.getAttributes();for(const nt in G)if(G[nt].location>=0){const vt=lt[nt];let P=rt[nt];if(P===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),vt===void 0||vt.attribute!==P||P&&vt.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==Q}function b(D,V,Y,Q){const lt={},rt=V.attributes;let B=0;const G=Y.getAttributes();for(const nt in G)if(G[nt].location>=0){let vt=rt[nt];vt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));const P={};P.attribute=vt,vt&&vt.data&&(P.data=vt.data),lt[nt]=P,B++}c.attributes=lt,c.attributesNum=B,c.index=Q}function T(){const D=c.newAttributes;for(let V=0,Y=D.length;V<Y;V++)D[V]=0}function y(D){v(D,0)}function v(D,V){const Y=c.newAttributes,Q=c.enabledAttributes,lt=c.attributeDivisors;Y[D]=1,Q[D]===0&&(r.enableVertexAttribArray(D),Q[D]=1),lt[D]!==V&&(r.vertexAttribDivisor(D,V),lt[D]=V)}function L(){const D=c.newAttributes,V=c.enabledAttributes;for(let Y=0,Q=V.length;Y<Q;Y++)V[Y]!==D[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function w(D,V,Y,Q,lt,rt,B){B===!0?r.vertexAttribIPointer(D,V,Y,lt,rt):r.vertexAttribPointer(D,V,Y,Q,lt,rt)}function U(D,V,Y,Q){T();const lt=Q.attributes,rt=Y.getAttributes(),B=V.defaultAttributeValues;for(const G in rt){const nt=rt[G];if(nt.location>=0){let gt=lt[G];if(gt===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),gt!==void 0){const vt=gt.normalized,P=gt.itemSize,$=t.get(gt);if($===void 0)continue;const pt=$.buffer,Et=$.type,Nt=$.bytesPerElement,it=Et===r.INT||Et===r.UNSIGNED_INT||gt.gpuType===ip;if(gt.isInterleavedBufferAttribute){const ht=gt.data,Dt=ht.stride,Wt=gt.offset;if(ht.isInstancedInterleavedBuffer){for(let Gt=0;Gt<nt.locationSize;Gt++)v(nt.location+Gt,ht.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Gt=0;Gt<nt.locationSize;Gt++)y(nt.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Gt=0;Gt<nt.locationSize;Gt++)w(nt.location+Gt,P/nt.locationSize,Et,vt,Dt*Nt,(Wt+P/nt.locationSize*Gt)*Nt,it)}else{if(gt.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)v(nt.location+ht,gt.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ht=0;ht<nt.locationSize;ht++)y(nt.location+ht);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ht=0;ht<nt.locationSize;ht++)w(nt.location+ht,P/nt.locationSize,Et,vt,P*Nt,P/nt.locationSize*ht*Nt,it)}}else if(B!==void 0){const vt=B[G];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv(nt.location,vt);break;case 3:r.vertexAttrib3fv(nt.location,vt);break;case 4:r.vertexAttrib4fv(nt.location,vt);break;default:r.vertexAttrib1fv(nt.location,vt)}}}}L()}function z(){W();for(const D in s){const V=s[D];for(const Y in V){const Q=V[Y];for(const lt in Q)g(Q[lt].object),delete Q[lt];delete V[Y]}delete s[D]}}function F(D){if(s[D.id]===void 0)return;const V=s[D.id];for(const Y in V){const Q=V[Y];for(const lt in Q)g(Q[lt].object),delete Q[lt];delete V[Y]}delete s[D.id]}function O(D){for(const V in s){const Y=s[V];if(Y[D.id]===void 0)continue;const Q=Y[D.id];for(const lt in Q)g(Q[lt].object),delete Q[lt];delete Y[D.id]}}function W(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:L}}function C1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,s,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function w1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const W=O===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!W)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:U,maxSamples:z,samples:F}}function D1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ss,d=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const b=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const L=c?0:s,w=L*4;let U=v.clippingState||null;m.value=U,U=g(b,x,w,M);for(let z=0;z!==w;++z)U[z]=i[z];v.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,b){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let w=0,U=M;w!==T;++w,U+=4)h.copy(_[w]).applyMatrix4(L,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function U1(r){let t=new WeakMap;function i(h,d){return d===hd?h.mapping=Is:d===dd&&(h.mapping=kr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===hd||d===dd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Zv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const os=4,Y_=[.125,.215,.35,.446,.526,.582],Os=20,L1=256,Qo=new xp,j_=new Re;let Zh=null,Kh=0,Qh=0,Jh=!1;const N1=new K;class Z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=N1}=c;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ta,format:Li,colorSpace:Wr,depthBuffer:!1},l=K_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O1(c)),this._blurMaterial=z1(c,t,i),this._ggxMaterial=P1(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new Jn,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(j_),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new ll,new dp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,v=!0):(y.color.copy(j_),v=!0);for(let w=0;w<6;w++){const U=w%3;U===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[w],c.y,c.z)):U===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[w]));const z=this._cubeSize;Pr(l,U*z,w>2?z:0,z,z),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=M,_.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,M=_*x,{_lodMax:b}=this,T=this._sizeLods[s],y=3*T*(s>b-os?s-b+os:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Pr(c,y,v,3*T,2*T),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Pr(t,y,v,3*T,2*T),l.setRenderTarget(t),l.render(d,Qo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Os-1),T=c/b,y=isFinite(c)?1+Math.floor(g*T):Os;y>Os&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const v=[];let L=0;for(let O=0;O<Os;++O){const W=O/T,C=Math.exp(-W*W/2);v.push(C),O===0?L+=C:O<y&&(L+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:w}=this;x.dTheta.value=b,x.mipInt.value=w-s;const U=this._sizeLods[l],z=3*U*(l>w-os?l-w+os:0),F=4*(this._cubeSize-U);Pr(i,z,F,3*U,2*U),m.setRenderTarget(i),m.render(_,Qo)}}function O1(r){const t=[],i=[],s=[];let l=r;const c=r-os+1+Y_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-os?m=Y_[h-r+os-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,T=3,y=2,v=1,L=new Float32Array(T*b*M),w=new Float32Array(y*b*M),U=new Float32Array(v*b*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,W=F>2?0:-1,C=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];L.set(C,T*b*F),w.set(x,y*b*F);const D=[F,F,F,F,F,F];U.set(D,v*b*F)}const z=new Jn;z.setAttribute("position",new qi(L,T)),z.setAttribute("uv",new qi(w,y)),z.setAttribute("faceIndex",new qi(U,v)),s.push(new Ni(z,null)),l>os&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function K_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function P1(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function z1(r,t,i){const s=new Float32Array(Os),l=new K(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Q_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function J_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function I1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===hd||m===dd,g=m===Is||m===kr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function F1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("WebGLRenderer: "+s+" extension not supported."),l}}}function B1(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,b=_.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let w=0,U=L.length;w<U;w+=3){const z=L[w+0],F=L[w+1],O=L[w+2];x.push(z,F,F,O,O,z)}}else if(b!==void 0){const L=b.array;T=b.version;for(let w=0,U=L.length/3-1;w<U;w+=3){const z=w+0,F=w+1,O=w+2;x.push(z,F,F,O,O,z)}}else return;const y=new(Gv(x)?Wv:Xv)(x,1);y.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function H1(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,x*h,b),i.update(M,s,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,s,1)}function _(x,M,b,T){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/h,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,T,0,b);let v=0;for(let L=0;L<b;L++)v+=M[L]*T[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function G1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function V1(r,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let D=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),y===!0&&(U=3);let z=d.attributes.position.count*U,F=1;z>t.maxTextureSize&&(F=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const O=new Float32Array(z*F*4*_),W=new Vv(O,z,F,_);W.type=Gi,W.needsUpdate=!0;const C=U*4;for(let V=0;V<_;V++){const Y=v[V],Q=L[V],lt=w[V],rt=z*F*4*V;for(let B=0;B<Y.count;B++){const G=B*C;b===!0&&(l.fromBufferAttribute(Y,B),O[rt+G+0]=l.x,O[rt+G+1]=l.y,O[rt+G+2]=l.z,O[rt+G+3]=0),T===!0&&(l.fromBufferAttribute(Q,B),O[rt+G+4]=l.x,O[rt+G+5]=l.y,O[rt+G+6]=l.z,O[rt+G+7]=0),y===!0&&(l.fromBufferAttribute(lt,B),O[rt+G+8]=l.x,O[rt+G+9]=l.y,O[rt+G+10]=l.z,O[rt+G+11]=lt.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new fe(z,F)},s.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function k1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const X1={[Tv]:"LINEAR_TONE_MAPPING",[Av]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[Cv]:"ACES_FILMIC_TONE_MAPPING",[Dv]:"AGX_TONE_MAPPING",[Uv]:"NEUTRAL_TONE_MAPPING",[wv]:"CUSTOM_TONE_MAPPING"};function W1(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),d=new Jn;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const m=new NM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new xp(-1,1,1,-1,0,1);let _=null,x=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(L,w){c.setSize(L,w),h.setSize(L,w);for(let U=0;U<y.length;U++){const z=y[U];z.setSize&&z.setSize(L,w)}},this.setEffects=function(L){y=L,v=y.length>0&&y[0].isRenderPass===!0;const w=c.width,U=c.height;for(let z=0;z<y.length;z++){const F=y[z];F.setSize&&F.setSize(w,U)}},this.begin=function(L,w){if(M||L.toneMapping===Xi&&y.length===0)return!1;if(T=w,w!==null){const U=w.width,z=w.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return v===!1&&L.setRenderTarget(c),b=L.toneMapping,L.toneMapping=Xi,!0},this.hasRenderPass=function(){return v},this.end=function(L,w){L.toneMapping=b,M=!0;let U=c,z=h;for(let F=0;F<y.length;F++){const O=y[F];if(O.enabled!==!1&&(O.render(L,z,U,w),O.needsSwap!==!1)){const W=U;U=z,z=W}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,m.defines={},Ue.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const F=X1[x];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,L.setRenderTarget(T),L.render(p,g),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const tx=new Vn,Kd=new sl(1,1),ex=new Vv,nx=new lM,ix=new jv,$_=[],tv=[],ev=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=$_[l];if(c===void 0&&(c=new Float32Array(l),$_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function cu(r,t){let i=tv[t];i===void 0&&(i=new Int32Array(t),tv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function q1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function j1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function Z1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function K1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;iv.set(s),r.uniformMatrix2fv(this.addr,!1,iv),xn(i,s)}}function Q1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;nv.set(s),r.uniformMatrix3fv(this.addr,!1,nv),xn(i,s)}}function J1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;ev.set(s),r.uniformMatrix4fv(this.addr,!1,ev),xn(i,s)}}function $1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function iT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function oT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Kd.compareFunction=i.isReversedDepthBuffer()?up:cp,c=Kd):c=tx,i.setTexture2D(t||c,l)}function lT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||nx,l)}function cT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ix,l)}function uT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ex,l)}function fT(r){switch(r){case 5126:return q1;case 35664:return Y1;case 35665:return j1;case 35666:return Z1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return $1;case 35667:case 35671:return tT;case 35668:case 35672:return eT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return sT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}function hT(r,t){r.uniform1fv(this.addr,t)}function dT(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function pT(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function mT(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function gT(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function _T(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function vT(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function xT(r,t){r.uniform1iv(this.addr,t)}function ST(r,t){r.uniform2iv(this.addr,t)}function yT(r,t){r.uniform3iv(this.addr,t)}function MT(r,t){r.uniform4iv(this.addr,t)}function ET(r,t){r.uniform1uiv(this.addr,t)}function bT(r,t){r.uniform2uiv(this.addr,t)}function TT(r,t){r.uniform3uiv(this.addr,t)}function AT(r,t){r.uniform4uiv(this.addr,t)}function RT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Kd:h=tx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function CT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||nx,c[h])}function wT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ix,c[h])}function DT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||ex,c[h])}function UT(r){switch(r){case 5126:return hT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return yT;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return bT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return DT}}class LT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=fT(i.type)}}class NT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=UT(i.type)}}class OT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function av(r,t){r.seq.push(t),r.map[t.id]=t}function PT(r,t,i){const s=r.name,l=s.length;for($h.lastIndex=0;;){const c=$h.exec(s),h=$h.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){av(i,p===void 0?new LT(d,r,t):new NT(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new OT(d),av(i,_)),i=_}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);PT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function sv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const zT=37297;let IT=0;function FT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const rv=new ge;function BT(r){Ue._getMatrix(rv,Ue.workingColorSpace,r);const t=`mat3( ${rv.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ov(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+FT(r.getShaderSource(t),d)}else return c}function HT(r,t){const i=BT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const GT={[Tv]:"Linear",[Av]:"Reinhard",[Rv]:"Cineon",[Cv]:"ACESFilmic",[Dv]:"AgX",[Uv]:"Neutral",[wv]:"Custom"};function VT(r,t){const i=GT[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new K;function kT(){Ue.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function WT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function qT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function el(r){return r!==""}function lv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(r){return r.replace(YT,ZT)}const jT=new Map;function ZT(r,t){let i=ve[t];if(i===void 0){const s=jT.get(t);if(s!==void 0)i=ve[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Qd(i)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(KT,QT)}function QT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const JT={[qc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function $T(r){return JT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tA={[Is]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function eA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":tA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nA={[kr]:"ENVMAP_MODE_REFRACTION"};function iA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aA={[bv]:"ENVMAP_BLENDING_MULTIPLY",[Vy]:"ENVMAP_BLENDING_MIX",[ky]:"ENVMAP_BLENDING_ADD"};function sA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":aA[r.combine]||"ENVMAP_BLENDING_NONE"}function rA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=$T(i),p=eA(i),g=iA(i),_=sA(i),x=rA(i),M=XT(i),b=WT(c),T=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),v.length>0&&(v+=`
`)):(y=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),v=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ve.tonemapping_pars_fragment:"",i.toneMapping!==Xi?VT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,HT("linearToOutputTexel",i.outputColorSpace),kT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),h=Qd(h),h=lv(h,i),h=cv(h,i),d=Qd(d),d=lv(d,i),d=cv(d,i),h=uv(h),d=uv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=L+y+h,U=L+v+d,z=sv(l,l.VERTEX_SHADER,w),F=sv(l,l.FRAGMENT_SHADER,U);l.attachShader(T,z),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(V){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",Q=l.getShaderInfoLog(z)||"",lt=l.getShaderInfoLog(F)||"",rt=Y.trim(),B=Q.trim(),G=lt.trim();let nt=!0,gt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,z,F);else{const vt=ov(l,z,"vertex"),P=ov(l,F,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+rt+`
`+vt+`
`+P)}else rt!==""?ae("WebGLProgram: Program Info Log:",rt):(B===""||G==="")&&(gt=!1);gt&&(V.diagnostics={runnable:nt,programLog:rt,vertexShader:{log:B,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(z),l.deleteShader(F),W=new Jc(l,T),C=qT(l,T)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,zT)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=F,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new uA(t),i.set(t,s)),s}}class uA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function fA(r,t,i,s,l,c,h){const d=new hp,m=new cA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,V,Y,Q){const lt=Y.fog,rt=Q.geometry,B=C.isMeshStandardMaterial?Y.environment:null,G=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),nt=G&&G.mapping===au?G.image.height:null,gt=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ae("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const vt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,P=vt!==void 0?vt.length:0;let $=0;rt.morphAttributes.position!==void 0&&($=1),rt.morphAttributes.normal!==void 0&&($=2),rt.morphAttributes.color!==void 0&&($=3);let pt,Et,Nt,it;if(gt){const we=Hi[gt];pt=we.vertexShader,Et=we.fragmentShader}else pt=C.vertexShader,Et=C.fragmentShader,m.update(C),Nt=m.getVertexShaderID(C),it=m.getFragmentShaderID(C);const ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Wt=Q.isInstancedMesh===!0,Gt=Q.isBatchedMesh===!0,xe=!!C.map,Qe=!!C.matcap,Se=!!G,_e=!!C.aoMap,Ce=!!C.lightMap,se=!!C.bumpMap,Tt=!!C.normalMap,I=!!C.displacementMap,re=!!C.emissiveMap,$t=!!C.metalnessMap,ce=!!C.roughnessMap,wt=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,q=C.iridescence>0,ft=C.sheen>0,mt=C.transmission>0,ut=wt&&!!C.anisotropyMap,kt=N&&!!C.clearcoatMap,Ct=N&&!!C.clearcoatNormalMap,Vt=N&&!!C.clearcoatRoughnessMap,te=q&&!!C.iridescenceMap,yt=q&&!!C.iridescenceThicknessMap,bt=ft&&!!C.sheenColorMap,Bt=ft&&!!C.sheenRoughnessMap,It=!!C.specularMap,Ut=!!C.specularColorMap,de=!!C.specularIntensityMap,X=mt&&!!C.transmissionMap,Ot=mt&&!!C.thicknessMap,At=!!C.gradientMap,Ft=!!C.alphaMap,Mt=C.alphaTest>0,St=!!C.alphaHash,Rt=!!C.extensions;let oe=Xi;C.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Fe={shaderID:gt,shaderType:C.type,shaderName:C.name,vertexShader:pt,fragmentShader:Et,defines:C.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Gt,batchingColor:Gt&&Q._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&Q.instanceColor!==null,instancingMorph:Wt&&Q.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Wr,alphaToCoverage:!!C.alphaToCoverage,map:xe,matcap:Qe,envMap:Se,envMapMode:Se&&G.mapping,envMapCubeUVHeight:nt,aoMap:_e,lightMap:Ce,bumpMap:se,normalMap:Tt,displacementMap:I,emissiveMap:re,normalMapObjectSpace:Tt&&C.normalMapType===qy,normalMapTangentSpace:Tt&&C.normalMapType===Hv,metalnessMap:$t,roughnessMap:ce,anisotropy:wt,anisotropyMap:ut,clearcoat:N,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Vt,dispersion:E,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:bt,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:Ut,specularIntensityMap:de,transmission:mt,transmissionMap:X,thicknessMap:Ot,gradientMap:At,opaque:C.transparent===!1&&C.blending===Hr&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:St,combine:C.combine,mapUv:xe&&T(C.map.channel),aoMapUv:_e&&T(C.aoMap.channel),lightMapUv:Ce&&T(C.lightMap.channel),bumpMapUv:se&&T(C.bumpMap.channel),normalMapUv:Tt&&T(C.normalMap.channel),displacementMapUv:I&&T(C.displacementMap.channel),emissiveMapUv:re&&T(C.emissiveMap.channel),metalnessMapUv:$t&&T(C.metalnessMap.channel),roughnessMapUv:ce&&T(C.roughnessMap.channel),anisotropyMapUv:ut&&T(C.anisotropyMap.channel),clearcoatMapUv:kt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(C.sheenRoughnessMap.channel),specularMapUv:It&&T(C.specularMap.channel),specularColorMapUv:Ut&&T(C.specularColorMap.channel),specularIntensityMapUv:de&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Ot&&T(C.thicknessMap.channel),alphaMapUv:Ft&&T(C.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Tt||wt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!rt.attributes.uv&&(xe||Ft),fog:!!lt,useFog:C.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Dt,skinning:Q.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:$,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:xe&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:re&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Sa,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&C.extensions.multiDraw===!0||Gt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)D.push(V),D.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(L(D,C),w(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function L(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function w(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const D=b[C.type];let V;if(D){const Y=Hi[D];V=yM.clone(Y.uniforms)}else V=C.uniforms;return V}function z(C,D){let V=_.get(D);return V!==void 0?++V.usedTimes:(V=new oA(r,D,C,c),g.push(V),_.set(D,V)),V}function F(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function O(C){m.remove(C)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:U,acquireProgram:z,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:W}}function hA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function dA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function dv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,M,b,T,y){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:b,renderOrder:_.renderOrder,z:T,group:y},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=T,v.group=y),t++,v}function d(_,x,M,b,T,y){const v=h(_,x,M,b,T,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,b,T,y){const v=h(_,x,M,b,T,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||dA),s.length>1&&s.sort(x||hv),l.length>1&&l.sort(x||hv)}function g(){for(let _=t,x=r.length;_<x;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function pA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new dv,r.set(s,[h])):l>=c.length?(h=new dv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function mA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Re};break;case"SpotLight":i={position:new K,direction:new K,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function gA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let _A=0;function vA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function xA(r){const t=new mA,i=gA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new tn,h=new tn;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,L=0,w=0,U=0,z=0,F=0,O=0;p.sort(vA);for(let C=0,D=p.length;C<D;C++){const V=p[C],Y=V.color,Q=V.intensity,lt=V.distance;let rt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Xr?rt=V.shadow.map.texture:rt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*Q,_+=Y.g*Q,x+=Y.b*Q;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],Q);O++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,nt=i.get(V);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,s.directionalShadow[M]=nt,s.directionalShadowMap[M]=rt,s.directionalShadowMatrix[M]=V.shadow.matrix,L++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Y).multiplyScalar(Q),B.distance=lt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[T]=B;const G=V.shadow;if(V.map&&(s.spotLightMap[z]=V.map,z++,G.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[T]=G.matrix,V.castShadow){const nt=i.get(V);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,s.spotShadow[T]=nt,s.spotShadowMap[T]=rt,U++}T++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(Y).multiplyScalar(Q),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=B,y++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const G=V.shadow,nt=i.get(V);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,nt.shadowCameraNear=G.camera.near,nt.shadowCameraFar=G.camera.far,s.pointShadow[b]=nt,s.pointShadowMap[b]=rt,s.pointShadowMatrix[b]=V.shadow.matrix,w++}s.point[b]=B,b++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(Q),B.groundColor.copy(V.groundColor).multiplyScalar(Q),s.hemi[v]=B,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==M||W.pointLength!==b||W.spotLength!==T||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==L||W.numPointShadows!==w||W.numSpotShadows!==U||W.numSpotMaps!==z||W.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=U+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=O,W.directionalLength=M,W.pointLength=b,W.spotLength=T,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=L,W.numPointShadows=w,W.numSpotShadows=U,W.numSpotMaps=z,W.numLightProbes=O,s.version=_A++)}function m(p,g){let _=0,x=0,M=0,b=0,T=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const w=p[v];if(w.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(w.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(w.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(y),h.identity(),c.copy(w.matrixWorld),c.premultiply(y),h.extractRotation(c),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(w.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(y),x++}else if(w.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:s}}function pv(r){const t=new xA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function SA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new pv(r),t.set(l,[d])):c>=h.length?(d=new pv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
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
}`,EA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],bA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],mv=new tn,Jo=new K,td=new K;function TA(r,t,i){let s=new pp;const l=new fe,c=new fe,h=new an,d=new PM,m=new zM,p={},g=i.maxTextureSize,_={[ls]:Qn,[Qn]:ls,[Sa]:Sa},x=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:yA,fragmentShader:MA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Jn;b.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let v=this.type;this.render=function(F,O,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===Ey&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=qc);const C=r.getRenderTarget(),D=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ma),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=v!==this.type;Q&&O.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(rt=>rt.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,rt=F.length;lt<rt;lt++){const B=F[lt],G=B.shadow;if(G===void 0){ae("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const nt=G.getFrameExtents();if(l.multiply(nt),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/nt.x),l.x=c.x*nt.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/nt.y),l.y=c.y*nt.y,G.mapSize.y=c.y)),G.map===null||Q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tl){if(B.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wi(l.x,l.y,{format:Xr,type:Ta,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new sl(l.x,l.y,Gi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Aa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{B.isPointLight?(G.map=new Zv(l.x),G.map.depthTexture=new LM(l.x,Yi)):(G.map=new Wi(l.x,l.y),G.map.depthTexture=new sl(l.x,l.y,Yi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Aa;const vt=r.state.buffers.depth.getReversed();this.type===qc?(G.map.depthTexture.compareFunction=vt?up:cp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const gt=G.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<gt;vt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(G.map),r.clear());const P=G.getViewport(vt);h.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),Y.viewport(h)}if(B.isPointLight){const P=G.camera,$=G.matrix,pt=B.distance||P.far;pt!==P.far&&(P.far=pt,P.updateProjectionMatrix()),Jo.setFromMatrixPosition(B.matrixWorld),P.position.copy(Jo),td.copy(P.position),td.add(EA[vt]),P.up.copy(bA[vt]),P.lookAt(td),P.updateMatrixWorld(),$.makeTranslation(-Jo.x,-Jo.y,-Jo.z),mv.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G._frustum.setFromProjectionMatrix(mv,P.coordinateSystem,P.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),U(O,W,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===tl&&L(G,W),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(C,D,V)};function L(F,O){const W=t.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Wi(l.x,l.y,{format:Xr,type:Ta})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(O,null,W,x,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(O,null,W,M,T,null)}function w(F,O,W,C){let D=null;const V=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)D=V;else if(D=W.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=D.uuid,Q=O.uuid;let lt=p[Y];lt===void 0&&(lt={},p[Y]=lt);let rt=lt[Q];rt===void 0&&(rt=D.clone(),lt[Q]=rt,O.addEventListener("dispose",z)),D=rt}if(D.visible=O.visible,D.wireframe=O.wireframe,C===tl?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:_[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,W.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Y=r.properties.get(D);Y.light=W}return D}function U(F,O,W,C,D){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===tl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const Q=t.update(F),lt=F.material;if(Array.isArray(lt)){const rt=Q.groups;for(let B=0,G=rt.length;B<G;B++){const nt=rt[B],gt=lt[nt.materialIndex];if(gt&&gt.visible){const vt=w(F,gt,C,D);F.onBeforeShadow(r,F,O,W,Q,vt,nt),r.renderBufferDirect(W,null,Q,vt,F,nt),F.onAfterShadow(r,F,O,W,Q,vt,nt)}}}else if(lt.visible){const rt=w(F,lt,C,D);F.onBeforeShadow(r,F,O,W,Q,rt,null),r.renderBufferDirect(W,null,Q,rt,F,null),F.onAfterShadow(r,F,O,W,Q,rt,null)}}const Y=F.children;for(let Q=0,lt=Y.length;Q<lt;Q++)U(Y[Q],O,W,C,D)}function z(F){F.target.removeEventListener("dispose",z);for(const W in p){const C=p[W],D=F.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const AA={[sd]:rd,[od]:ud,[ld]:fd,[Vr]:cd,[rd]:sd,[ud]:od,[fd]:ld,[cd]:Vr};function RA(r,t){function i(){let X=!1;const Ot=new an;let At=null;const Ft=new an(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!X&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,St,Rt,oe,Fe){Fe===!0&&(Mt*=oe,St*=oe,Rt*=oe),Ot.set(Mt,St,Rt,oe),Ft.equals(Ot)===!1&&(r.clearColor(Mt,St,Rt,oe),Ft.copy(Ot))},reset:function(){X=!1,At=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,Ot=!1,At=null,Ft=null,Mt=null;return{setReversed:function(St){if(Ot!==St){const Rt=t.get("EXT_clip_control");St?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Ot=St;const oe=Mt;Mt=null,this.setClear(oe)}},getReversed:function(){return Ot},setTest:function(St){St?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(St){At!==St&&!X&&(r.depthMask(St),At=St)},setFunc:function(St){if(Ot&&(St=AA[St]),Ft!==St){switch(St){case sd:r.depthFunc(r.NEVER);break;case rd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case ld:r.depthFunc(r.EQUAL);break;case cd:r.depthFunc(r.GEQUAL);break;case ud:r.depthFunc(r.GREATER);break;case fd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=St}},setLocked:function(St){X=St},setClear:function(St){Mt!==St&&(Ot&&(St=1-St),r.clearDepth(St),Mt=St)},reset:function(){X=!1,At=null,Ft=null,Mt=null,Ot=!1}}}function l(){let X=!1,Ot=null,At=null,Ft=null,Mt=null,St=null,Rt=null,oe=null,Fe=null;return{setTest:function(we){X||(we?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(we){Ot!==we&&!X&&(r.stencilMask(we),Ot=we)},setFunc:function(we,Pn,Mi){(At!==we||Ft!==Pn||Mt!==Mi)&&(r.stencilFunc(we,Pn,Mi),At=we,Ft=Pn,Mt=Mi)},setOp:function(we,Pn,Mi){(St!==we||Rt!==Pn||oe!==Mi)&&(r.stencilOp(we,Pn,Mi),St=we,Rt=Pn,oe=Mi)},setLocked:function(we){X=we},setClear:function(we){Fe!==we&&(r.clearStencil(we),Fe=we)},reset:function(){X=!1,Ot=null,At=null,Ft=null,Mt=null,St=null,Rt=null,oe=null,Fe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,L=null,w=null,U=null,z=null,F=null,O=new Re(0,0,0),W=0,C=!1,D=null,V=null,Y=null,Q=null,lt=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(nt)[1]),B=G>=1):nt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),B=G>=2);let gt=null,vt={};const P=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),pt=new an().fromArray(P),Et=new an().fromArray($);function Nt(X,Ot,At,Ft){const Mt=new Uint8Array(4),St=r.createTexture();r.bindTexture(X,St),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<At;Rt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Ot+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return St}const it={};it[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),h.setFunc(Vr),se(!1),Tt(u_),ht(r.CULL_FACE),_e(Ma);function ht(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Dt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Wt(X,Ot){return _[X]!==Ot?(r.bindFramebuffer(X,Ot),_[X]=Ot,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Gt(X,Ot){let At=M,Ft=!1;if(X){At=x.get(Ot),At===void 0&&(At=[],x.set(Ot,At));const Mt=X.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Rt=Mt.length;St<Rt;St++)At[St]=r.COLOR_ATTACHMENT0+St;At.length=Mt.length,Ft=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(At)}function xe(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Qe={[Ns]:r.FUNC_ADD,[Ty]:r.FUNC_SUBTRACT,[Ay]:r.FUNC_REVERSE_SUBTRACT};Qe[Ry]=r.MIN,Qe[Cy]=r.MAX;const Se={[wy]:r.ZERO,[Dy]:r.ONE,[Uy]:r.SRC_COLOR,[id]:r.SRC_ALPHA,[Iy]:r.SRC_ALPHA_SATURATE,[Py]:r.DST_COLOR,[Ny]:r.DST_ALPHA,[Ly]:r.ONE_MINUS_SRC_COLOR,[ad]:r.ONE_MINUS_SRC_ALPHA,[zy]:r.ONE_MINUS_DST_COLOR,[Oy]:r.ONE_MINUS_DST_ALPHA,[Fy]:r.CONSTANT_COLOR,[By]:r.ONE_MINUS_CONSTANT_COLOR,[Hy]:r.CONSTANT_ALPHA,[Gy]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(X,Ot,At,Ft,Mt,St,Rt,oe,Fe,we){if(X===Ma){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),X!==by){if(X!==y||we!==C){if((v!==Ns||U!==Ns)&&(r.blendEquation(r.FUNC_ADD),v=Ns,U=Ns),we)switch(X){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f_:r.blendFunc(r.ONE,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case d_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",X);break}else switch(X){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case h_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",X);break}L=null,w=null,z=null,F=null,O.set(0,0,0),W=0,y=X,C=we}return}Mt=Mt||Ot,St=St||At,Rt=Rt||Ft,(Ot!==v||Mt!==U)&&(r.blendEquationSeparate(Qe[Ot],Qe[Mt]),v=Ot,U=Mt),(At!==L||Ft!==w||St!==z||Rt!==F)&&(r.blendFuncSeparate(Se[At],Se[Ft],Se[St],Se[Rt]),L=At,w=Ft,z=St,F=Rt),(oe.equals(O)===!1||Fe!==W)&&(r.blendColor(oe.r,oe.g,oe.b,Fe),O.copy(oe),W=Fe),y=X,C=!1}function Ce(X,Ot){X.side===Sa?Dt(r.CULL_FACE):ht(r.CULL_FACE);let At=X.side===Qn;Ot&&(At=!At),se(At),X.blending===Hr&&X.transparent===!1?_e(Ma):_e(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),re(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){D!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),D=X)}function Tt(X){X!==yy?(ht(r.CULL_FACE),X!==V&&(X===u_?r.cullFace(r.BACK):X===My?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),V=X}function I(X){X!==Y&&(B&&r.lineWidth(X),Y=X)}function re(X,Ot,At){X?(ht(r.POLYGON_OFFSET_FILL),(Q!==Ot||lt!==At)&&(r.polygonOffset(Ot,At),Q=Ot,lt=At)):Dt(r.POLYGON_OFFSET_FILL)}function $t(X){X?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ce(X){X===void 0&&(X=r.TEXTURE0+rt-1),gt!==X&&(r.activeTexture(X),gt=X)}function wt(X,Ot,At){At===void 0&&(gt===null?At=r.TEXTURE0+rt-1:At=gt);let Ft=vt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},vt[At]=Ft),(Ft.type!==X||Ft.texture!==Ot)&&(gt!==At&&(r.activeTexture(At),gt=At),r.bindTexture(X,Ot||it[X]),Ft.type=X,Ft.texture=Ot)}function N(){const X=vt[gt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function ft(){try{r.texSubImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function mt(){try{r.texSubImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function Ct(){try{r.texStorage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Vt(){try{r.texStorage3D(...arguments)}catch(X){De("WebGLState:",X)}}function te(){try{r.texImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function yt(){try{r.texImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function bt(X){pt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),pt.copy(X))}function Bt(X){Et.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Et.copy(X))}function It(X,Ot){let At=p.get(Ot);At===void 0&&(At=new WeakMap,p.set(Ot,At));let Ft=At.get(X);Ft===void 0&&(Ft=r.getUniformBlockIndex(Ot,X.name),At.set(X,Ft))}function Ut(X,Ot){const Ft=p.get(Ot).get(X);m.get(Ot)!==Ft&&(r.uniformBlockBinding(Ot,Ft,X.__bindingPointIndex),m.set(Ot,Ft))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},gt=null,vt={},_={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,L=null,w=null,U=null,z=null,F=null,O=new Re(0,0,0),W=0,C=!1,D=null,V=null,Y=null,Q=null,lt=null,pt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:Dt,bindFramebuffer:Wt,drawBuffers:Gt,useProgram:xe,setBlending:_e,setMaterial:Ce,setFlipSided:se,setCullFace:Tt,setLineWidth:I,setPolygonOffset:re,setScissorTest:$t,activeTexture:ce,bindTexture:wt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:te,texImage3D:yt,updateUBOMapping:It,uniformBlockBinding:Ut,texStorage2D:Ct,texStorage3D:Vt,texSubImage2D:ft,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:kt,scissor:bt,viewport:Bt,reset:de}}function CA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):eu("canvas")}function T(N,E,q){let ft=1;const mt=wt(N);if((mt.width>q||mt.height>q)&&(ft=q/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ft*mt.width),kt=Math.floor(ft*mt.height);_===void 0&&(_=b(ut,kt));const Ct=E?b(ut,kt):_;return Ct.width=ut,Ct.height=kt,Ct.getContext("2d").drawImage(N,0,0,ut,kt),ae("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+kt+")."),Ct}else return"data"in N&&ae("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(N,E,q,ft,mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=E;if(E===r.RED&&(q===r.FLOAT&&(ut=r.R32F),q===r.HALF_FLOAT&&(ut=r.R16F),q===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.R8UI),q===r.UNSIGNED_SHORT&&(ut=r.R16UI),q===r.UNSIGNED_INT&&(ut=r.R32UI),q===r.BYTE&&(ut=r.R8I),q===r.SHORT&&(ut=r.R16I),q===r.INT&&(ut=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ut=r.RG32F),q===r.HALF_FLOAT&&(ut=r.RG16F),q===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RG8UI),q===r.UNSIGNED_SHORT&&(ut=r.RG16UI),q===r.UNSIGNED_INT&&(ut=r.RG32UI),q===r.BYTE&&(ut=r.RG8I),q===r.SHORT&&(ut=r.RG16I),q===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),q===r.UNSIGNED_INT&&(ut=r.RGB32UI),q===r.BYTE&&(ut=r.RGB8I),q===r.SHORT&&(ut=r.RGB16I),q===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),q===r.UNSIGNED_INT&&(ut=r.RGBA32UI),q===r.BYTE&&(ut=r.RGBA8I),q===r.SHORT&&(ut=r.RGBA16I),q===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const kt=mt?$c:Ue.getTransfer(ft);q===r.FLOAT&&(ut=r.RGBA32F),q===r.HALF_FLOAT&&(ut=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ut=kt===Ve?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(N,E){let q;return N?E===null||E===Yi||E===il?q=r.DEPTH24_STENCIL8:E===Gi?q=r.DEPTH32F_STENCIL8:E===nl&&(q=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===il?q=r.DEPTH_COMPONENT24:E===Gi?q=r.DEPTH_COMPONENT32F:E===nl&&(q=r.DEPTH_COMPONENT16),q}function z(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),W(E),E.isVideoTexture&&g.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),D(E)}function W(N){const E=s.get(N);if(E.__webglInit===void 0)return;const q=N.source,ft=x.get(q);if(ft){const mt=ft[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&C(N),Object.keys(ft).length===0&&x.delete(q)}s.remove(N)}function C(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const q=N.source,ft=x.get(q);delete ft[E.__cacheKey],h.memory.textures--}function D(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let mt=0;mt<E.__webglFramebuffer[ft].length;mt++)r.deleteFramebuffer(E.__webglFramebuffer[ft][mt]);else r.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)r.deleteFramebuffer(E.__webglFramebuffer[ft]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let ft=0,mt=q.length;ft<mt;ft++){const ut=s.get(q[ft]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(q[ft])}s.remove(N)}let V=0;function Y(){V=0}function Q(){const N=V;return N>=l.maxTextures&&ae("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function lt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function rt(N,E){const q=s.get(N);if(N.isVideoTexture&&$t(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ft=N.image;if(ft===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function B(N,E){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){it(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function G(N,E){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){it(q,N,E);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function nt(N,E){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ht(q,N,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const gt={[pd]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},vt={[On]:r.NEAREST,[Xy]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},P={[Yy]:r.NEVER,[Jy]:r.ALWAYS,[jy]:r.LESS,[cp]:r.LEQUAL,[Zy]:r.EQUAL,[up]:r.GEQUAL,[Ky]:r.GREATER,[Qy]:r.NOTEQUAL};function $(N,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===yh||E.magFilter===yc||E.magFilter===Ps||E.minFilter===Bn||E.minFilter===yh||E.minFilter===yc||E.minFilter===Ps)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,gt[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,gt[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,gt[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,vt[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==yc&&E.minFilter!==Ps||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function pt(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const ft=E.source;let mt=x.get(ft);mt===void 0&&(mt={},x.set(ft,mt));const ut=lt(E);if(ut!==N.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),mt[ut].usedTimes++;const kt=mt[N.__cacheKey];kt!==void 0&&(mt[N.__cacheKey].usedTimes--,kt.usedTimes===0&&C(E)),N.__cacheKey=ut,N.__webglTexture=mt[ut].texture}return q}function Et(N,E,q){return Math.floor(Math.floor(N/q)/E)}function Nt(N,E,q,ft){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,ft,E.data);else{ut.sort((yt,bt)=>yt.start-bt.start);let kt=0;for(let yt=1;yt<ut.length;yt++){const bt=ut[kt],Bt=ut[yt],It=bt.start+bt.count,Ut=Et(Bt.start,E.width,4),de=Et(bt.start,E.width,4);Bt.start<=It+1&&Ut===de&&Et(Bt.start+Bt.count-1,E.width,4)===Ut?bt.count=Math.max(bt.count,Bt.start+Bt.count-bt.start):(++kt,ut[kt]=Bt)}ut.length=kt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),Vt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let yt=0,bt=ut.length;yt<bt;yt++){const Bt=ut[yt],It=Math.floor(Bt.start/4),Ut=Math.ceil(Bt.count/4),de=It%E.width,X=Math.floor(It/E.width),Ot=Ut,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,de,X,Ot,At,q,ft,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function it(N,E,q){let ft=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=r.TEXTURE_3D);const mt=pt(N,E),ut=E.source;i.bindTexture(ft,N.__webglTexture,r.TEXTURE0+q);const kt=s.get(ut);if(ut.version!==kt.__version||mt===!0){i.activeTexture(r.TEXTURE0+q);const Ct=Ue.getPrimaries(Ue.workingColorSpace),Vt=E.colorSpace===rs?null:Ue.getPrimaries(E.colorSpace),te=E.colorSpace===rs||Ct===Vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let yt=T(E.image,!1,l.maxTextureSize);yt=ce(E,yt);const bt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type);let It=w(E.internalFormat,bt,Bt,E.colorSpace,E.isVideoTexture);$(ft,E);let Ut;const de=E.mipmaps,X=E.isVideoTexture!==!0,Ot=kt.__version===void 0||mt===!0,At=ut.dataReady,Ft=z(E,yt);if(E.isDepthTexture)It=U(E.format===zs,E.type),Ot&&(X?i.texStorage2D(r.TEXTURE_2D,1,It,yt.width,yt.height):i.texImage2D(r.TEXTURE_2D,0,It,yt.width,yt.height,0,bt,Bt,null));else if(E.isDataTexture)if(de.length>0){X&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ft,It,de[0].width,de[0].height);for(let Mt=0,St=de.length;Mt<St;Mt++)Ut=de[Mt],X?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Bt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,It,Ut.width,Ut.height,0,bt,Bt,Ut.data);E.generateMipmaps=!1}else X?(Ot&&i.texStorage2D(r.TEXTURE_2D,Ft,It,yt.width,yt.height),At&&Nt(E,yt,bt,Bt)):i.texImage2D(r.TEXTURE_2D,0,It,yt.width,yt.height,0,bt,Bt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,de[0].width,de[0].height,yt.depth);for(let Mt=0,St=de.length;Mt<St;Mt++)if(Ut=de[Mt],E.format!==Li)if(bt!==null)if(X){if(At)if(E.layerUpdates.size>0){const Rt=q_(Ut.width,Ut.height,E.format,E.type);for(const oe of E.layerUpdates){const Fe=Ut.data.subarray(oe*Rt/Ut.data.BYTES_PER_ELEMENT,(oe+1)*Rt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,oe,Ut.width,Ut.height,1,bt,Fe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,yt.depth,bt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,It,Ut.width,Ut.height,yt.depth,0,Ut.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,yt.depth,bt,Bt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,It,Ut.width,Ut.height,yt.depth,0,bt,Bt,Ut.data)}else{X&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ft,It,de[0].width,de[0].height);for(let Mt=0,St=de.length;Mt<St;Mt++)Ut=de[Mt],E.format!==Li?bt!==null?X?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,It,Ut.width,Ut.height,0,Ut.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Bt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,It,Ut.width,Ut.height,0,bt,Bt,Ut.data)}else if(E.isDataArrayTexture)if(X){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,yt.width,yt.height,yt.depth),At)if(E.layerUpdates.size>0){const Mt=q_(yt.width,yt.height,E.format,E.type);for(const St of E.layerUpdates){const Rt=yt.data.subarray(St*Mt/yt.data.BYTES_PER_ELEMENT,(St+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,yt.width,yt.height,1,bt,Bt,Rt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,bt,Bt,yt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,yt.width,yt.height,yt.depth,0,bt,Bt,yt.data);else if(E.isData3DTexture)X?(Ot&&i.texStorage3D(r.TEXTURE_3D,Ft,It,yt.width,yt.height,yt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,bt,Bt,yt.data)):i.texImage3D(r.TEXTURE_3D,0,It,yt.width,yt.height,yt.depth,0,bt,Bt,yt.data);else if(E.isFramebufferTexture){if(Ot)if(X)i.texStorage2D(r.TEXTURE_2D,Ft,It,yt.width,yt.height);else{let Mt=yt.width,St=yt.height;for(let Rt=0;Rt<Ft;Rt++)i.texImage2D(r.TEXTURE_2D,Rt,It,Mt,St,0,bt,Bt,null),Mt>>=1,St>>=1}}else if(de.length>0){if(X&&Ot){const Mt=wt(de[0]);i.texStorage2D(r.TEXTURE_2D,Ft,It,Mt.width,Mt.height)}for(let Mt=0,St=de.length;Mt<St;Mt++)Ut=de[Mt],X?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,Bt,Ut):i.texImage2D(r.TEXTURE_2D,Mt,It,bt,Bt,Ut);E.generateMipmaps=!1}else if(X){if(Ot){const Mt=wt(yt);i.texStorage2D(r.TEXTURE_2D,Ft,It,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Bt,yt)}else i.texImage2D(r.TEXTURE_2D,0,It,bt,Bt,yt);y(E)&&v(ft),kt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ht(N,E,q){if(E.image.length!==6)return;const ft=pt(N,E),mt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+q);const ut=s.get(mt);if(mt.version!==ut.__version||ft===!0){i.activeTexture(r.TEXTURE0+q);const kt=Ue.getPrimaries(Ue.workingColorSpace),Ct=E.colorSpace===rs?null:Ue.getPrimaries(E.colorSpace),Vt=E.colorSpace===rs||kt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let St=0;St<6;St++)!te&&!yt?bt[St]=T(E.image[St],!0,l.maxCubemapSize):bt[St]=yt?E.image[St].image:E.image[St],bt[St]=ce(E,bt[St]);const Bt=bt[0],It=c.convert(E.format,E.colorSpace),Ut=c.convert(E.type),de=w(E.internalFormat,It,Ut,E.colorSpace),X=E.isVideoTexture!==!0,Ot=ut.__version===void 0||ft===!0,At=mt.dataReady;let Ft=z(E,Bt);$(r.TEXTURE_CUBE_MAP,E);let Mt;if(te){X&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,de,Bt.width,Bt.height);for(let St=0;St<6;St++){Mt=bt[St].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const oe=Mt[Rt];E.format!==Li?It!==null?X?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,oe.width,oe.height,It,oe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,de,oe.width,oe.height,0,oe.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,oe.width,oe.height,It,Ut,oe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,de,oe.width,oe.height,0,It,Ut,oe.data)}}}else{if(Mt=E.mipmaps,X&&Ot){Mt.length>0&&Ft++;const St=wt(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,de,St.width,St.height)}for(let St=0;St<6;St++)if(yt){X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,bt[St].width,bt[St].height,It,Ut,bt[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,de,bt[St].width,bt[St].height,0,It,Ut,bt[St].data);for(let Rt=0;Rt<Mt.length;Rt++){const Fe=Mt[Rt].image[St].image;X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,Fe.width,Fe.height,It,Ut,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,de,Fe.width,Fe.height,0,It,Ut,Fe.data)}}else{X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,It,Ut,bt[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,de,It,Ut,bt[St]);for(let Rt=0;Rt<Mt.length;Rt++){const oe=Mt[Rt];X?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,It,Ut,oe.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,de,It,Ut,oe.image[St])}}}y(E)&&v(r.TEXTURE_CUBE_MAP),ut.__version=mt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Dt(N,E,q,ft,mt,ut){const kt=c.convert(q.format,q.colorSpace),Ct=c.convert(q.type),Vt=w(q.internalFormat,kt,Ct,q.colorSpace),te=s.get(E),yt=s.get(q);if(yt.__renderTarget=E,!te.__hasExternalTextures){const bt=Math.max(1,E.width>>ut),Bt=Math.max(1,E.height>>ut);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?i.texImage3D(mt,ut,Vt,bt,Bt,E.depth,0,kt,Ct,null):i.texImage2D(mt,ut,Vt,bt,Bt,0,kt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),re(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,mt,yt.__webglTexture,0,I(E)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,mt,yt.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(N,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,ut=U(E.stencilBuffer,mt),kt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;re(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(E),ut,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(E),ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,N)}else{const ft=E.textures;for(let mt=0;mt<ft.length;mt++){const ut=ft[mt],kt=c.convert(ut.format,ut.colorSpace),Ct=c.convert(ut.type),Vt=w(ut.internalFormat,kt,Ct,ut.colorSpace);re(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(E),Vt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(E),Vt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Vt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(N,E,q){const ft=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(E.depthTexture);if(mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),mt.__webglTexture===void 0){mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),$(r.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),yt=c.convert(E.depthTexture.type);let bt;E.depthTexture.format===Aa?bt=r.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(bt=r.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,bt,E.width,E.height,0,te,yt,null)}}else rt(E.depthTexture,0);const ut=mt.__webglTexture,kt=I(E),Ct=ft?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Vt=E.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)re(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Vt,Ct,ut,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Vt,Ct,ut,0);else if(E.depthTexture.format===zs)re(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Vt,Ct,ut,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Vt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function xe(N){const E=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)Gt(E.__webglFramebuffer[ft],N,ft);else{const ft=N.texture.mipmaps;ft&&ft.length>0?Gt(E.__webglFramebuffer[0],N,0):Gt(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=r.createRenderbuffer(),Wt(E.__webglDepthbuffer[ft],N,!1);else{const mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ut)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Wt(E.__webglDepthbuffer,N,!1);else{const mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(N,E,q){const ft=s.get(N);E!==void 0&&Dt(ft.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&xe(N)}function Se(N){const E=N.texture,q=s.get(N),ft=s.get(E);N.addEventListener("dispose",O);const mt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,kt=mt.length>1;if(kt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=E.version,h.memory.textures++),ut){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Vt=0;Vt<E.mipmaps.length;Vt++)q.__webglFramebuffer[Ct][Vt]=r.createFramebuffer()}else q.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(kt)for(let Ct=0,Vt=mt.length;Ct<Vt;Ct++){const te=s.get(mt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&re(N)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<mt.length;Ct++){const Vt=mt[Ct];q.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const te=c.convert(Vt.format,Vt.colorSpace),yt=c.convert(Vt.type),bt=w(Vt.internalFormat,te,yt,Vt.colorSpace,N.isXRRenderTarget===!0),Bt=I(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,bt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),$(r.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Vt=0;Vt<E.mipmaps.length;Vt++)Dt(q.__webglFramebuffer[Ct][Vt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt);else Dt(q.__webglFramebuffer[Ct],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Ct=0,Vt=mt.length;Ct<Vt;Ct++){const te=mt[Ct],yt=s.get(te);let bt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,yt.__webglTexture),$(bt,te),Dt(q.__webglFramebuffer,N,te,r.COLOR_ATTACHMENT0+Ct,bt,0),y(te)&&v(bt)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ft.__webglTexture),$(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Vt=0;Vt<E.mipmaps.length;Vt++)Dt(q.__webglFramebuffer[Vt],N,E,r.COLOR_ATTACHMENT0,Ct,Vt);else Dt(q.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Ct,0);y(E)&&v(Ct),i.unbindTexture()}N.depthBuffer&&xe(N)}function _e(N){const E=N.textures;for(let q=0,ft=E.length;q<ft;q++){const mt=E[q];if(y(mt)){const ut=L(N),kt=s.get(mt).__webglTexture;i.bindTexture(ut,kt),v(ut),i.unbindTexture()}}}const Ce=[],se=[];function Tt(N){if(N.samples>0){if(re(N)===!1){const E=N.textures,q=N.width,ft=N.height;let mt=r.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(N),Ct=E.length>1;if(Ct)for(let te=0;te<E.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Vt=N.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const yt=s.get(E[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,q,ft,0,0,q,ft,mt,r.NEAREST),m===!0&&(Ce.length=0,se.length=0,Ce.push(r.COLOR_ATTACHMENT0+te),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ce.push(ut),se.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<E.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const yt=s.get(E[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,yt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function I(N){return Math.min(l.maxSamples,N.samples)}function re(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function ce(N,E){const q=N.colorSpace,ft=N.format,mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Wr&&q!==rs&&(Ue.getTransfer(q)===Ve?(ft!==Li||mt!==li)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),E}function wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=rt,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=nt,this.rebindTextures=Qe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function wA(r,t){function i(s,l=rs){let c;const h=Ue.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===zv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Nv)return r.BYTE;if(s===Ov)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===ip)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===Iv)return r.ALPHA;if(s===Fv)return r.RGB;if(s===Li)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===Bv)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===yd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return c.COMPRESSED_R11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Td)return c.COMPRESSED_RG11_EAC;if(s===Ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ud)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Od)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Gd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Wd||s===qd||s===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Qv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new ou(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new LA,v={},L=i.getContextAttributes();let w=null,U=null;const z=[],F=[],O=new fe;let W=null;const C=new yi;C.viewport=new an;const D=new yi;D.viewport=new an;const V=[C,D],Y=new HM;let Q=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=z[it];return ht===void 0&&(ht=new kh,z[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=z[it];return ht===void 0&&(ht=new kh,z[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=z[it];return ht===void 0&&(ht=new kh,z[it]=ht),ht.getHandSpace()};function rt(it){const ht=F.indexOf(it.inputSource);if(ht===-1)return;const Dt=z[ht];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||h),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let it=0;it<z.length;it++){const ht=F[it];ht!==null&&(F[it]=null,z[it].disconnect(ht))}Q=null,lt=null,y.reset();for(const it in v)delete v[it];t.setRenderTarget(w),M=null,x=null,_=null,l=null,U=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(W),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Wt=null,Gt=null;L.depth&&(Gt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=L.stencil?zs:Aa,Wt=L.stencil?il:Yi);const xe={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(xe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Wi(x.textureWidth,x.textureHeight,{format:Li,type:li,depthTexture:new sl(x.textureWidth,x.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:li,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(it){for(let ht=0;ht<it.removed.length;ht++){const Dt=it.removed[ht],Wt=F.indexOf(Dt);Wt>=0&&(F[Wt]=null,z[Wt].disconnect(Dt))}for(let ht=0;ht<it.added.length;ht++){const Dt=it.added[ht];let Wt=F.indexOf(Dt);if(Wt===-1){for(let xe=0;xe<z.length;xe++)if(xe>=F.length){F.push(Dt),Wt=xe;break}else if(F[xe]===null){F[xe]=Dt,Wt=xe;break}if(Wt===-1)break}const Gt=z[Wt];Gt&&Gt.connect(Dt)}}const nt=new K,gt=new K;function vt(it,ht,Dt){nt.setFromMatrixPosition(ht.matrixWorld),gt.setFromMatrixPosition(Dt.matrixWorld);const Wt=nt.distanceTo(gt),Gt=ht.projectionMatrix.elements,xe=Dt.projectionMatrix.elements,Qe=Gt[14]/(Gt[10]-1),Se=Gt[14]/(Gt[10]+1),_e=(Gt[9]+1)/Gt[5],Ce=(Gt[9]-1)/Gt[5],se=(Gt[8]-1)/Gt[0],Tt=(xe[8]+1)/xe[0],I=Qe*se,re=Qe*Tt,$t=Wt/(-se+Tt),ce=$t*-se;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ce),it.translateZ($t),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Gt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const wt=Qe+$t,N=Se+$t,E=I-ce,q=re+(Wt-ce),ft=_e*Se/N*wt,mt=Ce*Se/N*wt;it.projectionMatrix.makePerspective(E,q,ft,mt,wt,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function P(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ht=it.near,Dt=it.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),Y.near=D.near=C.near=ht,Y.far=D.far=C.far=Dt,(Q!==Y.near||lt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,lt=Y.far),Y.layers.mask=it.layers.mask|6,C.layers.mask=Y.layers.mask&3,D.layers.mask=Y.layers.mask&5;const Wt=it.parent,Gt=Y.cameras;P(Y,Wt);for(let xe=0;xe<Gt.length;xe++)P(Gt[xe],Wt);Gt.length===2?vt(Y,C,D):Y.projectionMatrix.copy(C.projectionMatrix),$(it,Y,Wt)};function $(it,ht,Dt){Dt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=jd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(it){return v[it]};let pt=null;function Et(it,ht){if(g=ht.getViewerPose(p||h),b=ht,g!==null){const Dt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Wt=!1;Dt.length!==Y.cameras.length&&(Y.cameras.length=0,Wt=!0);for(let Se=0;Se<Dt.length;Se++){const _e=Dt[Se];let Ce=null;if(M!==null)Ce=M.getViewport(_e);else{const Tt=_.getViewSubImage(x,_e);Ce=Tt.viewport,Se===0&&(t.setRenderTargetTextures(U,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(U))}let se=V[Se];se===void 0&&(se=new yi,se.layers.enable(Se),se.viewport=new an,V[Se]=se),se.matrix.fromArray(_e.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(_e.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Se===0&&(Y.matrix.copy(se.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Wt===!0&&Y.cameras.push(se)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const Se=_.getDepthInformation(Dt[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,l.renderState)}if(Gt&&Gt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let Se=0;Se<Dt.length;Se++){const _e=Dt[Se].camera;if(_e){let Ce=v[_e];Ce||(Ce=new Qv,v[_e]=Ce);const se=_.getCameraImage(_e);Ce.sourceTexture=se}}}}for(let Dt=0;Dt<z.length;Dt++){const Wt=F[Dt],Gt=z[Dt];Wt!==null&&Gt!==void 0&&Gt.update(Wt,ht,p||h)}pt&&pt(it,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Nt=new $v;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(it){pt=it},this.dispose=function(){}}}const Ls=new ji,OA=new tn;function PA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,qv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,w,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,U)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,L,w):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=t.get(v),w=L.envMap,U=L.envMapRotation;w&&(y.envMap.value=w,Ls.copy(U),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),y.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Ls)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,w){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=w*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const L=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function zA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,w){const U=w.program;s.uniformBlockBinding(L,U)}function p(L,w){let U=l[L.id];U===void 0&&(b(L),U=g(L),l[L.id]=U,L.addEventListener("dispose",y));const z=w.program;s.updateUBOMapping(L,z);const F=t.render.frame;c[L.id]!==F&&(x(L),c[L.id]=F)}function g(L){const w=_();L.__bindingPointIndex=w;const U=r.createBuffer(),z=L.__size,F=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,U),U}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const w=l[L.id],U=L.uniforms,z=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let F=0,O=U.length;F<O;F++){const W=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,D=W.length;C<D;C++){const V=W[C];if(M(V,F,C,z)===!0){const Y=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let lt=0;for(let rt=0;rt<Q.length;rt++){const B=Q[rt],G=T(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Y+lt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,lt),lt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(L,w,U,z){const F=L.value,O=w+"_"+U;if(z[O]===void 0)return typeof F=="number"||typeof F=="boolean"?z[O]=F:z[O]=F.clone(),!0;{const W=z[O];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return z[O]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function b(L){const w=L.uniforms;let U=0;const z=16;for(let O=0,W=w.length;O<W;O++){const C=Array.isArray(w[O])?w[O]:[w[O]];for(let D=0,V=C.length;D<V;D++){const Y=C[D],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let lt=0,rt=Q.length;lt<rt;lt++){const B=Q[lt],G=T(B),nt=U%z,gt=nt%G.boundary,vt=nt+gt;U+=gt,vt!==0&&z-vt<G.storage&&(U+=z-vt),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=G.storage}}}const F=U%z;return F>0&&(U+=z-F),L.__size=U,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",L),w}function y(L){const w=L.target;w.removeEventListener("dispose",y);const U=h.indexOf(w.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const L in l)r.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const IA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function FA(){return Bi===null&&(Bi=new RM(IA,16,16,Xr,Ta),Bi.name="DFG_LUT",Bi.minFilter=Bn,Bi.magFilter=Bn,Bi.wrapS=ya,Bi.wrapT=ya,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class BA{constructor(t={}){const{canvas:i=$y(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=li}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=M,y=new Set([lp,op,rp]),v=new Set([li,Yi,nl,il,ap,sp]),L=new Uint32Array(4),w=new Int32Array(4);let U=null,z=null;const F=[],O=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=Si;let V=0,Y=0,Q=null,lt=-1,rt=null;const B=new an,G=new an;let nt=null;const gt=new Re(0);let vt=0,P=i.width,$=i.height,pt=1,Et=null,Nt=null;const it=new an(0,0,P,$),ht=new an(0,0,P,$);let Dt=!1;const Wt=new pp;let Gt=!1,xe=!1;const Qe=new tn,Se=new K,_e=new an,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Tt(){return Q===null?pt:1}let I=s;function re(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",oe,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",we,!1),I===null){const j="webgl2";if(I=re(j,R),I===null)throw re(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let $t,ce,wt,N,E,q,ft,mt,ut,kt,Ct,Vt,te,yt,bt,Bt,It,Ut,de,X,Ot,At,Ft,Mt;function St(){$t=new F1(I),$t.init(),At=new wA(I,$t),ce=new w1(I,$t,t,At),wt=new RA(I,$t),ce.reversedDepthBuffer&&x&&wt.buffers.depth.setReversed(!0),N=new G1(I),E=new hA,q=new CA(I,$t,wt,E,ce,At,N),ft=new U1(C),mt=new I1(C),ut=new WM(I),Ft=new R1(I,ut),kt=new B1(I,ut,N,Ft),Ct=new k1(I,kt,ut,N),de=new V1(I,ce,q),Bt=new D1(E),Vt=new fA(C,ft,mt,$t,ce,Ft,Bt),te=new PA(C,E),yt=new pA,bt=new SA($t),Ut=new A1(C,ft,mt,wt,Ct,b,m),It=new TA(C,Ct,ce),Mt=new zA(I,N,ce,wt),X=new C1(I,$t,N),Ot=new H1(I,$t,N),N.programs=Vt.programs,C.capabilities=ce,C.extensions=$t,C.properties=E,C.renderLists=yt,C.shadowMap=It,C.state=wt,C.info=N}St(),T!==li&&(W=new W1(T,i.width,i.height,l,c));const Rt=new NA(C,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(R){R!==void 0&&(pt=R,this.setSize(P,$,!1))},this.getSize=function(R){return R.set(P,$)},this.setSize=function(R,j,ot=!0){if(Rt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,$=j,i.width=Math.floor(R*pt),i.height=Math.floor(j*pt),ot===!0&&(i.style.width=R+"px",i.style.height=j+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(P*pt,$*pt).floor()},this.setDrawingBufferSize=function(R,j,ot){P=R,$=j,pt=ot,i.width=Math.floor(R*ot),i.height=Math.floor(j*ot),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(T===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,j,ot,at){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,j,ot,at),wt.viewport(B.copy(it).multiplyScalar(pt).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,j,ot,at){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,j,ot,at),wt.scissor(G.copy(ht).multiplyScalar(pt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){wt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){Nt=R},this.getClearColor=function(R){return R.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ot=!0){let at=0;if(R){let J=!1;if(Q!==null){const Lt=Q.texture.format;J=y.has(Lt)}if(J){const Lt=Q.texture.type,Ht=v.has(Lt),Pt=Ut.getClearColor(),qt=Ut.getClearAlpha(),jt=Pt.r,ee=Pt.g,Zt=Pt.b;Ht?(L[0]=jt,L[1]=ee,L[2]=Zt,L[3]=qt,I.clearBufferuiv(I.COLOR,0,L)):(w[0]=jt,w[1]=ee,w[2]=Zt,w[3]=qt,I.clearBufferiv(I.COLOR,0,w))}else at|=I.COLOR_BUFFER_BIT}j&&(at|=I.DEPTH_BUFFER_BIT),ot&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",oe,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Ut.dispose(),yt.dispose(),bt.dispose(),E.dispose(),ft.dispose(),mt.dispose(),Ct.dispose(),Ft.dispose(),Mt.dispose(),Vt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Gs),Rt.removeEventListener("sessionend",Jr),Oi.stop()};function oe(R){R.preventDefault(),v_("WebGLRenderer: Context Lost."),D=!0}function Fe(){v_("WebGLRenderer: Context Restored."),D=!1;const R=N.autoReset,j=It.enabled,ot=It.autoUpdate,at=It.needsUpdate,J=It.type;St(),N.autoReset=R,It.enabled=j,It.autoUpdate=ot,It.needsUpdate=at,It.type=J}function we(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pn(R){const j=R.target;j.removeEventListener("dispose",Pn),Mi(j)}function Mi(R){ul(R),E.remove(R)}function ul(R){const j=E.get(R).programs;j!==void 0&&(j.forEach(function(ot){Vt.releaseProgram(ot)}),R.isShaderMaterial&&Vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ot,at,J,Lt){j===null&&(j=Ce);const Ht=J.isMesh&&J.matrixWorld.determinant()<0,Pt=cs(R,j,ot,at,J);wt.setMaterial(at,Ht);let qt=ot.index,jt=1;if(at.wireframe===!0){if(qt=kt.getWireframeAttribute(ot),qt===void 0)return;jt=2}const ee=ot.drawRange,Zt=ot.attributes.position;let ne=ee.start*jt,Oe=(ee.start+ee.count)*jt;Lt!==null&&(ne=Math.max(ne,Lt.start*jt),Oe=Math.min(Oe,(Lt.start+Lt.count)*jt)),qt!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,qt.count)):Zt!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,Zt.count));const Je=Oe-ne;if(Je<0||Je===1/0)return;Ft.setup(J,at,Pt,ot,qt);let je,Ie=X;if(qt!==null&&(je=ut.get(qt),Ie=Ot,Ie.setIndex(je)),J.isMesh)at.wireframe===!0?(wt.setLineWidth(at.wireframeLinewidth*Tt()),Ie.setMode(I.LINES)):Ie.setMode(I.TRIANGLES);else if(J.isLine){let Qt=at.linewidth;Qt===void 0&&(Qt=1),wt.setLineWidth(Qt*Tt()),J.isLineSegments?Ie.setMode(I.LINES):J.isLineLoop?Ie.setMode(I.LINE_LOOP):Ie.setMode(I.LINE_STRIP)}else J.isPoints?Ie.setMode(I.POINTS):J.isSprite&&Ie.setMode(I.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Ie.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qt=J._multiDrawStarts,Pe=J._multiDrawCounts,le=J._multiDrawCount,Tn=qt?ut.get(qt).bytesPerElement:1,Qi=E.get(at).currentProgram.getUniforms();for(let An=0;An<le;An++)Qi.setValue(I,"_gl_DrawID",An),Ie.render(Qt[An]/Tn,Pe[An])}else if(J.isInstancedMesh)Ie.renderInstances(ne,Je,J.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Pe=Math.min(ot.instanceCount,Qt);Ie.renderInstances(ne,Je,Pe)}else Ie.render(ne,Je)};function Kr(R,j,ot){R.transparent===!0&&R.side===Sa&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,ks(R,j,ot),R.side=ls,R.needsUpdate=!0,ks(R,j,ot),R.side=Sa):ks(R,j,ot)}this.compile=function(R,j,ot=null){ot===null&&(ot=R),z=bt.get(ot),z.init(j),O.push(z),ot.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(z.pushLight(J),J.castShadow&&z.pushShadow(J))}),R!==ot&&R.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(z.pushLight(J),J.castShadow&&z.pushShadow(J))}),z.setupLights();const at=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Lt=J.material;if(Lt)if(Array.isArray(Lt))for(let Ht=0;Ht<Lt.length;Ht++){const Pt=Lt[Ht];Kr(Pt,ot,J),at.add(Pt)}else Kr(Lt,ot,J),at.add(Lt)}),z=O.pop(),at},this.compileAsync=function(R,j,ot=null){const at=this.compile(R,j,ot);return new Promise(J=>{function Lt(){if(at.forEach(function(Ht){E.get(Ht).currentProgram.isReady()&&at.delete(Ht)}),at.size===0){J(R);return}setTimeout(Lt,10)}$t.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Hs=null;function Qr(R){Hs&&Hs(R)}function Gs(){Oi.stop()}function Jr(){Oi.start()}const Oi=new $v;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){Hs=R,Rt.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},Rt.addEventListener("sessionstart",Gs),Rt.addEventListener("sessionend",Jr),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ot=Rt.enabled===!0&&Rt.isPresenting===!0,at=W!==null&&(Q===null||ot)&&W.begin(C,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(j),j=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,Q),z=bt.get(R,O.length),z.init(j),O.push(z),Qe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Wt.setFromProjectionMatrix(Qe,Vi,j.reversedDepth),xe=this.localClippingEnabled,Gt=Bt.init(this.clippingPlanes,xe),U=yt.get(R,F.length),U.init(),F.push(U),Rt.enabled===!0&&Rt.isPresenting===!0){const Ht=C.xr.getDepthSensingMesh();Ht!==null&&ci(Ht,j,-1/0,C.sortObjects)}ci(R,j,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Et,Nt),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&Ut.addToRenderList(U,R),this.info.render.frame++,Gt===!0&&Bt.beginShadows();const J=z.state.shadowsArray;if(It.render(J,R,j),Gt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&W.hasRenderPass())===!1){const Ht=U.opaque,Pt=U.transmissive;if(z.setupLights(),j.isArrayCamera){const qt=j.cameras;if(Pt.length>0)for(let jt=0,ee=qt.length;jt<ee;jt++){const Zt=qt[jt];bn(Ht,Pt,R,Zt)}se&&Ut.render(R);for(let jt=0,ee=qt.length;jt<ee;jt++){const Zt=qt[jt];on(U,R,Zt,Zt.viewport)}}else Pt.length>0&&bn(Ht,Pt,R,j),se&&Ut.render(R),on(U,R,j)}Q!==null&&Y===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),at&&W.end(C),R.isScene===!0&&R.onAfterRender(C,R,j),Ft.resetDefaultState(),lt=-1,rt=null,O.pop(),O.length>0?(z=O[O.length-1],Gt===!0&&Bt.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function ci(R,j,ot,at){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Wt.intersectsSprite(R)){at&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qe);const Ht=Ct.update(R),Pt=R.material;Pt.visible&&U.push(R,Ht,Pt,ot,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Wt.intersectsObject(R))){const Ht=Ct.update(R),Pt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),_e.copy(Ht.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(Qe)),Array.isArray(Pt)){const qt=Ht.groups;for(let jt=0,ee=qt.length;jt<ee;jt++){const Zt=qt[jt],ne=Pt[Zt.materialIndex];ne&&ne.visible&&U.push(R,Ht,ne,ot,_e.z,Zt)}}else Pt.visible&&U.push(R,Ht,Pt,ot,_e.z,null)}}const Lt=R.children;for(let Ht=0,Pt=Lt.length;Ht<Pt;Ht++)ci(Lt[Ht],j,ot,at)}function on(R,j,ot,at){const{opaque:J,transmissive:Lt,transparent:Ht}=R;z.setupLightsView(ot),Gt===!0&&Bt.setGlobalState(C.clippingPlanes,ot),at&&wt.viewport(B.copy(at)),J.length>0&&Ei(J,j,ot),Lt.length>0&&Ei(Lt,j,ot),Ht.length>0&&Ei(Ht,j,ot),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function bn(R,j,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[at.id]===void 0){const ne=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[at.id]=new Wi(1,1,{generateMipmaps:!0,type:ne?Ta:li,minFilter:Ps,samples:ce.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Lt=z.state.transmissionRenderTarget[at.id],Ht=at.viewport||B;Lt.setSize(Ht.z*C.transmissionResolutionScale,Ht.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),qt=C.getActiveCubeFace(),jt=C.getActiveMipmapLevel();C.setRenderTarget(Lt),C.getClearColor(gt),vt=C.getClearAlpha(),vt<1&&C.setClearColor(16777215,.5),C.clear(),se&&Ut.render(ot);const ee=C.toneMapping;C.toneMapping=Xi;const Zt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),z.setupLightsView(at),Gt===!0&&Bt.setGlobalState(C.clippingPlanes,at),Ei(R,ot,at),q.updateMultisampleRenderTarget(Lt),q.updateRenderTargetMipmap(Lt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Oe=0,Je=j.length;Oe<Je;Oe++){const je=j[Oe],{object:Ie,geometry:Qt,material:Pe,group:le}=je;if(Pe.side===Sa&&Ie.layers.test(at.layers)){const Tn=Pe.side;Pe.side=Qn,Pe.needsUpdate=!0,Vs(Ie,ot,at,Qt,Pe,le),Pe.side=Tn,Pe.needsUpdate=!0,ne=!0}}ne===!0&&(q.updateMultisampleRenderTarget(Lt),q.updateRenderTargetMipmap(Lt))}C.setRenderTarget(Pt,qt,jt),C.setClearColor(gt,vt),Zt!==void 0&&(at.viewport=Zt),C.toneMapping=ee}function Ei(R,j,ot){const at=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Lt=R.length;J<Lt;J++){const Ht=R[J],{object:Pt,geometry:qt,group:jt}=Ht;let ee=Ht.material;ee.allowOverride===!0&&at!==null&&(ee=at),Pt.layers.test(ot.layers)&&Vs(Pt,j,ot,qt,ee,jt)}}function Vs(R,j,ot,at,J,Lt){R.onBeforeRender(C,j,ot,at,J,Lt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,j,ot,at,R,Lt),J.transparent===!0&&J.side===Sa&&J.forceSinglePass===!1?(J.side=Qn,J.needsUpdate=!0,C.renderBufferDirect(ot,j,at,J,R,Lt),J.side=ls,J.needsUpdate=!0,C.renderBufferDirect(ot,j,at,J,R,Lt),J.side=Sa):C.renderBufferDirect(ot,j,at,J,R,Lt),R.onAfterRender(C,j,ot,at,J,Lt)}function ks(R,j,ot){j.isScene!==!0&&(j=Ce);const at=E.get(R),J=z.state.lights,Lt=z.state.shadowsArray,Ht=J.state.version,Pt=Vt.getParameters(R,J.state,Lt,j,ot),qt=Vt.getProgramCacheKey(Pt);let jt=at.programs;at.environment=R.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(R.isMeshStandardMaterial?mt:ft).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Pn),jt=new Map,at.programs=jt);let ee=jt.get(qt);if(ee!==void 0){if(at.currentProgram===ee&&at.lightsStateVersion===Ht)return $r(R,Pt),ee}else Pt.uniforms=Vt.getUniforms(R),R.onBeforeCompile(Pt,C),ee=Vt.acquireProgram(Pt,qt),jt.set(qt,ee),at.uniforms=Pt.uniforms;const Zt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Bt.uniform),$r(R,Pt),at.needsLights=Ra(R),at.lightsStateVersion=Ht,at.needsLights&&(Zt.ambientLightColor.value=J.state.ambient,Zt.lightProbe.value=J.state.probe,Zt.directionalLights.value=J.state.directional,Zt.directionalLightShadows.value=J.state.directionalShadow,Zt.spotLights.value=J.state.spot,Zt.spotLightShadows.value=J.state.spotShadow,Zt.rectAreaLights.value=J.state.rectArea,Zt.ltc_1.value=J.state.rectAreaLTC1,Zt.ltc_2.value=J.state.rectAreaLTC2,Zt.pointLights.value=J.state.point,Zt.pointLightShadows.value=J.state.pointShadow,Zt.hemisphereLights.value=J.state.hemi,Zt.directionalShadowMap.value=J.state.directionalShadowMap,Zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Zt.spotShadowMap.value=J.state.spotShadowMap,Zt.spotLightMatrix.value=J.state.spotLightMatrix,Zt.spotLightMap.value=J.state.spotLightMap,Zt.pointShadowMap.value=J.state.pointShadowMap,Zt.pointShadowMatrix.value=J.state.pointShadowMatrix),at.currentProgram=ee,at.uniformsList=null,ee}function fl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Jc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function $r(R,j){const ot=E.get(R);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function cs(R,j,ot,at,J){j.isScene!==!0&&(j=Ce),q.resetTextureUnits();const Lt=j.fog,Ht=at.isMeshStandardMaterial?j.environment:null,Pt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wr,qt=(at.isMeshStandardMaterial?mt:ft).get(at.envMap||Ht),jt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Zt=!!ot.morphAttributes.position,ne=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let Je=Xi;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Je=C.toneMapping);const je=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ie=je!==void 0?je.length:0,Qt=E.get(at),Pe=z.state.lights;if(Gt===!0&&(xe===!0||R!==rt)){const Cn=R===rt&&at.id===lt;Bt.setState(at,R,Cn)}let le=!1;at.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Pe.state.version||Qt.outputColorSpace!==Pt||J.isBatchedMesh&&Qt.batching===!1||!J.isBatchedMesh&&Qt.batching===!0||J.isBatchedMesh&&Qt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qt.instancing===!1||!J.isInstancedMesh&&Qt.instancing===!0||J.isSkinnedMesh&&Qt.skinning===!1||!J.isSkinnedMesh&&Qt.skinning===!0||J.isInstancedMesh&&Qt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qt.instancingMorph===!1&&J.morphTexture!==null||Qt.envMap!==qt||at.fog===!0&&Qt.fog!==Lt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Bt.numPlanes||Qt.numIntersection!==Bt.numIntersection)||Qt.vertexAlphas!==jt||Qt.vertexTangents!==ee||Qt.morphTargets!==Zt||Qt.morphNormals!==ne||Qt.morphColors!==Oe||Qt.toneMapping!==Je||Qt.morphTargetsCount!==Ie)&&(le=!0):(le=!0,Qt.__version=at.version);let Tn=Qt.currentProgram;le===!0&&(Tn=ks(at,j,J));let Qi=!1,An=!1,ui=!1;const Be=Tn.getUniforms(),Rn=Qt.uniforms;if(wt.useProgram(Tn.program)&&(Qi=!0,An=!0,ui=!0),at.id!==lt&&(lt=at.id,An=!0),Qi||rt!==R){wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Be.setValue(I,"projectionMatrix",R.projectionMatrix),Be.setValue(I,"viewMatrix",R.matrixWorldInverse);const wn=Be.map.cameraPosition;wn!==void 0&&wn.setValue(I,Se.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&Be.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),rt!==R&&(rt=R,An=!0,ui=!0)}if(Qt.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(I,"directionalShadowMap",Pe.state.directionalShadowMap,q),Pe.state.spotShadowMap.length>0&&Be.setValue(I,"spotShadowMap",Pe.state.spotShadowMap,q),Pe.state.pointShadowMap.length>0&&Be.setValue(I,"pointShadowMap",Pe.state.pointShadowMap,q)),J.isSkinnedMesh){Be.setOptional(I,J,"bindMatrix"),Be.setOptional(I,J,"bindMatrixInverse");const Cn=J.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Be.setValue(I,"boneTexture",Cn.boneTexture,q))}J.isBatchedMesh&&(Be.setOptional(I,J,"batchingTexture"),Be.setValue(I,"batchingTexture",J._matricesTexture,q),Be.setOptional(I,J,"batchingIdTexture"),Be.setValue(I,"batchingIdTexture",J._indirectTexture,q),Be.setOptional(I,J,"batchingColorTexture"),J._colorsTexture!==null&&Be.setValue(I,"batchingColorTexture",J._colorsTexture,q));const mn=ot.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&de.update(J,ot,Tn),(An||Qt.receiveShadow!==J.receiveShadow)&&(Qt.receiveShadow=J.receiveShadow,Be.setValue(I,"receiveShadow",J.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Rn.envMap.value=qt,Rn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=FA()),An&&(Be.setValue(I,"toneMappingExposure",C.toneMappingExposure),Qt.needsLights&&to(Rn,ui),Lt&&at.fog===!0&&te.refreshFogUniforms(Rn,Lt),te.refreshMaterialUniforms(Rn,at,pt,$,z.state.transmissionRenderTarget[R.id]),Jc.upload(I,fl(Qt),Rn,q)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Jc.upload(I,fl(Qt),Rn,q),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(I,"center",J.center),Be.setValue(I,"modelViewMatrix",J.modelViewMatrix),Be.setValue(I,"normalMatrix",J.normalMatrix),Be.setValue(I,"modelMatrix",J.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Cn=at.uniformsGroups;for(let wn=0,Xs=Cn.length;wn<Xs;wn++){const bi=Cn[wn];Mt.update(bi,Tn),Mt.bind(bi,Tn)}}return Tn}function to(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Ra(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,j,ot){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=j,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ot=E.get(R);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const Ca=I.createFramebuffer();this.setRenderTarget=function(R,j=0,ot=0){Q=R,V=j,Y=ot;let at=null,J=!1,Lt=!1;if(R){const Pt=E.get(R);if(Pt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(I.FRAMEBUFFER,Pt.__webglFramebuffer),B.copy(R.viewport),G.copy(R.scissor),nt=R.scissorTest,wt.viewport(B),wt.scissor(G),wt.setScissorTest(nt),lt=-1;return}else if(Pt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Pt.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Pt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Lt=!0);const jt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[j])?at=jt[j][ot]:at=jt[j],J=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[ot]:at=jt,B.copy(R.viewport),G.copy(R.scissor),nt=R.scissorTest}else B.copy(it).multiplyScalar(pt).floor(),G.copy(ht).multiplyScalar(pt).floor(),nt=Dt;if(ot!==0&&(at=Ca),wt.bindFramebuffer(I.FRAMEBUFFER,at)&&wt.drawBuffers(R,at),wt.viewport(B),wt.scissor(G),wt.setScissorTest(nt),J){const Pt=E.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,ot)}else if(Lt){const Pt=j;for(let qt=0;qt<R.textures.length;qt++){const jt=E.get(R.textures[qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+qt,jt.__webglTexture,ot,Pt)}}else if(R!==null&&ot!==0){const Pt=E.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,ot)}lt=-1},this.readRenderTargetPixels=function(R,j,ot,at,J,Lt,Ht,Pt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(qt=qt[Ht]),qt){wt.bindFramebuffer(I.FRAMEBUFFER,qt);try{const jt=R.textures[Pt],ee=jt.format,Zt=jt.type;if(!ce.textureFormatReadable(ee)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Zt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-at&&ot>=0&&ot<=R.height-J&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pt),I.readPixels(j,ot,at,J,At.convert(ee),At.convert(Zt),Lt))}finally{const jt=Q!==null?E.get(Q).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,j,ot,at,J,Lt,Ht,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(qt=qt[Ht]),qt)if(j>=0&&j<=R.width-at&&ot>=0&&ot<=R.height-J){wt.bindFramebuffer(I.FRAMEBUFFER,qt);const jt=R.textures[Pt],ee=jt.format,Zt=jt.type;if(!ce.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.bufferData(I.PIXEL_PACK_BUFFER,Lt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pt),I.readPixels(j,ot,at,J,At.convert(ee),At.convert(Zt),0);const Oe=Q!==null?E.get(Q).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Oe);const Je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tM(I,Je,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Lt),I.deleteBuffer(ne),I.deleteSync(Je),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ot=0){const at=Math.pow(2,-ot),J=Math.floor(R.image.width*at),Lt=Math.floor(R.image.height*at),Ht=j!==null?j.x:0,Pt=j!==null?j.y:0;q.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,Ht,Pt,J,Lt),wt.unbindTexture()};const us=I.createFramebuffer(),wa=I.createFramebuffer();this.copyTextureToTexture=function(R,j,ot=null,at=null,J=0,Lt=null){Lt===null&&(J!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=J,J=0):Lt=0);let Ht,Pt,qt,jt,ee,Zt,ne,Oe,Je;const je=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(ot!==null)Ht=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,qt=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,ee=ot.min.y,Zt=ot.isBox3?ot.min.z:0;else{const mn=Math.pow(2,-J);Ht=Math.floor(je.width*mn),Pt=Math.floor(je.height*mn),R.isDataArrayTexture?qt=je.depth:R.isData3DTexture?qt=Math.floor(je.depth*mn):qt=1,jt=0,ee=0,Zt=0}at!==null?(ne=at.x,Oe=at.y,Je=at.z):(ne=0,Oe=0,Je=0);const Ie=At.convert(j.format),Qt=At.convert(j.type);let Pe;j.isData3DTexture?(q.setTexture3D(j,0),Pe=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Pe=I.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Pe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const le=I.getParameter(I.UNPACK_ROW_LENGTH),Tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qi=I.getParameter(I.UNPACK_SKIP_PIXELS),An=I.getParameter(I.UNPACK_SKIP_ROWS),ui=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const Be=R.isDataArrayTexture||R.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const mn=E.get(R),Cn=E.get(j),wn=E.get(mn.__renderTarget),Xs=E.get(Cn.__renderTarget);wt.bindFramebuffer(I.READ_FRAMEBUFFER,wn.__webglFramebuffer),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let bi=0;bi<qt;bi++)Be&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,Zt+bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Lt,Je+bi)),I.blitFramebuffer(jt,ee,Ht,Pt,ne,Oe,Ht,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const mn=E.get(R),Cn=E.get(j);wt.bindFramebuffer(I.READ_FRAMEBUFFER,us),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,wa);for(let wn=0;wn<qt;wn++)Be?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,J,Zt+wn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,J),Rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,Lt,Je+wn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,Lt),J!==0?I.blitFramebuffer(jt,ee,Ht,Pt,ne,Oe,Ht,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):Rn?I.copyTexSubImage3D(Pe,Lt,ne,Oe,Je+wn,jt,ee,Ht,Pt):I.copyTexSubImage2D(Pe,Lt,ne,Oe,jt,ee,Ht,Pt);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Pe,Lt,ne,Oe,Je,Ht,Pt,qt,Ie,Qt,je.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,Lt,ne,Oe,Je,Ht,Pt,qt,Ie,je.data):I.texSubImage3D(Pe,Lt,ne,Oe,Je,Ht,Pt,qt,Ie,Qt,je):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Lt,ne,Oe,Ht,Pt,Ie,Qt,je.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Lt,ne,Oe,je.width,je.height,Ie,je.data):I.texSubImage2D(I.TEXTURE_2D,Lt,ne,Oe,Ht,Pt,Ie,Qt,je);I.pixelStorei(I.UNPACK_ROW_LENGTH,le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,An),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ui),Lt===0&&j.generateMipmaps&&I.generateMipmap(Pe),wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),wt.unbindTexture()},this.resetState=function(){V=0,Y=0,Q=null,wt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const gv={type:"change"},Sp={type:"start"},ax={type:"end"},Wc=new ru,_v=new ss,HA=Math.cos(70*nM.DEG2RAD),_n=new K,Kn=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6;class GA extends kM{constructor(t,i=null){super(t,i),this.state=qe.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Fs,this._lastTargetPosition=new K,this._quat=new Fs().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new X_,this._sphericalDelta=new X_,this._scale=1,this._panOffset=new K,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new K,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kA.bind(this),this._onPointerDown=VA.bind(this),this._onPointerUp=XA.bind(this),this._onContextMenu=QA.bind(this),this._onMouseWheel=YA.bind(this),this._onKeyDown=jA.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=KA.bind(this),this._onMouseDown=WA.bind(this),this._onMouseMove=qA.bind(this),this._interceptControlDown=JA.bind(this),this._interceptControlUp=$A.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gv),this.update(),this.state=qe.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<HA?this.object.lookAt(this.target):(_v.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(_v,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function VA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function kA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function XA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ax),this.state=qe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function WA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=qe.DOLLY;break;case Br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}break;case Br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Sp)}function qA(r){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function YA(r){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(r.preventDefault(),this.dispatchEvent(Sp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ax))}function jA(r){this.enabled!==!1&&this._handleKeyDown(r)}function ZA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=qe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=qe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Sp)}function KA(r){switch(this._trackPointer(r),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=qe.NONE}}function QA(r){this.enabled!==!1&&r.preventDefault()}function JA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $A(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tR(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function Yr(r){if(!tR(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function vv(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Ir(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function Ki(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function ba(r){return Math.sqrt(dn(r,r))}function eR(r,t){return r.map(i=>i*t)}function Mn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function nR(r){const t=ba(r);return eR(r,1/t)}function cl(r){const t=ba(r);return Mn(r,1/t)}function dn(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function Fr(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function iR(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=dn(t,r),h=Fr(t,r);return r[0]=r[0]*s+h[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+h[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+h[2]*l+t[2]*c*(1-s),r}function aR(r,t){const i=cl(Ir([...t],Mn([...r],-dn(t,r))));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=Fr(r,i),l=[r,i,s];return h=>Yr(l.map(d=>dn(d,h)))}let sx=0;function sR(){sx=0}function yp(r={}){return{id:r.id??sx++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],moment:r.moment?[...r.moment]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0],fixed:r.fixed??!1}}function uu(r,t){return{...r,...t}}function rR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(d=>d.id===t),l=r.find(d=>d.id===i);if(!s||!l)return;const c=aR(cl([...s.moment]),Ki(s.pos,l.pos));if(!c)return;const h=s.pos;return r.map(d=>uu(d,{pos:c(Ki(h,d.pos)),vel:c(d.vel??[0,0,0]),moment:c(d.moment),f:c(d.f??[0,0,0]),tau:c(d.tau??[0,0,0])}))}function oR(r,t){return r.map(i=>({...i,pos:Mn(i.pos,t)})).map(yp)}function lR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const h={pos:c.pos.join(", "),moment:c.moment.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?h:{...h,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function cR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=h=>{if(typeof h=="string"){const d=h.split(",").map(m=>parseFloat(m.trim()));if(d.length===3&&d.every(m=>!isNaN(m)))return d}return h};for(const h of t.magnets){const d={};for(const[m,p]of Object.entries(h))d[m]=c(p);Yr(d.pos),Yr(cl(d.moment)),l.push(d)}return{name:i,unit:s,magnets:l}}async function xv(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:h}=cR(s),d={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in d))throw new Error(`Unknown unit in preset: ${c}`);const m=d[c];return{name:l||r,magnets:oR(h,m)}}catch{if(r in Jd){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=Jd[r]();return l.map(c=>Mn(c.pos,t)),{name:r,magnets:l.map(yp)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function uR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(Jd).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const Jd={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:cl([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},rx=4*Math.PI*1e-7;function fR(r,t,i,s,l){const c=ba(l),h=nR(l),d=dn(i,h),m=dn(s,h),p=dn(i,s),g=4*Math.PI*rx*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:h,p:d,q:m,r:p,K:g,m1:i,m2:s,d:l}}function hR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function dR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:h,m1:d,m2:m}=r,p=t**4,g=3*h/p,_=5*s*l-c;return Mn([i[0]*_-d[0]*l-m[0]*s,i[1]*_-d[1]*l-m[1]*s,i[2]*_-d[2]*l-m[2]*s],g)}function pR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:h,m2:d}=r,m=c/t**3,p=Mn(vv(Mn(Fr(h,i),-3*l),Fr(h,d)),-m),g=Mn(vv(Mn(Fr(d,i),-3*s),Fr(d,h)),-m);return{tor1:p,tor2:g}}function mR(r,t,i,s,l){const c=fR(r,t,i,s,l),h=hR(c),d=dR(c),m=Mn([...d],-1),{tor1:p,tor2:g}=pR(c);return{U:h,force1:d,force2:m,torque1:p,torque2:g}}const gR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3};class _R{constructor(t={}){const i={...gR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.mMag=i.br/rx,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function $d(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Sv(r,t,i,s){if(Math.abs(r)<1e-20)return $d(t,i,s);const l=t/r,c=i/r,h=s/r,d=l/3,m=c-l*l/3,p=h-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),M=Math.cbrt(-p/2-_);return[x+M-d]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,M=2*Math.cbrt(_);return[M*Math.cos(x)-d,M*Math.cos(x+2*Math.PI/3)-d,M*Math.cos(x+4*Math.PI/3)-d]}else{const _=Math.cbrt(-p/2);return[2*_-d,-_-d]}}function vR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Sv(t,i,s,l);const c=t/r,h=i/r,d=s/r,m=l/r,p=c/4,g=h-3*c*c/8,_=d-c*h/2+c*c*c/8,x=m-c*d/4+c*c*h/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const L=[];for(const w of $d(1,g,x))if(w>=-1e-12){const U=Math.sqrt(Math.max(0,w));L.push(U-p,-U-p)}return L}const M=Sv(1,g/2,(g*g-4*x)/16,-_*_/64),b=Math.max(...M,1e-12),T=Math.sqrt(Math.max(b,0));if(T<1e-12)return[];const y=_/(4*T),v=[];for(const[L,w]of[[1,-y],[-1,y]])for(const U of $d(1,L*T,g/2+b+w))v.push(U-p);return v}function tp(r,t,i){const s=[],l=r.length;for(let c=0;c<l;c++)for(let h=c+1;h<l;h++){const d=r[c],m=r[h],p=Ki(d,m),g=ba(p),_=t-g;_>=-i&&s.push({i:c,j:h,normal:Mn(p,1/g),dist:g,penetration:_})}return s}function yv(r,t,i,s=null,l=20,c=1e-7){const h=r.map(_=>[..._]),d=tp(h,t,i),m=t-i,p=t-i/2,g=s||r.map(()=>!1);for(let _=0;_<l;_++){let x=0;for(const{i:M,j:b}of d){const T=Ki(h[M],h[b]),y=ba(T),v=Mn(T,1/y);let L=0;if(y<m?(L=p-y,x=Math.max(x,t-y)):y<t&&(L=(t-y)*.5,x=Math.max(x,t-y)),L>c){const w=h[M],U=h[b],z=+g[M]-+g[b],F=L*((1-z)*.5),O=L*((1+z)*.5);w[0]-=v[0]*F,w[1]-=v[1]*F,w[2]-=v[2]*F,U[0]+=v[0]*O,U[1]+=v[1]*O,U[2]+=v[2]*O}}if(x<c)break}return h}function xR(r,t,i,s,l=null,c=.3,h=14,d=1e-7){const m=l||r.map(()=>!1),p=t.map((_,x)=>m[x]?[0,0,0]:[..._]),g=i.map((_,x)=>m[x]?[0,0,0]:[..._]);return s.length>0&&(SR(p,s,m,d),MR(g,s,m,c,h,d)),{constrainedForces:p,constrainedVel:g}}function SR(r,t,i,s=1e-7){const l=t.length;if(l===0)return;const c=[];for(let g=0;g<l;g++){const{i:_,j:x}=t[g];i[_]&&i[x]||c.push(g)}const h=c.length;if(h===0)return;const d=Array.from({length:h},()=>new Float64Array(h)),m=new Float64Array(h);for(let g=0;g<h;g++){const _=t[c[g]],x=_.i,M=_.j,b=_.normal,T=i[x]?0:1,y=i[M]?0:1;m[g]=T*dn(r[x],b)-y*dn(r[M],b);for(let v=0;v<h;v++){const L=t[c[v]],w=L.i,U=L.j,z=L.normal;i[w],i[U];const F=dn(b,z);let O=0;x===w&&(O+=T*1*1*F),x===U&&(O+=T*1*-1*F),M===w&&(O+=y*-1*1*F),M===U&&(O+=y*-1*-1*F),O=0,x===w&&(O-=T*F),x===U&&(O+=T*F),M===w&&(O+=y*F),M===U&&(O-=y*F),d[g][v]=O}}const p=yR(d,m,h);if(p)for(let g=0;g<h;g++){const _=p[g];if(Math.abs(_)<s)continue;const{i:x,j:M,normal:b}=t[c[g]];i[x]||(r[x][0]+=b[0]*_,r[x][1]+=b[1]*_,r[x][2]+=b[2]*_),i[M]||(r[M][0]-=b[0]*_,r[M][1]-=b[1]*_,r[M][2]-=b[2]*_)}}function yR(r,t,i){for(let l=0;l<i;l++){let c=Math.abs(r[l][l]),h=l;for(let m=l+1;m<i;m++){const p=Math.abs(r[m][l]);p>c&&(c=p,h=m)}if(c<1e-12)return null;if(h!==l){const m=r[l];r[l]=r[h],r[h]=m;const p=t[l];t[l]=t[h],t[h]=p}const d=r[l][l];for(let m=l+1;m<i;m++){const p=r[m][l]/d;r[m][l]=0;for(let g=l+1;g<i;g++)r[m][g]-=p*r[l][g];t[m]-=p*t[l]}}const s=new Float64Array(i);for(let l=i-1;l>=0;l--){let c=t[l];for(let h=l+1;h<i;h++)c-=r[l][h]*s[h];s[l]=c/r[l][l]}return s}function MR(r,t,i,s=.3,l=20,c=1e-7){const h=t.length,d=new Float64Array(h),m=Array.from({length:h},()=>[0,0,0]);for(let p=0;p<l;p++){let g=0;for(let _=0;_<h;_++){const{i:x,j:M,normal:b}=t[_],T=i[x]?0:1,y=i[M]?0:1,v=T+y;if(v<1)continue;const L=dn(r[x],b),z=-(dn(r[M],b)-L)/v,F=d[_],O=F+z,W=O-F;if(d[_]=O,Math.abs(W)>1e-12){g=Math.max(g,Math.abs(W));const Et=r[x],Nt=r[M];T&&(Et[0]-=b[0]*W,Et[1]-=b[1]*W,Et[2]-=b[2]*W),y&&(Nt[0]+=b[0]*W,Nt[1]+=b[1]*W,Nt[2]+=b[2]*W)}const C=Math.abs(d[_]),D=s*C;if(D<1e-12)continue;const V=r[x],Y=r[M],Q=Ki(Y,V),lt=dn(Q,b),rt=Ir(Q,Mn(b,-lt)),B=ba(rt);if(B<1e-12)continue;const G=Mn(rt,1/B),nt=B/v,gt=m[_],vt=[gt[0]+G[0]*nt,gt[1]+G[1]*nt,gt[2]+G[2]*nt],P=ba(vt);if(P>D){const Et=D/P;vt[0]*=Et,vt[1]*=Et,vt[2]*=Et}const $=Ki(gt,vt),pt=ba($);pt<1e-12||(gt[0]=vt[0],gt[1]=vt[1],gt[2]=vt[2],g=Math.max(g,pt),T&&(V[0]-=$[0]*T,V[1]-=$[1]*T,V[2]-=$[2]*T),y&&(Y[0]+=$[0]*y,Y[1]+=$[1]*y,Y[2]+=$[2]*y))}if(g<c)break}return r}function ER(r,t,i,s,l,c,h=1e-7){const d=Ki(i,s),m=Mn(d,.5),p=dn(r,r)-l*l;if(p<=0)return 0;const g=2*dn(r,t),_=2*dn(r,m)+dn(t,t),x=2*dn(t,m),M=dn(m,m),b=vR(M,x,_,g,p),T=(l*(1+h))**2;let y=null;for(const v of b)if(v>1e-12&&v<=c+1e-12){if(M*v*v*v*v+x*v*v*v+_*v*v+g*v+p+l*l>T)continue;(y===null||v<y)&&(y=v)}return y}function bR(r,t,i,s,l,c,h=null){if(c<1e-12)return{newPos:r.map(b=>[...b]),newVel:i.map(b=>[...b]),safedt:0,reason:"zero delta time"};const d=h||r.map(()=>!1),m=r.length,p=t.map((b,T)=>Mn(Yr([...b]),+!d[T]/s));let g=c,_="max delta time";for(let b=0;b<m;b++)for(let T=b+1;T<m;T++){if(d[b]&&d[T])continue;const y=Ki(r[b],r[T]),v=Ki(i[b],i[T]),L=ER(y,v,p[b],p[T],l,g);L!==null&&L<g&&(g=Math.max(L-1e-12,0),_=`collision between ${b} and ${T}`)}for(let b=0;b<m;b++)if(!d[b]){const T=l/2,y=i[b],v=p[b],L=Math.hypot(y[0],y[1],y[2]),w=Math.hypot(v[0],v[1],v[2]);let U;if(w>1e-12)U=(-L+Math.sqrt(L*L+2*w*T))/w;else if(L>1e-12)U=T/L;else continue;U<g&&(g=U,_=`max movement of ${b}`)}const x=r.map((b,T)=>{if(d[T])return[...b];const y=g,v=.5*g*g,L=i[T],w=p[T];return[b[0]+L[0]*y+w[0]*v,b[1]+L[1]*y+w[1]*v,b[2]+L[2]*y+w[2]*v]}),M=i.map((b,T)=>{if(d[T])return[0,0,0];const y=g,v=p[T];return[b[0]+v[0]*y,b[1]+v[1]*y,b[2]+v[2]*y]});return{newPos:x,newVel:M,safedt:g,reason:_}}function TR(r,t,i,s,l){return t.map((h,d)=>{const m=r[d],p=h.moment,g=h.omega,_=AR(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function AR(r,t,i,s,l,c=.3){const h=Mn([...i],1/l),m=dn(i,t)<0?c:1,p=[t[0]*m+h[0]*s,t[1]*m+h[1]*s,t[2]*m+h[2]*s],g=ba(p);if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),x=Mn([...p],1/g),M=iR([...r],x,_);return{moment:cl(M),omega:p}}function RR(r,t,i){return()=>(r.current=new CR(i),t(!0),()=>{})}class CR{constructor(t=.0025){this.params=new _R({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>[0,0,0]),h=t.map(()=>[0,0,0]),d=t.map(()=>new Map);for(let m=0;m<l;m++)for(let p=m+1;p<l;p++){const g=mR(i,s,t[m].moment,t[p].moment,Ki(t[m].pos,t[p].pos));Ir(c[m],g.force1),Ir(c[p],g.force2),Ir(h[m],g.torque1),Ir(h[p],g.torque2),d[m].set(`M#${p}`,g.force1),d[p].set(`M#${m}`,g.force2)}return{coforces:c,torques:h,forces:d}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(w=>!!w.fixed),h=t.map(w=>w.pos),d=yv(h,l,this.params.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((w,U)=>({pos:d[U],moment:w.moment})),this.params.radius,this.params.mMag);if(s){const w=this.params.gravity;m.forEach((U,z)=>{if(!c[z]){const F=w*this.params.mass;U[1]+=F,g[z].set("Gravity",[0,F,0])}})}const{constrainedForces:_,constrainedVel:x}=xR(d,m,t.map(w=>w.vel),tp(d,l,this.params.shellThickness),c,this.params.friction),{newPos:M,newVel:b,safedt:T,reason:y}=bR(d,_,x,this.params.mass,l-this.params.shellThickness,i,c),v=yv(M,l,this.params.shellThickness,c);tp(v,l,this.params.shellThickness).map(w=>{if(w.dist<this.params.radius)throw new Error(`球${w.i}-球${w.j}重叠过深: dist=${(w.dist*1e3).toFixed(4)}mm`)});const L=TR(p,t.map(w=>({moment:w.moment,omega:w.omega})),T,this.params.inertia,.3);return{newMagnets:t.map((w,U)=>uu(w,{pos:v[U],vel:b[U],f:_[U],tau:p[U],moment:L[U].moment,omega:L[U].omega})),safedt:T,forces:g,reason:y}}}function wR({getMagnets:r,setMagnets:t,selectedId:i,onApplySnap:s}){const l=me.useRef([]),c=me.useRef(-1),h=p=>p.map(g=>({...g,pos:[...g.pos],vel:[...g.vel],moment:[...g.moment]})),d=me.useCallback(p=>{const g=l.current;if(g.length>0){const _=g[g.length-1];if(DR(_,p))return}g.push(h(p)),g.length>100&&g.shift(),c.current=-1},[]),m=me.useCallback(()=>{l.current=[],c.current=-1},[]);return me.useEffect(()=>{const p=g=>{if(g.key!=="ArrowUp"&&g.key!=="ArrowDown")return;g.preventDefault();const _=l.current;if(_.length!==0)if(g.key==="ArrowUp"){if(c.current===-1)_.push(h(r())),c.current=_.length-2;else if(c.current>0)c.current--;else return;s(_[c.current])}else{if(c.current===-1)return;if(c.current++,c.current>=_.length-1){const x=_.pop();c.current=-1,s(x)}else s(_[c.current])}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,s,i]),{push:d,reset:m,histIdxRef:c}}function DR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const h of c){const d=s[h],m=l[h];if(Array.isArray(d)&&Array.isArray(m)){if(d.length!==m.length||d.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(d!==m)return!1}}return!0}const UR=32,nd=.1;function LR(r,t,i,s,l,c,h,d,m,p,g,_,x,M){const b=me.useRef(null),T=me.useRef(""),y=me.useCallback(()=>{const{magnets:v,isSimulating:L,simSpeed:w,useGravity:U}=t.current,z=r.current;if(!L||!z||v.length<2)return;const{newMagnets:F,safedt:O,reason:W}=z.step(v,w,U);T.current=`${O*1e3}ms (${W})`,x(Y=>Y+O);const C=new Map(v.map((Y,Q)=>[Y.id,Q])),D=F.map((Y,Q)=>uu(v[C.get(Y.id)],{...Y,pos:Yr(Y.pos.map(lt=>{if(Math.abs(lt)>nd)throw new Error(`球${Q}超出边界: ${Y.pos.map(rt=>(rt*1e3).toFixed(1)).join(",")}mm`);return Math.max(Math.min(lt,nd),-nd)}))}));g(D),m.current=!0;const V=p.current;if(V!==null){const Y=D.find(Q=>Q.id===V);Y&&_(Q=>Q&&{...Q,m_pos:Y.pos.map(lt=>lt*1e3).map(M),m_vel:(Y.vel??[0,0,0]).map(lt=>lt*1e3).map(M),moment:Y.moment.map(M),f:(Y.f??[0,0,0]).map(M),tau:(Y.tau??[0,0,0]).map(M)})}},[t,r,m,p,g,_,x,M]);return me.useEffect(()=>{const v=s.current,L=l.current,w=c.current,U=h.current,z=d.current;if(!v||!L||!w||!U||!i)return;let F=performance.now();const O=W=>{b.current=requestAnimationFrame(O),W-F>UR&&(y(),F=W),z==null||z.update(),U.render(L,w)};return b.current=requestAnimationFrame(O),()=>{cancelAnimationFrame(b.current)}},[i,y,s,l,c,h,d]),{stepDeltaTimeRef:T}}const ki={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},NR={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},OR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},PR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},zR=["X","Y","Z"];function $o({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:h}){return Xt.jsxs("div",{children:[Xt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),Xt.jsx("div",{style:PR,children:zR.map((d,m)=>{var p;return Xt.jsx("input",{placeholder:d,disabled:!s,style:{...OR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const M={...x,[r]:[...x[r]]};return M[r][m]=_,M})},onKeyDown:g=>{!s||g.key!=="Enter"||(h(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},d)})})]})}function IR({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,rotateMoments:l,useGravity:c,magnets:h,selectedId:d,refYId:m,setRefYId:p,onToggle:g,onResetVel:_,onPerturb:x,onReframe:M,onSimSpeedChange:b,onRotateMomentsChange:T,onGravityChange:y}){return Xt.jsxs("div",{style:{padding:"12px",background:r?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${r?"#2a4a2a":"#2a2a4a"}`},children:[Xt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),Xt.jsx("button",{onClick:g,style:{width:"100%",padding:"12px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),Xt.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[Xt.jsx("button",{onClick:_,style:ki,children:"重置速度"}),Xt.jsx("button",{onClick:x,style:ki,children:"扰动位置"})]}),Xt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:Xt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[Xt.jsxs("select",{value:m??"",onChange:v=>p(v.target.value===""?null:parseInt(v.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[Xt.jsx("option",{value:"",children:"— y 方向参考球 —"}),h.map(v=>Xt.jsxs("option",{value:v.id,children:["球 #",v.id]},v.id))]}),Xt.jsx("button",{onClick:M,disabled:d===null||m===null||d===m,style:{...ki,opacity:d!==null&&m!==null&&d!==m?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),Xt.jsxs("div",{style:{marginTop:"10px"},children:[Xt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),Xt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:v=>b(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(v.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),Xt.jsx(Mv,{label:"允许磁矩旋转",checked:l,onChange:T}),Xt.jsx(Mv,{label:"重力 (y 方向)",checked:c,onChange:y})]})}function FR({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:h,onRemove:d,onCommit:m}){const p={draft:s,setDraft:l,onCommit:m};return Xt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[Xt.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[Xt.jsxs("button",{disabled:!0,style:{...ki,flex:1,opacity:1},children:["选中磁球 #",r]}),Xt.jsx("button",{onClick:c,style:{...ki,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),Xt.jsx("button",{onClick:h,style:{...ki,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),Xt.jsx("button",{onClick:d,style:{...ki,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",Xt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsx($o,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...p}),Xt.jsx($o,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...p}),Xt.jsx($o,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...p}),Xt.jsx($o,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...p}),Xt.jsx($o,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...p})]})]})}function Mv({label:r,checked:t,onChange:i}){return Xt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[Xt.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),Xt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}const Ev=100;function BR(){const t=.0025*Ev,[i,s]=me.useState([]),[l,c]=me.useState(null),[h,d]=me.useState(null),[m,p]=me.useState(!1),[g,_]=me.useState(4e-5),[x,M]=me.useState(!0),[b,T]=me.useState(!0),[y,v]=me.useState(!0),[L,w]=me.useState(0),[U,z]=me.useState(null),[F,O]=me.useState([]),[W,C]=me.useState(!1),D=me.useRef(null),V=me.useRef(null),Y=me.useRef(null),Q=me.useRef(null),lt=me.useRef(null),rt=me.useRef([]),B=me.useRef([]),G=me.useRef([]),nt=me.useRef([]),gt=me.useRef(!0),vt=me.useRef(null);vt.current=l;const P=me.useRef({magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:b});P.current={magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:b};const $=me.useRef(null);me.useEffect(RR($,C,.0025),[]);const pt=Tt=>(Tt==null?void 0:Tt.toFixed(6))??"N/A",Et=Tt=>({m_pos:Tt.pos.map(I=>I*1e3).map(pt),m_vel:Tt.vel.map(I=>I*1e3).map(pt),moment:Tt.moment.map(pt),f:(Tt.f??[0,0,0]).map(pt),tau:(Tt.tau??[0,0,0]).map(pt)});me.useEffect(()=>{uR().then(Tt=>(O(Tt),xv(Tt[0],.0025))).then(Tt=>s(Tt.magnets)).catch(console.error)},[]);const{push:Nt,reset:it,histIdxRef:ht}=wR({getMagnets:()=>P.current.magnets,setMagnets:s,selectedId:l,onApplySnap:Tt=>{gt.current=!0,s(Tt);const I=Tt.find(re=>re.id===l);I&&z(Et(I))}}),{stepDeltaTimeRef:Dt}=LR($,P,W,D,V,Y,Q,lt,gt,vt,s,z,w,pt);me.useEffect(()=>{const Tt=D.current;if(!Tt||!W)return;let I=Tt.clientWidth||800,re=Tt.clientHeight||600;const $t=new AM;$t.background=new Re(657941),V.current=$t;const ce=new yi(50,I/re,.1,1e3);ce.position.set(0,0,12),Y.current=ce;const wt=new BA({antialias:!0});wt.setSize(I,re),wt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Tt.appendChild(wt.domElement),Q.current=wt;const N=new GA(ce,wt.domElement);N.enableDamping=!0,N.dampingFactor=.05,N.rotateSpeed=.5,N.zoomSpeed=.8,N.panSpeed=.5,N.minDistance=2,N.maxDistance=50,lt.current=N,$t.add(new BM(16777215,.5));const E=new G_(16777215,.8);E.position.set(5,5,5),$t.add(E);const q=new G_(4482815,.3);q.position.set(-5,-5,-5),$t.add(q);const ft=new VM(16,16,3355477,2236979);ft.rotation.x=Math.PI/2,$t.add(ft);const mt=()=>{const ut=Tt.clientWidth||800,kt=Tt.clientHeight||600;ce.aspect=ut/kt,ce.updateProjectionMatrix(),wt.setSize(ut,kt)};return window.addEventListener("resize",mt),()=>{window.removeEventListener("resize",mt),N.dispose(),wt.dispose(),V.current=null,Tt.contains(wt.domElement)&&Tt.removeChild(wt.domElement)}},[W]),me.useEffect(()=>{const Tt=V.current;Tt&&([...rt.current,...B.current,...G.current,...nt.current].forEach(I=>Tt.remove(I)),rt.current=[],B.current=[],G.current=[],nt.current=[],i.forEach(I=>{const re=new vp(t,32,32),$t=new OM({color:I.color,metalness:.8,roughness:.2,emissive:I.color,emissiveIntensity:l===I.id?.4:.15}),ce=new Ni(re,$t),wt=I.pos.map(Vt=>Vt*Ev);if(ce.position.set(wt[0],wt[1],wt[2]),ce.userData.id=I.id,Tt.add(ce),rt.current.push(ce),!y)return;const N=t*3.6,E=t*.5,q=t*.3,ft=new K(...I.moment).normalize(),mt=new K(...wt),ut=new jh(ft,mt,N,16768256,E,q);Tt.add(ut),B.current.push(ut);const kt=I.f?new K(...I.f).length():0;if(kt>1e-25){const Vt=I.f,te=new K(...Vt).normalize(),yt=t*Math.min(6,Math.max(.5,Math.log10(kt+1e-10)+10)),bt=new jh(te,mt,yt,65535,t*.4,t*.24);Tt.add(bt),G.current.push(bt)}const Ct=I.tau?new K(...I.tau).length():0;if(Ct>1e-25){const Vt=I.tau,te=new K(...Vt).normalize(),yt=t*Math.min(5,Math.max(.4,Math.log10(Ct+1e-10)+8)),bt=new jh(te,mt,yt,16711935,t*.32,t*.2);Tt.add(bt),nt.current.push(bt)}}))},[i,l,y,W]),me.useEffect(()=>{if(l===null){z(null);return}const Tt=i.find(I=>I.id===l);z(Tt?Et(Tt):null)},[l]);const Wt=Tt=>{const I=D.current,re=Y.current;if(!I||!re)return;const $t=I.getBoundingClientRect(),ce=new fe((Tt.clientX-$t.left)/$t.width*2-1,-((Tt.clientY-$t.top)/$t.height)*2+1),wt=new GM;wt.setFromCamera(ce,re);const N=wt.intersectObjects(rt.current);c(N.length>0?N[0].object.userData.id:null)},Gt=()=>{gt.current=!0,s(Tt=>[...Tt,yp({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),w(0)},xe=()=>{l!==null&&(gt.current=!0,s(Tt=>Tt.filter(I=>I.id!==l)),c(null),w(0))},Qe=Tt=>{var I;(I=$.current)==null||I.reset(),it(),gt.current=!0,sR(),xv(Tt,.0025).then(re=>s(re.magnets)),c(null),p(!1),w(0)},Se=(Tt,I,re)=>{const $t=parseFloat(re);if(isNaN($t))return;const wt={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[Tt];if(!wt)return;const[N,E]=wt;Nt(i);const q=i.map(ft=>{if(ft.id!==l)return ft;const mt=[...ft[N]??[0,0,0]];return mt[I]=$t*E,{...ft,[N]:mt}});Nt(q),ht.current=-1,gt.current=!0,s(q),z(ft=>{if(!ft)return ft;const mt={...ft,[Tt]:[...ft[Tt]]};return mt[Tt][I]=pt($t),mt})},_e=me.useCallback(Tt=>{const I=lR(i.map(re=>({...re,pos:re.pos.map($t=>$t/.0025)})),"exported","radius");if(Tt==="copy")navigator.clipboard.writeText(I).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const re=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([I],{type:"application/json"})),download:`magnets_${Date.now()}.json`});re.click(),URL.revokeObjectURL(re.href)}},[i]),Ce=()=>{const Tt=rR(i,l,h);Tt&&(Nt(i),Nt(Tt),gt.current=!0,s(Tt))},se=()=>{m||(gt.current=!0),p(Tt=>!Tt)};return W?Xt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[Xt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[Xt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[Xt.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",Xt.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),Xt.jsx(IR,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:Dt,totalSimTime:L,rotateMoments:x,useGravity:b,magnets:i,selectedId:l,refYId:h,setRefYId:d,onToggle:se,onResetVel:()=>{gt.current=!0,s(Tt=>Tt.map(I=>({...I,vel:[0,0,0],omega:[0,0,0]})))},onPerturb:()=>{gt.current=!0,s(Tt=>Tt.map(I=>uu(I,{pos:Yr(I.pos.map(re=>re+(Math.random()-.5)*.3*.0025))})))},onReframe:Ce,onSimSpeedChange:_,onRotateMomentsChange:M,onGravityChange:T}),Xt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Xt.jsx("button",{onClick:Gt,style:{...ki,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),Xt.jsx("button",{onClick:()=>_e("download"),style:{...ki,flex:1},children:"⬇ 导出"}),Xt.jsx("button",{onClick:()=>_e("copy"),style:{...ki,flex:1},children:"📋 复制"})]}),Xt.jsxs("div",{children:[Xt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),Xt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:F.map(Tt=>Xt.jsx("button",{onClick:()=>Qe(Tt),style:NR,children:Tt},Tt))})]}),l!==null&&Xt.jsx(FR,{selectedId:l,selectedMag:i.find(Tt=>Tt.id===l),isSimulating:m,editDraft:U,setEditDraft:z,onToggle:se,onToggleFixed:()=>{gt.current=!0,s(Tt=>Tt.map(I=>I.id===l?{...I,fixed:!I.fixed}:I))},onRemove:xe,onCommit:Se}),Xt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[Xt.jsx("input",{type:"checkbox",checked:y,onChange:Tt=>v(Tt.target.checked),style:{accentColor:"#4488ff"}}),Xt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),Xt.jsx("div",{ref:D,onClick:Wt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer"}})]}):Xt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:Xt.jsxs("div",{children:[Xt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),Xt.jsx("div",{children:"Loading physics engine..."})]})})}Sy.createRoot(document.getElementById("root")).render(Xt.jsx(me.StrictMode,{children:Xt.jsx(BR,{})}));
