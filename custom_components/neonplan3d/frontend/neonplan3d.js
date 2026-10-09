Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var Ur=new URL(import.meta.url),Nr=Ur.searchParams.get("v"),Vr=r=>new URL(`./fonts/${r}${Nr?`?v=${Nr}`:""}`,Ur).href,Kr="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Gr(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Vr("figtree.woff2")}) format("woff2");unicode-range:${Kr}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Vr("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Kr}}`,document.head.append(r)}function qr(r,e){return e==="metric"||e==="imperial"?e:r?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Ss(r,e){return String(Number(r.toFixed(e)))}function jr(r,e=2){let t=r<0?"-":"",n=Math.round(Math.abs(r)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=Ss(o,e>=2?1:0);return i?o<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function Zr(r,e){let t=r.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,a=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];o=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=e==="imperial"?d*(s?.0254:.3048):d}return!o||/[^\s+]/.test(a)?null:i}var jt=globalThis,Zt=jt.ShadowRoot&&(jt.ShadyCSS===void 0||jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,En=Symbol(),Xr=new WeakMap,ft=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==En)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Zt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Xr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Xr.set(t,e))}return e}toString(){return this.cssText}},Yr=r=>new ft(typeof r=="string"?r:r+"",void 0,En),de=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ft(t,r,En)},Qr=(r,e)=>{if(Zt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=jt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},zn=Zt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Yr(t)})(r):r;var{is:$s,defineProperty:Ms,getOwnPropertyDescriptor:Es,getOwnPropertyNames:zs,getOwnPropertySymbols:As,getPrototypeOf:Rs}=Object,Xt=globalThis,Jr=Xt.trustedTypes,Ts=Jr?Jr.emptyScript:"",Fs=Xt.reactiveElementPolyfillSupport,mt=(r,e)=>r,An={toAttribute(r,e){switch(e){case Boolean:r=r?Ts:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},to=(r,e)=>!$s(r,e),eo={attribute:!0,type:String,converter:An,reflect:!1,useDefault:!1,hasChanged:to};Symbol.metadata??=Symbol("metadata"),Xt.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=eo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Ms(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=Es(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??eo}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;let e=Rs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){let t=this.properties,n=[...zs(t),...As(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(zn(i))}else e!==void 0&&t.push(zn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:An).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:An;this._$Em=i;let a=s.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??to)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[mt("elementProperties")]=new Map,ye[mt("finalized")]=new Map,Fs?.({ReactiveElement:ye}),(Xt.reactiveElementVersions??=[]).push("2.1.2");var Hn=globalThis,no=r=>r,Yt=Hn.trustedTypes,ro=Yt?Yt.createPolicy("lit-html",{createHTML:r=>r}):void 0,co="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,ho="?"+Se,Ds=`<${ho}>`,He=document,_t=()=>He.createComment(""),bt=r=>r===null||typeof r!="object"&&typeof r!="function",Wn=Array.isArray,Ps=r=>Wn(r)||typeof r?.[Symbol.iterator]=="function",Rn=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oo=/-->/g,io=/>/g,Pe=RegExp(`>|${Rn}(?:([^\\s"'>=/]+)(${Rn}*=${Rn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),so=/'/g,ao=/"/g,uo=/^(?:script|style|textarea|title)$/i,Ln=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),_=Ln(1),yt=Ln(2),Wl=Ln(3),We=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),lo=new WeakMap,Ie=He.createTreeWalker(He,129);function po(r,e){if(!Wn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ro!==void 0?ro.createHTML(e):e}var Is=(r,e)=>{let t=r.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=gt;for(let a=0;a<t;a++){let l=r[a],d,c,h=-1,u=0;for(;u<l.length&&(s.lastIndex=u,c=s.exec(l),c!==null);)u=s.lastIndex,s===gt?c[1]==="!--"?s=oo:c[1]!==void 0?s=io:c[2]!==void 0?(uo.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Pe):c[3]!==void 0&&(s=Pe):s===Pe?c[0]===">"?(s=i??gt,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?Pe:c[3]==='"'?ao:so):s===ao||s===so?s=Pe:s===oo||s===io?s=gt:(s=Pe,i=void 0);let f=s===Pe&&r[a+1].startsWith("/>")?" ":"";o+=s===gt?l+Ds:h>=0?(n.push(d),l.slice(0,h)+co+l.slice(h)+Se+f):l+Se+(h===-2?a:f)}return[po(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},wt=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[d,c]=Is(e,t);if(this.el=r.createElement(d,n),Ie.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Ie.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(co)){let u=c[s++],f=i.getAttribute(h).split(Se),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:g[2],strings:f,ctor:g[1]==="."?Fn:g[1]==="?"?Dn:g[1]==="@"?Pn:Ze}),i.removeAttribute(h)}else h.startsWith(Se)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(uo.test(i.tagName)){let h=i.textContent.split(Se),u=h.length-1;if(u>0){i.textContent=Yt?Yt.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],_t()),Ie.nextNode(),l.push({type:2,index:++o});i.append(h[u],_t())}}}else if(i.nodeType===8)if(i.data===ho)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(Se,h+1))!==-1;)l.push({type:7,index:o}),h+=Se.length-1}o++}}static createElement(e,t){let n=He.createElement("template");return n.innerHTML=e,n}};function je(r,e,t=r,n){if(e===We)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=bt(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=je(r,i._$AS(r,e.values),i,n)),e}var Tn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??He).importNode(t,!0);Ie.currentNode=i;let o=Ie.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new vt(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new In(o,this,e)),this._$AV.push(d),l=n[++a]}s!==l?.index&&(o=Ie.nextNode(),s++)}return Ie.currentNode=He,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},vt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),bt(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ps(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(He.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=wt.createElement(po(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Tn(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=lo.get(e.strings);return t===void 0&&lo.set(e.strings,t=new wt(e)),t}k(e){Wn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new r(this.O(_t()),this.O(_t()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=no(e).nextSibling;no(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=je(this,e,t,0),s=!bt(e)||e!==this._$AH&&e!==We,s&&(this._$AH=e);else{let a=e,l,d;for(e=o[0],l=0;l<o.length-1;l++)d=je(this,a[n+l],t,l),d===We&&(d=this._$AH[l]),s||=!bt(d)||d!==this._$AH[l],d===v?e=v:e!==v&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fn=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Dn=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Pn=class extends Ze{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??v)===We)return;let n=this._$AH,i=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},In=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};var Hs=Hn.litHtmlPolyfillSupport;Hs?.(wt,vt),(Hn.litHtmlVersions??=[]).push("3.3.3");var fo=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new vt(e.insertBefore(_t(),o),o,void 0,t??{})}return i._$AI(r),i};var Cn=globalThis,se=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return We}};se._$litElement$=!0,se.finalized=!0,Cn.litElementHydrateSupport?.({LitElement:se});var Ws=Cn.litElementPolyfillSupport;Ws?.({LitElement:se});(Cn.litElementVersions??=[]).push("4.2.2");async function mo(r){return r.callWS({type:"neonplan3d/building/get"})}async function go(r,e){return(await r.callWS({type:"neonplan3d/building/save",building:e})).revision}function _o(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function bo(r,e){return(await r.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function wo(r){return(await r.callWS({type:"neonplan3d/packs/list"})).packs}var Ls="neonplan3d.seenOffers";function vo(r){let e=[];try{e=JSON.parse(localStorage.getItem(Ls)??"[]")}catch{}return r.filter(t=>!e.includes(t.id))}var Cs="neonplan3d.seenUpdates";function yo(r){let e=[];try{e=JSON.parse(localStorage.getItem(Cs)??"[]")}catch{}return r.filter(t=>!e.includes(`${t.id}@${t.release}`))}function ko(r){return r.callWS({type:"neonplan3d/license/get"})}var xo=[],On=new Map,So=0;function $o(r){xo=r,On=new Map(r.flatMap(e=>e.items.map(t=>[Os(e.id,t.id),t]))),So++}function kt(){return xo}function Xe(){return So}function Os(r,e){return`pack:${r}:${e}`}function Bn(r){return r.startsWith("pack:")}var Bs={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Mo(r){return ae(r)?.parts.find(e=>e.screen)}function ae(r){if(!Bn(r))return;let e=On.get(r);if(e)return e;let[,t,...n]=r.split(":"),i=Bs[t];return i?On.get(`pack:${i}:${n.join(":")}`):void 0}function Eo(r,e){let t=e.split("-")[0];return r.name[t]??r.name.en??Object.values(r.name)[0]??r.id}function ke(r,e){let t=ae(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return zo;if(Qt.has(e.type))return Math.max(0,r.height-Jt(e.type,e.h));if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return en(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return t?0:Ao(e)}}var Le={field:null,size:1,right:0,up:0};var To=["rain","snow","clouds","lightning","sky"];var Vs={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ks(r){return r==="hedge"||r==="fence"||r==="pergola"}function Us(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of r.points){let h=o(d,c);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function Gs(r,e,t,n){return Fo(r)+(e.offset??0)+Vs[e.type]-Us(e,t,n)}function Fo(r){return r.elevation>.3?0:-.2}function xt(r,e,t){let n=(r.outdoor??[]).filter(o=>!Ks(o.type)&&o.type!=="pool"&&N([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Gs(r,i,e,t):Fo(r)}var qs={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Do={type:"none",pitch:35,overhang:.4},js={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Do}};var Po=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),zo=1.75;function Io(r){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(r.type)||Zs.has(r.type))return!1;let e=ae(r.type);return!(e?.mount==="ceiling"&&e.light)}var Qt=new Set(["lamp_downlight","lamp_spot"]);function Jt(r,e){return r==="lamp_spot"?Math.max(.06,e)+.008:.02}var Zs=new Set(["stairs","stairs_u"]);function Nn(r){return Po.has(r)||!!ae(r)?.light}var Xs=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ao(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function en(r,e,t){let n=0;for(let i of r.furniture)!(Xs.has(i.type)||ae(i.type)?.surface)||!N([e,t],tn(i))||(n=Math.max(n,i.h));return n}var Ns=new Set([...Po,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Ro={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Vn(r){r.energy={...qs,...r.energy??{}},r.presence=r.presence??[],r.settings={...js,...r.settings,roof:{...Do,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,a,l]=Ro[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function $e(r){let e=0;for(let t=0;t<r.length;t++){let[n,i]=r[t],[o,s]=r[(t+1)%r.length];e+=n*s-o*i}return e/2}function ge(r){let e=$e(r);if(Math.abs(e)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],d=o*l-a*s;t+=(o+a)*d,n+=(s+l)*d}return[t/(6*e),n/(6*e)]}function tn(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function N(r,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[a,l]=e[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(t=!t)}return t}var Ho={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ys=700,Un="neonplan3d.unsaved",Ye="1.13.2",Lo="floorplan-3d.unsaved";function Qs(){try{let r=localStorage.getItem(Un)??localStorage.getItem(Lo);return r?JSON.parse(r):null}catch{return null}}function Kn(r){try{r?localStorage.setItem(Un,JSON.stringify(r)):(localStorage.removeItem(Un),localStorage.removeItem(Lo))}catch{}}var Qe=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ys),this.host.requestUpdate()}get frontendVersion(){return Ye}get versionGap(){return!this.backendVersion||Ye==="dev"||this.backendVersion===Ye?null:Js(this.backendVersion,Ye)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Ye!=="dev"&&this.backendVersion!==Ye}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Vn(e.building))}discardDraft(){this.draft=null,Kn(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await go(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Kn(null)}catch(t){this.saveState="error",this.saveError=Wo(t),Kn({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await _o(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await wo(this.hass)}catch{this.packs=[]}$o(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await mo(this.hass);this.building=Vn(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=Qs()),this.revision=e.revision,this.error=null}catch(e){this.error=Wo(e)}this.host.requestUpdate()}}};function Wo(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}function Js(r,e){let t=r.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),n=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,n.length);i++){let o=(t[i]??0)-(n[i]??0);if(o)return o}return 0}var Co;function Gn(){let r=new URL("./neonplan3d-editor.js?v=f575b3bfc5e2",new URL(import.meta.url)).href;return Co??=import(r),Co}var ea={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ta=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),na=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),ra=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),nn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Go=new Set(["light","switch","fan"]);function qo(r){return r.slice(0,r.indexOf("."))}function I(r){return ea[qo(r)]??null}function Oo(r){return r!==null&&r!=="scene"&&r!=="script"}function Mt(r,e){let t=r.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&r.devices?.[t.device_id]?.area_id||null:null}function Bo(r,e){let t=I(e);if(!t)return!1;let n=r.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=r.states[e];if(!i)return!1;let o=i.attributes.device_class;return t==="sensor"?o?ta.has(o):na.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?o?ra.has(o):!!n?.area_id:!0}var oa=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function No(r,e){if(I(e)!=="sensor")return!1;let t=r.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=r.states[e];return!n||!n.attributes.unit_of_measurement||oa.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||V(n)}var qn=null;function $t(r){let e=qn;if(e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let l of Object.keys(r.entities??{})){let d=r.entities[l],c=d.device_id;c&&d.area_id&&(s.get(c)??s.set(c,new Set).get(c)).add(d.area_id),c&&Jn(r,l)&&(n.get(c)??n.set(c,[]).get(c)).push(l),c&&!d.hidden&&!d.entity_category&&(o.get(c)??o.set(c,new Set).get(c)).add(qo(l));let h=Bo(r,l),u=Mt(r,l);if(!u){(h||No(r,l))&&Oo(I(l))&&i.push(l);continue}h&&(t.get(u)??t.set(u,[]).get(u)).push(l)}if(r.entities)for(let l of Object.keys(r.states))r.entities[l]||(Bo(r,l)||No(r,l))&&Oo(I(l))&&i.push(l);i.sort((l,d)=>nn.indexOf(I(l))-nn.indexOf(I(d))||G(r,l).localeCompare(G(r,d)));for(let[l,d]of t){let c=r.areas?.[l]?.name;d.sort((h,u)=>{let f=nn.indexOf(I(h)),g=nn.indexOf(I(u));return f-g||G(r,h,c).localeCompare(G(r,u,c))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return qn={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:t,power:n,unassigned:i,domains:o,hubs:a},qn}function te(r,e){return!e||!r.entities?[]:$t(r).areas.get(e)??[]}var ia={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},sa=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),aa=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function la(r,e){let t=r.entities?.[e]?.device_id,n=t&&!$t(r).hubs.has(t)?$t(r).domains.get(t):void 0;return n&&[...n].some(i=>sa.has(i))?!1:!aa.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function jn(r,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=ia[n],s=(h,u)=>N([h,u],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),d=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id));return[...new Set([...te(r,t.area_id).filter(h=>!d.has(h)),...l])].filter(h=>h.startsWith("sensor.")&&r.states[h]?.attributes.device_class===o&&la(r,h))}function _e(r){return r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function ca(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}function Je(r,e){return _e(r)==="\xB0F"?e*9/5+32:e}function Me(r,e,t,n){let i=jn(r,e,t,n).map(o=>{let s=Number(r.states[o]?.state);return n==="temperature"?ca(s,r.states[o]?.attributes.unit_of_measurement):s}).filter(o=>Number.isFinite(o));return i.length?i.reduce((o,s)=>o+s,0)/i.length:null}function jo(r,e){return!!r.entities&&$t(r).hubs.has(e)}function Zn(r,e){return r.entities?$t(r).power.get(e)??[]:[]}function G(r,e,t){let i=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=i.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function V(r){return!r||r.state==="unavailable"||r.state==="unknown"}var da=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Xn(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function xe(r){if(!r)return!1;if(r.entity_id.startsWith("vacuum."))return r.state==="cleaning"||r.state==="returning";switch(I(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";case"sensor":return Xn(r)&&da.has(String(r.state).toLowerCase());default:return!1}}function et(r,e){if(!r||r.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,o;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?o=ha(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function ha(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function tt(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var ua=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),pa=new Set(["garage","gate"]),fa=new Set(["window","opening"]);function St(r,e,t=!1){let n=new Map;return e.length&&r.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}function Et(r,e){let t=new Map;for(let n of e)for(let i of n.rooms){let o=n.openings.filter(m=>m.room_id===i.id).sort((m,x)=>m.edge-x.edge||m.offset-x.offset);if(!o.length)continue;let s=te(r,i.area_id),a=m=>r.states[m]?.attributes.device_class,l=s.filter(m=>I(m)==="cover"&&ua.has(a(m))),d=o.filter(m=>m.type==="window"),c=o.filter(m=>m.type==="door"),h=o.filter(m=>m.type==="garage"),u=St(d,l,!0),f=St(d,s.filter(m=>I(m)==="binary"&&fa.has(a(m)))),g=St(c,s.filter(m=>I(m)==="binary"&&a(m)==="door")),b=St(h,s.filter(m=>I(m)==="cover"&&pa.has(a(m)??""))),p=St(h,s.filter(m=>I(m)==="binary"&&a(m)==="garage_door")),S=(m,x)=>m==="none"?null:m??x??null;for(let m of o){let x=m.type==="window"?u:m.type==="garage"?b:null,$=m.type==="window"?f:m.type==="garage"?p:g;t.set(m.id,{cover:S(m.cover,x?.get(m.id)),contact:m.sensor==="handle"&&m.contact==null?null:S(m.contact,$.get(m.id)),tilt:m.tilt==="none"?null:m.tilt,contact2:m.leaves===2&&m.contact2&&m.contact2!=="none"?m.contact2:null,tilt2:m.leaves===2&&m.tilt2&&m.tilt2!=="none"?m.tilt2:null,position:m.position&&m.position!=="none"?m.position:null,positionInverted:!!m.position_inverted,tiltAngle:m.tilt_angle&&m.tilt_angle!=="none"?m.tilt_angle:null,tiltMax:m.tilt_max??null,tiltOffset:m.tilt_offset??null,tiltInvert:!!m.tilt_invert,shut:!!m.shut,...m.contact_invert?{contactInvert:!0}:{}})}}return t}var ma=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ga(r){if(!r||V(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:null,r.state]){if(!t)continue;let n=ma.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}var _a=.5;function Ee(r,e,t="window"){let n=p=>!!p&&r.states[p]?.state==="on",i=p=>!!p&&!!r.states[p]&&!V(r.states[p]),o=p=>p?ga(r.states[p]):null,s=p=>{let S=o(p);return e.contactInvert&&p&&p!==e.tilt&&p!==e.tilt2&&S!=="tilted"&&S?S==="open"?"closed":"open":S},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,d=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",c=d?1:0,h=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let p=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,p/(e.tiltMax||15))),c<.08&&(c=0),d=c>0}let u=s(e.contact)==="open"&&!d?1:0,f=null,g=e.cover?r.states[e.cover]:void 0,b=ba(r,e.position);if(b!==null)f=e.positionInverted?b:1-b;else if(g&&!V(g)){let p=g.attributes.current_position;typeof p=="number"?f=1-Math.min(100,Math.max(0,p))/100:f=g.state==="closed"?1:g.state==="opening"||g.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let p=s(e.contact);return{open:p===null?e.shut?0:_a:p==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:p!==null||f!==null}}if(t==="garage"){let p=s(e.contact),S=f!==null||p!==null;return f===null&&(f=p===null||p==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:S}}return{open:u,open2:l,tilt:c,tilt2:a?1:0,cover:f,sensed:i(e.contact)||i(e.tilt)||Number.isFinite(h)}}function ba(r,e){let t=e?r.states[e]:void 0;if(!t||V(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function Yn(r,e){let t=new Map,n=[];for(let s of e){let a=r.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(d=>!r.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),o=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>o.get(s.primary)-o.get(a.primary))}function rn(r,e){return Yn(r,e).map(t=>t.primary)}var wa={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Zo=new Set(["tv_board","tv_wall"]);function Xo(r,e){let t=r.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Yo(r){return Zo.has(r)||!!Mo(r)}function on(r){return Yo(r)||r==="desk"||r==="fridge_smart"}function nt(r,e){let t=new Set,n=Ce(r,e),i=e.some(o=>o.openings.some(s=>s.confirm))?Et(r,e):null;for(let o of e){for(let s of o.placements)s.confirm&&t.add(s.entity_id);for(let s of o.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of o.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function Qn(r,e){let t=i=>{if(!i||i==="none")return!1;let o=r.states[i]?.state;return o==="on"||o==="open"},n=new Map;for(let i of e)for(let o of i.furniture)o.type==="fridge_smart"&&n.set(o.id,{left:t(o.door_left),right:t(o.door_right)});return n}var Vo={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Jn(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function va(r,e){if(Jn(r,e))return e;let t=r.entities?.[e]?.device_id;return t?Zn(r,t).find(n=>n!==e)??null:null}function Ce(r,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in Vo,a=s?Vo[o.type]:wa[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&N([o.x,o.z],f.points)),d=l?rn(r,te(r,l.area_id)):[],c=f=>`${f} ${G(r,f)}`,h=o.entity==="none"?null:o.entity??null;if(o.entity==null){let f=d.filter(g=>!i.has(g));if(s){let g=f.filter(b=>I(b)==="light");h=g.find(b=>a.test(c(b)))??g[0]??null}else if(o.type==="robot_vacuum"){let g=l?.area_id??null;h=Object.keys(r.entities??{}).find(b=>b.startsWith("vacuum.")&&!i.has(b)&&Mt(r,b)===g)??null}else if(o.type==="radiator"){let g=f.filter(b=>I(b)==="climate");h=g.find(b=>a.test(c(b)))??g[0]??null}else if(Yo(o.type)){let g=f.filter(b=>I(b)==="media");h=g.find(b=>r.states[b]?.attributes.device_class==="tv")??g.find(b=>a?.test(c(b)))??(Zo.has(o.type)?g[0]??null:null)}else a&&(h=f.find(g=>["switch","media","fan"].includes(I(g)??"")&&a.test(c(g)))??null);h&&i.add(h)}let u=o.power==="none"?null:o.power??null;o.power==null&&(u=h?va(r,h):null,!u&&a&&l&&!s&&(u=te(r,l.area_id).find(g=>Jn(r,g)&&!i.has(g)&&a.test(c(g)))??null),u&&i.add(u)),(h||u)&&t.set(o.id,{entity:h,power:u})}}return t}function er(r){if(!r||r.state==="off"||r.state==="standby"||V(r))return null;let e=r.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Qo(r,e,t){let n=(c,h)=>N([c,h],t.points),i=Ce(r,[e]),o=Et(r,[e]),s=[...e.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[i.get(c.id)?.entity,i.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let h=o.get(c.id);return h?[h.cover,h.contact,h.tilt,h.contact2]:[]}),...t.panel??[]].filter(c=>!!c&&!!r.states[c]),a=new Set(t.hidden??[]),l=[...new Set(s)].filter(c=>!a.has(c)),d=new Set(l);return{shown:l,more:te(r,t.area_id).filter(c=>!d.has(c)&&!a.has(c))}}var Ko=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,ya={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function sn(r,e){let t=e.car??{},n=h=>h&&h!=="none"?h:null,i=n(t.device)??n(e.entity),o=i?r.entities?.[i]?.device_id:null,s=o&&r.entities?Object.values(r.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],a=h=>`${h} ${r.states[h]?.attributes.friendly_name??""} ${r.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,u,f)=>s.find(g=>u.includes(g.split(".")[0])&&ya[h].test(a(g))&&(!f||f(g)))??null,d=h=>String(r.states[h]?.attributes.unit_of_measurement??""),c=h=>String(r.states[h]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function ka(r){let e=r.entity_id,t=String(r.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?r.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function an(r,e){let t=sn(r,e),n=p=>p?r.states[p]:void 0,i=p=>{let S=Number(n(p)?.state);return p&&Number.isFinite(S)?S:null},o=i(t.soc),s=i(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),d=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),h=n(t.plugged),u=n(t.lock),f=n(t.climate),g=n(t.tracker),b=g?.state.toLowerCase()??"";return{entities:t,soc:o!==null?Math.max(0,Math.min(100,o)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:d,charging:c,plugged:h?h.state==="on":null,locked:u?ka(u):null,climateOn:f?f.entity_id.startsWith("climate.")?f.state!=="off"&&f.state!=="unavailable":f.state==="on":null,away:g&&b!=="home"&&!V(g)?b==="not_home"?"":g.state:null}}function Jo(r,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(sn(r,n)))).filter(t=>!!t)}function zt(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;if(!n||!r.entities)return null;for(let i of Object.values(r.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Ko.test(i.translation_key??"")||Ko.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function Uo(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function ei(r,e,t,n){return tr(r,e,n?r.states[n]?.state:t?r.states[t]?.attributes.current_room:void 0)}function tr(r,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=Uo(t);if(!n)return null;let i=o=>[o.name,o.area_id??"",o.area_id&&r.areas?.[o.area_id]?.name||""].map(Uo).filter(Boolean);return e.find(o=>i(o).includes(n))??e.find(o=>i(o).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var xa=new Set(["garage","gate","door"]);function nr(r,e){let t=new Set,n=new Set,i=o=>{if(!o||o==="none"||!r.states[o])return;let s=I(o);s==="light"?t.add(o):s==="cover"&&!xa.has(String(r.states[o].attributes.device_class??""))&&n.add(o)};for(let o of e.rooms){let s=new Set(o.hidden??[]);for(let a of rn(r,te(r,o.area_id)))s.has(a)||i(a)}for(let o of e.placements)i(o.entity_id);for(let o of e.furniture)i(o.entity);return{lights:[...t],covers:[...n]}}function ti(r){let e=r.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function ni(r,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,o]=n.split(".",2);r.callService(i,o,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var ri={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: Discord \xF6ffnen, in einem beliebigen Kanal /supporter {code} eingeben und senden. Die Rolle kommt sofort.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te \u2013 Gas, Wasser und W\xE4rme folgen als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},oi={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:"How: open Discord, type /supporter {code} in any channel and send it. The role comes right away.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices \u2013 gas, water and heat follow as updates",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Sa=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],At=new Map,rr=new Map;function or(r){let e=(r??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Sa.includes(t)?t:null}function rt(r){let e=or(r);return!e||At.has(e)}function ln(r){let e=or(r);if(!e||At.has(e))return Promise.resolve();let t=rr.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=b8949cc64970`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{At.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{At.set(e,{})}).finally(()=>rr.delete(e)),rr.set(e,t)}return t}function R(r,e,t={}){let n=r?.language??navigator.language,i=n.startsWith("de")?null:or(n),s=(n.startsWith("de")?ri:i&&At.get(i)||oi)[e]??oi[e]??ri[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function Y(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var $a=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel"],Ma=["fridge_smart"];var ii=r=>(r??navigator.language).toLowerCase().startsWith("de");function si(r){return ii(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Ea={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function ai(r,e){let t=ii(r),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Ea[e]:void 0,o=i?t?i.de:i.en:"",[s,a]=o.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function za(r=kt()){let e=new Set;for(let t of r)for(let n of t.features??[])($a.includes(n)||Ma.includes(n))&&e.add(n);return e}function C(r,e){return za(e).has(r)}var li={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function cn(r){return li[r]}function dn(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Rt(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${li[r]}"/></svg>`}var ze=(r,e)=>R(r,e);function le(r,e){if(!e||V(e))return ze(r,"state_unavailable");let t=e.attributes;switch(I(e.entity_id)){case"light":return e.state!=="on"?ze(r,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:ze(r,"state_on");case"switch":case"fan":return ze(r,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:hn(r,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${Y(r,t.current_temperature,1)} ${r?_e(r):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${ze(r,"state_off")}`:ze(r,"state_off"):n??hn(r,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(o=>typeof o=="string"&&o);return n&&i?i:hn(r,e.state)}case"lock":case"camera":return hn(r,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?ze(r,e.state==="on"?"state_open":"state_closed"):ze(r,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),i=t.unit_of_measurement??"",o=r?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${Y(r,n,o)}${i?` ${i}`:""}`:e.state}default:return""}}function hn(r,e){let t=`state_${e}`,n=R(r,t);return n===t?e:n}function ci(r,e){let t=[];for(let n of e.floors)for(let i of n.placements){let o=I(i.entity_id),s=r.states[i.entity_id];if(!o||!s)continue;let a=n.rooms.find(d=>d.points.length>=3&&N([i.x,i.z],d.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;t.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??tt(o,n.height,i.mount??null),lamp:o==="light"?i.mount??"ceiling":null,model:o==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:o==="camera"?Aa(r,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?dn(i.icon):Rt(o),cone:o==="camera"&&i.cone===!1?!1:void 0,name:i.name||G(r,i.entity_id,l),ownName:i.name||void 0,showName:!!i.show_name,text:le(r,s),active:xe(s),unavailable:V(s),glow:o==="light"?ir(et(s),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return t}function di(r,e){let t=`${e} ${String(r.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Aa(r,e){return Ae(r,e).some(t=>r.states[t]?.state==="on")}function Ae(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(r.states[n]?.attributes.device_class))):[]}function hi(r){return r.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function be(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function ui(r,e){let t=e.slice(0,e.indexOf("."));return r.callService(t,"toggle",{entity_id:e})}function ir(r,e){return!r||e==null||e===1?r:{...r,level:Math.max(.02,Math.min(1.5,r.level*e))}}var we=de`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,Re=de`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  .fp3d-field select option {
    background: var(--fp3d-chrome-solid);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var Ra=4,Ta=3e3,Fa=8,Da=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ot=r=>_`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${cn(r)} />
  </svg>`,un={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},sr=r=>_`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,ar=class extends se{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Ta)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return R(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return G(this.hass,e,this.areaName)}nameButton(e){return _`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&be(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let i=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return _`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${V(e)}
      @click=${i}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return v;let t=te(this.hass,e.area_id),n=this.memo,{shown:i,more:o}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?Qo(this.hass,this.floor,e):{shown:t,more:[]}},s=Yn(this.hass,o).map($=>$.primary),a=s.length,l=this._showAll?[...i,...s]:i,d=$=>l.filter(T=>$.includes(I(T))).map(T=>this.hass.states[T]),c=d(["light"]),h=d(["cover"]),u=d(["climate"]),f=d(["media"]),g=d(["switch","fan","lock"]),b=d(["sensor","binary"]),p=d(["camera"]);this.hasCameras=p.length>0;let S=d(["scene","script"]),m=this.facts(u),x=c.filter($=>$.state==="on");return _`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${m.length?_`<p class="fp3d-rp-facts">${m.join(" \xB7 ")}</p>`:v}
          ${this.readOnly?_`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:v}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?v:_`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:_`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map($=>this.lightRow($)),_`${x.length<c.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter($=>!V($)).map($=>$.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:v}${x.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:x.map($=>$.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:v}`):v}
        ${h.length?this.section("panel_covers",h.map($=>this.coverRow($)),h.length>1?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:h.filter($=>!V($)).map($=>$.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:h.filter($=>!V($)).map($=>$.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:v):v}
        ${u.length?this.section("panel_climate",u.map($=>this.climateRow($))):v}
        ${f.length?this.section("panel_media",f.map($=>this.mediaRow($))):v}
        ${g.length?this.section("panel_switches",g.map($=>this.switchRow($))):v}
        ${p.length?this.section("panel_cameras",p.map($=>this.cameraTile($))):v}
        ${b.length?this.section("panel_sensors",b.map($=>this.sensorRow($))):v}
        ${S.length?this.section("panel_scenes",[_`<div class="fp3d-rp-scenes">
                  ${S.map($=>_`<button
                      class="fp3d-btn"
                      ?disabled=${V($)}
                      @click=${()=>this.call(I($.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:$.entity_id})}
                    >
                      ${this.name($.entity_id)}
                    </button>`)}
                </div>`]):v}
        ${a?_`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:v}
      </div>
    </section>`}facts(e){let t=[],n=this.room,i=(l,d)=>{let c=Me(this.hass,this.floor,n,l);if(c===null)return null;if(l==="temperature")return`${Y(this.hass,Je(this.hass,c),1)} ${_e(this.hass)}`;let h=jn(this.hass,this.floor,n,l)[0],u=this.hass.states[h]?.attributes.unit_of_measurement??d;return`${Y(this.hass,c,1)} ${u}`},o=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):o&&n.climate?.temperature!=="none"&&t.push(`${Y(this.hass,o.attributes.current_temperature,1)} ${_e(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,n=v){return _`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],o=i.some(u=>u!=="onoff"),s=i.includes("color_temp"),a=i.some(u=>["hs","rgb","rgbw","rgbww","xy"].includes(u)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,h=e.entity_id;return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ot("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:h}))}
      ${n&&o?_`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${u=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(u.target.value)})}
          /></label>`:v}
      ${n&&s?_`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${u=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(u.target.value)})}
          /></label>`:v}
      ${n&&a?_`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Da.map(u=>_`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${u.join(",")})"
                aria-label="rgb(${u.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:u})}
              ></button>`)}
          </div>`:v}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,i=e.entity_id,o=V(e);return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${ot("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&Fa?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:v}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&Ra&&typeof t.current_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:v}
      ${n&128&&typeof t.current_tilt_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:n&48?_`<div class="fp3d-rp-buttons">
              ${n&16?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:v}
              ${n&32?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:v}
            </div>`:v}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,o=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(c/o)*o))});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${ot("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?_`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(i-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${Y(this.hass,i,1)} ${_e(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(i+o)}>+</button>
          </div>`:v}
      ${l.length>1?_`<div class="fp3d-rp-chips">
            ${l.map(c=>_`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:v}
    </div>`}stateOf(e,t=le(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=I(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=V(e)||e.state==="off",o=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${ot("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${o?_`<p class="fp3d-rp-media fp3d-rp-wide">${o}</p>`:v}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${sr(un.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${V(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${sr(e.state==="playing"?un.pause:un.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${sr(un.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:v}
    </div>`}switchRow(e){let t=e.entity_id,n=I(t),i=t.slice(0,t.indexOf(".")),o=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${o?"fp3d-rp-on":""}">${ot(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,o,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!V(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(o=>o.entity_id===e.entity_id);return _`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&be(this,e.entity_id)}>
        ${n?_`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:_`<span class="fp3d-rp-note">${le(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?_`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${C("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:v}
    </div>`}sensorRow(e){let t=I(e.entity_id),n=t==="binary"&&e.state==="on";return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ot(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[we,Re,de`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls show the past and take no touches (the list still scrolls) */
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select) {
        pointer-events: none;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",ar);var Pa={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function it(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function pi(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=Pa[t.state];if(!n)return null;let i=t.attributes,o=n.cloud??0;typeof i.cloud_coverage=="number"&&(o=Math.min(1,Math.max(0,i.cloud_coverage/100)));let s=n.wind??0;if(typeof i.wind_speed=="number"){let a=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:t.entity_id,condition:t.state,rain:n.rain??0,snow:n.snow??0,fog:n.fog??0,cloud:o,wind:s,lightning:!!n.lightning}}function fi(r,e){let t=new Set(e??To);return{...r,rain:t.has("rain")?r.rain:0,snow:t.has("snow")?r.snow:0,fog:t.has("fog")?r.fog:0,cloud:t.has("clouds")?r.cloud:0,lightning:t.has("lightning")&&r.lightning,sky:t.has("sky")}}var Ia=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),mi={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function lr(r,e,t){let n=[];for(let a of e.floors)for(let l of a.rooms){let d=te(r,l.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!mi[String(r.states[c]?.attributes.device_class)]);d.length&&n.push({floorId:a.id,roomId:l.id,sensors:d})}let i=Object.keys(r.states),o=e.settings.rain_warning===!1?null:it(r,t??e.settings.weather_entity),s=e.settings.outage_entity&&r.states[e.settings.outage_entity]?e.settings.outage_entity:null;return{rooms:n,alarms:i.filter(a=>a.startsWith("alarm_control_panel.")),weather:o,outage:s}}function cr(r){return[...r.rooms.flatMap(e=>e.sensors),...r.alarms,...r.weather?[r.weather]:[],...r.outage?[r.outage]:[]]}function gi(r,e,t,n){let i=[];for(let s of t.rooms)for(let a of s.sensors){let l=r.states[a];l?.state==="on"&&i.push({kind:mi[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!t.weather&&Ia.has(r.states[t.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let d=Ee(r,l,"window");d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5||i.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}t.outage&&dr(r.states[t.outage])&&i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let s of t.alarms){let a=r.states[s]?.state;a==="triggered"?i.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&i.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return i}var Ha=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Wa=new Set(["power","plug","connectivity","running"]);function dr(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let e=r.entity_id.split(".")[0];if(e==="binary_sensor")return Wa.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(e==="input_boolean"||e==="switch")return r.state==="on";let t=Number(r.state);if(r.state!==""&&Number.isFinite(t))return r.attributes.unit_of_measurement==="V"&&t<100;let n=String(r.state).toLowerCase().trim();return Ha.has(n)||n.startsWith("ob ")}function _i(r){switch(r){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];default:return[1,.2,.25]}}function hr(r,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,i=r?G(r,t.entity):t.entity,o=R(r,`alert_${t.kind}`,{name:i});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${R(r,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${o}`:o}var ue=(r,e)=>[r[0]-e[0],r[1]-e[1]],st=(r,e)=>[r[0]+e[0],r[1]+e[1]],Te=(r,e)=>[r[0]*e,r[1]*e],ur=(r,e)=>r[0]*e[0]+r[1]*e[1],at=(r,e)=>r[0]*e[1]-r[1]*e[0],Tt=r=>Math.hypot(r[0],r[1]),lt=r=>{let e=Tt(r)||1;return[r[0]/e,r[1]/e]},bi=r=>[-r[1],r[0]],wi=r=>[r[1],-r[0]];function ct(r,e,t=[]){let n=e.eps??.005,i=[],o=t.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),s=[],a=w=>{for(let E=0;E<s.length;E++)if(Math.abs(s[E][0]-w[0])<=n&&Math.abs(s[E][1]-w[1])<=n)return E;return s.push([w[0],w[1]]),s.length-1},l=[];for(let w of r){let E=w.points;if(E.length<3||Math.abs($e(E))<1e-6)continue;let k=$e(E)>0,M=E.map(a);for(let H=0;H<E.length;H++){let q=M[H],O=M[(H+1)%E.length];q!==O&&l.push(k?{u:q,v:O,room:w.id,edge:H,forward:!0}:{u:O,v:q,room:w.id,edge:H,forward:!1})}}let d=o.map(w=>[a(w.a),a(w.b)]),c=new Set;for(let w of r){let E=w.points;E.length<3||(w.wall_splits??[]).forEach((k,M)=>{if(!k||M>=E.length)return;let H=E[M],q=ue(E[(M+1)%E.length],H),O=Tt(q);for(let D of k)D>n&&D<O-n&&c.add(a(st(H,Te(q,D/O))))})}let h=[];for(let w of l){let E=s[w.u],k=s[w.v],M=ue(k,E),H=Tt(M),q=Te(M,1/H),O=[];for(let B=0;B<s.length;B++){if(B===w.u||B===w.v)continue;let J=ue(s[B],E),j=ur(J,q);j<=n||j>=H-n||Math.abs(at(q,J))<=n&&O.push({t:j,id:B})}O.sort((B,J)=>B.t-J.t);let D=[{t:0,id:w.u},...O,{t:H,id:w.v}];for(let B=0;B+1<D.length;B++){let J=D[B],j=D[B+1],ce=w.forward?J.t:H-j.t,oe=w.forward?j.t:H-J.t;h.push({u:J.id,v:j.id,room:w.room,edge:w.edge,t0:ce,t1:oe})}}let u=new Map;for(let w of h){let E=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,k=u.get(E);k||u.set(E,k=[]),k.push(w)}let f=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),g=new Map;for(let w of h){let E=`${w.room}:${w.edge}`;g.set(E,[...g.get(E)??[],w.t0].sort((k,M)=>k-M))}let b=w=>{let E=r.find(M=>M.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(E))return E;let k=g.get(`${w.room}:${w.edge}`)??[];return E[k.indexOf(w.t0)]??null},p=w=>{let E=w.map(b).filter(M=>typeof M=="number"&&M>0);if(E.length)return Math.min(...E);let k=w.map(M=>r.find(H=>H.id===M.room)?.ceiling_height);return k.every(M=>typeof M=="number"&&M>0)?Math.max(...k):void 0},S=w=>{let E=w.map(k=>r.find(M=>M.id===k.room)?.wall_thickness?.[k.edge]).filter(k=>typeof k=="number"&&k>0);return E.length?Math.max(...E):void 0},m=w=>w.some(E=>b(E)===0),x=[],$=[];for(let w of u.values()){let E=w[0],k=w.find(M=>M!==E&&M.u===E.v&&M.v===E.u&&M.room!==E.room);for(let M of w)M!==E&&M!==k&&M.room!==E.room&&i.push(`overlap:${E.room}:${M.room}`);if(m(k?[E,k]:[E])){k&&x.push([E.room,k.room]);continue}if(k){let M=S([E,k])??e.interior;$.push({a:E.u,b:E.v,left:M/2,right:M/2,exterior:!1,roomLeft:E.room,roomRight:k.room,sources:[f(E),f(k)],height:p([E,k])})}else $.push({a:E.u,b:E.v,left:0,right:S([E])??e.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[f(E)],height:p([E])})}let T=w=>lt(ue(s[w.b],s[w.a]));for(let w of $){if(w.exterior||w.free)continue;let E=new Set;for(let M of[w.a,w.b])for(let H of $)!H.exterior||H.free||H.a!==M&&H.b!==M||Math.abs(at(T(w),T(H)))>1e-6||(H.roomLeft===w.roomLeft?E.add("left"):H.roomLeft===w.roomRight&&E.add("right"));if(E.size!==1)continue;let k=w.left+w.right;E.has("left")?(w.left=0,w.right=k):(w.left=k,w.right=0)}o.forEach((w,E)=>{let[k,M]=d[E];if(k===M)return;let H=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],q=r.find(B=>B.points.length>=3&&N(H,B.points))?.id??null,O=(w.thickness??e.interior)/2,D=typeof w.height=="number"&&w.height>0?w.height:void 0;$.push({free:w.id,a:k,b:M,left:O,right:O,exterior:!1,roomLeft:q,roomRight:q,sources:[],height:D})}),$=Ca($,s,c);let z=Ba($,s);return{walls:$.map((w,E)=>{let k=s[w.a],M=s[w.b],H=z.get(`${E}:a`),q=z.get(`${E}:b`),O=Na([H.right,q.left,M,q.right,H.left,k],1e-6);return{id:La(k,M),a:[k[0],k[1]],b:[M[0],M[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:O,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{}}}),warnings:[...new Set(i)],open:x}}function La(r,e){let t=o=>Math.round(o*100),[n,i]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function vi(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Ca(r,e,t=new Set){let n=r.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=o.get(l);d||o.set(l,d=[]),d.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],d=n[a[1]];if(l.b!==s&&(l=vi(l)),d.a!==s&&(d=vi(d)),l.a===d.b)continue;let c=lt(ue(e[l.b],e[l.a])),h=lt(ue(e[d.b],e[d.a]));if(Math.abs(at(c,h))>1e-6||ur(c,h)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let u={...l,b:d.b,sources:Oa(l.sources,d.sources)},f=n.filter((g,b)=>b!==a[0]&&b!==a[1]);f.push(u),n.length=0,n.push(...f),i=!0;break}}return n}function Oa(r,e){let t=r.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Ba(r,e){let t=new Map;r.forEach((i,o)=>{let s=lt(ue(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:Te(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((d,c)=>d.angle-c.angle);let a=d=>({left:st(s,Te(bi(d.d),d.left)),right:st(s,Te(wi(d.d),d.right))});for(let d of o)n.set(d.key,a(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],h=o[(d+1)%o.length],u=st(s,Te(bi(c.d),c.left)),f=st(s,Te(wi(h.d),h.right)),g=at(c.d,h.d);if(Math.abs(g)<1e-4)continue;let b=at(ue(f,u),h.d)/g,p=st(u,Te(c.d,b));Tt(ue(p,s))>l||(n.get(c.key).left=p,n.get(h.key).right=p)}}return n}function Na(r,e){let t=r.filter((i,o)=>Tt(ue(i,r[(o+1)%r.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let o=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=ue(s,o),d=ue(a,s);if(Math.abs(at(lt(l),lt(d)))<1e-7&&ur(l,d)>0){t=t.filter((c,h)=>h!==i),n=!0;break}}}return t}var Dt=Math.PI/180;function Pt(r){let e=Math.min(r.x0,r.x1),t=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),i=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,s)=>[o,r.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(o,s)=>[r.flip?t-s:e+s,o]}}function pn(r){let e=Pt(r).w,t=r.eave_a,n=r.eave_b,i=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*Dt),o=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*Dt);if(r.shape==="flat"||r.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(r.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(r.shape==="mansard"){let l=xi(e,t,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*o}}var Va=.14;function yi(r,e){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<e-.05}function ki(r,e,t){let n=null,i=Math.max(0,r.settings.roof.overhang??0);for(let o of r.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),d=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>d+1e-6||o.points&&o.points.length>=3&&!N([e,t],o.points))continue;let[c,h]=Ga(o,e,t),u=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??i),b=((u?null:Ua(Ka(o,{u0:f,u1:f,a:f,b:f}),c,h))??pn(o).y(h))-Va;n=n===null?b:Math.max(n,b)}return n}var Ft=Math.tan(30*Dt);function xi(r,e,t,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=e+o*n,l=t+s*i,d=Math.min(r-s,Math.max(o,(l-a+Ft*(r-s+o))/(2*Ft))),c=a+(d-o)*Ft;return{vla:o,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:u=>u<=o?e+u*n:u<=d?a+(u-o)*Ft:u<=r-s?l+(r-s-u)*Ft:t+(r-u)*i}}function Ka(r,e){let t=Pt(r),n=pn(r),i=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(m,x)=>[m,x,n.y(x)],c=d(a,-o),h=d(l,-o),u=d(l,i+s),f=d(a,i+s),g=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*Dt),b=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*Dt);if(r.shape==="pent"){let m=[c,h,u,f];return{faces:[m],rim:m,ridges:[[u,f]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(r.shape==="hip"||r.shape==="pyramid"){let m=r.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),x=[t.u0+m,n.vr,n.rh],$=[t.u1-m,n.vr,n.rh],T=r.shape==="pyramid"?[[c,h,x],[h,u,x],[u,f,x],[f,c,x]]:[[c,h,$,x],[x,$,u,f],[f,c,x],[h,u,$]],z=r.shape==="pyramid"?[[c,x],[f,x],[h,x],[u,x]]:[[x,$],[c,x],[f,x],[h,$],[u,$]];return{faces:T,rim:[c,h,u,f],ridges:z,gable:null}}if(r.shape==="halfhip"){let m=Math.min(n.y(0),n.y(i)),x=m+(n.rh-m)*.55,$=g>1e-6?Math.min(n.vr,(x-r.eave_a)/g):n.vr,T=b>1e-6?Math.max(n.vr,i-(x-r.eave_b)/b):n.vr,z=Math.min((t.u1-t.u0)/2-.1,(n.rh-x)/Math.max(.2,g)),F=[t.u0+z,n.vr,n.rh],w=[t.u1-z,n.vr,n.rh],E=[a,$,x],k=[a,T,x],M=[l,$,x],H=[l,T,x];return{faces:[[c,h,M,w,F,E],[F,w,H,u,f,k],[k,E,F],[M,H,w]],rim:[c,h,M,H,u,f,k,E],ridges:[[F,w],[E,F],[k,F],[M,w],[H,w]],gable:[[0,n.y(0)],[$,x],[T,x],[i,n.y(i)]]}}if(r.shape==="mansard"){let m=xi(i,r.eave_a,r.eave_b,g,b),x=[a,m.vla,m.yla],$=[l,m.vla,m.yla],T=[a,i-m.vlb,m.ylb],z=[l,i-m.vlb,m.ylb],F=[a,m.vr,m.rh],w=[l,m.vr,m.rh];return{faces:[[c,h,$,x],[x,$,w,F],[F,w,z,T],[T,z,u,f]],rim:[c,h,$,w,z,u,f,T,F,x],ridges:[[F,w],[x,$],[T,z]],gable:[[0,n.y(0)],[m.vla,m.yla],[m.vr,m.rh],[i-m.vlb,m.ylb],[i,n.y(i)]]}}let p=[a,n.vr,n.rh],S=[l,n.vr,n.rh];return{faces:[[c,h,S,p],[p,S,u,f]],rim:[c,h,S,u,f,p],ridges:[[p,S]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function Ua(r,e,t){let n=null;for(let i of r.faces){if(!N([e,t],i.map(m=>[m[0],m[1]])))continue;let[o,s]=i,a=i.slice(2).find(m=>Math.abs((s[0]-o[0])*(m[1]-o[1])-(s[1]-o[1])*(m[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],d=s[2]-o[2],c=s[1]-o[1],h=a[0]-o[0],u=a[2]-o[2],f=a[1]-o[1],g=d*f-c*u,b=c*h-l*f,p=l*u-d*h;if(Math.abs(b)<1e-9)continue;let S=o[2]-(g*(e-o[0])+p*(t-o[1]))/b;n=n===null?S:Math.min(n,S)}return n}function Ga(r,e,t){let n=Math.min(r.x0,r.x1),i=Math.max(r.x0,r.x1),o=Math.min(r.z0,r.z1),s=Math.max(r.z0,r.z1);return r.axis==="x"?[e,r.flip?s-t:t-o]:[t,r.flip?i-e:e-n]}function Si(r,e,t){let n=Pt(e),i=r.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),o=d=>d.some(c=>i.some(h=>N(c,h.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:o(a.map(d=>n.at(d,-s)))?0:t,b:o(a.map(d=>n.at(d,n.w+s)))?0:t,u0:o(l.map(d=>n.at(n.u0-s,d)))?0:t,u1:o(l.map(d=>n.at(n.u1+s,d)))?0:t}}var mn=Math.PI/180,qa=1.13,ja=1.72,pr=.025;var $i=.25;function Ht(r,e){let t=[];for(let n of r.floors){if(e&&n.id!==e)continue;let{walls:i}=ct(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let d=a/l,c=-s/l,h=Math.min(n.height,o.height??n.height),u=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,f={floorId:n.id,room:o.roomLeft,edge:u,free:!!o.free},g=(b,p,S,m)=>t.push({key:b,section:null,side:"top",flat:!1,o:p,eu:S,es:[0,1,0],n:m,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[m[0],m[2]],wall:f});g(`wall:${n.id}:${o.id}`,[o.a[0]+d*o.right,n.elevation,o.a[1]+c*o.right],[s/l,0,a/l],[d,0,c]),o.free&&g(`wall:${n.id}:${o.id}:back`,[o.b[0]-d*o.left,n.elevation,o.b[1]-c*o.left],[-s/l,0,-a/l],[-d,0,-c])}}return t}var Mi="ground";function Za(r){let e=[...r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function Xa(r,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=Za(r),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:xt(o,s,a)):e.base??0;return{key:Mi,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Be(r,e,t=Wt(r)){return e.face===Mi?Xa(r,e):e.face.startsWith("wall:")?Ht(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function fr(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Wt(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(m=>Ya(m,Si(r,m,m.overhang??e.overhang)));let t=fr(r);if(!t)return[];let n=t.rooms.flatMap(m=>m.points.map(x=>x[0])),i=t.rooms.flatMap(m=>m.points.map(x=>x[1])),o=r.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...i)-o,d=Math.max(...i)+o,c=t.elevation+t.height;if(e.type==="flat")return[Ei("main",null,s,l,a,d,c+$i)];let h=a-s>=d-l,u=e.ridge==="short"?!h:h,f=(u?d-l:a-s)/2,g=f*Math.tan(e.pitch*mn),b=(m,x,$)=>u?[m,c+$,(l+d)/2+x]:[(s+a)/2+x,c+$,m],[p,S]=u?[s,a]:[l,d];return[-1,1].map(m=>fn(`main:${m<0?"a":"b"}`,null,m<0?"a":"b",b(p,m*f,0),b(S,m*f,0),b(p,0,g),e.pitch,()=>[0,S-p]))}function Ya(r,e){let t=Pt(r),n=pn(r),i=(b,p,S)=>{let[m,x]=t.at(b,p);return[m,S,x]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-a;if(r.shape==="flat"||r.shape==="parapet"){let b=t.at(a,-o),p=t.at(l,t.w+s);return[Ei(r.id,r.id,Math.min(b[0],p[0]),Math.min(b[1],p[1]),Math.max(b[0],p[0]),Math.max(b[1],p[1]),r.eave_a+$i)]}if(r.shape==="pent")return[fn(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,t.w+s,n.y(t.w+s)),r.pitch_a,()=>[0,d])];let c=r.shape==="hip"||r.shape==="pyramid",h=r.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,u=c?t.u0+h-a:0,f=c?l-(t.u1-h):0,g=[];if(n.vr>.3){let b=Math.hypot(n.vr+o,n.rh-n.y(-o));g.push(fn(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,n.vr,n.rh),r.pitch_a,p=>[u*(p/b),d-f*(p/b)]))}if(t.w-n.vr>.3){let b=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));g.push(fn(`${r.id}:b`,r.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),r.pitch_b,p=>[f*(p/b),d-u*(p/b)]))}if(c){let b=n.y(-o),p=n.y(t.w+s),S=[[`${r.id}:c`,"c",i(a,t.w+s,p),i(a,-o,b),i(t.u0+h,n.vr,n.rh)],[`${r.id}:d`,"d",i(l,-o,b),i(l,t.w+s,p),i(t.u1-h,n.vr,n.rh)]];for(let[m,x,$,T,z]of S){let F=Qa(m,r.id,x,$,T,z);F&&g.push(F)}}return g}function Qa(r,e,t,n,i,o){let s=It(Oe(i,n));if(s<.3)return null;let a=Fe(Oe(i,n)),l=Oe(o,n),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],h=It(c);if(h<.3)return null;let u=Fe(c),f=Fe(Ri(a,u));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let g=Fe([-u[0],0,-u[2]]),b=Math.atan2(u[1],Math.hypot(u[0],u[2]))/mn;return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:u,n:f,lu:s,ls:h,pitch:b,span:S=>{let m=Math.min(1,Math.max(0,S/h));return[d*m,s-(s-d)*m]},facing:[g[0],g[2]]}}function fn(r,e,t,n,i,o,s,a){let l=Fe(Oe(i,n)),d=Fe(Oe(o,n)),c=Fe(Ri(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let h=Fe([-d[0],0,-d[2]]);return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:It(Oe(i,n)),ls:It(Oe(o,n)),pitch:s,span:a,facing:[h[0],h[2]]}}function Ei(r,e,t,n,i,o,s){let a=i-t>=o-n,l=a?i-t:o-n,d=a?o-n:i-t;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function zi(r){let e=r.module_w||qa,t=r.module_h||ja;return r.portrait===!1?[t,e]:[e,t]}function Ja(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Ai(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*mn:r.wall?Math.min(90,Math.max(0,e.tilt??0))*mn:0}function Ne(r,e){let[t,n]=zi(e),i=Ja(e),o=Math.max(1,...i),a=(i.length-1)*el(r,e)+n*Math.cos(Ai(r,e));return[o*t+(o-1)*pr,a]}function el(r,e){let[,t]=zi(e),n=Ai(r,e);return r.wall?t*Math.cos(n)+pr:r.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+pr}function Oe(r,e){return[r[0]-e[0],r[1]-e[1],r[2]-e[2]]}function It(r){return Math.hypot(r[0],r[1],r[2])}function Fe(r){let e=It(r)||1;return[r[0]/e,r[1]/e,r[2]/e]}function Ri(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function Ti(r,e){let[t,n]=Ne(r,e);return[r.o[0]+r.eu[0]*(e.u+t/2)+r.es[0]*(e.v+n/2),r.o[2]+r.eu[2]*(e.u+t/2)+r.es[2]*(e.v+n/2)]}var pe=.03,gn=r=>r&&r!=="none"?r:null;function dt(r,e=t=>gn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let i of n.furniture){let o=e(i);if(i.type==="meter")t.grid??=o,t.gridExport??=gn(i.export);else if(i.type==="inverter"&&o&&!t.solar.includes(o))t.solar.push(o);else if(i.type==="home_battery"){o&&!t.battery.includes(o)&&t.battery.push(o);let s=gn(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(o||s)&&t.batteries.push({power:o,charge:s});let a=gn(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function gr(r){for(let e of r.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return r.energy.meter}var tl=.07;function ee(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function nl(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function Ot(r,e){if(nl(r,e))return e;let t=r.entities?.[e]?.device_id;if(!t)return null;let n=jo(r,t),i=n?Mt(r,e):null;return Zn(r,t).find(o=>o!==e&&(!n||i!==null&&Mt(r,o)===i))??null}function Hi(r,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),i=[],o=new Set;for(let s of e.floors)for(let a of s.placements){let l=Ot(r,a.entity_id);!l||n.has(l)||o.has(l)||(o.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ee(r.states[l])??0)}))}return i}function Wi(r,e,t,n=dt(e)){let i=e.energy,o=i.grid??n.grid,s=o?ee(r.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let b=Math.max(0,ee(r.states[n.gridExport])??0);s=Math.max(0,s??0)-b}let a=i.solar?ee(r.states[i.solar]):null;if(!i.solar&&n.solar.length){let b=n.solar.map(p=>ee(r.states[p])).filter(p=>p!==null);a=b.length?b.reduce((p,S)=>p+S,0):null}let l=i.battery?ee(r.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let b=n.batteries.map(p=>{if(p.charge){let S=p.power?Math.max(0,ee(r.states[p.power])??0):0,m=Math.max(0,ee(r.states[p.charge])??0);return S-m}return p.power?ee(r.states[p.power],i.battery_invert):null}).filter(p=>p!==null);l=b.length?b.reduce((p,S)=>p+S,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(b=>Number(r.states[b]?.state)).filter(b=>Number.isFinite(b)),h=c.length?c.reduce((b,p)=>b+p,0)/c.length:NaN,u=i.tariff?r.states[i.tariff]:void 0,f=Number(u?.state),g=i.consumption?ee(r.states[i.consumption]):null;return g!==null?g=Math.max(0,g):s!==null||a!==null||l!==null?g=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(g=t.reduce((b,p)=>b+p.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(h)?h:null,tariff:u&&Number.isFinite(f)?{value:f,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:g}}function Ke(r,e){return r.pos.push(e),r.adj.push([]),r.pos.length-1}function Ve(r,e,t){let n=Math.hypot(r.pos[e][0]-r.pos[t][0],r.pos[e][1]-r.pos[t][1]);r.adj[e].push({to:t,w:n}),r.adj[t].push({to:e,w:n})}function rl(r,e){let t=r.length,n=r.map((i,o)=>{let s=r[(o+1)%t],a=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,h=a/d;return{p:[i[0]+c*e[o],i[1]+h*e[o]],d:[a/d,l/d],n:[c,h]}});return r.map((i,o)=>{let s=n[(o-1+t)%t],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[o],i[1]+a.n[1]*e[o]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function ol(r){return $e(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function _r(r,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=ct(r.rooms,{exterior:e,interior:t},r.walls??[]);for(let o of r.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=ol(o),l=s.length,d=s.map((u,f)=>{let g=a?(l-2-f+l)%l:f,b=i.some(p=>!p.exterior&&p.sources.some(S=>S.room_id===o.id&&S.edge===g));return tl+(b?t/2:0)}),c=rl(s,d).map(u=>Ke(n,u)),h=c.map((u,f)=>[u,c[(f+1)%l]]);for(let[u,f]of h)Ve(n,u,f);n.rings.set(o.id,h)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=bn(n,o.roomLeft,s),l=bn(n,o.roomRight,s);a!==null&&l!==null&&Ve(n,a,l)}return n}function bn(r,e,t){let n=r.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],h=d*d+c*c||1,u=Math.min(1,Math.max(0,((t[0]-a[0])*d+(t[1]-a[1])*c)/h)),f=[a[0]+d*u,a[1]+c*u],g=Math.hypot(t[0]-f[0],t[1]-f[1]);(!i||g<i.d)&&(i={seg:s,q:f,d:g})}if(!i)return null;let o=Ke(r,i.q);return Ve(r,o,i.seg[0]),Ve(r,o,i.seg[1]),o}function wn(r,e,t){let n=r.pos[t],i=bn(r,e.id,n);if(i===null)return!1;let o=r.pos[i],s=r.pos[r.adj[i][0].to],a=r.pos[r.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(n[0]-o[0])*d[0]+(n[1]-o[1])*d[1],h=(n[1]-o[1])*d[0]-(n[0]-o[0])*d[1];if(Math.abs(c)<.01||Math.abs(h)<.01)return Ve(r,t,i),!0;let u=[o[0]+d[0]*c,o[1]+d[1]*c],f=[o[0]-d[1]*h,o[1]+d[0]*h],g=Ke(r,N(f,e.points)||!N(u,e.points)?f:u);return Ve(r,i,g),Ve(r,g,t),!0}function Ct(r,e){let t=r.rooms.filter(o=>o.points.length>=3),n=t.find(o=>N(e,o.points));if(n)return n;let i=null;for(let o of t)for(let s of o.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:o,d:a})}return i?.room??null}function Li(r,e){let t=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(o<0||t[s]<t[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:a}of r.adj[o])t[o]+a<t[s]-1e-9&&(t[s]=t[o]+a,n[s]=o)}return{dist:t,prev:n}}function Fi(r,e){return r.every(t=>e[t].kind==="battery")?"battery":r.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Di=new WeakMap;function il(r,e){let t=gr(r),n=r.floors.find(c=>c.id===t.floor_id),i=[],{wall_exterior:o,wall_interior:s}=r.settings,a=new Map,l=new Map;e.forEach((c,h)=>l.set(c.floorId,[...l.get(c.floorId)??[],h]));let d=r.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let h=c.elevation>n.elevation,u=l.get(c.id),f=Fi(u,e);i.push({floorId:n.id,a:[t.x,pe,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:u,kind:f});let g=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[t.x,h?-.2:c.height,t.z],b:[t.x,pe,t.z],dist:g,members:u,kind:f}),a.set(c.id,g+.25)}for(let c of d){let h=_r(c,o,s),u=Ct(c,[t.x,t.z]);if(!u)continue;let f=Ke(h,[t.x,t.z]);if(!wn(h,u,f))continue;let g=[];for(let x of l.get(c.id)){let $=e[x],T=Ct(c,[$.x,$.z]);if(!T)continue;let z=Ke(h,[$.x,$.z]);wn(h,T,z)&&g.push({node:z,member:x})}let{dist:b,prev:p}=Li(h,f),S=new Map;for(let x of g)if(Number.isFinite(b[x.node]))for(let $=x.node;p[$]>=0;$=p[$]){let T=p[$],z=`${T}>${$}`,F=S.get(z)??{a:T,b:$,members:[]};F.members.push(x.member),S.set(z,F)}let m=a.get(c.id)??0;for(let{a:x,b:$,members:T}of S.values()){let z=h.pos[x],F=h.pos[$],w=Fi(T,e);i.push({floorId:c.id,a:[z[0],pe,z[1]],b:[F[0],pe,F[1]],dist:m+b[x],members:T,kind:w})}}return i}function Ci({building:r,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:o}){let s=gr(r);if(!s)return[];let a=r.floors.find(k=>k.id===s.floor_id);if(!a)return[];let l=k=>o?.get(k),d=mr(r,"inverter"),c=mr(r,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let h=k=>{let M=null;for(let H of d)H.floorId===k.floorId&&(!M||Math.hypot(H.x-k.x,H.z-k.z)<Math.hypot(M.x-k.x,M.z-k.z))&&(M=H);return M},u=k=>l(k.id)??(c.length===1?t.battery??0:0),f=new Map;for(let k of c){let M=h(k);M&&f.set(k.id,M)}let g=e.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of c)!f.has(k.id)&&t.battery!==null&&g.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(u(k))});let b=`${s.floor_id}:${s.x},${s.z}|${g.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,p=Di.get(r);p||Di.set(r,p=new Map);let S=p.get(b);S||(S=il(r,g),p.clear(),p.set(b,S));let m=S.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((M,H)=>M+g[H].power,0),kind:k.kind})),x=t.grid!==null?br(r):null,$=r.settings.roof.cables??[],T=k=>$.find(M=>M.id===k),z=(k,M)=>k.map(H=>({...H,key:M}));if(x){let k=t.grid>=0,M=T("grid"),H=M?_n(r,M,[x.end[0],a.elevation+Math.max(pe,x.height),x.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...x.height>.05?[[x.end[0],x.height,x.end[1]]]:[],[x.end[0],pe,x.end[1]],[x.wall[0],pe,x.wall[1]],[s.x,pe,s.z]],q=M?Lt(r,k?H:[...H].reverse(),Math.abs(t.grid),k?"grid":"export",a):Bi(a.id,k?H:[...H].reverse(),Math.abs(t.grid),k?"grid":"export",0);m.push(...z(q,"grid"))}if(t.battery!==null&&t.battery>0)for(let k of m)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let F=r.settings.roof.solar??[],w=r.settings.roof.strings??[],E=new Map;if(i&&F.length){let k=[...Wt(r),...Ht(r)];for(let M of F){let H=i.get(M.id)??0,q=M.string?w.find(oe=>oe.id===M.string)?.inverter:null,O=q?d.find(oe=>oe.id===q)??null:null;if(!O&&d.length){let oe=Be(r,M,k),Ue=oe?Ti(oe,M):[M.u,M.v];O=d.reduce((De,ut)=>!De||Math.hypot(ut.x-Ue[0],ut.z-Ue[1])<Math.hypot(De.x-Ue[0],De.z-Ue[1])?ut:De,null)}O&&E.set(O.id,(E.get(O.id)??0)+H);let D=O??{floorId:s.floor_id,x:s.x,z:s.z},B=O?1.1+O.h:1.5,J=T(`solar:${M.id}`),j=J?sl(r,M):null,ce=r.floors.find(oe=>oe.id===D.floorId);J&&j&&ce?m.push(...z(Lt(r,_n(r,J,j,[D.x,ce.elevation+B,D.z]),H,"solar",ce),`solar:${M.id}`)):m.push(...z(ll(r,M,H,D,B),`solar:${M.id}`))}}else t.solar!==null&&!d.length&&m.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,pe,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let k of d){let M=1.1+k.h,H=c.filter(D=>f.get(D.id)===k),q=l(k.id);if(q===void 0){q=E.get(k.id)??(d.length===1?t.solar??0:0);for(let D of H)q+=u(D)}let O=r.floors.find(D=>D.id===k.floorId);if(t.solar!==null||t.battery!==null){let D=T(`inv:${k.id}`),B=D&&O?Lt(r,_n(r,D,[k.x,O.elevation+M,k.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,q),"inverter",O):Ii(r,k,M,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,q),"inverter",0);m.push(...z(B,`inv:${k.id}`))}for(let D of H){let B=u(D);if(t.battery===null&&l(D.id)===void 0)continue;let J=D.variant==="wall"?.5+D.h:.9,j=T(`bat:${D.id}`),ce=j&&O?Lt(r,_n(r,j,[k.x,O.elevation+M-.1,k.z],[D.x,O.elevation+J,D.z]),Math.abs(B),"battery",O):Ii(r,k,M-.1,D,J,Math.abs(B),"battery",0);m.push(...z(B<=0?ce:ce.map(oe=>({...oe,a:oe.b,b:oe.a})).reverse(),`bat:${D.id}`))}}return m}function br(r){let e=gr(r),t=e?r.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=r.settings,{walls:o}=ct(t.rooms,{exterior:n,interior:i},t.walls??[]),s=mr(r,"grid_point")[0],a=o.filter(f=>f.exterior);if(s){let f=null;for(let p of a){let S=p.b[0]-p.a[0],m=p.b[1]-p.a[1],x=s.x-e.x,$=s.z-e.z,T=x*m-$*S;if(Math.abs(T)<1e-9)continue;let z=((p.a[0]-e.x)*m-(p.a[1]-e.z)*S)/T,F=((p.a[0]-e.x)*$-(p.a[1]-e.z)*x)/T;if(z<=0||z>1||F<0||F>1||f&&z>=f.t)continue;let w=Math.hypot(S,m)||1;f={q:[e.x+x*z,e.z+$*z],out:[m/w,-S/w],t:z}}let g=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],b=r.floors.flatMap(p=>p.furniture).find(p=>p.id===s.id)?.mount_y??0;return{floorId:t.id,wall:g,end:[s.x,s.z],height:Math.max(0,b)}}let l=null;for(let f of a){let g=f.b[0]-f.a[0],b=f.b[1]-f.a[1],p=g*g+b*b||1,S=Math.min(1,Math.max(0,((e.x-f.a[0])*g+(e.z-f.a[1])*b)/p)),m=[f.a[0]+g*S,f.a[1]+b*S],x=Math.hypot(e.x-m[0],e.z-m[1]),$=Math.sqrt(p);(!l||x<l.d)&&(l={q:m,out:[b/$,-g/$],d:x})}if(!l)return null;let{q:d,out:c}=l,h=0;for(let f of r.floors)for(let g of f.outdoor??[]){let b=g.points.length;for(let p=0;p<b;p++){let S=g.points[p],m=g.points[(p+1)%b],x=m[0]-S[0],$=m[1]-S[1],T=c[0]*$-c[1]*x;if(Math.abs(T)<1e-9)continue;let z=((S[0]-d[0])*$-(S[1]-d[1])*x)/T,F=((S[0]-d[0])*c[1]-(S[1]-d[1])*c[0])/T;z>0&&F>=0&&F<=1&&(h=Math.max(h,Math.min(15,z)))}}let u=h>n+1?h:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*u,d[1]+c[1]*u],height:0}}function mr(r,e){let t=[];for(let n of r.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Pi=new WeakMap;function Oi(r,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,o=Pi.get(r);o||Pi.set(r,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,d=_r(e,a,l),c=[t,n],h=Ct(e,t),u=Ct(e,n);if(h&&u){let f=Ke(d,t),g=Ke(d,n);if(wn(d,h,f)&&wn(d,u,g)){let{dist:b,prev:p}=Li(d,f);if(Number.isFinite(b[g])){c.length=0;for(let S=g;S>=0;S=p[S])c.unshift(d.pos[S])}}}return o.set(i,c),c}function Ii(r,e,t,n,i,o,s,a){let l=r.floors.find(h=>h.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=Oi(r,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(h=>[h[0],pe,h[1]]),[n.x,i,n.z]];return Bi(l.id,c,o,s,a)}function Bi(r,e,t,n,i){let o=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(o.push({floorId:r,a,b:l,dist:i,power:t,kind:n}),i+=d)}return o}function _n(r,e,t,n){let o=(r.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(pe,e.height);return[t,...e.points.map(s=>[s[0],o,s[1]]),n]}function sl(r,e){let t=Be(r,e,[...Wt(r),...Ht(r)]);if(!t)return null;let[n,i]=Ne(t,e),o=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*o+t.es[0]*s,t.o[1]+t.eu[1]*o+t.es[1]*s,t.o[2]+t.eu[2]*o+t.es[2]*s]}function al(r,e,t){let{wall_exterior:n,wall_interior:i}=r.settings,o=_r(e,n,i),s=Ct(e,t),a=s?bn(o,s.id,t):null;return a===null?t:o.pos[a]}function Lt(r,e,t,n,i){let o=[...r.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let h of o)d>=h.elevation-.01&&(c=h);return c},a=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],h=e[d+1];if(Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])<1e-4)continue;let f=[];if(Math.abs(h[1]-c[1])>.01){let g=Math.min(c[1],h[1]),b=Math.max(c[1],h[1]);for(let p of o)p.elevation>g+.01&&p.elevation<b-.01&&f.push(p.elevation);h[1]<c[1]&&f.reverse()}for(let g of[...f,h[1]]){let b=(g-c[1])/(h[1]-c[1]||1),p=Math.abs(h[1]-c[1])>.01?[c[0]+(h[0]-c[0])*b,g,c[2]+(h[2]-c[2])*b]:h,S=s((c[1]+p[1])/2),m=Math.hypot(p[0]-c[0],p[1]-c[1],p[2]-c[2]);m>1e-4&&a.push({floorId:S.id,a:[c[0],c[1]-S.elevation,c[2]],b:[p[0],p[1]-S.elevation,p[2]],dist:l,power:t,kind:n}),l+=m,c=p}}return a}function ll(r,e,t,n,i){let o=[...Wt(r),...Ht(r)],s=Be(r,e,o),a=r.floors.find(p=>p.id===n.floorId);if(!s||!a)return[];let[l,d]=Ne(s,e),c=(p,S)=>[s.o[0]+s.eu[0]*p+s.es[0]*S,s.o[1]+s.eu[1]*p+s.es[1]*S,s.o[2]+s.eu[2]*p+s.es[2]*S],h=e.u+l/2,u=a.elevation+pe,f=[],g;if(s.unbounded){let p=c(h,e.v+d/2);g=[p[0],u,p[2]],f.push(g)}else if(s.wall){let p=c(h,e.v);g=[p[0],u,p[2]],f.push(p,g)}else{let p=c(h,e.v),S=fr(r)??a,m=Math.max(a.elevation+.5,Math.min(p[1]-.25,S.elevation+S.height-.12));g=[p[0],m,p[2]],f.push(p)}let b=al(r,a,[g[0],g[2]]);f.push([b[0],g[1],b[1]]),Math.abs(g[1]-u)>.05&&f.push([b[0],u,b[1]]);for(let p of Oi(r,a,b,[n.x,n.z]).slice(1))f.push([p[0],u,p[1]]);return f.push([n.x,a.elevation+i,n.z]),Lt(r,f,t,"solar",a)}function Ni(r,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(n).fill(0);for(let s of Object.values(r))for(let a of s){let l=typeof a.start=="number"?a.start:Date.parse(a.start),d=Math.floor((l-t.getTime())/3e5);d<0||d>=n||typeof a.mean!="number"||(i[d]+=Math.max(0,a.mean))}return{kwh:i.reduce((s,a)=>s+a*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Vi(r,e){let t=new Date;t.setHours(0,0,0,0);try{return await r.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function wr(r,e){let n=l=>42-(e>0?l/e*36:0),i=r.map((l,d)=>[d/288*220,n(l)]),o=i.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:o,area:`${o} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Ki(r){return Math.max(1,r.rows*r.cols-(r.skip?.length??0))}var cl=400;function Ui(r,e){let t=new Map;for(let n of r.settings.roof.solar??[]){let i=Math.min(1,(e.get(n.id)??0)/(Ki(n)*(n.wp??cl)));t.set(n.id,i>.003?Math.pow(i,.6):0)}return t}function Gi(r,e,t){let n=new Map,i=e.settings.roof.solar??[],o=e.settings.roof.strings??[],s=Ki,a=[],l=0,d=new Map;for(let u of i){let f=u.entity&&u.entity!=="none"?ee(r.states[u.entity]):null;if(f!==null){n.set(u.id,Math.max(0,f)),l+=Math.max(0,f);continue}let g=u.string?o.find(p=>p.id===u.string):void 0,b=g?.entity&&g.entity!=="none"?ee(r.states[g.entity]):null;if(g&&b!==null){d.set(g.id,[...d.get(g.id)??[],u]);continue}a.push(u)}for(let[u,f]of d){let g=o.find(S=>S.id===u),b=Math.max(0,ee(r.states[g.entity])??0),p=f.reduce((S,m)=>S+s(m),0);for(let S of f)n.set(S.id,b*s(S)/p);l+=b}let c=Math.max(0,(t??0)-l),h=a.reduce((u,f)=>u+s(f),0);for(let u of a)n.set(u.id,h?c*s(u)/h:0);return n}var fe={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function qi(r,e){if(r==="grid")return fe.import;if(r==="export")return fe.export;if(r==="solar")return fe.solar;if(r==="battery")return fe.battery;if(r==="wallbox")return fe.wallbox;if(r==="inverter")return(e.solar??0)>5?fe.solar:fe.battery;let t=[[Math.max(0,e.grid??0),fe.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),fe.solar],[Math.max(0,e.battery??0),fe.battery]],[n]=t.reduce((i,o)=>o[0]>i[0]?o:i);return n>0?t.find(i=>i[0]===n)[1]:fe.house}var vr=["neon","blueprint","day"],Bt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var vn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function ji(r,e){let t=vn[r].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[i,o]=t[n],[s,a]=t[n-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l]}}return t[t.length-1][1]}function Zi(r,e,t){let n=new Map;for(let i of e.floors)for(let o of i.rooms){let s=Me(r,i,o,t);s!==null&&n.set(o.id,s)}return n}function Xi(r){let e=vn[r].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,o])=>`rgb(${o.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(n-t)*100)}%`).join(", ")})`}function ve(r,e){if(!Bn(e))return R(r,`furn_${e}`);let t=ae(e);return t?Eo(t,r?.language??navigator.language):R(r,"pack_missing_item")}var yr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function yn(r){return r&&r!=="none"?r:null}function Nt(r,e){if(e.type!=="parking")return null;let t=yn(e.entity);if(t){let o=r.states[t];if(!o||!yr.has(o.state.toLowerCase()))return null}let n=e.vehicle??null,i=yn(e.type_entity);if(i&&e.types?.length){let o=(r.states[i]?.state??"").trim().toLowerCase();if(o){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===o)??e.types.find(l=>s(l.state)&&o.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&ae(n)?n:null}function kr(r,e){let t=new Map;for(let n of e.floors)for(let i of n.furniture){let o=Nt(r,i);o&&t.set(i.id,o)}return t}function Yi(r){return r.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[yn(t.entity),yn(t.type_entity)])).filter(e=>!!e)}function Qi(r,e){let t=ae(e);if(!t)return null;let n=r.scale??1;return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Vt=1800*1e3,dl=new Set(["motion","occupancy","presence"]);function Ji(r,e){return e.startsWith("binary_sensor.")&&dl.has(String(r.states[e]?.attributes.device_class))}function Kt(r,e){let t=[],n=new Set,i=(o,s,a,l)=>{n.has(o)||(n.add(o),t.push({entity:o,floorId:s,x:a,z:l}))};for(let o of e.floors)for(let s of o.placements)if(Ji(r,s.entity_id))i(s.entity_id,o.id,s.x,s.z);else if(I(s.entity_id)==="camera")for(let a of Ae(r,s.entity_id))i(a,o.id,s.x,s.z);for(let o of e.floors)for(let s of o.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=ge(s.points);for(let d of te(r,s.area_id))Ji(r,d)&&i(d,o.id,a,l)}return t}function es(r,e,t,n=Vt){let i=t-n,o=[];for(let[s,a]of Object.entries(r)){let l="";for(let d of a){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=i&&c<=t&&o.push({entity:s,time:c}),l=d.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||o.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||o.push({entity:s.entity,time:a})}return o.sort((s,a)=>s.time-a.time)}function ts(r,e,t,n=Vt){let i=new Map(r.map(s=>[s.entity,s])),o=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=o[o.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||o.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return o.slice(-40)}function kn(r,e){return new Date(e).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var ns='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var xn=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function xr(r,e){let t=[],n=Ce(r,e.floors),i=e.floors.length>1;for(let o of e.floors){let s=(c,h)=>o.rooms.find(u=>u.points.length>=3&&N([c,h],u.points))??null,a=(c,h)=>[s(c,h)?.name,i?o.name:null].filter(Boolean).join(" \xB7 ");for(let c of o.rooms){if(c.points.length<3)continue;let[h,u]=ge(c.points);t.push({kind:"room",name:c.name,where:i?o.name:"",floorId:o.id,roomId:c.id,entity:null,icon:null,x:h,z:u,y:0})}let l=new Set,d=(c,h,u,f)=>{l.has(c)||!r.states[c]||(l.add(c),t.push({kind:"device",name:G(r,c),where:a(h,u),floorId:o.id,roomId:s(h,u)?.id??null,entity:c,icon:I(c),x:h,z:u,y:f}))};for(let c of o.placements)d(c.entity_id,c.x,c.z,c.y??tt(I(c.entity_id)??"sensor",o.height,c.mount));for(let c of o.furniture){let h=n.get(c.id),u=h?.entity??h?.power;u&&d(u,c.x,c.z,Math.min(o.height-.3,Math.max(.5,c.h)))}}return t}function rs(r,e,t=8){let n=xn(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=r.filter(a=>{let l=xn(`${a.name} ${a.where} ${a.entity??""}`);return n.every(d=>l.includes(d))}),o=xn(e.trim()),s=a=>(xn(a.name).startsWith(o)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var hl=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],ul=[2200,2700,3200,4e3,5e3,6500],pl=["hs","rgb","rgbw","rgbww","xy"],fl=4,os=16,is=32,ml=128;function $r(r){let e=r.attributes.supported_color_modes??[],t=e.some(n=>pl.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Mr(r){return((r.attributes.supported_features??0)&fl)!==0&&typeof r.attributes.current_position=="number"}var Sr=class extends se{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{I(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return _`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?_`<img src=${n} alt=${G(this.hass,this.entity)} />`:_`<span class="qm-note">${le(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return R(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:G(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){be(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let o=i/t*Math.PI*2-Math.PI/2;return _`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${n}</div>`})}renderLight(e){let t=$r(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,o=t.color?hl.map(s=>_`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?ul.map(s=>_`<button class="qm-swatch" style="background:${gl(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return _`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?_`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:v}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=Mr(e),o=(d,c,h,u=!1)=>_`<button class="qm-swatch qm-slot ${u?"qm-slot-on":""}" aria-label=${c} @click=${h}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[o("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(d=>o(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],o("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(d=>o(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return _`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:le(this.hass,e)}</b>
        </button>
      </div>
      ${i?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:v}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&ml&&n!==null?_`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:t&(os|is)?_`<div class="qm-tilt-buttons">
        ${t&os?_`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:v}
        ${t&is?_`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:v}
      </div>`:v}renderCar(e){let t=e.entities,n=(h,u,f,g={})=>{this.hass.callService(h,u,{entity_id:f,...g})},i=t.lock,o=!!i&&i.startsWith("lock."),s=h=>/^(switch|input_boolean|fan|light)\./.test(h),a=t.climate,l=!!a&&a.startsWith("climate."),d=t.charging&&s(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return _`<p class="qm-car-line">${c||le(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${o||i&&s(i)?_`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(o?n("lock","unlock",i):n("homeassistant","turn_off",i)):o?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:v}
        ${a?_`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:v}
        ${d?_`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:v}
        ${!o&&!a&&!d?_`<p class="qm-note">${this.t("car_no_controls")}</p>`:v}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",i=e.state==="off"||e.state==="standby",o=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return _`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":"media_play_pause")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?_`<p class="qm-media-title">${s}</p>`:v}
      ${o!==null?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(o)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:v}
      ${this.renderPlay(e)}`}renderPlay(e){if(!C("sound"))return v;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return v;let i=e.attributes.source;return _`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(o=>_`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:o.type,media_content_id:o.content})}>
            ▶ ${o.label}
          </button>`)}
        ${t.map(o=>_`<button class="qm-chip ${o===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:o})}>${o}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return _`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${le(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return v;let t=I(this.entity),n=this.car?this.renderCar(this.car):V(e)?_`<p class="qm-note">${le(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&C("sound")?this.renderMedia(e):this.renderToggle(e);return _`<div class="qm" role="dialog" aria-label=${G(this.hass,this.entity)}>
      <div class="qm-title">${G(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[we,de`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function gl(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Sr);var _l=new URL(import.meta.url),bl=new URL("./neonplan3d-3d.js?v=c418a7d1dd8b",_l).href,ss;function as(){return ss??=import(bl),ss}var ls=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function wl(r,e,t){let n=ls(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of e.floors)for(let o of i.rooms)if([o.name,o.area_id??"",o.area_id?r.areas?.[o.area_id]?.name??"":""].filter(Boolean).map(ls).includes(n))return{floorId:i.id,room:o};return null}function vl(r){let e=r.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function cs(r,e){let t=[],n=new Map;for(let i of e.presence){let o=r.states[i.person];if(!o||!i.sensor||o.state!=="home"&&o.state!=="on")continue;let s=r.states[i.sensor];if(!s)continue;let a=wl(r,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[d,c]=ge(a.room.points),h=-Math.PI/2+.9+l*1.15,u=.75,f=o.attributes.friendly_name??i.person;t.push({id:i.person,name:f,initials:vl(f),picture:o.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(h)*u,z:c+Math.sin(h)*u})}return t}function ds(r,e,t,n){let i=new Map,o=s=>!!s&&r.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let d of s.rooms)for(let c of rn(r,te(r,d.area_id)))I(c)==="light"&&a.add(c);for(let d of s.placements)I(d.entity_id)==="light"&&a.add(d.entity_id);let l=s.openings.filter(d=>{let c=t.get(d.id);if(!c)return!1;if(d.type==="garage")return(Ee(r,c,"garage").cover??1)<.95;if(d.type==="door")return o(c.contact)||o(c.contact2??null);let h=Ee(r,c,"window");return h.open>.5||h.tilt>.5||h.open2>.5||h.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(d=>r.states[d]?.state==="on").length,open:l,persons:n.filter(d=>d.floorId===s.id).length})}return i}function hs(r,e){let t=[e.rooms===1?R(r,"floor_rooms_one"):R(r,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(R(r,"floor_lights",{n:e.lightsOn})),e.open&&t.push(R(r,"floor_open",{n:e.open})),e.persons&&t.push(R(r,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function us(r,e,t,n=12,i=180){let o=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(o,s*16/9)};for(let l=1;l<=Math.max(1,r);l++){let d=Math.ceil(r/l),c=(o-n*(l-1))/l,h=(s-n*(d-1))/d*16/9,u=Math.min(c,h);(u>a.tile||l===1)&&(a={cols:l,tile:u})}if(a.tile<i){let l=Math.max(1,Math.floor((o+n)/(i+n)));return{cols:Math.min(l,Math.max(1,r)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function Er(r,e,t){let n=[...t.openings.values()].flatMap(z=>[z.cover,z.contact,z.tilt,z.contact2??null,z.tilt2??null,z.position??null,z.tiltAngle??null]),i=hi(e),o=i.filter(z=>I(z)==="camera").flatMap(z=>Ae(r,z)),s=i.map(z=>Ot(r,z)),a=e.energy,l=e.presence.flatMap(z=>[z.person,z.sensor]),d=e.floors.flatMap(z=>z.rooms.flatMap(F=>te(r,F.area_id).filter(w=>I(w)==="light"))),c=[...t.furniture.values()].flatMap(z=>[z.entity,z.power]),h=e.floors.flatMap(z=>z.furniture.flatMap(F=>[F.state_entity??null,F.state_entity2??null,F.color_entity??null])),u=e.floors.flatMap(z=>z.furniture.flatMap(F=>[F.door_left??null,F.door_right??null,F.soc??null,F.status??null,F.charge??null,F.export??null])),f=(e.settings.roof?.windows??[]).flatMap(z=>[z.cover,z.contact,z.tilt]).filter(z=>!!z&&z!=="none"),g=[...(e.settings.roof?.solar??[]).map(z=>z.entity),...(e.settings.roof?.strings??[]).map(z=>z.entity)].filter(z=>!!z&&z!=="none"),b=e.floors.flatMap(z=>z.furniture.filter(F=>F.type==="robot_vacuum").map(F=>zt(r,t.furniture.get(F.id)?.entity??null,F.room_sensor))),p=e.floors.flatMap(z=>z.furniture.flatMap(F=>(F.pictures??[]).flatMap(w=>[w.entity,...w.image.startsWith("camera:")?[w.image.slice(7)]:[]]))),S=t.heat?e.floors.flatMap(z=>z.rooms.flatMap(F=>te(r,F.area_id).filter(w=>w.startsWith("sensor.")))):[],m=[...Yi(e.floors),...C("auto_pro")?Jo(r,e.floors):[]],x=Kt(r,e).map(z=>z.entity),$=it(r,t.weatherEntityId??e.settings.weather_entity),T=[...i,...o,...n,...s,...c,...h,...u,...b,...f,...g,...p,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...d,...S,...t.warnings,...m,...x,$,"sun.sun"];return[...new Set(T.filter(z=>!!z))]}var kl=12e4,ps={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},xl='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Sl='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function fs(r,e,t){return r.rooms.find(n=>n.points.length>=3&&N([e,t],n.points))?.id??null}function $l(r,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&xe(r.states[t])}var zr=class extends se{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;volumeSent=0;holoIds="";shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.unlistenReplay?.(),this.unlistenReplay=null,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.renderRoot.addEventListener("wheel",e=>{let t=e;if(!t.target?.closest?.(".fp3d-holo"))return;let n=this.renderRoot.querySelector("canvas");n&&(t.preventDefault(),n.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await as();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{this._central&&!n.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?R(this.hass,"floor_rooms_one"):R(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,i,o)=>this.onDeviceTap(n,i,o),onDeviceHold:(n,i,o)=>this.onDeviceHold(n,i,o),onRoomDoubleTap:(n,i)=>this.onRoomDoubleTap(n,i),onDeviceSwipe:(n,i,o,s,a)=>this.onDeviceSwipe(n,i,o,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,i,o)=>this.fire("furniture-move",{id:n,x:i,z:o}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,i,o)=>this.fire("device-move",{id:n,x:i,z:o}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,i,o,s,a,l)=>this.placeHolo(n,i,o,s,a,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...kt()]),this.shownPacks=Xe(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Xe()&&(this.shownPacks=Xe(),t.setPacks([...kt()]),this.hass&&this.building&&t.setParked(kr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let o=JSON.stringify(this.startViewOf()),s=this.shownStartView!==void 0&&this.shownStartView!==o;this.shownStartView=o,t.setStartView(this.startViewOf()),t.setBuilding(this.building),s&&this.floorId===null&&t.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(o=>e.has(o)),i=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||i)&&this.syncDevices(n,i&&(this.trail||this.detecting)),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){let n=this.viewer,i=this.building;if(!n||!i||!this.hass)return;let o=this.hass;(e||!this.openingLinks||this.linkedRegistry!==o.entities)&&(this.openingLinks=Et(o,i.floors),this.furnitureLinks=Ce(o,i.floors),this.linkedRegistry=o.entities,this.findIndex=null,this.alertSrc=this.alerts?lr(o,i,this.weatherEntityId):null,this.watched=Er(o,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?cr(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),e=!0);let s=e||t||this.watched.some(y=>this.shownStates.get(y)!==o.states[y]),a=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!s)return;let l=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(y=>[y,o.states[y]]));let d=Hi(o,i),c=ci(o,i),h=this.furnitureMarkers(o,i,new Set(c.map(y=>y.id)),new Set(d.map(y=>y.powerEntity)));d.push(...h.consumers);let u=Wi(o,i,d,dt(i,y=>this.furnitureLinks?.get(y.id)?.power??null)),f=new Map(d.filter(y=>y.id!==y.powerEntity).map(y=>[y.id,y.power]));this.confirmSet=nt(o,i.floors);let g=this.trail?this.trailNow(o,i):[],b=C("camera_cockpit")&&!this.dimmed?this.detectionPins(o,c):[];this.detecting=b.length>0;let p=C("energy_pro"),S=new Set(C("auto_pro")?i.floors.flatMap(y=>y.furniture.filter(A=>A.type==="parking"&&A.car&&Nt(o,A)).map(A=>A.id)):[]);n.setDevices([...[...c,...h.markers].map(y=>{let A=y.show==="no_power"||"energyDevice"in y&&y.energyDevice?null:f.get(y.id)??null,W={...y,power:A,powerText:A===null?void 0:Q(o,A),effect:this.dimmed?!1:y.effect},K=y.ownName&&(y.showName||this.markerNames)?y.ownName:"",P=C("sound")&&this.mediaCardUp(o,y.id)||C("auto_pro")&&!!y.furnitureId&&S.has(y.furnitureId);return{...W,pin:this.showPin(W)&&!P,full:y.show==="always",caption:K}}),...(p&&(this.flows??this._flows)&&!this.dimmed&&u.grid!==null?[this.gridPin(o,i,u.grid)]:[]).filter(y=>!!y),...b,...g.map((y,A)=>({id:`trail:${A}`,floorId:y.floorId,roomId:null,x:y.x,z:y.z,y:.3+.4*g.slice(0,A).filter(W=>W.entity===y.entity).length,icon:ns,name:G(o,y.entity),text:kn(o,y.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),n.setTrail(g,this.replay?this.robotPaths(o,i):[]),n.setPickTargets(h.targets,this.openingTargets()),n.setScreens(h.screens),n.setFridgeDoors(Qn(o,i.floors)),n.setRobots(this.robotInfos(o,i));let m=new Map;for(let y of i.settings.roof?.windows??[]){let A=L=>L&&L!=="none"?L:null,W=Ee(o,{cover:A(y.cover),contact:A(y.contact),tilt:A(y.tilt)},"window"),K=A(y.window)?o.states[A(y.window)]:void 0,P=W.open;if(K&&!V(K)){let L=K.attributes.current_position;P=typeof L=="number"?Math.min(1,Math.max(0,L/100)):K.state==="open"||K.state==="opening"?1:0}m.set(y.id,{open:P,tilt:W.tilt,cover:W.cover??0})}n.setRoofWindows(m),n.setParked(kr(o,i));let x=new Map(i.floors.flatMap(y=>y.openings.map(A=>[A.id,A.type]))),$=new Map([...this.openingLinks].map(([y,A])=>[y,Ee(o,A,x.get(y))]));n.setOpeningStates($,a),this.setAlerts(this.alertSrc?gi(o,i,this.alertSrc,this.openingLinks):[]);let T=[...c,...h.markers].map(y=>`${y.id}:${y.glow?`${y.glow.level.toFixed(1)}/${y.glow.color.map(A=>A.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...$].map(([y,A])=>`${y}:${A.open}:${A.cover===null?"-":A.cover.toFixed(1)}`).join(";");if(T!==this.thumbSig){let y=this.thumbSig==="";this.thumbSig=T,y||this.scheduleThumbs(1500)}let z=i.floors.flatMap(y=>y.furniture.filter(A=>A.type==="home_battery").map(A=>({floorId:y.id,x:A.x,z:A.z})))[0]??(i.energy.battery?i.floors.flatMap(y=>y.placements.filter(A=>A.entity_id===i.energy.battery).map(A=>({floorId:y.id,x:A.x,z:A.z})))[0]:null),F=p?Gi(o,i,u.solar):null,w=i.settings.roof.hologram??Le,E=[...i.settings.roof.solar??[]].sort((y,A)=>A.rows*A.cols-y.rows*y.cols),k=i.settings.roof.strings??[],M=y=>(y.string?k.find(A=>A.id===y.string)?.inverter:null)??null,H=w.plant_floor?"all":"house",q=(y,A,W,K)=>{let P=Be(i,y);if(!P)return null;let[L,X]=Ne(P,y),Z=y.u+L/2+A,ne=y.v+X/2+W,ie=[P.o[0]+P.eu[0]*Z+P.es[0]*ne,P.o[1]+P.eu[1]*Z+P.es[1]*ne,P.o[2]+P.eu[2]*Z+P.es[2]*ne],re=P.wall?.floorId??(P.unbounded?i.floors.find(he=>he.elevation===Math.min(...i.floors.map(qe=>qe.elevation)))?.id??i.floors[0].id:[...i.floors].sort((he,qe)=>qe.elevation-he.elevation)[0].id);return{p:[ie[0]+P.n[0]*.05,ie[1]+P.n[1]*.05,ie[2]+P.n[2]*.05],n:[P.n[0],P.n[1],P.n[2]],floorId:re,size:K,roof:!0,views:H}},O=[],D=[],B=u.grid!==null||u.battery!==null||u.solar!==null,J=w.place==="free"&&Number.isFinite(w.x)&&Number.isFinite(w.z),j=p&&u.solar!==null&&!J?E.find(y=>y.id===w.field)??E[0]:void 0,ce=j?M(j):null,oe=!!j&&!!ce&&!E.some(y=>y.id!==j.id&&M(y)===ce)&&w.right===0&&w.up===0,Ue=(()=>{if(!oe||!j)return 0;let y=Be(i,j);return y?Ne(y,j)[0]/2+1.2:0})(),De=j?q(j,w.right+Ue,w.up,w.size):null,ut=this.devicePowers(o,i),$n=p&&u.solar!==null?i.energy.solar?[i.energy.solar]:dt(i,y=>this.furnitureLinks?.get(y.id)?.power??null).solar:[];if(De)O.push(De),D.push({kind:"main",name:R(o,"holo_title"),w:null,dayIds:$n,battery:null});else if(p&&B&&J){let y=0,A=0,W=0,K=1/0,P=i.floors[0];for(let ne of i.floors){ne.rooms.length&&(K=Math.min(K,ne.elevation)),ne.rooms.length&&(!P.rooms.length||ne.elevation+ne.height>P.elevation+P.height)&&(P=ne);for(let ie of ne.rooms)for(let[re,he]of ie.points)y+=re,A+=he,W++}W&&(y/=W,A/=W);let L=w.x-y,X=w.z-A,Z=Math.hypot(L,X);O.push({p:[w.x,(Number.isFinite(K)?K:0)+(w.height??3),w.z],n:Z>.01?[L/Z,0,X/Z]:[1,0,0],floorId:P.id,size:w.size,roof:!0,views:H}),D.push({kind:"main",name:R(o,"holo_title"),w:null,dayIds:$n,battery:null})}else if(p&&B&&i.floors.some(y=>y.rooms.length)){let y=-1/0,A=1/0,W=-1/0,K=0,P=i.floors[0];for(let L of i.floors){for(let X of L.rooms)for(let[Z,ne]of X.points)y=Math.max(y,Z),A=Math.min(A,ne),W=Math.max(W,ne);L.rooms.length&&L.elevation+L.height>K&&(K=L.elevation+L.height,P=L)}O.push({p:[y+.6,K+.4,(A+W)/2],n:[1,0,0],floorId:P.id,size:w.size,roof:!0,views:H}),D.push({kind:"main",name:R(o,"holo_title"),w:null,dayIds:$n,battery:null})}if(p&&u.solar!==null){let y=new Set;for(let A of i.floors)for(let W of A.furniture.filter(K=>K.type==="inverter")){if(W.plant_card===!1||y.has(W.id))continue;y.add(W.id);let K=E.filter(ie=>M(ie)===W.id),P=(j&&W.id===ce?K.find(ie=>ie.id!==j.id):null)??K[0],L=this.furnitureLinks?.get(W.id)?.power??null,X=P?q(P,W.plant_right??0,W.plant_up??0,w.size*.85):null;if(!X||!L)continue;let Z=A.furniture.filter(ie=>ie.type==="home_battery").sort((ie,re)=>Math.hypot(ie.x-W.x,ie.z-W.z)-Math.hypot(re.x-W.x,re.z-W.z))[0],ne=Z?.soc&&Z.soc!=="none"?Number(o.states[Z.soc]?.state):NaN;O.push(X),D.push({kind:"plant",name:W.name||ve(o,W.type),w:Math.max(0,ee(o.states[L])??0),dayIds:[L],battery:Z?{soc:Number.isFinite(ne)?ne:null,w:ut.get(Z.id)??null}:null})}}let Dr=w.device_house===!1?"floor":"all";if(p)for(let y of i.floors){for(let A of y.furniture){if(!A.holo)continue;let W=this.furnitureLinks?.get(A.id)?.power??null,K=d.find(L=>L.id===A.id);if(!W&&!K)continue;let P=y.elevation+ke(y,A)+A.h;O.push({p:[A.x,P+.1,A.z],n:[0,1,0],floorId:y.id,size:w.size*.7,roof:!1,views:Dr,room:fs(y,A.x,A.z)}),D.push({kind:"device",name:A.name||ve(o,A.type),w:K?.power??(W?ee(o.states[W]):null),dayIds:W?[W]:[],battery:null})}for(let A of y.placements){if(!A.holo)continue;let W=Ot(o,A.entity_id);if(!W)continue;let K=y.elevation+(A.y??.4)+.2;O.push({p:[A.x,K,A.z],n:[0,1,0],floorId:y.id,size:w.size*.7,roof:!1,views:Dr,room:fs(y,A.x,A.z)}),D.push({kind:"device",name:A.name||G(o,A.entity_id),w:ee(o.states[W]),dayIds:[W],battery:null})}}let Ge=[];if(C("sound")){let y=new Set,A=(i.settings.roof.hologram??Le).size,W=(P,L,X,Z,ne,ie)=>{let re=o.states[L];if(!re||I(L)!=="media"||y.has(L))return;y.add(L);let he=this.ro?void 0:this.mediaGrace.get(L),qe=[re.attributes.media_title,re.attributes.app_name,re.attributes.source].find(qt=>typeof qt=="string"&&!!qt.trim())??"";if(!(!V(re)&&(re.state==="playing"||re.state==="paused"&&!!qe||re.state==="on"&&!!re.attributes.source))){he&&he.until>Date.now()?(Ge.push({...he.source,playing:!1,level:0}),O.push(he.anchor),D.push({...he.card,media:{...he.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,he.until-Date.now()+100))):V(re)||(this.mediaGrace.delete(L),Ge.push({id:L,floorId:P.id,x:X,z:Z,level:0,playing:!1,members:[]}));return}let Mn=re.state==="playing",me=re.attributes,Cr=typeof me.volume_level=="number"?Math.min(1,Math.max(0,me.volume_level)):.5,ks=Array.isArray(me.group_members)?me.group_members.filter(qt=>qt!==L):[];Ge.push({id:L,floorId:P.id,x:X,z:Z,level:Mn?.3+.7*Cr:0,playing:Mn,members:ks});let xs=qe||R(o,"holo_media_playing"),Or={p:[X,P.elevation+ne+.12,Z],n:[0,1,0],floorId:P.id,size:A*.7,roof:!1,views:"all"},Br={kind:"media",name:ie,w:null,dayIds:[],battery:null,media:{id:L,title:xs,artist:typeof me.media_artist=="string"?me.media_artist:typeof me.media_album_name=="string"?me.media_album_name:"",picture:typeof me.entity_picture=="string"?me.entity_picture:null,volume:Math.round(Cr*100),playing:Mn}};O.push(Or),D.push(Br),this.ro||this.mediaGrace.set(L,{until:Date.now()+45e3,card:Br,source:Ge[Ge.length-1],anchor:Or})},K=(P,L)=>{for(let X of P.furniture){if((X.entity!=null&&X.entity!=="none")!==L)continue;let Z=this.furnitureLinks?.get(X.id)?.entity;Z&&W(P,Z,X.x,X.z,ke(P,X)+X.h,X.name||ve(o,X.type))}};for(let P of i.floors)K(P,!0);for(let P of i.floors)for(let L of P.placements)W(P,L.entity_id,L.x,L.z,L.y??1.1,L.name||G(o,L.entity_id));for(let P of i.floors)K(P,!1)}if(C("auto_pro")){let y=(i.settings.roof.hologram??Le).size;for(let A of i.floors)for(let W of A.furniture){if(W.type!=="parking"||!W.car)continue;let K=Nt(o,W);if(!K)continue;let P=an(o,W);if(P.soc===null&&P.range===null&&P.locked===null&&P.climateOn===null)continue;let L=Qi(W,K),X=ke(A,W)+(L?.h??1.6);O.push({p:[W.x,A.elevation+X+.25,W.z],n:[0,1,0],floorId:A.id,size:y*.7,roof:!1,views:"all"});let Z=P.entities;D.push({kind:"car",name:W.name||ve(o,K),w:null,dayIds:[],battery:null,car:{spot:W.id,soc:P.soc,range:P.range,rangeUnit:P.rangeUnit,chargingW:P.chargingW,charging:P.charging,locked:P.locked,climateOn:P.climateOn,lock:Z.lock,climate:Z.climate,charge:Z.charging&&/^(switch|input_boolean)\./.test(Z.charging)?Z.charging:null}})}}n.setSound(Ge),n.setAnchors(O),JSON.stringify(D)!==JSON.stringify(this._holos)&&(this._holos=D),n.setSolarLevels(F&&!this.dimmed?Ui(i,F):new Map),n.setFlows(!p||!(this.flows??this._flows)||this.dimmed?[]:Ci({building:i,consumers:d,summary:u,battery:z??null,fieldPower:F,devicePower:this.devicePowers(o,i)}).map(y=>({floorId:y.floorId,a:y.a,b:y.b,dist:y.dist,power:y.power,color:qi(y.kind,u)})));let Pr=[];n.setPersons(Pr);let vs=ds(o,i,this.openingLinks,Pr);n.setFloorInfo(new Map([...vs].map(([y,A])=>[y,hs(o,A)])));let Ut=o.states["sun.sun"]?.attributes,Gt=typeof Ut?.elevation=="number"?Ut.elevation:null;n.setSun(Gt!==null&&typeof Ut?.azimuth=="number"?{elevation:Gt,azimuth:Ut.azimuth}:null);let Ir=this.weather&&!this.dimmed&&C("weather")?pi(o,it(o,this.weatherEntityId??i.settings.weather_entity)):null,pt=Ir?fi(Ir,i.settings.weather_effects):null;this.cloud=pt?.cloud??0,this._sky=(Gt===null?0:Math.min(1,Math.max(0,(Gt+4)/16)))*(1-.45*this.cloud);let ys=pt?pt.sky:(i.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&C("weather")?{...pt??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:ys}:null),this.watchLightning(!!pt?.lightning),this.applyTint();let Hr=u.grid!==null||u.solar!==null||u.battery!==null||u.tariff!==null?u:null;JSON.stringify(Hr)!==JSON.stringify(this._energy)&&(this._energy=Hr);let Wr=d.some(y=>y.wallbox)?d.filter(y=>y.wallbox).reduce((y,A)=>y+A.power,0):null,Lr=i.floors.flatMap(y=>y.furniture.filter(A=>A.type==="inverter")).map(y=>{let A=this.furnitureLinks?.get(y.id)?.power,W=A?ee(o.states[A]):null;return W===null?null:{name:y.name||ve(o,y.type),w:Math.max(0,W)}}).filter(y=>!!y);JSON.stringify(Lr)!==JSON.stringify(this._plants)&&(this._plants=Lr),Wr!==this._wallboxW&&(this._wallboxW=Wr),this.watchSolarDay([...new Set(D.flatMap(y=>y.dayIds))]),l&&(this.syncMs=this.syncMs*.8+(performance.now()-l)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.findIndex??=xr(t,n)).find(s=>s.entity===e);if(i){this.goTo(i);return}let o=t.entities?.[e]?.area_id??t.devices?.[t.entities?.[e]?.device_id??""]?.area_id??null;for(let s of n.floors){let a=s.openings.find(h=>{let u=this.openingLinks?.get(h.id);return!!u&&[u.contact,u.tilt,u.contact2,u.tilt2,u.cover].includes(e)}),l=s.rooms.find(h=>h.points.length>=3&&(a?h.id===a.room_id:!!o&&h.area_id===o));if(!l)continue;let[d,c]=ge(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:d,z:c,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,i=n?Et(t,e.floors):this.openingLinks,o=n?Ce(t,e.floors):this.furnitureLinks,s=cr(lr(t,e,this.weatherEntityId)),a=Er(t,e,{openings:i,furniture:o,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=C("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?sn(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...o],low:this._low,cars:l,energy:C("energy_pro"),auto:C("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return v;let t=this.hass,n=t.states[e.entity],i=le(t,n),o=I(e.entity)==="light"&&n?.state==="on"&&i.endsWith("%")?`${R(t,"state_on")} \xB7 ${i}`:i,s=n?.last_changed?R(t,"tt_since",{time:kn(t,Date.parse(n.last_changed))}):"";return _`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${G(t,e.entity)}</span>
      <b>${s?`${o} \xB7 ${s}`:o}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let i of t.floors)for(let o of i.furniture){if(o.type!=="inverter"&&o.type!=="home_battery")continue;let s=this.furnitureLinks?.get(o.id)?.power,a=o.type==="home_battery"&&o.charge&&o.charge!=="none"?ee(e.states[o.charge]):null,l=s?ee(e.states[s],o.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&n.set(o.id,l)}return n}detectionPins(e,t){let n=[],i=new Set(this.building?.floors.flatMap(o=>o.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let o of t){if(!o.model?.startsWith("camera")||i.has(o.id))continue;let s=this.now(),a=Ae(e,o.id).filter(f=>{let g=e.states[f];return g?g.state==="on"?!0:g.state==="off"&&!!g.last_changed&&s-Date.parse(g.last_changed)<kl:!1}),l=new Map;for(let f of a){let g=di(e,f);l.has(g)||l.set(g,f)}l.size>1&&l.delete("motion");let d=(o.rotation??0)*Math.PI/180,c=[-Math.sin(d),Math.cos(d)],h=o.model==="camera_ceiling",u=0;for(let[f,g]of l){let b=e.states[g],p=b?.last_changed?kn(e,Date.parse(b.last_changed)):"";n.push({id:`detect:${g}`,floorId:o.floorId,roomId:o.roomId,x:o.x+(h?0:c[0]*1.1),z:o.z+(h?0:c[1]*1.1),y:1.4+.4*u++,icon:ps[f]??ps.motion,name:G(e,g),text:`${R(e,`detect_${f}`)}${p?` \xB7 ${p}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let i=br(t);if(!i)return null;let o=Math.abs(n)<5,s=t.settings.outage_entity;return s&&dr(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Sl,name:R(e,"holo_grid"),text:R(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:xl,name:R(e,"holo_grid"),text:o?Q(e,0):`${R(e,n<0?"energy_grid_export":"energy_grid_import")} ${Q(e,Math.abs(n))}`,active:!o,unavailable:!1,glow:null,pin:!0}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let o=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(o===this.holoIds)return;this.holoIds=o,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let o=await Vi(this.hass,e);this.holoIds===n&&(this._rows=o)};i(),this.holoTimer=setInterval(()=>{i()},3e5)}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,i,o,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=this._holos[e]?.kind==="main";if(!a){d&&this._holoOn&&(this._holoOn=!1);return}d&&i!==this._holoOn&&(this._holoOn=i);let c=this._holos[e],h=(this.building?.settings.roof.hologram??Le).device_min_w??0;c?.kind==="device"&&h>0&&(c.w??0)<h&&(i=!1);let u=!i;if(a.hidden!==u&&(a.hidden=u),l&&l.hasAttribute("hidden")!==u&&l.toggleAttribute("hidden",u),!i)return;let f=o*.8,g=34*f,b=46*f,p=t+(s?g:-g),S=n-b,m=this.holoSizes.get(e),x=performance.now();(!m||x-m.at>2e3)&&(m={w:a.offsetWidth||184,h:a.offsetHeight||90,at:x},this.holoSizes.set(e,m));let $=m.w*f,T=m.h*f,z=s?p:p-$,F=z+$;for(let E=0;E<6;E++){let k=this.holoBoxes.find(M=>z<M.x1+4&&F>M.x0-4&&S-T<M.y1+4&&S>M.y0-4);if(!k)break;S=k.y0-6}this.holoBoxes.push({i:e,x0:z,x1:F,y0:S-T,y1:S});let w=s||(this.building?.settings.roof.hologram??Le).mirror!==!1;if(a.style.transform=w?`translate(${p.toFixed(1)}px, ${S.toFixed(1)}px) scale(${(s?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${z.toFixed(1)}px, ${S.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,k=l.lastElementChild;E?.setAttribute("x1",t.toFixed(1)),E?.setAttribute("y1",n.toFixed(1)),E?.setAttribute("x2",p.toFixed(1)),E?.setAttribute("y2",S.toFixed(1)),k?.setAttribute("cx",t.toFixed(1)),k?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy;if(!(C("energy_pro")||C("sound")||C("auto_pro"))||this.roomId&&!(this.building?.settings.roof.hologram??Le).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return v;let t=this.floorId===null||(this.building?.floors.length??0)<=1,n=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&t;return this._holos.map((i,o)=>i.kind==="car"?this.renderCarCard(i,o):i.kind==="media"?this.renderMediaCard(i,o):i.kind==="device"?this.renderDeviceCard(i,o):n?this.renderHoloCard(i,o,e):v)}renderCarCard(e,t){let n=this.hass,i=g=>R(n,g),o=e.car,s=!this.mediaFolded.has(o.spot),a=()=>{this.mediaFolded.has(o.spot)?this.mediaFolded.delete(o.spot):this.mediaFolded.add(o.spot),this.requestUpdate()},l=(g,b,p)=>{n.callService(g,b,{entity_id:p})},d=(g,b)=>g.startsWith("climate.")?l("climate",b?"turn_on":"turn_off",g):l("homeassistant",b?"turn_on":"turn_off",g),c=()=>{if(!o.lock)return;let g=o.lock.startsWith("lock.");if(o.locked){if(!confirm(i("car_unlock_confirm")))return;g?l("lock","unlock",o.lock):l("homeassistant","turn_off",o.lock)}else g?l("lock","lock",o.lock):l("homeassistant","turn_on",o.lock)},h=o.soc===null?"#37e0ff":o.soc>=50?"#4dff80":o.soc>=20?"#ffcc40":"#ff4d40",u=!!o.lock&&/^(lock|input_boolean|switch)\./.test(o.lock),f=!!o.climate&&/^(climate|switch|input_boolean)\./.test(o.climate);return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${o.charging?`\u26A1 ${i("car_charging_short")}`:o.locked===null?"":o.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${h}">${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b>
            <span>${o.range!==null?`${Y(n,o.range,0)} ${o.rangeUnit}`:""}${o.charging&&o.chargingW?` \xB7 ${Q(n,o.chargingW)}`:""}</span>
          </div>
          ${o.soc!==null?_`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,o.soc))}%;background:${h}"></i></div>`:v}
          ${s&&!this.ro&&(u||f||o.charge)?_`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${u?_`<button title=${o.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${c}>${o.locked?"\u{1F512}":"\u{1F513}"}</button>`:v}
                ${f?_`<button class=${o.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>d(o.climate,!o.climateOn)}>❄</button>`:v}
                ${o.charge?_`<button class=${o.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>d(o.charge,!o.charging)}>⚡</button>`:v}
              </div>`:v}
        </div>
      </div>`}renderMediaCard(e,t){let n=this.hass,i=u=>R(n,u),o=e.media,s=!this.mediaFolded.has(o.id),a=()=>{this.mediaFolded.has(o.id)?this.mediaFolded.delete(o.id):this.mediaFolded.add(o.id),this.requestUpdate()},l=(u,f={})=>{n.callService("media_player",u,{entity_id:o.id,...f})},d=this.mediaVolume.get(o.id);d&&(Math.abs(d.v-o.volume)<=2||Date.now()-d.at>3e4)&&this.mediaVolume.delete(o.id);let c=this.mediaVolume.get(o.id)?.v??o.volume,h=(u,f)=>{this.mediaVolume.set(o.id,{v:u,at:Date.now()}),this.requestUpdate(),(f||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:u/100}))};return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${o.playing?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${o.picture?_`<img class="fp3d-holo-cover" src=${o.picture} alt="" />`:_`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${o.title}</b>${o.artist?_`<span>${o.artist}</span>`:v}</div>
        </div>
        ${s&&!this.ro?_`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} @click=${()=>l("media_previous_track")}>⏮</button>
                <button aria-label=${i("play_pause")} @click=${()=>l("media_play_pause")}>${o.playing?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} @click=${()=>l("media_next_track")}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(c)}
                  aria-label=${i("volume")}
                  @input=${u=>h(Number(u.target.value),!1)}
                  @change=${u=>h(Number(u.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${c} %</span>
              </div>`:v}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,i=d=>R(n,d),o=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?wr(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${o?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${Q(n,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${o&&s?_`<div class="fp3d-holo-sub">${i("holo_today")} <b>${Y(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${Q(n,s.peak)}</b></div>`:v}
        ${o&&a?yt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:v}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Ni(t,new Date(this.now())):null}renderHoloCard(e,t,n){let i=this.hass,o=p=>R(i,p),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",d=l&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid??0)/n.consumption)*100))):null,c=a&&a.curve.length>1?wr(a.curve,a.peak):null,h=new Date(this.now()),u=(h.getHours()+h.getMinutes()/60)/24*220,f=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},g=l?n.solar??n.consumption??0:e.w??0,b=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${f}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${o("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${Q(i,g)}</b><span>${o(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?_`${l&&this._plants.length>1?_`<div class="fp3d-holo-plants">${this._plants.map(p=>_`<span>${p.name}</span><b>${Q(i,p.w)}</b>`)}</div>`:v}
              ${a?_`<div class="fp3d-holo-sub">${o("holo_today")} <b>${Y(i,a.kwh,1)} kWh</b> · ${o("holo_peak")} <b>${Q(i,a.peak)}</b></div>`:v}
              ${c?yt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${u}" y1="2" x2="${u}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:v}
              <div class="fp3d-holo-grid">
                ${b?_`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${o("holo_battery")}<br /><b>${b.soc!==null?`${Math.round(b.soc)} %`:Q(i,Math.abs(b.w??0))}</b>
                      ${b.w!==null&&Math.abs(b.w)>=5?_`<span>${b.w<0?"\u25B2":"\u25BC"} ${Q(i,Math.abs(b.w))}</span>`:v}
                    </div>`:v}
                ${l&&n.grid!==null?_`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${o("holo_grid")}<br /><b>${Q(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":o(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:v}
                ${l&&n.consumption!==null?_`<div class="fp3d-holo-cell fp3d-holo-house">${o("holo_house")}<br /><b>${Q(i,n.consumption)}</b></div>`:v}
                ${l&&this._wallboxW!==null?_`<div class="fp3d-holo-cell fp3d-holo-wb">${o("holo_wallbox")}<br /><b>${Q(i,this._wallboxW)}</b></div>`:v}
              </div>
              ${d!==null?_`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${o("holo_autarky")}</span><b>${d} %</b></div>`:v}`:v}
      </div>
    </div>`}setAlerts(e){let t=e.map(i=>`${i.kind}:${i.entity}`),n=this.ro?[]:e.filter((i,o)=>!this.seenAlerts.has(t[o]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(i=>`${i.kind}:${i.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!e.length||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,i=this.hass,o=n?.floors.find(c=>c.id===e),s=o?.rooms.find(c=>c.id===t);if(!n||!i||!o||!s||this.ro)return;let a=new Set(te(i,s.area_id).filter(c=>I(c)==="light"));for(let c of o.placements)I(c.entity_id)==="light"&&N([c.x,c.z],s.points)&&a.add(c.entity_id);for(let c of o.furniture){let h=this.furnitureLinks.get(c.id)?.entity;h&&Nn(c.type)&&N([c.x,c.z],s.points)&&a.add(h)}let l=[...a].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let d=l.some(c=>i.states[c]?.state==="on");i.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Zi(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([d,c])=>[d,ji(a,c)]))}let o=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let d=Me(n,a,l,"temperature"),c=Me(n,a,l,"humidity"),h=Me(n,a,l,"co2"),u=[d!==null?`${Y(n,Je(n,d),1)} ${_e(n)}`:null,c!==null?`${Y(n,c,0)} %`:null,h!==null?`${Y(n,h,0)} ppm`:null].filter(f=>!!f);u.length&&o.set(l.id,u.join(" \xB7 "))}if(e.setRoomInfo(o),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let d=_i(l.kind).map(c=>c*a);if(l.roomId)i.set(l.roomId,d);else for(let c of t.floors)for(let h of c.rooms)i.set(h.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){let o=[],s=[],a=new Map,l=new Map;for(let h of t.floors)for(let u of h.furniture){let f=this.furnitureLinks.get(u.id),g=this.stateFaces(e,u);if(g.length&&a.set(u.id,{color:g[0].color,level:g[0].level,faces:g}),Nn(u.type)){o.push(this.lampMarker(e,h,u,f?.entity??null));continue}let p=u.type==="parking"&&C("auto_pro")&&!!u.car?an(e,u):null,S=u.type==="home_battery"?u.soc:u.type==="wallbox"?u.status:u.type==="parking"&&p?u.car?.device??p.entities.soc:null,m=S&&S!=="none"?S:null,x=f??(m?{entity:null,power:null}:void 0);if(!x)continue;let $=u.type==="home_battery"?m??x.entity??x.power:x.entity??x.power??m;l.set(u.id,$);let T=x.entity?e.states[x.entity]:void 0,z=u.type==="meter"?t.energy.grid_invert&&!u.export:u.type==="home_battery"?t.energy.battery_invert&&!u.charge:!1,F=x.power?ee(e.states[x.power],z):null,w=u.type==="home_battery"&&u.charge&&u.charge!=="none"?u.charge:u.type==="meter"&&u.export&&u.export!=="none"?u.export:null,E=w?ee(e.states[w]):null;E!==null&&(F=Math.max(0,F??0)-Math.max(0,E)),x.power&&F!==null&&!i.has(x.power)&&(i.add(x.power),s.push({id:$,powerEntity:x.power,floorId:h.id,x:u.x,z:u.z,power:Math.max(0,F),wallbox:u.type==="wallbox"||void 0}));let k=(F??0)>10||T?.state==="on"||T?.state==="running"||Xn(T)&&xe(T);if(p&&Nt(e,u)){let D=[];if(p.soc!==null){let B=p.soc>=50?[.3,1,.5]:p.soc>=20?[1,.8,.25]:[1,.3,.25];D.push({part:"band",color:B,level:p.charging?1:.6})}if(p.locked===!1&&D.push({part:"lights",color:[1,.42,.02],level:1}),p.climateOn){let B=p.entities.climate?e.states[p.entities.climate]:void 0,J=!!B&&(B.attributes.hvac_action==="cooling"||B.state==="cool");D.push({part:"cabin",color:J?[.45,.8,1]:[1,.55,.22],level:.35})}D.length&&a.set(`${u.id}:vehicle`,{color:D[0].color,level:D[0].level,faces:D})}if(u.type==="radiator"&&T&&I(T.entity_id)==="climate"){let D=T.attributes;if(D.hvac_action==="heating"){let B=typeof D.temperature=="number"&&typeof D.current_temperature=="number"?D.temperature-D.current_temperature:1;a.set(u.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,B))})}}else(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&k&&a.set(u.id,{color:[.3,.85,1],level:.8});let M=ae(u.type),H=!!M&&!M.light&&M.parts.some(D=>D.glow);if(T&&H&&C("sound")&&I(T.entity_id)==="media"&&T.state==="playing"&&!on(u.type)){let D=typeof T.attributes.volume_level=="number"?T.attributes.volume_level:.5;a.set(u.id,{color:er(T)??[.22,.88,1],level:.5+.5*D,ring:!0,plain:!0})}if(T&&on(u.type)){let D=C("screens"),B=I(T.entity_id)==="light"?et(T):null,J=I(T.entity_id)==="media"&&["playing","on","paused","idle"].includes(T.state),j=D&&I(T.entity_id)==="media"?er(T):B?B.color:xe(T)||J?[.22,.88,1]:null,ce=D&&I(T.entity_id)==="media"?T.attributes.entity_picture??null:null;j&&a.set(u.id,{color:j,level:T.state==="playing"?1:.6,picture:ce,ring:H&&C("sound")&&T.state==="playing"})}if(n.has($))continue;n.add($);let q=x.entity?I(x.entity):null,O=h.rooms.find(D=>D.points.length>=3&&N([u.x,u.z],D.points));o.push({id:$,floorId:h.id,roomId:O?.id??null,x:u.x,z:u.z,y:Ml(u)+ke(h,u),icon:u.icon?dn(u.icon):Rt(q??"switch"),name:u.name||(x.entity?G(e,x.entity):ve(e,u.type)),ownName:u.name||void 0,showName:!!u.show_name,text:p?this.carText(e,p,!!T&&!yr.has(T.state.toLowerCase())):u.type==="home_battery"?this.batteryText(e,m,F):u.type==="wallbox"?this.wallboxText(e,m,F):u.type==="meter"?this.meterText(e,F):T?le(e,T):F!==null?Q(e,Math.max(0,F)):"",active:p?p.charging:T?xe(T):(F??0)>5,unavailable:T?V(T):!1,glow:null,furnitureId:u.id,energyDevice:u.type==="inverter"||u.type==="home_battery"||u.type==="wallbox"||u.type==="meter"||!!p,show:u.marker??(p?"always":void 0),fromFurniture:!0})}this.cameraScreens=0;let d=Qn(e,t.floors),c=C("screens");for(let h of t.floors)for(let u of h.furniture){if(!c||!u.pictures?.length||!on(u.type)||u.type==="fridge_smart"&&d.get(u.id)?.right)continue;let f=u.pictures.find(p=>Xo(e,p));if(!f)continue;let g=this.pictureUrl(f.image),b=u.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];g&&a.set(u.id,{color:b,level:1,picture:g,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:o,consumers:s,screens:a,targets:l}}robotPaths(e,t){let n=this.replay;if(!n)return[];let i=[];for(let o of t.floors){let s=o.rooms.filter(a=>a.points.length>=3);for(let a of o.furniture){if(a.type!=="robot_vacuum")continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let d=n.robotRooms(l,zt(e,l,a.room_sensor)),c=[];for(let h of d){let u=tr(e,s,h),f=u?ge(u.points):null,g=c[c.length-1];f&&(!g||g[0]!==f[0]||g[1]!==f[1])&&c.push([f[0],f[1]])}c.length&&i.push({floorId:o.id,points:c})}}return i}trailNow(e,t){let n=this.now(),i=Kt(e,t),o=this.replay?this.replay.rows(i.map(a=>a.entity),n-Vt,n):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return ts(i,es(o,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!C("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!C("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let i=Kt(t,n).map(o=>o.entity);if(i.length){try{let o=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Vt).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=o??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||V(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),bo(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||ke(e,i)>.12)return!1;let o=ae(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:N([i.x,i.z],t)||tn(i).some(s=>N(s,t))}).map(i=>tn(i))}robotInfos(e,t){let n=[];for(let i of t.floors)for(let o of i.furniture){if(o.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",d=o.rotation*Math.PI/180,c=o.d*.14,h=[o.x-Math.sin(d)*c,o.z+Math.cos(d)*c],u=i.rooms.filter(p=>p.points.length>=3),g=(l==="cleaning"?ei(e,u,s,zt(e,s,o.room_sensor)):null)??u.find(p=>N(h,p.points)),b=l==="cleaning"&&g?this.robotObstacles(i,g.points):[];n.push({id:o.id,floorId:i.id,rest:h,restHeading:-d,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:b})}return n}batteryText(e,t,n){let i=t?Number(e.states[t]?.state):Number.NaN,o=[];return Number.isFinite(i)&&o.push(`${Y(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&o.push(`${n<0?"\u25B2":"\u25BC"} ${Q(e,Math.abs(n))}`),o.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?Q(e,0):`${R(e,t<0?"energy_grid_export":"energy_grid_import")} ${Q(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,o=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(o),a=i?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=s?R(e,"wallbox_charging"):a?R(e,"wallbox_plugged"):i&&!V(i)&&!i.entity_id.startsWith("binary_sensor.")?le(e,i):"",d=n!==null&&n>50?Q(e,n):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[o,s]of i){if(!o||o==="none")continue;let a=e.states[o];if(!a||V(a)||!(xe(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let d=I(o)==="light"?et(a):null;n.push({part:s,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return n}carText(e,t,n){let i=s=>R(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let o=[];return t.soc!==null&&o.push(`${Y(e,t.soc,0)} %`),t.range!==null&&o.push(`${Y(e,t.range,0)} ${t.rangeUnit}`),t.charging?o.push(t.chargingW!==null?`\u26A1 ${Q(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&o.push("\u{1F50C}"),t.locked!==null&&o.push(t.locked?"\u{1F512}":"\u{1F513}"),o.join(" \xB7 ")}ceilingAt(e,t,n){let o=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&N([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!(s.settings.roof.sections??[]).some(l=>yi(l,e.elevation+o)))return o;let a=ki(s,t,n);return a===null?o:Math.max(.5,Math.min(o,a-e.elevation))}lampMarker(e,t,n,i){let o=i?e.states[i]:void 0,s=ae(n.type),a=Ho[n.type]??s?.light??"floor",l=t.rooms.some(m=>m.points.length>=3&&N([n.x,n.z],m.points)),d=a==="strip"&&!l?xt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?ke(t,n):a==="table"?en(t,n.x,n.z):a==="bollard"||a==="garden"?xt(t,n.x,n.z):0,c=t.rooms.find(m=>m.points.length>=3&&N([n.x,n.z],m.points)),h=this.ceilingAt(t,n.x,n.z),u=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant"].includes(a))&&n.mount_y==null,f=u?t.height-h:0,g=s&&u?Math.max(0,d-f):d,b=Qt.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+Jt(n.type,n.h)):Math.abs(f)>.01?h:void 0,p=b??t.height,S=s?s.mount==="ceiling"?Math.max(.5,g-.15):g+n.h+.2:{ceiling:p-.3,downlight:p-.25,spot:p-.35,panel:p-.25,pendant:Math.max(.6,p-n.h-.25),floor:g+n.h+.25,uplight:g+n.h+.25,table:g+n.h+.2,wall:g+n.h+.2,strip:n.upright?g+n.w+.15:Math.max(.3,g-.2),bollard:g+n.h+.25,garden:g+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:S,icon:Rt("light"),name:n.name||(i?G(e,i):ve(e,n.type)),text:o?le(e,o):"",active:o?xe(o):!1,unavailable:o?V(o):!1,glow:o?ir(et(o,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,size:[n.w,n.d,n.h],base:g,top:b,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?g:g+n.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(o.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=I(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let i=n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return v;let e=new Map(this.building.floors.map(o=>[o.id,o.name])),t=[...this._thumbs].sort((o,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===o.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return _`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${R(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${R(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${R(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${R(this.hass,"all_floors")}</span>
      </button>
      ${t.map(o=>_`<button class="fp3d-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${n?v:_`<img src=${o.url} alt="" />`}
          <span>${e.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(this.ro){this.onDeviceTap(e,t,n);return}if(C("auto_pro")&&this.hass&&this.building)for(let o of this.building.floors)for(let s of o.furniture){if(s.type!=="parking"||!s.car)continue;let a=an(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:a};return}}let i=I(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:be(this,e)}onDeviceSwipe(e,t,n,i,o){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||V(s)||this.confirmSet.has(e))return!1;let l=I(e);if(l==="light"&&$r(s).dim){let d=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:d,value:d,x:i,y:o},!0}if(l==="cover"&&Mr(s)){let d=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:d,value:d,x:i,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let d=performance.now();d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return v;let t=this._alerts.slice(0,3);return _`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>_`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${hr(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${hr(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?_`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:v}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return v;let t=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this.roomId),n=t?te(this.hass,t.area_id).filter(o=>I(o)==="scene"||I(o)==="script").slice(0,6):[];if(!n.length)return v;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return _`<div class="fp3d-scenes">
      ${n.map(o=>_`<button class="fp3d-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${G(this.hass,o,i)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return v;if(this._find===null)return _`<button class="fp3d-find-btn" title=${R(this.hass,"find")} aria-label=${R(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=rs(this.findIndex??=xr(this.hass,e),this._find);return _`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${R(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${R(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?_`<div class="fp3d-find-list">
            ${t.length?t.map(n=>_`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?cn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?_`<small>${n.where}</small>`:v}</span>
                  </button>`):_`<p>${R(this.hass,"find_none")}</p>`}
          </div>`:v}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return v;let n=(b,p)=>R(t,b,p),i=_`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?e.floors.find(b=>b.id===this.floorId):void 0,s=o?[o]:e.floors,a=s.flatMap(b=>nr(t,b).lights),l=s.flatMap(b=>nr(t,b).covers),d=a.filter(b=>t.states[b]?.state==="on").length,c=!o,h=(b,p,S,m)=>{if(m.length){if(c&&this._armed!==b){this._armed=b,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(p,S,{entity_id:m})}},u=(b,p,S,m,x)=>_`<button class="fp3d-btn ${this._armed===b?"fp3d-central-armed":""}" ?disabled=${!x.length} @click=${()=>h(b,S,m,x)}>
        ${this._armed===b?n("central_sure"):n(p)}
      </button>`,f=(e.settings.favorites??[]).filter(b=>t.states[b]),g=this.buttons??e.settings.buttons??[];return _`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${o?o.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?_` <small>${d}/${a.length}</small>`:v}</span>
          ${u("lights_on","central_on","light","turn_on",a.filter(b=>t.states[b]?.state==="off"))}
          ${u("lights_off","central_off","light","turn_off",a.filter(b=>t.states[b]?.state==="on"))}
        </div>
        ${l.length?_`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${u("covers_open","central_open","cover","open_cover",l)}
              ${u("covers_close","central_close","cover","close_cover",l)}
            </div>`:v}
        <b>${n("central_favorites")}</b>
        ${f.length?_`<div class="fp3d-central-favs">
              ${f.map(b=>{let[p,S]=ti(b),m=t.states[b],x=p==="homeassistant"&&m?.state==="on";return _`<button
                  class="fp3d-chip"
                  aria-pressed=${x||this._sceneFired===b}
                  ?disabled=${V(m)}
                  @click=${()=>{t.callService(p,S,{entity_id:b}),this._sceneFired=b,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${G(t,b)}
                </button>`})}
            </div>`:g.length?v:_`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${g.length?_`<div class="fp3d-central-favs">
              ${g.map(b=>_`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${$l(t,b)}
                  @click=${p=>{ni(t,p.currentTarget,b),b.action!=="service"&&(this._central=!1)}}
                >
                  ${b.icon?_`<ha-icon .icon=${b.icon.startsWith("mdi:")?b.icon:`mdi:${b.icon}`}></ha-icon>`:v}${b.label}
                </button>`)}
            </div>`:v}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||I(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&V(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(o=>typeof o=="string"&&!!o.trim());return!V(n)&&(n.state==="playing"||n.state==="paused"&&i)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return v;let e=R(this.hass,this.clean?"controls_show":"controls_hide");return _`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?yt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:yt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return v;let t=e.kind==="light"&&e.value<=0;return _`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${G(this.hass,e.entity)}</span>
      <b>${t?R(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!C("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let o=this.floorId===i?0:300;o&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},o)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?v:_`<div class="fp3d-pro" role="dialog">
      <b>${R(this.hass,"pro_title")}</b>
      <span>${R(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${R(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${si(this.hass.language)} target="_blank" rel="noopener">${R(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${ai(this.hass.language,this._proHint)} target="_blank" rel="noopener">${R(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${R(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${R(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return v;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!C("camera_cockpit"))return _`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${R(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${R(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(h=>h.entity_id)).filter(c=>I(c)==="camera"))];this.watchCameras(!0);let i=c=>{let h=e.states[c],u=h?.attributes.entity_picture;return u&&h&&!V(h)?u.startsWith("data:")?u:`${u}${u.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},o=c=>{let h=e.states[c];return _`${G(e,c)}${h?.state==="recording"?_` <b>● ${R(e,"state_recording")}</b>`:v}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let c=i(s),h=this.liveFor(s),u=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return _`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${R(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${o(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${u}>${R(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${h??(c?_`<img src=${c} alt="" />`:_`<div class="fp3d-wall-none">${R(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=us(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return _`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${R(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${R(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${n.map(c=>{let h=i(c),u=Ae(e,c).some(f=>e.states[f]?.state==="on");return _`<button class="fp3d-wall-cam ${u?"fp3d-wall-seen":""}" title=${R(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${h?_`<img src=${h} alt="" />`:_`<div class="fp3d-wall-none">${R(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${o(c)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(i=>{if(this.live!==t)return;let o=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});o.hass=this.hass,t.el=o,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return v;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,i=n&&!V(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return _`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?_`<img class="fp3d-through-img" src=${i} alt="" />`:v}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${G(this.hass,e.entity)}</span>
        <span class="fp3d-still">${R(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${R(this.hass,"through_blend")}
          @input=${o=>this._blend=Number(o.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${R(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return v;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,i=t?.clientHeight??600,o=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return _`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${o}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${C("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${C("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(this.ro){let o=this.building,s=o?o.energy.grid??dt(o,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,t,n);return}if(e==="grid"){let o=this.building,s=o?o.energy.grid??dt(o,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&be(this,s);return}if(e.startsWith("detect:")){be(this,e.slice(7));return}let i=I(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:t,y:n};return}if(i&&Go.has(i)){if(this.confirmSet.has(e)&&!confirm(R(this.hass,"confirm_switch",{name:G(this.hass,e)})))return;ui(this.hass,e)}else be(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!C("energy_pro")||!e||this.roomId||!this.showEnergy)return v;let t=i=>R(this.hass,i),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:Q(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;n.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:Q(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:Q(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?Q(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${Y(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),_`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?v:n.map(i=>_`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?v:_`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?v:_`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return v;let e=vn[this.heatMode],t=this.heatMode==="temperature",n=t?Je(this.hass,e.stops[0][0]):e.stops[0][0],i=t?Je(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],o=t?_e(this.hass):e.unit,s=a=>R(this.hass,a);return _`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Xi(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${Y(this.hass,n,0)} ${o}</span><span>${Y(this.hass,i,0)} ${o}</span></span>
      ${this.heatValues.size?v:_`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Bt[this.theme]??Bt.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(o,s)=>`rgb(${o.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Bt[this.theme]??Bt.neon,i=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return _`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${i}
    >
      ${this._error?_`<p class="fp3d-error">${this._error}</p>`:v} ${this.clean?v:this.renderEnergy()} ${this.renderHologram()} ${this.clean?v:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean?v:_`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean?v:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?_`<span class="fp3d-stats"
            ><b>${this._stats.fps?R(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):R(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?_`(${this._stats.busy.map(o=>R(this.hass,`stats_busy_${o}`)).join(", ")})`:v} ·
            ${R(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${R(this.hass,this._stats.low?"stats_low":"stats_full",{r:Y(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${Y(this.hass,this.syncMs,1)} ms`:""}</span
          >`:v}
    </div>`}static styles=[we,Re,de`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      /* time travel: the clock sits at the top centre, the warnings below it */
      .fp3d-replay .fp3d-alert-banner {
        top: 74px;
      }
      /* the time bar takes the bottom: the heat legend moves up under the energy values */
      .fp3d-replay .fp3d-legend,
      .fp3d-replay.fp3d-has-alerts .fp3d-legend {
        bottom: auto;
        top: 62px;
      }
      .fp3d-replay .fp3d-energy {
        max-width: calc(50% - 96px);
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        pointer-events: auto;
      }
      .fp3d-replay .fp3d-energy > * {
        flex: none;
      }
      /* the warnings sit below the clock, so the energy values stay at the top */
      .fp3d-replay.fp3d-has-alerts .fp3d-energy {
        top: 10px;
      }
      @container fp3d (max-width: 700px) {
        .fp3d-replay .fp3d-energy,
        .fp3d-replay.fp3d-has-alerts .fp3d-energy {
          top: 68px;
          max-width: calc(100% - 24px);
        }
        .fp3d-replay .fp3d-alert-banner,
        .fp3d-replay .fp3d-legend {
          top: 116px;
        }
        .fp3d-replay.fp3d-has-alerts .fp3d-legend {
          top: 164px;
        }
      }
      .fp3d-info {
        grid-template-columns: auto;
        z-index: 5;
      }
      .fp3d-swipe.fp3d-info b {
        font-size: 15px;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* left: 50% leaves only half the width to shrink into: a width of its own keeps the buttons inside */
        width: min(320px, calc(100% - 60px));
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* the view's own controls on the right (#285); the room panel opens there, so they make way for it */
      .fp3d-side-right :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        left: auto;
        right: 12px;
      }
      .fp3d-side-right .fp3d-eye {
        left: auto;
        right: 56px;
      }
      .fp3d-side-right.fp3d-panel-open :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        display: none;
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",zr);function Q(r,e){return Math.abs(e)>=1e3?`${Y(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function Ml(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}var El=.25,ms=r=>Math.round(r*1e3)/1e3;function Ar(r,e,t,n,i){let o=r.rooms.find(s=>s.points.length>=3&&N([e,t],s.points));return!o||N([n,i],o.points)?[n,i]:N([n,t],o.points)?[n,t]:N([e,i],o.points)?[e,i]:[e,t]}function gs(r,e,t,n=El){let i=r.rooms.find(d=>d.points.length>=3&&N([e.x,e.z],d.points));if(!i)return null;let o=i.points,s=$e(o)>=0?1:-1,a=t/2,l=null;for(let d=0;d<o.length;d++){let c=o[d],h=o[(d+1)%o.length],u=Math.hypot(h[0]-c[0],h[1]-c[1]);if(u<.3)continue;let f=[(h[0]-c[0])/u,(h[1]-c[1])/u],g=[-f[1]*s,f[0]*s],b=(e.x-c[0])*f[0]+(e.z-c[1])*f[1];if(b<0||b>u)continue;let S=r.rooms.some(w=>w.id!==i.id&&w.points.some((E,k)=>{let M=w.points[(k+1)%w.points.length],H=Math.abs((E[0]-c[0])*g[0]+(E[1]-c[1])*g[1]),q=Math.abs((M[0]-c[0])*g[0]+(M[1]-c[1])*g[1]);return H<.02&&q<.02}))?a:0,m=(e.x-c[0])*g[0]+(e.z-c[1])*g[1]-S,x=Math.atan2(-g[0],g[1])*180/Math.PI,$=w=>Math.abs((e.rotation-w+540)%360-180),z=[{rotation:x,extent:e.d/2},{rotation:x+90,extent:e.w/2},{rotation:x-90,extent:e.w/2}].reduce((w,E)=>$(E.rotation)<$(w.rotation)?E:w);if($(z.rotation)>50)continue;let F=m-z.extent;Math.abs(F)>n||l&&Math.abs(F)>=Math.abs(l.gap)||(l={x:ms(e.x-g[0]*F),z:ms(e.z-g[1]*F),rotation:(Math.round(z.rotation)%360+360)%360,gap:F})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var Rr;function zl(){let r=new URL("./neonplan3d-timetravel.js?v=a1c5bd70b78b",new URL(import.meta.url)).href;return Rr??=import(r).catch(e=>{throw Rr=void 0,e}),Rr}var ht=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),zl().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var U={get(r){try{return localStorage.getItem(`neonplan3d.${r}`)}catch{return null}},set(r,e){try{localStorage.setItem(`neonplan3d.${r}`,e)}catch{}}},Tr=class extends se{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new Qe(this);tt=new ht(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=U.get("walls")==="cut"?"cut":"auto",this._explode=U.get("explode")!=="0",this._keepRoof=U.get("roof")==="1";let e=U.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=U.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=U.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=U.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none";let i=U.get("theme");this._theme=i&&vr.includes(i)?i:"neon";let o=U.get("accent");this._accent=o&&/^#[0-9a-f]{6}$/i.test(o)?o:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let s=U.get("floor_stack");this._floorStack=s==="stacked"||s==="single"?s:"dim",this._roomNames=U.get("room_names")!=="0",this._controlsRight=U.get("controls")==="right",this._keepView=U.get("keep_view")==="1",this._trail=U.get("trail")==="1",this._cameraWall=!1,this._clean=U.get("clean")==="1",this._navWrap=U.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=U.get("weather")!=="0"}t(e,t){return R(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!rt(this.hass.language)&&ln(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,U.set("walls",e)}setKeepRoof(e){this._keepRoof=e,U.set("roof",e?"1":"0")}setExplode(e){this._explode=e,U.set("explode",e?"1":"0")}setQuality(e){this._quality=e,U.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let o of i.floors){let s=o.furniture.find(a=>a.id===e);s&&t(s,o)}this.data.edit(i)}editDevice(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let o of i.floors){let s=o.placements.find(a=>a.entity_id===e);s&&t(s,o)}this.data.edit(i)}moveDevice(e){let{id:t,x:n,z:i}=e.detail;this.editDevice(t,(o,s)=>{let[a,l]=Ar(s,o.x,o.z,n,i);Object.assign(o,{x:a,z:l})})}turnStep(){return I(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.placements=i.placements.filter(o=>o.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(h=>h.placements.some(u=>u.entity_id===e)),i=n?.placements.find(h=>h.entity_id===e);if(!n||!i)return v;let o=I(e),s=o==="light",a=o==="camera",l=i.mount==="ceiling",d=o?tt(o,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,c=(h,u,f,g,b,p)=>_`<label class="fp3d-size" title=${h}
        >${h}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${g}
          max=${b}
          .value=${String(Math.round(u*100)/100)}
          @change=${S=>{let m=parseFloat(S.target.value.replace(",","."));Number.isFinite(m)&&p(Math.min(b,Math.max(g,m)))}}
        />
      </label>`;return _`${s?_`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${h=>this.editDevice(e,u=>Object.assign(u,{mount:h.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(h=>_`<option value=${h} ?selected=${h===(i.mount??"ceiling")}>${this.t(`lamp_${h}`)}</option>`)}
          </select>`:v}
      ${a?_`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${h=>this.editDevice(e,u=>Object.assign(u,{mount:h.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,h=>this.editDevice(e,u=>u.fov=h))}
            ${c(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,h=>this.editDevice(e,u=>u.reach=h))}
            ${c(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,h=>this.editDevice(e,u=>u.tilt=h))}`:v}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??d)*100)/100)}
          @change=${h=>{let u=parseFloat(h.target.value.replace(",","."));Number.isFinite(u)&&u>=0&&this.editDevice(e,f=>f.y=Math.round(u*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?_`<button class="fp3d-chip" @click=${()=>this.editDevice(e,h=>h.y=null)}>${this.t("height_auto")}</button>`:v}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?ve(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:i}=e.detail,o=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,d]=Ar(a,s.x,s.z,n,i);Object.assign(s,{x:l,z:d});let c=gs(a,s,o);c&&Object.assign(s,c)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return v;let n=qr(this.hass,this.data.building?.settings.units)==="imperial",i=l=>n?jr(l):String(Math.round(l*100)/100),o=l=>n?Zr(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,d)=>_`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${d}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[l])}
        @change=${c=>{let h=o(c.target.value)??NaN;Number.isFinite(h)&&h>0&&this.editFurniture(e,u=>u[l]=Math.round(h*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(d=>d.id===e));return _`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&Io(t)?_`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??ke(a,t))}
              @change=${l=>{let d=o(l.target.value)??NaN;Number.isFinite(d)&&d>=0&&this.editFurniture(e,c=>c.mount_y=Math.round(d*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?_`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:v}`:v}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.furniture=i.furniture.filter(o=>o.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!C("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,o)=>R(this.hass,i,o)})}}updated(){if(this.ttLinked||!this.data.building||!Xe()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&C("time_travel")&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,ko(this.hass).then(e=>this._newOffers=e.active?vo(e.offers??[]).length+yo(e.updates??[]).length:0).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop()}render(){if(this.hass&&!rt(this.hass.language))return v;this.checkOffers();let e=this.data.building,t=this.data.saveState;return _`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?v:_`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?_`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?_`<span class="fp3d-dot" aria-label=${this.t("offers_dot")}></span>`:v}
                </button>
              </div>`:v}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?_`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>_`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${vr.map(n=>_`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,U.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,U.set("accent",this._accent)}}
                  />
                  ${this._accent?_`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,U.set("accent","")}}
                      >
                        ↺
                      </button>`:v}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>_`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,U.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>_`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,U.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,U.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,U.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:v}
          ${this._mode==="editor"&&t!=="idle"?_`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:v}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?v:this.renderNotices()}
        ${this.data.error&&!e?_`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:v}
        ${!e&&!this.data.error?_`<p class="fp3d-message">${this.t("loading")}</p>`:v}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):v}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(_`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(_`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(_`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(_`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?_`<div class="fp3d-notices">${t}</div>`:v}renderExtensions(){return this._editorReady?_`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></fp3d-extensions>`:(Gn().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),_`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?_`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Gn().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),_`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(o=>o.rooms.length))return _`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:v}
      </div>`;let t=e.floors.find(o=>o.id===this._floorId),n=t?[t]:e.floors,i=this.tt.active;return _`
      ${this._clean?v:_`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?_`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(o=>_`<button
                  class="fp3d-chip"
                  aria-pressed=${o.id===this._floorId}
                  @click=${()=>{this._floorId=o.id,this._roomId=null}}
                >
                  ${o.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:v}
        ${n.flatMap(o=>[n.length>1&&o.rooms.some(s=>s.name.trim())?_`<span class="fp3d-nav-floor">${o.name}</span>`:v,...o.rooms.filter(s=>s.name.trim()).map(s=>_`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${s.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=o.id),this._roomId=s.id===this._roomId?null:s.id}}
            >
              ${s.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,U.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,U.set("clean",this._clean?"1":"0")}}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${o=>{this._floorId=o.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?_`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${o=>this.view3d()?.lookThrough(o.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              .floor=${e.floors.find(o=>o.rooms.some(s=>s.id===this._roomId))??null}
              .confirmEntities=${nt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:v}
        ${this.tt.session?_`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:v}
        ${this._clean?v:_`<div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?_`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:v}
          ${!this._floorId&&e.settings.roof.type!=="none"?_`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:v}
          ${e.floors.length>1&&this._floorId?_`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(o=>_`<button
                      aria-pressed=${this._floorStack===o}
                      @click=${()=>{this._floorStack=o,U.set("floor_stack",o)}}
                    >
                      ${this.t(`floor_stack_short_${o}`)}
                    </button>`)}
              </div>`:v}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(o=>_`<button
                  aria-pressed=${this._heat===o}
                  @click=${()=>{this._heat=o,U.set("heat",o)}}
                >
                  ${this.t(o==="none"?"heat_off":`heat_short_${o}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,U.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,U.set("trail",this._trail?"1":"0")}}
          >
            ${C("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${C("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,U.set("weather",this._weather?"1":"0")}}
          >
            ${C("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${C("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?_`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:v}
        </div>`}
        ${this._furnish?_`<div class="fp3d-furnish-bar">
              ${this._selFurniture?_`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,o=>o.mirror=!o.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?_`<span>${G(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:_`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:v}
      </div>
    `}static styles=[we,Re,de`
      .fp3d-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-view-opts {
        display: contents;
      }
      .fp3d-opts-btn {
        display: none;
      }
      /* phones: the view options fold behind ⚙ (one header row instead of three) */
      @media (max-width: 700px) {
        .fp3d-opts-btn {
          display: grid;
          place-items: center;
          order: 3;
          width: 36px;
          height: 36px;
          border: 1px solid var(--fp3d-line);
          border-radius: 10px;
          background: transparent;
          color: var(--fp3d-text);
          font-size: 17px;
          cursor: pointer;
        }
        .fp3d-opts-btn[aria-expanded="true"] {
          color: var(--fp3d-accent);
          border-color: var(--fp3d-accent);
        }
        .fp3d-view-opts {
          display: none;
        }
        .fp3d-view-opts.fp3d-opts-open {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          order: 5;
          width: 100%;
        }
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Tr);function Sn(r,e,t=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(r.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),o=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return i<=o?s>=i&&s<o:s>=i||s<o}var _s;function bs(){let r=new URL("./neonplan3d-card-editor.js?v=fa938650c490",new URL(import.meta.url)).href;return _s??=import(r),_s}function ws(){try{let r=localStorage.getItem("neonplan3d.card_walls");return r==="auto"||r==="cut"?r:null}catch{return null}}var Fr=class extends se{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new Qe(this);tt=new ht(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=ws(),this._heat=null,this._explode=null,this._fullscreen=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!C("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(i,o)=>R(this.hass,i,o)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Sn(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await bs(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=ws(),this._heat=null,this._explode=null,this._orbit=!1,this._night=Sn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),rt(this.hass.language)||ln(this.hass.language).then(()=>this.requestUpdate());let t=Sn(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!rt(this.hass.language))return v;let e=this.data.building,t=this._config?.height??420,n=this._config;!this.roomApplied&&e&&n?.room&&(this.roomApplied=!0,e.floors.some(m=>m.rooms.some(x=>x.id===n.room))&&(this._roomId=n.room));let i=this._floorId===void 0?n?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(m=>m.id===i)?i:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1,a=m=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(m),l=["temperature","humidity","co2"].filter(m=>a(m)),d=this._walls??n?.walls??"auto",c=this._heat??n?.heatmap??"none",h=this._explode??n?.explode??!0,u=this._fullscreen?`${this._vh}px`:n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-8)}px`:"calc(100vh - var(--header-height, 56px) - 16px)":`${t}px`,f=!!e&&!this._clean&&(s||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),g=this.tt.active,b=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,p=m=>R(this.hass,m),S=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return _`<ha-card class=${this._night?"fp3d-night":""} style=${S?`--fp3d-accent:${S}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${g?"fp3d-tt":""}" style="height:${u}">
        ${e&&e.floors.some(m=>m.rooms.length)?_`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${o}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${h}
              .keepRoof=${n?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .buttons=${this._config?.buttons?.map((m,x)=>({id:`card_${x}`,...m}))??null}
              .heatMode=${c}
              .theme=${this._config?.theme??"neon"}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .controlsRight=${n?.controls_side==="right"}
              .keepView=${n?.keep_view===!0}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .alertJump=${!!n?.alert_jump}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              .cameraWall=${this._cameraWall&&!g}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${b}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              ?weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${g?`--fp3d-bottom-inset: ${f?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:f?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${m=>{if(this.canSwitch&&(e?.floors.length??0)>1&&m.detail.floorId&&o!==m.detail.floorId){this._floorId=m.detail.floorId,this._roomId=null;return}m.detail.roomId&&(this._roomId=m.detail.roomId===this._roomId?null:m.detail.roomId)}}
              @floor-tap=${m=>{this._floorId=m.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:_`<p class="fp3d-card-msg">${this.data.error??(e?R(this.hass,"no_building"):R(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?_`<fp3d-room-panel
              @camera-look=${m=>this.view3d()?.lookThrough(m.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${g}
              .room=${e.floors.flatMap(m=>m.rooms).find(m=>m.id===this._roomId)??null}
              .floor=${e.floors.find(m=>m.rooms.some(x=>x.id===this._roomId))??null}
              .confirmEntities=${nt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:v}
        ${f&&e?_`<div class="fp3d-card-controls">
              ${s?_`<button class="fp3d-chip" @click=${()=>this.back()}>${p("back")}</button>`:v}
              ${n?.time_travel?_`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${g} title=${p("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${C("time_travel")?"\u23EA":"\u{1F512}"} ${p("tt_chip")}
                  </button>`:v}
              ${n?.camera_wall?_`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${p("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${p("cameras_short")}</button>`:v}
              ${a("walls")?_`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${p("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${p("walls_cut")}</button>
                  </div>`:v}
              ${a("floors")&&e.floors.length>1&&!o?_`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${p("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${p("floors_stacked")}</button>
                  </div>`:v}
              ${l.length?_`<div class="fp3d-seg" role="group" aria-label=${p("heatmap")}>
                    ${["none",...l].map(m=>_`<button aria-pressed=${c===m} @click=${()=>this._heat=m}>
                          ${p(m==="none"?"heat_off":`heat_short_${m}`)}
                        </button>`)}
                  </div>`:v}
            </div>`:v}
        ${this.tt.session?_`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:v}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?_`<button class="fp3d-card-full" title=${p(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${p(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:v}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?_`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?_`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:v}
      </div>
    </ha-card>`}static styles=[we,Re,de`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Fr);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"neonplan3d-card",name:R(void 0,"card_name"),description:R(void 0,"card_description"),preview:!1})}Gr();
