Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var Fr=new URL(import.meta.url),Ar=Fr.searchParams.get("v"),Rr=r=>new URL(`./fonts/${r}${Ar?`?v=${Ar}`:""}`,Fr).href,Tr="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Dr(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Rr("figtree.woff2")}) format("woff2");unicode-range:${Tr}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Rr("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Tr}}`,document.head.append(r)}var Kt=globalThis,Gt=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kn=Symbol(),Pr=new WeakMap,ft=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Gt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Pr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Pr.set(t,e))}return e}toString(){return this.cssText}},Ir=r=>new ft(typeof r=="string"?r:r+"",void 0,kn),he=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new ft(t,r,kn)},Hr=(r,e)=>{if(Gt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Kt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},xn=Gt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ir(t)})(r):r;var{is:as,defineProperty:ls,getOwnPropertyDescriptor:cs,getOwnPropertyNames:ds,getOwnPropertySymbols:us,getPrototypeOf:hs}=Object,Ut=globalThis,Cr=Ut.trustedTypes,ps=Cr?Cr.emptyScript:"",fs=Ut.reactiveElementPolyfillSupport,mt=(r,e)=>r,Sn={toAttribute(r,e){switch(e){case Boolean:r=r?ps:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Lr=(r,e)=>!as(r,e),Wr={attribute:!0,type:String,converter:Sn,reflect:!1,useDefault:!1,hasChanged:Lr};Symbol.metadata??=Symbol("metadata"),Ut.litPropertyMetadata??=new WeakMap;var xe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&ls(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:i}=cs(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wr}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;let e=hs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){let t=this.properties,n=[...ds(t),...us(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(xn(o))}else e!==void 0&&t.push(xn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Sn).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Sn;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Lr)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};xe.elementStyles=[],xe.shadowRootOptions={mode:"open"},xe[mt("elementProperties")]=new Map,xe[mt("finalized")]=new Map,fs?.({ReactiveElement:xe}),(Ut.reactiveElementVersions??=[]).push("2.1.2");var Tn=globalThis,Or=r=>r,qt=Tn.trustedTypes,Br=qt?qt.createPolicy("lit-html",{createHTML:r=>r}):void 0,qr="$lit$",ze=`lit$${Math.random().toFixed(9).slice(2)}$`,jr="?"+ze,ms=`<${jr}>`,Oe=document,_t=()=>Oe.createComment(""),bt=r=>r===null||typeof r!="object"&&typeof r!="function",Fn=Array.isArray,gs=r=>Fn(r)||typeof r?.[Symbol.iterator]=="function",$n=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vr=/-->/g,Nr=/>/g,We=RegExp(`>|${$n}(?:([^\\s"'>=/]+)(${$n}*=${$n}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kr=/'/g,Gr=/"/g,Zr=/^(?:script|style|textarea|title)$/i,Dn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Dn(1),yt=Dn(2),ll=Dn(3),Be=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ur=new WeakMap,Le=Oe.createTreeWalker(Oe,129);function Xr(r,e){if(!Fn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Br!==void 0?Br.createHTML(e):e}var _s=(r,e)=>{let t=r.length-1,n=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=gt;for(let a=0;a<t;a++){let l=r[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===gt?d[1]==="!--"?s=Vr:d[1]!==void 0?s=Nr:d[2]!==void 0?(Zr.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=We):d[3]!==void 0&&(s=We):s===We?d[0]===">"?(s=o??gt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?We:d[3]==='"'?Gr:Kr):s===Gr||s===Kr?s=We:s===Vr||s===Nr?s=gt:(s=We,o=void 0);let f=s===We&&r[a+1].startsWith("/>")?" ":"";i+=s===gt?l+ms:u>=0?(n.push(c),l.slice(0,u)+qr+l.slice(u)+ze+f):l+ze+(u===-2?a:f)}return[Xr(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},wt=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=_s(e,t);if(this.el=r.createElement(c,n),Le.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Le.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(qr)){let h=d[s++],f=o.getAttribute(u).split(ze),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:g[2],strings:f,ctor:g[1]==="."?zn:g[1]==="?"?En:g[1]==="@"?An:Xe}),o.removeAttribute(u)}else u.startsWith(ze)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(Zr.test(o.tagName)){let u=o.textContent.split(ze),h=u.length-1;if(h>0){o.textContent=qt?qt.emptyScript:"";for(let f=0;f<h;f++)o.append(u[f],_t()),Le.nextNode(),l.push({type:2,index:++i});o.append(u[h],_t())}}}else if(o.nodeType===8)if(o.data===jr)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(ze,u+1))!==-1;)l.push({type:7,index:i}),u+=ze.length-1}i++}}static createElement(e,t){let n=Oe.createElement("template");return n.innerHTML=e,n}};function Ze(r,e,t=r,n){if(e===Be)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,i=bt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Ze(r,o._$AS(r,e.values),o,n)),e}var Mn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Oe).importNode(t,!0);Le.currentNode=o;let i=Le.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new vt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Rn(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=Le.nextNode(),s++)}return Le.currentNode=Oe,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},vt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ze(this,e,t),bt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=wt.createElement(Xr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Mn(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Ur.get(e.strings);return t===void 0&&Ur.set(e.strings,t=new wt(e)),t}k(e){Fn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let i of e)o===t.length?t.push(n=new r(this.O(_t()),this.O(_t()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Or(e).nextSibling;Or(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(e,t=this,n,o){let i=this.strings,s=!1;if(i===void 0)e=Ze(this,e,t,0),s=!bt(e)||e!==this._$AH&&e!==Be,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ze(this,a[n+l],t,l),c===Be&&(c=this._$AH[l]),s||=!bt(c)||c!==this._$AH[l],c===b?e=b:e!==b&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zn=class extends Xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},En=class extends Xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},An=class extends Xe{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=Ze(this,e,t,0)??b)===Be)return;let n=this._$AH,o=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==b&&(n===b||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Rn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ze(this,e)}};var bs=Tn.litHtmlPolyfillSupport;bs?.(wt,vt),(Tn.litHtmlVersions??=[]).push("3.3.3");var Yr=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let i=t?.renderBefore??null;n._$litPart$=o=new vt(e.insertBefore(_t(),i),i,void 0,t??{})}return o._$AI(r),o};var Pn=globalThis,le=class extends xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Be}};le._$litElement$=!0,le.finalized=!0,Pn.litElementHydrateSupport?.({LitElement:le});var ws=Pn.litElementPolyfillSupport;ws?.({LitElement:le});(Pn.litElementVersions??=[]).push("4.2.2");async function Qr(r){return r.callWS({type:"neonplan3d/building/get"})}async function Jr(r,e){return(await r.callWS({type:"neonplan3d/building/save",building:e})).revision}function eo(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function to(r,e){return(await r.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function no(r){return(await r.callWS({type:"neonplan3d/packs/list"})).packs}var vs="neonplan3d.seenOffers";function ro(r){let e=[];try{e=JSON.parse(localStorage.getItem(vs)??"[]")}catch{}return r.filter(t=>!e.includes(t.id))}var ys="neonplan3d.seenUpdates";function oo(r){let e=[];try{e=JSON.parse(localStorage.getItem(ys)??"[]")}catch{}return r.filter(t=>!e.includes(`${t.id}@${t.release}`))}function io(r){return r.callWS({type:"neonplan3d/license/get"})}var so=[],In=new Map,ao=0;function lo(r){so=r,In=new Map(r.flatMap(e=>e.items.map(t=>[ks(e.id,t.id),t]))),ao++}function kt(){return so}function jt(){return ao}function ks(r,e){return`pack:${r}:${e}`}function Hn(r){return r.startsWith("pack:")}var xs={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function co(r){return de(r)?.parts.find(e=>e.screen)}function de(r){if(!Hn(r))return;let e=In.get(r);if(e)return e;let[,t,...n]=r.split(":"),o=xs[t];return o?In.get(`pack:${o}:${n.join(":")}`):void 0}function uo(r,e){let t=e.split("-")[0];return r.name[t]??r.name.en??Object.values(r.name)[0]??r.id}function Se(r,e){let t=de(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return ho;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Zt(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return t?0:po(e)}}var Ve={field:null,size:1,right:0,up:0};var mo=["rain","snow","clouds","lightning","sky"];var $s={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ms(r){return r==="hedge"||r==="fence"||r==="pergola"}function zs(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let o=r.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of r.points){let u=i(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return n*l}function Es(r,e,t,n){return go(r)+(e.offset??0)+$s[e.type]-zs(e,t,n)}function go(r){return r.elevation>.3?0:-.2}function xt(r,e,t){let n=(r.outdoor??[]).filter(i=>!Ms(i.type)&&i.type!=="pool"&&j([e,t],i.points)),o=[...n].reverse().find(i=>i.cut)??n[0];return o?Es(r,o,e,t):go(r)}var As={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var _o={type:"none",pitch:35,overhang:.4},Rs={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{..._o}};var bo=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ho=1.75;function wo(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:de(r.type)?.mount!=="ceiling"}function Cn(r){return bo.has(r)||!!de(r)?.light}var Ts=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function po(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Zt(r,e,t){let n=0;for(let o of r.furniture)!(Ts.has(o.type)||de(o.type)?.surface)||!j([e,t],Xt(o))||(n=Math.max(n,o.h));return n}var Ss=new Set([...bo,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),fo={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Wn(r){r.energy={...As,...r.energy??{}},r.presence=r.presence??[],r.settings={...Rs,...r.settings,roof:{..._o,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=n[o.mount??"ceiling"],[s,a,l]=fo[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function Ee(r){let e=0;for(let t=0;t<r.length;t++){let[n,o]=r[t],[i,s]=r[(t+1)%r.length];e+=n*s-i*o}return e/2}function Ne(r){let e=Ee(r);if(Math.abs(e)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let t=0,n=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Xt(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function j(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}var vo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Fs=700,On="neonplan3d.unsaved",Ye="1.12.6",ko="floorplan-3d.unsaved";function Ds(){try{let r=localStorage.getItem(On)??localStorage.getItem(ko);return r?JSON.parse(r):null}catch{return null}}function Ln(r){try{r?localStorage.setItem(On,JSON.stringify(r)):(localStorage.removeItem(On),localStorage.removeItem(ko))}catch{}}var Qe=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Fs),this.host.requestUpdate()}get frontendVersion(){return Ye}get versionGap(){return!this.backendVersion||Ye==="dev"||this.backendVersion===Ye?null:Ps(this.backendVersion,Ye)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Ye!=="dev"&&this.backendVersion!==Ye}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Wn(e.building))}discardDraft(){this.draft=null,Ln(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Jr(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Ln(null)}catch(t){this.saveState="error",this.saveError=yo(t),Ln({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await eo(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await no(this.hass)}catch{this.packs=[]}lo(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Qr(this.hass);this.building=Wn(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=Ds()),this.revision=e.revision,this.error=null}catch(e){this.error=yo(e)}this.host.requestUpdate()}}};function yo(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}function Ps(r,e){let t=r.split(/[.-]/).map(o=>Number.parseInt(o,10)||0),n=e.split(/[.-]/).map(o=>Number.parseInt(o,10)||0);for(let o=0;o<Math.max(t.length,n.length);o++){let i=(t[o]??0)-(n[o]??0);if(i)return i}return 0}var xo;function Bn(){let r=new URL("./neonplan3d-editor.js?v=c5336f48aa65",new URL(import.meta.url)).href;return xo??=import(r),xo}var Is={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Hs=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Cs=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Ws=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Yt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ro=new Set(["light","switch","fan"]);function To(r){return r.slice(0,r.indexOf("."))}function F(r){return Is[To(r)]??null}function So(r){return r!==null&&r!=="scene"&&r!=="script"}function Mt(r,e){let t=r.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&r.devices?.[t.device_id]?.area_id||null:null}function $o(r,e){let t=F(e);if(!t)return!1;let n=r.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let o=r.states[e];if(!o)return!1;let i=o.attributes.device_class;return t==="sensor"?i?Hs.has(i):Cs.has(String(o.attributes.unit_of_measurement??"")):t==="binary"?i?Ws.has(i):!!n?.area_id:!0}var Ls=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Mo(r,e){if(F(e)!=="sensor")return!1;let t=r.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=r.states[e];return!n||!n.attributes.unit_of_measurement||Ls.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||K(n)}var Vn=null;function $t(r){let e=Vn;if(e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount)))return e;let t=new Map,n=new Map,o=[],i=new Map,s=new Map;for(let l of Object.keys(r.entities??{})){let c=r.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&jn(r,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!c.hidden&&!c.entity_category&&(i.get(d)??i.set(d,new Set).get(d)).add(To(l));let u=$o(r,l),h=Mt(r,l);if(!h){(u||Mo(r,l))&&So(F(l))&&o.push(l);continue}u&&(t.get(h)??t.set(h,[]).get(h)).push(l)}if(r.entities)for(let l of Object.keys(r.states))r.entities[l]||($o(r,l)||Mo(r,l))&&So(F(l))&&o.push(l);o.sort((l,c)=>Yt.indexOf(F(l))-Yt.indexOf(F(c))||q(r,l).localeCompare(q(r,c)));for(let[l,c]of t){let d=r.areas?.[l]?.name;c.sort((u,h)=>{let f=Yt.indexOf(F(u)),g=Yt.indexOf(F(h));return f-g||q(r,u,d).localeCompare(q(r,h,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Vn={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:t,power:n,unassigned:o,domains:i,hubs:a},Vn}function oe(r,e){return!e||!r.entities?[]:$t(r).areas.get(e)??[]}var Os={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Bs=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Vs=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Ns(r,e){let t=r.entities?.[e]?.device_id,n=t&&!$t(r).hubs.has(t)?$t(r).domains.get(t):void 0;return n&&[...n].some(o=>Bs.has(o))?!1:!Vs.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function Nn(r,e,t,n){let o=t.climate?.[n];if(o==="none")return[];if(o)return r.states[o]?[o]:[];let i=Os[n],s=(u,h)=>j([u,h],t.points),a=e?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(a.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...oe(r,t.area_id).filter(u=>!c.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&r.states[u]?.attributes.device_class===i&&Ns(r,u))}function we(r){return r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Ks(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}function Je(r,e){return we(r)==="\xB0F"?e*9/5+32:e}function Ae(r,e,t,n){let o=Nn(r,e,t,n).map(i=>{let s=Number(r.states[i]?.state);return n==="temperature"?Ks(s,r.states[i]?.attributes.unit_of_measurement):s}).filter(i=>Number.isFinite(i));return o.length?o.reduce((i,s)=>i+s,0)/o.length:null}function Fo(r,e){return!!r.entities&&$t(r).hubs.has(e)}function Kn(r,e){return r.entities?$t(r).power.get(e)??[]:[]}function q(r,e,t){let o=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(t&&o.length>t.length+1&&o.toLowerCase().startsWith(t.toLowerCase()+" ")){let i=o.slice(t.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return o}function K(r){return!r||r.state==="unavailable"||r.state==="unknown"}var Gs=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Gn(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function $e(r){if(!r)return!1;if(r.entity_id.startsWith("vacuum."))return r.state==="cleaning"||r.state==="returning";switch(F(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";case"sensor":return Gn(r)&&Gs.has(String(r.state).toLowerCase());default:return!1}}function et(r,e){if(!r||r.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,o=t.rgb_color,i;return o&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[o[0]/255,o[1]/255,o[2]/255]:typeof t.color_temp_kelvin=="number"?i=Us(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function Us(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function tt(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var qs=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),js=new Set(["garage","gate"]),Zs=new Set(["window","opening"]);function St(r,e,t=!1){let n=new Map;return e.length&&r.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(o.id,s)}),n}function Qt(r,e){let t=new Map;for(let n of e)for(let o of n.rooms){let i=n.openings.filter(w=>w.room_id===o.id).sort((w,E)=>w.edge-E.edge||w.offset-E.offset);if(!i.length)continue;let s=oe(r,o.area_id),a=w=>r.states[w]?.attributes.device_class,l=s.filter(w=>F(w)==="cover"&&qs.has(a(w))),c=i.filter(w=>w.type==="window"),d=i.filter(w=>w.type==="door"),u=i.filter(w=>w.type==="garage"),h=St(c,l,!0),f=St(c,s.filter(w=>F(w)==="binary"&&Zs.has(a(w)))),g=St(d,s.filter(w=>F(w)==="binary"&&a(w)==="door")),m=St(u,s.filter(w=>F(w)==="cover"&&js.has(a(w)??""))),_=St(u,s.filter(w=>F(w)==="binary"&&a(w)==="garage_door")),k=(w,E)=>w==="none"?null:w??E??null;for(let w of i){let E=w.type==="window"?h:w.type==="garage"?m:null,S=w.type==="window"?f:w.type==="garage"?_:g;t.set(w.id,{cover:k(w.cover,E?.get(w.id)),contact:w.sensor==="handle"&&w.contact==null?null:k(w.contact,S.get(w.id)),tilt:w.tilt==="none"?null:w.tilt,contact2:w.leaves===2&&w.contact2&&w.contact2!=="none"?w.contact2:null,tilt2:w.leaves===2&&w.tilt2&&w.tilt2!=="none"?w.tilt2:null,position:w.position&&w.position!=="none"?w.position:null,positionInverted:!!w.position_inverted,tiltAngle:w.tilt_angle&&w.tilt_angle!=="none"?w.tilt_angle:null,tiltMax:w.tilt_max??null,tiltOffset:w.tilt_offset??null,tiltInvert:!!w.tilt_invert,shut:!!w.shut})}}return t}var Xs=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ys(r){if(!r||K(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:null,r.state]){if(!t)continue;let n=Xs.find(([o])=>o.test(t.trim()));if(n)return n[1]}return null}var Qs=.5;function Re(r,e,t="window"){let n=m=>!!m&&r.states[m]?.state==="on",o=m=>!!m&&!!r.states[m]&&!K(r.states[m]),i=m=>m?Ys(r.states[m]):null,s=n(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",a=i(e.contact2)==="open"&&!s?1:0,l=n(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",c=l?1:0,d=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(d)){let m=(d-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,m/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}let u=i(e.contact)==="open"&&!l?1:0,h=null,f=e.cover?r.states[e.cover]:void 0,g=Js(r,e.position);if(g!==null)h=e.positionInverted?g:1-g;else if(f&&!K(f)){let m=f.attributes.current_position;typeof m=="number"?h=1-Math.min(100,Math.max(0,m))/100:h=f.state==="closed"?1:f.state==="opening"||f.state==="closing"?.5:0}else e.cover&&(h=0);if(t==="door"){let m=i(e.contact);return{open:m===null?e.shut?0:Qs:m==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:h,sensed:m!==null||h!==null}}if(t==="garage"){let m=h!==null||o(e.contact);return h===null&&(h=o(e.contact)&&n(e.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:h,sensed:m}}return{open:u,open2:a,tilt:c,tilt2:s?1:0,cover:h,sensed:o(e.contact)||o(e.tilt)||Number.isFinite(d)}}function Js(r,e){let t=e?r.states[e]:void 0;if(!t||K(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let o=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,o?n/100:n))}function Un(r,e){let t=new Map,n=[];for(let s of e){let a=r.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let o=n.map(s=>{let a=t.get(s),l=a.find(c=>!r.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return o.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function Jt(r,e){return Un(r,e).map(t=>t.primary)}var ea={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Do=new Set(["tv_board","tv_wall"]);function Po(r,e){let t=r.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let o=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||o===i||i.length>=3&&o.includes(i)}function Io(r){return Do.has(r)||!!co(r)}function en(r){return Io(r)||r==="desk"||r==="fridge_smart"}function nt(r,e){let t=new Set,n=rt(r,e),o=e.some(i=>i.openings.some(s=>s.confirm))?Qt(r,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?o?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of i.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function qn(r,e){let t=o=>{if(!o||o==="none")return!1;let i=r.states[o]?.state;return i==="on"||i==="open"},n=new Map;for(let o of e)for(let i of o.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var zo={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function jn(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function ta(r,e){if(jn(r,e))return e;let t=r.entities?.[e]?.device_id;return t?Kn(r,t).find(n=>n!==e)??null:null}function rt(r,e){let t=new Map;for(let n of e){let o=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in zo,a=s?zo[i.type]:ea[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&j([i.x,i.z],f.points)),c=l?Jt(r,oe(r,l.area_id)):[],d=f=>`${f} ${q(r,f)}`,u=i.entity==="none"?null:i.entity??null;if(i.entity==null){let f=c.filter(g=>!o.has(g));if(s){let g=f.filter(m=>F(m)==="light");u=g.find(m=>a.test(d(m)))??g[0]??null}else if(i.type==="robot_vacuum"){let g=l?.area_id??null;u=Object.keys(r.entities??{}).find(m=>m.startsWith("vacuum.")&&!o.has(m)&&Mt(r,m)===g)??null}else if(i.type==="radiator"){let g=f.filter(m=>F(m)==="climate");u=g.find(m=>a.test(d(m)))??g[0]??null}else if(Io(i.type)){let g=f.filter(m=>F(m)==="media");u=g.find(m=>r.states[m]?.attributes.device_class==="tv")??g.find(m=>a?.test(d(m)))??(Do.has(i.type)?g[0]??null:null)}else a&&(u=f.find(g=>["switch","media","fan"].includes(F(g)??"")&&a.test(d(g)))??null);u&&o.add(u)}let h=i.power==="none"?null:i.power??null;i.power==null&&(h=u?ta(r,u):null,!h&&a&&l&&!s&&(h=oe(r,l.area_id).find(g=>jn(r,g)&&!o.has(g)&&a.test(d(g)))??null),h&&o.add(h)),(u||h)&&t.set(i.id,{entity:u,power:h})}}return t}function Zn(r){if(!r||r.state==="off"||r.state==="standby"||K(r))return null;let e=r.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Ho(r,e,t){let n=(d,u)=>j([d,u],t.points),o=rt(r,[e]),i=Qt(r,[e]),s=[...e.placements.filter(d=>n(d.x,d.z)).map(d=>d.entity_id),...e.furniture.filter(d=>n(d.x,d.z)).flatMap(d=>[o.get(d.id)?.entity,o.get(d.id)?.power]),...e.openings.filter(d=>d.room_id===t.id).flatMap(d=>{let u=i.get(d.id);return u?[u.cover,u.contact,u.tilt,u.contact2]:[]}),...t.panel??[]].filter(d=>!!d&&!!r.states[d]),a=new Set(t.hidden??[]),l=[...new Set(s)].filter(d=>!a.has(d)),c=new Set(l);return{shown:l,more:oe(r,t.area_id).filter(d=>!c.has(d)&&!a.has(d))}}var Eo=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,na={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Co(r,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,o=n(t.device)??n(e.entity),i=o?r.entities?.[o]?.device_id:null,s=i&&r.entities?Object.values(r.entities).filter(u=>u.device_id===i).map(u=>u.entity_id):[],a=u=>`${u} ${r.states[u]?.attributes.friendly_name??""} ${r.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,f)=>s.find(g=>h.includes(g.split(".")[0])&&na[u].test(a(g))&&(!f||f(g)))??null,c=u=>String(r.states[u]?.attributes.unit_of_measurement??""),d=u=>String(r.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function tn(r,e){let t=Co(r,e),n=_=>_?r.states[_]:void 0,o=_=>{let k=Number(n(_)?.state);return _&&Number.isFinite(k)?k:null},i=o(t.soc),s=o(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(o(t.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),h=n(t.lock),f=n(t.climate),g=n(t.tracker),m=g?.state.toLowerCase()??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:h?h.entity_id.startsWith("lock.")?h.state==="locked":h.state==="on":null,climateOn:f?f.entity_id.startsWith("climate.")?f.state!=="off"&&f.state!=="unavailable":f.state==="on":null,away:g&&m!=="home"&&!K(g)?m==="not_home"?"":g.state:null}}function Wo(r,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Co(r,n)))).filter(t=>!!t)}function Xn(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;if(!n||!r.entities)return null;for(let o of Object.values(r.entities))if(!(o.device_id!==n||!o.entity_id.startsWith("sensor."))&&(Eo.test(o.translation_key??"")||Eo.test(o.entity_id.split(".")[1])))return o.entity_id;return null}function Ao(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Lo(r,e,t,n){let o=n?r.states[n]?.state:t?r.states[t]?.attributes.current_room:void 0;if(typeof o!="string"||!o||o==="unknown"||o==="unavailable")return null;let i=Ao(o);if(!i)return null;let s=a=>[a.name,a.area_id??"",a.area_id&&r.areas?.[a.area_id]?.name||""].map(Ao).filter(Boolean);return e.find(a=>s(a).includes(i))??e.find(a=>s(a).some(l=>l.length>=3&&(l.includes(i)||i.includes(l))))??null}var ra=new Set(["garage","gate","door"]);function Yn(r,e){let t=new Set,n=new Set,o=i=>{if(!i||i==="none"||!r.states[i])return;let s=F(i);s==="light"?t.add(i):s==="cover"&&!ra.has(String(r.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);for(let a of Jt(r,oe(r,i.area_id)))s.has(a)||o(a)}for(let i of e.placements)o(i.entity_id);for(let i of e.furniture)o(i.entity);return{lights:[...t],covers:[...n]}}function Oo(r){let e=r.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Bo(r,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[o,i]=n.split(".",2);r.callService(o,i,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Vo={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te \u2013 Gas, Wasser und W\xE4rme folgen als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},No={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices \u2013 gas, water and heat follow as updates",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},oa=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],zt=new Map,Qn=new Map;function Jn(r){let e=(r??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return oa.includes(t)?t:null}function ot(r){let e=Jn(r);return!e||zt.has(e)}function nn(r){let e=Jn(r);if(!e||zt.has(e))return Promise.resolve();let t=Qn.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=9a416c61ad1b`,import.meta.url).href;t=fetch(n).then(o=>o.ok?o.json():{}).then(o=>{zt.set(e,o&&typeof o=="object"?o:{})}).catch(()=>{zt.set(e,{})}).finally(()=>Qn.delete(e)),Qn.set(e,t)}return t}function A(r,e,t={}){let n=r?.language??navigator.language,o=n.startsWith("de")?null:Jn(n),s=(n.startsWith("de")?Vo:o&&zt.get(o)||No)[e]??No[e]??Vo[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function J(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var ia=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro"],sa=["fridge_smart"];var Ko=r=>(r??navigator.language).toLowerCase().startsWith("de");function Go(r){return Ko(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var aa={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Uo(r,e){let t=Ko(r),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",o=e?aa[e]:void 0,i=o?t?o.de:o.en:"",[s,a]=i.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function la(r=kt()){let e=new Set;for(let t of r)for(let n of t.features??[])(ia.includes(n)||sa.includes(n))&&e.add(n);return e}function G(r,e){return la(e).has(r)}var qo={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function rn(r){return qo[r]}function on(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Et(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${qo[r]}"/></svg>`}var Te=(r,e)=>A(r,e);function pe(r,e){if(!e||K(e))return Te(r,"state_unavailable");let t=e.attributes;switch(F(e.entity_id)){case"light":return e.state!=="on"?Te(r,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Te(r,"state_on");case"switch":case"fan":return Te(r,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:sn(r,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${J(r,t.current_temperature,1)} ${r?we(r):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${Te(r,"state_off")}`:Te(r,"state_off"):n??sn(r,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",o=[t.app_name,t.media_title,t.source].find(i=>typeof i=="string"&&i);return n&&o?o:sn(r,e.state)}case"lock":case"camera":return sn(r,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Te(r,e.state==="on"?"state_open":"state_closed"):Te(r,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),o=t.unit_of_measurement??"",i=r?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${J(r,n,i)}${o?` ${o}`:""}`:e.state}default:return""}}function sn(r,e){let t=`state_${e}`,n=A(r,t);return n===t?e:n}function jo(r,e){let t=[];for(let n of e.floors)for(let o of n.placements){let i=F(o.entity_id),s=r.states[o.entity_id];if(!i||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&j([o.x,o.z],c.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;t.push({id:o.entity_id,floorId:n.id,roomId:a?.id??null,x:o.x,z:o.z,y:o.y??tt(i,n.height,o.mount??null),lamp:i==="light"?o.mount??"ceiling":null,model:i==="camera"?o.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:i==="camera"?ca(r,o.entity_id):void 0,fov:o.fov??void 0,reach:o.reach??void 0,tilt:o.tilt??void 0,rotation:o.rotation??0,icon:o.icon?on(o.icon):Et(i),cone:i==="camera"&&o.cone===!1?!1:void 0,name:o.name||q(r,o.entity_id,l),ownName:o.name||void 0,showName:!!o.show_name,text:pe(r,s),active:$e(s),unavailable:K(s),glow:i==="light"?er(et(s),o.glow_scale):null,show:o.marker??void 0,fixed:!!o.locked})}return t}function Zo(r,e){let t=`${e} ${String(r.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function ca(r,e){return Ke(r,e).some(t=>r.states[t]?.state==="on")}function Ke(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(r.states[n]?.attributes.device_class))):[]}function Xo(r){return r.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function ve(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Yo(r,e){let t=e.slice(0,e.indexOf("."));return r.callService(t,"toggle",{entity_id:e})}function er(r,e){return!r||e==null||e===1?r:{...r,level:Math.max(.02,Math.min(1.5,r.level*e))}}var ye=he`
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
`,Fe=he`
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
`;var da=4,ua=3e3,ha=8,pa=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],it=r=>p`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${rn(r)} />
  </svg>`,an={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},tr=r=>p`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,nr=class extends le{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ua)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return A(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return q(this.hass,e,this.areaName)}nameButton(e){return p`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>ve(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return p`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${K(e)}
      @click=${o}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return b;let t=oe(this.hass,e.area_id),n=this.memo,{shown:o,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?Ho(this.hass,this.floor,e):{shown:t,more:[]}},s=Un(this.hass,i).map(S=>S.primary),a=s.length,l=this._showAll?[...o,...s]:o,c=S=>l.filter(R=>S.includes(F(R))).map(R=>this.hass.states[R]),d=c(["light"]),u=c(["cover"]),h=c(["climate"]),f=c(["media"]),g=c(["switch","fan","lock"]),m=c(["sensor","binary"]),_=c(["camera"]);this.hasCameras=_.length>0;let k=c(["scene","script"]),w=this.facts(h),E=d.filter(S=>S.state==="on");return p`<section class="fp3d-rp" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?p`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:b}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?b:p`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:p`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(S=>this.lightRow(S)),p`${E.length<d.length?p`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(S=>!K(S)).map(S=>S.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:b}${E.length?p`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:E.map(S=>S.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:b}`):b}
        ${u.length?this.section("panel_covers",u.map(S=>this.coverRow(S)),u.length>1?p`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(S=>!K(S)).map(S=>S.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(S=>!K(S)).map(S=>S.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:b):b}
        ${h.length?this.section("panel_climate",h.map(S=>this.climateRow(S))):b}
        ${f.length?this.section("panel_media",f.map(S=>this.mediaRow(S))):b}
        ${g.length?this.section("panel_switches",g.map(S=>this.switchRow(S))):b}
        ${_.length?this.section("panel_cameras",_.map(S=>this.cameraTile(S))):b}
        ${m.length?this.section("panel_sensors",m.map(S=>this.sensorRow(S))):b}
        ${k.length?this.section("panel_scenes",[p`<div class="fp3d-rp-scenes">
                  ${k.map(S=>p`<button
                      class="fp3d-btn"
                      ?disabled=${K(S)}
                      @click=${()=>this.call(F(S.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:S.entity_id})}
                    >
                      ${this.name(S.entity_id)}
                    </button>`)}
                </div>`]):b}
        ${a?p`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:b}
      </div>
    </section>`}facts(e){let t=[],n=this.room,o=(l,c)=>{let d=Ae(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${J(this.hass,Je(this.hass,d),1)} ${we(this.hass)}`;let u=Nn(this.hass,this.floor,n,l)[0],h=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${J(this.hass,d,1)} ${h}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?t.push(s):i&&n.climate?.temperature!=="none"&&t.push(`${J(this.hass,i.attributes.current_temperature,1)} ${we(this.hass)}`);let a=o("humidity","%");return a&&t.push(a),t}section(e,t,n=b){return p`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",o=t.supported_color_modes??[],i=o.some(h=>h!=="onoff"),s=o.includes("color_temp"),a=o.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${it("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&i?p`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(h.target.value)})}
          /></label>`:b}
      ${n&&s?p`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:b}
      ${n&&a?p`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${pa.map(h=>p`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:h})}
              ></button>`)}
          </div>`:b}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,o=e.entity_id,i=K(e);return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${it("cover")}</span>
      ${this.nameButton(o)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${n&ha?p`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:b}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${n&da&&typeof t.current_position=="number"?p`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:b}
      ${n&128&&typeof t.current_tilt_position=="number"?p`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:o,tilt_position:Number(s.target.value)})}
          /></label>`:n&48?p`<div class="fp3d-rp-buttons">
              ${n&16?p`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_open")}</button>`:b}
              ${n&32?p`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_close")}</button>`:b}
            </div>`:b}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${it("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${o!==null?p`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${J(this.hass,o,1)} ${we(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+i)}>+</button>
          </div>`:b}
      ${l.length>1?p`<div class="fp3d-rp-chips">
            ${l.map(d=>p`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:b}
    </div>`}stateOf(e,t=pe(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=F(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,o=K(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${it("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?p`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:b}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${tr(an.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${K(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${tr(e.state==="playing"?an.pause:an.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${tr(an.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?p`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:b}
    </div>`}switchRow(e){let t=e.entity_id,n=F(t),o=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${it(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!K(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,o=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return p`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>ve(this,e.entity_id)}>
        ${n?p`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:p`<span class="fp3d-rp-note">${pe(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${o?p`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${G("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:b}
    </div>`}sensorRow(e){let t=F(e.entity_id),n=t==="binary"&&e.state==="on";return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${it(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[ye,Fe,he`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",nr);var fa={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function At(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Qo(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=fa[t.state];if(!n)return null;let o=t.attributes,i=n.cloud??0;typeof o.cloud_coverage=="number"&&(i=Math.min(1,Math.max(0,o.cloud_coverage/100)));let s=n.wind??0;if(typeof o.wind_speed=="number"){let a=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:t.entity_id,condition:t.state,rain:n.rain??0,snow:n.snow??0,fog:n.fog??0,cloud:i,wind:s,lightning:!!n.lightning}}function Jo(r,e){let t=new Set(e??mo);return{...r,rain:t.has("rain")?r.rain:0,snow:t.has("snow")?r.snow:0,fog:t.has("fog")?r.fog:0,cloud:t.has("clouds")?r.cloud:0,lightning:t.has("lightning")&&r.lightning,sky:t.has("sky")}}var ma=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),ei={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function ti(r,e,t){let n=[];for(let s of e.floors)for(let a of s.rooms){let l=oe(r,a.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!ei[String(r.states[c]?.attributes.device_class)]);l.length&&n.push({floorId:s.id,roomId:a.id,sensors:l})}let o=Object.keys(r.states),i=e.settings.rain_warning===!1?null:At(r,t??e.settings.weather_entity);return{rooms:n,alarms:o.filter(s=>s.startsWith("alarm_control_panel.")),weather:i}}function ni(r){return[...r.rooms.flatMap(e=>e.sensors),...r.alarms,...r.weather?[r.weather]:[]]}function ri(r,e,t,n){let o=[];for(let s of t.rooms)for(let a of s.sensors){let l=r.states[a];l?.state==="on"&&o.push({kind:ei[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!t.weather&&ma.has(r.states[t.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let c=Re(r,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||o.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of t.alarms){let a=r.states[s]?.state;a==="triggered"?o.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&o.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return o}function oi(r){switch(r){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function rr(r,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,o=r?q(r,t.entity):t.entity,i=A(r,`alert_${t.kind}`,{name:o});return n?`${n.name} \xB7 ${i}`:i}var me=(r,e)=>[r[0]-e[0],r[1]-e[1]],st=(r,e)=>[r[0]+e[0],r[1]+e[1]],De=(r,e)=>[r[0]*e,r[1]*e],or=(r,e)=>r[0]*e[0]+r[1]*e[1],at=(r,e)=>r[0]*e[1]-r[1]*e[0],Rt=r=>Math.hypot(r[0],r[1]),lt=r=>{let e=Rt(r)||1;return[r[0]/e,r[1]/e]},ii=r=>[-r[1],r[0]],si=r=>[r[1],-r[0]];function ct(r,e,t=[]){let n=e.eps??.005,o=[],i=t.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),s=[],a=x=>{for(let $=0;$<s.length;$++)if(Math.abs(s[$][0]-x[0])<=n&&Math.abs(s[$][1]-x[1])<=n)return $;return s.push([x[0],x[1]]),s.length-1},l=[];for(let x of r){let $=x.points;if($.length<3||Math.abs(Ee($))<1e-6)continue;let y=Ee($)>0,z=$.map(a);for(let I=0;I<$.length;I++){let O=z[I],B=z[(I+1)%$.length];O!==B&&l.push(y?{u:O,v:B,room:x.id,edge:I,forward:!0}:{u:B,v:O,room:x.id,edge:I,forward:!1})}}let c=i.map(x=>[a(x.a),a(x.b)]),d=new Set;for(let x of r){let $=x.points;$.length<3||(x.wall_splits??[]).forEach((y,z)=>{if(!y||z>=$.length)return;let I=$[z],O=me($[(z+1)%$.length],I),B=Rt(O);for(let P of y)P>n&&P<B-n&&d.add(a(st(I,De(O,P/B))))})}let u=[];for(let x of l){let $=s[x.u],y=s[x.v],z=me(y,$),I=Rt(z),O=De(z,1/I),B=[];for(let V=0;V<s.length;V++){if(V===x.u||V===x.v)continue;let ee=me(s[V],$),ie=or(ee,O);ie<=n||ie>=I-n||Math.abs(at(O,ee))<=n&&B.push({t:ie,id:V})}B.sort((V,ee)=>V.t-ee.t);let P=[{t:0,id:x.u},...B,{t:I,id:x.v}];for(let V=0;V+1<P.length;V++){let ee=P[V],ie=P[V+1],ue=x.forward?ee.t:I-ie.t,ae=x.forward?ie.t:I-ee.t;u.push({u:ee.id,v:ie.id,room:x.room,edge:x.edge,t0:ue,t1:ae})}}let h=new Map;for(let x of u){let $=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,y=h.get($);y||h.set($,y=[]),y.push(x)}let f=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),g=new Map;for(let x of u){let $=`${x.room}:${x.edge}`;g.set($,[...g.get($)??[],x.t0].sort((y,z)=>y-z))}let m=x=>{let $=r.find(z=>z.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray($))return $;let y=g.get(`${x.room}:${x.edge}`)??[];return $[y.indexOf(x.t0)]??null},_=x=>{let $=x.map(m).filter(y=>typeof y=="number"&&y>0);return $.length?Math.min(...$):void 0},k=x=>{let $=x.map(y=>r.find(z=>z.id===y.room)?.wall_thickness?.[y.edge]).filter(y=>typeof y=="number"&&y>0);return $.length?Math.max(...$):void 0},w=x=>x.some($=>m($)===0),E=[],S=[];for(let x of h.values()){let $=x[0],y=x.find(z=>z!==$&&z.u===$.v&&z.v===$.u&&z.room!==$.room);for(let z of x)z!==$&&z!==y&&z.room!==$.room&&o.push(`overlap:${$.room}:${z.room}`);if(w(y?[$,y]:[$])){y&&E.push([$.room,y.room]);continue}if(y){let z=k([$,y])??e.interior;S.push({a:$.u,b:$.v,left:z/2,right:z/2,exterior:!1,roomLeft:$.room,roomRight:y.room,sources:[f($),f(y)],height:_([$,y])})}else S.push({a:$.u,b:$.v,left:0,right:k([$])??e.exterior,exterior:!0,roomLeft:$.room,roomRight:null,sources:[f($)],height:_([$])})}let R=x=>lt(me(s[x.b],s[x.a]));for(let x of S){if(x.exterior||x.free)continue;let $=new Set;for(let z of[x.a,x.b])for(let I of S)!I.exterior||I.free||I.a!==z&&I.b!==z||Math.abs(at(R(x),R(I)))>1e-6||(I.roomLeft===x.roomLeft?$.add("left"):I.roomLeft===x.roomRight&&$.add("right"));if($.size!==1)continue;let y=x.left+x.right;$.has("left")?(x.left=0,x.right=y):(x.left=y,x.right=0)}i.forEach((x,$)=>{let[y,z]=c[$];if(y===z)return;let I=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],O=r.find(V=>V.points.length>=3&&j(I,V.points))?.id??null,B=(x.thickness??e.interior)/2,P=typeof x.height=="number"&&x.height>0?x.height:void 0;S.push({free:x.id,a:y,b:z,left:B,right:B,exterior:!1,roomLeft:O,roomRight:O,sources:[],height:P})}),S=_a(S,s,d);let L=wa(S,s);return{walls:S.map((x,$)=>{let y=s[x.a],z=s[x.b],I=L.get(`${$}:a`),O=L.get(`${$}:b`),B=va([I.right,O.left,z,O.right,I.left,y],1e-6);return{id:ga(y,z),a:[y[0],y[1]],b:[z[0],z[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:B,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{}}}),warnings:[...new Set(o)],open:E}}function ga(r,e){let t=i=>Math.round(i*100),[n,o]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(o[0])}_${t(o[1])}`}function ai(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function _a(r,e,t=new Set){let n=r.slice(),o=!0;for(;o;){o=!1;let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(a)}});for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=ai(l)),c.a!==s&&(c=ai(c)),l.a===c.b)continue;let d=lt(me(e[l.b],e[l.a])),u=lt(me(e[c.b],e[c.a]));if(Math.abs(at(d,u))>1e-6||or(d,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:ba(l.sources,c.sources)},f=n.filter((g,m)=>m!==a[0]&&m!==a[1]);f.push(h),n.length=0,n.push(...f),o=!0;break}}return n}function ba(r,e){let t=r.map(n=>({...n}));for(let n of e){let o=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):t.push({...n})}return t}function wa(r,e){let t=new Map;r.forEach((o,i)=>{let s=lt(me(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:De(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,i]of t){let s=e[o];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:st(s,De(ii(c.d),c.left)),right:st(s,De(si(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],h=st(s,De(ii(d.d),d.left)),f=st(s,De(si(u.d),u.right)),g=at(d.d,u.d);if(Math.abs(g)<1e-4)continue;let m=at(me(f,h),u.d)/g,_=st(h,De(d.d,m));Rt(me(_,s))>l||(n.get(d.key).left=_,n.get(u.key).right=_)}}return n}function va(r,e){let t=r.filter((o,i)=>Rt(me(o,r[(i+1)%r.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let o=0;o<t.length;o++){let i=t[(o+t.length-1)%t.length],s=t[o],a=t[(o+1)%t.length],l=me(s,i),c=me(a,s);if(Math.abs(at(lt(l),lt(c)))<1e-7&&or(l,c)>0){t=t.filter((d,u)=>u!==o),n=!0;break}}}return t}var ir=Math.PI/180;function ln(r){let e=Math.min(r.x0,r.x1),t=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),o=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:e,u1:t,w:o-n,at:(i,s)=>[i,r.flip?o-s:n+s]}:{u0:n,u1:o,w:t-e,at:(i,s)=>[r.flip?t-s:e+s,i]}}function li(r){let e=ln(r).w,t=r.eave_a,n=r.eave_b,o=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*ir),i=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*ir);if(r.shape==="flat"||r.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(r.shape==="pent")return{vr:e,rh:t+e*o,y:l=>t+l*o};if(r.shape==="mansard"){let l=ya(e,t,n,o,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=o+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(o+i))):e/2,a=t+s*o;return{vr:s,rh:a,y:l=>l<=s?t+l*o:n+(e-l)*i}}var Tt=Math.tan(30*ir);function ya(r,e,t,n,o){let i=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,o>1e-6?2.4/o:r*.3),a=e+i*n,l=t+s*o,c=Math.min(r-s,Math.max(i,(l-a+Tt*(r-s+i))/(2*Tt))),d=a+(c-i)*Tt;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=i?e+h*n:h<=c?a+(h-i)*Tt:h<=r-s?l+(r-s-h)*Tt:t+(r-h)*o}}function ci(r,e,t){let n=ln(e),o=r.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),i=c=>c.some(d=>o.some(u=>j(d,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:i(a.map(c=>n.at(c,-s)))?0:t,b:i(a.map(c=>n.at(c,n.w+s)))?0:t,u0:i(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:i(l.map(c=>n.at(n.u1+s,c)))?0:t}}var dn=Math.PI/180,ka=1.13,xa=1.72,sr=.025;var di=.25;function Dt(r,e){let t=[];for(let n of r.floors){if(e&&n.id!==e)continue;let{walls:o}=ct(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],a=i.b[1]-i.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(n.height,i.height??n.height),h=(f,g,m,_)=>t.push({key:f,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:_,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${i.id}`,[i.a[0]+c*i.right,n.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&h(`wall:${n.id}:${i.id}:back`,[i.b[0]-c*i.left,n.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var ui="ground";function Sa(r){let e=[...r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function $a(r,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],o=[-Math.sin(t),0,Math.cos(t)],i=Sa(r),s=n[0]*e.u+o[0]*e.v,a=n[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:xt(i,s,a)):e.base??0;return{key:ui,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function Ue(r,e,t=Pt(r)){return e.face===ui?$a(r,e):e.face.startsWith("wall:")?Dt(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function ar(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Pt(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>Ma(w,ci(r,w,w.overhang??e.overhang)));let t=ar(r);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(E=>E[0])),o=t.rooms.flatMap(w=>w.points.map(E=>E[1])),i=r.settings.wall_exterior+e.overhang,s=Math.min(...n)-i,a=Math.max(...n)+i,l=Math.min(...o)-i,c=Math.max(...o)+i,d=t.elevation+t.height;if(e.type==="flat")return[hi("main",null,s,l,a,c,d+di)];let u=a-s>=c-l,h=e.ridge==="short"?!u:u,f=(h?c-l:a-s)/2,g=f*Math.tan(e.pitch*dn),m=(w,E,S)=>h?[w,d+S,(l+c)/2+E]:[(s+a)/2+E,d+S,w],[_,k]=h?[s,a]:[l,c];return[-1,1].map(w=>cn(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",m(_,w*f,0),m(k,w*f,0),m(_,0,g),e.pitch,()=>[0,k-_]))}function Ma(r,e){let t=ln(r),n=li(r),o=(m,_,k)=>{let[w,E]=t.at(m,_);return[w,k,E]},i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(r.shape==="flat"||r.shape==="parapet"){let m=t.at(a,-i),_=t.at(l,t.w+s);return[hi(r.id,r.id,Math.min(m[0],_[0]),Math.min(m[1],_[1]),Math.max(m[0],_[0]),Math.max(m[1],_[1]),r.eave_a+di)]}if(r.shape==="pent")return[cn(`${r.id}:a`,r.id,"a",o(a,-i,n.y(-i)),o(l,-i,n.y(-i)),o(a,t.w+s,n.y(t.w+s)),r.pitch_a,()=>[0,c])];let d=r.shape==="hip"||r.shape==="pyramid",u=r.shape==="pyramid"?(t.u1-t.u0)/2:d?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=d?t.u0+u-a:0,f=d?l-(t.u1-u):0,g=[];if(n.vr>.3){let m=Math.hypot(n.vr+i,n.rh-n.y(-i));g.push(cn(`${r.id}:a`,r.id,"a",o(a,-i,n.y(-i)),o(l,-i,n.y(-i)),o(a,n.vr,n.rh),r.pitch_a,_=>[h*(_/m),c-f*(_/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));g.push(cn(`${r.id}:b`,r.id,"b",o(l,t.w+s,n.y(t.w+s)),o(a,t.w+s,n.y(t.w+s)),o(l,n.vr,n.rh),r.pitch_b,_=>[f*(_/m),c-h*(_/m)]))}if(d){let m=n.y(-i),_=n.y(t.w+s),k=[[`${r.id}:c`,"c",o(a,t.w+s,_),o(a,-i,m),o(t.u0+u,n.vr,n.rh)],[`${r.id}:d`,"d",o(l,-i,m),o(l,t.w+s,_),o(t.u1-u,n.vr,n.rh)]];for(let[w,E,S,R,L]of k){let W=za(w,r.id,E,S,R,L);W&&g.push(W)}}return g}function za(r,e,t,n,o,i){let s=Ft(Ge(o,n));if(s<.3)return null;let a=Pe(Ge(o,n)),l=Ge(i,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Ft(d);if(u<.3)return null;let h=Pe(d),f=Pe(mi(a,h));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let g=Pe([-h[0],0,-h[2]]),m=Math.atan2(h[1],Math.hypot(h[0],h[2]))/dn;return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:f,lu:s,ls:u,pitch:m,span:k=>{let w=Math.min(1,Math.max(0,k/u));return[c*w,s-(s-c)*w]},facing:[g[0],g[2]]}}function cn(r,e,t,n,o,i,s,a){let l=Pe(Ge(o,n)),c=Pe(Ge(i,n)),d=Pe(mi(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=Pe([-c[0],0,-c[2]]);return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:Ft(Ge(o,n)),ls:Ft(Ge(i,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function hi(r,e,t,n,o,i,s){let a=o-t>=i-n,l=a?o-t:i-n,c=a?i-n:o-t;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function pi(r){let e=r.module_w||ka,t=r.module_h||xa;return r.portrait===!1?[t,e]:[e,t]}function Ea(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function fi(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*dn:r.wall?Math.min(90,Math.max(0,e.tilt??0))*dn:0}function qe(r,e){let[t,n]=pi(e),o=Ea(e),i=Math.max(1,...o),a=(o.length-1)*Aa(r,e)+n*Math.cos(fi(r,e));return[i*t+(i-1)*sr,a]}function Aa(r,e){let[,t]=pi(e),n=fi(r,e);return r.wall?t*Math.cos(n)+sr:r.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+sr}function Ge(r,e){return[r[0]-e[0],r[1]-e[1],r[2]-e[2]]}function Ft(r){return Math.hypot(r[0],r[1],r[2])}function Pe(r){let e=Ft(r)||1;return[r[0]/e,r[1]/e,r[2]/e]}function mi(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function gi(r,e){let[t,n]=qe(r,e);return[r.o[0]+r.eu[0]*(e.u+t/2)+r.es[0]*(e.v+n/2),r.o[2]+r.eu[2]*(e.u+t/2)+r.es[2]*(e.v+n/2)]}var ge=.03,un=r=>r&&r!=="none"?r:null;function Ct(r,e=t=>un(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let i=e(o);if(o.type==="meter")t.grid??=i,t.gridExport??=un(o.export);else if(o.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(o.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let s=un(o.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(i||s)&&t.batteries.push({power:i,charge:s});let a=un(o.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function cr(r){for(let e of r.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return r.energy.meter}var Ra=.07;function te(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function Ta(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function pn(r,e){if(Ta(r,e))return e;let t=r.entities?.[e]?.device_id;if(!t)return null;let n=Fo(r,t),o=n?Mt(r,e):null;return Kn(r,t).find(i=>i!==e&&(!n||o!==null&&Mt(r,i)===o))??null}function yi(r,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),o=[],i=new Set;for(let s of e.floors)for(let a of s.placements){let l=pn(r,a.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),o.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,te(r.states[l])??0)}))}return o}function ki(r,e,t,n=Ct(e)){let o=e.energy,i=o.grid??n.grid,s=i?te(r.states[i],o.grid_invert):null;if(!o.grid&&n.gridExport){let m=Math.max(0,te(r.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let a=o.solar?te(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let m=n.solar.map(_=>te(r.states[_])).filter(_=>_!==null);a=m.length?m.reduce((_,k)=>_+k,0):null}let l=o.battery?te(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let k=_.power?Math.max(0,te(r.states[_.power])??0):0,w=Math.max(0,te(r.states[_.charge])??0);return k-w}return _.power?te(r.states[_.power],o.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,k)=>_+k,0):null}let d=(o.battery_soc?[o.battery_soc]:n.soc).map(m=>Number(r.states[m]?.state)).filter(m=>Number.isFinite(m)),u=d.length?d.reduce((m,_)=>m+_,0)/d.length:NaN,h=o.tariff?r.states[o.tariff]:void 0,f=Number(h?.state),g=o.consumption?te(r.states[o.consumption]):null;return g!==null?g=Math.max(0,g):s!==null||a!==null||l!==null?g=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(g=t.reduce((m,_)=>m+_.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(f)?{value:f,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:g}}function dt(r,e){return r.pos.push(e),r.adj.push([]),r.pos.length-1}function Ie(r,e,t){let n=Math.hypot(r.pos[e][0]-r.pos[t][0],r.pos[e][1]-r.pos[t][1]);r.adj[e].push({to:t,w:n}),r.adj[t].push({to:e,w:n})}function Fa(r,e){let t=r.length,n=r.map((o,i)=>{let s=r[(i+1)%t],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[o[0]+d*e[i],o[1]+u*e[i]],d:[a/c,l/c],n:[d,u]}});return r.map((o,i)=>{let s=n[(i-1+t)%t],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[o[0]+a.n[0]*e[i],o[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Da(r){return Ee(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function dr(r,e,t){let n={pos:[],adj:[],rings:new Map},{walls:o}=ct(r.rooms,{exterior:e,interior:t},r.walls??[]);for(let i of r.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=Da(i),l=s.length,c=s.map((h,f)=>{let g=a?(l-2-f+l)%l:f,m=o.some(_=>!_.exterior&&_.sources.some(k=>k.room_id===i.id&&k.edge===g));return Ra+(m?t/2:0)}),d=Fa(s,c).map(h=>dt(n,h)),u=d.map((h,f)=>[h,d[(f+1)%l]]);for(let[h,f]of u)Ie(n,h,f);n.rings.set(i.id,u)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=je(n,i.roomLeft,s),l=je(n,i.roomRight,s);a!==null&&l!==null&&Ie(n,a,l)}return n}function je(r,e,t){let n=r.rings.get(e);if(!n)return null;let o=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,h=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),f=[a[0]+c*h,a[1]+d*h],g=Math.hypot(t[0]-f[0],t[1]-f[1]);(!o||g<o.d)&&(o={seg:s,q:f,d:g})}if(!o)return null;let i=dt(r,o.q);return Ie(r,i,o.seg[0]),Ie(r,i,o.seg[1]),i}function Ht(r,e){let t=r.rooms.filter(i=>i.points.length>=3),n=t.find(i=>j(e,i.points));if(n)return n;let o=null;for(let i of t)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!o||a<o.d)&&(o={room:i,d:a})}return o?.room??null}function xi(r,e){let t=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),o=r.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let s=0;s<t.length;s++)!o[s]&&t[s]<1/0&&(i<0||t[s]<t[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:a}of r.adj[i])t[i]+a<t[s]-1e-9&&(t[s]=t[i]+a,n[s]=i)}return{dist:t,prev:n}}function _i(r,e){return r.every(t=>e[t].kind==="battery")?"battery":r.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var bi=new WeakMap;function Pa(r,e){let t=cr(r),n=r.floors.find(d=>d.id===t.floor_id),o=[],{wall_exterior:i,wall_interior:s}=r.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=r.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,h=l.get(d.id),f=_i(h,e);o.push({floorId:n.id,a:[t.x,ge,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:h,kind:f});let g=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,ge,t.z],dist:g,members:h,kind:f}),a.set(d.id,g+.25)}for(let d of c){let u=dr(d,i,s),h=Ht(d,[t.x,t.z]);if(!h)continue;let f=dt(u,[t.x,t.z]),g=je(u,h.id,[t.x,t.z]);if(g===null)continue;Ie(u,f,g);let m=[];for(let S of l.get(d.id)){let R=e[S],L=Ht(d,[R.x,R.z]);if(!L)continue;let W=dt(u,[R.x,R.z]),x=je(u,L.id,[R.x,R.z]);x!==null&&(Ie(u,W,x),m.push({node:W,member:S}))}let{dist:_,prev:k}=xi(u,f),w=new Map;for(let S of m)if(Number.isFinite(_[S.node]))for(let R=S.node;k[R]>=0;R=k[R]){let L=k[R],W=`${L}>${R}`,x=w.get(W)??{a:L,b:R,members:[]};x.members.push(S.member),w.set(W,x)}let E=a.get(d.id)??0;for(let{a:S,b:R,members:L}of w.values()){let W=u.pos[S],x=u.pos[R],$=_i(L,e);o.push({floorId:d.id,a:[W[0],ge,W[1]],b:[x[0],ge,x[1]],dist:E+_[S],members:L,kind:$})}}return o}function Si({building:r,consumers:e,summary:t,battery:n,fieldPower:o,devicePower:i}){let s=cr(r);if(!s)return[];let a=r.floors.find(y=>y.id===s.floor_id);if(!a)return[];let l=y=>i?.get(y),c=lr(r,"inverter"),d=lr(r,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=y=>{let z=null;for(let I of c)I.floorId===y.floorId&&(!z||Math.hypot(I.x-y.x,I.z-y.z)<Math.hypot(z.x-y.x,z.z-y.z))&&(z=I);return z},h=y=>l(y.id)??(d.length===1?t.battery??0:0),f=new Map;for(let y of d){let z=u(y);z&&f.set(y.id,z)}let g=e.map(y=>({floorId:y.floorId,x:y.x,z:y.z,kind:y.wallbox?"wallbox":"consumer",power:y.power}));for(let y of d)!f.has(y.id)&&t.battery!==null&&g.push({floorId:y.floorId,x:y.x,z:y.z,kind:"battery",power:Math.abs(h(y))});let m=`${s.floor_id}:${s.x},${s.z}|${g.map(y=>`${y.floorId}:${y.x},${y.z}:${y.kind}`).join(";")}`,_=bi.get(r);_||bi.set(r,_=new Map);let k=_.get(m);k||(k=Pa(r,g),_.clear(),_.set(m,k));let w=k.map(y=>({floorId:y.floorId,a:y.a,b:y.b,dist:y.dist,power:y.members.reduce((z,I)=>z+g[I].power,0),kind:y.kind})),E=t.grid!==null?ur(r):null,S=r.settings.roof.cables??[],R=y=>S.find(z=>z.id===y),L=(y,z)=>y.map(I=>({...I,key:z}));if(E){let y=t.grid>=0,z=R("grid"),I=z?hn(r,z,[E.end[0],a.elevation+Math.max(ge,E.height),E.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...E.height>.05?[[E.end[0],E.height,E.end[1]]]:[],[E.end[0],ge,E.end[1]],[E.wall[0],ge,E.wall[1]],[s.x,ge,s.z]],O=z?It(r,y?I:[...I].reverse(),Math.abs(t.grid),y?"grid":"export",a):Mi(a.id,y?I:[...I].reverse(),Math.abs(t.grid),y?"grid":"export",0);w.push(...L(O,"grid"))}if(t.battery!==null&&t.battery>0)for(let y of w)y.kind==="battery"&&([y.a,y.b]=[y.b,y.a]);let W=r.settings.roof.solar??[],x=r.settings.roof.strings??[],$=new Map;if(o&&W.length){let y=[...Pt(r),...Dt(r)];for(let z of W){let I=o.get(z.id)??0,O=z.string?x.find(ae=>ae.id===z.string)?.inverter:null,B=O?c.find(ae=>ae.id===O)??null:null;if(!B&&c.length){let ae=Ue(r,z,y),_e=ae?gi(ae,z):[z.u,z.v];B=c.reduce((He,ut)=>!He||Math.hypot(ut.x-_e[0],ut.z-_e[1])<Math.hypot(He.x-_e[0],He.z-_e[1])?ut:He,null)}B&&$.set(B.id,($.get(B.id)??0)+I);let P=B??{floorId:s.floor_id,x:s.x,z:s.z},V=B?1.1+B.h:1.5,ee=R(`solar:${z.id}`),ie=ee?Ia(r,z):null,ue=r.floors.find(ae=>ae.id===P.floorId);ee&&ie&&ue?w.push(...L(It(r,hn(r,ee,ie,[P.x,ue.elevation+V,P.z]),I,"solar",ue),`solar:${z.id}`)):w.push(...L(Ca(r,z,I,P,V),`solar:${z.id}`))}}else t.solar!==null&&!c.length&&w.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,ge,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let y of c){let z=1.1+y.h,I=d.filter(P=>f.get(P.id)===y),O=l(y.id);if(O===void 0){O=$.get(y.id)??(c.length===1?t.solar??0:0);for(let P of I)O+=h(P)}let B=r.floors.find(P=>P.id===y.floorId);if(t.solar!==null||t.battery!==null){let P=R(`inv:${y.id}`),V=P&&B?It(r,hn(r,P,[y.x,B.elevation+z,y.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,O),"inverter",B):vi(r,y,z,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,O),"inverter",0);w.push(...L(V,`inv:${y.id}`))}for(let P of I){let V=h(P);if(t.battery===null&&l(P.id)===void 0)continue;let ee=P.variant==="wall"?.5+P.h:.9,ie=R(`bat:${P.id}`),ue=ie&&B?It(r,hn(r,ie,[y.x,B.elevation+z-.1,y.z],[P.x,B.elevation+ee,P.z]),Math.abs(V),"battery",B):vi(r,y,z-.1,P,ee,Math.abs(V),"battery",0);w.push(...L(V<=0?ue:ue.map(ae=>({...ae,a:ae.b,b:ae.a})).reverse(),`bat:${P.id}`))}}return w}function ur(r){let e=cr(r),t=e?r.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:o}=r.settings,{walls:i}=ct(t.rooms,{exterior:n,interior:o},t.walls??[]),s=lr(r,"grid_point")[0],a=i.filter(f=>f.exterior);if(s){let f=null;for(let _ of a){let k=_.b[0]-_.a[0],w=_.b[1]-_.a[1],E=s.x-e.x,S=s.z-e.z,R=E*w-S*k;if(Math.abs(R)<1e-9)continue;let L=((_.a[0]-e.x)*w-(_.a[1]-e.z)*k)/R,W=((_.a[0]-e.x)*S-(_.a[1]-e.z)*E)/R;if(L<=0||L>1||W<0||W>1||f&&L>=f.t)continue;let x=Math.hypot(k,w)||1;f={q:[e.x+E*L,e.z+S*L],out:[w/x,-k/x],t:L}}let g=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],m=r.floors.flatMap(_=>_.furniture).find(_=>_.id===s.id)?.mount_y??0;return{floorId:t.id,wall:g,end:[s.x,s.z],height:Math.max(0,m)}}let l=null;for(let f of a){let g=f.b[0]-f.a[0],m=f.b[1]-f.a[1],_=g*g+m*m||1,k=Math.min(1,Math.max(0,((e.x-f.a[0])*g+(e.z-f.a[1])*m)/_)),w=[f.a[0]+g*k,f.a[1]+m*k],E=Math.hypot(e.x-w[0],e.z-w[1]),S=Math.sqrt(_);(!l||E<l.d)&&(l={q:w,out:[m/S,-g/S],d:E})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let f of r.floors)for(let g of f.outdoor??[]){let m=g.points.length;for(let _=0;_<m;_++){let k=g.points[_],w=g.points[(_+1)%m],E=w[0]-k[0],S=w[1]-k[1],R=d[0]*S-d[1]*E;if(Math.abs(R)<1e-9)continue;let L=((k[0]-c[0])*S-(k[1]-c[1])*E)/R,W=((k[0]-c[0])*d[1]-(k[1]-c[1])*d[0])/R;L>0&&W>=0&&W<=1&&(u=Math.max(u,Math.min(15,L)))}}let h=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*h,c[1]+d[1]*h],height:0}}function lr(r,e){let t=[];for(let n of r.floors)for(let o of n.furniture)o.type===e&&t.push({id:o.id,type:o.type,floorId:n.id,x:o.x,z:o.z,h:o.h,variant:o.variant??null});return t}var wi=new WeakMap;function $i(r,e,t,n){let o=`${e.id}:${t.join(",")}>${n.join(",")}`,i=wi.get(r);i||wi.set(r,i=new Map);let s=i.get(o);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,c=dr(e,a,l),d=[t,n],u=Ht(e,t),h=Ht(e,n);if(u&&h){let f=dt(c,t),g=je(c,u.id,t),m=dt(c,n),_=je(c,h.id,n);if(g!==null&&_!==null){Ie(c,f,g),Ie(c,m,_);let{dist:k,prev:w}=xi(c,f);if(Number.isFinite(k[m])){d.length=0;for(let E=m;E>=0;E=w[E])d.unshift(c.pos[E])}}}return i.set(o,d),d}function vi(r,e,t,n,o,i,s,a){let l=r.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=$i(r,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],ge,u[1]]),[n.x,o,n.z]];return Mi(l.id,d,i,s,a)}function Mi(r,e,t,n,o){let i=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(i.push({floorId:r,a,b:l,dist:o,power:t,kind:n}),o+=c)}return i}function hn(r,e,t,n){let i=(r.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(ge,e.height);return[t,...e.points.map(s=>[s[0],i,s[1]]),n]}function Ia(r,e){let t=Ue(r,e,[...Pt(r),...Dt(r)]);if(!t)return null;let[n,o]=qe(t,e),i=e.u+n/2,s=t.unbounded?e.v+o/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*s,t.o[1]+t.eu[1]*i+t.es[1]*s,t.o[2]+t.eu[2]*i+t.es[2]*s]}function Ha(r,e,t){let{wall_exterior:n,wall_interior:o}=r.settings,i=dr(e,n,o),s=Ht(e,t),a=s?je(i,s.id,t):null;return a===null?t:i.pos[a]}function It(r,e,t,n,o){let i=[...r.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=o;for(let u of i)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let f=[];if(Math.abs(u[1]-d[1])>.01){let g=Math.min(d[1],u[1]),m=Math.max(d[1],u[1]);for(let _ of i)_.elevation>g+.01&&_.elevation<m-.01&&f.push(_.elevation);u[1]<d[1]&&f.reverse()}for(let g of[...f,u[1]]){let m=(g-d[1])/(u[1]-d[1]||1),_=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*m,g,d[2]+(u[2]-d[2])*m]:u,k=s((d[1]+_[1])/2),w=Math.hypot(_[0]-d[0],_[1]-d[1],_[2]-d[2]);w>1e-4&&a.push({floorId:k.id,a:[d[0],d[1]-k.elevation,d[2]],b:[_[0],_[1]-k.elevation,_[2]],dist:l,power:t,kind:n}),l+=w,d=_}}return a}function Ca(r,e,t,n,o){let i=[...Pt(r),...Dt(r)],s=Ue(r,e,i),a=r.floors.find(_=>_.id===n.floorId);if(!s||!a)return[];let[l,c]=qe(s,e),d=(_,k)=>[s.o[0]+s.eu[0]*_+s.es[0]*k,s.o[1]+s.eu[1]*_+s.es[1]*k,s.o[2]+s.eu[2]*_+s.es[2]*k],u=e.u+l/2,h=a.elevation+ge,f=[],g;if(s.unbounded){let _=d(u,e.v+c/2);g=[_[0],h,_[2]],f.push(g)}else if(s.wall){let _=d(u,e.v);g=[_[0],h,_[2]],f.push(_,g)}else{let _=d(u,e.v),k=ar(r)??a,w=Math.max(a.elevation+.5,Math.min(_[1]-.25,k.elevation+k.height-.12));g=[_[0],w,_[2]],f.push(_)}let m=Ha(r,a,[g[0],g[2]]);f.push([m[0],g[1],m[1]]),Math.abs(g[1]-h)>.05&&f.push([m[0],h,m[1]]);for(let _ of $i(r,a,m,[n.x,n.z]).slice(1))f.push([_[0],h,_[1]]);return f.push([n.x,a.elevation+o,n.z]),It(r,f,t,"solar",a)}function zi(r,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),o=new Array(n).fill(0);for(let s of Object.values(r))for(let a of s){let l=typeof a.start=="number"?a.start:Date.parse(a.start),c=Math.floor((l-t.getTime())/3e5);c<0||c>=n||typeof a.mean!="number"||(o[c]+=Math.max(0,a.mean))}return{kwh:o.reduce((s,a)=>s+a*5/60/1e3,0),peak:Math.max(0,...o),curve:o}}async function Ei(r,e){let t=new Date;t.setHours(0,0,0,0);try{return await r.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function hr(r,e){let n=l=>42-(e>0?l/e*36:0),o=r.map((l,c)=>[c/288*220,n(l)]),i=o.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=o[o.length-1];return{line:i,area:`${i} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Ai(r){return Math.max(1,r.rows*r.cols-(r.skip?.length??0))}var Wa=400;function Ri(r,e){let t=new Map;for(let n of r.settings.roof.solar??[]){let o=Math.min(1,(e.get(n.id)??0)/(Ai(n)*(n.wp??Wa)));t.set(n.id,o>.003?Math.pow(o,.6):0)}return t}function Ti(r,e,t){let n=new Map,o=e.settings.roof.solar??[],i=e.settings.roof.strings??[],s=Ai,a=[],l=0,c=new Map;for(let h of o){let f=h.entity&&h.entity!=="none"?te(r.states[h.entity]):null;if(f!==null){n.set(h.id,Math.max(0,f)),l+=Math.max(0,f);continue}let g=h.string?i.find(_=>_.id===h.string):void 0,m=g?.entity&&g.entity!=="none"?te(r.states[g.entity]):null;if(g&&m!==null){c.set(g.id,[...c.get(g.id)??[],h]);continue}a.push(h)}for(let[h,f]of c){let g=i.find(k=>k.id===h),m=Math.max(0,te(r.states[g.entity])??0),_=f.reduce((k,w)=>k+s(w),0);for(let k of f)n.set(k.id,m*s(k)/_);l+=m}let d=Math.max(0,(t??0)-l),u=a.reduce((h,f)=>h+s(f),0);for(let h of a)n.set(h.id,u?d*s(h)/u:0);return n}var be={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Fi(r,e){if(r==="grid")return be.import;if(r==="export")return be.export;if(r==="solar")return be.solar;if(r==="battery")return be.battery;if(r==="wallbox")return be.wallbox;if(r==="inverter")return(e.solar??0)>5?be.solar:be.battery;let t=[[Math.max(0,e.grid??0),be.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),be.solar],[Math.max(0,e.battery??0),be.battery]],[n]=t.reduce((o,i)=>i[0]>o[0]?i:o);return n>0?t.find(o=>o[0]===n)[1]:be.house}var pr=["neon","blueprint","day"],Wt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var fn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Di(r,e){let t=fn[r].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[o,i]=t[n],[s,a]=t[n-1];if(e<=o){let l=(e-s)/(o-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return t[t.length-1][1]}function Pi(r,e,t){let n=new Map;for(let o of e.floors)for(let i of o.rooms){let s=Ae(r,o,i,t);s!==null&&n.set(i.id,s)}return n}function Ii(r){let e=fn[r].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([o,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((o-t)/(n-t)*100)}%`).join(", ")})`}function ke(r,e){if(!Hn(e))return A(r,`furn_${e}`);let t=de(e);return t?uo(t,r?.language??navigator.language):A(r,"pack_missing_item")}var fr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function mn(r){return r&&r!=="none"?r:null}function Lt(r,e){if(e.type!=="parking")return null;let t=mn(e.entity);if(t){let i=r.states[t];if(!i||!fr.has(i.state.toLowerCase()))return null}let n=e.vehicle??null,o=mn(e.type_entity);if(o&&e.types?.length){let i=(r.states[o]?.state??"").trim().toLowerCase();if(i){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===i)??e.types.find(l=>s(l.state)&&i.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&de(n)?n:null}function mr(r,e){let t=new Map;for(let n of e.floors)for(let o of n.furniture){let i=Lt(r,o);i&&t.set(o.id,i)}return t}function Hi(r){return r.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[mn(t.entity),mn(t.type_entity)])).filter(e=>!!e)}function Ci(r,e){let t=de(e);if(!t)return null;let n=r.scale??1;return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var gn=1800*1e3,La=new Set(["motion","occupancy","presence"]);function Wi(r,e){return e.startsWith("binary_sensor.")&&La.has(String(r.states[e]?.attributes.device_class))}function _n(r,e){let t=[],n=new Set,o=(i,s,a,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:s,x:a,z:l}))};for(let i of e.floors)for(let s of i.placements)if(Wi(r,s.entity_id))o(s.entity_id,i.id,s.x,s.z);else if(F(s.entity_id)==="camera")for(let a of Ke(r,s.entity_id))o(a,i.id,s.x,s.z);for(let i of e.floors)for(let s of i.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ne(s.points);for(let c of oe(r,s.area_id))Wi(r,c)&&o(c,i.id,a,l)}return t}function Li(r,e,t,n=gn){let o=t-n,i=[];for(let[s,a]of Object.entries(r)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=o&&d<=t&&i.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=o&&a<=t)||i.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||i.push({entity:s.entity,time:a})}return i.sort((s,a)=>s.time-a.time)}function Oi(r,e,t,n=gn){let o=new Map(r.map(s=>[s.entity,s])),i=[];for(let s of e){let a=o.get(s.entity);if(!a)continue;let l=i[i.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||i.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return i.slice(-40)}function gr(r,e){return new Date(e).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var Bi='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var bn=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Vi(r,e){let t=[],n=rt(r,e.floors),o=e.floors.length>1;for(let i of e.floors){let s=(d,u)=>i.rooms.find(h=>h.points.length>=3&&j([d,u],h.points))??null,a=(d,u)=>[s(d,u)?.name,o?i.name:null].filter(Boolean).join(" \xB7 ");for(let d of i.rooms){if(d.points.length<3)continue;let[u,h]=Ne(d.points);t.push({kind:"room",name:d.name,where:o?i.name:"",floorId:i.id,roomId:d.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,c=(d,u,h,f)=>{l.has(d)||!r.states[d]||(l.add(d),t.push({kind:"device",name:q(r,d),where:a(u,h),floorId:i.id,roomId:s(u,h)?.id??null,entity:d,icon:F(d),x:u,z:h,y:f}))};for(let d of i.placements)c(d.entity_id,d.x,d.z,d.y??tt(F(d.entity_id)??"sensor",i.height,d.mount));for(let d of i.furniture){let u=n.get(d.id),h=u?.entity??u?.power;h&&c(h,d.x,d.z,Math.min(i.height-.3,Math.max(.5,d.h)))}}return t}function Ni(r,e,t=8){let n=bn(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let o=r.filter(a=>{let l=bn(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),i=bn(e.trim()),s=a=>(bn(a.name).startsWith(i)?0:2)+(a.kind==="room"?0:1);return o.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Oa=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ba=[2200,2700,3200,4e3,5e3,6500],Va=["hs","rgb","rgbw","rgbww","xy"],Na=4,Ki=16,Gi=32,Ka=128;function br(r){let e=r.attributes.supported_color_modes??[],t=e.some(n=>Va.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function wr(r){return((r.attributes.supported_features??0)&Na)!==0&&typeof r.attributes.current_position=="number"}var _r=class extends le{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{F(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return p`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?p`<img src=${n} alt=${q(this.hass,this.entity)} />`:p`<span class="qm-note">${pe(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return A(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:q(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){ve(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,o)=>{let i=o/t*Math.PI*2-Math.PI/2;return p`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=br(e),n=e.state==="on",o=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?Oa.map(s=>p`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Ba.map(s=>p`<button class="qm-swatch" style="background:${Ga(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return p`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?p`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:b}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",o=wr(e),i=(c,d,u,h=!1)=>p`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${d} @click=${u}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return p`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:pe(this.hass,e)}</b>
        </button>
      </div>
      ${o?p`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:b}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Ka&&n!==null?p`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${o=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(o.target.value)})}
      /></label>`:t&(Ki|Gi)?p`<div class="qm-tilt-buttons">
        ${t&Ki?p`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:b}
        ${t&Gi?p`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:b}
      </div>`:b}renderCar(e){let t=e.entities,n=(u,h,f,g={})=>{this.hass.callService(u,h,{entity_id:f,...g})},o=t.lock,i=!!o&&o.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),c=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return p`<p class="qm-car-line">${d||pe(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||o&&s(o)?p`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?n("lock","unlock",o):n("homeassistant","turn_off",o)):i?n("lock","lock",o):n("homeassistant","turn_on",o)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:b}
        ${a?p`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:b}
        ${c?p`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:b}
        ${!i&&!a&&!c?p`<p class="qm-note">${this.t("car_no_controls")}</p>`:b}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",o=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return p`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",o?"turn_on":"media_play_pause")}>
          <span>${o?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?p`<p class="qm-media-title">${s}</p>`:b}
      ${i!==null?p`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:b}
      ${this.renderPlay(e)}`}renderPlay(e){if(!G("sound"))return b;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return b;let o=e.attributes.source;return p`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>p`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>p`<button class="qm-chip ${i===o?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return p`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${pe(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return b;let t=F(this.entity),n=this.car?this.renderCar(this.car):K(e)?p`<p class="qm-note">${pe(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&G("sound")?this.renderMedia(e):this.renderToggle(e);return p`<div class="qm" role="dialog" aria-label=${q(this.hass,this.entity)}>
      <div class="qm-title">${q(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[ye,he`
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
    `]};function Ga(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=(n,o)=>Math.round(n+(o-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",_r);var Ua=new URL(import.meta.url),qa=new URL("./neonplan3d-3d.js?v=8f60094151aa",Ua).href,Ui;function qi(){return Ui??=import(qa),Ui}var ji=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function ja(r,e,t){let n=ji(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let o of e.floors)for(let i of o.rooms)if([i.name,i.area_id??"",i.area_id?r.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(ji).includes(n))return{floorId:o.id,room:i};return null}function Za(r){let e=r.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Zi(r,e){let t=[],n=new Map;for(let o of e.presence){let i=r.states[o.person];if(!i||!o.sensor||i.state!=="home"&&i.state!=="on")continue;let s=r.states[o.sensor];if(!s)continue;let a=ja(r,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Ne(a.room.points),u=-Math.PI/2+.9+l*1.15,h=.75,f=i.attributes.friendly_name??o.person;t.push({id:o.person,name:f,initials:Za(f),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*h,z:d+Math.sin(u)*h})}return t}function Xi(r,e,t,n){let o=new Map,i=s=>!!s&&r.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Jt(r,oe(r,c.area_id)))F(d)==="light"&&a.add(d);for(let c of s.placements)F(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(Re(r,d,"garage").cover??1)<.95;if(c.type==="door")return i(d.contact)||i(d.contact2??null);let u=Re(r,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;o.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>r.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return o}function Yi(r,e){let t=[e.rooms===1?A(r,"floor_rooms_one"):A(r,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(A(r,"floor_lights",{n:e.lightsOn})),e.open&&t.push(A(r,"floor_open",{n:e.open})),e.persons&&t.push(A(r,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function Qi(r,e,t,n=12,o=180){let i=Math.max(o,e),s=Math.max(o*.5625,t),a={cols:1,tile:Math.min(i,s*16/9)};for(let l=1;l<=Math.max(1,r);l++){let c=Math.ceil(r/l),d=(i-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,h=Math.min(d,u);(h>a.tile||l===1)&&(a={cols:l,tile:h})}if(a.tile<o){let l=Math.max(1,Math.floor((i+n)/(o+n)));return{cols:Math.min(l,Math.max(1,r)),tile:o}}return{cols:a.cols,tile:Math.floor(a.tile)}}var Ya=12e4,Ji={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Qa='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>';function es(r,e,t){return r.rooms.find(n=>n.points.length>=3&&j([e,t],n.points))?.id??null}function Ja(r,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&$e(r.states[t])}var vr=class extends le{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;volumeSent=0;holoIds="";shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.renderRoot.addEventListener("wheel",e=>{let t=e;if(!t.target?.closest?.(".fp3d-holo"))return;let n=this.renderRoot.querySelector("canvas");n&&(t.preventDefault(),n.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await qi();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{this._central&&!n.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,o)=>this.fire("room-tap",{floorId:n,roomId:o}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?A(this.hass,"floor_rooms_one"):A(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,o,i)=>this.onDeviceTap(n,o,i),onDeviceHold:(n,o,i)=>this.onDeviceHold(n,o,i),onRoomDoubleTap:(n,o)=>this.onRoomDoubleTap(n,o),onDeviceSwipe:(n,o,i,s,a)=>this.onDeviceSwipe(n,o,i,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,o,i)=>this.fire("furniture-move",{id:n,x:o,z:i}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,o,i)=>this.fire("device-move",{id:n,x:o,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,o,i,s,a,l)=>this.placeHolo(n,o,i,s,a,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...kt()]),this.shownPacks=jt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==jt()&&(this.shownPacks=jt(),t.setPacks([...kt()]),this.hass&&this.building&&t.setParked(mr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let o=JSON.stringify(this.startViewOf()),i=this.shownStartView!==void 0&&this.shownStartView!==o;this.shownStartView=o,t.setStartView(this.startViewOf()),t.setBuilding(this.building),i&&this.floorId===null&&t.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(o=>e.has(o));(n||e.has("hass"))&&this.syncDevices(n),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let o=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==o.entities){this.openingLinks=Qt(o,n.floors),this.furnitureLinks=rt(o,n.floors),this.linkedRegistry=o.entities,this.findIndex=null;let v=[...this.openingLinks.values()].flatMap(H=>[H.cover,H.contact,H.tilt,H.contact2??null,H.tilt2??null,H.position??null,H.tiltAngle??null]),M=Xo(n),D=M.filter(H=>F(H)==="camera").flatMap(H=>Ke(o,H)),N=M.map(H=>pn(o,H)),T=n.energy,C=n.presence.flatMap(H=>[H.person,H.sensor]),X=n.floors.flatMap(H=>H.rooms.flatMap(Y=>oe(o,Y.area_id).filter(Ce=>F(Ce)==="light"))),Z=[...this.furnitureLinks.values()].flatMap(H=>[H.entity,H.power]),ne=n.floors.flatMap(H=>H.furniture.flatMap(Y=>[Y.state_entity??null,Y.state_entity2??null,Y.color_entity??null])),se=n.floors.flatMap(H=>H.furniture.flatMap(Y=>[Y.door_left??null,Y.door_right??null,Y.soc??null,Y.status??null,Y.charge??null,Y.export??null])),re=(n.settings.roof?.windows??[]).flatMap(H=>[H.cover,H.contact,H.tilt]).filter(H=>!!H&&H!=="none"),ce=[...(n.settings.roof?.solar??[]).map(H=>H.entity),...(n.settings.roof?.strings??[]).map(H=>H.entity)].filter(H=>!!H&&H!=="none"),Me=n.floors.flatMap(H=>H.furniture.filter(Y=>Y.type==="robot_vacuum").map(Y=>Xn(o,this.furnitureLinks.get(Y.id)?.entity??null,Y.room_sensor))),Er=n.floors.flatMap(H=>H.furniture.flatMap(Y=>(Y.pictures??[]).flatMap(Ce=>[Ce.entity,...Ce.image.startsWith("camera:")?[Ce.image.slice(7)]:[]]))),pt=this.heatMode==="none"&&!this.roomLabels?[]:n.floors.flatMap(H=>H.rooms.flatMap(Y=>oe(o,Y.area_id).filter(Ce=>Ce.startsWith("sensor."))));this.alertSrc=this.alerts?ti(o,n,this.weatherEntityId):null;let fe=this.alertSrc?ni(this.alertSrc):[],Vt=[...Hi(n.floors),...G("auto_pro")?Wo(o,n.floors):[]],vn=_n(o,n).map(H=>H.entity),yn=At(o,this.weatherEntityId??n.settings.weather_entity),Nt=[...M,...D,...v,...N,...Z,...ne,...se,...Me,...re,...ce,...Er,T.grid,T.solar,T.battery,T.battery_soc,T.consumption,T.tariff,...C,...X,...pt,...fe,...Vt,...vn,yn,"sun.sun"];this.watched=[...new Set(Nt.filter(H=>!!H))],e=!0}if(!(e||this.watched.some(v=>this.shownStates.get(v)!==o.states[v])))return;this.shownStates=new Map(this.watched.map(v=>[v,o.states[v]]));let s=yi(o,n),a=jo(o,n),l=this.furnitureMarkers(o,n,new Set(a.map(v=>v.id)),new Set(s.map(v=>v.powerEntity)));s.push(...l.consumers);let c=ki(o,n,s,Ct(n,v=>this.furnitureLinks?.get(v.id)?.power??null)),d=new Map(s.filter(v=>v.id!==v.powerEntity).map(v=>[v.id,v.power]));this.confirmSet=nt(o,n.floors);let u=this.trail?this.trailNow(o,n):[],h=G("energy_pro"),f=new Set(G("auto_pro")?n.floors.flatMap(v=>v.furniture.filter(M=>M.type==="parking"&&M.car&&Lt(o,M)).map(M=>M.id)):[]);t.setDevices([...[...a,...l.markers].map(v=>{let M=v.show==="no_power"||"energyDevice"in v&&v.energyDevice?null:d.get(v.id)??null,D={...v,power:M,powerText:M===null?void 0:Q(o,M),effect:this.dimmed?!1:v.effect},N=v.ownName&&(v.showName||this.markerNames)?v.ownName:"",T=G("sound")&&this.mediaCardUp(o,v.id)||G("auto_pro")&&!!v.furnitureId&&f.has(v.furnitureId);return{...D,pin:this.showPin(D)&&!T,full:v.show==="always",caption:N}}),...(h&&(this.flows??this._flows)&&!this.dimmed&&c.grid!==null?[this.gridPin(o,n,c.grid)]:[]).filter(v=>!!v),...G("camera_cockpit")&&!this.dimmed?this.detectionPins(o,a):[],...u.map((v,M)=>({id:`trail:${M}`,floorId:v.floorId,roomId:null,x:v.x,z:v.z,y:.3+.4*u.slice(0,M).filter(D=>D.entity===v.entity).length,icon:Bi,name:q(o,v.entity),text:gr(o,v.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),t.setTrail(u),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens),t.setFridgeDoors(qn(o,n.floors)),t.setRobots(this.robotInfos(o,n));let g=new Map;for(let v of n.settings.roof?.windows??[]){let M=C=>C&&C!=="none"?C:null,D=Re(o,{cover:M(v.cover),contact:M(v.contact),tilt:M(v.tilt)},"window"),N=M(v.window)?o.states[M(v.window)]:void 0,T=D.open;if(N&&!K(N)){let C=N.attributes.current_position;T=typeof C=="number"?Math.min(1,Math.max(0,C/100)):N.state==="open"||N.state==="opening"?1:0}g.set(v.id,{open:T,tilt:D.tilt,cover:D.cover??0})}t.setRoofWindows(g),t.setParked(mr(o,n));let m=new Map(n.floors.flatMap(v=>v.openings.map(M=>[M.id,M.type]))),_=new Map([...this.openingLinks].map(([v,M])=>[v,Re(o,M,m.get(v))]));t.setOpeningStates(_),this.setAlerts(this.alertSrc?ri(o,n,this.alertSrc,this.openingLinks):[]);let k=[...a,...l.markers].map(v=>`${v.id}:${v.glow?`${v.glow.level.toFixed(1)}/${v.glow.color.map(M=>M.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[..._].map(([v,M])=>`${v}:${M.open}:${M.cover===null?"-":M.cover.toFixed(1)}`).join(";");if(k!==this.thumbSig){let v=this.thumbSig==="";this.thumbSig=k,v||this.scheduleThumbs(1500)}let w=n.floors.flatMap(v=>v.furniture.filter(M=>M.type==="home_battery").map(M=>({floorId:v.id,x:M.x,z:M.z})))[0]??(n.energy.battery?n.floors.flatMap(v=>v.placements.filter(M=>M.entity_id===n.energy.battery).map(M=>({floorId:v.id,x:M.x,z:M.z})))[0]:null),E=h?Ti(o,n,c.solar):null,S=n.settings.roof.hologram??Ve,R=[...n.settings.roof.solar??[]].sort((v,M)=>M.rows*M.cols-v.rows*v.cols),L=n.settings.roof.strings??[],W=v=>(v.string?L.find(M=>M.id===v.string)?.inverter:null)??null,x=(v,M,D,N)=>{let T=Ue(n,v);if(!T)return null;let[C,X]=qe(T,v),Z=v.u+C/2+M,ne=v.v+X/2+D,se=[T.o[0]+T.eu[0]*Z+T.es[0]*ne,T.o[1]+T.eu[1]*Z+T.es[1]*ne,T.o[2]+T.eu[2]*Z+T.es[2]*ne],re=T.wall?.floorId??(T.unbounded?n.floors.find(ce=>ce.elevation===Math.min(...n.floors.map(Me=>Me.elevation)))?.id??n.floors[0].id:[...n.floors].sort((ce,Me)=>Me.elevation-ce.elevation)[0].id);return{p:[se[0]+T.n[0]*.05,se[1]+T.n[1]*.05,se[2]+T.n[2]*.05],n:[T.n[0],T.n[1],T.n[2]],floorId:re,size:N,roof:!0,views:"house"}},$=[],y=[],z=c.grid!==null||c.battery!==null||c.solar!==null,I=S.place==="free"&&Number.isFinite(S.x)&&Number.isFinite(S.z),O=h&&c.solar!==null&&!I?R.find(v=>v.id===S.field)??R[0]:void 0,B=O?W(O):null,P=!!O&&!!B&&!R.some(v=>v.id!==O.id&&W(v)===B)&&S.right===0&&S.up===0,V=(()=>{if(!P||!O)return 0;let v=Ue(n,O);return v?qe(v,O)[0]/2+1.2:0})(),ee=O?x(O,S.right+V,S.up,S.size):null,ie=this.devicePowers(o,n),ue=h&&c.solar!==null?n.energy.solar?[n.energy.solar]:Ct(n,v=>this.furnitureLinks?.get(v.id)?.power??null).solar:[];if(ee)$.push(ee),y.push({kind:"main",name:A(o,"holo_title"),w:null,dayIds:ue,battery:null});else if(h&&z&&I){let v=0,M=0,D=0,N=1/0,T=n.floors[0];for(let ne of n.floors){ne.rooms.length&&(N=Math.min(N,ne.elevation)),ne.rooms.length&&(!T.rooms.length||ne.elevation+ne.height>T.elevation+T.height)&&(T=ne);for(let se of ne.rooms)for(let[re,ce]of se.points)v+=re,M+=ce,D++}D&&(v/=D,M/=D);let C=S.x-v,X=S.z-M,Z=Math.hypot(C,X);$.push({p:[S.x,(Number.isFinite(N)?N:0)+(S.height??3),S.z],n:Z>.01?[C/Z,0,X/Z]:[1,0,0],floorId:T.id,size:S.size,roof:!0,views:"house"}),y.push({kind:"main",name:A(o,"holo_title"),w:null,dayIds:ue,battery:null})}else if(h&&z&&n.floors.some(v=>v.rooms.length)){let v=-1/0,M=1/0,D=-1/0,N=0,T=n.floors[0];for(let C of n.floors){for(let X of C.rooms)for(let[Z,ne]of X.points)v=Math.max(v,Z),M=Math.min(M,ne),D=Math.max(D,ne);C.rooms.length&&C.elevation+C.height>N&&(N=C.elevation+C.height,T=C)}$.push({p:[v+.6,N+.4,(M+D)/2],n:[1,0,0],floorId:T.id,size:S.size,roof:!0,views:"house"}),y.push({kind:"main",name:A(o,"holo_title"),w:null,dayIds:ue,battery:null})}if(h&&c.solar!==null){let v=new Set;for(let M of n.floors)for(let D of M.furniture.filter(N=>N.type==="inverter")){if(D.plant_card===!1||v.has(D.id))continue;v.add(D.id);let N=R.filter(se=>W(se)===D.id),T=(O&&D.id===B?N.find(se=>se.id!==O.id):null)??N[0],C=this.furnitureLinks?.get(D.id)?.power??null,X=T?x(T,0,0,S.size*.85):null;if(!X||!C)continue;let Z=M.furniture.filter(se=>se.type==="home_battery").sort((se,re)=>Math.hypot(se.x-D.x,se.z-D.z)-Math.hypot(re.x-D.x,re.z-D.z))[0],ne=Z?.soc&&Z.soc!=="none"?Number(o.states[Z.soc]?.state):NaN;$.push(X),y.push({kind:"plant",name:D.name||ke(o,D.type),w:Math.max(0,te(o.states[C])??0),dayIds:[C],battery:Z?{soc:Number.isFinite(ne)?ne:null,w:ie.get(Z.id)??null}:null})}}let ae=S.device_house===!1?"floor":"all";if(h)for(let v of n.floors){for(let M of v.furniture){if(!M.holo)continue;let D=this.furnitureLinks?.get(M.id)?.power??null,N=s.find(C=>C.id===M.id);if(!D&&!N)continue;let T=v.elevation+Se(v,M)+M.h;$.push({p:[M.x,T+.1,M.z],n:[0,1,0],floorId:v.id,size:S.size*.7,roof:!1,views:ae,room:es(v,M.x,M.z)}),y.push({kind:"device",name:M.name||ke(o,M.type),w:N?.power??(D?te(o.states[D]):null),dayIds:D?[D]:[],battery:null})}for(let M of v.placements){if(!M.holo)continue;let D=pn(o,M.entity_id);if(!D)continue;let N=v.elevation+(M.y??.4)+.2;$.push({p:[M.x,N,M.z],n:[0,1,0],floorId:v.id,size:S.size*.7,roof:!1,views:ae,room:es(v,M.x,M.z)}),y.push({kind:"device",name:M.name||q(o,M.entity_id),w:te(o.states[D]),dayIds:[D],battery:null})}}let _e=[];if(G("sound")){let v=new Set,M=(n.settings.roof.hologram??Ve).size,D=(T,C,X,Z,ne,se)=>{let re=o.states[C];if(!re||F(C)!=="media"||v.has(C))return;v.add(C);let ce=this.mediaGrace.get(C),Me=[re.attributes.media_title,re.attributes.app_name,re.attributes.source].find(Y=>typeof Y=="string"&&!!Y.trim())??"";if(!(!K(re)&&(re.state==="playing"||re.state==="paused"&&!!Me||re.state==="on"&&!!re.attributes.source))){ce&&ce.until>Date.now()?(_e.push({...ce.source,playing:!1,level:0}),$.push(ce.anchor),y.push({...ce.card,media:{...ce.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,ce.until-Date.now()+100))):K(re)||(this.mediaGrace.delete(C),_e.push({id:C,floorId:T.id,x:X,z:Z,level:0,playing:!1,members:[]}));return}let pt=re.state==="playing",fe=re.attributes,Vt=typeof fe.volume_level=="number"?Math.min(1,Math.max(0,fe.volume_level)):.5,vn=Array.isArray(fe.group_members)?fe.group_members.filter(Y=>Y!==C):[];_e.push({id:C,floorId:T.id,x:X,z:Z,level:pt?.3+.7*Vt:0,playing:pt,members:vn});let yn=Me||A(o,"holo_media_playing"),Nt={p:[X,T.elevation+ne+.12,Z],n:[0,1,0],floorId:T.id,size:M*.7,roof:!1,views:"all"},H={kind:"media",name:se,w:null,dayIds:[],battery:null,media:{id:C,title:yn,artist:typeof fe.media_artist=="string"?fe.media_artist:typeof fe.media_album_name=="string"?fe.media_album_name:"",picture:typeof fe.entity_picture=="string"?fe.entity_picture:null,volume:Math.round(Vt*100),playing:pt}};$.push(Nt),y.push(H),this.mediaGrace.set(C,{until:Date.now()+45e3,card:H,source:_e[_e.length-1],anchor:Nt})},N=(T,C)=>{for(let X of T.furniture){if((X.entity!=null&&X.entity!=="none")!==C)continue;let Z=this.furnitureLinks?.get(X.id)?.entity;Z&&D(T,Z,X.x,X.z,Se(T,X)+X.h,X.name||ke(o,X.type))}};for(let T of n.floors)N(T,!0);for(let T of n.floors)for(let C of T.placements)D(T,C.entity_id,C.x,C.z,C.y??1.1,C.name||q(o,C.entity_id));for(let T of n.floors)N(T,!1)}if(G("auto_pro")){let v=(n.settings.roof.hologram??Ve).size;for(let M of n.floors)for(let D of M.furniture){if(D.type!=="parking"||!D.car)continue;let N=Lt(o,D);if(!N)continue;let T=tn(o,D);if(T.soc===null&&T.range===null&&T.locked===null&&T.climateOn===null)continue;let C=Ci(D,N),X=Se(M,D)+(C?.h??1.6);$.push({p:[D.x,M.elevation+X+.25,D.z],n:[0,1,0],floorId:M.id,size:v*.7,roof:!1,views:"all"});let Z=T.entities;y.push({kind:"car",name:D.name||ke(o,N),w:null,dayIds:[],battery:null,car:{spot:D.id,soc:T.soc,range:T.range,rangeUnit:T.rangeUnit,chargingW:T.chargingW,charging:T.charging,locked:T.locked,climateOn:T.climateOn,lock:Z.lock,climate:Z.climate,charge:Z.charging&&/^(switch|input_boolean)\./.test(Z.charging)?Z.charging:null}})}}t.setSound(_e),t.setAnchors($),JSON.stringify(y)!==JSON.stringify(this._holos)&&(this._holos=y),t.setSolarLevels(E&&!this.dimmed?Ri(n,E):new Map),t.setFlows(!h||!(this.flows??this._flows)||this.dimmed?[]:Si({building:n,consumers:s,summary:c,battery:w??null,fieldPower:E,devicePower:this.devicePowers(o,n)}).map(v=>({floorId:v.floorId,a:v.a,b:v.b,dist:v.dist,power:v.power,color:Fi(v.kind,c)})));let He=[];t.setPersons(He);let ut=Xi(o,n,this.openingLinks,He);t.setFloorInfo(new Map([...ut].map(([v,M])=>[v,Yi(o,M)])));let Ot=o.states["sun.sun"]?.attributes,Bt=typeof Ot?.elevation=="number"?Ot.elevation:null;t.setSun(Bt!==null&&typeof Ot?.azimuth=="number"?{elevation:Bt,azimuth:Ot.azimuth}:null);let Sr=this.weather&&!this.dimmed&&G("weather")?Qo(o,At(o,this.weatherEntityId??n.settings.weather_entity)):null,ht=Sr?Jo(Sr,n.settings.weather_effects):null;this.cloud=ht?.cloud??0,this._sky=(Bt===null?0:Math.min(1,Math.max(0,(Bt+4)/16)))*(1-.45*this.cloud);let ss=ht?ht.sky:(n.settings.weather_effects??["sky"]).includes("sky");t.setWeather(this.weather&&!this.dimmed&&G("weather")?{...ht??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:ss}:null),this.watchLightning(!!ht?.lightning),this.applyTint();let $r=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify($r)!==JSON.stringify(this._energy)&&(this._energy=$r);let Mr=s.some(v=>v.wallbox)?s.filter(v=>v.wallbox).reduce((v,M)=>v+M.power,0):null,zr=n.floors.flatMap(v=>v.furniture.filter(M=>M.type==="inverter")).map(v=>{let M=this.furnitureLinks?.get(v.id)?.power,D=M?te(o.states[M]):null;return D===null?null:{name:v.name||ke(o,v.type),w:Math.max(0,D)}}).filter(v=>!!v);JSON.stringify(zr)!==JSON.stringify(this._plants)&&(this._plants=zr),Mr!==this._wallboxW&&(this._wallboxW=Mr),this.watchSolarDay([...new Set(y.flatMap(v=>v.dayIds))])}devicePowers(e,t){let n=new Map;for(let o of t.floors)for(let i of o.furniture){if(i.type!=="inverter"&&i.type!=="home_battery")continue;let s=this.furnitureLinks?.get(i.id)?.power,a=i.type==="home_battery"&&i.charge&&i.charge!=="none"?te(e.states[i.charge]):null,l=s?te(e.states[s],i.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&n.set(i.id,l)}return n}detectionPins(e,t){let n=[];for(let o of t){if(!o.model?.startsWith("camera"))continue;let i=Date.now(),s=Ke(e,o.id).filter(h=>{let f=e.states[h];return f?f.state==="on"?!0:f.state==="off"&&!!f.last_changed&&i-Date.parse(f.last_changed)<Ya:!1}),a=new Map;for(let h of s){let f=Zo(e,h);a.has(f)||a.set(f,h)}a.size>1&&a.delete("motion");let l=(o.rotation??0)*Math.PI/180,c=[-Math.sin(l),Math.cos(l)],d=o.model==="camera_ceiling",u=0;for(let[h,f]of a){let g=e.states[f],m=g?.last_changed?gr(e,Date.parse(g.last_changed)):"";n.push({id:`detect:${f}`,floorId:o.floorId,roomId:o.roomId,x:o.x+(d?0:c[0]*1.1),z:o.z+(d?0:c[1]*1.1),y:1.4+.4*u++,icon:Ji[h]??Ji.motion,name:q(e,f),text:`${A(e,`detect_${h}`)}${m?` \xB7 ${m}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let o=ur(t);if(!o)return null;let i=Math.abs(n)<5;return{id:"grid",floorId:o.floorId,roomId:null,x:o.end[0],z:o.end[1],y:.9+o.height,icon:Qa,name:A(e,"holo_grid"),text:i?Q(e,0):`${A(e,n<0?"energy_grid_export":"energy_grid_import")} ${Q(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}watchSolarDay(e){let t=e.join(",");if(t===this.holoIds)return;if(this.holoIds=t,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let n=async()=>{if(!this.hass||document.hidden)return;let o=await Ei(this.hass,e);this.holoIds===t&&(this._rows=o)};n(),this.holoTimer=setInterval(()=>{n()},3e5)}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,o,i,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&o!==this._holoOn&&(this._holoOn=o);let d=this._holos[e],u=(this.building?.settings.roof.hologram??Ve).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(o=!1);let h=!o;if(a.hidden!==h&&(a.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!o)return;let f=i*.8,g=34*f,m=46*f,_=t+(s?g:-g),k=n-m,w=this.holoSizes.get(e),E=performance.now();(!w||E-w.at>2e3)&&(w={w:a.offsetWidth||184,h:a.offsetHeight||90,at:E},this.holoSizes.set(e,w));let S=w.w*f,R=w.h*f,L=s?_:_-S,W=L+S;for(let $=0;$<6;$++){let y=this.holoBoxes.find(z=>L<z.x1+4&&W>z.x0-4&&k-R<z.y1+4&&k>z.y0-4);if(!y)break;k=y.y0-6}this.holoBoxes.push({i:e,x0:L,x1:W,y0:k-R,y1:k});let x=s||(this.building?.settings.roof.hologram??Ve).mirror!==!1;if(a.style.transform=x?`translate(${_.toFixed(1)}px, ${k.toFixed(1)}px) scale(${(s?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${L.toFixed(1)}px, ${k.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let $=l.firstElementChild,y=l.lastElementChild;$?.setAttribute("x1",t.toFixed(1)),$?.setAttribute("y1",n.toFixed(1)),$?.setAttribute("x2",_.toFixed(1)),$?.setAttribute("y2",k.toFixed(1)),y?.setAttribute("cx",t.toFixed(1)),y?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy;if(!(G("energy_pro")||G("sound")||G("auto_pro"))||this.roomId&&!(this.building?.settings.roof.hologram??Ve).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return b;let t=this.floorId===null||(this.building?.floors.length??0)<=1,n=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&t;return this._holos.map((o,i)=>o.kind==="car"?this.renderCarCard(o,i):o.kind==="media"?this.renderMediaCard(o,i):o.kind==="device"?this.renderDeviceCard(o,i):n?this.renderHoloCard(o,i,e):b)}renderCarCard(e,t){let n=this.hass,o=g=>A(n,g),i=e.car,s=!this.mediaFolded.has(i.spot),a=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(g,m,_)=>{n.callService(g,m,{entity_id:_})},c=(g,m)=>g.startsWith("climate.")?l("climate",m?"turn_on":"turn_off",g):l("homeassistant",m?"turn_on":"turn_off",g),d=()=>{if(!i.lock)return;let g=i.lock.startsWith("lock.");if(i.locked){if(!confirm(o("car_unlock_confirm")))return;g?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else g?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},u=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",h=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),f=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return p`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${o("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${J(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${Q(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?p`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${u}"></i></div>`:b}
          ${s&&(h||f||i.charge)?p`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?p`<button title=${i.locked?o("car_unlock_btn"):o("car_lock_btn")} @click=${d}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:b}
                ${f?p`<button class=${i.climateOn?"fp3d-holo-on":""} title=${o("car_climate")} @click=${()=>c(i.climate,!i.climateOn)}>❄</button>`:b}
                ${i.charge?p`<button class=${i.charging?"fp3d-holo-on":""} title=${o("car_charging")} @click=${()=>c(i.charge,!i.charging)}>⚡</button>`:b}
              </div>`:b}
        </div>
      </div>`}renderMediaCard(e,t){let n=this.hass,o=h=>A(n,h),i=e.media,s=!this.mediaFolded.has(i.id),a=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(h,f={})=>{n.callService("media_player",h,{entity_id:i.id,...f})},c=this.mediaVolume.get(i.id);c&&(Math.abs(c.v-i.volume)<=2||Date.now()-c.at>3e4)&&this.mediaVolume.delete(i.id);let d=this.mediaVolume.get(i.id)?.v??i.volume,u=(h,f)=>{this.mediaVolume.set(i.id,{v:h,at:Date.now()}),this.requestUpdate(),(f||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:h/100}))};return p`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${i.playing?`\u25CF ${o("holo_media_playing")}`:o("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?p`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:p`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?p`<span>${i.artist}</span>`:b}</div>
        </div>
        ${s?p`<div class="fp3d-holo-media-controls">
                <button aria-label=${o("previous")} @click=${()=>l("media_previous_track")}>⏮</button>
                <button aria-label=${o("play_pause")} @click=${()=>l("media_play_pause")}>${i.playing?"\u23F8":"\u25B6"}</button>
                <button aria-label=${o("next")} @click=${()=>l("media_next_track")}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(d)}
                  aria-label=${o("volume")}
                  @input=${h=>u(Number(h.target.value),!1)}
                  @change=${h=>u(Number(h.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${d} %</span>
              </div>`:b}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,o=c=>A(n,c),i=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?hr(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return p`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">● ${o("holo_live")}</span></div>
        <div class="fp3d-holo-big"><b>${Q(n,e.w??0)}</b><span>${o("holo_dev_now")}</span></div>
        ${i&&s?p`<div class="fp3d-holo-sub">${o("holo_today")} <b>${J(n,s.kwh,1)} kWh</b> · ${o("holo_peak")} <b>${Q(n,s.peak)}</b></div>`:b}
        ${i&&a?yt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:b}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?zi(t):null}renderHoloCard(e,t,n){let o=this.hass,i=m=>A(o,m),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",c=l&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid??0)/n.consumption)*100))):null,d=a&&a.curve.length>1?hr(a.curve,a.peak):null,u=(new Date().getHours()+new Date().getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=l?n.solar??n.consumption??0:e.w??0,g=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return p`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">● ${i("holo_live")}</span></div>
        <div class="fp3d-holo-big"><b>${Q(o,f)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?p`${l&&this._plants.length>1?p`<div class="fp3d-holo-plants">${this._plants.map(m=>p`<span>${m.name}</span><b>${Q(o,m.w)}</b>`)}</div>`:b}
              ${a?p`<div class="fp3d-holo-sub">${i("holo_today")} <b>${J(o,a.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${Q(o,a.peak)}</b></div>`:b}
              ${d?yt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${u}" y1="2" x2="${u}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:b}
              <div class="fp3d-holo-grid">
                ${g?p`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${g.soc!==null?`${Math.round(g.soc)} %`:Q(o,Math.abs(g.w??0))}</b>
                      ${g.w!==null&&Math.abs(g.w)>=5?p`<span>${g.w<0?"\u25B2":"\u25BC"} ${Q(o,Math.abs(g.w))}</span>`:b}
                    </div>`:b}
                ${l&&n.grid!==null?p`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${Q(o,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:b}
                ${l&&n.consumption!==null?p`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${Q(o,n.consumption)}</b></div>`:b}
                ${l&&this._wallboxW!==null?p`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${Q(o,this._wallboxW)}</b></div>`:b}
              </div>
              ${c!==null?p`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${c} %</b></div>`:b}`:b}
      </div>
    </div>`}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),n=e.filter((o,i)=>!this.seenAlerts.has(t[i]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,o=this.hass,i=n?.floors.find(d=>d.id===e),s=i?.rooms.find(d=>d.id===t);if(!n||!o||!i||!s)return;let a=new Set(oe(o,s.area_id).filter(d=>F(d)==="light"));for(let d of i.placements)F(d.entity_id)==="light"&&j([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of i.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Cn(d.type)&&j([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>o.states[d]?.state==="on");o.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let o=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Pi(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,o=new Map([...l].map(([c,d])=>[c,Di(a,d)]))}let i=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let c=Ae(n,a,l,"temperature"),d=Ae(n,a,l,"humidity"),u=Ae(n,a,l,"co2"),h=[c!==null?`${J(n,Je(n,c),1)} ${we(n)}`:null,d!==null?`${J(n,d,0)} %`:null,u!==null?`${J(n,u,0)} ppm`:null].filter(f=>!!f);h.length&&i.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){o??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let c=oi(l.kind).map(d=>d*a);if(l.roomId)o.set(l.roomId,c);else for(let d of t.floors)for(let u of d.rooms)o.set(u.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let s=o?[...o].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(o))}furnitureMarkers(e,t,n,o){let i=[],s=[],a=new Map,l=new Map;for(let u of t.floors)for(let h of u.furniture){let f=this.furnitureLinks.get(h.id),g=this.stateFaces(e,h);if(g.length&&a.set(h.id,{color:g[0].color,level:g[0].level,faces:g}),Cn(h.type)){i.push(this.lampMarker(e,u,h,f?.entity??null));continue}let _=h.type==="parking"&&G("auto_pro")&&!!h.car?tn(e,h):null,k=h.type==="home_battery"?h.soc:h.type==="wallbox"?h.status:h.type==="parking"&&_?h.car?.device??_.entities.soc:null,w=k&&k!=="none"?k:null,E=f??(w?{entity:null,power:null}:void 0);if(!E)continue;let S=h.type==="home_battery"?w??E.entity??E.power:E.entity??E.power??w;l.set(h.id,S);let R=E.entity?e.states[E.entity]:void 0,L=h.type==="meter"?t.energy.grid_invert&&!h.export:h.type==="home_battery"?t.energy.battery_invert&&!h.charge:!1,W=E.power?te(e.states[E.power],L):null,x=h.type==="home_battery"&&h.charge&&h.charge!=="none"?h.charge:h.type==="meter"&&h.export&&h.export!=="none"?h.export:null,$=x?te(e.states[x]):null;$!==null&&(W=Math.max(0,W??0)-Math.max(0,$)),E.power&&W!==null&&!o.has(E.power)&&(o.add(E.power),s.push({id:S,powerEntity:E.power,floorId:u.id,x:h.x,z:h.z,power:Math.max(0,W),wallbox:h.type==="wallbox"||void 0}));let y=(W??0)>10||R?.state==="on"||R?.state==="running"||Gn(R)&&$e(R);if(_&&Lt(e,h)){let P=[];if(_.soc!==null){let V=_.soc>=50?[.3,1,.5]:_.soc>=20?[1,.8,.25]:[1,.3,.25];P.push({part:"band",color:V,level:_.charging?1:.6})}if(_.locked===!1&&P.push({part:"lights",color:[1,.42,.02],level:1}),_.climateOn){let V=_.entities.climate?e.states[_.entities.climate]:void 0,ee=!!V&&(V.attributes.hvac_action==="cooling"||V.state==="cool");P.push({part:"cabin",color:ee?[.45,.8,1]:[1,.55,.22],level:.35})}P.length&&a.set(`${h.id}:vehicle`,{color:P[0].color,level:P[0].level,faces:P})}if(h.type==="radiator"&&R&&F(R.entity_id)==="climate"){let P=R.attributes;if(P.hvac_action==="heating"){let V=typeof P.temperature=="number"&&typeof P.current_temperature=="number"?P.temperature-P.current_temperature:1;a.set(h.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,V))})}}else(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&y&&a.set(h.id,{color:[.3,.85,1],level:.8});let z=de(h.type),I=!!z&&!z.light&&z.parts.some(P=>P.glow);if(R&&I&&G("sound")&&F(R.entity_id)==="media"&&R.state==="playing"&&!en(h.type)){let P=typeof R.attributes.volume_level=="number"?R.attributes.volume_level:.5;a.set(h.id,{color:Zn(R)??[.22,.88,1],level:.5+.5*P,ring:!0,plain:!0})}if(R&&en(h.type)){let P=G("screens"),V=F(R.entity_id)==="light"?et(R):null,ee=F(R.entity_id)==="media"&&["playing","on","paused","idle"].includes(R.state),ie=P&&F(R.entity_id)==="media"?Zn(R):V?V.color:$e(R)||ee?[.22,.88,1]:null,ue=P&&F(R.entity_id)==="media"?R.attributes.entity_picture??null:null;ie&&a.set(h.id,{color:ie,level:R.state==="playing"?1:.6,picture:ue,ring:I&&G("sound")&&R.state==="playing"})}if(n.has(S))continue;n.add(S);let O=E.entity?F(E.entity):null,B=u.rooms.find(P=>P.points.length>=3&&j([h.x,h.z],P.points));i.push({id:S,floorId:u.id,roomId:B?.id??null,x:h.x,z:h.z,y:el(h)+Se(u,h),icon:h.icon?on(h.icon):Et(O??"switch"),name:h.name||(E.entity?q(e,E.entity):ke(e,h.type)),ownName:h.name||void 0,showName:!!h.show_name,text:_?this.carText(e,_,!!R&&!fr.has(R.state.toLowerCase())):h.type==="home_battery"?this.batteryText(e,w,W):h.type==="wallbox"?this.wallboxText(e,w,W):h.type==="meter"?this.meterText(e,W):R?pe(e,R):W!==null?Q(e,Math.max(0,W)):"",active:_?_.charging:R?$e(R):(W??0)>5,unavailable:R?K(R):!1,glow:null,furnitureId:h.id,energyDevice:h.type==="inverter"||h.type==="home_battery"||h.type==="wallbox"||h.type==="meter"||!!_,show:h.marker??(_?"always":void 0),fromFurniture:!0})}this.cameraScreens=0;let c=qn(e,t.floors),d=G("screens");for(let u of t.floors)for(let h of u.furniture){if(!d||!h.pictures?.length||!en(h.type)||h.type==="fridge_smart"&&c.get(h.id)?.right)continue;let f=h.pictures.find(_=>Po(e,_));if(!f)continue;let g=this.pictureUrl(f.image),m=h.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];g&&a.set(h.id,{color:m,level:1,picture:g,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:i,consumers:s,screens:a,targets:l}}trailNow(e,t){let n=Date.now(),o=_n(e,t),i=o.map(s=>{let a=e.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return Oi(o,Li(this.trailRows,i,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!G("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!G("camera_cockpit")){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let o=_n(t,n).map(i=>i.entity);if(o.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-gn).toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||K(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),to(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(n.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||Se(e,o)>.12)return!1;let i=de(o.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:j([o.x,o.z],t)||Xt(o).some(s=>j(s,t))}).map(o=>Xt(o))}robotInfos(e,t){let n=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,d=i.d*.14,u=[i.x-Math.sin(c)*d,i.z+Math.cos(c)*d],h=o.rooms.filter(_=>_.points.length>=3),g=(l==="cleaning"?Lo(e,h,s,Xn(e,s,i.room_sensor)):null)??h.find(_=>j(u,_.points)),m=l==="cleaning"&&g?this.robotObstacles(o,g.points):[];n.push({id:i.id,floorId:o.id,rest:u,restHeading:-c,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:m})}return n}batteryText(e,t,n){let o=t?Number(e.states[t]?.state):Number.NaN,i=[];return Number.isFinite(o)&&i.push(`${J(e,o,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${Q(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?Q(e,0):`${A(e,t<0?"energy_grid_export":"energy_grid_import")} ${Q(e,Math.abs(t))}`}wallboxText(e,t,n){let o=t?e.states[t]:void 0,i=String(o?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(i),a=o?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?A(e,"wallbox_charging"):a?A(e,"wallbox_plugged"):o&&!K(o)&&!o.entity_id.startsWith("binary_sensor.")?pe(e,o):"",c=n!==null&&n>50?Q(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],o=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,s]of o){if(!i||i==="none")continue;let a=e.states[i];if(!a||K(a)||!($e(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=F(i)==="light"?et(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(e,t,n){let o=s=>A(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${o("car_away")}${s}`}let i=[];return t.soc!==null&&i.push(`${J(e,t.soc,0)} %`),t.range!==null&&i.push(`${J(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${Q(e,t.chargingW)}`:`\u26A1 ${o("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}lampMarker(e,t,n,o){let i=o?e.states[o]:void 0,s=de(n.type),a=vo[n.type]??s?.light??"floor",l=t.rooms.some(f=>f.points.length>=3&&j([n.x,n.z],f.points)),c=a==="strip"&&!l?xt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?Se(t,n):a==="table"?Zt(t,n.x,n.z):a==="bollard"||a==="garden"?xt(t,n.x,n.z):0,d=t.rooms.find(f=>f.points.length>=3&&j([n.x,n.z],f.points)),u=t.height,h=s?s.mount==="ceiling"?Math.max(.5,c-.15):c+n.h+.2:{ceiling:u-.3,downlight:u-.25,spot:u-.35,panel:u-.25,pendant:Math.max(.6,u-n.h-.25),floor:c+n.h+.25,uplight:c+n.h+.25,table:c+n.h+.2,wall:c+n.h+.2,strip:n.upright?c+n.w+.15:Math.max(.3,c-.2),bollard:c+n.h+.25,garden:c+n.h+.25}[a];return{id:o??`lamp:${n.id}`,floorId:t.id,roomId:d?.id??null,x:n.x,z:n.z,y:h,icon:Et("light"),name:n.name||(o?q(e,o):ke(e,n.type)),text:i?pe(e,i):"",active:i?$e(i):!1,unavailable:i?K(i):!1,glow:i?er(et(i,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,size:[n.w,n.d,n.h],base:c,pickable:!!o,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?c:c+n.h*.85:void 0,effect:!!i&&i.state==="on"&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(i.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=F(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let o=n.cover??n.contact??n.tilt;o&&e.set(t,o)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return b;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),n=this._thumbsCompact,o=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return p`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${A(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${A(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${A(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${o}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${A(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>p`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?b:p`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(G("auto_pro")&&this.hass&&this.building)for(let i of this.building.floors)for(let s of i.furniture){if(s.type!=="parking"||!s.car)continue;let a=tn(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:a};return}}let o=F(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"||o==="camera"?this._menu={entity:e,x:t,y:n}:ve(this,e)}onDeviceSwipe(e,t,n,o,i){let s=this.hass?.states[e];if(t==="start"){if(!s||K(s)||this.confirmSet.has(e))return!1;let l=F(e);if(l==="light"&&br(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:o,y:i},!0}if(l==="cover"&&wr(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:o,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return b;let t=this._alerts.slice(0,3);return p`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>p`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${rr(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${rr(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?p`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:b}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return b;let t=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this.roomId),n=t?oe(this.hass,t.area_id).filter(i=>F(i)==="scene"||F(i)==="script").slice(0,6):[];if(!n.length)return b;let o=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return p`<div class="fp3d-scenes">
      ${n.map(i=>p`<button class="fp3d-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${q(this.hass,i,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return b;if(this._find===null)return p`<button class="fp3d-find-btn" title=${A(this.hass,"find")} aria-label=${A(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Ni(this.findIndex??=Vi(this.hass,e),this._find);return p`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${A(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${A(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?p`<div class="fp3d-find-list">
            ${t.length?t.map(n=>p`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?rn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?p`<small>${n.where}</small>`:b}</span>
                  </button>`):p`<p>${A(this.hass,"find_none")}</p>`}
          </div>`:b}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null)return b;let n=(m,_)=>A(t,m,_),o=p`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return o;let i=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(m=>Yn(t,m).lights),l=s.flatMap(m=>Yn(t,m).covers),c=a.filter(m=>t.states[m]?.state==="on").length,d=!i,u=(m,_,k,w)=>{if(w.length){if(d&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(_,k,{entity_id:w})}},h=(m,_,k,w,E)=>p`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!E.length} @click=${()=>u(m,k,w,E)}>
        ${this._armed===m?n("central_sure"):n(_)}
      </button>`,f=(e.settings.favorites??[]).filter(m=>t.states[m]),g=this.buttons??e.settings.buttons??[];return p`${o}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${i?i.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?p` <small>${c}/${a.length}</small>`:b}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(m=>t.states[m]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(m=>t.states[m]?.state==="on"))}
        </div>
        ${l.length?p`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:b}
        <b>${n("central_favorites")}</b>
        ${f.length?p`<div class="fp3d-central-favs">
              ${f.map(m=>{let[_,k]=Oo(m),w=t.states[m],E=_==="homeassistant"&&w?.state==="on";return p`<button
                  class="fp3d-chip"
                  aria-pressed=${E||this._sceneFired===m}
                  ?disabled=${K(w)}
                  @click=${()=>{t.callService(_,k,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${q(t,m)}
                </button>`})}
            </div>`:g.length?b:p`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${g.length?p`<div class="fp3d-central-favs">
              ${g.map(m=>p`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Ja(t,m)}
                  @click=${_=>{Bo(t,_.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?p`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:b}${m.label}
                </button>`)}
            </div>`:b}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||F(t)!=="media")return!1;if((this.mediaGrace.get(t)?.until??0)>Date.now()&&K(n))return!0;let o=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(i=>typeof i=="string"&&!!i.trim());return!K(n)&&(n.state==="playing"||n.state==="paused"&&o)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return b;let e=A(this.hass,this.clean?"controls_show":"controls_hide");return p`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?yt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:yt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return b;let t=e.kind==="light"&&e.value<=0;return p`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${q(this.hass,e.entity)}</span>
      <b>${t?A(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n)return;if(!G("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let o=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!o)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===o?0:300;i&&(this.throughFloor=o,this.fire("floor-tap",{floorId:o})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},i)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?b:p`<div class="fp3d-pro" role="dialog">
      <b>${A(this.hass,"pro_title")}</b>
      <span>${A(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${A(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${Go(this.hass.language)} target="_blank" rel="noopener">${A(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${Uo(this.hass.language,this._proHint)} target="_blank" rel="noopener">${A(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${A(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${A(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building)return b;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!G("camera_cockpit"))return p`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${A(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${A(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>F(d)==="camera"))];this.watchCameras(!0);let o=d=>{let u=e.states[d],h=u?.attributes.entity_picture;return h&&u&&!K(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=d=>{let u=e.states[d];return p`${q(e,d)}${u?.state==="recording"?p` <b>● ${A(e,"state_recording")}</b>`:b}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=o(s),u=this.liveFor(s),h=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return p`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${A(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${h}>${A(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?p`<img src=${d} alt="" />`:p`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Qi(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return p`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${A(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${A(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=o(d),h=Ke(e,d).some(f=>e.states[f]?.state==="on");return p`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${A(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?p`<img src=${u} alt="" />`:p`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(o=>{if(this.live!==t)return;let i=o.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});i.hass=this.hass,t.el=i,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return b;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,o=n&&!K(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return p`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${o?p`<img class="fp3d-through-img" src=${o} alt="" />`:b}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${q(this.hass,e.entity)}</span>
        <span class="fp3d-still">${A(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${A(this.hass,"through_blend")}
          @input=${i=>this._blend=Number(i.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${A(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return b;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,o=t?.clientHeight??600,i=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return p`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${G("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${G("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e==="grid"){let i=this.building,s=i?i.energy.grid??Ct(i,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&ve(this,s);return}if(e.startsWith("detect:")){ve(this,e.slice(7));return}let o=F(e);if(o==="cover"||o==="camera"){this._menu={entity:e,x:t,y:n};return}if(o&&Ro.has(o)){if(this.confirmSet.has(e)&&!confirm(A(this.hass,"confirm_switch",{name:q(this.hass,e)})))return;Yo(this.hass,e)}else ve(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!G("energy_pro")||!e||this.roomId||!this.showEnergy)return b;let t=o=>A(this.hass,o),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:Q(this.hass,e.consumption)}),e.grid!==null){let o=e.grid<0;n.push({cls:o?"export":"grid",label:t(o?"energy_grid_export":"energy_grid_import"),value:Q(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:Q(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?Q(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:o.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${J(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),p`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?b:n.map(o=>p`<div class="fp3d-energy-item fp3d-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?b:p`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?b:p`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return b;let e=fn[this.heatMode],t=this.heatMode==="temperature",n=t?Je(this.hass,e.stops[0][0]):e.stops[0][0],o=t?Je(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?we(this.hass):e.unit,s=a=>A(this.hass,a);return p`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Ii(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${J(this.hass,n,0)} ${i}</span><span>${J(this.hass,o,0)} ${i}</span></span>
      ${this.heatValues.size?b:p`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Wt[this.theme]??Wt.neon,t=this._sky;return e.night[0].map((n,o)=>Math.round(n+(e.day[0][o]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Wt[this.theme]??Wt.neon,o=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return p`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""}"
      style=${o}
    >
      ${this._error?p`<p class="fp3d-error">${this._error}</p>`:b} ${this.clean?b:this.renderEnergy()} ${this.renderHologram()} ${this.clean?b:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean?b:p`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean?b:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?p`<span class="fp3d-stats"
            ><b>${this._stats.fps?A(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):A(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?p`(${this._stats.busy.map(i=>A(this.hass,`stats_busy_${i}`)).join(", ")})`:b} ·
            ${A(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${A(this.hass,this._stats.low?"stats_low":"stats_full",{r:J(this.hass,this._stats.pixelRatio,2)})}</span
          >`:b}
    </div>`}static styles=[ye,Fe,he`
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
        max-width: 320px;
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",vr);function Q(r,e){return Math.abs(e)>=1e3?`${J(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function el(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}var tl=.25,ts=r=>Math.round(r*1e3)/1e3;function yr(r,e,t,n,o){let i=r.rooms.find(s=>s.points.length>=3&&j([e,t],s.points));return!i||j([n,o],i.points)?[n,o]:j([n,t],i.points)?[n,t]:j([e,o],i.points)?[e,o]:[e,t]}function ns(r,e,t,n=tl){let o=r.rooms.find(c=>c.points.length>=3&&j([e.x,e.z],c.points));if(!o)return null;let i=o.points,s=Ee(i)>=0?1:-1,a=t/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],h=Math.hypot(u[0]-d[0],u[1]-d[1]);if(h<.3)continue;let f=[(u[0]-d[0])/h,(u[1]-d[1])/h],g=[-f[1]*s,f[0]*s],m=(e.x-d[0])*f[0]+(e.z-d[1])*f[1];if(m<0||m>h)continue;let k=r.rooms.some(x=>x.id!==o.id&&x.points.some(($,y)=>{let z=x.points[(y+1)%x.points.length],I=Math.abs(($[0]-d[0])*g[0]+($[1]-d[1])*g[1]),O=Math.abs((z[0]-d[0])*g[0]+(z[1]-d[1])*g[1]);return I<.02&&O<.02}))?a:0,w=(e.x-d[0])*g[0]+(e.z-d[1])*g[1]-k,E=Math.atan2(-g[0],g[1])*180/Math.PI,S=x=>Math.abs((e.rotation-x+540)%360-180),L=[{rotation:E,extent:e.d/2},{rotation:E+90,extent:e.w/2},{rotation:E-90,extent:e.w/2}].reduce((x,$)=>S($.rotation)<S(x.rotation)?$:x);if(S(L.rotation)>50)continue;let W=w-L.extent;Math.abs(W)>n||l&&Math.abs(W)>=Math.abs(l.gap)||(l={x:ts(e.x-g[0]*W),z:ts(e.z-g[1]*W),rotation:(Math.round(L.rotation)%360+360)%360,gap:W})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var U={get(r){try{return localStorage.getItem(`neonplan3d.${r}`)}catch{return null}},set(r,e){try{localStorage.setItem(`neonplan3d.${r}`,e)}catch{}}},kr=class extends le{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new Qe(this);constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=U.get("walls")==="cut"?"cut":"auto",this._explode=U.get("explode")!=="0",this._keepRoof=U.get("roof")==="1";let e=U.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=U.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=U.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=U.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none";let o=U.get("theme");this._theme=o&&pr.includes(o)?o:"neon";let i=U.get("accent");this._accent=i&&/^#[0-9a-f]{6}$/i.test(i)?i:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let s=U.get("floor_stack");this._floorStack=s==="stacked"||s==="single"?s:"dim",this._roomNames=U.get("room_names")!=="0",this._controlsRight=U.get("controls")==="right",this._keepView=U.get("keep_view")==="1",this._trail=U.get("trail")==="1",this._cameraWall=!1,this._clean=U.get("clean")==="1",this._navWrap=U.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=U.get("weather")!=="0"}t(e,t){return A(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass),e.has("hass")&&this.hass&&!ot(this.hass.language)&&nn(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,U.set("walls",e)}setKeepRoof(e){this._keepRoof=e,U.set("roof",e?"1":"0")}setExplode(e){this._explode=e,U.set("explode",e?"1":"0")}setQuality(e){this._quality=e,U.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let i of o.floors){let s=i.furniture.find(a=>a.id===e);s&&t(s,i)}this.data.edit(o)}editDevice(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let i of o.floors){let s=i.placements.find(a=>a.entity_id===e);s&&t(s,i)}this.data.edit(o)}moveDevice(e){let{id:t,x:n,z:o}=e.detail;this.editDevice(t,(i,s)=>{let[a,l]=yr(s,i.x,i.z,n,o);Object.assign(i,{x:a,z:l})})}turnStep(){return F(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.placements=o.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(h=>h.entity_id===e)),o=n?.placements.find(u=>u.entity_id===e);if(!n||!o)return b;let i=F(e),s=i==="light",a=i==="camera",l=o.mount==="ceiling",c=i?tt(i,n.height,s||a?o.mount??(a?"wall":"ceiling"):null):1,d=(u,h,f,g,m,_)=>p`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${g}
          max=${m}
          .value=${String(Math.round(h*100)/100)}
          @change=${k=>{let w=parseFloat(k.target.value.replace(",","."));Number.isFinite(w)&&_(Math.min(m,Math.max(g,w)))}}
        />
      </label>`;return p`${s?p`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>p`<option value=${u} ?selected=${u===(o.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:b}
      ${a?p`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),o.fov??(l?360:90),5,10,360,u=>this.editDevice(e,h=>h.fov=u))}
            ${d(this.t("camera_reach_short"),o.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,h=>h.reach=u))}
            ${d(this.t("camera_tilt_short"),o.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,h=>h.tilt=u))}`:b}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((o.y??c)*100)/100)}
          @change=${u=>{let h=parseFloat(u.target.value.replace(",","."));Number.isFinite(h)&&h>=0&&this.editDevice(e,f=>f.y=Math.round(h*1e3)/1e3)}}
        />
      </label>
      ${o.y!==null?p`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:b}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?ke(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:o}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=yr(a,s.x,s.z,n,o);Object.assign(s,{x:l,z:c});let d=ns(a,s,i);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(i=>i.furniture).find(i=>i.id===e);if(!t)return b;let n=(i,s)=>p`<label class="fp3d-size" title=${this.t(`size_${i}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(t[i]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[i]=Math.round(l*1e3)/1e3)}}
    /></label>`,o=this.data.building?.floors.find(i=>i.furniture.some(s=>s.id===e));return p`${n("w",this.t("size_short_w"))}${n("d",this.t("size_short_d"))}${n("h",this.t("size_short_h"))}
    ${o&&wo(t)?p`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((t.mount_y??Se(o,t))*100)/100)}
              @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?p`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,i=>i.mount_y=null)}>${this.t("height_auto")}</button>`:b}`:b}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.furniture=o.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,io(this.hass).then(e=>this._newOffers=e.active?ro(e.offers??[]).length+oo(e.updates??[]).length:0).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&!ot(this.hass.language))return b;this.checkOffers();let e=this.data.building,t=this.data.saveState;return p`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?b:p`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?p`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?p`<span class="fp3d-dot" aria-label=${this.t("offers_dot")}></span>`:b}
                </button>
              </div>`:b}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?p`<button
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
                ${["auto","low","high"].map(n=>p`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${pr.map(n=>p`<button
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
                  ${this._accent?p`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,U.set("accent","")}}
                      >
                        ↺
                      </button>`:b}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>p`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,U.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>p`<button
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
              </div>`:b}
          ${this._mode==="editor"&&t!=="idle"?p`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:b}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?b:this.renderNotices()}
        ${this.data.error&&!e?p`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:b}
        ${!e&&!this.data.error?p`<p class="fp3d-message">${this.t("loading")}</p>`:b}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):b}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(p`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(p`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(p`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(p`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?p`<div class="fp3d-notices">${t}</div>`:b}renderExtensions(){return this._editorReady?p`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></fp3d-extensions>`:(Bn().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),p`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?p`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Bn().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),p`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(o=>o.rooms.length))return p`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?p`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:b}
      </div>`;let t=e.floors.find(o=>o.id===this._floorId),n=t?[t]:e.floors;return p`
      ${this._clean?b:p`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?p`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(o=>p`<button
                  class="fp3d-chip"
                  aria-pressed=${o.id===this._floorId}
                  @click=${()=>{this._floorId=o.id,this._roomId=null}}
                >
                  ${o.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:b}
        ${n.flatMap(o=>[n.length>1&&o.rooms.length?p`<span class="fp3d-nav-floor">${o.name}</span>`:b,...o.rooms.map(i=>p`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${i.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=o.id),this._roomId=i.id===this._roomId?null:i.id}}
            >
              ${i.name}
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
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall}
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
          ?furnish=${this._furnish}
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
        ${this._roomId?p`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${o=>this.view3d()?.lookThrough(o.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              .floor=${e.floors.find(o=>o.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${nt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:b}
        ${this._clean?b:p`<div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?p`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:b}
          ${!this._floorId&&e.settings.roof.type!=="none"?p`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:b}
          ${e.floors.length>1&&this._floorId?p`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(o=>p`<button
                      aria-pressed=${this._floorStack===o}
                      @click=${()=>{this._floorStack=o,U.set("floor_stack",o)}}
                    >
                      ${this.t(`floor_stack_short_${o}`)}
                    </button>`)}
              </div>`:b}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(o=>p`<button
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
            ${G("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${G("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,U.set("weather",this._weather?"1":"0")}}
          >
            ${G("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?p`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:b}
        </div>`}
        ${this._furnish?p`<div class="fp3d-furnish-bar">
              ${this._selFurniture?p`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,o=>o.mirror=!o.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?p`<span>${q(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:p`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:b}
      </div>
    `}static styles=[ye,Fe,he`
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
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
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
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",kr);function wn(r,e,t=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(r.trim());if(!n)return!1;let o=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return o<=i?s>=o&&s<i:s>=o||s<i}var rs;function os(){let r=new URL("./neonplan3d-card-editor.js?v=5fd5b46c1a77",new URL(import.meta.url)).href;return rs??=import(r),rs}function is(){try{let r=localStorage.getItem("neonplan3d.card_walls");return r==="auto"||r==="cut"?r:null}catch{return null}}var xr=class extends le{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new Qe(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=is(),this._heat=null,this._explode=null,this._fullscreen=!1,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=wn(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await os(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=is(),this._heat=null,this._explode=null,this._orbit=!1,this._night=wn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),ot(this.hass.language)||nn(this.hass.language).then(()=>this.requestUpdate());let t=wn(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!ot(this.hass.language))return b;let e=this.data.building,t=this._config?.height??420,n=this._config;!this.roomApplied&&e&&n?.room&&(this.roomApplied=!0,e.floors.some(k=>k.rooms.some(w=>w.id===n.room))&&(this._roomId=n.room));let o=this._floorId===void 0?n?.floor??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(k=>k.id===o)?o:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&(e?.floors.length??0)>1,a=k=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(k),l=["temperature","humidity","co2"].filter(k=>a(k)),c=this._walls??n?.walls??"auto",d=this._heat??n?.heatmap??"none",u=this._explode??n?.explode??!0,h=this._fullscreen?"100vh":n?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t}px`,f=!!e&&!this._clean&&(s||!!n?.controls&&!(this._roomId&&n.room_panel!==!1)),g=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,m=k=>A(this.hass,k),_=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return p`<ha-card class=${this._night?"fp3d-night":""} style=${_?`--fp3d-accent:${_}`:""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="fp3d-card-body" style="height:${h}">
        ${e&&e.floors.some(k=>k.rooms.length)?p`<fp3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${u}
              .keepRoof=${n?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .buttons=${this._config?.buttons?.map((k,w)=>({id:`card_${w}`,...k}))??null}
              .heatMode=${d}
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
              .cameraWall=${this._cameraWall}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${g}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              ?weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${f?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${k=>{if(this.canSwitch&&(e?.floors.length??0)>1&&k.detail.floorId&&i!==k.detail.floorId){this._floorId=k.detail.floorId,this._roomId=null;return}k.detail.roomId&&(this._roomId=k.detail.roomId===this._roomId?null:k.detail.roomId)}}
              @floor-tap=${k=>{this._floorId=k.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:p`<p class="fp3d-card-msg">${this.data.error??(e?A(this.hass,"no_building"):A(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?p`<fp3d-room-panel
              @camera-look=${k=>this.view3d()?.lookThrough(k.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(k=>k.rooms).find(k=>k.id===this._roomId)??null}
              .floor=${e.floors.find(k=>k.rooms.some(w=>w.id===this._roomId))??null}
              .confirmEntities=${nt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:b}
        ${f&&e?p`<div class="fp3d-card-controls">
              ${s?p`<button class="fp3d-chip" @click=${()=>this.back()}>${m("back")}</button>`:b}
              ${n?.camera_wall?p`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${m("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${m("cameras_short")}</button>`:b}
              ${a("walls")?p`<div class="fp3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this.setWalls("auto")}>${m("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this.setWalls("cut")}>${m("walls_cut")}</button>
                  </div>`:b}
              ${a("floors")&&e.floors.length>1&&!i?p`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${m("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${m("floors_stacked")}</button>
                  </div>`:b}
              ${l.length?p`<div class="fp3d-seg" role="group" aria-label=${m("heatmap")}>
                    ${["none",...l].map(k=>p`<button aria-pressed=${d===k} @click=${()=>this._heat=k}>
                          ${m(k==="none"?"heat_off":`heat_short_${k}`)}
                        </button>`)}
                  </div>`:b}
            </div>`:b}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?p`<button class="fp3d-card-full" title=${m(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${m(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:b}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?p`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?p`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:b}
      </div>
    </ha-card>`}static styles=[ye,Fe,he`
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
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",xr);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"neonplan3d-card",name:A(void 0,"card_name"),description:A(void 0,"card_description"),preview:!1})}Dr();
