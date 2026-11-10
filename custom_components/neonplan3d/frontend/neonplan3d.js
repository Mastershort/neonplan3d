Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Ta=new URL(import.meta.url),$a=Ta.searchParams.get("v"),Ma=o=>new URL(`./fonts/${o}${$a?`?v=${$a}`:""}`,Ta).href,Pa="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Ea(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ma("figtree.woff2")}) format("woff2");unicode-range:${Pa}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ma("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Pa}}`,document.head.append(o)}function za(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Jh(o,e){return String(Number(o.toFixed(e)))}function Aa(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),i=n-r*12,s=Jh(i,e>=2?1:0);return r?i<.05?`${t}${r}'`:`${t}${r}' ${s}"`:`${t}${s}"`}function Ra(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,s=!1,a=t;for(let l of t.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];i=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(r+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?r+=c*.0254:d==="mm"?r+=c/1e3:d==="cm"?r+=c/100:d==="m"?r+=c:r+=e==="imperial"?c*(s?.0254:.3048):c}return!i||/[^\s+]/.test(a)?null:r}function Wn(o){let e=o?.locale?.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let t=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return t?{hourCycle:t==="h11"||t==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var To=globalThis,Eo=To.ShadowRoot&&(To.ShadyCSS===void 0||To.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yr=Symbol(),Ia=new WeakMap,Ln=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Yr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Eo&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ia.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ia.set(t,e))}return e}toString(){return this.cssText}},Fa=o=>new Ln(typeof o=="string"?o:o+"",void 0,Yr),ke=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Ln(t,o,Yr)},Da=(o,e)=>{if(Eo)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=To.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},Xr=Eo?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Fa(t)})(o):o;var{is:ep,defineProperty:tp,getOwnPropertyDescriptor:np,getOwnPropertyNames:op,getOwnPropertySymbols:rp,getPrototypeOf:ip}=Object,zo=globalThis,Ha=zo.trustedTypes,sp=Ha?Ha.emptyScript:"",ap=zo.reactiveElementPolyfillSupport,Cn=(o,e)=>o,Qr={toAttribute(o,e){switch(e){case Boolean:o=o?sp:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},La=(o,e)=>!ep(o,e),Wa={attribute:!0,type:String,converter:Qr,reflect:!1,useDefault:!1,hasChanged:La};Symbol.metadata??=Symbol("metadata"),zo.litPropertyMetadata??=new WeakMap;var Qe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wa){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&tp(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=np(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wa}static _$Ei(){if(this.hasOwnProperty(Cn("elementProperties")))return;let e=ip(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cn("properties"))){let t=this.properties,n=[...op(t),...rp(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Xr(r))}else e!==void 0&&t.push(Xr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Da(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Qr).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Qr;this._$Em=r;let a=s.fromAttribute(t,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??La)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:s}=i,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},Qe[Cn("elementProperties")]=new Map,Qe[Cn("finalized")]=new Map,ap?.({ReactiveElement:Qe}),(zo.reactiveElementVersions??=[]).push("2.1.2");var ii=globalThis,Ca=o=>o,Ao=ii.trustedTypes,Oa=Ao?Ao.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ua="$lit$",ht=`lit$${Math.random().toFixed(9).slice(2)}$`,ja="?"+ht,lp=`<${ja}>`,Ft=document,Nn=()=>Ft.createComment(""),Bn=o=>o===null||typeof o!="object"&&typeof o!="function",si=Array.isArray,dp=o=>si(o)||typeof o?.[Symbol.iterator]=="function",Jr=`[ 	
\f\r]`,On=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Na=/-->/g,Ba=/>/g,Rt=RegExp(`>|${Jr}(?:([^\\s"'>=/]+)(${Jr}*=${Jr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Va=/'/g,Ka=/"/g,qa=/^(?:script|style|textarea|title)$/i,ai=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=ai(1),Je=ai(2),s_=ai(3),Dt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ga=new WeakMap,It=Ft.createTreeWalker(Ft,129);function Za(o,e){if(!si(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oa!==void 0?Oa.createHTML(e):e}var cp=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",s=On;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===On?d[1]==="!--"?s=Na:d[1]!==void 0?s=Ba:d[2]!==void 0?(qa.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=Rt):d[3]!==void 0&&(s=Rt):s===Rt?d[0]===">"?(s=r??On,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Rt:d[3]==='"'?Ka:Va):s===Ka||s===Va?s=Rt:s===Na||s===Ba?s=On:(s=Rt,r=void 0);let h=s===Rt&&o[a+1].startsWith("/>")?" ":"";i+=s===On?l+lp:u>=0?(n.push(c),l.slice(0,u)+Ua+l.slice(u)+ht+h):l+ht+(u===-2?a:h)}return[Za(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Vn=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=cp(e,t);if(this.el=o.createElement(c,n),It.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=It.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(Ua)){let p=d[s++],h=r.getAttribute(u).split(ht),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?ti:f[1]==="?"?ni:f[1]==="@"?oi:sn}),r.removeAttribute(u)}else u.startsWith(ht)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(qa.test(r.tagName)){let u=r.textContent.split(ht),p=u.length-1;if(p>0){r.textContent=Ao?Ao.emptyScript:"";for(let h=0;h<p;h++)r.append(u[h],Nn()),It.nextNode(),l.push({type:2,index:++i});r.append(u[p],Nn())}}}else if(r.nodeType===8)if(r.data===ja)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(ht,u+1))!==-1;)l.push({type:7,index:i}),u+=ht.length-1}i++}}static createElement(e,t){let n=Ft.createElement("template");return n.innerHTML=e,n}};function rn(o,e,t=o,n){if(e===Dt)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=Bn(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=rn(o,r._$AS(o,e.values),r,n)),e}var ei=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ft).importNode(t,!0);It.currentNode=r;let i=It.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Kn(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new ri(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=It.nextNode(),s++)}return It.currentNode=Ft,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Kn=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=rn(this,e,t),Bn(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Dt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dp(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Bn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ft.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Vn.createElement(Za(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new ei(r,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Ga.get(e.strings);return t===void 0&&Ga.set(e.strings,t=new Vn(e)),t}k(e){si(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(Nn()),this.O(Nn()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Ca(e).nextSibling;Ca(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},sn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,s=!1;if(i===void 0)e=rn(this,e,t,0),s=!Bn(e)||e!==this._$AH&&e!==Dt,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=rn(this,a[n+l],t,l),c===Dt&&(c=this._$AH[l]),s||=!Bn(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ti=class extends sn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},ni=class extends sn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},oi=class extends sn{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=rn(this,e,t,0)??y)===Dt)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ri=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){rn(this,e)}};var up=ii.litHtmlPolyfillSupport;up?.(Vn,Kn),(ii.litHtmlVersions??=[]).push("3.3.3");var Ya=(o,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new Kn(e.insertBefore(Nn(),i),i,void 0,t??{})}return r._$AI(o),r};var li=globalThis,me=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ya(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dt}};me._$litElement$=!0,me.finalized=!0,li.litElementHydrateSupport?.({LitElement:me});var hp=li.litElementPolyfillSupport;hp?.({LitElement:me});(li.litElementVersions??=[]).push("4.2.2");var ce="main",di=o=>o&&o!==ce?{plan:o}:{};async function Ro(o,e){return o.callWS({type:"neonplan3d/building/get",...di(e)})}async function Gn(o,e,t){return(await o.callWS({type:"neonplan3d/building/save",building:e,...di(t)})).revision}function Xa(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision),{type:"neonplan3d/building/subscribe",...di(t)})}function Qa(o,e){return o.connection.subscribeMessage(t=>e(t.plan??ce,t.revision),{type:"neonplan3d/building/subscribe",plan:"*"})}async function Ja(o){try{return await o.callWS({type:"neonplan3d/plans/list"})}catch{return{plans:[],trash:[],locate_plan:ce}}}function el(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/plans/subscribe"})}function tl(o,e,t,n,r){return o.connection.subscribeMessage(i=>{"announce"in i?t?.(i.announce):"reload"in i?n?.(i.reload):typeof i.text=="string"&&e(i)},{type:"neonplan3d/voice/subscribe",...t?{announce:!0}:{},...n?{reload:!0}:{},...r?{view:r}:{}})}async function nl(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function ol(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function rl(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var pp="neonplan3d.seenOffers";function il(o){let e=[];try{e=JSON.parse(localStorage.getItem(pp)??"[]")}catch{}return o.filter(t=>!e.includes(t.id))}var fp="neonplan3d.seenUpdates";function sl(o){let e=[];try{e=JSON.parse(localStorage.getItem(fp)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function al(o){return o.callWS({type:"neonplan3d/license/get"})}var mp="3.0.5",gp="neonplan3d-diagnostics";var _p="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|counter|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|sun|switch|text|time|timer|todo|update|vacuum|valve|water_heater|weather|zone",bp=[[/\b(?:https?|wss?|file|blob|data|ftp):[^\s'"<>)\]]*/gi,"<url>"],[/\beyJ[\w-]+\.[\w-]+\.[\w-]+/g,"<token>"],[/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,"<email>"],[/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b/g,"<ip>"],[/\b[0-9a-f]{1,4}(?::[0-9a-f]{0,4}){2,7}\b/gi,"<ip>"],[new RegExp(`\\b(?:${_p})\\.[a-z0-9_]+\\b`,"g"),"<entity>"],[/\b[a-z][a-z0-9_]*\.[a-z0-9]*_[a-z0-9_]*\b/g,"<entity>"],[/\b[0-9a-f]{16,}\b/gi,"<id>"]];function wp(o){let e=String(o??"");for(let[t,n]of bp)e=e.replace(t,n);return e.replace(/\s+/g," ").trim().slice(0,200)}var vp=/(neonplan3d[\w-]*\.js)(?:\?[^:\s)]*)?:(\d+):(\d+)/;function hl(o,e,t,n){let r=vp.exec(o??"");if(r)return`${r[1]}:${r[2]}:${r[3]}`;let i=/(neonplan3d[\w-]*\.js)(?:\?|$)/.exec(e??"");return i?`${i[1]}:${t??0}:${n??0}`:null}function yp(o,e,t){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(o)||/Macintosh/.test(o)&&t>1?"tablet":/iPhone|iPod|Windows Phone/.test(o)?"phone":/Android/.test(o)?/Mobile/.test(o)&&e<600?"phone":"tablet":t>0&&e>0&&e<500?"phone":"desktop"}function kp(o){let e=[[/Edg(?:e|A|iOS)?\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/SamsungBrowser\/(\d+)/,"Samsung"],[/Silk\/(\d+)/,"Silk"],[/(?:Firefox|FxiOS)\/(\d+)/,"Firefox"],[/CriOS\/(\d+)/,"Chrome"],[/; wv\).*Chrome\/(\d+)/,"WebView"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+)[\d.]* (?:Mobile\/\w+ )?Safari/,"Safari"]];for(let[t,n]of e){let r=t.exec(o);if(r)return`${n} ${r[1]}`}return/AppleWebKit/.test(o)&&/iPhone|iPad|Macintosh/.test(o)?"WebKit":"other"}function xp(o,e=0){let t;return(t=/Android (\d+)/.exec(o))?`Android ${t[1]}`:(t=/iPad.*? OS (\d+)/.exec(o))?`iPadOS ${t[1]}`:(t=/(?:iPhone|iPod).*? OS (\d+)/.exec(o))?`iOS ${t[1]}`:/Macintosh/.test(o)?e>1?"iPadOS":"macOS":(t=/Windows NT (\d+)/.exec(o))?`Windows ${t[1]}`:/CrOS/.test(o)?"ChromeOS":/Linux/.test(o)?"Linux":"other"}function Sp(o){let e=o??"";return e.trim()?/SwiftShader|llvmpipe|Software|Mali-[4T]|Mali-G(?:31|51|52|57)\b|Adreno[^\d]*[2-5]\d\d\b|PowerVR|Vivante|VideoCore|\bGC\d{3,4}\b|Intel.*\bHD Graphics(?:[2-5]\d{3})?\b/i.test(e)?"low":/RTX|GTX|GeForce|Quadro|Radeon (?:RX|Pro)|Apple (?:M\d|GPU)|Adreno[^\d]*[67]\d\d\b|Mali-G7\d|Iris Xe|Intel.*Arc/i.test(e)?"high":"mid":null}var pl,ll=!1,ft=!1,ci,pt={},Io=0,an=0,fl=null,ml=null,gl=null,et=[],ui=new Set;function hi(){return ft}function _l(o){return ui.add(o),()=>ui.delete(o)}function bl(o){pl=o,!ll&&(ll=!0,window.addEventListener(gp,e=>{let t=!!e.detail?.enabled;yl(t)}),pi())}function Ht(o){ft&&(pt[o]=(pt[o]??0)+1)}function wl(o){if(!ft)return;o.fps>0&&(Io+=o.fps,an++),fl=o.low;let e=window.devicePixelRatio||1;ml=Math.round(o.pixelRatio/e*100)/100,o.gpu!==void 0&&(gl=Sp(o.gpu))}function vl(o,e){if(!e)return;let t=wp(o);if(!t)return;let n=et.find(r=>r.msg===t&&r.where===e);n?n.count++:et.length<20&&et.push({msg:t,where:e,count:1,version:mp})}function dl(o){let e=o.error,t=e?`${e.name}: ${e.message}`:o.message;vl(t,hl(e?.stack,o.filename,o.lineno,o.colno))}function cl(o){let e=o.reason;e instanceof Error&&vl(`${e.name}: ${e.message}`,hl(e.stack))}function ul(){pi()}function yl(o){if(o!==ft){ft=o,o?(window.addEventListener("error",dl),window.addEventListener("unhandledrejection",cl),window.addEventListener("pagehide",ul),ci=setInterval(()=>{pi()},6e5)):(window.removeEventListener("error",dl),window.removeEventListener("unhandledrejection",cl),window.removeEventListener("pagehide",ul),clearInterval(ci),ci=void 0,pt={},Io=an=0,et=[]);for(let e of ui)e(o)}}function $p(){let o=navigator.userAgent,e=navigator.maxTouchPoints||0,t=Math.min(screen.width||0,screen.height||0);return{device:yp(o,t,e),browser:kp(o),os:xp(o,e),low_end:fl,render_scale:ml,fps:an?Math.round(Io/an*10)/10:null,fps_n:an,gpu_tier:gl,views:{...pt}}}async function pi(){let o=pl;if(!o)return;let e={type:"neonplan3d/diagnostics/client"};ft&&(e.client=$p(),e.errors=et);let t=pt,n=et;ft&&(pt={},Io=an=0,et=[]);try{let r=await o.callWS(e);yl(!!r?.enabled)}catch{if(ft){for(let[r,i]of Object.entries(t))pt[r]=(pt[r]??0)+i;et=[...n,...et].slice(0,20)}}}function Mp(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function gi(o){let e=he(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Mp).length>=2}function kl(o=new Date){let e=o.getFullYear(),t=o.getMonth();if(t===0&&o.getDate()<=6)return 4;if(t<10)return 0;let n=new Date(e,t,o.getDate()).getTime(),r=new Date(e,11,24),i=new Date(e,11,24-r.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=i-(4-l)*s-3600*1e3&&(a=l);return a}var xl=[],mi=new Map,Sl=0;function $l(o){xl=o,mi=new Map(o.flatMap(e=>e.items.map(t=>[Pp(e.id,t.id),t]))),Sl++}function mt(){return xl}function ln(){return Sl}function Pp(o,e){return`pack:${o}:${e}`}function gt(o){return o.startsWith("pack:")}function Fo(o){return gt(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function dn(o){return o==="robot_vacuum"||gt(o)&&o.endsWith(":robot_vacuum")}function Tp(o){return o.z>.05}function Ml(o){let e=(o?.parts??[]).filter(t=>t.shape==="cyl"&&Tp(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Pl(o){return gt(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var Ep={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Tl(o){return he(o)?.parts.find(e=>e.screen)}function he(o){if(!gt(o))return;let e=mi.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=Ep[t];return r?mi.get(`pack:${r}:${n.join(":")}`):void 0}function El(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}var zp={architecture:"Architecture & Fit-out",balcony:"Balcony & Small Spaces",bath:"Bathroom",cabinet_kit:"Cabinets & Shelves \u2013 Kit",deco:"Decor & Plants",dining_hall:"Dining Room & Hallway",fun_halloween:"Fun Pack: Halloween",fun_winter:"Fun Pack: Winter & Christmas",fun_pets:"Fun Pack: Pets",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside",pro_heat:"Pro: Heat Pro",pro_household:"Pro: Household Pro",frames:"Digital Picture Frames",announce:"Module: Announcements",voice_answers:"Module: The house answers",window_watch:"Module: Window watch"};function zl(o,e){if(e.split("-")[0]==="de")return o.name;let t=o.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),r=zp[n?t.slice(0,-7):t];return r?n?`${r} \u2013 Sampler`:r:o.name.replace(/^Modul:/,"Module:").replace(/^Fun-Pack:/,"Fun Pack:")}function ue(o,e){let t=he(e.type);if(e.mount_y!=null)return e.mount_y;let n=Il(e,o.height);if(n!==null)return n;if(e.type==="lamp_wall")return Al;if(Do.has(e.type))return Math.max(0,o.height-Ho(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return fi(o,e)+Wo(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?fi(o,e):Rl(e)||fi(o,e)}}function fi(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>K([e.x,e.z],n.points))?0:tt(o,e.x,e.z)}var Ye={field:null,size:1,right:0,up:0};var Hl=["rain","snow","clouds","lightning","sky"];var bi={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function wi(o){return o==="hedge"||o==="fence"||o==="pergola"}function vi(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!wi(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ie(o){return[...o.rooms,...vi(o)]}function Rp(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(c,d)=>r==="x"?c:r==="-x"?-c:r==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=i(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return n*l}function Ip(o,e,t,n){return Lo(o,e)+bi[e.type]-Fp(o,e,t,n)}var yi=-.2,_i={set:!1,level:yi};function Wl(o){let e=o?.settings.terrain??null;_i={set:e?.level!=null,level:e?.level??yi}}function Ll(o){return o.elevation>.3?0:_i.set?_i.level-o.elevation:yi}function Lo(o,e){return Ll(o)+(e.offset??0)}function Fp(o,e,t,n){return e.type==="pool"?0:Rp(e,t,n)}function tt(o,e,t){let n=(o.outdoor??[]).filter(i=>!wi(i.type)&&i.type!=="pool"&&K([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?Ip(o,r,e,t):Ll(o)}function Cl(o,e){return Lo(o,e)+(e.above?Ol(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Dp(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Ol(o):1.5}function Hp(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!wi(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>K(n,t.points)))}function Un(o,e){return!e.above&&!Hp(o,e)?cn(o,e)-.05:Cl(o,e)-Dp(e)}function cn(o,e){return Cl(o,e)-.15}function Ol(o){return o.height&&o.height>.3?o.height:1.2}var Wp={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Nl={type:"none",pitch:35,overhang:.4},Lp={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Nl}};var Bl=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Vl=.3;var Kl=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Al=1.75;function Gl(o){if(["lamp_pendant","lamp_fan","stairwell","parking"].includes(o.type)||ki.has(o.type))return!1;let e=he(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var Do=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Ho(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var ki=new Set(["stairs","stairs_u"]);function jn(o){return Kl.has(o)||!!he(o)?.light}var Cp=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Rl(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Dl=.04,Op=1.2;function Wo(o,e,t,n=0){let r=0;for(let i of o.furniture)!(Cp.has(i.type)||he(i.type)?.surface)||!K([e,t],Wt(i))||i.type==="worktop"&&n>0&&i.h-Dl>=Op&&n<=i.h-Dl-.02||(r=Math.max(r,i.h));return r}var Ul=new Set(["wall_switch","wall_socket"]),Np=4;function qn(o){let e=(o.gangs??[]).slice(0,Np);return e.length?e:[{entity:null}]}function Co(o){return[...new Set(qn(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var jl=new Set(["wifi_ap","water_heater"]);function Il(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var Ap=new Set([...Kl,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Fl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Bp=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Vp=["standard","bars","glass_wall","slide"];function Kp(o,e){return o.type==="door"?o.style&&Bp.includes(o.style)?o.style:e?"front":"interior":o.style&&Vp.includes(o.style)?o.style:"standard"}function Gp(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,s=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),a=(i-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return r?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function ql(o,e){let t=o.width,n=Gp(t,Kp(o,!1),e,o),r=n?.x0??0,i=n?.x1??t;return o.leaves!==2?(r+i)/2:e?r+(i-r)/4:i-(i-r)/4}function Zn(o){o.energy={...Wp,...o.energy??{}},o.presence=o.presence??[],o.settings={...Lp,...o.settings,roof:{...Nl,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of t){let i=n[r.mount??"ceiling"],[s,a,l]=Fl[i];e.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:r.x,z:r.z,rotation:0,w:s,d:a,h:l,variant:null,entity:r.entity_id,power:null})}e.placements=e.placements.filter(r=>!r.entity_id.startsWith("light.")||r.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function Zl(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function We(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,s]=o[(t+1)%o.length];e+=n*s-i*r}return e/2}function Yl(o){return Math.abs(We(o))}function Ae(o){let e=We(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,s)=>i+s[0],0)/r,o.reduce((i,s)=>i+s[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,s]=o[r],[a,l]=o[(r+1)%o.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Wt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function K(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,s]=e[n],[a,l]=e[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(t=!t)}return t}var Xl={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Up=700,Ql="neonplan3d.unsaved",_t="3.0.5",td="floorplan-3d.unsaved",Si=o=>o===ce?Ql:`${Ql}.${o}`;function jp(o){try{let e=localStorage.getItem(Si(o))??(o===ce?localStorage.getItem(td):null);return e?JSON.parse(e):null}catch{return null}}function xi(o,e){try{e?localStorage.setItem(Si(o),JSON.stringify(e)):(localStorage.removeItem(Si(o)),o===ce&&localStorage.removeItem(td))}catch{}}function Jl(o,e){return o&&e.some(t=>t.id===o)?o:ce}var un=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;planId=ce;plans=[];trash=[];locatePlan=ce;plansLoaded=!1;wanted=null;unsubscribePlans=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.unsubscribePlans?.(),this.unsubscribePlans=null}async switchPlan(e){if(!this.plansLoaded||!this.hass){this.wanted=e??null;return}let t=Jl(e,this.plans);this.wanted=t,!(t===this.planId&&this.building)&&(await this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.planId=t,this.building=null,this.revision=-1,this.ownRevisions=new Set,this.draft=null,this.saveState="idle",this.host.requestUpdate(),await this.reload(),await this.follow())}planName(e,t){return this.plans.find(r=>r.id===e)?.name||(e===ce?t:"?")}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Up),this.host.requestUpdate()}get frontendVersion(){return _t}get versionGap(){return!this.backendVersion||_t==="dev"||this.backendVersion===_t?null:qp(this.backendVersion,_t)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&_t!=="dev"&&this.backendVersion!==_t}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Zn(e.building))}discardDraft(){this.draft=null,xi(this.planId,null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;this.pending=null;let t=this.planId;for(let n of e.floors)for(let r of n.furniture)r.mount_y!=null&&r.mount_y>10&&(r.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await Gn(this.hass,e,t);t===this.planId&&(this.ownRevisions.add(n),this.revision=n),this.saveState=this.pending?"saving":"saved",this.saveError=null,xi(t,null)}catch(n){this.saveState="error",this.saveError=ed(n),xi(t,{building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}async start(){if(this.hass&&(bl(this.hass),await Promise.all([this.reloadPacks(),this.reloadPlans()]),this.planId=Jl(this.wanted??this.planId,this.plans),await this.reload(),await this.follow(),!this.unsubscribePlans&&this.connected))try{this.unsubscribePlans=await el(this.hass,e=>{this.takePlans(e),this.plans.some(t=>t.id===this.planId)||this.switchPlan(ce)})}catch{}}async follow(){if(this.unsubscribe||!this.connected||!this.hass)return;let e=this.planId;try{let t=await Xa(this.hass,n=>{e===this.planId&&(this.ownRevisions.has(n)||n===this.revision||this.pending||this.saving||this.reload())},e);e!==this.planId||this.unsubscribe?t():this.unsubscribe=t}catch{}}async reloadPlans(){this.hass&&this.takePlans(await Ja(this.hass))}takePlans(e){this.plans=e.plans,this.trash=e.trash,this.locatePlan=e.locate_plan,this.plansLoaded=!0,this.host.requestUpdate()}async reloadPacks(){if(this.hass){try{this.packs=await rl(this.hass)}catch{this.packs=[]}$l(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return;let e=this.planId;try{let t=await Ro(this.hass,e);if(e!==this.planId)return;this.building=Zn(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=jp(e)),this.revision=t.revision,this.error=null}catch(t){this.error=ed(t)}this.host.requestUpdate()}};function ed(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function qp(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let i=(t[r]??0)-(n[r]??0);if(i)return i}return 0}var nd;function $i(){let o=new URL("./neonplan3d-editor.js?v=3522c5b844fb",new URL(import.meta.url)).href;return nd??=import(o),nd}var Zp={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Yp=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Xp=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Qp=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Oo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ud=new Set(["light","switch","fan"]);function hd(o){return o.slice(0,o.indexOf("."))}function L(o){return Zp[hd(o)]??null}function od(o){return o!==null&&o!=="scene"&&o!=="script"}var Jp=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function No(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!Jp.has(String(o.attributes.device_class??""))}function Pi(o,e){let t=(o?.attributes.supported_features??0)|0;return t!==0&&!(t&3)&&(t&176)!==0?e==="stop"?{service:"stop_cover_tilt",data:{}}:t&(e==="open"?16:32)?{service:e==="open"?"open_cover_tilt":"close_cover_tilt",data:{}}:{service:"set_cover_tilt_position",data:{tilt_position:e==="open"?100:0}}:{service:e==="open"?"open_cover":e==="close"?"close_cover":"stop_cover",data:{}}}function Bo(o,e,t){let n=new Map;for(let r of e){let i=Pi(o.states[r],t),s=`${i.service}|${JSON.stringify(i.data)}`,a=n.get(s)??{...i,ids:[]};a.ids.push(r),n.set(s,a)}return[...n.values()].map(r=>({service:r.service,data:{...r.data,entity_id:r.ids}}))}function ef(o,e){let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let r=o.devices?.[n];if(!r)return null;if(r.area_id)return r.area_id;n=r.parent_device_id}return null}function Re(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:ef(o,t.device_id):null}function Vo(o,e){let t=o.entities?.[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function rd(o,e){let t=L(e);if(!t)return!1;let n=o.entities?.[e];if(Vo(o,e)||n?.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class,s=String(r.attributes.unit_of_measurement??"");return t==="sensor"?i?Yp.has(i)||i==="voltage"&&s==="mV":Xp.has(s):t==="binary"?i?Qp.has(i):!!n?.area_id:!0}var tf=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function id(o,e){if(L(e)!=="sensor")return!1;let t=o.entities?.[e];if(Vo(o,e)||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||tf.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||j(n)}var Mi=null;function Xn(o){let e=Mi;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&Di(o,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!Vo(o,l)&&!c.entity_category&&(i.get(d)??i.set(d,new Set).get(d)).add(hd(l));let u=rd(o,l),p=Re(o,l);if(!p){(u||id(o,l))&&od(L(l))&&r.push(l);continue}u&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(rd(o,l)||id(o,l))&&od(L(l))&&r.push(l);r.sort((l,c)=>Oo.indexOf(L(l))-Oo.indexOf(L(c))||G(o,l).localeCompare(G(o,c)));for(let[l,c]of t){let d=o.areas?.[l]?.name;c.sort((u,p)=>{let h=Oo.indexOf(L(u)),f=Oo.indexOf(L(p));return h-f||G(o,u,d).localeCompare(G(o,p,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Mi={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i,hubs:a},Mi}function _e(o,e){return!e||!o.entities?[]:Xn(o).areas.get(e)??[]}var nf={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},of=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),rf=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function sf(o,e){let t=o.entities?.[e]?.device_id,n=t&&!Xn(o).hubs.has(t)?Xn(o).domains.get(t):void 0;return n&&[...n].some(r=>of.has(r))?!1:!rf.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Ti(o,e,t,n){let r=t.climate?.[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=nf[n],s=(h,f)=>K([h,f],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id)),d=[...new Set([..._e(o,t.area_id).filter(h=>!c.has(h)),...l])],u=d.filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===i&&(t.outdoor||sf(o,h)));if(u.length)return u;let p=pd[n];return p?d.filter(h=>h.startsWith("climate.")&&typeof o.states[h]?.attributes[p]=="number"):[]}var pd={temperature:"current_temperature",humidity:"current_humidity"};function af(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let i=pd[t],s=i?Number(n?.attributes[i]):Number.NaN;return t==="temperature"?sd(s,Ne(o)):s}let r=Number(n?.state);return t==="temperature"?sd(r,n?.attributes.unit_of_measurement):r}function Ne(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function sd(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function bt(o,e){return Ne(o)==="\xB0F"?e*9/5+32:e}function Be(o,e,t,n){let r=Ti(o,e,t,n).map(i=>af(o,i,n)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,s)=>i+s,0)/r.length:null}function fd(o,e){return!!o.entities&&Xn(o).hubs.has(e)}function Ei(o,e){return o.entities?Xn(o).power.get(e)??[]:[]}function G(o,e,t){let r=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let i=r.slice(t.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return r}function md(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||j(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let r=Number(n);return Number.isFinite(r)?r>0:null}function j(o){return!o||o.state==="unavailable"||o.state==="unknown"}var lf=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function zi(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Ai(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function Le(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Ai(o.state)||o.state==="returning";switch(L(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return zi(o)&&lf.has(String(o.state).toLowerCase());default:return!1}}function gd(o,e){if(!o||j(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function _d(o){if(!o||j(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function bd(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),d=l-c;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[r]=n(t),[i]=n(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let s=Math.abs(r-i);return Math.min(s,360-s)<=30?o:null}function wd(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)/255);return{...o,color:t}}function Lt(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,i;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?i=df(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function vd(o){let e=o.attributes.supported_color_modes;return!Array.isArray(e)||!e.length?!0:e.some(t=>["hs","rgb","rgbw","rgbww","xy"].includes(String(t)))}function df(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function hn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var cf=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),uf=new Set(["garage","gate"]),hf=new Set(["window","opening"]);function Yn(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(r.id,s)}),n}function Qn(o,e){let t=new Map,n=(i,s)=>i==="none"?null:i??s??null,r=(i,s,a)=>{let l=n(i.cover,s);return{cover:l,contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,a),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:l&&L(l)==="cover"&&i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{}}};for(let i of e){for(let s of i.rooms){let a=i.openings.filter(g=>g.room_id===s.id).sort((g,k)=>g.edge-k.edge||g.offset-k.offset);if(!a.length)continue;let l=_e(o,s.area_id),c=g=>o.states[g]?.attributes.device_class,d=l.filter(g=>L(g)==="cover"&&cf.has(c(g))),u=a.filter(g=>g.type==="window"),p=a.filter(g=>g.type==="door"),h=a.filter(g=>g.type==="garage"),f=Yn(u,d,!0),_=Yn(u,l.filter(g=>L(g)==="binary"&&hf.has(c(g)))),m=Yn(p,l.filter(g=>L(g)==="binary"&&c(g)==="door")),b=Yn(h,l.filter(g=>L(g)==="cover"&&uf.has(c(g)??""))),v=Yn(h,l.filter(g=>L(g)==="binary"&&c(g)==="garage_door"));for(let g of a){let k=g.type==="window"?f:g.type==="garage"?b:null,$=g.type==="window"?_:g.type==="garage"?v:m;t.set(g.id,r(g,k?.get(g.id),$.get(g.id)))}}for(let s of i.openings)t.has(s.id)||t.set(s.id,r(s))}return t}var pf=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ff(o){if(!o||j(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=pf.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var mf=new Set(["unlocked","unlocking","open","opening"]);function Ri(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var gf=.5;function nt(o,e,t="window"){e.cover&&Ri(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,r=n&&mf.has(n.state)?{unlocked:!0}:{},i=v=>!!v&&o.states[v]?.state==="on",s=v=>!!v&&!!o.states[v]&&!j(o.states[v]),a=v=>v?ff(o.states[v]):null,l=v=>{let g=a(v);return e.contactInvert&&v&&v!==e.tilt&&v!==e.tilt2&&g!=="tilted"&&g?g==="open"?"closed":"open":g},c=i(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!c?1:0,u=i(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let v=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,v/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let f=l(e.contact)==="open"&&!u?1:0,_=null,m=e.cover?o.states[e.cover]:void 0,b=yd(o,e.position);if(b!==null)_=e.positionInverted?b:1-b;else if(m&&!j(m)){let v=m.attributes.current_position;typeof v=="number"?_=1-Math.min(100,Math.max(0,v))/100:_=m.state==="closed"?1:m.state==="opening"||m.state==="closing"?.5:0}else e.cover&&(_=0);if(t==="door"){let v=l(e.contact);return _!==null&&m&&Td.has(String(m.attributes.device_class??""))?{open:v===null?1-_:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...r}:{open:v===null?e.shut?0:gf:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:_,sensed:v!==null||_!==null,...r}}if(t==="garage"){let v=l(e.contact),g=_!==null||v!==null;return _===null&&(_=v===null||v==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:_,sensed:g}}return{open:f,open2:d,tilt:p,tilt2:c?1:0,cover:_,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...r}}function yd(o,e){let t=e?o.states[e]:void 0;if(!t||j(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Ii(o,e){let t=new Map,n=[];for(let s of e){let a=L(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let r=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return r.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function Ko(o,e){return Ii(o,e).map(t=>t.primary)}var ad={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},kd=new Set(["tv_board","tv_wall"]);function xd(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function Sd(o){return kd.has(o)||!!Tl(o)}function Go(o){return Sd(o)||o==="desk"||o==="fridge_smart"}function pn(o,e){let t=new Set,n=Ct(o,e),r=e.some(i=>i.openings.some(s=>s.confirm))?Qn(o,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?r?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of i.furniture){let a=s.confirm?n.get(s.id)?.entity:null;if(a&&a!=="none"&&t.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&t.add(l.entity)}}return t}function $d(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!Fo(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,s=i?o.states[i]:void 0,a=r.awning_time??20;if(!s||j(s)){t.set(r.id,{out:0,moving:0,time:a});continue}let l=p=>r.awning_invert?1-p:p,c=yd(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),d=s.attributes.current_position,u=s.state==="opening"?r.awning_invert?-1:1:s.state==="closing"?r.awning_invert?1:-1:0;c!==null?t.set(r.id,{out:l(c),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?t.set(r.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):u?t.set(r.id,{out:null,moving:u,time:a}):t.set(r.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}for(let n of e)for(let r of n.outdoor??[])if(r.type==="fence")for(let i of r.gates??[])t.set(i.id,_f(o,i));return t}function _f(o,e){let t=e.time??(e.kind==="slide"?15:4),n=a=>a&&a!=="none"?o.states[a]:void 0,r=n(e.contact);if(r&&!j(r))return{out:null,moving:r.state==="on"||r.state==="open"?1:-1,time:t,settled:!0};let i=n(e.entity);if(!i||j(i))return{out:null,moving:-1,time:t,settled:!0};let s=i.attributes.current_position;return typeof s=="number"&&Number.isFinite(s)?{out:Math.min(1,Math.max(0,s/100)),moving:0,time:t}:i.state==="opening"?{out:null,moving:1,time:t}:i.state==="closing"?{out:null,moving:-1,time:t}:{out:null,moving:i.state==="open"||i.state==="on"?1:-1,time:t,settled:!0}}function Fi(o,e){let t=r=>{if(!r||r==="none")return!1;let i=o.states[r]?.state;return i==="on"||i==="open"},n=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var ld={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Di(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function bf(o,e){if(Di(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Ei(o,t).find(n=>n!==e)??null:null}function Ct(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in ld,a=s?ld[i.type]:ad[i.type]??(dn(i.type)?ad.robot_vacuum:void 0);if(!a&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&K([i.x,i.z],h.points))??(i.type==="awning"?vi(n).find(h=>K([i.x,i.z],h.points)):void 0),c=l?Ko(o,_e(o,l.area_id)):[],d=h=>`${h} ${G(o,h)}`,u=i.entity==="none"?null:i.entity??null;if(i.entity==null){let h=c.filter(f=>!r.has(f));if(s){let f=h.filter(_=>L(_)==="light");u=f.find(_=>a.test(d(_)))??f[0]??null}else if(dn(i.type)){let f=l?.area_id??null;u=Object.keys(o.entities??{}).find(_=>_.startsWith("vacuum.")&&!r.has(_)&&!Vo(o,_)&&Re(o,_)===f)??null}else if(i.type==="radiator"||i.type==="ac_unit"){let f=h.filter(_=>L(_)==="climate");u=f.find(_=>a.test(d(_)))??f[0]??null}else if(Sd(i.type)){let f=h.filter(_=>L(_)==="media");u=f.find(_=>o.states[_]?.attributes.device_class==="tv")??f.find(_=>a?.test(d(_)))??(kd.has(i.type)?f[0]??null:null)}else i.type==="awning"?u=h.find(f=>f.startsWith("cover.")&&(a?.test(d(f))||o.states[f]?.attributes.device_class==="awning"))??null:a&&(u=h.find(f=>["switch","media","fan"].includes(L(f)??"")&&a.test(d(f)))??null);u&&r.add(u)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=u?bf(o,u):null,!p&&a&&l&&!s&&(p=_e(o,l.area_id).find(f=>Di(o,f)&&!r.has(f)&&a.test(d(f)))??null),p&&r.add(p)),(u||p)&&t.set(i.id,{entity:u,power:p})}}return t}function Hi(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function Wi(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function Li(o){if(!o||o.state==="off"||o.state==="standby"||j(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function fn(o,e,t,n=[]){let r=(u,p)=>K([u,p],t.points),i=Ct(o,[e]),s=Qn(o,[e]),a=[...e.placements.filter(u=>r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>[i.get(u.id)?.entity,i.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),c=[...new Set(a)].filter(u=>!l.has(u)),d=new Set(c);return{shown:c,more:_e(o,t.area_id).filter(u=>!d.has(u)&&!l.has(u))}}var dd=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,wf={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Uo(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,r=n(t.device)??n(e.entity),i=r?o.entities?.[r]?.device_id:null,s=i&&o.entities?Object.values(o.entities).filter(u=>u.device_id===i).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,h)=>s.find(f=>p.includes(f.split(".")[0])&&wf[u].test(a(f))&&(!h||h(f)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function vf(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function Jn(o,e){let t=Uo(o,e),n=m=>m?o.states[m]:void 0,r=m=>{let b=Number(n(m)?.state);return m&&Number.isFinite(b)?b:null},i=r(t.soc),s=r(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(r(t.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),f=n(t.tracker),_=f?.state.toLowerCase()??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:p?vf(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:f&&_!=="home"&&!j(f)?_==="not_home"?"":f.state:null}}function Md(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Uo(o,n)))).filter(t=>!!t)}function eo(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let r of Object.values(o.entities))if(!(r.device_id!==n||!r.entity_id.startsWith("sensor."))&&(dd.test(r.translation_key??"")||dd.test(r.entity_id.split(".")[1])))return r.entity_id;return null}function cd(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Pd(o,e,t,n){let r=t?o.states[t]?.attributes:void 0;for(let i of[n?o.states[n]?.state:void 0,r?.current_room,r?.room,r?.current_segment]){let s=Ci(o,e,i);if(s)return s}return null}function Ci(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=cd(t);if(!n)return null;let r=i=>[i.name,i.area_id??"",i.area_id&&o.areas?.[i.area_id]?.name||""].map(cd).filter(Boolean);return e.find(i=>r(i).includes(n))??e.find(i=>r(i).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var Td=new Set(["garage","gate","door"]);function Oi(o,e){let t=new Set,n=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let s=L(i);s==="light"?t.add(i):s==="cover"&&!Td.has(String(o.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);for(let a of Ko(o,_e(o,i.area_id)))s.has(a)||r(a)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...t],covers:[...n]}}function mn(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Ed(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[r,i]=n.split(".",2);o.callService(r,i,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var zd={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",plain_off:"Mit M\xF6beln",plain_on:"Nur Grundriss",plain_hint:"Nur Grundriss: W\xE4nde, T\xFCren, Fenster und Treppen ohne M\xF6bel \u2013 die Ger\xE4te bleiben.",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_x:"X \u2192 nach rechts",floor_shift_z:"Z \u2193 nach unten",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",top_hung:"Klappfenster (oben angeschlagen, \xF6ffnet nach au\xDFen)",top_hung_hint:"Das Fenster h\xE4ngt oben und \xF6ffnet unten nach au\xDFen \u2013 offen und gekippt sehen gleich aus.",floor_copy:"Etage duplizieren",floor_copy_name:"{name} (Kopie)",floor_copy_hint:"Legt die Etage noch einmal oben aufs Haus: R\xE4ume, W\xE4nde, Fenster, T\xFCren und M\xF6bel, ohne Verkn\xFCpfungen zu Home Assistant (die Ger\xE4te dort sind andere).",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",floor_order_hint:"\xC4ndert nur die Reihenfolge der Etagen in der Liste und bei den Etagen-Bildern. Wo eine Etage im 3D-Haus liegt, bestimmt ihre \u201EH\xF6he \xFCber Boden\u201C.",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",strip_length:"L\xE4nge (m)",strip_thickness:"Dicke (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_ask:"Rohr liegt \u2013 soll es weiter zum Pool? Dann kommt hier ein Loch samt Weg nach drau\xDFen:",tech_ask_loose:"Offen lassen",tech_step_tee:"Tippe auf das Rohr, wo die Abzweigung hin soll \u2013 es wird dort geteilt, und von dem T-St\xFCck ziehst du die n\xE4chste Leitung.",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Wie mit einem Stift: auf ein Ger\xE4t dr\xFCcken und die Leitung ziehen \u2013 Zacken verschwinden, die Rohre laufen waagerecht und senkrecht. Endet der Strich auf einem Ger\xE4t oder Rohr, ist er dort angeschlossen; endet er im Leeren, fragt NeonPlan, wohin die Leitung f\xFChrt (zum Skimmer, Bodenablauf, zu den Einl\xE4ssen, zum Kanal) und legt das Loch und den Weg drau\xDFen selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",side_resize:"Seitenleiste breiter oder schmaler ziehen",furn_extra:"Zusatzwert am Symbol (Sensor, z. B. Wassertemperatur)",settings_house:"Haus",settings_weather:"Wetter & Warnungen",settings_modules:"Module",roof_basics:"Dachform",module_no_settings:"Dieses Modul hat keine eigenen Einstellungen.",modules_waiting:"{n} Modul(e) warten auf deine Freigabe:",module_waits:"Wartet auf deine Freigabe \u2013 l\xE4uft erst, wenn du den Code angesehen und freigegeben hast.",module_update_waits:"Update auf v{to} wartet auf deine Freigabe (bis dahin l\xE4uft v{from}).",module_waits_where:"Freigeben unter Erweiterungen \u2192 Module.",module_review:"Code ansehen & freigeben",module_review_update:"Update ansehen & freigeben",module_review_title:"Modul freigeben: {name}",module_review_meta:"Von {publisher} \xB7 Version {release} \xB7 {kb} KB \xB7 Fingerabdruck {sha}",module_review_note:"Ein Modul ist Code, der in deinem Browser mit deinem Home-Assistant-Zugang l\xE4uft. NeonPlan startet ihn erst nach deiner Freigabe, und jedes Update braucht wieder deine Freigabe. Gib ihn nur frei, wenn du dem Anbieter vertraust.",module_approve:"Freigeben",module_approved:"{name} ist freigegeben und l\xE4uft jetzt.",module_review_admin:"Nur ein Administrator kann Module freigeben.",module_imported_waits:"Es l\xE4uft erst nach deiner Freigabe (Erweiterungen \u2192 Module).",voice_sentences_kept:"Die Satzdatei f\xFCr {langs} hast du selbst ge\xE4ndert \u2013 NeonPlan l\xE4sst sie unangetastet.",voice_sentences_failed:"Die Satzdatei lie\xDF sich nicht schreiben.",voice_sentences_file:"NeonPlan legt die Datei custom_sentences/<Sprache>/neonplan3d.yaml erst an, wenn du hier S\xE4tze w\xE4hlst. Eine Datei, die du selbst ge\xE4ndert hast, wird nie \xFCberschrieben; beim Entfernen der Integration wird NeonPlans Datei gel\xF6scht.",modules_none:"Noch kein Modul eingespielt.",pack_pro_module:"Pro-Erweiterung von {publisher} \xB7 wird ein Modul",pack_fun_module:"Fun-Pack von {publisher} \xB7 wird ein Modul",modules_pro_note:"Die Pro-Erweiterungen stehen schon hier: Sie werden nach und nach zu Modulen, die ihren Code aus dem Shop mitbringen \u2013 an der Bedienung \xE4ndert sich nichts.",module_import:"Modul einspielen \u2026",module_imported:"\u201E{name}\u201C von {publisher} eingespielt",module_import_hint:"Module kommen als .fp3dpack-Datei aus dem Shop (mit Kundenkonto): ein signiertes Pack mit Code, das NeonPlan nachl\xE4dt \u2013 gepr\xFCft und an deine Installation gebunden. Die S\xE4tze eines Sprach-Moduls stehen danach unter \u{1F399} Sprachsteuerung.",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_other_hint:"Grundriss aus Sweet Home 3D, einem iPhone-Scan, CAD (DXF), Blender/SketchUp oder einer Saugroboterkarte?",backup_other:"Zur Import-Seite (Beta)",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",plan_main:"Zuhause",plan_pick:"Grundriss w\xE4hlen",plan_all:"Alle Grundrisse",plan_new:"Neuer Grundriss",plan_manage:"Grundrisse verwalten",plan_alerts_elsewhere:"{n} Warnung(en) in einem anderen Grundriss",plans_title:"Grundrisse",plans_intro:"Mehrere Geb\xE4ude oder Wohnungen in einer Installation: das Haus, die Garage, das Gartenhaus, eine Ferienwohnung. Jeder Grundriss hat eigene Etagen, R\xE4ume und Wiederherstellungspunkte; oben w\xE4hlst du, welcher gezeigt wird.",plan_icon:"Symbol w\xE4hlen",plan_name:"Name des Grundrisses",plan_size:"{floors} Etage(n) \xB7 {rooms} R\xE4ume",plan_up:"Nach oben",plan_down:"Nach unten",plan_open:"\xD6ffnen",plan_shown:"wird gezeigt",plan_delete:"In den Papierkorb",plan_delete_confirm:"\u201E{name}\u201C in den Papierkorb legen? Er bleibt {days} Tage wiederherstellbar.",plan_new_name:"Grundriss {n}",plan_new_placeholder:"Name, z. B. Gartenhaus",plan_from:"Woraus",plan_from_empty:"Leer",plan_from_copy:"Kopie von \u201E{name}\u201C",plan_from_file:"Aus einer Datei (Export)",plan_create:"Anlegen",plan_locate:"Live Presence",plan_locate_hint:"Die Erkennung, wer in welchem Raum ist, arbeitet mit einem Grundriss.",plan_locate_other:"Live Presence arbeitet mit dem Grundriss \u201E{name}\u201C. Wechsle dorthin oder w\xE4hle in \u2699 \u2192 Grundrisse einen anderen.",plan_trash:"Papierkorb",plan_trash_days:"noch {n} Tage",plan_restore:"Wiederherstellen",card_plan:"Grundriss",plan_lights_on:"Lichter an",plan_open_now:"Fenster und T\xFCren offen",plan_open_n:"{n} offen",plan_site:"Grundst\xFCck",plan_id_hint:"Die ID f\xFCr die Dashboard-Karte (plan: \u2026)",site_intro:"Wo stehen die anderen Geb\xE4ude neben dem Haus? Zieh sie an ihren Platz und dreh sie passend \u2013 oben w\xE4hlst du dann \u201EGrundst\xFCck\u201C und siehst alles zusammen in 3D. Ohne Haken steht ein Grundriss woanders (eine Ferienwohnung).",site_turn_left:"15\xB0 nach links drehen",site_turn_right:"15\xB0 nach rechts drehen",site_turn_90:"Um 90\xB0 drehen",site_elsewhere:"steht woanders",plan_alert:"{plan}: {text}",plan_alert_go:"Ansehen",room_card:"Karte f\xFCr diesen Raum",room_card_hint:"Legt eine Karten-Vorlage an, die nur diesen Raum zeigt \u2013 f\xFCrs Tablet in diesem Raum. Auf dem Tablet w\xE4hlst du dann nur noch die Vorlage.",card_rooms:"Nur diese R\xE4ume",card_rooms_hint:"Tippe R\xE4ume auf dem Plan an: Die Karte zeigt dann nur sie, mit ihren M\xF6beln und Ger\xE4ten \u2013 etwa f\xFCrs Kinderzimmer-Tablet oder eine Ferienwohnung. Ein einzelner Raum \xF6ffnet sich mit seinen Ger\xE4ten daneben. Leer: das ganze Haus.",card_rooms_leave:"Andere R\xE4ume d\xFCrfen ge\xF6ffnet werden",card_rooms_leave_hint:"Ohne Haken bleibt das Tablet in diesen R\xE4umen.",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Erkennungs-Sensoren selbst w\xE4hlen",camera_detect_choose_hint:"Nur die angehakten Sensoren z\xE4hlen f\xFCr Pins, Bewegungsspur und Live-Regie \u2013 auch Sensoren eines anderen Ger\xE4ts, z. B. Frigates Personen-Sensor f\xFCr eine Reolink-Kamera. Ohne Haken nimmt NeonPlan alle Sensoren am Ger\xE4t der Kamera.",camera_detect_add:"Sensor hinzuf\xFCgen",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_popup:"Bei neuer Erkennung das Bild kurz einblenden",camera_detect_popup_hint:"Kamera-Cockpit: Erkennt die Kamera etwas Neues (Person, Auto, Bewegung), erscheint ihr Bild 20 Sekunden unten rechts \u2013 ein Tipp schaut durch die Kamera.",camera_popup_open:"Durch die Kamera schauen",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",room_cleaning:"Reinigung (Saugroboter)",room_cleaning_hint:"Das Skript oder der Knopf, der den Saugroboter in diesen Raum schickt (die Raumreinigung deiner Roboter-Integration). Das Raumfenster zeigt dann \u201E\u{1F9F9} Saugen\u201C, und \u201ESaug hier\u201C oder \u201ESaug die K\xFCche\u201C geht per Sprache.",panel_clean:"Saugen",panel_everything_off:"Alles aus ({n})",voice_clean_started:"Der Saugroboter f\xE4hrt los: {room}.",voice_clean_none:"F\xFCr {room} ist keine Reinigung eingestellt (Editor \u2192 Raum \u2192 Reinigung).",voice_off_done:"{room}: {n} Ger\xE4te aus.",voice_off_nothing:"{room}: Es ist schon alles aus.",voice_noroom:"Welcher Raum? Sag zum Beispiel \u201ESaug die K\xFCche\u201C, oder stell beim Tablet ein, wo es h\xE4ngt.",voice_noroom_open:"Tippe zuerst einen Raum an, dann gilt \u201Eda\u201C f\xFCr ihn.",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",view_settings:"Einstellungen",view_settings_admin:"Nur Administratoren k\xF6nnen diese Einstellungen \xE4ndern \u2013 sie gelten f\xFCr das ganze Haus.",view_settings_look:"Darstellung",glass_size:"Gr\xF6\xDFe der Glas-Kacheln",glass_size_hint:"Energie, W\xE4rmepumpe, Auto, Ger\xE4te und die anderen Glas-Kacheln in der 3D-Ansicht",view_settings_alerts:"Warnungen",view_settings_control:"Bedienung",view_settings_more:"Alle weiteren Einstellungen findest du im Editor unter \u2699 Einstellungen.",lines_add:"Hinzuf\xFCgen",lines_new:"Neuer Eintrag \u2026",sheet_mic:"Sprechen",sheet_listening:"Ich h\xF6re zu \u2026",sheet_mic_failed:"Nichts verstanden \u2013 das Mikrofon braucht HTTPS und eine Sprach-Pipeline mit Spracherkennung.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck. Bei einer Kamera bleibt der Pin mit allen Kamera-Einstellungen, das Modell kommt nur dazu.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",camera_look_builtin:"Standard-Kameramodell",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_hint:"Ein Bildschirm zeigt von selbst, was im Haus passiert: Es klingelt \u2013 die Ansicht fliegt zur Haust\xFCr und schaut durch die Kamera. Jedes Ereignis ist aus, bis du es einschaltest.",director_here:"Auf diesem Ger\xE4t einschalten",director_here_hint:"Gilt nur f\xFCr diesen Browser, z. B. das Wandtablet. Auf einer Dashboard-Karte schaltest du die Live-Regie in den Karten-Einstellungen ein.",director_doorbell:"Es klingelt: zur T\xFCr fliegen und durch die Kamera schauen",director_doorbell_entity:"Klingel",director_doorbell_camera:"Kamera an der T\xFCr",director_no_doorbell:"Keine Klingel gefunden. W\xE4hle die Ereignis- oder Bin\xE4rsensor-Entit\xE4t deiner Klingel.",director_motion:"Eine Kamera sieht jemanden",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",director_appliances:"Waschmaschine, Trockner oder Sp\xFClmaschine fertig",director_alerts:"Neue Warnung (Rauch, Wasser, Alarm, Fenster bei Regen \u2026)",director_hold:"Zur\xFCck nach (Sekunden)",director_back_hint:"Danach kehrt die Ansicht dorthin zur\xFCck, wo sie war \u2013 au\xDFer jemand hat den Bildschirm inzwischen ber\xFChrt. Wer das Tablet gerade bedient, wird nur von der Klingel und von Warnungen unterbrochen. Die Klingel bleibt doppelt so lange.",voice:"Sprachsteuerung",voice_hint:"Ein Mikrofon-Knopf unten links in der 3D-Ansicht: antippen und sprechen. \u201EZeig das Wohnzimmer\u201C, \u201EObergeschoss\u201C oder \u201Edas ganze Haus\u201C zeigt den Ort; alles andere (\u201ELicht im Flur an\u201C) geht an Assist von Home Assistant.",voice_here:"Auf diesem Ger\xE4t einschalten",aliases:"Weitere Namen f\xFCr die Sprache",aliases_hint:"Weitere Namen, mit Komma getrennt \u2013 so sprichst du den \u201ESmart TV Pro\u201C als \u201EWohnzimmerfernseher\u201C oder \u201EGlotze\u201C an. Gilt f\xFCr die Sprachsteuerung und die Suche.",aliases_placeholder:"z. B. Wohnzimmerfernseher, Glotze",voice_understands:"Das versteht NeonPlan",voice_examples:"\u201EZeig das Wohnzimmer\u201C|\u201EGeh ins Obergeschoss\u201C|\u201EZeig das ganze Haus\u201C|\u201EZeig die Waschmaschine\u201C / \u201EWo ist der Trockner?\u201C|\u201EZeig die Kamera Haust\xFCr\u201C / \u201EZeig die Auffahrtkamera\u201C|\u201EZeig die Kameras\u201C|Alles andere (\u201ELicht im Flur an\u201C) geht an Assist",voice_needs:"Braucht https, die Freigabe des Mikrofons (in Fully Kiosk: Web Content Settings \u2192 Mikrofonzugriff) und eine Assist-Pipeline mit Spracherkennung. Auf einer Dashboard-Karte schaltest du den Knopf in den Karten-Einstellungen ein.",voice_showing:"Ich zeige {name}.",screen_name:"Bildschirmname (f\xFCr Assist)",screen_name_placeholder:"z. B. K\xFCche",screen_name_hint:"Fragst du Assist (\u201EZeig das Wohnzimmer\u201C) oder ruft eine Automation den Dienst neonplan3d.ask, reagiert jede offene NeonPlan-Ansicht. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen.",voice_room:"Raum dieses Ger\xE4ts (f\xFCr \u201Ehier\u201C)",voice_room_none:"Keiner (wie bisher)",voice_room_hint:"H\xE4ngt das Tablet in einem Raum, reichen S\xE4tze ohne Raumnamen: \u201ELicht an\u201C, \u201EMach hier das Licht aus\u201C oder \u201ERollladen runter\u201C gelten dann f\xFCr diesen Raum. Nennst du einen Raum, gilt der genannte. Zur Auswahl stehen die R\xE4ume mit Home-Assistant-Bereich. Ein Sprachger\xE4t wie der Voice PE braucht das nicht, es kennt seinen Bereich selbst.",card_voice_area:"Raum f\xFCr \u201Ehier\u201C",card_voice_area_none:"Keiner (Einstellung des Ger\xE4ts)",card_voice_area_hint:"H\xE4ngt das Tablet mit diesem Dashboard in einem Raum, gelten S\xE4tze ohne Raumnamen (\u201ELicht an\u201C, \u201EMach hier das Licht aus\u201C) f\xFCr diesen Bereich. Ohne Auswahl gilt der Raum, der auf dem Ger\xE4t selbst eingestellt ist.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",director_mic_test:"\u{1F399}\uFE0F Mikrofon testen",director_mic_hint:"Pr\xFCft auf diesem Ger\xE4t https, Mikrofon und die Spracherkennung von Assist und zeigt, welchen Raum ein Satz \xF6ffnen w\xFCrde. Es wird nichts geschaltet.",voice_pipeline:"Assist-Pipeline auf diesem Ger\xE4t",voice_sentences:"S\xE4tze f\xFCr Assist",voice_sentences_distinct:"Nur eindeutige (\u201EZeig \u2026\u201C, \u201EFrag das Haus \u2026\u201C, \u201ENeonPlan, \u2026\u201C)",voice_sentences_all:"Alle Fragen (f\xE4ngt auch S\xE4tze ab, die Home Assistant selbst beantwortet)",voice_sentences_off:"Keine (Standard \u2013 keine Satzdatei)",voice_sentences_hint:"Was Assist an NeonPlan weitergibt. Fragen wie \u201EWelche Fenster sind offen?\u201C beantwortet Home Assistant sonst selbst \u2013 mit \u201EFrag das Haus, welche Fenster offen sind\u201C erreichst du immer NeonPlan.",voice_pipeline_preferred:"Bevorzugte aus Home Assistant",voice_pipeline_no_stt:"ohne Spracherkennung",backdrop:"Hintergrund",backdrop_kind:"Hinter dem Haus",backdrop_look:"Himmel des Looks (Standard)",backdrop_color:"Eine Farbe",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",backdrop_top:"Farbe oben",backdrop_bottom:"Farbe unten",backdrop_image_url:"Bild-Adresse",backdrop_dim:"Abdunkeln",backdrop_image_bad:"Diese Adresse geht nicht: https://\u2026 oder ein Pfad wie /local/hintergrund.jpg",backdrop_hint:"Das Bild legst du in Home Assistant unter config/www ab, dann hei\xDFt es /local/dateiname.jpg. Das Abdunkeln h\xE4lt die Neonlinien lesbar. Kostet keine Leistung \u2013 auch auf alten Tablets.",director_live:"Livebild beim Durchschauen",director_live_hint:"Statt eines Standbilds alle paar Sekunden l\xE4uft das Video der Kamera (\xFCber den Player von Home Assistant). Braucht mehr Leistung \u2013 auf sehr alten Tablets lieber aus lassen.",director_triggers:"Eigene Ausl\xF6ser",director_triggers_hint:"Geht eine dieser Entit\xE4ten an oder auf \u2013 eine zweite Klingel, das Garagentor, das Gartentor \u2013, fliegt die Ansicht hin und schaut durch die gew\xE4hlte Kamera (ohne Kamera: zum Ger\xE4t).",director_trigger_entity:"Ausl\xF6ser",director_trigger_add:"+ Ausl\xF6ser hinzuf\xFCgen",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",sun_shadow:"Sonnenbahn und Hausschatten",tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",tap_in_room_hint:"In der Haus- und Etagenansicht \xF6ffnet ein Tipp auf ein Ger\xE4t seinen Raum, statt es zu schalten \u2013 so l\xF6st ein Tipp auf die Etage nicht aus Versehen einen Rollladen aus. Im ge\xF6ffneten Raum bleibt alles wie gewohnt; langes Dr\xFCcken \xF6ffnet \xFCberall das Men\xFC.",right_click_back:"Rechtsklick geht eine Ebene zur\xFCck",right_click_back_hint:"Ein kurzer Rechtsklick in der 3D-Ansicht schlie\xDFt den Raum bzw. geht vom Stockwerk zum Haus zur\xFCck. Aus: Ein Rechtsklick wirkt wie ein Klick.",sun_shadow_hint:"\xDCber dem Haus zeigt ein Bogen den Weg der Sonne heute mit Auf- und Untergang, auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne. Braucht die Nordrichtung; auf der Stufe \u201ETablet\u201C nur der Bogen.",sun_arc:"Sonnenbogen um",sun_arc_house:"das Haus",sun_arc_plot:"das ganze Grundst\xFCck",sun_arc_hint:"Wo Sonnenbogen und Kompassring stehen: um das Haus (Standard) oder um alles Gezeichnete \u2013 R\xE4ume, Au\xDFenfl\xE4chen, Z\xE4une und freie W\xE4nde.",window_glow:"Fenster leuchten nachts nach drau\xDFen",window_glow_hint:"Ist es drau\xDFen dunkel, f\xE4llt das Licht beleuchteter R\xE4ume durch die Fenster als warmer Schein auf Rasen und Terrasse davor \u2013 in der Lichtfarbe des Raums, schw\xE4cher hinter heruntergelassenen Rolll\xE4den.",gpu_safe_note:"In diesem Browser sind Sonnenbahn, Hausschatten und der Fensterschein bei Nacht aus: Gleich nach dem Start ging die Grafik verloren. Die n\xE4chste NeonPlan-Version versucht es wieder.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_unavailable:"Kontakt nicht verf\xFCgbar: {name}",alert_short_contact_unavailable:"Kontakt nicht verf\xFCgbar",alert_unavailable:"Warnen, wenn ein Fenster- oder T\xFCrkontakt nicht verf\xFCgbar ist",alert_unavailable_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand wei\xDF. Dann kommt eine Warnung.",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack gibt es gratis mit jedem Kundenkonto.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Halloween und Haustiere",gift_text:"Die Fun-Packs Halloween (K\xFCrbisse, Flederm\xE4use, Hexenkessel und ein Geist, der durchs Haus schwebt) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Halloween und Haustiere",gift_text_free:"K\xFCrbisse, Flederm\xE4use und ein Geist, der durchs Haus schwebt \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",room_order_up:"Raum nach oben (fr\xFCher in der Raumleiste)",room_order_down:"Raum nach unten (sp\xE4ter in der Raumleiste)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_templates:"Karten-Vorlagen",card_templates_intro:"Stell eine Dashboard-Karte einmal hier ein, zum Beispiel \u201EK\xFCche Fire-Tablet\u201C. Auf dem Tablet w\xE4hlst du im Kartenformular nur noch die Vorlage. \xC4nderst du sie hier, \xFCbernimmt jedes Tablet mit dieser Vorlage sie von selbst.",card_templates_empty:"Noch keine Vorlage. Leg mit \u201E+ Neue Vorlage\u201C die erste an.",card_templates_no_editor:"Das Kartenformular lie\xDF sich nicht laden. Lade die Seite neu (Strg+F5).",card_template_new:"Neue Vorlage",card_template_new_name:"Neue Vorlage",card_template_copy_name:"{name} (Kopie)",card_template_delete_ask:"Vorlage \u201E{name}\u201C l\xF6schen? Karten, die sie nutzen, laufen dann mit ihren eigenen Einstellungen weiter.",card_template_reloaded:"Neu laden geschickt: die offenen Bildschirme laden in den n\xE4chsten Sekunden neu.",card_template_reload_failed:"Neu laden ging nicht. L\xE4uft NeonPlan in Home Assistant schon in dieser Version (nach einem Update neu starten)?",card_template_reload_all:"Alle Bildschirme neu laden",card_template_reload_hint:"L\xE4dt jede offene NeonPlan-Ansicht neu, etwa nach einem Update. In Automationen: Aktion \u201Eneonplan3d.reload_screens\u201C.",card_template_name:"Name",card_template_duplicate:"Duplizieren",card_template_preview:"Vorschau",card_template_preview_off:"Vorschau aus",card_template_preview_on:"Vorschau zeigen",card_template_where:"Wo h\xE4ngt das Tablet?",card_template_where_hint:"Der Raum f\xFCr \u201Ehier\u201C: \u201EMach hier das Licht an\u201C gilt dann f\xFCr diesen Bereich, auch wenn die Karte immer das Erdgeschoss zeigt.",card_template_reloading:"Wird neu geladen \u2026 (ein paar Sekunden)",screen_reloading:"L\xE4dt neu \u2026",card_template_open:"Im NeonPlan-Editor bearbeiten",card_template_make:"Vorlage im NeonPlan-Editor anlegen",card_template_screen:"Bildschirm",card_template_screen_tablet:"Tablet 10\u2033 quer (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 quer (Fire 7)",card_template_screen_upright:"Tablet hochkant",card_template_screen_phone:"Handy",card_template_preview_look:"Nur zum Ansehen: Ein Tipp in die Vorschau schaltet nichts.",card_template_where_other:"Weitere Bereiche",card_template_voice_off:"Der Mikrofon-Knopf ist in dieser Vorlage aus. Ohne ihn h\xF6rt das Tablet nicht zu.",card_template_voice_on:"Mikrofon-Knopf einschalten",screens_title:"Offene Bildschirme",screens_hint:"Alle Ger\xE4te, auf denen NeonPlan gerade offen ist, und was sie zeigen. Ein Tablet im Ruhezustand kann kurz fehlen.",screens_none:"Gerade ist kein NeonPlan-Bildschirm offen.",screens_panel:"3D-Ansicht (Seitenleiste)",screens_card_own:"Karte mit eigenen Einstellungen",screens_since:"seit {time}",screens_old:"alte Version \u2013 neu laden",screens_reload:"Neu laden",screens_unknown_device:"Unbekanntes Ger\xE4t",card_template_own:"Diese Karte hat noch alte Einstellungen, die mit der Vorlage nicht mehr gelten: {list}.",card_template_own_clear:"Aufr\xE4umen (nur die Vorlage behalten)",card_template_mode:"\xC4nderungen:",card_template_live:"Sofort auf die Tablets",card_template_manual:"Erst mit Knopf \xFCbertragen",card_template_pending:"Noch nicht \xFCbertragen: Die Tablets zeigen den alten Stand, die Vorschau schon den neuen.",card_template_publish:"Auf Tablets \xFCbertragen",card_template_discard:"Verwerfen",card_template_published:"\xDCbertragen: Die Tablets zeigen jetzt den neuen Stand.",card_template_preview_big:"Gro\xDF",card_template_preview_small:"Klein",card_template_use:"So nutzt du sie: Auf dem Tablet die NeonPlan-Karte hinzuf\xFCgen und oben die Vorlage w\xE4hlen, oder im YAML:",card_template_copy:"Kopieren",card_template_copied:"Kopiert.",card_template_reload:"Bildschirme mit dieser Vorlage neu laden",card_template:"Vorlage",card_template_none:"Keine \u2013 hier einstellen",card_template_hint:"Karten-Vorlagen baust du im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen. Dann w\xE4hlst du hier nur noch eine aus.",card_template_on:"Diese Karte wird von der Vorlage gesteuert. \xC4ndere sie im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen, jedes Tablet \xFCbernimmt das von selbst.",card_template_missing:"Die Karten-Vorlage \u201E{name}\u201C gibt es im Plan nicht mehr. Die Karte nutzt ihre eigenen Einstellungen.",card_plain:"Nur Grundriss (ohne M\xF6bel)",room_bar:"Raum-Leiste",room_bar_hint:"Unten eine Karte pro Raum: Temperatur, offene Fenster, was l\xE4uft und ein Licht-Schalter. Tippen fliegt in den Raum. Oben stehen dann nur noch die Etagen; das Auge l\xE4sst die Leiste stehen.",room_bar_none:"Ohne Raum-Leiste",room_bar_rooms:"Raum-Leiste",room_bar_all:"+ Favoriten",room_bar_hide:"Raum-Leiste einklappen",room_bar_on:"An",room_bar_off:"Aus",room_bar_light:"Licht",room_bar_activate:"Aktivieren",room_bar_lights:"{n} an",room_bar_lights_off:"Lichter im Raum ausschalten",room_bar_open:"offen",room_bar_playing:"l\xE4uft",card_room_bar:"Raum-Leiste unten",card_room_bar_favorites:"Favoriten in der Raum-Leiste",card_room_bar_favorites_hint:"Szenen, Skripte und Schalter aus den Favoriten (Einstellungen \u2192 Favoriten) vorne in der Leiste.",show_if:"Nur zeigen, wenn \u2026",show_if_hint:"Das St\xFCck steht in 3D nur, solange eine Entit\xE4t in einem Zustand ist \u2013 der Weihnachtsbaum, solange input_boolean.weihnachten an ist, die Deko nur im Dezember. Im Editor bleibt es immer sichtbar.",show_if_entity:"Entit\xE4t",show_if_state:"Zustand",show_if_state_hint:"Mehrere Zust\xE4nde mit Komma (z. B. \u201Eon, home\u201C); \u201E<20\u201C oder \u201E>80\u201C vergleicht eine Zahl; ein \u201E!\u201C davor dreht es um (gezeigt in jedem anderen Zustand). Leer hei\xDFt \u201Eon\u201C.",show_if_now_on:"gerade sichtbar",show_if_now_off:"gerade ausgeblendet",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",ext_sum_modules:"Module",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_module:"Modul von {publisher} \xB7 l\xE4uft im Haus",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",fun_title:"Fun-Packs",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",fun_in_account:"Gratis in deinem Kundenkonto \u2013 oben bei deinen Packs installieren.",fun_register:"\u{1F381} Kostenloses Kundenkonto anlegen",fun_register_steps:"Gratis mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Shop-Verbindung einf\xFCgen.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_intro_settings:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Installiert werden sie unter Erweiterungen bei den Packs; hier stellst du sie ein.",fun_moved:"Die Fun-Packs stellst du jetzt im Editor unter \u2699 Einstellungen \u2192 Fun-Packs ein. Neue Fun-Packs installierst du weiter hier unter den Paketen.",fun_open_settings:"Zu den Fun-Pack-Einstellungen",fun_name_winter:"Winter & Weihnachten",fun_feature_winter:"Weihnachtsbaum, dessen Lichterkette mit seiner Steckdose leuchtet, ein Adventskranz, der jeden Adventssonntag von selbst eine Kerze mehr anz\xFCndet, Fensterstern, Schwibbogen, Leucht-Rentier, Schneemann, Geschenke und Lichterketten.",winter_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Winter & Weihnachten\u201C. Mit \u201ENur zeigen, wenn \u2026\u201C kommt sie jeden Dezember von selbst wieder, z. B. solange input_boolean.weihnachten an ist.",winter_roof_lights:"Lichterkette an der Dachkante",winter_roof_entity:"Leuchtet mit",winter_roof_auto:"Automatisch: abends ab dem 1. Advent bis 6. Januar",winter_roof_color:"Bunt statt warmwei\xDF",winter_roof_outline:"Auch an Giebeln und First (das ganze Dach)",winter_snow:"Schnee auf Dach und Rasen, solange es schneit (taut bei Plusgraden weg)",winter_firework:"Feuerwerk \xFCber dem Haus um Mitternacht an Silvester",fun_name_halloween:"Halloween",fun_feature_halloween:"K\xFCrbisse, die mit einem Licht leuchten, Spinnennetz, Flederm\xE4use, Grabsteine, Skelett, Hexenkessel und Kerzen \u2013 und ein Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Halloween\u201C. K\xFCrbis, Kessel und Kerzen leuchten mit einem verkn\xFCpften Licht.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",print_title:"\u{1F5A8} Neu: Dein Haus als 3D-Druck",print_text:"Etagen zum Abheben, Dach als Deckel, Bodenplatte mit eurem Namen \u2013 f\xFCr Supporter kostenlos. Beta \u2013 sag uns, wie es klappt.",print_open:"Zu NeonPlan Print",print_copied:"Code kopiert \u2013 dort einf\xFCgen",print_copy_failed:"Code konnte nicht kopiert werden \u2013 bitte oben abschreiben",print_dot:"Neu",print_dot_hint:"Neu f\xFCr Supporter: NeonPlan Print",print_pass_line:"\u{1F5A8} inklusive NeonPlan Print (Beta): dein Haus als 3D-Druck",print_editor:"\u{1F5A8} In 3D drucken",print_editor_hint:"Lade die Datei dort hoch.",supporter_how:"So geht's: In Discord /supporter tippen (nicht einf\xFCgen), den Befehl in der Liste dar\xFCber anklicken, dann den Code ins Feld \u201Ecode\u201C einf\xFCgen und Enter dr\xFCcken. Den Code nie als normale Nachricht senden \u2013 die sieht jeder.",nl_title:"\u{1F381} 4 M\xF6bel-Packs geschenkt",nl_text:"Abonniere den NeonPlan-Newsletter und bekomm die Schnupper-Packs Wohnzimmer, K\xFCche, Schlafzimmer und Bad gratis \u2013 sie erscheinen nach der Best\xE4tigung automatisch hier. Im Newsletter: neue Versionen, neue M\xF6bel und Angebote. Abmelden jederzeit m\xF6glich.",nl_button:"Newsletter abonnieren",nl_hide:"Nicht mehr zeigen",nl_after:"Danke! Bitte best\xE4tige die Mail, die gleich kommt. Die Packs erscheinen danach hier \u2013 sp\xE4testens beim n\xE4chsten t\xE4glichen Abgleich, sofort mit \u201E{button}\u201C.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_ready:"Liegt f\xFCr dich bereit \u2013 unten bei deinen Packs installieren.",beta_supporter_missing:"Als Supporter bekommst du diese Beta. Auf deinem Schl\xFCssel ist sie noch nicht freigeschaltet \u2013 schreib uns kurz im Discord, wir schalten sie frei.",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (Modul): Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; die Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, pH, Chlor/Redox und Salz mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor, Salz und Frost; die Pooltechnik baut sich auf Knopfdruck auf, das Wasser flie\xDFt sichtbar durch die Rohre",pool_pump:"Filterpumpe",pool_ph:"pH-Wert",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",card_room:"Start-Raum",card_room_none:"Keiner (Etage oder Haus)",card_walk:"Rundgang erlaubt",card_walk_hint:"Der Knopf f\xFCr den Rundgang auf Augenh\xF6he durchs Haus",card_tt_range:"Zeitreise beginnt",card_tt_range_24h:"vor 24 Stunden",card_tt_range_7d:"vor einer Woche",card_tt_speed:"Abspieltempo",card_tt_speed_day:"1 Tag in 6 s",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_hub:"Kabelknoten gesetzt",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",furn_cable_to_grid:"Kabel endet am Netzanschluss",furn_cable_to_grid_hint:"Energie Pro: Das Kabel dieses Wechselrichters l\xE4uft zum Netzanschluss statt zum Z\xE4hler \u2013 etwa wenn Wechselrichter und Netzanschluss weit vom Hausverteiler entfernt sind.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",style_slide:"Schiebe (eine Scheibe f\xE4hrt vor die feste)",preset_terrace_slide:"Hebe-Schiebet\xFCr",preset_window_slide:"Schiebefenster",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",gate_hint:"Tore im Zaun: eine L\xFCcke in einer Seite, wie eine T\xFCr in der Wand. Mit einer Entit\xE4t \xF6ffnet sich das Tor auch in 3D, ein Tipp darauf schaltet sie.",gate_n:"Tor {n}",gate_edge:"Seite",gate_edge_n:"Seite {n} ({len} m)",gate_kind:"Art",gate_kind_swing:"Pforte (ein Fl\xFCgel)",gate_kind_double:"Fl\xFCgeltor (zwei Fl\xFCgel)",gate_kind_slide:"Schiebetor",gate_at:"Mitte ab Anfang der Seite",gate_flip:"Anschlag auf der anderen Seite",gate_flip_slide:"L\xE4uft zur anderen Seite auf",gate_outward:"\xD6ffnet nach au\xDFen",gate_entity:"Antrieb oder Schalter",gate_contact:"Kontakt (offen/zu)",gate_time:"Laufzeit (s)",gate_remove:"Tor entfernen",gate_add:"+ Tor im Zaun",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_area_hint:"Mit einem Bereich wird die Fl\xE4che wie ein Raum: Antippen in 3D \xF6ffnet sie mit den Ger\xE4ten des Bereichs, sie steht in der Raumleiste und tr\xE4gt ihren Namen.",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_end:"Ende",roof_end_auto:"wie die Form",roof_end_gable:"Giebel",roof_end_hint:"Wie der First an diesem Ende endet: Giebel (senkrechte Wand), Walm oder Kr\xFCppelwalm \u2013 so geht zum Beispiel ein Walm nur an einer Seite.",roof_swap:"Seiten tauschen",roof_turn:"Drehung",roof_turn_hint:"Dreht diesen Dachteil im Plan (im Uhrzeigersinn), z. B. f\xFCr einen Anbau im Winkel. Gauben und Zwerchgiebel darauf drehen mit. 0\xB0 = wie bisher.",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_overhang_sides:"\xDCberstand je Seite",roof_overhang_sides_hint:"Den Dach\xFCberstand f\xFCr jede Seite selbst festlegen. Aus: automatisch \u2013 kein \xDCberstand, wo die Dachfl\xE4che an einen h\xF6heren Teil des Hauses st\xF6\xDFt.",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",devices_hide_all:"Alle {n} im Raumfenster ausblenden",devices_show_all:"Alle {n} wieder zeigen",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel zwischen Haus und Etagen bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",well_depth:"Tiefe vor der Wand (m)",sill_board:"Fensterbank",sill_board_hint:"Automatisch: ab 30 cm Br\xFCstung eine Fensterbank innen und au\xDFen; keine bei einem Fenster, das direkt auf einem anderen sitzt (Oberlicht, geteilte Glasfront).",sill_board_auto:"automatisch",sill_board_none:"keine",sill_board_inside:"nur innen",sill_board_outside:"nur au\xDFen",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_angle:"\xD6ffnungswinkel",door_angle_hint:"Wie weit die T\xFCr in 3D offen steht: ohne Sensor immer, mit Sensor, sobald er offen meldet. Standard: ohne Sensor halb offen, mit Sensor ganz offen.",door_angle_default:"Standard",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",lib_room_all:"Alle R\xE4ume",lib_room_living:"Wohnen",lib_room_dining:"Essen",lib_room_kitchen:"K\xFCche",lib_room_bedroom:"Schlafen",lib_room_kids:"Kinder",lib_room_bath:"Bad",lib_room_office:"B\xFCro",lib_room_hall:"Flur",lib_room_utility:"Hauswirtschaft",lib_room_garage:"Garage",lib_room_garden:"Garten",lib_room_hobby:"Hobby & Fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Sitzm\xF6bel",lib_kind_table:"Tische",lib_kind_storage:"Schr\xE4nke & Regale",lib_kind_bed:"Betten",lib_kind_kitchen:"K\xFCche",lib_kind_appliance:"Ger\xE4te",lib_kind_bath:"Bad",lib_kind_lamp:"Leuchten",lib_kind_media:"TV & Audio",lib_kind_office:"B\xFCro",lib_kind_tech:"Technik & Smart Home",lib_kind_heating:"Heizen & Klima",lib_kind_energy:"Energie",lib_kind_household:"Haushalt",lib_kind_deco:"Deko",lib_kind_plant:"Pflanzen",lib_kind_outdoor:"Garten & Au\xDFen",lib_kind_kids:"Kinder",lib_kind_sport:"Fitness",lib_kind_pets:"Haustiere",lib_kind_vehicle:"Fahrzeuge",lib_kind_stairs:"Treppen & Gel\xE4nder",lib_kind_architecture:"Architektur",lib_recent:"Zuletzt benutzt",lib_favorites:"Favoriten",lib_fav_add:"Als Favorit merken",lib_fav_remove:"Favorit entfernen",lib_chip_electric:"Verkn\xFCpfbar",lib_chip_light:"Leuchtet",lib_chip_outdoor:"Au\xDFen",lib_more:"{n} weitere zeigen",lib_basic:"Basis",lib_sizes:"{n} Gr\xF6\xDFen",lib_hint_room:"Vorgeschlagen f\xFCr den offenen Raum \u2013 oben umschalten.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_rise:"Anstieg (\xB0)",strip_rise_hint:"Der Streifen steigt entlang seiner L\xE4nge an, etwa die Treppe hinauf oder am Handlauf (~35\u201340\xB0). Die H\xF6he \xFCber Boden ist dann seine Mitte.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_slope:"Schr\xE4g",wall_slope_hint:"Schr\xE4ge Wand: eine eigene H\xF6he an jeder Ecke, die Oberkante l\xE4uft gerade dazwischen \u2013 Pultdach, Hang, Oberlichter auf der hohen Seite. Fenster und T\xFCren bleiben unter der Oberkante.",wall_slope_start:"H\xF6he an Ecke {n} (m)",wall_slope_end:"H\xF6he an Ecke {n} (m)",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto (Tag/Neon nach Sonne)",persons:"Personen",locate:"Ortung",persons_figure:"Figur",persons_pin:"Pin",persons_off:"aus",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",mount_below_hint:"Unter 0 nur au\xDFerhalb der R\xE4ume: Stufen hinunter zu einer tiefer liegenden Terrasse oder einem Lichtschacht.",frame_section:"Bilderrahmen",frame_kind:"Zeigt",frame_kind_none:"Nichts (dunkle Scheibe)",frame_kind_calendar:"Kalender",frame_kind_camera:"Kamera",frame_kind_media:"Musik / Fernseher (Cover)",frame_kind_person:"Person",frame_kind_photo:"Foto",frame_kind_weather:"Wetter",frame_source_calendar:"Kalender (mehrere mit Komma)",frame_source_camera:"Kamera",frame_source_media:"Media Player",frame_source_person:"Person",frame_source_weather:"Wetter-Entit\xE4t",frame_source_photo:"Foto (URL)",frame_photo_upload:"Foto hochladen",frame_calendar_more:"Weiterer Kalender",frame_hint:"Der Rahmen zeigt den Inhalt auf seiner Fl\xE4che; ein Tipp in 3D \xF6ffnet ihn gro\xDF. Kalender: die n\xE4chsten Tage, heute zuerst, eine Farbe je Kalender.",frame_today:"Heute",frame_tomorrow:"Morgen",frame_allday:"ganzt\xE4gig",frame_nothing:"Keine Termine",frame_no_source:"Noch keine Quelle gew\xE4hlt \u2013 im Editor unter Bilderrahmen.",frame_week:"Die n\xE4chsten 7 Tage",frame_person_home:"Zuhause",frame_person_away:"Unterwegs",frame_person_in:"in {room}",frame_media_idle:"Gerade nichts",frame_kind_todo:"Einkaufs- / To-do-Liste",frame_kind_board:"Familienboard (Kalender, wer ist da, M\xFCll, Wetter)",frame_kind_persons:"Personen (wer ist zuhause)",frame_source_todo:"Liste",frame_source_persons:"Personen (leer = alle)",frame_person_more:"Weitere Person",frame_source_photos:"Fotos (URLs, mehrere mit Komma)",frame_photos_upload:"Fotos hochladen (mehrere m\xF6glich)",frame_interval:"Sekunden je Foto",frame_trigger:"Gro\xDF aufspringen bei",frame_trigger_none:"Nur beim Antippen",frame_trigger_detect:"Erkennung der Kamera (Kamera-Cockpit)",frame_trigger_hint:"Klingel, Bewegungsmelder oder Ereignis: Geht die Entit\xE4t an, springt der Rahmen f\xFCr 30 Sekunden gro\xDF auf \u2013 der T\xFCrklingel-Rahmen.",frame_remind:"Erinnern (Minuten vorher, leer = aus)",frame_remind_hint:"Vor einem Termin kommt ein Hinweis auf den Bildschirmen und, falls das Durchsagen-Modul da ist, eine Durchsage.",frame_now:"jetzt",frame_in_min:"in {n} min",frame_done:"Alles erledigt",frame_add_item:"Neuer Eintrag \u2026",frame_add:"Hinzuf\xFCgen",frame_who_home:"Wer ist da",frame_waste:"M\xFCll",frame_rain_soon:"Regen in {h} h ({p} %)",frame_rain_now:"Regen in K\xFCrze ({p} %)",frame_since:"seit",frame_min:"min",frame_h:"h",frame_new_event:"Termin eintragen",frame_event_title:"Was",frame_event_date:"Tag",frame_event_time:"Uhrzeit (leer = ganzt\xE4gig)",frame_event_into:"In Kalender",frame_save:"Eintragen",frame_saved:"Termin eingetragen",frame_save_failed:"Eintragen hat nicht geklappt \u2013 kann dieser Kalender schreiben?",frame_reminder:"Gleich: {what} um {when}",frame_slideshow_hint:"Mehrere Fotos wechseln sich ab; nachts dimmt die Fl\xE4che mit dem Kiosk.",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_from:"Leuchten ab (Uhr, am Vortag)",bin_until:"bis (Uhr, am Abholtag)",bin_out:"Rausgestellt (Helfer)",bin_out_hint:"Optional: an, solange die Tonne drau\xDFen steht (input_boolean, Schalter oder Bin\xE4rsensor). Dann leuchtet sie nicht mehr und ihr Schild sagt \u201Erausgestellt \u2713\u201C; ein Tipp auf die Tonne schaltet einen Helfer oder Schalter um. Eine n\xE4chtliche Automation setzt ihn zur\xFCck.",bin_out_done:"rausgestellt \u2713",bin_out_mark:"Als rausgestellt markieren",bin_next_only:"Nur die n\xE4chste Abholung beschriften",bin_days:"Schilder erst \u2026 Tage vorher zeigen",bin_days_always:"immer",bin_tags_hint:"Gilt f\xFCr alle Tonnen. Tonnen ohne Schild stehen weiter in \u201EHeute im Haushalt\u201C und zeigen beim Antippen ihre Termine.",hh_service2:"{name}: {what} f\xE4llig",hh_service2_entity:"Zweite Wartung (z. B. Station)",hh_service2_min:"Zweite f\xE4llig ab (\u2264 Prozent oder Tage)",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",hh_notes:"Pinnwand (Text-Helfer)",hh_notes_hint:"Ein Text-Helfer (input_text) oder Sensor, dessen Text in \u201EHeute im Haushalt\u201C steht \u2013 mehrere Zeilen mit | trennen. Automationen schreiben hinein (\u201EPaket liegt in der Garage\u201C), die Karte zeigt es.",heat_sensor:"Heizt (Sensor)",heat_sensor_hint:"Sagt der Thermostat nicht, ob er heizt (Tuya-Ventile melden einen \u201EWork state\u201C), nimm hier den Sensor: ein/opened/heating oder eine \xD6ffnung \xFCber 0 % l\xE4sst den Heizk\xF6rper gl\xFChen.",door_lock:"Smart Lock",door_lock_hint:"Das Schloss der T\xFCr (Nuki, Aqara \u2026): ein Pin an der T\xFCr zeigt zu oder offen, ein Tipp schlie\xDFt auf oder ab.",door_lock_btn:"Abschlie\xDFen",door_unlock_btn:"Aufschlie\xDFen",door_lock_confirm:"{name} wirklich abschlie\xDFen?",door_unlock_confirm:"{name} wirklich aufschlie\xDFen?",garage_pulse_hint:"Schalter oder Taster als Antrieb: Ein Tipp aufs Tor gibt einen Impuls (ein Schalter wird eingeschaltet, ein Taster gedr\xFCckt); ob das Tor offen ist, zeigt der Kontakt.",clock:"Uhr",clock_off:"Aus",clock_tl:"\u2196 Uhr",clock_tr:"\u2197 Uhr",clock_bl:"\u2199 Uhr",clock_br:"\u2198 Uhr",editor_floor:"Start-Etage im Editor",editor_floor_auto:"Erste der Liste",editor_floor_hint:"Mit welcher Etage der Editor \xF6ffnet.",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",hh_teaser_plant:"Mit Haushalt Pro zeigt die Pflanze, wann sie Wasser braucht.",hh_teaser_appliance:"Mit Haushalt Pro zeigt das Ger\xE4t seine Restzeit und \u201EFertig!\u201C, bis die T\xFCr aufgeht.",hh_teaser_fridge:"Mit Haushalt Pro warnt NeonPlan, wenn die K\xFChlschrankt\xFCr zu lange offen steht.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",tech_mount:"Montage",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_status:"Status (Verbindung, Zustand)",ap_clients_sensor:"Sensor: verbundene Ger\xE4te",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"Der Ring leuchtet blau, solange der Access Point da ist, und rot, wenn er fehlt \u2013 dann zeigt sich auch sein Symbol. Diagnose-Entit\xE4ten (etwa von UniFi) stehen hier mit zur Wahl.",heater_entity:"Ger\xE4t (water_heater, Thermostat oder Schalter)",heater_temp:"Sensor: Wassertemperatur (optional)",heater_hint:"Der Speicher gl\xFCht warm, solange er heizt (Thermostat \u201Eheizt\u201C, Schalter an oder Leistung \xFCber der Schwelle), und zeigt die Wassertemperatur \u2013 aus dem Sensor oder vom Ger\xE4t selbst.",furn_lamp_fan:"Deckenventilator mit Licht",fan_entity:"Ventilator (fan-Entit\xE4t)",fan_hint:"Das Licht oben schaltet die Leuchte. Mit einem Ventilator drehen sich die Fl\xFCgel mit seiner Stufe, und er bekommt ein eigenes Symbol daneben: Tippen schaltet ihn, lange dr\xFCcken stellt die Stufe ein.",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",gang_count_switch:"Tasten im Rahmen",gang_count_socket:"Dosen im Rahmen",socket_kind:"Bauform",socket_indoor:"Innen",socket_outdoor:"Au\xDFensteckdose mit Klappe",gang_switch:"Taste schaltet",gang_socket:"Dose schaltet",gang_switch_hint:"Jede Taste bekommt ihre eigene Entit\xE4t (Licht, Schalter, L\xFCfter) und leuchtet, solange sie an ist \u2013 ein Licht in seiner Farbe. Antippen schaltet; bei mehreren Tasten \xF6ffnet sich ein kleines Men\xFC.",gang_socket_hint:"Jede Dose bekommt ihre eigene Entit\xE4t (das Relais, der Zwischenstecker) und auf Wunsch einen Leistungssensor; sie leuchtet gr\xFCn, solange sie an ist. Dieselbe Entit\xE4t darf an mehreren Dosen h\xE4ngen \u2013 zwei Steckdosen an einem Relais.",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab der eingestellten Uhrzeit bis zur Uhrzeit am Abholtag (gilt f\xFCr alle Tonnen); ihre Markierung zeigt \u201EHeute\u201C oder \u201EMorgen\u201C, Antippen der Tonne zeigt die n\xE4chsten Termine. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Pro",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",household_teaser_bin:"Mit Haushalt Pro leuchtet die Tonne am Vorabend der Abholung \u2013 aus deinem Abfallkalender.",household_teaser_mail:"Mit Haushalt Pro leuchtet der Briefkasten, sobald Post da ist \u2013 bis er geleert wurde.",awning_cover:"Markise (Cover)",motor_cover:"Antrieb (Cover)",curtain_side:"\xD6ffnet nach",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",motor_time:"Laufzeit (s)",motor_invert_hint:"F\xFCr Covers, die 100 % melden, wenn der Vorhang zu oder die Leinwand unten ist.",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_glow_color:"Feste Farbe in 3D",furn_glow_color_hint:"Die Lampe leuchtet im Plan immer in dieser Farbe, egal welche Farbe das Licht meldet \u2013 an/aus und Helligkeit kommen weiter vom Licht.",furn_only_color:"Nur leuchten, wenn das Licht diese Farbe zeigt",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen, Nur wenn aktiv (an, offen, erkannt) und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_active:"Nur wenn aktiv",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_meter_reading:"Z\xE4hlerstand (m\xB3 oder Liter)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_hub:"Kabelknoten",energy_hub_point:"Kabel treffen sich an einem eigenen Punkt",energy_hub_point_hint:"Energie Pro: Alle Kabel laufen zu diesem Punkt (z. B. dem Hausverteiler) statt zum Stromz\xE4hler \u2013 praktisch, wenn der Z\xE4hler am Netzanschluss steht.",energy_hub_set:"Punkt im Plan setzen",energy_hub_tap:"Tippe im Plan auf die Stelle, an der sich die Kabel treffen.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_invite:"Anonyme Berichte zeigen, auf welchen Tablets und Browsern NeonPlan ruckelt und welche Fehler bei euch auftreten \u2013 so wird jedes Update genau dort besser. Freiwillig, ohne Namen oder Grundriss, und jeden Bericht kannst du vor dem Senden ansehen.",diag_invite_look:"Ansehen",diag_invite_later:"Nicht jetzt",diag_menu:"Hilf mit",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},Ad={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",plain_off:"With furniture",plain_on:"Floor plan only",plain_hint:"Floor plan only: walls, doors, windows and stairs without furniture \u2013 the devices stay.",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_x:"X \u2192 to the right",floor_shift_z:"Z \u2193 downwards",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",top_hung:"Top-hung (opens outwards at the bottom)",top_hung_hint:"The window hangs at the top and its bottom opens outwards \u2013 open and tilted look alike.",floor_copy:"Duplicate floor",floor_copy_name:"{name} (copy)",floor_copy_hint:"Puts the floor once more on top of the house: rooms, walls, windows, doors and furniture, without links to Home Assistant (the devices up there are other ones).",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",floor_order_hint:'Only changes the order of the floors in the list and the floor pictures. Where a floor sits in the 3D house comes from its "height above the ground".',default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",strip_length:"Length (m)",strip_thickness:"Thickness (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and NeonPlan lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",settings_modules:"Modules",roof_basics:"Roof shape",module_no_settings:"This module has no settings of its own.",modules_waiting:"{n} module(s) wait for your approval:",module_waits:"Waits for your approval \u2013 it runs only after you have looked at the code and approved it.",module_update_waits:"Update to v{to} waits for your approval (v{from} keeps running until then).",module_waits_where:"Approve it under Extensions \u2192 Modules.",module_review:"View code & approve",module_review_update:"View update & approve",module_review_title:"Approve module: {name}",module_review_meta:"By {publisher} \xB7 version {release} \xB7 {kb} KB \xB7 fingerprint {sha}",module_review_note:"A module is code that runs in your browser with your Home Assistant access. NeonPlan starts it only after your approval, and every update needs your approval again. Approve it only if you trust the publisher.",module_approve:"Approve",module_approved:"{name} is approved and runs now.",module_review_admin:"Only an administrator can approve modules.",module_imported_waits:"It runs only after your approval (Extensions \u2192 Modules).",voice_sentences_kept:"You changed the sentence file for {langs} yourself \u2013 NeonPlan leaves it alone.",voice_sentences_failed:"The sentence file could not be written.",voice_sentences_file:"NeonPlan creates the file custom_sentences/<language>/neonplan3d.yaml only when you pick sentences here. A file you changed yourself is never overwritten; removing the integration deletes NeonPlan's file.",modules_none:"No module installed yet.",pack_pro_module:"Pro add-on by {publisher} \xB7 becomes a module",pack_fun_module:"Fun pack by {publisher} \xB7 becomes a module",modules_pro_note:"The Pro add-ons already stand here: one by one they become modules that bring their code from the shop \u2013 nothing changes in how you use them.",module_import:"Import a module \u2026",module_imported:"Imported \u201C{name}\u201D by {publisher}",module_import_hint:"Modules come as .fp3dpack files from the shop (with a customer account): a signed pack with code NeonPlan loads \u2013 checked and bound to your installation. The sentences of a voice module then show under \u{1F399} Voice control.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_other_hint:"A floor plan from Sweet Home 3D, an iPhone scan, CAD (DXF), Blender/SketchUp or a robot vacuum map?",backup_other:"To the import page (Beta)",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",plan_main:"Home",plan_pick:"Choose floor plan",plan_all:"All floor plans",plan_new:"New floor plan",plan_manage:"Manage floor plans",plan_alerts_elsewhere:"{n} warning(s) in another floor plan",plans_title:"Floor plans",plans_intro:"Several buildings or flats in one installation: the house, the garage, the garden house, a holiday flat. Each floor plan has its own floors, rooms and restore points; choose at the top which one is shown.",plan_icon:"Choose an icon",plan_name:"Name of the floor plan",plan_size:"{floors} floor(s) \xB7 {rooms} rooms",plan_up:"Move up",plan_down:"Move down",plan_open:"Open",plan_shown:"shown",plan_delete:"Move to the bin",plan_delete_confirm:"Move \u201C{name}\u201D to the bin? It can be restored for {days} days.",plan_new_name:"Floor plan {n}",plan_new_placeholder:"Name, e.g. Garden house",plan_from:"From",plan_from_empty:"Empty",plan_from_copy:"Copy of \u201C{name}\u201D",plan_from_file:"From a file (export)",plan_create:"Create",plan_locate:"Live Presence",plan_locate_hint:"Telling who is in which room works with one floor plan.",plan_locate_other:"Live Presence works with the floor plan \u201C{name}\u201D. Switch to it, or choose another one in \u2699 \u2192 Floor plans.",plan_trash:"Bin",plan_trash_days:"{n} days left",plan_restore:"Restore",card_plan:"Floor plan",plan_lights_on:"Lights on",plan_open_now:"Windows and doors open",plan_open_n:"{n} open",plan_site:"Property",plan_id_hint:"The id for the dashboard card (plan: \u2026)",site_intro:"Where do the other buildings stand beside the house? Drag them to their place and turn them to fit \u2013 then choose \u201CProperty\u201D at the top and see everything together in 3D. Unticked, a floor plan is somewhere else (a holiday flat).",site_turn_left:"Turn 15\xB0 left",site_turn_right:"Turn 15\xB0 right",site_turn_90:"Turn by 90\xB0",site_elsewhere:"is somewhere else",plan_alert:"{plan}: {text}",plan_alert_go:"Show",room_card:"Card for this room",room_card_hint:"Makes a card template that shows only this room \u2013 for the tablet in it. On the tablet you then just pick the template.",card_rooms:"Only these rooms",card_rooms_hint:"Tap rooms on the plan: the card then shows only them, with their furniture and devices \u2013 for the kids' tablet or a holiday flat, say. A single room opens with its devices beside it. Empty: the whole house.",card_rooms_leave:"Other rooms may be opened",card_rooms_leave_hint:"Unticked, the tablet stays in these rooms.",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Choose the detection sensors yourself",camera_detect_choose_hint:"Only the ticked sensors count for pins, the motion trail and the live director \u2013 sensors of another device too, e.g. Frigate's person sensor for a Reolink camera. Without the tick NeonPlan takes every sensor on the camera's device.",camera_detect_add:"Add a sensor",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_popup:"Pop up the picture on a new detection",camera_detect_popup_hint:"Camera Cockpit: when the camera detects something new (person, car, motion), its picture shows for 20 seconds at the bottom right \u2013 a tap looks through the camera.",camera_popup_open:"Look through the camera",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",room_cleaning:"Cleaning (robot vacuum)",room_cleaning_hint:"The script or button that sends the robot vacuum to this room (the room cleaning of your robot's integration). The room panel then shows \u201C\u{1F9F9} Vacuum\u201D, and \u201Cvacuum here\u201D or \u201Cvacuum the kitchen\u201D works by voice.",panel_clean:"Vacuum",panel_everything_off:"Everything off ({n})",voice_clean_started:"The robot vacuum is on its way: {room}.",voice_clean_none:"{room} has no cleaning set (editor \u2192 room \u2192 Cleaning).",voice_off_done:"{room}: {n} devices off.",voice_off_nothing:"{room}: everything is off already.",voice_noroom:"Which room? Say e.g. \u201Cvacuum the kitchen\u201D, or set where the tablet hangs.",voice_noroom_open:"Tap into a room first, then \u201Cthere\u201D means it.",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",glass_size:"Size of the glass cards",glass_size_hint:"Energy, heat pump, car, devices and the other glass cards in the 3D view",view_settings_alerts:"Warnings",view_settings_control:"Controls",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back. A camera keeps its pin with all its camera settings; the model only joins it.",as_furniture_pick:"Pick furniture \u2026",camera_look_builtin:"Built-in camera model",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What NeonPlan understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service neonplan3d.ask reaches every open NeonPlan view. When the service names a screen, only the view with that name reacts.',voice_room:'Room of this device (for "here")',voice_room_none:"None (as before)",voice_room_hint:'When the tablet hangs in a room, sentences without a room name are enough: "Lights on", "Turn off the lights here" or "Close the blinds" then apply to this room. When you name a room, that room counts. You can choose rooms that have a Home Assistant area. A voice device like the Voice PE does not need this, it knows its area itself.',card_voice_area:'Room for "here"',card_voice_area_none:"None (the device's setting)",card_voice_area_hint:'When the tablet with this dashboard hangs in a room, sentences without a room name ("Lights on", "Turn off the lights here") apply to this area. Without a choice, the room set on the device itself counts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_sentences:"Sentences for Assist",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "NeonPlan, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",voice_sentences_hint:'What Assist hands to NeonPlan. Questions like "Which windows are open?" are otherwise answered by Home Assistant itself \u2013 "Ask the house which windows are open" always reaches NeonPlan.',voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",sun_shadow:"Sun arc and house shadow",tap_in_room:"Switch devices only in the opened room",tap_in_room_hint:"In the house and floor views a tap on a device opens its room instead of switching it \u2013 so a tap meant for the floor does not move a blind by accident. In the opened room nothing changes; a long press opens the menu everywhere.",right_click_back:"Right click goes one step back",right_click_back_hint:"A short right click in the 3D view closes the room or goes from the floor back to the house. Off: a right click works like a click.",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,sun_arc:"Sun arc around",sun_arc_house:"the house",sun_arc_plot:"the whole plot",sun_arc_hint:"Where the sun arc and the compass ring stand: around the house (default) or around everything drawn \u2013 rooms, outdoor areas, fences and free walls.",window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",gpu_safe_note:"In this browser the sun arc, the house shadow and the window glow at night are off: the graphics were lost right after the start. The next NeonPlan version tries again.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. The fun pack is free with every customer account.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: Halloween and pets",gift_text:"The fun packs Halloween (pumpkins, bats, a witch's cauldron and a ghost that floats through the house) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: Halloween and pets",gift_text_free:"Pumpkins, bats and a ghost that floats through the house \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_templates:"Card templates",card_templates_intro:"Set up a dashboard card here once, e.g. \u201CKitchen Fire tablet\u201D. On the tablet you only pick the template in the card dialog. When you change it here, every tablet with this template follows by itself.",card_templates_empty:"No template yet. Create the first one with \u201C+ New template\u201D.",card_templates_no_editor:"The card editor could not be loaded. Reload the page (Ctrl+F5).",card_template_new:"New template",card_template_new_name:"New template",card_template_copy_name:"{name} (copy)",card_template_delete_ask:"Delete the template \u201C{name}\u201D? Cards using it then carry on with their own settings.",card_template_reloaded:"Reload sent: the open screens reload within the next seconds.",card_template_reload_failed:"Reload failed. Does NeonPlan in Home Assistant run this version yet (restart after an update)?",card_template_reload_all:"Reload all screens",card_template_reload_hint:"Reloads every open NeonPlan view, e.g. after an update. In automations: the action \u201Cneonplan3d.reload_screens\u201D.",card_template_name:"Name",card_template_duplicate:"Duplicate",card_template_preview:"Preview",card_template_preview_off:"Preview off",card_template_preview_on:"Show preview",card_template_where:"Where does the tablet hang?",card_template_where_hint:"The room for \u201Chere\u201D: \u201CTurn on the lights here\u201D then applies to this area, even when the card always shows the ground floor.",card_template_reloading:"Reloading \u2026 (a few seconds)",screen_reloading:"Reloading \u2026",card_template_open:"Edit in the NeonPlan editor",card_template_make:"Create a template in the NeonPlan editor",card_template_screen:"Screen",card_template_screen_tablet:"Tablet 10\u2033 landscape (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 landscape (Fire 7)",card_template_screen_upright:"Tablet upright",card_template_screen_phone:"Phone",card_template_preview_look:"Only to look at: a tap in the preview switches nothing.",card_template_where_other:"Other areas",card_template_voice_off:"The microphone button is off in this template. Without it the tablet does not listen.",card_template_voice_on:"Turn on the microphone button",screens_title:"Open screens",screens_hint:"Every device NeonPlan is open on right now, and what it shows. A tablet asleep may be missing for a moment.",screens_none:"No NeonPlan screen is open right now.",screens_panel:"3D view (sidebar)",screens_card_own:"Card with its own settings",screens_since:"since {time}",screens_old:"old version \u2013 reload",screens_reload:"Reload",screens_unknown_device:"Unknown device",card_template_own:"This card still has old settings that no longer apply with the template: {list}.",card_template_own_clear:"Tidy up (keep only the template)",card_template_mode:"Changes:",card_template_live:"Straight to the tablets",card_template_manual:"Send with a button",card_template_pending:"Not sent yet: the tablets show the old state, the preview the new one.",card_template_publish:"Send to the tablets",card_template_discard:"Discard",card_template_published:"Sent: the tablets show the new state now.",card_template_preview_big:"Large",card_template_preview_small:"Small",card_template_use:"How to use it: add the NeonPlan card on the tablet and pick the template at the top, or in YAML:",card_template_copy:"Copy",card_template_copied:"Copied.",card_template_reload:"Reload screens with this template",card_template:"Template",card_template_none:"None \u2013 set it up here",card_template_hint:"Card templates are made in the NeonPlan editor under \u2699 Settings \u2192 Card templates. Then you only pick one here.",card_template_on:"This card follows its template. Change it in the NeonPlan editor under \u2699 Settings \u2192 Card templates; every tablet takes it over by itself.",card_template_missing:"The card template \u201C{name}\u201D is no longer in the plan. The card uses its own settings.",card_plain:"Floor plan only (no furniture)",room_bar:"Room bar",room_bar_hint:"A card per room at the bottom: temperature, open windows, what plays and a light switch. A tap flies into the room. The top then keeps only the floors; the eye leaves the bar in place.",room_bar_none:"No room bar",room_bar_rooms:"Room bar",room_bar_all:"+ favourites",room_bar_hide:"Fold the room bar away",room_bar_on:"On",room_bar_off:"Off",room_bar_light:"Light",room_bar_activate:"Activate",room_bar_lights:"{n} on",room_bar_lights_off:"Switch the room's lights off",room_bar_open:"open",room_bar_playing:"playing",card_room_bar:"Room bar at the bottom",card_room_bar_favorites:"Favourites in the room bar",card_room_bar_favorites_hint:"Scenes, scripts and switches from the favourites (Settings \u2192 Favourites) at the front of the bar.",show_if:"Only show while \u2026",show_if_hint:"The piece stands in 3D only while an entity is in a state \u2013 the Christmas tree while input_boolean.christmas is on, the decoration only in December. The editor always shows it.",show_if_entity:"Entity",show_if_state:"State",show_if_state_hint:'Several states with commas (e.g. "on, home"); "<20" or ">80" compares a number; a "!" in front turns it round (shown in every other state). Empty means "on".',show_if_now_on:"shown now",show_if_now_off:"hidden now",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",ext_sum_modules:"modules",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_module:"Module by {publisher} \xB7 runs in the house",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",fun_title:"Fun packs",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",fun_in_account:"Free in your customer account \u2013 install it among your packs above.",fun_register:"\u{1F381} Create a free customer account",fun_register_steps:"Free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Shop connection.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_intro_settings:"Free extras for fun \u2013 for everyone with a customer account. They are installed under Extensions among the packs; here you set them.",fun_moved:"Fun packs are now set in the editor under \u2699 Settings \u2192 Fun packs. New fun packs are still installed here among the packs.",fun_open_settings:"Open the fun pack settings",fun_name_winter:"Winter & Christmas",fun_feature_winter:"A Christmas tree whose fairy lights glow with its plug, an Advent wreath that lights one more candle each Sunday of Advent by itself, a window star, a candle arch, a light-up reindeer, a snowman, presents and string lights.",winter_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Winter & Christmas". With "Only show while \u2026" they come back every December by themselves, e.g. while input_boolean.christmas is on.`,winter_roof_lights:"Fairy lights along the eaves",winter_roof_entity:"Shine with",winter_roof_auto:"Automatic: in the evening from the first Sunday of Advent to 6 January",winter_roof_color:"Colourful instead of warm white",winter_roof_outline:"Up the gables and along the ridge too (the whole roof)",winter_snow:"Snow on roof and lawn while it snows (melts when it thaws)",winter_firework:"Firework over the house at midnight on New Year's Eve",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",print_title:"\u{1F5A8} New: your house as a 3D print",print_text:"Floors you lift off, the roof as a lid, a base plate with your name \u2013 free for supporters. Beta \u2013 tell us how it works.",print_open:"Open NeonPlan Print",print_copied:"Code copied \u2013 paste it there",print_copy_failed:"Could not copy the code \u2013 please copy it from above",print_dot:"New",print_dot_hint:"New for supporters: NeonPlan Print",print_pass_line:"\u{1F5A8} includes NeonPlan Print (beta): your house as a 3D print",print_editor:"\u{1F5A8} Print in 3D",print_editor_hint:"Upload the file there.",supporter_how:`How: in Discord, type /supporter (don't paste it), click the command in the list that pops up, paste the code into the "code" field and press Enter. Never send the code as a normal message \u2013 everyone can see it.`,nl_title:"\u{1F381} 4 furniture packs as a gift",nl_text:"Subscribe to the NeonPlan newsletter and get the taster packs living room, kitchen, bedroom and bathroom for free \u2013 they appear here by themselves once you confirm. The newsletter brings new versions, new furniture and offers. Unsubscribe at any time.",nl_button:"Subscribe to the newsletter",nl_hide:"Don't show again",nl_after:"Thank you! Please confirm the mail that is on its way. The packs then appear here \u2013 at the next daily check at the latest, at once with \u201C{button}\u201D.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_ready:"Ready for you \u2013 install it below with your packs.",beta_supporter_missing:"As a supporter you get this beta. It is not on your key yet \u2013 drop us a line on Discord and we'll unlock it.",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",card_room:"Start room",card_room_none:"None (floor or house)",card_walk:"Allow the walk",card_walk_hint:"The button for the walk through the house at eye height",card_tt_range:"Time travel starts",card_tt_range_24h:"24 hours ago",card_tt_range_7d:"a week ago",card_tt_speed:"Replay speed",card_tt_speed_day:"1 day in 6 s",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_hub:"Cable hub set",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",furn_cable_to_grid:"Cable ends at the grid point",furn_cable_to_grid_hint:"Energy Pro: this inverter's cable runs to the grid point instead of the meter \u2013 for instance when the inverter and the grid connection are far from the house board.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",style_slide:"Sliding (one pane slides in front of the fixed one)",preset_terrace_slide:"Lift-and-slide door",preset_window_slide:"Sliding window",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",gate_hint:"Gates in the fence: a gap in one side, like a door in a wall. With an entity the gate opens in 3D too, and a tap on it switches it.",gate_n:"Gate {n}",gate_edge:"Side",gate_edge_n:"Side {n} ({len} m)",gate_kind:"Kind",gate_kind_swing:"Garden gate (one leaf)",gate_kind_double:"Double gate (two leaves)",gate_kind_slide:"Sliding gate",gate_at:"Middle from the side's start",gate_flip:"Hinge on the other side",gate_flip_slide:"Opens towards the other side",gate_outward:"Opens outwards",gate_entity:"Motor or switch",gate_contact:"Contact (open/closed)",gate_time:"Run time (s)",gate_remove:"Remove gate",gate_add:"+ Gate in the fence",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_overhang_sides:"Overhang per side",roof_overhang_sides_hint:"Set the roof overhang for each side yourself. Off: automatic \u2013 no overhang where the section meets a taller part of the house.",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",devices_hide_all:"Hide all {n} in the room panel",devices_show_all:"Show all {n} again",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching between the house and the floors keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",well_depth:"Depth from the wall (m)",sill_board:"Sill",sill_board_hint:"Automatic: a window board inside and a sill outside from a sill height of 30 cm; none for a window that sits directly on another one (transom light, split glass front).",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_angle:"Opening angle",door_angle_hint:"How far the door stands open in 3D: without a sensor always, with one as soon as it reports open. Default: half open without a sensor, fully open with one.",door_angle_default:"Default",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",lib_room_all:"All rooms",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",lib_recent:"Recently used",lib_favorites:"Favourites",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_chip_electric:"Linkable",lib_chip_light:"Lights up",lib_chip_outdoor:"Outdoors",lib_more:"Show {n} more",lib_basic:"Basic",lib_sizes:"{n} sizes",lib_hint_room:"Suggested for the open room \u2013 switch above.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto (Day/Neon by the sun)",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",mount_below_hint:"Below 0 only outside the rooms: steps down to a sunken terrace or a light well.",frame_section:"Picture frame",frame_kind:"Shows",frame_kind_none:"Nothing (dark pane)",frame_kind_calendar:"Calendar",frame_kind_camera:"Camera",frame_kind_media:"Music / TV (cover)",frame_kind_person:"Person",frame_kind_photo:"Photo",frame_kind_weather:"Weather",frame_source_calendar:"Calendars (several with commas)",frame_source_camera:"Camera",frame_source_media:"Media player",frame_source_person:"Person",frame_source_weather:"Weather entity",frame_source_photo:"Photo (URL)",frame_photo_upload:"Upload photo",frame_calendar_more:"Another calendar",frame_hint:"The frame shows the content on its face; a tap in 3D opens it large. Calendar: the next days, today first, one colour per calendar.",frame_today:"Today",frame_tomorrow:"Tomorrow",frame_allday:"all day",frame_nothing:"No events",frame_no_source:"No source chosen yet \u2013 in the editor under Picture frame.",frame_week:"The next 7 days",frame_person_home:"Home",frame_person_away:"Away",frame_person_in:"in {room}",frame_media_idle:"Nothing playing",frame_kind_todo:"Shopping / to-do list",frame_kind_board:"Family board (calendar, who is home, bins, weather)",frame_kind_persons:"People (who is home)",frame_source_todo:"List",frame_source_persons:"People (empty = everyone)",frame_person_more:"Another person",frame_source_photos:"Photos (URLs, several with commas)",frame_photos_upload:"Upload photos (several at once)",frame_interval:"Seconds per photo",frame_trigger:"Pops up large on",frame_trigger_none:"Only when tapped",frame_trigger_detect:"The camera's detection (Camera Cockpit)",frame_trigger_hint:"A doorbell, a motion sensor or an event: when the entity comes on, the frame pops up large for 30 seconds \u2013 the doorbell frame.",frame_remind:"Remind (minutes before, empty = off)",frame_remind_hint:"Before an event a note shows on the screens and, with the announcements module, it is spoken.",frame_now:"now",frame_in_min:"in {n} min",frame_done:"All done",frame_add_item:"New item \u2026",frame_add:"Add",frame_who_home:"Who is home",frame_waste:"Bins",frame_rain_soon:"Rain in {h} h ({p} %)",frame_rain_now:"Rain soon ({p} %)",frame_since:"for",frame_min:"min",frame_h:"h",frame_new_event:"Add an event",frame_event_title:"What",frame_event_date:"Day",frame_event_time:"Time (empty = all day)",frame_event_into:"Into calendar",frame_save:"Add",frame_saved:"Event added",frame_save_failed:"Adding failed \u2013 can this calendar be written to?",frame_reminder:"Soon: {what} at {when}",frame_slideshow_hint:"Several photos take turns; at night the face dims with the kiosk.",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_out:"Put out (helper)",bin_out_hint:'Optional: on while the bin stands outside (input_boolean, switch or binary sensor). It then stops glowing and its tag says "put out \u2713"; a tap on the bin switches a helper or switch. A nightly automation turns it back off.',bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",bin_days_always:"always",bin_tags_hint:'For all bins. Bins without a tag still show in "Today in the household" and show their pickups when tapped.',hh_service2:"{name}: {what} due",hh_service2_entity:"Second service (e.g. dock)",hh_service2_min:"Second due at (\u2264 percent or days)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",garage_pulse_hint:"A switch or button as the drive: a tap on the door gives it a pulse (a switch is turned on, a button pressed); whether the door is open comes from the contact.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',hh_teaser_plant:"With Household Pro the plant shows when it needs water.",hh_teaser_appliance:'With Household Pro the appliance shows its time left and "Done!" until the door opens.',hh_teaser_fridge:"With Household Pro NeonPlan warns when the fridge door stands open too long.",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press sets the speed.",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',household_teaser_bin:"With Household Pro the bin glows the evening before its pickup \u2013 from your waste calendar.",household_teaser_mail:"With Household Pro the mailbox glows as soon as post is in it \u2013 until it is emptied.",awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_glow_color:"Fixed colour in 3D",furn_glow_color_hint:"The lamp always glows in this colour in the plan, whatever colour the light reports \u2013 on/off and brightness still come from the light.",furn_only_color:"Glow only while the light shows this colour",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show, Only while active (on, open, detected) and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_active:"Only while active",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_hub:"Cable hub",energy_hub_point:"Cables meet at a point of their own",energy_hub_point_hint:"Energy Pro: all cables run to this point (e.g. the house board) instead of the meter \u2013 handy when the meter stands at the grid connection.",energy_hub_set:"Set the point in the plan",energy_hub_tap:"Tap the plan where the cables meet.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_invite:"Anonymous reports show on which tablets and browsers NeonPlan stutters and which errors happen in your home \u2013 so every update gets better exactly there. Voluntary, without names or your floor plan, and you can look at every report before it is sent.",diag_invite_look:"Have a look",diag_invite_later:"Not now",diag_menu:"Help improve",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},yf=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","sk","zh","pt"],to=new Map,Ni=new Map;function Bi(o){let e=(o??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return yf.includes(t)?t:null}function gn(o){let e=Bi(o);return!e||to.has(e)}function jo(o){let e=Bi(o);if(!e||to.has(e))return Promise.resolve();let t=Ni.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=97195f595255`,import.meta.url).href;t=fetch(n).then(r=>r.ok?r.json():{}).then(r=>{to.set(e,r&&typeof r=="object"?r:{})}).catch(()=>{to.set(e,{})}).finally(()=>Ni.delete(e)),Ni.set(e,t)}return t}function T(o,e,t={}){let n=o?.language??navigator.language,r=n.startsWith("de")?null:Bi(n),s=(n.startsWith("de")?zd:r&&to.get(r)||Ad)[e]??Ad[e]??zd[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function J(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var kf={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Ce(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Vi(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return i<=.1?0:Math.min(1,.3+i/10)}function Rd(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=kf[n.state];if(!r)return null;let i=n.attributes,s=r.cloud??0;typeof i.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,i.cloud_coverage/100)));let a=r.wind??0;if(typeof i.wind_speed=="number"){let c=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=Vi(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:s,wind:a,lightning:!!r.lightning}}function Id(o,e){let t=new Set(e??Hl);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var xf=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household","frames"],Sf=["fun_pets","fun_halloween","fun_winter"],Ki=["pool","room_bar","frames"];function Gi(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Fd(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function ot(o){return!Ki.includes(o)||o!=="diagnostics"&&o!=="locate"&&o!=="room_bar"&&C(o)||Gi()}var $f=["fridge_smart"];function Mf(o){return xf.includes(o)||$f.includes(o)||Sf.includes(o)}var Ui=o=>(o??navigator.language).toLowerCase().startsWith("de");function Dd(o){return`https://mastershort.de/my-account/?lang=${Ui(o)?"de":"en"}&src=neonplan-app`}function Hd(o){return Ui(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Pf={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#68-haushalt-pro",en:"pro-add-ons/#68-household-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Wd(o,e){let t=Ui(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",r=e?Pf[e]:void 0,i=r?t?r.de:r.en:"",[s,a]=i.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Tf(o=mt()){let e=new Set;for(let t of o)for(let n of t.features??[])Mf(n)&&e.add(n);return e}function C(o,e){return Tf(e).has(o)}var Ef=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),zf=new Set(["power","plug","connectivity","running"]);function qo(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return zf.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Ef.has(n)||n.startsWith("ob ")}function Zi(o){let e=he(o);if(!e)return!1;if(Af.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var Af=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var be=["#3a3f47","#3a3f47"],Ot=["#23262b","#23262b"],Ve=["#5a3b25","#5a3b25"],pe=["#1f4fa8","#1f4fa8"],wt=["#e3b616","#e3b616"],ee=["#2f7d3b","#2f7d3b"],Ld={default:{rest:be,bio:Ve,paper:pe,plastic:wt,glass:ee,garden:ee,recycling:wt,other:be},DE:{rest:Ot,bio:Ve,paper:pe,plastic:wt,glass:ee,garden:ee,recycling:wt},AT:{rest:be,bio:Ve,paper:[be[0],"#c0262d"],plastic:wt,glass:ee,garden:ee},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ee,paper:pe,plastic:be,glass:ee,garden:ee},NL:{rest:be,bio:ee,paper:pe,plastic:["#3a3f47","#e57a1f"],glass:ee,garden:ee},BE:{rest:be,bio:ee,paper:pe,plastic:pe,glass:ee,garden:ee},GB:{rest:Ot,bio:["#3a3f47","#5a3b25"],paper:pe,plastic:pe,glass:Ot,garden:Ve,recycling:pe},US:{rest:Ot,bio:ee,paper:pe,plastic:pe,glass:pe,garden:ee,recycling:pe},CA:{rest:Ot,bio:ee,paper:pe,plastic:pe,glass:pe,garden:ee,recycling:pe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:be,bio:Ve,paper:[be[0],"#e3b616"],plastic:[be[0],"#e3b616"],recycling:[be[0],"#e3b616"],glass:ee,garden:ee},IT:{rest:be,bio:Ve,paper:pe,plastic:wt,glass:ee,garden:ee},ES:{rest:be,bio:Ve,paper:pe,plastic:wt,glass:ee,garden:ee},PT:{rest:be,bio:Ve,paper:pe,plastic:wt,glass:ee,garden:ee},DK:{rest:Ot,bio:ee,paper:pe,plastic:be,glass:ee,garden:ee},SE:{rest:Ot,bio:Ve,paper:pe,plastic:be,glass:ee,garden:ee},NO:{rest:be,bio:Ve,paper:pe,plastic:be,glass:ee,garden:ee},FI:{rest:be,bio:Ve,paper:pe,plastic:be,glass:ee,garden:ee}},Nd="DE";function Bd(o){Nd=o}function Vd(o){let e=o?.config?.country;if(e)return e.toUpperCase();let t=(o?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function Rf(o,e){return Ld[e]?.[o]??Ld.default[o]??be}function Kd(o,e=Nd){let t=Rf(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var If={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function qi(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:If[e].some(r=>n.includes(r))}function Yi(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Ff(o){return o.map(e=>({day:Yi(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function Gd(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Xi(o,e,t=new Date,n=42){let r=new Map,i=o.callApi;if(!i)return r;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=Ud(s,n);return await Promise.all(e.map(async l=>{try{let c=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);r.set(l,Ff(Array.isArray(c)?c:[]))}catch{}})),r}var _n=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),Ud=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),Zo=(o,e)=>Math.round((_n(e).getTime()-_n(o).getTime())/864e5);function ji(o,e,t={}){let n=t.from??14,r=t.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=n||o===0&&i<r}function jd(o,e,t,n=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let a=_n(n);return(t.get(i)??[]).filter(l=>l.day>=a&&qi(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let s=Qi(o,e,t,n);return s?[{day:s.day,summary:s.summary}]:[]}function Qi(o,e,t,n=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let s=_n(n);if(i.startsWith("calendar.")){let d=(t.get(i)??[]).find(p=>p.day>=s&&qi(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let u=Zo(s,d.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(i)??[]).find(h=>h.day>s&&qi(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:Zo(s,p.day),day:p.day,summary:p.summary,glow:ji(Zo(s,p.day),n,r)}}return{days:u,day:d.day,summary:d.summary,glow:ji(u,n,r)}}let a=e.states[i];if(!a)return null;let l=Wf(a,n);if(l===null||l<0)return null;let c=Ud(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:ji(l,n,r)}}function Df(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&Xd.has(String(n.state).toLowerCase())}function Ji(o,e){return Df(o.bin_out,e)}function qd(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Zd(o,e=.3){let t=o.filter(a=>!a.icon),n=t.map((a,l)=>l),r=a=>n[a]===a?a:n[a]=r(n[a]);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){let c=t[a],d=t[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+e&&(n[r(l)]=r(a))}let i=new Map;t.forEach((a,l)=>i.set(r(l),[...i.get(r(l))??[],a]));let s=[];for(let a of i.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Yd(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(r=>r.days)):0;return new Set(o.filter(r=>(t===null||r.days<=t)&&(!e.nextOnly||r.days===n)).map(r=>r.id))}function Hf(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o)??/(?:^|[^\d])(\d{1,2})(-)(\d{1,2})-(\d{4})(?![\d])/.exec(o),r,i,s;if(t)[r,i,s]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),c=Number(n[3]);n[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,i=c;let d=n[4];r=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(r,i-1,s)<_n(e)&&(r+=1)}else return null;if(i<1||i>12||s<1||s>31)return null;let a=new Date(r,i-1,s);return a.getMonth()===i-1?a:null}function Wf(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;for(let l of["Days_until","days_until"]){let c=t[l];if(typeof c=="number"&&Number.isFinite(c))return Math.round(c);if(typeof c=="string"&&/^-?\d+$/.test(c.trim()))return Number(c.trim())}let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=/^\d{4}-\d{2}-\d{2}T/.test(n)?Yi(n):Hf(n,e);if(r)return Zo(e,r);let i=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(s)return Number(s[1]);let a=i.match(/\d+/g);return a?Number(a[a.length-1]):null}var Xd=new Set(["on","open","true","detected","home"]);function Cd(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Qd(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return Xd.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=Cd(r),a=Cd(e.states[i]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function Jd(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Of(o)}function ec(o){if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=he(o)?.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var tc=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function es(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let i=n.attributes,s=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let r=tc(n);return r!==null&&r<(o.moisture_min??20)}function ts(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(t);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((i-e)/6e4)):null}var Lf=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function ns(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Lf.has(e)}var Cf=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function os(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Cf.has(n))return!0;let r=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),i=!!o&&!r&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!i}function nc(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Od(o,e,t,n){let r=typeof o=="string"&&o!=="none"?o:null,i=r?t.states[r]:void 0;if(!r||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(r.startsWith("binary_sensor.")||r.startsWith("input_boolean."))return i.state==="on";let s=tc(i);if(s!==null)return s<=(e??10);let a=Yi(i.state);return!!a&&a.getTime()<=_n(n).getTime()}function oc(o,e,t=new Date){let n=[];return Od(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&Od(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var vt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),rc=o=>!!o&&(o.state==="on"||o.state==="open");function Xo(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of vt(o)){let i=e.states[r];if(rc(i)&&i?.last_changed&&t-Date.parse(i.last_changed)>=n)return r}return null}function ic(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of vt(r)){let s=e.states[i];if(!rc(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(r.door_alarm??2)*6e4-t;a>0&&(n===null||a<n)&&(n=a)}return n}var Yo=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let s=this.ended.get(e);return s===void 0?!1:r-s>12*36e5||n(s)?(this.ended.delete(e),!1):!0}};function Of(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var Nf=10*6e4,Bf=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),sc={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function no(o,e,t){let n=[];for(let d of e.floors)for(let u of d.rooms){let p=_e(o,u.area_id).filter(h=>h.startsWith("binary_sensor.")&&!!sc[String(o.states[h]?.attributes.device_class)]);p.length&&n.push({floorId:d.id,roomId:u.id,sensors:p})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:Ce(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=C("household")?e.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&vt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(p=>p.points.length>=3&&K([u.x,u.z],p.points))?.id??null,furnitureId:u.id,ids:vt(u)}))):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=l&&o.states[l]?l:null;return{rooms:n,alarms:r.filter(d=>d.startsWith("alarm_control_panel.")),weather:i,outage:s,rain:c,fridges:a}}function rs(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function Qo(o,e,t,n){let r=[];for(let a of t.rooms)for(let l of a.sensors){let c=o.states[l];c?.state==="on"&&r.push({kind:sc[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let i=t.rain?Vi(o,t.rain):null;if(i!==null?i>0:!!t.weather&&Bf.has(o.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=n.get(l.id);if(!c)continue;let d=nt(o,c,"window");d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5||r.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id})}if(t.outage&&qo(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of e.floors)for(let d of c.openings){let u=n.get(d.id);if(u)for(let p of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!p||l.has(p))continue;let h=o.states[p];if(!h||h.state!=="unavailable"&&h.state!=="unknown")continue;let f=Date.parse(h.last_changed??"");Number.isFinite(f)&&a-f<Nf||(l.add(p),r.push({kind:"contact_unavailable",entity:p,roomId:d.room_id,floorId:c.id}))}}}for(let a of t.fridges??[]){let l=e.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?Xo(l,o):null;c&&r.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId})}for(let a of t.alarms){let l=o.states[a]?.state;l==="triggered"?r.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&r.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return r}function ac(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Nt(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let r=o?G(o,t.entity):t.entity,i=T(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${T(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Vf(o,e,t){let n=o.q[0]-o.p[0],r=o.q[1]-o.p[1],i=n*n+r*r,s=i>0?Math.min(1,Math.max(0,((e-o.p[0])*n+(t-o.p[1])*r)/i)):0;return o.h0+(o.h1-o.h0)*s}var Ie=(o,e)=>[o[0]-e[0],o[1]-e[1]],yt=(o,e)=>[o[0]+e[0],o[1]+e[1]],rt=(o,e)=>[o[0]*e,o[1]*e],ss=(o,e)=>o[0]*e[0]+o[1]*e[1],bn=(o,e)=>o[0]*e[1]-o[1]*e[0],oo=o=>Math.hypot(o[0],o[1]),kt=o=>{let e=oo(o)||1;return[o[0]/e,o[1]/e]},lc=o=>[-o[1],o[0]],dc=o=>[o[1],-o[0]];function xt(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),s=[],a=x=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-x[0])<=n&&Math.abs(s[P][1]-x[1])<=n)return P;return s.push([x[0],x[1]]),s.length-1},l=[];for(let x of o){let P=x.points;if(P.length<3||Math.abs(We(P))<1e-6)continue;let A=We(P)>0,H=P.map(a);for(let N=0;N<P.length;N++){let B=H[N],Z=H[(N+1)%P.length];B!==Z&&l.push(A?{u:B,v:Z,room:x.id,edge:N,forward:!0}:{u:Z,v:B,room:x.id,edge:N,forward:!1})}}let c=i.map(x=>[a(x.a),a(x.b)]),d=new Set;for(let x of o){let P=x.points;P.length<3||(x.wall_splits??[]).forEach((A,H)=>{if(!A||H>=P.length)return;let N=P[H],B=Ie(P[(H+1)%P.length],N),Z=oo(B);for(let U of A)U>n&&U<Z-n&&d.add(a(yt(N,rt(B,U/Z))))})}let u=[];for(let x of l){let P=s[x.u],A=s[x.v],H=Ie(A,P),N=oo(H),B=rt(H,1/N),Z=[];for(let W=0;W<s.length;W++){if(W===x.u||W===x.v)continue;let F=Ie(s[W],P),te=ss(F,B);te<=n||te>=N-n||Math.abs(bn(B,F))<=n&&Z.push({t:te,id:W})}Z.sort((W,F)=>W.t-F.t);let U=[{t:0,id:x.u},...Z,{t:N,id:x.v}];for(let W=0;W+1<U.length;W++){let F=U[W],te=U[W+1],X=x.forward?F.t:N-te.t,se=x.forward?te.t:N-F.t;u.push({u:F.id,v:te.id,room:x.room,edge:x.edge,t0:X,t1:se})}}let p=new Map;for(let x of u){let P=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,A=p.get(P);A||p.set(P,A=[]),A.push(x)}let h=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),f=new Map;for(let x of u){let P=`${x.room}:${x.edge}`;f.set(P,[...f.get(P)??[],x.t0].sort((A,H)=>A-H))}let _=x=>{let P=o.find(H=>H.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(P))return P;let A=f.get(`${x.room}:${x.edge}`)??[];return P[A.indexOf(x.t0)]??null},m=x=>{let P=x.map(_).filter(H=>typeof H=="number"&&H>0);if(P.length)return Math.min(...P);let A=x.map(H=>o.find(N=>N.id===H.room)?.ceiling_height);return A.every(H=>typeof H=="number"&&H>0)?Math.max(...A):void 0},b=x=>{let P=x.map(A=>o.find(H=>H.id===A.room)?.wall_thickness?.[A.edge]).filter(A=>typeof A=="number"&&A>0);return P.length?Math.max(...P):void 0},v=x=>{for(let P of x){let A=o.find(Z=>Z.id===P.room),H=A?.wall_slopes?.[P.edge];if(!A||!H)continue;let N=A.points[P.edge],B=A.points[(P.edge+1)%A.points.length];return{p:[N[0],N[1]],q:[B[0],B[1]],h0:Math.max(.05,H[0]),h1:Math.max(.05,H[1])}}},g=x=>x.some(P=>_(P)===0),k=x=>{let P=v(x);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:m(x)}},$=[],E=[];for(let x of p.values()){let P=x[0],A=x.find(H=>H!==P&&H.u===P.v&&H.v===P.u&&H.room!==P.room);for(let H of x)H!==P&&H!==A&&H.room!==P.room&&r.push(`overlap:${P.room}:${H.room}`);if(g(A?[P,A]:[P])){A&&$.push([P.room,A.room]);continue}if(A){let H=b([P,A])??e.interior;E.push({a:P.u,b:P.v,left:H/2,right:H/2,exterior:!1,roomLeft:P.room,roomRight:A.room,sources:[h(P),h(A)],...k([P,A])})}else E.push({a:P.u,b:P.v,left:0,right:b([P])??e.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[h(P)],...k([P])})}let M=x=>kt(Ie(s[x.b],s[x.a]));for(let x of E){if(x.exterior||x.free)continue;let P=new Set;for(let H of[x.a,x.b])for(let N of E)!N.exterior||N.free||N.a!==H&&N.b!==H||Math.abs(bn(M(x),M(N)))>1e-6||(N.roomLeft===x.roomLeft?P.add("left"):N.roomLeft===x.roomRight&&P.add("right"));if(P.size!==1)continue;let A=x.left+x.right;P.has("left")?(x.left=0,x.right=A):(x.left=A,x.right=0)}i.forEach((x,P)=>{let[A,H]=c[P];if(A===H)return;let N=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],B=o.find(te=>te.points.length>=3&&K(N,te.points))?.id??null,Z=(x.thickness??e.interior)/2,U=typeof x.height=="number"&&x.height>0?x.height:void 0,W=x.slope,F=W?{p:[x.a[0],x.a[1]],q:[x.b[0],x.b[1]],h0:Math.max(.05,W[0]),h1:Math.max(.05,W[1])}:void 0;E.push({free:x.id,a:A,b:H,left:Z,right:Z,exterior:!1,roomLeft:B,roomRight:B,sources:[],...F?{height:Math.max(F.h0,F.h1),slope:F}:{height:U}})}),E=Gf(E,s,d);let R=jf(E,s);return{walls:E.map((x,P)=>{let A=s[x.a],H=s[x.b],N=R.get(`${P}:a`),B=R.get(`${P}:b`),Z=qf([N.right,B.left,H,B.right,N.left,A],1e-6);return{id:Kf(A,H),a:[A[0],A[1]],b:[H[0],H[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:Z,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{},...x.slope?{slope:x.slope}:{}}}),warnings:[...new Set(r)],open:$}}function Kf(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function is(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Gf(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(a)}});for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]],d=l.b!==s&&c.a!==s;if(l.b!==s&&(l=is(l)),c.a!==s&&(c=is(c)),l.a===c.b)continue;let u=kt(Ie(e[l.b],e[l.a])),p=kt(Ie(e[c.b],e[c.a]));if(Math.abs(bn(u,p))>1e-6||ss(u,p)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:Uf(l.sources,c.sources)},f=d?is(h):h,_=n.filter((m,b)=>b!==a[0]&&b!==a[1]);_.push(f),n.length=0,n.push(..._),r=!0;break}}return n}function Uf(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function jf(o,e){let t=new Map;o.forEach((r,i)=>{let s=kt(Ie(e[r.b],e[r.a])),a=[[r.a,{key:`${i}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${i}:b`,d:rt(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[r,i]of t){let s=e[r];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:yt(s,rt(lc(c.d),c.left)),right:yt(s,rt(dc(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],p=yt(s,rt(lc(d.d),d.left)),h=yt(s,rt(dc(u.d),u.right)),f=bn(d.d,u.d);if(Math.abs(f)<1e-4)continue;let _=bn(Ie(h,p),u.d)/f,m=yt(p,rt(d.d,_));oo(Ie(m,s))>l||(n.get(d.key).left=m,n.get(u.key).right=m)}}return n}function qf(o,e){let t=o.filter((r,i)=>oo(Ie(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Ie(s,i),c=Ie(a,s);if(Math.abs(bn(kt(l),kt(c)))<1e-7&&ss(l,c)>0){t=t.filter((d,u)=>u!==r),n=!0;break}}}return t}function Jo(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=kt(Ie(r,n));return yt(n,rt(i,t))}function cc(o,e,t){if(o.wall){let r=t.find(a=>a.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=kt(Ie(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,yt(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function uc(o,e,t,n){let r=e.rotation*Math.PI/180,i=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,e.d),a=null;for(let c of o){let d=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(d<.05)continue;let u=[(c.b[0]-c.a[0])/d,(c.b[1]-c.a[1])/d],p=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(p<-.02||p>d+.02)continue;let h=[-u[1],u[0]],f=(e.x-c.a[0])*h[0]+(e.z-c.a[1])*h[1],_=i[0]*h[0]+i[1]*h[1]>=0?1:-1;if(Math.abs(i[0]*h[0]+i[1]*h[1])<.5)continue;let m=_>0?c.left:-c.right,b=f>-c.right-1e-4&&f<c.left+1e-4,v=Math.abs(f-(m+_*(s/2)));if(!b&&v>.03||a&&v>=a.off)continue;let g=c.a[0]+u[0]*p,k=c.a[1]+u[1]*p,$=b?m+_*(s/2):f,E=c.slope?Vf(c.slope,e.x,e.z):Math.min(t,c.height??t);a={x:g+h[0]*$,z:k+h[1]*$,top:E,off:v}}if(!a)return{x:e.x,z:e.z,y:n};let l=e.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-e.h-.02)):n;return{x:a.x,z:a.z,y:l}}var it=Math.PI/180;function pc(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*it;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function io(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],r=e[1]-o.p[1],i=t?-o.s:o.s;return[o.p[0]+n*o.c-r*i,o.p[1]+n*i+r*o.c]}function Bt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1),i=pc(o),s=o.axis==="x"?(l,c)=>[l,o.flip?r-c:n+c]:(l,c)=>[o.flip?t-c:e+c,l],a=i?(l,c)=>io(i,s(l,c)):s;return o.axis==="x"?{u0:e,u1:t,w:r-n,at:a}:{u0:n,u1:r,w:t-e,at:a}}function wn(o){let e=Bt(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*it),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*it);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=_c(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*i}}function as(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var fc=.14;function mc(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function ls(o,e){return wn(o).rh-fc>e+.01}function gc(o,e,t,n){let r=null,i=Math.max(0,o.settings.roof.overhang??0);for(let s of as(o)){if(s.open||n!==void 0&&!ls(s,n))continue;let a=s.points&&s.points.length>=3?null:s.overhang_sides??null,l=b=>typeof a?.[b]=="number"?Math.max(0,a[b]):null,[c,d]=Jf(s,e,t),u=Bt({...s,rotation:0}),p=1e-6;if(c<u.u0-(l(2)??0)-p||c>u.u1+(l(3)??0)+p||d<-(l(0)??0)-p||d>u.w+(l(1)??0)+p||s.points&&s.points.length>=3&&!K([e,t],s.points))continue;let h=s.shape==="flat"||s.shape==="parapet",f=Math.max(0,s.overhang??i),m=((h?null:Qf(Xf(s,{a:l(0)??f,b:l(1)??f,u0:l(2)??f,u1:l(3)??f}),c,d))??wn(s).y(d))-fc;r=r===null?m:Math.max(r,m)}return r}function Zf(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(i=>[i[0],i[1]]);let n=Yl(o)>=0?1:-1,r=[];for(let i=0;i<t;i++){let s=o[(i+t-1)%t],a=o[i],l=o[(i+1)%t],c=hc([a[0]-s[0],a[1]-s[1]]),d=hc([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],p=[d[1]*n,-d[0]*n],h=u[0]+p[0],f=u[1]+p[1],_=Math.hypot(h,f);if(_<1e-6){r.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let m=(h*u[0]+f*u[1])/_,b=Math.min(4,1/Math.max(.25,m));r.push([a[0]+h/_*e*b,a[1]+f/_*e*b])}return r}function hc(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function Yf(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}var ro=Math.tan(30*it);function _c(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),s=Math.min(o*.3,r>1e-6?2.4/r:o*.3),a=e+i*n,l=t+s*r,c=Math.min(o-s,Math.max(i,(l-a+ro*(o-s+i))/(2*ro))),d=a+(c-i)*ro;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:p=>p<=i?e+p*n:p<=c?a+(p-i)*ro:p<=o-s?l+(o-s-p)*ro:t+(o-p)*r}}function Xf(o,e){let t=Bt(o),n=wn(o),r=t.w,i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(W,F)=>[W,F,n.y(F)],d=c(a,-i),u=c(l,-i),p=c(l,r+s),h=c(a,r+s),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*it),_=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*it);if(o.shape==="pent"){let W=[d,u,p,h],F=[[0,n.y(0)],[r,n.y(r)]];return{faces:[W],rim:W,ridges:[[p,h]],gable:F,gables:[F,F]}}if(o.shape==="pyramid"){let W=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[d,u,W],[u,p,W],[p,h,W],[h,d,W]],rim:[d,u,p,h],ridges:[[d,W],[h,W],[u,W],[p,W]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let W=_c(r,o.eave_a,o.eave_b,f,_),F=[[0,n.y(0)],[W.vla,W.yla],[W.vr,W.rh],[r-W.vlb,W.ylb],[r,n.y(r)]],te=[a,W.vla,W.yla],X=[l,W.vla,W.yla],se=[a,r-W.vlb,W.ylb],ve=[l,r-W.vlb,W.ylb],Pe=[a,W.vr,W.rh],ze=[l,W.vr,W.rh];return{faces:[[d,u,X,te],[te,X,ze,Pe],[Pe,ze,ve,se],[se,ve,p,h]],rim:[d,u,X,ze,ve,p,h,se,Pe,te],ridges:[[Pe,ze],[te,X],[se,ve]],gable:F,gables:[F,F]}}let[m,b]=ds(o)??["gable","gable"],v=cs(o,[m,b]),g=m==="gable"?[a,n.vr,n.rh]:[t.u0+v.d0,n.vr,n.rh],k=b==="gable"?[l,n.vr,n.rh]:[t.u1-v.d1,n.vr,n.rh],$=[a,v.vah,v.yh],E=[a,v.vbh,v.yh],M=[l,v.vah,v.yh],R=[l,v.vbh,v.yh],I=m==="halfhip",x=b==="halfhip",P=[[d,u,...x?[M]:[],k,g,...I?[$]:[]],[g,k,...x?[R]:[],p,h,...I?[E]:[]]];m==="hip"&&P.push([h,d,g]),I&&P.push([E,$,g]),b==="hip"&&P.push([u,p,k]),x&&P.push([M,R,k]);let A=[d,u,...b==="gable"?[k]:x?[M,R]:[],p,h,...m==="gable"?[g]:I?[E,$]:[]],H=[[g,k]];m==="hip"&&H.push([d,g],[h,g]),I&&H.push([$,g],[E,g]),b==="hip"&&H.push([u,k],[p,k]),x&&H.push([M,k],[R,k]);let N=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],B=[[0,n.y(0)],[v.vah,v.yh],[v.vbh,v.yh],[r,n.y(r)]],Z=W=>W==="gable"?N:W==="halfhip"?B:null,U=[Z(m),Z(b)];return{faces:P,rim:A,ridges:H,gable:U[0]??U[1],gables:U}}function ds(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function cs(o,e){let t=Bt(o),n=wn(o),r=t.w,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*it),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*it),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),d=c+(n.rh-c)*.55,u=i>1e-6?Math.min(n.vr,(d-o.eave_a)/i):n.vr,p=s>1e-6?Math.max(n.vr,r-(d-o.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),f=Math.min(l-.1,(n.rh-d)/Math.max(.2,i)),_=m=>m==="hip"?h:m==="halfhip"?f:0;return{d0:_(e[0]),d1:_(e[1]),yh:d,vah:u,vbh:p}}function Qf(o,e,t){let n=null;for(let r of o.faces){if(!K([e,t],r.map(v=>[v[0],v[1]])))continue;let[i,s]=r,a=r.slice(2).find(v=>Math.abs((s[0]-i[0])*(v[1]-i[1])-(s[1]-i[1])*(v[0]-i[0]))>1e-9);if(!a)continue;let l=s[0]-i[0],c=s[2]-i[2],d=s[1]-i[1],u=a[0]-i[0],p=a[2]-i[2],h=a[1]-i[1],f=c*h-d*p,_=d*u-l*h,m=l*p-c*u;if(Math.abs(_)<1e-9)continue;let b=i[2]-(f*(e-i[0])+m*(t-i[1]))/_;n=n===null?b:Math.min(n,b)}return n}function bc(o,e,t){let n=e*it,r={p:t,c:Math.cos(n),s:Math.sin(n)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(d=>io(r,d)),...Yf(o.points.map(d=>io(r,d)))};let i=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],s=io(r,i),a=s[0]-i[0],l=s[1]-i[1],c=(((o.rotation??0)+e)%360+360)%360;return c>180&&(c-=360),{...o,x0:o.x0+a,x1:o.x1+a,z0:o.z0+l,z1:o.z1+l,pivot:s,rotation:Math.abs(c)<1e-9?0:c}}function Jf(o,e,t){let[n,r]=io(pc(o),[e,t],!0),i=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-r:r-a]:[r,o.flip?s-n:n-i]}function wc(o,e,t){let n=Bt(e),r=o.floors.flatMap(_=>_.rooms.filter(m=>m.points.length>=3&&_.elevation+_.height>e.base+.05)),i=o.settings.wall_exterior,s=r.map(_=>Zf(_.points,Math.max(i,...(_.wall_thickness??[]).map(m=>m??0))+.01)),a=.35,l=(_,m)=>{if(r.some(v=>K(_(a),v.points)))return!0;let b=_(-Math.min(.3,m/2));return s.some(v=>!K(b,v)&&[.05,.2,a].some(g=>K(_(g),v)))},c=[.15,.5,.85],d=c.map(_=>n.u0+(n.u1-n.u0)*_),u=c.map(_=>n.w*_),p=_=>_==="a"?d.some(m=>l(b=>n.at(m,-b),n.w)):_==="b"?d.some(m=>l(b=>n.at(m,n.w+b),n.w)):_==="u0"?u.some(m=>l(b=>n.at(n.u0-b,m),n.u1-n.u0)):u.some(m=>l(b=>n.at(n.u1+b,m),n.u1-n.u0)),h=e.overhang_sides??null,f=(_,m)=>{let b=h?.[_];return typeof b=="number"?Math.max(0,b):p(m)?0:t};return{a:f(0,"a"),b:f(1,"b"),u0:f(2,"u0"),u1:f(3,"u1")}}function vc(o,e=t=>`roof_${t+1}`){let t=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,r=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of r){let c=l.rooms.filter(g=>g.points.length>=3),d=[...new Set(c.flatMap(g=>g.points.map(k=>a(k[0]))))].sort((g,k)=>g-k),u=[...new Set(c.flatMap(g=>g.points.map(k=>a(k[1]))))].sort((g,k)=>g-k),p=d.length-1,h=u.length-1,f=(g,k)=>g.some($=>K(k,$.points)),_=[];for(let g=0;g<h;g++){_.push([]);for(let k=0;k<p;k++){let $=[(d[k]+d[k+1])/2,(u[g]+u[g+1])/2];_[g].push(f(c,$)&&!f(s,$))}}let m=_.map(g=>g.map(()=>!1)),b=(g,k)=>_[k][g]&&!m[k][g],v=l.elevation+l.height;for(let g=0;g<h;g++)for(let k=0;k<p;k++){if(!b(k,g))continue;let $=k;for(;$+1<p&&b($+1,g);)$++;let E=g;for(;E+1<h&&Array.from({length:$-k+1},(P,A)=>b(k+A,E+1)).every(Boolean);)E++;for(let P=g;P<=E;P++)for(let A=k;A<=$;A++)m[P][A]=!0;let M=d[k]-n,R=d[$+1]+n,I=u[g]-n,x=u[E+1]+n;Math.min(R-M,x-I)<.8||i.push({id:e(i.length),x0:a(M),z0:a(I),x1:a(R),z1:a(x),shape:"gable",axis:R-M>=x-I?"x":"z",eave_a:a(v),eave_b:a(v),pitch_a:t,pitch_b:t,base:a(v),overhang:null})}s.push(...c)}return i}var tr=Math.PI/180,em=1.13,tm=1.72,nr=.025,Vt=.07,yc=.25;function ao(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:r}=xt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let i of r){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],a=i.b[1]-i.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(n.height,i.height??n.height),p=i.sources.find(_=>_.room_id===i.roomLeft)?.edge??null,h={floorId:n.id,room:i.roomLeft,edge:p,free:!!i.free},f=(_,m,b,v)=>t.push({key:_,section:null,side:"top",flat:!1,o:m,eu:b,es:[0,1,0],n:v,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:h});f(`wall:${n.id}:${i.id}`,[i.a[0]+c*i.right,n.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&f(`wall:${n.id}:${i.id}:back`,[i.b[0]-c*i.left,n.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var kc="ground";function nm(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function om(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=nm(o),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:tt(i,s,a)):e.base??0;return{key:kc,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function Gt(o,e,t=$t(o)){return e.face===kc?om(o,e):e.face.startsWith("wall:")?ao(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function us(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function rm(o,e){let t=o.settings.roof?.frame;if(t&&t.length===4&&t.every(i=>Number.isFinite(i)))return t;let n=e.rooms.flatMap(i=>i.points.map(s=>s[0])),r=e.rooms.flatMap(i=>i.points.map(s=>s[1]));return[Math.min(...n),Math.min(...r),Math.max(...n),Math.max(...r)]}function $t(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(k=>im(k,wc(o,k,k.overhang??e.overhang)));let t=us(o);if(!t)return[];let[n,r,i,s]=rm(o,t),a=o.settings.wall_exterior+e.overhang,l=n-a,c=i+a,d=r-a,u=s+a,p=t.elevation+t.height;if(e.type==="flat")return[xc("main",null,l,d,c,u,p+yc)];let h=c-l>=u-d,f=e.ridge==="short"?!h:h,_=(f?u-d:c-l)/2,m=_*Math.tan(e.pitch*tr),b=(k,$,E)=>f?[k,p+E,(d+u)/2+$]:[(l+c)/2+$,p+E,k],[v,g]=f?[l,c]:[d,u];return[-1,1].map(k=>er(`main:${k<0?"a":"b"}`,null,k<0?"a":"b",b(v,k*_,0),b(g,k*_,0),b(v,0,m),e.pitch,()=>[0,g-v]))}function im(o,e){let t=Bt(o),n=wn(o),r=(g,k,$)=>{let[E,M]=t.at(g,k);return[E,$,M]},i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let g=t.at(a,-i),k=t.at(l,t.w+s);return[xc(o.id,o.id,Math.min(g[0],k[0]),Math.min(g[1],k[1]),Math.max(g[0],k[0]),Math.max(g[1],k[1]),o.eave_a+yc)]}if(o.shape==="pent")return[er(`${o.id}:a`,o.id,"a",r(a,-i,n.y(-i)),r(l,-i,n.y(-i)),r(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=ds(o),u=d?cs(o,d):null,p=o.shape==="pyramid"||d?.[0]==="hip",h=o.shape==="pyramid"||d?.[1]==="hip",f=o.shape==="pyramid"?(t.u1-t.u0)/2:p?u.d0:0,_=o.shape==="pyramid"?(t.u1-t.u0)/2:h?u.d1:0,m=p?t.u0+f-a:0,b=h?l-(t.u1-_):0,v=[];if(n.vr>.3){let g=Math.hypot(n.vr+i,n.rh-n.y(-i));v.push(er(`${o.id}:a`,o.id,"a",r(a,-i,n.y(-i)),r(l,-i,n.y(-i)),r(a,n.vr,n.rh),o.pitch_a,k=>[m*(k/g),c-b*(k/g)]))}if(t.w-n.vr>.3){let g=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));v.push(er(`${o.id}:b`,o.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),o.pitch_b,k=>[b*(k/g),c-m*(k/g)]))}if(p||h){let g=n.y(-i),k=n.y(t.w+s),$=[];p&&$.push([`${o.id}:c`,"c",r(a,t.w+s,k),r(a,-i,g),r(t.u0+f,n.vr,n.rh)]),h&&$.push([`${o.id}:d`,"d",r(l,-i,g),r(l,t.w+s,k),r(t.u1-_,n.vr,n.rh)]);for(let[E,M,R,I,x]of $){let P=sm(E,o.id,M,R,I,x);P&&v.push(P)}}return v}function sm(o,e,t,n,r,i){let s=so(Kt(r,n));if(s<.3)return null;let a=St(Kt(r,n)),l=Kt(i,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=so(d);if(u<.3)return null;let p=St(d),h=St(Mc(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=St([-p[0],0,-p[2]]),_=Math.atan2(p[1],Math.hypot(p[0],p[2]))/tr;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:_,span:b=>{let v=Math.min(1,Math.max(0,b/u));return[c*v,s-(s-c)*v]},facing:[f[0],f[2]]}}function er(o,e,t,n,r,i,s,a){let l=St(Kt(r,n)),c=St(Kt(i,n)),d=St(Mc(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=St([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:so(Kt(r,n)),ls:so(Kt(i,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function xc(o,e,t,n,r,i,s){let a=r-t>=i-n,l=a?r-t:i-n,c=a?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function hs(o){let e=o.module_w||em,t=o.module_h||tm;return o.portrait===!1?[t,e]:[e,t]}function Sc(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function ps(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*tr:o.wall?Math.min(90,Math.max(0,e.tilt??0))*tr:0}function Ut(o,e){let[t,n]=hs(e),r=Sc(e),i=Math.max(1,...r),a=(r.length-1)*$c(o,e)+n*Math.cos(ps(o,e));return[i*t+(i-1)*nr,a]}function $c(o,e){let[,t]=hs(e),n=ps(o,e);return o.wall?t*Math.cos(n)+nr:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+nr}function am(o,e,t=!1){let[n,r]=hs(e),i=[],s=ps(o,e),a=r*Math.cos(s),l=$c(o,e),c=Sc(e),d=Math.max(1,...c),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(_,m,b)=>[o.o[0]+o.eu[0]*_+o.es[0]*m+o.n[0]*b,o.o[1]+o.eu[1]*_+o.es[1]*m+o.n[1]*b,o.o[2]+o.eu[2]*_+o.es[2]*m+o.n[2]*b],f=(_,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[b,v]=o.span(m);return _>=b-1e-6&&_<=v+1e-6};return c.forEach((_,m)=>{let b=e.align==="right"?d-_:e.align==="center"?(d-_)/2:0;for(let v=0;v<_;v++){let g=`${m}:${v}`,k=u.has(g);if(k&&!t)continue;let $=e.u+(v+b)*(n+nr),E=e.v+m*l,M=$+n,R=E+(o.flat||o.wall?a:r);if(p){if(!(f(($+M)/2,E)&&f(($+M)/2,R)))continue}else if(![[$,E],[M,E],[M,R],[$,R]].every(([N,B])=>f(N,B)))continue;if(o.wall&&s>.001){let N=Vt+r*Math.sin(s),[B,Z]=e.flip?[N,Vt]:[Vt,N],U=[h($,E,B),h(M,E,B),h(M,R,Z),h($,R,Z)],W=e.flip?E:R,F=[$+.05,M-.05].map(te=>[h(te,W,0),h(te,W,N)]);i.push({corners:U,posts:F,cell:g,skipped:k});continue}if(!o.flat){i.push({corners:[h($,E,Vt),h(M,E,Vt),h(M,R,Vt),h($,R,Vt)],posts:[],cell:g,skipped:k});continue}let I=.15,x=I+r*Math.sin(s),[P,A]=e.flip?[R,E]:[E,R],H=[h($,P,I),h(M,P,I),h(M,A,x),h($,A,x)];i.push({corners:H,posts:[$+.05,M-.05].flatMap(N=>[[h(N,P,0),h(N,P,I)],[h(N,A,0),h(N,A,x)]]),cell:g,skipped:k})}}),i}function Kt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function so(o){return Math.hypot(o[0],o[1],o[2])}function St(o){let e=so(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Mc(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var lm=.78,dm=1.18;function cm(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||lm,module_h:o.h||dm}}function um(o,e){let t=am(o,cm(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function fs(o,e,t){let n=e?um(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,i=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>i)continue;let l=a.rooms.find(c=>K([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function or(o,e){let t=o.settings.roof?.windows??[];if(!t.length)return[];let n=new Map($t(o).map(r=>[r.key,r]));return t.filter(r=>fs(o,n.get(r.face),r)?.roomId===e)}function Pc(o,e){let[t,n]=Ut(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var hm=new Set(["window","door","opening","garage_door"]),vn=null;function pm(o,e,t,n){(!vn||vn.entities!==o.entities||vn.building!==e)&&(vn={entities:o.entities,building:e,rooms:new Map});let r=vn.rooms.get(n.id);return r||(r=fn(o,t,n,or(e,n.id)).shown,vn.rooms.set(n.id,r)),r}function rr(o,e,t){let n=t?e.floors.filter(i=>i.id===t):[...e.floors].sort((i,s)=>i.elevation-s.elevation),r=[];for(let i of n)for(let[s,a]of ie(i).entries()){if(!a.name?.trim()||a.outdoor&&ie(i).findIndex(m=>m.outdoor&&m.area_id===a.area_id&&m.name===a.name)<s)continue;let l=pm(o,e,i,a),c=l.filter(m=>L(m)==="light"&&o.states[m]),d=c.filter(m=>o.states[m].state==="on"),u=l.filter(m=>{let b=o.states[m];return L(m)==="binary"&&b?.state==="on"&&hm.has(String(b.attributes.device_class??""))}).length,p=l.some(m=>L(m)==="media"&&o.states[m]?.state==="playing"),h=Be(o,i,a,"temperature"),f=h===null?null:bt(o,h);if(f===null&&a.climate?.temperature!=="none"){let m=l.filter(b=>L(b)==="climate").map(b=>o.states[b]?.attributes.current_temperature).find(b=>typeof b=="number");typeof m=="number"&&(f=m)}let _=Be(o,i,a,"humidity");r.push({floorId:i.id,roomId:a.id,name:a.name,temp:f,humidity:_,lights:c,lightsOn:d,open:u,playing:p,active:d.length>0||u>0||p})}return r}function Tc(o){return o.lightsOn.length?["turn_off",o.lightsOn]:["turn_on",o.lights]}function Ec(o,e){return(e.settings.favorites??[]).filter(t=>o.states[t]).map(t=>{let[n,r]=mn(t);return{id:t,domain:n,service:r,on:n==="homeassistant"&&o.states[t].state==="on"}})}function ir(o,e){let t=rr(o,e,null),n=t.map(i=>i.temp).filter(i=>i!==null),r=Qo(o,e,no(o,e),new Map).filter(i=>i.roomId!==null);return{rooms:t.length,lightsOn:t.reduce((i,s)=>i+s.lightsOn.length,0),open:t.reduce((i,s)=>i+s.open,0),playing:t.filter(i=>i.playing).length,temp:n.length?Math.round(n.reduce((i,s)=>i+s,0)/n.length*10)/10:null,alerts:r}}var Ee=ke`
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
`,Fe=ke`
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
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* a list to edit line by line (a module's sentences): ✕ per line, a field to add one */
  .fp3d-lines {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-lines-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 4px 4px 9px;
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    font-size: 14px;
    color: var(--fp3d-text);
  }
  .fp3d-lines-row span {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .fp3d-lines-row button {
    border: 0;
    background: none;
    color: var(--fp3d-muted);
    font: inherit;
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 6px;
  }
  .fp3d-lines-row button:hover:not(:disabled) {
    color: var(--fp3d-danger);
  }
  .fp3d-lines-add {
    display: flex;
    gap: 6px;
  }
  .fp3d-lines-add input {
    flex: 1;
    min-width: 0;
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var sr=o=>o?.icon||"\u{1F3E0}";function yn(o,e,t){return e.find(r=>r.id===t)?.name||(t===ce?T(o,"plan_main"):"?")}var ms=class extends me{static properties={hass:{attribute:!1},plans:{attribute:!1},current:{attribute:!1},admin:{type:Boolean},alerts:{attribute:!1},site:{type:Boolean},hasSite:{type:Boolean},_open:{state:!0}};constructor(){super(),this.plans=[],this.current=ce,this.admin=!1,this.alerts=null,this.site=!1,this.hasSite=!1,this._open=!1}t(e,t){return T(this.hass,e,t)}fire(e,t={}){this._open=!1,this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}close=e=>{e.composedPath().includes(this)||(this._open=!1)};connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.close)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.close)}render(){let e=this.plans.find(n=>n.id===this.current),t=[...this.alerts??new Map].filter(([n,r])=>n!==this.current&&r>0).reduce((n,[,r])=>n+r,0);return w`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${()=>this._open=!this._open}
      >
        <span class="fp3d-pp-icon">${this.site?"\u{1F3D8}":sr(e)}</span>
        <span class="fp3d-pp-name">${this.site?this.t("plan_site"):yn(this.hass,this.plans,this.current)}</span>
        ${t?w`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere",{n:t})}>${t}</span>`:y}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open?w`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(n=>w`<button role="option" aria-selected=${!this.site&&n.id===this.current} @click=${()=>this.fire("plan-pick",{plan:n.id})}>
                <span class="fp3d-pp-icon">${sr(n)}</span>
                <span class="fp3d-pp-name">${yn(this.hass,this.plans,n.id)}</span>
                ${this.alerts?.get(n.id)?w`<span class="fp3d-pp-alert">${this.alerts.get(n.id)}</span>`:y}
                <span class="fp3d-pp-size">${this.t(n.rooms===1?"floor_rooms_one":"floor_rooms",{n:n.rooms})}</span>
              </button>`)}
            ${this.hasSite?w`<button role="option" aria-selected=${this.site} @click=${()=>this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`:y}
            ${this.plans.length>1?w`<button class="fp3d-pp-extra" @click=${()=>this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`:y}
            ${this.admin?w`<hr />
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`:y}
          </div>`:y}`}static styles=[Ee,Fe,ke`
      :host {
        position: relative;
        display: inline-block;
        min-width: 0;
      }
      .fp3d-pp-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 260px;
        min-height: 36px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-pp-btn:hover,
      .fp3d-pp-btn[aria-expanded="true"] {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pp-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-pp-caret {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-pp-alert {
        min-width: 18px;
        padding: 0 5px;
        border-radius: 9px;
        background: var(--fp3d-alert, #ff4d6d);
        color: #fff;
        font-size: 11.5px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
      }
      .fp3d-pp-menu {
        position: absolute;
        z-index: 20;
        top: calc(100% + 6px);
        left: 0;
        display: grid;
        min-width: 240px;
        max-width: min(340px, 90vw);
        max-height: 60vh;
        overflow: auto;
        padding: 6px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      }
      .fp3d-pp-menu button {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        padding: 6px 10px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-pp-menu button:hover,
      .fp3d-pp-menu button[aria-selected="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-pp-menu .fp3d-pp-name {
        flex: 1;
      }
      .fp3d-pp-size {
        color: var(--fp3d-muted);
        font-size: 12px;
        white-space: nowrap;
      }
      .fp3d-pp-extra {
        color: var(--fp3d-muted) !important;
      }
      hr {
        width: 100%;
        margin: 4px 0;
        border: 0;
        border-top: 1px solid var(--fp3d-line);
      }
    `]};customElements.get("fp3d-plan-picker")||customElements.define("fp3d-plan-picker",ms);var gs=class extends me{static properties={hass:{attribute:!1},plans:{attribute:!1},buildings:{attribute:!1},current:{attribute:!1}};t(e,t){return T(this.hass,e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}render(){let e=String(this.hass?.config?.unit_system?.temperature??"\xB0C");return w`<div class="fp3d-po-veil" @click=${t=>t.target===t.currentTarget&&this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map(t=>{let n=this.buildings.get(t.id),r=n&&this.hass?ir(this.hass,n):null;return w`<button class="fp3d-po-tile ${r?.alerts.length?"fp3d-po-alert":""} ${t.id===this.current?"fp3d-po-current":""}" @click=${()=>this.fire("plan-pick",{plan:t.id})}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${sr(t)}</span><strong>${yn(this.hass,this.plans,t.id)}</strong></span>
              ${r?w`<span class="fp3d-po-facts">
                      <span>${this.t(r.rooms===1?"floor_rooms_one":"floor_rooms",{n:r.rooms})}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${r.lightsOn}</span>
                      ${r.open?w`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n",{n:r.open})}</span>`:y}
                      ${r.playing?w`<span>♪ ${r.playing}</span>`:y}
                      ${r.temp!==null?w`<span>🌡 ${J(this.hass,r.temp,1)} ${e}</span>`:y}
                    </span>
                    ${r.alerts.slice(0,3).map(i=>w`<span class="fp3d-po-warn">⚠ ${Nt(this.hass,n,i)}</span>`)}`:w`<span class="fp3d-po-facts">…</span>`}
            </button>`})}
        </div>
      </section>
    </div>`}static styles=[Ee,Fe,ke`
      .fp3d-po-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.55);
      }
      .fp3d-po {
        width: min(920px, 100%);
        max-height: 90vh;
        overflow: auto;
        padding: 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: 20px;
      }
      .fp3d-po-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 12px;
      }
      .fp3d-po-tile {
        display: grid;
        align-content: start;
        gap: 8px;
        min-height: 120px;
        padding: 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-po-tile:hover,
      .fp3d-po-current {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 18px -6px var(--fp3d-accent);
      }
      .fp3d-po-alert {
        border-color: var(--fp3d-alert, #ff4d6d);
        box-shadow: 0 0 20px -6px var(--fp3d-alert, #ff4d6d);
      }
      .fp3d-po-head {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-po-icon {
        font-size: 24px;
      }
      .fp3d-po-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .fp3d-po-warn {
        color: var(--fp3d-alert, #ff4d6d);
        font-size: 13px;
        font-weight: 600;
      }
    `]};customElements.get("fp3d-plan-overview")||customElements.define("fp3d-plan-overview",gs);var _s=":",fm=.05;function Ac(o,e){let t=o.indexOf(_s);return t>0?{plan:o.slice(0,t),id:o.slice(t+1)}:{plan:e,id:o}}function mm(o,e){let t=e.rot*Math.PI/180,n=Math.cos(t),r=Math.sin(t),i=s=>Math.round(s*1e3)/1e3;return[i(o[0]*n-o[1]*r+e.x),i(o[0]*r+o[1]*n+e.y)]}function gm(o,e,t){let n=s=>`${e}${_s}${s}`,r=s=>mm(s,t),i=s=>(((s??0)+t.rot)%360+360)%360;return{...o,id:n(o.id),rooms:o.rooms.map(s=>({...s,id:n(s.id),points:s.points.map(r),start_view:null})),openings:o.openings.map(s=>({...s,id:n(s.id),room_id:n(s.room_id),wall:s.wall?n(s.wall):s.wall})),furniture:o.furniture.map(s=>{let[a,l]=r([s.x,s.z]);return{...s,id:n(s.id),x:a,z:l,rotation:i(s.rotation)}}),placements:o.placements.map(s=>{let[a,l]=r([s.x,s.z]);return{...s,x:a,z:l,rotation:i(s.rotation)}}),outdoor:(o.outdoor??[]).map(s=>({...s,id:n(s.id),points:s.points.map(r)})),walls:(o.walls??[]).map(s=>({...s,id:n(s.id),a:r(s.a),b:r(s.b)})),background:null,start_view:null}}function zc(o,e=""){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type===void 0||t.type==="custom")return t.sections??[];let n=vc(o,r=>`${e}roof_${r+1}`);return t.type==="flat"?n.map(r=>({...r,shape:"flat"})):n}function _m(o,e,t){let n=t.rot?bc(o,t.rot,[0,0]):o,r=i=>[i[0]+t.x,i[1]+t.y];return{...n,id:`${e}${_s}${o.id}`,x0:n.x0+t.x,x1:n.x1+t.x,z0:n.z0+t.y,z1:n.z1+t.y,pivot:n.pivot?r(n.pivot):n.pivot,points:n.points?n.points.map(r):n.points}}function Rc(o,e){let t=o.floors.map(l=>({...l,rooms:[...l.rooms],openings:[...l.openings],furniture:[...l.furniture],placements:[...l.placements],outdoor:[...l.outdoor??[]],walls:[...l.walls??[]]}));for(let l of e)if(l.site?.on)for(let c of l.building.floors){let d=gm(c,l.id,l.site),u=t.find(p=>Math.abs(p.elevation-c.elevation)<fm);if(!u){t.push(d);continue}u.rooms.push(...d.rooms),u.openings.push(...d.openings),u.furniture.push(...d.furniture),u.placements.push(...d.placements),u.outdoor.push(...d.outdoor),u.walls=[...u.walls??[],...d.walls??[]]}t.sort((l,c)=>l.elevation-c.elevation);let n=zc(o),r=o.settings.roof.type!=="custom"&&o.settings.roof.type!==void 0,i=(o.settings.roof.solar??[]).map(l=>r&&n[0]&&l.face.startsWith("main:")?{...l,face:`${n[0].id}:${l.face.slice(5)}`}:l),s=[...n,...e.filter(l=>l.site?.on).flatMap(l=>zc(l.building).map(c=>_m(c,l.id,l.site)))],a={...o.settings.roof,type:"custom",sections:s,solar:i};return{...o,floors:t,card_templates:[],settings:{...o.settings,start_view:null,roof:a}}}var kn=class{others=new Map;watched="";unsubscribe=null;siteOf=null;host;constructor(e){this.host=e}watch(e,t){let n=t.plans.map(s=>s.id).filter(s=>s!==t.planId),r=`${t.planId}|${n.join(",")}`;if(!e||r===this.watched)return;this.watched=r;let i=s=>Ro(e,s).then(a=>{!t.plans.some(l=>l.id===s)||s===t.planId||(this.others=new Map(this.others).set(s,Zn(a.building)),this.host.requestUpdate())},()=>{});this.others=new Map([...this.others].filter(([s])=>n.includes(s)));for(let s of n)i(s);n.length&&!this.unsubscribe&&Qa(e,s=>{s!==t.planId&&t.plans.some(a=>a.id===s)&&i(s)}).then(s=>this.unsubscribe=s,()=>{})}stop(){this.unsubscribe?.(),this.unsubscribe=null,this.watched=""}all(e){let t=new Map(this.others);return e.building&&t.set(e.planId,e.building),t}site(e){let t=this.all(e),n=t.get(ce);if(!n)return null;let r=e.plans.filter(a=>a.id!==ce&&a.site?.on).map(a=>({id:a.id,site:a.site,building:t.get(a.id)}));if(r.some(a=>!a.building))return null;let i=[n,...r.flatMap(a=>[a.building,a.site?.x,a.site?.y,a.site?.rot])];if(this.siteOf&&this.siteOf.key.length===i.length&&this.siteOf.key.every((a,l)=>a===i[l]))return this.siteOf.to;let s=Rc(n,r.map(a=>({id:a.id,site:a.site,building:a.building})));return this.siteOf={key:i,to:s},s}};var Ic={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function xn(o){return Ic[o]}function Xe(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function jt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ic[o]}"/></svg>`}var Fc="neonplan3d.roombar_min",bm="M5 4h14v16H5zM12 4v16M5 12h14",Dc="M8 5.5v13l10.5-6.5z",ar=o=>w`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${Je`<path d=${o} />`}</svg>`,bs=class extends me{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},favorites:{type:Boolean},readOnly:{type:Boolean},_min:{state:!0},_fired:{state:!0}};constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.favorites=!1,this.readOnly=!1,this._fired=null;try{this._min=localStorage.getItem(Fc)==="1"}catch{this._min=!1}}t(e,t){return T(this.hass,e,t)}setMin(e){this._min=e;try{localStorage.setItem(Fc,e?"1":"0")}catch{}}toggleLights(e,t){if(e.stopPropagation(),this.readOnly)return;let[n,r]=Tc(t);r.length&&this.hass.callService("light",n,{entity_id:r})}pick(e,t){this.dispatchEvent(new CustomEvent("room-pick",{detail:{floorId:e,roomId:t},bubbles:!0,composed:!0}))}render(){let e=this.building;if(!e||!this.hass)return y;if(this._min)return w`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${()=>this.setMin(!1)}>▴ ${this.t("room_bar_rooms")}</button>`;let t=this.hass,n=rr(t,e,this.floorId),r=this.favorites?Ec(t,e):[],i=!this.floorId&&e.floors.length>1,s=a=>e.floors.find(l=>l.id===a)?.name??"";return w`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${()=>this.setMin(!0)}>▾</button>
      ${r.map(a=>{let l=t.states[a.id],c=a.domain!=="homeassistant",d=this.readOnly||j(l),u=()=>{d||(t.callService(a.domain,a.service,{entity_id:a.id}),this._fired=a.id,setTimeout(()=>this._fired=null,700))};return w`<div class="fp3d-rb-card fp3d-rb-fav ${a.on||this._fired===a.id?"fp3d-rb-on":""} ${d?"fp3d-rb-off":""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${G(t,a.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${c?w`<button class="fp3d-rb-act" ?disabled=${d} @click=${u}>${ar(Dc)} ${this.t("room_bar_activate")}</button>`:w`<button class="fp3d-rb-switch" role="switch" aria-checked=${a.on} ?disabled=${d} @click=${u}>
                <span>${a.on?this.t("room_bar_on"):this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`})}
      ${r.length&&n.length?w`<span class="fp3d-rb-sep" aria-hidden="true"></span>`:y}
      ${n.map(a=>{let l=a.temp===null&&!a.lights.length&&!a.open&&!a.playing,c=a.lightsOn.length>0;return w`<div
          class="fp3d-rb-card ${l?"fp3d-rb-quiet":""} ${a.active?"fp3d-rb-active":""} ${a.roomId===this.roomId?"fp3d-rb-sel":""}"
          role="button"
          tabindex="0"
          title=${i?`${a.name} \xB7 ${s(a.floorId)}`:a.name}
          aria-pressed=${a.roomId===this.roomId}
          @click=${()=>this.pick(a.floorId,a.roomId)}
          @keydown=${d=>d.target===d.currentTarget&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),this.pick(a.floorId,a.roomId))}
        >
          <div class="fp3d-rb-top">
            <b class="fp3d-rb-name">${a.name}</b>
            ${a.temp===null?y:w`<span class="fp3d-rb-temp">${J(t,a.temp,1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${i?w`<span class="fp3d-rb-floor">${s(a.floorId)}</span>`:y}
            ${a.humidity===null?y:w`<span>${J(t,a.humidity,0)} %</span>`}
            ${a.open?w`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${ar(bm)}${a.open>1?a.open:""}</span>`:y}
            ${a.playing?w`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${ar(Dc)}</span>`:y}
          </div>
          ${a.lights.length?w`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${c}
                aria-label=${`${this.t("room_bar_light")} ${a.name}`}
                ?disabled=${this.readOnly}
                @click=${d=>this.toggleLights(d,a)}
                @keydown=${d=>d.stopPropagation()}
              >
                <span>${ar(xn("light"))} ${c?`${this.t("room_bar_light")} \xB7 ${this.t("room_bar_lights",{n:a.lightsOn.length})}`:this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`:w`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`})}
    </div>`}static styles=[Ee,Fe,ke`
      :host {
        display: block;
        pointer-events: none;
      }
      .fp3d-rb,
      .fp3d-rb-open {
        pointer-events: auto;
      }
      /* one row of even cards, solid like the room panel, scrolling sideways */
      .fp3d-rb {
        display: flex;
        align-items: stretch;
        gap: 8px;
        padding: 2px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-min {
        flex: none;
        width: 26px;
        padding: 0;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: inherit;
        cursor: pointer;
      }
      .fp3d-rb-sep {
        flex: none;
        width: 1px;
        margin: 8px 0;
        background: var(--fp3d-line);
      }
      .fp3d-rb-card {
        flex: none;
        box-sizing: border-box;
        width: 164px;
        height: 96px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px 10px 8px 12px;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
        cursor: pointer;
        user-select: none;
      }
      .fp3d-rb-top {
        display: flex;
        align-items: baseline;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-rb-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 700;
      }
      .fp3d-rb-temp {
        flex: none;
        color: var(--fp3d-accent);
        font-family: var(--fp3d-title-font);
        font-size: 19px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rb-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 16px;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-rb-floor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-ico {
        width: 14px;
        height: 14px;
        flex: none;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
        vertical-align: -2px;
      }
      .fp3d-rb-state {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }
      .fp3d-rb-win {
        color: var(--fp3d-danger);
      }
      .fp3d-rb-play {
        color: var(--fp3d-accent);
      }
      /* the switch at the foot of a card: a label and a small toggle */
      .fp3d-rb-switch,
      .fp3d-rb-act {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        height: 26px;
        padding: 0 4px 0 9px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 11px;
        cursor: pointer;
      }
      .fp3d-rb-switch span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-switch i {
        flex: none;
        position: relative;
        width: 28px;
        height: 16px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        transition: background 0.15s;
      }
      .fp3d-rb-switch i::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #c9d6ee;
        transition: transform 0.15s;
      }
      .fp3d-rb-switch[aria-checked="true"] {
        color: var(--fp3d-warm);
        border-color: rgba(255, 181, 71, 0.45);
        background: rgba(255, 181, 71, 0.1);
      }
      .fp3d-rb-switch[aria-checked="true"] i {
        background: var(--fp3d-warm);
      }
      .fp3d-rb-switch[aria-checked="true"] i::after {
        transform: translateX(12px);
        background: #1a1200;
      }
      .fp3d-rb-act {
        justify-content: center;
        padding: 0 10px;
        color: var(--fp3d-text);
      }
      .fp3d-rb-switch:disabled,
      .fp3d-rb-act:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-rb-switch-gap {
        height: 26px;
      }
      /* something on or open: a warm edge; the open room: the accent */
      .fp3d-rb-active,
      .fp3d-rb-on {
        border-color: rgba(255, 181, 71, 0.65);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.2), var(--fp3d-shadow);
      }
      .fp3d-rb-sel {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 0 1px var(--fp3d-accent) inset, var(--fp3d-shadow);
      }
      .fp3d-rb-quiet .fp3d-rb-name {
        color: var(--fp3d-muted);
      }
      .fp3d-rb-fav {
        cursor: default;
      }
      .fp3d-rb-off {
        opacity: 0.55;
      }
      @media (max-width: 600px) {
        .fp3d-rb-card {
          width: 132px;
          height: 86px;
          padding: 7px 8px 6px 10px;
        }
        .fp3d-rb-temp {
          font-size: 16px;
        }
      }
    `]};customElements.get("fp3d-room-bar")||customElements.define("fp3d-room-bar",bs);function vs(o){return o?.settings.person_look??"figure"}function lr(o){return vs(o)!=="off"}var Hc=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function ws(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return Hc[e%Hc.length]}var Wc=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function wm(o,e,t){let n=Wc(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let r of e.floors)for(let i of r.rooms)if([i.name,i.area_id??"",i.area_id?o.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(Wc).includes(n))return{floorId:r.id,room:i};return null}function Lc(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function vm(o){return!["home","on","unknown","unavailable",""].includes(o)}function Cc(o,e){let t=[],n=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let s=o.states[r.sensor];if(!s)continue;let a=wm(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Ae(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=i.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:Lc(h),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return t}function dr(o,e,t=new Set,n=Date.now()){let r=[];for(let[u,p]of Object.entries(o.states)){let h=p.attributes;if(!u.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let f=null;for(let b of e.floors){let v=ie(b).find(g=>g.id===h.room_id);v&&(f={floorId:b.id,room:v})}if(!f)continue;let _=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,m=typeof h.since=="string"?Date.parse(h.since):NaN;r.push({entityId:u,name:typeof h.device_name=="string"?h.device_name:u,person:typeof h.person=="string"?h.person:null,floorId:f.floorId,room:f.room,seen:Number.isFinite(_)?_:0,since:Number.isFinite(m)?m:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let i=[],s=new Map,a=new Map,l=(u,p)=>{let h=s.get(u.room.id)??0;if(s.set(u.room.id,h+1),!p.thing){let b=a.get(u.room.id);b||a.set(u.room.id,b=$m(o,e,u.floorId,u.room));let v=b.shift();if(v){i.push({...p,floorId:u.floorId,roomId:u.room.id,x:v[0],z:v[1]});return}}let[f,_]=Ae(u.room.points),m=-Math.PI/2+.9+h*1.15;i.push({...p,floorId:u.floorId,roomId:u.room.id,x:f+Math.cos(m)*.75,z:_+Math.sin(m)*.75})},c=(u,p)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:u.entityId,tag:u.name,thing:!0}),d=new Map;for(let u of r)u.person?d.set(u.person,[...d.get(u.person)??[],u]):c(u,ws(u.entityId));for(let[u,p]of d){if(t.has(u))continue;let h=o.states[u];if(h&&vm(h.state))continue;let f=k=>k.reduce(($,E)=>E.seen>$.seen?E:$),_=p.filter(k=>k.worn&&n-k.seen<12e4),m=f(_.length?_:p),b=k=>n-k.seen<3e4&&n-m.seen<3e4&&k.since>=m.since-12e4,v=null;if(m.worn){let k=p.filter(E=>!E.worn&&E.room.id!==m.room.id&&b(E)),$=k.length?k.reduce((E,M)=>M.probability>E.probability?M:E):null;$&&n-m.since>=6e5&&$.since>m.since+12e4?(v=m,m=$):$&&$.probability>m.probability+.15&&(m=$)}let g=h?.attributes.friendly_name??m.name;l(m,{id:u,name:g,initials:Lc(g),picture:h?.attributes.entity_picture??null,color:ws(u),entity:m.entityId,tag:g.split(/\s+/)[0]});for(let k of p)k===m||k.room.id===m.room.id||k!==v&&(k.worn&&n-k.seen<12e4||b(k))||c(k,ws(u))}return i}var ym=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],km=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function xm(o,e){let t=[],[n,r]=Ae(e.points),i=(s,a)=>s.points.some((l,c)=>{let d=s.points[(c+1)%s.points.length],[u,p]=[d[0]-l[0],d[1]-l[1]],h=u*u+p*p||1,f=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+f*u-a[0],l[1]+f*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(f=>f.id===s.room_id);if(!a)continue;let l=a.points[s.edge],c=a.points[(s.edge+1)%a.points.length];if(!l||!c)continue;let d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[l[0]+(c[0]-l[0])*s.offset/d,l[1]+(c[1]-l[1])*s.offset/d];if(!i(e,u))continue;let p=o.rooms.find(f=>f.id!==e.id&&i(f,u)),h=.6/(Math.hypot(n-u[0],r-u[1])||1);t.push({to:p?Sn(p.name):null,spot:[u[0]+(n-u[0])*h,u[1]+(r-u[1])*h]})}return t}var Sm=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],Sn=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function $m(o,e,t,n){let r=e.floors.find(c=>c.id===t);if(!r||!n.area_id)return[];let i=r.furniture.filter(c=>K([c.x,c.z],n.points)),s=xm(r,n),a=[],l=new Set([...Sn(n.name),...Sn(o.areas?.[n.area_id]?.name??""),...Sn(n.area_id),...Sm]);for(let[c,d]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||d.state!=="on")continue;let u=d.attributes.device_class;if(u!=="occupancy"&&u!=="presence"||Re(o,c)!==n.area_id)continue;let h=new Set(Sn(String(d.attributes.friendly_name??c.slice(14))).filter(b=>!l.has(b))),f=i.find(b=>b.name&&Sn(b.name).some(v=>h.has(v))||ym.some(([v,g])=>v.test(b.type.split(":").pop()??"")&&g.some(k=>h.has(k)))),_=f?null:s.find(b=>b.to?b.to.some(v=>h.has(v)):[...h].some(v=>km.some(g=>v.includes(g)))),m=f?[f.x,f.z]:_?_.spot:null;m&&!a.some(([b,v])=>b===m[0]&&v===m[1])&&a.push(m)}return a}function Oc(o,e,t,n){let r=new Map,i=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Ko(o,_e(o,c.area_id)))L(d)==="light"&&a.add(d);for(let c of s.placements)L(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(nt(o,d,"garage").cover??1)<.95;if(c.type==="door")return i(d.contact)||i(d.contact2??null);let u=nt(o,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;r.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return r}function Nc(o,e){let t=[e.rooms===1?T(o,"floor_rooms_one"):T(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(T(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(T(o,"floor_open",{n:e.open})),e.persons&&t.push(T(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Mt=(o,e)=>T(o,e);function fe(o,e){if(!e||j(e))return Mt(o,"state_unavailable");let t=e.attributes;switch(L(e.entity_id)){case"light":return e.state!=="on"?Mt(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Mt(o,"state_on");case"switch":case"fan":return Mt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:cr(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${J(o,t.current_temperature,1)} ${o?Ne(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${Mt(o,"state_off")}`:Mt(o,"state_off"):n??cr(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",r=[t.app_name,t.media_title,t.source].find(i=>typeof i=="string"&&i);return n&&r?r:cr(o,e.state)}case"lock":case"camera":return cr(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Mt(o,e.state==="on"?"state_open":"state_closed"):Mt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),r=t.unit_of_measurement??"",i=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${J(o,n,i)}${r?` ${r}`:""}`:e.state}default:return""}}function cr(o,e){let t=`state_${e}`,n=T(o,t);return n===t?e:n}function Bc(o,e){let t=[],n=new Set(e.floors.flatMap(r=>r.furniture.map(i=>i.look_of).filter(i=>!!i)));for(let r of e.floors)for(let i of r.placements){let s=L(i.entity_id),a=o.states[i.entity_id];if(!s||!a)continue;let l=r.rooms.find(d=>d.points.length>=3&&K([i.x,i.z],d.points))??null,c=l?.area_id?o.areas?.[l.area_id]?.name:void 0;t.push({id:i.entity_id,floorId:r.id,roomId:l?.id??null,x:i.x,z:i.z,y:i.y??hn(s,r.height,i.mount??null),lamp:s==="light"?i.mount??"ceiling":null,model:s==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...s==="camera"&&n.has(i.entity_id)?{ownLook:!0}:{},motion:s==="camera"?Mm(o,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?Xe(i.icon):jt(s),cone:s==="camera"&&i.cone===!1?!1:void 0,name:i.name||G(o,i.entity_id,c),ownName:i.name||void 0,showName:!!i.show_name,text:fe(o,a),active:Le(a),unavailable:j(a),glow:s==="light"?ys(Lt(a),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return t}function ur(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Mm(o,e){return Ke(o,e).some(t=>o.states[t]?.state==="on")}var Vc=new Map;function Kc(o){Vc=new Map(o?.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors]))??[])}function Ke(o,e){return Vc.get(e)??Pm(o,e)}function Pm(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function Gc(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Me(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function hr(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function ys(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function pr(o,e,t){let{shown:n,more:r}=fn(o,e,t),i=(f,_)=>K([f,_],t.points),s=new Set(e.furniture.filter(f=>i(f.x,f.z)&&jn(f.type)&&f.entity?.startsWith("switch.")).map(f=>f.entity)),a=[],l=[],c=[],d=[],u=[];for(let f of new Set([...n,...r])){let _=o.states[f];if(!_||j(_))continue;let m=f.split(".")[0];m==="light"&&_.state==="on"?a.push(f):m==="fan"&&_.state==="on"?l.push(f):m==="switch"&&_.state==="on"&&s.has(f)?c.push(f):m==="media_player"&&_.state!=="off"&&_.state!=="standby"&&(_.attributes.device_class==="tv"?d.push(f):_.state==="playing"&&u.push(f))}let p=[],h=(f,_,m)=>m.length&&p.push({domain:f,service:_,data:{entity_id:m}});return h("light","turn_off",a),h("fan","turn_off",l),h("switch","turn_off",c),h("media_player","turn_off",d),h("media_player","media_pause",u),p}function fr(o){return o.reduce((e,t)=>e+t.data.entity_id.length,0)}function mr(o,e){let t=e.cleaning;if(!t||!o.states[t])return null;let[n,r]=mn(t);return{domain:n,service:r,data:{entity_id:t}}}function Uc(o,e){if(!e)return null;for(let t of o){let n=t.rooms.find(r=>r.area_id===e);if(n)return{floor:t,room:n}}return null}var Tm=4,Em=3e3,zm=8,Am=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Rm=o=>w`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${xn(o)} />
  </svg>`,gr={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},ks=o=>w`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,xs=class extends me{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},walk:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Em)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return T(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}renderRoomActions(e){if(this.readOnly)return y;let t=mr(this.hass,e),n=this.floor?pr(this.hass,this.floor,e):[];if(!t&&!n.length)return y;let r=i=>i.forEach(s=>this.call(s.domain,s.service,s.data));return w`<div class="fp3d-rp-sheets">
      ${t?w`<button class="fp3d-rp-sheet" @click=${()=>r([t])}><span aria-hidden="true">🧹</span>${this.t("panel_clean")}</button>`:y}
      ${n.length?w`<button class="fp3d-rp-sheet" @click=${()=>r(n)}><span aria-hidden="true">⏻</span>${this.t("panel_everything_off",{n:fr(n)})}</button>`:y}
    </div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return G(this.hass,e,this.areaName)}nameButton(e){return w`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&Me(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return w`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${j(e)}
      @click=${r}
    ></button>`}renderHere(e){if(!this.building||!ot("locate")||!lr(this.building))return y;let t=dr(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?w`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,r)=>w`${r?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:y}render(){let e=this.room;if(!e||!this.hass)return y;let t=_e(this.hass,e.area_id),n=this.memo,{shown:r,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?fn(this.hass,this.floor,e,this.building?or(this.building,e.id):[]):{shown:t,more:[]}},s=Ii(this.hass,i).map(k=>k.primary),a=s.length,l=this._showAll?[...r,...s]:r,c=k=>l.filter($=>k.includes(L($))).map($=>this.hass.states[$]).filter($=>!!$),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),h=c(["media"]),f=c(["switch","fan","lock"]),_=c(["sensor","binary"]),m=c(["camera"]);this.hasCameras=m.length>0;let b=c(["scene","script"]),v=this.facts(p),g=d.filter(k=>k.state==="on");return w`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${v.length?w`<p class="fp3d-rp-facts">${v.join(" \xB7 ")}</p>`:y}
          ${this.renderHere(e)}
          ${this.renderRoomActions(e)}
          ${this.readOnly?w`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:y}
          ${this.sheets?.length&&!this.readOnly?w`<div class="fp3d-rp-sheets">
                ${this.sheets.map(k=>w`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:k.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${k.icon}</span>${k.title}
                  </button>`)}
              </div>`:y}
        </div>
        ${this.walk&&!this.readOnly&&e.points.length>=3?w`<button class="fp3d-rp-close fp3d-rp-walk" title=${this.t("walk_start")} aria-label=${this.t("walk_start")} @click=${()=>this.fire("walk-here")}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
            </button>`:y}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?y:w`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:w`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(k=>this.lightRow(k)),w`${g.length<d.length?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(k=>!j(k)).map(k=>k.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${g.length?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:g.map(k=>k.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(k=>this.coverRow(k)),u.length>1?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"open")}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"close")}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${p.length?this.section("panel_climate",p.map(k=>this.climateRow(k))):y}
        ${h.length?this.section("panel_media",h.map(k=>this.mediaRow(k))):y}
        ${f.length?this.section("panel_switches",f.map(k=>this.switchRow(k))):y}
        ${m.length?this.section("panel_cameras",m.map(k=>this.cameraTile(k))):y}
        ${_.length?this.section("panel_sensors",_.map(k=>this.sensorRow(k))):y}
        ${b.length?this.section("panel_scenes",[w`<div class="fp3d-rp-scenes">
                  ${b.map(k=>w`<button
                      class="fp3d-btn"
                      ?disabled=${j(k)}
                      @click=${()=>this.call(L(k.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:k.entity_id})}
                    >
                      ${this.name(k.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?w`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let t=[],n=this.room,r=(l,c)=>{let d=Be(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${J(this.hass,bt(this.hass,d),1)} ${Ne(this.hass)}`;let u=Ti(this.hass,this.floor,n,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${J(this.hass,d,1)} ${p}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=r("temperature","\xB0C");s?t.push(s):i&&n.climate?.temperature!=="none"&&t.push(`${J(this.hass,i.attributes.current_temperature,1)} ${Ne(this.hass)}`);let a=r("humidity","%");return a&&t.push(a),t}section(e,t,n=y){return w`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}rowIcon(e,t){let n=this.floor,r=n?.furniture.find(s=>s.icon&&(s.entity===t||s.fan===t))?.icon??n?.placements.find(s=>s.icon&&s.entity_id===t)?.icon;if(!r)return Rm(e);let i=r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"");return w`<ha-icon icon=${`mdi:${i}`} style="--mdc-icon-size:18px"></ha-icon>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],i=r.some(p=>p!=="onoff"),s=r.includes("color_temp"),a=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon("light",u)}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&i?w`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:y}
      ${n&&s?w`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:y}
      ${n&&a?w`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Am.map(p=>w`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:y}
    </div>`}covers(e,t){let n=e.filter(r=>!j(r)).map(r=>r.entity_id);for(let r of Bo(this.hass,n,t))this.call("cover",r.service,r.data)}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,i=j(e);return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${this.rowIcon("cover",e.entity_id)}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.covers([e],"open")}>${this.t("cover_open")}</button>
        ${n&zm||n&64&&!(n&3)?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.covers([e],"stop")}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.covers([e],"close")}>${this.t("cover_close")}</button>
      </div>
      ${n&Tm&&typeof t.current_position=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:y}
      ${n&128&&typeof t.current_tilt_position=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(s.target.value)})}
          /></label>`:No(this.hass?.states[r])?w`<div class="fp3d-rp-buttons">
              ${n&16?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:y}
              ${n&32?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${this.rowIcon("climate",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?w`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${J(this.hass,r,1)} ${Ne(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(r+i)}>+</button>
          </div>`:y}
      ${l.length>1?w`<div class="fp3d-rp-chips">
            ${l.map(d=>w`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:y}
    </div>`}stateOf(e,t=fe(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=L(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=j(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${this.rowIcon("media",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?w`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${ks(gr.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${j(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${ks(e.state==="playing"?gr.pause:gr.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${ks(gr.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:y}
    </div>`}switchRow(e){let t=e.entity_id,n=L(t),r=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${this.rowIcon(n,t)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!j(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return w`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&Me(this,e.entity_id)}>
        ${n?w`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:w`<span class="fp3d-rp-note">${fe(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?w`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${C("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let t=L(e.entity_id),n=t==="binary"&&e.state==="on";return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon(t,e.entity_id)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Ee,Fe,ke`
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
      .fp3d-rp-sheets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-rp-sheet {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 12%, transparent);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .fp3d-rp-sheet:hover {
        border-color: var(--fp3d-accent, #37e0ff);
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
      .fp3d-rp-walk {
        margin-right: 6px;
        color: #37e0ff;
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",xs);function jc(o,e,t,n,r=!1){let i=s=>{let a=s?.value.trim();!s||!a||(s.value="",n([...o,a]))};return w`<div class="fp3d-lines ${r?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((s,a)=>w`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${t.remove} aria-label=${`${t.remove}: ${s}`} ?disabled=${e} @click=${()=>n(o.filter((l,c)=>c!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${t.placeholder}
        aria-label=${t.placeholder}
        ?disabled=${e}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),i(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>i(s.currentTarget.previousElementSibling)}>
        ${t.add}
      </button>
    </div>
  </div>`}var He=.03,_r=o=>o&&o!=="none"?o:null;function Mn(o,e=t=>_r(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=_r(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let s=_r(r.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(i||s)&&t.batteries.push({power:i,charge:s});let a=_r(r.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function $s(o){if(Im(o))return o.energy.meter;for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function Im(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(t=>t.id===e.floor_id)}async function eu(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,(n?.[i]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return r}catch{return null}}var tu=.07;function le(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Fm(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function ho(o,e){if(Fm(o,e))return e;if(e.startsWith("binary_sensor."))return null;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=fd(o,t),r=Re(o,e),i=Ei(o,t).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(i.includes(s))return s;let a=i.find(l=>r!==null&&Re(o,l)===r);return a||n?a??null:i.find(l=>r===null||Re(o,l)===null||Re(o,l)===r)??null}function nu(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],i=new Set;for(let s of e.floors)for(let a of s.placements){let l=ho(o,a.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),r.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,le(o.states[l])??0)}))}return r}function ou(o,e,t,n=Mn(e)){let r=e.energy,i=r.grid??n.grid,s=i?le(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let _=Math.max(0,le(o.states[n.gridExport])??0);s=Math.max(0,s??0)-_}let a=r.solar?le(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let _=n.solar.map(m=>le(o.states[m])).filter(m=>m!==null);a=_.length?_.reduce((m,b)=>m+b,0):null}let l=r.battery?le(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let _=n.batteries.map(m=>{if(m.charge){let b=m.power?Math.max(0,le(o.states[m.power])??0):0,v=Math.max(0,le(o.states[m.charge])??0);return b-v}return m.power?le(o.states[m.power],r.battery_invert):null}).filter(m=>m!==null);l=_.length?_.reduce((m,b)=>m+b,0):null}let d=(r.battery_soc?[r.battery_soc]:n.soc).map(_=>Number(o.states[_]?.state)).filter(_=>Number.isFinite(_)),u=d.length?d.reduce((_,m)=>_+m,0)/d.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p?.state),f=r.consumption?le(o.states[r.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(f=t.reduce((_,m)=>_+m.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function qt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Pt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Dm(o,e){let t=o.length,n=o.map((r,i)=>{let s=o[(i+1)%t],a=s[0]-r[0],l=s[1]-r[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[r[0]+d*e[i],r[1]+u*e[i]],d:[a/c,l/c],n:[d,u]}});return o.map((r,i)=>{let s=n[(i-1+t)%t],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[r[0]+a.n[0]*e[i],r[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Hm(o){return We(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Ms(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=xt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=Hm(i),l=s.length,c=s.map((p,h)=>{let f=a?(l-2-h+l)%l:h,_=r.some(m=>!m.exterior&&m.sources.some(b=>b.room_id===i.id&&b.edge===f));return tu+(_?t/2:0)}),d=Dm(s,c).map(p=>qt(n,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)Pt(n,p,h);n.rings.set(i.id,u)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=co(n,i.roomLeft,s),l=co(n,i.roomRight,s);a!==null&&l!==null&&Pt(n,a,l)}return Lm(n),n}var Wm=1;function Lm(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let s=0;s<o.pos.length;s++){if(t[s]>=0)continue;let a=[s];for(t[s]=n;a.length;)for(let{to:l}of o.adj[a.pop()])t[l]<0&&(a.push(l),t[l]=n);n++}if(n<2)return;let r=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,c]of e)if(t[c[0][0]]!==t[a])for(let[d,u]of c){let p=o.pos[a],h=o.pos[d],f=o.pos[u],_=f[0]-h[0],m=f[1]-h[1],b=Math.min(1,Math.max(0,((p[0]-h[0])*_+(p[1]-h[1])*m)/(_*_+m*m||1))),v=Math.hypot(p[0]-h[0]-_*b,p[1]-h[1]-m*b);(!r||v<r.d)&&(r={a,room:l,d:v})}if(!r||r.d>Wm+2*tu)return;let i=co(o,r.room,o.pos[r.a]);if(i===null)return;Pt(o,r.a,i)}}function co(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),h=[a[0]+c*p,a[1]+d*p],f=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||f<r.d)&&(r={seg:s,q:h,d:f})}if(!r)return null;let i=qt(o,r.q);return Pt(o,i,r.seg[0]),Pt(o,i,r.seg[1]),i}function br(o,e,t){let n=o.pos[t],r=co(o,e.id,n);if(r===null)return!1;let i=o.pos[r],s=o.pos[o.adj[r][0].to],a=o.pos[o.adj[r][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-i[0])*c[0]+(n[1]-i[1])*c[1],u=(n[1]-i[1])*c[0]-(n[0]-i[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return Pt(o,t,r),!0;let p=[i[0]+c[0]*d,i[1]+c[1]*d],h=[i[0]-c[1]*u,i[1]+c[0]*u],f=qt(o,K(h,e.points)||!K(p,e.points)?h:p);return Pt(o,r,f),Pt(o,f,t),!0}function uo(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>K(e,i.points));if(n)return n;let r=null;for(let i of t)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!r||a<r.d)&&(r={room:i,d:a})}return r?.room??null}function ru(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let s=0;s<t.length;s++)!r[s]&&t[s]<1/0&&(i<0||t[s]<t[i])&&(i=s);if(i<0)break;r[i]=!0;for(let{to:s,w:a}of o.adj[i])t[i]+a<t[s]-1e-9&&(t[s]=t[i]+a,n[s]=i)}return{dist:t,prev:n}}function qc(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Zc=new WeakMap;function Cm(o,e){let t=$s(o),n=o.floors.find(d=>d.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),h=qc(p,e);r.push({floorId:n.id,a:[t.x,He,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let f=Math.abs(d.elevation-n.elevation);r.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,He,t.z],dist:f,members:p,kind:h}),a.set(d.id,f+.25)}for(let d of c){let u=Ms(d,i,s),p=uo(d,[t.x,t.z]);if(!p)continue;let h=qt(u,[t.x,t.z]);if(!br(u,p,h))continue;let f=[];for(let g of l.get(d.id)){let k=e[g],$=uo(d,[k.x,k.z]);if(!$)continue;let E=qt(u,[k.x,k.z]);br(u,$,E)&&f.push({node:E,member:g})}let{dist:_,prev:m}=ru(u,h),b=new Map;for(let g of f)if(Number.isFinite(_[g.node]))for(let k=g.node;m[k]>=0;k=m[k]){let $=m[k],E=`${$}>${k}`,M=b.get(E)??{a:$,b:k,members:[]};M.members.push(g.member),b.set(E,M)}let v=a.get(d.id)??0;for(let{a:g,b:k,members:$}of b.values()){let E=u.pos[g],M=u.pos[k],R=qc($,e);r.push({floorId:d.id,a:[E[0],He,E[1]],b:[M[0],He,M[1]],dist:v+_[g],members:$,kind:R})}}return r}function iu({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){let s=$s(o);if(!s)return[];let a=o.floors.find(x=>x.id===s.floor_id);if(!a)return[];let l=x=>i?.get(x),c=Ss(o,"inverter"),d=Ss(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=x=>{let P=null;for(let A of c)A.floorId===x.floorId&&(!P||Math.hypot(A.x-x.x,A.z-x.z)<Math.hypot(P.x-x.x,P.z-x.z))&&(P=A);return P},p=x=>l(x.id)??(d.length===1?t.battery??0:0),h=new Map;for(let x of d){let P=u(x);P&&h.set(x.id,P)}let f=e.map(x=>({floorId:x.floorId,x:x.x,z:x.z,kind:x.wallbox?"wallbox":"consumer",power:x.power}));for(let x of d)!h.has(x.id)&&t.battery!==null&&f.push({floorId:x.floorId,x:x.x,z:x.z,kind:"battery",power:Math.abs(p(x))});let _=`${s.floor_id}:${s.x},${s.z}|${f.map(x=>`${x.floorId}:${x.x},${x.z}:${x.kind}`).join(";")}`,m=Zc.get(o);m||Zc.set(o,m=new Map);let b=m.get(_);b||(b=Cm(o,f),m.clear(),m.set(_,b));let v=b.map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.members.reduce((P,A)=>P+f[A].power,0),kind:x.kind})),g=t.grid!==null?wr(o):null,k=o.settings.roof.cables??[],$=x=>k.find(P=>P.id===x),E=(x,P)=>x.map(A=>({...A,key:P}));if(g){let x=t.grid>=0,P=$("grid"),A=P?lo(o,P,[g.end[0],a.elevation+Math.max(He,g.height),g.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...g.height>.05?[[g.end[0],g.height,g.end[1]]]:[],[g.end[0],He,g.end[1]],[g.wall[0],He,g.wall[1]],[s.x,He,s.z]],H=P?$n(o,x?A:[...A].reverse(),Math.abs(t.grid),x?"grid":"export",a):au(a.id,x?A:[...A].reverse(),Math.abs(t.grid),x?"grid":"export",0);v.push(...E(H,"grid"))}if(t.battery!==null&&t.battery>0)for(let x of v)x.kind==="battery"&&([x.a,x.b]=[x.b,x.a]);let M=o.settings.roof.solar??[],R=o.settings.roof.strings??[],I=new Map;if(r&&M.length){let x=[...$t(o),...ao(o)];for(let P of M){let A=r.get(P.id)??0,H=P.string?R.find(X=>X.id===P.string)?.inverter:null,N=H?d.find(X=>X.id===H)??null:null,B=H&&!N?c.find(X=>X.id===H)??null:null;if(N){let X=h.get(N.id);X&&I.set(X.id,(I.get(X.id)??0)+A);let se=N.variant==="wall"?.5+N.h:.9,ve=$(`solar:${P.id}`),Pe=ve?Qc(o,P):null,ze=o.floors.find(je=>je.id===N.floorId);ve&&Pe&&ze?v.push(...E($n(o,lo(o,ve,Pe,[N.x,ze.elevation+se,N.z]),A,"solar",ze),`solar:${P.id}`)):v.push(...E(Jc(o,P,A,N,se),`solar:${P.id}`));continue}if(!B&&c.length){let X=Gt(o,P,x),se=X?Pc(X,P):[P.u,P.v];B=c.reduce((ve,Pe)=>!ve||Math.hypot(Pe.x-se[0],Pe.z-se[1])<Math.hypot(ve.x-se[0],ve.z-se[1])?Pe:ve,null)}B&&I.set(B.id,(I.get(B.id)??0)+A);let Z=B??{floorId:s.floor_id,x:s.x,z:s.z},U=B?1.1+B.h:1.5,W=$(`solar:${P.id}`),F=W?Qc(o,P):null,te=o.floors.find(X=>X.id===Z.floorId);W&&F&&te?v.push(...E($n(o,lo(o,W,F,[Z.x,te.elevation+U,Z.z]),A,"solar",te),`solar:${P.id}`)):v.push(...E(Jc(o,P,A,Z,U),`solar:${P.id}`))}}else t.solar!==null&&!c.length&&v.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,He,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let x of c){let P=1.1+x.h,A=d.filter(B=>h.get(B.id)===x),H=l(x.id);if(H===void 0){H=I.get(x.id)??(c.length===1?t.solar??0:0);for(let B of A)H+=p(B)}let N=o.floors.find(B=>B.id===x.floorId);if(t.solar!==null||t.battery!==null){let B=$(`inv:${x.id}`),Z=Om(o,x.id)?wr(o):null,U=Z?{floorId:Z.floorId,x:Z.end[0],z:Z.end[1],y:Math.max(He,Z.height)}:{floorId:s.floor_id,x:s.x,z:s.z,y:1.5},W=Z?o.floors.find(te=>te.id===Z.floorId)??a:a,F=B&&N?$n(o,lo(o,B,[x.x,N.elevation+P,x.z],[U.x,W.elevation+U.y,U.z]),Math.max(0,H),"inverter",N):Xc(o,x,P,U,U.y,Math.max(0,H),"inverter",0);v.push(...E(F,`inv:${x.id}`))}for(let B of A){let Z=p(B);if(t.battery===null&&l(B.id)===void 0)continue;let U=B.variant==="wall"?.5+B.h:.9,W=$(`bat:${B.id}`),F=W&&N?$n(o,lo(o,W,[x.x,N.elevation+P-.1,x.z],[B.x,N.elevation+U,B.z]),Math.abs(Z),"battery",N):Xc(o,x,P-.1,B,U,Math.abs(Z),"battery",0);v.push(...E(Z<=0?F:F.map(te=>({...te,a:te.b,b:te.a})).reverse(),`bat:${B.id}`))}}return v}function wr(o){let e=$s(o),t=e?o.floors.find(h=>h.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=xt(t.rooms,{exterior:n,interior:r},t.walls??[]),s=Ss(o,"grid_point")[0],a=i.filter(h=>h.exterior);if(s){let h=null;for(let m of a){let b=m.b[0]-m.a[0],v=m.b[1]-m.a[1],g=s.x-e.x,k=s.z-e.z,$=g*v-k*b;if(Math.abs($)<1e-9)continue;let E=((m.a[0]-e.x)*v-(m.a[1]-e.z)*b)/$,M=((m.a[0]-e.x)*k-(m.a[1]-e.z)*g)/$;if(E<=0||E>1||M<0||M>1||h&&E>=h.t)continue;let R=Math.hypot(b,v)||1;h={q:[e.x+g*E,e.z+k*E],out:[v/R,-b/R],t:E}}let f=h?[h.q[0]+h.out[0]*(n/2+.05),h.q[1]+h.out[1]*(n/2+.05)]:[e.x,e.z],_=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:t.id,wall:f,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let h of a){let f=h.b[0]-h.a[0],_=h.b[1]-h.a[1],m=f*f+_*_||1,b=Math.min(1,Math.max(0,((e.x-h.a[0])*f+(e.z-h.a[1])*_)/m)),v=[h.a[0]+f*b,h.a[1]+_*b],g=Math.hypot(e.x-v[0],e.z-v[1]),k=Math.sqrt(m);(!l||g<l.d)&&(l={q:v,out:[_/k,-f/k],d:g})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let h of o.floors)for(let f of h.outdoor??[]){let _=f.points.length;for(let m=0;m<_;m++){let b=f.points[m],v=f.points[(m+1)%_],g=v[0]-b[0],k=v[1]-b[1],$=d[0]*k-d[1]*g;if(Math.abs($)<1e-9)continue;let E=((b[0]-c[0])*k-(b[1]-c[1])*g)/$,M=((b[0]-c[0])*d[1]-(b[1]-c[1])*d[0])/$;E>0&&M>=0&&M<=1&&(u=Math.max(u,Math.min(15,E)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function Om(o,e){return o.floors.some(t=>t.furniture.some(n=>n.id===e&&n.type==="inverter"&&n.cable_to==="grid"))}function Ss(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var Yc=new WeakMap;function su(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=Yc.get(o);i||Yc.set(o,i=new Map);let s=i.get(r);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=Ms(e,a,l),d=[t,n],u=uo(e,t),p=uo(e,n);if(u&&p){let h=qt(c,t),f=qt(c,n);if(br(c,u,h)&&br(c,p,f)){let{dist:_,prev:m}=ru(c,h);if(Number.isFinite(_[f])){d.length=0;for(let b=f;b>=0;b=m[b])d.unshift(c.pos[b])}}}return i.set(r,d),d}function Xc(o,e,t,n,r,i,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=su(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],He,u[1]]),[n.x,r,n.z]];return au(l.id,d,i,s,a)}function au(o,e,t,n,r){let i=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(i.push({floorId:o,a,b:l,dist:r,power:t,kind:n}),r+=c)}return i}function lo(o,e,t,n){let i=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(He,e.height);return[t,...e.points.map(s=>[s[0],i,s[1]]),n]}function Qc(o,e){let t=Gt(o,e,[...$t(o),...ao(o)]);if(!t)return null;let[n,r]=Ut(t,e),i=e.u+n/2,s=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*s,t.o[1]+t.eu[1]*i+t.es[1]*s,t.o[2]+t.eu[2]*i+t.es[2]*s]}function Nm(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=Ms(e,n,r),s=uo(e,t),a=s?co(i,s.id,t):null;return a===null?t:i.pos[a]}function $n(o,e,t,n,r){let i=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=r;for(let u of i)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let f=Math.min(d[1],u[1]),_=Math.max(d[1],u[1]);for(let m of i)m.elevation>f+.01&&m.elevation<_-.01&&h.push(m.elevation);u[1]<d[1]&&h.reverse()}for(let f of[...h,u[1]]){let _=(f-d[1])/(u[1]-d[1]||1),m=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*_,f,d[2]+(u[2]-d[2])*_]:u,b=s((d[1]+m[1])/2),v=Math.hypot(m[0]-d[0],m[1]-d[1],m[2]-d[2]);v>1e-4&&a.push({floorId:b.id,a:[d[0],d[1]-b.elevation,d[2]],b:[m[0],m[1]-b.elevation,m[2]],dist:l,power:t,kind:n}),l+=v,d=m}}return a}function Jc(o,e,t,n,r){let i=[...$t(o),...ao(o)],s=Gt(o,e,i),a=o.floors.find(m=>m.id===n.floorId);if(!s||!a)return[];let[l,c]=Ut(s,e),d=(m,b)=>[s.o[0]+s.eu[0]*m+s.es[0]*b,s.o[1]+s.eu[1]*m+s.es[1]*b,s.o[2]+s.eu[2]*m+s.es[2]*b],u=e.u+l/2,p=a.elevation+He,h=[],f;if(s.unbounded){let m=d(u,e.v+c/2);f=[m[0],p,m[2]],h.push(f)}else if(s.wall){let m=d(u,e.v);f=[m[0],p,m[2]],h.push(m,f)}else{let m=d(u,e.v),b=us(o)??a,v=Math.max(a.elevation+.5,Math.min(m[1]-.25,b.elevation+b.height-.12));f=[m[0],v,m[2]],h.push(m)}let _=Nm(o,a,[f[0],f[2]]);h.push([_[0],f[1],_[1]]),Math.abs(f[1]-p)>.05&&h.push([_[0],p,_[1]]);for(let m of su(o,a,_,[n.x,n.z]).slice(1))h.push([m[0],p,m[1]]);return h.push([n.x,a.elevation+r,n.z]),$n(o,h,t,"solar",a)}function lu(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),i=-1;for(let a of Object.values(o))for(let l of a){let c=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((c-t.getTime())/3e5);d<0||d>=n||typeof l.mean!="number"||(r[d]+=Math.max(0,l.mean),i=Math.max(i,d))}return r.length=Math.max(i+1,n-3,1),{kwh:r.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function du(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Ps(o,e){let n=l=>42-(e>0?l/e*36:0),r=o.map((l,c)=>[c/288*220,n(l)]),i=r.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=r[r.length-1];return{line:i,area:`${i} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function cu(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Bm=400;function uu(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(cu(n)*(n.wp??Bm)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function hu(o,e,t){let n=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],s=cu,a=[],l=0,c=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?le(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let f=p.string?i.find(m=>m.id===p.string):void 0,_=f?.entity&&f.entity!=="none"?le(o.states[f.entity]):null;if(f&&_!==null){c.set(f.id,[...c.get(f.id)??[],p]);continue}a.push(p)}for(let[p,h]of c){let f=i.find(b=>b.id===p),_=Math.max(0,le(o.states[f.entity])??0),m=h.reduce((b,v)=>b+s(v),0);for(let b of h)n.set(b.id,_*s(b)/m);l+=_}let d=Math.max(0,(t??0)-l),u=a.reduce((p,h)=>p+s(h),0);for(let p of a)n.set(p.id,u?d*s(p)/u:0);return n}var Ge={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function pu(o,e){if(o==="grid")return Ge.import;if(o==="export")return Ge.export;if(o==="solar")return Ge.solar;if(o==="battery")return Ge.battery;if(o==="wallbox")return Ge.wallbox;if(o==="inverter")return(e.solar??0)>5?Ge.solar:Ge.battery;let t=[[Math.max(0,e.grid??0),Ge.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Ge.solar],[Math.max(0,e.battery??0),Ge.battery]],[n]=t.reduce((r,i)=>i[0]>r[0]?i:r);return n>0?t.find(r=>r[0]===n)[1]:Ge.house}var Ts=["neon","blueprint","day"],po={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var vr={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function fu(o,e){let t=vr[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,i]=t[n],[s,a]=t[n-1];if(e<=r){let l=(e-s)/(r-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return t[t.length-1][1]}function mu(o,e,t){let n=new Map;for(let r of e.floors)for(let i of r.rooms){let s=Be(o,r,i,t);s!==null&&n.set(i.id,s)}return n}function gu(o){let e=vr[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function we(o,e){if(!gt(e))return T(o,`furn_${e}`);let t=he(e);return t?El(t,o?.language??navigator.language):T(o,"pack_missing_item")}var Es=.06;function bu(o,e,t){let n=t[0]-e[0],r=t[1]-e[1],i=Math.hypot(n,r)||1e-9,s=((o[0]-e[0])*n+(o[1]-e[1])*r)/i;return{off:Math.abs((o[0]-e[0])*r-(o[1]-e[1])*n)/i,at:s,len:i}}function _u(o,e){for(let t=0;t<e.length;t++){let n=bu(o,e[t],e[(t+1)%e.length]);if(n.off<Es&&n.at>-Es&&n.at<n.len+Es)return t}return-1}function Vm(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length];if(!n||!r)return null;let i=Math.hypot(r[0]-n[0],r[1]-n[1])||1e-9;return[n[0]+(r[0]-n[0])*t/i,n[1]+(r[1]-n[1])*t/i]}function yr(o,e){if(!o||!e?.length)return[];let t=new Set(o.floors.flatMap(n=>[...n.rooms.map(r=>r.id),...(n.outdoor??[]).map(r=>r.id)]));return e.filter(n=>t.has(n))}function kr(o,e){let t=new Set(e),n=o.settings.wall_interior??.12,r=[];for(let h of o.floors){let f=h.rooms.filter(M=>t.has(M.id)),_=(h.outdoor??[]).filter(M=>t.has(M.id));if(!f.length&&!_.length)continue;let m=[...f.map(M=>M.points),..._.map(M=>M.points)].filter(M=>M.length>=3),b=(M,R)=>m.some(I=>K([M,R],I)),v=h.rooms.filter(M=>!t.has(M.id)&&M.points.length>=3),g=f.map(M=>{let R=M.points.length,I=Array.from({length:R},(P,A)=>M.wall_thickness?.[A]??null),x=!1;for(let P=0;P<R;P++){if(I[P]!==null)continue;let A=M.points[P],H=M.points[(P+1)%R],N=[(A[0]+H[0])/2,(A[1]+H[1])/2];v.some(B=>_u(N,B.points)>=0)&&(I[P]=n,x=!0)}return x?{...M,wall_thickness:I}:M}),k=(h.walls??[]).filter(M=>b((M.a[0]+M.b[0])/2,(M.a[1]+M.b[1])/2)),$=new Set(k.map(M=>M.id)),E=[];for(let M of h.openings){if(M.wall){$.has(M.wall)&&E.push(M);continue}if(t.has(M.room_id)){E.push(M);continue}let R=h.rooms.find(x=>x.id===M.room_id),I=R?Vm(R,M.edge,M.offset):null;if(I)for(let x of f){let P=_u(I,x.points);if(P<0)continue;let A=bu(I,x.points[P],x.points[(P+1)%x.points.length]);E.push({...M,room_id:x.id,edge:P,offset:A.at,hinge:M.hinge==="left"?"right":"left",swing:M.swing==="in"?"out":"in"});break}}r.push({...h,rooms:g,outdoor:_,walls:k,openings:E,furniture:h.furniture.filter(M=>b(M.x,M.z)),placements:h.placements.filter(M=>b(M.x,M.z))})}let i=Km(o),s=o.settings.roof;if(!(!s||s.type==="none"||i===null||r.some(h=>h.id===i)))return{...o,floors:r,settings:{...o.settings,roof:{...s,type:"none"}}};let c=s&&(s.type==="flat"||s.type==="gable")&&i!==null?(o.floors.find(h=>h.id===i)?.rooms??[]).filter(h=>h.points.length>=3):[];if(!c.length)return{...o,floors:r};let d=c.flatMap(h=>h.points.map(f=>f[0])),u=c.flatMap(h=>h.points.map(f=>f[1])),p=[Math.min(...d),Math.min(...u),Math.max(...d),Math.max(...u)];return{...o,floors:r,settings:{...o.settings,roof:{...s,frame:p}}}}function Km(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]?.id??null}function Gm(o,e){let t=o?.states[e.entity]?.state;if(t===void 0)return!1;let n=(e.state??"").trim(),r=n.startsWith("!");r&&(n=n.slice(1).trim());let i=n?n.split(",").map(l=>l.trim()).filter(Boolean):["on"],s=Number(t),a=i.some(l=>{let c=/^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);if(c){if(!Number.isFinite(s)||t.trim()==="")return!1;let d=Number(c[2].replace(",","."));return c[1]==="<"?s<d:c[1]==="<="?s<=d:c[1]===">"?s>d:s>=d}return t.toLowerCase()===l.toLowerCase()});return r?!a:a}function zs(o,e){return!e.show_if?.entity||Gm(o,e.show_if)}function As(o,e){if(!e)return"";let t="";for(let n of e.floors)for(let r of n.furniture)r.show_if?.entity&&(t+=`${r.id}:${zs(o,r)?1:0};`);return t}var Zt=o=>o?.settings?.winter??{},Um=o=>kl(o)>0;function vu(o,e,t=new Date){let n=Zt(e);if(!C("fun_winter")||n.roof_lights===!1)return!1;if(n.roof_entity)return o.states[n.roof_entity]?.state==="on";let r=o.states["sun.sun"],i=r?r.state==="below_horizon":t.getHours()>=16||t.getHours()<7;return Um(t)&&i}var jm=new Set(["snowy","snowy-rainy"]),wu="neonplan3d.winter_last_snow";function qm(o,e){let t=e?o.states[e]:void 0,n=t?.attributes.temperature;return typeof n!="number"?null:String(t.attributes.temperature_unit??"\xB0C").includes("F")?(n-32)*5/9:n}function yu(o,e,t,n=Date.now(),r=Zm()){if(!C("fun_winter")||Zt(e).snow===!1||!t)return 0;let i=o.states[t]?.state??"";if(jm.has(i)){try{r?.setItem(wu,String(n))}catch{}return 1}let s=Number(r?.getItem(wu)??0);if(!s||n-s>72*36e5)return 0;let a=qm(o,t);return a===null||a<=1?1:Math.max(0,1-(n-s)/(6*36e5))}function Zm(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ku(o,e){if(e<=0)return[];let t=[];for(let n of o.floors)for(let r of n.outdoor??[])r.type==="lawn"&&r.points.length>=3&&t.push({floorId:n.id,points:r.points,y:Lo(n,r)+bi[r.type]+.025,color:[.93,.96,1],opacity:.78*e});return t}function xu(o,e=new Date){if(!C("fun_winter")||Zt(o).firework===!1)return!1;if(typeof location<"u"&&new URLSearchParams(location.search).has("fp3d_firework"))return!0;let t=e.getMonth(),n=e.getDate(),r=e.getHours()*60+e.getMinutes();return t===11&&n===31&&r>=1439||t===0&&n===1&&r<10}var Ym="pack:mastershort.frames:",Xm="pack:mastershort.deco:photo_frame_digital";function Yt(o){return(o.startsWith(Ym)||o===Xm)&&!!he(o)?.parts.some(e=>e.screen)}function Tt(o){return o.frame_kind!=="calendar"&&o.frame_kind!=="board"||!o.frame_source?[]:[...new Set(o.frame_source.split(",").map(e=>e.trim()).filter(e=>e.startsWith("calendar.")))]}function Mu(o){return[...new Set(o.flatMap(e=>e.furniture.filter(t=>Yt(t.type)).flatMap(t=>Tt(t))))]}function Su(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:{at:n,allDay:!!t}}function Pn(o,e){let t=[];for(let n of e)for(let r of o.get(n)??[]){let i=Su(r.start);if(!i)continue;let s=Su(r.end);t.push({calendar:n,summary:String(r.summary??"").trim()||"\u2026",location:String(r.location??"").trim(),description:String(r.description??"").trim(),start:i.at,end:s?.at??null,allDay:i.allDay})}return t.sort((n,r)=>n.start.getTime()-r.start.getTime()||Number(r.allDay)-Number(n.allDay))}var Rs=864e5;function fo(o){return new Date(o.getFullYear(),o.getMonth(),o.getDate())}function mo(o,e,t=7){let n=fo(e),r=[];for(let i=0;i<t;i++){let s=new Date(n.getTime()+i*Rs),a=new Date(s.getFullYear(),s.getMonth(),s.getDate()+1),l=o.filter(c=>{if(c.allDay){let u=c.end??new Date(c.start.getTime()+Rs);return c.start<a&&u>s}if(c.start<s||c.start>=a)return!1;let d=c.end??new Date(c.start.getTime()+36e5);return i>0||d.getTime()>e.getTime()-36e5});r.push({day:s,offset:i,events:l})}return r}var $u=["#37e0ff","#ff5fd2","#ffb84d","#7dff8a","#b18cff","#ff7a6b"];function xr(o,e){let t=Math.max(0,o.indexOf(e));return $u[t%$u.length]}function Tn(o,e,t){return o.offset===0?t.today:o.offset===1?t.tomorrow:o.day.toLocaleDateString(e,{weekday:"short",day:"numeric",month:"numeric"})}function go(o,e,t){if(o.allDay)return t;let n=r=>r.toLocaleTimeString(e,{hour:"2-digit",minute:"2-digit"});return o.end&&o.end.getTime()!==o.start.getTime()?`${n(o.start)}\u2013${n(o.end)}`:n(o.start)}function Pu(o,e){switch(o){case"camera":return e?1e4:5e3;case"calendar":return 15*6e4;case"weather":return 10*6e4;default:return 6e4}}async function Tu(o,e,t=new Date,n=8){let r=new Map,i=o.callApi;if(!i)return r;let s=fo(t),a=new Date(s.getFullYear(),s.getMonth(),s.getDate()+n);return await Promise.all(e.map(async l=>{try{let c=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);r.set(l,Array.isArray(c)?c:[])}catch{}})),r}function Sr(o){return{"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u26A0\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26C8\uFE0F","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"}[o]??"\u{1F321}\uFE0F"}function $r(o,e){if(o.allDay)return null;let t=o.end??new Date(o.start.getTime()+36e5);if(o.start<=e&&t>e)return"now";let n=(o.start.getTime()-e.getTime())/6e4;return n>0&&n<=30?"soon":null}function Mr(o,e){return Math.max(0,Math.round((o.start.getTime()-e.getTime())/6e4))}function Pr(o){return/geburtstag|birthday|cumplea|anniversaire|compleanno|verjaardag|urodzin|narozenin|födelsedag|bursdag|fødselsdag|szület/i.test(`${o.calendar} ${o.summary}`)}function Xt(o){return[...new Set((o.frame_source??"").split(",").map(e=>e.trim()).filter(Boolean))]}function Is(o,e=50){let t=o.filter(r=>r.status!=="completed"),n=o.filter(r=>r.status==="completed");return[...t,...n].slice(0,e)}function Eu(o){return[...new Set(o.flatMap(e=>e.furniture.filter(t=>Yt(t.type)&&t.frame_kind==="todo").flatMap(t=>Xt(t).filter(n=>n.startsWith("todo.")))))]}function zu(o,e){let t=new Set;for(let n of o.flatMap(r=>r.furniture))Yt(n.type)&&(n.frame_kind==="weather"&&n.frame_source?.startsWith("weather.")&&t.add(n.frame_source),n.frame_kind==="board"&&e&&t.add(e));return[...t]}function Au(o,e,t=3){if(!o?.length)return[];let n=fo(e).getTime();return o.map(r=>{let i=new Date(r.datetime);return{e:r,day:fo(i),offset:Math.round((fo(i).getTime()-n)/Rs)}}).filter(r=>!Number.isNaN(r.day.getTime())&&r.offset>=0).slice(0,t).map(({e:r,day:i,offset:s})=>({day:i,offset:s,condition:r.condition??"",hi:typeof r.temperature=="number"?r.temperature:null,lo:typeof r.templow=="number"?r.templow:null,rain:typeof r.precipitation_probability=="number"?r.precipitation_probability:null}))}function Ru(o,e,t=6,n=60){if(!o?.length)return null;for(let r of o){let i=new Date(r.datetime).getTime();if(Number.isNaN(i)||i<e.getTime()-36e5)continue;let s=Math.max(0,Math.round((i-e.getTime())/36e5));if(s>t)break;let a=r.precipitation_probability??((r.precipitation??0)>.2?100:0);if(a>=n)return{inHours:s,probability:a}}return null}function En(o,e,t){let n=e.length?e:Object.keys(o).filter(i=>i.startsWith("person.")).sort(),r=[];for(let i of n){let s=o[i];if(!s)continue;let a=s.attributes,l=s.last_changed?Date.parse(s.last_changed):NaN;r.push({id:i,name:typeof a.friendly_name=="string"?a.friendly_name:i.split(".")[1],picture:typeof a.entity_picture=="string"?a.entity_picture:null,home:s.state==="home",state:s.state,room:t.get(i)??null,since:Number.isFinite(l)?l:null})}return r.sort((i,s)=>Number(s.home)-Number(i.home))}function Fs(o,e,t){if(o===null)return"";let n=Math.max(0,Math.round((e-o)/6e4));return n<1?"":n<60?`${t.since} ${n} ${t.min}`:n<1440?`${t.since} ${Math.round(n/60)} ${t.h}`:""}function Ds(o,e,t){return o<=1?0:Math.floor(t/(Math.max(3,e)*1e3))%o}function Hs(o){return`${o.calendar}|${o.start.getTime()}|${o.summary}`}function Iu(o,e,t,n){let r=[];for(let i of o){if(i.allDay)continue;let s=(i.start.getTime()-t.getTime())/6e4;s>e||s<e-1.5||n.has(Hs(i))||r.push(i)}return r}var Qm=512;function _o(o,e,t="night"){if(typeof document>"u")return null;let n=Qm,r=Math.round(n/Math.max(.4,Math.min(3,o))),i=document.createElement("canvas");i.width=n,i.height=r;let s=i.getContext("2d");if(!s)return null;let a=s.createLinearGradient(0,0,t==="sky"?n:0,r);e?(a.addColorStop(0,t==="sky"?"#eaf3ff":"#fbfaf6"),a.addColorStop(1,t==="sky"?"#fbfaf6":"#ece9e0")):(a.addColorStop(0,t==="sky"?"#0d1a3a":"#111a30"),a.addColorStop(1,"#0a1020")),s.fillStyle=a,s.fillRect(0,0,n,r),s.textBaseline="top";let l=Math.round(n*.06),c=Math.max(18,Math.round(Math.min(n,r)*.075));return{c:i,ctx:s,W:n,H:r,pad:l,base:c,line:Math.round(c*1.45),fg:e?"#1c2333":"#eef3ff",dim:e?"#5a6478":"#8fa0c0",accent:e?"#0a84c8":"#37e0ff",light:e}}function Ue(o,e,t){if(o.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&o.measureText(`${n}\u2026`).width>t;)n=n.slice(0,-1);return`${n}\u2026`}function xe(o,e,t=500){o.font=`${t} ${Math.round(e)}px system-ui, sans-serif`}function zn(o,e,t,n=o.dim){return o.ctx.fillStyle=n,xe(o.ctx,o.base*.8,700),o.ctx.fillText(Ue(o.ctx,e.toUpperCase(),o.W-2*o.pad),o.pad,t),t+Math.round(o.base*1.2)}function Tr(o,e,t){o.ctx.fillStyle=o.dim,xe(o.ctx,o.base),o.ctx.fillText(Ue(o.ctx,e,o.W-2*o.pad),o.pad,t)}function Fu(o,e,t,n,r,i,s,a){let{ctx:l,pad:c,base:d,line:u}=o;for(let p of e.events){if(s+u>a)return l.fillStyle=o.dim,xe(l,d*.75),l.fillText("\u2026",c,s),-1;let h=e.offset===0?$r(p,i):null;l.fillStyle=xr(t,p.calendar),l.fillRect(c,s+Math.round(d*.15),Math.round(d*.22),Math.round(d*1.05));let f=c+Math.round(d*.6),_=e.offset===0;l.fillStyle=h?o.accent:_?o.fg:o.dim,xe(l,d*.78,h?700:_?600:500);let m=h==="now"?r.now:h==="soon"?r.inMin.replace("{n}",String(Mr(p,i))):go(p,n,r.allDay),b=l.measureText(m).width;l.fillText(m,f,s+Math.round(d*.22)),l.fillStyle=_?o.fg:o.dim,xe(l,d,_?600:500);let v=f+b+Math.round(d*.5);l.fillText(Ue(l,(Pr(p)?"\u{1F382} ":"")+p.summary,o.W-c-v),v,s+Math.round(d*.12)),s+=u}return s}function Du(o,e,t,n,r,i,s="",a=new Date){let l=_o(r,i);if(!l)return null;let c=l.pad;s&&(c=zn(l,s,c));let d=l.H-l.pad;if(!o.reduce((p,h)=>p+h.events.length,0))return Tr(l,n.nothing,c),l.c.toDataURL("image/png");for(let p of o)if(p.events.length){if(c+l.line>d||(c=zn(l,Tn(p,t,n),c+Math.round(l.base*.2),p.offset===0?l.fg:l.dim)-Math.round(l.base*.3),c=Fu(l,p,e,t,n,a,c,d),c<0))break;c+=Math.round(l.line*.3)}return l.c.toDataURL("image/png")}function Hu(o,e,t,n,r=""){let i=_o(t,n);if(!i)return null;let{ctx:s,pad:a,base:l,line:c}=i,d=a;r&&(d=zn(i,r,d));let u=i.H-a;if(!o.filter(f=>f.status!=="completed").length)return Tr(i,o.length?e.done:e.nothing,d),i.c.toDataURL("image/png");let h=Math.round(l*.9);for(let f of o){if(d+c>u){s.fillStyle=i.dim,xe(s,l*.75),s.fillText(`+${o.length-o.indexOf(f)}`,a,d);break}let _=f.status==="completed";s.strokeStyle=_?i.dim:i.accent,s.lineWidth=Math.max(2,l*.1),s.strokeRect(a+1,d+Math.round(l*.25),h,h),_&&(s.beginPath(),s.moveTo(a+h*.25,d+l*.25+h*.5),s.lineTo(a+h*.45,d+l*.25+h*.75),s.lineTo(a+h*.8,d+l*.25+h*.25),s.stroke()),s.fillStyle=_?i.dim:i.fg,xe(s,l,_?500:600);let m=a+h+Math.round(l*.6),b=Ue(s,f.summary,i.W-a-m);if(s.fillText(b,m,d+Math.round(l*.12)),_){let v=s.measureText(b).width;s.fillRect(m,d+Math.round(l*.65),v,Math.max(1,l*.06))}d+=c}return i.c.toDataURL("image/png")}function Wu(o,e,t,n,r,i=""){let s=_o(n,r);if(!s)return null;let{ctx:a,pad:l,base:c}=s,d=Math.round(c*1.7),u=l;i&&(u=zn(s,i,u));let p=s.H-l;if(!o.length)return Tr(s,e.nothing,u),s.c.toDataURL("image/png");for(let h of o){if(u+d>p)break;let f=Math.round(c*.42);a.beginPath(),a.arc(l+f,u+f+Math.round(c*.3),f,0,Math.PI*2),a.fillStyle=h.home?r?"#1ca36a":"#4dffc0":r?"#b8bfcc":"#3a4660",a.fill(),a.fillStyle=h.home?s.fg:s.dim,xe(a,c,600);let _=l+2*f+Math.round(c*.5);a.fillText(Ue(a,h.name,s.W-l-_),_,u),a.fillStyle=s.dim,xe(a,c*.75);let m=h.home?[e.home,h.room].filter(Boolean).join(" \xB7 "):h.state==="not_home"?e.away:h.state;a.fillText(Ue(a,[m,t(h)].filter(Boolean).join(" \xB7 "),s.W-l-_),_,u+Math.round(c*1.05)),u+=d}return s.c.toDataURL("image/png")}function Lu(o,e,t){let n=_o(e,t,"sky");if(!n)return null;let{ctx:r,W:i,H:s,pad:a}=n,l=Math.round(Math.min(i,s)*.28);xe(r,l*1.1),r.fillStyle=n.fg,r.fillText(o.symbol,a,a),xe(r,l,700);let c=a+Math.round(l*1.4);r.fillText(o.temperature,c,a+Math.round(l*.1)),r.fillStyle=n.dim,xe(r,l*.38),r.fillText(Ue(r,[o.condition,...o.lines].join(" \xB7 "),i-c-a),c,a+Math.round(l*1.12));let d=a+Math.round(l*1.75);if(o.warning&&(r.fillStyle=n.accent,xe(r,l*.4,700),r.fillText(Ue(r,`\u2614 ${o.warning}`,i-2*a),a,d),d+=Math.round(l*.6)),o.days.length&&d+l*1.5<s-a*.5){let u=(i-2*a)/o.days.length;o.days.forEach((p,h)=>{let f=a+u*h;r.fillStyle=n.dim,xe(r,l*.34,700),r.fillText(Ue(r,p.label.toUpperCase(),u-6),f,d),xe(r,l*.62),r.fillStyle=n.fg,r.fillText(p.symbol,f,d+Math.round(l*.42)),xe(r,l*.38,600),r.fillText(Ue(r,`${p.hi}  ${p.lo}`,u-6),f,d+Math.round(l*1.1))})}return n.c.toDataURL("image/png")}function Cu(o,e,t,n,r,i="",s=new Date){let a=_o(n,r);if(!a)return null;let{ctx:l,W:c,pad:d,base:u,line:p}=a,h=a.H-d,f=d;if(o.weather){l.fillStyle=a.fg,xe(l,u*1.1,700);let _=`${o.weather.symbol} ${o.weather.temperature}`;l.fillText(_,c-d-l.measureText(_).width,f)}if(f=zn(a,i||Tn({day:s,offset:2,events:[]},e,t),f),o.people.length){let _=Math.round(u*.3),m=d;xe(l,u*.8,600);for(let b of o.people){let v=b.name.split(/\s+/)[0],g=l.measureText(v).width;if(m+2*_+g+u>c-d)break;l.beginPath(),l.arc(m+_,f+_+Math.round(u*.2),_,0,Math.PI*2),l.fillStyle=b.home?r?"#1ca36a":"#4dffc0":r?"#b8bfcc":"#3a4660",l.fill(),l.fillStyle=b.home?a.fg:a.dim,l.fillText(v,m+2*_+Math.round(u*.3),f+Math.round(u*.05)),m+=2*_+g+Math.round(u*1.1)}f+=Math.round(p*.95)}for(let _ of[o.today,o.tomorrow])if(_){if(f+p*1.5>h)break;if(f=zn(a,Tn(_,e,t),f+Math.round(u*.15),_.offset===0?a.fg:a.dim)-Math.round(u*.3),!_.events.length){Tr(a,t.nothing,f+Math.round(u*.1)),f+=p;continue}if(f=Fu(a,_,o.calendars,e,t,s,f,h),f<0)return a.c.toDataURL("image/png");f+=Math.round(p*.2)}return o.waste.length&&f+p<=h&&(l.fillStyle=a.accent,xe(l,u*.85,600),l.fillText(Ue(l,`\u{1F5D1} ${o.waste.join(" \xB7 ")}`,c-2*d),d,f+Math.round(u*.2))),a.c.toDataURL("image/png")}var zr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Er(o){return o&&o!=="none"?o:null}function An(o,e){if(e.type!=="parking")return null;let t=Er(e.entity);if(t){let i=o.states[t];if(!i||!zr.has(i.state.toLowerCase()))return null}let n=e.vehicle??null,r=Er(e.type_entity);if(r&&e.types?.length){let i=(o.states[r]?.state??"").trim().toLowerCase();if(i){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===i)??e.types.find(l=>s(l.state)&&i.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&he(n)?n:null}function Ws(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let i=An(o,r);i&&t.set(r.id,i)}return t}function Ou(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Er(t.entity),Er(t.type_entity)])).filter(e=>!!e)}function Nu(o,e){let t=he(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var bo=1800*1e3,Jm=new Set(["motion","occupancy","presence"]);function Bu(o,e){return e.startsWith("binary_sensor.")&&Jm.has(String(o.states[e]?.attributes.device_class))}function wo(o,e){let t=[],n=new Set,r=(i,s,a,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:s,x:a,z:l}))};for(let i of e.floors)for(let s of i.placements)if(Bu(o,s.entity_id))r(s.entity_id,i.id,s.x,s.z);else if(L(s.entity_id)==="camera")for(let a of Ke(o,s.entity_id))r(a,i.id,s.x,s.z);for(let i of e.floors)for(let s of i.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ae(s.points);for(let c of _e(o,s.area_id))Bu(o,c)&&r(c,i.id,a,l)}return t}function Vu(o,e,t,n=bo){let r=t-n,i=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=r&&d<=t&&i.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=r&&a<=t)||i.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||i.push({entity:s.entity,time:a})}return i.sort((s,a)=>s.time-a.time)}function Ku(o,e,t,n=bo){let r=new Map(o.map(s=>[s.entity,s])),i=[];for(let s of e){let a=r.get(s.entity);if(!a)continue;let l=i[i.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||i.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return i.slice(-40)}function Ar(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...Wn(o)})}var Gu='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Rr=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Ir(o,e){let t=[],n=Ct(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let s=(d,u)=>i.rooms.find(p=>p.points.length>=3&&K([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,r?i.name:null].filter(Boolean).join(" \xB7 ");for(let d of i.rooms){if(d.points.length<3)continue;let[u,p]=Ae(d.points);t.push({kind:"room",name:d.name,where:r?i.name:"",floorId:i.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,h)=>{l.has(d)||!o.states[d]||(l.add(d),t.push({kind:"device",name:G(o,d),where:a(u,p),floorId:i.id,roomId:s(u,p)?.id??null,entity:d,icon:L(d),x:u,z:p,y:h}))};for(let d of i.placements)c(d.entity_id,d.x,d.z,d.y??hn(L(d.entity_id)??"sensor",i.height,d.mount));for(let d of i.furniture){let u=n.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(i.height-.3,Math.max(.5,d.h)))}}return t}function Uu(o,e,t=8){let n=Rr(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(a=>{let l=Rr(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),i=Rr(e.trim()),s=a=>(Rr(a.name).startsWith(i)?0:2)+(a.kind==="room"?0:1);return r.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var st=new Map,Ls=new Map,ju=new Map;async function eg(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function tg(o,e){let t=await eg(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let i=(await import(n)).default;if(!i||i.api!==1||typeof i.id!="string")return null;let s=ju.get(e.id);s&&URL.revokeObjectURL(s),ju.set(e.id,n);let a={id:e.id,release:t.release,module:i};return st.set(e.id,a),a}catch(r){throw URL.revokeObjectURL(n),r}}async function Cs(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...st.keys()])t.has(n)||st.delete(n);await Promise.all([...t.values()].map(n=>{let r=st.get(n.id);if(r&&r.release===(n.release??1))return Promise.resolve(r);let i=Ls.get(n.id);return i||(i=tg(o,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>Ls.delete(n.id)),Ls.set(n.id,i)),i}))}async function qu(o,e){for(let t of st.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function Zu(o){return Jt(e=>e.scene?.(o))}function Yu(o){return Jt(e=>e.cards?.(o))}function Xu(o){return Jt(e=>e.alerts?.(o))}function Qu(o){return Jt(e=>e.watched?.(o))}function Os(o,e){return Jt(t=>t.roomSheets?.(o,e))}function Ns(o){return Jt(e=>e.menuSheets?.(o))}function Bs(){return[...st.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function Ju(o,e){let t=st.get(o);if(!t?.module.settings)return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`NeonPlan 3D: module ${t.id} failed`,n),[]}}function eh(o){return Jt(e=>e.pools?.(o))}function Qt(){return st.size>0}function Jt(o){let e=[];for(let t of st.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function nh(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let r=Math.min(...n),s=Math.max(...n)-r||1,a=l=>Math.round(l*10)/10;return n.map((l,c)=>`${a(c/(n.length-1)*e)},${a(t-1-(l-r)/s*(t-2))}`).join(" ")}function th(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),r=t-n,[i,s]=[o[n],o[n+1]];return[i[0]+(s[0]-i[0])*r,i[1]+(s[1]-i[1])*r,i[2]+(s[2]-i[2])*r]}function oh(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let r=[],i=0;for(let l=1;l<n.length;l++){let c=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);r.push(c),i+=c}if(i<.01)continue;let s=t.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let c=r[l-1];if(c<.005)continue;let d=s?th([t.colors[l-1],t.colors[l]],.5):th(t.colors,(a+c/2)/i);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,t.flow),color:d,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),a+=c}}return e}function rh(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function ih(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Fr(o,e){return(o??[]).filter(t=>!e||!t.minor)}var ng=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],og=[2200,2700,3200,4e3,5e3,6500],rg=["hs","rgb","rgbw","rgbww","xy"],ig=4,sg=16,ag=32,lg=128;function Ks(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>rg.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Gs(o){return((o.attributes.supported_features??0)&ig)!==0&&typeof o.attributes.current_position=="number"}var Vs=class extends me{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{L(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return w`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?w`<img src=${n} alt=${G(this.hass,this.entity)} />`:w`<span class="qm-note">${fe(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return T(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:G(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}cover(e,t){let n=Pi(e,t);this.call("cover",n.service,n.data)}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Me(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let i=r/t*Math.PI*2-Math.PI/2;return w`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=Ks(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?ng.map(s=>w`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?og.map(s=>w`<button class="qm-swatch" style="background:${dg(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return w`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?w`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=Gs(e),i=(d,u,p,h=!1)=>w`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${u} @click=${p}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.cover(e,"open"),s(100)),...r?[75,50].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.cover(e,"close"),s(0)),...r?[25].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],i("\u25A0",this.t("cover_stop"),()=>this.cover(e,"stop"),n)],l=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null,c=t!==null?100-t:l!==null?100-l:e.state==="closed"?100:0;return w`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c<100?"qm-on":""}"
          style="--closed:${c}%"
          aria-label=${n?this.t("cover_stop"):c>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.cover(e,"stop"):this.ask()&&this.cover(e,c>50?"open":"close")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:fe(this.hass,e)}</b>
        </button>
      </div>
      ${r?w`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&lg&&n!==null?w`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:No(e)?w`<div class="qm-tilt-buttons">
        ${t&sg?w`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${t&ag?w`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let t=e.entities,n=(u,p,h,f={})=>{this.hass.callService(u,p,{entity_id:h,...f})},r=t.lock,i=!!r&&r.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),c=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return w`<p class="qm-car-line">${d||fe(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&s(r)?w`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?n("lock","unlock",r):n("homeassistant","turn_off",r)):i?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?w`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${c?w`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!i&&!a&&!c?w`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return w`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?w`<p class="qm-media-title">${s}</p>`:y}
      ${i!==null?w`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){if(!C("sound"))return y;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return y;let r=e.attributes.source;return w`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>w`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>w`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=G(this.hass,this.entity),r=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return w`<p class="qm-car-line">${fe(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${r}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return w`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${fe(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let t=L(this.entity),n=this.car?this.renderCar(this.car):j(e)?w`<p class="qm-note">${fe(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&C("sound")?this.renderMedia(e):this.renderToggle(e);return w`<div class="qm" role="dialog" aria-label=${G(this.hass,this.entity)}>
      <div class="qm-title">${G(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Ee,ke`
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
    `]};function dg(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Vs);var cg=new URL(import.meta.url),ug=new URL("./neonplan3d-3d.js?v=0b736c73bb06",cg).href,sh;function vo(){return sh??=import(ug),sh}var Us;function js(){let o=new URL("./neonplan3d-fun.js?v=dbf4af7cc93e",new URL(import.meta.url)).href;return Us??=import(o).catch(e=>{throw Us=void 0,e}),Us}function ah(o,e){let t=o.points,n=t[e],r=t[(e+1)%t.length],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1,s=[(r[0]-n[0])/i,(r[1]-n[1])/i],a=[-s[1],s[0]],l=[(n[0]+r[0])/2,(n[1]+r[1])/2];K([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:r,u:s,n:a,length:i,rightward:s[0]*c[0]+s[1]*c[1]>0}}function Dr(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function qs(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var hg=.45;function lh(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let r=e.rooms.find(a=>a.id===n.room_id);if(!r||n.edge>=r.points.length)continue;let{s:i,d:s}=Dr(o,Jo(r,n.edge,n.offset));Math.abs(s)>.4||i<-.05||i>o.length+.05||t.push(pg(n,i))}return t}function pg(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function dh(o,e,t,n=hg){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let s=K([i.x,i.z],t.points),a=Wt(i).map(h=>Dr(o,h)),l=Math.min(...a.map(h=>h.d)),c=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),u=Dr(o,[i.x,i.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>o.length-.02)continue;let p=ue(e,i);r.push({kind:"furniture",id:i.id,s0:c,s1:d,y0:p,y1:p+i.h,d:l})}return r}var ch=.3;function yo(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??ch,i=[];if(o.heights)t&&i.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>i.push([s,o.heights?.[l]??r,a])),n&&i.push([n.x,n.y,n.z]);else{if(!t||!n)return[];i.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[s,a]of o.points)i.push([s,r,a]);i.push([n.x,r,n.z],[n.x,n.y,n.z])}return i.filter((s,a)=>a===0||Zs(s,i[a-1])>.001)}function Zs(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Hr(o){let e=0;for(let t=1;t<o.length;t++)e+=Zs(o[t-1],o[t]);return e}function Wr(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,i]=[o[n-1],o[n]],s=Zs(r,i);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(i[0]-r[0])/s,(i[1]-r[1])/s,(i[2]-r[2])/s];return{p:[r[0]+(i[0]-r[0])*a,r[1]+(i[1]-r[1])*a,r[2]+(i[2]-r[2])*a],dir:l,seg:n-1}}t-=s}}return null}function en(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function fg(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(t,n)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let s=r*.89,a=i*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(i==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function uh(o,e){let t=fg(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,i]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*i,y:t[1],z:o.z+t[0]*i+t[2]*r}}function ko(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function ph(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var Ys=[.25,.7,1],mg=900;function fh(o,e,t,n=r=>r){let r=[];for(let i of o){let s=n(yo(i,t),i);if(s.length<2)continue;let a=e.get(i.id),l=a?.color??Ys,c=0;for(let d=1;d<s.length;d++){let[u,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(r.push({floorId:i.floor_id,a:u,b:p,dist:c,power:a?.active?mg:0,color:l}),c+=h)}}return r}function Lr(o,e,t){let n=t.pool??{},r=cn(e,t);return i=>{let{kind:s,id:a,port:l}=en(i);if(s==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?r-(c.depth??0):c.kind==="drain"?Un(e,t)+.03:c.kind==="inlet"?r-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===a);return c?ko(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(f=>f.id===a);if(!d||!Bl.includes(d.type))continue;let u=l?uh(d,l):null,p=c.elevation-e.elevation;if(u)return{...u,y:u.y+ue(c,d)+p};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Vl:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+ue(c,d)+p}}return null}}function Xs(o,e,t,n){let r=d=>{let{kind:u,id:p}=en(d);return u==="port"?t.pool?.ports?.find(h=>h.id===p)?.kind:void 0},i=d=>r(d)==="drain",s=d=>r(d)==="inlet"||r(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],p=Qs(t,[u[0],u[2]]);if(!p)return d;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],f=1;for(;f<d.length&&Math.hypot(d[f][0]-u[0],d[f][2]-u[2])<.01;)f++;let _=d.slice(f).map(b=>[...b]);for(let b=0;b<_.length-1;b++){let v=(_[b][0]-u[0])*p[0]+(_[b][2]-u[2])*p[1];if(v>=.349999)break;_[b][0]+=p[0]*(.35-v),_[b][2]+=p[1]*(.35-v)}let m=_[0]??d[d.length-1];return[u,h,[h[0],m[1],h[2]],..._]},l=d=>{if(d.length<2)return d;let u=d[0];if(!K([u[0],u[2]],t.points))return d;let p=Un(n,t)-.15,h=d.findIndex((b,v)=>v>0&&Math.hypot(b[0]-u[0],b[2]-u[2])>.01);if(h<0)return d;let f=d[h],_=[f[0],f[2]];for(let b=0;b<t.points.length;b++){let v=t.points[b],g=t.points[(b+1)%t.points.length],k=gg([u[0],u[2]],[f[0],f[2]],v,g);k&&(_=k)}let m=Math.hypot(_[0]-u[0],_[1]-u[2])>1e-6?[_[0]+(_[0]-u[0])*.02,_[1]+(_[1]-u[2])*.02]:_;return[u,[u[0],p,u[2]],[m[0],p,m[1]],[m[0],f[1],m[1]],...d.slice(h)]},c=o;return e.from&&i(e.from)&&(c=l(c)),e.to&&i(e.to)&&(c=l([...c].reverse()).reverse()),e.from&&s(e.from)&&(c=a(c)),e.to&&s(e.to)&&(c=a([...c].reverse()).reverse()),c}function Qs(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let i=0;i<t.length;i++){let s=t[i],a=t[(i+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let r=null;for(let i=0;i<t.length;i++){let s=t[i],a=t[(i+1)%t.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*c)/(d*d))),p=Math.hypot(s[0]+l*u-e[0],s[1]+c*u-e[1]),h=n>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function gg(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],i=[n[0]-t[0],n[1]-t[1]],s=r[0]*i[1]-r[1]*i[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s,l=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+r[0]*a,o[1]+r[1]*a]:null}var $e=o=>Math.round(o*1e3)/1e3;var mh=-.3;function gh(o,e,t,n,r){let i=[],s=[],a=m=>e(m),l=[],c=o.from,d=[];for(let m of o.vias){if(m.kind!=="hole"){d.push(m.kind);continue}let b=t.find(E=>E.id===m.joint),v=a(c);if(!b||!v)continue;let g=a(`joint:${b.id}:inside`),k=a(`joint:${b.id}:outside`),$=m.dir?m.dir==="out":Math.hypot(v.x-g.x,v.z-g.z)<=Math.hypot(v.x-k.x,v.z-k.z);l.push({a:c,b:`joint:${b.id}:${$?"inside":"outside"}`,fits:d}),d=[],c=`joint:${b.id}:${$?"outside":"inside"}`}let u=o.to;if(u.length>1){let m=a(c),b=u.map(a).filter(v=>!!v);if(m&&b.length===u.length){let v=b.reduce((R,I)=>R+I.x,0)/b.length,g=b.reduce((R,I)=>R+I.z,0)/b.length,k=Math.hypot(m.x-v,m.z-g)||1,$=Math.min(1,k/2)/k,E=m.y<0||b.some(R=>R.y<0),M={id:r("joint"),kind:"tee",x:$e(v+(m.x-v)*$),z:$e(g+(m.z-g)*$),y:E?mh:$e(m.y)};s.push(M),l.push({a:c,b:`joint:${M.id}:in`,fits:d}),d=[],u.forEach((R,I)=>l.push({a:`joint:${M.id}:out${I+1}`,b:R,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=m=>{let{kind:b,id:v,port:g}=en(m),k=b==="joint"?s.find($=>$.id===v):void 0;return k?ko(k,g):a(m)},h=m=>n(m)==="source",f=m=>n(m)==="sink",_=o.to.some(h)&&!h(o.from)||f(o.from)&&!o.to.some(f);for(let m of l){let b=p(m.a),v=p(m.b);if(!b||!v)continue;let g=_g(b,v,hh(m.a,t),hh(m.b,t)),k={id:r("pipe"),from:m.a,to:m.b,floor_id:o.floorId,points:g.map(E=>[E[0],E[2]]),heights:g.map(E=>E[1])},$=Hr(yo(k,p));k.fittings=m.fits.map((E,M)=>({id:r("fit"),kind:E,at:$e(Math.min($/2,.4+M*.25)),...E==="valve"?{open:!0}:{}})),_&&(k={...k,from:k.to,to:k.from,points:[...k.points].reverse(),heights:[...k.heights??[]].reverse(),fittings:k.fittings?.map(E=>({...E,at:$e(Math.max(0,$-E.at))}))}),i.push(k)}return{pipes:i,joints:s}}function hh(o,e){let{kind:t,id:n,port:r}=en(o),i=t==="joint"&&r==="outside"?e.find(s=>s.id===n):void 0;return i?.kind==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function _g(o,e,t=null,n=null){let r=o.y<0||e.y<0?mh:$e(Math.max(o.y,e.y)),i=[],[s,a]=[o.x,o.z];t&&([s,a]=[$e(s+t[0]*.5),$e(a+t[1]*.5)],i.push([s,$e(o.y),a]));let[l,c]=[e.x,e.z],d=[];return n&&([l,c]=[$e(l+n[0]*.5),$e(c+n[1]*.5)],d.push([l,$e(e.y),c])),i.push([$e(s),r,$e(a)]),Math.abs(l-s)>.01&&i.push([$e(l),r,$e(a)]),Math.abs(c-a)>.01&&i.push([$e(l),r,$e(c)]),i.push(...d),i.filter((u,p)=>p===0||Math.hypot(u[0]-i[p-1][0],u[1]-i[p-1][1],u[2]-i[p-1][2])>.001)}var bg=2e3;function _h(o){return Math.max(0,bg-o)}var bh=120;var wh="neonplan3d.gpu_lost",Cr="3.0.5";function vh(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Js(o,e=vh()){try{return!!e&&e.getItem(wh)===o}catch{return!1}}function yh(o,e,t,n,r=vh()){if(n||t-e>2e4||t<e||!r)return!1;try{return r.setItem(wh,o),!0}catch{return!1}}function kh(o,e,t,n=12,r=180){let i=Math.max(r,e),s=Math.max(r*.5625,t),a={cols:1,tile:Math.min(i,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let c=Math.ceil(o/l),d=(i-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,p=Math.min(d,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<r){let l=Math.max(1,Math.floor((i+n)/(r+n)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:a.cols,tile:Math.floor(a.tile)}}function ea(o,e,t){let n=[...t.openings.values()].flatMap(M=>[M.cover,M.contact,M.tilt,M.contact2??null,M.tilt2??null,M.position??null,M.tiltAngle??null,M.lock??null]),r=Gc(e),i=r.filter(M=>L(M)==="camera").flatMap(M=>Ke(o,M)),s=r.map(M=>ho(o,M)),a=e.energy,l=e.presence.flatMap(M=>[M.person,M.sensor]),c=e.floors.flatMap(M=>M.rooms.flatMap(R=>_e(o,R.area_id).filter(I=>L(I)==="light"))),d=[...t.furniture.values()].flatMap(M=>[M.entity,M.power]),u=e.floors.flatMap(M=>M.furniture.flatMap(R=>[R.state_entity??null,R.state_entity2??null,R.color_entity??null])),p=e.floors.flatMap(M=>M.furniture.flatMap(R=>[R.door_left??null,R.door_right??null,R.soc??null,R.status??null,R.charge??null,R.export??null])),h=(e.settings.roof?.windows??[]).flatMap(M=>[M.cover,M.contact,M.tilt]).filter(M=>!!M&&M!=="none"),f=[...(e.settings.roof?.solar??[]).map(M=>M.entity),...(e.settings.roof?.strings??[]).map(M=>M.entity)].filter(M=>!!M&&M!=="none"),_=e.floors.flatMap(M=>M.furniture.filter(R=>R.type==="robot_vacuum").map(R=>eo(o,t.furniture.get(R.id)?.entity??null,R.room_sensor))),m=e.floors.flatMap(M=>M.furniture.flatMap(R=>(R.pictures??[]).flatMap(I=>[I.entity,...I.image.startsWith("camera:")?[I.image.slice(7)]:[]]))),b=t.heat?e.floors.flatMap(M=>M.rooms.flatMap(R=>_e(o,R.area_id).filter(I=>I.startsWith("sensor.")))):[],v=[...Ou(e.floors),...C("auto_pro")?Md(o,e.floors):[]],g=wo(o,e).map(M=>M.entity),k=C("household")?[...e.floors.flatMap(M=>M.furniture.flatMap(Jd)),e.settings.household?.notes??null].filter(M=>!!M&&M!=="none"):[],$=Ce(o,t.weatherEntityId??e.settings.weather_entity),E=[...r,...i,...n,...s,...d,...u,...p,..._,...h,...f,...m,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...b,...t.warnings,...v,...g,...k,$,"sun.sun"];return[...new Set(E.filter(M=>!!M))]}var xh=/^#[0-9a-f]{3,8}$/i;function wg(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Sh(o){if(!o||!o.kind)return null;let e=o.color&&xh.test(o.color)?o.color:"#0b1426",t=o.color2&&xh.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=wg(o.image);if(!n)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${n}") center / cover no-repeat`}var ta;function at(){let o=new URL("./neonplan3d-voice.js?v=b6a4c2a1d1d6",new URL(import.meta.url)).href;return ta??=import(o).catch(e=>{throw ta=void 0,e}),ta}function Or(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function na(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function oa(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function lt(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function ra(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function Nr(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var vg=[[/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/,"Fire HD 10"],[/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/,"Fire HD 8"],[/KFQUWI|KFMUWI|KFKAWI|KFGIWI/,"Fire 7"]];function $h(o=typeof navigator>"u"?"":navigator.userAgent){if(!o)return null;let e=/Fully/i.test(o)?"Fully Kiosk":/Home ?Assistant/i.test(o)?"HA app":/Silk\//.test(o)?"Silk":/Edg\//.test(o)?"Edge":/Firefox\//.test(o)?"Firefox":/Chrome\//.test(o)?"Chrome":/Safari\//.test(o)?"Safari":null,r=[vg.find(([i])=>i.test(o))?.[1]??(/KF[A-Z]{2,5}WI|Silk\//.test(o)?"Fire tablet":null)??(/iPad/.test(o)?"iPad":/iPhone/.test(o)?"iPhone":/Android/.test(o)?/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(o)?.[1]?.trim()??"Android":/Windows/.test(o)?"Windows":/Mac OS X/.test(o)?"Mac":/Linux/.test(o)?"Linux":null),e].filter(Boolean).join(" \xB7 ");return r?r.slice(0,80):null}var yg=.25,Mh=o=>Math.round(o*1e3)/1e3;function ia(o,e,t,n,r){let i=o.rooms.find(s=>s.points.length>=3&&K([e,t],s.points));return!i||K([n,r],i.points)?[n,r]:K([n,t],i.points)?[n,t]:K([e,r],i.points)?[e,r]:[e,t]}function Ph(o,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let i=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*i[1]+(l[1]-t[1])*i[0]),a=l=>(l[0]-t[0])*i[0]+(l[1]-t[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Th(o,e,t,n=yg){let r=o.rooms.find(c=>c.points.length>=3&&K([e.x,e.z],c.points));if(!r)return null;let i=r.points,s=We(i)>=0?1:-1,a=t/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],f=[-h[1]*s,h[0]*s],_=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(_<0||_>p)continue;let b=o.rooms.some(R=>R.id!==r.id&&R.points.some((I,x)=>{let P=R.points[(x+1)%R.points.length],A=Math.abs((I[0]-d[0])*f[0]+(I[1]-d[1])*f[1]),H=Math.abs((P[0]-d[0])*f[0]+(P[1]-d[1])*f[1]);return A<.02&&H<.02}))?a:0,v=(e.x-d[0])*f[0]+(e.z-d[1])*f[1]-b,g=Math.atan2(-f[0],f[1])*180/Math.PI,k=R=>Math.abs((e.rotation-R+540)%360-180),E=[{rotation:g,extent:e.d/2},{rotation:g+90,extent:e.w/2},{rotation:g-90,extent:e.w/2}].reduce((R,I)=>k(I.rotation)<k(R.rotation)?I:R);if(k(E.rotation)>50)continue;let M=v-E.extent;Math.abs(M)>n||l&&Math.abs(M)>=Math.abs(l.gap)||(l={x:Mh(e.x-f[0]*M),z:Mh(e.z-f[1]*M),rotation:(Math.round(E.rotation)%360+360)%360,gap:M})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function kg(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var sa={walls(o,e,t){let n=o.floors.find(i=>i.id===e),r=n?.rooms.find(i=>i.id===t);return!n||!r||r.points.length<3?[]:r.points.map((i,s)=>{let a=ah(r,s),l=Ph(n,r.id,a.a,a.b),c=[...dh(a,n,r).map(d=>[d.s0,d.s1]),...lh(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:r.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,e,t){return qs(kg(o),e,t)},freeSpot(o,e,t=.1){let n=i=>i>=t&&i+e<=o.length-t&&!o.taken.some(([s,a])=>i<a+.05&&i+e>s-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(n(r-i))return Math.round((r-i)*100)/100;if(n(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(a=>a.id===e),r=n?.outdoor.find(a=>a.id===t);if(!n||!r)return()=>null;let i=Lr(o,n,r),s=r.pool??{};return a=>{let{kind:l,id:c,port:d}=en(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return ko(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?i(a)??{x:p.x,y:.02,z:p.z}:i(a)}},connect(o,e,t,n,r,i){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===t);return!s||!a?{pipes:[],joints:[]}:gh({...n,floorId:e},sa.nodeAt(o,e,t),a.pool?.joints??[],r,i)}};var Br=30,xg=10,Sg=600,Eh={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},$g={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},Mg=2e4,Pg=3*6e4,aa=new Set(["unavailable","unknown",""]),Tg="neonplan3d.director";function la(){try{return localStorage.getItem(Tg)==="1"}catch{return!1}}function Ah(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var Eg=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Rh(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let r=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Eg.test(r)}).sort()}function da(o,e,t=Date.now()){if(!o||!e||aa.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var zh=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function ca(o,e,t=Date.now()){return!o||!e||aa.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?da(o,e,t):aa.has(o.state)?!1:zh.has(e.state)&&!zh.has(o.state)}function Ih(o,e,t,n){if(n)return n;let r=o.entities??{},i=r[e]?.device_id,s=t.filter(d=>d.startsWith("camera.")),a=i?s.find(d=>r[d]?.device_id===i):void 0;if(a)return a;let l=d=>Re(o,d),c=l(e);return c&&s.find(d=>l(d)===c)||null}var xo=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,t),r&&i!==t&&n(i,t)}stopped(e,t,n){let r=this.runs.get(e);return t?(r?.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:n,ran:!!r?.run}),!1):r.ran&&n-r.since>=Pg?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=Br){let r=this.shown.get(e.key);if(r!==void 0&&t-r<$g[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<Mg)return!1;let s=this.current;if(s&&t<s.until&&Eh[s.shot.kind]>Eh[e.kind])return!1;let a=Math.min(Sg,Math.max(xg,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+a,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var Se=Math.PI/180,Vr=-.833;function zg(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,r=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,i=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(i*Se)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*Se)*(.019993-101e-6*n)+Math.sin(3*i*Se)*289e-6,l=125.04-1934.136*n,c=r+a-.00569-.00478*Math.sin(l*Se),u=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*Se),p=Math.asin(Math.sin(u*Se)*Math.sin(c*Se)),h=Math.tan(u/2*Se)**2,f=4*(h*Math.sin(2*r*Se)-2*s*Math.sin(i*Se)+4*s*h*Math.sin(i*Se)*Math.cos(2*r*Se)-.5*h*h*Math.sin(4*r*Se)-1.25*s*s*Math.sin(2*i*Se))/Se,_=new Date(o),v=(((_.getUTCHours()*60+_.getUTCMinutes()+_.getUTCSeconds()/60+f+4*t)%1440+1440)%1440/4-180)*Se,g=e*Se,k=Math.sin(g)*Math.sin(p)+Math.cos(g)*Math.cos(p)*Math.cos(v),$=90-Math.acos(Math.min(1,Math.max(-1,k)))/Se;return{azimuth:(Math.atan2(Math.sin(v),Math.cos(v)*Math.sin(g)-Math.tan(p)*Math.cos(g))/Se+180+360)%360,elevation:$}}function Fh(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let r=n.getTime(),i=10*6e4,s=u=>({...zg(u,e,t),t:u}),a=[],l=null,c=null,d=s(r);for(let u=r+i;u<=r+24*36e5;u+=i){let p=s(u),h=p.elevation>Vr,f=d.elevation>Vr;if(h!==f){let _=d.t,m=p.t;for(let v=0;v<12;v++){let g=(_+m)/2;s(g).elevation>Vr===f?_=g:m=g}let b=s(Math.round((_+m)/2));h?(l??=b,a.push(b)):(c=b,a.push(b))}h&&a.push(p),d=p}return!l&&a.length&&s(r).elevation>Vr&&a.unshift(s(r)),{points:a,rise:l,set:c}}function Dh(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function Rg(o,e){return w`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Je`<polyline points=${nh(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function Ig(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${J(o,e*1e3,0)} l`:`${J(o,e,e<10?2:0)} ${t}`}var Fg=12e4,Dg=600*1e3,Hh={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Hg='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Wg='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function Kr(o,e,t){return o.rooms.find(n=>n.points.length>=3&&K([e,t],n.points))?.id??null}function Lg(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&Le(o.states[t])}function Cg(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Og(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function Wh(o,e){let t=s=>s&&s!=="none"?s:null,n=nt(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),r=t(e.window)?o.states[t(e.window)]:void 0,i=n.open;if(r&&!j(r)){let s=r.attributes.current_position;i=typeof s=="number"?Math.min(1,Math.max(0,s/100)):r.state==="open"||r.state==="opening"?1:0}return{open:i,tilt:n.tilt,cover:n.cover??0}}function Ng(o){let{card_templates:e,...t}=o;return JSON.stringify(t)}var Lh=new Set,Ch=new Set;async function Bg(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(n=>setTimeout(n,300))]),e.state!=="running")return;let t=e.currentTime;for(let[n,r]of[[784,0],[523,.45]]){let i=e.createOscillator(),s=e.createGain();i.frequency.value=n,s.gain.setValueAtTime(1e-4,t+r),s.gain.exponentialRampToValueAtTime(.3,t+r+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+r+.9),i.connect(s).connect(e.destination),i.start(t+r),i.stop(t+r+.95)}await new Promise(n=>setTimeout(n,1300))}finally{e.close().catch(()=>{})}}var ua=class extends me{static properties={hass:{attribute:!1},building:{attribute:!1},planId:{attribute:!1},rooms:{attribute:!1,hasChanged:(e,t)=>(e??[]).join(",")!==(t??[]).join(",")},noSave:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_camPop:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_framePop:{state:!0},_frameNew:{state:!0},frameOpenDays:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},template:{attribute:!1},viewKind:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;unwatchDiag=null;detecting=!1;syncMs=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popSeen=new Set;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;framePopTimer;frameEvents=new Map;frameTimer;frameCalendarKey="";framePics=new Map;frameTodos=new Map;todoTimer;frameTodoKey="";frameForecasts=new Map;forecastSubs=new Map;slideTimer;slideMs=0;reminded=new Set;personRooms=new Map;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new Yo;appliances=new Map;directing=new xo;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;winterTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.planId=null,this.rooms=null,this.noSave=!1,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null,this._framePop=null,this._frameNew=null,this.frameOpenDays=new Set;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.template=null,this.viewKind="panel",this.voiceArea=null,this._voice=null,this._micProbe=Or(),this._alerts=[],this._household=[],this._hhFolded=Cg("neonplan3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.unwatchDiag=_l(e=>this.viewer?.setStats(this.showStats||e)),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=tl(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),{kind:this.viewKind,screen:this.screen,template:this.template,device:$h(),version:_t,...this.planId&&this.planId!==ce?{plan:this.planId}:{}}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),this.watchWinter(!1),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchDiag?.(),this.unwatchDiag=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&at().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{let n=t;if(!n.target?.closest?.(".fp3d-holo"))return;let r=this.renderRoot.querySelector("canvas");r&&(n.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await vo();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",r=>{this._central&&!r.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)});let n=Date.now();this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,safeFx:Js(Cr),onContextLost:()=>yh(Cr,n,Date.now(),document.hidden),onRoomTap:(r,i)=>this.fire("room-tap",{floorId:r,roomId:i}),onFloorTap:r=>this.fire("floor-tap",{floorId:r}),floorInfo:r=>r.rooms.length===1?T(this.hass,"floor_rooms_one"):T(this.hass,"floor_rooms",{n:r.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(r,i,s)=>this.onDeviceTap(r,i,s),onDeviceHold:(r,i,s)=>this.onDeviceHold(r,i,s),onRoomDoubleTap:(r,i)=>this.onRoomDoubleTap(r,i),onDeviceSwipe:(r,i,s,a,l)=>this.onDeviceSwipe(r,i,s,a,l),onFurnitureSelect:r=>this.fire("furniture-select",{id:r}),onFurnitureMove:(r,i,s)=>this.fire("furniture-move",{id:r,x:i,z:s}),onDeviceSelect:r=>this.fire("device-select",{id:r}),onDeviceMove:(r,i,s)=>this.fire("device-move",{id:r,x:i,z:s}),onStats:r=>{this.showStats&&(this._stats=r),wl(r)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((r,i,s,a,l,c)=>this.placeHolo(r,i,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats||hi()),Ht("3d"),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...mt()]),this.hass&&Cs(this.hass,mt()).then(()=>this.syncDevices(!0)),this.shownPacks=ln(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding())),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(Wl(this.building??null),Kc(this.building)),e.has("hass")&&this.hass&&Bd(Vd(this.hass))}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),(e.has("screen")||e.has("template")||e.has("viewKind")||e.has("planId"))&&this.unsubAsk&&this.hasUpdated?(this.unwatchAsk(),this.watchAsk()):e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==ln()&&(this.shownPacks=ln(),t.setPacks([...mt()]),this.hass&&Cs(this.hass,mt()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(Ws(this.hass,this.building)),this.syncDevices(!0));let n=e.has("building")&&this.building?Ng(this.building):this.drawnPlan,r=e.has("building")&&n===this.drawnPlan;if(this.drawnPlan=n,e.has("building")&&this.building&&!r){let a=JSON.stringify(this.startViewOf()),l=this.shownStartView!==void 0&&this.shownStartView!==a;this.shownStartView=a,t.setStartView(this.startViewOf()),t.setBuilding(this.shownBuilding()),l&&this.floorId===null&&t.resetView()}else(e.has("plain")&&e.get("plain")!==void 0||e.has("rooms")&&e.get("rooms")!==void 0)&&this.building?(t.setBuilding(this.shownBuilding()),e.has("rooms")&&(this.syncDevices(!0),t.resetView())):e.has("hass")&&this.building&&As(this.hass,this.building)!==this.shownSig&&(t.setBuilding(this.shownBuilding()),this.syncDevices(!0));(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let i=["building","markerMode","heatMode","flows","alerts","dimmed"].some(a=>e.has(a))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(i||e.has("hass")||s)&&this.syncDevices(i,s&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.effectiveTheme()),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats||hi()),e.has("building")&&(this.findIndex=null)}watchWinter(e){e&&!this.winterTimer?this.winterTimer=setInterval(()=>this.syncDevices(!1,!0),6e4):!e&&this.winterTimer&&(clearInterval(this.winterTimer),this.winterTimer=void 0)}syncDevices(e,t=!1){let n=this.viewer,r=this.conditioned();if(!n||!r||!this.hass)return;let i=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==i.entities){if(this.openingLinks=Qn(i,r.floors),this.furnitureLinks=Ct(i,r.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?no(i,r,this.weatherEntityId):null,this.watchHousehold(i,r),this.watched=ea(i,r,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?rs(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Qt()&&(this.watched=[...new Set([...this.watched,...Qu(this.sceneHost(i,r))])]),C("fun_winter")){let S=[Zt(r).roof_entity,Ce(i,this.weatherEntityId??r.settings.weather_entity),"sun.sun"].filter(z=>!!z);this.watched=[...new Set([...this.watched,...S])]}e=!0}let s=e||t,a=!s;if(!s){for(let S of this.watched)if(this.shownStates.get(S)!==i.states[S]&&(s=!0,!S.startsWith("sensor."))){a=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!s)return;if(!e&&!this.replay&&n.cameraBusy()){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},bh);return}if(a&&this._low&&!this.replay){let S=_h(performance.now()-this.lastSync);if(S>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},S);return}}this.lastSync=performance.now();let c=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(S=>[S,i.states[S]])),this.scene=Qt()?Zu(this.sceneHost(i,r)):[];let d=nu(i,r),u=Bc(i,r),p=this.furnitureMarkers(i,r,new Set(u.map(S=>S.id)),new Set(d.map(S=>S.powerEntity)));d.push(...p.consumers),this.lastConsumers=d;let h=ou(i,r,d,Mn(r,S=>this.furnitureLinks?.get(S.id)?.power??null)),f=new Map(d.filter(S=>S.id!==S.powerEntity).map(S=>[S.id,S.power]));this.confirmSet=pn(i,r.floors);let _=this.trail?this.trailNow(i,r):[],m=C("camera_cockpit")&&!this.dimmed?this.detectionPins(i,u):[];this.detecting=m.length>0;let b=C("energy_pro"),v=new Set(C("auto_pro")?r.floors.flatMap(S=>S.furniture.filter(z=>z.type==="parking"&&z.car&&An(i,z)).map(z=>z.id)):[]);n.setDevices([...[...u,...p.markers,...this.lockMarkers(i,r)].map(S=>{let z=S.show==="no_power"||"energyDevice"in S&&S.energyDevice||"standby"in S&&S.standby?null:f.get(S.id)??null,O={...S,power:z,powerText:z===null?void 0:ae(i,z),effect:this.dimmed?!1:S.effect},Q=S.ownName&&(S.showName||this.markerNames)?S.ownName:"",D=C("sound")&&this.mediaCardUp(i,S.id)||C("auto_pro")&&!!S.furnitureId&&v.has(S.furnitureId);return{...O,pin:this.showPin(O)&&!D,full:S.show==="always"||S.full===!0,caption:Q}}),...(b&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(i,r,h.grid)]:[]).filter(S=>!!S),...m,..._.map((S,z)=>({id:`trail:${z}`,floorId:S.floorId,roomId:null,x:S.x,z:S.z,y:.3+.4*_.slice(0,z).filter(O=>O.entity===S.entity).length,icon:Gu,name:G(i,S.entity),text:Ar(i,S.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(r)]);for(let S of this.scene)S.kind==="marker"&&S.card&&S.furnitureId&&!p.targets.has(S.furnitureId)&&p.targets.set(S.furnitureId,`module:${S.id}`);n.setTrail(_,this.replay?this.robotPaths(i,r):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(Fi(i,r.floors)),n.setAwnings($d(i,r.floors)),n.setProjections(this.projectedCameras(i,r)),n.setRobots(this.robotInfos(i,r));let g=new Map;for(let S of r.settings.roof?.windows??[])g.set(S.id,Wh(i,S));n.setRoofWindows(g),n.setParked(Ws(i,r));let k=new Map(r.floors.flatMap(S=>S.openings.map(z=>[z.id,z.type]))),$=new Map([...this.openingLinks].map(([S,z])=>[S,nt(i,z,k.get(S))]));n.setOpeningStates($,l);let E=this.alertSrc?Qo(i,r,this.alertSrc,this.openingLinks):[],M=this.alerts&&Qt()?Xu(this.sceneHost(i,r)).map(S=>({kind:S.kind,entity:S.entity,roomId:S.roomId,floorId:S.floorId,text:S.text,color:S.color,quiet:!S.roomId})):[];this.setAlerts([...E,...M]),clearTimeout(this.fridgeTimer);let R=C("household")&&!this.replay?ic(r.floors.flatMap(S=>S.furniture),i):null;R!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),R+500));let I=[...u,...p.markers].map(S=>`${S.id}:${S.glow?`${S.glow.level.toFixed(1)}/${S.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...$].map(([S,z])=>`${S}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(I!==this.thumbSig){let S=this.thumbSig==="";this.thumbSig=I,S||this.scheduleThumbs(1500)}let x=r.floors.flatMap(S=>S.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:S.id,x:z.x,z:z.z})))[0]??(r.energy.battery?r.floors.flatMap(S=>S.placements.filter(z=>z.entity_id===r.energy.battery).map(z=>({floorId:S.id,x:z.x,z:z.z})))[0]:null),P=b?hu(i,r,h.solar):null,A=r.settings.roof.hologram??Ye,H=[...r.settings.roof.solar??[]].sort((S,z)=>z.rows*z.cols-S.rows*S.cols),N=r.settings.roof.strings??[],B=S=>(S.string?N.find(z=>z.id===S.string)?.inverter:null)??null,Z=A.plant_floor?"all":"house",U=(S,z,O,Q)=>{let D=Gt(r,S);if(!D)return null;let[q,re]=Ut(D,S),ne=S.u+q/2+z,ge=S.v+re/2+O,Te=[D.o[0]+D.eu[0]*ne+D.es[0]*ge,D.o[1]+D.eu[1]*ne+D.es[1]*ge,D.o[2]+D.eu[2]*ne+D.es[2]*ge],ye=D.wall?.floorId??(D.unbounded?r.floors.find(De=>De.elevation===Math.min(...r.floors.map(on=>on.elevation)))?.id??r.floors[0].id:[...r.floors].sort((De,on)=>on.elevation-De.elevation)[0].id);return{p:[Te[0]+D.n[0]*.05,Te[1]+D.n[1]*.05,Te[2]+D.n[2]*.05],n:[D.n[0],D.n[1],D.n[2]],floorId:ye,size:Q,roof:!0,views:Z}},W=[],F=[],te=h.grid!==null||h.battery!==null||h.solar!==null,X=A.place==="free"&&Number.isFinite(A.x)&&Number.isFinite(A.z),se=b&&h.solar!==null&&!X?H.find(S=>S.id===A.field)??H[0]:void 0,ve=se?B(se):null,Pe=!!se&&!!ve&&!H.some(S=>S.id!==se.id&&B(S)===ve)&&A.right===0&&A.up===0,ze=(()=>{if(!Pe||!se)return 0;let S=Gt(r,se);return S?Ut(S,se)[0]/2+1.2:0})(),je=se?U(se,A.right+ze,A.up,A.size):null,dt=this.devicePowers(i,r),zt=b&&h.solar!==null?r.energy.solar?[r.energy.solar]:Mn(r,S=>this.furnitureLinks?.get(S.id)?.power??null).solar:[];if(je)W.push(je),F.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:zt,battery:null});else if(b&&te&&X){let S=0,z=0,O=0,Q=1/0,D=r.floors[0];for(let ge of r.floors){ge.rooms.length&&(Q=Math.min(Q,ge.elevation)),ge.rooms.length&&(!D.rooms.length||ge.elevation+ge.height>D.elevation+D.height)&&(D=ge);for(let Te of ge.rooms)for(let[ye,De]of Te.points)S+=ye,z+=De,O++}O&&(S/=O,z/=O);let q=A.x-S,re=A.z-z,ne=Math.hypot(q,re);W.push({p:[A.x,(Number.isFinite(Q)?Q:0)+(A.height??3),A.z],n:ne>.01?[q/ne,0,re/ne]:[1,0,0],floorId:D.id,size:A.size,roof:!0,views:Z}),F.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:zt,battery:null})}else if(b&&te&&r.floors.some(S=>S.rooms.length)){let S=-1/0,z=1/0,O=-1/0,Q=0,D=r.floors[0];for(let q of r.floors){for(let re of q.rooms)for(let[ne,ge]of re.points)S=Math.max(S,ne),z=Math.min(z,ge),O=Math.max(O,ge);q.rooms.length&&q.elevation+q.height>Q&&(Q=q.elevation+q.height,D=q)}W.push({p:[S+.6,Q+.4,(z+O)/2],n:[1,0,0],floorId:D.id,size:A.size,roof:!0,views:Z}),F.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:zt,battery:null})}if(b&&h.solar!==null){let S=new Set;for(let z of r.floors)for(let O of z.furniture.filter(Q=>Q.type==="inverter")){if(O.plant_card===!1||S.has(O.id))continue;S.add(O.id);let Q=H.filter(Te=>B(Te)===O.id),D=(se&&O.id===ve?Q.find(Te=>Te.id!==se.id):null)??Q[0],q=this.furnitureLinks?.get(O.id)?.power??null,re=D?U(D,O.plant_right??0,O.plant_up??0,A.size*.85):null;if(!re||!q)continue;let ne=z.furniture.filter(Te=>Te.type==="home_battery").sort((Te,ye)=>Math.hypot(Te.x-O.x,Te.z-O.z)-Math.hypot(ye.x-O.x,ye.z-O.z))[0],ge=ne?.soc&&ne.soc!=="none"?Number(i.states[ne.soc]?.state):NaN;W.push(re),F.push({kind:"plant",name:O.name||we(i,O.type),w:Math.max(0,le(i.states[q])??0),dayIds:[q],battery:ne?{soc:Number.isFinite(ge)?ge:null,w:dt.get(ne.id)??null}:null})}}let In=A.device_house===!1?"floor":"all";if(b)for(let S of r.floors){for(let z of S.furniture){if(!z.holo)continue;let O=this.furnitureLinks?.get(z.id)?.power??null,Q=d.find(q=>q.id===z.id);if(!O&&!Q)continue;let D=S.elevation+ue(S,z)+z.h;W.push({p:[z.x,D+.1,z.z],n:[0,1,0],floorId:S.id,size:A.size*.7,roof:!1,views:In,room:Kr(S,z.x,z.z)}),F.push({kind:"device",name:z.name||we(i,z.type),w:Q?.power??(O?le(i.states[O]):null),dayIds:O?[O]:[],battery:null})}for(let z of S.placements){if(!z.holo)continue;let O=ho(i,z.entity_id);if(!O)continue;let Q=S.elevation+(z.y??.4)+.2;W.push({p:[z.x,Q,z.z],n:[0,1,0],floorId:S.id,size:A.size*.7,roof:!1,views:In,room:Kr(S,z.x,z.z)}),F.push({kind:"device",name:z.name||G(i,z.entity_id),w:le(i.states[O]),dayIds:[O],battery:null})}}let Oe=[];if(C("sound")){let S=new Set,z=(r.settings.roof.hologram??Ye).size,O=(D,q,re,ne,ge,Te)=>{let ye=i.states[q];if(!ye||L(q)!=="media")return;if(S.has(q)){let At=Oe.find(Zr=>Zr.id===q);At&&Oe.push({...At,id:`${q}#${Oe.filter(Zr=>Zr.id.startsWith(`${q}#`)).length+2}`,floorId:D.id,x:re,z:ne,members:[q]});return}S.add(q);let De=this.ro?void 0:this.mediaGrace.get(q),on=[ye.attributes.media_title,ye.attributes.app_name,ye.attributes.source].find(At=>typeof At=="string"&&!!At.trim())??"";if(!(!j(ye)&&(ye.state==="playing"||ye.state==="paused"&&!!on&&this.pausedRecently(ye)||ye.state==="on"&&!!ye.attributes.source))){De&&De.until>Date.now()?(Oe.push({...De.source,playing:!1,level:0}),W.push(De.anchor),F.push({...De.card,media:{...De.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,De.until-Date.now()+100))):j(ye)||(this.mediaGrace.delete(q),Oe.push({id:q,floorId:D.id,x:re,z:ne,level:0,playing:!1,members:[]}));return}let qr=ye.state==="playing",Ze=ye.attributes,ka=typeof Ze.volume_level=="number"?Math.min(1,Math.max(0,Ze.volume_level)):.5,Xh=Array.isArray(Ze.group_members)?Ze.group_members.filter(At=>At!==q):[];Oe.push({id:q,floorId:D.id,x:re,z:ne,level:qr?.3+.7*ka:0,playing:qr,members:Xh});let Qh=on||T(i,"holo_media_playing"),xa={p:[re,D.elevation+ge+.12,ne],n:[0,1,0],floorId:D.id,size:z*.7,roof:!1,views:"all",room:Kr(D,re,ne)},Sa={kind:"media",name:Te,w:null,dayIds:[],battery:null,media:{id:q,title:Qh,artist:typeof Ze.media_artist=="string"?Ze.media_artist:typeof Ze.media_album_name=="string"?Ze.media_album_name:"",picture:typeof Ze.entity_picture=="string"?Ze.entity_picture:null,volume:Math.round(ka*100),playing:qr}};W.push(xa),F.push(Sa),this.ro||this.mediaGrace.set(q,{until:Date.now()+45e3,card:Sa,source:Oe[Oe.length-1],anchor:xa})},Q=(D,q)=>{for(let re of D.furniture){if((re.entity!=null&&re.entity!=="none")!==q)continue;let ne=this.furnitureLinks?.get(re.id)?.entity;ne&&O(D,ne,re.x,re.z,ue(D,re)+re.h,re.name||we(i,re.type))}};for(let D of r.floors)Q(D,!0);for(let D of r.floors)for(let q of D.placements)O(D,q.entity_id,q.x,q.z,q.y??1.1,q.name||G(i,q.entity_id));for(let D of r.floors)Q(D,!1)}if(C("auto_pro")){let S=(r.settings.roof.hologram??Ye).size;for(let z of r.floors)for(let O of z.furniture){if(O.type!=="parking"||!O.car)continue;let Q=An(i,O);if(!Q)continue;let D=Jn(i,O);if(D.soc===null&&D.range===null&&D.locked===null&&D.climateOn===null)continue;let q=Nu(O,Q),re=ue(z,O)+(q?.h??1.6);W.push({p:[O.x,z.elevation+re+.25,O.z],n:[0,1,0],floorId:z.id,size:S*.7,roof:!1,views:"all"});let ne=D.entities;F.push({kind:"car",name:O.name||we(i,Q),w:null,dayIds:[],battery:null,car:{spot:O.id,soc:D.soc,range:D.range,rangeUnit:D.rangeUnit,chargingW:D.chargingW,charging:D.charging,locked:D.locked,climateOn:D.climateOn,lock:ne.lock,climate:ne.climate,charge:ne.charging&&/^(switch|input_boolean)\./.test(ne.charging)?ne.charging:null}})}}let jr=this.scene.filter(S=>S.kind==="water").map(S=>({...S,level:this.dimmed?S.level*.4:S.level}));if(n.setPools(jr),Qt()){let S=(r.settings.roof.hologram??Ye).size;for(let z of Yu(this.sceneHost(i,r))){let O=r.floors.find(D=>D.id===z.anchor.floorId);if(!O)continue;let Q=null;if(z.anchor.areaId){let D=O.outdoor.find(ge=>ge.id===z.anchor.areaId);if(!D||D.points.length<3)continue;let[q,re]=Ae(D.points),ne=D.type==="pool"?cn(O,D):tt(O,q,re);Q=[q,O.elevation+Math.max(ne,0)+(D.above?.6:1.1),re]}else if(z.anchor.furnitureId){let D=O.furniture.find(q=>q.id===z.anchor.furnitureId);if(!D)continue;Q=[D.x,O.elevation+ue(O,D)+D.h+.25,D.z]}Q&&(W.push({p:Q,n:[0,1,0],floorId:O.id,size:S*.7,roof:!1,views:"all"}),F.push({kind:"module",name:z.title,w:null,dayIds:[],battery:null,module:z}))}for(let z of this.scene){if(z.kind!=="tag")continue;let O=r.floors.find(Q=>Q.id===z.floorId);O&&(W.push({p:[z.at[0],O.elevation+z.at[1],z.at[2]],n:[0,1,0],floorId:O.id,size:S*.75,roof:!1,views:z.views??"all"}),F.push({kind:"bin",name:z.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:z.color??"#37e0ff",when:z.text,name:z.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(C("household")){let S=(r.settings.roof.hologram??Ye).size;for(let z of Zd(this.binHolos)){let O=r.floors.find(D=>D.id===z.floorId);if(!O)continue;W.push({p:[z.x,O.elevation+z.y+.04,z.z],n:[0,1,0],floorId:z.floorId,size:S*.75,roof:!1,views:"all",room:Kr(O,z.x,z.z)});let Q=z.lines.map(D=>({color:D.color,when:D.when,name:D.name,soon:!!D.soon&&!D.out,out:!!D.out}));F.push({kind:"bin",name:z.lines.map(D=>D.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:Q,soon:Q.some(D=>D.soon),icon:z.lines.length===1?z.lines[0].icon??null:null}})}}n.setSound(Oe);let ct=this._walk?this.walkRoomPts:null,V=W.map(S=>!this._walk||!!ct&&K([S.p[0],S.p[2]],ct)),oe=F.filter((S,z)=>V[z]);n.setAnchors(W.filter((S,z)=>V[z])),JSON.stringify(oe)!==JSON.stringify(this._holos)&&(this._holos=oe),n.setSolarLevels(P&&!this.dimmed?uu(r,P):new Map);let de=!b||!(this.flows??this._flows)||this.dimmed?[]:iu({building:r,consumers:d,summary:h,battery:x??null,fieldPower:P,devicePower:this.devicePowers(i,r)}).map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.power,color:pu(S.kind,h)})),qe=this.poolPipes(r),ut=this.scene.filter(S=>S.kind==="line"),tn=C("fun_winter")&&!this.replay;n.setRoofLights(tn&&vu(i,r)?Zt(r).roof_color?"color":"warm":"off",Zt(r).roof_outline!==!1);let Fn=tn?yu(i,r,Ce(i,this.weatherEntityId??r.settings.weather_entity)):0;n.setRoofSnow(Fn),n.setFirework(tn&&xu(r)),this.watchWinter(tn),n.setFlows(this.dimmed?de:[...de,...qe.flows,...oh(ut)]),n.setPipes(qe.tubes),n.setPatches([...this.scene.filter(S=>S.kind==="patch").map(S=>({floorId:S.floorId,points:S.points,y:S.y,color:S.color,opacity:this.dimmed?S.opacity*.4:S.opacity,...S.glow?{glow:!0}:{}})),...ku(r,Fn)]);let Dn=[],nn=ot("locate")&&lr(r)?[...Dn,...dr(i,r,new Set(Dn.map(S=>S.id)))]:Dn;n.setPersonLook(vs(r)==="pin"?"pin":"figure"),n.setPersons(nn),this.lastPersons=nn.map(S=>({floorId:S.floorId,roomId:S.roomId})),this.personRooms=new Map(nn.flatMap(S=>{let z=r.floors.find(O=>O.id===S.floorId)?.rooms.find(O=>O.id===S.roomId);return z?[[S.id,z.name]]:[]}));let So=Oc(i,r,this.openingLinks,nn);n.setFloorInfo(new Map([...So].map(([S,z])=>[S,Nc(i,z)])));let $o=i.states["sun.sun"]?.attributes,Mo=typeof $o?.elevation=="number"?$o.elevation:null;n.setSun(Mo!==null&&typeof $o?.azimuth=="number"?{elevation:Mo,azimuth:$o.azimuth}:null);let Po=S=>T(i,S).charAt(0).toUpperCase();n.setSunPath(this.sunPathToday(i),[Po("compass_n"),Po("compass_e"),Po("compass_s"),Po("compass_w")],Wn(i)),this.theme==="auto"&&n.setTheme(this.effectiveTheme());let _a=this.weather&&!this.dimmed&&C("weather")?Rd(i,Ce(i,this.weatherEntityId??r.settings.weather_entity),r.settings.rain_entity):null,Hn=_a?Id(_a,r.settings.weather_effects):null;this.cloud=Hn?.cloud??0,this._sky=(Mo===null?0:Math.min(1,Math.max(0,(Mo+4)/16)))*(1-.45*this.cloud);let Yh=Hn?Hn.sky:(r.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&C("weather")?{...Hn??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Yh}:null),this.watchLightning(!!Hn?.lightning),this.applyTint();let ba=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(ba)!==JSON.stringify(this._energy)&&(this._energy=ba);let wa=d.some(S=>S.wallbox)?d.filter(S=>S.wallbox).reduce((S,z)=>S+z.power,0):null,va=r.floors.flatMap(S=>S.furniture.filter(z=>z.type==="inverter")).map(S=>{let z=this.furnitureLinks?.get(S.id)?.power,O=z?le(i.states[z]):null;return O===null?null:{name:S.name||we(i,S.type),w:Math.max(0,O)}}).filter(S=>!!S);JSON.stringify(va)!==JSON.stringify(this._plants)&&(this._plants=va),wa!==this._wallboxW&&(this._wallboxW=wa),this.watchSolarDay([...new Set(F.flatMap(S=>S.dayIds))]);let ya=C("energy_pro");this.watchMeters(ya?r.energy.gas??null:null,ya?r.energy.water??null:null),c&&(this.syncMs=this.syncMs*.8+(performance.now()-c)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=Ir(t,n)).find(s=>s.entity===e);if(r){this.goTo(r);return}let i=Re(t,e);for(let s of n.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!i&&u.area_id===i));if(!l)continue;let[c,d]=Ae(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?Qn(t,e.floors):this.openingLinks,i=n?Ct(t,e.floors):this.furnitureLinks,s=rs(no(t,e,this.weatherEntityId)),a=ea(t,e,{openings:r,furniture:i,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=C("auto_pro")?e.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Uo(t,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker."))):[];return{entities:a,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:C("energy_pro"),auto:C("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let t=this.hass,n=t.states[e.entity],r=fe(t,n),i=L(e.entity)==="light"&&n?.state==="on"&&r.endsWith("%")?`${T(t,"state_on")} \xB7 ${r}`:r,s=n?.last_changed?T(t,"tt_since",{time:Ar(t,Date.parse(n.last_changed))}):"";return w`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${G(t,e.entity)}</span>
      <b>${s?`${i} \xB7 ${s}`:i}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let r of t.floors)for(let i of r.furniture){if(i.type!=="inverter"&&i.type!=="home_battery")continue;let s=this.furnitureLinks?.get(i.id)?.power,a=i.type==="home_battery"&&i.charge&&i.charge!=="none"?le(e.states[i.charge]):null,l=s?le(e.states[s],i.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&n.set(i.id,l)}return n}detectionPins(e,t){let n=[],r=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_pins===!1).map(a=>a.entity_id))??[]),i=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_popup).map(a=>a.entity_id))??[]);for(let s of t){if(i.has(s.id)&&s.model?.startsWith("camera")&&this.popOnDetection(e,s.id),!s.model?.startsWith("camera")||r.has(s.id))continue;let a=this.now(),l=Ke(e,s.id).filter(f=>{let _=e.states[f];return _?_.state==="on"?!0:_.state==="off"&&!!_.last_changed&&a-Date.parse(_.last_changed)<Fg:!1}),c=new Map;for(let f of l){let _=ur(e,f);c.has(_)||c.set(_,f)}c.size>1&&c.delete("motion");let d=(s.rotation??0)*Math.PI/180,u=[-Math.sin(d),Math.cos(d)],p=s.model==="camera_ceiling",h=0;for(let[f,_]of c){let m=e.states[_],b=m?.last_changed?Ar(e,Date.parse(m.last_changed)):"";n.push({id:`detect:${_}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(p?0:u[0]*1.1),z:s.z+(p?0:u[1]*1.1),y:1.4+.4*h++,icon:Hh[f]??Hh.motion,name:G(e,_),text:`${T(e,`detect_${f}`)}${b?` \xB7 ${b}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=wr(t);if(!r)return null;let i=Math.abs(n)<5,s=t.settings.outage_entity;return s&&qo(e.states[s])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Wg,name:T(e,"holo_grid"),text:T(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Hg,name:T(e,"holo_grid"),text:i?ae(e,0):`${T(e,n<0?"energy_grid_export":"energy_grid_import")} ${ae(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let s=await eu(this.hass,n);this.meterKey===r&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}poolPipes(e){let t=[],n=[],r=new Map(this.scene.filter(i=>i.kind==="pipeflow").map(i=>[i.areaId,i.flows]));for(let{floor:i,area:s}of ph(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(r.get(s.id)??{})),d=Lr(e,i,s),u=(p,h)=>Xs(p,h,s,i);t.push(...fh(a.pipes??[],c,d,u));for(let p of l){if(p.kind!=="inlet")continue;let h=d(`port:${p.id}`),f=h&&Qs(s,[h.x,h.z]);if(!h||!f)continue;let _=(a.pipes??[]).find(b=>b.to===`port:${p.id}`),m=_?c.get(_.id):void 0;n.push({floorId:i.id,points:[[h.x+f[0]*.03,h.y,h.z+f[1]*.03],[h.x-f[0]*.09,h.y,h.z-f[1]*.09]],radius:.035,water:m?.active?m.color:null,fittings:[]})}for(let p of a.joints??[]){if(p.kind!=="wall"&&p.kind!=="floor")continue;let h=d(`joint:${p.id}:inside`),f=d(`joint:${p.id}:outside`),_=p.kind==="floor"?.03:h.y;n.push({floorId:i.id,points:[[h.x,_,h.z],[f.x,f.y,f.z]],radius:.05,water:null,fittings:[]})}for(let p of a.pipes??[]){let h=Xs(yo(p,d),p,s,i);if(h.length<2)continue;let f=c.get(p.id),_=[],m=Hr(h);for(let[b,v]of[[p.from,.04],[p.to,m-.04]]){let g=b.startsWith("dev:")||b.startsWith("joint:")?Wr(h,v):null;g&&_.push({kind:"sleeve",p:g.p,dir:g.dir})}for(let b of p.fittings??[]){let v=Wr(h,b.at);v&&_.push({kind:b.kind,p:v.p,dir:v.dir,open:b.open!==!1})}n.push({floorId:p.floor_id,points:h,radius:.025,water:f?.active?f.color??Ys:null,fittings:_})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await du(this.hass,e);this.holoIds===n&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,i,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&r!==this._holoOn&&(this._holoOn=r);let d=this._holos[e],u=(this.building?.settings.roof.hologram??Ye).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(r=!1);let p=!r;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!r)return;if(d?.kind==="bin"){let I=Math.max(.6,i*.8),x=!!d.bin?.icon&&i*.8<.62;a.classList.contains("fp3d-holo-far")!==x&&(a.classList.toggle("fp3d-holo-far",x),this.holoSizes.delete(e)),x&&(I=1);let P=this.holoSizes.get(e),A=performance.now();(!P||A-P.at>2e3)&&(P={w:a.offsetWidth||90,h:a.offsetHeight||40,at:A},this.holoSizes.set(e,P));let H=P.w*I,N=P.h*I,B=n;for(let Z=0;Z<6;Z++){let U=this.holoBoxes.find(W=>t-H/2<W.x1+3&&t+H/2>W.x0-3&&B-N<W.y1+3&&B>W.y0-3);if(!U)break;B=U.y0-4}this.holoBoxes.push({i:e,x0:t-H/2,x1:t+H/2,y0:B-N,y1:B}),a.style.transform=`translate(${t.toFixed(1)}px, ${B.toFixed(1)}px) scale(${I.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=i*.8,f=34*h,_=46*h,m=t+(s?f:-f),b=n-_,v=this.holoSizes.get(e),g=performance.now();(!v||g-v.at>2e3)&&(v={w:a.offsetWidth||184,h:a.offsetHeight||90,at:g},this.holoSizes.set(e,v));let k=v.w*h,$=v.h*h,E=s?m:m-k,M=E+k;for(let I=0;I<6;I++){let x=this.holoBoxes.find(P=>E<P.x1+4&&M>P.x0-4&&b-$<P.y1+4&&b>P.y0-4);if(!x)break;b=x.y0-6}this.holoBoxes.push({i:e,x0:E,x1:M,y0:b-$,y1:b});let R=s||(this.building?.settings.roof.hologram??Ye).mirror!==!1;if(a.style.transform=R?`translate(${m.toFixed(1)}px, ${b.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${E.toFixed(1)}px, ${b.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let I=l.firstElementChild,x=l.lastElementChild;I?.setAttribute("x1",t.toFixed(1)),I?.setAttribute("y1",n.toFixed(1)),I?.setAttribute("x2",m.toFixed(1)),I?.setAttribute("y2",b.toFixed(1)),x?.setAttribute("cx",t.toFixed(1)),x?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy,t=()=>this._holos.map((s,a)=>s.kind==="bin"?this.renderBinCard(s,a):y),n=this._holos.some(s=>s.kind==="module"||s.tag);if(!(n||C("energy_pro")||C("sound")||C("auto_pro")||C("pool")||C("household"))||this.roomId&&!(this.building?.settings.roof.hologram??Ye).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return C("household")||n?t():y;let r=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&r;return this._holos.map((s,a)=>s.kind==="module"?this.renderModuleCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):s.kind==="car"?this.renderCarCard(s,a):s.kind==="media"?this.renderMediaCard(s,a):s.kind==="device"?this.renderDeviceCard(s,a):i?this.renderHoloCard(s,a,e):y)}renderBinCard(e,t){let n=e.bin,r=n.lines.length===1?n.lines[0]:null,i=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return w`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${r?.out?"fp3d-holo-out":""} ${r?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${i} style="--bin:${n.lines[0].color}">
      ${n.icon?w`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${r?w`<div class="fp3d-holo-body"><b>${r.when}</b><span>${r.name}</span></div>`:w`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>w`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,r=f=>T(n,f),i=e.car,s=!this.mediaFolded.has(i.spot),a=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(f,_,m)=>{n.callService(f,_,{entity_id:m})},c=(f,_)=>f.startsWith("climate.")?l("climate",_?"turn_on":"turn_off",f):l("homeassistant",_?"turn_on":"turn_off",f),d=()=>{if(!i.lock)return;let f=i.lock.startsWith("lock.");if(i.locked){if(!confirm(r("car_unlock_confirm")))return;f?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else f?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},u=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",p=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),h=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${J(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${ae(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?w`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(p||h||i.charge)?w`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?w`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${d}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${h?w`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>c(i.climate,!i.climateOn)}>❄</button>`:y}
                ${i.charge?w`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>c(i.charge,!i.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,t){let n=e.module,r=!this.mediaFolded.has(n.id),i=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=h=>h?`color:${h}`:"",a=this._low||this.clientWidth<600,l=Fr(n.rows,a),c=Fr(n.cells,a),d=n.chain?Fr(n.chain.items,a):[],u=n.spark&&n.spark.values.length>1&&!(a&&n.spark.minor)?n.spark:null,p=!!(n.chain||n.cells?.length||n.status);return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?w`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?w`<i>${n.status.icon}</i>`:y}<b>${n.status.text}</b>${n.status.since?w`<span>${n.status.since}</span>`:y}
              </div>`:y}
          ${n.main?w`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?w`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?w`<small>${n.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${r&&d.length?w`<div class="fp3d-holo-chain">
                  ${d.map((h,f)=>w`${f?w`<s>→</s>`:y}<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}
                </div>
                ${n.chain.note?w`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:y}`:y}
          ${r?l.map(h=>w`<div class="fp3d-holo-mrow"><span>${h.label}</span><b style=${s(h.color)}>${h.value}</b>${h.at!==void 0?h.fill?w`<i class="fp3d-holo-mrow-fill"><s style="width:${h.at}%;background:${h.color??"#37e0ff"}"></s></i>`:w`<i><em style="left:${h.at}%;background:${h.color??"#37e0ff"};color:${h.color??"#37e0ff"}"></em></i>`:w`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${r&&c.length?w`<div class="fp3d-holo-cells">${c.map(h=>w`<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}</div>`:y}
          ${r&&n.hint?w`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:y}
          ${r?(n.lines??[]).map(h=>w`<div class="fp3d-holo-mline">${h}</div>`):y}
          ${r&&u?w`${u.label?w`<div class="fp3d-holo-spark-label">${u.label}</div>`:y}${Rg(u.values,u.color??"#ffb347")}`:y}
          ${r&&n.chips?.length?w`<div class="fp3d-holo-chips">
                ${n.chips.map(h=>w`<div class="fp3d-holo-mline">${h.title}</div>
                    <div class="fp3d-holo-chip-row">${h.items.map(f=>w`<button class=${f.on?"fp3d-holo-on":""} title=${f.title??""} @click=${()=>f.onTap()}>${f.label}</button>`)}</div>`)}
              </div>`:y}
          ${r&&!this.ro&&n.buttons?.length?w`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(h=>w`<button class=${h.on?"fp3d-holo-on":""} title=${h.title??""} @click=${()=>h.onTap()}>${h.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,r=g=>T(n,g),i=e.media,s=!this.mediaFolded.has(i.id),a=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(g,k={})=>{Promise.resolve(n.callService("media_player",g,{entity_id:i.id,...k})).catch($=>this.serviceFailed(`media_player.${g}`,$))},c={down:g=>g.currentTarget.dataset.pressed=String(g.pointerId),up:g=>k=>{let $=k.currentTarget;$.dataset.pressed===String(k.pointerId)&&(delete $.dataset.pressed,k.stopPropagation(),$.dataset.acted=String(Date.now()),g())},key:g=>k=>{let $=k.currentTarget;Date.now()-Number($.dataset.acted??0)<700||($.dataset.acted=String(Date.now()),g())}},d=n.states[i.id]?.attributes.supported_features,u=g=>typeof d!="number"||(d&g)!==0,p=this.mediaIntent.get(i.id);p&&(p.playing===i.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(i.id);let h=this.mediaIntent.get(i.id)?.playing??i.playing,f=u(16384)||u(1),_=()=>{this.mediaIntent.set(i.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},m=this.mediaVolume.get(i.id);m&&(Math.abs(m.v-i.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(i.id);let b=this.mediaVolume.get(i.id)?.v??i.volume,v=(g,k)=>{this.mediaVolume.set(i.id,{v:g,at:Date.now()}),this.requestUpdate(),(k||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:g/100}))};return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?w`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:w`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?w`<span>${i.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?w`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!u(1):!f} @pointerdown=${c.down} @pointerup=${c.up(_)} @click=${c.key(_)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(b)}
                  aria-label=${r("volume")}
                  @input=${g=>v(Number(g.target.value),!1)}
                  @change=${g=>v(Number(g.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${b} %</span>
              </div>`:y}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,r=c=>T(n,c),i=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?Ps(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ae(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&s?w`<div class="fp3d-holo-sub">${r("holo_today")} <b>${J(n,s.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${ae(n,s.peak)}</b></div>`:y}
        ${i&&a?Je`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?lu(t,new Date(this.now())):null}renderHoloCard(e,t,n){let r=this.hass,i=m=>T(r,m),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",c=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,d=a&&a.curve.length>1?Ps(a.curve,a.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=l?n.solar??n.consumption??0:e.w??0,_=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ae(r,f)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?w`${l&&this._plants.length>1?w`<div class="fp3d-holo-plants">${this._plants.map(m=>w`<span>${m.name}</span><b>${ae(r,m.w)}</b>`)}</div>`:y}
              ${a?w`<div class="fp3d-holo-sub">${i("holo_today")} <b>${J(r,a.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${ae(r,a.peak)}</b></div>`:y}
              ${d?Je`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              <div class="fp3d-holo-grid">
                ${_?w`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${_.soc!==null?`${Math.round(_.soc)} %`:ae(r,Math.abs(_.w??0))}</b>
                      ${_.w!==null&&Math.abs(_.w)>=5?w`<span>${_.w<0?"\u25B2":"\u25BC"} ${ae(r,Math.abs(_.w))}</span>`:y}
                    </div>`:y}
                ${l&&n.grid!==null?w`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${ae(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${l&&n.consumption!==null?w`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${ae(r,n.consumption)}</b></div>`:y}
                ${l&&this._wallboxW!==null?w`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${ae(r,this._wallboxW)}</b></div>`:y}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?w`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?w`<span>🔥 ${i("holo_gas")} <b>${J(r,this._meters.gas,this._meters.gas<10?2:1)} ${Dh(r,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?w`<span>💧 ${i("holo_water")} <b>${Ig(r,this._meters.water,Dh(r,this.building?.energy.water))}</b></span>`:y}
                    <span>${i("holo_today_short")}</span>
                  </div>`:y}
              ${c!==null?w`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${c} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let t=e.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(t[a]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let r=e.some(s=>!s.quiet);if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let i=this.directorSettings();if(i?.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),i.hold??Br)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&C("camera_cockpit")&&Ah(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new xo,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??Br,s=`${JSON.stringify(e)}|${n.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let c=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:s,bells:(e.doorbell?Rh(t,e.doorbell_entity):[]).map(u=>({id:u,camera:Ih(t,u,c,e.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>Ke(t,u).filter(p=>d==="all"||ur(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,t.states[c.id],(d,u)=>da(d,u,r))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of e.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,t.states[c.entity],(d,u)=>ca(d,u,r))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,t.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(e.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,r)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,r,i)){this.directorShow(()=>this.directorGo(c));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(r=>r.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(t.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,r=this.hass,i=n?.floors.find(d=>d.id===e),s=i?ie(i).find(d=>d.id===t):void 0;if(!n||!r||!i||!s||this.ro)return;let a=new Set(_e(r,s.area_id).filter(d=>L(d)==="light"));for(let d of i.placements)L(d.entity_id)==="light"&&K([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of i.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&jn(d.type)&&K([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>r.states[d]?.state==="on");r.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=mu(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([c,d])=>[c,fu(a,d)]))}let i=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of ie(a)){let c=Be(n,a,l,"temperature"),d=Be(n,a,l,"humidity"),u=Be(n,a,l,"co2"),p=[c!==null?`${J(n,bt(n,c),1)} ${Ne(n)}`:null,d!==null?`${J(n,d,0)} %`:null,u!==null?`${J(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&i.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=ac(l).map(d=>d*a);if(l.roomId)r.set(l.roomId,c);else for(let d of t.floors)if(!l.floorId||d.id===l.floorId)for(let u of d.rooms)r.set(u.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let s=r?[...r].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){let i=[],s=[],a=new Map,l=new Map,c=new Set(n),d=C("household"),u=[];this.binHolos=[];let p=new Map(this.scene.filter(v=>v.kind==="glow").map(v=>[v.furnitureId,v]));for(let v of t.floors)for(let g of v.furniture){let k=this.furnitureLinks.get(g.id),$=this.stateFaces(e,g);if($.length&&a.set(g.id,{color:$[0].color,level:$[0].level,faces:$}),Yt(g.type)){if(C("frames")){let V=this.frameScreen(e,g);V&&a.set(g.id,V),l.set(g.id,`frame:${g.id}`)}continue}if(jn(g.type)){let V=this.lampMarker(e,v,g,k?.entity??null);i.push(V);let oe=g.type==="lamp_fan"&&g.fan&&g.fan!=="none"?g.fan:null;if(oe&&!n.has(oe)){n.add(oe);let de=e.states[oe],qe=g.rotation*Math.PI/180,ut=Math.min(.45,g.w*.3);i.push({id:oe,floorId:v.id,roomId:V.roomId,x:g.x+Math.cos(qe)*ut,z:g.z+Math.sin(qe)*ut,y:V.y,icon:g.icon?Xe(g.icon):jt("fan"),name:G(e,oe),text:de&&Wi(de)>0&&typeof de.attributes.percentage=="number"?`${Math.round(de.attributes.percentage)} %`:de?fe(e,de):"",active:de?Le(de):!1,unavailable:de?j(de):!1,glow:null,furnitureId:g.id,show:g.marker??"always",fromFurniture:!0})}continue}if(jl.has(g.type)){let V=this.techItem(e,v,g,a,n);V&&(i.push(V),l.set(g.id,V.id));continue}if(Ul.has(g.type)){let V=this.gangItem(e,v,g,s,a,r);V&&(i.push(V),l.set(g.id,V.id));continue}let E=p.get(g.id);E&&a.set(g.id,{color:E.color,level:E.level});let M=(g.type==="plant"||Zi(g.type))&&!!g.moisture&&g.moisture!=="none";if(g.type==="waste_bin"||g.type==="mailbox"||M){let V=d?this.householdState(e,v,g):null;V?.screen&&a.set(g.id,V.screen),V?.marker&&i.push(V.marker);let oe=g.type==="waste_bin"?g.bin_source:g.type==="mailbox"?g.entity:g.moisture;if(d&&typeof oe=="string"&&oe!=="none"&&l.set(g.id,`hh:${oe}#${g.id}`),V?.item&&u.push(V.item),!M)continue}if(d){let V=oc(g,e);V.length&&!a.has(g.id)&&a.set(g.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let oe of V){let de=g.name||we(e,g.type);u.push({icon:"wrench-outline",text:oe===g.service?T(e,"hh_service",{name:de}):T(e,"hh_service2",{name:de,what:G(e,oe)}),entity:oe})}(g.type==="fridge"||g.type==="fridge_smart")&&Xo(g,e)&&(a.set(g.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:T(e,"hh_fridge_open",{name:g.name||we(e,g.type)}),entity:vt(g)[0]??null}))}let I=g.type==="parking"&&C("auto_pro")&&!!g.car?Jn(e,g):null,x=ec(g.type),P=!!x,A=g.type==="home_battery"?g.soc:g.type==="wallbox"?g.status:g.type==="parking"&&I?g.car?.device??I.entities.soc:d&&P?g.remaining??null:null,H=A&&A!=="none"?A:null,N=g.extra&&g.extra!=="none"&&e.states[g.extra]?g.extra:null,B=N?fe(e,e.states[N]):"",Z=V=>B?V?`${V} \xB7 ${B}`:B:V,U=k??(H||N?{entity:null,power:null}:void 0);if(!U)continue;let W=g.type==="home_battery"?H??U.entity??U.power:U.entity??U.power??H??N;l.set(g.id,W);let F=U.entity?e.states[U.entity]:void 0,te=g.type==="meter"?t.energy.grid_invert&&!g.export:g.type==="home_battery"?t.energy.battery_invert&&!g.charge:!1,X=U.power?le(e.states[U.power],te):null,se=g.type==="home_battery"&&g.charge&&g.charge!=="none"?g.charge:g.type==="meter"&&g.export&&g.export!=="none"?g.export:null,ve=se?le(e.states[se]):null;ve!==null&&(X=Math.max(0,X??0)-Math.max(0,ve)),U.power&&X!==null&&!r.has(U.power)&&(r.add(U.power),s.push({id:W,powerEntity:U.power,floorId:v.id,x:g.x,z:g.z,power:Math.max(0,X),wallbox:g.type==="wallbox"||void 0}));let Pe=typeof g.run_w=="number"&&g.run_w>0?g.run_w:10,ze=typeof g.run_w=="number"&&g.run_w>0&&X!==null&&X<=g.run_w,je=(X??0)>Pe||F?.state==="on"||F?.state==="running"||zi(F)&&Le(F);P&&this.appliances.set(g.id,{floorId:v.id,x:g.x,z:g.z,entity:U.entity??U.power??g.id,running:je});let dt=null;if(d&&P){let V=g.remaining&&g.remaining!=="none"?e.states[g.remaining]:void 0,oe=ts(V),de=je||!U.power&&!U.entity&&(oe??0)>0,qe=vt(g),ut=Dn=>qe.some(nn=>{let So=e.states[nn];return!!So?.last_changed&&Date.parse(So.last_changed)>Dn}),tn=this.finished.update(g.id,de,ut),Fn=g.name||(U.entity?G(e,U.entity):we(e,g.type));de?(je||a.set(g.id,Oh(x)),oe!==null&&!os(F,U.power?X:null,Pe)&&(dt=T(e,"hh_left",{t:nc(oe)}),u.push({icon:"timer-outline",text:`${Fn}: ${dt}`,entity:g.remaining??U.entity}))):(ns(F)||ns(V)||tn)&&(dt=T(e,"hh_done"),a.set(g.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:T(e,"hh_finished",{name:Fn}),entity:U.entity??U.power}))}if(I&&An(e,g)){let V=[];if(I.soc!==null){let oe=I.soc>=50?[.3,1,.5]:I.soc>=20?[1,.8,.25]:[1,.3,.25];V.push({part:"band",color:oe,level:I.charging?1:.6})}if(I.locked===!1&&V.push({part:"lights",color:[1,.42,.02],level:1}),I.climateOn){let oe=I.entities.climate?e.states[I.entities.climate]:void 0,de=!!oe&&(oe.attributes.hvac_action==="cooling"||oe.state==="cool");V.push({part:"cabin",color:de?[.45,.8,1]:[1,.55,.22],level:.35})}V.length&&a.set(`${g.id}:vehicle`,{color:V[0].color,level:V[0].level,faces:V})}if(g.type==="radiator"&&(F&&L(F.entity_id)==="climate"||g.heat_sensor)){let V=F&&L(F.entity_id)==="climate"?F.attributes:null;if(md(e,g.heat_sensor)??V?.hvac_action==="heating"){let de=V&&typeof V.temperature=="number"&&typeof V.current_temperature=="number"?V.temperature-V.current_temperature:1;a.set(g.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,de))})}else p.has(g.id)&&a.delete(g.id)}else if(g.type==="ac_unit"&&F&&L(F.entity_id)==="climate"){let V=_d(F);V&&a.set(g.id,V)}else if(x&&je)a.set(g.id,Oh(x));else if(g.type==="stove"||gi(g.type)){let V=gd(F,je);V>0&&a.set(g.id,{color:[1,.05,.01],level:V,faces:[{part:"burners",color:[1,.05,.01],level:V}]})}let zt=he(g.type),In=!!zt&&!zt.light&&zt.parts.some(V=>V.glow);if(F&&In&&C("sound")&&L(F.entity_id)==="media"&&F.state==="playing"&&!Go(g.type)){let V=typeof F.attributes.volume_level=="number"?F.attributes.volume_level:.5;a.set(g.id,{color:Li(F)??[.22,.88,1],level:.5+.5*V,ring:!0,plain:!0})}if(F&&Go(g.type)&&!gi(g.type)&&!(Fo(g.type)&&L(F.entity_id)==="cover")){let V=C("screens"),oe=L(F.entity_id)==="light"?Lt(F):null,de=L(F.entity_id)==="media"&&["playing","on","paused","idle"].includes(F.state),qe=V&&L(F.entity_id)==="media"?Li(F):oe?oe.color:Le(F)||de?[.22,.88,1]:null,ut=V&&L(F.entity_id)==="media"?F.attributes.entity_picture??null:null;qe&&a.set(g.id,{color:qe,level:F.state==="playing"?1:.6,picture:ut,ring:In&&C("sound")&&F.state==="playing"})}if(c.has(W))continue;n.add(W);let Oe=U.entity?L(U.entity):null,jr=v.rooms.find(V=>V.points.length>=3&&K([g.x,g.z],V.points)),ct=F&&Pl(g.type)&&F.entity_id.startsWith("water_heater.")?Vg(e,F):null;i.push({id:W,floorId:v.id,roomId:jr?.id??null,x:g.x,z:g.z,y:Gg(g)+ue(v,g),icon:g.icon?Xe(g.icon):ct?Xe("water-boiler"):jt(Oe??"switch"),name:g.name||(U.entity?G(e,U.entity):we(e,g.type)),ownName:g.name||void 0,showName:!!g.show_name,text:Z(dt??(I?this.carText(e,I,!!F&&!zr.has(F.state.toLowerCase())):g.type==="home_battery"?this.batteryText(e,H,X):g.type==="wallbox"?this.wallboxText(e,H,X):g.type==="meter"?this.meterText(e,X):ct?ct.text:F?fe(e,F):ze?T(e,"pin_standby"):X!==null?ae(e,Math.max(0,X)):"")),active:dt?!0:I?I.charging:ct?ct.on:F?Le(F):(X??0)>(typeof g.run_w=="number"&&g.run_w>0?g.run_w:5),unavailable:F?j(F):!1,glow:null,furnitureId:g.id,energyDevice:g.type==="inverter"||g.type==="home_battery"||g.type==="wallbox"||g.type==="meter"||!!I||!!N,...ze?{standby:ze}:{},show:g.marker??(I||dt?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h?.bin_next_only||typeof h?.bin_days=="number"){let v=Yd(this.binHolos.filter(g=>!g.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(g=>g.icon||v.has(g.id))}let f=t.settings.household?.notes,_=f&&f!=="none"?e.states[f]:void 0;if(d&&_&&!j(_)&&_.state.trim()){let v=_.state.split(/\s*(?:\||\n|;)\s*/).map(g=>g.trim()).filter(Boolean).slice(0,8);u.unshift(...v.map(g=>({icon:"pin-outline",text:g,entity:f})))}this._household=u.filter((v,g)=>u.findIndex(k=>k.text===v.text)===g),this.cameraScreens=0;let m=Fi(e,t.floors),b=C("screens");for(let v of t.floors)for(let g of v.furniture){if(!b||!g.pictures?.length||!Go(g.type)||g.type==="fridge_smart"&&m.get(g.id)?.right)continue;let k=g.pictures.find(M=>xd(e,M));if(!k)continue;let $=this.pictureUrl(k.image),E=g.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];$&&a.set(g.id,{color:E,level:1,picture:$,plain:!0})}for(let v of p.values())v.top?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"strata",color:v.color,top:v.top,level:v.level}]}):v.plate?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"plate",color:v.color,level:v.level}]}):v.band&&a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"band",color:v.color,level:v.level}]});return this.frameWatch(e,t),this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=C("household")&&n.length>0&&!this.replay,i=r?Gd(t.floors):[],s=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{i.length&&(this.pickups=await Xi(this.hass??e,i)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),i.length&&Xi(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(e,t,n,r,i,s){let a=qn(n),l=n.type==="wall_socket",c=[],d=0,u=0,p=null,h=!1;if(a.forEach((k,$)=>{let E=k.entity&&k.entity!=="none"?k.entity:null,M=k.power&&k.power!=="none"?k.power:null;if(!E&&!M)return;u++;let R=E?e.states[E]:void 0,I=M?le(e.states[M]):null;if(M&&I!==null&&(p=(p??0)+Math.max(0,I),s.has(M)||(s.add(M),r.push({id:E??M,powerEntity:M,floorId:t.id,x:n.x,z:n.z,power:Math.max(0,I)}))),R&&!j(R)&&(h=!0),!(R?Le(R):(I??0)>5))return;d++;let P=R&&L(R.entity_id)==="light"?Lt(R):null;if(!l){c.push({part:"gang",index:$,of:a.length,color:P?P.color:[.22,.88,1],level:.5,accent:!P});return}let A=P?P.color:[.35,1,.55];c.push({part:"gang",index:$,of:a.length,color:A,level:I!==null?Math.min(1,.55+I/1500):.8})}),c.length&&i.set(n.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let f=Co(n),_=f[0]??null,m=_?e.states[_]:void 0,b=t.rooms.find(k=>k.points.length>=3&&K([n.x,n.z],k.points)),v=p,g=uc(this.floorWalls(t),n,t.height,ue(t,n));return{id:`gangs:${n.id}`,floorId:t.id,roomId:b?.id??null,x:g.x,z:g.z,y:n.h+.2+g.y,icon:Xe(n.icon||(l?"power-socket-de":"light-switch")),name:n.name||(f.length===1&&_?G(e,_):we(e,n.type)),ownName:n.name||void 0,showName:!!n.show_name,text:u>1?`${d}/${u}${v!==null?` \xB7 ${ae(e,v)}`:""}`:v!==null?ae(e,v):m?fe(e,m):"",active:d>0,unavailable:!!_&&!h,glow:null,power:v??void 0,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0}}techItem(e,t,n,r,i){let s=E=>typeof E=="string"&&E!=="none"?E:null,a=s(n.entity),l=a?e.states[a]:void 0,c=t.rooms.find(E=>E.points.length>=3&&K([n.x,n.z],E.points)),d={floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,ownName:n.name||void 0,showName:!!n.show_name,glow:null,furnitureId:n.id,fromFurniture:!0};if(n.type==="wifi_ap"){let E=s(n.clients),M=E?e.states[E]:void 0,R=M&&Number.isFinite(Number(M.state))?Math.round(Number(M.state)):null,I=a?Hi(l):M?Hi(M):null;if(I!==null){let P=I?[.25,.6,1]:[1,.25,.2];r.set(n.id,{color:P,level:.85,faces:[{part:"apring",color:P,level:.85}]})}let x=a??E;return!x||i.has(x)?null:(i.add(x),{...d,id:x,y:ue(t,n)-(n.variant==="wall"?-n.h-.2:.3),icon:Xe(n.icon||"access-point"),name:n.name||G(e,x),text:I===!1?T(e,"ap_offline"):R!==null?T(e,"ap_clients",{n:R}):l?fe(e,l):"",active:I===!0,unavailable:I===!1,show:n.marker??(I===!1?"always":void 0),energyDevice:R!==null})}let u=l?L(l.entity_id):null,p=s(n.power),h=p?le(e.states[p]):null,f=typeof n.run_w=="number"&&n.run_w>0?n.run_w:30,_=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(h??0)>f;(_||l&&!["off","unavailable","unknown"].includes(l.state))&&r.set(n.id,{color:[1,.45,.15],level:_?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:_?.9:.3}]});let b=s(n.water_temp),v=b?e.states[b]:void 0,g=v&&Number.isFinite(Number(v.state))?Number(v.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,k=v?.attributes.unit_of_measurement??"\xB0C",$=a??b??p;return!$||i.has($)?null:(i.add($),{...d,id:$,y:ue(t,n)+n.h+.25,icon:Xe(n.icon||"water-boiler"),name:n.name||(a?G(e,a):we(e,n.type)),text:g!==null?`${J(e,Math.round(g))} ${k}${_?" \xB7 \u{1F525}":""}`:l?fe(e,l):"",active:_,unavailable:l?j(l):!1,power:h??void 0,show:n.marker??void 0,energyDevice:g!==null})}floorWalls(e){let t=this.wallCache.get(e);if(!t){let n=this.building?.settings;t=xt(e.rooms,{exterior:n?.wall_exterior??.24,interior:n?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,t)}return t}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,t=this.hass,n=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!t||!n)return y;let r=n.type==="wall_socket";return w`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${n.name||we(t,n.type)}</span>
        ${qn(n).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?t.states[l]:void 0,d=s.power&&s.power!=="none"?le(t.states[s.power]):null,u=`${r?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?G(t,l):"\u2013"}`;return w`<button class="fp3d-chip ${c&&Le(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?j(c):!0)}
            @click=${()=>{l&&(this.confirmSet.has(l)&&!confirm(T(t,"confirm_switch",{name:G(t,l)}))||hr(t,l))}}>${u}${c?w` <small>${fe(t,c)}${d!==null?` \xB7 ${ae(t,Math.max(0,d))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,t,n){let r=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(n.type==="waste_bin"){let l=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!l)return null;let c=Qi(n,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!c)return null;let d=c.days===0?T(e,"bin_today"):c.days===1?T(e,"bin_tomorrow"):T(e,"bin_in_days",{n:c.days}),u=r(Kd(n)[1]),p=Math.max(...u),f=p-Math.min(...u)<.12?[.92,.95,1]:u.map(g=>Math.min(1,g/Math.max(.001,p)*1.05)),_=n.name||T(e,`bin_kind_${n.bin_kind??"rest"}`),m=Ji(n,e),b=`#${f.map(g=>Math.round(g*255).toString(16).padStart(2,"0")).join("")}`,v=m?T(e,"bin_out_done"):d;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ue(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:_,color:b,when:v,soon:c.days<=1&&!m,days:c.days,out:m}),{item:c.days<=1?{icon:m?"check-circle-outline":"trash-can-outline",text:`${_}: ${v}`,entity:l,hot:c.glow&&!m}:void 0}}if(n.type!=="mailbox"){let l=es(n,e),c=[1,.55,.12],d=n.name||we(e,n.type);return l?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ue(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:d,color:"#ff8c1f",when:T(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:T(e,"hh_plant",{name:d}),entity:n.moisture??null,hot:!0}}):null}let i=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!i)return null;let s=Qd(n,e),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ue(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||we(e,n.type),color:"#ffb547",when:T(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${T(e,"mailbox_post")}`:T(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,t){let n=this.replay;if(!n)return[];let r=[];for(let i of t.floors){let s=i.rooms.filter(a=>a.points.length>=3);for(let a of i.furniture){if(!dn(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=n.robotRooms(l,eo(e,l,a.room_sensor)),d=[];for(let u of c){let p=Ci(e,s,u),h=p?Ae(p.points):null,f=d[d.length-1];h&&(!f||f[0]!==h[0]||f[1]!==h[1])&&d.push([h[0],h[1]])}d.length&&r.push({floorId:i.id,points:d})}}return r}trailNow(e,t){let n=this.now(),r=wo(e,t),i=this.replay?this.replay.rows(r.map(a=>a.entity),n-bo,n):this.trailRows,s=r.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Ku(r,Vu(i,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!C("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!C("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=wo(t,n).map(i=>i.entity);if(r.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-bo).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(Fd()){let r=new Set(t.floors.flatMap(i=>i.placements.map(s=>s.entity_id)).filter(i=>L(i)==="camera"));for(let i of r){let s=e.states[i],a=s?.attributes.entity_picture;!a||j(s)||n.push({id:i,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||j(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),ol(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||ue(e,r)>.12)return!1;let i=he(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:K([r.x,r.z],t)||Wt(r).some(s=>K(s,t))}).map(r=>Wt(r))}robotInfos(e,t){let n=[];for(let r of t.floors)for(let i of r.furniture){if(!dn(i.type))continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Ai(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,d=gt(i.type),u=i.d*(d?Ml(he(i.type)):.14),p=[i.x-Math.sin(c)*u,i.z+Math.cos(c)*u],h=r.rooms.filter(b=>b.points.length>=3),_=(l==="cleaning"?Pd(e,h,s,eo(e,s,i.room_sensor)):null)??h.find(b=>K(p,b.points)),m=l==="cleaning"&&_?this.robotObstacles(r,_.points):[];n.push({id:i.id,floorId:r.id,rest:p,restHeading:-c,mode:l,room:_?.points??null,roomId:_?.id??null,obstacles:m,...d?{model:{type:i.type,w:i.w,d:i.d,h:i.h}}:{}})}return n}batteryText(e,t,n){let r=t?Number(e.states[t]?.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${J(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${ae(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ae(e,0):`${T(e,t<0?"energy_grid_export":"energy_grid_import")} ${ae(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,i=String(r?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(i),a=r?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?T(e,"wallbox_charging"):a?T(e,"wallbox_plugged"):r&&!j(r)&&!r.entity_id.startsWith("binary_sensor.")?fe(e,r):"",c=n!==null&&n>50?ae(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,s]of r){if(!i||i==="none")continue;let a=e.states[i];if(!a||j(a)||!(Le(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=L(i)==="light"?Lt(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(e,t,n){let r=s=>T(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${s}`}let i=[];return t.soc!==null&&i.push(`${J(e,t.soc,0)} %`),t.range!==null&&i.push(`${J(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${ae(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,t,n){let i=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&K([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!as(s).some(l=>mc(l,e.elevation+i)&&ls(l,e.elevation)))return i;let a=gc(s,t,n,e.elevation);return a===null?i:Math.max(.5,Math.min(i,a-e.elevation))}lampMarker(e,t,n,r){let i=r?e.states[r]:void 0,s=he(n.type),a=Xl[n.type]??s?.light??"floor",l=t.rooms.some(v=>v.points.length>=3&&K([n.x,n.z],v.points)),c=a==="strip"&&!l?tt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?ue(t,n):a==="table"?Wo(t,n.x,n.z,n.h):a==="bollard"||a==="garden"?tt(t,n.x,n.z):0,d=t.rooms.find(v=>v.points.length>=3&&K([n.x,n.z],v.points)),u=this.ceilingAt(t,n.x,n.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&n.mount_y==null,h=p?t.height-u:0,f=s&&p?Math.max(0,c-h):c,_=Do.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+Ho(n.type,n.h)):Math.abs(h)>.01?u:void 0,m=_??t.height,b=s?s.mount==="ceiling"?Math.max(.5,f-.15):f+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),fan:Math.max(.6,m-n.h-.25),floor:f+n.h+.25,uplight:f+n.h+.25,table:f+n.h+.2,wall:f+n.h+.2,strip:n.upright?f+n.w+.15:Math.max(.3,f-.2),bollard:f+n.h+.25,garden:f+n.h+.25}[a];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:d?.id??null,x:n.x,z:n.z,y:b,icon:n.icon?Xe(n.icon):jt("light"),name:n.name||(r?G(e,r):we(e,n.type)),text:i?fe(e,i):"",active:i?Le(i):!1,unavailable:i?j(i):!1,glow:i?ys(wd(bd(Lt(i,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,fanSpeed:a==="fan"?Wi(n.fan&&n.fan!=="none"?e.states[n.fan]:void 0):void 0,size:[n.w,n.d,n.h],base:f,top:_,pickable:!!r,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?f:f+n.h*.85:void 0,effect:!!i&&i.state==="on"&&!n.glow_color&&vd(i)&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(i.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=this.building?.floors.find(r=>r.id===e.floorId),n=t?ie(t).find(r=>r.id===this.roomId):void 0;return!!n&&K([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="active")return e.active;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=L(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||Ri(n.cover)){e.set(t,`opening:${t}`);continue}let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(r=>r.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return w`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${T(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${T(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${T(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${T(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>w`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?y:w`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(e.startsWith("gangs:")){let i=this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(6)),s=i?Co(i):[];s.length===1?this.onDeviceHold(s[0],t,n):this.onDeviceTap(e,t,n);return}if(this.ro){this.onDeviceTap(e,t,n);return}if(C("auto_pro")&&this.hass&&this.building)for(let i of this.building.floors)for(let s of i.furniture){if(s.type!=="parking"||!s.car)continue;let a=Jn(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:a};return}}let r=L(e);r==="light"||r==="cover"||r==="switch"||r==="fan"||r==="lock"||r==="camera"?this._menu={entity:e,x:t,y:n}:Me(this,e)}onDeviceSwipe(e,t,n,r,i){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||j(s)||this.confirmSet.has(e))return!1;let l=L(e);if(l==="light"&&Ks(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:i},!0}if(l==="cover"&&Gs(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,t=this.hass,n=e&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId);if(!e||!t||!n)return y;let r=jd(n,t,this.pickups),i=new Date;i.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-i.getTime())/864e5);return u===0?T(t,"bin_today"):u===1?T(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||T(t,`bin_kind_${n.bin_kind??"rest"}`),l=Ji(n,t),c=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&hr(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return w`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${r.length?r.map(d=>w`<b>${s(d.day)}${d.summary&&d.summary!==a?w` <small>· ${d.summary}</small>`:y}</b>`):w`<b>${T(t,"bin_none")}</b>`}
      ${qd(n)&&!this.ro?w`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?T(t,"bin_out_done"):T(t,"bin_out_mark")}</button>`:l?w`<small>${T(t,"bin_out_done")}</small>`:y}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!C("household")||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,Og("neonplan3d.hhFolded",this._hhFolded)};return w`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${T(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(t=>w`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):Me(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),r=this.hass.config?.time_zone,i=s=>{try{return t.toLocaleString(n,r?{...s,timeZone:r}:s)}catch{return t.toLocaleString(n,s)}};return w`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit",...Wn(this.hass)})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let t=this._alerts.slice(0,3);return w`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>w`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Nt(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Nt(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?w`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let t=e.floors.flatMap(i=>ie(i)).find(i=>i.id===this.roomId),n=t?_e(this.hass,t.area_id).filter(i=>L(i)==="scene"||L(i)==="script").slice(0,6):[];if(!n.length)return y;let r=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return w`<div class="fp3d-scenes">
      ${n.map(i=>w`<button class="fp3d-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${G(this.hass,i,r)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,n=e?.settings.pets?.on!==!1&&this.petsOn!==!1,r=n?e?.settings.pets?.list??[]:[],i=n&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||!C("fun_pets")||!r.length&&!i){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([js(),vo()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,c)=>ue(l,c),closedDoors:()=>{let l=new Set,c=this.hass?.states??{};for(let d of this.building?.floors??[])for(let u of d.openings)u.type==="door"&&u.contact&&c[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("NeonPlan 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&C("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,r]=await Promise.all([js(),vo()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:r.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("NeonPlan 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}walkHere(){this.startWalk()}async startWalk(){Ht("walk");let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=this.roomId,r=e.floors.filter(p=>p.rooms.some(h=>h.points.length>=3)),s=(n?r.find(p=>p.rooms.some(h=>h.id===n)):void 0)??r.find(p=>p.id===this.floorId)??[...r].sort((p,h)=>Math.abs(p.elevation)-Math.abs(h.elevation))[0];if(!s)return;let a=await vo();this._walk={room:null,hint:!0},this.walkChanged(!0),await this.updateComplete;let l=this.renderRoot.querySelector(".fp3d-walk-surface");if(!l)return;t.setFloor(s.id,!1),t.setWallMode("auto");let c=new a.FloorMap(e,s),d=n?s.rooms.find(p=>p.id===n):void 0,u;if(d){let p=c.freeNear(Ae(d.points));u={x:p[0],z:p[1],yaw:c.openYaw(p),pitch:-.05}}this.walker=new a.WalkCamera(t,c,l,{start:u,onRoom:p=>{this.walkRoomPts=p?.points??null,this._walk&&(this._walk={...this._walk,room:p?.name??null}),this.syncDevices(!0)}}),this.walkKeys=p=>{p.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}walkChanged(e){this.dispatchEvent(new CustomEvent("walk-change",{detail:{walking:e},bubbles:!0,composed:!0}))}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null,this.walkChanged(!1);let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return y;let e=i=>T(this.hass,i);if(!this._walk&&this.panelOpen)return y;if(!this._walk)return w`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(i,s)=>{if(!n)return;let a=44,l=i.clientX-n.cx,c=i.clientY-n.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return w`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?w`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let s=i.currentTarget,a=s.getBoundingClientRect();n={id:i.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(i.pointerId),r(i,s)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{n=null,i.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${i=>{n=null,i.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return w`<button class="fp3d-find-btn" title=${T(this.hass,"find")} aria-label=${T(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Uu(this.findIndex??=Ir(this.hass,e),this._find);return w`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${T(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${T(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?w`<div class="fp3d-find-list">
            ${t.length?t.map(n=>w`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?xn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?w`<small>${n.where}</small>`:y}</span>
                  </button>`):w`<p>${T(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return y;let n=(m,b)=>T(t,m,b),r=w`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(m=>Oi(t,m).lights),l=s.flatMap(m=>Oi(t,m).covers),c=a.filter(m=>t.states[m]?.state==="on").length,d=!i,u=(m,b,v,g)=>{if(g.length){if(d&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}if(this._armed=null,b==="cover"&&(v==="open_cover"||v==="close_cover")){for(let k of Bo(t,g,v==="open_cover"?"open":"close"))t.callService("cover",k.service,k.data);return}t.callService(b,v,{entity_id:g})}},p=(m,b,v,g,k)=>w`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!k.length} @click=${()=>u(m,v,g,k)}>
        ${this._armed===m?n("central_sure"):n(b)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),f=this.buttons??e.settings.buttons??[],_=Qt()?Ns(this.sceneHost(t,e)):[];return w`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${i?i.name:n("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>
        </div>
        ${_.length?w`<div class="fp3d-central-favs">
              ${_.map(m=>w`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:m.id,floorId:null,roomId:null}}}><span aria-hidden="true">${m.icon}</span> ${m.title}</button>`)}
            </div>`:y}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?w` <small>${c}/${a.length}</small>`:y}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(m=>t.states[m]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(m=>t.states[m]?.state==="on"))}
        </div>
        ${l.length?w`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:y}
        <b>${n("central_favorites")}</b>
        ${h.length?w`<div class="fp3d-central-favs">
              ${h.map(m=>{let[b,v]=mn(m),g=t.states[m],k=b==="homeassistant"&&g?.state==="on";return w`<button
                  class="fp3d-chip"
                  aria-pressed=${k||this._sceneFired===m}
                  ?disabled=${j(g)}
                  @click=${()=>{t.callService(b,v,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${G(t,m)}
                </button>`})}
            </div>`:f.length?y:w`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${f.length?w`<div class="fp3d-central-favs">
              ${f.map(m=>w`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Lg(t,m)}
                  @click=${b=>{Ed(t,b.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?w`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:y}${m.label}
                </button>`)}
            </div>`:y}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||L(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&j(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(i=>typeof i=="string"&&!!i.trim());return!j(n)&&(n.state==="playing"||n.state==="paused"&&r&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+Dg-Date.now();if(n<=0)return!1;let r=Date.now()+n+500;return(!this.pausedTimer||r<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=r,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=T(this.hass,this.clean?"controls_show":"controls_hide");return w`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Je`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Je`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let t=this._voice,n=t?.phase==="wait"||t?.phase==="listen",r=T(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return w`<button class="fp3d-mic ${t?.phase==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${Je`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?w`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${t.text}</div>`:y}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;if(e.show_rooms){(!e.admins_only||t.user?.is_admin)&&this.showRooms(n,e.show_rooms);return}let i=null;try{let s=await at();i=await this.handleSentence(t,n,s,e.text,e.speak),i===null&&this.sayVoice("error",T(t,"voice_none"))}catch(s){this.sayVoice("error",T(t,"voice_error",{msg:String(s?.message??s)}))}try{await nl(t,e.ask_id,i??"",i!==null)}catch{}}async onAnnounce(e){let t=this.hass;if(!t)return;let n=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(r=>r.trim().toLowerCase()===n))&&!Lh.has(e.id)){Lh.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await Bg(),await(await at()).speak(t,e.message,lt())}catch{}}}onReload(e){e.plan&&e.plan!==(this.planId??ce)||e.templates.length&&!(this.template&&e.templates.includes(this.template))||Ch.has(e.id)||(Ch.add(e.id),!(Date.now()-(window.fp3dReloadSent??0)<15e3)&&(this._announce=T(this.hass,"screen_reloading"),setTimeout(()=>location.reload(),500+Math.random()*4e3)))}openRoom(e){if(!this.roomId)return null;for(let t of e.floors){let n=ie(t).find(r=>r.id===this.roomId);if(n)return{floor:t,room:n}}return null}async roomAction(e,t,n){let r=()=>Uc(t.floors,this.voiceArea??ra()),i=d=>{let u=t.floors.find(h=>h.id===d.floorId),p=u&&ie(u).find(h=>h.id===d.roomId);return u&&p?{floor:u,room:p}:null},s=n.room==="there"?this.openRoom(t):n.room==="here"?r():n.room?i(n.room):r()??this.openRoom(t);if(!s)return T(e,n.room==="there"?"voice_noroom_open":"voice_noroom");let a=s.room.name,l=async d=>{await Promise.all(d.map(u=>e.callService(u.domain,u.service,u.data)))};if(n.action==="clean"){let d=mr(e,s.room);return d?(await l([d]),T(e,"voice_clean_started",{room:a})):T(e,"voice_clean_none",{room:a})}let c=pr(e,s.floor,s.room);return c.length?(await l(c),T(e,"voice_off_done",{room:a,n:fr(c)})):T(e,"voice_off_nothing",{room:a})}async onMic(){let e=this.hass,t=this.building;if(!e||!t||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let n=(i,s)=>this.sayVoice(i,s);n("wait","\u2026"),this.tourToken++;let r;try{let i=window.AudioContext??window.webkitAudioContext;r=new i,r.resume().catch(()=>{})}catch{r=void 0}try{let i=await at(),s=await i.listenOnce(e,()=>n("listen",T(e,"voice_listen")),lt(),r);if(!s){n("error",T(e,"voice_none"));return}if(await this.handleSentence(e,t,i,s,!0)!==null)return;n("wait",`\u201C${s}\u201D \u2026`);let a=this.voiceArea??ra(),l=s,c=this.openRoom(t);c?.room.area_id&&i.saysThere(s,e.language)&&(a=c.room.area_id,l=i.withoutThere(s,e.language));let d=await i.converse(e,l,a);n("done",d?`\u201C${s}\u201D \u2013 ${d}`:`\u201C${s}\u201D`)}catch(i){let s=i,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",a?T(e,a):T(e,"voice_error",{msg:String(s?.message??s?.name??i)}))}}async handleSentence(e,t,n,r,i){let s=(d,u)=>this.sayVoice(d,u),{devices:a,items:l}=this.spokenDevices(e,t,n.SYNONYMS),c=this.replay?null:n.roomIntent(r,t,e.language,d=>d.area_id?e.areas?.[d.area_id]?.name:null);if(c){let d=await this.roomAction(e,t,c);return s("done",`\u201C${r}\u201D \u2013 ${d}`),i&&n.speak(e,d,lt()),d}{let d=n.showTarget(r,t,a,f=>f.area_id?e.areas?.[f.area_id]?.name:null);if(d){let f=d.kind==="house"?T(e,"all_floors"):d.kind==="cameras"?T(e,"camera_wall_title"):d.name;if(s("done",`\u201C${r}\u201D \u2192 ${f}`),this.directing.touch(Date.now()),d.kind==="cameras")C("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(d.kind==="device"){let _=l.get(d.id);d.camera&&d.entity&&C("camera_cockpit")?this.lookThrough(d.entity):_&&this.goTo(_)}else d.kind==="house"?this.fire("floor-tap",{floorId:null}):d.kind==="floor"?this.fire("floor-tap",{floorId:d.floorId}):(this.floorId!==d.floorId&&this.fire("floor-tap",{floorId:d.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:d.floorId,roomId:d.roomId}),60));return T(e,"voice_showing",{name:f})}let u=await e.callWS({type:"neonplan3d/locate/ask",text:r,language:e.language}).catch(()=>null);if(u)return s("done",`\u201C${r}\u201D \u2013 ${u.text}`),u.rooms.length&&(!u.admins_only||e.user?.is_admin)&&this.showRooms(t,u.rooms),i&&n.speak(e,u.text,lt()),u.text;let p=this.moduleHost(e,t,n.SYNONYMS,f=>n.showTarget(f,t,a,_=>_.area_id?e.areas?.[_.area_id]?.name:null)),h=await qu(r,p);if(h){s("done",h.text?`\u201C${r}\u201D \u2013 ${h.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),h.highlight?.length&&this.viewer?.flashDevices(h.highlight);let f=h.focus,_=h.spoken??h.text??"";if(h.tour?.length){let m=i&&h.speak!==!1?v=>n.speak(e,v,lt()):null,b=h.spoken??h.text;return b&&m&&await m(b),this.runTour(h.tour,t,l,m),_}if(f?.roomId&&f.floorId)this.floorId!==f.floorId&&this.fire("floor-tap",{floorId:f.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:f.floorId,roomId:f.roomId}),60);else if(f?.floorId&&!f.entity&&!f.furnitureId)this.fire("floor-tap",{floorId:f.floorId});else if(f?.entity||f?.furnitureId){let m=l.get(f.entity??`furniture:${f.furnitureId}`);m&&this.goTo(m)}return h.text&&h.speak!==!1&&i&&n.speak(e,h.text,lt()),_}}return null}spokenDevices(e,t,n){let r=this.findIndex??=Ir(e,t),i=new Map(t.floors.flatMap(u=>ie(u).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let u of r)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of t.floors){let p=ie(u);for(let h of u.furniture){if(Kg.has(h.type))continue;let f=this.furnitureLinks.get(h.id),_=f?.entity??f?.power??null,m=_??`furniture:${h.id}`,b=p.find(R=>R.points.length>=3&&K([h.x,h.z],R.points)),v=we(e,h.type),g=[h.name,...h.aliases??[],v,_?G(e,_):null,...n[h.type]??[]].filter(R=>!!R),k=h.name||(_?G(e,_):v);s.push({id:m,entity:_,name:k,names:g,room:b?.name??"",camera:!!_&&L(_)==="camera"});let $=(h.type==="plant"||Zi(h.type))&&!!h.moisture&&h.moisture!=="none",E=os(f?.entity?e.states[f.entity]:void 0,f?.power?le(e.states[f.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),M=C("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!E?ts(e.states[h.remaining]):null;a.push({id:m,entity:_,name:k,names:g,room:b?.name??"",floorId:u.id,roomId:b?.id??null,power:f?.power??null,type:h.type,remaining:M,thirsty:$&&C("household")?es(h,e):null}),_?c.add(_):l.set(m,{kind:"device",name:k,where:"",floorId:u.id,roomId:b?.id??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let d=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&i.get(p.roomId)||"",f=d.get(u),_=[f?.name,...f?.aliases??[],p.name].filter(m=>!!m);s.push({id:u,entity:u,name:p.name,names:_,room:h,camera:L(u)==="camera"}),a.push({id:u,entity:u,name:p.name,names:_,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,t){let n=[];for(let r of t.floors)for(let i of r.openings){let s=this.openingLinks?.get(i.id)?.lock;if(!s)continue;let a=this.openingSpot(t,i.id,!0);if(!a)continue;let l=e.states[s];n.push({id:s,floorId:r.id,roomId:i.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:jt("lock"),name:G(e,s),text:l?fe(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||j(l),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let r of e.floors){let i=r.openings.find(b=>b.id===t);if(!i)continue;let s=cc(i,r.rooms,r.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=We(a)>0?[-u[1],u[0]]:[u[1],-u[0]],f=i.offset;if(n){let b=u[0]*h[1]-u[1]*h[0]>0;f=i.offset-i.width/2+ql(i,i.hinge==="left"===b)}let[_,m]=Jo(s.room,s.edge,f);return{floorId:r.id,x:_+h[0]*.2,z:m+h[1]*.2,y:Math.max(.5,i.sill+i.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>({roomId:l,floorId:e.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let r=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let i=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};i?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of n.entries()){if(r!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),r!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}i?.removeEventListener("pointerdown",s)}async runTour(e,t,n,r){let i=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(d=>{if(d.openingId){let p=this.openingSpot(t,d.openingId);return p?{...p,entity:null,say:d.say,inside:!0}:null}let u=n.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(i!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),i!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),i!==this.tourToken))break;let u=d.say&&r?await r(d.say):!1;if(i!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,t){let n=[],r=a=>T(e,a);for(let a of t.floors){let l=new Map(ie(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",p=nt(e,d,c.type),h=p.open>.02||p.open2>.02||c.type==="garage"&&(p.cover??0)>.02,f=!h&&(p.tilt>.02||p.tilt2>.02);for(let _ of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])_&&_!=="none"&&n.push({id:c.id,entity:_,kind:u,name:r(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:h,tilted:f})}}let i=t.settings.roof?.windows??[],s=i.length?new Map($t(t).map(a=>[a.key,a])):null;for(let a of i){let l=Wh(e,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(m=>!!m&&m!=="none"),p=u.map(m=>Re(e,m)).filter(m=>!!m).map(m=>t.floors.flatMap(b=>b.rooms.filter(v=>v.area_id===m).map(v=>({floor:b,room:v})))).find(m=>m.length===1)?.[0],h=p?null:fs(t,s?.get(a.face),a),f=p?.floor??h?.floor??t.floors[t.floors.length-1],_=p?.room??(h?f?.rooms.find(m=>m.id===h.roomId):void 0);for(let m of u)n.push({id:a.id,entity:m,kind:"roof_window",name:a.name||r("roof_window"),room:_?.name??"",floorId:f?.id??"",roomId:_?.id??null,open:c,tilted:d})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,r){let i=null,s=()=>i??=this.spokenDevices(e,t,n).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let c=r(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>!!this.hass?.user?.is_admin&&!this.ro&&!this.noSave,updateBuilding:l=>{let c=this.building;if(!c||!this.hass||this.ro||this.noSave||!this.hass.user?.is_admin)return;let d=structuredClone(c);l(d),this.building=d,Gn(this.hass,d,this.planId??void 0).catch(u=>this.serviceFailed("neonplan3d/building/save",u))},callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>Zl(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(p=>p.id===l),u=d?.outdoor.find(p=>p.id===c);return!d||!u||u.type!=="pool"?null:{y:cn(d,u),floorY:Un(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(p=>p.id===l);return u?tt(u,c,d):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:sa,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??G(e,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>eh(a),weather:()=>Ce(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await at()).listenOnce(e,l,lt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),tour:(l,c)=>{let d=this.spokenDevices(e,t,n).items,u=c?p=>at().then(h=>h.speak(e,p,lt())):null;this.runTour(l,t,d,u)},occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t)};return a}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let r of this.lastPersons)r.roomId&&n.set(r.roomId,r);for(let r of t.floors)for(let i of r.rooms){if(n.has(i.id)||!i.area_id)continue;_e(e,i.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(i.id,{floorId:r.id,roomId:i.id})}return[...n.values()]}planSpeakers(e,t){let n=[],r=new Set;for(let i of t.floors){let s=(a,l)=>ie(i).find(c=>c.points.length>=3&&K([a,l],c.points))?.id??null;for(let a of i.placements)!a.entity_id.startsWith("media_player.")||r.has(a.entity_id)||!e.states[a.entity_id]||(r.add(a.entity_id),n.push({entity:a.entity_id,name:G(e,a.entity_id),floorId:i.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of i.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||r.has(l)||!e.states[l]||(r.add(l),n.push({entity:l,name:G(e,l),floorId:i.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:ue(i,a)+a.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Qt())return[];let r=n.floors.find(i=>ie(i).some(s=>s.id===e));return r?Os(this.sceneHost(t,n),{floorId:r.id,roomId:e}).map(i=>({id:i.id,icon:i.icon,title:i.title})):[]}plainOf=null;drawnPlan="";condOf=null;shownSig="";conditioned(){let e=this.building,t=As(this.hass,e);this.shownSig=t;let n=yr(e,this.rooms),r=`${t}|${n.join(",")}`;if(!e||!t&&!n.length)return e;if(this.condOf?.from===e&&this.condOf.sig===r)return this.condOf.to;let i=t?{...e,floors:e.floors.map(s=>({...s,furniture:s.furniture.filter(a=>zs(this.hass,a))}))}:e;return n.length&&(i=kr(i,n)),this.condOf={from:e,sig:r,to:i},i}shownBuilding(){let e=this.conditioned();if(!e||!this.plain)return e;if(this.plainOf?.from===e)return this.plainOf.to;let t=r=>ki.has(r.type)||r.type==="stairwell"||!!he(r.type)?.hole,n={...e,floors:e.floors.map(r=>({...r,furniture:r.furniture.filter(t)}))};return this.plainOf={from:e,to:n},n}openRoomSheet(e,t){let n=this.building?.floors.find(r=>r.rooms.some(i=>i.id===e));this._sheet={id:t,floorId:n?.id??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let r=this.sceneHost(e,t);return(n.roomId&&n.floorId?Os(r,{floorId:n.floorId,roomId:n.roomId}):Ns(r)).find(s=>s.id===n.id)??null}faceWords(e){let t=n=>T(e,n);return{today:t("frame_today"),tomorrow:t("frame_tomorrow"),allDay:t("frame_allday"),nothing:t("frame_nothing"),now:t("frame_now"),inMin:t("frame_in_min"),done:t("frame_done"),home:t("frame_person_home"),away:t("frame_person_away"),whoHome:t("frame_who_home"),waste:t("frame_waste"),rainSoon:t("frame_rain_soon")}}weatherBits(e,t){let n=t?e.states[t]:void 0;if(!n||j(n))return null;let r=n.attributes,i=typeof r.temperature_unit=="string"?r.temperature_unit:"\xB0C",s=typeof r.temperature=="number"?`${J(e,r.temperature,0)}${i}`:"\u2013",a=[];typeof r.humidity=="number"&&a.push(`\u{1F4A7} ${Math.round(r.humidity)} %`),typeof r.wind_speed=="number"&&a.push(`\u{1F4A8} ${J(e,r.wind_speed,0)} ${typeof r.wind_speed_unit=="string"?r.wind_speed_unit:"km/h"}`);let l=e.language??"en",c=this.faceWords(e),d=Au(this.frameForecasts.get(`${t}|daily`),new Date,3).map(h=>({label:h.offset===0?c.today:h.offset===1?c.tomorrow:h.day.toLocaleDateString(l,{weekday:"short"}),symbol:Sr(h.condition),hi:h.hi===null?"\u2013":`${J(e,h.hi,0)}\xB0`,lo:h.lo===null?"":`${J(e,h.lo,0)}\xB0`})),u=Ru(this.frameForecasts.get(`${t}|hourly`),new Date),p=u?u.inHours<=0?T(e,"frame_rain_now",{p:Math.round(u.probability)}):T(e,"frame_rain_soon",{h:u.inHours,p:Math.round(u.probability)}):null;return{symbol:Sr(n.state),temperature:s,condition:String(n.state).replace(/-/g," "),lines:a,days:d,warning:p}}wasteLines(){return this._household.filter(e=>e.icon==="trash-can"||/tonne|bin|müll|abfall/i.test(e.text)).map(e=>e.text).slice(0,3)}frameScreen(e,t){let n=t.frame_kind??null,r=t.frame_source??null;if(!n)return null;let i=this.effectiveTheme()==="day",s=i?[.92,.94,1]:[.06,.08,.14],a=this.dimmed?.4:1,l=he(t.type),c=l?.parts.find(b=>b.screen),d=l&&c?Math.max(.3,c.w*t.w/Math.max(.01,c.h*t.h)):1.4,u=e.language??"en",p=new Date,h=b=>Math.floor(p.getTime()/b),f=this.faceWords(e),_=(b,v)=>{let g=this.framePics.get(t.id);return(!g||g.sig!==b)&&(g={sig:b,url:v()},this.framePics.set(t.id,g)),g.url?{color:s,level:a,picture:g.url,plain:!0}:null},m=b=>Fs(b.since,p.getTime(),{since:T(e,"frame_since"),min:T(e,"frame_min"),h:T(e,"frame_h")});switch(n){case"calendar":{let b=Tt(t);if(!b.length)return null;let v=mo(Pn(this.frameEvents,b),p,7),g=`${i}|${d.toFixed(2)}|${u}|${h(6e4)}|${t.name??""}|${v.map(k=>k.events.map($=>`${$.calendar}:${$.start.getTime()}:${$.summary}`).join(",")).join(";")}`;return _(g,()=>Du(v,b,u,f,d,i,t.name||"",p))}case"todo":{let b=r&&r.startsWith("todo.")?r:null;if(!b)return null;let v=Is(this.frameTodos.get(b)??[]),g=`${i}|${d.toFixed(2)}|${t.name??""}|${v.map(k=>`${k.uid}:${k.status}:${k.summary}`).join(";")}`;return _(g,()=>Hu(v,f,d,i,t.name||G(e,b)))}case"persons":{let b=En(e.states,Xt(t),this.personRooms),v=`${i}|${d.toFixed(2)}|${h(6e4)}|${t.name??""}|${b.map(g=>`${g.id}:${g.state}:${g.room??""}:${g.since??""}`).join(";")}`;return _(v,()=>Wu(b,f,m,d,i,t.name||f.whoHome))}case"board":{let b=Tt(t),v=b.length?mo(Pn(this.frameEvents,b),p,2):[],g=En(e.states,[],this.personRooms),k=this.weatherBits(e,Ce(e,this.weatherEntityId??this.building?.settings.weather_entity)??null),$={today:v[0]??null,tomorrow:v[1]??null,calendars:b,people:g,waste:C("household")?this.wasteLines():[],weather:k?{symbol:k.symbol,temperature:k.temperature,condition:k.condition}:null},E=`${i}|${d.toFixed(2)}|${u}|${h(6e4)}|${t.name??""}|${v.map(M=>M.events.map(R=>`${R.calendar}:${R.start.getTime()}:${R.summary}`).join(",")).join(";")}|${g.map(M=>`${M.id}:${M.state}`).join(",")}|${$.waste.join(",")}|${k?.temperature??""}|${k?.symbol??""}`;return _(E,()=>Cu($,u,f,d,i,t.name||"",p))}case"weather":{let b=this.weatherBits(e,r);if(!b)return null;let v=`${i}|${d.toFixed(2)}|${b.symbol}|${b.temperature}|${b.lines.join("|")}|${b.days.map(g=>`${g.label}${g.symbol}${g.hi}${g.lo}`).join(",")}|${b.warning??""}`;return _(v,()=>Lu(b,d,i))}case"camera":{if(!r)return null;let b=this.pictureUrl(`camera:${r}`);return b?{color:s,level:a,picture:b,plain:!0}:null}case"media":{let b=r?e.states[r]:void 0,v=b&&!j(b)&&["playing","paused","on"].includes(b.state)?b.attributes.entity_picture:void 0;return v?{color:s,level:b.state==="playing"?a:a*.7,picture:v,plain:!0}:null}case"person":{let b=r?e.states[r]:void 0,v=b?b.attributes.entity_picture:void 0;return v?{color:s,level:b.state==="home"?a:a*.5,picture:v,plain:!0}:null}case"photo":{let b=Xt(t);if(!b.length)return null;let v=b[Ds(b.length,t.frame_interval??30,p.getTime())],g=/^https?:\/\//.test(v)||v.startsWith("/")?v:this.pictureUrl(v);return g?{color:s,level:a,picture:g,plain:!0}:null}default:return null}}frameWatch(e,t){let n=C("frames"),r=n?t.floors.flatMap(f=>f.furniture.filter(_=>Yt(_.type)&&_.frame_kind)):[],i=n?Mu(t.floors):[],s=i.join(",");if(s!==this.frameCalendarKey&&(this.frameCalendarKey=s,clearInterval(this.frameTimer),this.frameTimer=void 0,this.frameEvents=new Map,i.length)){let f=async()=>{document.hidden||(this.frameEvents=await Tu(this.hass??e,i),this.syncDevices(!0))};f(),this.frameTimer=setInterval(()=>{f()},Pu("calendar",this._low))}let a=n?Eu(t.floors):[],l=a.map(f=>`${f}:${e.states[f]?.state??""}:${e.states[f]?.last_updated??""}`).join(",");if(l!==this.frameTodoKey)if(this.frameTodoKey=l,clearInterval(this.todoTimer),this.todoTimer=void 0,!a.length)this.frameTodos=new Map;else{let f=async()=>{if(document.hidden)return;let _=new Map(this.frameTodos);await Promise.all(a.map(async m=>{try{let b=await(this.hass??e).callWS({type:"todo/item/list",entity_id:m});_.set(m,Array.isArray(b?.items)?b.items:[])}catch{}})),this.frameTodos=_,this.syncDevices(!0)};f(),this.todoTimer=setInterval(()=>{f()},5*6e4)}let c=n?zu(t.floors,Ce(e,this.weatherEntityId??t.settings.weather_entity)):[],d=new Set(c.flatMap(f=>[`${f}|daily`,`${f}|hourly`]));for(let[f,_]of this.forecastSubs)d.has(f)||(this.forecastSubs.delete(f),this.frameForecasts.delete(f),_.then(m=>m()).catch(()=>{}));for(let f of d){if(this.forecastSubs.has(f))continue;let[_,m]=f.split("|"),b=(this.hass??e).connection.subscribeMessage(v=>{this.frameForecasts.set(f,Array.isArray(v?.forecast)?v.forecast:[]),this.syncDevices(!0)},{type:"weather/subscribe_forecast",forecast_type:m,entity_id:_}).catch(()=>async()=>{});this.forecastSubs.set(f,b)}let u=r.filter(f=>f.frame_kind==="photo"&&Xt(f).length>1),p=u.length?Math.max(3,Math.min(...u.map(f=>f.frame_interval??30)))*1e3:0;p!==this.slideMs&&(this.slideMs=p,clearInterval(this.slideTimer),this.slideTimer=p?setInterval(()=>!document.hidden&&this.syncDevices(!0),p):void 0);let h=Date.now();for(let f of r){if(f.frame_kind!=="camera"||!f.frame_trigger||!f.frame_source)continue;let _=!1;if(f.frame_trigger==="detect")for(let m of Ke(e,f.frame_source))this.directing.edge(`frame:${f.id}:${m}`,e.states[m],(b,v)=>b?.state==="off"&&v?.state==="on")&&(_=!0);else this.directing.edge(`frame:${f.id}`,e.states[f.frame_trigger],(m,b)=>ca(m,b,h))&&(_=!0);_&&this.openFramePop(f.id,3e4)}if(!this.replay){let f=new Date;for(let _ of r){if(_.frame_kind!=="calendar"&&_.frame_kind!=="board"||!_.frame_remind)continue;let m=Pn(this.frameEvents,Tt(_));for(let b of Iu(m,_.frame_remind,f,this.reminded)){this.reminded.add(Hs(b));let v=b.start.toLocaleTimeString(e.language??void 0,{hour:"2-digit",minute:"2-digit"}),g=T(e,"frame_reminder",{what:b.summary,when:v});this.showNote(g),e.services?.neonplan3d?.announce&&e.callService("neonplan3d","announce",{message:g}).catch(()=>{})}}this.reminded.size>500&&this.reminded.clear()}}openFramePop(e,t=6e4){clearTimeout(this.framePopTimer),this._framePop={furnitureId:e},this._frameNew=null,this.frameOpenDays=new Set,this.framePopTimer=setTimeout(()=>this._framePop=null,t)}closeFramePop(){clearTimeout(this.framePopTimer),this._framePop=null,this._frameNew=null}async todoAction(e,t){let n=this.hass;if(n)try{if("toggle"in t){let r=t.toggle.status==="completed"?"needs_action":"completed";await n.callService("todo","update_item",{entity_id:e,item:t.toggle.uid,status:r}),this.frameTodos=new Map(this.frameTodos).set(e,(this.frameTodos.get(e)??[]).map(i=>i.uid===t.toggle.uid?{...i,status:r}:i))}else t.add.trim()&&(await n.callService("todo","add_item",{entity_id:e,item:t.add.trim()}),this.frameTodos=new Map(this.frameTodos).set(e,[...this.frameTodos.get(e)??[],{uid:`new:${Date.now()}`,summary:t.add.trim(),status:"needs_action"}]));this.frameTodoKey="",this.syncDevices(!0)}catch{}}async createFrameEvent(e){let t=this.hass,n=this._frameNew;if(!t||!n||!n.title.trim()||!n.date)return;let r=n.calendar||Tt(e)[0];if(!r)return;let i={entity_id:r,summary:n.title.trim()};if(n.time){let s=new Date(`${n.date}T${n.time}:00`),a=new Date(s.getTime()+36e5),l=c=>`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")} ${String(c.getHours()).padStart(2,"0")}:${String(c.getMinutes()).padStart(2,"0")}:00`;i.start_date_time=l(s),i.end_date_time=l(a)}else{let s=new Date(`${n.date}T00:00:00`),a=new Date(s.getFullYear(),s.getMonth(),s.getDate()+1);i.start_date=n.date,i.end_date=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}try{await t.callService("calendar","create_event",i),this._frameNew=null,this.showNote(T(t,"frame_saved")),this.frameCalendarKey="",this.syncDevices(!0)}catch{this.showNote(T(t,"frame_save_failed"))}}renderFrameEventList(e,t,n,r,i){let s=(p,h)=>T(e,p,h),a={today:s("frame_today"),tomorrow:s("frame_tomorrow")},l=new Date,c=p=>{let h=new Set(this.frameOpenDays);h.has(p)?h.delete(p):h.add(p),this.frameOpenDays=h},d=this._frameNew,u=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`;return w`${t.length?w`<div class="fp3d-frame-days">
            ${t.map(p=>w`<section class=${p.offset===0?"fp3d-frame-today":""}>
                <h4 role="button" tabindex="0" @click=${()=>c(p.offset)}>${Tn(p,r,a)} <small>${this.frameOpenDays.has(p.offset)?"\u25BE":"\u25B8"}</small></h4>
                ${p.events.map(h=>{let f=p.offset===0?$r(h,l):null,_=this.frameOpenDays.has(p.offset);return w`<div class="fp3d-frame-ev ${f?"fp3d-frame-live":""}" style="--cal:${xr(n,h.calendar)}">
                    <span class="fp3d-frame-time">${f==="now"?s("frame_now"):f==="soon"?s("frame_in_min",{n:Mr(h,l)}):go(h,r,s("frame_allday"))}</span>
                    <span class="fp3d-frame-sum"
                      >${Pr(h)?"\u{1F382} ":""}${h.summary}${h.location?w`<small> · ${h.location}</small>`:y}
                      ${_&&(h.description||!h.allDay)?w`<em>${[!h.allDay&&h.end?go(h,r,""):"",h.description].filter(Boolean).join(" \xB7 ")}</em>`:y}</span
                    >
                  </div>`})}
              </section>`)}
          </div>`:w`<p class="fp3d-sub">${s("frame_nothing")}</p>`}
      ${i&&!this.ro?d?w`<form class="fp3d-frame-new" @submit=${p=>(p.preventDefault(),void this.createFrameEvent(i))}>
              <input class="fp3d-frame-in" placeholder=${s("frame_event_title")} .value=${d.title} @input=${p=>this._frameNew={...d,title:p.target.value}} />
              <input class="fp3d-frame-in" type="date" .value=${d.date} aria-label=${s("frame_event_date")} @input=${p=>this._frameNew={...d,date:p.target.value}} />
              <input class="fp3d-frame-in" type="time" .value=${d.time} aria-label=${s("frame_event_time")} @input=${p=>this._frameNew={...d,time:p.target.value}} />
              ${n.length>1?w`<select class="fp3d-frame-in" @change=${p=>this._frameNew={...d,calendar:p.target.value}}>
                    ${n.map(p=>w`<option value=${p} ?selected=${p===(d.calendar||n[0])}>${G(e,p)}</option>`)}
                  </select>`:y}
              <div class="fp3d-frame-ctl"><button class="fp3d-btn fp3d-primary" type="submit" ?disabled=${!d.title.trim()}>${s("frame_save")}</button><button class="fp3d-btn" type="button" @click=${()=>this._frameNew=null}>${s("cancel")}</button></div>
            </form>`:w`<button class="fp3d-btn fp3d-frame-addbtn" @click=${()=>this._frameNew={title:"",date:u,time:"",calendar:n[0]??""}}>＋ ${s("frame_new_event")}</button>`:y}`}renderFramePop(){let e=this.hass,t=this.building,n=this._framePop;if(!e||!t||!n)return y;let r=t.floors.flatMap(m=>m.furniture).find(m=>m.id===n.furnitureId);if(!r||!Yt(r.type))return y;let i=r.frame_kind??null,s=r.frame_source??null,a=(m,b)=>T(e,m,b),l=r.name||(i?a(`frame_kind_${i}`).split(" (")[0]:a("frame_section")),c=e.language??"en",d=Date.now(),u=()=>this.closeFramePop(),p=m=>Fs(m.since,d,{since:a("frame_since"),min:a("frame_min"),h:a("frame_h")}),h=m=>w`<div class="fp3d-frame-people">
      ${m.map(b=>w`<div class="fp3d-frame-personrow ${b.home?"fp3d-frame-home":""}">
          ${b.picture?w`<img src=${b.picture} alt="" />`:w`<span class="fp3d-frame-initial">${b.name.slice(0,1)}</span>`}
          <div><b>${b.name}</b><span>${[b.home?a("frame_person_home"):b.state==="not_home"?a("frame_person_away"):b.state,b.home&&b.room?a("frame_person_in",{room:b.room}):"",p(b)].filter(Boolean).join(" \xB7 ")}</span></div>
        </div>`)}
    </div>`,f=w`<p class="fp3d-sub">${a("frame_no_source")}</p>`,_=!1;if(i==="calendar"&&s){let m=Tt(r),b=mo(Pn(this.frameEvents,m),new Date,7).filter(v=>v.events.length);f=this.renderFrameEventList(e,b,m,c,r)}else if(i==="board"){let m=Tt(r),b=m.length?mo(Pn(this.frameEvents,m),new Date,7).filter($=>$.events.length):[],v=En(e.states,[],this.personRooms),g=this.weatherBits(e,Ce(e,this.weatherEntityId??t.settings.weather_entity)??null),k=C("household")?this.wasteLines():[];f=w`${g?w`<div class="fp3d-frame-wline"><span>${g.symbol} ${g.temperature}</span><span>${g.condition}</span>${g.warning?w`<em>☔ ${g.warning}</em>`:y}</div>`:y}
        ${v.length?w`<h4 class="fp3d-frame-h">${a("frame_who_home")}</h4>${h(v)}`:y}
        ${k.length?w`<h4 class="fp3d-frame-h">${a("frame_waste")}</h4><p class="fp3d-frame-waste">🗑 ${k.join(" \xB7 ")}</p>`:y}
        ${m.length?w`<h4 class="fp3d-frame-h">${a("frame_week")}</h4>${this.renderFrameEventList(e,b,m,c,r)}`:y}`}else if(i==="todo"&&s){let m=Is(this.frameTodos.get(s)??[],200);f=w`<div class="fp3d-frame-todo">
        ${m.length?m.map(b=>w`<label class="fp3d-frame-todoitem ${b.status==="completed"?"fp3d-frame-done":""}">
                <input type="checkbox" .checked=${b.status==="completed"} ?disabled=${this.ro} @change=${()=>{this.todoAction(s,{toggle:b})}} />
                <span>${b.summary}</span>
              </label>`):w`<p class="fp3d-sub">${a("frame_nothing")}</p>`}
        ${this.ro?y:w`<form class="fp3d-frame-new" @submit=${b=>{b.preventDefault();let v=b.target.querySelector("input");this.todoAction(s,{add:v.value}),v.value=""}}>
              <input class="fp3d-frame-in" placeholder=${a("frame_add_item")} />
              <button class="fp3d-btn fp3d-primary" type="submit">${a("frame_add")}</button>
            </form>`}
      </div>`}else if(i==="persons")f=h(En(e.states,Xt(r),this.personRooms));else if(i==="camera"&&s){let m=e.states[s],b=m?.attributes.entity_picture,v=b&&!j(m)?b.startsWith("data:")?b:`${b}${b.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,g=C("camera_cockpit")&&t.settings.director?.live?this.liveFor(s):null;_=!0,f=g?w`<div class="fp3d-frame-big fp3d-frame-live-img">${g}</div>`:v?w`<img class="fp3d-frame-big" src=${v} alt="" />`:w`<p class="fp3d-sub">${G(e,s)}</p>`}else if(i==="photo"&&s){let m=Xt(r),b=m[Ds(m.length,r.frame_interval??30,d)]??m[0],v=/^https?:\/\//.test(b)||b.startsWith("/")?b:this.pictureUrls.get(b)??null;_=!0,f=v?w`<img class="fp3d-frame-big" src=${v} alt="" />`:y}else if(i==="media"&&s){let m=e.states[s],b=m?.attributes??{},v=m?.state==="playing",g=[b.media_title,b.app_name,b.source].find($=>typeof $=="string"&&!!$.trim()),k=$=>{e.callService("media_player",$,{entity_id:s})};f=w`<div class="fp3d-frame-media">
        ${typeof b.entity_picture=="string"?w`<img class="fp3d-frame-cover" src=${b.entity_picture} alt="" />`:y}
        <div class="fp3d-frame-media-text">
          <b>${g??a("frame_media_idle")}</b>
          <span>${typeof b.media_artist=="string"?b.media_artist:typeof b.media_album_name=="string"?b.media_album_name:G(e,s)}</span>
          <div class="fp3d-frame-ctl">
            <button class="fp3d-chip" @click=${()=>k("media_previous_track")}>⏮</button>
            <button class="fp3d-chip" @click=${()=>k(v?"media_pause":"media_play")}>${v?"\u23F8":"\u25B6"}</button>
            <button class="fp3d-chip" @click=${()=>k("media_next_track")}>⏭</button>
          </div>
        </div>
      </div>`}else if(i==="person"&&s)f=h(En(e.states,[s],this.personRooms));else if(i==="weather"&&s){let m=this.weatherBits(e,s);f=m?w`<div class="fp3d-frame-person">
              <div class="fp3d-frame-weather-sym">${m.symbol}</div>
              <div class="fp3d-frame-media-text"><b>${m.temperature}</b><span>${[m.condition,...m.lines].join(" \xB7 ")}</span>${m.warning?w`<em>☔ ${m.warning}</em>`:y}</div>
            </div>
            ${m.days.length?w`<div class="fp3d-frame-fdays">${m.days.map(b=>w`<div><small>${b.label}</small><span>${b.symbol}</span><b>${b.hi}</b><small>${b.lo}</small></div>`)}</div>`:y}`:y}return w`<div class="fp3d-sheet-backdrop" @click=${u}></div>
      <div class="fp3d-sheet fp3d-frame-pop ${_?"fp3d-frame-wide":""}" role="dialog" aria-label=${l}>
        <header><span>🖼️ ${l}</span><button class="fp3d-sheet-x" aria-label=${a("close")} @click=${u}>✕</button></header>
        ${f}
      </div>`}renderSheet(){let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return y;let n=this.currentSheet(e,t);if(!n)return y;let r=d=>T(e,d),i=this._sheet.roomId?t.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("NeonPlan 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&n.input&&a(()=>n.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=r("sheet_listening");let p=await this.sceneHost(e,t).listen?.(()=>d.placeholder=r("sheet_listening"));d.placeholder=n.input?.placeholder??"",p?d.value=p:this.showNote(r("sheet_mic_failed"))};return w`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${i?` \xB7 ${i.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${r("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?w`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(d=>w`<button class="fp3d-chip" aria-pressed=${d.id===n.choice.value} @click=${()=>{n.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:y}
        ${n.chips?.length?w`<div class="fp3d-sheet-chips">${n.chips.map(d=>w`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:y}
        ${n.input?w`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${n.input.mic?w`<button class="fp3d-btn fp3d-sheet-mic" title=${r("sheet_mic")} aria-label=${r("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:y}
        ${n.lines?.length?w`<div class="fp3d-sheet-lines">${n.lines.map(d=>w`<p>${d}</p>`)}</div>`:y}
        ${e.user?.is_admin&&!this.ro&&Bs().length?w`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${r("view_settings")}</button>`:y}
      </div>`}setPlanSettings(e){let t=this.building;if(!t||!this.hass?.user?.is_admin||this.ro||this.noSave)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,Gn(this.hass,n,this.planId??void 0).catch(r=>this.serviceFailed("neonplan3d/building/save",r))}renderSettings(){let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return y;let n=d=>T(e,d),r=!!e.user?.is_admin&&!this.ro&&!this.noSave,i=t.settings,s=(d,u,p,h)=>w`<label class="fp3d-set-check" title=${h?n(h):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!r} @change=${f=>this.setPlanSettings(p(f.target.checked))} /> ${n(d)}</label
      >`,a=this.sceneHost(e,t),l=mt(),c=Bs().map(d=>{let u=Ju(d,a);if(!u.length||u[0].kind==="heading")return u;let p=l.find(f=>f.id===d);return[{kind:"heading",text:p?zl(p,e.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return w`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${r?y:w`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sun_shadow",i.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${i.sun_shadow!==!1?w`<label class="fp3d-set-field" title=${n("sun_arc_hint")}
              >${n("sun_arc")}
              <select ?disabled=${!r} @change=${d=>this.setPlanSettings({sun_arc:d.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${i.sun_arc!=="plot"}>${n("sun_arc_house")}</option>
                <option value="plot" ?selected=${i.sun_arc==="plot"}>${n("sun_arc_plot")}</option>
              </select></label
            >`:y}
        ${s("window_glow",i.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${Js(Cr)?w`<p class="fp3d-set-note">${n("gpu_safe_note")}</p>`:y}
        ${s("sun_patches",i.sun_patches!==!1,d=>({sun_patches:d}))}
        ${this.renderGlassSize(n,r,i)}
        <h4>${n("view_settings_control")}</h4>
        ${s("tap_in_room",!!i.tap_in_room,d=>({tap_in_room:d}),"tap_in_room_hint")}
        ${s("right_click_back",!!i.right_click_back,d=>({right_click_back:d}),"right_click_back_hint")}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",i.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!i.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",i.alert_names!==!1,d=>({alert_names:d}))}
        ${c.map(d=>w`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(e,u,r))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderGlassSize(e,t,n){let r=n.roof.hologram??Ye,i=[.75,1,1.25,1.5,2],s=i.includes(r.size)?i:[...i,r.size].sort((a,l)=>a-l);return w`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!t} @change=${a=>this.setPlanSettings({roof:{...n.roof,hologram:{...r,size:Number(a.target.value)}}})}>
        ${s.map(a=>w`<option value=${a} ?selected=${a===r.size}>${Math.round(a*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,t,n){switch(t.kind){case"heading":return w`<h4>${t.text}</h4>`;case"text":return w`<p class="fp3d-set-note">${t.text}</p>`;case"check":return w`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${r=>t.set(r.target.checked)} /> ${t.label}</label>`;case"select":return w`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>t.set(r.target.value)}>
            ${t.options.map(r=>w`<option value=${r.id} ?selected=${r.id===t.value}>${r.label}</option>`)}
          </select></label
        >`;case"entity":{let r=Object.keys(e.states).filter(i=>t.filter(i)).sort((i,s)=>G(e,i).localeCompare(G(e,s)));return w`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>{let s=i.target.value;t.set(s===""?null:s)}}>
            <option value="" ?selected=${!t.value}>${t.auto?T(e,"entity_auto",{name:G(e,t.auto)}):"\u2014"}</option>
            ${r.map(i=>w`<option value=${i} ?selected=${i===t.value}>${G(e,i)}</option>`)}
          </select></label
        >`}case"lines":return jc(t.value,!n,{label:t.label,placeholder:t.placeholder??T(e,"lines_new"),add:T(e,"lines_add"),remove:T(e,"delete")},r=>t.set(r));case"button":return w`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?w`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(r=>ie(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:G(e,r.entity),...r.text?{text:r.text}:{},room:r.roomId?n.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,t){if(!C("auto_pro"))return[];let n=[];for(let r of t.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let s=An(e,i),a=Jn(e,i),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!zr.has(l.state.toLowerCase()));n.push({name:i.name||(s?we(e,s):we(e,"car")),spot:i.id,floorId:r.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let t=e.kind==="light"&&e.value<=0;return w`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${G(this.hass,e.entity)}</span>
      <b>${t?T(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!C("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},i)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?y:w`<div class="fp3d-pro" role="dialog">
      <b>${T(this.hass,"pro_title")}</b>
      <span>${T(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${T(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${Hd(this.hass.language)} target="_blank" rel="noopener">${T(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${Wd(this.hass.language,this._proHint)} target="_blank" rel="noopener">${T(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${T(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${T(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return y;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!C("camera_cockpit"))return w`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${T(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${T(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>L(d)==="camera"))];this.watchCameras(!0);let r=d=>{let u=e.states[d],p=u?.attributes.entity_picture;return p&&u&&!j(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=d=>{let u=e.states[d];return w`${G(e,d)}${u?.state==="recording"?w` <b>● ${T(e,"state_recording")}</b>`:y}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=r(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return w`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${T(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${T(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?w`<img src=${d} alt="" />`:w`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=kh(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return w`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${T(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${T(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=r(d),p=Ke(e,d).some(h=>e.states[h]?.state==="on");return w`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${T(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?w`<img src=${u} alt="" />`:w`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(r=>{if(this.live!==t)return;let i=r.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});i.hass=this.hass,t.el=i,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}popOnDetection(e,t){let n=this.now();for(let r of Ke(e,t)){let i=e.states[r];if(i?.state!=="on"||!i.last_changed)continue;let s=Date.parse(i.last_changed),a=`${r}@${i.last_changed}`;if(this.popSeen.has(a)||n-s>3e4)continue;this.popSeen.add(a),this.popSeen.size>200&&(this.popSeen=new Set([...this.popSeen].slice(-50)));let l=e.states[t],c=l?.attributes.entity_picture,d=c&&!j(l)?c.startsWith("data:")?c:`${c}${c.includes("?")?"&":"?"}fp3d=${Date.now()}`:null;this._camPop={entity:t,text:`${T(e,`detect_${ur(e,r)}`)} \xB7 ${G(e,t)}`,until:n+2e4,src:d},clearTimeout(this.camPopTimer),this.camPopTimer=setTimeout(()=>this._camPop=null,2e4);return}}camPopTimer;renderCamPop(){let e=this._camPop;return!e||!this.hass||this._through?y:w`<div class="fp3d-campop" role="status">
      <button class="fp3d-campop-img" title=${T(this.hass,"camera_popup_open")} @click=${()=>(this._camPop=null,this.lookThrough(e.entity))}>
        ${e.src?w`<img src=${e.src} alt="" />`:y}
      </button>
      <div class="fp3d-campop-bar"><span>${e.text}</span><button class="fp3d-chip" aria-label=${T(this.hass,"close")} @click=${()=>this._camPop=null}>✕</button></div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,r=n&&!j(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=this.building?.settings.director?.live?this.liveFor(e.entity):null;return w`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?w`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?w`<img class="fp3d-through-img" src=${r} alt="" />`:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${G(this.hass,e.entity)}</span>
        <span class="fp3d-still">${i?"\u25CF Live":T(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${T(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${T(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${T(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${T(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>Me(this,e)):Me(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,r=t?.clientHeight??600,i=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(r-360,e.y-170));return w`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${C("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${C("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let t=[];for(let n of this.scene){if(n.kind!=="marker")continue;let r=e.floors.find(d=>d.id===n.floorId),i=n.furnitureId?r?.furniture.find(d=>d.id===n.furnitureId):void 0;if(!r||!i&&!n.at)continue;let[s,a]=i?[i.x,i.z]:n.at,l=ih(n.path),c=rh(n.emoji);t.push({id:`module:${n.id}`,floorId:r.id,roomId:r.rooms.find(d=>d.points.length>=3&&K([s,a],d.points))?.id??null,x:s,z:a,y:n.y??(i?ue(r,i)+i.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:n.name,text:n.text??"",active:!!n.active&&!this.dimmed,unavailable:!1,glow:n.color&&n.active&&!this.dimmed?{color:n.color,level:1}:null,pin:!0,full:!0,...i?{furnitureId:i.id}:{}})}return t}openModuleCard(e){let t=this.scene.find(i=>i.kind==="marker"&&i.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=this.building?.floors.find(i=>i.id===t.floorId),r=n?.furniture.find(i=>i.id===t.furnitureId);n&&r&&this.viewer?.focus(n.id,r.x,r.z,ue(n,r)+r.h*.6,`module:${t.id}`)}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("frame:"))return this.openFramePop(e.slice(6));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("gangs:")){let i=e.slice(6),s=this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===i);if(!s)return;let a=Co(s);if(a.length===1)return this.onDeviceTap(a[0],t,n);if(a.length>1){this._gangMenu={furnitureId:i,x:t,y:n};return}let l=qn(s).find(c=>c.power&&c.power!=="none")?.power;l&&(this.ro?this.showInfo(l,t,n):Me(this,l));return}if(e.startsWith("hh:")){let[i,s]=e.slice(3).split("#");this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===s&&l.type==="waste_bin")?(this._binInfo={furnitureId:s,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(i,t,n):Me(this,i);return}if(this.ro){let i=this.building,s=i?i.energy.grid??Mn(i,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,t,n);return}if(e==="grid"){let i=this.building,s=i?i.energy.grid??Mn(i,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&Me(this,s);return}if(e.startsWith("detect:")){Me(this,e.slice(7));return}let r=L(e);if(r==="cover"||r==="camera"){this._menu={entity:e,x:t,y:n};return}if(r&&ud.has(r)){if(this.confirmSet.has(e)&&!confirm(T(this.hass,"confirm_switch",{name:G(this.hass,e)})))return;hr(this.hass,e)}else Me(this,e)}onOpeningTap(e,t,n,r){let i=this.openingLinks?.get(e);if(!i||!this.hass)return;if(i.lock&&!i.cover){this.ro?this.showInfo(i.lock,t,n):this._menu={entity:i.lock,x:t,y:n,doorLock:!0};return}let s=i.cover;if(!s)return;if(this.ro){this.showInfo(i.contact??s,t,n);return}if(r){Me(this,s);return}let a=this.hass.states[s];if(!a||j(a)){Me(this,s);return}if(this.confirmSet.has(s)&&!confirm(T(this.hass,"confirm_switch",{name:G(this.hass,s)})))return;let[l]=s.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s})}effectiveTheme(){return this.theme!=="auto"?this.theme:this.hass?.states["sun.sun"]?.state==="above_horizon"?"day":"neon"}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!C("energy_pro")||!e||this.roomId||!this.showEnergy)return y;let t=r=>T(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ae(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:ae(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ae(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?ae(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${J(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),w`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?y:n.map(r=>w`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?y:w`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:w`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=vr[this.heatMode],t=this.heatMode==="temperature",n=t?bt(this.hass,e.stops[0][0]):e.stops[0][0],r=t?bt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?Ne(this.hass):e.unit,s=a=>T(this.hass,a);return w`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${gu(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${J(this.hass,n,0)} ${i}</span><span>${J(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?y:w`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let t=e.config?.latitude,n=e.config?.longitude;if(typeof t!="number"||typeof n!="number")return null;let r=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==r&&(this.sunPathKey=r,this.sunPathCache=Fh(Date.now(),t,n)),this.sunPathCache}skyColor(){let e=po[this.effectiveTheme()]??po.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(a,l)=>`rgb(${a.map((c,d)=>Math.round(c+(l[d]-c)*e)).join(",")})`,n=po[this.effectiveTheme()]??po.neon,r=Sh(this.building?.settings.backdrop),s=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return w`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${s}
    >
      ${this._error?w`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:w`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCamPop()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderFramePop()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?y:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this._announce?w`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:y}
      ${this.pivotMark&&!this._walk?w`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?w`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Nr())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?w`<span class="fp3d-stats"
            ><b>${this._stats.fps?T(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):T(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?w`(${this._stats.busy.map(a=>T(this.hass,`stats_busy_${a}`)).join(", ")})`:y} ·
            ${T(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${T(this.hass,this._stats.low?"stats_low":"stats_full",{r:J(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${J(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[Ee,Fe,ke`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      /* a tag: light text on a solid dark plate, the bin's colour as its edge and a soft glow (coloured text – a
         blue paper bin's – was hard to read) */
      .fp3d-holo.fp3d-holo-bin {
        min-width: 0;
        width: auto;
        padding: 0;
        border-radius: 8px;
        pointer-events: none;
        border: 1.5px solid color-mix(in srgb, var(--bin) 85%, white);
        border-left-width: calc(6px * var(--fp3d-pin-k, 1));
        background: rgba(9, 13, 22, 0.94);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: 0 0 16px color-mix(in srgb, var(--bin) 50%, transparent), 0 2px 6px rgba(0, 0, 0, 0.5);
        color: #f5f8ff;
        text-shadow: none;
      }
      /* the tags of bins, mailboxes and plants follow the symbol size like the pins' labels (#645) */
      .fp3d-holo-bin .fp3d-holo-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: calc(4px * var(--fp3d-pin-k, 1)) calc(10px * var(--fp3d-pin-k, 1));
        white-space: nowrap;
      }
      .fp3d-holo.fp3d-holo-later {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        border-color: color-mix(in srgb, var(--bin) 60%, #3a4252);
      }
      .fp3d-holo-bin b {
        font-size: calc(19px * var(--fp3d-pin-k, 1));
        font-weight: 700;
        line-height: 1.15;
        color: #ffffff;
      }
      .fp3d-holo-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-bin span {
        font-size: calc(13px * var(--fp3d-pin-k, 1));
        line-height: 1.2;
        color: #cfd7e6;
      }
      /* put out already: a calm green edge, no glow */
      .fp3d-holo.fp3d-holo-out {
        border-color: #4ddf7a;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }
      .fp3d-holo-out b,
      .fp3d-holo-line-out b {
        color: #a8ffc2;
      }
      /* bins standing together: one plate, one line each in pickup order with its own colour edge */
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-multi {
        border-color: rgba(190, 205, 230, 0.55);
        border-left-width: 1.5px;
      }
      .fp3d-holo-bin .fp3d-holo-lines {
        align-items: stretch;
        gap: calc(3px * var(--fp3d-pin-k, 1));
        padding: calc(5px * var(--fp3d-pin-k, 1)) calc(9px * var(--fp3d-pin-k, 1)) calc(5px * var(--fp3d-pin-k, 1)) calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line {
        display: flex;
        align-items: baseline;
        gap: calc(7px * var(--fp3d-pin-k, 1));
        border-left: calc(5px * var(--fp3d-pin-k, 1)) solid var(--bin);
        padding-left: calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line b {
        font-size: calc(16px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-line-later {
        border-left-color: color-mix(in srgb, var(--bin) 65%, #3a4252);
      }
      /* a mailbox's or a plant's tag from afar: a round symbol (the text comes back close up) */
      .fp3d-holo-sym {
        display: none;
      }
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-far {
        border-radius: 50%;
        border-width: 2px;
      }
      .fp3d-holo-far .fp3d-holo-body {
        display: none;
      }
      .fp3d-holo-far .fp3d-holo-sym {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(34px * var(--fp3d-pin-k, 1));
        height: calc(34px * var(--fp3d-pin-k, 1));
        color: #ffffff;
      }
      .fp3d-holo-far .fp3d-holo-sym svg {
        width: 62%;
        height: 62%;
      }
      .fp3d-holo-link[style*="--bin"] line,
      .fp3d-holo-link[style*="--bin"] circle {
        stroke: var(--bin);
      }
      /* two classes, like the bin bubble: the info bubbles' rule (.fp3d-swipe) lets taps through – its buttons must
         take them (#868) */
      .fp3d-swipe.fp3d-gang-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        z-index: 6;
        pointer-events: auto;
      }
      .fp3d-gang-menu .fp3d-chip {
        text-align: left;
      }
      .fp3d-gang-menu .fp3d-gang-on {
        border-color: var(--fp3d-accent, #37e0ff);
        box-shadow: 0 0 10px rgba(55, 224, 255, 0.35);
      }
      .fp3d-gang-menu small {
        opacity: 0.7;
      }
      .fp3d-pivot {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 22px;
        height: 22px;
        margin: -11px 0 0 -11px;
        border: 1.5px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
      }
      .fp3d-pivot::before,
      .fp3d-pivot::after {
        content: "";
        position: absolute;
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
      }
      .fp3d-pivot::before {
        left: 50%;
        top: -6px;
        bottom: -6px;
        width: 1.5px;
        margin-left: -0.75px;
      }
      .fp3d-pivot::after {
        top: 50%;
        left: -6px;
        right: -6px;
        height: 1.5px;
        margin-top: -0.75px;
      }
      /* two classes: the info bubbles' own rule (.fp3d-swipe, further down) lets taps through to the house and
         would win over a single class – this bubble has a button (#793) */
      .fp3d-swipe.fp3d-bin-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-swipe.fp3d-bin-info .fp3d-bin-out {
        pointer-events: auto;
      }
      .fp3d-bin-info small {
        opacity: 0.7;
        font-weight: 400;
      }
      .fp3d-bin-info .fp3d-bin-out {
        margin-top: 6px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(190, 205, 230, 0.55);
        background: rgba(255, 255, 255, 0.08);
        color: #f5f8ff;
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-bin-info .fp3d-bin-out-on {
        border-color: #4ddf7a;
        background: rgba(77, 223, 122, 0.16);
        color: #a8ffc2;
      }
      .fp3d-hh {
        position: absolute;
        right: 12px;
        top: 58px;
        z-index: 3;
        width: min(250px, calc(100% - 24px));
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: rgba(10, 18, 34, 0.72);
        border: 1px solid rgba(110, 220, 255, 0.28);
        backdrop-filter: blur(8px);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);
      }
      .fp3d-hh-folded {
        width: auto;
      }
      .fp3d-hh button {
        font: inherit;
        color: inherit;
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
        border-radius: 9px;
      }
      .fp3d-hh-head {
        font-size: 12px;
        font-weight: 600;
        padding: 3px 6px;
        opacity: 0.9;
      }
      .fp3d-hh-head b {
        margin-left: 4px;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-hh-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        padding: 5px 6px;
      }
      .fp3d-hh-row:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.06);
      }
      .fp3d-hh-row:disabled {
        cursor: default;
      }
      .fp3d-hh-hot .fp3d-hh-icon {
        color: #ffb547;
      }
      .fp3d-hh-icon {
        flex: none;
        display: inline-flex;
        color: var(--fp3d-accent, #37e0ff);
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
        /* the symbol size (small 0.8, normal 1, large 1.25) scales the pin from inside, not its position */
        font: 600 calc(12px * var(--fp3d-pin-k, 1)) var(--fp3d-font);
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
        width: calc(24px * var(--fp3d-pin-k, 1));
        height: calc(24px * var(--fp3d-pin-k, 1));
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev-icon svg {
        width: calc(18px * var(--fp3d-pin-k, 1));
        height: calc(18px * var(--fp3d-pin-k, 1));
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
        width: 30px;
        height: 30px;
        pointer-events: auto;
      }
      .fp3d-person-tap {
        cursor: pointer;
      }
      .fp3d-person-face {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        background: var(--fp3d-pc, #ff5fd2);
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 55%, transparent),
          0 0 18px var(--fp3d-pc, #ff5fd2);
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person-figure {
        width: auto;
        height: auto;
      }
      .fp3d-person-figure .fp3d-person-face {
        display: none;
      }
      .fp3d-person-figure .fp3d-person-tag {
        position: static;
        display: block;
        transform: none;
      }
      .fp3d-person-tag {
        position: absolute;
        left: 50%;
        top: calc(100% + 4px);
        transform: translateX(-50%);
        padding: 1px 7px;
        border-radius: 8px;
        background: rgba(8, 14, 28, 0.82);
        border: 1px solid color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 60%, transparent);
        color: #fff;
        font: 600 11px var(--fp3d-font);
        white-space: nowrap;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      /* room names off: the pins go, but the "values" stay (without the name) */
      .fp3d-no-room-names .fp3d-pin:not(.fp3d-pin-info),
      .fp3d-no-room-names .fp3d-pin-info .fp3d-pin-name {
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
      /* a shadow that pulses repaints the warning every frame: it glows steadily on the tablet level */
      .fp3d-low .fp3d-alert {
        animation: none;
      }
      .fp3d-low .fp3d-holo-link line,
      .fp3d-low .fp3d-holo-link circle,
      .fp3d-low .fp3d-holo-curve {
        filter: none;
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
      /* at the top right, clear of the floor pictures and the switch rows (a card moves it beside its own buttons) */
      .fp3d-walk-btn {
        position: absolute;
        z-index: 3;
        top: 12px;
        right: var(--fp3d-walk-right, 12px);
        height: 38px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 14px 0 10px;
        font: inherit;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid rgba(55, 224, 255, 0.45);
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-walk-surface {
        position: absolute;
        inset: 0;
        z-index: 4;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-walk-top {
        position: absolute;
        z-index: 5;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        white-space: nowrap;
      }
      .fp3d-walk-room,
      .fp3d-walk-exit,
      .fp3d-walk-hint {
        padding: 8px 14px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font: inherit;
        font-weight: 700;
      }
      .fp3d-walk-exit {
        border: 0;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-walk-hint {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 62px;
        transform: translateX(-50%);
        max-width: min(560px, calc(100% - 32px));
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-walk-stick {
        position: absolute;
        z-index: 5;
        right: 18px;
        bottom: calc(18px + var(--fp3d-bottom-inset, 0px));
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgba(14, 21, 38, 0.55);
        border: 1px solid var(--fp3d-line);
        display: grid;
        place-items: center;
        touch-action: none;
      }
      .fp3d-walk-stick span {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--fp3d-accent);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.5);
        pointer-events: none;
      }
      /* with a mouse the stick is not needed */
      @media (pointer: fine) {
        .fp3d-walk-stick {
          display: none;
        }
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
      /* the clock in a corner of the view (view settings / card option clock) */
      .fp3d-clock {
        position: absolute;
        z-index: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        padding: 8px 14px;
        border-radius: 14px;
        background: rgba(4, 16, 24, 0.55);
        color: var(--fp3d-text);
        line-height: 1.1;
        pointer-events: none;
        backdrop-filter: blur(6px);
      }
      .fp3d-clock b {
        font-size: 30px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.02em;
      }
      .fp3d-clock span {
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      /* at the top it sits under the energy strip and the walk button */
      .fp3d-clock-tl {
        top: 64px;
        left: 12px;
      }
      .fp3d-clock-tr {
        top: 64px;
        right: 12px;
      }
      .fp3d-clock-bl {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        left: 12px;
      }
      .fp3d-clock-br {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        right: 12px;
      }
      .fp3d-mic {
        position: absolute;
        bottom: calc(6px + var(--fp3d-bottom-inset, 0px));
        /* a big target: it is tapped from across the room, often with a thumb */
        width: 52px;
        height: 52px;
        touch-action: manipulation;
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
      .fp3d-mic-on {
        color: #ff5a6a;
        border-color: #ff5a6a;
        box-shadow: 0 0 12px rgba(255, 90, 106, 0.7);
      }
      .fp3d-mic-say {
        position: absolute;
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        max-width: min(420px, calc(100% - 80px));
        padding: 6px 12px;
        border-radius: 14px;
        background: rgba(8, 16, 34, 0.85);
        border: 1px solid rgba(160, 240, 255, 0.35);
        color: var(--fp3d-text);
        font-size: 14px;
        z-index: 4;
      }
      .fp3d-announce {
        position: absolute;
        left: 50%;
        top: 18%;
        transform: translateX(-50%);
        max-width: min(640px, calc(100% - 32px));
        padding: 16px 26px;
        border-radius: 18px;
        background: rgba(8, 16, 34, 0.9);
        border: 1px solid rgba(160, 240, 255, 0.6);
        box-shadow: 0 0 24px rgba(0, 229, 255, 0.35);
        color: var(--fp3d-text);
        font-size: clamp(20px, 4vw, 34px);
        text-align: center;
        z-index: 6;
      }
      .fp3d-mic-err {
        border-color: rgba(255, 90, 106, 0.7);
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
      .fp3d-central-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-central-top > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-central-gear {
        padding: 4px 10px;
        font-size: 12px;
      }
      /* a module's sheet and the ⚙ settings: a glass box in the middle, over a dim backdrop */
      .fp3d-sheet-backdrop {
        position: absolute;
        inset: 0;
        z-index: 7;
        background: rgba(4, 8, 16, 0.35);
      }
      .fp3d-frame-pop {
        width: min(560px, calc(100% - 24px));
      }
      .fp3d-frame-pop.fp3d-frame-wide {
        width: min(960px, calc(100% - 24px));
      }
      .fp3d-frame-big {
        display: block;
        width: 100%;
        max-height: calc(100vh - 160px);
        object-fit: contain;
        border-radius: 12px;
        background: #000;
      }
      .fp3d-frame-days {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-frame-days h4 {
        margin: 0 0 6px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-frame-today h4 {
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-frame-ev {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 10px;
        align-items: baseline;
        padding: 6px 0 6px 12px;
        border-left: 3px solid var(--cal, #37e0ff);
        margin-bottom: 4px;
      }
      .fp3d-frame-time {
        font-variant-numeric: tabular-nums;
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-frame-sum {
        font-size: 15px;
      }
      .fp3d-frame-sum small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-frame-media,
      .fp3d-frame-person {
        display: flex;
        gap: 16px;
        align-items: center;
      }
      .fp3d-frame-cover {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 12px;
        background: #000;
        flex: none;
      }
      .fp3d-frame-weather-sym {
        font-size: 72px;
        line-height: 1;
        flex: none;
      }
      .fp3d-frame-media-text {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-frame-media-text b {
        font-size: 18px;
      }
      .fp3d-frame-media-text span {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-frame-ctl {
        display: flex;
        gap: 8px;
        margin-top: 6px;
      }
      .fp3d-frame-live .fp3d-frame-time {
        color: var(--fp3d-accent, #37e0ff);
        font-weight: 700;
      }
      .fp3d-frame-days h4 {
        cursor: pointer;
      }
      .fp3d-frame-sum em {
        display: block;
        font-style: normal;
        font-size: 13px;
        color: var(--fp3d-muted, #8fa0c0);
        margin-top: 2px;
      }
      .fp3d-frame-new {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-frame-in {
        flex: 1 1 140px;
        min-width: 0;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.06);
        color: inherit;
        font: inherit;
      }
      .fp3d-frame-addbtn {
        align-self: flex-start;
        margin-top: 4px;
      }
      .fp3d-frame-todo {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .fp3d-frame-todoitem {
        display: flex;
        gap: 12px;
        align-items: center;
        padding: 8px 6px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
      }
      .fp3d-frame-todoitem:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-frame-todoitem input {
        width: 22px;
        height: 22px;
        accent-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-frame-done span {
        text-decoration: line-through;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-frame-people {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .fp3d-frame-personrow {
        display: flex;
        gap: 12px;
        align-items: center;
        opacity: 0.6;
      }
      .fp3d-frame-personrow.fp3d-frame-home {
        opacity: 1;
      }
      .fp3d-frame-personrow img,
      .fp3d-frame-initial {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: rgba(255, 255, 255, 0.1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex: none;
      }
      .fp3d-frame-personrow div {
        display: flex;
        flex-direction: column;
      }
      .fp3d-frame-personrow span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-frame-h {
        margin: 10px 0 4px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-frame-wline {
        display: flex;
        gap: 12px;
        align-items: baseline;
        font-size: 18px;
      }
      .fp3d-frame-wline span + span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 14px;
      }
      .fp3d-frame-wline em,
      .fp3d-frame-media-text em {
        font-style: normal;
        color: var(--fp3d-accent, #37e0ff);
        font-size: 14px;
      }
      .fp3d-frame-waste {
        margin: 0;
      }
      .fp3d-frame-fdays {
        display: flex;
        gap: 10px;
        margin-top: 12px;
      }
      .fp3d-frame-fdays div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 8px 4px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-frame-fdays span {
        font-size: 26px;
      }
      .fp3d-frame-fdays small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-frame-live-img {
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }
      .fp3d-sheet {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(440px, calc(100% - 24px));
        max-height: calc(100% - 40px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 14px 16px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(12px);
        z-index: 8;
      }
      .fp3d-sheet header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-sheet-x {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        cursor: pointer;
      }
      .fp3d-sheet-choice,
      .fp3d-sheet-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-sheet-chip {
        min-height: 40px;
        padding: 0 14px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 10%, transparent);
        color: inherit;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
      }
      .fp3d-sheet-chip:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-sheet-row {
        display: flex;
        gap: 6px;
      }
      .fp3d-sheet-input {
        flex: 1;
        min-width: 0;
        min-height: 38px;
        padding: 0 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(0, 0, 0, 0.18);
        color: inherit;
        font: inherit;
      }
      .fp3d-sheet-lines p,
      .fp3d-set-note {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-settings h4 {
        margin: 6px 0 0;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-set-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      .fp3d-set-field {
        display: grid;
        gap: 4px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-set-field select,
      .fp3d-set-field textarea {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(0, 0, 0, 0.18);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
      }
      .fp3d-sheet-gear {
        align-self: flex-start;
        border: 0;
        background: none;
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 13px;
        padding: 4px 0;
        cursor: pointer;
      }
      .fp3d-sheet-gear:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-set-module {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-note {
        position: absolute;
        left: 50%;
        bottom: calc(80px + var(--fp3d-bottom-inset, 0px));
        transform: translateX(-50%);
        max-width: calc(100% - 32px);
        padding: 8px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        color: var(--fp3d-text);
        font-size: 13px;
        box-shadow: var(--fp3d-shadow);
        z-index: 9;
        pointer-events: none;
      }
      /* a camera's new detection as a small picture (#442) */
      .fp3d-campop {
        position: absolute;
        right: 12px;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 64px);
        z-index: 5;
        width: min(360px, 70vw);
        border-radius: 14px;
        overflow: hidden;
        background: rgba(8, 16, 34, 0.9);
        border: 1px solid rgba(255, 120, 120, 0.6);
        box-shadow: 0 0 26px rgba(255, 80, 80, 0.35);
      }
      .fp3d-campop-img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        padding: 0;
        border: 0;
        background: #000;
        cursor: pointer;
      }
      .fp3d-campop-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-campop-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 10px;
        font-size: 13px;
        color: #ffd6d6;
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
      .fp3d-through-live {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .fp3d-through-live > * {
        width: 100%;
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-through-img:fullscreen {
        opacity: 1;
        object-fit: contain;
        background: #000;
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
      .fp3d-holo-media-controls button:disabled {
        opacity: 0.3;
        cursor: default;
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
      .fp3d-holo-meters {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 10px;
      }
      .fp3d-holo-mrow {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-mrow span {
        opacity: 0.8;
      }
      .fp3d-holo-mrow b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-mrow i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-mrow-none {
        visibility: hidden;
      }
      .fp3d-holo-mrow em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-mline {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* a module's richer card: a state line, a second big value, a chain, cells, a hint */
      .fp3d-holo.fp3d-holo-mod-wide {
        width: 236px;
        /* a denser card: darker glass, so its many small values stay readable over a bright room */
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
      }
      .fp3d-holo-mod-wide .fp3d-holo-mrow {
        grid-template-columns: 74px 78px 1fr;
      }
      .fp3d-holo-ping {
        box-shadow:
          0 0 0 2px var(--fp3d-accent, #37e0ff),
          0 0 26px rgba(55, 224, 255, 0.55);
      }
      .fp3d-holo-status {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 4px 8px;
        border-radius: 9px;
        font-size: 13.5px;
        color: var(--st, #37e0ff);
        background: color-mix(in srgb, var(--st, #37e0ff) 14%, transparent);
        border: 1px solid color-mix(in srgb, var(--st, #37e0ff) 45%, transparent);
      }
      .fp3d-holo-status i {
        font-style: normal;
      }
      .fp3d-holo-status span {
        margin-left: auto;
        font-size: 11px;
        color: inherit;
        opacity: 0.8;
        white-space: nowrap;
      }
      .fp3d-holo-mod-main em {
        margin-left: auto;
        display: grid;
        justify-items: end;
        font-style: normal;
        line-height: 1.1;
      }
      .fp3d-holo-mod-main em b {
        font-size: 18px;
      }
      .fp3d-holo-mod-main em small {
        font-size: 10.5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .fp3d-holo-chain {
        display: flex;
        align-items: stretch;
        gap: 3px;
        margin-top: 7px;
      }
      .fp3d-holo-chain > div,
      .fp3d-holo-cells > div {
        flex: 1;
        min-width: 0;
        display: grid;
        padding: 3px 5px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(160, 240, 255, 0.16);
      }
      .fp3d-holo-chain small,
      .fp3d-holo-cells small {
        font-size: 10px;
        opacity: 0.75;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-holo-chain b,
      .fp3d-holo-cells b {
        font-size: 12.5px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-chain s {
        align-self: center;
        text-decoration: none;
        opacity: 0.6;
        font-size: 11px;
      }
      .fp3d-holo-chain-note {
        margin-top: 3px;
        font-size: 11px;
        text-align: right;
        opacity: 0.9;
      }
      .fp3d-holo-cells {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        margin-top: 7px;
      }
      .fp3d-holo-hint {
        margin-top: 6px;
        padding: 4px 7px;
        border-radius: 7px;
        font-size: 11.5px;
        color: var(--hint, #ffc04d);
        background: color-mix(in srgb, var(--hint, #ffc04d) 13%, transparent);
        border-left: 3px solid var(--hint, #ffc04d);
      }
      .fp3d-holo-mrow-fill {
        background: rgba(160, 240, 255, 0.14) !important;
        overflow: hidden;
      }
      .fp3d-holo-mrow-fill s {
        display: block;
        height: 100%;
        border-radius: 2px;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-spark-label {
        margin-top: 6px;
        font-size: 10.5px;
        opacity: 0.7;
      }
      .fp3d-holo-spark-label + .fp3d-holo-spark {
        margin-top: 1px;
      }
      .fp3d-holo-spark {
        display: block;
        width: 100%;
        height: 22px;
        margin-top: 6px;
      }
      .fp3d-holo-spark polyline {
        fill: none;
        stroke-width: 1.6;
        vector-effect: non-scaling-stroke;
        stroke-linejoin: round;
      }
      /* a module's chips (Pool Pro: ball valves and the six-way valve, set by hand) */
      .fp3d-holo-chips {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-chip,
      .fp3d-holo-chip-row button {
        font: inherit;
        font-size: 11.5px;
        color: inherit;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(91, 124, 255, 0.35);
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-holo-chip {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-chip i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-chip.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-chip small {
        opacity: 0.75;
      }
      .fp3d-holo-valve-pos {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",ua);function Vg(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${J(o,Math.round(t))} \xB0C`:"",r=!["off","unavailable","unknown"].includes(e.state);return{text:[fe(o,e),n].filter(Boolean).join(" \xB7 "),on:r}}function ae(o,e){return Math.abs(e)>=1e3?`${J(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function Oh(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Kg=new Set(["rug","stairwell","grid_point","worktop"]);function Gg(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var ha;function Nh(){let o=new URL("./neonplan3d-locate.js?v=d06d1a0b7bb0",new URL(import.meta.url)).href;return ha??=import(o).catch(e=>{throw ha=void 0,e}),ha}var Ug=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function Bh(o){let e=document.createElement("style");e.textContent=Ug;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,r="",i=!0,s=async(c,d={})=>{let u=o().hass;if(u){try{n=await u.callWS({type:"neonplan3d/locate/rec",action:c,...d}),r=""}catch(p){r=p.message??String(p)}a()}},a=()=>{let c=o().building,d=n,u=d?.mark?.room??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${i?"\u25BE":"\u25B8"}</span></h4>`;if(!i){t.innerHTML=p;return}let h=(d?.devices??[]).map(_=>{let m=_.t?Math.round(Date.now()/1e3-_.t):null;return`<div>\u231A ${Et(_.title)}: ${m===null?"<small>noch nicht geh\xF6rt</small>":`${_.rssi} dBm \xB7 ${Et(_.scanner??"")} <small>vor ${m} s</small>`}</div>`}).join(""),f=(c?.floors??[]).map(_=>`<div class="fl">${Et(_.name)}</div>`+_.rooms.map(m=>`<button data-room="${Et(m.id)}" data-name="${Et(m.name)}" class="${u===m.id?"on":""}">${Et(m.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${d?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${r?`<div style="color:#ff8fa3">${Et(r)}</div>`:""}
      ${h||(d?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${d?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${jg(Date.now()/1e3-d.mark.t)}</b> in <b>${Et(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${f}`};t.addEventListener("click",c=>{let d=c.target.closest("button,h4");if(!d)return;let u=d.dataset.a;if(u==="toggle")i=!i,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&Nh().then(f=>f.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function jg(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Et(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var Vh="neonplan3d.print_seen";function Kh(o,e){return o&&!e}function Gh(){try{return localStorage.getItem(Vh)==="1"}catch{return!0}}function Uh(){try{localStorage.setItem(Vh,"1")}catch{}}var pa;function qg(){let o=new URL("./neonplan3d-timetravel.js?v=ab8fab699745",new URL(import.meta.url)).href;return pa??=import(o).catch(e=>{throw pa=void 0,e}),pa}var Rn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),qg().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var Zg={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},Y={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},fa=class extends me{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_printDot:{state:!0},_readyPacks:{state:!0},_shopConnected:{state:!0},_giftLater:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_walking:{state:!0},_overview:{state:!0},_site:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_roomBar:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};offersChecked=!1;watch=new kn(this);otherAlerts={at:0,list:[]};pendingRoom=null;data=new un(this);locateLab=null;tt=new Rn(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._printDot=!1,this._readyPacks=0,this._shopConnected=null,this._giftLater=!1,this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._walking=!1,this._overview=!1,this._site=new URLSearchParams(location.search).get("plan")==="site",this.data.switchPlan(new URLSearchParams(location.search).get("plan")??Y.get("plan")),this._wallMode=Y.get("walls")==="cut"?"cut":"auto",this._explode=Y.get("explode")!=="0",this._keepRoof=Y.get("roof")==="1",this._plain=Y.get("plain")==="1";let e=Y.get("roombar");this._roomBar=e==="rooms"||e==="all"?e:"off";let t=Y.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=Y.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=Y.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let r=Y.get("pinSize");this._pinSize=r==="small"||r==="large"?r:"normal";let i=Y.get("heat");this._heat=i==="temperature"||i==="humidity"||i==="co2"||i==="values"?i:"none";let s=Y.get("theme");this._theme=s==="auto"||s&&Ts.includes(s)?s:"neon";let a=Y.get("clock");this._clock=a==="tl"||a==="tr"||a==="bl"||a==="br"?a:"off";let l=Y.get("accent");this._accent=l&&/^#[0-9a-f]{6}$/i.test(l)?l:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let c=Y.get("floor_stack");this._floorStack=c==="stacked"||c==="single"?c:"dim",this._roomNames=Y.get("room_names")!=="0",this._controlsRight=Y.get("controls")==="right",this._keepView=Y.get("keep_view")==="1",this._angleLock=Y.get("angle_lock")==="1",this._trail=Y.get("trail")==="1",this._cameraWall=!1,this._clean=Y.get("clean")==="1",this._navWrap=Y.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=Y.get("weather")!=="0",this._director=la(),this._micProbe=!1,this._voiceHere=na(),this._screen=oa()}t(e,t){return T(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!gn(this.hass.language)&&jo(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e,e==="extensions"&&this.printOpened(),Ht(e))}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if(this._site){if(!n)return;let r=Ac(n,ce);this.pendingRoom={plan:r.plan,floorId:null,roomId:r.id},this._site=!1,r.plan===this.data.planId?this.requestUpdate():this.pickPlan(r.plan);return}if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,Y.set("walls",e)}setRoomBar(e){this._roomBar=e,Y.set("roombar",e)}setPlain(e){this._plain=e,Y.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,Y.set("roof",e?"1":"0")}setExplode(e){this._explode=e,Y.set("explode",e?"1":"0")}setQuality(e){this._quality=e,Y.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let s=i.furniture.find(a=>a.id===e);s&&t(s,i)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let s=i.placements.find(a=>a.entity_id===e);s&&t(s,i)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(i,s)=>{let[a,l]=ia(s,i.x,i.z,n,r);Object.assign(i,{x:a,z:l})})}turnStep(){return L(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),r=n?.placements.find(u=>u.entity_id===e);if(!n||!r)return y;let i=L(e),s=i==="light",a=i==="camera",l=r.mount==="ceiling",c=i?hn(i,n.height,s||a?r.mount??(a?"wall":"ceiling"):null):1,d=(u,p,h,f,_,m)=>w`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${f}
          max=${_}
          .value=${String(Math.round(p*100)/100)}
          @change=${b=>{let v=parseFloat(b.target.value.replace(",","."));Number.isFinite(v)&&m(Math.min(_,Math.max(f,v)))}}
        />
      </label>`;return w`${s?w`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>w`<option value=${u} ?selected=${u===(r.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:y}
      ${a?w`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${d(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${d(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:y}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??c)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?w`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?we(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:r}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=ia(a,s.x,s.z,n,r);Object.assign(s,{x:l,z:c});let d=Th(a,s,i);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return y;let n=za(this.hass,this.data.building?.settings.units)==="imperial",r=l=>n?Aa(l):String(Math.round(l*100)/100),i=l=>n?Ra(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,c)=>w`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${c}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[l])}
        @change=${d=>{let u=i(d.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(c=>c.id===e));return w`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&Gl(t)?w`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??ue(a,t))}
              @change=${l=>{let c=i(l.target.value)??NaN;Number.isFinite(c)&&c>=0&&this.editFurniture(e,d=>d.mount_y=Math.round(c*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?w`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){let t=this.data.building;if(!t)return;let n=e?null:this.view3d()?.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}openFunSettings(e="fun",t=null){this.setMode("editor");let n=0,r=()=>{let i=this.renderRoot.querySelector("fp3d-editor");i?.openSettings?i.openSettings(e,t):n++<60&&setTimeout(r,100)};this.updateComplete.then(r)}siteBuilding(){return this.watch.site(this.data)}showSite(){this.tt.active&&this.tt.stop(),this._site=!0,this._floorId=null,this._roomId=null,this._mode="view"}planBuildings(){return this.watch.all(this.data)}alertsElsewhere(){if(!this.hass||this.data.plans.length<2)return[];let e=Date.now();if(e-this.otherAlerts.at<2e3)return this.otherAlerts.list;let t=[];for(let[n,r]of this.watch.others)if(n!==this.data.planId)for(let i of ir(this.hass,r).alerts)t.push({plan:n,alert:i});return this.otherAlerts={at:e,list:t},t}alertCounts(){let e=new Map;for(let{plan:t}of this.alertsElsewhere())e.set(t,(e.get(t)??0)+1);return e}pickPlan(e){this._site&&(this._site=!1,this._floorId=null,this._roomId=null),e!==this.data.planId&&(this.tt.active&&this.tt.stop(),Y.set("plan",e),this._floorId=null,this._roomId=null,this.data.switchPlan(e))}showElsewhere(e,t){this.pendingRoom={plan:e,floorId:t.floorId,roomId:t.roomId},this.pickPlan(e)}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!C("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,i)=>T(this.hass,r,i)})}}updated(){this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=this.pendingRoom;if(e&&this.data.planId===e.plan&&this.data.building&&(this.pendingRoom=null,this._floorId=e.floorId??this.data.building.floors.find(n=>ie(n).some(r=>r.id===e.roomId))?.id??null,this._roomId=e.roomId),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&Gi()&&(this.locateLab=Bh(()=>({hass:this.hass,building:this.data.building}))),this.pendingTemplate!==null&&this.hass?.user&&this.data.building){let n=this.pendingTemplate;this.pendingTemplate=null,this.hass.user.is_admin&&this.openFunSettings("cards",n||null)}if(this.ttLinked||!this.data.building||!ln()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let t=new URLSearchParams(location.search).get("tt");t!==null&&C("time_travel")&&this.toggleTimeTravel(t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey);let e=new URLSearchParams(location.search);e.get("tab")==="extensions"&&(this._mode="extensions"),e.get("settings")==="cards"&&(this.pendingTemplate=e.get("template")??"")}pendingTemplate=null;checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,al(this.hass).then(e=>{this._shopConnected=!!e.active;let t=(e.packs??[]).some(n=>!/^(mastershort\.)?fun_|_sample$/.test(n.id));this._newOffers=e.active&&t?il(e.offers??[]).length:0,this._printDot=Kh(!!(e.active&&e.supporter),Gh()),this._mode==="extensions"&&this.printOpened(),this._readyPacks=e.active?sl(e.updates??[]).length+(e.packs??[]).filter(n=>n.installed===null).length:0}).catch(()=>{}))}printOpened(){this._printDot&&(this._printDot=!1,Uh())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!gn(this.hass.language))return y;this.checkOffers();let e=this.data.building,t=this.data.saveState;return w`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?w`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Nr())}></fp3d-mic-probe>`:y}
        ${this._clean&&this._mode==="view"?y:w`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.data.plans.length>1||this.isAdmin&&this.data.plans.length>0?w`<fp3d-plan-picker
                .hass=${this.hass}
                .plans=${this.data.plans}
                .current=${this.data.planId}
                ?admin=${this.isAdmin}
                @plan-pick=${n=>this.pickPlan(n.detail.plan)}
                .alerts=${this.alertCounts()}
                @plan-new=${()=>this.openFunSettings("plans")}
                @plan-manage=${()=>this.openFunSettings("plans")}
                @plan-overview=${()=>this._overview=!0}
                @plan-site=${()=>this.showSite()}
                .site=${this._site}
                .hasSite=${this.data.plans.some(n=>n.site?.on)}
              ></fp3d-plan-picker>`:y}
          ${this._overview?w`<fp3d-plan-overview
                .hass=${this.hass}
                .plans=${this.data.plans}
                .buildings=${this.planBuildings()}
                .current=${this.data.planId}
                @plan-pick=${n=>{this._overview=!1,this.pickPlan(n.detail.plan)}}
                @close=${()=>this._overview=!1}
              ></fp3d-plan-overview>`:y}
          ${this.isAdmin?w`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}${this._readyPacks?w`<span class="fp3d-badge" title=${this.t("ext_badge_ready_hint")}>⬇ ${this.t("ext_badge_ready",{n:this._readyPacks})}</span>`:this._newOffers?w`<span class="fp3d-badge" title=${this.t("offers_dot")}>${this.t("ext_badge_new",{n:this._newOffers})}</span>`:this._printDot?w`<span class="fp3d-badge" title=${this.t("print_dot_hint")}>${this.t("print_dot")}</span>`:y}
                </button>
              </div>`:y}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?w`<button
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
                ${["auto","low","high"].map(n=>w`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${[...Ts,"auto"].map(n=>w`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,Y.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,Y.set("accent",this._accent)}}
                  />
                  ${this._accent?w`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Y.set("accent","")}}
                      >
                        ↺
                      </button>`:y}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(n=>w`<button aria-pressed=${this._clock===n} title=${this.t(`clock_${n}`)} aria-label=${this.t(`clock_${n}`)} @click=${()=>{this._clock=n,Y.set("clock",n)}}>
                      ${n==="off"?this.t("clock_off"):Zg[n]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(n=>w`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,Y.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(n=>w`<button
                      aria-pressed=${this._pinSize===n}
                      @click=${()=>{this._pinSize=n,Y.set("pinSize",n)}}
                    >
                      ${this.t(`pin_size_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>w`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,Y.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?w`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${()=>this.rememberStartView()}
                        @mouseenter=${()=>this._pinHover=!0}
                        @mouseleave=${()=>this._pinHover=!1}
                        @focus=${()=>this._pinHover=!0}
                        @blur=${()=>this._pinHover=!1}
                      >
                        📌
                      </button>
                      ${this.data.building?.settings.start_view?w`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:y}`:y}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,Y.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,Y.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Y.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:y}
          ${this._mode==="editor"&&t!=="idle"?w`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?y:this.renderNotices()}
        ${this.data.error&&!e?w`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?w`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(this._site?this.siteBuilding()??e:e):y}
        ${this.renderGift()}
      </div>
    `}renderGift(){let e="fun_gifts_2026";if(!this.isAdmin||this._giftLater||this._shopConnected===null||!this.data.packsLoaded||Ki.includes("fun_halloween")||C("fun_halloween")&&C("fun_pets"))return y;try{if(localStorage.getItem(`neonplan3d.news.${e}`)==="never")return y}catch{}let t=()=>{try{localStorage.setItem(`neonplan3d.news.${e}`,"never")}catch{}this._giftLater=!0},n=this._shopConnected;return w`<div class="fp3d-gift-veil" @click=${r=>r.target===r.currentTarget&&(this._giftLater=!0)}>
      <div class="fp3d-gift" role="dialog" aria-label=${this.t(n?"gift_title":"gift_title_free")}>
        <div class="fp3d-gift-pic">🎃 👻 🐱 🐶</div>
        <h3>${this.t(n?"gift_title":"gift_title_free")}</h3>
        <p>${this.t(n?"gift_text":"gift_text_free")}</p>
        <div class="fp3d-gift-actions">
          ${n?w`<button class="fp3d-btn fp3d-primary" @click=${()=>(this._giftLater=!0,this.setMode("extensions"))}>⬇ ${this.t("gift_install")}</button>`:w`<a class="fp3d-btn fp3d-primary" href=${Dd(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>this._giftLater=!0}>🎁 ${this.t("gift_register")}</a>`}
          <button class="fp3d-btn" @click=${()=>this._giftLater=!0}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${t}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}renderNotices(){let e=this.data,t=[];for(let{plan:n,alert:r}of this.alertsElsewhere()){let i=this.watch.others.get(n);i&&t.push(w`<div class="fp3d-notice fp3d-notice-error">
          <span>⚠ ${this.t("plan_alert",{plan:yn(this.hass,e.plans,n),text:Nt(this.hass,i,r)})}</span>
          <button class="fp3d-btn" @click=${()=>this.showElsewhere(n,r)}>${this.t("plan_alert_go")}</button>
        </div>`)}if(e.needsRestart&&(e.versionGap==="frontend"?t.push(w`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(w`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(w`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(w`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?w`<div class="fp3d-notices">${t}</div>`:y}renderExtensions(){return this._editorReady?w`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @open-fun-settings=${()=>this.openFunSettings()}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
      @packs-ready=${e=>this._readyPacks=e.detail}
    ></fp3d-extensions>`:($i().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),w`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?w`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .planId=${this.data.planId}
      .plans=${this.data.plans}
      .trash=${this.data.trash}
      .locatePlan=${this.data.locatePlan}
      @plan-pick=${t=>this.pickPlan(t.detail.plan)}
      @plans-changed=${()=>{this.data.reloadPlans()}}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=la()}
      @voice-here=${()=>{this._voiceHere=na(),this._screen=oa()}}
      @mic-probe=${()=>at().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:($i().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),w`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(l=>l.rooms.length))return w`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?w`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let t=e.floors.find(l=>l.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active,i=ot("room_bar")?this._roomBar:"off",s=i!=="off"&&!r,a=i==="off";return w`
      ${this._clean||!a&&e.floors.length<2?y:w`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?w`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(l=>w`<button
                  class="fp3d-chip"
                  aria-pressed=${l.id===this._floorId}
                  @click=${()=>{this._floorId=l.id,this._roomId=null}}
                >
                  ${l.name}
                </button>`)}
              ${a?w`<span class="fp3d-sep"></span>`:y}`:y}
        ${(a?n:[]).flatMap(l=>[n.length>1&&ie(l).some(c=>c.name.trim())?w`<span class="fp3d-nav-floor">${l.name}</span>`:y,...ie(l).filter((c,d,u)=>c.name.trim()&&!(c.outdoor&&u.findIndex(p=>p.outdoor&&p.area_id===c.area_id&&p.name===c.name)<d)).map(c=>w`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${c.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=l.id),this._roomId=c.id===this._roomId?null:c.id}}
            >
              ${c.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,Y.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${r?"fp3d-tt":""} ${s?"fp3d-has-bar":""}">
        <fp3d-view3d
          class="fp3d-body"
          @walk-change=${l=>this._walking=l.detail.walking}
          .pivotMark=${this._pinHover}
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .planId=${this._site?null:this.data.planId}
          .noSave=${this._site}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!r}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,Y.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .plain=${this._plain}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!r}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${l=>this._selFurniture=l.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${l=>this._selDevice=l.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${l=>{this._floorId=l.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId&&!this._walking?w`<fp3d-room-panel
              ?walk=${!0}
              @walk-here=${()=>this.view3d()?.walkHere()}
              class="fp3d-room-panel"
              @camera-look=${l=>this.view3d()?.lookThrough(l.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(l=>ie(l)).find(l=>l.id===this._roomId)??null}
              .floor=${e.floors.find(l=>ie(l).some(c=>c.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${pn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${l=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,l.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${s?w`<fp3d-room-bar
              class="fp3d-room-bar"
              .hass=${this.hass}
              .building=${e}
              .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
              .roomId=${this._roomId}
              ?favorites=${i==="all"}
              @room-pick=${l=>{e.floors.length>1&&(this._floorId=l.detail.floorId),this._roomId=l.detail.roomId===this._roomId?null:l.detail.roomId}}
            ></fp3d-room-bar>`:y}
        ${this.tt.session?w`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${this._clean?y:w`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?w`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${ot("room_bar")?w`<div class="fp3d-seg" title=${this.t("room_bar_hint")}>
                <button aria-pressed=${this._roomBar==="off"} @click=${()=>this.setRoomBar("off")}>${this.t("room_bar_none")}</button>
                <button aria-pressed=${this._roomBar==="rooms"} @click=${()=>this.setRoomBar("rooms")}>${this.t("room_bar_rooms")}</button>
                <button aria-pressed=${this._roomBar==="all"} @click=${()=>this.setRoomBar("all")}>${this.t("room_bar_all")}</button>
              </div>`:y}
          ${e.floors.length>1&&!this._floorId?w`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:y}
          ${!this._floorId&&e.settings.roof.type!=="none"?w`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:y}
          ${e.floors.length>1&&this._floorId?w`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(l=>w`<button
                      aria-pressed=${this._floorStack===l}
                      @click=${()=>{this._floorStack=l,Y.set("floor_stack",l)}}
                    >
                      ${this.t(`floor_stack_short_${l}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(l=>w`<button
                  aria-pressed=${this._heat===l}
                  @click=${()=>{this._heat=l,Y.set("heat",l)}}
                >
                  ${this.t(l==="none"?"heat_off":`heat_short_${l}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Y.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,Y.set("trail",this._trail?"1":"0")}}
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
            @click=${()=>{this._weather=!this._weather,Y.set("weather",this._weather?"1":"0")}}
          >
            ${C("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:y}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${C("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?w`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:y}
        </div>`}
        ${this._furnish?w`<div class="fp3d-furnish-bar">
              ${this._selFurniture?w`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,l=>l.mirror=!l.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?w`<span>${G(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:w`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:y}
      </div>
    `}static styles=[Ee,Fe,ke`
      .fp3d-gift-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-gift {
        max-width: 440px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid #ff9a3c;
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(255, 154, 60, 0.3);
        text-align: center;
      }
      .fp3d-gift-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-gift h3 {
        margin: 10px 0 6px;
      }
      .fp3d-gift p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-gift-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      /* dvh only where the browser knows it: a line with var() is not dropped while it is read, so a WebView without
         dvh (Chrome before 108, the Fire 7) lost the height altogether and the 3D view stayed empty (idea: CasaNeon) */
      @supports (height: 100dvh) {
        :host {
          height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        }
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
        /* the header's menus (the floor plan picker) open over the editor's tool bar and the 3D view below */
        position: relative;
        z-index: 30;
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
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
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
      /* phones: version and grow move with it */
      @media (max-width: 700px) {
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
      /* the room bar: above the switches, beside the view's own buttons (search, eye, microphone) – nothing moves for it;
         beside an open room panel */
      .fp3d-room-bar {
        position: absolute;
        left: 148px;
        right: 12px;
        bottom: 56px;
      }
      .fp3d-side-right .fp3d-room-bar {
        left: 12px;
        right: 148px;
      }
      /* the eye tidied the switches away: the room bar sits at the bottom */
      .fp3d-clean .fp3d-room-bar {
        bottom: 12px;
      }
      .fp3d-room-open .fp3d-room-bar {
        right: calc(14px + min(360px, calc(100% - 28px)) + 10px);
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-open .fp3d-room-bar {
          display: none;
        }
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
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-seg-label {
        display: inline-flex;
        align-items: center;
        padding: 0 4px 0 8px;
        opacity: 0.75;
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",fa);function Gr(o,e){let t=e?.trim(),n=o?.card_templates;return t?n?.find(r=>r.id===t)??n?.find(r=>r.aliases?.includes(t)):void 0}var Yg=["fill","height","fullscreen_button","plan"];function ma(o,e){let t=Gr(e,o.template);if(!t)return o;let n=Object.fromEntries(Yg.filter(r=>o[r]!==void 0).map(r=>[r,o[r]]));return{...t.config,...n,screen:t.config.screen||t.name,type:o.type,template:o.template}}function Ur(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return r<=i?s>=r&&s<i:s>=r||s<i}var jh;function qh(){let o=new URL("./neonplan3d-card-editor.js?v=db254f2e2d70",new URL(import.meta.url)).href;return jh??=import(o),jh}function Zh(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}function Xg(o){let e=o;for(let t=0;e&&t<40;t++){if(e.localName==="hui-grid-section")return!0;e=e.parentElement??e.getRootNode().host??null}return!1}var ga=class extends me{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_walking:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0},_stretch:{state:!0}};yaml=null;appliedTemplate="";roomApplied=!1;cleanTimer;cellObserver=null;idleTimer;nightTimer;data=new un(this);watch=new kn(this);yamlPlan=null;tt=new Rn(this);constructor(){super(),this._roomId=null,this._walking=!1,this._floorId=void 0,this._walls=Zh(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1,this._stretch=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!C("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(r,i)=>T(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this.homeRoom(),this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};preview=!1;connectedCallback(){super.connectedCallback(),this.preview||Ht("card"),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.cellObserver??=new ResizeObserver(()=>{let e=this._config?.height??420,t=!this._config?.fill&&this.clientHeight>e+4&&Xg(this);t!==this._stretch&&(this._stretch=t)}),this.cellObserver.observe(this),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Ur(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.cellObserver?.disconnect(),this.cellObserver=null,this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await qh(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this.yaml=e,e.plan!==this.yamlPlan&&(this.yamlPlan=e.plan,this.roomApplied=!1,this._floorId=void 0,this._roomId=null,this.data.switchPlan(e.plan==="site"?ce:e.plan??null)),this.appliedTemplate=this.templateKey(),this.applyConfig(ma(e,this.data.building))}templateKey(){let e=Gr(this.data.building,this.yaml?.template);return e?JSON.stringify([e.name,e.config]):""}applyConfig(e,t){let n=r=>!t||JSON.stringify(t[r])!==JSON.stringify(e[r]);this._config=e,n("floor")&&(this._floorId=void 0),(n("room")||n("rooms"))&&(this.roomApplied=!1),n("rooms")&&(this._floorId=void 0),n("walls")&&(this._walls=Zh()),n("heatmap")&&(this._heat=null),n("explode")&&(this._explode=null),this._orbit=!1,this._night=Ur(e.night,this.hass),n("controls_hidden")&&(this._clean=e.controls_hidden===!0),(n("controls_hide_after")||n("controls_hidden"))&&this.armClean(),(n("idle_return")||n("idle_orbit"))&&this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(this.yaml?.template){let t=this.templateKey();t!==this.appliedTemplate&&(this.appliedTemplate=t,this.applyConfig(ma(this.yaml,this.data.building),this._config))}if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),gn(this.hass.language)||jo(this.hass.language).then(()=>this.requestUpdate());let t=Ur(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get shownRooms(){return yr(this.data.building,this._config?.rooms)}get roomsLocked(){return this.shownRooms.length>0&&this._config?.rooms_lock!==!1}get roomFloors(){let e=new Set(this.shownRooms);return(this.data.building?.floors??[]).filter(t=>ie(t).some(n=>e.has(n.id))).map(t=>t.id)}homeRoom(){if(this._config?.room)return this._config.room;let e=this.shownRooms;return e.length===1&&this._config?.room_panel!==!1?e[0]:null}allowed(e){return!e||!this.roomsLocked||this.shownRooms.includes(e)}roomsOf=null;shownBuilding(e){let t=this.shownRooms;if(!t.length)return e;let n=t.join(",");return(this.roomsOf?.from!==e||this.roomsOf.key!==n)&&(this.roomsOf={from:e,key:n,to:kr(e,t)}),this.roomsOf.to}get canSwitch(){return this.shownRooms.length?this.roomFloors.length>1:!this._config?.floor||this.thumbs}get thumbs(){return this.shownRooms.length?!1:this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,t=this._floorId===void 0?this._config?.floor??null:this._floorId,n=this.roomFloors;return this.shownRooms.length?n.length===1?n[0]:t&&n.includes(t)?t:null:e&&e.floors.length===1?e.floors[0].id:e?.floors.some(r=>r.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}get isSite(){return this._config?.plan==="site"}updated(){this.isSite&&this.data.plans.length>1&&this.watch.watch(this.hass,this.data)}render(){if(this.hass&&!gn(this.hass.language))return y;let e=this.isSite?this.watch.site(this.data)??this.data.building:this.data.building,t=this._config?.height??420,n=this._config,r=e?this.homeRoom():null;!this.roomApplied&&e&&r&&(this.roomApplied=!0,e.floors.some($=>ie($).some(E=>E.id===r))&&(this._roomId=r));let i=this.shownRooms,s=i.length===1?e?.floors.flatMap($=>ie($)).find($=>$.id===i[0])?.area_id??null:null,a=this.currentFloor(),l=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!a&&(e?.floors.length??0)>1,c=$=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes($),d=["temperature","humidity","co2"].filter($=>c($)),u=this._walls??n?.walls??"auto",p=this._heat??n?.heatmap??"none",h=this._explode??n?.explode??!0,f=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":this._stretch?"100%":`${t}px`,_=!!e&&!this._clean&&(l||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),m=this.tt.active,b=!!e&&!!n?.room_bar&&ot("room_bar")&&!m&&!(this._roomId&&n.room_panel!==!1),v=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,g=$=>T(this.hass,$),k=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return w`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${k?`--fp3d-accent:${k}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${m?"fp3d-tt":""}" style="height:${f}">
        ${e&&e.floors.some($=>$.rooms.length)?w`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .planId=${this.isSite?null:this.data.planId}
              .noSave=${this.isSite}
              .rooms=${i.length?i:null}
              .packs=${this.data.packs}
              .floorId=${a}
              .roomId=${this._roomId}
              .wallMode=${u}
              .explode=${h}
              .keepRoof=${n?.roof_fade===!1}
              .plain=${n?.plain===!0}
              .hideRoof=${n?.roof===!1||i.length>0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .pinSize=${this._config?.marker_size??"normal"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              @walk-change=${$=>this._walking=$.detail.walking}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map(($,E)=>({id:`card_${E}`,...$}))??null}
              .heatMode=${p}
              .theme=${this._config?.theme??"neon"}
              .clock=${this._config?.clock??null}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .controlsRight=${n?.controls_side==="right"}
              .keepView=${n?.keep_view===!0}
              .angleLock=${n?.angle_lock===!0}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .householdCard=${n?.household_card!==!1}
              .alertJump=${!!n?.alert_jump}
              .director=${!!n?.director}
              .voice=${!!n?.voice}
              .screen=${n?.screen?.trim()||null}
              .template=${n?.template?.trim()||null}
              .viewKind=${this.preview?"preview":"card"}
              .voiceArea=${n?.voice_area?.trim()||s}
              @open-extensions=${()=>this.openDashboard("/neonplan3d?tab=extensions")}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              .cameraWall=${this._cameraWall&&!m}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${v}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${m?`--fp3d-bottom-inset: ${_?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:_?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${$=>{if(this.allowed($.detail.roomId)){if(this.canSwitch&&(e?.floors.length??0)>1&&$.detail.floorId&&this.currentFloor()!==$.detail.floorId){if(this.roomsLocked&&!this.roomFloors.includes($.detail.floorId))return;this._floorId=$.detail.floorId,this._roomId=null;return}$.detail.roomId&&(this._roomId=$.detail.roomId===this._roomId?null:$.detail.roomId)}}}
              @floor-tap=${$=>{this.roomsLocked&&$.detail.floorId&&!this.roomFloors.includes($.detail.floorId)||(this._floorId=$.detail.floorId,this._roomId=null)}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:w`<p class="fp3d-card-msg">${this.data.error??(e?T(this.hass,"no_building"):T(this.hass,"loading"))}</p>`}
        ${e&&n?.template&&!Gr(e,n.template)?w`<div class="fp3d-card-tpl-missing">${T(this.hass,"card_template_missing",{name:n.template})}</div>`:y}
        ${b?w`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${_?54:8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(e)}
              .floorId=${a}
              .roomId=${this._roomId}
              ?favorites=${n?.room_bar_favorites===!0}
              @room-pick=${$=>{if(this.allowed($.detail.roomId)){if($.detail.floorId!==this.currentFloor()){if(!this.canSwitch)return;this._floorId=$.detail.floorId}this._roomId=$.detail.roomId===this._roomId?null:$.detail.roomId}}}
            ></fp3d-room-bar>`:y}
        ${this._roomId&&e&&this._config?.room_panel!==!1&&!this._walking?w`<fp3d-room-panel
              ?walk=${this._config?.walk!==!1}
              @walk-here=${()=>this.view3d()?.walkHere()}
              @camera-look=${$=>this.view3d()?.lookThrough($.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${m}
              .room=${e.floors.flatMap($=>ie($)).find($=>$.id===this._roomId)??null}
              .floor=${e.floors.find($=>ie($).some(E=>E.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${pn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${$=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,$.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${_&&e?w`<div class="fp3d-card-controls">
              ${l?w`<button class="fp3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:y}
              ${n?.time_travel?w`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${m} title=${g("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${C("time_travel")?"\u23EA":"\u{1F512}"} ${g("tt_chip")}
                  </button>`:y}
              ${n?.camera_wall?w`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${g("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${g("cameras_short")}</button>`:y}
              ${c("walls")?w`<div class="fp3d-seg">
                    <button aria-pressed=${u==="auto"} @click=${()=>this.setWalls("auto")}>${g("walls_auto")}</button>
                    <button aria-pressed=${u==="cut"} @click=${()=>this.setWalls("cut")}>${g("walls_cut")}</button>
                  </div>`:y}
              ${c("floors")&&e.floors.length>1&&!a?w`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:y}
              ${d.length?w`<div class="fp3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...d].map($=>w`<button aria-pressed=${p===$} @click=${()=>this._heat=$}>
                          ${g($==="none"?"heat_off":`heat_short_${$}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?w`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?w`<button class="fp3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?w`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?w`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
      </div>
    </ha-card>`}static styles=[Ee,Fe,ke`
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
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
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
      /* the dashboard button: after the rule above, so its own width wins and, beside the full screen button, it
         steps to the left instead of covering it (D1002) */
      .fp3d-card-full.fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-full.fp3d-card-dash-2 {
        right: 56px;
      }
      /* full screen made by the card itself (iPad, the app on iOS): over the whole page */
      ha-card.fp3d-pseudo-full {
        position: fixed;
        inset: 0;
        z-index: 9999;
        height: 100vh !important;
        max-height: none !important;
        border-radius: 0;
      }
      @supports (height: 100dvh) {
        ha-card.fp3d-pseudo-full {
          height: 100dvh !important;
        }
      }
      /* a block, so the dashboard's grid cell gives it its height (and the card can measure it, #926) */
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
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
      .fp3d-card-tpl-missing {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 40px);
        padding: 6px 12px;
        border-radius: 10px;
        background: var(--fp3d-chrome-solid, rgba(10, 16, 30, 0.92));
        border: 1px solid rgba(255, 170, 60, 0.6);
        color: var(--fp3d-text, #fff);
        font-size: 13px;
        z-index: 5;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      /* beside the view's own buttons (search, eye) at the bottom left: nothing moves for the room bar */
      .fp3d-card-room-bar {
        position: absolute;
        left: 148px;
        right: 10px;
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",ga);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:T(void 0,"card_name"),description:T(void 0,"card_description"),preview:!1})}Ea();Or();
