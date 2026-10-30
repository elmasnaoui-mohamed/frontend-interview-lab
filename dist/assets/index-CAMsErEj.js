var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var te=ee.prototype=new b;te.constructor=ee,_(te,y.prototype),te.isPureReactComponent=!0;var ne=Array.isArray;function re(){}var x={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return C(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function D(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(re,re):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,ne(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ne(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=oe(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(D(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function O(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function k(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ce(e){var t=x.T,n={};n.types=t===null?null:t.types,x.T=n;try{var r=e(),i=x.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(re,se)}catch(e){se(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),x.T=t}}function le(e){var t=x.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ce(le.bind(null,e))}var ue={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ue,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return x.H.useMemoCache(e)}},e.addTransitionType=le,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!S.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)S.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:k}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ce,e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},e.use=function(e){return x.H.use(e)},e.useActionState=function(e,t,n){return x.H.useActionState(e,t,n)},e.useCallback=function(e,t){return x.H.useCallback(e,t)},e.useContext=function(e){return x.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return x.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return x.H.useEffect(e,t)},e.useEffectEvent=function(e){return x.H.useEffectEvent(e)},e.useId=function(){return x.H.useId()},e.useImperativeHandle=function(e,t,n){return x.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return x.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return x.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return x.H.useMemo(e,t)},e.useOptimistic=function(e,t){return x.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return x.H.useReducer(e,t,n)},e.useRef=function(e){return x.H.useRef(e)},e.useState=function(e){return x.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return x.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return x.H.useTransition()},e.version=`19.3.1`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,w());else{var t=n(l);t!==null&&ae(ee,t.startTime-e)}}}var te=!1,ne=-1,re=5,x=-1;function S(){return g?!0:!(e.unstable_now()-x<re)}function C(){if(g=!1,te){var t=e.unstable_now();x=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ne),ne=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&S());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():te=!1}}}var w;if(typeof y==`function`)w=function(){y(C)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=C,w=function(){ie.postMessage(null)}}else w=function(){_(C,0)};function ae(t,n){ne=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):re=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ne),ne=-1):h=!0,ae(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,w()))),r},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var ee=null,te=null;function ne(e,t,n){return e===n||e===t&&(ee=e,!0)}function re(e,t,n){return e===n?(te=e,!1):e===t&&(te!==null&&(ee=e),!0)}function x(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function S(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var C=Object.assign,w=Symbol.for(`react.element`),T=Symbol.for(`react.transitional.element`),ie=Symbol.for(`react.portal`),ae=Symbol.for(`react.fragment`),E=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),oe=Symbol.for(`react.consumer`),O=Symbol.for(`react.context`),k=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),le=Symbol.for(`react.memo`),ue=Symbol.for(`react.lazy`),de=Symbol.for(`react.activity`),fe=Symbol.for(`react.legacy_hidden`),pe=Symbol.for(`react.memo_cache_sentinel`),me=Symbol.for(`react.view_transition`),he=Symbol.for(`react.recoverable`),ge=Symbol.iterator;function _e(e){return typeof e!=`object`||!e?null:(e=ge&&e[ge]||e[`@@iterator`],typeof e==`function`?e:null)}var ve=Symbol.for(`react.client.reference`);function ye(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ae:return`Fragment`;case D:return`Profiler`;case E:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`;case de:return`Activity`;case me:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ie:return`Portal`;case O:return e.displayName||`Context`;case oe:return(e._context.displayName||`Context`)+`.Consumer`;case k:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case le:return t=e.displayName||null,t===null?ye(e.type)||`Memo`:t;case ue:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var be=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},Se=[],Ce=-1;function we(e){return{current:e}}function Te(e){0>Ce||(e.current=Se[Ce],Se[Ce]=null,Ce--)}function M(e,t){Ce++,Se[Ce]=e.current,e.current=t}var Ee=we(null),De=we(null),Oe=we(null),ke=we(null);function Ae(e,t){switch(M(Oe,t),M(De,e),M(Ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Te(Ee),M(Ee,e)}function je(){Te(Ee),Te(De),Te(Oe)}function Me(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,M(ke,e)),t=Ee.current;var n=dp(t,e.type);t!==n&&(M(De,e),M(Ee,n))}function Ne(e){De.current===e&&(Te(Ee),Te(De)),ke.current===e&&(Te(ke),sh._currentValue=xe)}var Pe,Fe;function Ie(e){if(Pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Pe=t&&t[1]||``,Fe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Pe+e+Fe}var Le=!1;function Re(e,t){if(!e||Le)return``;Le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Le=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ie(n):``}function ze(e,t){switch(e.tag){case 26:case 27:case 5:return Ie(e.type);case 16:return Ie(`Lazy`);case 13:return e.child!==t&&t!==null?Ie(`Suspense Fallback`):Ie(`Suspense`);case 19:return Ie(`SuspenseList`);case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return Ie(`Activity`);case 30:return Ie(`ViewTransition`);default:return``}}function Be(e){try{var t=``,n=null;do t+=ze(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ve=Object.prototype.hasOwnProperty,He=t.unstable_scheduleCallback,Ue=t.unstable_cancelCallback,We=t.unstable_shouldYield,Ge=t.unstable_requestPaint,Ke=t.unstable_now,qe=t.unstable_getCurrentPriorityLevel,Je=t.unstable_ImmediatePriority,Ye=t.unstable_UserBlockingPriority,Xe=t.unstable_NormalPriority,Ze=t.unstable_LowPriority,Qe=t.unstable_IdlePriority,$e=t.log,et=t.unstable_setDisableYieldValue,tt=null,nt=null;function rt(e){if(typeof $e==`function`&&et(e),nt&&typeof nt.setStrictMode==`function`)try{nt.setStrictMode(tt,e)}catch{}}var it=Math.clz32?Math.clz32:st,at=Math.log,ot=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(at(e)/ot|0)|0}var ct=256,lt=262144,ut=4194304;function dt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=dt(n))):i=dt(o):i=dt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=dt(n))):i=dt(o)):i=dt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function pt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-it(n),i=1<<r;t|=e[r],n&=~i}return t}function ht(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var e=ut;return ut<<=1,!(ut&62914560)&&(ut=4194304),e}function _t(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-it(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&bt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function bt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-it(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function St(e,t){var n=t&-t;return n=n&42?1:Ct(n),(n&(e.suspendedLanes|t))===0?n:0}function Ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Tt(){var e=j.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Et(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var Dt=Math.random().toString(36).slice(2),Ot=`__reactFiber$`+Dt,kt=`__reactProps$`+Dt,At=`__reactContainer$`+Dt,jt=`__reactEvents$`+Dt,Mt=`__reactListeners$`+Dt,Nt=`__reactHandles$`+Dt,Pt=`__reactResources$`+Dt,Ft=`__reactMarker$`+Dt,It=`__reactLoad$`+Dt;function Lt(e){delete e[Ot],delete e[kt],delete e[Mt],delete e[Nt]}function Rt(e){var t;if(t=e[Ot])return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Ot])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function zt(e){if(e=e[Ot]||e[At]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Vt(e){var t=e[Pt];return t||=e[Pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ht(e){e[Ft]=!0}function Ut(e){e[It]=void 0}var Wt=new Set,Gt={};function Kt(e,t){qt(e,t),qt(e+`Capture`,t)}function qt(e,t){for(Gt[e]=t,e=0;e<t.length;e++)Wt.add(t[e])}var Jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Yt={},Xt={};function Zt(e){return Ve.call(Xt,e)?!0:Ve.call(Yt,e)?!1:Jt.test(e)?Xt[e]=!0:(Yt[e]=!0,!1)}var N=!1;function Qt(){var e=N;return N=!1,e}function P(e,t,n){if(Zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function F(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function I(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function $t(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function en(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function tn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nn(e){if(!e._valueTracker){var t=en(e)?`checked`:`value`;e._valueTracker=tn(e,t,``+e[t])}}function L(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=en(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var rn=/[\n"\\]/g;function an(e){return e.replace(rn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function on(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+$t(t)):e.value!==``+$t(t)&&(e.value=``+$t(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):cn(e,$t(n)):o===`number`&&e.value==t?cn(e,$t(e.value)):cn(e,$t(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+$t(s):e.removeAttribute(`name`)}function sn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){nn(e);return}n=n==null?``:``+$t(n),t=t==null?n:``+$t(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),nn(e)}function cn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function un(e,t,n){t!=null&&(t=``+$t(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+$t(n)}function dn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(be(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=$t(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),nn(e)}function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function mn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||pn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function hn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,N=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(mn(e,a,r),N=!0)}else for(var o in t)t.hasOwnProperty(o)&&mn(e,o,t[o])}function gn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var _n=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),vn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yn(e){return vn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function bn(){}var xn=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,wn=null;function Tn(e){var t=zt(e);if(t&&(e=t.stateNode)){var n=e[kt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(on(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+an(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[kt]||null;if(!a)throw Error(i(90));on(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&L(r)}break a;case`textarea`:un(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}}}var En=!1;function Dn(e,t,n){if(En)return e(t,n);En=!0;try{return e(t)}finally{if(En=!1,(Cn!==null||wn!==null)&&(zd(),Cn&&(t=Cn,e=wn,wn=Cn=null,Tn(t),e)))for(t=0;t<e.length;t++)Tn(e[t])}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=n[kt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,An=!1;if(kn)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){An=!0}}),window.addEventListener(`test`,jn,jn),window.removeEventListener(`test`,jn,jn)}catch{An=!1}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=C({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=C({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(C({},qn,{dataTransfer:0})),Xn=zn(C({},Hn,{relatedTarget:0})),Zn=zn(C({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(C({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(C({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(C({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(C({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(C({},Bn,{submitter:0})),cr=zn(C({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),lr=zn(C({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ur=zn(C({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),dr=zn(C({},Bn,{newState:0,oldState:0,source:0})),fr=[9,13,27,32],pr=kn&&`CompositionEvent`in window,mr=null;kn&&`documentMode`in document&&(mr=document.documentMode);var hr=kn&&`TextEvent`in window&&!mr,gr=kn&&(!pr||mr&&8<mr&&11>=mr),_r=` `,vr=!1;function yr(e,t){switch(e){case`keyup`:return fr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function br(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var xr=!1;function Sr(e,t){switch(e){case`compositionend`:return br(t);case`keypress`:return t.which===32?(vr=!0,_r):null;case`textInput`:return e=t.data,e===_r&&vr?null:e;default:return null}}function Cr(e,t){if(xr)return e===`compositionend`||!pr&&yr(e,t)?(e=Fn(),Pn=Nn=Mn=null,xr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return gr&&t.locale!==`ko`?null:t.data;default:return null}}var wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!wr[e.type]:t===`textarea`}function Er(e,t,n,r){Cn?wn?wn.push(r):wn=[r]:Cn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Or=null;function kr(e){Vf(e,0)}function Ar(e){if(L(Bt(e)))return e}function jr(e,t){if(e===`change`)return t}var Mr=!1;if(kn){var Nr;if(kn){var Pr=`oninput`in document;if(!Pr){var Fr=document.createElement(`div`);Fr.setAttribute(`oninput`,`return;`),Pr=typeof Fr.oninput==`function`}Nr=Pr}else Nr=!1;Mr=Nr&&(!document.documentMode||9<document.documentMode)}function Ir(){Dr&&(Dr.detachEvent(`onpropertychange`,Lr),Or=Dr=null)}function Lr(e){if(e.propertyName===`value`&&Ar(Or)){var t=[];Er(t,Or,e,Sn(e)),Dn(kr,t)}}function Rr(e,t,n){e===`focusin`?(Ir(),Dr=t,Or=n,Dr.attachEvent(`onpropertychange`,Lr)):e===`focusout`&&Ir()}function zr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Ar(Or)}function Br(e,t){if(e===`click`)return Ar(t)}function Vr(e,t){if(e===`input`||e===`change`)return Ar(t)}function Hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ur=typeof Object.is==`function`?Object.is:Hr;function Wr(e,t){if(Ur(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ve.call(t,i)||!Ur(e[i],t[i]))return!1}return!0}function Gr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qr(e,t){var n=Kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Kr(n)}}function Jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Zr=kn&&`documentMode`in document&&11>=document.documentMode,Qr=null,$r=null,ei=null,ti=!1;function ni(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||Qr==null||Qr!==Gr(r)||(r=Qr,`selectionStart`in r&&Xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&Wr(ei,r)||(ei=r,r=Jf($r,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ii={animationend:ri(`Animation`,`AnimationEnd`),animationiteration:ri(`Animation`,`AnimationIteration`),animationstart:ri(`Animation`,`AnimationStart`),transitionrun:ri(`Transition`,`TransitionRun`),transitionstart:ri(`Transition`,`TransitionStart`),transitioncancel:ri(`Transition`,`TransitionCancel`),transitionend:ri(`Transition`,`TransitionEnd`)},ai={},oi={};kn&&(oi=document.createElement(`div`).style,`AnimationEvent`in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),`TransitionEvent`in window||delete ii.transitionend.transition);function si(e){if(ai[e])return ai[e];if(!ii[e])return e;var t=ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oi)return ai[e]=t[n];return e}var ci=si(`animationend`),li=si(`animationiteration`),ui=si(`animationstart`),di=si(`transitionrun`),fi=si(`transitionstart`),pi=si(`transitioncancel`),mi=si(`transitionend`),hi=new Map,gi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);gi.push(`scrollEnd`);function _i(e,t){hi.set(e,t),Kt(t,[e])}var vi=0;function yi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=vi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function bi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function xi(e,t){return e=bi(e),t=bi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Si=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ci=[],wi=0,Ti=0;function Ei(){for(var e=wi,t=Ti=wi=0;t<e;){var n=Ci[t];Ci[t++]=null;var r=Ci[t];Ci[t++]=null;var i=Ci[t];Ci[t++]=null;var a=Ci[t];if(Ci[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ai(n,i,a)}}function Di(e,t,n,r){Ci[wi++]=e,Ci[wi++]=t,Ci[wi++]=n,Ci[wi++]=r,Ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Oi(e,t,n,r){return Di(e,t,n,r),ji(e)}function ki(e,t){return Di(e,null,null,t),ji(e)}function Ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-it(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ji(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Mi={};function Ni(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(e,t,n,r){return new Ni(e,t,n,r)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,t){var n=e.alternate;return n===null?(n=Pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Li(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ri(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Fi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ee.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case de:return e=Pi(31,n,t,a),e.elementType=de,e.lanes=o,e;case ae:return zi(n.children,a,o,t);case E:s=8,a|=24;break;case D:return e=Pi(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case se:return e=Pi(13,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return e=Pi(19,n,t,a),e.elementType=ce,e.lanes=o,e;case fe:case me:return e=a|32,e=Pi(30,n,t,e),e.elementType=me,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case O:s=10;break a;case oe:s=9;break a;case k:s=11;break a;case le:s=14;break a;case ue:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function zi(e,t,n,r){return e=Pi(7,e,r,t),e.lanes=n,e}function Bi(e,t,n){return e=Pi(6,e,null,t),e.lanes=n,e}function Vi(e){var t=Pi(18,null,null,0);return t.stateNode=e,t}function Hi(e,t,n){return t=Pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ui=new WeakMap;function Wi(e,t){if(typeof e==`object`&&e){var n=Ui.get(e);return n===void 0?(t={value:e,source:t,stack:Be(t)},Ui.set(e,t),t):n}return{value:e,source:t,stack:Be(t)}}var Gi=[],Ki=0,qi=null,Ji=0,Yi=[],Xi=0,Zi=null,Qi=1,$i=``;function ea(e,t){Gi[Ki++]=Ji,Gi[Ki++]=qi,qi=e,Ji=t}function ta(e,t,n){Yi[Xi++]=Qi,Yi[Xi++]=$i,Yi[Xi++]=Zi,Zi=e;var r=Qi;e=$i;var i=32-it(r)-1;r&=~(1<<i),n+=1;var a=32-it(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qi=1<<32-it(t)+i|n<<i|r,$i=a+e}else Qi=1<<a|n<<i|r,$i=e}function na(e){e.return!==null&&(ea(e,1),ta(e,1,0))}function ra(e){for(;e===qi;)qi=Gi[--Ki],Gi[Ki]=null,Ji=Gi[--Ki],Gi[Ki]=null;for(;e===Zi;)Zi=Yi[--Xi],Yi[Xi]=null,$i=Yi[--Xi],Yi[Xi]=null,Qi=Yi[--Xi],Yi[Xi]=null}function ia(e,t){Yi[Xi++]=Qi,Yi[Xi++]=$i,Yi[Xi++]=Zi,Qi=t.id,$i=t.overflow,Zi=e}var aa=null,R=null,z=!1,oa=null,sa=!1,ca=Error(i(519));function la(e){throw ha(Wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ca}function ua(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ot]=e,t[kt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),sn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||la(e,!0)}function da(e){for(aa=e.return;aa;)switch(aa.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:aa=aa.return}}function fa(e){if(e!==aa)return!1;if(!z)return da(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&R&&la(e),da(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=dm(e)}else t===27?(t=R,Sp(e.type)?(e=um,um=null,R=e):R=t):R=aa?lm(e.stateNode.nextSibling):null;return!0}function pa(){R=aa=null,z=!1}function ma(){var e=oa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),oa=null),e}function ha(e){oa===null?oa=[e]:oa.push(e)}var ga=we(null),_a=null,va=null;function ya(e,t,n){M(ga,t._currentValue),t._currentValue=n}function ba(e){e._currentValue=ga.current,Te(ga)}function xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Sa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),xa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),xa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),xa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ca(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ur(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ke.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Sa(t,e,n,r),t.flags|=262144,e!==null}function wa(e){for(e=e.firstContext;e!==null;){if(!Ur(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){_a=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ea(e){return Oa(_a,e)}function Da(e,t){return _a===null&&Ta(e),Oa(e,t)}function Oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},va===null){if(e===null)throw Error(i(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return n}var ka=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=t.unstable_scheduleCallback,ja=t.unstable_NormalPriority,Ma={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Na(){return{controller:new ka,data:new Map,refCount:0}}function Pa(e){e.refCount--,e.refCount===0&&Aa(ja,function(){e.controller.abort()})}function Fa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ia=null;function La(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ra=null,za=0,Ba=0,Va=null;function Ha(e,t){if(Ra===null){var n=Ra=[];za=0,Ba=Pf(),Va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return za++,t.then(Ua,Ua),t}function Ua(){if(--za===0&&(Ia=null,Ra!==null)){Va!==null&&(Va.status=`fulfilled`);var e=Ra;Ra=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ga=A.S;A.S=function(e,t){if(hd=Ke(),typeof t==`object`&&t&&typeof t.then==`function`&&Ha(e,t),Ia!==null)for(var n=bf;n!==null;)Fa(n,Ia),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Fa(r,n),r=r.next;if(Ba!==0){r=Ia,r===null&&(r=Ia=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ga!==null&&Ga(e,t)};var Ka=we(null);function qa(){var e=Ka.current;return e===null?q.pooledCache:e}function Ja(e,t){t===null?M(Ka,Ka.current):M(Ka,t.pool)}function Ya(){var e=qa();return e===null?null:{parent:Ma._currentValue,pool:e}}var Xa=Error(i(460)),Za=Error(i(474)),Qa=Error(i(542)),$a={then:function(){}};function eo(e){return e=e.status,e===`fulfilled`||e===`rejected`}function to(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ao(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(bn,bn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ao(e),e}throw ro=t,Xa}}function no(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ro=e,Xa):e}}var ro=null;function io(){if(ro===null)throw Error(i(459));var e=ro;return ro=null,e}function ao(e){if(e===Xa||e===Qa)throw Error(i(483))}var oo=null,so=0;function co(e){var t=so;return so+=1,oo===null&&(oo=[]),to(oo,e,t)}function lo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function uo(e,t){throw t.$$typeof===w?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function fo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ae?(e=d(e,t,n.props.children,r,n.key),lo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ue&&no(i)===t.type)?(t=a(t,n.props),lo(t,n),t.return=e,t):(t=Ri(n.type,n.key,n.props,null,e.mode,r),lo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=zi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case T:return n=Ri(t.type,t.key,t.props,null,e.mode,n),lo(n,t),n.return=e,n;case ie:return t=Hi(t,e.mode,n),t.return=e,t;case ue:return t=no(t),f(e,t,n)}if(be(t)||_e(t))return t=zi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,co(t),n);if(t.$$typeof===O)return f(e,Da(e,t),n);uo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case T:return n.key===i?l(e,t,n,r):null;case ie:return n.key===i?u(e,t,n,r):null;case ue:return n=no(n),p(e,t,n,r)}if(be(n)||_e(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,co(n),r);if(n.$$typeof===O)return p(e,t,Da(e,n),r);uo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case T:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ie:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ue:return r=no(r),m(e,t,n,r,i)}if(be(r)||_e(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,co(r),i);if(r.$$typeof===O)return m(e,t,n,Da(t,r),i);uo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&ea(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&ea(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&ea(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&ea(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&ea(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&ea(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ae&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case T:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ae){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),lo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ue&&no(l)===r.type){n(e,r.sibling),c=a(r,o.props),lo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ae?(c=zi(o.props.children,e.mode,c,o.key),lo(c,o),c.return=e,e=c):(c=Ri(o.type,o.key,o.props,null,e.mode,c),lo(c,o),c.return=e,e=c)}return s(e);case ie:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Hi(o,e.mode,c),c.return=e,e=c}return s(e);case ue:return o=no(o),_(e,r,o,c)}if(be(o))return h(e,r,o,c);if(_e(o)){if(l=_e(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,co(o),c);if(o.$$typeof===O)return _(e,r,Da(e,o),c);uo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{so=0;var i=_(e,t,n,r);return oo=null,i}catch(t){if(t===Xa||t===Qa)throw t;var a=Pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var po=fo(!0),mo=fo(!1),ho=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ji(e),Ai(e,null,n),t}return Di(e,r,t,n),ji(e)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}function xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function Co(){if(So){var e=Va;if(e!==null)throw e}}function wo(e,t,n,r){So=!1;var i=e.updateQueue;ho=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ba&&(So=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=C({},d,f);break a;case 2:ho=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function To(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)To(n[e],t)}var Do=we(null),Oo=we(0);function ko(e,t){e=id,M(Oo,e),M(Do,t),id=e|t.baseLanes}function Ao(){M(Oo,id),M(Do,Do.current)}function jo(){id=Oo.current,Te(Do),Te(Oo)}var Mo=we(null),B=null;function V(e){var t=e.alternate;M(Lo,Lo.current&1),M(Mo,e),B===null&&(t===null||Do.current!==null||t.memoizedState!==null)&&(B=e)}function No(e){M(Lo,Lo.current),M(Mo,e),B===null&&(B=e)}function Po(e){e.tag===22?(M(Lo,Lo.current),M(Mo,e),B===null&&(B=e)):Fo()}function Fo(){M(Lo,Lo.current),M(Mo,Mo.current)}function Io(e){Te(Mo),B===e&&(B=null),Te(Lo)}var Lo=we(0);function Ro(e,t){M(Mo,Mo.current),M(Lo,t)}function zo(e){Te(Lo),Te(Mo),B===e&&(B=null)}function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=0,H=null,U=null,Ho=null,Uo=!1,Wo=!1,Go=!1,Ko=0,qo=0,Jo=null,Yo=0;function Xo(){throw Error(i(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ur(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,a){return Vo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?hc:gc,Go=!1,a=n(r,i),Go=!1,Wo&&(a=es(t,n,r,i)),$o(e),a}function $o(e){A.H=mc;var t=U!==null&&U.next!==null;if(Vo=0,Ho=U=H=null,Uo=!1,qo=0,Jo=null,t)throw Error(i(300));e===null||Nc||(e=e.dependencies,e!==null&&wa(e)&&(Nc=!0))}function es(e,t,n,r){H=e;var a=0;do{if(Wo&&(Jo=null),qo=0,Wo=!1,25<=a)throw Error(i(301));if(a+=1,Ho=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=_c,o=t(n,r)}while(Wo);return o}function ts(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?cs(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function ns(){var e=Ko!==0;return Ko=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}Vo=0,Ho=U=H=null,Wo=!1,qo=Ko=0,Jo=null}function as(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e,Ho}function os(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=Ho===null?H.memoizedState:Ho.next;if(t!==null)Ho=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e}return Ho}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=qo;return qo+=1,Jo===null&&(Jo=[]),e=to(Jo,e,t),t=H,(Ho===null?t.memoizedState:Ho.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?hc:gc),e}function ls(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return cs(e);if(e.$$typeof===he)return;if(e.$$typeof===O)return Ea(e)}throw Error(i(438,String(e)))}function us(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ss(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=pe;return t.index++,n}function ds(e,t){return typeof t==`function`?t(e):t}function fs(e){return ps(os(),U,e)}function ps(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Vo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ba&&(d=!0);else if((Vo&p)===p){u=u.next,p===Ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,od|=p;f=u.action,Go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ur(o,e.memoizedState)&&(Nc=!0,d&&(n=Va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ms(e){var t=os(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ur(o,t.memoizedState)||(Nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(e,t,n){var r=H,a=os(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ur((U||a).memoizedState,n);if(s&&(a.memoizedState=n,Nc=!0),a=a.queue,Bs(vs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ho!==null&&!!(Ho.memoizedState.tag&1),Fs(e?9:8,{destroy:void 0},_s.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Vo&127||gs(r,t,n)}return n}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=ss(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _s(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&bs(e)}function vs(e,t,n){return n(function(){ys(t)&&bs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ur(e,n)}catch{return!0}}function bs(e){var t=ki(e,2);t!==null&&Pd(t,e,2)}function xs(e){var t=as();if(typeof e==`function`){var n=e;if(e=n(),Go){rt(!0);try{n()}finally{rt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function Ss(e,t,n,r){return e.baseState=n,ps(e,U,typeof r==`function`?r:ds)}function Cs(e,t,n,r,a){if(dc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ws(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ws(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};o.types=a===null?null:a.types,A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Ts(e,t,s)}catch(n){Ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Ts(e,t,a)}catch(n){Ds(e,t,n)}}function Ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Es(e,t,n)},function(n){return Ds(e,t,n)}):Es(e,t,n)}function Es(e,t,n){t.status=`fulfilled`,t.value=n,Os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ws(e,n)))}function Ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Os(t),t=t.next;while(t!==r)}e.action=null}function Os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ks(e,t){return t}function As(e,t){if(z){var n=q.formState;if(n!==null){a:{var r=H;if(z){if(R){b:{for(var i=R,a=sa;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){R=lm(i.nextSibling),r=i.data===`F!`;break a}}la(r)}r=!1}r&&(t=n[0])}}return n=as(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},n.queue=r,n=cc.bind(null,H,r),r.dispatch=n,r=xs(!1),a=uc.bind(null,H,!1,r.queue),r=as(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Cs.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function js(e){return Ms(os(),U,e)}function Ms(e,t,n){if(t=ps(e,t,ks)[0],e=fs(ds)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=cs(t)}catch(e){throw e===Xa?Qa:e}else r=t;t=os();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Fs(9,{destroy:void 0},Ns.bind(null,i,n),null)),[r,a,e]}function Ns(e,t){e.action=t}function Ps(e){var t=os(),n=U;if(n!==null)return Ms(t,n,e);os(),t=t.memoizedState,n=os();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=ss(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(){return os().memoizedState}function Ls(e,t,n,r){var i=as();H.flags|=e,i.memoizedState=Fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Rs(e,t,n,r){var i=os();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&Zo(r,U.memoizedState.deps)?i.memoizedState=Fs(t,a,n,r):(H.flags|=e,i.memoizedState=Fs(1|t,a,n,r))}function zs(e,t){Ls(8390656,8,e,t)}function Bs(e,t){Rs(2048,8,e,t)}function Vs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=ss(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hs(e){var t=os().memoizedState;return Vs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Rs(4,2,e,t)}function Ws(e,t){return Rs(4,4,e,t)}function Gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n==null?null:n.concat([e]),Rs(4,4,Gs.bind(null,t,e),n)}function qs(){}function Js(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Zo(t,r[1]))return r[0];if(r=e(),Go){rt(!0);try{e()}finally{rt(!1)}}return n.memoizedState=[r,t],r}function Xs(e,t,n){return n===void 0||Vo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),H.lanes|=e,od|=e,n)}function Zs(e,t,n,r){return Ur(n,t)?n:Do.current===null?!(Vo&106)||Vo&1073741824&&!(Y&261930)?(Nc=!0,e.memoizedState=n):(e=Md(),H.lanes|=e,od|=e,t):(e=Xs(e,n,r),Ur(e,t)||(Nc=!0),e)}function Qs(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};s.types=o===null?null:o.types,A.T=s,uc(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?lc(e,t,Wa(c,r),jd(e)):lc(e,t,r,jd(e))}catch(n){lc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function $s(){}function ec(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=tc(e).queue;Qs(e,a,t,xe,n===null?$s:function(){return nc(e),n(r)})}function tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:xe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nc(e){var t=tc(e);t.next===null&&(t=e.alternate.memoizedState),lc(e,t.next.queue,{},jd())}function rc(){return Ea(sh)}function ic(){return os().memoizedState}function ac(){return os().memoizedState}function oc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=vo(n);var r=yo(t,e,n);r!==null&&(Pd(r,t,n),bo(r,t,n)),t={cache:Na()},e.payload=t;return}t=t.return}}function sc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e)?fc(t,n):(n=Oi(e,t,n,r),n!==null&&(Pd(n,e,r),pc(n,t,r)))}function cc(e,t,n){lc(e,t,n,jd())}function lc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ur(s,o))return Di(e,t,i,0),q===null&&Ei(),!1}catch{}if(n=Oi(e,t,i,r),n!==null)return Pd(n,e,r),pc(n,t,r),!0}return!1}function uc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(t)throw Error(i(479))}else t=Oi(e,n,r,2),t!==null&&Pd(t,e,2)}function dc(e){var t=e.alternate;return e===H||t!==null&&t===H}function fc(e,t){Wo=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}var mc={readContext:Ea,use:ls,useCallback:Xo,useContext:Xo,useEffect:Xo,useImperativeHandle:Xo,useLayoutEffect:Xo,useInsertionEffect:Xo,useMemo:Xo,useReducer:Xo,useRef:Xo,useState:Xo,useDebugValue:Xo,useDeferredValue:Xo,useTransition:Xo,useSyncExternalStore:Xo,useId:Xo,useHostTransitionStatus:Xo,useFormState:Xo,useActionState:Xo,useOptimistic:Xo,useMemoCache:Xo,useCacheRefresh:Xo,useEffectEvent:Xo},hc={readContext:Ea,use:ls,useCallback:function(e,t){return as().memoizedState=[e,t===void 0?null:t],e},useContext:Ea,useEffect:zs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ls(4194308,4,Gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var n=as();t=t===void 0?null:t;var r=e();if(Go){rt(!0);try{e()}finally{rt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=as();if(n!==void 0){var i=n(t);if(Go){rt(!0);try{n(t)}finally{rt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=sc.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=as();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=cc.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){return Xs(as(),e,t)},useTransition:function(){var e=xs(!1);return e=Qs.bind(null,H,e.queue,!0,!1),as().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=as();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||gs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,zs(vs.bind(null,r,o,e),[e]),r.flags|=2048,Fs(9,{destroy:void 0},_s.bind(null,r,o,n,t),null),n},useId:function(){var e=as(),t=q.identifierPrefix;if(z){var n=$i,r=Qi;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:As,useActionState:As,useOptimistic:function(e){var t=as();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=uc.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:us,useCacheRefresh:function(){return as().memoizedState=oc.bind(null,H)},useEffectEvent:function(e){var t=as(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:Ea,use:ls,useCallback:Js,useContext:Ea,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:fs,useRef:Is,useState:function(){return fs(ds)},useDebugValue:qs,useDeferredValue:function(e,t){return Zs(os(),U.memoizedState,e,t)},useTransition:function(){var e=fs(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:js,useActionState:js,useOptimistic:function(e,t){return Ss(os(),U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs},_c={readContext:Ea,use:ls,useCallback:Js,useContext:Ea,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:ms,useRef:Is,useState:function(){return ms(ds)},useDebugValue:qs,useDeferredValue:function(e,t){var n=os();return U===null?Xs(n,e,t):Zs(n,U.memoizedState,e,t)},useTransition:function(){var e=ms(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=os();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ss(n,U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs};function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=vo(r);i.payload=t,n!=null&&(i.callback=n),t=yo(e,i,r),t!==null&&(Pd(t,e,r),bo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=vo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yo(e,i,r),t!==null&&(Pd(t,e,r),bo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=vo(n);r.tag=2,t!=null&&(r.callback=t),t=yo(e,r,n),t!==null&&(Pd(t,e,n),bo(t,e,n))}};function bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,a):!0}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Sc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=C({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Cc(e){Si(e)}function wc(e){console.error(e)}function Tc(e){Si(e)}function Ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){return n=vo(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(e,t)},n}function kc(e){return e=vo(e),e.tag=3,e}function Ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Dc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function jc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ca(t,n,a,!0),n=Mo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return B===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===$a?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===$a?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(z)return t=Mo.current,t===null?(r!==ca&&(t=Error(i(423),{cause:r}),ha(Wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Wi(r,n),a=Oc(e.stateNode,r,a),xo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ca&&(e=Error(i(422),{cause:r}),ha(Wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Wi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oc(n.stateNode,r,e),xo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=kc(a),Ac(a,e,n,r),xo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Mc=Error(i(461)),Nc=!1;function Pc(e,t,n,r){t.child=e===null?mo(t,null,n,r):po(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ta(t),r=Qo(e,t,n,o,a,i),s=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(z&&s&&na(t),t.flags|=1,Pc(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Lc(e,t,a,r,i)):(e=Ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ul(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Wr:n,n(o,r)&&e.ref===t.ref)return ll(e,t,i)}return t.flags|=1,e=Ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Wr(a,r)&&e.ref===t.ref){if(Nc=!1,t.pendingProps=r=a,ul(e,i))e.flags&131072&&(Nc=!0);else return t.lanes=e.lanes,ll(e,t,i)}}return Gc(e,t,n,r,i)}function Rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Bc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ja(t,a===null?null:a.cachePool),a===null?Ao():ko(t,a),Po(t);else return r=t.lanes=536870912,Bc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ja(t,null),Ao(),Fo()):(Ja(t,a.cachePool),ko(t,a),Fo(),t.memoizedState=null);return Pc(e,t,i,n),t.child}function zc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bc(e,t,n,r,i){var a=qa();return a=a===null?null:{parent:Ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ja(t,null),Ao(),Po(t),e!==null&&Ca(e,t,r,!0),t.childLanes=i,null}function Vc(e,t){return t=el({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hc(e,t,n){return po(t,e.child,null,n),e=Vc(t,t.pendingProps),e.flags|=2,Io(t),t.memoizedState=null,e}function Uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=Vc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zc(null,e);if(No(t),(e=R)?(e=am(e,sa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zi===null?null:{id:Qi,overflow:$i},retryLane:536870912,hydrationErrors:null},n=Vi(e),n.return=t,t.child=n,aa=t,R=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return Vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(No(t),a){if(t.flags&256)t.flags&=-257,t=Hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Nc||Ca(e,t,n,!1),a=(n&e.childLanes)!==0,Nc||a){if(Do.current===null){if(r=q,r!==null&&(s=St(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ki(e,s),Pd(r,e,s),Mc;Kd()}t=Hc(e,t,n)}else e=o.treeContext,R=lm(s.nextSibling),aa=t,z=!0,oa=null,sa=!1,e!==null&&ia(t,e),t=Vc(t,r),t.flags|=134221824;return t}return e=Ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gc(e,t,n,r,i){return Ta(t),n=Qo(e,t,n,r,void 0,i),r=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(z&&r&&na(t),t.flags|=1,Pc(e,t,n,i),t.child)}function Kc(e,t,n,r,i,a){return Ta(t),t.updateQueue=null,n=es(t,r,n,i),$o(e),r=ns(),e!==null&&!Nc?(rs(e,t,a),ll(e,t,a)):(z&&r&&na(t),t.flags|=1,Pc(e,t,n,a),t.child)}function qc(e,t,n,r,i){if(Ta(t),t.stateNode===null){var a=Mi,o=n.contextType;typeof o==`object`&&o&&(a=Ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},go(t),o=n.contextType,a.context=typeof o==`object`&&o?Ea(o):Mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(vc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&yc.enqueueReplaceState(a,a.state,null),wo(t,r,a,i),Co(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Sc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Mi,typeof u==`object`&&u&&(o=Ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&xc(t,a,r,o),ho=!1;var f=t.memoizedState;a.state=f,wo(t,r,a,i),Co(),l=t.memoizedState,s||f!==l||ho?(typeof d==`function`&&(vc(t,n,d,r),l=t.memoizedState),(c=ho||bc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,_o(e,t),o=t.memoizedProps,u=Sc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Mi,typeof l==`object`&&l&&(c=Ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&xc(t,a,r,c),ho=!1,f=t.memoizedState,a.state=f,wo(t,r,a,i),Co();var p=t.memoizedState;o!==d||f!==p||ho||e!==null&&e.dependencies!==null&&wa(e.dependencies)?(typeof s==`function`&&(vc(t,n,s,r),p=t.memoizedState),(u=ho||bc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&wa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Wc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=po(t,e.child,null,i),t.child=po(t,null,n,i)):Pc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ll(e,t,i),e}function Jc(e,t,n,r){return pa(),t.flags|=256,Pc(e,t,n,r),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:Ya()}}function Zc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Lo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(z){if(i?V(t):Fo(),(e=R)?(e=am(e,sa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zi===null?null:{id:Qi,overflow:$i},retryLane:536870912,hydrationErrors:null},n=Vi(e),n.return=t,t.child=n,aa=t,R=null)):e=null,e===null)throw la(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Fo(),i=t.mode,a=el({mode:`hidden`,children:a},i),r=zi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Xc(n),r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(null,r)):(V(t),$c(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return nl(e,t,a,o,r,c,s,n)}return i?(Fo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ii(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=zi(i,a,n,null),i.flags|=2):i=Ii(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,zc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Xc(n):(a=i.cachePool,a===null?a=Ya():(s=Ma._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(e.child,r)):(V(t),n=e.child,e=n.sibling,n=Ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=el({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function el(e,t){return e=Pi(22,e,null,t),e.lanes=0,e}function tl(e,t,n){return po(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(V(t),t.flags&=-257,tl(e,t,c)):t.memoizedState===null?(Fo(),o=a.fallback,s=t.mode,a=el({mode:`visible`,children:a.children},s),o=zi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,po(t,e.child,null,c),a=t.child,a.memoizedState=Xc(c),a.childLanes=Zc(e,r,c),t.memoizedState=Yc,zc(null,a)):(Fo(),t.child=e.child,t.flags|=128,null);if(V(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ha({value:a,source:null,stack:null})),tl(e,t,c)}if(Nc||Ca(e,t,c,!1),r=(c&e.childLanes)!==0,Nc||r){if(Do.current!==null)return tl(e,t,c);if(r=q,r!==null&&(a=St(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,ki(e,a),Pd(r,e,a),Mc;return om(o)||Kd(),tl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,R=lm(o.nextSibling),aa=t,z=!0,oa=null,sa=!1,e!==null&&ia(t,e),t=$c(t,a.children),t.flags|=134221824,t)}function rl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xa(e.return,t,n)}function il(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bo(n)===null&&(t=e),e=e.sibling}return t}function al(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ol(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Lo.current;if(t.flags&128)return Ro(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ro(t,o),i===`backwards`&&e!==null?(ol(e),Pc(e,t,r,n),ol(e)):Pc(e,t,r,n),r=z?Ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rl(e,n,t);else if(e.tag===19)rl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ol(t)),al(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,a,r);break;case`together`:al(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,a,r)}return t.child}function cl(e,t,n){var r=t.pendingProps;return ya(t,t.type,r.value),Pc(e,t,r.children,n),t.child}function ll(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ca(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ul(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&wa(e)))}function dl(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),ya(t,Ma,e.memoizedState.cache),pa();break;case 27:case 5:Me(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,No(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return V(t),t.flags|=128,null;r=Ca(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Qc(e,t,n):(V(t),e=ll(e,t,n),e===null?null:e.sibling)}V(t);break;case 19:if(t.flags&128)return sl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ca(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return sl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ro(t,Lo.current),r)break;return null;case 22:return t.lanes=0,Rc(e,t,n,t.pendingProps);case 24:ya(t,Ma,e.memoizedState.cache)}return ll(e,t,n)}function fl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Nc=!0;else{if(!ul(e,n)&&!(t.flags&128))return Nc=!1,dl(e,t,n);Nc=!!(e.flags&131072)}}else Nc=!1,z&&t.flags&1048576&&ta(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=no(t.elementType),t.type=e,typeof e==`function`)Fi(e)?(r=Sc(e,r),t.tag=1,t=qc(null,t,e,r,n)):(t.tag=0,t=Gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===k){t.tag=11,t=Fc(null,t,e,r,n);break a}if(a===le){t.tag=14,t=Ic(null,t,e,r,n);break a}if(a===O){t.tag=10,t.type=e,t=cl(null,t,n);break a}}throw t=ye(e)||e,Error(i(306,t,``))}}return t;case 0:return Gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Sc(r,t.pendingProps),qc(e,t,r,a,n);case 3:a:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,_o(e,t),wo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ya(t,Ma,r),r!==o.cache&&Sa(t,[Ma],n,!0),Co(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Jc(e,t,r,n);break a}if(r!==a){a=Wi(Error(i(424)),t),ha(a),t=Jc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(R=lm(e.firstChild),aa=t,z=!0,oa=null,sa=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(pa(),r===a){t=ll(e,t,n);break a}Pc(e,t,r,n)}t=t.child}return t;case 26:return Wc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(t.stateNode=fp(t.type,t.pendingProps,Oe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Me(t),e===null&&z&&(r=t.stateNode=hm(t.type,t.pendingProps,Oe.current),aa=t,sa=!0,a=R,Sp(t.type)?(um=a,R=lm(r.firstChild)):R=a),Pc(e,t,t.pendingProps.children,n),Wc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=R)&&(r=rm(r,t.type,t.pendingProps,sa),r===null?a=!1:(t.stateNode=r,aa=t,R=lm(r.firstChild),sa=!1,a=!0)),a||la(t)),Me(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Qo(e,t,ts,null,null,n),sh._currentValue=a),Wc(e,t),Pc(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=R)&&(n=im(n,t.pendingProps,sa),n===null?e=!1:(t.stateNode=n,aa=t,R=null,e=!0)),e||la(t)),null;case 13:return Qc(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=po(t,null,r,n):Pc(e,t,r,n),t.child;case 11:return Fc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Wc(e,t),Pc(e,t,r,n),t.child;case 8:return Pc(e,t,t.pendingProps.children,n),t.child;case 12:return Pc(e,t,t.pendingProps.children,n),t.child;case 10:return cl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ta(t),a=Ea(a),r=r(a),t.flags|=1,Pc(e,t,r,n),t.child;case 14:return Ic(e,t,t.type,t.pendingProps,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 19:return sl(e,t,n);case 31:return Uc(e,t,n);case 22:return Rc(e,t,n,t.pendingProps);case 24:return Ta(t),r=Ea(Ma),e===null?(a=qa(),a===null&&(a=q,o=Na(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},go(t),ya(t,Ma,a)):((e.lanes&n)!==0&&(_o(e,t),wo(t,null,null,n),Co()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ya(t,Ma,r),r!==a.cache&&Sa(t,[Ma],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,Ma,r))),Pc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:z&&na(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Wc(e,t),Pc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function pl(e){e.flags|=4}function ml(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw ro=$a,Za}}else e.flags&=-16777217}function hl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw ro=$a,Za}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:gt(),e.lanes|=t,ud|=t)}function _l(e,t){if(!z)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function vl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yl(e,t,n){var r=t.pendingProps;switch(ra(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vl(t),null;case 1:return vl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ba(Ma),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fa(t)?pl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ma())),vl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(pl(t),o===null?(vl(t),ml(t,a,null,r,n)):(vl(t),hl(t,o))):o?o===e.memoizedState?(vl(t),t.flags&=-16777217):(pl(t),vl(t),hl(t,o)):(e=e.memoizedProps,e!==r&&pl(t),vl(t),ml(t,a,e,r,n)),null;case 27:if(Ne(t),n=Oe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return vl(t),t.subtreeFlags&=-33554433,null}e=Ee.current,fa(t)?ua(t,e):(e=hm(a,r,n),t.stateNode=e,pl(t))}return vl(t),t.subtreeFlags&=-33554433,null;case 5:if(Ne(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return vl(t),t.subtreeFlags&=-33554433,null}if(o=Ee.current,fa(t))ua(t,o);else{var s=lp(Oe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ot]=t,o[kt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&pl(t)}}return vl(t),t.subtreeFlags&=-33554433,ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Oe.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=aa,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||la(t,!0)}else e=lp(e).createTextNode(r),e[Ot]=t,t.stateNode=e}return vl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=fa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ot]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;vl(t),e=!1}else n=ma(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Io(t),t):(Io(t),null);if(t.flags&128)throw Error(i(558))}return vl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ot]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;vl(t),a=!1}else a=ma(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Io(t),t):(Io(t),null)}return Io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),gl(t,t.updateQueue),vl(t),null);case 4:return je(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,vl(t),null;case 10:return ba(t.type),vl(t),null;case 19:if(zo(t),r=t.memoizedState,r===null)return vl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)_l(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bo(e),o!==null){for(t.flags|=128,_l(r,!1),e=o.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Li(n,e),n=n.sibling;return Ro(t,Lo.current&1|2),z&&ea(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ke()>gd&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Bo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),_l(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!z)return vl(t),null}else 2*Ke()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ke(),e.sibling=null,o=Lo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||z?Ro(t,o):(n=o,M(Mo,t),M(Lo,n),B===null&&(B=t)),z&&ea(t,r.treeForkCount),e}return vl(t),null;case 22:case 23:return Io(t),jo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(vl(t),t.subtreeFlags&6&&(t.flags|=8192)):vl(t),n=t.updateQueue,n!==null&&gl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Te(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ba(Ma),vl(t),null;case 25:return null;case 30:return t.flags|=33554432,vl(t),null}throw Error(i(156,t.tag))}function bl(e,t){switch(ra(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ba(Ma),je(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ne(t),null;case 31:if(t.memoizedState!==null){if(Io(t),t.alternate===null)throw Error(i(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return je(),null;case 10:return ba(t.type),null;case 22:case 23:return Io(t),jo(),e!==null&&Te(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ba(Ma),null;case 25:return null;default:return null}}function xl(e,t){switch(ra(t),t.tag){case 3:ba(Ma),je();break;case 26:case 27:case 5:Ne(t);break;case 4:je();break;case 31:t.memoizedState!==null&&Io(t);break;case 13:Io(t);break;case 19:zo(t);break;case 10:ba(t.type);break;case 22:case 23:Io(t),jo(),e!==null&&Te(Ka);break;case 24:ba(Ma)}}function Sl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Cl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function wl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Eo(t,n)}catch(t){Z(e,e.return,t)}}}function Tl(e,t,n){n.props=Sc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function El(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=yi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);m(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Dl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ol(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function kl(e){for(var t=e.return;t!==null&&(Ml(t)&&em(e.stateNode,t.stateNode),!jl(t));)t=t.return}function Al(e){for(var t=e.return;t!==null&&(Ml(t)&&tm(e.stateNode,t.stateNode),!jl(t));)t=t.return}function jl(e){return e.tag===5||e.tag===3||e.tag===27}function Ml(e){return e&&e.tag===7&&e.stateNode!==null}function Nl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Pl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[kt]=t}catch(t){Z(e,e.return,t)}}function Fl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Il(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),Ol(e,r),N=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ol(e,r),N=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Ot]=e,t[kt]=n}catch(t){Z(e,e.return,t)}}var Bl=!1,Vl=null;function Hl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Bl=!0)}var Ul=null;function Wl(){var e=Ul;return Ul=null,e}var Gl=0;function Kl(e,t,n,r,i){return Gl=0,ql(e.child,t,n,r,i)}function ql(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Bl=!0,Tp(o,Gl===0?t:t+`_`+Gl,n),Gl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||ql(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Jl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Jl(e.child,t),e=e.sibling}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Yl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=xi(t.default,t.share),t!==`none`&&(Kl(e,n,t,null,!1)||Jl(e.child,!1))}e=e.sibling}}function Xl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=yi(r,n),a=xi(r.default,n.paired?r.share:r.enter);a===`none`?Yl(e):Kl(e,i,a,null,!1)?(Yl(e),n.paired||t||Nd(e,r.onEnter)):Jl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e,t),e=e.sibling;else Yl(e)}function Zl(e){if(Vl!==null&&Vl.size!==0){var t=Vl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=xi(n.default,n.share);if(a!==`none`&&(Kl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Jl(e.child,!1)),t.delete(r),t.size===0)break}}}Zl(e)}e=e.sibling}}}function Ql(e){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode),r=Vl===null?void 0:Vl.get(n),i=xi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Kl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Vl.delete(n),Nd(e,t.onShare)):Jl(e.child,!1)),Vl!==null&&Zl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e),e=e.sibling;else Vl!==null&&Zl(e)}function $l(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode);t=xi(t.default,t.update),e.flags&=-5,t!==`none`&&Kl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&$l(e);e=e.sibling}}function eu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Jl(e.child,!1))}eu(e)}e=e.sibling}}function tu(e){if(e.tag===30)e.stateNode.paired=null,Jl(e.child,!1),eu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)tu(e),e=e.sibling;else eu(e)}function nu(e){for(e=e.child;e!==null;)e.tag===30?Jl(e.child,!1):e.subtreeFlags&33554432&&nu(e),e=e.sibling}function ru(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Gl<a.length){var l=a[Gl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Gl===0?n:n+`_`+Gl,i),s&&e.flags&4||(Ul===null&&(Ul=[]),Ul.push(c,Gl===0?r:r+`_`+Gl,t.memoizedProps)),Gl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:ru(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function iu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=yi(n,r),a=xi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Gl=0,i=ru(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&iu(e,t);e=e.sibling}}var au=!1,W=!1,ou=!1,su=!1,cu=typeof WeakSet==`function`?WeakSet:Set,lu=null,uu=!1,du=!1,fu=!1,pu=!1;function mu(e,t,n){if(e=e.containerInfo,sp=gh,e=Yr(e),Xr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,lu=t,t=n?9270:1024;lu!==null;){if(e=lu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Hl(e),G(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Ql(r),G(n);continue}if(r!==null&&r.memoizedState!==null){n&&Hl(e),G(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,lu=r):(n&&$l(e),G(n))}}Vl=null}function G(e){for(;lu!==null;){var t=lu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Sc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=yi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=xi(a.default,a.update),a!==`none`&&Kl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,lu=r;break}lu=t.return}}function hu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&Sl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Sc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&wl(n),r&512&&El(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&zl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Nl(n),r&512&&El(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||au,!r){var a=t!==null&&t.memoizedState!==null||W;t=au,i=W,au=r,(W=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),au=t,W=i}break;case 30:Fu(e,n),r&512&&El(n,n.return);break;case 7:r&512&&El(n,n.return);default:Fu(e,n)}}function gu(e,t){for(e=e.child;e!==null;)_u(e,t),e=e.sibling}function _u(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,N=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&gu(e,t);break;default:gu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:_u(n,r);break a;case 22:n.memoizedState===null&&vu(n,r);break a;default:vu(n,r)}}e=e.sibling}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bu=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount==`function`)try{nt.onCommitFiberUnmount(tt,n)}catch{}switch(n.tag){case 26:W||Dl(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!W&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:W||Dl(n,t),Al(n);var r=bu,i=xu;Sp(n.type)&&(bu=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),bu=r,xu=i;break;case 5:W||Dl(n,t),Al(n);case 6:if(n.tag===6&&Al(n),r=bu,i=xu,bu=null,Su(e,t,n),bu=r,xu=i,bu!==null){if(xu)try{(bu.nodeType===9?bu.body:bu.nodeName===`HTML`?bu.ownerDocument.body:bu).removeChild(n.stateNode),N=!0}catch(e){Z(n,t,e)}else try{bu.removeChild(n.stateNode),N=!0}catch(e){Z(n,t,e)}}break;case 18:bu!==null&&(xu?(e=bu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(bu,n.stateNode));break;case 4:r=bu,i=xu,bu=n.stateNode.containerInfo,xu=!0,Su(e,t,n),bu=r,xu=i;break;case 0:case 11:case 14:case 15:Cl(2,n,t),W||Cl(4,n,t),Su(e,t,n);break;case 1:W||(Dl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Tl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:W=(r=W)||n.memoizedState!==null,Su(e,t,n),W=r;break;case 30:Dl(n,t),Su(e,t,n);break;case 7:W||Dl(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cu),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){bu=l.stateNode,xu=!1;break a}break;case 5:bu=l.stateNode,xu=!1;break a;case 3:case 4:bu=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(bu===null)throw Error(i(160));Cu(s,c,o),bu=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Cl(3,e,e.return),Sl(3,e),Cl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),a&64&&au&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(au)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Ft]||r[Ot]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Ot]=e,Ht(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ot]=e,Ht(r),t=r}e.stateNode=t}}else au||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Pl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||W||t.parentNode.removeChild(t)):a.count--,n===null?au||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),r!==null&&a&4&&Pl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ou,ou=!1,Ou(t,e,n),ou=o,ju(e),a&512&&(W||r===null||Dl(r,r.return)),e.flags&32){t=e.stateNode;try{fn(t,``),N=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Pl(e,t,r===null?t:r.memoizedProps)),a&1024&&(su=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,N=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(N=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}su&&(su=!1,Mu(e)),N=!1;break;case 4:a=ou,ou=au,r=Qt(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,N&&du&&(fu=!0),N=r,ou=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Ke()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=au,l=W,u=ou;au=c||o,ou=u||o,W=l||s,Ou(t,e,n),W=l,ou=u,au=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||au||W||(t=s||W,n=au,r=W,au=o||au,W=t,Iu(e,2),au=n,W=r),!o&&ou||gu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(W||r===null||Dl(r,r.return)),a=Qt(),o=du,s=(n&335544064)===n,c=e.memoizedProps,du=s&&xi(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&N&&(e.flags|=4),du=o,N=a;break;case 21:break;case 7:a&512&&(W||r===null||Dl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Fl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Ml(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(jl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Rl(e,Il(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(fn(l,``),n.flags&=-33),Rl(e,Il(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ll(e,Il(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else iu(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Xl(e,!1);else switch(e.tag){case 3:if(pu=uu=!1,Wl(),Nu(t,e),!uu&&!fu){if(e=Ul,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),pu=!0}Ul=null;break;case 5:Nu(t,e);break;case 4:r=uu,uu=!1,Nu(t,e),uu&&(fu=!0),uu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Xl(e,!1));break;case 30:r=uu,i=Wl(),uu=!1,Nu(t,e),uu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=yi(a,o),o=yi(n.memoizedProps,o);var s=xi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Gl=0,t=ru(e,n,t,o,s,a,!0),Gl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Ul=i):i!==null&&(i.push.apply(i,Ul),Ul=i),uu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Cl(4,n,n.return),Iu(n,r);break;case 1:Dl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Tl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Dl(n,n.return),n.tag!==5&&n.tag!==27||Al(n),Iu(n,r);break;case 6:Al(n);break;case 26:Dl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||W||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:Dl(n,n.return),Iu(n,r);break;case 7:Dl(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),Sl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)To(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&wl(a),El(a,a.return);break;case 27:n&2&&zl(a);case 5:a.tag!==5&&a.tag!==27||kl(a),Lu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 6:kl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||au||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),El(a,a.return);break;case 30:Lu(i,a,n),El(a,a.return);break;case 7:El(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pa(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&nu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&tu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&Sl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&pu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Pa(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&tu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&tu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Jl(a.child,!0),Jl(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),Sl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Vl===null&&(Vl=new Map),Vl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];lu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Cl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];lu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;lu!==null;){var n=lu;switch(n.tag){case 0:case 11:case 15:Cl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,lu=r;else a:for(n=e;lu!==null;){r=lu;var i=r.sibling,a=r.return;if(yu(r),r===n){lu=null;break a}if(i!==null){i.return=a,lu=i;break a}lu=a}}}var Qu={getCacheForType:function(e){var t=Ea(Ma),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ea(Ma).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:A.T===null?Tt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||z){var e=lt;lt<<=1,!(lt&3932160)&&(lt=262144),ld=e}else ld=536870912}return e=Mo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(yi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),vt(e,n),K&2&&e===q||(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||pt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Ke(),10<a)){if(Rd(r,t,ld,!td),ft(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Vl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Ke():(a&4194048)===a?hd-Ke():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ur(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=mt(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-it(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&bt(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,va=_a=null,is(e),oo=null,so=0,e=J;for(;e!==null;)xl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Ii(e.current,null),Y=t,X=0,ed=null,td=!1,nd=pt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=mt(e,t),Ei(),n}function Hd(e,t){H=null,A.H=mc,t===Xa||t===Qa?(t=io(),X=3):t===Za?(t=io(),X=4):X=t===Mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Ec(e,Wi(t,e.current)))}function Ud(){var e=Mo.current;return e===null?!0:(Y&4194048)===Y?B===null:(Y&62914560)===Y||Y&536870912?e===B:!1}function Wd(){var e=A.H;return A.H=mc,e===null?mc:e}function Gd(){var e=A.A;return A.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&Mo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Mo.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,va=_a=null,K=r,A.H=i,A.A=a,J===null&&(q=null,Y=0,Ei()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=Ke()+500,Vd(e,t)):nd=pt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(eo(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:eo(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return va=_a=null,A.H=r,A.A=a,K=n,J===null?(q=null,Y=0,Ei(),ad):0}function Xd(){for(;J!==null&&!We();)Zd(J)}function Zd(e){var t=fl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Kc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:is(t);var r=t;r===aa&&(z?(da(r),r.tag===5&&r.stateNode!=null&&(R=r.stateNode)):(da(r),z=!0));default:xl(n,t),t=J=Li(t,id),t=fl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){va=_a=null,is(t),oo=null,so=0;var i=t.return;try{if(jc(e,i,t,n,Y)){ad=1,Ec(e,Wi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Ec(e,Wi(n,e.current)),J=null;return}t.flags&32768?(z||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=Mo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=yl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=bl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ti,yt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=La(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Xe,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Bl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=A.T,A.T=null,i=j.p,j.p=2,a=K,K|=4;try{mu(e,t,n)}finally{K=a,j.p=i,A.T=r}}yd=1,Bl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=A.T,A.T=null;var i=j.p;j.p=2;var a=K;K|=4;try{du=fu=!1,Au(t,e,n),n=cp;var o=Yr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Jr(s.ownerDocument.documentElement,s)){if(c!==null&&Xr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=qr(s,h),v=qr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,j.p=i,A.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=K;K|=4;try{hu(e,t.alternate,t)}finally{K=i,j.p=r,A.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Ge();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),wt(r),n=n.stateNode,nt&&typeof nt.onCommitFiberRoot==`function`)try{nt.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=A.T,a=j.p,j.p=2,A.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{A.T=n,j.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=wt(Sd),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),nt&&typeof nt.onPostCommitFiberRoot==`function`)try{nt.onPostCommitFiberRoot(tt,o)}catch{}return!0}finally{j.p=a,A.T=r,uf(e,t)}}function pf(e,t,n){t=Wi(n,t),t=Oc(e.stateNode,t,2),e=yo(e,t,2),e!==null&&(vt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Wi(n,e),n=kc(2),r=yo(t,n,2),r!==null&&(Ac(n,r,t,e),vt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>Ke()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=gt()),e=ki(e,t),e!==null&&(vt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return He(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-it(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ft(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||pt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ke(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-it(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=ft(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||pt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ue(r),wt(n)){case 2:case 8:n=Ye;break;case 32:n=Xe;break;case 268435456:n=Qe;break;default:n=Xe}return r=jf.bind(null,e),n=He(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ue(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ft(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ke()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?He(Je,Of):kf()})}function Pf(){if(Tf===0){var e=Ba;e===0&&(e=ct,ct<<=1,!(ct&261888)&&(ct=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:yn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[kt]||null).action),o=r.submitter;o&&(t=(t=o[kt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ec(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ec(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<gi.length;Lf++){var Rf=gi[Lf];_i(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}_i(ci,`onAnimationEnd`),_i(li,`onAnimationIteration`),_i(ui,`onAnimationStart`),_i(`dblclick`,`onDoubleClick`),_i(`focusin`,`onFocus`),_i(`focusout`,`onBlur`),_i(di,`onTransitionRun`),_i(fi,`onTransitionStart`),_i(pi,`onTransitionCancel`),_i(mi,`onTransitionEnd`),qt(`onMouseEnter`,[`mouseout`,`mouseover`]),qt(`onMouseLeave`,[`mouseout`,`mouseover`]),qt(`onPointerEnter`,[`pointerout`,`pointerover`]),qt(`onPointerLeave`,[`pointerout`,`pointerover`]),Kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[jt];n===void 0&&(n=t[jt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Wt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!An||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Rt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Dn(function(){var r=a,i=Sn(n),s=[];a:{var c=hi.get(e);if(c!==void 0){var l=Vn,u=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:l=ar;break;case`focusin`:u=`focus`,l=Xn;break;case`focusout`:u=`blur`,l=Xn;break;case`beforeblur`:case`afterblur`:l=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=cr;break;case ci:case li:case ui:l=Zn;break;case mi:l=lr;break;case`scroll`:case`scrollend`:l=Un;break;case`wheel`:l=ur;break;case`copy`:case`cut`:case`paste`:l=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=or;break;case`submit`:l=sr;break;case`toggle`:case`beforetoggle`:l=dr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=On(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==xn&&(u=n.relatedTarget||n.fromElement)&&(Rt(u)||u[At]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Rt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=or,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Bt(c),h=l==null?u:Bt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Rt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?S(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=jr;else if(Tr(c)){if(Mr)_=Vr;else{_=zr;var v=Rr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&gn(r.elementType)&&(_=jr):_=Br;if(_&&=_(e,r)){Er(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Bt(r):window,e){case`focusin`:(Tr(v)||v.contentEditable===`true`)&&(Qr=v,$r=r,ei=null);break;case`focusout`:ei=$r=Qr=null;break;case`mousedown`:ti=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ti=!1,ni(s,n,i);break;case`selectionchange`:if(Zr)break;case`keydown`:case`keyup`:ni(s,n,i)}var y;if(pr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else xr?yr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(gr&&n.locale!==`ko`&&(xr||b!==`onCompositionStart`?b===`onCompositionEnd`&&xr&&(y=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,xr=!0)),v=Jf(r,b),0<v.length&&(b=new $n(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=br(n),y!==null&&(b.data=y)))),(y=hr?Sr(e,n):Cr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new $n(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=On(e,n),i!=null&&r.unshift(qf(e,i,a)),i=On(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=On(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=On(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&fn(e,``+r);else return;break;case`className`:F(e,`class`,r);break;case`tabIndex`:F(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:F(e,n,r);break;case`style`:hn(e,r,o);return;case`data`:if(t!==`object`){F(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=yn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),P(e,`popover`,r);break;case`xlinkActuate`:I(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:I(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:I(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:I(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:I(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:I(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:I(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:I(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:I(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:P(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=_n.get(n)||n,P(e,n,r);else return}N=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:hn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)fn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=bn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Gt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[kt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}N=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):P(e,n,r)}return}N=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}sn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&ln(e,!!r,n,!0):ln(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}dn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(gn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(N=!0),o=m;break;case`name`:m!==f&&(N=!0),a=m;break;case`checked`:m!==f&&(N=!0),u=m;break;case`defaultChecked`:m!==f&&(N=!0),d=m;break;case`value`:m!==f&&(N=!0),s=m;break;case`defaultValue`:m!==f&&(N=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}on(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(N=!0),p=o;break;case`defaultValue`:o!==l&&(N=!0),c=o;break;case`multiple`:o!==l&&(N=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?ln(e,!!n,n?[]:``,!1):ln(e,!!n,t,!0)):ln(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(N=!0),p=a;break;case`defaultValue`:a!==o&&(N=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}un(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(N=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(gn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Ot]=r,n[kt]=t,np(n,e,t),Ht(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:C({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Rt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=S(n,a,x),t===null?t=!1:(m(t,!0,ne,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=S(r,a,x),t===null?t=!1:(m(t,!0,re,a,r),a=ee,te=ee=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Lt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===bn&&(e.onclick=null),Lt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=j.d;j.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=zt(e);t!==null&&t.tag===5&&t.type===`form`?nc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=an(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Ht(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+an(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+an(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+an(n.imageSizes)+`"]`)):i+=`[href="`+an(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=C({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[It]=!0,o.onload=o.onerror=function(){Ut(o)}),Ht(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+an(r)+`"][href="`+an(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=C({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Ht(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Vt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=C({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Ht(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Vt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ht(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Vt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ht(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Oe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Vt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Vt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+an(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[It]){r.loading=1;return}}else t=e.createElement(`link`),t[It]=!0,t.onload=t.onerror=Ut.bind(null,t),np(t,`link`,n),Ht(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+an(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+an(n.href)+`"]`);if(r)return t.instance=r,Ht(r),r;var a=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ht(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Ht(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Ht(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Ht(a),a):(r=n,(a=vm.get(o))&&(r=C({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ht(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ft]||a[Ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ht(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Ht(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:O,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.hiddenUpdates=_t(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Pi(3,null,null,t),e.current=a,a.stateNode=e,t=Na(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},go(a),e}function uh(e){return e?(e=Mi,e):Mi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=vo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=yo(e,r,t),n!==null&&(Pd(n,e,t),bo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ki(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Ct(t);var n=ki(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,yh(e,t,n,r)}finally{j.p=a,A.T=i}}function vh(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,yh(e,t,n,r)}finally{j.p=a,A.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=zt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=dt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-it(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=Ke()+500,Df(0,!1))}}break;case 31:case 13:s=ki(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Sn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Rt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(qe()){case Je:return 2;case Ye:return 8;case Xe:case Ze:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=zt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Rt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Et(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Et(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xn=r,n.target.dispatchEvent(r),xn=null}else return t=zt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=zt(n);a!==null&&(e.splice(t,3),t-=3,ec(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[kt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[kt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[At]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{tt=Jh.inject(qh),nt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Cc,s=wc,c=Tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[At]=t.current,Wf(e),new Wh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()}));function v(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var y=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,b=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ee={};function te(e,t){return((t||ee).jsx?b:y).test(e)}var ne=/[ \t\n\f\r]/g;function re(e){return typeof e==`object`?e.type===`text`&&x(e.value):x(e)}function x(e){return e.replace(ne,``)===``}var S=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};S.prototype.normal={},S.prototype.property={},S.prototype.space=void 0;function C(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new S(n,r,t)}function w(e){return e.toLowerCase()}var T=class{constructor(e,t){this.attribute=t,this.property=e}};T.prototype.attribute=``,T.prototype.booleanish=!1,T.prototype.boolean=!1,T.prototype.commaOrSpaceSeparated=!1,T.prototype.commaSeparated=!1,T.prototype.defined=!1,T.prototype.mustUseProperty=!1,T.prototype.number=!1,T.prototype.overloadedBoolean=!1,T.prototype.property=``,T.prototype.spaceSeparated=!1,T.prototype.space=void 0;var ie=s({boolean:()=>E,booleanish:()=>D,commaOrSpaceSeparated:()=>ce,commaSeparated:()=>se,number:()=>O,overloadedBoolean:()=>oe,spaceSeparated:()=>k}),ae=0,E=le(),D=le(),oe=le(),O=le(),k=le(),se=le(),ce=le();function le(){return 2**++ae}var ue=Object.keys(ie),de=class extends T{constructor(e,t,n,r){let i=-1;if(super(e,t),fe(this,`space`,r),typeof n==`number`)for(;++i<ue.length;){let e=ue[i];fe(this,ue[i],(n&ie[e])===ie[e])}}};de.prototype.defined=!0;function fe(e,t,n){n&&(e[t]=n)}function pe(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new de(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[w(r)]=r,n[w(a.attribute)]=r}return new S(t,n,e.space)}var me=pe({properties:{ariaActiveDescendant:null,ariaAtomic:D,ariaAutoComplete:null,ariaBusy:D,ariaChecked:D,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:k,ariaCurrent:null,ariaDescribedBy:k,ariaDetails:null,ariaDisabled:D,ariaDropEffect:k,ariaErrorMessage:null,ariaExpanded:D,ariaFlowTo:k,ariaGrabbed:D,ariaHasPopup:null,ariaHidden:D,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:k,ariaLevel:O,ariaLive:null,ariaModal:D,ariaMultiLine:D,ariaMultiSelectable:D,ariaOrientation:null,ariaOwns:k,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:D,ariaReadOnly:D,ariaRelevant:null,ariaRequired:D,ariaRoleDescription:k,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:D,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function he(e,t){return t in e?e[t]:t}function ge(e,t){return he(e,t.toLowerCase())}var _e=pe({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:se,acceptCharset:k,accessKey:k,action:null,allow:null,allowFullScreen:E,allowPaymentRequest:E,allowUserMedia:E,alpha:E,alt:null,as:null,async:E,autoCapitalize:null,autoComplete:k,autoFocus:E,autoPlay:E,blocking:k,capture:null,charSet:null,checked:E,cite:null,className:k,closedBy:null,colorSpace:null,cols:O,colSpan:O,command:null,commandFor:null,content:null,contentEditable:D,controls:E,controlsList:k,coords:O|se,crossOrigin:null,data:null,dateTime:null,decoding:null,default:E,defer:E,dir:null,dirName:null,disabled:E,download:oe,draggable:D,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:E,formTarget:null,headers:k,height:O,hidden:oe,high:O,href:null,hrefLang:null,htmlFor:k,httpEquiv:k,id:null,imageSizes:null,imageSrcSet:null,inert:E,inputMode:null,integrity:null,is:null,isMap:E,itemId:null,itemProp:k,itemRef:k,itemScope:E,itemType:k,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:E,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:E,muted:E,name:null,nonce:null,noModule:E,noValidate:E,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:E,optimum:O,pattern:null,ping:k,placeholder:null,playsInline:E,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:E,referrerPolicy:null,rel:k,required:E,reversed:E,rows:O,rowSpan:O,sandbox:k,scope:null,scoped:E,seamless:E,selected:E,shadowRootClonable:E,shadowRootCustomElementRegistry:E,shadowRootDelegatesFocus:E,shadowRootMode:null,shadowRootSerializable:E,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:D,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:E,useMap:null,value:D,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:k,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:E,declare:E,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:E,noHref:E,noShade:E,noWrap:E,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:D,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:E,disablePictureInPicture:E,disableRemotePlayback:E,exportParts:se,part:k,prefix:null,property:null,results:O,security:null,unselectable:null},space:`html`,transform:ge}),ve=pe({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:ce,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:k,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:E,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:se,g2:se,glyphName:se,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:ce,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:k,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ce,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ce,rev:ce,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ce,requiredFeatures:ce,requiredFonts:ce,requiredFormats:ce,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:ce,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ce,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ce,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:he}),ye=pe({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),be=pe({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ge}),A=pe({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),j={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},xe=/[A-Z]/g,Se=/-[a-z]/g,Ce=/^data[-\w.:]+$/i;function we(e,t){let n=w(t),r=t,i=T;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&Ce.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(Se,M);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!Se.test(e)){let n=e.replace(xe,Te);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=de}return new i(r,t)}function Te(e){return`-`+e.toLowerCase()}function M(e){return e.charAt(1).toUpperCase()}var Ee=C([me,_e,ye,be,A],`html`),De=C([me,ve,ye,be,A],`svg`);function Oe(e){return e.join(` `).trim()}var ke=/\/\*(?:[^*]|\*(?!\/))*\*\//g,Ae=/\n/g,je=/^\s*/,Me=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ne=/^:\s*/,Pe=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,Fe=/^[;\s]*/,Ie=`
`,Le=`/`,Re=`*`,ze=``,Be=`comment`,Ve=`declaration`;function He(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(Ae);t&&(n+=t.length);var i=e.lastIndexOf(Ie);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(je)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(Le==e.charAt(0)&&Re==e.charAt(1)){for(var n=2;ze!=e.charAt(n)&&(Re!=e.charAt(n)||Le!=e.charAt(n+1));)++n;if(n+=2,ze===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:Be,comment:o})}}function f(){var e=a(),t=c(Me);if(t){if(d(),!c(Ne))return s(`property missing ':'`);var n=c(Pe),r=e({type:Ve,property:t[0].replace(ke,ze).trim(),value:n?n[0].replace(ke,ze).trim():ze});return c(Fe),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function Ue(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=He(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var We=Ke(`end`),Ge=Ke(`start`);function Ke(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function qe(e){let t=Ge(e),n=We(e);if(t&&n)return{start:t,end:n}}function Je(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Xe(e.position):`start`in e||`end`in e?Xe(e):`line`in e||`column`in e?Ye(e):``}function Ye(e){return Ze(e&&e.line)+`:`+Ze(e&&e.column)}function Xe(e){return Ye(e&&e.start)+`-`+Ye(e&&e.end)}function Ze(e){return e&&typeof e==`number`?e:1}var Qe=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Je(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Qe.prototype.file=``,Qe.prototype.name=``,Qe.prototype.reason=``,Qe.prototype.message=``,Qe.prototype.stack=``,Qe.prototype.column=void 0,Qe.prototype.line=void 0,Qe.prototype.ancestors=void 0,Qe.prototype.cause=void 0,Qe.prototype.fatal=void 0,Qe.prototype.place=void 0,Qe.prototype.ruleId=void 0,Qe.prototype.source=void 0;var $e={}.hasOwnProperty,et=new Map,tt=/[A-Z]/g,nt=/-([a-z])/g,rt=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),it=new Set([`td`,`th`]),at=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function ot(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=_t(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=gt(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?De:Ee,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=st(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function st(e,t,n){if(t.type===`element`)return ct(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return lt(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return dt(e,t,n);if(t.type===`mdxjsEsm`)return ut(e,t);if(t.type===`root`)return ft(e,t,n);if(t.type===`text`)return pt(e,t)}function ct(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=De,e.schema=i),e.ancestors.push(t);let a=Ct(e,t.tagName,!1),o=vt(e,t),s=bt(e,t);return rt.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!re(e)})),mt(e,o,a,t),ht(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function lt(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}wt(e,t.position)}function ut(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);wt(e,t.position)}function dt(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=De,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Ct(e,t.name,!0),o=yt(e,t),s=bt(e,t);return mt(e,o,a,t),ht(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function ft(e,t,n){let r={};return ht(r,bt(e,t)),e.create(t,e.Fragment,r,n)}function pt(e,t){return t.value}function mt(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ht(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function gt(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function _t(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Ge(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function vt(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&$e.call(t.properties,i)){let a=xt(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&it.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function yt(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else wt(e,t.position)}else{let{name:i}=r,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else wt(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function bt(e,t){let n=[],r=-1,i=e.passKeys?new Map:et;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=st(e,a,o);s!==void 0&&n.push(s)}return n}function xt(e,t,n){if(n==null||typeof n==`number`&&Number.isNaN(n))return;let r=we(e.schema,t);return Array.isArray(n)&&(n=r.commaSeparated?v(n):Oe(n)),r.property===`style`?[`style`,typeof n==`object`?e.stylePropertyNameCase===`dom`?n:Tt(n):St(e,String(n))]:[e.elementAttributeNameCase===`react`&&r.space?j[r.property]||r.property:r.attribute,n]}function St(e,t){let n={};try{Ue(t,function(t,r){if(t&&r){let i=t;i.slice(0,2)!==`--`&&(i=i.toLowerCase(),e.stylePropertyNameCase===`dom`&&(i.slice(0,4)===`-ms-`&&(i=i.slice(1)),i=i.replace(nt,Ot))),n[i]=r}})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Qe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=at+`#cannot-parse-style-attribute`,r}return n}function Ct(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=te(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=te(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return $e.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);wt(e)}function wt(e,t){let n=new Qe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=at+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function Tt(e){let t={},n;for(n in e)$e.call(e,n)&&(t[Et(n)]=e[n]);return t}function Et(e){if(e.slice(0,2)===`--`)return e;let t=e.replace(tt,Dt);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function Dt(e){return`-`+e.toLowerCase()}function Ot(e,t){return t.toUpperCase()}var kt={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},At=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),jt=o(((e,t)=>{t.exports=At()})),Mt={};function Nt(e,t){let n=t||Mt;return Pt(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function Pt(e,t,n){if(It(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return Ft(e.children,t,n)}return Array.isArray(e)?Ft(e,t,n):``}function Ft(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Pt(e[i],t,n);return r.join(``)}function It(e){return!!(e&&typeof e==`object`)}var Lt=document.createElement(`i`);function Rt(e){let t=`&`+e+`;`;Lt.innerHTML=t;let n=Lt.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function zt(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(zt(e,e.length,0,t),e):t}var Vt={}.hasOwnProperty;function Ht(e){let t={},n=-1;for(;++n<e.length;)Ut(t,e[n]);return t}function Ut(e,t){let n;for(n in t){let r=(Vt.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Vt.call(r,a)||(r[a]=[]);let e=i[a];Wt(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Wt(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);zt(e,0,0,r)}function Gt(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function Kt(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var qt=tn(/[A-Za-z]/),Jt=tn(/[\dA-Za-z]/),Yt=tn(/[#-'*+\--9=?A-Z^-~]/);function Xt(e){return e!==null&&(e<32||e===127)}var Zt=tn(/\d/),N=tn(/[\dA-Fa-f]/),Qt=tn(/[!-/:-@[-`{-~]/);function P(e){return e!==null&&e<-2}function F(e){return e!==null&&(e<0||e===32)}function I(e){return e===-2||e===-1||e===32}var $t=tn(/\p{P}|\p{S}/u),en=tn(/\s/);function tn(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function nn(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Jt(e.charCodeAt(n+1))&&Jt(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function L(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return I(r)?(e.enter(n),s(r)):t(r)}function s(r){return I(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}function rn(e,t,n,r,i,a){let o=0;return s;function s(t){return a>0&&I(t)?(e.enter(r),c(t)):l(t)}function c(t){return I(t)&&o<a?(e.consume(t),o++,c):(e.exit(r),l(t))}function l(e){return o>=i?t(e):n(e)}}var an={tokenize:on};function on(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null)e.consume(n);else return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),L(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null)e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);else return P(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var sn=class{constructor(){this.index=new Map,this.map=[]}add(e,t,n){cn(this,e,t,n,!1)}addBefore(e,t,n){cn(this,e,t,n,!0)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function cn(e,t,n,r,i){if(n===0&&r.length===0)return;let a=e.index.get(t);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[t,n,r];e.map.push(o),e.index.set(t,o)}var ln={tokenize:dn},un={tokenize:fn};function dn(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;let c=new sn;return c.add(a+1,0,t.events.slice(n)),c.add(n,s-n,[]),c.consume(t.events),l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!(!i.currentConstruct||i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(un,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(un,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null)i&&v(),_(0),e.consume(n);else return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null)g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);else return P(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;let l=new sn;l.add(a+1,0,t.events.slice(n)),l.add(n,e-n,[]),l.consume(t.events)}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function fn(e,t,n){return L(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function pn(e){if(e===null||F(e)||en(e))return 1;if($t(e))return 2}function mn(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var hn={name:`attention`,resolveAll:gn,tokenize:_n};function gn(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]===`exit`&&e[i][1].type===`attentionSequence`&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;let a=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,o={...e[i][1].end},s={...e[n][1].start};vn(o,-a),vn(s,a);let c={type:a>1?`strongSequence`:`emphasisSequence`,start:o,end:{...e[i][1].end}},l={type:a>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:s},u={type:a>1?`strongText`:`emphasisText`,start:{...e[i][1].end},end:{...e[n][1].start}},d={type:a>1?`strong`:`emphasis`,start:{...c.start},end:{...l.end}};e[i][1].end={...c.start},e[n][1].start={...l.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=Bt(r,[[`enter`,e[i][1],t],[`exit`,e[i][1],t]])),r=Bt(r,[[`enter`,d,t],[`enter`,c,t],[`exit`,c,t],[`enter`,u,t]]),r=Bt(r,mn(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=Bt(r,[[`exit`,u,t],[`enter`,l,t],[`exit`,l,t],[`exit`,d,t]]);let f=0;e[n][1].end.offset-e[n][1].start.offset&&(f=2,r=Bt(r,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])),zt(e,i-1,n-i+3,r),n=i+r.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function _n(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=pn(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=pn(o),u=!l||l===2&&i||n.includes(o)&&o!==42&&o!==95,d=!i||i===2&&l||n.includes(r)&&r!==42&&r!==95;return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function vn(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var yn={name:`autolink`,tokenize:bn};function bn(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return qt(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Jt(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Jt(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Xt(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Yt(t)?(e.consume(t),l):n(t)}function u(e){return Jt(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Jt(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var xn={partial:!0,tokenize:Sn};function Sn(e,t,n){return r;function r(t){return I(t)?L(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||P(e)?t(e):n(e)}}var Cn={continuation:{tokenize:Tn},exit:En,name:`blockQuote`,tokenize:wn};function wn(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return I(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Tn(e,t,n){let r=this;return i;function i(t){return I(t)?L(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Cn,t,n)(r)}}function En(e){e.exit(`blockQuote`)}var Dn={name:`characterEscape`,tokenize:On};function On(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Qt(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var kn={name:`characterReference`,tokenize:An};function An(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Jt,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=N,u):(e.enter(`characterReferenceValue`),a=7,o=Zt,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Jt&&!Rt(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var jn={partial:!0,tokenize:Mn};function Mn(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var Nn={concrete:!0,name:`codeFenced`,tokenize:Pn};function Pn(e,t,n){let r=this,i={partial:!0,tokenize:ee},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),I(t)?L(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||P(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(jn,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||P(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):I(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),L(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||P(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||P(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&I(t)?L(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||P(t)?e.check(jn,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||P(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function ee(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),I(t)?L(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),I(t)?L(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||P(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}var Fn={name:`codeIndented`,tokenize:Ln},In={partial:!0,tokenize:Rn};function Ln(e,t,n){return r;function r(t){return e.enter(`codeIndented`),rn(e,i,n,`linePrefix`,4,4)(t)}function i(t){return t===null?o(t):P(t)?e.attempt(In,i,o)(t):(e.enter(`codeFlowValue`),a(t))}function a(t){return t===null||P(t)?(e.exit(`codeFlowValue`),i(t)):(e.consume(t),a)}function o(n){return e.exit(`codeIndented`),t(n)}}function Rn(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):P(o)?(e.enter(`lineEnding`),e.consume(o),e.exit(`lineEnding`),i):rn(e,t,a,`linePrefix`,4,4)(o)}function a(e){return P(e)?i(e):n(e)}}var zn={name:`codeText`,previous:Vn,resolve:Bn,tokenize:Hn};function Bn(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Vn(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function Hn(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):P(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||P(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var Un=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&Wn(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),Wn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Wn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);Wn(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);Wn(this.left,t.reverse())}}}};function Wn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Gn(e){let t={},n=-1,r,i,a,o,s,c,l,u=new Un(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Kn(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return zt(e,0,1/0,u.slice(0)),!l}function Kn(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var qn={resolve:Yn,tokenize:Xn},Jn={partial:!0,tokenize:Zn};function Yn(e){return Gn(e),e}function Xn(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):P(t)?e.check(Jn,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Zn(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),L(e,a,`linePrefix`)}function a(i){if(i===null||P(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function Qn(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Xt(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||P(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||F(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Xt(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function $n(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):P(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||P(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!I(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function er(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):P(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),L(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||P(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function tr(e,t){let n;return r;function r(i){return P(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):I(i)?L(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var nr={name:`definition`,tokenize:ir},rr={partial:!0,tokenize:ar};function ir(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return $n.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=Kt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return F(t)?tr(e,l)(t):l(t)}function l(t){return Qn(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(rr,d,d)(t)}function d(t){return I(t)?L(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||P(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function ar(e,t,n){return r;function r(t){return F(t)?tr(e,i)(t):n(t)}function i(t){return er(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return I(t)?L(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||P(e)?t(e):n(e)}}var or={name:`hardBreakEscape`,tokenize:sr};function sr(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return P(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var cr={name:`headingAtx`,resolve:lr,tokenize:ur};function lr(e,t){let n=e.length-2,r=3;if(e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r){let i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`};zt(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])}return e}function ur(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||F(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||P(n)?(e.exit(`atxHeading`),t(n)):I(n)?L(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||F(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var dr=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),fr=[`pre`,`script`,`style`,`textarea`],pr={concrete:!0,name:`htmlFlow`,resolveTo:hr,tokenize:gr},mr={partial:!0,tokenize:_r};function hr(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function gr(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:k):qt(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):qt(a)?(e.consume(a),i=4,r.interrupt?t:k):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:k):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:w:m):n(i)}function h(t){return qt(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||F(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&fr.includes(l)?(i=1,r.interrupt?t(s):w(s)):dr.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):w(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Jt(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:w):n(i)}function v(t){return I(t)?(e.consume(t),v):S(t)}function y(t){return t===47?(e.consume(t),S):t===58||t===95||qt(t)?(e.consume(t),b):I(t)?(e.consume(t),y):S(t)}function b(t){return t===45||t===46||t===58||t===95||Jt(t)?(e.consume(t),b):ee(t)}function ee(t){return t===61?(e.consume(t),te):I(t)?(e.consume(t),ee):y(t)}function te(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,ne):I(t)?(e.consume(t),te):re(t)}function ne(t){return t===c?(e.consume(t),c=null,x):t===null||P(t)?n(t):(e.consume(t),ne)}function re(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||F(t)?ee(t):(e.consume(t),re)}function x(e){return e===47||e===62||I(e)?y(e):n(e)}function S(t){return t===62?(e.consume(t),C):n(t)}function C(t){return t===null||P(t)?w(t):I(t)?(e.consume(t),C):n(t)}function w(t){return t===45&&i===2?(e.consume(t),E):t===60&&i===1?(e.consume(t),D):t===62&&i===4?(e.consume(t),se):t===63&&i===3?(e.consume(t),k):t===93&&i===5?(e.consume(t),O):P(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(mr,ce,T)(t)):t===null||P(t)?(e.exit(`htmlFlowData`),T(t)):(e.consume(t),w)}function T(t){return e.check(jn,ie,ce)(t)}function ie(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ae}function ae(t){return t===null||P(t)?T(t):(e.enter(`htmlFlowData`),w(t))}function E(t){return t===45?(e.consume(t),k):w(t)}function D(t){return t===47?(e.consume(t),o=``,oe):w(t)}function oe(t){if(t===62){let n=o.toLowerCase();return fr.includes(n)?(e.consume(t),se):w(t)}return qt(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),oe):w(t)}function O(t){return t===93?(e.consume(t),k):w(t)}function k(t){return t===62?(e.consume(t),se):t===45&&i===2?(e.consume(t),k):w(t)}function se(t){return t===null||P(t)?(e.exit(`htmlFlowData`),ce(t)):(e.consume(t),se)}function ce(n){return e.exit(`htmlFlow`),t(n)}}function _r(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(xn,t,n)}}var vr={name:`htmlText`,tokenize:yr};function yr(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),ee):t===63?(e.consume(t),y):qt(t)?(e.consume(t),re):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):qt(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):P(t)?(o=d,D(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?E(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):P(t)?(o=h,D(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?E(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?E(t):P(t)?(o=v,D(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):P(t)?(o=y,D(t)):(e.consume(t),y)}function b(e){return e===62?E(e):y(e)}function ee(t){return qt(t)?(e.consume(t),te):n(t)}function te(t){return t===45||Jt(t)?(e.consume(t),te):ne(t)}function ne(t){return P(t)?(o=ne,D(t)):I(t)?(e.consume(t),ne):E(t)}function re(t){return t===45||Jt(t)?(e.consume(t),re):t===47||t===62||F(t)?x(t):n(t)}function x(t){return t===47?(e.consume(t),E):t===58||t===95||qt(t)?(e.consume(t),S):P(t)?(o=x,D(t)):I(t)?(e.consume(t),x):E(t)}function S(t){return t===45||t===46||t===58||t===95||Jt(t)?(e.consume(t),S):C(t)}function C(t){return t===61?(e.consume(t),w):P(t)?(o=C,D(t)):I(t)?(e.consume(t),C):x(t)}function w(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,T):P(t)?(o=w,D(t)):I(t)?(e.consume(t),w):(e.consume(t),ie)}function T(t){return t===i?(e.consume(t),i=void 0,ae):t===null?n(t):P(t)?(o=T,D(t)):(e.consume(t),T)}function ie(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||F(t)?x(t):(e.consume(t),ie)}function ae(e){return e===47||e===62||F(e)?x(e):n(e)}function E(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function D(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),oe}function oe(t){return I(t)?L(e,O,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):O(t)}function O(t){return e.enter(`htmlTextData`),o(t)}}var br={name:`labelEnd`,resolveAll:wr,resolveTo:Tr,tokenize:Er},xr={tokenize:Dr},Sr={tokenize:Or},Cr={tokenize:kr};function wr(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&zt(e,0,e.length,n),e}function Tr(e,t){let n=e.length,r=0,i,a,o;for(;n--;){let t=e[n][1];if(i){if(t.type===`link`||t.type===`labelLink`&&t._inactive)break;e[n][0]===`enter`&&t.type===`labelLink`&&(t._inactive=!0)}else if(a){if(e[n][0]===`enter`&&(t.type===`labelImage`||t.type===`labelLink`)&&!t._balanced&&(i=n,t.type!==`labelLink`)){r=2;break}}else t.type===`labelEnd`&&(a=n)}let s={type:e[i][1].type===`labelLink`?`link`:`image`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}},c={type:`label`,start:{...e[i][1].start},end:{...e[a][1].end}},l={type:`labelText`,start:{...e[i+r+2][1].end},end:{...e[a-2][1].start}};return o=[[`enter`,s,t],[`enter`,c,t]],o=Bt(o,e.slice(i+1,i+r+3)),o=Bt(o,[[`enter`,l,t]]),o=Bt(o,mn(t.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),t)),o=Bt(o,[[`exit`,l,t],e[a-2],e[a-1],[`exit`,c,t]]),o=Bt(o,e.slice(a+1)),o=Bt(o,[[`exit`,s,t]]),zt(e,i,e.length,o),e}function Er(e,t,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(Kt(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(xr,u,o?u:d)(t):t===91?e.attempt(Sr,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Cr,u,d)(t)}function u(e){return i.pop(),t(e)}function d(e){return a._balanced=!0,n(e)}}function Dr(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return F(t)?tr(e,a)(t):a(t)}function a(t){return t===41?u(t):Qn(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return F(t)?tr(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?er(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return F(t)?tr(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function Or(e,t,n){let r=this;return i;function i(t){return $n.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(Kt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function kr(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var Ar={name:`labelStartImage`,resolveAll:br.resolveAll,tokenize:jr};function jr(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),o}function o(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelImage`),s):n(t)}function s(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var Mr={name:`labelStartLink`,resolveAll:br.resolveAll,tokenize:Nr};function Nr(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelLink`),o}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var Pr={name:`lineEnding`,tokenize:Fr};function Fr(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),L(e,t,`linePrefix`)}}var Ir={name:`thematicBreak`,tokenize:Lr};function Lr(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||P(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),I(t)?L(e,s,`whitespace`)(t):s(t))}}var Rr={continuation:{tokenize:Hr},exit:Wr,name:`list`,tokenize:Vr},zr={partial:!0,tokenize:Gr},Br={partial:!0,tokenize:Ur};function Vr(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Zt(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(Ir,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Zt(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(xn,r.interrupt?n:u,e.attempt(zr,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return I(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function Hr(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(xn,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,L(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!I(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Br,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,L(e,e.attempt(Rr,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Ur(e,t,n){let r=this;return L(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Wr(e){e.exit(this.containerState.type)}function Gr(e,t,n){let r=this;return L(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!I(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Kr={name:`setextUnderline`,resolveTo:qr,tokenize:Jr};function qr(e,t){let n=new sn,r=e.length,i,a,o;for(;r--;)if(e[r][0]===`enter`){if(e[r][1].type===`content`){i=r;break}e[r][1].type===`paragraph`&&(a=r)}else e[r][1].type===`content`&&n.add(r,1,[]),!o&&e[r][1].type===`definition`&&(o=r);let s={type:`setextHeading`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type=`setextHeadingText`,o?(n.add(a,0,[[`enter`,s,t]]),n.add(o+1,0,[[`exit`,e[i][1],t]]),e[i][1].end={...e[o][1].end}):e[i][1]=s,n.add(e.length,0,[[`exit`,s,t]]),n.consume(e),e}function Jr(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),I(t)?L(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||P(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Yr={tokenize:Xr};function Xr(e){let t=this,n=e.attempt(xn,r,e.attempt(this.parser.constructs.flowInitial,i,L(e,e.attempt(this.parser.constructs.flow,i,e.attempt(qn,i)),`linePrefix`)));return n;function r(r){if(r===null)e.consume(r);else return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null)e.consume(r);else return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Zr={resolveAll:ti()},Qr=ei(`string`),$r=ei(`text`);function ei(e){return{resolveAll:ti(e===`text`?ni:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null)t.consume(e);else return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function ti(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):t[r]&&t[r][1].type===`data`||(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function ni(e,t){let n=new sn,r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type===`lineEnding`)&&e[r-1][1].type===`data`){let i=e[r-1][1],a=t.sliceStream(i),o=a.length,s=-1,c=0,l;for(;o--;){let e=a[o];if(typeof e==`string`){for(s=e.length;e.charCodeAt(s-1)===32;)c++,s--;if(s)break;s=-1}else if(e===-2)l=!0,c++;else if(e!==-1){o++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(c=0),c){let a={type:r===e.length||l||c<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...a.start},i.start.offset===i.end.offset?Object.assign(i,a):n.add(r,0,[[`enter`,a,t],[`exit`,a,t]])}r++}return n.consume(e),e}var ri=s({attentionMarkers:()=>di,contentInitial:()=>ai,disable:()=>fi,document:()=>ii,flow:()=>si,flowInitial:()=>oi,insideSpan:()=>ui,string:()=>ci,text:()=>li}),ii={42:Rr,43:Rr,45:Rr,48:Rr,49:Rr,50:Rr,51:Rr,52:Rr,53:Rr,54:Rr,55:Rr,56:Rr,57:Rr,62:Cn},ai={91:nr},oi={[-2]:Fn,[-1]:Fn,32:Fn},si={35:cr,42:Ir,45:[Kr,Ir],60:pr,61:Kr,95:Ir,96:Nn,126:Nn},ci={38:kn,92:Dn},li={[-5]:Pr,[-4]:Pr,[-3]:Pr,33:Ar,38:kn,42:hn,60:[yn,vr],91:Mr,92:[or,Dn],93:br,95:hn,96:zn},ui={null:[hn,Zr]},di={null:[42,95]},fi={null:[]};function pi(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:ne(ee),check:ne(te),consume:v,enter:y,exit:b,interrupt:ne(te,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=Bt(o,e),g(),o[o.length-1]===null?(re(t,0),l.events=mn(a,l.events,l),l.events):[]}function f(e,t){return hi(p(e),t)}function p(e){return mi(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,S()}function g(){for(;r._index<o.length;){let e=o[r._index];if(typeof e==`string`){let t=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===t&&r._bufferIndex<e.length;)_(e.charCodeAt(r._bufferIndex))}else _(e)}}function _(e){u=u(e)}function v(e){P(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,S()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function ee(e,t){re(e,t.from)}function te(e,t){t.restore()}function ne(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=x(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function re(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&zt(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function x(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function mi(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function hi(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function gi(e){let t={constructs:Ht([ri,...(e||{}).extensions||[]]),content:n(an),defined:[],document:n(ln),flow:n(Yr),lazy:{},string:n(Qr),text:n($r)};return t;function n(e){return n;function n(n){return pi(t,e,n)}}}function _i(e){for(;!Gn(e););return e}var vi=/[\0\t\n\r]/g;function yi(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i));let s=[],c=0;for(t=``,n&&=(i.charCodeAt(0)===65279&&c++,void 0);c<i.length;){vi.lastIndex=c;let n=vi.exec(i),a=n&&n.index!==void 0?n.index:i.length,o=i.charCodeAt(a);if(!n){t=i.slice(c);break}if(o===10&&c===a&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),c<a&&(s.push(i.slice(c,a)),e+=a-c),o){case 0:s.push(65533),e++;break;case 9:{let t=Math.ceil(e/4)*4;for(s.push(-2);e++<t;)s.push(-1);break}case 10:s.push(-4),e=1;break;default:r=!0,e=1}c=a+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var bi=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function xi(e){return e.replace(bi,Si)}function Si(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Gt(n.slice(t?2:1),t?16:10)}return Rt(n)||e}var Ci={}.hasOwnProperty;function wi(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Ti(n)(_i(gi(n).document().write(yi()(e,t,!0))))}function Ti(e){let t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:o(we),autolinkProtocol:S,autolinkEmail:S,atxHeading:o(j),blockQuote:o(_e),characterEscape:S,characterReference:S,codeFenced:o(ve),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(ve,s),codeText:o(ye,s),codeTextData:S,data:S,codeFlowValue:S,definition:o(be),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(A),hardBreakEscape:o(xe),hardBreakTrailing:o(xe),htmlFlow:o(Se,s),htmlFlowData:S,htmlText:o(Se,s),htmlTextData:S,image:o(Ce),label:s,link:o(we),listItem:o(M),listItemValue:p,listOrdered:o(Te,f),listUnordered:o(Te),paragraph:o(Ee),reference:ue,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(j),strong:o(De),thematicBreak:o(ke)},exit:{atxHeading:l(),atxHeadingSequence:te,autolink:l(),autolinkEmail:ge,autolinkProtocol:he,blockQuote:l(),characterEscapeValue:C,characterReferenceMarkerHexadecimal:fe,characterReferenceMarkerNumeric:fe,characterReferenceValue:pe,characterReference:me,codeFenced:l(_),codeFencedFence:g,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:C,codeIndented:l(v),codeText:l(E),codeTextData:C,data:C,definition:l(),definitionDestinationString:ee,definitionLabelString:y,definitionTitleString:b,emphasis:l(),hardBreakEscape:l(T),hardBreakTrailing:l(T),htmlFlow:l(ie),htmlFlowData:C,htmlText:l(ae),htmlTextData:C,image:l(oe),label:k,labelText:O,lineEnding:w,link:l(D),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:de,resourceDestinationString:se,resourceTitleString:ce,resource:le,setextHeading:l(x),setextHeadingLineSequence:re,setextHeadingText:ne,strong:l(),thematicBreak:l()}};Di(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[],position:void 0},o={stack:[r],tokenStack:[],config:t,enter:c,exit:u,buffer:s,resume:d,data:n},l=[],f=[],p=-1;for(;++p<e.length;)f.push(e[p]),(e[p][1].type===`listOrdered`||e[p][1].type===`listUnordered`)&&(e[p][0]===`enter`?l.push(f.length-1):a(f,l.pop()));for(e=f,p=-1;++p<e.length;){let n=t[e[p][0]];e[p][0]===`enter`&&t.beforeEnter.length>0&&i(t.beforeEnter,{...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1]),Ci.call(n,e[p][1].type)&&n[e[p][1].type].call({...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1]),e[p][0]===`exit`&&t.afterExit.length>0&&i(t.afterExit,{...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1])}if(o.tokenStack.length>0){let e=o.tokenStack[o.tokenStack.length-1];(e[1]||ki).call(o,void 0,e[0])}for(r.position={start:Ei(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Ei(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},p=-1;++p<t.transforms.length;)r=t.transforms[p](r)||r;return r}function i(e,t,n){let r=-1;for(;++r<e.length;)e[r].call(t,n)}function a(e,t){let n=e.length-1,r=t-1,i=-1,a=!1,o,s,c,l,u=[];for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let n=r;for(s=void 0;n--;){let t=e[n];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=n}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),u.push({at:s||r,event:[`exit`,o,t[2]]})}if(t[1].type===`listItemPrefix`){let e={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=e,u.push({at:r,event:[`enter`,e,t[2]]}),c=void 0,l=!0}}}let d=e.splice(t),f=0;for(r=-1;++r<d.length;){for(;f<u.length&&u[f].at===t+r;)e.push(u[f++].event);e.push(d[r])}e[t][1]._spread=a}function o(e,t){return n;function n(n){c.call(this,e(n),n),t&&t.call(this,n)}}function s(){this.stack.push({type:`fragment`,children:[]})}function c(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Ei(t.start),end:void 0}}function l(e){return t;function t(t){e&&e.call(this,t),u.call(this,t)}}function u(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw Error("Cannot close `"+e.type+"` ("+Je({start:e.start,end:e.end})+`): it’s not open`);r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||ki).call(this,e,r[0])),n.position.end=Ei(e.end)}function d(){return Nt(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function h(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function v(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function y(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Kt(this.sliceSerialize(e)).toLowerCase()}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function ee(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function te(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function ne(){this.data.setextHeadingSlurpLineEnding=!0}function re(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function x(){this.data.setextHeadingSlurpLineEnding=void 0}function S(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];n&&n.type===`text`||(n=Oe(),n.position={start:Ei(e.start),end:void 0},t.push(n)),this.stack.push(n)}function C(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Ei(e.end)}function w(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Ei(e.end),this.data.atHardBreak=void 0}else!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(S.call(this,e),C.call(this,e))}function T(){this.data.atHardBreak=!0}function ie(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ae(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function E(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function D(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function oe(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function O(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=xi(t),n.identifier=Kt(t).toLowerCase()}function k(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function se(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function ce(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function le(){this.data.inReference=void 0}function ue(){this.data.referenceType=`collapsed`}function de(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Kt(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function fe(e){this.data.characterReferenceType=e.type}function pe(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Gt(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=Rt(t);let i=this.stack[this.stack.length-1];i.value+=r}function me(e){let t=this.stack.pop();t.position.end=Ei(e.end)}function he(e){C.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function ge(e){C.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function _e(){return{type:`blockquote`,children:[],position:void 0}}function ve(){return{type:`code`,lang:null,meta:null,value:``,position:void 0}}function ye(){return{type:`inlineCode`,value:``,position:void 0}}function be(){return{type:`definition`,identifier:``,label:null,title:null,url:``,position:void 0}}function A(){return{type:`emphasis`,children:[],position:void 0}}function j(){return{type:`heading`,depth:0,children:[],position:void 0}}function xe(){return{type:`break`,position:void 0}}function Se(){return{type:`html`,value:``,position:void 0}}function Ce(){return{type:`image`,title:null,url:``,alt:null,position:void 0}}function we(){return{type:`link`,title:null,url:``,children:[],position:void 0}}function Te(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[],position:void 0}}function M(e){return{type:`listItem`,spread:e._spread,checked:null,children:[],position:void 0}}function Ee(){return{type:`paragraph`,children:[],position:void 0}}function De(){return{type:`strong`,children:[],position:void 0}}function Oe(){return{type:`text`,value:``,position:void 0}}function ke(){return{type:`thematicBreak`,position:void 0}}}function Ei(e){return{line:e.line,column:e.column,offset:e.offset}}function Di(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Di(e,r):Oi(e,r)}}function Oi(e,t){let n;for(n in t)if(Ci.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`afterExit`:case`beforeEnter`:{let r=t[n];r&&e[n].push(r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function ki(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Je({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Je({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Je({start:t.start,end:t.end})+`) is still open`)}function Ai(e){let t=this;t.parser=n;function n(n){return wi(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function ji(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Mi(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function Ni(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function Pi(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fi(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ii(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=nn(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Li(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ri(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function zi(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function Bi(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zi(e,t);let i={src:nn(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Vi(e,t){let n={src:nn(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Hi(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ui(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zi(e,t);let i={href:nn(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Wi(e,t){let n={href:nn(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Gi(e,t,n){let r=e.all(t),i=n?Ki(n):qi(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Ki(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=qi(n[r])}return t}function qi(e){return e.spread??e.children.length>1}function Ji(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Yi(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xi(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Zi(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Qi(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Ge(t.children[1]),o=We(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function $i(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function ea(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var ta=9,na=32;function ra(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(ia(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(ia(t.slice(i),i>0,!1)),a.join(``)}function ia(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===ta||t===na;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===ta||t===na;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function aa(e,t){let n={type:`text`,value:ra(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function R(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var z={blockquote:ji,break:Mi,code:Ni,delete:Pi,emphasis:Fi,footnoteReference:Ii,heading:Li,html:Ri,imageReference:Bi,image:Vi,inlineCode:Hi,linkReference:Ui,link:Wi,listItem:Gi,list:Ji,paragraph:Yi,root:Xi,strong:Zi,table:Qi,tableCell:ea,tableRow:$i,text:aa,thematicBreak:R,toml:oa,yaml:oa,definition:oa,footnoteDefinition:oa};function oa(){}var{defineProperty:sa}=Object,ca=typeof self==`object`?self:globalThis,la=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new ca[e](t)},ua=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?sa(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof ca[e]==`function`?la(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}case`-0`:return-0}return n(la(a,o),i)};return r},da=e=>ua(new Map,e)(0),fa=``,{toString:pa}={},{keys:ma,is:ha}=Object,ga=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=pa.call(e).slice(8,-1);switch(n){case`Array`:return[1,fa];case`Object`:return[2,fa];case`Date`:return[3,fa];case`RegExp`:return[4,fa];case`Map`:return[5,fa];case`Set`:return[6,fa];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},_a=([e,t])=>e===0&&(t===`function`||t===`symbol`),va=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=o=>{if(n.has(o))return n.get(o);let[s,c]=ga(o);switch(s){case 0:{let t=o;switch(c){case`bigint`:s=8,t=o.toString();break;case`number`:if(!o&&ha(o,-0))return r.push([`-0`])-1;break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+c);t=null;break;case`undefined`:return i([-1],o)}return i([s,t],o)}case 1:{if(c){let e=o;return c===`DataView`?e=new Uint8Array(o.buffer):c===`ArrayBuffer`&&(e=new Uint8Array(o)),i([c,[...e]],o)}let e=[],t=i([s,e],o);for(let t of o)e.push(a(t));return t}case 2:{if(c)switch(c){case`BigInt`:return i([c,o.toString()],o);case`Boolean`:case`Number`:case`String`:return i([c,o.valueOf()],o)}if(t&&`toJSON`in o)return a(o.toJSON());let n=[],r=i([s,n],o);for(let t of ma(o))(e||!_a(ga(o[t])))&&n.push([a(t),a(o[t])]);return r}case 3:return i([s,isNaN(o.getTime())?fa:o.toISOString()],o);case 4:{let{source:e,flags:t}=o;return i([s,{source:e,flags:t}],o)}case 5:{let t=[],n=i([s,t],o);for(let[n,r]of o)(e||!(_a(ga(n))||_a(ga(r))))&&t.push([a(n),a(r)]);return n}case 6:{let t=[],n=i([s,t],o);for(let n of o)(e||!_a(ga(n)))&&t.push(a(n));return n}}let{message:l}=o;return i([s,{name:c,message:l}],o)};return a},ya=(e,{json:t,lossy:n}={})=>{let r=[];return va(!(t||n),!!t,new Map,r)(e),r},ba=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?da(ya(e,t)):structuredClone(e):(e,t)=>da(ya(e,t));function xa(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Sa(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Ca(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||xa,r=e.options.footnoteBackLabel||Sa,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=nn(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...ba(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var wa=(function(e){if(e==null)return ka;if(typeof e==`function`)return Oa(e);if(typeof e==`object`)return Array.isArray(e)?Ta(e):Ea(e);if(typeof e==`string`)return Da(e);throw Error(`Expected function, string, or object as test`)});function Ta(e){let t=[],n=-1;for(;++n<e.length;)t[n]=wa(e[n]);return Oa(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Ea(e){let t=e;return Oa(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Da(e){return Oa(t);function t(t){return t&&t.type===e}}function Oa(e){return t;function t(t,n,r){return!!(Aa(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function ka(){return!0}function Aa(e){return typeof e==`object`&&!!e&&`type`in e}function ja(e){return e}var Ma=[],Na=`skip`;function Pa(e,t,n,r){if(!e||typeof e!=`object`)throw Error("Unexpected value `"+e+"` for `tree`, expected node");let i=!0,a,o,s,c;if(typeof n==`function`||n&&typeof n==`object`?(a=t,o=n,r&&(i=!1)):(o=t,n&&(i=!1)),typeof o==`function`)s=o;else if(o&&typeof o==`object`){if(o.enter!==null&&o.enter!==void 0){if(typeof o.enter==`function`)s=o.enter;else throw Error("Unexpected value `"+o.enter+"` for `visitors.enter`, expected optional visitor")}if(typeof o.exit==`function`)c=o.exit;else throw Error("Unexpected value `"+o.exit+"` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)")}else throw Error("Unexpected value `"+o+"` for `enter` or `visitors`, expected visitor or object with visitors");let l=wa(a),u=i?1:-1;d(e,void 0,[])();function d(e,t,n){let r=e&&typeof e==`object`?e:{};if(typeof r.type==`string`){let t=typeof r.tagName==`string`?r.tagName:typeof r.name==`string`?r.name:void 0;Object.defineProperty(o,"name",{value:`node (`+ja(e.type+(t?`<`+t+`>`:``))+`)`})}return o;function o(){let r=!a||l(e,t,n[n.length-1]||void 0),o=Ma;if(s&&r&&(o=Fa(s(e,n,t)),o[0]===!1))return o;if(`children`in e&&e.children){let t=e;if(t.children&&o[0]!==`skip`){let e=(i?-1:t.children.length)+u,r=[...n,t];for(;e>-1&&e<t.children.length;){let n=t.children[e],i=d(n,e,r)();if(i[0]===!1)return i;e=typeof i[1]==`number`?i[1]:e+u}}}if(c&&r){let r=Fa(c(e,n,t));if(r[0]===`skip`)throw Error("Unexpected value `"+r[0]+"` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");if(r[0]===!1||typeof r[1]==`number`)return r}return o}}}function Fa(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Ma:[e]}function Ia(e,t,n,r){let i,a,o;typeof n==`function`||n&&typeof n==`object`?(i=t,a=n,o=r):(a=t,o=n),typeof a==`function`?Pa(e,i,Ra(a),o):Pa(e,i,La(a),o)}function La(e){return!e||typeof e!=`object`?e:{enter:typeof e.enter==`function`?Ra(e.enter):e.enter,exit:typeof e.exit==`function`?Ra(e.exit):e.exit}}function Ra(e){return t;function t(t,n,r){return e(t,r,n[n.length-1])}}var za={}.hasOwnProperty,Ba={};function Va(e,t){let n=t||Ba,r=new Map,i=new Map,a={all:s,applyData:Ua,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...z,...n.handlers},one:o,options:n,patch:Ha,wrap:Ga};return Ia(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(za.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=ba(n);return r.children=a.all(e),r}return ba(e)}return(a.options.unknownHandler||Wa)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Ka(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Ka(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Ha(e,t){e.position&&(t.position=qe(e))}function Ua(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,ba(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Wa(e,t){let n=t.data||{},r=`value`in t&&!(za.call(n,`hProperties`)||za.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ga(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Ka(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function qa(e,t){let n=Va(e,t),r=n.one(e,void 0),i=Ca(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function Ja(e,t){return e&&`run`in e?async function(n,r){let i=qa(n,{file:r,...t});await e.run(i,r)}:function(n,r){return qa(n,{file:r,...e||t})}}function Ya(e){if(e)throw e}var Xa=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function Za(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Qa(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a)r(a);else{for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?$a(s,i)(...o):r(null,...o)}}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function $a(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var eo={basename:to,dirname:no,extname:ro,join:io,sep:`/`};function to(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);so(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function no(e){if(so(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function ro(e){so(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}}else n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function io(...e){let t=-1,n;for(;++t<e.length;)so(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:ao(n)}function ao(e){so(e);let t=e.codePointAt(0)===47,n=oo(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function oo(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function so(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var co={cwd:lo};function lo(){return`/`}function uo(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function fo(e){if(typeof e==`string`)e=new URL(e);else if(!uo(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return po(e)}function po(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var mo=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],ho=class{constructor(e){let t;t=e?uo(e)?{path:e}:typeof e==`string`||yo(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:co.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<mo.length;){let e=mo[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)mo.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?eo.basename(this.path):void 0}set basename(e){_o(e,`basename`),go(e,`basename`),this.path=eo.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?eo.dirname(this.path):void 0}set dirname(e){vo(this.basename,`dirname`),this.path=eo.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?eo.extname(this.path):void 0}set extname(e){if(go(e,`extname`),vo(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=eo.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){uo(e)&&(e=fo(e)),_o(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?eo.basename(this.path,this.extname):void 0}set stem(e){_o(e,`stem`),go(e,`stem`),this.path=eo.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Qe(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function go(e,t){if(e&&e.includes(eo.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+eo.sep+"`")}function _o(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function vo(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function yo(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var bo=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),xo=l(Xa(),1),So={}.hasOwnProperty,Co=new class e extends bo{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Qa()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,xo.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Eo(`data`,this.frozen),this.namespace[e]=t,this):So.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Eo(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=ko(e),n=this.parser||this.Parser;return wo(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),wo(`process`,this.parser||this.Parser),To(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=ko(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);jo(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),wo(`processSync`,this.parser||this.Parser),To(`processSync`,this.compiler||this.Compiler),this.process(e,r),Oo(`processSync`,`process`,t),n;function r(e,r){t=!0,Ya(e),n=r}}run(e,t,n){Do(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=ko(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Oo(`runSync`,`run`,n),r;function i(e,t){Ya(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=ko(t),r=this.compiler||this.Compiler;return To(`stringify`,r),Do(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Eo(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,xo.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];Za(o)&&Za(r)&&(r=(0,xo.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function wo(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function To(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Eo(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Do(e){if(!Za(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Oo(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function ko(e){return Ao(e)?e:new ho(e)}function Ao(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function jo(e){return typeof e==`string`||Mo(e)}function Mo(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var B=jt(),V=l(d(),1),No=[],Po={allowDangerousHtml:!0},Fo=/^(https?|ircs?|mailto|xmpp)$/i,Io=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Lo(e){let t=Ro(e),n=zo(e);return Bo(t.runSync(t.parse(n),n),e)}function Ro(e){let t=e.rehypePlugins||No,n=e.remarkPlugins||No,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Po}:Po;return Co().use(Ai).use(n).use(Ja,r).use(t)}function zo(e){let t=e.children||``,n=new ho;return typeof t==`string`?n.value=t:``+t,n}function Bo(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||Vo;for(let e of Io)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return Ia(e,l),ot(e,{Fragment:B.Fragment,components:i,ignoreInvalidStyle:!0,jsx:B.jsx,jsxs:B.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in kt)if(Object.hasOwn(kt,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=kt[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function Vo(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Fo.test(e.slice(0,t))?e:``}function H(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function U(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function Ho(e,t,n){let r=wa((n||{}).ignore||[]),i=Uo(t),a=-1;for(;++a<i.length;)Pa(e,o);function o(e,t,n){if(e.type===`text`&&typeof n==`number`)return s(e,t,n);if(r(e,n,t[t.length-1]))return Na}function s(e,t,n){let r=t[t.length-1],o=i[a][0],s=i[a][1],c=0,l=!1,u=[];o.lastIndex=0;let d=o.exec(e.value);for(;d;){let n=d.index,r={index:d.index,input:d.input,stack:[...t,e]},i=s(...d,r);if(typeof i==`string`&&(i=i.length>0?{type:`text`,value:i}:void 0),i===!1)o.lastIndex=n+1;else{if(c!==n&&f({type:`text`,value:e.value.slice(c,n)}),Array.isArray(i))for(let e of i)f(e);else i&&f(i);c=n+d[0].length,l=!0}if(!o.global)break;d=o.exec(e.value)}return l?(c<e.value.length&&f({type:`text`,value:e.value.slice(c)}),r.children.splice(n,1,...u)):u=[e],n+u.length;function f(e){let t=u[u.length-1];t&&t.type===`text`&&e.type===`text`?t.value+=e.value:u.push(e)}}}function Uo(e){if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let t=[],n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Wo(e[0]),Go(e[1])])}return t}function Wo(e){return typeof e==`string`?new RegExp(U(e),`g`):e}function Go(e){return typeof e==`function`?e:function(){return e}}var Ko=`phrasing`,qo=[`autolink`,`link`,`image`,`label`];function Jo(){return{transforms:[ns],enter:{literalAutolink:Xo,literalAutolinkEmail:Zo,literalAutolinkHttp:Zo,literalAutolinkWww:Zo},exit:{literalAutolink:ts,literalAutolinkEmail:es,literalAutolinkHttp:Qo,literalAutolinkWww:$o}}}function Yo(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Ko,notInConstruct:qo},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Ko,notInConstruct:qo},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Ko,notInConstruct:qo}]}}function Xo(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function Zo(e){this.config.enter.autolinkProtocol.call(this,e)}function Qo(e){this.config.exit.autolinkProtocol.call(this,e)}function $o(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function es(e){this.config.exit.autolinkEmail.call(this,e)}function ts(e){this.exit(e)}function ns(e){Ho(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,rs],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,is]],{ignore:[`link`,`linkReference`]})}function rs(e,t,n,r,i){let a=``;if(!ss(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!as(n)))return!1;let o=os(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function is(e,t,n,r){return!ss(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function as(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function os(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=H(e,`(`),a=H(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function ss(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||en(n)||$t(n))&&(!t||n!==47)}_s.peek=gs;function cs(){this.buffer()}function ls(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function us(){this.buffer()}function ds(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function fs(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Kt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function ps(e){this.exit(e)}function ms(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Kt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function hs(e){this.exit(e)}function gs(){return`[`}function _s(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function vs(){return{enter:{gfmFootnoteCallString:cs,gfmFootnoteCall:ls,gfmFootnoteDefinitionLabelString:us,gfmFootnoteDefinition:ds},exit:{gfmFootnoteCallString:fs,gfmFootnoteCall:ps,gfmFootnoteDefinitionLabelString:ms,gfmFootnoteDefinition:hs}}}function ys(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:_s},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?xs:bs))),s(),o}}function bs(e,t,n){return t===0?e:xs(e,t,n)}function xs(e,t,n){return(n?``:`    `)+e}var Ss=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Ds.attention=Os,Ds.peek=ks;function Cs(){return{canContainEols:[`delete`],enter:{strikethrough:Ts},exit:{strikethrough:Es}}}function ws(){return{handlers:{delete:Ds},unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:Ss}]}}function Ts(e){this.enter({type:`delete`,children:[],position:void 0},e)}function Es(e){this.exit(e)}function Ds(e,t,n,r){let i=n.createTracker(r),a=n.stack.includes(`strikethrough`)?`~`:`~~`,o=n.enter(`strikethrough`),s=i.move(a);return s+=n.containerPhrasing(e,{...i.current(),before:s,after:`~`}),s+=i.move(a),o(),s}function Os(){return{construct:`strikethrough`,markers:[`~`],sizes:[2,1]}}function ks(){return`~`}function As(e){return e.length}function js(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||As,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=Ms(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Ns(r[d]);else{let e=Ns(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding===!1||n.alignDelimiters===!1&&i===``||n.delimiterStart===!1&&!d||r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function Ms(e){return e==null?``:String(e)}function Ns(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}var Ps=wa([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function Fs(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Is);return i(),o}function Is(e,t,n){return`>`+(n?``:` `)+e}function Ls(e,t){return Rs(e,t.inConstruct,!0)&&!Rs(e,t.notInConstruct,!1)}function Rs(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function zs(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;){let e=n.unsafe[i];if(e.character===`
`&&!e.before&&!e.after&&Ls(n.stack,e))return/[\t ]/.test(r.before)?``:` `}return`\\
`}function Bs(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Vs(e,t){return!(t.options.fences!==!1||!e.value||e.lang||!/[^\n\r ]/.test(e.value)||/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function Hs(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Us(e,t,n,r){let i=Hs(n),a=e.value||``;if(Vs(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Ws);return e(),t}let o=n.createTracker(r),s=i.repeat(Math.max(Bs(a,i)+1,3)),c=n.enter(`codeFenced`),l=i==="`"?`GraveAccent`:`Tilde`,u=o.move(s);if(e.lang){let t=n.enter(`codeFencedLang${l}`);u+=o.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...o.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${l}`);u+=o.move(` `),u+=o.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...o.current()})),t()}return u+=o.move(`
`),a&&(u+=o.move(a+`
`)),u+=o.move(s),c(),u}function Ws(e,t,n){return(n?``:`    `)+e}function Gs(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Ks(e,t,n,r){let i=Gs(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function qs(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Js(e){let t=e.codePointAt(0);return t===void 0?``:String.fromCodePoint(t)}function Ys(e){let t=e.codePointAt(e.length-2);return t!==void 0&&t>65535?e.slice(-2):e.slice(-1)}function Xs(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function Zs(e,t,n){let r=pn(e),i=pn(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}function Qs(e){if(e.charCodeAt(0)!==60)return;let t=e.charCodeAt(1);if(t===33){let t=e.charCodeAt(2);return t===45?2:t===91?5:qt(t)?4:void 0}if(t===63)return 3;let n=t===47,r=n?2:1,i=r,a=e.charCodeAt(i);if(!qt(a))return;for(;a===45||Jt(a);)a=e.charCodeAt(++i);let o=e.slice(r,i).toLowerCase();return!n&&a!==47&&fr.includes(o)?1:dr.includes(o)?6:7}var $s=new Map([[`*`,!1],[`_`,!0]]);function ec(e,t,n){let r=new Set;for(let i of e){let e=n.get(i);if(e&&i.attention&&t.some(e=>e.attention===i.attention))for(let t of e.tokens)r.add(t.attention)}let i=[];for(let t of e)t.attention&&r.delete(t.attention)&&i.push(t.attention);return i.reverse(),i}function tc(e,t,n){let r=[],i=new Map,a=new Map,o=0;for(;o<e.length;){if(!e[o].attention){o++;continue}let s=e[o].value.charAt(0),c=$s.get(s),l=o+1;for(;l<e.length&&e[l].attention&&e[l].value.charAt(0)===s;)l++;let u=o?e[o-1].value:t,d=pn(u.charCodeAt(u.length-1)),f=pn((l<e.length?e[l].value:n).charCodeAt(0)),p=!f||f===2&&!!d,m=!d||d===2&&!!f,h={tokens:e.slice(o,l),markers:[],start:0,end:0,open:c?p&&(!!d||!m):p,close:c?m&&(!!f||!p):m,split:c!==void 0};for(let e of h.tokens){i.set(e,[...h.tokens]),a.set(e,h);let t=e.value.length;for(;t--;)h.markers.push(e)}h.end=h.markers.length,r.push(h),o=l}for(ic(r,i),o=-1;++o<e.length;){let t=i.get(e[o]);if(t)return{attention:ec(e,t,a),index:o}}}function nc(e,t){let n=e[t?0:e.length-1];if(!n||n.attention)return;let r=t?Js(n.value):Ys(n.value),i=Xs(r.codePointAt(0));if(t)n.value=i+n.value.slice(r.length);else{let e=n.value.slice(0,n.value.length-r.length),t=0;for(;e.charCodeAt(e.length-1-t)===92;)t++;t%2&&(e+=`\\`),n.value=e+i}}function rc(e,t,n,r,i){for(let a of n.attention){let o=t.get(a)||a.sequences[0];for(let s of a.sequences){if(s===o)continue;let c=new Map(t);c.set(a,s);let l=cc(e,c,r,i),u=tc(l,r,i);if(!u||u.index>n.index)return{chosen:c,mistake:u,tokens:l}}}}function ic(e,t){let n=new Map;for(let r of e){let e=r.tokens[0].value.charAt(0),i=n.get(e);i||(i=[],n.set(e,i));let a=r.close?i.length:0;for(;a--&&r.start<r.end;){let e=i[a],n=e.end-e.start,o=r.end-r.start;if(r.split?(e.close||r.open)&&o%3&&!((n+o)%3):n!==e.markers.length||n!==o)continue;let s=r.split?n>1&&o>1?2:1:o,c=e.markers.slice(e.end-s,e.end),l=r.markers.slice(r.start,r.start+s),u=c[0],d=l[0];if(u===c[s-1]&&u.value.length===s&&d===l[s-1]&&d.value.length===s&&u.attention===d.attention)t.delete(u),t.delete(d);else{let e=[...new Set([...c,...l])];for(let n of e){let r=t.get(n);r&&r.push(...e)}}e.end-=s,r.start+=s,e.start===e.end&&i.splice(a,1),a=i.length}r.open&&r.start<r.end&&i.push(r)}}function ac(e,t,n){if(t.length===0)throw Error("Cannot serialize `"+e+"` as attention without markers, expected one or more markers");if(n.length===0)throw Error("Cannot serialize `"+e+"` as attention without sizes, expected one or more sizes");for(let t of n)if(!Number.isSafeInteger(t)||t<1)throw Error("Cannot serialize `"+e+"` as attention with `"+t+"` as size, expected positive integer");let r=[];for(let i of t){if(i.length!==1)throw Error("Cannot serialize `"+e+"` as attention with `"+i+"` as marker, expected a single ascii character");if(!Qt(i.charCodeAt(0)))throw Error("Cannot serialize `"+e+"` as attention with `"+i+"` as marker, expected ascii punctuation");for(let e of n)r.push(i.repeat(e))}return r}function oc(e,t,n){let r=t.indexStack,i=e.children||[],a=[],o=-1,s=n.before;r.push(-1);let c=t.createTracker(n);for(;++o<i.length;){let l=i[o],u;if(r[r.length-1]=o,o+1<i.length){let n=t.handle.handlers[i[o+1].type];n&&n.peek&&(n=n.peek),u=n?Js(n(i[o+1],e,t,{before:``,after:``,...c.current()})):``}else u=n.after;let d=a[a.length-1];typeof d==`string`&&(s===`\r`||s===`
`)&&l.type===`html`&&Qs(l.value)!==7&&(a[a.length-1]=d.replace(/(\r?\n|\r)$/,` `),s=` `,c=t.createTracker(n),c.move(lc(a,n.before,n.after)));let f=t.handle.handlers[l.type];if(f&&f.attention){let e=sc(l,f.attention,t,c);a.push(e),s=Ys(e.sequences[0])}else{let n=t.handle(l,e,t,{...c.current(),after:u,before:s});if(!n)continue;c.move(n),a.push(n),s=Ys(n)}}return r.pop(),a}function sc(e,t,n,r){let{construct:i,markers:a,sizes:o}=t(e,n),s=ac(e.type,a,o),c=s[0],l=n.enter(i);r.move(c);let u=oc(e,n,{...r.current(),before:c,after:c});return r.move(lc(u,c,c)),r.move(c),l(),{children:u,sequences:s}}function cc(e,t,n,r){let i=[],a,o=Ys(n),s=-1;for(;++s<e.length;){let n=e[s];if(typeof n==`string`){let e={value:n,attention:void 0};a&&a===Js(n)&&nc([e],!0),a=void 0,i.push(e),e.value&&(o=Ys(e.value));continue}let c=t.get(n)||n.sequences[0],l=c.charAt(0),u=e[s+1],d=o,f=Js(u===void 0?r:typeof u==`string`?u:t.get(u)||u.sequences[0]),p=cc(n.children,t,c,c),m=p.length>0?p[0].value:``,h=Zs(d.charCodeAt(d.length-1),m.charCodeAt(0),l);h.inside&&nc(p,!0);let g=p.length>0?Ys(p[p.length-1].value):``,_=Zs(f.charCodeAt(0),g.charCodeAt(g.length-1),l);_.inside&&nc(p,!1),h.outside&&d!==`
`&&d!==`\r`&&nc(i,!1),_.outside&&(a=f),i.push({value:c,attention:n},...p,{value:c,attention:n}),o=c.charAt(c.length-1)}return i}function lc(e,t,n){let r=new Map,i=cc(e,r,t,n),a=i,o=tc(a,t,n);for(;o;){let s=rc(e,r,o,t,n);if(!s){a=i;break}r=s.chosen,a=s.tokens,o=s.mistake}let s=``;for(let e of a)s+=e.value;return s}uc.attention=dc,uc.peek=fc;function uc(e,t,n,r){let i=n.enter(`phrasing`),a=lc([sc(e,dc,n,n.createTracker(r))],r.before,r.after);return i(),a}function dc(e,t){return{construct:`emphasis`,markers:qs(t)===`*`?[`*`,`_`]:[`_`,`*`],sizes:[1]}}function fc(e,t,n){return n.options.emphasis||`*`}function pc(e,t){let n=!1;return Ia(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&Nt(e)&&(t.options.setext||n))}function mc(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(pc(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()}),u=l.charCodeAt(0);return(u===9||u===32)&&(l=Xs(u)+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}hc.peek=gc;function hc(e){return e.value||``}function gc(){return`<`}_c.peek=vc;function _c(e,t,n,r){let i=Gs(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function vc(){return`!`}yc.peek=bc;function yc(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=u.filter(function(e){return e!==`phrasing`}),o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function bc(){return`!`}xc.peek=Sc;function xc(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e);if(!e.atBreak)continue;let i;for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Sc(){return"`"}function Cc(e,t){let n=Nt(e);return!(t.options.resourceLink||!e.url||e.title||!e.children||e.children.length!==1||e.children[0].type!==`text`||n!==e.url&&`mailto:`+n!==e.url||!/^[a-z][+\-.a-z]+:/i.test(e.url)||/[\0- <>\u007F]/.test(e.url))}wc.peek=Tc;function wc(e,t,n,r){let i=Gs(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r);if(Cc(e,n)){let t=n.stack;n.stack=t.filter(function(e){return e!==`phrasing`});let r=n.enter(`autolink`),i=o.move(`<`);return i+=o.move(n.containerPhrasing(e,{before:i,after:`>`,...o.current()})),i+=o.move(`>`),r(),n.stack=t,i}let s=n.enter(`link`),c=n.enter(`label`),l=o.move(`[`),u=n.containerPhrasing(e,{before:l,after:`](`,...o.current()});l+=o.move(u),c(),l+=o.move(`](`);let d=/[\0- \u007F]/.test(e.url),f=r.before.charAt(r.before.length-1),p=e.title||void 0;if(!p&&!d&&(f===`
`||f===`\r`)){let e=0;for(;e<u.length&&u.charCodeAt(e)!==93;)e+=u.charCodeAt(e)===92?2:1;u.charCodeAt(e+1)===58&&(p=``)}return!e.url&&typeof p==`string`||d?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:typeof p==`string`?` `:`)`,...o.current()}))),c(),typeof p==`string`&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(p,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function Tc(e,t,n){return Cc(e,n)?`<`:`[`}Ec.peek=Dc;function Ec(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=u.filter(function(e){return e!==`phrasing`}),o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Dc(){return`[`}function Oc(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function kc(e){let t=Oc(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Ac(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function jc(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Mc(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?Ac(n):Oc(n),s=e.ordered?o===`.`?`)`:`.`:kc(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if(o!==`*`&&o!==`-`||!t||t.children&&t.children[0]||n.stack[n.stack.length-1]!==`list`||n.stack[n.stack.length-2]!==`listItem`||n.stack[n.stack.length-3]!==`list`||n.stack[n.stack.length-4]!==`listItem`||n.indexStack[n.indexStack.length-1]!==0||n.indexStack[n.indexStack.length-2]!==0||n.indexStack[n.indexStack.length-3]!==0||(c=!0),jc(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function Nc(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Pc(e,t,n,r){let i=Nc(n),a=n.bulletCurrent||Oc(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function Fc(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}function Ic(e,t,n,r){if(!e.children.some(function(e){return Ps(e)}))return n.containerFlow(e,r);let i=n.enter(`phrasing`),a=n.containerPhrasing(e,r);return i(),a}function Lc(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Rc.attention=zc,Rc.peek=Bc;function Rc(e,t,n,r){let i=n.enter(`phrasing`),a=lc([sc(e,zc,n,n.createTracker(r))],r.before,r.after);return i(),a}function zc(e,t){return{construct:`strong`,markers:Lc(t)===`*`?[`*`,`_`]:[`_`,`*`],sizes:[2]}}function Bc(e,t,n){return n.options.strong||`*`}function Vc(e,t,n,r){let i=t?t.children:[],a=n.indexStack[n.indexStack.length-1];return n.safe(e.value,{...r,afterNode:i[a+1],beforeNode:i[a-1]})}function Hc(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Uc(e,t,n){let r=(jc(n)+(n.options.ruleSpaces?` `:``)).repeat(Hc(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Wc={blockquote:Fs,break:zs,code:Us,definition:Ks,emphasis:uc,hardBreak:zs,heading:mc,html:hc,image:_c,imageReference:yc,inlineCode:xc,link:wc,linkReference:Ec,list:Mc,listItem:Pc,paragraph:Fc,root:Ic,strong:Rc,text:Vc,thematicBreak:Uc};function Gc(){return{enter:{table:Kc,tableData:Xc,tableHeader:Xc,tableRow:Jc},exit:{codeText:Zc,table:qc,tableData:Yc,tableHeader:Yc,tableRow:Yc}}}function Kc(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function qc(e){this.exit(e),this.data.inTable=void 0}function Jc(e){this.enter({type:`tableRow`,children:[]},e)}function Yc(e){this.exit(e)}function Xc(e){this.enter({type:`tableCell`,children:[]},e)}function Zc(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Qc));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Qc(e,t){return t===`|`?t:e}function $c(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return js(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Wc.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function el(){return{exit:{taskListCheckValueChecked:nl,taskListCheckValueUnchecked:nl,paragraph:rl}}}function tl(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:il}}}function nl(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function rl(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function il(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Wc.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function al(){return[Jo(),vs(),Cs(),Gc(),el()]}function ol(e){return{extensions:[Yo(),ys(e),ws(),$c(e),tl()]}}var sl={tokenize:xl,partial:!0},cl={tokenize:Sl,partial:!0},ll={tokenize:Cl,partial:!0},ul={tokenize:wl,partial:!0},dl={tokenize:Tl,partial:!0},fl={name:`wwwAutolink`,tokenize:yl,previous:El},pl={name:`protocolAutolink`,tokenize:bl,previous:Dl},ml={name:`emailAutolink`,tokenize:vl,previous:Ol},hl={};function gl(){return{text:hl}}for(var _l=48;_l<123;)hl[_l]=ml,_l++,_l===58?_l=65:_l===91&&(_l=97);hl[43]=ml,hl[45]=ml,hl[46]=ml,hl[95]=ml,hl[72]=[ml,pl],hl[104]=[ml,pl],hl[87]=[ml,fl],hl[119]=[ml,fl];function vl(e,t,n){let r=this,i,a;return o;function o(t){return!kl(t)||!Ol.call(r,r.previous)||Al(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return kl(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(dl,u,l)(t):t===45||t===95||Jt(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&qt(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function yl(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!El.call(r,r.previous)||Al(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(sl,e.attempt(cl,e.attempt(ll,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function bl(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&Dl.call(r,r.previous)&&!Al(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(qt(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Xt(t)||F(t)||en(t)||$t(t)?n(t):e.attempt(cl,e.attempt(ll,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function xl(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Sl(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(ul,c,s)(t):t===null||F(t)||en(t)||t!==45&&$t(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Cl(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(ul,t,a)(o):o===null||F(o)||en(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function wl(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||F(o)||en(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||F(e)||en(e)?t(e):r(e)}function a(e){return qt(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):qt(t)?(e.consume(t),o):n(t)}}function Tl(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Jt(e)?n(e):t(e)}}function El(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||F(e)}function Dl(e){return!qt(e)}function Ol(e){return!(e===47||kl(e))}function kl(e){return e===43||e===45||e===46||e===95||Jt(e)}function Al(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var jl={tokenize:zl,partial:!0};function Ml(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:Il,continuation:{tokenize:Ll},exit:Rl}},text:{91:{name:`gfmFootnoteCall`,tokenize:Fl},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Nl,resolveTo:Pl}}}}function Nl(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=Kt(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function Pl(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function Fl(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||F(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(Kt(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return F(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function Il(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||F(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=Kt(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return F(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),L(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function Ll(e,t,n){return e.check(xn,t,e.attempt(jl,t,n))}function Rl(e){e.exit(`gfmFootnoteDefinition`)}function zl(e,t,n){let r=this;return L(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function Bl(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&zt(o,o.length,0,mn(s,e.slice(r+1,n),t)),zt(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),zt(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=pn(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=pn(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Vl=class{constructor(){this.map=[],this.index=new Map}add(e,t,n){Hl(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function Hl(e,t,n,r){if(n===0&&r.length===0)return;let i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}let a=[t,n,r];e.map.push(a),e.index.set(t,a)}function Ul(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Wl(){return{flow:{null:{name:`table`,tokenize:Gl,resolveAll:Kl}}}}function Gl(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let{type:e}=r.events[t][1];if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?te:c;return a===te&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124||(o=!0,a+=1),u(e)}function u(t){return t===null?n(t):P(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):I(t)?L(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||F(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,I(t)?L(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):ee(t)}function h(t){return I(t)?L(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||P(t)?b(t):ee(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):ee(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return I(t)?L(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||P(n)?!o||i!==a?ee(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):ee(n)}function ee(e){return n(e)}function te(t){return e.enter(`tableRow`),ne(t)}function ne(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),ne):n===null||P(n)?(e.exit(`tableRow`),t(n)):I(n)?L(e,ne,`whitespace`)(n):(e.enter(`data`),re(n))}function re(t){return t===null||t===124||F(t)?(e.exit(`data`),ne(t)):(e.consume(t),t===92?x:re)}function x(t){return t===92||t===124?(e.consume(t),re):re(t)}}function Kl(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Vl;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Jl(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=ql(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=ql(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=ql(f,t,o,i,n,d)):(o[0]=o[1],d=ql(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Jl(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Ul(t.events,n))}return e}function ql(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Yl(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Yl(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Yl(t.events,n[2]),a=Yl(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Yl(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Jl(e,t,n,r,i){let a=[],o=Yl(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Yl(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Xl={name:`tasklistCheck`,tokenize:Ql};function Zl(){return{text:{91:Xl}}}function Ql(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return F(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return P(r)?t(r):I(r)?e.check({tokenize:$l},t,n)(r):n(r)}}function $l(e,t,n){return L(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function eu(e){return Ht([gl(),Ml(),Bl(e),Wl(),Zl()])}var tu={};function nu(e){let t=this,n=e||tu,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(eu(n)),a.push(al()),o.push(ol(n))}var ru=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function iu(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:ru(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var au=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},W=e=>{let t=au(e);return t.charAt(0).toUpperCase()+t.slice(1)},ou=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),su={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function cu(e){return e!=null}function lu(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??su.width,a=e.size??e.height??su.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?ou(...c):ou(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??su[`stroke-width`])*Number(e.size??e.width??su.width)/Number(t.size??t.width??su.width):t.strokeWidth??su[`stroke-width`];return[`svg`,{...Object.entries(su).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&cu(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&cu(t.width)&&{[r(`width`)]:t.width},...`height`in t&&cu(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function uu(e,t={}){return lu(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var du=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},fu=(0,V.createContext)({}),pu=()=>(0,V.useContext)(fu),mu=(0,V.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:v=``}=pu()??{},y=!!c||du(d),[b,ee,te=[]]=uu(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:ou(v,s),hasA11yProp:y,attributes:d});return(0,V.createElement)(b,{ref:f,...ee},[...te.map(([e,t])=>(0,V.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function G(e,t=[],n=[]){let r=typeof e==`string`?iu(e,t,n):e,i=(0,V.forwardRef)(({className:e,...t},n)=>(0,V.createElement)(mu,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=W(r.name)),i}var hu={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};hu.node;var gu=G(hu),_u={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};_u.node;var vu=G(_u),yu={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};yu.node;var bu=G(yu),xu={name:`bookmark`,size:24,node:[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,key:`oz39mx`}]]};xu.node;var Su=G(xu),Cu={name:`brain`,size:24,node:[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4`,key:`5nuw1p`}],[`path`,{d:`M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294`,key:`18ldcf`}],[`path`,{d:`M17.996 5.125a4 4 0 012.526 5.77`,key:`1sdu8q`}],[`path`,{d:`M18 18a4 4 0 002-7.465`,key:`7xqqvr`}],[`path`,{d:`M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517`,key:`t46ysz`}],[`path`,{d:`M6 18a4 4 0 01-2-7.465`,key:`1y2m15`}],[`path`,{d:`M6.004 5.125a4 4 0 00-2.526 5.77`,key:`3cw1ss`}]]};Cu.node;var wu=G(Cu),Tu={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};Tu.node;var Eu=G(Tu),Du={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]],aliases:[`check-circle-2`]};Du.node;var Ou=G(Du),ku={name:`circle`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]};ku.node;var Au=G(ku),ju={name:`clock-3`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6h4`,key:`135r8i`}]]};ju.node;var Mu=G(ju),Nu={name:`flame`,size:24,node:[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]};Nu.node;var Pu=G(Nu),Fu={name:`focus`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}],[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}]]};Fu.node;var Iu=G(Fu),Lu={name:`house`,size:24,node:[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]],aliases:[`home`]};Lu.node;var Ru=G(Lu),zu={name:`layers`,size:24,node:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]],aliases:[`layers-3`]};zu.node;var Bu=G(zu),Vu={name:`menu`,size:24,node:[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]};Vu.node;var Hu=G(Vu),Uu={name:`moon`,size:24,node:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]};Uu.node;var Wu=G(Uu),Gu={name:`notebook-pen`,size:24,node:[[`path`,{d:`M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4`,key:`re6nr2`}],[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`path`,{d:`M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z`,key:`pqwjuv`}]]};Gu.node;var Ku=G(Gu),qu={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]};qu.node;var Ju=G(qu),Yu={name:`rotate-ccw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]};Yu.node;var Xu=G(Yu),Zu={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};Zu.node;var Qu=G(Zu),$u={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};$u.node;var K=G($u),q={name:`star`,size:24,node:[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]};q.node;var J=G(q),Y={name:`sun`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]};Y.node;var X=G(Y),ed={name:`target`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]};ed.node;var td=G(ed),nd={name:`trophy`,size:24,node:[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]};nd.node;var rd=G(nd),id={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};id.node;var ad=G(id),od=l(_(),1),sd=[{id:`javascript`,label:`JavaScript & Browser`,short:`JS`,color:`#f7c948`,description:`Language depth, browser internals, networking and security.`,source:`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Senior Frontend Interview Guide — JavaScript & Browser</title>
  <style>
    :root {
      --bg:#f6f3ed; --paper:#fffdf8; --ink:#17211d; --muted:#66716c; --line:#ddd8cd;
      --brand:#0c6b58; --brand2:#08483c; --soft:#e8f3ef; --warm:#f5e5cc; --code:#12201b;
      --shadow:0 12px 40px rgba(27,45,38,.08); --radius:18px;
    }
    *{box-sizing:border-box} html{scroll-behavior:smooth;scroll-padding-top:88px}
    body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.62}
    a{color:inherit}.topbar{position:sticky;top:0;z-index:20;background:rgba(246,243,237,.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
    .topbar-inner{max-width:1240px;margin:auto;padding:12px 24px;display:flex;gap:12px;align-items:center}
    .brand{font-weight:800;letter-spacing:-.02em;white-space:nowrap}.brand span{color:var(--brand)}
    .search{flex:1;max-width:560px;margin-left:auto;padding:10px 14px;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--ink);font:inherit}
    button{border:1px solid var(--line);border-radius:999px;background:var(--paper);padding:10px 14px;font-weight:700;color:var(--ink);cursor:pointer}
    .layout{max-width:1240px;margin:auto;display:grid;grid-template-columns:250px minmax(0,1fr);gap:30px;padding:34px 24px 80px}
    aside{position:sticky;top:84px;height:calc(100vh - 104px);overflow:auto;padding-right:8px}
    aside h2{font-size:.78rem;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);margin:10px 0}
    nav a{display:block;text-decoration:none;padding:7px 10px;border-radius:9px;color:var(--muted);font-size:.9rem}
    nav a:hover{background:var(--soft);color:var(--brand2)}
    main{min-width:0}.hero{padding:48px;background:linear-gradient(135deg,var(--brand2),#0c6b58);color:white;border-radius:26px;box-shadow:var(--shadow);overflow:hidden;position:relative}
    .hero:after{content:"JS";position:absolute;right:-20px;bottom:-90px;font-size:240px;font-weight:900;opacity:.07;line-height:1}
    .eyebrow{font-size:.8rem;text-transform:uppercase;letter-spacing:.16em;font-weight:800;opacity:.75}.hero h1{font-size:clamp(2.2rem,6vw,4.2rem);line-height:.98;letter-spacing:-.055em;margin:16px 0 22px;max-width:800px}
    .hero p{max-width:720px;font-size:1.08rem;opacity:.9}.legend{display:flex;flex-wrap:wrap;gap:9px;margin-top:24px}.pill{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:6px 10px;font-size:.82rem}
    .how{margin:22px 0 44px;padding:22px 24px;border:1px solid var(--line);border-radius:var(--radius);background:var(--paper)}
    .how strong{color:var(--brand2)}.section-title{margin:54px 0 18px}.section-title h2{font-size:2rem;letter-spacing:-.035em;margin:0}.section-title p{margin:5px 0;color:var(--muted)}
    article{background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);padding:30px;margin:0 0 22px;box-shadow:0 4px 18px rgba(27,45,38,.035)}
    article h3{font-size:1.48rem;letter-spacing:-.025em;margin:0 0 18px;display:flex;gap:10px;align-items:baseline}.num{font-size:.8rem;color:var(--brand);font-weight:900;letter-spacing:.08em}
    .answer{background:var(--soft);border-left:4px solid var(--brand);padding:18px 20px;border-radius:0 12px 12px 0;margin:0 0 22px;font-size:1.03rem}
    .answer:before{content:"SAY THIS";display:block;color:var(--brand2);font-size:.7rem;letter-spacing:.14em;font-weight:900;margin-bottom:7px}
    .grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px}.block h4{font-size:.76rem;text-transform:uppercase;letter-spacing:.12em;color:var(--brand);margin:0 0 8px}.block p{margin:0 0 14px}
    pre{margin:12px 0 18px;background:var(--code);color:#e7f5ef;border-radius:13px;padding:18px;overflow:auto;font:13px/1.55 ui-monospace,SFMono-Regular,Consolas,monospace;white-space:pre}
    code{font-family:ui-monospace,SFMono-Regular,Consolas,monospace}.trap{background:#fff6e9;border:1px solid #ead7b9;border-radius:12px;padding:14px 16px}.trap h4{color:#8a5310}
    ul{padding-left:20px;margin:8px 0 16px}li{margin:5px 0}.follow{border-top:1px solid var(--line);padding-top:16px;margin-top:20px}.follow h4{margin:0 0 7px;font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
    .checklist{background:var(--brand2);color:white;border-radius:24px;padding:36px;margin-top:52px}.checklist h2{margin-top:0;font-size:2rem}.checks{columns:2;column-gap:32px}.check{break-inside:avoid;margin:0 0 10px}.check input{margin-right:8px;accent-color:#7ee0c4}
    .no-results{display:none;padding:30px;text-align:center;color:var(--muted)}.footer{text-align:center;color:var(--muted);font-size:.85rem;padding:28px}
    mark{background:#ffdc73;color:inherit;border-radius:3px}.kbd{font-family:ui-monospace,monospace;border:1px solid var(--line);border-bottom-width:2px;padding:1px 5px;border-radius:5px;background:var(--paper)}
    @media(max-width:850px){.layout{display:block}.layout aside{display:none}.hero{padding:34px 26px}.grid{grid-template-columns:1fr}.checks{columns:1}.topbar-inner{padding:10px 14px}.brand{display:none}article{padding:23px}.search{min-width:0}}
    @media print{.topbar,aside,.how,.footer{display:none}.layout{display:block;max-width:none;padding:0}.hero{box-shadow:none;break-after:page}.hero:after{display:none}article{box-shadow:none;break-inside:avoid}.checklist{background:white;color:black;border:1px solid #999}.section-title{break-after:avoid}body{background:white;font-size:10pt}}
  </style>
</head>
<body>
  <header class="topbar"><div class="topbar-inner"><div class="brand">Frontend <span>Interview Guide</span></div><input id="search" class="search" type="search" placeholder="Search topics, traps, examples…" aria-label="Search the guide"><button id="print">Print / PDF</button></div></header>
  <div class="layout">
    <aside><h2>Quick navigation</h2><nav id="nav"></nav></aside>
    <main>
      <section class="hero">
        <div class="eyebrow">Senior frontend • 6+ years</div>
        <h1>JavaScript & Browser Interview Guide</h1>
        <p>Clear answers you can actually say out loud. Each topic moves from a short interview response to the reasoning, a practical example, the traps, and likely follow-up questions.</p>
        <div class="legend"><span class="pill">31 core topics</span><span class="pill">Natural English</span><span class="pill">Practical code</span><span class="pill">Senior-level trade-offs</span></div>
      </section>
      <div class="how"><strong>How to practise:</strong> Read only the green “Say this” box, close the guide, and explain the idea again in your own words. Then use the example and traps to handle follow-up questions. Aim for 30–60 seconds per first answer.</div>

      <div class="section-title" data-section="JavaScript foundations"><h2>JavaScript foundations</h2><p>The language mechanics behind most frontend follow-ups.</p></div>

      <article id="scope" data-title="Scope and lexical scope">
        <h3><span class="num">01</span> Scope and lexical scope</h3>
        <div class="answer">Scope controls where a variable can be accessed. JavaScript has global, function, and block scope. It uses lexical scope, so a function can access variables based on where the function was written, not where it is called.</div>
        <div class="grid"><div class="block"><h4>Easy explanation</h4><p>Think of nested rooms. Code in an inner room can see names in outer rooms, but outer rooms cannot see names declared only inside. The room layout is decided when the code is written.</p>
<pre>const appName = 'Shop';

function checkout() {
  const currency = 'EUR';
  if (true) {
    const total = 40; // block scoped
    console.log(appName, currency, total);
  }
  // console.log(total); // ReferenceError
}</pre></div>
        <div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Confusing scope with the value of <code>this</code>.</li><li>Assuming <code>var</code> is block scoped—it is function scoped.</li><li>Accidentally creating globals in old non-strict code.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What is a scope chain? What is the temporal dead zone? How is module scope different from global scope?</div>
      </article>

      <article id="closures" data-title="Closures">
        <h3><span class="num">02</span> Closures</h3>
        <div class="answer">A closure is a function together with access to the lexical environment where it was created. That means it can still use outer variables even after the outer function has finished. I use closures for private state, callbacks, and function factories.</div>
        <div class="grid"><div class="block"><h4>Easy explanation</h4><p>The inner function keeps a “backpack” containing the outer variables it needs.</p>
<pre>function createCounter() {
  let count = 0;
  return () =&gt; ++count;
}

const next = createCounter();
next(); // 1
next(); // 2</pre><p>The returned function keeps access to <code>count</code>. Each call to <code>createCounter</code> creates a separate private environment.</p></div>
        <div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Closures capture bindings, not frozen copies of values.</li><li>A long-lived listener can retain large objects through a closure.</li><li><code>var</code> in loops gives callbacks one shared binding; use <code>let</code>.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>How can a closure cause a memory leak? How would you implement private state? Why does <code>let</code> fix loop callbacks?</div>
      </article>

      <article id="hoisting" data-title="Hoisting and temporal dead zone">
        <h3><span class="num">03</span> Hoisting and the temporal dead zone</h3>
        <div class="answer">Hoisting is a useful mental model: declarations are processed before execution. Function declarations are callable before their line. A <code>var</code> exists from the start of its function and initially contains <code>undefined</code>. <code>let</code> and <code>const</code> also exist before their declaration, but accessing them in that period—the temporal dead zone—throws an error.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>sayHi();             // works
function sayHi() {}

console.log(a);      // undefined
var a = 1;

console.log(b);      // ReferenceError
let b = 2;</pre><p>The engine does not literally move source code. It creates bindings during environment setup, then executes statements.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Saying <code>let</code> and <code>const</code> are “not hoisted.”</li><li>Confusing function declarations with function expressions.</li><li>Using pre-declaration access as a coding style even when it works.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Why does the TDZ exist? Are classes hoisted? What happens with function expressions?</div>
      </article>

      <article id="var-let-const" data-title="var let const">
        <h3><span class="num">04</span> <code>var</code>, <code>let</code>, and <code>const</code></h3>
        <div class="answer"><code>var</code> is function scoped, can be redeclared, and is initialized to <code>undefined</code>, so I avoid it in modern code. <code>let</code> and <code>const</code> are block scoped and have a temporal dead zone. I use <code>const</code> by default and <code>let</code> only when the binding must be reassigned.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>const user = { name: 'Mina' };
user.name = 'Sara';      // valid: object can mutate
// user = {};            // invalid: binding cannot change

for (let i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i)); // 0, 1, 2
}</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li><code>const</code> does not make an object immutable.</li><li><code>var</code> loop callbacks share one binding.</li><li>Choosing <code>let</code> “just in case” hides reassignment intent.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Can a <code>const</code> array change? How do top-level declarations behave in scripts versus modules?</div>
      </article>

      <article id="this" data-title="this and arrow functions">
        <h3><span class="num">05</span> <code>this</code></h3>
        <div class="answer">For a normal function, <code>this</code> is mainly determined by how the function is called: as a method, with <code>new</code>, with <code>call/apply/bind</code>, or as a plain function. Arrow functions do not create their own <code>this</code>; they capture it lexically from the surrounding code.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>const user = {
  name: 'Ava',
  normal() { return this.name; },
  delayed() {
    setTimeout(() =&gt; console.log(this.name), 0);
  }
};

user.normal(); // 'Ava'
const fn = user.normal;
fn();          // undefined in strict mode</pre><p>Calling <code>fn()</code> loses the object receiver. The arrow callback in <code>delayed</code> keeps the method’s <code>this</code>.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Thinking <code>this</code> means “the object where the function was defined.”</li><li>Using an arrow as an object method when a dynamic receiver is needed.</li><li>Forgetting DOM listeners normally set <code>this</code> to the element for non-arrow callbacks.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What is <code>this</code> in strict mode? What does <code>new</code> do? Why can’t arrow functions be constructors?</div>
      </article>

      <article id="call-apply-bind" data-title="call apply bind">
        <h3><span class="num">06</span> <code>call</code>, <code>apply</code>, and <code>bind</code></h3>
        <div class="answer">All three let me control <code>this</code> for a normal function. <code>call</code> invokes immediately with separate arguments, <code>apply</code> invokes immediately with an array-like list, and <code>bind</code> returns a new function for later. <code>bind</code> can also pre-fill arguments.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}
const person = { name: 'Noor' };

greet.call(person, 'Hi', '!');
greet.apply(person, ['Hi', '!']);
const sayHi = greet.bind(person, 'Hi');
sayHi('!');</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Trying to change an arrow function’s lexical <code>this</code>.</li><li>Creating a new bound function when removing a listener; the reference will not match.</li><li>Overusing <code>apply</code>; spread syntax is often clearer for arguments.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>How would you implement a simple <code>bind</code>? What happens if a bound function is used with <code>new</code>?</div>
      </article>

      <article id="prototypes" data-title="Prototypes and classes">
        <h3><span class="num">07</span> Prototypes and classes</h3>
        <div class="answer">JavaScript uses prototype-based inheritance. If a property is not found on an object, the engine follows its prototype chain until it finds the property or reaches <code>null</code>. Class syntax is a cleaner way to define constructor functions and prototype methods; it does not replace the prototype model.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>class User {
  constructor(name) { this.name = name; }
  greet() { return \`Hi \${this.name}\`; }
}

const u = new User('Lina');
Object.getPrototypeOf(u) === User.prototype; // true
u.hasOwnProperty('name');                    // true
u.hasOwnProperty('greet');                   // false</pre><p>Methods live on <code>User.prototype</code>, so instances share one function instead of receiving a copy.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Confusing an object’s <code>prototype</code> with a constructor’s <code>.prototype</code> property.</li><li>Mutating built-in prototypes.</li><li>Using inheritance where composition is simpler.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What does <code>new</code> do step by step? How does <code>instanceof</code> work? What is <code>Object.create</code>?</div>
      </article>

      <article id="equality" data-title="Equality coercion and Object.is">
        <h3><span class="num">08</span> Equality and coercion</h3>
        <div class="answer">I normally use strict equality, <code>===</code>, because it compares without type coercion. Loose equality, <code>==</code>, applies conversion rules that can be surprising. Objects compare by reference, not by contents. <code>Object.is</code> is similar to strict equality but treats <code>NaN</code> as equal to itself and distinguishes positive and negative zero.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>0 == false;          // true
0 === false;         // false
[] === [];           // false: different references
NaN === NaN;         // false
Object.is(NaN, NaN); // true

// One intentional loose-equality idiom:
value == null;       // true only for null or undefined</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Deep-comparing objects with <code>===</code>.</li><li>Forgetting that <code>NaN</code> is not equal to itself.</li><li>Saying loose equality is random; it follows defined rules, but readability suffers.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What values are falsy? Why is <code>typeof null</code> “object”? When would loose equality be acceptable?</div>
      </article>

      <article id="copy" data-title="Shallow copy deep copy structuredClone">
        <h3><span class="num">09</span> Shallow vs deep copy</h3>
        <div class="answer">A shallow copy creates a new top-level object but keeps references to nested objects. Spread syntax and <code>Object.assign</code> are shallow. A deep copy recursively duplicates the value graph. In the browser I prefer <code>structuredClone</code> for supported data types, but I first ask whether a full deep copy is really needed.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>const original = { profile: { city: 'Rabat' } };
const shallow = { ...original };
shallow.profile.city = 'Casa';
console.log(original.profile.city); // 'Casa'

const deep = structuredClone(original);
deep.profile.city = 'Agadir';       // original unchanged</pre><p><code>structuredClone</code> handles cycles, Maps, Sets, Dates, and typed arrays, but it cannot clone functions or DOM nodes.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Calling spread syntax a deep clone.</li><li>Using JSON stringify/parse: it loses types and fails on cycles.</li><li>Cloning huge state trees when structural sharing would be cheaper.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What can <code>structuredClone</code> copy? What is structural sharing? How would you update one nested field?</div>
      </article>

      <article id="immutability" data-title="Immutability structural sharing">
        <h3><span class="num">10</span> Immutability</h3>
        <div class="answer">Immutability means producing a new value instead of changing an existing one. In UI state it makes changes predictable, supports cheap reference checks, and helps debugging. I do not treat it as a universal rule: local mutation inside a controlled function can be simpler and faster, as long as shared state is not mutated unexpectedly.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>const state = {
  user: { name: 'Sam', preferences: { theme: 'light' } }
};

const next = {
  ...state,
  user: {
    ...state.user,
    preferences: { ...state.user.preferences, theme: 'dark' }
  }
};</pre><p>Only the changed path gets new objects; unchanged branches can keep their references. This is structural sharing.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Shallow-copying the root, then mutating a nested object.</li><li>Deep-cloning everything and creating unnecessary CPU and memory cost.</li><li>Assuming <code>Object.freeze</code> is recursive—it is shallow.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Why does React benefit from immutability? What is structural sharing? When is mutation acceptable?</div>
      </article>

      <div class="section-title" data-section="Async JavaScript and architecture"><h2>Async JavaScript & architecture</h2><p>How work is scheduled, composed, limited, and packaged.</p></div>

      <article id="promises" data-title="Promises states chaining error handling">
        <h3><span class="num">11</span> Promises</h3>
        <div class="answer">A Promise represents the eventual result of an asynchronous operation. It starts pending and settles once as fulfilled or rejected. <code>then</code>, <code>catch</code>, and <code>finally</code> return new promises, so I can compose work and centralize error handling instead of nesting callbacks.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>fetch('/api/user')
  .then(response =&gt; {
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return response.json();
  })
  .then(user =&gt; render(user))
  .catch(error =&gt; showError(error))
  .finally(() =&gt; hideSpinner());</pre><p>A handler may return a plain value or another promise. The next link waits and adopts that result.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Forgetting to return a promise inside <code>then</code>.</li><li>Assuming <code>fetch</code> rejects for HTTP 404 or 500—it normally does not.</li><li>Mixing callbacks and promises into hard-to-follow control flow.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What is promise chaining? How do rejections propagate? Can a settled promise change state?</div>
      </article>

      <article id="async-await" data-title="async await concurrency cancellation">
        <h3><span class="num">12</span> <code>async</code>/<code>await</code></h3>
        <div class="answer"><code>async</code>/<code>await</code> is syntax over promises that makes asynchronous control flow read more like synchronous code. An async function always returns a promise. <code>await</code> pauses that function, not the JavaScript thread, and resumes it in a microtask when the value settles.</div>
        <div class="grid"><div class="block"><h4>Example: sequential vs concurrent</h4><pre>// Sequential: second starts after first finishes
const user = await getUser();
const posts = await getPosts();

// Concurrent: both start immediately
const [user, posts] = await Promise.all([
  getUser(), getPosts()
]);

try {
  const data = await loadData({ signal });
} catch (error) {
  if (error.name !== 'AbortError') report(error);
}</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Serializing independent calls with back-to-back <code>await</code>.</li><li>Using <code>forEach(async ...)</code>; it does not await callbacks.</li><li>Assuming a promise can be cancelled; cancellation must be designed, often with <code>AbortController</code>.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>How do you run tasks concurrently? How do you handle partial failure? How would you limit concurrency?</div>
      </article>

      <article id="event-loop" data-title="Event loop microtasks macrotasks rendering">
        <h3><span class="num">13</span> Event loop, microtasks, and tasks</h3>
        <div class="answer">JavaScript runs one call stack per main thread. The browser handles timers, network events, and user input outside that stack and queues callbacks. After the current task finishes, the browser drains the microtask queue—promise handlers and <code>queueMicrotask</code>—before it may render and take the next task, such as a timer or click.</div>
        <div class="grid"><div class="block"><h4>Predict the output</h4><pre>console.log('A');

setTimeout(() =&gt; console.log('B'), 0);
Promise.resolve().then(() =&gt; console.log('C'));
queueMicrotask(() =&gt; console.log('D'));

console.log('E');
// A, E, C, D, B</pre><p>The current script is one task. Microtasks run in registration order after it completes. The timer is a later task.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Saying <code>setTimeout(..., 0)</code> runs immediately.</li><li>Calling every task a “macrotask”; the HTML spec generally says task.</li><li>Creating an endless microtask chain that starves rendering and input.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Where does rendering happen? What does <code>requestAnimationFrame</code> do? Can microtasks starve the page?</div>
      </article>

      <article id="promise-all" data-title="Promise all allSettled race any">
        <h3><span class="num">14</span> <code>Promise.all</code> and combinators</h3>
        <div class="answer"><code>Promise.all</code> runs independent operations concurrently and fulfills with ordered results when all fulfill. It rejects as soon as one input rejects, although the other operations keep running. For partial success I use <code>allSettled</code>; for the first settled result, <code>race</code>; and for the first fulfilled result, <code>any</code>.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>const [profile, permissions] = await Promise.all([
  fetchProfile(),
  fetchPermissions()
]);

const results = await Promise.allSettled(urls.map(fetchJson));
const successful = results
  .filter(r =&gt; r.status === 'fulfilled')
  .map(r =&gt; r.value);</pre><p>“Fail fast” does not mean cancellation. Use abort signals if the remaining work should be stopped.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Thinking <code>Promise.all</code> itself starts promises; operations usually start when created.</li><li>Passing functions instead of calling them.</li><li>Launching thousands of requests without a concurrency limit.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Does result order follow completion order? How would you add a timeout? How would you limit to five requests at once?</div>
      </article>

      <article id="debounce-throttle" data-title="Debounce throttle performance">
        <h3><span class="num">15</span> Debounce and throttle</h3>
        <div class="answer">Debounce waits until calls stop for a period, so it is useful for search input or validation. Throttle limits execution to at most once per interval, so it suits scroll, resize, or pointer updates. The production choice also needs leading/trailing behavior, cancellation, argument handling, and cleanup.</div>
        <div class="grid"><div class="block"><h4>Simple implementations</h4><pre>function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() =&gt; fn.apply(this, args), delay);
  };
}

function throttle(fn, interval) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last &gt;= interval) {
      last = now;
      fn.apply(this, args);
    }
  };
}</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Recreating the wrapped function on every render.</li><li>Not clearing timers when a component unmounts.</li><li>Ignoring the final call in a naive throttle.</li><li>Using a timer for visual animation where <code>requestAnimationFrame</code> fits better.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What are leading and trailing calls? How do you add <code>cancel</code>/<code>flush</code>? Which would you use for autocomplete?</div>
      </article>

      <article id="modules" data-title="ES modules CommonJS dynamic import tree shaking">
        <h3><span class="num">16</span> Modules</h3>
        <div class="answer">ES modules use static <code>import</code> and <code>export</code>, have their own scope, run in strict mode, and let bundlers analyze dependencies for tree-shaking. Dynamic <code>import()</code> loads code on demand and returns a promise. In browsers, modules are deferred by default and imported bindings are live, read-only views.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>// math.js
export const add = (a, b) =&gt; a + b;

// app.js
import { add } from './math.js';

button.addEventListener('click', async () =&gt; {
  const { openEditor } = await import('./editor.js');
  openEditor();
});</pre><p>Dynamic import is a common route- or feature-level code-splitting boundary.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Assuming tree-shaking can always remove code with side effects.</li><li>Creating circular dependencies that read an uninitialized binding.</li><li>Confusing ESM’s live bindings with copied values.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>ESM vs CommonJS? What enables tree-shaking? What are circular dependency risks?</div>
      </article>

      <article id="errors" data-title="Errors try catch custom errors observability">
        <h3><span class="num">17</span> Error handling</h3>
        <div class="answer">I handle errors at the level that can add context, recover, retry, or show the right UI. I throw <code>Error</code> objects, preserve the original cause, distinguish expected domain errors from programmer bugs, and avoid swallowing failures. At application boundaries I log useful context without exposing secrets.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>class ApiError extends Error {
  constructor(message, { status, cause } = {}) {
    super(message, { cause });
    this.name = 'ApiError';
    this.status = status;
  }
}

try {
  return await saveOrder(order);
} catch (error) {
  throw new ApiError('Could not save order', { cause: error });
}</pre><p><code>try/catch</code> catches synchronous throws and rejected promises that are awaited inside the block.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li><code>catch {}</code> silently hides production failures.</li><li>Throwing strings loses standard stack and metadata behavior.</li><li>Retrying non-idempotent operations or permanent 4xx failures blindly.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What can an error boundary catch? When should you retry? How do global unhandled rejection handlers fit in?</div>
      </article>

      <article id="memory" data-title="Memory leaks garbage collection listeners timers closures">
        <h3><span class="num">18</span> Memory leaks</h3>
        <div class="answer">A memory leak happens when the app keeps references to data it no longer needs, so garbage collection cannot reclaim it. In frontend apps I look for unremoved listeners, timers, subscriptions, detached DOM nodes, unbounded caches, and closures retaining large graphs. I verify with heap snapshots and allocation timelines instead of guessing.</div>
        <div class="grid"><div class="block"><h4>Example and cleanup</h4><pre>const controller = new AbortController();

window.addEventListener('resize', onResize, {
  signal: controller.signal
});
const timer = setInterval(refresh, 30_000);

function cleanup() {
  controller.abort(); // removes listener
  clearInterval(timer);
}</pre><p>WeakMap can associate metadata with objects without keeping the key alive, but it is not a general replacement for explicit cleanup.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Calling high memory use a leak without checking whether it remains reachable.</li><li>Removing a listener with a different function reference.</li><li>Keeping every API response forever in a cache.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>How does garbage collection decide reachability? What are detached DOM nodes? When would you use WeakMap?</div>
      </article>

      <div class="section-title" data-section="Browser platform and performance"><h2>Browser platform & performance</h2><p>DOM events, pixels, performance, and inclusive interfaces.</p></div>

      <article id="dom" data-title="DOM events delegation capturing bubbling">
        <h3><span class="num">19</span> DOM and events</h3>
        <div class="answer">The DOM is the browser’s object model of the document. Event propagation normally has capture, target, and bubble phases. I often use event delegation: one listener on a stable ancestor handles matching descendants. That reduces listeners and works for dynamically added elements.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>const list = document.querySelector('[data-list]');

list.addEventListener('click', event =&gt; {
  const button = event.target.closest('[data-remove]');
  if (!button || !list.contains(button)) return;
  removeItem(button.dataset.remove);
});</pre><p>Use <code>currentTarget</code> for the element whose listener is running; <code>target</code> is where the event originated.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Confusing <code>target</code> and <code>currentTarget</code>.</li><li>Using <code>stopPropagation</code> broadly and breaking other behavior.</li><li>Repeated layout reads and writes in loops.</li><li>Using non-passive scroll listeners without need.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Capture vs bubble? Which events do not bubble? What is the difference between DOM attributes and properties?</div>
      </article>

      <article id="rendering" data-title="Browser rendering pipeline DOM CSSOM render tree layout paint composite">
        <h3><span class="num">20</span> Browser rendering pipeline</h3>
        <div class="answer">At a high level, the browser parses HTML into the DOM and CSS into the CSSOM, combines them into a render tree, calculates layout, paints pixels into layers, and composites those layers on screen. JavaScript and style changes can invalidate parts of that work, so I measure and avoid doing expensive work repeatedly in a frame.</div>
        <div class="grid"><div class="block"><h4>Easy sequence</h4><pre>HTML ──&gt; DOM ─┐
              ├─&gt; Render tree ─&gt; Layout ─&gt; Paint ─&gt; Composite
CSS  ──&gt; CSSOM┘</pre><p>Modern engines optimize aggressively, so this is a conceptual model, not a promise that every frame executes every stage. Parsing scripts can block HTML parsing unless loading strategy such as <code>defer</code> or modules is used.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Presenting the pipeline as a rigid full-page sequence for every change.</li><li>Assuming every JavaScript execution blocks all downloads.</li><li>Optimizing from theory without using DevTools performance traces.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What blocks first render? What do <code>async</code> and <code>defer</code> do? What is the critical rendering path?</div>
      </article>

      <article id="reflow" data-title="Reflow repaint compositing layout thrashing">
        <h3><span class="num">21</span> Reflow, repaint, and compositing</h3>
        <div class="answer">A layout or reflow recalculates geometry. Paint redraws visual pixels such as color or shadow. Compositing combines already-painted layers, often on the compositor thread. For smooth animation I prefer <code>transform</code> and <code>opacity</code> when appropriate, and I batch DOM reads and writes to avoid forced synchronous layout.</div>
        <div class="grid"><div class="block"><h4>Layout thrashing</h4><pre>// Bad: write then layout read on every iteration
items.forEach(item =&gt; {
  item.style.width = '200px';
  console.log(item.offsetWidth);
});

// Better: group reads, then writes
const widths = items.map(item =&gt; item.offsetWidth);
requestAnimationFrame(() =&gt; {
  items.forEach((item, i) =&gt; {
    item.style.transform = \`translateX(\${widths[i]}px)\`;
  });
});</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Saying transform is always free; large layers use memory and still need compositing.</li><li>Adding <code>will-change</code> everywhere.</li><li>Mixing geometry reads and style writes repeatedly.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Which properties trigger layout? What causes forced layout? Why can too many layers hurt?</div>
      </article>

      <article id="accessibility" data-title="Accessibility semantic HTML keyboard ARIA focus">
        <h3><span class="num">22</span> Accessibility</h3>
        <div class="answer">Accessibility means people can perceive, understand, navigate, and operate the interface with different abilities and tools. I start with semantic HTML, keyboard access, visible focus, correct labels, useful headings and landmarks, sufficient contrast, and predictable error messages. I use ARIA only when native HTML cannot express the behavior.</div>
        <div class="grid"><div class="block"><h4>Example</h4><pre>&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input id="email" name="email" type="email"
       aria-describedby="email-error" required&gt;
&lt;p id="email-error" role="alert"&gt;&lt;/p&gt;

&lt;button type="button"&gt;Save&lt;/button&gt;
&lt;!-- not: &lt;div onclick="save()"&gt;Save&lt;/div&gt; --&gt;</pre><p>Testing includes keyboard-only navigation, a screen reader smoke test, zoom, automated checks, and real user feedback where possible.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Using ARIA to repair avoidable non-semantic markup.</li><li>Removing focus outlines without an equivalent.</li><li>Using placeholder text as the only label.</li><li>Assuming automated tools catch all accessibility issues.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>How do you manage focus in a modal? What is an accessible name? When should <code>aria-live</code> be used?</div>
      </article>

      <article id="web-vitals" data-title="Core Web Vitals LCP INP CLS performance">
        <h3><span class="num">23</span> Web Vitals</h3>
        <div class="answer">The core user-centered metrics are LCP for loading, INP for interaction responsiveness, and CLS for visual stability. I use real-user monitoring as the source of truth and lab tools for diagnosis. I improve the actual bottleneck—for example the LCP resource, long main-thread tasks, or elements without reserved space—rather than chasing one score.</div>
        <div class="grid"><div class="block"><h4>Practical improvements</h4><ul><li><strong>LCP:</strong> optimize and prioritize the hero image, reduce server delay, remove render blockers.</li><li><strong>INP:</strong> shorten event work, split long tasks, reduce unnecessary rendering, avoid heavy synchronous JS.</li><li><strong>CLS:</strong> reserve image/ad dimensions, avoid inserting content above, load fonts carefully.</li></ul><pre>new PerformanceObserver(list =&gt; {
  for (const entry of list.getEntries()) {
    sendMetric(entry);
  }
}).observe({ type: 'long-animation-frame', buffered: true });</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Using only Lighthouse lab data as proof of real-user experience.</li><li>Confusing FCP with LCP.</li><li>Optimizing averages while ignoring poor p75 experiences and device segments.</li><li>Treating metric improvements as a substitute for usability.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Field vs lab data? How do you find the LCP element? What causes poor INP? Why measure p75?</div>
      </article>

      <div class="section-title" data-section="Networking, identity, and security"><h2>Networking, identity & security</h2><p>How the browser communicates, stores trust, and protects users.</p></div>

      <article id="networking" data-title="Networking DNS TCP TLS HTTP request lifecycle">
        <h3><span class="num">24</span> Networking: from URL to page</h3>
        <div class="answer">At a high level, the browser resolves the hostname with DNS, establishes a connection—TCP plus TLS for HTTP/1.1 or HTTP/2, or QUIC with TLS for HTTP/3—sends the HTTP request, receives the response, and then parses and renders resources. Caches, service workers, connection reuse, redirects, and proxies can change that path.</div>
        <div class="grid"><div class="block"><h4>Easy sequence</h4><pre>URL → cache/service worker → DNS → connection + TLS
    → HTTP request → server/CDN → HTTP response
    → parse → fetch subresources → render</pre><p>HTTP/2 multiplexes streams over one connection. HTTP/3 uses QUIC over UDP to reduce some transport-level blocking and improve connection setup.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Saying HTTP/2 removes all head-of-line blocking; TCP loss still affects the connection.</li><li>Forgetting connection reuse and browser caches.</li><li>Assuming DNS always means one fresh remote lookup.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>HTTP/2 vs HTTP/3? What happens in a TLS handshake? What is a CDN? What is a service worker’s role?</div>
      </article>

      <article id="http" data-title="HTTP methods status codes idempotency headers">
        <h3><span class="num">25</span> HTTP</h3>
        <div class="answer">HTTP is a stateless request-response protocol. A request has a method, URL, headers, and optional body; a response has a status, headers, and optional body. I choose methods by semantics—GET reads, POST commonly creates or triggers work, PUT replaces, PATCH partially updates, and DELETE removes—and I design retries around idempotency.</div>
        <div class="grid"><div class="block"><h4>Useful status groups</h4><ul><li><strong>2xx:</strong> success—200 OK, 201 Created, 204 No Content.</li><li><strong>3xx:</strong> redirection or cache—301/308 permanent, 302/307 temporary, 304 Not Modified.</li><li><strong>4xx:</strong> client-side condition—400, 401 unauthenticated, 403 forbidden, 404, 409, 429.</li><li><strong>5xx:</strong> server failure—500, 502, 503, 504.</li></ul><pre>const response = await fetch('/api/items/42', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ archived: true })
});</pre></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Saying 401 means “not authorized”; it usually means authentication is required or invalid.</li><li>Retrying POST without idempotency protection.</li><li>Putting secrets in query strings and logs.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>PUT vs PATCH? Safe vs idempotent methods? 401 vs 403? What does content negotiation mean?</div>
      </article>

      <article id="caching" data-title="HTTP caching cache control ETag service worker">
        <h3><span class="num">26</span> HTTP caching</h3>
        <div class="answer">HTTP caching avoids unnecessary transfers. <code>Cache-Control</code> defines freshness and storage rules. While a response is fresh, it can be reused directly; when stale, validators such as <code>ETag</code> or <code>Last-Modified</code> allow revalidation and a 304 response. For versioned static assets I use long immutable caching; HTML usually needs a shorter or revalidated policy.</div>
        <div class="grid"><div class="block"><h4>Typical policies</h4><pre># Fingerprinted asset: app.a1b2c3.js
Cache-Control: public, max-age=31536000, immutable

# HTML that should be checked before reuse
Cache-Control: no-cache
ETag: "page-v42"

# Sensitive response: do not store
Cache-Control: no-store</pre><p><code>no-cache</code> means “revalidate before reuse,” not “do not store.” <code>Vary</code> tells caches which request headers affect the representation.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Confusing <code>no-cache</code> with <code>no-store</code>.</li><li>Caching HTML forever and trapping users on old asset references.</li><li>Forgetting shared-cache privacy and <code>Vary</code>.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Strong vs weak ETags? Browser cache vs CDN vs service worker cache? How do you invalidate assets?</div>
      </article>

      <article id="cors" data-title="CORS same origin preflight credentials">
        <h3><span class="num">27</span> CORS</h3>
        <div class="answer">CORS is a browser mechanism that lets a server opt into cross-origin reads. The same-origin policy normally blocks frontend JavaScript from reading another origin’s response. For some requests the browser first sends an OPTIONS preflight. CORS is enforced by browsers; it is not authentication and it does not stop direct server-to-server requests.</div>
        <div class="grid"><div class="block"><h4>Credentialed example</h4><pre>fetch('https://api.example.com/profile', {
  credentials: 'include'
});

// Response must use a specific origin, not *, for credentials:
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Credentials: true</pre><p>An origin is the combination of scheme, host, and port. “Simple” requests can skip preflight, but their response still needs the correct CORS headers to be readable.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Trying to fix CORS from client JavaScript.</li><li>Using wildcard origin with credentials.</li><li>Calling CORS a security boundary for the API itself.</li><li>Forgetting that preflight responses need correct headers too.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>What triggers preflight? What is a simple request? CORS vs CSRF? Why can a form still send cross-origin?</div>
      </article>

      <article id="storage" data-title="Cookies localStorage sessionStorage IndexedDB">
        <h3><span class="num">28</span> Cookies and browser storage</h3>
        <div class="answer">Cookies are small values automatically attached to matching HTTP requests, so they suit server sessions but need security attributes. <code>localStorage</code> persists by origin and is synchronous; <code>sessionStorage</code> is scoped to an origin and tab session. IndexedDB is asynchronous and better for larger structured offline data. I choose storage based on lifecycle, size, access pattern, and threat model.</div>
        <div class="grid"><div class="block"><h4>Secure session cookie</h4><pre>Set-Cookie: session=opaque-value;
  HttpOnly; Secure; SameSite=Lax; Path=/</pre><ul><li><code>HttpOnly</code>: JavaScript cannot read it.</li><li><code>Secure</code>: send only over HTTPS.</li><li><code>SameSite</code>: limits cross-site sending and helps against CSRF.</li></ul></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Storing sensitive long-lived tokens in <code>localStorage</code> without considering XSS.</li><li>Using synchronous storage in a hot path.</li><li>Assuming HttpOnly cookies eliminate CSRF.</li><li>Storing secrets client-side as if users cannot inspect them.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Cookie vs localStorage for auth? What does SameSite do? When would you use IndexedDB? What are storage quotas?</div>
      </article>

      <article id="auth" data-title="Authentication authorization sessions OAuth">
        <h3><span class="num">29</span> Authentication vs authorization</h3>
        <div class="answer">Authentication answers “who are you?” and authorization answers “what are you allowed to do?” Authentication might use a password, passkey, or identity provider. After identity is established, the server applies authorization rules for every protected action. Frontend route guards improve UX, but they are never the real security boundary.</div>
        <div class="grid"><div class="block"><h4>Practical model</h4><pre>Sign in → establish identity → issue session/token
Request → validate session/token → load policy/roles
        → authorize this resource and action → allow/deny</pre><p>Role-based access control is convenient, but resource ownership or attribute-based rules are often required. The server must enforce them.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Hiding a button and calling the action secure.</li><li>Confusing OAuth authorization with user authentication; OpenID Connect adds an identity layer.</li><li>Trusting role or price values supplied by the client.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Sessions vs tokens? OAuth vs OpenID Connect? RBAC vs ABAC? Where should permission checks live?</div>
      </article>

      <article id="jwt" data-title="JWT access token refresh token rotation flow">
        <h3><span class="num">30</span> JWT and refresh flow</h3>
        <div class="answer">A JWT is a signed token format, not an authentication strategy by itself. A common flow uses a short-lived access token for APIs and a longer-lived refresh token to obtain new access tokens. I prefer refresh tokens in Secure, HttpOnly, appropriately SameSite cookies, rotate them on use, detect reuse, and keep access tokens short-lived.</div>
        <div class="grid"><div class="block"><h4>Refresh flow</h4><pre>1. Sign in successfully
2. Server returns short-lived access token
   and sets protected refresh-token cookie
3. API call receives 401 because access token expired
4. Client calls /auth/refresh once
5. Server validates + rotates refresh token
6. Client retries queued requests with new access token
7. If refresh fails, clear session and ask user to sign in</pre><p>Coordinate concurrent 401 responses so only one refresh runs. Decode a JWT only to read claims; signature validation and authorization belong on the server.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Assuming encoded JWT payloads are encrypted or secret.</li><li>Putting long-lived tokens in JavaScript-readable storage.</li><li>Creating an infinite 401 → refresh → retry loop.</li><li>Refreshing separately for every concurrent failed request.</li><li>Not planning revocation, rotation, clock skew, or logout.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>JWT vs opaque session? Where do you store tokens? How does refresh-token reuse detection work? What happens across tabs?</div>
      </article>

      <article id="security" data-title="XSS CSRF CSP frontend security">
        <h3><span class="num">31</span> XSS, CSRF, and CSP</h3>
        <div class="answer">XSS lets attacker-controlled code run in the site’s origin, so I prevent it with contextual output encoding, safe DOM APIs, sanitization for allowed HTML, and a restrictive CSP as defense in depth. CSRF tricks a browser into sending an authenticated request, so I use SameSite cookies, CSRF tokens or origin checks, and safe request design. CSP limits which scripts and resources may execute or load.</div>
        <div class="grid"><div class="block"><h4>Safer patterns</h4><pre>// Safe for plain text
element.textContent = untrustedValue;

// Dangerous without robust sanitization
element.innerHTML = untrustedValue;

Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-r4nd0m';
  object-src 'none'; base-uri 'self';</pre><p>XSS can bypass many CSRF defenses because malicious code runs inside the trusted origin. Framework escaping helps, but unsafe HTML escape hatches still need care.</p></div><div class="block"><div class="trap"><h4>Common traps</h4><ul><li>Treating CSP as the only XSS defense.</li><li>Using regex as an HTML sanitizer.</li><li>Assuming JSON APIs cannot have CSRF risk.</li><li>Allowing <code>'unsafe-inline'</code> and calling the CSP strong.</li><li>Logging tokens or personal data to analytics.</li></ul></div></div></div>
        <div class="follow"><h4>Likely follow-ups</h4>Stored vs reflected vs DOM XSS? How does a CSRF token work? Nonce vs hash CSP? What is Trusted Types?</div>
      </article>

      <section class="checklist" id="practice"><h2>Compact practice checklist</h2><p>Check an item only when you can explain it aloud without reading.</p><div class="checks">
        <label class="check"><input type="checkbox">Explain lexical scope and closure with one example.</label>
        <label class="check"><input type="checkbox">Compare <code>var</code>, <code>let</code>, and <code>const</code>.</label>
        <label class="check"><input type="checkbox">Predict <code>this</code> from a call site.</label>
        <label class="check"><input type="checkbox">Explain prototypes and what <code>new</code> does.</label>
        <label class="check"><input type="checkbox">Explain strict equality and reference equality.</label>
        <label class="check"><input type="checkbox">Show why object spread is shallow.</label>
        <label class="check"><input type="checkbox">Write an immutable nested update.</label>
        <label class="check"><input type="checkbox">Explain promise chaining and rejection flow.</label>
        <label class="check"><input type="checkbox">Spot accidental sequential <code>await</code>.</label>
        <label class="check"><input type="checkbox">Predict task and microtask output.</label>
        <label class="check"><input type="checkbox">Choose among all, allSettled, race, and any.</label>
        <label class="check"><input type="checkbox">Implement a basic debounce and throttle.</label>
        <label class="check"><input type="checkbox">Explain ESM, dynamic import, and tree-shaking.</label>
        <label class="check"><input type="checkbox">Describe error boundaries and observability.</label>
        <label class="check"><input type="checkbox">Name five frontend memory leak sources.</label>
        <label class="check"><input type="checkbox">Explain event delegation and propagation.</label>
        <label class="check"><input type="checkbox">Walk through the rendering pipeline.</label>
        <label class="check"><input type="checkbox">Explain layout thrashing and smooth animation.</label>
        <label class="check"><input type="checkbox">Give an accessibility testing routine.</label>
        <label class="check"><input type="checkbox">Diagnose likely LCP, INP, and CLS causes.</label>
        <label class="check"><input type="checkbox">Walk from URL to rendered page.</label>
        <label class="check"><input type="checkbox">Explain HTTP methods, codes, and idempotency.</label>
        <label class="check"><input type="checkbox">Design caching for HTML and hashed assets.</label>
        <label class="check"><input type="checkbox">Explain CORS and preflight without myths.</label>
        <label class="check"><input type="checkbox">Choose cookies, web storage, or IndexedDB.</label>
        <label class="check"><input type="checkbox">Separate authentication from authorization.</label>
        <label class="check"><input type="checkbox">Walk through a safe refresh-token flow.</label>
        <label class="check"><input type="checkbox">Compare XSS, CSRF, and CSP defenses.</label>
        <label class="check"><input type="checkbox">Tell one real performance trade-off story.</label>
        <label class="check"><input type="checkbox">Prepare two “I measured before optimizing” examples.</label>
      </div></section>
      <div id="no-results" class="no-results">No matching topics. Try a broader term.</div>
      <div class="footer">Built as a single offline file. Search with <span class="kbd">Ctrl</span> + <span class="kbd">K</span>, or print to PDF.</div>
    </main>
  </div>
  <script>
    const nav = document.querySelector('#nav');
    const sectionNodes = [...document.querySelectorAll('[data-section]')];
    const articles = [...document.querySelectorAll('article[data-title]')];

    sectionNodes.forEach(section => {
      const heading = document.createElement('h2');
      heading.textContent = section.dataset.section;
      nav.appendChild(heading);
      let next = section.nextElementSibling;
      while (next && !next.matches('[data-section], .checklist')) {
        if (next.matches('article[data-title]')) {
          const link = document.createElement('a');
          link.href = \`#\${next.id}\`;
          link.textContent = next.dataset.title;
          nav.appendChild(link);
        }
        next = next.nextElementSibling;
      }
    });
    const practiceLink = document.createElement('a');
    practiceLink.href = '#practice';
    practiceLink.textContent = 'Practice checklist';
    nav.appendChild(practiceLink);

    const search = document.querySelector('#search');
    const noResults = document.querySelector('#no-results');
    function filterGuide() {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      articles.forEach(article => {
        const match = !query || article.textContent.toLowerCase().includes(query);
        article.hidden = !match;
        if (match) visible++;
      });
      sectionNodes.forEach(section => {
        let next = section.nextElementSibling;
        let hasVisible = false;
        while (next && !next.matches('[data-section], .checklist')) {
          if (next.matches('article[data-title]') && !next.hidden) hasVisible = true;
          next = next.nextElementSibling;
        }
        section.hidden = !hasVisible;
      });
      noResults.style.display = visible ? 'none' : 'block';
    }
    search.addEventListener('input', filterGuide);
    document.addEventListener('keydown', event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); search.focus();
      }
      if (event.key === 'Escape' && document.activeElement === search) {
        search.value = ''; filterGuide(); search.blur();
      }
    });
    document.querySelector('#print').addEventListener('click', () => window.print());

    const savedChecks = JSON.parse(localStorage.getItem('frontend-guide-checks') || '{}');
    document.querySelectorAll('.check input').forEach((box, index) => {
      box.checked = Boolean(savedChecks[index]);
      box.addEventListener('change', () => {
        savedChecks[index] = box.checked;
        localStorage.setItem('frontend-guide-checks', JSON.stringify(savedChecks));
      });
    });
  <\/script>
</body>
</html>
`,format:`html`},{id:`typescript`,label:`TypeScript`,short:`TS`,color:`#4da3ff`,description:`Type safety, generics, advanced types and framework patterns.`,source:`# Senior TypeScript Interview Guide

Tailored for a senior frontend developer with 6+ years of JavaScript, frameworks, and enterprise applications.

## How to use this guide

For each topic, first say the **interview answer** aloud. Then explain the code without reading it. A senior answer should usually cover four things: what the feature is, why it matters, its limits, and the trade-off you would make in production.

---

## 1. Type inference and annotations

**Interview answer:** TypeScript often infers a type from a value or context, so I avoid annotations that only repeat what the compiler already knows. I add explicit types at public boundaries—function parameters, exported APIs, state models, and places where I want to enforce a contract.

**Simple explanation:** Inference reduces noise. An annotation communicates intent and prevents a later edit from silently changing an important contract.

\`\`\`ts
const count = 3; // inferred as number

function formatUser(user: User): string {
  return \`\${user.name} (\${user.id})\`;
}
\`\`\`

**Common mistakes:** Annotating every local variable; relying on inference for an exported API whose contract should remain stable; confusing \`const n = 3\` (literal \`3\`) with mutable \`let n = 3\` (\`number\`).

**Trade-off:** More annotations improve clarity and API stability, but excessive annotations create noise and can make refactoring harder.

**Likely follow-ups:** Where do you insist on annotations? How does contextual typing work for callbacks? Why annotate return types on exported functions?

## 2. \`any\`, \`unknown\`, \`never\`, and \`void\`

**Interview answer:** \`any\` opts out of type checking. \`unknown\` accepts any value but forces me to narrow it before use, so it is safer at untrusted boundaries. \`void\` describes a function whose result should not be used. \`never\` means a value cannot exist or a function cannot complete normally; it is useful for exhaustive checks.

\`\`\`ts
function parseInput(value: unknown): string {
  if (typeof value === "string") return value;
  throw new Error("Expected a string");
}

function assertNever(value: never): never {
  throw new Error(\`Unhandled case: \${String(value)}\`);
}
\`\`\`

**Common mistakes:** Using \`any\` for convenience; treating \`unknown\` as usable without a guard; thinking \`void\` means a function literally returns no JavaScript value; using \`never\` where \`void\` is intended.

**Trade-off:** \`any\` can speed up a temporary migration, but it moves failures to runtime. Prefer \`unknown\`, narrow it, and contain unavoidable \`any\` at a small boundary.

**Follow-ups:** Why can an \`async\` function be \`Promise<void>\`? When is \`never\` inferred? What is the difference between \`unknown\` and \`any\` in assignment?

## 3. Union and intersection types

**Interview answer:** A union \`A | B\` means a value may be one of several types, so I can only use members common to all options until I narrow it. An intersection \`A & B\` requires a value to satisfy both types. I use unions for alternatives and intersections mainly for composing compatible object capabilities.

\`\`\`ts
type Id = string | number;
type Audited = { createdAt: Date; updatedAt: Date };
type User = { id: Id; name: string } & Audited;
\`\`\`

**Common mistakes:** Assuming a union exposes every member from every branch; intersecting incompatible primitives or conflicting properties, producing \`never\`; building unreadable “type puzzles” with many intersections.

**Trade-off:** Unions model real alternatives clearly. Intersections reduce repetition, but named domain types are often easier to understand than deep composition.

**Follow-ups:** What happens to \`{x: string} & {x: number}\`? How do you narrow a union? Union of functions versus function with union parameters?

## 4. Literal types

**Interview answer:** Literal types represent exact values such as \`"loading"\` or \`200\`, not every string or number. They let the compiler model a closed set of valid states and catch typos.

\`\`\`ts
type Theme = "light" | "dark" | "system";
function setTheme(theme: Theme) {}

setTheme("dark");
// setTheme("blue"); // error
\`\`\`

**Common mistakes:** Widening a value to \`string\` too early; duplicating the same literal list in runtime code and types; using literal unions for an open-ended set.

**Trade-off:** Literal unions give autocomplete and safety for stable finite values. For values supplied by third parties, allow extension, for example \`KnownValue | (string & {})\`, or validate a plain string.

**Follow-ups:** Why does \`let status = "open"\` usually become \`string\`? How does \`as const\` preserve literals?

## 5. Interfaces versus type aliases

**Interview answer:** Both can describe object shapes. Interfaces are extendable and support declaration merging, which is useful for public or augmentable contracts. Type aliases can also represent unions, primitives, tuples, mapped types, and conditional types. In an application I choose a consistent convention; I normally use interfaces for object contracts and types for composition or unions.

\`\`\`ts
interface Employee extends Person { employeeId: string }
type Result<T> = { ok: true; data: T } | { ok: false; error: AppError };
\`\`\`

**Common mistakes:** Claiming one is always faster or always better; accidental interface merging; creating long inheritance chains.

**Trade-off:** Interface merging is powerful for libraries and module augmentation, but closed aliases can be more predictable. Composition is often clearer than inheritance.

**Follow-ups:** Can a type alias extend an interface? What is declaration merging? Which produces better error messages today?

## 6. Optional and \`readonly\` properties

**Interview answer:** \`prop?: T\` means the property may be absent; it is not always the same domain meaning as “present with \`undefined\`.” \`readonly\` prevents assignment through that TypeScript reference, but it is shallow and provides no runtime immutability.

\`\`\`ts
interface Config {
  readonly apiUrl: string;
  timeoutMs?: number;
}

const timeout = config.timeoutMs ?? 5_000;
\`\`\`

**Common mistakes:** Using truthiness when \`0\` or \`""\` is valid; believing \`readonly\` freezes nested objects; overusing optional fields instead of modeling separate states.

**Trade-off:** Optional fields are convenient for configuration and patches. For business states, a discriminated union may express valid combinations more safely. Enable \`exactOptionalPropertyTypes\` when absence and explicit \`undefined\` must differ.

**Follow-ups:** \`Readonly<T>\` versus \`Object.freeze\`? How does \`exactOptionalPropertyTypes\` change assignments?

## 7. Narrowing and type guards

**Interview answer:** Narrowing is TypeScript refining a broad type from control flow. I prefer built-in checks such as \`typeof\`, \`instanceof\`, \`in\`, equality, and discriminants. For repeated domain checks I write a type predicate, but the function must really validate what it claims.

\`\`\`ts
type ApiUser = { id: string; name: string };

function isApiUser(value: unknown): value is ApiUser {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.id === "string" && typeof v.name === "string";
}
\`\`\`

**Common mistakes:** Writing a predicate that only checks one field; using \`as\` instead of proving the type; losing narrowing after mutation or across unsafe callbacks.

**Trade-off:** Handwritten guards are dependency-free but can drift from types. A runtime schema is better for complex external data.

**Follow-ups:** Predicate \`value is T\` versus assertion \`asserts value is T\`? Why is \`typeof null === "object"\` relevant?

## 8. Generics and constraints

**Interview answer:** Generics preserve relationships between input and output types. A constraint limits what a type parameter must support. I use generics when callers gain specific type information—not just to replace a concrete type with a letter.

\`\`\`ts
function getById<T extends { id: string }>(items: readonly T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`

**Common mistakes:** Using a generic only once (\`function log<T>(x: T): void\` adds little); returning an unchecked cast; using \`{}\` to mean object; over-generalizing a simple API.

**Trade-off:** Generics produce reusable, precise APIs, but complex generic signatures hurt usability and diagnostics. Start concrete, generalize when a real relationship appears.

**Follow-ups:** Constraint versus default type parameter? Why is \`K extends keyof T\` useful? When would overloads be clearer?

## 9. \`keyof\`, \`typeof\`, and indexed access

**Interview answer:** In a type position, \`keyof T\` gives the known property keys of \`T\`. \`typeof value\` captures the static type of a runtime value. \`T[K]\` looks up the value type at key \`K\`. Together they keep types synchronized with real objects.

\`\`\`ts
const roles = {
  admin: { canDelete: true },
  viewer: { canDelete: false }
} as const;

type Role = keyof typeof roles; // "admin" | "viewer"
type AdminConfig = (typeof roles)["admin"];
\`\`\`

**Common mistakes:** Confusing type-level \`typeof\` with runtime \`typeof\`; expecting \`Object.keys\` to return \`(keyof T)[]\` for arbitrary objects; indexing with an unconstrained string.

**Trade-off:** Deriving types removes duplication, but a runtime object should not become an accidental, unreadable source of every domain type.

**Follow-ups:** Why is \`keyof\` sometimes \`string | number\`? How do index signatures affect it?

## 10. Mapped types

**Interview answer:** A mapped type iterates over property keys to transform a shape. Built-in utilities such as \`Partial\` and \`Readonly\` are mapped types. I use them for systematic transformations, not to hide a poorly modeled domain.

\`\`\`ts
type Nullable<T> = { [K in keyof T]: T[K] | null };
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Getters<T> = { [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K] };
\`\`\`

**Common mistakes:** Forgetting mapped types are shallow; losing optional/readonly modifiers unintentionally; creating clever key remapping nobody can maintain.

**Trade-off:** They remove repeated declarations and keep models aligned, but named explicit types may communicate business meaning better.

**Follow-ups:** How do \`+?\`, \`-?\`, \`readonly\`, and key remapping work? Why use \`string & K\`?

## 11. Conditional types

**Interview answer:** A conditional type chooses a type using \`T extends U ? X : Y\`. It is useful for expressing relationships and extracting types with \`infer\`. When the checked type is a naked type parameter, it distributes over unions.

\`\`\`ts
type ElementOf<T> = T extends readonly (infer U)[] ? U : T;
type A = ElementOf<string[]>; // string

type NonDistributed<T> = [T] extends [string] ? true : false;
\`\`\`

**Common mistakes:** Being surprised by distribution; recursive types that hit complexity limits; recreating built-in utilities; exposing hard-to-read conditions in public APIs.

**Trade-off:** Conditional types make libraries expressive, but overloads or separate named types can be clearer for application code.

**Follow-ups:** What does \`infer\` do? How do you prevent distribution? Implement \`Awaited\` conceptually.

## 12. Utility types

**Interview answer:** Utility types perform common transformations. I regularly use \`Partial\`, \`Required\`, \`Readonly\`, \`Pick\`, \`Omit\`, \`Record\`, \`Exclude\`, \`Extract\`, \`NonNullable\`, \`Parameters\`, \`ReturnType\`, and \`Awaited\`. I choose them only when the resulting type matches the domain semantics.

\`\`\`ts
type UserPreview = Pick<User, "id" | "name">;
type UserPatch = Partial<Pick<User, "name" | "email">>;
type UsersById = Record<string, User>;
type AsyncValue = Awaited<ReturnType<typeof fetchUser>>;
\`\`\`

**Common mistakes:** Using \`Partial<Entity>\` as every update DTO; using \`Omit\` chains that become fragile; assuming utilities validate runtime data.

**Trade-off:** Utilities reduce duplication, but explicit request/response types better capture permissions, validation, and API evolution.

**Follow-ups:** \`Omit\` versus \`Exclude\`? Why can \`Record<string, T>\` be unsafe with unchecked indexing?

## 13. Function overloads

**Interview answer:** Overloads describe a small set of distinct call signatures while one implementation handles them. Callers see the overload signatures, not the implementation signature. I use them when return type depends on the input shape and a union signature would lose that relationship.

\`\`\`ts
function parse(value: string): object;
function parse(value: string[]): object[];
function parse(value: string | string[]): object | object[] {
  return Array.isArray(value) ? value.map(JSON.parse) : JSON.parse(value);
}
\`\`\`

**Common mistakes:** Writing implementation signatures incompatible with overloads; too many overloads; ordering broad overloads before specific ones; using overloads where a generic or union is simpler.

**Trade-off:** Overloads improve caller precision, but increase maintenance. Prefer unions when input and output are not correlated.

**Follow-ups:** Why can’t callers use the implementation signature? Overload versus generic conditional return type?

## 14. Classes and access modifiers

**Interview answer:** TypeScript classes add types to JavaScript classes. \`public\` is the default, \`protected\` is visible to subclasses, and \`private\` is compile-time privacy. JavaScript \`#field\` gives runtime privacy. \`abstract\` defines incomplete base behavior; \`readonly\` prevents reassignment after construction.

\`\`\`ts
abstract class Store<T> {
  #items = new Map<string, T>();
  protected constructor(public readonly name: string) {}
  protected set(id: string, value: T) { this.#items.set(id, value); }
  abstract refresh(): Promise<void>;
}
\`\`\`

**Common mistakes:** Deep inheritance; assuming TS \`private\` is runtime security; placing all business logic in stateful classes; exposing mutable collections.

**Trade-off:** Classes fit framework services and stateful objects. Functions and composition often test and reuse more easily.

**Follow-ups:** \`private\` versus \`#private\`? Parameter properties? Abstract class versus interface?

## 15. Enums and alternatives

**Interview answer:** Enums create a runtime object as well as a type. They can be useful when interoperating with enum-based APIs, but for most frontend state I prefer an \`as const\` object or string-literal union because it emits predictable JavaScript and works naturally with serialization.

\`\`\`ts
const Direction = { Up: "UP", Down: "DOWN" } as const;
type Direction = typeof Direction[keyof typeof Direction];
\`\`\`

**Common mistakes:** Numeric enum reverse mappings and accidental numeric compatibility; using \`const enum\` across package boundaries; assuming a backend string is valid merely by casting it.

**Trade-off:** Enums offer namespacing and runtime values. Literal unions are simpler and more structural. Validate values received over the network either way.

**Follow-ups:** What JavaScript does an enum emit? Risks of \`const enum\`? Why prefer string enums over numeric ones?

## 16. Discriminated unions

**Interview answer:** A discriminated union gives every variant a shared literal field, such as \`kind\` or \`status\`. A switch on that field narrows safely, models valid states, and supports exhaustive checking. It is one of my preferred tools for UI and async state.

\`\`\`ts
type LoadState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: AppError };

function render<T>(state: LoadState<T>): string {
  switch (state.status) {
    case "idle": return "Ready";
    case "loading": return "Loading…";
    case "success": return String(state.data);
    case "error": return state.error.message;
    default: return assertNever(state);
  }
}
\`\`\`

**Common mistakes:** Optional fields on one large state object; non-literal discriminants; missing exhaustive checks.

**Trade-off:** More variants mean more code, but invalid combinations become impossible and refactors become safer.

**Follow-ups:** How does \`never\` enforce exhaustiveness? How would you model retries or stale data?

## 17. Structural typing

**Interview answer:** TypeScript is structurally typed: compatibility depends mainly on a value’s shape, not its declared name. This is ergonomic for JavaScript and testing. For domain values that must not be mixed, I can add a brand to create nominal-like types.

\`\`\`ts
type UserId = string & { readonly __brand: "UserId" };
type OrderId = string & { readonly __brand: "OrderId" };

function asUserId(value: string): UserId { return value as UserId; }
\`\`\`

**Common mistakes:** Assuming two interfaces with different names are incompatible; overusing brands without validated constructors; misunderstanding excess-property checks as exact-object typing.

**Trade-off:** Structural typing enables flexible composition. Branding adds domain protection but needs controlled creation and may complicate serialization boundaries.

**Follow-ups:** Why can a variable with extra fields be assigned when an object literal cannot? What are fresh-object excess-property checks?

## 18. Variance, practically

**Interview answer:** Variance describes how compatibility of \`T\` affects compatibility of a container of \`T\`. Read-only producers are usually covariant; consumers are contravariant under \`strictFunctionTypes\`; mutable containers can be unsafe and should conceptually be invariant. In reviews, I focus on callback parameter safety and avoid mutating arrays passed from narrower types.

\`\`\`ts
type Animal = { name: string };
type Dog = Animal & { bark(): void };

type Producer<T> = () => T;
type Consumer<T> = (value: T) => void;

const makeAnimal: Producer<Animal> = (): Dog => ({ name: "Rex", bark() {} });
\`\`\`

**Common mistakes:** Assigning a handler for \`Dog\` where any \`Animal\` may arrive; forgetting method parameters have historical bivariance behavior; mutating covariantly viewed arrays.

**Trade-off:** Strict callback checking can require adapters, but prevents real runtime errors. Prefer \`readonly T[]\` for input collections.

**Follow-ups:** Covariance versus contravariance? What does \`strictFunctionTypes\` change? Why are methods special?

## 19. Declaration files

**Interview answer:** \`.d.ts\` files describe types for existing JavaScript without emitting code. Libraries publish them directly or use DefinitelyTyped packages. I use module declarations for untyped dependencies and module augmentation only when I am extending a real library contract.

\`\`\`ts
// legacy-widget.d.ts
declare module "legacy-widget" {
  export interface Options { color?: string }
  export function mount(element: HTMLElement, options?: Options): () => void;
}
\`\`\`

**Common mistakes:** Declaring a module as \`any\`; putting runtime code in \`.d.ts\`; mismatching the actual export style; broad global declarations; forgetting the file must be included by \`tsconfig\`.

**Trade-off:** A minimal declaration unblocks work, but incorrect types are worse than missing types because they create false confidence. Test library declarations with sample compilation.

**Follow-ups:** Ambient declaration? Module augmentation? \`@types\` resolution? \`declare global\`?

## 20. Modules

**Interview answer:** Every file with a top-level import or export is a module with its own scope. I align TypeScript’s \`module\` and \`moduleResolution\` with the actual runtime and bundler, and I pay attention to ESM/CJS interop, package \`exports\`, and file extensions.

\`\`\`ts
// user.ts
export type User = { id: string };
export function loadUser(): Promise<User> { /* ... */ throw new Error(); }

// app.ts
import { loadUser, type User } from "./user.js";
\`\`\`

**Common mistakes:** Treating path aliases as runtime rewriting; mixing ESM and CommonJS assumptions; default-export interop surprises; barrel files that introduce cycles or reduce tree-shaking.

**Trade-off:** Barrels simplify imports but can hide dependencies. Explicit imports give clearer ownership and often better build behavior.

**Follow-ups:** What does \`moduleResolution: "bundler"\` mean? Why may Node ESM imports include \`.js\` in TypeScript source? What is a circular dependency?

## 21. Important strict \`tsconfig\` options

**Interview answer:** I start with \`strict: true\`, which includes checks such as strict nullability and function types. For stronger enterprise safety I consider \`noUncheckedIndexedAccess\`, \`exactOptionalPropertyTypes\`, \`noImplicitOverride\`, \`useUnknownInCatchVariables\`, and \`noFallthroughCasesInSwitch\`. I enable them intentionally and fix code instead of hiding errors with assertions.

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "useUnknownInCatchVariables": true,
    "verbatimModuleSyntax": true
  }
}
\`\`\`

**Common mistakes:** Copying a config without matching the runtime; \`skipLibCheck\` mistaken for checking application code; enabling strictness and adding mass \`as\` casts; confusing \`target\` with \`lib\`.

**Trade-off:** Strictness raises short-term migration cost but lowers ambiguity and production defects. Roll out high-impact flags by package when a legacy codebase cannot change at once.

**Follow-ups:** What does \`strictNullChecks\` prevent? Does TypeScript transpile polyfills? When is \`skipLibCheck\` reasonable?

## 22. \`satisfies\`

**Interview answer:** \`satisfies\` checks that an expression conforms to a type while preserving the expression’s more specific inferred type. It is ideal for configuration objects where I want typo checking without widening every property to the target type.

\`\`\`ts
type RouteName = "home" | "settings";
type Route = { path: string; secure: boolean };

const routes = {
  home: { path: "/", secure: false },
  settings: { path: "/settings", secure: true }
} satisfies Record<RouteName, Route>;

routes.settings.secure; // still inferred as true
\`\`\`

**Common mistakes:** Treating it as a runtime check; confusing it with \`as\`; expecting it to change the variable’s type to the target.

**Trade-off:** It gives validation plus precise inference. An annotation is better when you deliberately want to hide implementation detail or widen the public type.

**Follow-ups:** \`satisfies\` versus annotation versus assertion? Does it emit JavaScript?

## 23. Const assertions

**Interview answer:** \`as const\` prevents literal widening and makes object properties and array elements readonly at the type level. It is useful for fixed configuration and deriving literal unions, but it does not freeze the object at runtime.

\`\`\`ts
const levels = ["info", "warn", "error"] as const;
type Level = typeof levels[number];

const action = { type: "USER_LOADED", id: "u1" } as const;
\`\`\`

**Common mistakes:** Assuming deep runtime immutability; applying it to hide an API design issue; struggling with a readonly tuple where a mutable array is required.

**Trade-off:** Const assertions give very precise types, but too much precision can make mutation-oriented APIs awkward. Accept readonly inputs where possible.

**Follow-ups:** \`const\` declaration versus \`as const\`? What are const type parameters?

## 24. Type-only imports

**Interview answer:** \`import type\` makes it explicit that an import exists only for type checking and should not become a runtime dependency. It improves clarity, avoids some accidental side effects and cycles, and works well with \`verbatimModuleSyntax\`.

\`\`\`ts
import type { User } from "./models.js";
import { createUser } from "./service.js";

export type { User };
\`\`\`

**Common mistakes:** Using a type-only imported class as a runtime value; relying on old import elision behavior; assuming type-only imports fix an actual runtime cycle elsewhere.

**Trade-off:** Explicit syntax is slightly more verbose but makes module boundaries and emitted code predictable.

**Follow-ups:** Can a class be both a type and a value? What does \`verbatimModuleSyntax\` do?

## 25. Typing APIs and errors

**Interview answer:** Network data is untrusted even if I write a response interface. I receive it as \`unknown\`, validate at the boundary, then expose a typed domain result. I normalize errors into a discriminated union or application error instead of assuming caught values are \`Error\`.

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { kind: "network" | "validation" | "server"; message: string } };

async function getUser(id: string): Promise<ApiResult<User>> {
  try {
    const response = await fetch(\`/api/users/\${encodeURIComponent(id)}\`);
    if (!response.ok) return { ok: false, error: { kind: "server", message: \`\${response.status}\` } };
    const raw: unknown = await response.json();
    const user = UserSchema.parse(raw);
    return { ok: true, data: user };
  } catch (error: unknown) {
    return { ok: false, error: { kind: "network", message: error instanceof Error ? error.message : "Unknown error" } };
  }
}
\`\`\`

**Common mistakes:** \`response.json() as User\`; generic \`ApiResponse<T>\` with no runtime validation; catching \`any\`; losing HTTP status and error cause.

**Trade-off:** Validation costs code and CPU, but it localizes failures and protects the rest of the app. Validate public/external boundaries most strongly.

**Follow-ups:** Exceptions versus result types? Where should DTO-to-domain mapping happen? How do you type error codes?

## 26. React patterns

**Interview answer:** I type component props and domain state, rely on inference for JSX and simple hooks, and model async or reducer state with discriminated unions. I avoid \`React.FC\` when it adds no value, use \`ComponentProps\` to wrap native elements, and type event handlers by the element involved.

\`\`\`tsx
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button data-variant={variant} {...props} />;
}

const [user, setUser] = useState<User | null>(null);
const onChange: React.ChangeEventHandler<HTMLInputElement> = e => setQuery(e.currentTarget.value);
\`\`\`

**Common mistakes:** \`any\` events; \`useState([])\` inferring \`never[]\`; giant prop interfaces; unsafe context defaults; copying server state into local state; overusing non-null assertions on refs.

**Trade-off:** Generic reusable components can become difficult to infer. A smaller explicit component API is often better than maximum polymorphism.

**Follow-ups:** How do you type \`children\`, refs, context, reducers, or a generic table? Server-state library inference?

## 27. Angular patterns

**Interview answer:** I use typed services, reactive forms, dependency injection, and observable pipelines. I keep API DTOs separate from domain models and let RxJS operators preserve types. Modern typed reactive forms reduce stringly typed form access.

\`\`\`ts
interface UserDto { id: string; display_name: string }

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private readonly http: HttpClient) {}
  getUser(id: string): Observable<User> {
    return this.http.get<UserDto>(\`/api/users/\${id}\`).pipe(
      map(dto => ({ id: dto.id, name: dto.display_name }))
    );
  }
}

const form = new FormGroup({
  email: new FormControl("", { nonNullable: true })
});
\`\`\`

**Common mistakes:** Believing \`http.get<T>\` validates the response; untyped forms; nested subscriptions; excessive non-null assertions for inputs initialized by Angular.

**Trade-off:** Definite-assignment assertions may be necessary at framework-managed boundaries, but keep them localized. Runtime schemas are still needed for untrusted APIs.

**Follow-ups:** Type an \`@Input\`, custom validator, route data, signal, or RxJS error path. \`Observable<T>\` versus \`Promise<T>\`?

## 28. Vue patterns

**Interview answer:** In Vue 3 I use \`defineProps\`, \`defineEmits\`, typed refs, and typed composables. I let inference handle simple refs, explicitly type nullable or initially empty state, and remember that refs unwrap differently in templates and script.

\`\`\`vue
<script setup lang="ts">
type Props = { user: User; compact?: boolean };
const props = withDefaults(defineProps<Props>(), { compact: false });
const emit = defineEmits<{ save: [user: User]; cancel: [] }>();

const selected = ref<User | null>(null);
const title = computed(() => props.user.name.toUpperCase());
<\/script>
\`\`\`

**Common mistakes:** \`ref(null)\` staying too narrow; destructuring reactive objects and losing reactivity; using \`any\` for emits; confusing \`Ref<T>\` with \`T\`; assuming compile-time props validate arbitrary server data.

**Trade-off:** Generic components and composables improve reuse but can make template inference harder. Prefer domain-specific APIs unless reuse is proven.

**Follow-ups:** \`ref\` versus \`reactive\`? Type a composable or injection key? How are component events typed?

## 29. Runtime schemas versus compile-time safety

**Interview answer:** TypeScript types disappear after compilation, so they cannot validate JSON, local storage, form input, environment variables, or messages. At those boundaries I use a schema library or careful guards, then infer or derive the TypeScript type to avoid drift.

\`\`\`ts
import { z } from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1)
});
type User = z.infer<typeof UserSchema>;

const user = UserSchema.parse(await response.json());
\`\`\`

**Common mistakes:** Casting instead of validating; validating only the top level; maintaining unrelated schema and interface definitions; validating trusted internal values repeatedly.

**Trade-off:** Schemas add bundle size, runtime work, and error-handling complexity. Use them at trust boundaries, not between every internal function.

**Follow-ups:** Parse versus safe-parse? How do you share schemas with a backend? How do you handle transformations and branded values?

## 30. Monorepos

**Interview answer:** In a TypeScript monorepo I define clear package boundaries, avoid reaching into another package’s source internals, and use project references or a build orchestrator for incremental builds. Each package should publish intentional entry points and declarations, with shared base configs that packages extend.

\`\`\`json
// packages/ui/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": { "composite": true, "declaration": true, "outDir": "dist" },
  "include": ["src"]
}
\`\`\`

**Common mistakes:** One giant \`paths\` map that bypasses package exports; importing source across packages; duplicated dependency versions; type-check order differing from build order; global shared “types” becoming a dumping ground.

**Trade-off:** Project references improve boundaries and incremental builds but add configuration and require compatible output structure. Small repositories may not need them.

**Follow-ups:** What does \`composite\` do? How do package \`exports\` and types work? How would you prevent dependency cycles?

## 31. Library types

**Interview answer:** A TypeScript library should expose a small stable public type surface, emit \`.d.ts\` files, and test the package as consumers import it. I avoid leaking private dependency types, preserve inference, and use \`exports\` plus matching type declarations for each entry point.

\`\`\`json
{
  "name": "@acme/widgets",
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" }
  },
  "types": "./dist/index.d.ts"
}
\`\`\`

\`\`\`ts
export interface WidgetOptions { color?: string }
export declare function createWidget(options?: WidgetOptions): Widget;
\`\`\`

**Common mistakes:** Exporting every internal type; relying only on \`types\` while runtime \`exports\` disagree; bundling duplicate library instances; breaking types in a patch release; shipping declarations that reference unavailable files.

**Trade-off:** Rich inferred types delight users but can lock implementation details into the public API. Name and document stable types deliberately.

**Follow-ups:** \`dependencies\` versus \`peerDependencies\`? How do you test types? Dual ESM/CJS concerns? Declaration maps?

## 32. Migrating from JavaScript

**Interview answer:** I migrate incrementally: enable \`allowJs\`, type-check JavaScript where useful, convert high-value boundaries first, and measure the remaining unsafe surface. I establish a strict target but stage flags by package. I contain temporary \`any\` with ownership and follow-up work instead of mass-casting until the build is green.

**Practical sequence:**

1. Establish reproducible builds and tests.
2. Add a compatible \`tsconfig\`; start with \`allowJs\` and optionally \`checkJs\`.
3. Type API clients, shared models, utilities, and new code first.
4. Rename leaf modules to \`.ts\`/\`.tsx\`; add runtime validation at external boundaries.
5. Track \`any\`, \`@ts-expect-error\`, and non-null assertions.
6. Enable strict flags gradually, starting with \`noImplicitAny\` and \`strictNullChecks\` where feasible.
7. Remove compatibility settings when the migration finishes.

**Common mistakes:** Big-bang rewrite; changing behavior and language at once; replacing every error with \`as\`; typing only UI leaves while API boundaries stay unsafe; no metric or owner.

**Trade-off:** Incremental migration keeps delivery moving but temporarily permits mixed safety levels. Package-level gates and CI prevent regression.

**Follow-ups:** Which files first? How do you measure progress? How would you handle an untyped dependency or global script?

---

# Practical coding exercises with solutions

Try each exercise before reading its solution.

## Exercise 1: Type-safe property reader

Write \`getProperty\` so the key must exist and the return type matches that key.

\`\`\`ts
const user = { id: "u1", age: 37, active: true };
const age = getProperty(user, "age"); // number
\`\`\`

**Solution**

\`\`\`ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
\`\`\`

The important relationship is not merely “key is a string”; it is “key belongs to this exact object type, and the result belongs to this exact key.”

## Exercise 2: Exhaustive reducer

Model increment, decrement, and reset actions. Make a future unhandled action fail compilation.

**Solution**

\`\`\`ts
type Action =
  | { type: "increment"; by: number }
  | { type: "decrement"; by: number }
  | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment": return state + action.by;
    case "decrement": return state - action.by;
    case "reset": return 0;
    default: return assertNever(action);
  }
}
\`\`\`

## Exercise 3: Safe error message

Write a function that accepts \`unknown\` and returns a useful message without unsafe casts.

**Solution**

\`\`\`ts
function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  try { return JSON.stringify(error); }
  catch { return "Unknown error"; }
}
\`\`\`

In production, also preserve the original cause for observability rather than reducing every error to a string too early.

## Exercise 4: Typed event bus

Create an event emitter where each event name controls its payload.

**Solution**

\`\`\`ts
type Events = {
  userLoaded: { id: string; name: string };
  signedOut: undefined;
  notification: { message: string; level: "info" | "error" };
};

class EventBus<E extends Record<string, unknown>> {
  private listeners: { [K in keyof E]?: Array<(payload: E[K]) => void> } = {};

  on<K extends keyof E>(event: K, listener: (payload: E[K]) => void): () => void {
    const list = (this.listeners[event] ??= []);
    list.push(listener);
    return () => {
      const index = list.indexOf(listener);
      if (index >= 0) list.splice(index, 1);
    };
  }

  emit<K extends keyof E>(event: K, payload: E[K]): void {
    this.listeners[event]?.forEach(listener => listener(payload));
  }
}

const bus = new EventBus<Events>();
bus.emit("notification", { message: "Saved", level: "info" });
\`\`\`

Senior discussion: synchronous listeners can throw and mutate subscriptions during emission. Decide and document error isolation, ordering, async behavior, and cleanup.

## Exercise 5: Patch type with required ID

Create a type that makes all fields optional except \`id\`.

**Solution**

\`\`\`ts
type PatchWithId<T extends { id: PropertyKey }> =
  Pick<T, "id"> & Partial<Omit<T, "id">>;

type UserPatch = PatchWithId<User>;
\`\`\`

For a real API, prefer an explicit DTO if only selected properties are legally editable.

## Exercise 6: Runtime-safe API parser

Create a reusable fetch helper that validates its response rather than trusting a generic.

**Solution**

\`\`\`ts
type Schema<T> = { parse(value: unknown): T };

async function fetchValidated<T>(url: string, schema: Schema<T>): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
  const value: unknown = await response.json();
  return schema.parse(value);
}

const user = await fetchValidated("/api/me", UserSchema);
\`\`\`

The schema connects compile-time typing with runtime proof. Add cancellation, error normalization, retries, and tracing according to the application’s policy.

## Exercise 7: Generic table model

Type a table column so \`render\` receives the value for its selected key.

**Solution**

\`\`\`ts
type Column<T, K extends keyof T = keyof T> = {
  key: K;
  title: string;
  render?: (value: T[K], row: T) => string;
};

function column<T, K extends keyof T>(config: Column<T, K>): Column<T, K> {
  return config;
}

const ageColumn = column<User, "age">({
  key: "age",
  title: "Age",
  render: age => \`\${age} years\`
});
\`\`\`

Senior discussion: a plain \`Column<T>[]\` can lose the correlation between each key and renderer. A helper, tuple, or discriminated mapped union can preserve it.

\`\`\`ts
type AnyColumn<T> = {
  [K in keyof T]: Column<T, K>
}[keyof T];
\`\`\`

## Exercise 8: Async state renderer

Add a \`refreshing\` state that retains old data, without allowing data on initial \`loading\`.

**Solution**

\`\`\`ts
type QueryState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "refreshing"; data: T }
  | { status: "error"; error: AppError; previousData?: T };
\`\`\`

This models state semantics directly. A single object with \`loading\`, \`data\`, and \`error\` optionals would permit contradictory combinations.

---

# Senior-level cheat sheet

## Strong short answers

- **Inference or annotation?** Infer implementation details; annotate public contracts and places where intent matters.
- **\`any\` or \`unknown\`?** \`unknown\` at untrusted boundaries; narrow before use. Isolate temporary \`any\`.
- **Union or intersection?** Union for alternatives, intersection for combined capabilities.
- **Interface or type?** Interface for extendable object contracts; type for unions and transformations; consistency matters more than dogma.
- **Assertion or validation?** An assertion tells the compiler; validation proves something at runtime.
- **Generic or union?** Generic when input and output types are related; union for a fixed set of alternatives.
- **Overload or union?** Overload when distinct inputs produce distinct outputs; union when the output does not depend on the branch.
- **Enum or literal union?** Usually literal union/\`as const\`; enum when its runtime object or ecosystem interop is useful.
- **Optional fields or union?** Optional for genuinely independent absence; discriminated union for mutually exclusive states.
- **Class or function?** Class for identity/state/lifecycle or framework fit; functions and composition for simple reusable logic.
- **Compile-time or runtime?** TypeScript protects typed code paths; validate all external and persisted data at runtime.

## High-value patterns

\`\`\`ts
// Exhaustiveness
const unreachable = (x: never): never => { throw new Error(String(x)); };

// Key/value relationship
function get<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }

// Literal values from runtime data
const states = ["idle", "loading", "done"] as const;
type State = typeof states[number];

// Config checking without widening
const config = { mode: "prod" } satisfies { mode: "dev" | "prod" };

// Normalize caught values
const message = (e: unknown) => e instanceof Error ? e.message : String(e);

// Safe collection input
function first<T>(values: readonly T[]): T | undefined { return values[0]; }
\`\`\`

## Senior signals interviewers listen for

- You distinguish TypeScript guarantees from runtime guarantees.
- You explain boundaries, failure modes, and API evolution—not only syntax.
- You prefer modeling valid states over adding assertions.
- You know that external data, environment variables, storage, and URL parameters are untrusted.
- You balance precision with readability and compiler performance.
- You design types for consumers, not just for the implementation.
- You discuss migration, observability, tests, package boundaries, and team conventions.
- You can say when a simpler type is better than a clever generic.

## Red-flag phrases to avoid

- “TypeScript prevents runtime errors.” Better: “It catches many errors before runtime, but external data still needs validation.”
- “\`any\` and \`unknown\` are the same.” They are not; \`unknown\` requires proof before use.
- “Interfaces are always better than types.” Explain capabilities and convention instead.
- “\`readonly\` makes it immutable.” It is shallow compile-time assignment protection.
- “\`http.get<User>\` validates the response.” It only tells the compiler what you expect.
- “I fix the type error with \`as\`.” Explain why the assertion is sound or replace it with narrowing.

---

# Focused 14-day study plan

Plan for 60–90 minutes per day. Spend at least half the time writing and explaining code aloud.

| Day | Focus | Practice outcome |
|---|---|---|
| 1 | Inference, annotations, literal types, \`any\`/\`unknown\`/\`never\`/\`void\` | Give a two-minute explanation and refactor unsafe input handling. |
| 2 | Unions, intersections, optional/readonly, interfaces vs types | Model an enterprise form and explain invalid states. |
| 3 | Narrowing, guards, assertions, discriminated unions | Build an exhaustive async-state reducer. |
| 4 | Generics and constraints | Write \`getById\`, \`pluck\`, and a generic repository API. |
| 5 | \`keyof\`, type \`typeof\`, indexed access, mapped types | Derive keys and create three useful transformations. |
| 6 | Conditional types, \`infer\`, utility types | Rebuild simple versions of \`ReturnType\`, \`Pick\`, and \`NonNullable\`. |
| 7 | Overloads, classes, enums, structural typing, variance | Compare two API designs and defend the simpler one. |
| 8 | Modules, declarations, type-only imports, library types | Type a tiny JS module and package its public API. |
| 9 | \`tsconfig\` strictness, \`satisfies\`, const assertions | Review a config and explain every chosen strict flag. |
| 10 | API typing, errors, schema validation | Build \`fetchValidated\` and normalize network/validation/server errors. |
| 11 | Your primary framework | Type props/inputs, forms, events, state, context/DI, and a reusable component. |
| 12 | Other two frameworks at comparison level | Explain equivalent state, event, and API patterns without memorizing trivia. |
| 13 | Monorepos, migrations, architecture trade-offs | Draft a staged migration plan and package-boundary diagram. |
| 14 | Mock interview | Answer 20 questions aloud, solve two exercises in 40 minutes, review weak points. |

## Daily speaking drill

For each topic, use this 45-second structure:

1. **Definition:** “This feature means…”
2. **Use:** “I use it when…”
3. **Limit:** “It does not…”
4. **Trade-off:** “The benefit is…, but the cost is…”
5. **Example:** Give one production example from a component, API boundary, or shared library.

## Final mock questions

1. Why would you choose \`unknown\` over \`any\` for an API response?
2. Model an async page that can refresh while showing old data.
3. Explain \`keyof typeof\` with a real example.
4. When is a generic unnecessary?
5. What does \`satisfies\` give you that an annotation does not?
6. Why does a TypeScript interface not validate JSON?
7. Design error types for a frontend API client.
8. Explain a practical variance bug in a callback.
9. How would you publish types for a library with multiple entry points?
10. How would you migrate a large JavaScript application without stopping feature work?
11. Which strict flags would you enable first, and how would you roll them out?
12. When would you use a discriminated union instead of optional properties?
13. What are the risks of barrel exports in a monorepo?
14. Show how you would type a reusable table without losing key/value correlation.
15. What TypeScript choices improve or damage developer experience for library consumers?

---

# A polished two-minute senior answer

> I use TypeScript to make contracts and state transitions explicit, especially at boundaries between components, packages, and APIs. Inside a function I rely on inference to keep code readable, but I annotate public inputs and outputs so contracts stay stable. I prefer \`unknown\` for untrusted data, validate it at runtime, and then expose a typed domain model.
>
> For UI state I often use discriminated unions because they prevent impossible combinations and support exhaustive checking with \`never\`. For reusable APIs I use generics only when they preserve a useful relationship, such as a key determining a return type. I avoid complex conditional types when overloads or named types would be clearer.
>
> At project level I enable strict checking and add options such as unchecked-index and exact-optional-property checks where the codebase can support them. In monorepos and libraries I care about package boundaries, declaration output, exports, and consumer experience. I see TypeScript as compile-time risk reduction, not runtime validation, so network data, storage, and configuration are still checked with schemas or guards.

That answer shows language knowledge, production judgment, and senior-level trade-off thinking without sounding memorized.
`,format:`markdown`},{id:`react`,label:`React`,short:`Re`,color:`#61dafb`,description:`Rendering, hooks, architecture, performance and modern React.`,source:`# React Interview Guide for Senior Frontend Developers

This guide is written for a frontend developer with 6+ years of experience. The answers use simple, natural English so you can say them aloud without sounding memorized.

The best senior-level answers usually follow this shape:

1. Give the direct answer.
2. Explain the tradeoff or mental model.
3. Give one real example.
4. Mention how you would verify or measure your decision.

Do not try to show that you know every API. Show that you can choose the right tool, explain why, and avoid common production problems.

---

## 30-second React summary

> React is a library for building user interfaces from reusable components. I describe the UI for the current props, state, and context, and React updates the DOM when those inputs change. I keep rendering pure, put user actions in event handlers, and use Effects only to synchronize with systems outside React. For larger applications, I keep state close to where it is used, separate server state from client UI state, and optimize only after measuring.

This answer already gives an interviewer several useful signals: component thinking, declarative UI, pure rendering, correct Effect usage, state ownership, and measured performance work.

---

## 1. Components and component design

### Interview-ready answer

> A React component is a JavaScript function that returns a description of the UI, usually with JSX. Its output depends on props, state, and context. I try to keep components focused and predictable. I split a component when it has more than one responsibility, when part of it is reusable, or when separating it makes testing and state ownership clearer.

### Clear explanation

A component should behave like a pure function during rendering: with the same props, state, and context, it should return the same JSX. Rendering should not send requests, change global variables, start timers, or mutate props.

Good boundaries follow product responsibilities, not an arbitrary line count. A large but cohesive form can be easier to understand than ten tiny wrapper components. Composition is usually better than building one component with many boolean props.

\`\`\`tsx
type UserCardProps = {
  user: { id: string; name: string; avatarUrl: string };
  actions?: React.ReactNode;
};

function UserCard({ user, actions }: UserCardProps) {
  return (
    <article>
      <img src={user.avatarUrl} alt="" />
      <h2>{user.name}</h2>
      {actions}
    </article>
  );
}

// Composition keeps UserCard reusable.
<UserCard user={user} actions={<FollowButton userId={user.id} />} />;
\`\`\`

### Common mistakes

- Doing side effects during render.
- Mutating props or state objects.
- Creating “god components” that fetch, transform, validate, and render everything.
- Splitting every few lines into a component without a useful boundary.
- Using many flags such as \`isModal\`, \`isCard\`, and \`isCompact\` instead of composition or clear variants.

### Likely follow-up questions

**What makes a component pure?** Given the same inputs, it returns the same JSX and does not change anything outside itself during render.

**Composition or inheritance?** Composition. React components accept children, render props, or component props, which covers normal reuse cases without class inheritance.

**When do you colocate logic?** I colocate code that changes together. I extract it when reuse, testing, or ownership becomes clearer.

---

## 2. Props vs state

### Interview-ready answer

> Props are read-only inputs passed by a parent. State is data owned by a component that can change over time and trigger a re-render. I avoid copying props into state because that creates two sources of truth. If a value can be calculated from props or existing state during render, I calculate it instead of storing it.

### Clear explanation

State ownership is more important than the API used to store it. Put state in the closest common owner of all components that need to read or update it. This is often called lifting state up.

\`\`\`tsx
function CartSummary({ items }: { items: CartItem[] }) {
  // Derived value: no extra state or Effect needed.
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <output>Total: {total}</output>;
}
\`\`\`

Use a functional update when the next value depends on the previous value:

\`\`\`tsx
setQuantity(previous => previous + 1);
\`\`\`

### Common mistakes

- Mutating state: \`user.name = 'Sam'; setUser(user)\`.
- Storing derived values such as a filtered list in state.
- Copying a prop into state and expecting it to stay synchronized.
- Putting all state at the application root.
- Using stale state in multiple updates instead of a functional updater.

### Likely follow-up questions

**Why is state described as a snapshot?** Each render sees the state values for that render. Calling a setter requests another render; it does not change the value already captured by the current handler.

**When is prop-to-state valid?** When the prop is only an initial value and the component intentionally owns later changes. I name it \`initialValue\` or use a \`key\` to reset the component explicitly.

**State or ref?** State is for information that affects rendering. A ref stores a mutable value without causing a re-render, such as a DOM node or timer ID.

---

## 3. Hooks and the Rules of Hooks

### Interview-ready answer

> Hooks let function components use React features such as state, context, refs, and Effects. I call Hooks only at the top level of a component or custom Hook, never inside a condition or loop. React relies on the same Hook call order on every render. I use the lint rules because they catch ordering and dependency mistakes.

### Clear explanation

Important Hooks and their normal purpose:

- \`useState\`: local state.
- \`useReducer\`: related state transitions with explicit actions.
- \`useRef\`: mutable data that does not drive rendering, or a DOM reference.
- \`useContext\`: read a context value.
- \`useEffect\`: synchronize with an external system after a commit.
- \`useLayoutEffect\`: measure or adjust layout before the browser paints; use rarely.
- \`useMemo\` and \`useCallback\`: performance optimizations.
- \`useTransition\` and \`useDeferredValue\`: keep urgent interactions responsive while less urgent UI updates.
- \`useId\`: stable IDs for accessibility relationships, not list keys.

\`\`\`tsx
function Profile({ userId }: { userId: string }) {
  // Good: Hook order is always the same.
  const [expanded, setExpanded] = useState(false);
  const user = useUser(userId);

  if (!user) return <Spinner />;
  return <ProfileView user={user} expanded={expanded} onToggle={() => setExpanded(x => !x)} />;
}
\`\`\`

### Common mistakes

- Calling a Hook after an early return or inside a condition.
- Treating \`useMemo\` and \`useCallback\` as semantic guarantees.
- Using a ref for visible data and wondering why the UI does not update.
- Using \`useLayoutEffect\` for ordinary data fetching.
- Disabling the Hooks linter instead of fixing the design.

### Likely follow-up questions

**Why must Hook order stay stable?** React associates Hook state with call position. Conditional calls shift those positions and connect the wrong state to later Hooks.

**When do you choose \`useReducer\`?** When several fields change together, transitions are easier to describe as actions, or I want logic that is easy to test separately.

**Does \`useRef\` persist between renders?** Yes. The ref object is stable, and changing \`.current\` does not request a render.

---

## 4. \`useEffect\` and cleanup

### Interview-ready answer

> I use \`useEffect\` to synchronize React with an external system: a network connection, browser API, subscription, timer, or third-party widget. I do not use it for values I can calculate during render or for normal user actions. The cleanup must undo the setup. It runs before the Effect runs again with changed dependencies and when the component unmounts.

### Clear explanation

Think “synchronization,” not “lifecycle method.” An Effect describes how one external connection follows current React inputs.

\`\`\`tsx
function ChatRoom({ roomId }: { roomId: string }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return <Chat roomId={roomId} />;
}
\`\`\`

Cancel or ignore stale async work:

\`\`\`tsx
useEffect(() => {
  const controller = new AbortController();

  async function load() {
    try {
      const response = await fetch(\`/api/users/\${userId}\`, {
        signal: controller.signal,
      });
      setUser(await response.json());
    } catch (error) {
      if ((error as DOMException).name !== 'AbortError') setError(error);
    }
  }

  load();
  return () => controller.abort();
}, [userId]);
\`\`\`

Dependency rules:

- No array: run after every commit.
- \`[]\`: no reactive dependencies; setup once per mount in production.
- \`[a, b]\`: rerun when either value changes by \`Object.is\` comparison.

In development Strict Mode, React intentionally performs an extra setup-cleanup-setup cycle. This finds missing cleanup and impure logic. It is not a production double request.

### Common mistakes

- Omitting dependencies to force an Effect to run less often.
- Using an Effect to derive state: \`setFullName(first + last)\`.
- Putting a user action such as submitting an order in an Effect.
- Making the Effect callback itself \`async\`; it would return a Promise instead of cleanup.
- Forgetting to remove listeners, clear timers, unsubscribe, or abort obsolete requests.
- Adding unstable objects or functions as dependencies without changing the design.

### Likely follow-up questions

**Why does my Effect loop?** It updates state, that update changes a dependency, and the dependency reruns the Effect. First ask whether an Effect is needed at all.

**\`useEffect\` vs \`useLayoutEffect\`?** \`useEffect\` normally runs after paint. \`useLayoutEffect\` runs after DOM changes but before paint, so it is useful for layout measurement but can block painting.

**How do you avoid stale closures?** Include reactive values as dependencies, use functional state updates, or use a ref when the latest mutable value must be read without driving the Effect.

**Is fetching in an Effect always wrong?** No, but a framework or server-state library usually handles caching, deduplication, races, SSR, and retries better.

---

## 5. \`useMemo\`, \`useCallback\`, and \`React.memo\`

### Interview-ready answer

> These are performance tools, not correctness tools. \`useMemo\` caches a calculated value, \`useCallback\` caches a function identity, and \`React.memo\` can skip a child render when its props are shallowly equal. I use them only when profiling shows useful work can be skipped, or when stable identity is needed by a memoized child or Hook dependency.

### Clear explanation

\`\`\`tsx
const ProductRow = React.memo(function ProductRow({ product, onSelect }: Props) {
  return <button onClick={() => onSelect(product.id)}>{product.name}</button>;
});

function ProductList({ products, query }: ListProps) {
  const visible = useMemo(
    () => expensiveFilter(products, query),
    [products, query],
  );

  const handleSelect = useCallback((id: string) => {
    analytics.track('product_selected', { id });
  }, []);

  return visible.map(product => (
    <ProductRow key={product.id} product={product} onSelect={handleSelect} />
  ));
}
\`\`\`

This helps only if \`expensiveFilter\` is meaningfully expensive and \`ProductRow\` receives stable props. A new \`product\` object on every render would break the memoization.

Modern React tooling may use the React Compiler to memoize values and components automatically. In an interview, still explain manual memoization because many production codebases use it, but acknowledge that compiler support can reduce the need for it.

### Common mistakes

- Wrapping everything in memoization “just in case.” Memoization also has comparison, memory, and complexity costs.
- Using \`useMemo\` for side effects.
- Assuming \`React.memo\` prevents every render. Context changes and the component's own state still render it.
- Passing a new object, array, or inline function to a memoized child on every render.
- Writing an expensive deep comparison that costs more than rendering.
- Relying on memoization for correctness.

### Likely follow-up questions

**Does a new function always cause a performance problem?** No. Creating functions is usually cheap. Identity matters only when a consumer uses it for comparison or dependencies.

**How does \`React.memo\` compare props?** By default, it compares each prop with \`Object.is\`, which is effectively a shallow prop comparison.

**How do you decide whether to memoize?** Profile a real interaction in a production build, find repeated expensive work, apply the smallest optimization, and measure again.

---

## 6. Controlled vs uncontrolled components

### Interview-ready answer

> A controlled input gets its current value from React state and reports changes through a handler. An uncontrolled input keeps its value in the DOM and I read it through a ref or form submission. Controlled inputs are useful for live validation and dependent UI. Uncontrolled inputs can be simpler for basic forms and file inputs. I do not switch an input between the two modes during its lifetime.

### Clear explanation

\`\`\`tsx
// Controlled
function SearchBox() {
  const [query, setQuery] = useState('');
  return (
    <input
      value={query}
      onChange={event => setQuery(event.target.value)}
      aria-label="Search"
    />
  );
}

// Uncontrolled
function NameForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  function submit(event: React.FormEvent) {
    event.preventDefault();
    console.log(inputRef.current?.value);
  }
  return <form onSubmit={submit}><input ref={inputRef} defaultValue="Sam" /></form>;
}
\`\`\`

A reusable component can support either a controlled API (\`value\`, \`onChange\`) or an uncontrolled API (\`defaultValue\`) but should define the contract carefully.

### Common mistakes

- Passing \`value\` without \`onChange\`, making an editable field read-only.
- Starting with \`undefined\` and later passing a string, which switches modes.
- Controlling every field at a high parent level and causing a large tree to render on every keystroke.
- Trying to set a file input's value programmatically.
- Using placeholder text instead of a label.

### Likely follow-up questions

**Which is better?** Neither always. I choose based on whether React needs the value during editing.

**What are \`value\` and \`defaultValue\`?** \`value\` controls the current value. \`defaultValue\` sets only the initial DOM value.

**How do form libraries reduce renders?** Many register uncontrolled fields and subscribe only the parts that need updates.

---

## 7. Context

### Interview-ready answer

> Context passes a value through a component tree without manually forwarding props at every level. I use it for stable, cross-cutting data such as theme, locale, authentication information, or a feature-specific dependency. It is not automatically a full state-management solution. When a provider value changes, consumers that read that context render again, so I keep contexts focused and provider values stable where it matters.

### Clear explanation

\`\`\`tsx
type AuthValue = { user: User | null; signOut: () => void };
const AuthContext = createContext<AuthValue | null>(null);

function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be inside AuthProvider');
  return value;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const signOut = useCallback(() => setUser(null), []);
  const value = useMemo(() => ({ user, signOut }), [user, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
\`\`\`

Do not memoize the provider value automatically. Do it when the provider renders often and the changed object identity causes real consumer work.

### Common mistakes

- Putting all application state in one context.
- Creating a new provider object every render in a hot part of the tree.
- Using context for state needed by only two nearby components.
- Hiding a component's real dependencies in many contexts, making reuse and testing harder.
- Expecting \`React.memo\` to block a context update in a consumer.

### Likely follow-up questions

**Context vs prop drilling?** A few explicit props are often clearer. Context helps when many layers only forward the same cross-cutting value.

**How do you improve context performance?** Split contexts by concern and update frequency, move providers closer to consumers, keep values stable when useful, or use selector-based external stores for frequent granular updates.

**Can context hold state?** Yes. Usually the provider owns state and exposes value plus actions. Context itself is the delivery mechanism.

---

## 8. State management

### Interview-ready answer

> I choose state management by state type and ownership, not by application size alone. Local UI state stays in the component. Shared state goes to the nearest common owner or a focused context. Server state is handled by a data-fetching layer with caching and invalidation. I use an external store when many distant components need frequent, granular updates or when the team needs stronger debugging and state conventions.

### Clear explanation

Useful categories:

| State | Example | Normal home |
|---|---|---|
| Local UI | open modal, selected tab | \`useState\` in the feature |
| Complex local | form wizard transitions | \`useReducer\` |
| URL state | page, filters, selected record | router/search parameters |
| Server state | users, orders, loading/cache status | framework/data library |
| Cross-cutting | theme, locale, current account | focused context |
| High-frequency shared client state | editor/canvas/store | external store with selectors |

Server state is different from client state: it has an external source of truth, can become stale, and needs caching, retries, deduplication, invalidation, and refetching.

\`\`\`tsx
type State = { status: 'idle' | 'saving' | 'saved' | 'error' };
type Action = { type: 'save' } | { type: 'success' } | { type: 'failure' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'save': return { status: 'saving' };
    case 'success': return { status: 'saved' };
    case 'failure': return { status: 'error' };
  }
}
\`\`\`

### Common mistakes

- Choosing a global store before understanding state ownership.
- Copying server responses into several client stores.
- Keeping shareable navigation state outside the URL.
- Exposing a store's entire state to every component instead of selecting a small slice.
- Storing duplicate or derived data that can become inconsistent.

### Likely follow-up questions

**Context vs Redux/Zustand-style store?** Context broadcasts provider value changes. External stores usually provide selectors, granular subscriptions, middleware, and dev tools. I choose based on update patterns and team needs.

**What is normalized state?** Entities are stored once by ID, and relationships use IDs. It prevents inconsistent duplicate copies and makes updates predictable.

**Where should filters live?** In the URL if users should bookmark, share, refresh, or use browser navigation with them; otherwise local state may be enough.

---

## 9. Rendering, commits, and re-renders

### Interview-ready answer

> A render means React calls components to calculate the next UI. A commit is when React applies the necessary changes to the DOM. A component renders initially and when its state changes, its parent renders, a context it reads changes, or an external-store subscription updates. A render does not mean the DOM changed. React compares the result and commits only the required mutations.

### Clear explanation

The normal flow is:

1. An update is triggered.
2. React renders the affected component tree and calculates the next element tree.
3. React commits DOM changes.
4. The browser paints.
5. Passive Effects run, with timing details depending on the interaction.

Parent render normally calls child components again. That is expected and often cheap. React does not “watch variables”; setters, context, and subscriptions schedule work.

\`\`\`tsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <Child label="Stable text" /> {/* Called when Parent renders */}
    </>
  );
}
\`\`\`

### Common mistakes

- Treating every render as a bug.
- Logging in development Strict Mode and assuming production renders twice.
- Performing a side effect in render because it “usually runs once.”
- Mirroring props to state to try to prevent renders.
- Memoizing before identifying expensive work.

### Likely follow-up questions

**Can React discard a render?** Yes. Modern rendering can pause, restart, or abandon render work before commit. That is why rendering must be pure.

**Does setting the same state always render?** React can bail out when the next value is \`Object.is\` equal, though it may call the component before bailing out in some cases.

**Render phase vs commit phase?** Render calculates and must be pure. Commit changes the host environment and runs the relevant lifecycle/effect work.

---

## 10. Batching and state snapshots

### Interview-ready answer

> React batches state updates so several setters can produce one render instead of several. State in an event handler is a snapshot from that render, so three calls to \`setCount(count + 1)\` all use the same old value. When the next state depends on the previous state, I use the functional form: \`setCount(c => c + 1)\`.

### Clear explanation

\`\`\`tsx
function addThree() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
  // React processes the updater queue; count increases by 3.
}
\`\`\`

With modern roots, React automatically batches updates from more sources, including timeouts and Promises. Batching stops code from seeing half-finished UI. If integration code truly needs the DOM updated synchronously, \`flushSync\` exists, but it can hurt performance and should be rare.

### Common mistakes

- Reading state immediately after a setter and expecting the new value.
- Using the captured value for several dependent updates.
- Using \`flushSync\` as a normal solution.
- Forgetting that event handlers and async callbacks close over values from the render that created them.

### Likely follow-up questions

**Is \`setState\` asynchronous?** I avoid that shorthand. More precisely, it queues an update, and React schedules and often batches the render.

**How do you use the new value immediately?** Calculate it in a local variable, use a functional updater, or react to the committed value in the right synchronization layer.

**What does batching guarantee?** It groups compatible updates before rendering; it does not make multiple updates to the same state magically accumulate unless functional updaters are used.

---

## 11. Reconciliation

### Interview-ready answer

> Reconciliation is how React compares the previous and next element trees and decides what can be preserved and what must change. If the element type and position match, React generally preserves the component instance and state. If the type changes, or its identity changes through a key, React replaces that subtree and resets its state.

### Clear explanation

React uses practical heuristics rather than comparing every possible tree arrangement. Type, position, and key define identity.

\`\`\`tsx
// Same type in the same position: state is preserved.
{isFancy ? <Counter className="fancy" /> : <Counter className="plain" />}

// Different types: subtree is replaced and state resets.
{isFancy ? <FancyCounter /> : <PlainCounter />}
\`\`\`

To reset state intentionally, change a key:

\`\`\`tsx
<Chat key={selectedUser.id} user={selectedUser} />
\`\`\`

### Common mistakes

- Assuming JSX text position rather than tree position determines identity.
- Defining a component inside another component; it creates a new component type on every parent render and can reset state.
- Using a random key to “fix” a rendering issue.
- Expecting hidden and removed components to preserve state in the same way.

### Likely follow-up questions

**What causes state to reset?** Removing the component, changing its type at that position, or changing its key.

**Is reconciliation the same as DOM diffing?** DOM diffing is part of the result, but reconciliation is broader: it matches React elements/component identities and decides what work is needed.

**What is the virtual DOM?** A common name for the in-memory React element representation used to calculate UI changes. The useful point is declarative comparison, not that it is always faster than direct DOM code.

---

## 12. Keys

### Interview-ready answer

> Keys give sibling elements stable identity across renders. A good key comes from the data, is unique among siblings, and stays stable. Keys help React preserve the correct state when items are inserted, removed, or reordered. I avoid array indexes for dynamic lists and never generate random keys during render.

### Clear explanation

\`\`\`tsx
function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}
\`\`\`

An index key can be safe for a truly static list that will never reorder, insert, delete, or hold item-specific state. A database ID or durable client-generated ID is normally better.

Keys are local to siblings. They are not passed to the child as a normal prop.

### Common mistakes

- \`key={Math.random()}\`: every render remounts every item.
- \`key={index}\` in a sortable or editable list: state may move to the wrong row.
- Expecting the child to read \`props.key\`.
- Using a non-unique display label.
- Putting a key inside \`TodoItem\` rather than on the element returned by \`map\`.

### Likely follow-up questions

**Why can index keys show the wrong input value?** When order changes, React matches by index, so the component state for the old row is reused for different data.

**Must keys be globally unique?** No, only unique among siblings in that list.

**Can keys be useful outside lists?** Yes. A key can explicitly distinguish component identity or reset state, such as a form for a different customer.

---

## 13. Fiber and concurrent rendering

### Interview-ready answer

> Fiber is React's internal architecture for representing component work as units that can be prioritized, paused, resumed, or discarded. It separates rendering work from the final commit. This supports responsive features such as transitions and Suspense. As an application developer, the important rule is that render code must be pure because React may run it more than once without committing it.

### Clear explanation

Do not over-explain Fiber internals unless asked. The practical mental model is:

- Urgent work, such as typing, should stay responsive.
- Non-urgent work can be marked as a transition.
- React may prepare a UI in the background.
- DOM commits remain coordinated; users do not see a half-committed tree.

\`\`\`tsx
function SearchPage() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleChange(value: string) {
    setInput(value); // urgent: keep the input responsive
    startTransition(() => setQuery(value)); // non-urgent: update results
  }

  return <><SearchInput value={input} onChange={handleChange} />
    {isPending && <span>Updating…</span>}<Results query={query} /></>;
}
\`\`\`

“Concurrent” does not normally mean components run on multiple JavaScript threads. It means rendering work can be scheduled and interrupted.

### Common mistakes

- Saying Fiber is the virtual DOM.
- Depending on render being called exactly once.
- Putting network calls, mutations, or analytics in render.
- Marking the controlled input update itself as a transition.
- Using transitions to make slow code fast; they improve scheduling, not raw computation cost.

### Likely follow-up questions

**What is the difference between a transition and debouncing?** A transition changes render priority and may interrupt stale work. Debouncing waits for a quiet time and reduces how often work starts. They solve related but different problems.

**What is Suspense?** A boundary that shows a fallback while compatible code or data needed by its children is not ready. It also coordinates streaming and transitions in supported frameworks.

**Can a render happen without a commit?** Yes. React may abandon obsolete work. Effects do not run for an uncommitted render.

---

## 14. Custom Hooks

### Interview-ready answer

> A custom Hook is a function whose name starts with \`use\` and that composes other Hooks to reuse stateful behavior. It shares logic, not state itself—each call has its own state unless the Hook connects to a shared external store or context. I design a custom Hook around one clear responsibility and return a small, stable API.

### Clear explanation

\`\`\`tsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  return isOnline;
}
\`\`\`

Custom Hooks are useful boundaries for subscriptions, data access, reusable interaction logic, and hiding framework details from UI components.

### Common mistakes

- Calling an ordinary helper \`useSomething\` even though it uses no Hooks.
- Creating one enormous Hook that mixes unrelated concerns.
- Returning a new large object API and then relying on its identity.
- Hiding important side effects behind a surprising name.
- Assuming two calls share state.

### Likely follow-up questions

**Hook vs utility function?** A Hook can call Hooks and follows their rules. A utility is a normal function and can be called anywhere.

**How do you test a custom Hook?** Prefer testing it through a small component's observable behavior. Test the Hook directly when its state transitions are complex and the direct test adds clarity.

**Should a custom Hook return an object or array?** An array is convenient for a small tuple with conventional positions. An object is clearer for several named values and is easier to extend.

---

## 15. Error boundaries

### Interview-ready answer

> An error boundary catches errors thrown while rendering its descendant tree and shows fallback UI instead of breaking the whole screen. It also gives a place to log the error. Traditional error boundaries are class components, though frameworks and libraries often provide wrappers. They do not catch ordinary event-handler errors, most asynchronous callback errors, server-side rendering errors, or errors inside the boundary itself.

### Clear explanation

\`\`\`tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    reportError(error, info);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
\`\`\`

Place boundaries around meaningful recovery areas: a route, dashboard widget, rich editor, or third-party integration. A single root boundary is a final safety net but gives poor local recovery.

### Common mistakes

- Wrapping every small component in a boundary.
- Expecting a boundary to catch a rejected Promise in an event handler.
- Showing technical error details to users.
- Logging without useful route, release, component stack, and user-safe context.
- Providing no reset or retry path.

### Likely follow-up questions

**How do you handle event-handler errors?** Use normal \`try/catch\`, update error state, and report the error.

**How do you reset a boundary?** The boundary can expose retry behavior, or its parent can change a key after the underlying condition changes.

**Error boundary vs Suspense boundary?** Error boundaries handle failures. Suspense boundaries handle waiting for supported asynchronous resources. Applications often use both.

---

## 16. Forms and validation

### Interview-ready answer

> For small forms, local controlled or uncontrolled inputs are enough. For large forms, I use a form library to manage registration, touched state, validation, and performance. I validate for user experience on the client, but the server is the security and business-rule authority. I keep accessible labels and errors, prevent double submission, preserve user input on recoverable failures, and focus the first invalid field when useful.

### Clear explanation

\`\`\`tsx
function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    // Send to server and handle pending/success/error states.
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" value={email}
        onChange={e => setEmail(e.target.value)}
        aria-invalid={Boolean(error)} aria-describedby={error ? 'email-error' : undefined} />
      {error && <p id="email-error" role="alert">{error}</p>}
      <button type="submit">Save</button>
    </form>
  );
}
\`\`\`

Validation timing is a product decision. Showing every error before a user interacts is noisy. A common approach is validate on submit, then validate touched invalid fields as they change.

### Common mistakes

- Treating client validation as a security control.
- Validating on every keystroke with expensive schema work across the whole form.
- Disabling submit with no explanation.
- Using color alone for errors or failing to connect error text with its field.
- Losing all input after a server error.
- Allowing repeated submissions while a request is pending.

### Likely follow-up questions

**How do you handle a large form?** Split it by sections, use field-level subscriptions, model cross-field rules explicitly, and keep server validation errors mapped to fields or form-level feedback.

**Where should validation live?** UX validation can run in the client. Authoritative business and security validation must run on the server. Sharing a schema can reduce drift but does not remove server validation.

**How do you upload files?** Use a file input and \`FormData\`, validate type/size for UX, validate again on the server, and show progress/cancellation when valuable.

---

## 17. Routing

### Interview-ready answer

> Client-side routing maps the URL to UI without a full document reload. I treat the URL as user-visible state: route parameters identify resources, search parameters hold shareable filters or pagination, and navigation should preserve browser back/forward behavior. In production I also think about nested layouts, data loading, code splitting, error states, authentication, scroll and focus management, and direct URL requests on the server.

### Clear explanation

\`\`\`tsx
// Library-neutral idea; exact APIs depend on the router.
const routes = [
  {
    path: '/projects/:projectId',
    element: <ProjectLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'settings', element: <ProjectSettings /> },
    ],
  },
];
\`\`\`

Prefer links for navigation because they support open-in-new-tab, keyboard use, and browser semantics. Use imperative navigation after an action such as successful creation.

Authentication checks improve UX, but the server/API must still authorize every protected operation.

### Common mistakes

- Using clickable \`div\` elements instead of links.
- Storing shareable filters only in component state.
- Protecting a route in the client and calling it authorization.
- Forgetting that refreshing \`/projects/123\` must be supported by hosting/server configuration.
- Fetching after navigation in a waterfall when the router/framework can load in parallel.
- Ignoring document title, focus, and announcements after navigation.

### Likely follow-up questions

**Route param vs search param?** A route param normally identifies the main resource or hierarchy. Search params represent optional view state such as filter, sort, and page.

**How do you lazy-load a route?** Split its code at the route boundary, show an intentional pending UI, preload likely navigation when useful, and handle chunk-load failures.

**How do you protect routes?** Use client checks for navigation UX and server-side authentication/authorization for real protection.

---

## 18. Testing React applications

### Interview-ready answer

> I test behavior from the user's point of view. Most tests render a component, interact through accessible roles and labels, and assert visible outcomes. I mock network boundaries rather than component internals. I use unit tests for pure logic, integration tests for components and flows, and a smaller set of end-to-end tests for critical journeys. I avoid testing implementation details such as state variables or exact component structure.

### Clear explanation

\`\`\`tsx
it('submits a valid email', async () => {
  const user = userEvent.setup();
  render(<NewsletterForm />);

  await user.type(screen.getByRole('textbox', { name: /email/i }), 'sam@example.com');
  await user.click(screen.getByRole('button', { name: /subscribe/i }));

  expect(await screen.findByText(/thanks for subscribing/i)).toBeInTheDocument();
});
\`\`\`

A useful test pyramid for frontend applications:

- Many fast tests for pure functions and focused component behavior.
- Integration tests for a feature with realistic providers and mocked network responses.
- A few browser tests for sign-in, checkout, permissions, or other critical paths.

Accessibility queries make tests more resilient and encourage semantic markup.

### Common mistakes

- Selecting by CSS class or test ID when a role or label is available.
- Shallow rendering and mocking every child.
- Asserting internal state or that a Hook was called.
- Overusing snapshots for dynamic UI.
- Making all tests end-to-end, resulting in slow and fragile feedback.
- Ignoring loading, empty, error, race, and permission states.

### Likely follow-up questions

**What should you mock?** External boundaries such as HTTP, time, and browser APIs when needed—not the component behavior being tested.

**When is \`data-testid\` acceptable?** When there is no meaningful accessible selector, such as a non-semantic visualization element. It is a fallback, not a first choice.

**How do you test a custom Hook?** Usually through a test component that exposes its user-visible behavior; directly when the Hook is a reusable library-like unit with complex transitions.

**What makes a test valuable?** It catches a meaningful regression, fails for a clear reason, and stays stable during harmless refactors.

---

## 19. Performance

### Interview-ready answer

> I start with measurement, not memoization. I use browser performance tools, React Profiler, and production metrics to find the slow interaction. Then I reduce the largest cost: unnecessary network work, a large bundle, expensive rendering, too many DOM nodes, or frequent updates. Common fixes are route-level code splitting, list virtualization, keeping state local, selector-based subscriptions, caching expensive calculations, and using transitions for non-urgent updates.

### Clear explanation

Performance has several layers:

1. **Loading:** JavaScript size, images, fonts, caching, server response, code splitting.
2. **Rendering:** expensive component work, large trees, unnecessary updates.
3. **Browser work:** layout, paint, memory, long tasks, animation.
4. **Network/data:** waterfalls, duplicate requests, oversized responses.
5. **Perceived performance:** useful loading states, streaming, optimistic updates, responsive input.

For a table with 50,000 rows, memoizing each row is not the first answer. Render only the visible window. For a search that filters a moderate list, measure the filter, consider a deferred value or transition, and possibly move truly heavy computation off the main thread.

\`\`\`tsx
const deferredQuery = useDeferredValue(query);
const results = useMemo(
  () => search(items, deferredQuery),
  [items, deferredQuery],
);
\`\`\`

### Common mistakes

- Optimizing development-mode logs instead of a production build.
- Adding \`useMemo\`, \`useCallback\`, and \`memo\` everywhere.
- Ignoring network waterfalls and bundle size while tuning tiny renders.
- Rendering thousands of hidden DOM nodes.
- Using unstable keys, which remount components and lose caches/state.
- Comparing average performance only; slow-tail users and low-end devices matter.

### Likely follow-up questions

**How do you diagnose a slow interaction?** Reproduce it, record a browser trace and React profile, identify whether time is JavaScript/render/layout/network, change one cause, and compare production measurements.

**Debounce vs throttle?** Debounce waits until events stop; throttle limits how often work runs. Both reduce work. A transition instead changes priority.

**When do you virtualize?** When a long list creates too many DOM nodes or expensive row renders. I also test keyboard access, variable heights, focus, and screen-reader behavior.

**What metrics matter?** User-centered loading and responsiveness metrics, plus task-specific timings such as search response or checkout step completion. Metrics should be segmented by device and route.

---

## 20. Accessibility

### Interview-ready answer

> I start with semantic HTML because it provides keyboard behavior and accessibility information by default. Every control needs an accessible name, all functionality must work with a keyboard, focus must be visible and managed during dialogs and route changes, and status or error messages must be announced appropriately. I use ARIA to fill semantic gaps, not to replace native elements, and I test with keyboard navigation, automated checks, and a screen reader for important flows.

### Clear explanation

\`\`\`tsx
function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Delete item">
      <TrashIcon aria-hidden="true" />
    </button>
  );
}
\`\`\`

For a modal dialog:

- Use a tested accessible dialog primitive when possible.
- Move focus into it when opened.
- Keep focus inside while modal.
- Close with Escape when appropriate.
- Return focus to the trigger.
- Give it a name with a heading or \`aria-label\`.
- Prevent interaction with background content.

Accessibility is a design and engineering requirement, not a final audit task.

### Common mistakes

- Using \`div onClick\` instead of \`button\`.
- Removing focus outlines without a visible replacement.
- Using placeholder as the only label.
- Adding ARIA roles that conflict with native semantics.
- Using \`aria-live\` too broadly and creating noisy announcements.
- Relying only on automated tests; they cannot judge every interaction or accessible name.
- Using color alone to convey status.

### Likely follow-up questions

**Why prefer a button over a clickable div?** A button already has keyboard activation, focusability, role, and disabled semantics.

**\`aria-label\` vs visible label?** Prefer a visible label because it helps everyone. \`aria-label\` is useful when a clear visible label is not practical, such as an icon-only button.

**How do you test accessibility?** Semantic queries in component tests, automated rules, full keyboard use, zoom/contrast checks, and screen-reader testing of critical journeys.

**What is the first rule of ARIA?** Use a native HTML element with the required semantics and behavior when one exists.

---

## 21. Security

### Interview-ready answer

> React escapes values rendered in JSX, which reduces accidental HTML injection, but it does not make the application secure by itself. I avoid \`dangerouslySetInnerHTML\`; if rich HTML is required, I sanitize it with a well-maintained allowlist-based library. I treat all client data as untrusted, enforce authentication and authorization on the server, protect cookies and requests appropriately, keep secrets out of frontend bundles, and use browser controls such as Content Security Policy as defense in depth.

### Clear explanation

\`\`\`tsx
// React escapes this text; it is rendered as text, not markup.
<p>{commentFromUser}</p>

// Risky unless trustedHtml has been correctly sanitized.
<div dangerouslySetInnerHTML={{ __html: trustedHtml }} />
\`\`\`

Major frontend risks to discuss:

- **XSS:** untrusted HTML, unsafe URL handling, third-party scripts, DOM injection.
- **CSRF:** relevant when browsers automatically send credentials such as cookies; use SameSite settings and server-side CSRF defenses where needed.
- **Broken authorization:** hiding a button is not permission enforcement; the API must reject unauthorized actions.
- **Token exposure:** avoid long-lived sensitive tokens in locations accessible to injected scripts; cookie/token design depends on the architecture and threat model.
- **Supply chain:** review dependencies, lock versions, patch vulnerabilities, and limit unnecessary packages/scripts.

### Common mistakes

- Saying React prevents XSS completely.
- Trusting client-side validation or role checks.
- Putting API secrets in environment variables that are bundled into client code.
- Building HTML with user data and passing it to \`dangerouslySetInnerHTML\`.
- Logging tokens or sensitive personal data.
- Using \`target="_blank"\` without considering opener protection in environments that do not provide it automatically.

### Likely follow-up questions

**Is local storage safe for tokens?** JavaScript can read it, so an XSS can steal its contents. The right design depends on the application, but secure, HttpOnly, SameSite cookies are often considered for session credentials, together with appropriate CSRF protection.

**What does React escape?** Text values and attribute values rendered through normal JSX. Unsafe direct DOM/HTML APIs and dangerous URLs still require care.

**Can frontend code contain secrets?** No. Anything delivered to the browser can be inspected. Keep secrets on the server.

**How do you render user-authored rich text?** Parse and sanitize it using a strict allowlist, restrict URLs and dangerous attributes, add CSP, and test known attack payloads.

---

## 22. CSR, SSR, SSG, and hydration

### Interview-ready answer

> CSR builds most of the page in the browser after JavaScript loads. SSR creates HTML on the server for each request. SSG creates HTML ahead of time, usually at build time. SSR and SSG can improve initial content and discoverability, but they add server/build and hydration constraints. Hydration is when React attaches behavior to server-generated HTML and makes it interactive. The first client render must match the server output.

### Clear explanation

| Strategy | HTML created | Good fit | Main tradeoff |
|---|---|---|---|
| CSR | In the browser | authenticated tools, highly interactive apps | slower first useful content on weak devices; limited no-JS HTML |
| SSR | Per request/on server | personalized or frequently changing pages | server cost, caching complexity, hydration work |
| SSG | Ahead of requests | docs, marketing, content that changes less often | rebuild/revalidation and large-site build cost |
| Hybrid | Per route or section | most modern production sites | more concepts and cache rules to manage |

\`\`\`tsx
// Browser entry for HTML that was rendered on the server.
hydrateRoot(document.getElementById('root')!, <App />);
\`\`\`

Hydration mismatch example:

\`\`\`tsx
// Bad during render: server and browser may produce different text.
<span>{new Date().toLocaleTimeString()}</span>
\`\`\`

Better approaches include passing a server-created value as data, using a stable format, or intentionally rendering client-only information after hydration. Do not hide mismatch warnings without understanding the cause.

Streaming SSR can send useful HTML in parts. Suspense boundaries can define where fallbacks appear and where later content is revealed. Hydration still has a JavaScript and main-thread cost, so “server-rendered” does not automatically mean fast.

### Common mistakes

- Accessing \`window\`, \`document\`, or browser storage during server rendering.
- Rendering random, time-based, locale-dependent, or browser-only values differently on server and client.
- Assuming SSR removes the need to optimize JavaScript.
- Fetching the same initial data again immediately after hydration.
- Treating SSG pages as permanently static; many systems support revalidation.
- Choosing one rendering mode for the whole product when routes have different needs.

### Likely follow-up questions

**What is hydration?** React reuses server HTML, connects it to the component tree, installs behavior, and makes it interactive rather than recreating all markup from scratch.

**What causes a hydration mismatch?** Different server/client data, time or randomness, invalid HTML nesting, browser-only checks during render, locale differences, or markup changed by another script.

**SSR vs React Server Components?** SSR produces HTML on the server. Server Components execute only on the server and send a component payload that can be combined with Client Components. They are related but different concepts, and framework support defines the full model.

**How do you choose a strategy?** Per route, based on personalization, freshness, SEO/discoverability, cacheability, infrastructure, and interaction needs. I validate the choice with real performance data.

---

## 23. Senior-level architecture questions

### How would you design a large React feature?

> I start from user flows and data ownership. I define route boundaries, server data and mutations, local interaction state, loading and error states, and permission rules. I keep feature code together, expose a small public API, and separate reusable UI from product-specific behavior only when that boundary is real. I plan observability, accessibility, tests, and failure recovery before optimizing.

A practical feature folder might look like this:

\`\`\`text
projects/
  api/              # queries, mutations, data types
  components/       # feature UI
  hooks/            # feature-specific reusable behavior
  routes/           # route-level composition and loading/error UI
  model/            # pure domain rules or reducer
  tests/
  index.ts           # small public API
\`\`\`

The exact folders matter less than clear dependencies and ownership. Avoid a global \`components\`, \`hooks\`, and \`utils\` dumping ground when product features are easier to understand together.

### How do you review React code?

> I first check correctness: state ownership, pure rendering, Effect synchronization, races, cleanup, identity, error states, and accessibility. Then I check maintainability: component boundaries, naming, data contracts, test value, and coupling. Finally I consider performance, backed by the expected update pattern or measurements. I do not request memoization just because a component re-renders.

### How do you migrate an older React application?

> I make the migration incremental. I add tests or monitoring around critical behavior, update supported APIs and the root first, enable linting and Strict Mode in manageable areas, then convert or refactor feature by feature. I separate required compatibility changes from optional architecture changes so regressions are easier to isolate.

### How do you explain a tradeoff?

Use this sentence pattern:

> I would start with **A** because our main constraint is **X**. The cost is **Y**. If measurement or product needs show **Z**, I would move to **B**.

Example:

> I would start with local state because only this feature uses the value and it keeps ownership clear. The cost is that sharing it later needs a small refactor. If several distant routes need frequent granular access, I would consider an external store with selectors.

---

## 24. Fast follow-up round

**Why should component render be pure?** React can render more than once, pause work, or discard it. Side effects during render would run at unpredictable times.

**What triggers a re-render?** State updates, parent renders, consumed context changes, and subscribed external-store updates.

**Does a re-render always update the DOM?** No. React commits only the differences that affect the host UI.

**When should you use an Effect?** To synchronize with something outside React, not to calculate ordinary render data.

**Why does an Effect run twice in development?** Root Strict Mode runs an extra setup-cleanup cycle to expose missing cleanup and impure code.

**Why use a functional state update?** When the next state depends on the previous state, especially with queued or batched updates.

**What is a stale closure?** A function reads props or state from the render in which that function was created, even if newer renders exist.

**What does \`React.memo\` do?** It can skip rendering a component when its props compare equal. It does not block its own state or consumed context updates.

**What is the best key?** A stable unique ID from the data.

**Why not use array index as key?** Insertions and reordering can attach component state to the wrong item.

**Context or global store?** Use focused context for relatively stable cross-cutting values; consider a store for frequent granular shared updates and stronger store tooling.

**Controlled or uncontrolled form?** Controlled when React needs the value during editing; uncontrolled when the DOM can own it and it is read on demand.

**What is reconciliation?** Matching old and new React trees to preserve identity and decide what changes to commit.

**What is Fiber?** React's work representation and scheduling architecture, which allows render work to be prioritized and interrupted.

**What is hydration?** Connecting React behavior to server-generated HTML, with a matching initial client tree.

**How do you improve React performance?** Measure, find the dominant cost, apply the smallest suitable fix, and measure again.

**How do you secure a React app?** Escape by default, sanitize intentional HTML, keep secrets and authorization on the server, protect sessions/requests, reduce third-party risk, and use CSP as defense in depth.

---

## 25. A practical study plan

### Pass 1: Be able to say these without notes

1. React and component model.
2. Props vs state and state ownership.
3. \`useEffect\` as external synchronization.
4. What causes a re-render.
5. Reconciliation and keys.
6. The three memoization tools and why not to overuse them.
7. Controlled vs uncontrolled inputs.
8. Context vs external state management.
9. CSR, SSR, SSG, and hydration.
10. How you measure performance.

### Pass 2: Code from memory

- A subscription Effect with cleanup.
- A request Effect with abort handling.
- A reducer with typed actions.
- A custom Hook.
- An accessible form field with an error.
- A memoized expensive calculation plus a memoized child.
- A transition that keeps an input responsive.
- An error boundary.

### Pass 3: Prepare real stories

For each area, prepare one production story in this format:

- **Situation:** What user or engineering problem existed?
- **Constraint:** Scale, deadline, browser support, team, legacy system, or accessibility need.
- **Decision:** What did you choose, and why?
- **Tradeoff:** What did the choice cost?
- **Result:** Use a measurable result when possible.
- **Learning:** What would you repeat or change?

Strong story topics:

- A render or bundle performance problem you measured and fixed.
- A race condition or stale Effect you debugged.
- State that was moved, normalized, or removed.
- A reusable component API you designed.
- An accessibility issue you found and prevented from returning.
- A migration from legacy patterns or another framework.
- A testing strategy that reduced regressions without making tests brittle.

---

## 26. Final interview checklist

Before answering:

- Clarify whether the interviewer means local state, server state, or shared client state.
- State the simple default before describing advanced options.
- Mention the tradeoff, not only the API.
- Give one concrete production example.
- For performance questions, say how you would measure.
- For security, say what must be enforced on the server.
- For accessibility, start with semantic HTML and keyboard behavior.
- For Effects, ask what external system is being synchronized.
- Avoid absolute claims such as “always,” “never re-renders,” or “React prevents XSS.”

If you do not remember an API detail, say:

> I do not remember the exact API signature, but the design I would use is…

That is better than guessing. Senior interviewers care more about a correct mental model and sound decisions than perfect recall.

---

## Official references

- [React: Thinking in React](https://react.dev/learn/thinking-in-react)
- [React: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [React: Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [React: Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [React: Built-in Hooks](https://react.dev/reference/react/hooks)
- [React: \`useEffect\`](https://react.dev/reference/react/useEffect)
- [React: \`useMemo\`](https://react.dev/reference/react/useMemo)
- [React: \`memo\`](https://react.dev/reference/react/memo)
- [React: Strict Mode](https://react.dev/reference/react/StrictMode)
- [React DOM: \`hydrateRoot\`](https://react.dev/reference/react-dom/client/hydrateRoot)

`,format:`markdown`},{id:`angular`,label:`Angular`,short:`Ng`,color:`#ff5370`,description:`Signals, RxJS, DI, change detection and enterprise Angular.`,source:`# Modern Angular Interview Preparation Guide

For a senior frontend developer with 6+ years of experience

This guide uses short, natural answers that you can say aloud. The examples use modern Angular: standalone components, built-in control flow, signals, functional providers, lazy routes, and zoneless-friendly state updates. Older patterns appear only when they matter in real enterprise code or migration work.

## How to use this guide

For each topic:

1. Say the **interview-ready answer** aloud.
2. Read the explanation and code until you can explain the reason behind the pattern.
3. Practice the follow-up questions without reading the answer.
4. Add one example from your own work: a production bug, performance improvement, shared component, design-system decision, or migration.

The strongest senior answers normally have this shape:

> **Decision → reason → trade-off → real result.**

Example:

> “I used route-level lazy loading because the admin area was large and used by a small percentage of users. It reduced the initial bundle, but it added more loading states and chunk boundaries. We measured the change with bundle analysis and web-vitals data.”

## Modern Angular baseline

- Prefer standalone components and \`bootstrapApplication\` for new code.
- Keep features organized by business domain, not by file type.
- Use built-in control flow: \`@if\`, \`@for\`, \`@switch\`, and \`@defer\`.
- Use signals for local synchronous UI state and derived state.
- Use RxJS for asynchronous streams, cancellation, coordination, and event pipelines.
- Prefer \`inject()\` where it improves readability and composition.
- Prefer functional guards and functional HTTP interceptors.
- Write zoneless-compatible code. Zoneless change detection is the default in Angular v21+.
- Prefer typed reactive forms for established complex form code. Signal Forms are a strong modern option in Angular v22+ signal-based applications.
- Use Vitest and Angular \`TestBed\` in new CLI projects; test behavior, not implementation details.
- Treat accessibility, security, performance, and internationalization as architecture concerns, not final polishing.

## Contents

1. Architecture and application structure
2. Standalone components and application bootstrap
3. Components and templates
4. Data binding and component communication
5. Directives
6. Pipes
7. Services and dependency injection
8. Signals
9. RxJS observables and operators
10. Promises versus Observables
11. Lifecycle hooks and render callbacks
12. Forms
13. Routing, guards, resolvers, and navigation
14. HTTP, API boundaries, and interceptors
15. Change detection
16. OnPush
17. Zones and zoneless Angular
18. State management
19. Content projection
20. View queries and content queries
21. Lazy loading and deferrable views
22. SSR, prerendering, and hydration
23. Testing
24. Accessibility, responsive design, and RTL/LTR
25. Security
26. Performance
27. Migration and legacy Angular

The final sections contain senior architecture scenarios, a rapid-review cheat sheet, a four-week study plan, a story-bank template, and questions to ask the interviewer.

---

# 1. Architecture and application structure

## Interview-ready answer

> “I organize a large Angular application by business feature. Each feature owns its routes, pages, components, data access, and state. I keep reusable UI in a design-system or shared UI layer, and I keep cross-cutting infrastructure such as authentication, logging, and HTTP configuration at the application level. Dependencies should point inward: pages compose features, feature logic uses domain or data services, and reusable UI should not know about business workflows.”

## Clear explanation

A scalable Angular architecture usually has four kinds of code:

- **App shell:** bootstrap, top-level layout, global providers, error handling, routing.
- **Features:** business areas such as orders, customers, billing, or admin.
- **Shared UI/design system:** buttons, fields, dialogs, tables, tokens, icons, layout primitives.
- **Core infrastructure:** authentication, API clients, telemetry, storage, feature flags.

Organize by feature first. A folder named \`orders\` tells a developer where the order workflow lives. A global \`components\` folder becomes a mixed collection with unclear ownership.

Keep smart orchestration near route/page components. Presentational components should receive data through inputs and report user intent through outputs. Do not force every component into “smart” or “dumb”; use the separation where it creates a clear API and makes testing easier.

## Practical example

\`\`\`text
src/app/
  app.config.ts
  app.routes.ts
  shell/
  features/
    orders/
      orders.routes.ts
      pages/
      ui/
      data-access/
      state/
  shared/
    ui/
    utilities/
  core/
    auth/
    http/
    telemetry/
\`\`\`

\`\`\`ts
// orders.routes.ts
export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    providers: [OrdersStore],
    children: [
      { path: '', loadComponent: () => import('./pages/orders-list')
          .then(m => m.OrdersList) },
      { path: ':id', loadComponent: () => import('./pages/order-detail')
          .then(m => m.OrderDetail) },
    ],
  },
];
\`\`\`

## Common mistakes

- Organizing only by technical type: one huge folder each for components, services, and models.
- Putting business rules inside generic UI components.
- Creating a global “shared” module or service that owns unrelated responsibilities.
- Letting components call many low-level APIs directly.
- Adding a state library before the state problem is understood.
- Creating circular feature dependencies.

## Trade-offs

- Feature boundaries improve ownership and lazy loading, but some types are duplicated.
- A strict layered architecture improves consistency, but too many wrapper layers slow development.
- A monorepo helps shared libraries and dependency rules, but adds tooling and governance cost.

## Likely follow-up questions

**How do you decide if code is shared?**  
I wait for a real second use case. Then I extract the smallest stable API. Similar-looking code is not always the same abstraction.

**Where should business logic live?**  
In domain functions, services, or feature stores that can be tested without a large component fixture. Components should mainly coordinate state and UI.

**How do you prevent architecture decay?**  
Use ownership, code review rules, dependency constraints, small public APIs, and architecture decision records for important choices.

---

# 2. Standalone components and application bootstrap

## Interview-ready answer

> “Standalone components declare their template dependencies directly in \`imports\`, so new Angular applications do not need NgModules for feature composition. I bootstrap with \`bootstrapApplication\`, configure application providers in \`ApplicationConfig\`, and lazy-load standalone routes or components. This makes dependencies easier to see and supports incremental migration from NgModules.”

## Clear explanation

Modern components are standalone by default. A component imports the components, directives, and pipes used by its template. This gives local, explicit dependencies and works well with route-level code splitting.

Application-wide providers normally live in \`app.config.ts\`. Feature-specific providers can live on routes, and truly local providers can live on a component.

## Practical example

\`\`\`ts
@Component({
  selector: 'app-user-card',
  imports: [DatePipe, RouterLink],
  template: \`
    <a [routerLink]="['/users', user().id]">
      {{ user().name }} · {{ user().createdAt | date }}
    </a>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard {
  user = input.required<User>();
}
\`\`\`

\`\`\`ts
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};

bootstrapApplication(App, appConfig);
\`\`\`

## Common mistakes

- Importing a large shared bundle into every component.
- Providing a stateful service at component level by accident, creating many instances.
- Assuming standalone means “no architecture” or “one giant component.”
- Rewriting a stable NgModule application all at once without business value.

## Trade-offs

- Direct imports improve clarity, but component metadata can grow.
- Migration can be incremental, but a mixed standalone/NgModule period requires team conventions.
- Route-level providers give good isolation, but service lifetime follows the route injector and must be understood.

## Likely follow-up questions

**Are NgModules removed?**  
No. Angular supports them for existing applications and libraries, but recommends standalone for new code.

**What belongs in \`app.config.ts\`?**  
Global concerns: router, HTTP, hydration, global error handling, animations if used, and application-wide tokens.

**Can a standalone component use an NgModule library?**  
Yes. Add that NgModule to the component’s \`imports\`.

---

# 3. Components and templates

## Interview-ready answer

> “A component is a class plus a template, styles, and metadata. I keep components focused, expose a small typed API, and use built-in template control flow. I avoid heavy calculations and side effects in templates because template expressions can run often. For reusable components, I design semantic HTML, keyboard behavior, theming, RTL support, and accessibility as part of the API.”

## Clear explanation

Angular compiles templates, checks bindings, and updates the DOM when reactive state changes. Modern component APIs include signal-based \`input()\`, \`output()\`, and \`model()\`.

Use:

- \`@if\` for conditional rendering.
- \`@for\` with a stable \`track\` expression for lists.
- \`@switch\` for clear finite states.
- \`@defer\` for code-splitting UI that is not needed immediately.

## Practical example

\`\`\`ts
@Component({
  selector: 'app-product-list',
  template: \`
    @if (loading()) {
      <app-spinner aria-label="Loading products" />
    } @else if (products().length === 0) {
      <p>No products found.</p>
    } @else {
      <ul>
        @for (product of products(); track product.id) {
          <li><app-product-card [product]="product" /></li>
        }
      </ul>
    }
  \`,
  imports: [Spinner, ProductCard],
})
export class ProductList {
  products = input.required<readonly Product[]>();
  loading = input(false);
}
\`\`\`

## Common mistakes

- Calling expensive methods from interpolation.
- Tracking list items by index when items can move or be inserted.
- Mutating input objects inside a child.
- Building a reusable component with no keyboard or focus design.
- Using nested conditions until the template becomes unreadable.

## Trade-offs

- Small components improve reuse and tests, but excessive splitting makes navigation harder.
- Inline templates are convenient for small components; separate templates are easier for complex markup.
- A highly configurable component can cover more cases, but its API can become difficult to understand.

## Likely follow-up questions

**Why does \`track\` matter in \`@for\`?**  
It lets Angular preserve DOM nodes and component instances when a collection changes. A stable ID avoids unnecessary recreation.

**When do you split a component?**  
When part of it has a clear responsibility, API, reuse case, independent performance boundary, or test boundary.

---

# 4. Data binding and component communication

## Interview-ready answer

> “Angular supports interpolation, property binding, attribute binding, event binding, and two-way binding. I use inputs for data flowing down and outputs for user intent flowing up. I use two-way binding only when the child really owns an editable value contract; otherwise explicit input and output names are clearer.”

## Clear explanation

## Practical example

\`\`\`html
<!-- text interpolation -->
<h2>{{ title() }}</h2>

<!-- DOM property -->
<button [disabled]="saving()">Save</button>

<!-- HTML attribute; useful for ARIA and attributes without DOM properties -->
<button [attr.aria-expanded]="open()">Menu</button>

<!-- event -->
<button (click)="save()">Save</button>

<!-- class and style -->
<div [class.active]="selected()" [style.inline-size.px]="width()"></div>
\`\`\`

Signal-based component API:

\`\`\`ts
@Component({ selector: 'app-rating', template: \`...\` })
export class Rating {
  value = model.required<number>();
  disabled = input(false);
  committed = output<number>();
}
\`\`\`

\`\`\`html
<app-rating [(value)]="rating" (committed)="saveRating($event)" />
\`\`\`

## Common mistakes

- Using attribute binding when a DOM property is intended, or the reverse.
- Emitting vague outputs such as \`changed\` instead of user intent such as \`submitted\`.
- Passing mutable objects down and changing them in several components.
- Using two-way binding across many layers, which hides data flow.
- Forgetting that interpolation produces text and is not the right tool for every property.

## Trade-offs

- Explicit one-way flow is predictable but needs more wiring.
- \`model()\` makes a custom two-way control concise but creates tighter parent-child coupling.
- Shared service state avoids output chains, but can hide ownership if overused.

## Likely follow-up questions

**Property binding versus attribute binding?**  
Properties update the live DOM object. Attributes update markup-level attributes. ARIA normally needs \`attr.aria-*\`.

**How do unrelated components communicate?**  
Use state owned by their nearest common feature boundary, often a service/store. Avoid a global event bus with undocumented events.

---

# 5. Directives

## Interview-ready answer

> “A directive adds behavior to an existing element or component. Attribute directives change behavior or appearance, while structural behavior changes what is rendered. In modern templates I normally use built-in \`@if\` and \`@for\` instead of legacy structural directive syntax. I create a custom directive when behavior should be reusable without adding another DOM wrapper.”

## Clear explanation

Components are directives with templates. Attribute directives are useful for cross-cutting UI behavior such as autofocus, permission-aware interaction, resize observation, or analytics.

## Practical example

\`\`\`ts
@Directive({
  selector: '[appAutoFocus]',
  host: { '[attr.data-autofocus]': 'true' },
})
export class AutoFocusDirective {
  private element = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => this.element.nativeElement.focus());
  }
}
\`\`\`

Prefer \`host\` metadata or \`hostDirectives\` for composition when appropriate. Use \`Renderer2\` or Angular template bindings when direct DOM work would break SSR, security, or testability.

## Common mistakes

- Creating a directive for business logic that belongs in a feature service.
- Directly changing DOM in a way that assumes a browser during SSR.
- Hiding access-control logic in a visual directive; the server must still authorize.
- Recreating \`@if\` or \`@for\` with custom structural directives without a strong reason.

## Trade-offs

- Directives reuse behavior without wrappers, but hidden behavior can surprise readers.
- \`hostDirectives\` supports composition, but exposed inputs and outputs need a careful public API.

## Likely follow-up questions

**Component versus directive?**  
Use a component when you own a view. Use a directive when you add behavior to an existing host.

**How does a structural directive work in legacy templates?**  
The \`*\` syntax is shorthand around an \`ng-template\`; the directive controls creation of embedded views.

---

# 6. Pipes

## Interview-ready answer

> “A pipe transforms a value for display. Pipes should be small, deterministic, and free of side effects. Pure pipes run again when an input reference changes, so I use immutable updates. I use \`AsyncPipe\` to subscribe in templates because it handles cleanup and change-detection notification.”

## Clear explanation

Pipes are good for formatting dates, currency, labels, and simple derived display values. They should not fetch data or mutate inputs.

## Practical example

\`\`\`ts
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(name: string): string {
    return name.trim().split(/\\s+/).map(part => part[0] ?? '').join('').toUpperCase();
  }
}
\`\`\`

\`\`\`html
<span aria-hidden="true">{{ user.name | initials }}</span>
<span class="sr-only">{{ user.name }}</span>
\`\`\`

## Common mistakes

- Making an impure pipe to compensate for mutable state.
- Calling HTTP or changing state from a pipe.
- Assuming a pure pipe detects mutation inside an array or object.
- Putting heavy sorting or filtering in a pipe on a large list.

## Trade-offs

- Pipes keep display transformations declarative, but complex business transformations are easier to test as plain functions.
- Impure pipes react to more changes, but can run very often and hurt performance.

## Likely follow-up questions

**Pure versus impure pipe?**  
A pure pipe runs when primitive input values or object references change. An impure pipe may run on every check. Pure is the default and normally preferred.

**Pipe versus computed signal?**  
Use a pipe for reusable template formatting. Use \`computed\` for component or feature state derived from signals.

---

# 7. Services and dependency injection

## Interview-ready answer

> “Dependency injection lets a class ask for a dependency instead of constructing it. I use root providers for real application singletons, route providers for feature-scoped state, and component providers only when each component subtree needs its own instance. I use \`InjectionToken\` for configuration or interfaces because TypeScript interfaces do not exist at runtime.”

## Clear explanation

Angular resolves a token from the nearest element injector, then parent element injectors, then route/application environment injectors. Provider location controls instance scope and lifetime.

\`providedIn: 'root'\` is tree-shakable and is the normal default for stateless services or true app-wide state.

## Practical example

\`\`\`ts
export interface ApiConfig { baseUrl: string; }

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');

@Injectable({ providedIn: 'root' })
export class UsersApi {
  private http = inject(HttpClient);
  private config = inject(API_CONFIG);

  getUser(id: string) {
    return this.http.get<User>(\`\${this.config.baseUrl}/users/\${id}\`);
  }
}

// app.config.ts
{ provide: API_CONFIG, useValue: { baseUrl: '/api' } }
\`\`\`

## Common mistakes

- Providing a service in both root and a component, then wondering why state is duplicated.
- Turning every helper into an injectable service.
- Using a service locator through \`Injector.get()\` instead of explicit dependencies.
- Creating circular service dependencies.
- Using a string token that can collide instead of \`InjectionToken\`.

## Trade-offs

- Root scope is simple and shareable, but global mutable state is harder to reason about.
- Route scope isolates and lazy-loads feature state, but navigating away destroys it.
- \`inject()\` supports field initializers and functions; constructor injection can make dependencies visually obvious in one place. Both are valid.

## Likely follow-up questions

**\`useClass\`, \`useValue\`, \`useFactory\`, and \`useExisting\`?**  
\`useClass\` constructs a class, \`useValue\` provides a fixed value, \`useFactory\` computes a dependency, and \`useExisting\` aliases another token without creating a second instance.

**Why is DI useful in tests?**  
I can replace API, clock, storage, or configuration dependencies with controlled test doubles.

---

# 8. Signals

## Interview-ready answer

> “A signal is a synchronous reactive value. I read it by calling it, update writable signals with \`set\` or \`update\`, derive state with \`computed\`, and use \`effect\` only for real side effects. Signals are a good fit for local UI and feature state because Angular tracks exactly where they are read. I avoid using effects to copy one piece of state into another because that can create loops and inconsistent state.”

## Clear explanation

- \`signal(value)\`: writable state.
- \`computed(() => ...)\`: cached derived state; read-only.
- \`effect(() => ...)\`: runs side-effecting code when dependencies change.
- \`linkedSignal(...)\`: writable state that resets or derives from another reactive source.
- \`toSignal\` / \`toObservable\`: bridges signals and RxJS.

Signals always have a current value. Observables represent events over time and may not have one.

## Practical example

\`\`\`ts
@Injectable()
export class CartStore {
  private readonly _items = signal<readonly CartItem[]>([]);

  readonly items = this._items.asReadonly();
  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  add(item: CartItem) {
    this._items.update(items => [...items, item]);
  }
}
\`\`\`

Use an effect for an external side effect:

\`\`\`ts
effect(() => localStorage.setItem('theme', this.theme()));
\`\`\`

Be careful with browser-only APIs during SSR; guard or move them to browser-only execution.

## Common mistakes

- Mutating an array in place: \`items().push(x)\`.
- Using \`effect\` for derived state instead of \`computed\`.
- Creating effects without thinking about lifetime and cleanup.
- Converting every Observable to a signal, even when stream operators are the better model.
- Calling \`toSignal()\` repeatedly for the same Observable, creating repeated subscriptions.

## Trade-offs

- Signals are simple and fine-grained for synchronous state, but RxJS is stronger for complex async event pipelines.
- A service-based signal store has little boilerplate, but a large team may need stricter event history, devtools, or conventions from a state library.
- Custom equality can reduce updates, but deep comparison may cost more than rendering.

## Likely follow-up questions

**Signal versus \`BehaviorSubject\`?**  
Both expose current state. A signal is synchronous and integrates directly with Angular dependency tracking. A \`BehaviorSubject\` is an Observable source and composes with the full RxJS operator model.

**When would you use \`effect\`?**  
For logging, persistence, imperative charts, or another external system. Not for normal derived state.

**How do signals work with OnPush?**  
When an OnPush template reads a signal, Angular tracks it. Updating that signal marks the relevant view for refresh.

---

# 9. RxJS observables and operators

## Interview-ready answer

> “An Observable is a lazy stream that can emit zero, one, or many values and can be cancelled by unsubscribing. I use RxJS for HTTP composition, route streams, search, websockets, and events over time. I choose flattening operators by cancellation and ordering requirements: \`switchMap\` cancels the previous inner stream, \`concatMap\` queues, \`mergeMap\` runs in parallel, and \`exhaustMap\` ignores new triggers while one is active.”

## Clear explanation

Useful operator groups:

- Transform: \`map\`, \`scan\`.
- Filter/timing: \`filter\`, \`debounceTime\`, \`distinctUntilChanged\`.
- Combine: \`combineLatest\`, \`forkJoin\`, \`withLatestFrom\`.
- Flatten: \`switchMap\`, \`concatMap\`, \`mergeMap\`, \`exhaustMap\`.
- Error/finalization: \`catchError\`, \`retry\`, \`finalize\`.
- Lifecycle/sharing: \`take\`, \`takeUntilDestroyed\`, \`shareReplay\`.

## Practical example: typeahead search

\`\`\`ts
results$ = this.searchControl.valueChanges.pipe(
  map(value => value.trim()),
  debounceTime(250),
  distinctUntilChanged(),
  switchMap(query =>
    query ? this.api.search(query).pipe(
      catchError(() => of([]))
    ) : of([])
  ),
);
\`\`\`

\`switchMap\` is correct because an old search response should not replace a newer result.

Manual subscription with automatic cleanup:

\`\`\`ts
events$.pipe(takeUntilDestroyed()).subscribe(event => this.handle(event));
\`\`\`

## Common mistakes

- Nested subscriptions instead of flattening operators.
- Using \`switchMap\` for writes that must all complete.
- Subscribing in a service and again in a component, causing duplicate work.
- Putting \`catchError\` too high and ending a long-lived stream.
- Using \`shareReplay(1)\` without understanding cache lifetime and ref counting.
- Forgetting cleanup for long-lived manual subscriptions.

## Trade-offs

- RxJS handles complex time and concurrency well, but operator-heavy code has a learning cost.
- Template \`AsyncPipe\` is simple; imperative subscription is sometimes needed for side effects.
- \`shareReplay\` prevents duplicate work, but can retain stale values or keep a source alive if configured poorly.

## Likely follow-up questions

**\`combineLatest\` versus \`forkJoin\`?**  
\`combineLatest\` keeps emitting after every source has emitted once. \`forkJoin\` emits once when all sources complete, so it suits a group of finite HTTP calls.

**Hot versus cold Observable?**  
A cold source creates work per subscriber, like \`HttpClient\`. A hot source exists independently and subscribers observe shared emissions, like many subjects or browser events.

**Subject versus BehaviorSubject?**  
A \`Subject\` has no current value. A \`BehaviorSubject\` requires an initial value and immediately gives the latest value to a new subscriber.

---

# 10. Promises versus Observables

## Interview-ready answer

> “A Promise represents one future result and starts immediately. An Observable can represent zero to many values, is normally lazy, supports cancellation through unsubscription, and has operators for time and concurrency. I use \`async\`/\`await\` for simple one-step asynchronous logic and Observables when I need streams, cancellation, retries, or Angular APIs that already return Observables.”

## Clear explanation

A Promise settles once with a value or error. An Observable describes a subscription that may emit several values, error, or complete. Most Angular \`HttpClient\` Observables are cold: no request is sent until something subscribes. Unsubscribing can cancel the underlying request.

## Practical comparison

\`\`\`ts
// One result; easy sequential flow
const config = await firstValueFrom(this.http.get<Config>('/api/config'));

// Stream; cancel old requests when the query changes
const results$ = query$.pipe(
  switchMap(query => this.http.get<Result[]>('/api/search', { params: { query } }))
);
\`\`\`

## Common mistakes

- Saying Promises are cancellable. Standard Promises are not; the underlying operation may support \`AbortSignal\` separately.
- Converting Observables to Promises too early and losing cancellation or multiple emissions.
- Using \`firstValueFrom\` on a source that may never emit, leaving the Promise pending.
- Assuming Observables always execute; most need a subscriber.

## Trade-offs

- Promises are easier for simple imperative flow.
- Observables are more expressive for streams but add concepts and operator complexity.
- Converting at a boundary is fine; repeated conversion throughout a feature makes behavior harder to follow.

## Likely follow-up questions

**Why does \`HttpClient\` return Observables?**  
They are lazy, compose with RxJS, support interception, and unsubscribing can cancel an in-flight request.

**What is the difference between \`firstValueFrom\` and \`lastValueFrom\`?**  
The first resolves on the first emission and unsubscribes. The last waits for completion and resolves with the final emission; it is dangerous for streams that do not complete.

---

# 11. Lifecycle hooks and render callbacks

## Interview-ready answer

> “I use lifecycle hooks only when the timing is part of the requirement. \`ngOnChanges\` reacts to input changes, \`ngOnInit\` handles initialization after initial inputs, \`ngAfterViewInit\` is for initialized view children, and \`ngOnDestroy\` is for cleanup. For DOM work after rendering, I prefer \`afterNextRender\` or \`afterEveryRender\`. With signals and \`takeUntilDestroyed\`, many older hook use cases disappear.”

## Clear explanation

Important order on initial creation:

1. constructor
2. first \`ngOnChanges\`
3. \`ngOnInit\`
4. \`ngAfterContentInit\`
5. \`ngAfterViewInit\`
6. render callbacks after DOM rendering

The constructor is for JavaScript construction and injected dependencies, not input-dependent work.

## Practical example

\`\`\`ts
export class ChartPanel {
  chartHost = viewChild.required<ElementRef<HTMLElement>>('chartHost');
  private chart?: Chart;
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.chart = new Chart(this.chartHost().nativeElement);
      this.destroyRef.onDestroy(() => this.chart?.destroy());
    });
  }
}
\`\`\`

## Common mistakes

- Starting input-dependent work in the constructor.
- Changing already-checked state in \`ngAfterViewInit\`, causing expression-changed errors.
- Putting expensive logic in \`ngDoCheck\` or checked hooks.
- Using hooks to synchronize state that should be \`computed\`.
- Forgetting external listener, timer, or third-party library cleanup.

## Trade-offs

- Hooks give exact framework timing but create temporal coupling.
- Signal derivation is clearer for reactive state, but imperative libraries still need render timing and cleanup.

## Likely follow-up questions

**\`ngOnInit\` versus constructor?**  
The constructor creates the class. \`ngOnInit\` runs after Angular has set initial inputs.

**Why use \`DestroyRef\`?**  
It keeps setup and cleanup close together and is used by helpers such as \`takeUntilDestroyed\`.

---

# 12. Forms

## Interview-ready answer

> “For enterprise forms I usually use typed reactive forms because the model is explicit, scalable, and easy to test. Template-driven forms are fine for small simple forms. In modern signal-based applications, Signal Forms provide typed signal state and schema validation. Whichever approach I choose, I design validation, server errors, accessibility, submission state, and custom controls together.”

## Clear explanation

Current choices:

- **Typed reactive forms:** mature choice for complex, dynamic, existing enterprise forms.
- **Template-driven forms:** small, simple forms with limited logic.
- **Signal Forms:** modern signal model, type inference, schema validation; a strong choice for new Angular v22+ signal-based work.

For a reusable custom control, implement the expected form-control contract. In reactive forms this commonly means \`ControlValueAccessor\`; with Signal Forms, use its custom-control APIs.

## Practical example: typed reactive form

\`\`\`ts
profileForm = this.fb.nonNullable.group({
  name: ['', [Validators.required, Validators.maxLength(80)]],
  email: ['', [Validators.required, Validators.email]],
  direction: this.fb.nonNullable.control<'ltr' | 'rtl'>('ltr'),
});

submit() {
  if (this.profileForm.invalid) {
    this.profileForm.markAllAsTouched();
    return;
  }

  this.api.save(this.profileForm.getRawValue()).subscribe(/* handle states */);
}
\`\`\`

Accessible template fragment:

\`\`\`html
<label for="email">Email</label>
<input id="email" type="email" formControlName="email"
       [attr.aria-invalid]="email.invalid && email.touched"
       [attr.aria-describedby]="email.invalid && email.touched ? 'email-error' : null" />
@if (email.invalid && email.touched) {
  <p id="email-error" role="alert">Enter a valid email address.</p>
}
\`\`\`

## Common mistakes

- Using untyped forms and casting values later.
- Showing errors before the user has interacted or submitted.
- Treating client validation as security; the server must validate again.
- Losing disabled values by using \`.value\` when \`getRawValue()\` is intended.
- Subscribing to \`valueChanges\` without cleanup or debouncing expensive work.
- Writing a custom control without proper touched, disabled, and accessibility behavior.

## Trade-offs

- Reactive forms are explicit and powerful but involve more setup.
- Template-driven forms are concise but harder to scale and test.
- Signal Forms fit signal state naturally, but migration cost and third-party control compatibility must be considered in established applications.

## Likely follow-up questions

**\`setValue\` versus \`patchValue\`?**  
\`setValue\` requires the full control shape. \`patchValue\` updates only supplied fields. I use \`setValue\` when shape checking is valuable.

**Sync versus async validators?**  
Sync validators return immediately. Async validators return a Promise or Observable, for example checking username availability. I debounce API checks and handle server validation on submit too.

**How do you model dynamic rows?**  
Use a typed \`FormArray\`, stable row identity, and a row component when the UI is complex.

---

# 13. Routing, guards, resolvers, and navigation

## Interview-ready answer

> “I define routes as feature boundaries and lazy-load non-critical features. I use functional guards for navigation decisions, resolvers only when data must exist before activation, and route input binding or route signals for route data. A guard improves UX, but it is never security; the server must enforce authorization.”

## Clear explanation

Main guard types:

- \`CanActivate\`: can enter a route.
- \`CanActivateChild\`: can enter child routes.
- \`CanDeactivate\`: can leave, often for unsaved changes.
- \`CanMatch\`: can this route configuration match; useful for role/feature alternatives.

Return a \`UrlTree\` or \`RedirectCommand\` to redirect. Do not return \`false\` and then call \`navigate()\` as a side effect.

## Practical example

\`\`\`ts
export const authGuard: CanActivateFn = (_, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isAuthenticated()
    ? true
    : router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
};

export const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
];
\`\`\`

## Common mistakes

- Treating guards as authorization security.
- Deeply nesting routes with unclear ownership.
- Loading all page data in a resolver, delaying navigation with no skeleton UI.
- Subscribing manually to route parameters when a reactive binding is simpler.
- Redirecting imperatively from inside a guard.

## Trade-offs

- Resolvers prevent a half-ready screen but delay route activation and can make navigation feel frozen.
- Component loading states show the shell sooner but add UI state.
- \`CanMatch\` can choose different route configurations, but false means Angular tries other matches rather than simply blocking.

## Likely follow-up questions

**Snapshot versus route stream?**  
Use the snapshot for a value that cannot change while the component instance is reused. Use reactive route values when parameters can change without component recreation.

**How do you handle unsaved changes?**  
A \`CanDeactivate\` guard asks the component or form-state service whether navigation is safe, then returns a boolean or an async confirmation result.

---

# 14. HTTP, API boundaries, and interceptors

## Interview-ready answer

> “\`HttpClient\` returns cold Observables. I keep endpoint details in focused API services and map transport DTOs into domain models at the boundary. I use functional interceptors for cross-cutting behavior such as authentication headers, correlation IDs, error normalization, or caching. Requests are immutable, so an interceptor clones a request before changing it.”

## Clear explanation

Functional interceptors have predictable ordering and can use \`inject()\`. Register them with \`provideHttpClient(withInterceptors([...]))\`.

An interceptor should be cross-cutting. A specific endpoint’s business error does not belong in a global interceptor.

## Practical example

\`\`\`ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();

  if (!token || !req.url.startsWith('/api/')) {
    return next(req);
  }

  return next(req.clone({
    setHeaders: { Authorization: \`Bearer \${token}\` },
  }));
};

provideHttpClient(withInterceptors([
  correlationIdInterceptor,
  authInterceptor,
  errorLoggingInterceptor,
]));
\`\`\`

## Common mistakes

- Adding a token to third-party URLs and leaking credentials.
- Retrying unsafe writes automatically.
- Swallowing all errors globally so the feature cannot respond correctly.
- Refresh-token logic that sends several refresh requests concurrently.
- Depending on TypeScript response types as runtime validation.
- Forgetting that every subscription to a cold HTTP Observable can send a request.

## Trade-offs

- Interceptors remove duplication, but too much hidden behavior makes requests difficult to debug.
- Runtime schema validation improves safety at external boundaries, but adds bundle and processing cost.
- Caching improves speed, but invalidation and user-specific data require careful keys and lifetime.

## Likely follow-up questions

**How do you implement token refresh safely?**  
Allow only one refresh operation, queue or share waiting requests, retry them with the new token, prevent the refresh request itself from being intercepted recursively, and log out cleanly on refresh failure.

**Where do you map DTOs?**  
At the data-access boundary so the rest of the feature does not depend on backend naming or nullable transport shapes.

---

# 15. Change detection

## Interview-ready answer

> “Change detection updates views when Angular knows state may have changed. Modern Angular is moving from broad ZoneJS-triggered checks to explicit notifications such as signal updates, input changes, event handlers, \`AsyncPipe\`, and \`markForCheck\`. I first model state reactively and profile real bottlenecks; I do not call \`detectChanges\` as a general fix.”

## Clear explanation

Angular traverses relevant views and evaluates template bindings. A change-detection strategy controls when a subtree is eligible to be checked. Notifications include:

- A signal read by a template changes.
- An input is set.
- A template or host event runs.
- \`AsyncPipe\` receives a value and marks for check.
- Code calls \`markForCheck\`.

Avoid side effects while bindings are being checked.

## Practical example

\`\`\`ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<p>{{ status() }}</p>\`,
})
export class UploadStatus {
  status = signal('Waiting');

  complete() {
    this.status.set('Complete');
  }
}
\`\`\`

## Common mistakes

- Calling functions with expensive work from a template.
- Mutating shared objects and expecting reference-based checks to notice.
- Calling \`detectChanges()\` until an error disappears without finding the state-flow problem.
- Doing state changes in checked lifecycle hooks.
- Assuming “fewer checks” always means a faster app; DOM work and JavaScript may be the real bottleneck.

## Trade-offs

- Explicit reactive notifications improve predictability and performance, but integrations must notify Angular correctly.
- Manual change-detector APIs offer control but make timing and ownership harder to reason about.

## Likely follow-up questions

**\`markForCheck\` versus \`detectChanges\`?**  
\`markForCheck\` schedules the view to participate in a normal future check. \`detectChanges\` immediately checks a view subtree. I prefer normal scheduling unless I have a measured, local reason.

**What causes \`ExpressionChangedAfterItHasBeenCheckedError\`?**  
State changed after Angular checked a binding in the same verification cycle. The fix is usually to correct lifecycle timing or state flow, not hide the error with a timeout.

---

# 16. OnPush

## Interview-ready answer

> “OnPush lets Angular skip a component subtree when it has no relevant notification. It works best with immutable inputs, signals, \`AsyncPipe\`, and event-driven updates. It is both a performance tool and a design signal: a component should have clear inputs and reactive state. It does not mean Angular checks a component only once.”

## Clear explanation

With OnPush, Angular can skip a subtree when it has no new input or other notification. An input reference change, a handled event, an updated signal consumed by the template, \`AsyncPipe\`, or an explicit mark can make the view eligible for checking.

## Practical example

\`\`\`ts
@Component({
  selector: 'app-order-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`{{ order().number }} — {{ order().total | currency }}\`,
  imports: [CurrencyPipe],
})
export class OrderRow {
  order = input.required<Order>();
}

// Good immutable update
this.orders.update(items =>
  items.map(item => item.id === updated.id ? updated : item)
);
\`\`\`

## Common mistakes

- Mutating an input object in place.
- Manually subscribing and assigning a plain field without a notification.
- Believing events inside an OnPush component do not trigger a refresh.
- Applying OnPush everywhere without profiling or fixing unstable template work.

## Trade-offs

- OnPush can skip work and encourages clean state flow.
- Code that depends on mutation or hidden side effects needs refactoring.
- In a zoneless app, reactive notification correctness matters even with the default strategy; OnPush is helpful but not mandatory.

## Likely follow-up questions

**When is an OnPush component checked?**  
When it receives a relevant input, handles an event, a consumed signal changes, \`AsyncPipe\` marks it, it is explicitly marked, or another relevant framework notification occurs.

**Does projected content follow the child’s OnPush boundary?**  
The projected nodes belong to the parent’s view, so the child’s OnPush strategy does not simply own or skip that parent content.

---

# 17. Zones and zoneless Angular

## Interview-ready answer

> “ZoneJS patches async browser APIs so Angular can run change detection after many asynchronous tasks, even if it does not know whether state changed. Zoneless Angular removes that patching and relies on explicit Angular notifications such as signals, inputs, events, \`AsyncPipe\`, and \`markForCheck\`. Zoneless is the default in Angular v21+, so I write components that update reactive state instead of relying on an unrelated timer or task to refresh the UI.”

## Clear explanation

Benefits of zoneless operation include less patching, smaller startup overhead, clearer stack traces, and fewer unnecessary global synchronization passes.

Migration checklist:

- Prefer signals for template state.
- Use \`AsyncPipe\` or \`toSignal\` for Observables read by templates.
- Use \`markForCheck\` when integrating an imperative callback.
- Remove dependencies on \`NgZone.onStable\`, \`onMicrotaskEmpty\`, and similar Zone-specific behavior.
- Test form state and third-party libraries carefully.
- Remove ZoneJS from build and test polyfills after compatibility is confirmed.

## Practical example

\`\`\`ts
// Zoneless-friendly callback integration
export class NetworkPanel {
  online = signal(navigator.onLine);

  constructor() {
    const destroyRef = inject(DestroyRef);
    const handler = () => this.online.set(navigator.onLine);

    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    destroyRef.onDestroy(() => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    });
  }
}
\`\`\`

## Common mistakes

- Removing ZoneJS before checking third-party and test assumptions.
- Updating a plain field from an external callback with no notification.
- Assuming \`NgZone.run()\` is the main zoneless migration strategy.
- Depending on Zone stability events for application logic.
- Forgetting that some reactive-form structural updates may need a bridge to a template notification.

## Trade-offs

- Zoneless improves predictability and can improve performance, but legacy libraries may rely on patched async behavior.
- ZoneJS makes older code “just refresh,” but can hide the real update source and trigger more checks than necessary.

## Likely follow-up questions

**Is OnPush required for zoneless?**  
No. It is recommended because it encourages compatible notification patterns, but default-strategy components can work if updates notify Angular.

**How do you update a view from a third-party callback?**  
Set a signal consumed by the template, use an Observable with \`AsyncPipe\`, or call \`markForCheck\` after updating state.

---

# 18. State management

## Interview-ready answer

> “I choose state management based on scope and complexity. Local UI state stays in the component. Shared feature state can live in a route-scoped service with private writable signals and public read-only signals. I use a full store library when the team needs strict event flow, entity tools, effects, devtools, or coordination across many features. The important points are single ownership, derived state instead of duplicated state, immutable updates, and clear async boundaries.”

## Clear explanation

State levels:

1. **Local component:** selected tab, open state, draft UI value.
2. **Feature:** cart, search results, wizard state, current order editing.
3. **Application:** authenticated user, global preferences, feature flags.
4. **Server cache:** API data with loading, error, freshness, and invalidation.
5. **URL state:** filters, page, sort, and shareable navigation state.

Do not copy the same value into component state, service state, store state, and URL unless each copy has a clear synchronization contract.

## Practical example

\`\`\`ts
@Injectable()
export class OrdersStore {
  private api = inject(OrdersApi);
  private _orders = signal<readonly Order[]>([]);
  private _status = signal<'idle' | 'loading' | 'error'>('idle');

  orders = this._orders.asReadonly();
  status = this._status.asReadonly();
  openOrders = computed(() => this.orders().filter(x => x.status === 'open'));

  load() {
    this._status.set('loading');
    this.api.list().pipe(
      take(1),
      finalize(() => {
        if (this._status() === 'loading') this._status.set('idle');
      }),
    ).subscribe({
      next: orders => this._orders.set(orders),
      error: () => this._status.set('error'),
    });
  }
}
\`\`\`

In production, model success/error status carefully so \`finalize\` cannot erase an error state.

## Common mistakes

- Putting all state in one global store.
- Storing derived values instead of computing them.
- Exposing writable signals or subjects publicly.
- Ignoring stale requests and race conditions.
- Keeping shareable filters only in memory instead of the URL.
- Treating a state library as architecture by itself.

## Trade-offs

- A signal service is simple and Angular-native, but relies on team conventions.
- A formal store adds predictable events and tooling, but also boilerplate and indirection.
- URL state improves sharing and browser navigation, but serialization and backward compatibility need care.

## Likely follow-up questions

**When would you choose NgRx or another store?**  
When state changes are complex, cross-feature, audit-sensitive, or handled by a large team that benefits from consistent events, effects, selectors, and devtools.

**How do you avoid race conditions?**  
Choose the correct concurrency behavior: cancel stale reads with \`switchMap\`, queue required writes with \`concatMap\`, or identify responses by request/version.

---

# 19. Content projection

## Interview-ready answer

> “Content projection lets a component define layout while the parent supplies content through \`ng-content\`. I use it for design-system containers such as cards, dialogs, and field wrappers. I use selectors for named slots and keep the slot contract small. Projected content belongs to the parent’s view, which matters for styling, queries, and change detection.”

## Clear explanation

The child owns the container template, while the parent owns the projected nodes and their bindings. A plain \`ng-content\` is a default slot; \`select\` creates named slots based on CSS selectors.

## Practical example

\`\`\`ts
@Component({
  selector: 'app-card',
  template: \`
    <article class="card">
      <header><ng-content select="[card-title]" /></header>
      <div><ng-content /></div>
      <footer><ng-content select="[card-actions]" /></footer>
    </article>
  \`,
})
export class Card {}
\`\`\`

\`\`\`html
<app-card>
  <h2 card-title>Account</h2>
  <p>Profile details</p>
  <button card-actions>Save</button>
</app-card>
\`\`\`

## Common mistakes

- Putting \`ng-content\` inside \`@if\`; projected nodes are still created.
- Creating many fragile slot selectors.
- Expecting component-scoped styles to automatically style arbitrary projected content.
- Using projection when a typed input or \`TemplateRef\` would make the contract clearer.

## Trade-offs

- Projection is flexible and keeps semantic markup with the consumer.
- Inputs give stronger data contracts but less markup freedom.
- \`TemplateRef\` supports conditional or repeated rendering but is more complex.

## Likely follow-up questions

**Content projection versus an input?**  
Use projection when callers need to provide markup and behavior. Use inputs when the child should own rendering from structured data.

**Can \`ng-content\` be added dynamically?**  
No. Angular processes projection placeholders at compile time. Use template fragments or \`TemplateRef\` for dynamic rendering patterns.

---

# 20. View queries and content queries

## Interview-ready answer

> “A view query reads something created by the component’s own template. A content query reads something projected by the parent. Modern signal queries such as \`viewChild()\` and \`contentChildren()\` expose reactive results. I use queries for collaboration between UI pieces, not as a shortcut to tightly control child internals.”

## Clear explanation

Queries return component/directive instances, template references, or elements that match the query. View queries observe the component’s own view; content queries observe the projection boundary. Signal queries update as matching content changes.

## Practical example

\`\`\`ts
@Component({
  selector: 'app-tabs',
  template: \`<div role="tablist"><ng-content /></div>\`,
})
export class Tabs {
  tabs = contentChildren(Tab);
  selected = computed(() => this.tabs().find(tab => tab.active()));
}

@Component({
  template: \`<input #searchBox type="search" />\`,
})
export class SearchPage {
  searchBox = viewChild.required<ElementRef<HTMLInputElement>>('searchBox');
}
\`\`\`

## Common mistakes

- Confusing projected content with the component’s own view.
- Reading a required query before it is available.
- Using \`ElementRef.nativeElement\` for normal binding that belongs in the template.
- Calling many imperative methods on children and creating tight coupling.
- Keeping legacy \`QueryList\` subscriptions without cleanup.

## Trade-offs

- Queries are useful for compound components such as tabs and menus.
- Inputs/outputs are more explicit and testable for ordinary communication.
- Signal queries compose naturally with \`computed\`, but migration from decorator queries needs lifecycle review.

## Likely follow-up questions

**\`viewChild\` versus \`contentChild\`?**  
\`viewChild\` searches the component’s template. \`contentChild\` searches content supplied inside the component’s host element.

**When is a query result available?**  
Signal queries update as the view/content changes. Required queries throw if read when no match exists, so read them only when the rendering contract guarantees a result.

---

# 21. Lazy loading and deferrable views

## Interview-ready answer

> “I lazy-load route features with \`loadChildren\` or \`loadComponent\` so users do not download every feature at startup. Inside a page, I use \`@defer\` for heavy UI that is below the fold or triggered later. I choose boundaries from user journeys and bundle measurements, not simply one chunk per component.”

## Clear explanation

Lazy route APIs create chunks around navigation boundaries. \`@defer\` creates a chunk around a template dependency and loads it on triggers such as viewport, interaction, idle, or a condition. Placeholder, loading, and error blocks keep the experience understandable.

## Practical example

\`\`\`ts
export const routes: Routes = [
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.routes')
      .then(m => m.REPORTS_ROUTES),
  },
];
\`\`\`

\`\`\`html
@defer (on viewport) {
  <app-heavy-chart [data]="chartData()" />
} @placeholder {
  <div class="chart-skeleton" aria-hidden="true"></div>
} @loading (minimum 200ms) {
  <p>Loading chart…</p>
} @error {
  <p>Chart could not be loaded.</p>
}
\`\`\`

## Common mistakes

- Lazy-loading tiny pieces and creating too many network chunks.
- Putting shared code in a path that duplicates it across bundles.
- Missing loading, error, and retry UX.
- Deferring above-the-fold content and hurting LCP.
- Using \`@defer\` without testing SSR/hydration and accessibility behavior.

## Trade-offs

- Lazy loading improves initial load but adds later network latency.
- Prefetching improves future navigation but uses bandwidth that may not be needed.
- Larger chunks reduce request overhead; smaller chunks reduce unused code. Measure on realistic devices and networks.

## Likely follow-up questions

**Route lazy loading versus \`@defer\`?**  
Route lazy loading splits navigation features. \`@defer\` splits a section within a rendered page.

**What would you preload?**  
Likely next routes or critical post-login features, based on product analytics and network conditions—not every lazy route automatically.

---

# 22. SSR, prerendering, and hydration

## Interview-ready answer

> “Server-side rendering sends useful HTML for the first request, which can improve first content and discoverability. Hydration reuses that server DOM on the client instead of destroying and rebuilding it. I keep server and browser output deterministic, avoid direct browser globals during server rendering, use transfer caching for suitable GET data, and test hydration mismatches and application stability.”

## Clear explanation

- **CSR:** browser creates the page after JavaScript loads.
- **SSR:** server renders per request.
- **Prerender/SSG:** HTML is generated at build time for known routes.
- **Hydration:** client Angular attaches behavior to existing server-rendered DOM.

SSR is not automatically the best choice for every authenticated enterprise screen. It adds server cost and rendering constraints. Public landing pages, product pages, and content routes often benefit more.

## Practical example

\`\`\`ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
};
\`\`\`

Browser-specific behavior:

\`\`\`ts
private platformId = inject(PLATFORM_ID);

readPreference() {
  return isPlatformBrowser(this.platformId)
    ? localStorage.getItem('density')
    : null;
}
\`\`\`

Prefer platform abstractions or render callbacks when possible instead of spreading browser checks everywhere.

## Common mistakes

- Accessing \`window\`, \`document\`, \`localStorage\`, or layout APIs during server rendering.
- Producing different HTML on server and client due to random values, time, locale, or data.
- Directly manipulating DOM before hydration.
- Using \`ngSkipHydration\` as a broad fix instead of finding the mismatch.
- Caching personalized server HTML across users.
- Starting never-ending tasks that prevent server stability.

## Trade-offs

- SSR can improve initial content and SEO, but adds infrastructure, server load, and debugging complexity.
- Hydration prevents flicker and DOM recreation, but requires deterministic markup.
- Prerendering is fast and cheap at runtime, but only fits routes/data known at build time or acceptable regeneration intervals.

## Likely follow-up questions

**What causes a hydration mismatch?**  
Different server/client DOM: invalid HTML correction, browser-only conditions, random IDs, locale/time differences, or direct DOM manipulation.

**What is event replay?**  
It captures supported user events that occur before hydration finishes and replays them after the page becomes interactive.

---

# 23. Testing

## Interview-ready answer

> “I test behavior at the cheapest reliable level. Pure functions and stores get focused unit tests; components get DOM tests for inputs, outputs, accessibility, and user interaction; HTTP services use the Angular HTTP testing backend; routing is tested with the router testing harness; and a small number of end-to-end tests cover critical journeys. New Angular CLI projects use Vitest, while older projects may still use Karma or Jest.”

## Clear explanation

A practical test pyramid:

- Many fast tests for functions, validators, pipes, services, and state transitions.
- Component integration tests for rendered behavior.
- Fewer end-to-end tests for login, checkout, permissions, and critical workflows.

Avoid tests that repeat Angular’s own behavior or depend on private fields.

## Practical example

\`\`\`ts
describe('Counter', () => {
  it('increments when the button is clicked', async () => {
    const fixture = TestBed.createComponent(Counter);
    await fixture.whenStable();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    await fixture.whenStable();

    expect(button.textContent).toContain('1');
  });
});
\`\`\`

HTTP test idea:

\`\`\`ts
const req = httpTesting.expectOne('/api/users/42');
expect(req.request.method).toBe('GET');
req.flush({ id: '42', name: 'Sam' });
httpTesting.verify();
\`\`\`

## Common mistakes

- Testing private methods instead of visible behavior.
- Over-mocking until the test no longer resembles the application.
- Using real timers or network calls in unit tests.
- Calling \`detectChanges()\` many times without understanding stabilization.
- Only writing happy-path tests.
- Ignoring keyboard, focus, RTL, and accessibility in component tests.

## Trade-offs

- Isolated tests are fast and clear but miss template/integration problems.
- Component tests give confidence at moderate cost.
- E2E tests give realistic confidence but are slower and can be flaky if selectors and data are unstable.

## Likely follow-up questions

**What do you mock?**  
External boundaries or expensive nondeterminism: network, clock, storage, analytics, and sometimes child systems. I prefer real simple collaborators.

**How do you test OnPush or zoneless code?**  
Update state through the public API or user event and wait for Angular stabilization. A test that needs arbitrary manual change detection can reveal a missing reactive notification.

**How do you test accessibility?**  
Check semantic roles/names, keyboard behavior, focus movement, error associations, and automated rules, then include manual screen-reader testing for important flows.

---

# 24. Accessibility, responsive design, and RTL/LTR

## Interview-ready answer

> “I start with semantic HTML because it gives keyboard and screen-reader behavior for free. I make every interaction keyboard-accessible, preserve visible focus, connect labels and errors, and manage focus for dialogs and route changes. I use ARIA only when native HTML is not enough. For RTL, I use CSS logical properties, test direction changes, and avoid assuming that visual left and right mean previous and next.”

## Clear explanation

Core checks:

- Correct heading and landmark structure.
- Accessible names for controls.
- Keyboard access and logical focus order.
- Visible focus and sufficient contrast.
- Errors connected with \`aria-describedby\` and announced when appropriate.
- Motion respects user preferences.
- Zoom/reflow and touch target size.
- Direction-aware icons, layout, and text.

## Practical example

\`\`\`html
<button type="button"
        [attr.aria-expanded]="menuOpen()"
        aria-controls="account-menu"
        (click)="menuOpen.update(v => !v)">
  Account
</button>

@if (menuOpen()) {
  <nav id="account-menu" aria-label="Account options">...</nav>
}
\`\`\`

\`\`\`css
.panel {
  margin-inline: 1rem;
  padding-inline-start: 1.5rem;
  border-inline-start: 4px solid var(--accent);
}
\`\`\`

## Common mistakes

- Using clickable \`<div>\` elements instead of buttons or links.
- Removing focus outlines without a replacement.
- Adding ARIA that conflicts with native semantics.
- Using placeholder text as the only label.
- Reversing every icon in RTL; some icons such as play or check do not mirror.
- Testing only with a mouse and one screen width.

## Trade-offs

- A custom control may match a design exactly but requires significant keyboard and screen-reader engineering.
- Native controls have strong behavior but limited styling in some cases.
- Live regions help announce updates, but too many announcements overwhelm users.

## Likely follow-up questions

**How do you make a dialog accessible?**  
Give it a label, trap focus while open, move focus into it, support Escape where appropriate, hide/inert the background, and restore focus to the trigger when closed.

**How do you validate RTL?**  
Run component stories and key journeys in both directions, use logical CSS, inspect mixed-direction text, and verify keyboard order and directional icons.

---

# 25. Security

## Interview-ready answer

> “Angular treats template-bound values as untrusted and sanitizes relevant contexts, but Angular does not make an application secure by itself. I avoid dynamic template construction and direct DOM injection, audit every \`bypassSecurityTrust...\` call, use AOT, CSP and Trusted Types where possible, and enforce authentication, authorization, validation, and output encoding on the server. Route guards only improve client UX.”

## Clear explanation

Main frontend risks:

- XSS from unsafe HTML, URLs, DOM APIs, or third-party libraries.
- CSRF when cookie authentication is used without correct server/client protection.
- Token leakage through storage, logs, URLs, or third-party requests.
- Supply-chain vulnerabilities.
- Exposing secrets in browser bundles.
- SSR request/header trust mistakes.

Angular sanitizes bindings by security context, but values explicitly marked trusted bypass that protection.

## Practical example

\`\`\`html
<!-- Angular sanitizes HTML in this binding -->
<section [innerHTML]="articleHtml"></section>
\`\`\`

For rich user content, also sanitize with a well-reviewed policy at the server/content boundary. Do not call \`bypassSecurityTrustHtml\` merely to remove an Angular warning.

## Common mistakes

- Storing a secret API key in \`environment.ts\`.
- Treating client-side role checks as authorization.
- Using \`bypassSecurityTrustHtml\` on user content.
- Rendering user-built Angular templates.
- Logging access tokens or personal data.
- Adding authorization headers to every URL.
- Trusting forwarded SSR headers without a trusted proxy configuration.

## Trade-offs

- Strong CSP and Trusted Types greatly reduce DOM XSS risk, but third-party scripts and legacy code may need migration.
- Cookie auth can reduce JavaScript token exposure but needs CSRF protection and correct SameSite settings.
- Runtime validation improves boundary safety but adds code and maintenance.

## Likely follow-up questions

**How does Angular prevent XSS?**  
It treats template values as untrusted and escapes or sanitizes based on context. Templates themselves are trusted executable code, so never build templates from user input.

**Is localStorage safe for tokens?**  
Any JavaScript running on the origin can read it, so XSS can steal the token. The auth design should consider threat model, backend capabilities, cookie controls, token lifetime, and CSP—not only convenience.

---

# 26. Performance

## Interview-ready answer

> “I measure before optimizing. For slow initial load, I inspect bundle composition, lazy-load routes, defer non-critical UI, optimize images and fonts, and consider SSR or prerendering. For slow interaction, I profile the main thread and Angular change detection, remove heavy template work, use stable list tracking, signals or OnPush where useful, and virtualize large lists. I confirm the result with real-user and lab metrics.”

## Clear explanation

Performance areas:

- **Network:** bundle size, chunks, caching, compression, API waterfalls.
- **Rendering:** LCP, layout shift, image dimensions, hydration.
- **Runtime:** long tasks, repeated calculations, change detection, memory leaks.
- **Data:** over-fetching, duplicate requests, large DOM/list size.
- **User perception:** skeletons, optimistic UI, progress, prioritization.

Useful Angular tools include \`@defer\`, route lazy loading, \`NgOptimizedImage\`, zoneless change detection, signals, OnPush, and server rendering where appropriate.

## Practical example

\`\`\`html
<img ngSrc="/assets/hero.webp"
     width="1200" height="600"
     priority
     alt="Team reviewing a dashboard" />

@for (row of visibleRows(); track row.id) {
  <app-row [row]="row" />
}
\`\`\`

## Common mistakes

- Optimizing without a trace, metric, or user impact.
- Lazy-loading everything and creating request waterfalls.
- Using memoization for cheap calculations.
- Keeping thousands of DOM nodes instead of virtualizing.
- Forgetting image dimensions and causing layout shift.
- Measuring only on a fast developer laptop.
- Using index tracking for a changing list.

## Trade-offs

- Caching improves latency but creates invalidation and memory concerns.
- Virtualization handles large lists but complicates variable height, focus, print, and screen-reader behavior.
- SSR can improve first content but costs server resources and complexity.
- Optimistic updates feel fast but require rollback and conflict handling.

## Likely follow-up questions

**How would you diagnose a slow page?**  
Reproduce on a realistic device/network, capture a performance trace, separate network from scripting/rendering, inspect Angular and browser flame charts, form a hypothesis, change one thing, and compare before/after metrics.

**Which metrics matter?**  
Core Web Vitals for public experience, plus product-specific measures such as route-ready time, input response, task completion time, API latency, error rate, and memory growth.

---

# 27. Migration and legacy Angular

## Interview-ready answer

> “I migrate Angular incrementally. First I upgrade supported versions, make the build and tests reliable, and establish performance and error baselines. Then I use official schematics for standalone components, built-in control flow, signal inputs, \`inject\`, and lazy routes where they add value. I keep behavior changes separate from mechanical migration, use feature flags for risky flows, and remove old patterns only after production evidence is stable.”

## Clear explanation

Legacy patterns you may encounter:

- NgModule bootstrapping and feature modules.
- \`*ngIf\`, \`*ngFor\`, and \`*ngSwitch\`.
- decorator \`@Input\`, \`@Output\`, \`@ViewChild\`, and \`@ContentChild\`.
- class-based guards and interceptors.
- constructor injection.
- ZoneJS-dependent plain-field updates.
- Karma/Jasmine test suites.
- RxJS subscription cleanup with a manual \`destroy$\` subject.
- View Engine-era library or dynamic-component patterns.

These are not all “bad.” The question is whether migration improves maintainability, performance, safety, or developer speed enough to justify the risk.

## Practical migration sequence

\`\`\`text
1. Inventory versions, libraries, build plugins, tests, and browser support.
2. Upgrade one supported Angular major at a time with \`ng update\`.
3. Fix deprecated APIs and third-party incompatibilities.
4. Stabilize tests, telemetry, and performance budgets.
5. Convert leaf features to standalone.
6. Adopt built-in control flow and lazy routes mechanically.
7. Introduce signals at clear state boundaries; do not mix models randomly.
8. Make components zoneless-compatible and test third-party integrations.
9. Remove ZoneJS only when the application is ready.
10. Clean obsolete adapters after production validation.
\`\`\`

## Common mistakes

- Combining framework upgrade, redesign, state rewrite, and test migration in one release.
- Migrating only syntax without understanding provider scope or behavior.
- Replacing working RxJS pipelines with signals just because signals are newer.
- Removing ZoneJS before external callbacks and form behavior are ready.
- Upgrading without checking library peer dependencies and maintenance status.
- Letting two patterns coexist indefinitely with no migration rule.

## Trade-offs

- A big-bang rewrite offers a clean target but has high delivery and parity risk.
- Incremental migration keeps shipping and allows rollback, but temporarily creates mixed patterns.
- Keeping legacy code avoids immediate risk, but dependency and hiring costs grow over time.

## Likely follow-up questions

**Would you rewrite a large Angular app?**  
Usually no. I would isolate high-change areas, migrate routes or vertical slices, and measure. A rewrite is justified only when the existing architecture blocks business goals and incremental paths have been tested and rejected.

**How do you migrate from NgModules to standalone?**  
Start with leaf declarations, use the official standalone schematic, move providers carefully to application/route/component scope, convert bootstrap last, and test lazy boundaries and singleton behavior.

---

# Senior architecture scenarios

## Scenario 1: Design a large multi-team enterprise frontend

**Strong answer**

> “I would split by business domains with clear ownership and public APIs. The shell owns global navigation, authentication integration, error handling, and top-level routing. Each domain owns its routes, data access, state, and pages. A governed design system owns accessible primitives, tokens, themes, RTL behavior, and documentation. I would enforce dependency directions in tooling and use route-level lazy loading. I would start as a modular monolith unless independent deployment is a proven need.”

Discuss:

- Release ownership and dependency rules.
- Shared contract versioning.
- Observability and error boundaries.
- Feature flags and rollback.
- Why micro-frontends add duplicated runtime, consistency, routing, and operational costs.

## Scenario 2: A dashboard is slow after adding many widgets

**Strong answer**

> “I would capture a trace before changing code. I would check bundle waterfalls, duplicate API calls, long tasks, widget rendering, list size, and change-detection frequency. Then I might defer below-the-fold widgets, batch or cache data, virtualize large tables, move heavy calculations out of templates, and use signals or OnPush for clear update boundaries. I would compare LCP, interaction latency, memory, and widget-ready time before and after.”

Avoid saying: “I would add OnPush everywhere.” That is a possible tool, not a diagnosis.

## Scenario 3: Shared component library must support brands, RTL, and accessibility

**Strong answer**

> “I would build on semantic HTML and accessible interaction patterns, expose design tokens through CSS custom properties, and use logical CSS properties for direction. Components would have small typed APIs and composition slots. We would test keyboard, screen readers, high contrast, zoom, RTL/LTR, themes, and supported browsers in CI and manual release checks. Breaking changes would follow a versioned migration path.”

Discuss escape hatches carefully: too few block product teams; too many destroy consistency.

## Scenario 4: Authentication and token refresh

**Strong answer**

> “The backend remains the authority. The frontend auth service exposes session state, guards improve navigation UX, and an interceptor adds credentials only to trusted API origins. Refresh is single-flight so concurrent 401 responses do not create several refresh requests. Waiting requests resume once with the new credential; refresh failure clears session state and redirects safely. I avoid logging credentials and review XSS, CSRF, cookie, CSP, and token-lifetime trade-offs with the backend team.”

## Scenario 5: Complex offline-capable workflow

**Strong answer**

> “I would separate server state, local drafts, and sync status. Commands get stable client IDs and an outbox. The UI can update optimistically, but each operation needs pending, failed, conflict, and retry states. Sync must be idempotent. Conflict policy depends on the domain: last-write-wins may be unacceptable for financial or regulated data. I would make offline limitations visible and monitor queue age and failure rate.”

## Scenario 6: Migrate an Angular 14 enterprise app

**Strong answer**

> “I would inventory dependencies and production risks, upgrade supported majors step by step with official migrations, and keep each change deployable. I would stabilize tests and telemetry before architectural changes. Then I would migrate low-risk features to standalone and built-in control flow, improve lazy boundaries, introduce signals only where they simplify state, and prepare for zoneless behavior. I would not mix a framework upgrade with a full design-system and state rewrite.”

## Scenario 7: Signals or RxJS for a search page

**Strong answer**

> “I would keep the input and view state as signals if that is natural, but use RxJS for the debounced cancellable request pipeline. \`toObservable(query)\` plus \`debounceTime\`, \`distinctUntilChanged\`, and \`switchMap\` expresses time and cancellation clearly. I can expose the result back as a signal with \`toSignal\` or a resource. I choose each tool for its strength rather than forcing one reactive model everywhere.”

## Scenario 8: Production-only memory leak

**Strong answer**

> “I would reproduce a repeated navigation or interaction path and compare heap snapshots. I would look for retained components, subscriptions, event listeners, timers, observers, overlays, and caches. Angular-managed template subscriptions are normally safe, while manual integrations need cleanup. I would fix ownership with \`takeUntilDestroyed\`, \`DestroyRef\`, or explicit third-party teardown, then add a regression test or monitoring signal.”

## Scenario 9: SSR page has hydration errors

**Strong answer**

> “I would inspect the first mismatch and compare server HTML with the client’s expected DOM. Common causes are invalid HTML, random or time-based values, locale differences, browser-only conditions, and direct DOM changes. I would make rendering deterministic and delay imperative DOM work until after rendering. I would use skip-hydration only as a narrow temporary boundary for a third-party widget.”

## Scenario 10: State library decision

**Strong answer**

> “I would list the actual problems: number of writers, cross-route lifetime, async workflows, entity volume, debugging needs, team size, and audit requirements. Local signals or a feature service may be enough. A formal store is valuable when consistent events, effects, selectors, entity tools, and devtools reduce team risk. I would test the decision on one representative feature and define conventions before broad adoption.”

---

# Rapid-review cheat sheet

## Say these in one sentence

| Topic | Fast answer |
|---|---|
| Standalone | Components import their own template dependencies; prefer standalone and \`bootstrapApplication\` for new code. |
| Signal | A synchronous reactive value read by calling it; use \`computed\` for derived state. |
| Observable | A lazy, cancellable stream of zero to many values. |
| Promise | One eager future result; good for simple sequential async flow. |
| OnPush | Skips a subtree without relevant notifications; works best with immutable inputs and reactive state. |
| Zoneless | Angular refreshes from explicit notifications instead of ZoneJS-patched async tasks. |
| DI | Classes request dependencies by tokens; provider location controls scope and lifetime. |
| Guard | Controls navigation UX; never replaces server authorization. |
| Interceptor | Cross-cutting HTTP middleware; functional interceptors are preferred. |
| Resolver | Loads required data before route activation, at the cost of delayed navigation. |
| Projection | Parent supplies markup to a child’s \`ng-content\` slots. |
| View query | Finds something in the component’s own template. |
| Content query | Finds something projected by the parent. |
| SSR | Server creates initial HTML per request. |
| Hydration | Client reuses server-rendered DOM and attaches behavior. |
| \`@defer\` | Lazily loads a view fragment based on a trigger. |
| Pure pipe | Runs when primitive values or object references change; should be deterministic. |

## RxJS operator decision table

| Need | Operator | Memory phrase |
|---|---|---|
| Latest request wins | \`switchMap\` | Cancel old |
| Preserve order | \`concatMap\` | Queue |
| Parallel work | \`mergeMap\` | Merge |
| Ignore repeated submit | \`exhaustMap\` | Busy, ignore |
| Wait for all finite calls | \`forkJoin\` | Complete together |
| React to latest combined state | \`combineLatest\` | Latest of each |
| Avoid duplicate consecutive values | \`distinctUntilChanged\` | Same? skip |
| Cleanup with component | \`takeUntilDestroyed\` | Destroy-safe |

## Change-detection reminders

- Prefer reactive state over manual \`detectChanges()\`.
- Signals read in templates notify Angular when updated.
- \`AsyncPipe\` subscribes, cleans up, and marks for check.
- Immutable references make OnPush behavior clear.
- Stable \`track\` keys preserve list DOM and component state.
- Profile before optimizing.

## Security reminders

- Browser code contains no secrets.
- Client guards are not authorization.
- Never build templates from user input.
- Audit every sanitizer bypass.
- Restrict auth headers to trusted origins.
- Server validates every request.
- Use CSP and Trusted Types where possible.

## Accessibility reminders

- Native element first.
- Accessible name for every control.
- Keyboard and focus behavior.
- Labels and errors connected.
- Visible focus and sufficient contrast.
- Logical CSS and RTL tests.
- Automated checks plus manual assistive-technology testing.

## Performance reminders

- Measure user impact first.
- Split routes and defer non-critical UI.
- Optimize images and prevent layout shift.
- Avoid heavy template work.
- Virtualize very large lists.
- Watch duplicate requests and memory retention.
- Validate on realistic devices and networks.

---

# Practical 4-week study plan

Assume 60–90 minutes on weekdays and one 2–3 hour practice session each weekend.

## Week 1: Core Angular and spoken answers

**Day 1 — architecture and standalone**

- Read topics 1–2.
- Sketch one enterprise application you built as feature boundaries.
- Practice a 90-second architecture answer.
- Build a small standalone app shell with lazy routes.

**Day 2 — components, templates, binding**

- Read topics 3–4.
- Build a list with \`@if\`, \`@for\`, stable tracking, inputs, outputs, and \`model()\`.
- Explain property versus attribute binding aloud.

**Day 3 — directives, pipes, DI**

- Read topics 5–7.
- Create one directive, one pure pipe, and one \`InjectionToken\`.
- Practice provider-scope examples: root, route, component.

**Day 4 — signals**

- Read topic 8.
- Build a cart store with private state, read-only signals, and computed totals.
- Explain why an effect is not derived state.

**Day 5 — review**

- Answer every follow-up from topics 1–8 without notes.
- Record yourself. Remove long introductions and jargon.
- Prepare two real stories: reusable component and production debugging.

**Weekend practical**

Build a product list with filters in the URL, a signal-based view model, an accessible empty/loading/error state, and a reusable card.

## Week 2: Async work and application flow

**Day 6 — RxJS**

- Read topic 9.
- Implement a typeahead using \`switchMap\`.
- Write one example each for \`concatMap\`, \`mergeMap\`, and \`exhaustMap\`.

**Day 7 — Promises and lifecycle**

- Read topics 10–11.
- Explain Promise versus Observable in 45 seconds.
- Integrate a small imperative widget with render timing and cleanup.

**Day 8 — forms**

- Read topic 12.
- Build a typed reactive form with cross-field and server errors.
- Test keyboard, labels, error association, submit state, and focus on the first error.

**Day 9 — routing**

- Read topic 13.
- Add lazy routes, an auth guard, and unsaved-changes guard.
- Explain why guards are not security.

**Day 10 — HTTP**

- Read topic 14.
- Add a functional interceptor and API/DTO mapping layer.
- Explain safe refresh-token concurrency on a whiteboard.

**Weekend practical**

Build an order-edit route with a typed form, resolver or loading-state decision, API errors, cancel-safe reads, ordered writes, and route protection.

## Week 3: Rendering, state, SSR, and quality

**Day 11 — change detection, OnPush, zoneless**

- Read topics 15–17.
- Find one plain async field update and make it zoneless-friendly.
- Explain \`markForCheck\` versus \`detectChanges\`.

**Day 12 — state management**

- Read topic 18.
- Decide which state belongs in component, URL, feature store, and server cache.
- Compare signal service versus formal store for one real project.

**Day 13 — projection and queries**

- Read topics 19–20.
- Build accessible tabs or a card with slots.
- Explain view versus content in one minute.

**Day 14 — lazy loading, SSR, hydration**

- Read topics 21–22.
- Add \`@defer\` with all UI states.
- List five sources of hydration mismatch.

**Day 15 — testing**

- Read topic 23.
- Test a store, component interaction, HTTP service, and route.
- Review tests for implementation coupling and unnecessary mocks.

**Weekend practical**

Profile the application. Produce a short report with the trace, hypothesis, change, and before/after result. Add one accessibility test and one failure-path test.

## Week 4: Senior interview practice

**Day 16 — accessibility and RTL**

- Read topic 24.
- Test a complete flow by keyboard in LTR and RTL.
- Prepare one story about accessibility or design-system quality.

**Day 17 — security**

- Read topic 25.
- Threat-model login, rich text, API tokens, and an admin route.
- Practice explaining XSS, CSRF, guards, and sanitizer bypasses.

**Day 18 — performance**

- Read topic 26.
- Prepare a production performance story with numbers.
- Practice diagnosing rather than naming random optimizations.

**Day 19 — migration**

- Read topic 27.
- Create an incremental migration plan for an Angular 14 application.
- Explain what you would not migrate and why.

**Day 20 — scenario rehearsal**

- Answer all 10 senior scenarios.
- Keep each initial answer under two minutes.
- Let the interviewer pull detail through follow-ups.

**Final weekend mock interview**

1. 10 minutes: introduction and project overview.
2. 30 minutes: Angular fundamentals and code reading.
3. 30 minutes: architecture scenario.
4. 20 minutes: debugging/performance scenario.
5. 10 minutes: your questions for the interviewer.

Afterward, classify every weak answer:

- I did not know the fact.
- I knew it but could not explain it simply.
- I gave no trade-off.
- I gave no real example.
- I did not ask enough clarifying questions.

Fix the category, not just the individual question.

---

# Interview story bank template

Prepare six stories from your own experience:

1. A reusable component or design-system decision.
2. A difficult production bug.
3. A measurable performance improvement.
4. A migration or legacy modernization.
5. A disagreement or trade-off with another engineer/team.
6. An accessibility, RTL, responsiveness, or internationalization challenge.

Use this compact structure:

\`\`\`text
Context: What product and constraint?
Problem: What was failing or at risk?
Options: What alternatives did you consider?
Decision: What did you choose, and why?
Trade-off: What did the choice cost?
Result: What changed? Use numbers when possible.
Learning: What would you change next time?
\`\`\`

Do not claim that you “improved performance.” Say what changed: initial JavaScript, LCP, interaction delay, rendering time, error rate, memory, or developer build time.

---

# Questions to ask the interviewer

- How is the Angular application divided into business features and teams?
- Which Angular version and rendering model are in production? Is zoneless adoption planned or complete?
- How do you decide between signals, RxJS, and a state library?
- What are the biggest current performance or reliability problems?
- How are accessibility, RTL, and design-system quality tested?
- What does the test pyramid look like, and which tests are trusted most?
- How often do you release, and how do you use feature flags and rollback?
- Which legacy areas create the most delivery risk?
- How are frontend architecture decisions documented and enforced?
- What would success in the first three months look like?

---

# Current-practice references

These official Angular pages support the modern baseline used in this guide:

- [Components and standalone defaults](https://angular.dev/guide/components)
- [Templates and built-in template features](https://angular.dev/guide/templates)
- [Signals](https://angular.dev/guide/signals)
- [RxJS interop with signals](https://angular.dev/guide/signals/rxjs-interop)
- [Automatic RxJS cleanup with \`takeUntilDestroyed\`](https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed)
- [Dependency providers and injector scope](https://angular.dev/guide/di/dependency-injection-providers)
- [Forms overview](https://angular.dev/guide/forms)
- [Signal Forms comparison](https://angular.dev/guide/forms/signals/comparison)
- [Route guards and their security limitation](https://angular.dev/guide/routing/route-guards)
- [Functional HTTP interceptors](https://angular.dev/guide/http/interceptors)
- [Zoneless Angular](https://angular.dev/guide/zoneless)
- [Content projection](https://angular.dev/guide/components/content-projection)
- [Hydration](https://angular.dev/guide/hydration)
- [Testing with Vitest](https://angular.dev/guide/testing)
- [Security](https://angular.dev/best-practices/security)
- [Performance](https://angular.dev/best-practices/performance)
- [Official migrations](https://angular.dev/reference/migrations)
- [NgModules for legacy code](https://angular.dev/guide/ngmodules/overview)

Last reviewed against the official Angular documentation: 30 October 2026.
`,format:`markdown`},{id:`vue`,label:`Vue 3`,short:`Vu`,color:`#42d392`,description:`Reactivity, Composition API, Pinia and scalable Vue systems.`,source:`# Senior Vue 3 Interview Preparation Guide

**Profile:** Frontend developer with 6+ years of experience and strong enterprise Vue experience  
**Goal:** Give clear, natural answers that sound like real engineering experience—not memorized definitions.

---

## How to use this guide

For most questions, answer in this order:

1. Give the direct answer in one or two sentences.
2. Explain the reason or mental model.
3. Add a real production example.
4. Mention one trade-off, risk, or edge case.

A useful senior-level phrase is:

> “The choice depends on ownership, update frequency, and how widely the state is shared.”

Do not try to recite every detail. Start short, then let the interviewer ask for depth.

## Topic map

- **Core Vue:** reactivity, refs, reactive objects, computed values, watchers, Composition API, and lifecycle
- **Component APIs:** components, props, emits, slots, provide/inject, composables, directives, and forms
- **Application development:** routing, Pinia, async components, Suspense, Teleport, rendering, and \`nextTick\`
- **Production engineering:** SSR, hydration, TypeScript, testing, accessibility, security, errors, and debugging
- **Enterprise design:** large-app architecture, themes, design tokens, responsive UI, RTL/LTR, and large tables
- **Interview practice:** six system-design scenarios, rapid review, a 14-day plan, and a mock question bank

---

# 1. Reactivity in Vue 3

## Interview-ready answer

“Vue 3 uses proxies to track reactive reads and writes. When a component renders, Vue records the reactive values it reads. If one of those values changes later, Vue schedules the affected component to render again. Updates are batched, so several synchronous changes normally cause one DOM update.”

## Easy explanation

Vue builds a dependency relationship between state and the code that uses it. A render, computed value, or watcher becomes an effect. Reading reactive state tracks the effect; writing that state triggers it.

Vue 3 can observe property addition and deletion because \`reactive()\` uses \`Proxy\`. A \`ref\` uses a wrapper with a reactive \`.value\` property.

## Example

\`\`\`vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const quantity = ref(1)
const unitPrice = ref(25)
const total = computed(() => quantity.value * unitPrice.value)
<\/script>

<template>
  <button @click="quantity++">Add item</button>
  <p>Total: {{ total }}</p>
</template>
\`\`\`

Refs are automatically unwrapped in templates, so the template uses \`quantity\`, not \`quantity.value\`.

## Common mistakes

- Expecting a plain variable to update the UI.
- Destructuring a reactive object and losing reactivity.
- Mutating state during rendering or inside a computed getter.
- Creating watchers for values that should be computed.
- Assuming the DOM updates immediately after every assignment.

## Trade-offs

Deep reactive objects are convenient, but large or third-party objects may create unnecessary proxy work. For external class instances, immutable structures, or very large data, consider \`shallowRef\`, \`shallowReactive\`, or \`markRaw\`.

## Likely follow-ups

- How does Vue track dependencies?
- Why are updates batched?
- What is the difference between \`ref\`, \`reactive\`, and \`shallowRef\`?
- How do you keep destructured properties reactive?
- When would you use \`toRaw\` or \`markRaw\`?

---

# 2. \`ref\` vs \`reactive\`

## Interview-ready answer

“I normally use \`ref\` as the default because it works with primitives and objects and stays clear when values are passed around. I use \`reactive\` when several related fields form one state object. The important detail is that replacing a reactive object can break references, while assigning to \`ref.value\` is safe.”

## Easy explanation

- \`ref(value)\` returns an object with \`.value\` in JavaScript.
- \`reactive(object)\` returns a proxy and only works with objects, arrays, maps, and sets.
- Templates unwrap refs automatically.
- A reactive object's nested properties are reactive by default.

## Example

\`\`\`ts
import { reactive, ref, toRefs } from 'vue'

const loading = ref(false)

const filters = reactive({
  search: '',
  status: 'active',
  page: 1,
})

// Keep reactivity when exposing individual fields.
const { search, status, page } = toRefs(filters)
\`\`\`

For API replacement:

\`\`\`ts
const customer = ref<Customer | null>(null)
customer.value = await fetchCustomer()
\`\`\`

## Common mistakes

- Writing \`const { search } = reactiveObject\` and expecting \`search\` to stay reactive.
- Replacing a reactive variable: \`state = newState\`.
- Forgetting \`.value\` in script code.
- Using one huge reactive object for unrelated state.

## Trade-offs

\`ref\` is explicit and composable but adds \`.value\` in scripts. \`reactive\` looks natural for forms and grouped state but has identity and destructuring limitations. Consistency within a codebase often matters more than a small syntax preference.

## Likely follow-ups

- What do \`toRef\` and \`toRefs\` do?
- Does a ref containing an object make that object reactive?
- When would you use \`shallowRef\`?
- Why can destructuring lose reactivity?

---

# 3. \`computed\` vs \`watch\` vs \`watchEffect\`

## Interview-ready answer

“I use \`computed\` for derived state, \`watch\` for a side effect tied to explicit sources, and \`watchEffect\` when the effect should automatically track everything it reads. A computed getter should stay pure. If I am calling an API, writing storage, or integrating with a non-Vue system, a watcher may be appropriate.”

## Easy explanation

- \`computed\`: returns cached derived data and reevaluates only when a dependency changes.
- \`watch\`: observes named sources and provides new/old values plus cleanup.
- \`watchEffect\`: runs immediately and automatically tracks synchronous reactive reads.

## Example

\`\`\`ts
const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`)

watch(
  () => filters.search,
  async (search, _oldSearch, onCleanup) => {
    const controller = new AbortController()
    onCleanup(() => controller.abort())

    results.value = await searchCustomers(search, controller.signal)
  },
  { flush: 'post' },
)
\`\`\`

The cleanup prevents an older request from winning a race.

## Common mistakes

- Using a watcher to copy one piece of state into another.
- Performing mutations or network calls inside computed getters.
- Deep-watching a large table or store.
- Creating a watcher asynchronously and forgetting to stop it.
- Expecting dependencies read after an \`await\` in \`watchEffect\` to be tracked.

## Trade-offs

\`watch\` is explicit and easier to reason about. \`watchEffect\` is concise but can hide dependencies. Deep watchers are convenient, but traversal can be expensive. Prefer narrow sources.

## Likely follow-ups

- What does \`immediate\` do?
- What are \`flush: 'pre'\`, \`'post'\`, and \`'sync'\`?
- How do you cancel stale asynchronous work?
- Are computed values lazy and cached?

---

# 4. Composition API vs Options API

## Interview-ready answer

“Both APIs use the same Vue reactivity system and both are valid. For large enterprise features, I prefer Composition API because I can group code by business concern and extract typed composables. Options API is approachable and works well for smaller components or teams that prefer its fixed structure.”

## Easy explanation

Options API groups code by option: \`data\`, \`computed\`, \`methods\`, and hooks. Composition API groups code by feature: table selection, permissions, filters, and data loading can each live together.

\`<script setup>\` reduces boilerplate and usually gives better TypeScript inference.

## Example

\`\`\`ts
// useTableSelection.ts
export function useTableSelection() {
  const selectedIds = ref(new Set<string>())
  const isSelected = (id: string) => selectedIds.value.has(id)
  const clear = () => selectedIds.value = new Set()
  return { selectedIds, isSelected, clear }
}
\`\`\`

## Common mistakes

- Moving everything into one very large \`setup()\` function.
- Treating composables as global stores.
- Calling composables outside component setup when they depend on component lifecycle.
- Mixing APIs without a clear reason.

## Trade-offs

Composition API improves reuse and typing but allows inconsistent structure if the team has no conventions. Options API is predictable but can scatter one feature across several options.

## Likely follow-ups

- What is \`<script setup>\` compiled into?
- Can both APIs be used together?
- What makes a good composable?
- How do you organize a large setup function?

---

# 5. Components and component design

## Interview-ready answer

“I design components around clear ownership and stable public APIs. A reusable component should own presentation and local interaction state, accept data and configuration through props, and report meaningful events. I avoid components that know too much about a specific page or global store.”

## Easy explanation

Good component boundaries follow reasons to change. A base button changes with the design system. A customer table changes with the customer feature. A page coordinates data and business workflows.

## Example

\`\`\`vue
<DataTable
  :rows="customers"
  :columns="columns"
  :loading="loading"
  row-key="id"
  @sort-change="updateSort"
  @row-activate="openCustomer"
>
  <template #cell-status="{ row }">
    <StatusBadge :status="row.status" />
  </template>
</DataTable>
\`\`\`

The table owns rendering, keyboard behavior, and interaction mechanics; the page owns customer-specific behavior.

## Common mistakes

- Building a “universal” component with dozens of boolean props.
- Coupling reusable components directly to route or store state.
- Mutating parent-owned data.
- Splitting every few lines into a component without a meaningful boundary.
- Using index as a list key when item identity exists.

## Trade-offs

Highly generic components can become complex and hard to use. Feature-specific components duplicate some code but often provide clearer APIs. Start with real use cases and generalize only stable patterns.

## Likely follow-ups

- How do you decide component boundaries?
- Smart vs presentational components—is that still useful?
- How do you design an enterprise data table?
- How do you expose controlled and uncontrolled behavior?

---

# 6. Props and emits

## Interview-ready answer

“Props are a component's input and should be treated as read-only. Emits are its output. I type and validate both, use domain-level event names, and avoid emitting implementation details. For object props, I remember that nested mutation is technically possible but usually breaks ownership.”

## Easy explanation

Data normally flows down through props; events flow up. This makes ownership visible and debugging easier.

## Example

\`\`\`vue
<script setup lang="ts">
type User = { id: string; name: string }

const props = withDefaults(defineProps<{
  user: User
  disabled?: boolean
}>(), {
  disabled: false,
})

const emit = defineEmits<{
  save: [user: User]
  cancel: []
}>()

function submit() {
  emit('save', { ...props.user })
}
<\/script>
\`\`\`

## Common mistakes

- Mutating a prop directly.
- Using a shared object/array default in older runtime declaration styles.
- Emitting vague events such as \`change\` with unclear payloads.
- Passing many layers of props when the data belongs in a scoped store or provider.
- Treating emits as DOM events that automatically bubble through components—they do not.

## Trade-offs

Explicit props and emits make dependencies clear, but deep trees can create prop drilling. Provide/inject or a store can help when state genuinely belongs to a subtree or application—not simply to avoid writing props.

## Likely follow-ups

- Why are nested object props still mutable?
- How do you validate props at runtime?
- Do component events bubble?
- How would you support multiple \`v-model\` bindings?

---

# 7. Slots

## Interview-ready answer

“Slots let the parent supply structure while the child owns layout or behavior. I use named slots for clear extension points and scoped slots when the child needs to expose data such as a row or validation state. Slots are often better than adding many render-related props.”

## Easy explanation

Props pass data; slots pass template content. Scoped slots are child-to-parent data exposure for rendering—not general state communication.

## Example

\`\`\`vue
<!-- BaseCard.vue -->
<article class="card">
  <header><slot name="title" /></header>
  <section><slot /></section>
  <footer v-if="$slots.actions"><slot name="actions" /></footer>
</article>
\`\`\`

\`\`\`vue
<BaseCard>
  <template #title>Account</template>
  <p>{{ user.email }}</p>
  <template #actions><Button>Edit</Button></template>
</BaseCard>
\`\`\`

## Common mistakes

- Using unnamed slots when several extension points exist.
- Making slot props unstable or undocumented.
- Using slots for business logic instead of presentation customization.
- Forgetting accessible structure when consumers replace content.

## Trade-offs

Slots offer flexibility but reduce how much the child controls its DOM, styling, and accessibility. A design-system component should expose focused extension points rather than its entire structure.

## Likely follow-ups

- What is a scoped slot?
- Are slots rendered in parent or child scope?
- When would you use a slot instead of a prop?
- How do slots affect performance?

---

# 8. Provide and inject

## Interview-ready answer

“Provide/inject is useful for dependencies shared by a component subtree, such as a form context, table context, locale, or design-system configuration. I use typed symbol keys and usually provide readonly state plus explicit actions. I do not use it as an invisible replacement for all props or a global store.”

## Easy explanation

An ancestor provides a value and any descendant can inject it without every intermediate component forwarding a prop.

## Example

\`\`\`ts
import type { InjectionKey, Ref } from 'vue'

type ThemeContext = {
  direction: Readonly<Ref<'ltr' | 'rtl'>>
  setDirection: (value: 'ltr' | 'rtl') => void
}

export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')

// Parent
provide(themeKey, { direction: readonly(direction), setDirection })

// Descendant
const theme = inject(themeKey)
if (!theme) throw new Error('Theme provider is missing')
\`\`\`

## Common mistakes

- Using string keys that can collide.
- Providing a non-reactive primitive and expecting updates.
- Allowing descendants to mutate shared state freely.
- Hiding critical feature dependencies.
- Forgetting a default or a clear missing-provider error.

## Trade-offs

It removes prop drilling but makes dependencies less visible at the component call site. Pinia is better for application-wide domain state, devtools, and independent consumers.

## Likely follow-ups

- Is provided data reactive?
- How do you type injection keys?
- Provide/inject vs Pinia?
- How do you test a component that injects a dependency?

---

# 9. Composables

## Interview-ready answer

“A composable packages reactive state and behavior around one concern. I keep its API small, make ownership and cleanup clear, and accept refs or getters when inputs may change. A composable is not automatically a singleton; state created inside it is normally new for each call.”

## Easy explanation

Composables reuse logic, not markup. Examples include pagination, permissions, fetch state, media queries, and keyboard navigation.

## Example

\`\`\`ts
import { onScopeDispose, toValue, watch, type MaybeRefOrGetter } from 'vue'

export function useCustomer(id: MaybeRefOrGetter<string>) {
  const customer = ref<Customer | null>(null)
  const error = ref<unknown>(null)

  const stop = watch(
    () => toValue(id),
    async (currentId, _old, onCleanup) => {
      const controller = new AbortController()
      onCleanup(() => controller.abort())
      try {
        customer.value = await api.getCustomer(currentId, controller.signal)
      } catch (e) {
        if (!controller.signal.aborted) error.value = e
      }
    },
    { immediate: true },
  )

  onScopeDispose(stop)
  return { customer: readonly(customer), error: readonly(error) }
}
\`\`\`

## Common mistakes

- Returning many unrelated values.
- Starting side effects without cleanup.
- Destructuring a reactive return object in a way that loses reactivity.
- Hiding shared module-level state accidentally.
- Calling lifecycle-dependent composables after an \`await\` in setup.

## Trade-offs

Composables improve reuse and testing, but too many thin wrappers make navigation harder. Extract a composable when a concern has meaningful behavior, reuse, or testing value.

## Likely follow-ups

- Composable vs utility function?
- Composable vs Pinia store?
- How do you accept both refs and plain values?
- How do you prevent request races?

---

# 10. Lifecycle hooks

## Interview-ready answer

“Lifecycle hooks connect component lifetime to external work. I use \`onMounted\` for browser-only integrations, \`onBeforeUnmount\` or scope cleanup for listeners and observers, and \`onUpdated\` only when I really need post-render behavior. I avoid using hooks as a general data-flow mechanism.”

## Easy explanation

Common hooks:

- \`onBeforeMount\` / \`onMounted\`
- \`onBeforeUpdate\` / \`onUpdated\`
- \`onBeforeUnmount\` / \`onUnmounted\`
- \`onActivated\` / \`onDeactivated\` for cached components
- \`onErrorCaptured\` for descendant errors
- \`onServerPrefetch\` for SSR data

## Example

\`\`\`ts
const element = useTemplateRef<HTMLElement>('panel')
let observer: ResizeObserver | undefined

onMounted(() => {
  observer = new ResizeObserver(updateLayout)
  if (element.value) observer.observe(element.value)
})

onBeforeUnmount(() => observer?.disconnect())
\`\`\`

## Common mistakes

- Reading DOM refs before mount.
- Adding listeners without removing them.
- Mutating reactive state in \`onUpdated\` and creating loops.
- Assuming mounted hooks run during SSR.
- Fetching the same data in several nested components without coordination.

## Trade-offs

Hooks are direct and understandable but tightly couple work to the component. Reusable lifecycle behavior usually belongs in a composable.

## Likely follow-ups

- Difference between \`onBeforeUnmount\` and \`onUnmounted\`?
- What happens with \`KeepAlive\`?
- Which hooks run on the server?
- When is a template ref available?

---

# 11. Custom directives

## Interview-ready answer

“I use a custom directive when behavior is mainly low-level DOM work and does not need a component UI—for example focus, click-outside, or a third-party DOM plugin. For reusable UI and state, I prefer components or composables.”

## Easy explanation

Directives receive an element, binding value, and lifecycle hooks such as \`mounted\`, \`updated\`, and \`unmounted\`.

## Example

\`\`\`ts
import type { Directive } from 'vue'

export const vFocus: Directive<HTMLInputElement, boolean> = {
  mounted(el, binding) {
    if (binding.value) el.focus()
  },
  updated(el, binding) {
    if (binding.value && !binding.oldValue) el.focus()
  },
}
\`\`\`

## Common mistakes

- Doing business logic inside a directive.
- Forgetting to remove listeners in \`unmounted\`.
- Assuming directives applied to a component always target a predictable root element.
- Reimplementing behavior already supported by native HTML.

## Trade-offs

Directives provide exact DOM access but are less declarative and harder to type or compose than components. Keep their API small.

## Likely follow-ups

- Local vs global directives?
- When would you choose a directive over a composable?
- Which directive hooks are available?
- How do directives behave in SSR?

---

# 12. Forms and \`v-model\`

## Interview-ready answer

“\`v-model\` is syntax for passing a value and listening for its update event. In a component, I treat it as a controlled contract, validate at the correct boundary, and separate raw input state from submitted domain data when needed. Vue 3 also supports named and multiple models.”

## Easy explanation

For a component, \`v-model="name"\` is roughly:

\`\`\`vue
<TextField :model-value="name" @update:model-value="name = $event" />
\`\`\`

## Example

\`\`\`vue
<script setup lang="ts">
const model = defineModel<string>({ required: true })
<\/script>

<template>
  <input v-model.trim="model" autocomplete="name" />
</template>
\`\`\`

Multiple models:

\`\`\`vue
<DateRange v-model:start="startDate" v-model:end="endDate" />
\`\`\`

## Common mistakes

- Mutating a prop instead of emitting an update.
- Using one validation rule for display, server, and domain concerns.
- Showing errors before users interact without a product reason.
- Forgetting stable IDs, labels, \`aria-describedby\`, and error associations.
- Treating all values as strings when the domain expects numbers or dates.

## Trade-offs

Two-way binding is concise but can hide ownership if used across many layers. For meaningful actions such as “approve invoice,” use an explicit event or command instead of \`v-model\`.

## Likely follow-ups

- How does \`v-model\` work internally?
- How do custom modifiers work?
- How would you design form validation?
- Controlled vs uncontrolled inputs?

---

# 13. Vue Router and navigation guards

## Interview-ready answer

“I use route records as the source of page-level structure and lazy-load feature pages. Guards are best for navigation policy such as authentication or unsaved changes, not normal data fetching. Authorization must still be enforced on the server; a client guard only improves UX.”

## Easy explanation

Router types include global guards, route-level \`beforeEnter\`, and component guards. Route meta can describe required permissions or layout.

## Example

\`\`\`ts
const routes = [
  {
    path: '/admin/users',
    component: () => import('./features/users/UserListPage.vue'),
    meta: { requiresAuth: true, permission: 'users.read' },
  },
]

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isSignedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.meta.permission && !auth.can(to.meta.permission)) {
    return { name: 'forbidden' }
  }
})
\`\`\`

## Common mistakes

- Calling \`next()\` more than once in legacy guard style.
- Creating redirect loops.
- Trusting client-side guards for security.
- Putting every fetch in a global guard and blocking navigation.
- Ignoring cancellation when route params change quickly.

## Trade-offs

Fetching before navigation prevents incomplete pages but delays route entry. Fetching inside the page shows the shell sooner and allows skeletons, but the page must handle loading and errors.

## Likely follow-ups

- How do you handle unsaved form changes?
- How do you type route meta?
- When do guards run?
- How do you handle a failed lazy-loaded route chunk?

---

# 14. Pinia and state management

## Interview-ready answer

“I use Pinia for state shared across unrelated components or routes, especially domain state that benefits from devtools and centralized actions. I keep local UI state local and server cache in a data-fetching layer when possible. Stores should represent clear domains rather than becoming one global dumping ground.”

## Easy explanation

A store exposes state, getters, and actions. Setup stores use Composition API primitives and are naturally typed.

## Example

\`\`\`ts
export const useSessionStore = defineStore('session', () => {
  const user = ref<User | null>(null)
  const permissions = computed(() => new Set(user.value?.permissions ?? []))

  function can(permission: string) {
    return permissions.value.has(permission)
  }

  async function signOut() {
    await api.signOut()
    user.value = null
  }

  return { user, can, signOut }
})
\`\`\`

## Common mistakes

- Putting all API responses and temporary component state in stores.
- Destructuring store state directly instead of using \`storeToRefs\`.
- Creating stores that depend on each other cyclically.
- Mutating store state from everywhere with no action conventions.
- Persisting sensitive data in local storage.

## Trade-offs

Central stores improve sharing and debugging but increase global coupling. Server-state libraries can provide caching, invalidation, retries, and deduplication that a hand-written Pinia store would need to reinvent.

## Likely follow-ups

- Pinia vs composable?
- Why use \`storeToRefs\`?
- How do you reset or persist a store?
- How do you use Pinia safely with SSR?

---

# 15. Async components and code splitting

## Interview-ready answer

“I use route-level dynamic imports as the first code-splitting boundary, then async components for heavy or rarely used UI such as editors and charts. I provide loading, error, timeout, and retry behavior where failure is realistic. Splitting too aggressively creates many network requests and unstable loading.”

## Easy explanation

\`defineAsyncComponent\` loads a component only when Vue needs to render it. Bundlers turn dynamic imports into separate chunks.

## Example

\`\`\`ts
const ReportDesigner = defineAsyncComponent({
  loader: () => import('./ReportDesigner.vue'),
  loadingComponent: LoadingPanel,
  errorComponent: LoadError,
  delay: 150,
  timeout: 15_000,
  onError(error, retry, fail, attempts) {
    if (attempts <= 2) retry()
    else fail()
  },
})
\`\`\`

## Common mistakes

- Making tiny, frequently used components asynchronous.
- Showing a spinner for very fast loads and causing flicker.
- Ignoring deployment cases where old clients request deleted chunks.
- Not prefetching a predictable next step.
- Forgetting that async loading does not reduce runtime cost after mount.

## Trade-offs

Smaller initial bundles improve first load, but more chunks add request overhead and loading states. Use bundle analysis and real-user metrics rather than guessing.

## Likely follow-ups

- Async component vs dynamic route import?
- How do you recover from chunk-load failures?
- What should be preloaded or prefetched?
- How does an async component work with Suspense?

---

# 16. Suspense and Teleport

## Interview-ready answer

“Suspense coordinates fallback UI for asynchronous setup and async dependencies, while Teleport renders a component's DOM somewhere else without changing its logical component ownership. I use Teleport for modals and overlays, and I use Suspense carefully because error and nested-loading behavior should be explicit.”

## Easy explanation

Teleport changes DOM placement, not the component tree. Props, injects, and events still work through the logical Vue tree.

## Example

\`\`\`vue
<Suspense>
  <CustomerDetails :id="customerId" />
  <template #fallback>
    <CustomerDetailsSkeleton />
  </template>
</Suspense>

<Teleport to="#overlays">
  <ModalDialog v-if="open" @close="open = false" />
</Teleport>
\`\`\`

## Common mistakes

- Assuming Suspense is the error boundary; it primarily handles pending state.
- Teleporting a dialog without focus management, escape handling, or background inertness.
- Depending on DOM ancestry for styles after teleporting.
- Teleporting to a target that does not exist.

## Trade-offs

Suspense creates coordinated loading but may delay all content behind one dependency. Independent skeletons can feel faster. Teleport solves stacking and overflow problems but may require globally available theme variables and careful SSR handling.

## Likely follow-ups

- Does Teleport break provide/inject?
- How do you make a teleported modal accessible?
- How are errors handled with Suspense?
- What happens during SSR hydration?

---

# 17. Rendering and performance

## Interview-ready answer

“I measure first, then optimize the actual bottleneck. In Vue, I focus on stable props, correct keys, smaller reactive dependencies, virtualization for large lists, route-level splitting, and avoiding unnecessary deep watchers. For tables, DOM volume is usually more important than micro-optimizing computed values.”

## Easy explanation

Vue compiles templates into render functions and marks dynamic parts with patch information. During updates, it can focus on dynamic nodes instead of comparing the whole DOM tree.

## Realistic table strategy

- Use server-side pagination/filtering for very large datasets.
- Virtualize rows when many must remain available client-side.
- Keep row keys stable.
- Avoid passing a newly created object or callback to every row on each render.
- Keep column definitions stable.
- Use \`shallowRef\` for large immutable result arrays if deep proxying is unnecessary.
- Profile scripting, rendering, layout, and network separately.

\`\`\`vue
<RowItem
  v-for="row in visibleRows"
  :key="row.id"
  :row="row"
  :selected="selectedIds.has(row.id)"
  v-memo="[row.version, selectedIds.has(row.id)]"
/>
\`\`\`

## Common mistakes

- Optimizing without a profiler or metric.
- Using array index as a key for mutable lists.
- Rendering thousands of DOM rows because the data fetch was fast.
- Adding \`v-if\` and \`v-for\` to the same element.
- Making every component global or wrapping everything in memoization.
- Deep-cloning state after every change.

## Trade-offs

Virtualization improves performance but complicates dynamic row heights, print layouts, browser search, and accessibility. Memoization reduces work but adds invalidation complexity. Simpler code is preferable until evidence shows a bottleneck.

## Likely follow-ups

- \`v-if\` vs \`v-show\`?
- Why are stable keys important?
- What does \`v-once\` or \`v-memo\` do?
- How do you diagnose a slow table?
- What is the virtual DOM doing?

---

# 18. \`nextTick\`

## Interview-ready answer

“Vue batches reactive updates and applies the DOM patch asynchronously. I use \`nextTick\` when I must wait for Vue's pending DOM update before measuring or focusing an element. I do not use it as a general timing workaround.”

## Easy explanation

State changes immediately; the rendered DOM catches up in the next update flush.

## Example

\`\`\`ts
const editing = ref(false)
const input = useTemplateRef<HTMLInputElement>('editInput')

async function startEditing() {
  editing.value = true
  await nextTick()
  input.value?.focus()
}
\`\`\`

## Common mistakes

- Expecting \`nextTick\` to wait for API requests, CSS transitions, or images.
- Adding repeated ticks instead of fixing data flow.
- Measuring layout before the component has rendered.
- Using \`setTimeout(0)\` where the requirement is specifically Vue's render flush.

## Trade-offs

\`nextTick\` is precise for Vue DOM updates but creates imperative coupling. Prefer declarative behavior or a post-flush watcher when it describes the intent better.

## Likely follow-ups

- Does reactive state update before \`nextTick\`?
- Difference between \`nextTick\` and \`setTimeout\`?
- When would you use a watcher with \`flush: 'post'\`?

---

# 19. SSR and hydration

## Interview-ready answer

“SSR generates HTML on the server for faster first content and better crawlability, then hydration attaches Vue behavior in the browser. Server and client must produce the same initial markup. I isolate browser-only APIs, avoid shared request state, and serialize initial data safely.”

## Easy explanation

SSR is not just “rendering twice.” Each request needs isolated app, router, and store state. Hydration reuses the server DOM; a mismatch means the two environments disagreed.

## Example

\`\`\`ts
const width = ref<number | null>(null)

onMounted(() => {
  width.value = window.innerWidth
})
\`\`\`

The initial server and client render can both show a neutral layout, then browser-only information is added after mount.

## Common mistakes

- Reading \`window\`, \`document\`, or \`localStorage\` during server rendering.
- Using random values, current time, or locale-dependent output in initial markup.
- Sharing one Pinia instance across requests and leaking user data.
- Fetching again immediately on the client instead of hydrating initial state.
- Injecting unsafe serialized JSON into HTML.

## Trade-offs

SSR improves initial rendering and SEO for suitable pages but adds server cost, deployment complexity, hydration work, and environment constraints. A client-rendered internal dashboard may not need it. Static generation can be simpler for stable content.

## Likely follow-ups

- What causes hydration mismatches?
- How do you make Pinia request-safe?
- SSR vs SSG vs CSR?
- How do you handle authentication on the server?
- What is selective or lazy hydration?

---

# 20. TypeScript integration

## Interview-ready answer

“Vue 3 works well with TypeScript, especially with \`<script setup>\`. I type component boundaries—props, emits, models, slots, injection keys, router meta, and API responses—because that is where errors spread. I still validate external data at runtime because TypeScript disappears at runtime.”

## Easy explanation

TypeScript checks development-time assumptions. It does not prove an API response or local-storage value is valid.

## Example

\`\`\`vue
<script setup lang="ts" generic="T extends { id: string }">
defineProps<{
  rows: T[]
  selectedId?: T['id']
}>()

defineEmits<{
  select: [row: T]
}>()

defineSlots<{
  default(props: { row: T }): unknown
}>()
<\/script>
\`\`\`

At the API boundary, use schema validation or a deliberate parser before treating \`unknown\` as a domain type.

## Common mistakes

- Using \`any\` for API responses or component events.
- Casting with \`as\` instead of validating.
- Making every field optional to silence errors.
- Duplicating types that should come from one contract.
- Forgetting null states for data that loads asynchronously.

## Trade-offs

Advanced generic component APIs can become harder to understand than duplicated, domain-specific components. Type the stable contract, but do not make types more complex than the product behavior.

## Likely follow-ups

- Type-based vs runtime prop declarations?
- How do you type template refs?
- How do you type a generic table?
- Why validate data if TypeScript already checks it?

---

# 21. Testing

## Interview-ready answer

“I test behavior at the lowest useful level. Pure logic and composables get focused unit tests; components are tested through rendered output and user interaction; critical flows get end-to-end tests. I avoid testing Vue internals or implementation details.”

## Easy explanation

A balanced test strategy:

- Unit tests: transformations, validators, state transitions.
- Component tests: props, emits, slots, accessibility, interaction.
- Integration tests: router, store, network boundary.
- E2E tests: a small set of business-critical journeys.

## Example

\`\`\`ts
it('emits the selected customer', async () => {
  const customer = { id: 'c1', name: 'Mina' }
  const wrapper = mount(CustomerRow, { props: { customer } })

  await wrapper.get('button').trigger('click')

  expect(wrapper.emitted('select')).toEqual([[customer]])
})
\`\`\`

For network behavior, mock at the HTTP boundary rather than mocking every internal composable.

## Common mistakes

- Asserting private component state.
- Using large snapshots as the main assertion.
- Over-mocking until the test no longer resembles production.
- Forgetting \`await\` for DOM-triggered updates.
- Writing brittle selectors based on CSS layout.
- Testing only happy paths.

## Trade-offs

Unit tests are fast and precise but cannot prove integration. E2E tests give confidence but are slower and can be flaky. Use a few strong end-to-end flows and more focused tests below them.

## Likely follow-ups

- How do you test a composable with lifecycle hooks?
- How do you test Pinia or router behavior?
- What should be mocked?
- How do you test accessibility?

---

# 22. Accessibility

## Interview-ready answer

“Accessibility is part of component correctness, not a final audit. I start with semantic HTML, complete keyboard behavior, visible focus, programmatic labels, and correct status announcements. Reusable components are important because one accessible implementation improves the whole product.”

## Easy explanation

Use native elements first. A real \`<button>\` already supports keyboard activation, focus, and semantics. ARIA can describe missing semantics, but it does not add behavior.

## Enterprise examples

- A modal traps focus, restores it on close, closes predictably, and marks the background inert.
- A sortable header is a button and communicates sort state with \`aria-sort\`.
- Form errors are linked with \`aria-describedby\` and summarized after submit.
- Live updates use an appropriate \`aria-live\` region without becoming noisy.
- RTL changes direction and layout, but not every icon should be mirrored.

\`\`\`vue
<button
  type="button"
  :aria-expanded="open"
  aria-controls="account-menu"
  @click="open = !open"
>
  Account
</button>
\`\`\`

## Common mistakes

- Using clickable \`<div>\` elements.
- Removing focus outlines without a replacement.
- Adding ARIA roles while missing keyboard behavior.
- Assuming a screen reader test is the only accessibility test.
- Encoding meaning only through color.
- Breaking logical focus order in responsive or teleported UI.

## Trade-offs

Highly custom widgets require much more behavior and testing than native controls. Sometimes product visuals should adapt to a robust native pattern rather than recreate it.

## Likely follow-ups

- How do you make a data table accessible?
- How do you test keyboard navigation?
- \`aria-label\` vs visible label?
- What changes for RTL?
- How do you build an accessible modal?

---

# 23. Security

## Interview-ready answer

“Vue escapes normal template interpolation, which reduces XSS risk, but \`v-html\`, unsafe URLs, third-party content, and direct DOM APIs still need care. I do not put secrets in frontend code, I treat client authorization as UX only, and I design authentication with CSRF, token storage, and content security policy in mind.”

## Easy explanation

The browser receives all frontend code, so anything shipped to it is discoverable. Security decisions must be enforced by the backend.

## Example

\`\`\`vue
<!-- Safe: text is escaped -->
<p>{{ customerComment }}</p>

<!-- Dangerous unless content is sanitized by a trusted policy -->
<div v-html="trustedSanitizedHtml" />
\`\`\`

For links, allow expected protocols and destinations instead of binding untrusted strings directly.

## Common mistakes

- Rendering user HTML with \`v-html\` without sanitization.
- Storing long-lived sensitive tokens in local storage without considering XSS.
- Treating hidden buttons or route guards as authorization.
- Exposing secrets in \`VITE_*\` environment variables.
- Dynamically building templates from user content.
- Logging personal or authentication data.

## Trade-offs

HttpOnly secure cookies reduce JavaScript token exposure but require CSRF defenses and correct server configuration. Strict CSP improves protection but can complicate third-party scripts and inline styles.

## Likely follow-ups

- Does Vue prevent all XSS?
- Where should auth tokens be stored?
- How do you prevent CSRF?
- Are frontend environment variables secret?
- How do you safely render rich text?

---

# 24. Error handling and production debugging

## Interview-ready answer

“I handle errors at the boundary that can make a useful decision. A field shows validation errors, a feature handles expected API failure, and an application-level handler reports unexpected failures. In production I combine user-safe messages, structured logs, source maps, correlation IDs, and monitoring context.”

## Easy explanation

Different errors need different responses:

- Expected domain error: explain what the user can do.
- Transient network error: retry with limits or offer retry.
- Authentication error: refresh or redirect safely.
- Programming error: capture context and fail in a controlled way.

## Example

\`\`\`ts
app.config.errorHandler = (error, instance, info) => {
  monitor.captureException(error, {
    tags: { vueInfo: info },
    extra: { route: router.currentRoute.value.fullPath },
  })
}
\`\`\`

Feature-level request code should distinguish aborts, timeouts, 4xx domain failures, and unexpected 5xx failures rather than displaying “Something went wrong” for everything.

## Common mistakes

- Swallowing errors in empty \`catch\` blocks.
- Showing raw server messages or stack traces to users.
- Retrying non-idempotent operations automatically.
- Logging sensitive request data.
- Relying only on a global error handler.
- Debugging minified production errors without source maps or release versions.

## Trade-offs

More telemetry helps diagnosis but adds cost, privacy responsibilities, and noise. Sample high-volume events, scrub sensitive data, and attach actionable context rather than logging everything.

## Likely follow-ups

- What does \`onErrorCaptured\` do?
- How do you prevent stale requests from updating state?
- How do you diagnose a production-only issue?
- What context belongs in an error report?
- How do you design retries?

---

# 25. Architecture for large Vue applications

## Interview-ready answer

“I organize large applications by business feature, with a small shared foundation for design-system components, infrastructure, and cross-cutting services. Dependencies should point inward: pages compose features, features use domain and shared APIs, and base UI does not import business code. I enforce boundaries with conventions, TypeScript, lint rules, and tests.”

## Easy explanation

A practical structure:

\`\`\`text
src/
  app/                 # app startup, router, providers, layouts
  features/
    customers/
      api/
      components/
      composables/
      pages/
      stores/
      types.ts
      routes.ts
  shared/
    ui/                # design-system components
    api/               # HTTP client and cross-cutting transport
    i18n/
    utilities/
  styles/
    tokens.css
    themes.css
\`\`\`

## Enterprise principles

- Route boundaries are natural code-splitting and ownership boundaries.
- Domain code should not depend on concrete page components.
- Base UI uses design tokens, logical CSS properties, and documented slots.
- API transport types are converted into stable domain/view models.
- Permission checks are centralized but server-enforced.
- Feature flags have owners and removal dates.
- Observability and accessibility are included in the definition of done.

## Common mistakes

- Organizing the whole app only by technical type: one giant \`components/\`, \`stores/\`, and \`services/\` folder.
- Creating a generic abstraction before multiple real use cases exist.
- Letting shared code import feature code.
- One global store for unrelated domains.
- Using an event bus for core application workflows.
- Allowing barrel exports to hide circular dependencies.

## Trade-offs

Feature boundaries may duplicate small helpers, but duplication is sometimes cheaper than premature coupling. A monorepo helps separate packages and teams, but adds tooling and release complexity. Micro-frontends can support organizational independence, but should solve a team/deployment problem—not be a default architecture.

## Likely follow-ups

- How do you enforce module boundaries?
- How do you share a design system across teams?
- When would you choose a monorepo or micro-frontends?
- How do you migrate a legacy Vue application?
- Where should API calls live?

---

# 26. Themes, design tokens, responsive UI, and RTL/LTR

## Interview-ready answer

“I treat design tokens as semantic contracts rather than raw color values. Components consume tokens such as surface, text, border, and focus colors; themes replace the token values. For RTL, I use logical CSS properties and test behavior, focus order, charts, icons, and mixed-direction content—not only text alignment.”

## Easy explanation

Primitive token: \`--blue-600\`.  
Semantic token: \`--color-action-primary\`.  
Component token: \`--button-primary-background\`.

The semantic layer lets a theme change meaning without changing every component.

## Example

\`\`\`css
:root {
  --color-surface: #ffffff;
  --color-text: #172033;
  --space-control-inline: 0.75rem;
}

[data-theme='dark'] {
  --color-surface: #151923;
  --color-text: #f2f4f8;
}

.card {
  color: var(--color-text);
  background: var(--color-surface);
  padding-inline: var(--space-control-inline);
  border-inline-start: 3px solid var(--color-accent);
}
\`\`\`

Set \`dir="rtl"\` at the document or correct subtree. Use \`margin-inline-start\`, \`inset-inline-end\`, and \`text-align: start\` instead of hard-coded left/right where direction should adapt.

## Common mistakes

- Hard-coding colors inside components.
- Implementing dark mode by inverting everything.
- Flipping all icons in RTL, including universal symbols and logos.
- Using viewport breakpoints when a reusable component needs container queries.
- Reordering visual layout in a way that conflicts with DOM/focus order.
- Forgetting persisted theme SSR, causing a flash or hydration mismatch.

## Trade-offs

Many token layers provide flexibility but can make tracing values difficult. Define ownership and naming rules. Container queries improve component portability but may require a thoughtful fallback for older target environments.

## Likely follow-ups

- How do you avoid theme flicker in SSR?
- Which icons should mirror in RTL?
- CSS logical properties vs direction-specific styles?
- How do you test themes and responsive states?
- How do you version design tokens?

---

# 27. Large tables

## Interview-ready answer

“For large tables, I separate data concerns from rendering concerns. The server owns filtering, sorting, and pagination when the dataset is large; the client owns interaction state and visible rendering. I use stable row identity, cancel stale requests, virtualize only when necessary, and design keyboard and screen-reader behavior from the start.”

## Easy explanation

A table can involve several independent states:

- Query: page, page size, search, filters, sort.
- Request: loading, error, latest request identity.
- Data: rows, total count, schema/version.
- Interaction: focused cell, selected IDs, expanded rows.
- Presentation: visible columns, density, pinned columns.

Keeping them separate prevents one giant object from triggering unrelated work.

## Example

\`\`\`ts
watch(
  () => ({ ...toValue(query) }),
  async (nextQuery, _old, onCleanup) => {
    const controller = new AbortController()
    onCleanup(() => controller.abort())

    loading.value = true
    try {
      const response = await api.listCustomers(nextQuery, controller.signal)
      rows.value = response.items
      total.value = response.total
    } finally {
      if (!controller.signal.aborted) loading.value = false
    }
  },
  { immediate: true },
)
\`\`\`

## Common mistakes

- Loading the full dataset and hiding rows with CSS.
- Selecting rows by array index.
- Losing selection when a new page loads without a defined selection policy.
- Sending one request per keystroke without debounce/cancellation.
- Rendering every cell as a heavy component.
- Using a visual grid without implementing the expected keyboard model.

## Trade-offs

Native \`<table>\` semantics are strong and often preferable. A fully interactive ARIA grid offers spreadsheet-like navigation but requires significant accessibility engineering. Server pagination scales, while client-side operations can offer faster interaction for bounded datasets.

## Likely follow-ups

- How do you keep selection across pages?
- Cursor vs offset pagination?
- How do you handle variable-height virtualization?
- How do you make sorting accessible?
- Where would you cache table data?

---

# Senior system-design scenarios

## Scenario 1: Design an enterprise customer-management frontend

### A strong answer structure

“I would start by clarifying scale, roles, latency, offline needs, supported browsers, localization, and whether SEO matters. Then I would define feature boundaries around customer search, details, editing, audit history, and permissions.”

### Proposed design

\`\`\`text
Browser
  Router + route-level feature chunks
    Customer list feature
      query state in URL
      server-state/cache layer
      virtualized or paginated table
    Customer details feature
      overview / activity / documents child routes
    Shared design system
      tokens, themes, RTL, accessible primitives
  Pinia
    session, permissions, durable cross-route UI state
  API layer
    typed client, runtime validation, cancellation, error mapping
  Observability
    errors, performance marks, correlation IDs, release version
\`\`\`

### Important choices

- Keep filter and sort state in the URL so views are shareable and browser navigation works.
- Put server data in a query/cache layer; do not duplicate it automatically in Pinia.
- Use route-level authorization for UX and backend authorization for security.
- Use optimistic updates only for reversible actions with clear rollback.
- Log table performance using real dataset sizes.
- Define empty, loading, partial, error, and permission-denied states.

### Likely challenges

- “How would you support multiple teams?” Define feature ownership, shared UI governance, API contracts, and automated boundary checks.
- “How would you make it resilient?” Add request cancellation, bounded retries, idempotency awareness, stale-data indicators, and feature-level error recovery.
- “How would you migrate it?” Use route-by-route strangler migration with shared auth and design tokens.

---

## Scenario 2: Design a reusable data-table platform

### Interview-ready proposal

“I would separate a headless table model from the rendered components. The headless layer owns column definitions, sorting, selection, expansion, and state transitions. The UI layer owns accessible DOM, styling, virtualization integration, and slots. Feature pages own the query and business actions.”

### Public API ideas

\`\`\`ts
type Column<Row> = {
  id: string
  header: string
  value: (row: Row) => unknown
  sortable?: boolean
  width?: number
  align?: 'start' | 'center' | 'end'
}
\`\`\`

Events should express meaning: \`sort-change\`, \`selection-change\`, \`row-activate\`. Avoid leaking raw DOM events unless needed.

### Questions to settle

- Native table or ARIA grid?
- Server or client operations?
- How does selection work across pages and filters?
- Are column settings user-specific and persisted?
- Fixed or variable row height?
- How are loading, partial refresh, and empty states rendered?
- What are the performance budgets?

### Risks

The biggest risk is building a universal component that handles every product case. Establish supported patterns and escape hatches, track exceptions, and split specialized variants when their interaction models differ.

---

## Scenario 3: Multi-brand themes with RTL/LTR

### Interview-ready proposal

“I would publish versioned semantic design tokens, accessible base components, and brand theme packages. Direction and locale are separate settings. Components use logical layout properties, and visual regression tests cover a matrix of high-risk components across brand, theme, viewport, and direction.”

### Key details

- Resolve initial theme on the server or in a small pre-render script to avoid flashing.
- Keep token names semantic and stable; validate contrast automatically.
- Do not duplicate whole stylesheets per direction.
- Use direction-aware icons only where meaning is spatial.
- Test Arabic text length, mixed numbers, truncation, and form controls.
- Provide migration notes when tokens are renamed or removed.

### Trade-off answer

“Testing every component in every combination is too expensive. I use pairwise coverage for most components and a full matrix for foundations such as buttons, dialogs, forms, navigation, and tables.”

---

## Scenario 4: Diagnose a production-only performance regression

### Strong investigation sequence

1. Confirm the user impact and affected release, route, browser, device, account, and dataset size.
2. Compare real-user metrics before and after the release.
3. Reproduce with production-like data and CPU/network throttling.
4. Use the browser Performance panel and Vue Devtools to separate network, JavaScript, Vue rendering, layout, and paint.
5. Check request storms, deep watchers, unstable props, excessive rows, layout thrashing, and third-party scripts.
6. Add a targeted measurement if current telemetry cannot answer the question.
7. Fix the narrow cause, verify metrics, roll out safely, and document the prevention.

### Interview-ready example

“In a large table, I would first check whether the regression comes from more DOM nodes, a watcher firing repeatedly, or layout work from measuring cells. If column definitions are recreated on each render, all rows may receive changed props. I would stabilize them, then verify the improvement in a trace rather than assuming.”

---

## Scenario 5: State management for a complex workflow

### Interview-ready proposal

“I separate server state, workflow state, and local UI state. Server entities use a cache with invalidation. A Pinia store owns a multi-route draft or approval workflow. Component state owns open panels, focused tabs, and temporary input unless it must survive navigation.”

### Decision table

| State | Best default home | Why |
|---|---|---|
| Current signed-in user | Session store | Used across unrelated routes |
| Customer search results | Query/cache layer | Server data with freshness and cancellation |
| Search filters | URL | Shareable and restorable |
| Modal open state | Component | Local and temporary |
| Multi-step unsaved draft | Feature store | Must survive route steps |
| Theme | App provider/store + persisted preference | Global cross-cutting state |
| Input validation message | Form/component | Belongs to interaction context |

---

## Scenario 6: Modernize a Vue 2 enterprise application

### Interview-ready proposal

“I would reduce migration risk by separating framework upgrade from feature redesign. First I would inventory dependencies, browser support, global APIs, filters, event buses, mixins, and undocumented component contracts. Then I would create a compatibility path, add regression coverage around critical flows, and migrate feature by feature.”

### Practical phases

1. Establish TypeScript, linting, tests, telemetry, and a supported build chain.
2. Replace abandoned dependencies and incompatible patterns.
3. Move shared UI and tokens to Vue 3-compatible foundations.
4. Convert event buses to explicit state/events.
5. Convert high-value mixins into composables when ownership is clear.
6. Migrate routes or vertical slices with measurable acceptance criteria.
7. Remove compatibility mode and obsolete code.

### Trade-off answer

“A full rewrite may look cleaner but delays value and can lose hidden business behavior. Incremental migration has temporary complexity, but it gives us production feedback and rollback boundaries.”

---

# Rapid-review cheat sheet

## Core choices

| Need | Default choice | One-line reason |
|---|---|---|
| Primitive or replaceable state | \`ref\` | Clear ownership and safe replacement |
| Related object fields | \`reactive\` | Convenient grouped state |
| Derived state | \`computed\` | Cached and declarative |
| Explicit side effect | \`watch\` | Controlled dependencies and cleanup |
| Auto-tracked side effect | \`watchEffect\` | Concise when dependencies are obvious |
| Reusable reactive behavior | Composable | Reuses logic and lifecycle |
| Subtree dependency | Provide/inject | Avoids intermediate forwarding |
| App/domain shared state | Pinia | Shared ownership and devtools |
| Server data | Query/cache layer | Freshness, deduping, invalidation |
| DOM behavior only | Directive | Low-level element integration |

## Short answers worth memorizing

- **Why Composition API?** “It groups code by feature and makes typed logic reuse easier.”
- **Why not put everything in Pinia?** “Global state increases coupling; state should live at the narrowest owner that needs it.”
- **Why computed instead of watch?** “Derived data should be declarative and cached, without synchronization bugs.”
- **Why stable keys?** “Keys preserve item identity so Vue can patch and retain component state correctly.”
- **Why \`nextTick\`?** “To wait for Vue's batched DOM patch before measuring or focusing.”
- **What is hydration?** “Vue attaches behavior to server-rendered HTML while expecting the same initial structure.”
- **What does Teleport change?** “DOM location, not logical component ownership.”
- **Are route guards security?** “No. They improve UX; the backend must enforce authorization.”
- **Is TypeScript runtime validation?** “No. External data still needs validation.”
- **First performance step?** “Measure with production-like data and identify whether the cost is network, script, render, layout, or paint.”

## Red flags to avoid saying

- “Composition API is always better.”
- “Pinia replaces all local state.”
- “Vue prevents XSS.”
- “The client route guard secures the page.”
- “More components always improve performance.”
- “Index is fine as a key.”
- “Deep watch is the easiest solution.”
- “We should rewrite it from scratch.”
- “Accessibility is mainly ARIA.”
- “TypeScript guarantees the API response.”

## Senior answer checklist

Before ending an answer, try to include at least one of these:

- Ownership: Who owns and changes this state?
- Boundary: Is this local, feature-level, application-wide, or server state?
- Failure: What happens if the request or chunk fails?
- Scale: What changes with 100,000 rows or several teams?
- Accessibility: Can keyboard and assistive-technology users complete it?
- Security: Is the backend enforcing the rule?
- Measurement: How will we prove the design works in production?
- Trade-off: What complexity does this choice add?

---

# Practical 14-day study plan

Aim for **60–90 minutes per day**. Speak answers aloud; interviews test communication as much as recall.

## Day 1 — Reactivity fundamentals

- Review reactivity, \`ref\`, \`reactive\`, \`toRef\`, \`toRefs\`, shallow APIs.
- Build a small price calculator.
- Explain dependency tracking in 60 seconds without technical jargon.
- Practice: “Why did destructuring break reactivity?”

## Day 2 — Computed and watchers

- Build filtered search with request cancellation.
- Compare \`computed\`, \`watch\`, and \`watchEffect\` aloud.
- Practice cleanup, flush timing, and stale requests.

## Day 3 — Components and communication

- Review props, emits, slots, and \`v-model\`.
- Design a reusable input and card.
- Explain component ownership and why prop mutation is risky.

## Day 4 — Composition and composables

- Extract pagination or media-query logic into a composable.
- Add cleanup and TypeScript types.
- Compare composables, utilities, stores, and provide/inject.

## Day 5 — Router and state

- Build protected lazy routes and URL-based filters.
- Create one Pinia store and keep local state outside it.
- Explain CSR authorization vs backend authorization.

## Day 6 — Modern Vue features

- Practice async components, Suspense, Teleport, and \`nextTick\`.
- Build an accessible teleported modal.
- Explain loading, error, and focus behavior.

## Day 7 — Rendering and performance

- Profile a deliberately slow list.
- Fix unstable props and excessive DOM.
- Review keys, \`v-if\`/\`v-show\`, virtualization, and shallow reactivity.
- Give a five-minute large-table diagnosis.

## Day 8 — TypeScript and API boundaries

- Type props, emits, slots, models, injection keys, and a generic table.
- Validate one \`unknown\` API response at runtime.
- Practice explaining why \`as Customer\` is not validation.

## Day 9 — Testing

- Write a unit test, component interaction test, and one E2E test outline.
- Review what to mock and what not to mock.
- Explain your test pyramid using one real feature.

## Day 10 — Accessibility and internationalization

- Keyboard-test a menu, form, modal, and table.
- Switch the page between LTR and RTL.
- Review semantics, focus, labels, live regions, logical CSS, and icon mirroring.

## Day 11 — Security, errors, and SSR

- Review XSS, \`v-html\`, CSRF, token storage, and environment variables.
- Explain hydration mismatches and request-scoped state.
- Design error handling for validation, timeout, 401, 403, 409, and 500 responses.

## Day 12 — Architecture

- Draw the feature-based application structure from memory.
- Decide where six different kinds of state belong.
- Explain design-system governance and module boundaries.

## Day 13 — System design practice

- Spend 30 minutes on the customer-management scenario.
- Spend 30 minutes on the reusable data-table scenario.
- Always start with requirements and finish with failure, measurement, and trade-offs.

## Day 14 — Mock interview and gap review

- Answer 15 rapid questions with a two-minute limit each.
- Complete one 30-minute system-design session.
- Record yourself and remove overly formal or vague wording.
- Review only the weak areas after the mock.

---

# Mock interview question bank

## Fast technical questions

1. How does Vue 3 reactivity work?
2. When do you choose \`ref\` over \`reactive\`?
3. What breaks when you destructure a reactive object?
4. When is a watcher a better choice than computed?
5. How do you cancel stale requests in a watcher?
6. Why use Composition API in a large application?
7. How do you define a good component boundary?
8. Why should props be read-only?
9. When are scoped slots useful?
10. Provide/inject or Pinia—how do you choose?
11. What makes a composable safe and reusable?
12. Which lifecycle hooks run in SSR?
13. When should you create a custom directive?
14. How does component \`v-model\` work?
15. What belongs in a router guard?
16. Which state should not go into Pinia?
17. How do async components affect performance?
18. What problem does Teleport solve?
19. What is Suspense responsible for?
20. When is \`nextTick\` necessary?
21. What causes a hydration mismatch?
22. How do you type and validate API data?
23. What is your Vue testing strategy?
24. How do you make a custom table accessible?
25. What Vue security risks concern you?
26. How do you investigate production errors?
27. How do you structure a large Vue codebase?

## Behavioral prompts tied to technical experience

Use **Situation → Constraint → Decision → Result → Learning**.

- Tell me about a difficult production bug.
- Describe a reusable component you designed.
- Tell me about a performance problem in a large table.
- Describe a disagreement about architecture.
- Tell me about improving accessibility or RTL support.
- Describe a migration you planned.
- Tell me about a time an abstraction became too complex.
- Describe how you handled an API or requirement change.

### Natural answer template

> “The situation was ___. The main constraint was ___. I considered ___ and ___. I chose ___ because ___. We measured the result using ___. If I did it again, I would ___.”

---

# Final interview strategy

Start with the simplest correct answer. Then add production depth.

A strong senior answer often sounds like this:

> “My default would be X because of Y. In a small component I would keep it local. If the state must survive routes or be shared by unrelated features, I would move it to a scoped store. The main risk is Z, so I would verify it with this metric or test.”

If you do not know a detail, do not bluff. Say:

> “I do not remember the exact API name, but the behavior I would need is ___. I would verify the framework contract before implementing it.”

That answer shows sound judgment—often more valuable than perfect recall.

`,format:`markdown`},{id:`system-design`,label:`System Design`,short:`SD`,color:`#b994ff`,description:`Architecture, trade-offs, scale and senior-level scenarios.`,source:`# Senior Frontend Architecture & System Design Interview Guide

Tailored for a senior frontend engineer with 6+ years of experience building enterprise interfaces with Vue, Angular, React, TypeScript, reusable components, design tokens, RTL/LTR layouts, responsive UI, dark mode, performance optimization, and production debugging.

The language in this guide is intentionally simple and natural. You can use many of the answers almost word for word in an interview.

---

## 1. A Repeatable Framework for Any Frontend System-Design Question

Do not jump directly to tools. First show how you think.

### The CRAFT method

1. **Clarify** the users, scale, constraints, and business goal.
2. **Requirements**: separate must-have behavior from quality requirements.
3. **Architecture**: define boundaries, components, state, APIs, and ownership.
4. **Flow and failures**: explain the normal data flow, then slow, offline, stale, and error cases.
5. **Trade-offs and testing**: explain why the design fits now and how it can evolve.

### Opening sentence

> “Before choosing the architecture, I want to clarify the users, expected scale, data freshness, browser support, and the most important quality goals. Then I’ll propose a simple design and discuss how it handles failures and future growth.”

### Questions that work in almost every scenario

- Who are the main users, and what is their most important task?
- What scale should we expect: users, requests, records, modules, and teams?
- Is the experience read-heavy, write-heavy, or real-time?
- How fresh must the data be?
- What are the latency and performance targets?
- Must it work offline or on unreliable networks?
- Which browsers, devices, locales, and accessibility level must we support?
- Are SEO and first-load performance important?
- What security, privacy, or regulatory constraints exist?
- What already exists, and what can we change?

### Quality checklist

For every design, mention the relevant items:

- Performance: loading, rendering, memory, network, caching.
- Reliability: empty, loading, partial, stale, error, offline, and recovery states.
- Security: authentication, authorization, validation, XSS, CSRF, and sensitive data.
- Accessibility: keyboard, focus, semantics, contrast, announcements, reduced motion.
- Observability: logs, metrics, traces, release version, user journey.
- Testability: unit, integration, contract, end-to-end, visual, accessibility.
- Maintainability: clear ownership, stable interfaces, documentation, migration path.

### A simple architecture vocabulary

Use these terms naturally:

- **Server state**: remote data, loading, errors, freshness, caching.
- **Client state**: local UI state such as an open panel or selected tab.
- **Domain state**: business state such as a draft order or permissions.
- **URL state**: filters, sorting, pagination, selected entity, shareable navigation.
- **Boundary**: an area with a clear responsibility and public interface.
- **Adapter**: code that isolates the UI from a backend response or third-party API.
- **Progressive enhancement**: deliver the essential experience first, then add richer behavior.

---

## 2. Autocomplete Search

### Clarifying questions

- Is this local filtering or remote search?
- How many items exist, and how fast do results change?
- Must results be personalized, grouped, highlighted, or ranked?
- Is free text allowed, or must the user select a result?
- What is the latency target, and should recent searches work offline?

### Requirements

- Functional: show relevant suggestions, support keyboard and mouse, highlight matches, select a result, clear the query.
- Quality: avoid unnecessary requests, never show stale results, respond quickly, work with assistive technology, protect private queries.

### Proposed architecture

- A controlled search input owns the raw text.
- A debounce waits roughly 200–300 ms before remote search.
- A query layer manages cache, loading, errors, deduplication, and cancellation.
- Each request uses \`AbortController\`; a request ID is an extra guard against races.
- Cache recent results by normalized query with a short TTL.
- The results popover is a reusable accessible combobox/listbox.
- The server owns full-text search, ranking, permissions, and rate limiting.

### Data flow

User types → local input updates immediately → debounce fires → previous request is cancelled → normalized query is checked in cache → API request runs if needed → response is accepted only if it matches the latest query → list renders → selection updates the form or route.

### Trade-offs

- A shorter debounce feels faster but creates more traffic.
- Client filtering is instant for small stable datasets; server search scales and ranks better.
- Prefetching popular results improves speed but may expose or waste data.
- Caching reduces latency, but a long TTL can show stale suggestions.

### Failure cases

- Responses arrive out of order: cancel and compare request IDs.
- Network is slow: keep the input responsive and show a subtle loading state.
- API fails: show a retry option without erasing the query.
- No results: clearly say “No results,” not a blank list.
- IME composition: do not search in the middle of composing East Asian text.

### Performance, security, accessibility

- Set a minimum query length, debounce, cache, and limit response size.
- Encode input; the server must validate it and enforce access control and rate limits.
- Use proper combobox semantics, \`aria-expanded\`, \`aria-controls\`, active descendant, arrow keys, Enter, Escape, and clear focus behavior.
- Announce result count without announcing every keystroke.

### Interview-ready answer

> “I would keep typing local and immediate, but debounce remote searches by about 250 milliseconds. The query layer would cancel the previous request, cache recent queries, and ignore any response that is not for the latest input. The backend should own ranking, permissions, and rate limiting. I would build the UI as an accessible combobox with full keyboard support and clear loading, empty, and error states. I would measure input-to-results latency, request volume, zero-result rate, and selection rate. The main trade-off is responsiveness versus network traffic, so I would tune the debounce and cache using production data.”

---

## 3. Infinite Scrolling

### Clarifying questions

- Is the content a feed, catalog, or task list?
- Must users return to the same position or share a result location?
- Is ordering stable while new items are added?
- Is SEO important? Is explicit pagination acceptable?

### Requirements

- Load more data near the end without blocking interaction.
- Prevent duplicates, preserve scroll position, and provide recovery.
- Keep memory and DOM size under control.
- Make the feature usable by keyboard and screen-reader users.

### Proposed architecture and data flow

- Use cursor pagination, not page numbers, for changing datasets.
- An \`IntersectionObserver\` watches a sentinel near the end.
- The query layer stores pages and the next cursor and deduplicates by stable item ID.
- Virtualize when the list can grow large.
- Save cursor/scroll state in route history or a page cache for back navigation.

Viewport nears sentinel → request next cursor → append unique items → update cursor → virtualization renders only the visible window.

### Trade-offs

- Infinite scroll is smooth for discovery; pagination is better for location, comparison, SEO, and reaching the footer.
- Virtualization protects the DOM but complicates dynamic heights, focus, printing, and browser find.
- Prefetching earlier feels faster but uses more bandwidth.

### Failure cases and concerns

- Duplicate or missing items: stable IDs plus cursor semantics.
- Reordering while browsing: use a snapshot cursor or show a “new items” prompt instead of shifting content.
- Failed next page: inline retry at the boundary; keep loaded items.
- The observer fires repeatedly: prevent concurrent requests.
- Accessibility: include an explicit “Load more” control, announce added item count, preserve focus, and expose the current position.
- Security: server enforces permissions for every page; never trust a cursor from the client.

### Interview-ready answer

> “I would first check whether infinite scroll is actually right. For a feed it often is; for search or administration, pagination may be easier to navigate. I would use cursor pagination, an intersection observer, request deduplication, and stable IDs. For a very long list, I would virtualize the visible rows and preserve scroll state when the user navigates back. I would also provide a keyboard-accessible Load more button and an inline retry. I would track next-page latency, duplicate rate, abandonment, memory, and long tasks.”

---

## 4. Large Data Tables

### Clarifying questions

- How many rows and columns? Is the data remote?
- Do users sort, filter, group, resize, pin, edit, select, or export?
- Is this desktop-only, or must it work on small screens?
- Are there permission-sensitive columns or live updates?

### Requirements

- Fast scanning and interaction with large datasets.
- Stable sorting/filtering and shareable views.
- Keyboard navigation, clear semantics, and safe editing.
- Export and bulk actions without downloading all data into the browser.

### Proposed architecture

- Server-side filtering, sorting, aggregation, and cursor/page pagination for large datasets.
- URL holds filters, sort, visible view, and page/cursor where practical.
- A headless table model defines columns and behavior; a presentational layer applies design-system components.
- Row and optional column virtualization for large results.
- Normalize entities by ID. Keep selection rules separate from rendered rows.
- For editing, use local drafts, validation, explicit save or safe optimistic updates, and conflict handling.
- Export is an asynchronous backend job with status and a secure download link.

### Data flow

User changes filters → URL and query key update → request is cancelled/replaced → server returns rows, schema metadata, total/next cursor → table renders visible window → edits go through validation and mutation → cache is updated or invalidated.

### Trade-offs

- Server operations scale but add latency; client operations are fast only after all data is loaded.
- A powerful grid library saves time but increases bundle size, licensing, customization, and upgrade risk.
- Virtualization improves speed but makes accessibility and variable row heights harder.

### Failure cases and concerns

- Reset pagination when a filter changes.
- Keep the old table visible during a refresh, with a refreshing indicator.
- Handle partial column permissions on the server and in the column model.
- Use sticky headers carefully; test zoom and screen readers.
- For mobile, prioritize columns, allow horizontal scroll, or offer a card/detail view.
- Prevent formula injection in CSV exports and validate all editable values server-side.

### Interview-ready answer

> “For a large enterprise table, I would treat the backend as the source for sorting, filtering, pagination, aggregation, and export. I would keep view state in the URL so the result can be shared and restored. The frontend would use a headless column model, a query cache, stable row IDs, and virtualization only when measurements show it is needed. Editing would have validation, clear dirty state, conflict handling, and permission checks on the server. I would test keyboard navigation, zoom, screen readers, large datasets, and slow networks, and measure query latency, render time, long tasks, and edit failures.”

---

## 5. Enterprise Dashboards

### Clarifying questions

- Who uses the dashboard, and what decisions do they make?
- How fresh must each metric be?
- Are widgets independent, customizable, or permission-based?
- Do users need drill-down, export, comparison, or real-time updates?

### Requirements

- Show trustworthy KPIs and trends with understandable definitions.
- Load important content first and tolerate partial failure.
- Support filters, drill-down, responsive layout, RTL/LTR, dark mode, and accessibility.

### Proposed architecture

- A shell owns navigation, permissions, global date/filter context, layout, and error boundaries.
- Widgets are feature modules with typed inputs and their own query/error state.
- A backend-for-frontend can aggregate, authorize, and shape data for the UI.
- Cache each widget independently; use different freshness rules per metric.
- Load the most important widgets first and lazy-load secondary charts.
- Use design tokens for themes, spacing, charts, direction, and status colors.

### Data flow

Route loads → user/permission/config data loads → critical widgets request data in parallel → each widget shows its own skeleton/result/error → filter changes update URL/context → affected queries refresh → drill-down navigates with preserved filter context.

### Trade-offs

- One large endpoint reduces round trips but couples refresh and failure; widget endpoints isolate ownership but can create request waterfalls.
- Real-time WebSockets are useful only when freshness justifies complexity; polling or focus revalidation is often enough.
- Customizable layouts increase user value and testing complexity.

### Failure cases and concerns

- One widget failing must not blank the dashboard.
- Show “last updated” and stale state; never present stale data as live.
- Empty data is different from an error.
- Charts need text summaries, labels, keyboard access where interactive, non-color cues, and sufficient contrast.
- Avoid rendering hundreds of chart points; aggregate or downsample.
- The server must authorize every metric and filter, not only hide widgets.

### Interview-ready answer

> “I would design the dashboard as a stable shell with independent feature widgets. Global filters would live in the URL, while each widget owns its query, loading, error, and freshness state. Critical widgets load first; secondary widgets lazy-load. A backend-for-frontend is useful if the UI needs data from many services or consistent authorization. Partial failure is important: one broken chart should not break the page. I would make data freshness visible and provide accessible summaries for charts. I would measure time to useful content, widget error rate, stale-data age, and interaction latency.”

---

## 6. Reusable Component Library and Design System

### Clarifying questions

- How many products, brands, frameworks, and teams will use it?
- Is the goal visual consistency, accessibility, delivery speed, or all three?
- Who owns decisions and support? How are breaking changes handled?
- Must it support RTL/LTR, dark mode, density, white-labeling, and older browsers?

### Requirements

- Accessible, themeable, documented components with stable APIs.
- Shared design tokens and clear contribution/governance rules.
- Safe versioning, automated quality checks, and measured adoption.

### Proposed architecture

- Three layers: tokens → primitives → composed patterns.
- Semantic tokens such as \`color.surface.default\`, not product-specific raw colors.
- Framework-neutral foundations where useful, with thin framework bindings if multiple frameworks are required.
- Public components expose controlled customization through variants, slots, events, and CSS variables—not internal DOM dependencies.
- Package by domain to support tree shaking. Publish typed APIs and changelogs.
- Documentation includes behavior, accessibility, examples, do/don’t guidance, RTL, dark mode, and migration notes.
- Governance includes owners, RFCs for major changes, deprecation periods, and contribution standards.

### Data flow

Design decisions become versioned tokens → components consume semantic tokens → applications consume components → usage, defects, and requests feed back into the system roadmap.

### Trade-offs

- Too little flexibility creates local forks; too much flexibility destroys consistency.
- A single package is simple but can create large releases; multiple packages add version coordination.
- Supporting many frameworks increases reach and maintenance cost.

### Failure cases and concerns

- Visual breaking changes: visual regression tests and release previews.
- API breaks: semantic versioning, codemods, deprecation warnings, migration guides.
- CSS conflicts: scoped styles/layers, stable token contracts, no fragile selectors.
- Accessibility regressions: automated checks plus keyboard and screen-reader testing.
- Security: avoid unsafe HTML APIs; keep dependencies reviewed and updated.
- Measure adoption, duplicate components removed, upgrade lag, accessibility defects, and developer satisfaction.

### Interview-ready answer

> “I see a design system as a product, not only a component folder. I would separate semantic tokens, accessible primitives, and reusable product patterns. Components should have small typed APIs and controlled extension points, while RTL, dark mode, responsive behavior, and accessibility are built in. I would use documentation, visual regression tests, semantic versioning, deprecation windows, and migration tools. Governance is as important as code: teams need a clear contribution path and owners who balance consistency with real product needs.”

---

## 7. State Management

### Clarifying questions

- Which state is remote, local, shared, persistent, or URL-driven?
- How many features write to the same state?
- Must state survive reload, support offline use, undo, or real-time collaboration?

### Requirements and architecture

Use the smallest correct owner:

- Component state for temporary local UI.
- URL state for navigation, filters, sort, and shareable views.
- Form state for values, validation, dirty state, and submission.
- Query/cache library for server state, freshness, retries, and invalidation.
- Feature/domain store only for complex shared workflows.
- App-wide store for truly global data such as session metadata—not every API response.

Keep derived values derived instead of duplicating them. Use selectors and immutable updates. Split stores by domain, define typed actions, and prevent feature modules from reaching into each other’s internals.

### Data flow

User action → feature action/use case → optional API mutation → authoritative response → query cache/domain store update → selectors derive view model → component renders.

### Trade-offs and failure cases

- Global stores make sharing easy but create hidden coupling and broad re-renders.
- Context is fine for stable low-frequency data; frequent updates can re-render large trees.
- Persistence helps recovery but creates migration, privacy, and stale-data problems.
- Avoid double sources of truth between a query cache and global store.
- Clear user-specific state on logout and never persist tokens or sensitive records casually.

### Interview-ready answer

> “I would not choose state management by framework popularity. I first classify the state. Local UI stays local, navigation belongs in the URL, forms use form state, and remote data belongs in a query cache. I add a domain store only when several parts of a workflow need coordinated writes or complex transitions. I keep one source of truth, derive values with selectors, and expose feature-level APIs. This reduces coupling and makes performance and testing easier.”

---

## 8. API Errors, Retry, Cancellation, and Resilience

### Clarifying questions

- Which operations are idempotent? Which are business-critical?
- What error shape, rate limits, and request IDs does the backend provide?
- Can users work offline? Is partial data acceptable?

### Proposed architecture

- A shared API client handles base URL, credentials, trace/request IDs, parsing, timeout, and normalized errors.
- Domain adapters translate transport DTOs into frontend models.
- Query logic owns caching, deduplication, cancellation, and freshness.
- Retry only transient errors such as network failures, 408, 429, and selected 5xx responses.
- Use exponential backoff with jitter and honor \`Retry-After\`.
- Do not automatically retry validation, authentication, authorization, or non-idempotent mutations unless an idempotency key makes it safe.
- Cancel obsolete searches, navigation requests, and unmounted work with \`AbortController\`.

### Failure strategy

- 400/422: show field or business feedback.
- 401: attempt one controlled session refresh, then sign in.
- 403: explain lack of access; do not retry.
- 404: show a missing/deleted state.
- 409/412: show conflict and offer refresh/merge.
- 429: back off using server guidance.
- 5xx/network: limited retry, then preserve context and offer manual retry.

Use error boundaries for unexpected render failures, but handle expected API errors inside the feature.

### Concerns

- Avoid retry storms; cap attempts and use jitter.
- Never show secrets or raw stack traces.
- Preserve user input after failure.
- Announce meaningful errors accessibly and move focus only when useful.
- Log error category, endpoint name, release, request ID, retry count, and user journey without sensitive payloads.

### Interview-ready answer

> “I separate expected API errors from unexpected application failures. A shared client normalizes errors and adds request IDs, while the query layer handles cache, cancellation, and limited retries. I retry only transient and safe operations with exponential backoff and jitter. I do not retry a 403 or validation error, and I am careful with non-idempotent mutations. The UI preserves the user’s work and gives an action such as retry, sign in, refresh, or resolve conflict. Observability connects the frontend error to the backend request ID.”

---

## 9. Optimistic Updates

### Clarifying questions

- How often does the operation fail or conflict?
- Can it be safely reversed? Is it financial, destructive, or permission-sensitive?
- Do multiple users edit the same entity?

### Architecture and data flow

Use optimistic UI for fast, low-risk, reversible actions such as favorites or simple status changes.

User acts → snapshot previous cache → update cache immediately → send mutation with entity version/idempotency key → on success reconcile with server → on failure restore snapshot and show feedback → invalidate/refetch if uncertain.

For rapid repeated actions, coalesce requests or serialize per entity. Use version numbers/ETags to detect conflicts. For high-risk operations, use a pending state instead of pretending success.

### Trade-offs and failure cases

- Optimism improves perceived speed but makes rollback, conflicts, and debugging more complex.
- A rollback can overwrite a newer local action; identify each mutation and reconcile in order.
- Server response may transform the data; always accept the server as authoritative.
- Offline queues require durable storage, ordering, deduplication, expiration, and user-visible sync state.
- Do not announce “saved” to assistive technology until the outcome is reliable; “saving” then “saved” is clearer.

### Interview-ready answer

> “I use optimistic updates when the action is likely to succeed, easy to reverse, and not high risk. I snapshot the previous cache, apply the local change, send a versioned mutation, and reconcile with the server response. If it fails, I roll back only that mutation and explain what happened. For payments, destructive operations, or likely conflicts, I prefer a pending state. The key is that the server remains authoritative and every optimistic path has a tested rollback path.”

---

## 10. Authentication and Session Flows

### Clarifying questions

- Is this a browser app, public site, or enterprise SSO product?
- OAuth/OIDC, SAML, MFA, passwordless, or local accounts?
- Are multiple tabs, impersonation, tenant switching, and step-up authentication required?

### Proposed architecture

- Prefer Authorization Code Flow with PKCE for public browser clients.
- For higher security, use a backend-for-frontend: browser receives an \`HttpOnly\`, \`Secure\`, \`SameSite\` session cookie; tokens stay server-side.
- Bootstrap the session from a \`/me\` or session endpoint.
- Route protection improves UX, but every API performs authorization.
- Refresh is single-flight: one refresh request, with waiting calls queued. If it fails, clear session state and return to sign-in with a safe return URL.
- Synchronize logout/session expiry across tabs with \`BroadcastChannel\` or storage events.

### Data flow

User starts sign-in → identity provider authenticates → callback validates state/nonce/code verifier → server establishes session → app loads user, tenant, and capabilities → API requests use the session → expiry triggers controlled refresh or reauthentication.

### Failure cases and concerns

- Redirect loops: limit retries and distinguish unauthenticated from forbidden.
- Expiry during form work: preserve non-sensitive draft and restore after sign-in.
- CSRF: SameSite cookies plus anti-CSRF token for state-changing requests where needed.
- XSS: CSP, output encoding, no unsafe token storage, dependency hygiene.
- Open redirect: allow-list return destinations.
- Use capabilities/permissions, not only roles, and enforce them server-side.
- Accessible errors, focus management, and MFA instructions are part of the flow.

### Interview-ready answer

> “For an enterprise application, I would normally use OIDC Authorization Code with PKCE, and I would strongly consider a backend-for-frontend so tokens are not exposed to JavaScript. The browser keeps a secure HttpOnly session cookie. The app loads session and capability data at startup, but API authorization is always enforced on the server. Refresh should be single-flight to avoid many refresh calls, and logout or expiry should synchronize across tabs. I would specifically protect against XSS, CSRF, open redirects, and redirect loops, while preserving safe user work when reauthentication is needed.”

---

## 11. Frontend Observability

### Clarifying questions

- Which user journeys matter most?
- What error monitoring, analytics, tracing, and privacy rules already exist?
- Can frontend events connect to backend traces and deployments?

### Proposed architecture

Collect four groups of signals:

- Errors: uncaught errors, rejected promises, handled feature failures, error-boundary events.
- Performance: Core Web Vitals, route timings, API latency, long tasks, resource size.
- Product/journey: search completed, checkout completed, form abandoned—using a governed event schema.
- Context: release version, route template, browser, feature flags, tenant class, correlation/request ID.

Use source maps stored securely in the monitoring system. Sample high-volume events. Scrub query strings, form values, tokens, and personal data. Define service-level indicators around real journeys, not just global averages.

### Data flow

User action creates a frontend trace/event → request includes correlation headers → backend continues the trace → monitoring groups errors by release and route → alerts use rate and user impact → engineer links incident to deployment, request, and session-safe context.

### Trade-offs and failure cases

- More telemetry gives context but costs money and increases privacy risk.
- Client ad blockers and page exits mean telemetry is incomplete.
- A monitoring SDK must not break the app; load safely and keep it small.
- Avoid alerting on every error. Alert on sustained rates, important journeys, and regression from baseline.

### Interview-ready answer

> “I want observability to answer: who is affected, what journey failed, when it started, which release caused it, and whether the backend also failed. I collect errors, web vitals, route and API timing, and a small set of governed journey events. Every event includes release and route context, and API calls carry a correlation ID so frontend and backend traces connect. I scrub sensitive data, sample high-volume events, and alert on user impact rather than raw log volume.”

---

## 12. Performance Optimization

### Clarifying questions

- Which problem matters: first load, interaction delay, scrolling, memory, or API latency?
- What devices and networks represent real users?
- What are current measurements and performance budgets?

### Approach

Measure first, change one bottleneck, verify the user impact, and prevent regression.

### Architecture and techniques

- Delivery: CDN, compression, HTTP caching, immutable hashed assets.
- JavaScript: route/feature splitting, lazy loading, remove unused dependencies, tree shaking, modern builds.
- Rendering: stable keys, memoize expensive work only when measured, virtualize large lists, avoid layout thrashing.
- Images/fonts: correct formats and sizes, responsive images, lazy loading, font subsetting, sensible fallback.
- Data: parallelize independent requests, avoid waterfalls, cache, prefetch likely next actions, paginate large payloads.
- CSS: avoid expensive global selectors and large unused styles; use logical properties for RTL.
- Runtime: move heavy computation to a worker if it blocks the main thread.

Set budgets for initial JavaScript, images, LCP, INP, CLS, and important route transitions. Test in CI and monitor real-user percentiles by device/network.

### Trade-offs and failure cases

- Excessive code splitting creates many requests and loading flashes.
- Memoization has memory and complexity costs.
- Prefetching can waste bandwidth; respect data-saver conditions.
- Skeletons improve perceived progress but can cause layout shift if dimensions differ.
- Do not sacrifice accessibility or correctness for a score.

### Interview-ready answer

> “I optimize from measurements, not guesses. I separate network, loading, rendering, and interaction problems using real-user monitoring and browser profiling. Typical fixes include route-level code splitting, removing heavy dependencies, caching, avoiding request waterfalls, correctly sizing images, virtualizing large collections, and reducing main-thread work. I set performance budgets in CI and watch p75 metrics for real devices. After every change I verify both the metric and the user journey, because a better score is not useful if the experience becomes less reliable.”

---

## 13. Micro-frontends vs Modular Monolith

### Clarifying questions

- How many teams and domains exist? Do they need independent release schedules?
- Is there one framework or several legacy stacks?
- What problem are micro-frontends expected to solve?

### Recommended default

Start with a modular frontend monolith: one deployable application with domain-based modules, clear public APIs, dependency rules, shared platform services, and independent ownership. Move to micro-frontends only when organizational autonomy and release independence justify the runtime and operational cost.

### Micro-frontend architecture when justified

- A thin shell owns routing, authentication integration, navigation, design-system baseline, error isolation, and observability.
- Business domains own vertical slices and deployment.
- Integration can be route-level composition, build-time packages, or runtime federation. Prefer coarse boundaries.
- Cross-domain communication uses URL navigation or a small versioned event contract. Avoid a shared mutable global store.
- Shared dependencies require a version strategy and fallback plan.

### Trade-offs

- Benefits: team autonomy, incremental migration, fault/release isolation.
- Costs: duplicate code, inconsistent UX, dependency conflicts, complex local development, testing, routing, security, observability, and slower page loads.
- Iframes isolate strongly but limit seamless UX and shared accessibility.
- Runtime federation enables independent deployment but increases runtime compatibility risk.

### Failure cases and concerns

- A remote fails to load: shell-level timeout, fallback, retry, and feature isolation.
- Version mismatch: compatibility tests and contract/version policy.
- CSS collisions: design tokens and scoped/layered styles.
- Fragmented accessibility and analytics: platform standards and central validation.
- One compromised remote affects the shell: strict trust model, CSP, dependency and deployment controls.

### Interview-ready answer

> “My default is a modular monolith because it gives strong boundaries without adding distributed-system problems to the browser. I would use domain modules, enforced dependency rules, and clear ownership first. I would choose micro-frontends when several teams truly need independent deployment or when we need gradual migration across stacks. Then I would keep boundaries coarse, make the shell small, standardize the design system and observability, and avoid shared mutable state. The decision should follow an organizational constraint, not a trend.”

---

## 14. SSR, CSR, and SSG

### Clarifying questions

- Is the content public and indexed? How personalized or fresh is it?
- What are the first-load, hosting, and infrastructure constraints?
- Does the page need rich interaction immediately?

### Decision guide

- **CSR**: authenticated applications and highly interactive tools where SEO is not central.
- **SSR**: public or personalized pages needing good initial content and SEO, with fresh server data.
- **SSG**: stable public content such as documentation and marketing pages.
- **Hybrid**: static or server-rendered shell/content, then client interaction; choose per route.

### Data flow

SSR: request → server fetches authorized data → renders HTML → browser displays → JavaScript hydrates → client navigation continues.

SSG: build creates HTML → CDN serves it → optional revalidation updates content.

CSR: CDN serves shell → JavaScript loads → app fetches data → renders.

### Trade-offs and failure cases

- SSR improves initial content but increases server cost, caching complexity, and time-to-first-byte risk.
- CSR simplifies hosting but can show a blank/loading shell and has weaker SEO by default.
- SSG is fast and resilient but can become stale and produce long builds.
- Hydration mismatch occurs with time, random values, browser-only APIs, locale, or inconsistent data. Keep server/client output deterministic.
- Streaming can improve progressive display but complicates boundaries and monitoring.
- Never serialize secrets into HTML; prevent cache leakage between users.

### Interview-ready answer

> “I choose rendering per route. Public stable content is a good fit for static generation, public dynamic content may use SSR, and an authenticated enterprise workspace is often best as CSR or a hybrid. SSR is not automatically faster: I consider server latency, hydration cost, caching, and personalization. I keep server and client rendering deterministic, avoid leaking user data into shared caches, and measure time to useful content and interaction on real devices.”

---

## 15. Internationalization and RTL/LTR

### Clarifying questions

- Which locales and scripts? Is direction per page or mixed within a page?
- Are content, dates, numbers, currencies, plural rules, and time zones localized?
- Who translates and reviews content? Can translations arrive independently?

### Proposed architecture

- Use stable message IDs and ICU-style parameters/plurals; do not concatenate translated fragments.
- Format dates, numbers, lists, and currencies with \`Intl\` and explicit locale/time zone.
- Lazy-load locale bundles and use a tested fallback chain.
- Set \`lang\` and \`dir\` at the document or container level.
- Use CSS logical properties: inline/block start/end rather than left/right.
- Mirror directional icons such as arrows when meaning requires it; do not mirror universal symbols or text.
- Support mixed-direction content with semantic isolation such as \`bdi\` where appropriate.
- Design for text expansion and avoid fixed-width text containers.

### Data flow

User/account/browser selects locale → app loads locale messages → document language/direction and formatters update → components render from message IDs and semantic tokens → preference persists in account or safe local storage.

### Trade-offs and failure cases

- Shipping all translations simplifies switching but increases bundle size.
- Browser locale is a useful default, not always the user’s preference.
- Missing keys should fall back visibly in development and safely in production, with monitoring.
- Dates require clear time-zone ownership; store/transport instants consistently and format at the edge.
- Test pseudo-localization, long strings, Arabic/Hebrew, mixed text, keyboard order, charts, tables, and screenshots.

### Interview-ready answer

> “I treat internationalization as architecture, not final translation work. Text uses stable message IDs with plural and parameter support. Dates, numbers, currency, and time zones use standard locale formatters. For RTL, I set the correct language and direction, build layouts with logical CSS properties, and mirror only icons whose meaning is directional. Components must handle text expansion and mixed-direction content. I test pseudo-locales and real RTL pages early, including focus order, tables, charts, dark mode, and responsive layouts.”

---

## 16. Accessibility

### Clarifying questions

- Which standard and target level, usually WCAG 2.2 AA?
- Which user journeys are critical?
- What browsers and assistive technologies are supported?

### Architecture and practice

- Start with semantic HTML and native controls.
- Make every action keyboard-operable with visible focus.
- Keep focus order logical and manage focus after dialogs, navigation, errors, and dynamic updates.
- Associate labels, instructions, and errors with controls.
- Use ARIA only when native semantics are insufficient.
- Meet contrast, zoom/reflow, touch-target, reduced-motion, and non-color requirements.
- Make loading and status changes understandable through appropriate live regions.
- Include accessibility requirements in the design system and definition of done.

### Testing strategy

- Linting and automated scans catch common issues.
- Component tests verify semantics and keyboard behavior.
- Manual keyboard testing is required.
- Test critical flows with representative screen readers and zoom/reflow.
- Include disabled, loading, empty, error, RTL, dark-mode, and high-contrast states.

### Trade-offs and failure cases

- Automated tools catch only part of the problem.
- Custom controls often recreate native behavior badly.
- Virtualized lists and drag-and-drop need deliberate alternative interaction and announcements.
- Do not disable zoom or remove outlines without an equivalent.

### Interview-ready answer

> “Accessibility is part of the component contract and acceptance criteria. I start with semantic HTML and native behavior, then add ARIA only when necessary. I cover keyboard operation, focus management, labels and errors, contrast, zoom, reduced motion, and dynamic announcements. Automated checks run in CI, but I also manually test critical journeys with keyboard and representative screen readers. Building these rules into the design system gives every product a safer default and reduces repeated fixes.”

---

## 17. Testing Strategy

### Clarifying questions

- Which journeys are most valuable or risky?
- What is the current failure history and release frequency?
- Can backend contracts and test environments be controlled?

### Test portfolio

- Static: TypeScript, lint rules, dependency and security checks.
- Unit: pure business rules, formatters, reducers, selectors.
- Component/integration: user-visible behavior, forms, accessibility, loading/error states, with APIs mocked at the network boundary.
- Contract: validate frontend assumptions against API schemas/consumer contracts.
- End-to-end: a small set of critical journeys in realistic environments.
- Visual regression: design-system components and important layouts across themes/directions/viewports.
- Non-functional: accessibility, performance budgets, security scans.

### Principles

- Test behavior, not implementation details.
- Prefer accessible queries such as role and label.
- Use deterministic data, controlled clocks, and isolated tests.
- Do not solve flaky tests with blind retries; fix timing, state, or environment causes.
- Use test impact/parallelization to keep feedback fast.
- Monitor production because tests cannot cover every environment.

### Trade-offs and failure cases

- Too many E2E tests are slow and brittle; too many isolated unit tests miss integration risk.
- Snapshot tests are useful for stable serialized output, not as a replacement for assertions.
- Mocking every dependency creates false confidence; keep a layer of contract and real integration tests.

### Interview-ready answer

> “My test strategy is risk-based. TypeScript and linting give fast feedback. Unit tests cover business logic, component tests cover user behavior and states, contract tests protect API assumptions, and a small E2E suite covers critical journeys. Visual and accessibility checks protect the design system. I test through roles and labels instead of internal selectors. I track flaky tests and production escapes, because test count is not the goal—fast, reliable confidence is.”

---

## 18. Frontend Security

### Threat model questions

- What sensitive data and privileged actions exist?
- What third-party scripts, uploads, rich text, and embedded content exist?
- Is authentication cookie-based? Are there compliance requirements?

### Controls

- XSS: framework escaping, sanitize allowed rich HTML, avoid unsafe DOM APIs, use CSP and Trusted Types where practical.
- CSRF: SameSite cookies and anti-CSRF tokens for relevant state-changing requests.
- Authentication: secure HttpOnly cookies or carefully designed OIDC flow; never log credentials/tokens.
- Authorization: server-side checks for every object/action; UI checks are only convenience.
- Dependencies: lockfiles, review, automated scanning, minimal packages, controlled updates, provenance where supported.
- Supply chain/build: protected CI, least-privilege secrets, signed or traceable artifacts, reproducible releases.
- Data: collect and store the minimum; redact monitoring; clear user caches on logout.
- URLs: prevent open redirects; validate protocols and destinations.
- Uploads: validate type/size/content server-side, isolate storage, scan files, safe download headers.

### Trade-offs and failure cases

- A strict CSP improves protection but needs nonce/hash and third-party coordination.
- Client validation improves UX but is not a security boundary.
- \`localStorage\` is convenient but readable by injected scripts.
- Source maps help debugging; restrict or securely upload them rather than exposing sensitive source unnecessarily.

### Interview-ready answer

> “I start with the threat model and assume the browser is not a trusted authorization boundary. I prevent XSS through escaping, safe APIs, sanitization for approved rich content, and a strong CSP. With cookie sessions I address CSRF. Authorization and validation always happen on the server. I minimize third-party code, scan and review dependencies, keep secrets out of the frontend, and redact telemetry. Security controls should be part of the platform and CI so teams do not have to remember them for every feature.”

---

## 19. CI/CD and Release Strategy

### Clarifying questions

- Monorepo or multiple repositories? How often do teams release?
- What environments, approvals, compliance, and rollback requirements exist?
- Can frontend and backend deploy independently?

### Pipeline

Commit/PR → formatting, lint, types, unit/component tests → affected builds → dependency/security/license checks → accessibility and performance budgets → artifact creation → deploy immutable artifact to test/staging → smoke/E2E tests → progressive production rollout → monitoring → promote or rollback.

### Architecture and practices

- Build once and promote the same immutable artifact; inject environment-safe configuration at runtime where needed.
- Use preview environments for meaningful UI review.
- Use feature flags to separate deploy from release, with owners and expiry dates.
- Use canary or percentage rollout for risky changes.
- Keep frontend compatible with old and new API versions during rollout; additive API evolution helps.
- Upload release metadata and source maps to monitoring.
- Rollback should select a previous artifact, not rebuild old source.

### Trade-offs and failure cases

- More gates reduce risk but slow feedback; run fast affected checks first and parallelize.
- Feature flags reduce release risk but create hidden complexity and stale branches.
- Database/API changes may not be reversible; use expand-and-contract compatibility.
- Test rollback and incident procedures, not only deployment.

### Interview-ready answer

> “I want CI to give fast confidence and CD to make releases small and reversible. Pull requests run types, linting, focused tests, security checks, accessibility checks, and performance budgets. We build an immutable artifact once and promote it through environments. Risky features use short-lived flags and progressive rollout. Monitoring is linked to the release, and rollback selects the previous artifact. Frontend and backend changes remain compatible during deployment using additive contracts and an expand-and-contract approach.”

---

## 20. Scaling Frontend Teams

### Clarifying questions

- How many teams, products, and repositories exist?
- Where are the current bottlenecks: ownership, consistency, releases, architecture, or onboarding?
- Which decisions need central standards and which should stay local?

### Operating model

- Organize product teams around business domains and user outcomes.
- Create a small frontend platform function for shared foundations: design system, build tooling, observability, security defaults, and paved paths.
- Define code ownership and service/component ownership.
- Use architecture principles and automated dependency rules instead of a central approval for every decision.
- Use lightweight RFCs for decisions that affect several teams.
- Maintain examples, templates, migration guides, and an engineering handbook.
- Build communities of practice for knowledge sharing without removing team ownership.

### Quality and evolution

- Standardize outcomes and interfaces, not every internal implementation.
- Measure lead time, change failure rate, recovery time, upgrade lag, accessibility defects, performance, adoption, and developer experience.
- Fund migrations and maintenance explicitly.
- Use codemods and compatibility layers for large changes.

### Trade-offs and failure cases

- Full centralization creates bottlenecks; no coordination creates duplication and inconsistent UX.
- A platform team must treat developers as customers, not issue rules without support.
- Shared libraries without owners become critical abandoned infrastructure.
- Metrics must guide improvement, not rank individuals.

### Interview-ready answer

> “To scale frontend teams, I would give domain teams clear product ownership and provide a small platform with strong defaults for the design system, testing, builds, security, and observability. Cross-team decisions use lightweight RFCs and automated architecture rules. Shared assets have named owners, support expectations, and migration plans. I measure delivery and quality outcomes, plus developer experience. The goal is local autonomy inside clear guardrails, so teams can move independently without creating a fragmented product.”

---

## 21. Cross-Cutting Architecture Example

Imagine an enterprise operations portal with authentication, dashboards, large searchable tables, and editable records.

### High-level design

\`\`\`text
Browser
├─ Application shell
│  ├─ Routing and session bootstrap
│  ├─ Global navigation and error boundary
│  ├─ Locale, direction, theme, feature flags
│  └─ Observability context
├─ Domain modules
│  ├─ Dashboard
│  ├─ Search
│  ├─ Records table
│  └─ Record editor
├─ Shared platform
│  ├─ Design system and semantic tokens
│  ├─ Typed API client and domain adapters
│  ├─ Query cache
│  └─ Test utilities
└─ Backend-for-frontend
   ├─ Session/token handling
   ├─ Authorization and aggregation
   ├─ Stable UI-shaped contracts
   └─ Calls to domain services
\`\`\`

### Boundaries

- The shell does not own domain business logic.
- Each domain module has a public API and cannot import another module’s internals.
- The design system contains reusable behavior, not product-specific workflows.
- The query cache owns server-state freshness; domain stores own only complex client workflows.
- The backend remains the authorization and validation boundary.

### Production-readiness checklist

- Typed contracts and compatibility strategy.
- Loading, empty, stale, partial, error, and offline states.
- Request cancellation, timeouts, idempotency, retry policy.
- Route-level lazy loading and performance budgets.
- RTL/LTR, locale formatting, responsive layouts, dark mode.
- Keyboard, screen reader, zoom, contrast, reduced motion.
- XSS, CSRF, permissions, sensitive-data handling, dependency security.
- Correlated errors, web vitals, journey metrics, release metadata.
- Layered tests and a progressive, reversible deployment.

---

## 22. How to Handle Follow-up Challenges

### “Why did you choose this technology?”

> “I would choose it because it solves these specific requirements and our team can operate it. I would validate bundle size, browser support, accessibility, maintenance, and exit cost with a small proof of concept. The architecture should not depend on one library more than necessary.”

### “What happens at ten times the scale?”

> “I would identify which limit we are approaching first: payload size, request rate, render cost, memory, team coordination, or release risk. Then I would scale that boundary—for example server-side aggregation, pagination, virtualization, caching, or domain ownership—rather than making the whole system more complex in advance.”

### “What would you build first?”

> “I would deliver the smallest vertical slice through UI, API, security, observability, and deployment. It proves the risky boundaries early. Then I would expand using measured usage and failure data.”

### “How do you disagree with a proposed architecture?”

> “I first align on the goal and constraints. Then I compare options using the same criteria: user impact, complexity, performance, security, reliability, team ownership, and migration cost. If uncertainty remains, I propose a small experiment with a clear decision deadline.”

### “How do you deal with legacy code?”

> “I avoid a large rewrite unless the evidence is very strong. I create a boundary around the legacy area, add observability and characterization tests, then replace vertical slices incrementally. A compatibility layer lets old and new code coexist until migration is complete.”

---

## 23. Behavioral Stories in Simple STAR Format

Adapt the details and metrics to your real experience. Never claim numbers you cannot explain.

### Story 1: Building a reusable component system

**Situation:** Several enterprise products had similar buttons, forms, tables, and dialogs, but each team implemented them differently. Dark mode, responsive behavior, and RTL fixes were repeated.

**Task:** I needed to improve consistency and delivery speed without blocking product teams.

**Action:** I audited duplicated components and accessibility issues, then worked with design and engineers to define semantic design tokens and a small set of high-value primitives. I documented typed APIs, variants, RTL behavior, keyboard behavior, and examples. We added visual and accessibility tests, versioning, a contribution process, and a gradual migration path instead of forcing a full rewrite.

**Result:** Teams reused the same foundations, UI defects decreased, and new screens were faster to build. The most important lesson was that adoption depends on documentation, support, and migration tools as much as component quality.

**Short spoken version:**

> “Several products had duplicated UI with inconsistent accessibility and RTL behavior. I led an audit and helped create semantic tokens and a focused component library. We added documentation, visual and accessibility tests, and a gradual migration path. This reduced repeated work and improved consistency. I learned to treat the design system as an internal product with real users.”

### Story 2: Solving a production performance problem

**Situation:** A data-heavy enterprise page became slow for customers with large accounts. Initial load was long and scrolling sometimes froze.

**Task:** I owned the frontend investigation and needed to improve the experience without changing user behavior.

**Action:** I used real-user timings, network traces, and browser profiles. I found an oversized response, expensive derived calculations, and too many rendered rows. I worked with the backend to paginate the data, moved filtering to the server, virtualized the list, and removed repeated calculations. I added performance budgets and monitoring by account size so the regression would be visible.

**Result:** The page became responsive for large accounts, load time and long tasks dropped, and the team gained a repeatable performance process.

**Short spoken version:**

> “A large customer dataset made an important page slow and sometimes unresponsive. I measured the network and main thread and found three causes: a large payload, repeated calculations, and too many DOM nodes. We added server pagination, virtualization, and simpler derived state. Then I added monitoring and budgets. The key lesson was to measure the whole path instead of guessing from the UI.”

### Story 3: Debugging a difficult production issue

**Situation:** Some users occasionally saw stale results after changing filters quickly. The issue was hard to reproduce locally.

**Task:** I needed to identify the root cause, reduce impact, and prevent recurrence.

**Action:** I added safe diagnostic context around query, request ID, timing, and release version. The evidence showed that responses were arriving out of order and an older request replaced the latest state. I added cancellation and a latest-request guard, wrote a test with controlled delayed responses, and reviewed similar request flows across the application.

**Result:** The stale-results issue stopped, related flows were hardened, and correlation data made later incidents faster to investigate.

**Short spoken version:**

> “Users sometimes saw stale results after changing filters quickly. I added request and timing context and found a race: an older response arrived last and replaced the correct data. I fixed it with cancellation and a latest-request check, then added a deterministic regression test and audited similar flows. I also improved correlation data so future issues would be easier to trace.”

### Story 4: Delivering RTL/LTR and localization

**Situation:** A product built mainly for English needed Arabic support. Many layouts used left/right CSS, icons did not mirror correctly, and text containers assumed short labels.

**Task:** I needed to make internationalization maintainable rather than patching individual screens.

**Action:** I defined an i18n foundation with message IDs, locale formatters, document language/direction, CSS logical properties, and semantic tokens. I updated shared components first, added pseudo-localization and RTL visual tests, and worked with design on icon mirroring and text expansion. We migrated feature areas incrementally.

**Result:** Arabic became a supported product mode, later features inherited RTL behavior by default, and localization defects were caught earlier.

**Short spoken version:**

> “When we added Arabic, I did not want one-off RTL fixes. I moved shared components to logical CSS properties, introduced consistent locale formatting and message IDs, and added pseudo-localization and RTL visual tests. We fixed the design-system layer first, then migrated screens gradually. That made RTL a default capability for future work.”

### Story 5: Managing a risky release

**Situation:** A major workflow redesign affected many users and depended on a new backend contract. A big-bang launch would be difficult to reverse.

**Task:** I needed to make the release safe while keeping the delivery date.

**Action:** I aligned the frontend and backend on an additive, backward-compatible contract. We put the new path behind a short-lived feature flag, added journey metrics and error dashboards, tested rollback, then released to internal users and small customer groups before expanding. We reviewed results at each stage and removed the old path and flag after stability.

**Result:** The rollout completed without a broad incident, issues were found in small cohorts, and rollback remained available throughout.

**Short spoken version:**

> “For a risky workflow redesign, I avoided a big-bang launch. We kept the API backward compatible, used a temporary feature flag, added journey monitoring, and rolled out by cohort. We found and fixed issues while impact was small, then removed the flag and old code. The lesson was that deploy and release should be separate decisions.”

### Story 6: Disagreeing on micro-frontends

**Situation:** The team proposed micro-frontends because the codebase felt slow to change, but there were only two teams and most delays came from unclear module ownership and slow CI.

**Task:** I needed to help the group choose an architecture based on the real constraint.

**Action:** I listened to the concerns and compared a modular monolith with micro-frontends using deployment independence, runtime cost, developer experience, and migration effort. We measured CI and dependency problems, then introduced domain modules, ownership, dependency rules, and affected builds. We agreed on signals that would justify revisiting micro-frontends later.

**Result:** Build and ownership problems improved without adding runtime composition complexity, and the team had a fact-based decision record.

**Short spoken version:**

> “A team suggested micro-frontends because development felt slow. I agreed with the problem but checked the cause. We found unclear boundaries and slow CI, not a real need for independent runtime deployment. We introduced domain ownership, dependency rules, and affected builds in a modular monolith. I like to solve the actual constraint and define when a more complex architecture would become justified.”

### Story 7: Leading through an accessibility gap

**Situation:** An accessibility review found keyboard and screen-reader problems across several custom controls close to a release.

**Task:** I needed to address the immediate risk and stop the same class of issue returning.

**Action:** I prioritized issues by blocked journey and user impact, paired with QA and design, and replaced custom behavior with native semantics where possible. We fixed focus management and error associations, added keyboard/component tests, and moved the patterns into the shared library and definition of done.

**Result:** Critical journeys became usable before release, and the permanent controls reduced accessibility regressions in later features.

**Short spoken version:**

> “An audit found keyboard and screen-reader blockers near release. I prioritized the blocked journeys, used native semantics where possible, and fixed focus and form errors with QA and design. Then I added tests and moved the corrected patterns into the component library. We solved the immediate issue and improved the default for future teams.”

### Story 8: Handling an incident calmly

**Situation:** After a release, error rates increased in a core workflow, but only for one browser/version combination.

**Task:** I was responsible for reducing customer impact and coordinating the frontend response.

**Action:** I confirmed the affected segment using release and browser telemetry, paused rollout, and switched off the new path with a feature flag. I communicated scope and next update time, reproduced the issue in the affected browser, fixed the unsupported API usage with a compatible approach, and added coverage to the browser matrix. After recovery, we wrote a short blameless review with prevention actions.

**Result:** Customer impact was limited, service recovered quickly, and browser compatibility checks improved.

**Short spoken version:**

> “A release caused failures only in one browser group. I used telemetry to confirm the scope, paused the rollout, and disabled the feature to reduce impact. We reproduced and fixed an unsupported browser API, then added compatibility coverage and completed a blameless review. During incidents I focus first on impact, then evidence, communication, recovery, and prevention.”

---

## 24. Behavioral Answer Prompts

Prepare one story for each theme:

- A difficult technical decision.
- A production incident.
- A performance improvement.
- A disagreement handled well.
- Mentoring or raising team quality.
- A mistake and what changed afterward.
- Delivering under uncertainty.
- Improving accessibility, design consistency, or internationalization.

For each story, write only five bullets:

1. One-sentence situation.
2. Your responsibility.
3. Two or three actions using “I,” not only “we.”
4. A measurable or observable result.
5. The lesson and how it changed later work.

### Natural STAR template

> “The situation was ____. I was responsible for ____. I first ____, because ____. Then I ____. The result was ____. What I learned was ____, and I used that later by ____.”

### If you do not remember a metric

Do not invent one. Say:

> “I do not remember the exact percentage, but our monitoring showed a clear reduction in load time and support reports, especially for large accounts.”

---

## 25. A Full 10-Minute System-Design Answer Template

### Minute 0–2: Clarify

> “I’ll clarify the primary user, scale, freshness, device support, SEO, and the most important quality goal.”

Ask four or five useful questions. State assumptions if the interviewer does not answer.

### Minute 2–3: Requirements

> “The main functions are A, B, and C. The most important quality requirements are responsiveness, reliability, accessibility, and secure permission handling.”

### Minute 3–6: Architecture and data flow

Draw or explain:

- UI/shell and feature boundaries.
- State ownership.
- API/BFF and contract.
- Cache, pagination, or real-time mechanism.
- One normal end-to-end data flow.

### Minute 6–8: Failures and quality

Cover:

- Slow, empty, stale, partial, offline, and error states.
- Race conditions, retries, cancellation, and conflicts.
- Security and authorization.
- Keyboard, focus, semantics, and responsive/RTL behavior.

### Minute 8–9: Trade-offs

Compare the chosen design to one credible alternative. Explain when you would change the choice.

### Minute 9–10: Delivery and measurement

> “I would ship a thin vertical slice, add journey and performance monitoring, release progressively, and evolve the design from real usage. Success would be measured by these user and reliability metrics…”

---

## 26. Seven-Day Preparation Plan

Plan for about 90–120 focused minutes per day. Speak answers aloud; silent reading is not enough.

### Day 1: Build your foundation

- Learn the CRAFT framework.
- Practice the 60-second opening and the 10-minute answer structure.
- Review state classification, URL state, query cache, and domain boundaries.
- Exercise: design a simple searchable list in 10 minutes.
- Output: one page of your own preferred architecture vocabulary.

### Day 2: Data-heavy interfaces

- Study autocomplete, infinite scrolling, and large tables.
- Practice race conditions, cancellation, pagination, virtualization, and URL state.
- Exercise: compare infinite scroll with pagination; compare server and client filtering.
- Speak one answer, record it, and remove unnecessary jargon.

### Day 3: Platform and scale

- Study dashboards, design systems, state management, and scaling teams.
- Practice explaining tokens → primitives → patterns.
- Exercise: defend a modular monolith, then explain when micro-frontends become justified.
- Prepare your reusable-components STAR story.

### Day 4: Reliability and security

- Study API errors/retries/cancellation, optimistic updates, authentication, and security.
- Practice the error matrix: 400, 401, 403, 404, 409, 429, 5xx.
- Exercise: explain safe session refresh and a failed optimistic mutation.
- Prepare your production-debugging or incident STAR story.

### Day 5: Delivery quality

- Study observability, performance, testing, and CI/CD.
- Practice explaining measurement before optimization.
- Exercise: design telemetry for a critical user journey and a reversible release.
- Prepare your performance and risky-release STAR stories.

### Day 6: Inclusive global frontend

- Study SSR/CSR/SSG, internationalization, RTL/LTR, accessibility, responsive design, and dark mode.
- Exercise: review a dashboard for keyboard, screen reader, zoom, RTL, text expansion, and theme contrast.
- Prepare your RTL or accessibility STAR story.
- Run one 45-minute mock interview: 25 minutes design, 15 minutes behavioral, 5 minutes feedback.

### Day 7: Simulation and compression

- Run two timed system-design prompts chosen at random.
- Answer six behavioral questions in two minutes each.
- Review only weak areas; do not learn a new framework.
- Create a final one-page cheat sheet with:
  - CRAFT steps.
  - State classification.
  - Failure/error matrix.
  - Performance and accessibility checklist.
  - Five story titles and their results.
- Finish with a calm 60-second introduction connecting your experience to senior-level impact.

---

## 27. Final Cheat Sheet

### Before designing

Users → scale → freshness → devices → SEO → security → accessibility → existing constraints.

### Architecture

Shell → feature boundaries → state ownership → API/BFF → cache → design system → observability.

### Data states

Initial loading → refreshing → success → empty → partial → stale → error → offline → recovery.

### Network

Timeout → cancellation → deduplication → safe retry → backoff/jitter → idempotency → conflict handling.

### Performance

Measure → budget → split → cache → paginate → virtualize → reduce main-thread work → verify in RUM.

### Security

Escape/sanitize → CSP → secure session → CSRF → server authorization → validate → redact → dependency hygiene.

### Accessibility

Semantics → keyboard → focus → labels/errors → contrast → zoom/reflow → announcements → manual testing.

### Senior-level closing sentence

> “I would start with the simplest architecture that meets the current requirements, make the important boundaries explicit, add observability and safe delivery from the beginning, and evolve it when real scale or team constraints justify more complexity.”

---

## 28. Your 60-Second Introduction

> “I’m a frontend engineer with more than six years of experience building enterprise web applications with Vue, Angular, React, and TypeScript. A large part of my work has been turning complex business workflows into reliable and maintainable interfaces. I have built reusable components and design tokens, supported responsive layouts, dark mode, and RTL/LTR experiences, and worked on performance and production debugging. At senior level, I focus not only on delivering a screen, but also on clear architecture, accessibility, observability, safe releases, and helping teams reuse good patterns. I enjoy frontend system design because it connects user experience with engineering trade-offs and long-term team scale.”

`,format:`markdown`}],cd=e=>e.replace(/[*_`#]/g,``).replace(/^\d+\s*[.)-]?\s+/,``).replace(/\\([.:])/g,`$1`).trim(),ld=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``).slice(0,64);function ud(e){let t=e.source.split(/\r?\n/),n=[],r=null,i=[`angular`,`vue`].includes(e.id)?1:2;for(let e of t){let t=e.match(/^(#{1,3})\s+(.+)$/);t&&t[1].length===i?(r&&r.body.join(`
`).trim().length>100&&n.push(r),r={title:cd(t[2]),body:[],level:t[1].length}):r&&r.body.push(e)}return r&&r.body.join(`
`).trim().length>100&&n.push(r),n.map((t,n)=>({id:`${e.id}-${ld(t.title)||n}`,moduleId:e.id,title:t.title,content:t.body.join(`
`).trim(),format:`markdown`,order:n}))}function dd(e){let t=new DOMParser().parseFromString(e.source,`text/html`);return t.querySelectorAll(`script, style, nav, button, input, svg`).forEach(e=>e.remove()),[...t.querySelectorAll(`h2, h3`)].map((t,n)=>{let r=[],i=t.nextElementSibling;for(;i&&!/^H[23]$/.test(i.tagName);)r.push(i.outerHTML),i=i.nextElementSibling;return{id:`${e.id}-${ld(t.textContent)||n}`,moduleId:e.id,title:cd(t.textContent),content:r.join(``),format:`html`,order:n}}).filter(e=>e.content.replace(/<[^>]+>/g,``).trim().length>100)}function fd(){return sd.flatMap(e=>e.format===`html`?dd(e):ud(e))}function pd(e){return e.content.replace(/<[^>]+>/g,` `).replace(/```[\s\S]*?```/g,` `).replace(/[#*_>`\[\]()-]/g,` `).replace(/\s+/g,` `).trim()}var md=`frontend-interview-lab-v1`,hd=()=>new Date().toISOString().slice(0,10),gd={completed:{},bookmarks:{},confidence:{},notes:{},reviews:{},activeDates:[],dailyGoal:8};function _d(){let[e,t]=(0,V.useState)(()=>{try{return{...gd,...JSON.parse(localStorage.getItem(md))}}catch{return gd}});return(0,V.useEffect)(()=>localStorage.setItem(md,JSON.stringify(e)),[e]),[e,e=>t(t=>{let n=e(t);return n.activeDates.includes(hd())||(n.activeDates=[...n.activeDates,hd()]),{...n}})]}function vd({topic:e}){return e.format===`html`?(0,B.jsx)(`div`,{className:`prose`,dangerouslySetInnerHTML:{__html:e.content}}):(0,B.jsx)(Lo,{remarkPlugins:[nu],className:`prose`,components:{a:e=>(0,B.jsx)(`a`,{...e,target:`_blank`,rel:`noreferrer`}),code:({className:e,children:t,...n})=>e?(0,B.jsx)(`code`,{className:e,...n,children:t}):(0,B.jsx)(`code`,{...n,children:t})},children:e.content})}function yd({module:e,compact:t=!1}){return(0,B.jsxs)(`span`,{className:`module-badge ${t?`compact`:``}`,style:{"--module":e.color},children:[(0,B.jsx)(`span`,{className:`module-mark`,children:e.short}),!t&&e.label]})}function bd({value:e,size:t=64}){let n=2*Math.PI*25;return(0,B.jsxs)(`div`,{className:`progress-ring`,style:{width:t,height:t},children:[(0,B.jsxs)(`svg`,{viewBox:`0 0 60 60`,children:[(0,B.jsx)(`circle`,{className:`ring-bg`,cx:`30`,cy:`30`,r:25}),(0,B.jsx)(`circle`,{className:`ring-value`,cx:`30`,cy:`30`,r:25,strokeDasharray:n,strokeDashoffset:n*(1-e/100)})]}),(0,B.jsxs)(`strong`,{children:[Math.round(e),`%`]})]})}function xd({view:e,setView:t,selectedModule:n,setSelectedModule:r,topics:i,data:a,open:o,close:s}){return(0,B.jsxs)(`aside`,{className:`sidebar ${o?`open`:``}`,children:[(0,B.jsxs)(`div`,{className:`brand`,children:[(0,B.jsx)(`div`,{className:`brand-icon`,children:(0,B.jsx)(wu,{size:22})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`strong`,{children:`Interview Lab`}),(0,B.jsx)(`span`,{children:`Frontend mastery`})]}),(0,B.jsx)(`button`,{className:`icon-button mobile-only`,onClick:s,children:(0,B.jsx)(ad,{})})]}),(0,B.jsx)(`nav`,{className:`main-nav`,children:[[`dashboard`,Ru,`Overview`],[`library`,bu,`Question library`],[`focus`,Iu,`Focus session`],[`bookmarks`,Su,`Saved topics`]].map(([n,r,i])=>(0,B.jsxs)(`button`,{className:e===n?`active`:``,onClick:()=>{t(n),s()},children:[(0,B.jsx)(r,{size:18}),(0,B.jsx)(`span`,{children:i}),n===`bookmarks`&&(0,B.jsx)(`em`,{children:Object.keys(a.bookmarks).length})]},n))}),(0,B.jsx)(`div`,{className:`sidebar-label`,children:`Curriculum`}),(0,B.jsx)(`div`,{className:`module-nav`,children:sd.map(o=>{let c=i.filter(e=>e.moduleId===o.id),l=c.filter(e=>a.completed[e.id]).length;return(0,B.jsxs)(`button`,{className:n===o.id&&e===`library`?`active`:``,onClick:()=>{r(o.id),t(`library`),s()},children:[(0,B.jsx)(`span`,{className:`module-dot`,style:{"--module":o.color},children:o.short}),(0,B.jsxs)(`span`,{className:`module-nav-copy`,children:[(0,B.jsx)(`strong`,{children:o.label}),(0,B.jsxs)(`small`,{children:[l,`/`,c.length,` complete`]})]}),(0,B.jsx)(`span`,{className:`tiny-progress`,children:(0,B.jsx)(`i`,{style:{width:`${c.length?l/c.length*100:0}%`,background:o.color}})})]},o.id)})}),(0,B.jsxs)(`div`,{className:`sidebar-streak`,children:[(0,B.jsx)(Pu,{size:22}),(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`strong`,{children:[a.activeDates.length,` study days`]}),(0,B.jsx)(`span`,{children:`Keep the momentum going`})]})]})]})}function Sd({topics:e,data:t,setView:n,setSelectedModule:r,startFocus:i}){let a=e.filter(e=>t.completed[e.id]).length,o=e.length?a/e.length*100:0,s=Object.values(t.reviews).filter(e=>e.last===hd()).length,c=e.filter(e=>!t.reviews[e.id]||t.reviews[e.id].next<=Date.now());return(0,B.jsxs)(`div`,{className:`page dashboard-page`,children:[(0,B.jsxs)(`section`,{className:`hero-card`,children:[(0,B.jsxs)(`div`,{className:`hero-copy`,children:[(0,B.jsxs)(`span`,{className:`eyebrow`,children:[(0,B.jsx)(K,{size:15}),` Personalized senior frontend prep`]}),(0,B.jsxs)(`h1`,{children:[`Turn deep knowledge into`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`em`,{children:`clear interview answers.`})]}),(0,B.jsx)(`p`,{children:`Study the concepts that matter, practise explaining trade-offs, and track your confidence across the full frontend stack.`}),(0,B.jsxs)(`div`,{className:`hero-actions`,children:[(0,B.jsxs)(`button`,{className:`primary`,onClick:()=>i(c),children:[(0,B.jsx)(Ju,{size:17,fill:`currentColor`}),` Start today’s session`]}),(0,B.jsxs)(`button`,{className:`secondary`,onClick:()=>n(`library`),children:[(0,B.jsx)(bu,{size:17}),` Browse curriculum`]})]})]}),(0,B.jsxs)(`div`,{className:`hero-visual`,children:[(0,B.jsx)(`div`,{className:`orbit orbit-one`}),(0,B.jsx)(`div`,{className:`orbit orbit-two`}),(0,B.jsxs)(`div`,{className:`hero-score`,children:[(0,B.jsx)(bd,{value:o,size:118}),(0,B.jsx)(`span`,{children:`Overall mastery`})]}),(0,B.jsxs)(`div`,{className:`floating-pill pill-one`,children:[(0,B.jsx)(Ou,{}),` `,a,` learned`]}),(0,B.jsxs)(`div`,{className:`floating-pill pill-two`,children:[(0,B.jsx)(td,{}),` `,c.length,` due`]})]})]}),(0,B.jsxs)(`section`,{className:`stats-grid`,children:[(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon purple`,children:(0,B.jsx)(Bu,{})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{children:`Total topics`}),(0,B.jsx)(`strong`,{children:e.length}),(0,B.jsx)(`small`,{children:`across 6 tracks`})]})]}),(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon green`,children:(0,B.jsx)(Ou,{})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{children:`Completed`}),(0,B.jsx)(`strong`,{children:a}),(0,B.jsxs)(`small`,{children:[Math.round(o),`% of curriculum`]})]})]}),(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon orange`,children:(0,B.jsx)(Pu,{})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{children:`Study days`}),(0,B.jsx)(`strong`,{children:t.activeDates.length}),(0,B.jsx)(`small`,{children:`recorded locally`})]})]}),(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon blue`,children:(0,B.jsx)(wu,{})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{children:`Reviewed today`}),(0,B.jsx)(`strong`,{children:s}),(0,B.jsxs)(`small`,{children:[`goal: `,t.dailyGoal]})]})]})]}),(0,B.jsxs)(`div`,{className:`section-heading`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{className:`eyebrow`,children:`Your curriculum`}),(0,B.jsx)(`h2`,{children:`Master one track at a time`})]}),(0,B.jsxs)(`button`,{className:`text-button`,onClick:()=>n(`library`),children:[`View all topics `,(0,B.jsx)(vu,{size:16})]})]}),(0,B.jsx)(`section`,{className:`track-grid`,children:sd.map(i=>{let a=e.filter(e=>e.moduleId===i.id),o=a.filter(e=>t.completed[e.id]).length,s=a.length?o/a.length*100:0;return(0,B.jsxs)(`button`,{className:`track-card`,style:{"--module":i.color},onClick:()=>{r(i.id),n(`library`)},children:[(0,B.jsxs)(`div`,{className:`track-top`,children:[(0,B.jsx)(`span`,{className:`track-mark`,children:i.short}),(0,B.jsx)(bd,{value:s,size:54})]}),(0,B.jsx)(`h3`,{children:i.label}),(0,B.jsx)(`p`,{children:i.description}),(0,B.jsxs)(`div`,{className:`track-meta`,children:[(0,B.jsxs)(`span`,{children:[a.length,` topics`]}),(0,B.jsxs)(`span`,{children:[o,` completed`]})]}),(0,B.jsx)(`div`,{className:`track-progress`,children:(0,B.jsx)(`i`,{style:{width:`${s}%`}})})]},i.id)})})]})}function Cd({topics:e,data:t,update:n,selectedModule:r,setSelectedModule:i,search:a,setSearch:o,openTopic:s}){let[c,l]=(0,V.useState)(`all`),u=sd.find(e=>e.id===r)||sd[0],d=e.filter(e=>e.moduleId===u.id).filter(e=>c===`completed`&&!t.completed[e.id]||c===`saved`&&!t.bookmarks[e.id]?!1:`${e.title} ${pd(e)}`.toLowerCase().includes(a.toLowerCase())),f=e.filter(e=>e.moduleId===u.id),p=f.filter(e=>t.completed[e.id]).length;return(0,B.jsxs)(`div`,{className:`page library-page`,children:[(0,B.jsxs)(`div`,{className:`library-hero`,style:{"--module":u.color},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(yd,{module:u}),(0,B.jsx)(`h1`,{children:u.label}),(0,B.jsx)(`p`,{children:u.description})]}),(0,B.jsxs)(`div`,{className:`library-progress`,children:[(0,B.jsx)(bd,{value:f.length?p/f.length*100:0,size:76}),(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`strong`,{children:[p,` of `,f.length]}),(0,B.jsx)(`span`,{children:`topics completed`})]})]})]}),(0,B.jsx)(`div`,{className:`module-tabs`,children:sd.map(e=>(0,B.jsxs)(`button`,{className:r===e.id?`active`:``,style:{"--module":e.color},onClick:()=>i(e.id),children:[e.short,(0,B.jsx)(`span`,{children:e.label})]},e.id))}),(0,B.jsxs)(`div`,{className:`toolbar`,children:[(0,B.jsxs)(`label`,{className:`search-box`,children:[(0,B.jsx)(Qu,{size:18}),(0,B.jsx)(`input`,{value:a,onChange:e=>o(e.target.value),placeholder:`Search questions, concepts and examples…`}),(0,B.jsx)(`kbd`,{children:`/`})]}),(0,B.jsx)(`div`,{className:`filter-group`,children:[`all`,`completed`,`saved`].map(e=>(0,B.jsx)(`button`,{className:c===e?`active`:``,onClick:()=>l(e),children:e},e))})]}),(0,B.jsxs)(`div`,{className:`topic-list`,children:[d.map((e,r)=>(0,B.jsxs)(`article`,{className:`topic-row ${t.completed[e.id]?`complete`:``}`,children:[(0,B.jsx)(`button`,{className:`completion`,onClick:()=>n(t=>({...t,completed:{...t.completed,[e.id]:!t.completed[e.id]}})),children:t.completed[e.id]?(0,B.jsx)(Ou,{}):(0,B.jsx)(Au,{})}),(0,B.jsxs)(`button`,{className:`topic-copy`,onClick:()=>s(e),children:[(0,B.jsx)(`span`,{children:String(r+1).padStart(2,`0`)}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h3`,{children:e.title}),(0,B.jsxs)(`p`,{children:[pd(e).slice(0,165),`…`]})]})]}),(0,B.jsxs)(`div`,{className:`topic-actions`,children:[(0,B.jsx)(`span`,{className:`confidence confidence-${t.confidence[e.id]||0}`,children:[`New`,`Learning`,`Okay`,`Strong`][t.confidence[e.id]||0]}),(0,B.jsx)(`button`,{className:t.bookmarks[e.id]?`saved`:``,onClick:()=>n(t=>({...t,bookmarks:{...t.bookmarks,[e.id]:!t.bookmarks[e.id]}})),children:(0,B.jsx)(Su,{size:18,fill:t.bookmarks[e.id]?`currentColor`:`none`})}),(0,B.jsx)(`button`,{onClick:()=>s(e),children:(0,B.jsx)(vu,{size:18})})]})]},e.id)),!d.length&&(0,B.jsxs)(`div`,{className:`empty-state`,children:[(0,B.jsx)(Qu,{}),(0,B.jsx)(`h3`,{children:`No matching topics`}),(0,B.jsx)(`p`,{children:`Try another search or filter.`})]})]})]})}function wd({topic:e,data:t,update:n,close:r,next:i,previous:a}){let o=sd.find(t=>t.id===e.moduleId);return(0,B.jsxs)(`div`,{className:`reader-shell`,children:[(0,B.jsxs)(`div`,{className:`reader-top`,children:[(0,B.jsxs)(`button`,{className:`secondary small`,onClick:r,children:[(0,B.jsx)(gu,{}),` Back to library`]}),(0,B.jsx)(yd,{module:o}),(0,B.jsxs)(`div`,{className:`reader-actions`,children:[(0,B.jsx)(`button`,{className:t.bookmarks[e.id]?`saved`:``,onClick:()=>n(t=>({...t,bookmarks:{...t.bookmarks,[e.id]:!t.bookmarks[e.id]}})),children:(0,B.jsx)(Su,{fill:t.bookmarks[e.id]?`currentColor`:`none`})}),(0,B.jsx)(`button`,{className:t.completed[e.id]?`done`:``,onClick:()=>n(t=>({...t,completed:{...t.completed,[e.id]:!t.completed[e.id]}})),children:t.completed[e.id]?(0,B.jsx)(Ou,{}):(0,B.jsx)(Au,{})})]})]}),(0,B.jsxs)(`article`,{className:`reader`,children:[(0,B.jsxs)(`header`,{children:[(0,B.jsx)(`span`,{className:`eyebrow`,children:`Interview topic`}),(0,B.jsx)(`h1`,{children:e.title}),(0,B.jsxs)(`div`,{className:`confidence-picker`,children:[(0,B.jsx)(`span`,{children:`How confident are you?`}),[1,2,3].map(r=>(0,B.jsx)(`button`,{className:(t.confidence[e.id]||0)===r?`active`:``,onClick:()=>n(t=>({...t,confidence:{...t.confidence,[e.id]:r}})),children:[`Learning`,`Okay`,`Strong`][r-1]},r))]})]}),(0,B.jsx)(vd,{topic:e}),(0,B.jsxs)(`section`,{className:`notes-panel`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(Ku,{}),(0,B.jsx)(`h3`,{children:`Your interview notes`})]}),(0,B.jsx)(`textarea`,{value:t.notes[e.id]||``,onChange:t=>n(n=>({...n,notes:{...n.notes,[e.id]:t.target.value}})),placeholder:`Write your own explanation, real project example, or a follow-up question…`})]}),(0,B.jsxs)(`div`,{className:`reader-footer`,children:[(0,B.jsxs)(`button`,{className:`secondary`,disabled:!a,onClick:()=>a&&a(),children:[(0,B.jsx)(gu,{}),` Previous`]}),(0,B.jsxs)(`button`,{className:`primary`,onClick:()=>{n(t=>({...t,completed:{...t.completed,[e.id]:!0}})),i&&i()},children:[(0,B.jsx)(Eu,{}),` Mark complete `,i&&`& continue`,` `]})]})]})]})}function Td({queue:e,data:t,update:n,onExit:r}){let[i,a]=(0,V.useState)(0),[o,s]=(0,V.useState)(!1),c=e[i];if(!c)return(0,B.jsxs)(`div`,{className:`page empty-state`,children:[(0,B.jsx)(rd,{}),(0,B.jsx)(`h2`,{children:`You’re caught up`}),(0,B.jsx)(`p`,{children:`No topics are due right now. Browse the library and choose a new one.`}),(0,B.jsx)(`button`,{className:`primary`,onClick:r,children:`Back to overview`})]});let l=sd.find(e=>e.id===c.moduleId),u=o=>{let l=t.reviews[c.id]||{interval:0},u=o===1?0:o===2?Math.max(1,l.interval||1):Math.max(3,(l.interval||1)*2),d=Date.now()+(o===1?6e5:u*24*60*60*1e3);n(e=>({...e,completed:{...e.completed,[c.id]:o>=2},confidence:{...e.confidence,[c.id]:o},reviews:{...e.reviews,[c.id]:{interval:u,next:d,last:hd()}}})),i<e.length-1?(a(i+1),s(!1)):r()};return(0,B.jsxs)(`div`,{className:`focus-page`,children:[(0,B.jsxs)(`div`,{className:`focus-header`,children:[(0,B.jsx)(`button`,{className:`icon-button`,onClick:r,children:(0,B.jsx)(ad,{})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{children:`Focus session`}),(0,B.jsxs)(`strong`,{children:[i+1,` / `,e.length]})]}),(0,B.jsx)(`div`,{className:`session-progress`,children:(0,B.jsx)(`i`,{style:{width:`${(i+1)/e.length*100}%`}})})]}),(0,B.jsxs)(`main`,{className:`flashcard ${o?`revealed`:``}`,children:[(0,B.jsx)(yd,{module:l}),(0,B.jsx)(`span`,{className:`eyebrow`,children:`Explain this out loud`}),(0,B.jsx)(`h1`,{children:c.title}),o?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{className:`focus-answer`,children:(0,B.jsx)(vd,{topic:c})}),(0,B.jsxs)(`div`,{className:`rating-area`,children:[(0,B.jsx)(`span`,{children:`How well did you answer?`}),(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`button`,{className:`again`,onClick:()=>u(1),children:[(0,B.jsx)(Xu,{}),` Again`,(0,B.jsx)(`small`,{children:`10 min`})]}),(0,B.jsxs)(`button`,{className:`hard`,onClick:()=>u(2),children:[(0,B.jsx)(Mu,{}),` Learning`,(0,B.jsx)(`small`,{children:`1 day`})]}),(0,B.jsxs)(`button`,{className:`good`,onClick:()=>u(3),children:[(0,B.jsx)(J,{}),` Strong`,(0,B.jsx)(`small`,{children:`3+ days`})]})]})]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{className:`focus-prompt`,children:`Structure your answer: definition → why it matters → example → trade-off.`}),(0,B.jsxs)(`button`,{className:`primary reveal-button`,onClick:()=>s(!0),children:[(0,B.jsx)(wu,{}),` Reveal study answer`]})]})]})]})}function Ed({topics:e,data:t,openTopic:n}){let r=e.filter(e=>t.bookmarks[e.id]);return(0,B.jsxs)(`div`,{className:`page`,children:[(0,B.jsxs)(`div`,{className:`page-title`,children:[(0,B.jsx)(`span`,{className:`eyebrow`,children:`Saved for later`}),(0,B.jsx)(`h1`,{children:`Bookmarked topics`}),(0,B.jsx)(`p`,{children:`Keep your hardest or most useful concepts close.`})]}),(0,B.jsx)(`div`,{className:`bookmark-grid`,children:r.map(e=>{let t=sd.find(t=>t.id===e.moduleId);return(0,B.jsxs)(`button`,{onClick:()=>n(e),children:[(0,B.jsx)(yd,{module:t,compact:!0}),(0,B.jsx)(`h3`,{children:e.title}),(0,B.jsxs)(`p`,{children:[pd(e).slice(0,145),`…`]}),(0,B.jsxs)(`span`,{children:[`Open topic `,(0,B.jsx)(vu,{})]})]},e.id)})}),!r.length&&(0,B.jsxs)(`div`,{className:`empty-state`,children:[(0,B.jsx)(Su,{}),(0,B.jsx)(`h3`,{children:`No saved topics yet`}),(0,B.jsx)(`p`,{children:`Use the bookmark icon in the library to build your review list.`})]})]})}function Dd(){let e=(0,V.useMemo)(()=>fd(),[]),[t,n]=_d(),[r,i]=(0,V.useState)(`dashboard`),[a,o]=(0,V.useState)(`javascript`),[s,c]=(0,V.useState)(``),[l,u]=(0,V.useState)(null),[d,f]=(0,V.useState)(null),[p,m]=(0,V.useState)(!1),[h,g]=(0,V.useState)(()=>localStorage.getItem(`interview-theme`)||`dark`),_=(0,V.useRef)(null);(0,V.useEffect)(()=>{document.documentElement.dataset.theme=h,localStorage.setItem(`interview-theme`,h)},[h]),(0,V.useEffect)(()=>{let e=e=>{e.key===`/`&&![`INPUT`,`TEXTAREA`].includes(document.activeElement.tagName)&&(e.preventDefault(),i(`library`),setTimeout(()=>document.querySelector(`.search-box input`)?.focus(),50))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let v=l?e.filter(e=>e.moduleId===l.moduleId):[],y=l?v.findIndex(e=>e.id===l.id):-1,b=(t=e)=>{f(t.length?t.slice(0,Math.min(12,t.length)):e.slice(0,12)),u(null)};return d?(0,B.jsx)(Td,{queue:d,data:t,update:n,onExit:()=>{f(null),i(`dashboard`)}}):l?(0,B.jsx)(wd,{topic:l,data:t,update:n,close:()=>u(null),previous:y>0?()=>u(v[y-1]):null,next:y<v.length-1?()=>u(v[y+1]):null}):(0,B.jsxs)(`div`,{className:`app-shell`,children:[(0,B.jsx)(xd,{view:r,setView:i,selectedModule:a,setSelectedModule:o,topics:e,data:t,open:p,close:()=>m(!1)}),p&&(0,B.jsx)(`button`,{className:`sidebar-backdrop`,onClick:()=>m(!1)}),(0,B.jsxs)(`div`,{className:`main-shell`,children:[(0,B.jsxs)(`header`,{className:`topbar`,children:[(0,B.jsx)(`button`,{className:`icon-button mobile-only`,onClick:()=>m(!0),children:(0,B.jsx)(Hu,{})}),(0,B.jsxs)(`div`,{className:`topbar-title`,children:[(0,B.jsx)(`span`,{children:r===`dashboard`?`Good to see you`:`Interview workspace`}),(0,B.jsx)(`strong`,{children:r===`dashboard`?`Ready to sharpen your answers?`:sd.find(e=>e.id===a)?.label})]}),(0,B.jsxs)(`div`,{className:`topbar-actions`,children:[(0,B.jsxs)(`button`,{className:`quick-search`,onClick:()=>{i(`library`),setTimeout(()=>document.querySelector(`.search-box input`)?.focus(),50)},children:[(0,B.jsx)(Qu,{}),(0,B.jsx)(`span`,{children:`Quick search`}),(0,B.jsx)(`kbd`,{children:`/`})]}),(0,B.jsx)(`button`,{className:`icon-button`,onClick:()=>g(h===`dark`?`light`:`dark`),children:h===`dark`?(0,B.jsx)(X,{}):(0,B.jsx)(Wu,{})}),(0,B.jsx)(`div`,{className:`avatar`,children:`ME`})]})]}),(0,B.jsxs)(`main`,{ref:_,children:[r===`dashboard`&&(0,B.jsx)(Sd,{topics:e,data:t,setView:i,setSelectedModule:o,startFocus:b}),r===`library`&&(0,B.jsx)(Cd,{topics:e,data:t,update:n,selectedModule:a,setSelectedModule:o,search:s,setSearch:c,openTopic:u}),r===`focus`&&(0,B.jsxs)(`div`,{className:`page focus-launch`,children:[(0,B.jsx)(`div`,{className:`launch-visual`,children:(0,B.jsx)(wu,{})}),(0,B.jsx)(`span`,{className:`eyebrow`,children:`Active recall`}),(0,B.jsx)(`h1`,{children:`Practise answers, not recognition.`}),(0,B.jsx)(`p`,{children:`Try to explain each topic before revealing the guide. Then rate yourself to schedule the next review.`}),(0,B.jsxs)(`button`,{className:`primary`,onClick:()=>b(e.filter(e=>!t.reviews[e.id]||t.reviews[e.id].next<=Date.now())),children:[(0,B.jsx)(Ju,{fill:`currentColor`}),` Begin focused review`]})]}),r===`bookmarks`&&(0,B.jsx)(Ed,{topics:e,data:t,openTopic:u})]})]})]})}od.createRoot(document.getElementById(`root`)).render((0,B.jsx)(V.StrictMode,{children:(0,B.jsx)(Dd,{})}));