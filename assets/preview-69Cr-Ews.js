import{j as se}from"./jsx-runtime-Q5kDp4vx.js";import{_ as v}from"./iframe-9gH1jE0J.js";import"./index-DogsOklH.js";import{d as oe,D as le}from"./index-Jxs-A6ne.js";const ce="omg";let T,B,q=!1,L=!1;const f=(e,t="")=>()=>{},re=(e,t)=>()=>{},ae="{visibility:hidden}.hydrated{visibility:inherit}",z="slot-fb{display:contents}slot-fb[hidden]{display:none}",O={},ie=e=>e!=null,G=e=>(e=typeof e,e==="object"||e==="function");function N(e){var t,s,n;return(n=(s=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||s===void 0?void 0:s.getAttribute("content"))!==null&&n!==void 0?n:void 0}const de=(e,t,...s)=>{let n=null,o=!1,c=!1;const l=[],r=i=>{for(let d=0;d<i.length;d++)n=i[d],Array.isArray(n)?r(n):n!=null&&typeof n!="boolean"&&((o=typeof e!="function"&&!G(n))&&(n=String(n)),o&&c?l[l.length-1].$text$+=n:l.push(o?C(null,n):n),c=o)};if(r(s),t){const i=t.className||t.class;i&&(t.class=typeof i!="object"?i:Object.keys(i).filter(d=>i[d]).join(" "))}const a=C(e,null);return a.$attrs$=t,l.length>0&&(a.$children$=l),a},C=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return s.$attrs$=null,s},$e={},ue=e=>e&&e.$tag$===$e,fe=(e,t,s)=>{const n=$.ce(t,s);return e.dispatchEvent(n),n},H=new WeakMap,pe=(e,t,s)=>{let n=b.get(e);De&&s?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,b.set(e,n)},me=(e,t,s)=>{var n;const o=W(t),c=b.get(o);if(e=e.nodeType===11?e:u,c)if(typeof c=="string"){e=e.head||e;let l=H.get(e),r;if(l||H.set(e,l=new Set),!l.has(o)){{r=u.createElement("style"),r.innerHTML=c;const a=(n=$.$nonce$)!==null&&n!==void 0?n:N(u);a!=null&&r.setAttribute("nonce",a),e.insertBefore(r,e.querySelector("link"))}t.$flags$&4&&(r.innerHTML+=z),l&&l.add(o)}}else e.adoptedStyleSheets.includes(c)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,c]);return o},ge=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,n=t.$flags$,o=f("attachStyles",t.$tagName$),c=me(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);n&10&&(s["s-sc"]=c,s.classList.add(c+"-h")),o()},W=(e,t)=>"sc-"+e.$tagName$,he=(e,t,s,n,o,c)=>{if(s!==n){let l=je(e,t);if(t.toLowerCase(),t==="class"){const r=e.classList,a=j(s),i=j(n);r.remove(...a.filter(d=>d&&!i.includes(d))),r.add(...i.filter(d=>d&&!a.includes(d)))}else{const r=G(n);if((l||r&&n!==null)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{const a=n??"";t==="list"?l=!1:(s==null||e[t]!=a)&&(e[t]=a)}}catch{}n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&e.removeAttribute(t):(!l||c&4||o)&&!r&&(n=n===!0?"":n,e.setAttribute(t,n))}}},ye=/\s/,j=e=>e?e.split(ye):[],F=(e,t,s,n)=>{const o=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,c=e&&e.$attrs$||O,l=t.$attrs$||O;for(n in l)he(o,n,c[n],l[n],s,t.$flags$)},Y=(e,t,s,n)=>{const o=t.$children$[s];let c=0,l,r;if(o.$text$!==null)l=o.$elm$=u.createTextNode(o.$text$);else if(l=o.$elm$=u.createElement(o.$tag$),F(null,o,q),ie(T)&&l["s-si"]!==T&&l.classList.add(l["s-si"]=T),o.$children$)for(c=0;c<o.$children$.length;++c)r=Y(e,o,c),r&&l.appendChild(r);return l},ve=(e,t,s,n,o,c)=>{let l=e,r;for(l.shadowRoot&&l.tagName===B&&(l=l.shadowRoot);o<=c;++o)n[o]&&(r=Y(null,s,o),r&&(n[o].$elm$=r,l.insertBefore(r,t)))},Ee=(e,t)=>{const s=t.$elm$=e.$elm$,n=t.$children$,o=t.$tag$,c=t.$text$;c===null?(o==="slot"||F(e,t,q),n!==null&&ve(s,null,t,n,0,n.length-1)):e.$text$!==c&&(s.data=c)},Se=(e,t,s=!1)=>{const n=e.$hostElement$,o=e.$vnode$||C(null,null),c=ue(t)?t:de(null,null,t);if(B=n.tagName,s&&c.$attrs$)for(const l of Object.keys(c.$attrs$))n.hasAttribute(l)&&!["key","ref","style","class"].includes(l)&&(c.$attrs$[l]=n[l]);c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=o.$elm$=n.shadowRoot||n,T=n["s-sc"],Ee(o,c)},K=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(s=>e.$onRenderResolve$=s))},J=(e,t)=>{if(e.$flags$&4){e.$flags$|=512;return}return K(e,e.$ancestorComponent$),qe(()=>_e(e,t))},_e=(e,t)=>{const s=f("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let o;return s(),Te(o,()=>we(e,n,t))},Te=(e,t)=>be(e)?e.then(t):t(),be=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",we=async(e,t,s)=>{var n;const o=e.$hostElement$,c=f("update",e.$cmpMeta$.$tagName$),l=o["s-rc"];s&&ge(e);const r=f("render",e.$cmpMeta$.$tagName$);Le(e,t,o,s),l&&(l.map(a=>a()),o["s-rc"]=void 0),r(),c();{const a=(n=o["s-p"])!==null&&n!==void 0?n:[],i=()=>Ce(e);a.length===0?i():(Promise.all(a).then(i),e.$flags$|=4,a.length=0)}},Le=(e,t,s,n)=>{try{t=t.render(),e.$flags$|=2,Se(e,t,n)}catch(o){p(o,e.$hostElement$)}return null},Ce=e=>{const t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,n=f("postUpdate",t),o=e.$ancestorComponent$;e.$flags$&64?n():(e.$flags$|=64,X(s),n(),e.$onReadyResolve$(s),o||Q()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&R(()=>J(e,!1)),e.$flags$&=-517},Q=e=>{X(u.documentElement),R(()=>fe(A,"appload",{detail:{namespace:ce}}))},X=e=>e.classList.add("hydrated"),ke=(e,t,s)=>e,Pe=async(e,t,s,n)=>{let o;if(!(t.$flags$&32)){t.$flags$|=32;{if(o=xe(s),o.then){const a=re();o=await o,a()}const r=f("createInstance",s.$tagName$);try{new o(t)}catch(a){p(a)}r()}if(o.style){let r=o.style;const a=W(s);if(!b.has(a)){const i=f("registerStyles",s.$tagName$);pe(a,r,!!(s.$flags$&1)),i()}}}const c=t.$ancestorComponent$,l=()=>J(t,!0);c&&c["s-rc"]?c["s-rc"].push(l):l()},Me=e=>{},Ae=e=>{if(!($.$flags$&1)){const t=M(e),s=t.$cmpMeta$,n=f("connectedCallback",s.$tagName$);if(t.$flags$&1)t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Me());else{t.$flags$|=1;{let o=e;for(;o=o.parentNode||o.host;)if(o["s-p"]){K(t,t.$ancestorComponent$=o);break}}Pe(e,t,s)}n()}},Re=e=>{},Ie=async e=>{if(!($.$flags$&1)){const t=M(e);t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Re())}},Oe=(e,t={})=>{var s;const n=f(),o=[],c=t.exclude||[],l=A.customElements,r=u.head,a=r.querySelector("meta[charset]"),i=u.createElement("style"),d=[];let g,h=!0;Object.assign($,t),$.$resourcesUrl$=new URL(t.resourcesUrl||"./",u.baseURI).href;let I=!1;if(e.map(m=>{m[1].map(E=>{const y={$flags$:E[0],$tagName$:E[1],$members$:E[2],$listeners$:E[3]};y.$flags$&4&&(I=!0);const S=y.$tagName$,ne=class extends HTMLElement{constructor(_){super(_),_=this,He(_,y),y.$flags$&1&&_.attachShadow({mode:"open"})}connectedCallback(){g&&(clearTimeout(g),g=null),h?d.push(this):$.jmp(()=>Ae(this))}disconnectedCallback(){$.jmp(()=>Ie(this))}componentOnReady(){return M(this).$onReadyPromise$}};y.$lazyBundleId$=m[0],!c.includes(S)&&!l.get(S)&&(o.push(S),l.define(S,ke(ne)))})}),I&&(i.innerHTML+=z),i.innerHTML+=o+ae,i.innerHTML.length){i.setAttribute("data-styles",""),r.insertBefore(i,a?a.nextSibling:r.firstChild);const m=(s=$.$nonce$)!==null&&s!==void 0?s:N(u);m!=null&&i.setAttribute("nonce",m)}h=!1,d.length?d.map(m=>m.connectedCallback()):$.jmp(()=>g=setTimeout(Q,30)),n()},P=new WeakMap,M=e=>P.get(e),at=(e,t)=>P.set(t.$lazyInstance$=e,t),He=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return s.$onReadyPromise$=new Promise(n=>s.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],P.set(e,s)},je=(e,t)=>t in e,p=(e,t)=>(0,console.error)(e,t),w=new Map,xe=(e,t,s)=>{const n=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,c=w.get(o);if(c)return c[n];if(!s||!BUILD.hotModuleReplacement){const l=r=>(w.set(o,r),r[n]);switch(o){case"omg-theme-wrapper-barneveld":return v(()=>import("./omg-theme-wrapper-barneveld.entry-e4NFleET.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(l,p);case"omg-button":return v(()=>import("./omg-button.entry-OHtKT5Tw.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url).then(l,p);case"omg-theme-wrapper-lenteveld":return v(()=>import("./omg-theme-wrapper-lenteveld.entry-tiUJwo2m.js"),__vite__mapDeps([7,1,2,3,4,5]),import.meta.url).then(l,p);case"omg-theme-wrapper-nieuwegein":return v(()=>import("./omg-theme-wrapper-nieuwegein.entry-6VvHbkX2.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url).then(l,p)}}return v(()=>import(`./${o}.entry.js`),__vite__mapDeps([]),import.meta.url).then(l=>(w.set(o,l),l[n]),p)},b=new Map,A=typeof window<"u"?window:{},u=A.document||{head:{}},$={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)},Ue=e=>Promise.resolve(e),De=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),x=[],Z=[],Be=(e,t)=>s=>{e.push(s),L||(L=!0,t&&$.$flags$&4?R(k):$.raf(k))},U=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(s){p(s)}e.length=0},k=()=>{U(x),U(Z),(L=x.length>0)&&$.raf(k)},R=e=>Ue().then(e),qe=Be(Z,!0),ze=(e,t)=>{if(!(typeof window>"u"))return Oe([["omg-button",[[1,"omg-button"]]],["omg-theme-wrapper-barneveld",[[1,"omg-theme-wrapper-barneveld"]]],["omg-theme-wrapper-lenteveld",[[1,"omg-theme-wrapper-lenteveld"]]],["omg-theme-wrapper-nieuwegein",[[1,"omg-theme-wrapper-nieuwegein"]]]],t)};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const{useParameter:Ge,addons:Ne,useEffect:We,useMemo:it}=__STORYBOOK_MODULE_PREVIEW_API__;var Fe=Object.defineProperty,Ye=(e,t)=>{for(var s in t)Fe(e,s,{get:t[s],enumerable:!0})},Ke={};Ye(Ke,{initializeThemeState:()=>te,pluckThemeFromContext:()=>V,useThemeParameters:()=>ee});var Je="@storybook/addon-styling",Qe=`${Je}/theme-switcher`,Xe="theming",Ze="theme",Ve={},et={REGISTER_THEMES:`${Qe}/REGISTER_THEMES`};function V({globals:e}){return e[Ze]||""}function ee(){return Ge(Xe,Ve)}function te(e,t){Ne.getChannel().emit(et.REGISTER_THEMES,{defaultTheme:t,themes:e})}var tt="html",D=e=>e.split(" ").filter(Boolean),nt=({themes:e,defaultTheme:t,parentSelector:s=tt})=>(te(Object.keys(e),t),(n,o)=>{let{themeOverride:c}=ee(),l=V(o);return We(()=>{let r=c||l||t,a=document.querySelector(s);Object.entries(e).filter(([d])=>d!==r).forEach(([d,g])=>{let h=D(g);h.length>0&&a.classList.remove(...h)});let i=D(e[r]);i.length>0&&a.classList.add(...i)},[c,l,s]),n()});ze();oe();const st={decorators:[nt({themes:{Barneveld:"barneveld-theme",Lenteveld:"lenteveld-theme",Nieuwegein:"nieuwegein-theme"},defaultTheme:"Lenteveld"}),e=>se.jsx(le,{children:e()})],parameters:{controls:{expanded:!1},status:{statuses:{PRODUCTION:{background:"#088008",color:"#ffffff",description:"Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases."},BETA:{background:"#3065ee",color:"#ffffff",description:"Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely."},ALPHA:{background:"#e0bc2e",color:"#000000",description:"Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated."},"WORK IN PROGRESS":{background:"#cc0000",color:"#ffffff",description:"Do not use in production. Does not follow semantic versioning and any published packages are for internal use only."}}},options:{panelPosition:"right"}}},dt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{de as h,dt as p,at as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./omg-theme-wrapper-barneveld.entry-e4NFleET.js","./jsx-runtime-Q5kDp4vx.js","./index-DogsOklH.js","./iframe-9gH1jE0J.js","./index-Jxs-A6ne.js","./extends-dGVwEr9R.js","./omg-button.entry-OHtKT5Tw.js","./omg-theme-wrapper-lenteveld.entry-tiUJwo2m.js","./omg-theme-wrapper-nieuwegein.entry-6VvHbkX2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}