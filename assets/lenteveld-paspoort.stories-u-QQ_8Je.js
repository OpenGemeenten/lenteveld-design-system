import{j as s}from"./jsx-runtime-Q5kDp4vx.js";import{_ as Ee,a as te,d as _e,b as Le,e as me,O as Z,f as O,T as Pe,i as Re,j as Te,k as N,l as oe,m as De,n as R,U as Se,o as ae,A as Ce,p as ie}from"./index-Jxs-A6ne.js";import{_ as Ie,a as Ue,b as se}from"./getPrototypeOf-GRdCamOq.js";import{r as ze,R as ee}from"./index-DogsOklH.js";import"./index-MroJ3egt.js";import{O as Ae}from"./components-0r8SQnGS.js";import"./extends-dGVwEr9R.js";import"./iframe-9gH1jE0J.js";import"../sb-preview/runtime.js";function Me(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(i,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Ee(n.key),n)}}function Ne(i,t,a){return t&&ce(i.prototype,t),a&&ce(i,a),Object.defineProperty(i,"prototype",{writable:!1}),i}function Be(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&Ie(i,t)}function Ge(i,t){if(t&&(te(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ue(i)}var je={exports:{}},be={exports:{}};(function(i){function t(a){"@babel/helpers - typeof";return i.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i.exports.__esModule=!0,i.exports.default=i.exports,t(a)}i.exports=t,i.exports.__esModule=!0,i.exports.default=i.exports})(be);var Fe=be.exports;(function(i){var t=Fe.default;function a(){i.exports=a=function(){return f},i.exports.__esModule=!0,i.exports.default=i.exports;var n,f={},p=Object.prototype,h=p.hasOwnProperty,y=Object.defineProperty||function(o,e,r){o[e]=r.value},E=typeof Symbol=="function"?Symbol:{},m=E.iterator||"@@iterator",j=E.asyncIterator||"@@asyncIterator",g=E.toStringTag||"@@toStringTag";function x(o,e,r){return Object.defineProperty(o,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),o[e]}try{x({},"")}catch{x=function(r,c,l){return r[c]=l}}function B(o,e,r,c){var l=e&&e.prototype instanceof T?e:T,u=Object.create(l.prototype),d=new Y(c||[]);return y(u,"_invoke",{value:ke(o,r,d)}),u}function z(o,e,r){try{return{type:"normal",arg:o.call(e,r)}}catch(c){return{type:"throw",arg:c}}}f.wrap=B;var A="suspendedStart",M="suspendedYield",G="executing",L="completed",v={};function T(){}function I(){}function k(){}var K={};x(K,m,function(){return this});var $=Object.getPrototypeOf,F=$&&$($(J([])));F&&F!==p&&h.call(F,m)&&(K=F);var U=k.prototype=T.prototype=Object.create(K);function re(o){["next","throw","return"].forEach(function(e){x(o,e,function(r){return this._invoke(e,r)})})}function H(o,e){function r(l,u,d,b){var w=z(o[l],o,u);if(w.type!=="throw"){var D=w.arg,P=D.value;return P&&t(P)=="object"&&h.call(P,"__await")?e.resolve(P.__await).then(function(S){r("next",S,d,b)},function(S){r("throw",S,d,b)}):e.resolve(P).then(function(S){D.value=S,d(D)},function(S){return r("throw",S,d,b)})}b(w.arg)}var c;y(this,"_invoke",{value:function(u,d){function b(){return new e(function(w,D){r(u,d,w,D)})}return c=c?c.then(b,b):b()}})}function ke(o,e,r){var c=A;return function(l,u){if(c===G)throw new Error("Generator is already running");if(c===L){if(l==="throw")throw u;return{value:n,done:!0}}for(r.method=l,r.arg=u;;){var d=r.delegate;if(d){var b=ne(d,r);if(b){if(b===v)continue;return b}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(c===A)throw c=L,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);c=G;var w=z(o,e,r);if(w.type==="normal"){if(c=r.done?L:M,w.arg===v)continue;return{value:w.arg,done:r.done}}w.type==="throw"&&(c=L,r.method="throw",r.arg=w.arg)}}}function ne(o,e){var r=e.method,c=o.iterator[r];if(c===n)return e.delegate=null,r==="throw"&&o.iterator.return&&(e.method="return",e.arg=n,ne(o,e),e.method==="throw")||r!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var l=z(c,o.iterator,e.arg);if(l.type==="throw")return e.method="throw",e.arg=l.arg,e.delegate=null,v;var u=l.arg;return u?u.done?(e[o.resultName]=u.value,e.next=o.nextLoc,e.method!=="return"&&(e.method="next",e.arg=n),e.delegate=null,v):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function Oe(o){var e={tryLoc:o[0]};1 in o&&(e.catchLoc=o[1]),2 in o&&(e.finallyLoc=o[2],e.afterLoc=o[3]),this.tryEntries.push(e)}function W(o){var e=o.completion||{};e.type="normal",delete e.arg,o.completion=e}function Y(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(Oe,this),this.reset(!0)}function J(o){if(o||o===""){var e=o[m];if(e)return e.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var r=-1,c=function l(){for(;++r<o.length;)if(h.call(o,r))return l.value=o[r],l.done=!1,l;return l.value=n,l.done=!0,l};return c.next=c}}throw new TypeError(t(o)+" is not iterable")}return I.prototype=k,y(U,"constructor",{value:k,configurable:!0}),y(k,"constructor",{value:I,configurable:!0}),I.displayName=x(k,g,"GeneratorFunction"),f.isGeneratorFunction=function(o){var e=typeof o=="function"&&o.constructor;return!!e&&(e===I||(e.displayName||e.name)==="GeneratorFunction")},f.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,k):(o.__proto__=k,x(o,g,"GeneratorFunction")),o.prototype=Object.create(U),o},f.awrap=function(o){return{__await:o}},re(H.prototype),x(H.prototype,j,function(){return this}),f.AsyncIterator=H,f.async=function(o,e,r,c,l){l===void 0&&(l=Promise);var u=new H(B(o,e,r,c),l);return f.isGeneratorFunction(e)?u:u.next().then(function(d){return d.done?d.value:u.next()})},re(U),x(U,g,"Generator"),x(U,m,function(){return this}),x(U,"toString",function(){return"[object Generator]"}),f.keys=function(o){var e=Object(o),r=[];for(var c in e)r.push(c);return r.reverse(),function l(){for(;r.length;){var u=r.pop();if(u in e)return l.value=u,l.done=!1,l}return l.done=!0,l}},f.values=J,Y.prototype={constructor:Y,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(W),!e)for(var r in this)r.charAt(0)==="t"&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function c(D,P){return d.type="throw",d.arg=e,r.next=D,P&&(r.method="next",r.arg=n),!!P}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],d=u.completion;if(u.tryLoc==="root")return c("end");if(u.tryLoc<=this.prev){var b=h.call(u,"catchLoc"),w=h.call(u,"finallyLoc");if(b&&w){if(this.prev<u.catchLoc)return c(u.catchLoc,!0);if(this.prev<u.finallyLoc)return c(u.finallyLoc)}else if(b){if(this.prev<u.catchLoc)return c(u.catchLoc,!0)}else{if(!w)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return c(u.finallyLoc)}}}},abrupt:function(e,r){for(var c=this.tryEntries.length-1;c>=0;--c){var l=this.tryEntries[c];if(l.tryLoc<=this.prev&&h.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var u=l;break}}u&&(e==="break"||e==="continue")&&u.tryLoc<=r&&r<=u.finallyLoc&&(u=null);var d=u?u.completion:{};return d.type=e,d.arg=r,u?(this.method="next",this.next=u.finallyLoc,v):this.complete(d)},complete:function(e,r){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&r&&(this.next=r),v},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.finallyLoc===e)return this.complete(c.completion,c.afterLoc),W(c),v}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc===e){var l=c.completion;if(l.type==="throw"){var u=l.arg;W(c)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,c){return this.delegate={iterator:J(e),resultName:r,nextLoc:c},this.method==="next"&&(this.arg=n),v}},f}i.exports=a,i.exports.__esModule=!0,i.exports.default=i.exports})(je);var He=je.exports,q=He();try{regeneratorRuntime=q}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=q:Function("r","regeneratorRuntime = r")(q)}var Ve=function(t){return t.toLowerCase().split("-").map(function(a){return a.charAt(0).toUpperCase()+a.slice(1)}).join("")},xe=function(t){return t.replace(/([A-Z])/g,function(a){return"-".concat(a[0].toLowerCase())})},Ke=function(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t instanceof Element){var f=$e(t.classList,a,n);f!==""&&(t.className=f),Object.keys(a).forEach(function(p){if(!(p==="children"||p==="style"||p==="ref"||p==="class"||p==="className"||p==="forwardedRef"))if(p.indexOf("on")===0&&p[2]===p[2].toUpperCase()){var h=p.substring(2),y=h[0].toLowerCase()+h.substring(1);we(y)||Ye(t,y,a[p])}else{t[p]=a[p];var E=te(a[p]);E==="string"&&t.setAttribute(xe(p),a[p])}})}},$e=function(t,a,n){var f=a.className||a.class,p=n.className||n.class,h=Q(t),y=Q(f?f.split(" "):[]),E=Q(p?p.split(" "):[]),m=[];return h.forEach(function(j){y.has(j)?(m.push(j),y.delete(j)):E.has(j)||m.push(j)}),y.forEach(function(j){return m.push(j)}),m.join(" ")},We=function(t){switch(t){case"doubleclick":return"dblclick"}return t};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */var we=function(t){if(typeof document>"u")return!0;var a="on"+We(t),n=a in document;if(!n){var f=document.createElement("div");f.setAttribute(a,"return;"),n=typeof f[a]=="function"}return n},Ye=function(t,a,n){var f=t.__events||(t.__events={}),p=f[a];p&&t.removeEventListener(a,p),t.addEventListener(a,f[a]=function(y){n&&n.call(this,y)})},Q=function(t){var a=new Map;return t.forEach(function(n){return a.set(n,n)}),a};function ue(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),a.push.apply(a,n)}return a}function le(i){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(a),!0).forEach(function(n){me(i,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):ue(Object(a)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(a,n))})}return i}var Je=function(t,a){typeof t=="function"?t(a):t!=null&&(t.current=a)},Ze=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return function(f){a.forEach(function(p){Je(p,f)})}},qe=function(t,a){var n=function(p,h){return ee.createElement(t,le(le({},p),{},{forwardedRef:h}))};return n.displayName=a,ee.forwardRef(n)},Qe=["children","forwardedRef","style","className","ref"];function fe(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),a.push.apply(a,n)}return a}function pe(i){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?fe(Object(a),!0).forEach(function(n){me(i,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(a,n))})}return i}function Xe(i){var t=et();return function(){var n=se(i),f;if(t){var p=se(this).constructor;f=Reflect.construct(n,arguments,p)}else f=n.apply(this,arguments);return Ge(this,f)}}function et(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var _=function(t,a,n,f){f!==void 0&&f();var p=Ve(t),h=function(y){Be(m,y);var E=Xe(m);function m(j){var g;return Me(this,m),g=E.call(this,j),g.setComponentElRef=function(x){g.componentEl=x},g}return Ne(m,[{key:"componentDidMount",value:function(){this.componentDidUpdate(this.props)}},{key:"componentDidUpdate",value:function(g){Ke(this.componentEl,this.props,g)}},{key:"render",value:function(){var g=this.props,x=g.children,B=g.forwardedRef,z=g.style;g.className,g.ref;var A=Le(g,Qe),M=Object.keys(A).reduce(function(L,v){var T=A[v];if(v.indexOf("on")===0&&v[2]===v[2].toUpperCase()){var I=v.substring(2).toLowerCase();typeof document<"u"&&we(I)&&(L[v]=T)}else{var k=te(T);(k==="string"||k==="boolean"||k==="number")&&(L[xe(v)]=T)}return L},{});n&&(M=n(this.props,M));var G=pe(pe({},M),{},{ref:Ze(B,this.setComponentElRef),style:z});return ze.createElement(t,G,x)}}],[{key:"displayName",get:function(){return p}}]),m}(ee.Component);return a&&(h.contextType=a),qe(h,p)};_e();var tt=_("utrecht-article"),de=_("utrecht-button-group"),rt=_("utrecht-button-link"),nt=_("utrecht-document"),ot=_("utrecht-heading-1"),X=_("utrecht-heading-2"),he=_("utrecht-heading-3"),C=_("utrecht-paragraph"),at=_("utrecht-spotlight-section");const it=()=>s.jsx(nt,{children:s.jsxs(tt,{className:"og-rich-text",children:[s.jsx(ot,{children:"Paspoort aanvragen"}),s.jsx(C,{lead:!0,children:"Wilt u een paspoort aanvragen? Maak een afspraak om langs te komen in ons dorpshuis. U betaalt de kosten bij de aanvraag. Na 5 werkdagen kunt u het paspoort of de identiteitskaart zelf ophalen in het gemeentehuis."}),s.jsx(de,{children:s.jsx(rt,{appearance:"primary-action-button",href:"#",children:"Maak een afspraak"})}),s.jsx(de,{children:s.jsx(Ae,{children:"Maak een afspraak"})}),s.jsx(X,{children:"Meenemen"}),s.jsxs(Z,{children:[s.jsx(O,{children:"Alle paspoorten en ID-kaarten die u nu hebt. Ook als ze zijn verlopen en nog niet door de gemeente ongeldig zijn gemaakt."}),s.jsx(O,{children:"Eén recente pasfoto (niet ouder dan 6 maanden). Let op de eisen (Rijksoverheid)."}),s.jsx(O,{children:"Laat de foto bij voorkeur maken door een fotograaf. In de hal van het gemeentehuis staat een pasfoto-automaat voor noodgevallen. Volg precies de instructies voor een geschikte pasfoto (eigen risico)."}),s.jsx(O,{children:"Pinpas: Betaal bij voorkeur met uw pinpas. Contant betalen is ook mogelijk."}),s.jsx(O,{children:"Bij een paspoort voor een kind moet hij of zij ook aanwezig zijn bij aanvraag en afhalen."})]}),s.jsx(he,{children:"Jonger dan 18 jaar?"}),s.jsx(C,{children:"Neem dan ook mee:"}),s.jsx(Z,{children:s.jsx(O,{children:"Toestemmingsverklaring reisdocumenten (pdf, 318 KB) van beide ouders (of van degene die het gezag over het kind heeft)"})}),s.jsxs(Pe,{children:[s.jsx(Re,{children:"Kosten"}),s.jsx(Te,{children:s.jsxs(N,{children:[s.jsx(oe,{children:"Label"}),s.jsx(oe,{children:"Prijs"})]})}),s.jsxs(De,{children:[s.jsxs(N,{children:[s.jsx(R,{children:"voor personen tot en met 17 jaar (5 jaar geldig)"}),s.jsx(R,{children:"€ 67,30"})]}),s.jsxs(N,{children:[s.jsx(R,{children:"voor personen van 18 jaar en ouder (10 jaar geldig)"}),s.jsx(R,{children:"€ 67,30"})]}),s.jsxs(N,{children:[s.jsx(R,{children:"Spoedaanvraag"}),s.jsx(R,{children:"€ 61,62 toeslag"})]}),s.jsxs(N,{children:[s.jsx(R,{children:"bezorgen van uw paspoort"}),s.jsx(R,{children:"€ 6,00 per adres"})]})]})]}),s.jsxs(at,{appearance:"info",children:[s.jsx(he,{children:"Heading"}),s.jsx(C,{children:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"})]}),s.jsx(X,{children:"Ophalen paspoort of ID-kaart"}),s.jsx(C,{children:"U moet altijd zelf uw paspoort of identiteitskaart komen ophalen aan de balie. Heeft u een een paspoort of ID-kaart voor een kind aangevraagd? Dan moet uw kind meekomen. Voor het ophalen kunt u iedere werkdag tussen 8.30 en 17.00 uur en op donderdag tot 20.00 uur binnenlopen."}),s.jsx(C,{children:"Vergeet niet de volgende documenten mee te nemen:"}),s.jsxs(Se,{children:[s.jsx(ae,{children:"uw afhaalbewijs"}),s.jsx(ae,{children:"uw oude paspoort of ID-kaart"})]}),s.jsx(C,{children:"Vraagt u een paspoort of ID-kaart aan omdat uw oude kwijt of gestolen is? Dan duurt de afspraak langer omdat we de vermissing registreren."}),s.jsxs(Ce,{children:[s.jsx(ie,{body:null,label:"Paspoort kwijt of gestolen",expanded:!1}),s.jsx(ie,{body:null,label:"Spoedaanvraag paspoort",expanded:!0,children:s.jsx(C,{children:"Als u voor 13.00 uur een spoedaanvraag doet, kunt u het paspoort meestal de volgende werkdag na 11.00 uur afhalen. Over uitzonderingen informeren we u aan de balie. Voor een spoedaanvraag betaalt u meer dan voor een gewone aanvraag."})})]}),s.jsx(X,{children:"Verschil paspoort en identiteitskaart"}),s.jsxs(Z,{children:[s.jsx(O,{children:"Alle paspoorten en ID-kaarten die u nu hebt. Ook als ze zijn verlopen en nog niet door de gemeente ongeldig zijn gemaakt."}),s.jsx(O,{children:"Eén recente pasfoto (niet ouder dan 6 maanden). Let op de eisen (Rijksoverheid)."}),s.jsx(O,{children:"Laat de foto bij voorkeur maken door een fotograaf. In de hal van het gemeentehuis staat een pasfoto-automaat voor noodgevallen. Volg precies de instructies voor een geschikte pasfoto (eigen risico)."}),s.jsx(O,{children:"Pinpas: Betaal bij voorkeur met uw pinpas. Contant betalen is ook mogelijk."}),s.jsx(O,{children:"Bij een paspoort voor een kind moet hij of zij ook aanwezig zijn bij aanvraag en afhalen."})]})]})});/* @license CC0-1.0 */const gt={title:"Template/Productpagina",id:"template-product-page",component:it,argTypes:{},args:{},tags:["autodocs"],parameters:{docs:{description:{component:"De productpagina is de hart en ziel van gemeentelijke dienstverlening."}}}},V={};var ve,ge,ye;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:"{}",...(ye=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const yt=["Default"];export{V as Default,yt as __namedExportsOrder,gt as default};
