Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Da=new URL(import.meta.url),Fa=Da.searchParams.get("v"),Ha=o=>new URL(`./fonts/${o}${Fa?`?v=${Fa}`:""}`,Da).href,Ca="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function La(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ha("figtree.woff2")}) format("woff2");unicode-range:${Ca}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ha("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Ca}}`,document.head.append(o)}function Oa(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function yh(o,e){return String(Number(o.toFixed(e)))}function Na(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),r=n-i*12,s=yh(r,e>=2?1:0);return i?r<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function Wa(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=t;for(let l of t.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];r=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!r||/[^\s+]/.test(a)?null:i}function Cn(o){let e=o?.locale?.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let t=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return t?{hourCycle:t==="h11"||t==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var To=globalThis,Ao=To.ShadowRoot&&(To.ShadyCSS===void 0||To.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,er=Symbol(),Ba=new WeakMap,Dn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ao&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ba.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ba.set(t,e))}return e}toString(){return this.cssText}},Va=o=>new Dn(typeof o=="string"?o:o+"",void 0,er),ce=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Dn(t,o,er)},Ka=(o,e)=>{if(Ao)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=To.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},tr=Ao?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Va(t)})(o):o;var{is:xh,defineProperty:kh,getOwnPropertyDescriptor:$h,getOwnPropertyNames:Sh,getOwnPropertySymbols:Mh,getPrototypeOf:Ih}=Object,Ro=globalThis,Ua=Ro.trustedTypes,Ph=Ua?Ua.emptyScript:"",Eh=Ro.reactiveElementPolyfillSupport,Ln=(o,e)=>o,nr={toAttribute(o,e){switch(e){case Boolean:o=o?Ph:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ja=(o,e)=>!xh(o,e),Ga={attribute:!0,type:String,converter:nr,reflect:!1,useDefault:!1,hasChanged:ja};Symbol.metadata??=Symbol("metadata"),Ro.litPropertyMetadata??=new WeakMap;var Je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ga){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&kh(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=$h(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ga}static _$Ei(){if(this.hasOwnProperty(Ln("elementProperties")))return;let e=Ih(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ln("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ln("properties"))){let t=this.properties,n=[...Sh(t),...Mh(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(tr(i))}else e!==void 0&&t.push(tr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ka(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:nr).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:nr;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??ja)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[Ln("elementProperties")]=new Map,Je[Ln("finalized")]=new Map,Eh?.({ReactiveElement:Je}),(Ro.reactiveElementVersions??=[]).push("2.1.2");var cr=globalThis,qa=o=>o,Fo=cr.trustedTypes,Za=Fo?Fo.createPolicy("lit-html",{createHTML:o=>o}):void 0,tl="$lit$",ft=`lit$${Math.random().toFixed(9).slice(2)}$`,nl="?"+ft,zh=`<${nl}>`,Dt=document,Nn=()=>Dt.createComment(""),Wn=o=>o===null||typeof o!="object"&&typeof o!="function",dr=Array.isArray,Th=o=>dr(o)||typeof o?.[Symbol.iterator]=="function",or=`[ 	
\f\r]`,On=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ya=/-->/g,Xa=/>/g,Ht=RegExp(`>|${or}(?:([^\\s"'>=/]+)(${or}*=${or}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qa=/'/g,Ja=/"/g,ol=/^(?:script|style|textarea|title)$/i,ur=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=ur(1),et=ur(2),Ub=ur(3),Lt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),el=new WeakMap,Ct=Dt.createTreeWalker(Dt,129);function il(o,e){if(!dr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Za!==void 0?Za.createHTML(e):e}var Ah=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=On;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===On?d[1]==="!--"?s=Ya:d[1]!==void 0?s=Xa:d[2]!==void 0?(ol.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Ht):d[3]!==void 0&&(s=Ht):s===Ht?d[0]===">"?(s=i??On,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Ht:d[3]==='"'?Ja:Qa):s===Ja||s===Qa?s=Ht:s===Ya||s===Xa?s=On:(s=Ht,i=void 0);let h=s===Ht&&o[a+1].startsWith("/>")?" ":"";r+=s===On?l+zh:u>=0?(n.push(c),l.slice(0,u)+tl+l.slice(u)+ft+h):l+ft+(u===-2?a:h)}return[il(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Bn=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=Ah(e,t);if(this.el=o.createElement(c,n),Ct.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ct.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(tl)){let p=d[s++],h=i.getAttribute(u).split(ft),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:b[2],strings:h,ctor:b[1]==="."?rr:b[1]==="?"?sr:b[1]==="@"?ar:rn}),i.removeAttribute(u)}else u.startsWith(ft)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(ol.test(i.tagName)){let u=i.textContent.split(ft),p=u.length-1;if(p>0){i.textContent=Fo?Fo.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],Nn()),Ct.nextNode(),l.push({type:2,index:++r});i.append(u[p],Nn())}}}else if(i.nodeType===8)if(i.data===nl)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(ft,u+1))!==-1;)l.push({type:7,index:r}),u+=ft.length-1}r++}}static createElement(e,t){let n=Dt.createElement("template");return n.innerHTML=e,n}};function on(o,e,t=o,n){if(e===Lt)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=Wn(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=on(o,i._$AS(o,e.values),i,n)),e}var ir=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Dt).importNode(t,!0);Ct.currentNode=i;let r=Ct.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Vn(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new lr(r,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=Ct.nextNode(),s++)}return Ct.currentNode=Dt,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Vn=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=on(this,e,t),Wn(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Th(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Wn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Dt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Bn.createElement(il(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new ir(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=el.get(e.strings);return t===void 0&&el.set(e.strings,t=new Bn(e)),t}k(e){dr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(Nn()),this.O(Nn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=qa(e).nextSibling;qa(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=on(this,e,t,0),s=!Wn(e)||e!==this._$AH&&e!==Lt,s&&(this._$AH=e);else{let a=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=on(this,a[n+l],t,l),c===Lt&&(c=this._$AH[l]),s||=!Wn(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},rr=class extends rn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},sr=class extends rn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},ar=class extends rn{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=on(this,e,t,0)??y)===Lt)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},lr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){on(this,e)}};var Rh=cr.litHtmlPolyfillSupport;Rh?.(Bn,Vn),(cr.litHtmlVersions??=[]).push("3.3.3");var rl=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new Vn(e.insertBefore(Nn(),r),r,void 0,t??{})}return i._$AI(o),i};var pr=globalThis,ae=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rl(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Lt}};ae._$litElement$=!0,ae.finalized=!0,pr.litElementHydrateSupport?.({LitElement:ae});var Fh=pr.litElementPolyfillSupport;Fh?.({LitElement:ae});(pr.litElementVersions??=[]).push("4.2.2");var fe="main",hr=o=>o&&o!==fe?{plan:o}:{};async function Ho(o,e){return o.callWS({type:"neonplan3d/building/get",...hr(e)})}async function Kn(o,e,t,n){let i=r=>o.callWS({type:"neonplan3d/building/save",building:e,...hr(t),...r&&n!==void 0&&n>=0?{base_revision:n}:{}});try{return(await i(!0)).revision}catch(r){if(n===void 0||!/extra keys not allowed.*base_revision/i.test(String(r?.message??r)))throw r;return(await i(!1)).revision}}function sl(o){return!!o&&typeof o=="object"&&o.code==="stale_plan"}function al(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision),{type:"neonplan3d/building/subscribe",...hr(t)})}function ll(o,e){return o.connection.subscribeMessage(t=>e(t.plan??fe,t.revision),{type:"neonplan3d/building/subscribe",plan:"*"})}async function cl(o){try{return await o.callWS({type:"neonplan3d/plans/list"})}catch{return{plans:[],trash:[],locate_plan:fe}}}function dl(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/plans/subscribe"})}function fr(o,e,t,n,i,r){return o.connection.subscribeMessage(s=>{"announce"in s?t?.(s.announce):"reload"in s?n?.(s.reload):"style"in s?i?.(s.style):typeof s.text=="string"&&e(s)},{type:"neonplan3d/voice/subscribe",...t?{announce:!0}:{},...n?{reload:!0}:{},...i?{style:!0}:{},...r?{view:r}:{}})}async function ul(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function pl(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function hl(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Hh="neonplan3d.seenOffers";function fl(o){let e=[];try{e=JSON.parse(localStorage.getItem(Hh)??"[]")}catch{}return o.filter(t=>!e.includes(t.id))}var Ch="neonplan3d.seenUpdates";function ml(o){let e=[];try{e=JSON.parse(localStorage.getItem(Ch)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function gl(o){return o.callWS({type:"neonplan3d/license/get"})}var Dh="4.0.1",Lh="neonplan3d-diagnostics";var Oh="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|counter|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|sun|switch|text|time|timer|todo|update|vacuum|valve|water_heater|weather|zone",Nh=[[/\b(?:https?|wss?|file|blob|data|ftp):[^\s'"<>)\]]*/gi,"<url>"],[/\beyJ[\w-]+\.[\w-]+\.[\w-]+/g,"<token>"],[/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,"<email>"],[/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b/g,"<ip>"],[/\b[0-9a-f]{1,4}(?::[0-9a-f]{0,4}){2,7}\b/gi,"<ip>"],[new RegExp(`\\b(?:${Oh})\\.[a-z0-9_]+\\b`,"g"),"<entity>"],[/\b[a-z][a-z0-9_]*\.[a-z0-9]*_[a-z0-9_]*\b/g,"<entity>"],[/\b[0-9a-f]{16,}\b/gi,"<id>"]];function Wh(o){let e=String(o??"");for(let[t,n]of Nh)e=e.replace(t,n);return e.replace(/\s+/g," ").trim().slice(0,200)}var Bh=/(neonplan3d[\w-]*\.js)(?:\?[^:\s)]*)?:(\d+):(\d+)/;function yl(o,e,t,n){let i=Bh.exec(o??"");if(i)return`${i[1]}:${i[2]}:${i[3]}`;let r=/(neonplan3d[\w-]*\.js)(?:\?|$)/.exec(e??"");return r?`${r[1]}:${t??0}:${n??0}`:null}function br(o,e,t){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(o)||/Macintosh/.test(o)&&t>1?"tablet":/iPhone|iPod|Windows Phone/.test(o)?"phone":/Android/.test(o)?/Mobile/.test(o)&&e<600?"phone":"tablet":t>0&&e>0&&e<500?"phone":"desktop"}function Vh(o){let e=[[/Edg(?:e|A|iOS)?\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/SamsungBrowser\/(\d+)/,"Samsung"],[/Silk\/(\d+)/,"Silk"],[/(?:Firefox|FxiOS)\/(\d+)/,"Firefox"],[/CriOS\/(\d+)/,"Chrome"],[/; wv\).*Chrome\/(\d+)/,"WebView"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+)[\d.]* (?:Mobile\/\w+ )?Safari/,"Safari"]];for(let[t,n]of e){let i=t.exec(o);if(i)return`${n} ${i[1]}`}return/AppleWebKit/.test(o)&&/iPhone|iPad|Macintosh/.test(o)?"WebKit":"other"}function Kh(o,e=0){let t;return(t=/Android (\d+)/.exec(o))?`Android ${t[1]}`:(t=/iPad.*? OS (\d+)/.exec(o))?`iPadOS ${t[1]}`:(t=/(?:iPhone|iPod).*? OS (\d+)/.exec(o))?`iOS ${t[1]}`:/Macintosh/.test(o)?e>1?"iPadOS":"macOS":(t=/Windows NT (\d+)/.exec(o))?`Windows ${t[1]}`:/CrOS/.test(o)?"ChromeOS":/Linux/.test(o)?"Linux":"other"}function Uh(o){let e=o??"";return e.trim()?/SwiftShader|llvmpipe|Software|Mali-[4T]|Mali-G(?:31|51|52|57)\b|Adreno[^\d]*[2-5]\d\d\b|PowerVR|Vivante|VideoCore|\bGC\d{3,4}\b|Intel.*\bHD Graphics(?:[2-5]\d{3})?\b/i.test(e)?"low":/RTX|GTX|GeForce|Quadro|Radeon (?:RX|Pro)|Apple (?:M\d|GPU)|Adreno[^\d]*[67]\d\d\b|Mali-G7\d|Iris Xe|Intel.*Arc/i.test(e)?"high":"mid":null}var xl,bl=!1,gt=!1,mr,mt={},Co=0,sn=0,kl=null,$l=null,Sl=null,tt=[],gr=new Set;function _r(){return gt}function Ml(o){return gr.add(o),()=>gr.delete(o)}function Il(o){xl=o,!bl&&(bl=!0,window.addEventListener(Lh,e=>{let t=!!e.detail?.enabled;zl(t)}),vr())}function Ot(o){gt&&(mt[o]=(mt[o]??0)+1)}function Pl(o){if(!gt)return;o.fps>0&&(Co+=o.fps,sn++),kl=o.low;let e=window.devicePixelRatio||1;$l=Math.round(o.pixelRatio/e*100)/100,o.gpu!==void 0&&(Sl=Uh(o.gpu))}function El(o,e){if(!e)return;let t=Wh(o);if(!t)return;let n=tt.find(i=>i.msg===t&&i.where===e);n?n.count++:tt.length<20&&tt.push({msg:t,where:e,count:1,version:Dh})}function _l(o){let e=o.error,t=e?`${e.name}: ${e.message}`:o.message;El(t,yl(e?.stack,o.filename,o.lineno,o.colno))}function vl(o){let e=o.reason;e instanceof Error&&El(`${e.name}: ${e.message}`,yl(e.stack))}function wl(){vr()}function zl(o){if(o!==gt){gt=o,o?(window.addEventListener("error",_l),window.addEventListener("unhandledrejection",vl),window.addEventListener("pagehide",wl),mr=setInterval(()=>{vr()},6e5)):(window.removeEventListener("error",_l),window.removeEventListener("unhandledrejection",vl),window.removeEventListener("pagehide",wl),clearInterval(mr),mr=void 0,mt={},Co=sn=0,tt=[]);for(let e of gr)e(o)}}function Gh(){let o=navigator.userAgent,e=navigator.maxTouchPoints||0,t=Math.min(screen.width||0,screen.height||0);return{device:br(o,t,e),browser:Vh(o),os:Kh(o,e),low_end:kl,render_scale:$l,fps:sn?Math.round(Co/sn*10)/10:null,fps_n:sn,gpu_tier:Sl,views:{...mt}}}async function vr(){let o=xl;if(!o)return;let e={type:"neonplan3d/diagnostics/client"};gt&&(e.client=Gh(),e.errors=tt);let t=mt,n=tt;gt&&(mt={},Co=sn=0,tt=[]);try{let i=await o.callWS(e);zl(!!i?.enabled)}catch{if(gt){for(let[i,r]of Object.entries(t))mt[i]=(mt[i]??0)+r;tt=[...n,...tt].slice(0,20)}}}function jh(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function xr(o){let e=ve(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(jh).length>=2}function kr(o){let e=o?.parts.find(t=>t.spin==="y"||t.spin==="z");return e?e.spin:null}function Tl(o=new Date){let e=o.getFullYear(),t=o.getMonth();if(t===0&&o.getDate()<=6)return 4;if(t<10)return 0;let n=new Date(e,t,o.getDate()).getTime(),i=new Date(e,11,24),r=new Date(e,11,24-i.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=r-(4-l)*s-3600*1e3&&(a=l);return a}var Al=[],yr=new Map,Rl=0;function Fl(o){Al=o,yr=new Map(o.flatMap(e=>e.items.map(t=>[qh(e.id,t.id),t]))),Rl++}function bt(){return Al}function an(){return Rl}function qh(o,e){return`pack:${o}:${e}`}function _t(o){return o.startsWith("pack:")}function Do(o){return _t(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function ln(o){return o==="robot_vacuum"||_t(o)&&o.endsWith(":robot_vacuum")}function Zh(o){return o.z>.05}function Hl(o){let e=(o?.parts??[]).filter(t=>t.shape==="cyl"&&Zh(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Cl(o){return _t(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var Yh={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Dl(o){return ve(o)?.parts.find(e=>e.screen)}function ve(o){if(!_t(o))return;let e=yr.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=Yh[t];return i?yr.get(`pack:${i}:${n.join(":")}`):void 0}function Ll(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}var Xh={architecture:"Architecture & Fit-out",balcony:"Balcony & Small Spaces",bath:"Bathroom",cabinet_kit:"Cabinets & Shelves \u2013 Kit",deco:"Decor & Plants",dining_hall:"Dining Room & Hallway",fun_halloween:"Fun Pack: Halloween",fun_winter:"Fun Pack: Winter & Christmas",fun_pets:"Fun Pack: Pets",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside",pro_heat:"Pro: Heat Pro",pro_household:"Pro: Household Pro",frames:"Digital Picture Frames",homelab:"Homelab & Workshop",announce:"Module: Announcements",voice_answers:"Module: The house answers",window_watch:"Module: Window watch"};function Ol(o,e){if(e.split("-")[0]==="de")return o.name;let t=o.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),i=Xh[n?t.slice(0,-7):t];return i?n?`${i} \u2013 Sampler`:i:o.name.replace(/^Modul:/,"Module:").replace(/^Fun-Pack:/,"Fun Pack:")}var Qh=.005;function me(o,e){let t=ve(e.type);if(e.mount_y!=null)return e.mount_y;let n=Bl(e,o.height);if(n!==null)return n;if(e.type==="lamp_wall")return Nl;if(Lo.has(e.type))return Math.max(0,o.height-Oo(e.type,e.h));if(e.type==="led_strip"){let i=o.rooms.find(s=>s.points.length>=3&&V([e.x,e.z],s.points)),r=typeof i?.ceiling_height=="number"&&i.ceiling_height>0?i.ceiling_height:o.height;return Math.max(0,r-.04-Math.max(.02,e.h))}switch(t?.mount){case"surface":return wr(o,e)+No(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h-Qh);default:return t?wr(o,e):Wl(e)||wr(o,e)}}function wr(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>V([e.x,e.z],n.points))?0:nt(o,e.x,e.z)}var qe={field:null,size:1,right:0,up:0};var Ul=["rain","snow","clouds","lightning","sky"];var Mr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Ir(o){return o==="hedge"||o==="fence"||o==="pergola"}function Pr(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Ir(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function oe(o){return[...o.rooms,...Pr(o)]}function ef(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let i=o.slope_dir??"x",r=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=r(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-s)/(a-s)));return n*l}function tf(o,e,t,n){return Wo(o,e)+Mr[e.type]-nf(o,e,t,n)}var Er=-.2,Sr={set:!1,level:Er};function Gl(o){let e=o?.settings.terrain??null;Sr={set:e?.level!=null,level:e?.level??Er}}function jl(o){return o.elevation>.3?0:Sr.set?Sr.level-o.elevation:Er}function Wo(o,e){return jl(o)+(e.offset??0)}function nf(o,e,t,n){return e.type==="pool"?0:ef(e,t,n)}function nt(o,e,t){let n=(o.outdoor??[]).filter(r=>!Ir(r.type)&&r.type!=="pool"&&V([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?tf(o,i,e,t):jl(o)}function ql(o,e){return Wo(o,e)+(e.above?Zl(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function of(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Zl(o):1.5}function rf(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Ir(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>V(n,t.points)))}function Un(o,e){return!e.above&&!rf(o,e)?cn(o,e)-.05:ql(o,e)-of(e)}function cn(o,e){return ql(o,e)-.15}function Zl(o){return o.height&&o.height>.3?o.height:1.2}var sf={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Yl={type:"none",pitch:35,overhang:.4},af={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Yl}};var Xl=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Ql=.3;var Jl=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Nl=1.75;function ec(o){if(["lamp_pendant","lamp_fan","stairwell","parking"].includes(o.type)||zr.has(o.type))return!1;let e=ve(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var Lo=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Oo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var zr=new Set(["stairs","stairs_u"]);function Gn(o){return Jl.has(o)||!!ve(o)?.light}var lf=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Wl(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"neon_sign":return Math.max(0,1.6-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Kl=.04,cf=1.2;function No(o,e,t,n=0){let i=0;for(let r of o.furniture)!(lf.has(r.type)||ve(r.type)?.surface)||!V([e,t],Nt(r))||r.type==="worktop"&&n>0&&r.h-Kl>=cf&&n<=r.h-Kl-.02||(i=Math.max(i,r.h));return i}var tc=new Set(["wall_switch","wall_socket"]),df=4;function jn(o){let e=(o.gangs??[]).slice(0,df);return e.length?e:[{entity:null}]}function Bo(o){return[...new Set(jn(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var nc=new Set(["wifi_ap","water_heater"]);function Bl(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var Jh=new Set([...Jl,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Vl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],neon_sign:[.9,.03,.32],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var uf=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],pf=["standard","bars","glass_wall","slide"];function hf(o,e){return o.type==="door"?o.style&&uf.includes(o.style)?o.style:e?"front":"interior":o.style&&pf.includes(o.style)?o.style:"standard"}function ff(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=o-.04,s=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-s)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=r-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return i?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function oc(o,e){let t=o.width,n=ff(t,hf(o,!1),e,o),i=n?.x0??0,r=n?.x1??t;return o.leaves!==2?(i+r)/2:e?i+(r-i)/4:r-(r-i)/4}function qn(o){o.energy={...sf,...o.energy??{}},o.presence=o.presence??[],o.settings={...af,...o.settings,roof:{...Yl,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null,...n.show_if&&!n.show_if.entity?{show_if:null}:{}}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[s,a,l]=Vl[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function ic(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function De(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function rc(o){return Math.abs(De(o))}function $r(o,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length],s=r[0]-i[0],a=r[1]-i[1],l=s*s+a*a,c=l>0?Math.max(0,Math.min(1,((o[0]-i[0])*s+(o[1]-i[1])*a)/l)):0;t=Math.min(t,Math.hypot(o[0]-i[0]-c*s,o[1]-i[1]-c*a))}return t}function Tr(o){let e=ze(o);if(o.length<3||V(e,o)&&$r(e,o)>=.6)return e;let t=o.map(u=>u[0]),n=o.map(u=>u[1]),[i,r,s,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],l=24,c=e,d=V(e,o)?$r(e,o):-1;for(let u=0;u<=l;u++)for(let p=0;p<=l;p++){let h=[i+(r-i)*u/l,s+(a-s)*p/l];if(!V(h,o))continue;let b=$r(h,o);b>d+1e-9&&([c,d]=[h,b])}return c}function ze(o){let e=De(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;t+=(r+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Nt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function V(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var sc={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var mf=700,ac="neonplan3d.unsaved",vt="4.0.1",dc="floorplan-3d.unsaved",Ar=o=>o===fe?ac:`${ac}.${o}`;function gf(o){try{let e=localStorage.getItem(Ar(o))??(o===fe?localStorage.getItem(dc):null);return e?JSON.parse(e):null}catch{return null}}function Zn(o,e){try{e?localStorage.setItem(Ar(o),JSON.stringify(e)):(localStorage.removeItem(Ar(o)),o===fe&&localStorage.removeItem(dc))}catch{}}function lc(o,e){return o&&e.some(t=>t.id===o)?o:fe}var dn=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;planId=fe;plans=[];trash=[];locatePlan=fe;plansLoaded=!1;wanted=null;unsubscribePlans=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;onVisible=()=>{document.visibilityState!=="visible"||!this.hass||this.pending||this.saving||this.reload()};constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisible),this.hass&&this.start()}hostDisconnected(){this.connected=!1,typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisible),this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.unsubscribePlans?.(),this.unsubscribePlans=null}async switchPlan(e){if(!this.plansLoaded||!this.hass){this.wanted=e??null;return}let t=lc(e,this.plans);this.wanted=t,!(t===this.planId&&this.building)&&(await this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.planId=t,this.building=null,this.revision=-1,this.ownRevisions=new Set,this.draft=null,this.saveState="idle",this.host.requestUpdate(),await this.reload(),await this.follow())}planName(e,t){return this.plans.find(i=>i.id===e)?.name||(e===fe?t:"?")}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},mf),this.host.requestUpdate()}get frontendVersion(){return vt}get versionGap(){return!this.backendVersion||vt==="dev"||this.backendVersion===vt?null:bf(this.backendVersion,vt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&vt!=="dev"&&this.backendVersion!==vt}restoreDraft(){let e=this.draft;this.draft=null,e?.conflict&&Zn(this.planId,null),e&&this.edit(qn(e.building))}discardDraft(){this.draft=null,Zn(this.planId,null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;this.pending=null;let t=this.planId;for(let n of e.floors)for(let i of n.furniture)i.mount_y!=null&&i.mount_y>10&&(i.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await Kn(this.hass,e,t,t===this.planId?this.revision:void 0);t===this.planId&&(this.ownRevisions.add(n),this.revision=n),this.saveState=this.pending?"saving":"saved",this.saveError=null,Zn(t,null)}catch(n){if(sl(n)&&t===this.planId){let i={building:e,savedAt:Date.now(),conflict:!0};Zn(t,i),this.pending=null,this.saveState="idle",this.saveError=null,await this.reload(),this.draft=i,this.host.requestUpdate();return}this.saveState="error",this.saveError=cc(n),Zn(t,{building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}async start(){if(this.hass&&(Il(this.hass),await Promise.all([this.reloadPacks(),this.reloadPlans()]),this.planId=lc(this.wanted??this.planId,this.plans),await this.reload(),await this.follow(),!this.unsubscribePlans&&this.connected))try{this.unsubscribePlans=await dl(this.hass,e=>{this.takePlans(e),this.plans.some(t=>t.id===this.planId)||this.switchPlan(fe)})}catch{}}async follow(){if(this.unsubscribe||!this.connected||!this.hass)return;let e=this.planId;try{let t=await al(this.hass,n=>{e===this.planId&&(this.ownRevisions.has(n)||n===this.revision||this.pending||this.saving||this.reload())},e);e!==this.planId||this.unsubscribe?t():this.unsubscribe=t}catch{}}async reloadPlans(){this.hass&&this.takePlans(await cl(this.hass))}takePlans(e){this.plans=e.plans,this.trash=e.trash,this.locatePlan=e.locate_plan,this.plansLoaded=!0,this.host.requestUpdate()}packTries=0;packTimer;async reloadPacks(){if(this.hass){try{this.packs=await hl(this.hass),this.packTries=0}catch(e){if(e?.code==="unknown_command")this.packs=[];else if(this.packTries<4){let t=[1500,4e3,1e4,3e4][this.packTries++];clearTimeout(this.packTimer),this.packTimer=setTimeout(()=>{this.reloadPacks()},t)}}Fl(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return;let e=this.planId;try{let t=await Ho(this.hass,e);if(e!==this.planId)return;this.building=qn(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=gf(e)),this.revision=t.revision,this.error=null}catch(t){this.error=cc(t)}this.host.requestUpdate()}};function cc(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function bf(o,e){let t=o.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),n=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,n.length);i++){let r=(t[i]??0)-(n[i]??0);if(r)return r}return 0}var _f={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",zoom_style:"Beim Hineinzoomen",zoom_late_early:"fr\xFCh",zoom_scope_all:"Alle R\xE4ume",zoom_scope_room:"Nur der Raum",zoom_scope_hint:"Was beim Hineinzoomen in den Stil \xFCbergeht: alle R\xE4ume oder nur der Raum, in den du zoomst oder den du antippst \u2013 der Rest des Hauses bleibt im eingestellten Look",zoom_late_late:"sp\xE4t",zoom_late_hint:"Wann der Stil beim Hineinzoomen einsetzt: fr\xFCh (schon bei einer ge\xF6ffneten Etage) bis sp\xE4t (erst nah im Raum)",zoom_style_off:"Beim Hineinzoomen: bleibt",zoom_style_hint:"Von weitem bleibt das Haus im eingestellten Look, beim Hineinzoomen in eine Etage oder einen Raum geht es flie\xDFend in diesen Stil \xFCber \u2013 ohne Neuladen. Wirkt, wenn oben Neon, Blueprint oder Tag gew\xE4hlt ist.",holo_more:"mehr",holo_less:"weniger",draft_conflict:"Der Plan wurde inzwischen auf einem anderen Ger\xE4t gespeichert \u2013 hier steht jetzt dieser neuere Stand. Deine \xC4nderung von {time} beruhte auf dem \xE4lteren und ist nicht gespeichert.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",plain_off:"Mit M\xF6beln",plain_on:"Nur Grundriss",plain_hint:"Nur Grundriss: W\xE4nde, T\xFCren, Fenster und Treppen ohne M\xF6bel \u2013 die Ger\xE4te bleiben.",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",floor_from_ha:"Etagen aus Home Assistant:",level:"Ebene {n}",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",show_menu:"Anzeige",tool_menu:"Werkzeug",view_menu:"Ansicht",fit:"Grundriss komplett",room:"Raum",rooms:"R\xE4ume",room_id:"ID (Karten-Option room:)",area:"Bereich",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",feed_drain:"Bodenablauf",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",delete:"L\xF6schen",settings:"Einstellungen",furn_extra:"Zusatzwert am Symbol (Sensor, z. B. Wassertemperatur)",roof_basics:"Dachform",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",cancel:"Abbrechen",confirm_switch:"{name} wirklich schalten?",grid:"Raster (m)",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",area_m2:"{a} m\xB2",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",plan_main:"Zuhause",plan_pick:"Grundriss w\xE4hlen",plan_all:"Alle Grundrisse",plan_new:"Neuer Grundriss",plan_manage:"Grundrisse verwalten",plan_alerts_elsewhere:"{n} Warnung(en) in einem anderen Grundriss",card_plan:"Grundriss",plan_lights_on:"Lichter an",plan_open_now:"Fenster und T\xFCren offen",plan_open_n:"{n} offen",plan_site:"Grundst\xFCck",plan_alert:"{plan}: {text}",plan_alert_go:"Ansehen",card_rooms:"Nur diese R\xE4ume",card_rooms_hint:"Tippe R\xE4ume auf dem Plan an: Die Karte zeigt dann nur sie, mit ihren M\xF6beln und Ger\xE4ten \u2013 etwa f\xFCrs Kinderzimmer-Tablet oder eine Ferienwohnung. Ein einzelner Raum \xF6ffnet sich mit seinen Ger\xE4ten daneben. Leer: das ganze Haus.",card_rooms_leave:"Andere R\xE4ume d\xFCrfen ge\xF6ffnet werden",card_rooms_leave_hint:"Ohne Haken bleibt das Tablet in diesen R\xE4umen.",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt_short:"Neigung \xB0",camera_popup_open:"Durch die Kamera schauen",state_recording:"Nimmt auf",state_streaming:"Streamt",room_cleaning:"Reinigung (Saugroboter)",panel_clean:"Saugen",panel_everything_off:"Alles aus ({n})",panel_fold_open:"Ger\xE4te zeigen",panel_fold_close:"Einklappen",panel_fold_lights:"\u{1F4A1} {n} an",voice_clean_started:"Der Saugroboter f\xE4hrt los: {room}.",voice_clean_none:"F\xFCr {room} ist keine Reinigung eingestellt (Editor \u2192 Raum \u2192 Reinigung).",voice_off_done:"{room}: {n} Ger\xE4te aus.",voice_off_nothing:"{room}: Es ist schon alles aus.",voice_noroom:"Welcher Raum? Sag zum Beispiel \u201ESaug die K\xFCche\u201C, oder stell beim Tablet ein, wo es h\xE4ngt.",voice_noroom_open:"Tippe zuerst einen Raum an, dann gilt \u201Eda\u201C f\xFCr ihn.",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",view_settings:"Einstellungen",view_settings_admin:"Nur Administratoren k\xF6nnen diese Einstellungen \xE4ndern \u2013 sie gelten f\xFCr das ganze Haus.",view_settings_look:"Darstellung",glass_size:"Gr\xF6\xDFe der Glas-Kacheln",glass_size_hint:"Energie, W\xE4rmepumpe, Auto, Ger\xE4te und die anderen Glas-Kacheln in der 3D-Ansicht",view_settings_alerts:"Warnungen",view_settings_control:"Bedienung",view_settings_more:"Alle weiteren Einstellungen findest du im Editor unter \u2699 Einstellungen.",lines_add:"Hinzuf\xFCgen",lines_new:"Neuer Eintrag \u2026",sheet_mic:"Sprechen",sheet_listening:"Ich h\xF6re zu \u2026",sheet_mic_failed:"Nichts verstanden \u2013 das Mikrofon braucht HTTPS und eine Sprach-Pipeline mit Spracherkennung.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",bg_map_1:"Tippe im Bild auf eine Au\xDFenecke des Hauses.",bg_map_2:"Jetzt im Bild auf die n\xE4chste Ecke derselben Au\xDFenwand.",bg_map_3:"Jetzt dieselbe erste Ecke am gelben Umriss der Karte antippen.",bg_map_4:"Und die zweite Ecke am Umriss \u2013 das Bild wird passend gedreht, skaliert und verschoben.",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",media_play_head:"Abspielen",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_surroundings:"Umgebung aus der Karte zeigen",card_surroundings_hint:"Aus: Diese Karte zeigt das Haus ohne Nachbarh\xE4user, Stra\xDFen und B\xE4ume \u2013 ruhiger auf einem kleinen Bildschirm und leichter f\xFCr schwache Ger\xE4te.",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",voice:"Sprachsteuerung",aliases:"Weitere Namen f\xFCr die Sprache",voice_showing:"Ich zeige {name}.",screen_name:"Bildschirmname (f\xFCr Assist)",screen_name_placeholder:"z. B. K\xFCche",screen_name_hint:"Fragst du Assist (\u201EZeig das Wohnzimmer\u201C) oder ruft eine Automation den Dienst neonplan3d.ask, reagiert jede offene NeonPlan-Ansicht. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen.",card_voice_area:"Raum f\xFCr \u201Ehier\u201C",card_voice_area_none:"Keiner (Einstellung des Ger\xE4ts)",card_voice_area_hint:"H\xE4ngt das Tablet mit diesem Dashboard in einem Raum, gelten S\xE4tze ohne Raumnamen (\u201ELicht an\u201C, \u201EMach hier das Licht aus\u201C) f\xFCr diesen Bereich. Ohne Auswahl gilt der Raum, der auf dem Ger\xE4t selbst eingestellt ist.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",voice_sentences_distinct:"Nur eindeutige (\u201EZeig \u2026\u201C, \u201EFrag das Haus \u2026\u201C, \u201ENeonPlan, \u2026\u201C)",voice_sentences_all:"Alle Fragen (f\xE4ngt auch S\xE4tze ab, die Home Assistant selbst beantwortet)",voice_sentences_off:"Keine (Standard \u2013 keine Satzdatei)",backdrop:"Hintergrund",backdrop_look:"Himmel des Looks (Standard)",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_shadow:"Sonnenbahn und Hausschatten",tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",tap_in_room_hint:"In der Haus- und Etagenansicht \xF6ffnet ein Tipp auf ein Ger\xE4t seinen Raum, statt es zu schalten \u2013 so l\xF6st ein Tipp auf die Etage nicht aus Versehen einen Rollladen aus. Im ge\xF6ffneten Raum bleibt alles wie gewohnt; langes Dr\xFCcken \xF6ffnet \xFCberall das Men\xFC.",right_click_back:"Rechtsklick geht eine Ebene zur\xFCck",right_click_back_hint:"Ein kurzer Rechtsklick in der 3D-Ansicht schlie\xDFt den Raum bzw. geht vom Stockwerk zum Haus zur\xFCck. Aus: Ein Rechtsklick wirkt wie ein Klick.",sun_shadow_hint:"\xDCber dem Haus zeigt ein Bogen den Weg der Sonne heute mit Auf- und Untergang, auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne. Braucht die Nordrichtung; auf der Stufe \u201ETablet\u201C nur der Bogen.",sky:"Echter Himmel",sky_hint:"Hinter dem Haus ein Himmel nach dem echten Sonnenstand: Abendrot, Sterne, die mit der Nacht wandern, und der Mond in seiner echten Phase. Mit \u201EWetter drau\xDFen\u201C ziehen Wolken mit dem Wind. Aus bei eigenem Hintergrund und im Bauplan-Look; auf der Stufe \u201ETablet\u201C ein ruhiges Standbild.",flyin:"Anflug aus dem All",flyin_hint:"Beim \xD6ffnen dreht sich ein Neon-Globus zu deinem Zuhause und taucht hinein, die Kamera fliegt von hoch oben aufs Haus. Einmal pro Laden der Seite; ein Tipp \xFCberspringt es. Nicht im Editor und nicht auf der Stufe \u201ETablet\u201C.",sun_arc:"Sonnenbogen um",sun_arc_house:"das Haus",sun_arc_plot:"das ganze Grundst\xFCck",sun_arc_hint:"Wo Sonnenbogen und Kompassring stehen: um das Haus (Standard) oder um alles Gezeichnete \u2013 R\xE4ume, Au\xDFenfl\xE4chen, Z\xE4une und freie W\xE4nde.",window_glow:"Fenster leuchten nachts nach drau\xDFen",window_glow_hint:"Ist es drau\xDFen dunkel, f\xE4llt das Licht beleuchteter R\xE4ume durch die Fenster als warmer Schein auf Rasen und Terrasse davor \u2013 in der Lichtfarbe des Raums, schw\xE4cher hinter heruntergelassenen Rolll\xE4den.",gpu_safe_note:"In diesem Browser sind Sonnenbahn, Hausschatten und der Fensterschein bei Nacht aus: Gleich nach dem Start ging die Grafik verloren. Die n\xE4chste NeonPlan-Version versucht es wieder.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_unavailable:"Kontakt nicht verf\xFCgbar: {name}",alert_short_contact_unavailable:"Kontakt nicht verf\xFCgbar",alert_unavailable:"Warnen, wenn ein Fenster- oder T\xFCrkontakt nicht verf\xFCgbar ist",alert_unavailable_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand wei\xDF. Dann kommt eine Warnung.",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Winter und Haustiere",gift_text:"Die Fun-Packs Winter & Weihnachten (Lichterketten am Dach, Schnee, Weihnachtsbaum, Adventskranz und ein Silvester-Feuerwerk) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Winter und Haustiere",gift_text_free:"Lichterketten am Dach, Schnee, Weihnachtsbaum, Adventskranz und ein Silvester-Feuerwerk \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_templates:"Karten-Vorlagen",card_templates_intro:"Stell eine Dashboard-Karte einmal hier ein, zum Beispiel \u201EK\xFCche Fire-Tablet\u201C. Auf dem Tablet w\xE4hlst du im Kartenformular nur noch die Vorlage. \xC4nderst du sie hier, \xFCbernimmt jedes Tablet mit dieser Vorlage sie von selbst.",card_templates_empty:"Noch keine Vorlage. Leg mit \u201E+ Neue Vorlage\u201C die erste an.",card_templates_no_editor:"Das Kartenformular lie\xDF sich nicht laden. Lade die Seite neu (Strg+F5).",card_template_new:"Neue Vorlage",card_template_new_name:"Neue Vorlage",card_template_copy_name:"{name} (Kopie)",card_template_delete_ask:"Vorlage \u201E{name}\u201C l\xF6schen? Karten, die sie nutzen, laufen dann mit ihren eigenen Einstellungen weiter.",card_template_reloaded:"Neu laden geschickt: die offenen Bildschirme laden in den n\xE4chsten Sekunden neu.",card_template_reload_failed:"Neu laden ging nicht. L\xE4uft NeonPlan in Home Assistant schon in dieser Version (nach einem Update neu starten)?",card_template_reload_all:"Alle Bildschirme neu laden",card_template_reload_hint:"L\xE4dt jede offene NeonPlan-Ansicht neu, etwa nach einem Update. In Automationen: Aktion \u201Eneonplan3d.reload_screens\u201C.",card_template_name:"Name",card_template_duplicate:"Duplizieren",card_template_preview:"Vorschau",card_template_preview_off:"Vorschau aus",card_template_preview_on:"Vorschau zeigen",card_template_where:"Wo h\xE4ngt das Tablet?",card_template_where_hint:"Der Raum f\xFCr \u201Ehier\u201C: \u201EMach hier das Licht an\u201C gilt dann f\xFCr diesen Bereich, auch wenn die Karte immer das Erdgeschoss zeigt.",card_template_reloading:"Wird neu geladen \u2026 (ein paar Sekunden)",screen_reloading:"L\xE4dt neu \u2026",card_template_open:"Im NeonPlan-Editor bearbeiten",card_template_make:"Vorlage im NeonPlan-Editor anlegen",card_template_screen:"Bildschirm",card_template_screen_tablet:"Tablet 10\u2033 quer (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 quer (Fire 7)",card_template_screen_upright:"Tablet hochkant",card_template_screen_phone:"Handy",card_tab_for:"Allgemein",card_templates_screens:"Bildschirme",card_templates_phones:"Handys",card_templates_none:"Noch keine",card_template_use_title:"So nutzt du die Vorlage im Dashboard",nav_lights:"Licht",nav_climate:"Heizung",nav_page:"Seite",nav_all_on:"Alle an",nav_all_off:"Alle aus",nav_dev_on:"An",nav_dev_off:"Aus",card_phone_place:"Eigener Platz {n}",card_phone_place_none:"Keiner",card_phone_place_lights:"Licht \u2013 alle Lampen nach Etage",card_phone_place_climate:"Heizung \u2013 alle Thermostate nach Etage",card_phone_place_action:"Szene oder Skript ausf\xFChren",card_phone_place_link:"Seite eines Dashboards \xF6ffnen",card_phone_place_name:"Name in der Leiste (leer: automatisch)",card_phone_place_icon:"Symbol (ein Emoji, leer: automatisch)",card_phone_place_entity:"Szene oder Skript",card_phone_place_path:"Pfad in Home Assistant",card_phone_place_hint:"Bis zu zwei eigene Pl\xE4tze stehen in der Leiste vor \u201EMehr\u201C. Ein Platz ohne passende Ger\xE4te im Haus bleibt weg.",card_for:"Wof\xFCr ist die Karte?",card_for_large:"Tablet oder gro\xDFer Bildschirm",card_for_phone:"Handy",card_for_large_hint:"Das Haus gro\xDF im Bild, mit Schaltern, Raumleiste und Etagenbildern nach Wahl \u2013 f\xFCr Wandtablet, PC und Fernseher.",card_for_phone_hint:"Die Karte f\xFCllt den Bildschirm und bekommt unten eine Leiste f\xFCr den Daumen: Jetzt, R\xE4ume, Rolll\xE4den, Mehr. Die eigenen Schalter, die Raumleiste und die Etagenbilder der Karte entfallen. Am besten auf einer eigenen Ansicht des Dashboards.",card_section_phone:"Die Leiste am Handy",card_phone_rooms:"R\xE4ume",card_phone_rooms_hint:"Die R\xE4ume nach Etage als Kacheln mit Lichtern, offenen Fenstern und Musik; ein Tipp springt in den Raum.",card_phone_covers:"Rolll\xE4den",card_phone_covers_hint:"Alle Rolll\xE4den des Hauses auf einer Seite, mit \u201EAlle auf\u201C und \u201EAlle zu\u201C.",card_phone_favorites:"Favoriten oben in der Liste",card_phone_favorites_hint:"Die Favoriten des Hauses als Kn\xF6pfe \xFCber \u201EWas ist los?\u201C.",card_phone_solo_hint:"Ein Raum, in den du springst, steht allein im Bild. Jedes Ger\xE4t kann das unter \u201EMehr\u201C f\xFCr sich umstellen.",card_phone_start_now:"Mit der Liste starten",card_phone_start_now_hint:"Die Karte \xF6ffnet mit \u201EWas ist los?\u201C statt mit dem Haus.",card_template_new_large:"F\xFCr Tablet / gro\xDFen Bildschirm",card_template_new_phone:"F\xFCrs Handy",card_template_new_name_phone:"Handy",card_template_preview_look:"Drehen, zoomen und R\xE4ume \xF6ffnen geht wie auf der Karte. Geschaltet wird in der Vorschau nichts.",card_template_where_other:"Weitere Bereiche",card_template_voice_off:"Der Mikrofon-Knopf ist in dieser Vorlage aus. Ohne ihn h\xF6rt das Tablet nicht zu.",card_template_voice_on:"Mikrofon-Knopf einschalten",card_template_own:"Diese Karte hat noch alte Einstellungen, die mit der Vorlage nicht mehr gelten: {list}.",card_template_own_clear:"Aufr\xE4umen (nur die Vorlage behalten)",card_template_mode:"\xC4nderungen:",card_template_live:"Sofort auf die Tablets",card_template_manual:"Erst mit Knopf \xFCbertragen",card_template_pending:"Noch nicht \xFCbertragen: Die Tablets zeigen den alten Stand, die Vorschau schon den neuen.",card_template_publish:"Auf Tablets \xFCbertragen",card_template_discard:"Verwerfen",card_template_published:"\xDCbertragen: Die Tablets zeigen jetzt den neuen Stand.",card_template_preview_big:"Gro\xDF",card_template_preview_small:"Klein",card_template_use:"So nutzt du sie: Auf dem Tablet die NeonPlan-Karte hinzuf\xFCgen und oben die Vorlage w\xE4hlen, oder im YAML:",card_template_copy:"Kopieren",card_template_copied:"Kopiert.",card_template_reload:"Bildschirme mit dieser Vorlage neu laden",card_template:"Vorlage",card_template_none:"Keine \u2013 hier einstellen",card_template_hint:"Karten-Vorlagen baust du im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen. Dann w\xE4hlst du hier nur noch eine aus.",card_template_on:"Diese Karte wird von der Vorlage gesteuert. \xC4ndere sie im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen, jedes Tablet \xFCbernimmt das von selbst.",card_template_missing:"Die Karten-Vorlage \u201E{name}\u201C gibt es im Plan nicht mehr. Die Karte nutzt ihre eigenen Einstellungen.",card_plain:"Nur Grundriss (ohne M\xF6bel)",room_bar:"Raum-Leiste",room_bar_hint:"Unten eine Karte pro Raum: Temperatur, offene Fenster, was l\xE4uft und ein Licht-Schalter. Tippen fliegt in den Raum. Oben stehen dann nur noch die Etagen; das Auge l\xE4sst die Leiste stehen.",room_bar_none:"Ohne Raum-Leiste",room_bar_rooms:"Raum-Leiste",room_bar_all:"+ Favoriten",room_bar_hide:"Raum-Leiste einklappen",room_bar_on:"An",room_bar_off:"Aus",room_bar_light:"Licht",room_bar_activate:"Aktivieren",room_bar_lights:"{n} an",room_bar_lights_off:"Lichter im Raum ausschalten",room_bar_open:"offen",room_bar_playing:"l\xE4uft",card_room_bar:"Raum-Leiste unten",card_room_bar_favorites:"Favoriten in der Raum-Leiste",card_room_bar_favorites_hint:"Szenen, Skripte und Schalter aus den Favoriten (Einstellungen \u2192 Favoriten) vorne in der Leiste.",show_if:"Nur zeigen, wenn \u2026",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",ext_tab:"Erweiterungen",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor_auto:"Erdgeschoss",print_dot:"Neu",print_dot_hint:"Neu f\xFCr Supporter: NeonPlan Print",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",manual:"Anleitung",manual_more:"Mehr erfahren",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (Modul): Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; die Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, pH, Chlor/Redox und Salz mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor, Salz und Frost; die Pooltechnik baut sich auf Knopfdruck auf, das Wasser flie\xDFt sichtbar durch die Rohre",pool_pump:"Filterpumpe",pool_ph:"pH-Wert",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_shape_free:"Frei",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",card_room:"Start-Raum",card_room_none:"Keiner (Etage oder Haus)",card_walk:"Rundgang erlaubt",card_walk_hint:"Der Knopf f\xFCr den Rundgang auf Augenh\xF6he durchs Haus",card_tt_range:"Zeitreise beginnt",card_tt_range_24h:"vor 24 Stunden",card_tt_range_7d:"vor einer Woche",card_tt_speed:"Abspieltempo",card_tt_speed_day:"1 Tag in 6 s",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_climate:"Klima / Vorheizen",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (Einstellungen \u203A System \u203A Updates), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (Einstellungen \u203A System \u203A Updates), Home Assistant neu starten und dann noch einmal installieren.",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",furn_cable_to_grid:"Kabel endet am Netzanschluss",furn_cable_to_grid_hint:"Energie Pro: Das Kabel dieses Wechselrichters l\xE4uft zum Netzanschluss statt zum Z\xE4hler \u2013 etwa wenn Wechselrichter und Netzanschluss weit vom Hausverteiler entfernt sind.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_width:"Breite Seitenteil (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",style_slide:"Schiebe (eine Scheibe f\xE4hrt vor die feste)",preset_terrace_slide:"Hebe-Schiebet\xFCr",preset_window_slide:"Schiebefenster",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",gate_kind_swing:"Pforte (ein Fl\xFCgel)",gate_kind_double:"Fl\xFCgeltor (zwei Fl\xFCgel)",gate_kind_slide:"Schiebetor",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_pitch_upper:"Neigung Oberdach (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_end:"Ende",roof_end_auto:"wie die Form",roof_end_gable:"Giebel",roof_end_hint:"Wie der First an diesem Ende endet: Giebel (senkrechte Wand), Walm oder Kr\xFCppelwalm \u2013 so geht zum Beispiel ein Walm nur an einer Seite.",roof_swap:"Seiten tauschen",roof_turn:"Drehung",roof_turn_hint:"Dreht diesen Dachteil im Plan (im Uhrzeigersinn), z. B. f\xFCr einen Anbau im Winkel. Gauben und Zwerchgiebel darauf drehen mit. 0\xB0 = wie bisher.",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_overhang_sides:"\xDCberstand je Seite",roof_overhang_sides_hint:"Den Dach\xFCberstand f\xFCr jede Seite selbst festlegen. Aus: automatisch \u2013 kein \xDCberstand, wo die Dachfl\xE4che an einen h\xF6heren Teil des Hauses st\xF6\xDFt.",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel zwischen Haus und Etagen bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",surround_err_busy:"Die Kartenserver sind gerade ausgelastet. Bitte in ein paar Minuten noch einmal versuchen.",surround_err_empty:"F\xFCr diesen Ort enth\xE4lt die Karte noch keine H\xE4user und Stra\xDFen.",sill_board_auto:"automatisch",sill_board_none:"keine",sill_board_inside:"nur innen",sill_board_outside:"nur au\xDFen",opening_height:"H\xF6he (m)",blind_side:"Rollladen sitzt",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",entity_auto:"Automatisch ({name})",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",lib_room_living:"Wohnen",lib_room_dining:"Essen",lib_room_kitchen:"K\xFCche",lib_room_bedroom:"Schlafen",lib_room_kids:"Kinder",lib_room_bath:"Bad",lib_room_office:"B\xFCro",lib_room_hall:"Flur",lib_room_utility:"Hauswirtschaft",lib_room_garage:"Garage",lib_room_garden:"Garten",lib_room_hobby:"Hobby & Fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Sitzm\xF6bel",lib_kind_table:"Tische",lib_kind_storage:"Schr\xE4nke & Regale",lib_kind_bed:"Betten",lib_kind_kitchen:"K\xFCche",lib_kind_appliance:"Ger\xE4te",lib_kind_bath:"Bad",lib_kind_lamp:"Leuchten",lib_kind_media:"TV & Audio",lib_kind_office:"B\xFCro",lib_kind_tech:"Technik & Smart Home",lib_kind_heating:"Heizen & Klima",lib_kind_energy:"Energie",lib_kind_household:"Haushalt",lib_kind_deco:"Deko",lib_kind_plant:"Pflanzen",lib_kind_outdoor:"Garten & Au\xDFen",lib_kind_kids:"Kinder",lib_kind_sport:"Fitness",lib_kind_pets:"Haustiere",lib_kind_vehicle:"Fahrzeuge",lib_kind_stairs:"Treppen & Gel\xE4nder",lib_kind_architecture:"Architektur",rotation:"Drehung (\xB0)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",wall_heights:"Wandh\xF6hen",style_group_custom:"Eigene Stile",style_new:"Als eigenen Stil anlegen",style_own_suffix:"(eigener)",style_delete:"Stil l\xF6schen",style_name:"Name",style_builtin_hint:"Ein fertiger Stil. Zum Anpassen \u201EAls eigenen Stil anlegen\u201C \u2013 dann sind alle Regler da, und dein Stil steht in jeder Stil-Liste.",style_show_beside:"In \u201E3D daneben\u201C zeigen",style_natural:"Echte Materialien (Holz, Fliesen, Wandfarben)",style_dark:"Dunkler Stil \u2013 Linien leuchten",style_line:"Linien",style_surface_dark:"Fl\xE4chen dunkel",style_surface_light:"Fl\xE4chen hell",style_hue:"Farbanteil",style_lift:"Grundhelligkeit",style_contrast:"Kontrast",style_signal:"Aktive Ger\xE4te farbig",style_sun:"Licht nach Richtung",style_ao:"Raumecken",style_shadows:"Kontaktschatten unter M\xF6beln",style_floors:"Bodenstruktur",style_cut:"Schnittkanten dunkel",style_dim:"Abendstimmung",style_bg_top:"Hintergrund oben",style_bg_bottom:"Hintergrund unten",style_times:"Tageszeiten (Hausplan)",wall_exterior_short:"Au\xDFenwand",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto (Tag/Neon nach Sonne)",style:"Stil",style_neon:"Neon",style_blueprint:"Blueprint",style_day:"Tag",style_focus:"Nacht / Fokus",style_synth:"Synthwave",style_cozy:"Wohnlich",style_evening:"Wohnlich Abend",style_winter:"Winterabend",style_model:"Architekturmodell",style_pastel:"Pastell",style_warm:"Warm / Holz & Papier",style_house:"Hausplan (Tag / Abend / Nacht)",style_group_neon:"Neon & Klassik",style_group_homely:"Wohnlich \u2013 echte Materialien",style_group_designed:"Gestaltet",style_group_auto:"Automatisch",style_set:"Stil \u201E{name}\u201C ist an.",style_reset:"Stil wieder wie eingestellt.",style_none:"\u2013 keiner \u2013",style_day_label:"Tags\xFCber",style_evening_label:"Abends",style_night_label:"Nachts",style_switch:"Umschalten",style_switch_sun:"nach Sonne",style_switch_time:"nach Uhrzeit",style_morning_at:"Tag ab",style_evening_at:"Abend ab",style_night_at:"Nacht ab",style_switch_hint:"Nach Sonne: Tag, solange die Sonne scheint, dann Abend bis \u201ENacht ab\u201C. Nach Uhrzeit: die drei Zeiten.",style_entity:"Stil aus Helfer-Entit\xE4t",style_entity_hint:"Ein input_select oder input_text, dessen Zustand einen Stil nennt (z. B. \u201EWohnlich\u201C). Solange er einen Stil nennt, gilt dieser \u2013 Automationen k\xF6nnen so umschalten.",theme_evening:"Stil abends",theme_night:"Stil nachts",theme_schedule_hint:"Leer = den ganzen Tag derselbe Stil. Umgeschaltet wird wie im Hausplan eingestellt (nach Sonne oder Uhrzeit).",persons:"Personen",locate:"Ortung",persons_figure:"Figur",persons_pin:"Pin",persons_off:"aus",furnish:"Einrichten",mount_height:"H\xF6he \xFCber Boden (m)",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_out:"Rausgestellt (Helfer)",bin_out_done:"rausgestellt \u2713",bin_out_mark:"Als rausgestellt markieren",bin_next_only:"Nur die n\xE4chste Abholung beschriften",bin_days:"Schilder erst \u2026 Tage vorher zeigen",hh_service2:"{name}: {what} f\xE4llig",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",heat_sensor:"Heizt (Sensor)",heat_sensor_hint:"Sagt der Thermostat nicht, ob er heizt (Tuya-Ventile melden einen \u201EWork state\u201C), nimm hier den Sensor: ein/opened/heating oder eine \xD6ffnung \xFCber 0 % l\xE4sst den Heizk\xF6rper gl\xFChen.",door_lock_btn:"Abschlie\xDFen",door_unlock_btn:"Aufschlie\xDFen",door_lock_confirm:"{name} wirklich abschlie\xDFen?",door_unlock_confirm:"{name} wirklich aufschlie\xDFen?",clock:"Uhr",clock_off:"Aus",clock_tl:"\u2196 Uhr",clock_tr:"\u2197 Uhr",clock_bl:"\u2199 Uhr",clock_br:"\u2198 Uhr",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_neon_sign:"Neon-Schild",sign_color:"Farbe der R\xF6hren",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",pin_standby:"Standby",furn_lamp_fan:"Deckenventilator mit Licht",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",furn_group_household:"Haushalt",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_post:"Post da",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",pro_name_frames:"Digitale Bilderrahmen",pro_feature_frames:"Digitale Bilderrahmen: Bilderrahmen an der Wand zeigen eine Diashow, den Kalender, eine Pinnwand, Listen oder ein Kamerabild \u2013 antippen \xF6ffnet es gro\xDF",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",awning_pitch:"Neigung (\xB0)",awning_valance:"Volant (Stoffkante vorne)",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",furn_glow_color:"Feste Farbe in 3D",furn_glow_color_hint:"Die Lampe leuchtet im Plan immer in dieser Farbe, egal welche Farbe das Licht meldet \u2013 an/aus und Helligkeit kommen weiter vom Licht.",furn_only_color:"Nur leuchten, wenn das Licht diese Farbe zeigt",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",solar_pro_soon:"bald verf\xFCgbar",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",lock_plan:"\u{1F512} Grundriss",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",climate:"Raumklima",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show_always:"Immer zeigen",marker_show_active:"Nur wenn aktiv",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",furn_power:"Leistungssensor (W)",furn_meter_reading:"Z\xE4hlerstand (m\xB3 oder Liter)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",floor_lights:"{n} Licht an",now_title:"Was ist los?",now_open_one:"1 Fenster oder T\xFCr offen",now_open:"{n} Fenster und T\xFCren offen",now_tilted:"gekippt",now_unlocked_one:"1 T\xFCr nicht abgeschlossen",now_unlocked:"{n} T\xFCren nicht abgeschlossen",now_home:"Zu Hause",now_away:"Unterwegs",now_nobody:"Niemand zu Hause",now_lights_one:"1 Licht an",now_lights:"{n} Lichter an",now_battery:"Akku",now_car_away:"unterwegs",now_calm:"Alles in Ordnung",now_calm_away:"Du bist unterwegs \u2013 zu Hause ist alles in Ordnung",now_calm_detail:"Keine Warnung, nichts offen, nichts zu tun.",now_try:"Neu f\xFCrs Handy: \u201EWas ist los?\u201C \u2013 dein Zuhause auf einen Blick.",now_try_yes:"Ausprobieren",now_try_no:"Nein danke",now_lights_off:"Alle aus",now_lock:"Abschlie\xDFen",now_check:"Haus-Check",now_check_hint:"Vor dem Gehen oder Schlafen: alles Offene und Eingeschaltete nacheinander ansehen und ausschalten.",now_next:"Weiter",now_done:"Fertig",now_check_done:"Haus-Check fertig",now_check_nothing:"Alles zu, alles aus.",now_window_hint:"von Hand schlie\xDFen",now_all_lights_off:"Alle {n} Lichter aus",nav_now:"Jetzt",nav_rooms:"R\xE4ume",nav_covers:"Rolll\xE4den",nav_more:"Mehr",nav_whole_floor:"Ganze Etage",nav_all_up:"Alle auf",nav_all_down:"Alle zu",nav_house:"Ganzes Haus",nav_solo:"Raum einzeln",nav_solo_hint:"Ein Raum, in den du springst, steht allein im Bild, ohne den Rest des Hauses.",nav_off:"Handy-Ansicht aus",now_setting:"Handy-Ansicht",now_setting_hint:"Das Haus ohne Kopfzeile, unten eine Leiste: Jetzt (was los ist, mit \u201EAlle aus\u201C und dem Haus-Check), die R\xE4ume je Etage, die Rolll\xE4den und Mehr.",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit"},vf={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",zoom_style:"When zooming in",zoom_late_early:"early",zoom_scope_all:"All rooms",zoom_scope_room:"Only the room",zoom_scope_hint:"What turns into the style while zooming in: every room, or only the room you zoom into or tap \u2013 the rest of the house keeps the look set",zoom_late_late:"late",zoom_late_hint:"When the style sets in while zooming in: early (already on an opened floor) to late (only close up in a room)",zoom_style_off:"When zooming in: stays",zoom_style_hint:"From afar the house keeps the look set, zooming into a floor or a room blends it into this style \u2013 without reloading. Works when Neon, Blueprint or Day is chosen above.",holo_more:"more",holo_less:"less",draft_conflict:"The plan was saved on another device meanwhile \u2013 this newer plan is shown now. Your change from {time} was made on the older one and is not saved.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",plain_off:"With furniture",plain_on:"Floor plan only",plain_hint:"Floor plan only: walls, doors, windows and stairs without furniture \u2013 the devices stay.",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",floor_from_ha:"Floors from Home Assistant:",level:"Level {n}",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",show_menu:"Show",tool_menu:"Tool",view_menu:"View",fit:"Whole plan",room:"Room",rooms:"Rooms",room_id:"ID (card option room:)",area:"Area",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",feed_drain:"Bottom drain",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",delete:"Delete",settings:"Settings",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",roof_basics:"Roof shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",cancel:"Cancel",confirm_switch:"Really switch {name}?",grid:"Grid (m)",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",area_m2:"{a} m\xB2",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",plan_main:"Home",plan_pick:"Choose floor plan",plan_all:"All floor plans",plan_new:"New floor plan",plan_manage:"Manage floor plans",plan_alerts_elsewhere:"{n} warning(s) in another floor plan",card_plan:"Floor plan",plan_lights_on:"Lights on",plan_open_now:"Windows and doors open",plan_open_n:"{n} open",plan_site:"Property",plan_alert:"{plan}: {text}",plan_alert_go:"Show",card_rooms:"Only these rooms",card_rooms_hint:"Tap rooms on the plan: the card then shows only them, with their furniture and devices \u2013 for the kids' tablet or a holiday flat, say. A single room opens with its devices beside it. Empty: the whole house.",card_rooms_leave:"Other rooms may be opened",card_rooms_leave_hint:"Unticked, the tablet stays in these rooms.",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt_short:"Tilt \xB0",camera_popup_open:"Look through the camera",state_recording:"Recording",state_streaming:"Streaming",room_cleaning:"Cleaning (robot vacuum)",panel_clean:"Vacuum",panel_everything_off:"Everything off ({n})",panel_fold_open:"Show devices",panel_fold_close:"Fold",panel_fold_lights:"\u{1F4A1} {n} on",voice_clean_started:"The robot vacuum is on its way: {room}.",voice_clean_none:"{room} has no cleaning set (editor \u2192 room \u2192 Cleaning).",voice_off_done:"{room}: {n} devices off.",voice_off_nothing:"{room}: everything is off already.",voice_noroom:"Which room? Say e.g. \u201Cvacuum the kitchen\u201D, or set where the tablet hangs.",voice_noroom_open:"Tap into a room first, then \u201Cthere\u201D means it.",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",glass_size:"Size of the glass cards",glass_size_hint:"Energy, heat pump, car, devices and the other glass cards in the 3D view",view_settings_alerts:"Warnings",view_settings_control:"Controls",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",bg_map_1:"Tap an outer corner of the house in the picture.",bg_map_2:"Now tap the next corner of the same outer wall in the picture.",bg_map_3:"Now tap the same first corner on the map's yellow outline.",bg_map_4:"And the second corner on the outline \u2013 the picture is turned, scaled and moved to fit.",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",media_play_head:"Play",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_surroundings:"Show the surroundings from the map",card_surroundings_hint:"Off: this card shows the house without the neighbours' houses, streets and trees \u2013 calmer on a small screen and lighter for weak devices.",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",voice:"Voice control",aliases:"Further names for the voice",voice_showing:"Showing {name}.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service neonplan3d.ask reaches every open NeonPlan view. When the service names a screen, only the view with that name reacts.',card_voice_area:'Room for "here"',card_voice_area_none:"None (the device's setting)",card_voice_area_hint:'When the tablet with this dashboard hangs in a room, sentences without a room name ("Lights on", "Turn off the lights here") apply to this area. Without a choice, the room set on the device itself counts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "NeonPlan, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",backdrop:"Background",backdrop_look:"The look's sky (default)",backdrop_gradient:"Gradient",backdrop_image:"Picture",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_shadow:"Sun arc and house shadow",tap_in_room:"Switch devices only in the opened room",tap_in_room_hint:"In the house and floor views a tap on a device opens its room instead of switching it \u2013 so a tap meant for the floor does not move a blind by accident. In the opened room nothing changes; a long press opens the menu everywhere.",right_click_back:"Right click goes one step back",right_click_back_hint:"A short right click in the 3D view closes the room or goes from the floor back to the house. Off: a right click works like a click.",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,sky:"Real sky",sky_hint:"A sky behind the house that follows the real sun: sunset colours, stars that move through the night and the moon in its real phase. With \u201CWeather outside\u201D clouds drift with the wind. Off with an own background and in the blueprint look; a still picture on the \u201CTablet\u201D level.",flyin:"Fly in from space",flyin_hint:"When the view opens, a neon globe turns to your home and dives in while the camera comes down onto the house. Once per page load; a tap skips it. Not in the editor and not on the \u201CTablet\u201D level.",sun_arc:"Sun arc around",sun_arc_house:"the house",sun_arc_plot:"the whole plot",sun_arc_hint:"Where the sun arc and the compass ring stand: around the house (default) or around everything drawn \u2013 rooms, outdoor areas, fences and free walls.",window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",gpu_safe_note:"In this browser the sun arc, the house shadow and the window glow at night are off: the graphics were lost right after the start. The next NeonPlan version tries again.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: winter and pets",gift_text:"The fun packs Winter & Christmas (fairy lights along the roof, snow, a Christmas tree, an Advent wreath and a New Year's Eve firework) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: winter and pets",gift_text_free:"Fairy lights along the roof, snow, a Christmas tree, an Advent wreath and a New Year's Eve firework \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_templates:"Card templates",card_templates_intro:"Set up a dashboard card here once, e.g. \u201CKitchen Fire tablet\u201D. On the tablet you only pick the template in the card dialog. When you change it here, every tablet with this template follows by itself.",card_templates_empty:"No template yet. Create the first one with \u201C+ New template\u201D.",card_templates_no_editor:"The card editor could not be loaded. Reload the page (Ctrl+F5).",card_template_new:"New template",card_template_new_name:"New template",card_template_copy_name:"{name} (copy)",card_template_delete_ask:"Delete the template \u201C{name}\u201D? Cards using it then carry on with their own settings.",card_template_reloaded:"Reload sent: the open screens reload within the next seconds.",card_template_reload_failed:"Reload failed. Does NeonPlan in Home Assistant run this version yet (restart after an update)?",card_template_reload_all:"Reload all screens",card_template_reload_hint:"Reloads every open NeonPlan view, e.g. after an update. In automations: the action \u201Cneonplan3d.reload_screens\u201D.",card_template_name:"Name",card_template_duplicate:"Duplicate",card_template_preview:"Preview",card_template_preview_off:"Preview off",card_template_preview_on:"Show preview",card_template_where:"Where does the tablet hang?",card_template_where_hint:"The room for \u201Chere\u201D: \u201CTurn on the lights here\u201D then applies to this area, even when the card always shows the ground floor.",card_template_reloading:"Reloading \u2026 (a few seconds)",screen_reloading:"Reloading \u2026",card_template_open:"Edit in the NeonPlan editor",card_template_make:"Create a template in the NeonPlan editor",card_template_screen:"Screen",card_template_screen_tablet:"Tablet 10\u2033 landscape (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 landscape (Fire 7)",card_template_screen_upright:"Tablet upright",card_template_screen_phone:"Phone",card_tab_for:"General",card_templates_screens:"Screens",card_templates_phones:"Phones",card_templates_none:"None yet",card_template_use_title:"How to use the template on a dashboard",nav_lights:"Lights",nav_climate:"Heating",nav_page:"Page",nav_all_on:"All on",nav_all_off:"All off",nav_dev_on:"On",nav_dev_off:"Off",card_phone_place:"Own place {n}",card_phone_place_none:"None",card_phone_place_lights:"Lights \u2013 all lamps by floor",card_phone_place_climate:"Heating \u2013 all thermostats by floor",card_phone_place_action:"Run a scene or script",card_phone_place_link:"Open a dashboard page",card_phone_place_name:"Name in the bar (empty: automatic)",card_phone_place_icon:"Symbol (an emoji, empty: automatic)",card_phone_place_entity:"Scene or script",card_phone_place_path:"Path inside Home Assistant",card_phone_place_hint:'Up to two places of your own stand in the bar before "More". A place with no matching devices in the house stays away.',card_for:"What is the card for?",card_for_large:"Tablet or large screen",card_for_phone:"Phone",card_for_large_hint:"The house large in the picture, with the switches, room bar and floor pictures you choose \u2013 for a wall tablet, a PC or a TV.",card_for_phone_hint:"The card fills the screen and gets a bar at the bottom for the thumb: Now, Rooms, Blinds, More. The card's own switches, room bar and floor pictures make way. Best on a dashboard view of its own.",card_section_phone:"The bar on the phone",card_phone_rooms:"Rooms",card_phone_rooms_hint:"The rooms by floor as tiles with lights, open windows and music; a tap jumps into the room.",card_phone_covers:"Blinds",card_phone_covers_hint:'All blinds of the house on one page, with "All up" and "All down".',card_phone_favorites:"Favourites on top of the list",card_phone_favorites_hint:`The house's favourites as buttons above "What's going on?".`,card_phone_solo_hint:'A room you jump into stands alone in the picture. Each device can change this for itself under "More".',card_phone_start_now:"Start with the list",card_phone_start_now_hint:`The card opens with "What's going on?" instead of the house.`,card_template_new_large:"For a tablet / large screen",card_template_new_phone:"For a phone",card_template_new_name_phone:"Phone",card_template_preview_look:"Turn, zoom and open rooms as on the card. The preview switches nothing.",card_template_where_other:"Other areas",card_template_voice_off:"The microphone button is off in this template. Without it the tablet does not listen.",card_template_voice_on:"Turn on the microphone button",card_template_own:"This card still has old settings that no longer apply with the template: {list}.",card_template_own_clear:"Tidy up (keep only the template)",card_template_mode:"Changes:",card_template_live:"Straight to the tablets",card_template_manual:"Send with a button",card_template_pending:"Not sent yet: the tablets show the old state, the preview the new one.",card_template_publish:"Send to the tablets",card_template_discard:"Discard",card_template_published:"Sent: the tablets show the new state now.",card_template_preview_big:"Large",card_template_preview_small:"Small",card_template_use:"How to use it: add the NeonPlan card on the tablet and pick the template at the top, or in YAML:",card_template_copy:"Copy",card_template_copied:"Copied.",card_template_reload:"Reload screens with this template",card_template:"Template",card_template_none:"None \u2013 set it up here",card_template_hint:"Card templates are made in the NeonPlan editor under \u2699 Settings \u2192 Card templates. Then you only pick one here.",card_template_on:"This card follows its template. Change it in the NeonPlan editor under \u2699 Settings \u2192 Card templates; every tablet takes it over by itself.",card_template_missing:"The card template \u201C{name}\u201D is no longer in the plan. The card uses its own settings.",card_plain:"Floor plan only (no furniture)",room_bar:"Room bar",room_bar_hint:"A card per room at the bottom: temperature, open windows, what plays and a light switch. A tap flies into the room. The top then keeps only the floors; the eye leaves the bar in place.",room_bar_none:"No room bar",room_bar_rooms:"Room bar",room_bar_all:"+ favourites",room_bar_hide:"Fold the room bar away",room_bar_on:"On",room_bar_off:"Off",room_bar_light:"Light",room_bar_activate:"Activate",room_bar_lights:"{n} on",room_bar_lights_off:"Switch the room's lights off",room_bar_open:"open",room_bar_playing:"playing",card_room_bar:"Room bar at the bottom",card_room_bar_favorites:"Favourites in the room bar",card_room_bar_favorites_hint:"Scenes, scripts and switches from the favourites (Settings \u2192 Favourites) at the front of the bar.",show_if:"Only show while \u2026",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",ext_tab:"Extensions",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor_auto:"Ground floor",print_dot:"New",print_dot_hint:"New for supporters: NeonPlan Print",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",manual:"Manual",manual_more:"Learn more",pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_shape_free:"Free",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",card_room:"Start room",card_room_none:"None (floor or house)",card_walk:"Allow the walk",card_walk_hint:"The button for the walk through the house at eye height",card_tt_range:"Time travel starts",card_tt_range_24h:"24 hours ago",card_tt_range_7d:"a week ago",card_tt_speed:"Replay speed",card_tt_speed_day:"1 day in 6 s",car_charging:"Charging (power, state or switch)",car_climate:"Climate / preheating",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:"This add-on needs a newer version of NeonPlan 3D. Please update first (Settings \u203A System \u203A Updates), restart Home Assistant, then install again.",license_error_needs_update:"This add-on needs a newer version of NeonPlan 3D. Please update first (Settings \u203A System \u203A Updates), restart Home Assistant, then install again.",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",furn_cable_to_grid:"Cable ends at the grid point",furn_cable_to_grid_hint:"Energy Pro: this inverter's cable runs to the grid point instead of the meter \u2013 for instance when the inverter and the grid connection are far from the house board.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_hinge:"Sidelight on the hinge side",sidelight_width:"Sidelight width (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",style_slide:"Sliding (one pane slides in front of the fixed one)",preset_terrace_slide:"Lift-and-slide door",preset_window_slide:"Sliding window",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",gate_kind_swing:"Garden gate (one leaf)",gate_kind_double:"Double gate (two leaves)",gate_kind_slide:"Sliding gate",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_pitch_upper:"Upper roof pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_overhang_sides:"Overhang per side",roof_overhang_sides_hint:"Set the roof overhang for each side yourself. Off: automatic \u2013 no overhang where the section meets a taller part of the house.",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",panel_more:"More devices of the area ({n})",panel_less:"Show less",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching between the house and the floors keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",surround_err_busy:"The map servers are busy right now. Please try again in a few minutes.",surround_err_empty:"The map has no houses or streets for this place yet.",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",opening_height:"Height (m)",blind_side:"Blind sits",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_main:"Handle sensor main leaf",entity_auto:"Automatic ({name})",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",rotation:"Rotation (\xB0)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",wall_heights:"Wall heights",style_group_custom:"Own styles",style_new:"Make an own style from it",style_own_suffix:"(own)",style_delete:"Delete style",style_name:"Name",style_builtin_hint:"A ready style. To adjust it, \u201CMake an own style from it\u201D \u2013 then every setting is there, and your style is in every style list.",style_show_beside:"Show in \u201C3D beside\u201D",style_natural:"Real materials (wood, tiles, wall colours)",style_dark:"Dark style \u2013 lines glow",style_line:"Lines",style_surface_dark:"Surfaces dark",style_surface_light:"Surfaces light",style_hue:"Share of colour",style_lift:"Base brightness",style_contrast:"Contrast",style_signal:"Active devices in colour",style_sun:"Light by direction",style_ao:"Room corners",style_shadows:"Contact shadows under furniture",style_floors:"Floor structure",style_cut:"Dark cut edges",style_dim:"Evening mood",style_bg_top:"Background top",style_bg_bottom:"Background bottom",style_times:"Times of day (house plan)",wall_exterior_short:"exterior wall",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto (Day/Neon by the sun)",style:"Style",style_neon:"Neon",style_blueprint:"Blueprint",style_day:"Day",style_focus:"Night / Focus",style_synth:"Synthwave",style_cozy:"Homely",style_evening:"Homely evening",style_winter:"Winter evening",style_model:"Architect's model",style_pastel:"Pastel",style_warm:"Warm / Wood & paper",style_house:"House plan (day / evening / night)",style_group_neon:"Neon & classic",style_group_homely:"Homely \u2013 real materials",style_group_designed:"Designed",style_group_auto:"Automatic",style_set:"Style \u201C{name}\u201D is on.",style_reset:"Style back to the setting.",style_none:"\u2013 none \u2013",style_day_label:"By day",style_evening_label:"In the evening",style_night_label:"At night",style_switch:"Switch",style_switch_sun:"by the sun",style_switch_time:"by the clock",style_morning_at:"Day from",style_evening_at:"Evening from",style_night_at:"Night from",style_switch_hint:"By the sun: day while the sun is up, then evening until \u201CNight from\u201D. By the clock: the three times.",style_entity:"Style from a helper entity",style_entity_hint:"An input_select or input_text whose state names a style (e.g. \u201CHomely\u201D). While it names one, that style applies \u2013 automations can switch it.",theme_evening:"Style in the evening",theme_night:"Style at night",theme_schedule_hint:"Empty = the same style all day. It switches as set in the house plan (by the sun or the clock).",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",mount_height:"Height above the floor (m)",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_out:"Put out (helper)",bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",hh_service2:"{name}: {what} due",bin_none:"No pickup in sight",hh_title:"Today in the household",heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_neon_sign:"Neon sign",sign_color:"Colour of the tubes",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",furn_lamp_fan:"Ceiling fan with light",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",furn_group_household:"Household",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_door:"Sensor of the emptying door (optional)",mailbox_post:"Post",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',pro_name_frames:"Digital Picture Frames",pro_feature_frames:"Digital Picture Frames: frames on the wall show a slideshow, the calendar, a pin board, lists or a camera picture \u2013 a tap opens it large",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",awning_pitch:"Fall (\xB0)",awning_valance:"Valance (fabric edge at the front)",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",furn_glow_color:"Fixed colour in 3D",furn_glow_color_hint:"The lamp always glows in this colour in the plan, whatever colour the light reports \u2013 on/off and brightness still come from the light.",furn_only_color:"Glow only while the light shows this colour",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",solar_pro_soon:"coming soon",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",lock_plan:"\u{1F512} Floor plan",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",climate:"Room climate",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show_always:"Always show",marker_show_active:"Only while active",marker_show_no_power:"Without watts",marker_show_never:"Hide",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",floor_lights:"{n} lights on",now_title:"What's going on?",now_open_one:"1 window or door open",now_open:"{n} windows and doors open",now_tilted:"tilted",now_unlocked_one:"1 door not locked",now_unlocked:"{n} doors not locked",now_home:"At home",now_away:"Away",now_nobody:"Nobody at home",now_lights_one:"1 light on",now_lights:"{n} lights on",now_battery:"Battery",now_car_away:"away",now_calm:"All is well",now_calm_away:"You are away \u2013 all is well at home",now_calm_detail:"No warning, nothing open, nothing to do.",now_try:"New for phones: \u201CWhat's going on?\u201D \u2013 your home at a glance.",now_try_yes:"Try it",now_try_no:"No thanks",now_lights_off:"All off",now_lock:"Lock",now_check:"House check",now_check_hint:"Before leaving or going to bed: look at everything open or switched on, one after another, and switch it off.",now_next:"Next",now_done:"Done",now_check_done:"House check done",now_check_nothing:"All shut, all off.",now_window_hint:"shut it by hand",now_all_lights_off:"All {n} lights off",nav_now:"Now",nav_rooms:"Rooms",nav_covers:"Blinds",nav_more:"More",nav_whole_floor:"Whole floor",nav_all_up:"All up",nav_all_down:"All down",nav_house:"Whole house",nav_solo:"Room on its own",nav_solo_hint:"A room you jump into stands alone in the picture, without the rest of the house.",nav_off:"Phone view off",now_setting:"Phone view",now_setting_hint:"The house without its header, and a bar at the bottom: Now (what is going on, with \u201CAll off\u201D and the house check), the rooms by floor, the blinds and More.",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence"},wf=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","sk","zh","pt","tr"],Yn=new Map,Rr=new Map;function Fr(o){let e=(o??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return wf.includes(t)?t:null}function un(o){let e=Fr(o);return!e||Yn.has(e)}function Ko(o){let e=Fr(o);if(!e||Yn.has(e))return Promise.resolve();let t=Rr.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=dcd49bae75d2`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{Yn.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{Yn.set(e,{})}).finally(()=>Rr.delete(e)),Rr.set(e,t)}return t}var Vo={de:{},en:{}};function P(o,e,t={}){let n=o?.language??navigator.language,i=n.startsWith("de")?null:Fr(n),r=_f,s=vf,a=i?Yn.get(i):void 0,c=(n.startsWith("de")?r[e]??Vo.de[e]:a?a[e]:s[e]??Vo.en[e])??s[e]??Vo.en[e]??r[e]??Vo.de[e]??e;for(let[d,u]of Object.entries(t))c=c.replace(`{${d}}`,String(u));return c}function ne(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var yf={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},xf=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),kf=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),$f=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Uo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],vc=new Set(["light","switch","fan"]);function wc(o){return o.slice(0,o.indexOf("."))}function N(o){return yf[wc(o)]??null}function uc(o){return o!==null&&o!=="scene"&&o!=="script"}var Sf=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function Go(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!Sf.has(String(o.attributes.device_class??""))}function Cr(o,e){let t=(o?.attributes.supported_features??0)|0;return t!==0&&!(t&3)&&(t&176)!==0?e==="stop"?{service:"stop_cover_tilt",data:{}}:t&(e==="open"?16:32)?{service:e==="open"?"open_cover_tilt":"close_cover_tilt",data:{}}:{service:"set_cover_tilt_position",data:{tilt_position:e==="open"?100:0}}:{service:e==="open"?"open_cover":e==="close"?"close_cover":"stop_cover",data:{}}}function jo(o,e,t){let n=new Map;for(let i of e){let r=Cr(o.states[i],t),s=`${r.service}|${JSON.stringify(r.data)}`,a=n.get(s)??{...r,ids:[]};a.ids.push(i),n.set(s,a)}return[...n.values()].map(i=>({service:i.service,data:{...i.data,entity_id:i.ids}}))}function Mf(o,e){let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let i=o.devices?.[n];if(!i)return null;if(i.area_id)return i.area_id;n=i.parent_device_id}return null}function Te(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:Mf(o,t.device_id):null}function qo(o,e){let t=o.entities?.[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function pc(o,e){let t=N(e);if(!t)return!1;let n=o.entities?.[e];if(qo(o,e)||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class,s=String(i.attributes.unit_of_measurement??"");return t==="sensor"?r?xf.has(r)||r==="voltage"&&s==="mV":kf.has(s):t==="binary"?r?$f.has(r):!!n?.area_id:!0}var If=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function hc(o,e){if(N(e)!=="sensor")return!1;let t=o.entities?.[e];if(qo(o,e)||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||If.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Y(n)}var Hr=null;function Qn(o){let e=Hr;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&Kr(o,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!qo(o,l)&&!c.entity_category&&(r.get(d)??r.set(d,new Set).get(d)).add(wc(l));let u=pc(o,l),p=Te(o,l);if(!p){(u||hc(o,l))&&uc(N(l))&&i.push(l);continue}u&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(pc(o,l)||hc(o,l))&&uc(N(l))&&i.push(l);i.sort((l,c)=>Uo.indexOf(N(l))-Uo.indexOf(N(c))||K(o,l).localeCompare(K(o,c)));for(let[l,c]of t){let d=o.areas?.[l]?.name;c.sort((u,p)=>{let h=Uo.indexOf(N(u)),b=Uo.indexOf(N(p));return h-b||K(o,u,d).localeCompare(K(o,p,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Hr={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:r,hubs:a},Hr}function we(o,e){return!e||!o.entities?[]:Qn(o).areas.get(e)??[]}var Pf={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ef=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),zf=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Tf(o,e){let t=o.entities?.[e]?.device_id,n=t&&!Qn(o).hubs.has(t)?Qn(o).domains.get(t):void 0;return n&&[...n].some(i=>Ef.has(i))?!1:!zf.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Dr(o,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=Pf[n],s=(h,b)=>V([h,b],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id)),d=[...new Set([...we(o,t.area_id).filter(h=>!c.has(h)),...l])],u=d.filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===r&&(t.outdoor||Tf(o,h)));if(u.length)return u;let p=yc[n];return p?d.filter(h=>h.startsWith("climate.")&&typeof o.states[h]?.attributes[p]=="number"):[]}var yc={temperature:"current_temperature",humidity:"current_humidity"};function Af(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let r=yc[t],s=r?Number(n?.attributes[r]):Number.NaN;return t==="temperature"?fc(s,Oe(o)):s}let i=Number(n?.state);return t==="temperature"?fc(i,n?.attributes.unit_of_measurement):i}function Oe(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function fc(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function wt(o,e){return Oe(o)==="\xB0F"?e*9/5+32:e}function Ne(o,e,t,n){let i=Dr(o,e,t,n).map(r=>Af(o,r,n)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function xc(o,e){return!!o.entities&&Qn(o).hubs.has(e)}function Lr(o,e){return o.entities?Qn(o).power.get(e)??[]:[]}function K(o,e,t,n=!1){let i=o.states[e],r=o.entities?.[e],s=i?.attributes.friendly_name??r?.name??e;if(n&&r?.name&&r.device_id){let a=o.devices?.[r.device_id],l=(a?.name_by_user||a?.name||"").trim();l&&s.toLowerCase()===`${l} ${r.name}`.toLowerCase()&&(s=r.name)}if(t&&s.length>t.length+1&&s.toLowerCase().startsWith(t.toLowerCase()+" ")){let a=s.slice(t.length+1);return a.charAt(0).toUpperCase()+a.slice(1)}return s}function kc(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||Y(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let i=Number(n);return Number.isFinite(i)?i>0:null}function $c(o){let e=o.toLowerCase().trim().replace(/[\s-]+/g,"_"),t=/(^|_)(not|no|nicht|kein|keine|un|dis)_?(charging|charge|connected|plugged|verbunden|angesteckt)/.test(e),n=/charger_free|^available$|^idle$|frei|abgesteckt|no_car|kein_fahrzeug/.test(e),i=!t&&!/ready_to_charge|charger_|complete|finish|charged|fertig|beendet|voll$|full/.test(e)&&/(^|_)(charging|charge|laden|lädt|ladend|lade)($|_)/.test(e),r=i||!t&&!n&&/connect|plug|ready|insert|angesteckt|verbunden|wait|paused|suspend|preparing|complete|finish|charged|fertig|full|voll/.test(e);return{charging:i,plugged:r}}function Y(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Rf=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Or(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Nr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function He(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Nr(o.state)||o.state==="returning";switch(N(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Or(o)&&Rf.has(String(o.state).toLowerCase());default:return!1}}function Sc(o,e){if(!o||Y(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Mc(o){if(!o||Y(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(t);return{color:n,level:i||!t?1:.45}}function Ic(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),d=l-c;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[i]=n(t),[r]=n(o.color);if(i<0||r<0)return i<0&&r<0?o:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?o:null}function Pc(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)/255);return{...o,color:t}}function ot(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,r;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?r=Ff(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:n}}function Ec(o){let e=o.attributes.supported_color_modes;return!Array.isArray(e)||!e.length?!0:e.some(t=>["hs","rgb","rgbw","rgbww","xy"].includes(String(t)))}function Ff(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function pn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Hf=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Cf=new Set(["garage","gate"]),Df=new Set(["window","opening"]);function Xn(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function Jn(o,e){let t=new Map,n=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>{let l=n(r.cover,s);return{cover:l,contact:r.sensor==="handle"&&r.contact==null?null:n(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,lock:(r.type==="door"||r.type==="window"&&r.sill<=.01)&&r.lock&&r.lock!=="none"?r.lock:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:l&&N(l)==="cover"&&r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,...r.slat_invert?{slatInvert:!0}:{},tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}}};for(let r of e){for(let s of r.rooms){let a=r.openings.filter(v=>v.room_id===s.id).sort((v,f)=>v.edge-f.edge||v.offset-f.offset);if(!a.length)continue;let l=we(o,s.area_id),c=v=>o.states[v]?.attributes.device_class,d=l.filter(v=>N(v)==="cover"&&Hf.has(c(v))),u=a.filter(v=>v.type==="window"),p=a.filter(v=>v.type==="door"),h=a.filter(v=>v.type==="garage"),b=Xn(u,d,!0),_=Xn(u,l.filter(v=>N(v)==="binary"&&Df.has(c(v)))),m=Xn(p,l.filter(v=>N(v)==="binary"&&c(v)==="door")),w=Xn(h,l.filter(v=>N(v)==="cover"&&Cf.has(c(v)??""))),k=Xn(h,l.filter(v=>N(v)==="binary"&&c(v)==="garage_door"));for(let v of a){let f=v.type==="window"?b:v.type==="garage"?w:null,M=v.type==="window"?_:v.type==="garage"?k:m;t.set(v.id,i(v,f?.get(v.id),M.get(v.id)))}}for(let s of r.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var Lf=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Of(o){if(!o||Y(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Lf.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}var Nf=new Set(["unlocked","unlocking","open","opening"]);function Wr(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var Wf=.5;function it(o,e,t="window"){e.cover&&Wr(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,i=n&&Nf.has(n.state)?{unlocked:!0}:{},r=f=>!!f&&o.states[f]?.state==="on",s=f=>!!f&&!!o.states[f]&&!Y(o.states[f]),a=f=>f?Of(o.states[f]):null,l=f=>{let M=a(f);return e.contactInvert&&f&&f!==e.tilt&&f!==e.tilt2&&M!=="tilted"&&M?M==="open"?"closed":"open":M},c=r(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!c?1:0,u=r(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let f=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,f/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let b=l(e.contact)==="open"&&!u?1:0,_=null,m=e.cover?o.states[e.cover]:void 0,w=Tc(o,e.position);if(w!==null)_=e.positionInverted?w:1-w;else if(m&&!Y(m)){let f=m.attributes.current_position;typeof f=="number"?_=1-Math.min(100,Math.max(0,f))/100:_=m.state==="closed"?1:m.state==="opening"||m.state==="closing"?.5:0}else e.cover&&(_=0);let k=m&&!Y(m)?hn(m,!!e.slatInvert):null,v=k===null?{}:{slats:k/100};if(t==="door"){let f=l(e.contact);return _!==null&&m&&Lc.has(String(m.attributes.device_class??""))?{open:f===null?1-_:f==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...i}:{open:f===null?e.shut?0:Wf:f==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:_,...v,sensed:f!==null||_!==null,...i}}if(t==="garage"){let f=l(e.contact),M=_!==null||f!==null;return _===null&&(_=f===null||f==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:_,sensed:M}}return{open:b,open2:d,tilt:p,tilt2:c?1:0,cover:_,...v,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...i}}function zc(o,e){return e==="garage"?(o.cover??1)<.98:o.open>.02||o.open2>.02}function hn(o,e=!1){let t=o?.attributes.current_tilt_position;if(typeof t!="number"||!Number.isFinite(t))return null;let n=Math.min(100,Math.max(0,t));return e?100-n:n}function eo(o,e){return!!o?.floors.some(t=>t.openings.some(n=>n.cover===e&&n.slat_invert))}function Tc(o,e){let t=e?o.states[e]:void 0;if(!t||Y(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function Br(o,e){let t=new Map,n=[];for(let s of e){let a=N(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function Zo(o,e){return Br(o,e).map(t=>t.primary)}var mc={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Ac=new Set(["tv_board","tv_wall"]);function Rc(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Fc(o){return Ac.has(o)||!!Dl(o)}function Yo(o){return Fc(o)||o==="desk"||o==="fridge_smart"}function fn(o,e){let t=new Set,n=Wt(o,e),i=e.some(r=>r.openings.some(s=>s.confirm))?Jn(o,e):null;for(let r of e){for(let s of r.placements)s.confirm&&t.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of r.furniture){let a=s.confirm?n.get(s.id)?.entity:null;if(a&&a!=="none"&&t.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&t.add(l.entity)}}return t}function Hc(o,e){let t=new Map;for(let n of e)for(let i of n.furniture){if(i.type!=="awning"&&!Do(i.type))continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?o.states[r]:void 0,a=i.awning_time??20;if(!s||Y(s)){t.set(i.id,{out:0,moving:0,time:a});continue}let l=p=>i.awning_invert?1-p:p,c=Tc(o,i.awning_position&&i.awning_position!=="none"?i.awning_position:null),d=s.attributes.current_position,u=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;c!==null?t.set(i.id,{out:l(c),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?t.set(i.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):u?t.set(i.id,{out:null,moving:u,time:a}):t.set(i.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}for(let n of e)for(let i of n.outdoor??[])if(i.type==="fence")for(let r of i.gates??[])t.set(r.id,Bf(o,r));return t}function Bf(o,e){let t=e.time??(e.kind==="slide"?15:4),n=a=>a&&a!=="none"?o.states[a]:void 0,i=n(e.contact);if(i&&!Y(i))return{out:null,moving:i.state==="on"||i.state==="open"?1:-1,time:t,settled:!0};let r=n(e.entity);if(!r||Y(r))return{out:null,moving:-1,time:t,settled:!0};let s=r.attributes.current_position;return typeof s=="number"&&Number.isFinite(s)?{out:Math.min(1,Math.max(0,s/100)),moving:0,time:t}:r.state==="opening"?{out:null,moving:1,time:t}:r.state==="closing"?{out:null,moving:-1,time:t}:{out:null,moving:r.state==="open"||r.state==="on"?1:-1,time:t,settled:!0}}function Vr(o,e){let t=i=>{if(!i||i==="none")return!1;let r=o.states[i]?.state;return r==="on"||r==="open"},n=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var gc={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Kr(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Vf(o,e){if(Kr(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Lr(o,t).find(n=>n!==e)??null:null}function Wt(o,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(r=>[r.entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in gc,a=s?gc[r.type]:mc[r.type]??(ln(r.type)?mc.robot_vacuum:void 0);if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&V([r.x,r.z],h.points))??(r.type==="awning"?Pr(n).find(h=>V([r.x,r.z],h.points)):void 0),c=l?Zo(o,we(o,l.area_id)):[],d=h=>`${h} ${K(o,h)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let h=c.filter(b=>!i.has(b));if(s){let b=h.filter(_=>N(_)==="light");u=b.find(_=>a.test(d(_)))??b[0]??null}else if(ln(r.type)){let b=l?.area_id??null;u=Object.keys(o.entities??{}).find(_=>_.startsWith("vacuum.")&&!i.has(_)&&!qo(o,_)&&Te(o,_)===b)??null}else if(r.type==="radiator"||r.type==="ac_unit"){let b=h.filter(_=>N(_)==="climate");u=b.find(_=>a.test(d(_)))??b[0]??null}else if(Fc(r.type)){let b=h.filter(_=>N(_)==="media");u=b.find(_=>o.states[_]?.attributes.device_class==="tv")??b.find(_=>a?.test(d(_)))??(Ac.has(r.type)?b[0]??null:null)}else r.type==="awning"?u=h.find(b=>b.startsWith("cover.")&&(a?.test(d(b))||o.states[b]?.attributes.device_class==="awning"))??null:a&&(u=h.find(b=>["switch","media","fan"].includes(N(b)??"")&&a.test(d(b)))??null);u&&i.add(u)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=u?Vf(o,u):null,!p&&a&&l&&!s&&(p=we(o,l.area_id).find(b=>Kr(o,b)&&!i.has(b)&&a.test(d(b)))??null),p&&i.add(p)),(u||p)&&t.set(r.id,{entity:u,power:p})}}return t}function Ur(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function Xo(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function Gr(o){if(!o||o.state==="off"||o.state==="standby"||Y(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function mn(o,e,t,n=[]){let i=(u,p)=>V([u,p],t.points),r=Wt(o,[e]),s=Jn(o,[e]),a=[...e.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>[r.get(u.id)?.entity,r.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),c=[...new Set(a)].filter(u=>!l.has(u)),d=new Set(c);return{shown:c,more:we(o,t.area_id).filter(u=>!d.has(u)&&!l.has(u))}}var bc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Kf={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Qo(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,i=n(t.device)??n(e.entity),r=i?o.entities?.[i]?.device_id:null,s=r&&o.entities?Object.values(o.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,h)=>s.find(b=>p.includes(b.split(".")[0])&&Kf[u].test(a(b))&&(!h||h(b)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Uf(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function to(o,e){let t=Qo(o,e),n=m=>m?o.states[m]:void 0,i=m=>{let w=Number(n(m)?.state);return m&&Number.isFinite(w)?w:null},r=i(t.soc),s=i(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),b=n(t.tracker),_=b?.state.toLowerCase()??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:p?Uf(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:b&&_!=="home"&&!Y(b)?_==="not_home"?"":b.state:null}}function Cc(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Qo(o,n)))).filter(t=>!!t)}function no(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(bc.test(i.translation_key??"")||bc.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function _c(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Dc(o,e,t,n){let i=t?o.states[t]?.attributes:void 0;for(let r of[n?o.states[n]?.state:void 0,i?.current_room,i?.room,i?.current_segment]){let s=jr(o,e,r);if(s)return s}return null}function jr(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=_c(t);if(!n)return null;let i=r=>[r.name,r.area_id??"",r.area_id&&o.areas?.[r.area_id]?.name||""].map(_c).filter(Boolean);return e.find(r=>i(r).includes(n))??e.find(r=>i(r).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var Lc=new Set(["garage","gate","door"]);function gn(o,e){let t=new Set,n=new Set,i=r=>{if(!r||r==="none"||!o.states[r])return;let s=N(r);s==="light"?t.add(r):s==="cover"&&!Lc.has(String(o.states[r].attributes.device_class??""))&&n.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of Zo(o,we(o,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...t],covers:[...n]}}function Oc(o,e){let t=new Set,n=i=>{i&&i.startsWith("climate.")&&o.states[i]&&t.add(i)};for(let i of e.rooms){let r=new Set(i.hidden??[]);for(let s of we(o,i.area_id))r.has(s)||n(s)}for(let i of e.placements)n(i.entity_id);for(let i of e.furniture)n(i.entity);return[...t]}function rt(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function oo(o){o!==location.pathname+location.search&&(history.pushState({from:location.pathname},"",o),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}})))}function Nc(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)oo(n);else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,r]=n.split(".",2);o.callService(i,r,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}function Gf(o,e,t){let n=o.q[0]-o.p[0],i=o.q[1]-o.p[1],r=n*n+i*i,s=r>0?Math.min(1,Math.max(0,((e-o.p[0])*n+(t-o.p[1])*i)/r)):0;return o.h0+(o.h1-o.h0)*s}var Ae=(o,e)=>[o[0]-e[0],o[1]-e[1]],yt=(o,e)=>[o[0]+e[0],o[1]+e[1]],st=(o,e)=>[o[0]*e,o[1]*e],Zr=(o,e)=>o[0]*e[0]+o[1]*e[1],bn=(o,e)=>o[0]*e[1]-o[1]*e[0],io=o=>Math.hypot(o[0],o[1]),xt=o=>{let e=io(o)||1;return[o[0]/e,o[1]/e]},Wc=o=>[-o[1],o[0]],Bc=o=>[o[1],-o[0]];function kt(o,e,t=[]){let n=e.eps??.005,i=[],r=t.filter($=>Math.hypot($.b[0]-$.a[0],$.b[1]-$.a[1])>.05),s=[],a=$=>{for(let E=0;E<s.length;E++)if(Math.abs(s[E][0]-$[0])<=n&&Math.abs(s[E][1]-$[1])<=n)return E;return s.push([$[0],$[1]]),s.length-1},l=[];for(let $ of o){let E=$.points;if(E.length<3||Math.abs(De(E))<1e-6)continue;let C=De(E)>0,D=E.map(a);for(let H=0;H<E.length;H++){let G=D[H],Z=D[(H+1)%E.length];G!==Z&&l.push(C?{u:G,v:Z,room:$.id,edge:H,forward:!0}:{u:Z,v:G,room:$.id,edge:H,forward:!1})}}let c=r.map($=>[a($.a),a($.b)]),d=new Set;for(let $ of o){let E=$.points;E.length<3||($.wall_splits??[]).forEach((C,D)=>{if(!C||D>=E.length)return;let H=E[D],G=Ae(E[(D+1)%E.length],H),Z=io(G);for(let F of C)F>n&&F<Z-n&&d.add(a(yt(H,st(G,F/Z))))})}let u=[];for(let $ of l){let E=s[$.u],C=s[$.v],D=Ae(C,E),H=io(D),G=st(D,1/H),Z=[];for(let U=0;U<s.length;U++){if(U===$.u||U===$.v)continue;let O=Ae(s[U],E),J=Zr(O,G);J<=n||J>=H-n||Math.abs(bn(G,O))<=n&&Z.push({t:J,id:U})}Z.sort((U,O)=>U.t-O.t);let F=[{t:0,id:$.u},...Z,{t:H,id:$.v}];for(let U=0;U+1<F.length;U++){let O=F[U],J=F[U+1],Q=$.forward?O.t:H-J.t,pe=$.forward?J.t:H-O.t;u.push({u:O.id,v:J.id,room:$.room,edge:$.edge,t0:Q,t1:pe})}}let p=new Map;for(let $ of u){let E=$.u<$.v?`${$.u}-${$.v}`:`${$.v}-${$.u}`,C=p.get(E);C||p.set(E,C=[]),C.push($)}let h=$=>({room_id:$.room,edge:$.edge,t0:$.t0,t1:$.t1}),b=new Map;for(let $ of u){let E=`${$.room}:${$.edge}`;b.set(E,[...b.get(E)??[],$.t0].sort((C,D)=>C-D))}let _=$=>{let E=o.find(D=>D.id===$.room)?.wall_heights?.[$.edge];if(!Array.isArray(E))return E;let C=b.get(`${$.room}:${$.edge}`)??[];return E[C.indexOf($.t0)]??null},m=$=>{let E=$.map(_).filter(D=>typeof D=="number"&&D>0);if(E.length)return Math.min(...E);let C=$.map(D=>o.find(H=>H.id===D.room)?.ceiling_height);return C.every(D=>typeof D=="number"&&D>0)?Math.max(...C):void 0},w=$=>{let E=$.map(C=>o.find(D=>D.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return E.length?Math.max(...E):void 0},k=$=>{for(let E of $){let C=o.find(Z=>Z.id===E.room),D=C?.wall_slopes?.[E.edge];if(!C||!D)continue;let H=C.points[E.edge],G=C.points[(E.edge+1)%C.points.length];return{p:[H[0],H[1]],q:[G[0],G[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},v=$=>$.some(E=>_(E)===0),f=$=>{let E=k($);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:m($)}},M=[],x=[],I=[];for(let $ of p.values()){let E=$[0],C=$.find(D=>D!==E&&D.u===E.v&&D.v===E.u&&D.room!==E.room);for(let D of $)D!==E&&D!==C&&D.room!==E.room&&i.push(`overlap:${E.room}:${D.room}`);if(v(C?[E,C]:[E])){C&&M.push([E.room,C.room]),x.push(C?[h(E),h(C)]:[h(E)]);continue}if(C){let D=w([E,C])??e.interior;I.push({a:E.u,b:E.v,left:D/2,right:D/2,exterior:!1,roomLeft:E.room,roomRight:C.room,sources:[h(E),h(C)],...f([E,C])})}else I.push({a:E.u,b:E.v,left:0,right:w([E])??e.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[h(E)],...f([E])})}let z=$=>xt(Ae(s[$.b],s[$.a]));for(let $ of I){if($.exterior||$.free)continue;let E=new Set;for(let D of[$.a,$.b])for(let H of I)!H.exterior||H.free||H.a!==D&&H.b!==D||Math.abs(bn(z($),z(H)))>1e-6||(H.roomLeft===$.roomLeft?E.add("left"):H.roomLeft===$.roomRight&&E.add("right"));if(E.size!==1)continue;let C=$.left+$.right;E.has("left")?($.left=0,$.right=C):($.left=C,$.right=0)}r.forEach(($,E)=>{let[C,D]=c[E];if(C===D)return;let H=[($.a[0]+$.b[0])/2,($.a[1]+$.b[1])/2],G=o.find(J=>J.points.length>=3&&V(H,J.points))?.id??null,Z=($.thickness??e.interior)/2,F=typeof $.height=="number"&&$.height>0?$.height:void 0,U=$.slope,O=U?{p:[$.a[0],$.a[1]],q:[$.b[0],$.b[1]],h0:Math.max(.05,U[0]),h1:Math.max(.05,U[1])}:void 0;I.push({free:$.id,a:C,b:D,left:Z,right:Z,exterior:!1,roomLeft:G,roomRight:G,sources:[],...O?{height:Math.max(O.h0,O.h1),slope:O}:{height:F}})}),I=qf(I,s,d);let R=Yf(I,s);return{walls:I.map(($,E)=>{let C=s[$.a],D=s[$.b],H=R.get(`${E}:a`),G=R.get(`${E}:b`),Z=Xf([H.right,G.left,D,G.right,H.left,C],1e-6);return{id:jf(C,D),a:[C[0],C[1]],b:[D[0],D[1]],left:$.left,right:$.right,exterior:$.exterior,roomLeft:$.roomLeft,roomRight:$.roomRight,sources:$.sources,footprint:Z,...$.free?{free:$.free}:{},...$.height!==void 0?{height:$.height}:{},...$.slope?{slope:$.slope}:{}}}),warnings:[...new Set(i)],open:M,noWalls:x}}function jf(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function qr(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function qf(o,e,t=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[s,a]of r){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]],d=l.b!==s&&c.a!==s;if(l.b!==s&&(l=qr(l)),c.a!==s&&(c=qr(c)),l.a===c.b)continue;let u=xt(Ae(e[l.b],e[l.a])),p=xt(Ae(e[c.b],e[c.a]));if(Math.abs(bn(u,p))>1e-6||Zr(u,p)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:Zf(l.sources,c.sources)},b=d?qr(h):h,_=n.filter((m,w)=>w!==a[0]&&w!==a[1]);_.push(b),n.length=0,n.push(..._),i=!0;break}}return n}function Zf(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Yf(o,e){let t=new Map;o.forEach((i,r)=>{let s=xt(Ae(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:st(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:yt(s,st(Wc(c.d),c.left)),right:yt(s,st(Bc(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=yt(s,st(Wc(d.d),d.left)),h=yt(s,st(Bc(u.d),u.right)),b=bn(d.d,u.d);if(Math.abs(b)<1e-4)continue;let _=bn(Ae(h,p),u.d)/b,m=yt(p,st(d.d,_));io(Ae(m,s))>l||(n.get(d.key).left=m,n.get(u.key).right=m)}}return n}function Xf(o,e){let t=o.filter((i,r)=>io(Ae(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=Ae(s,r),c=Ae(a,s);if(Math.abs(bn(xt(l),xt(c)))<1e-7&&Zr(l,c)>0){t=t.filter((d,u)=>u!==i),n=!0;break}}}return t}function Jo(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],r=xt(Ae(i,n));return yt(n,st(r,t))}function Vc(o,e,t){if(o.wall){let i=t.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=xt(Ae(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,yt(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function Kc(o,e,t,n){let i=e.rotation*Math.PI/180,r=[-Math.sin(i),Math.cos(i)],s=Math.max(.005,e.d),a=null;for(let c of o){let d=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(d<.05)continue;let u=[(c.b[0]-c.a[0])/d,(c.b[1]-c.a[1])/d],p=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(p<-.02||p>d+.02)continue;let h=[-u[1],u[0]],b=(e.x-c.a[0])*h[0]+(e.z-c.a[1])*h[1],_=r[0]*h[0]+r[1]*h[1]>=0?1:-1;if(Math.abs(r[0]*h[0]+r[1]*h[1])<.5)continue;let m=_>0?c.left:-c.right,w=b>-c.right-1e-4&&b<c.left+1e-4,k=Math.abs(b-(m+_*(s/2)));if(!w&&k>.03||a&&k>=a.off)continue;let v=c.a[0]+u[0]*p,f=c.a[1]+u[1]*p,M=w?m+_*(s/2):b,x=c.slope?Gf(c.slope,e.x,e.z):Math.min(t,c.height??t);a={x:v+h[0]*M,z:f+h[1]*M,top:x,off:k}}if(!a)return{x:e.x,z:e.z,y:n};let l=e.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-e.h-.02)):n;return{x:a.x,z:a.z,y:l}}var at=Math.PI/180;function _n(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*at;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function We(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],i=e[1]-o.p[1],r=t?-o.s:o.s;return[o.p[0]+n*o.c-i*r,o.p[1]+n*r+i*o.c]}function lt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1),r=_n(o),s=o.axis==="x"?(l,c)=>[l,o.flip?i-c:n+c]:(l,c)=>[o.flip?t-c:e+c,l],a=r?(l,c)=>We(r,s(l,c)):s;return o.axis==="x"?{u0:e,u1:t,w:i-n,at:a}:{u0:n,u1:i,w:t-e,at:a}}function Qf(o,e,t,n=1e-6){let[i,r]=ed(o,e,t),s=lt({...o,rotation:0});return i>=s.u0-n&&i<=s.u1+n&&r>=-n&&r<=s.w+n}function vn(o){let e=lt(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*at),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*at);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(o.shape==="mansard"){let l=Qc(e,t,n,i,r,Xc(o));return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*r}}function Yr(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Gc=.14,Jf=.03;function jc(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Xr(o,e){return vn(o).rh-Gc>e+.01}function qc(o,e,t,n){let i=null,r=[],s=[],a=Math.max(0,o.settings.roof.overhang??0),l=Yr(o);for(let d of l){if(d.open||n!==void 0&&!Xr(d,n))continue;let u=d.points&&d.points.length>=3?null:d.overhang_sides??null,p=C=>typeof u?.[C]=="number"?Math.max(0,u[C]):null,[h,b]=ed(d,e,t),_=lt({...d,rotation:0}),m=1e-6,[w,k,v,f]=[_.u0-(p(2)??0),_.u1+(p(3)??0),-(p(0)??0),_.w+(p(1)??0)],M=Math.max(w-h,h-k,v-b,b-f),x=!!d.points&&d.points.length>=3;if(M>(x?m:Jf)||x&&!V([e,t],d.points))continue;let I=d.shape==="flat"||d.shape==="parapet",z=Math.max(0,d.overhang??a),[R,T]=[Math.min(k,Math.max(w,h)),Math.min(f,Math.max(v,b))],E=((I?null:sm(rm(d,{a:p(0)??z,b:p(1)??z,u0:p(2)??z,u1:p(3)??z}),R,T))??vn(d).y(T))-Gc;M>m?r.push({s:d,y:E}):(i=i===null?E:Math.max(i,E),s.push(d))}let c=null;if(i!==null)for(let{s:d,y:u}of r){if(c!==null&&u<=c)continue;let p=es(l,d);p&&s.includes(p)||(c=u)}return i!==null&&c!==null&&c>i?c:i}function Zc(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(r=>[r[0],r[1]]);let n=rc(o)>=0?1:-1,i=[];for(let r=0;r<t;r++){let s=o[(r+t-1)%t],a=o[r],l=o[(r+1)%t],c=Uc([a[0]-s[0],a[1]-s[1]]),d=Uc([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],p=[d[1]*n,-d[0]*n],h=u[0]+p[0],b=u[1]+p[1],_=Math.hypot(h,b);if(_<1e-6){i.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let m=(h*u[0]+b*u[1])/_,w=Math.min(4,1/Math.max(.25,m));i.push([a[0]+h/_*e*w,a[1]+b/_*e*w])}return i}function Uc(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function Yc(o,e){if(o.points&&o.points.length>=3)return Zc(o.points,e);let t=Math.min(o.x0,o.x1)-e,n=Math.max(o.x0,o.x1)+e,i=Math.min(o.z0,o.z1)-e,r=Math.max(o.z0,o.z1)+e,s=_n(o);return[[t,i],[n,i],[n,r],[t,r]].map(a=>We(s,a))}function em(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}var tm=30,nm=5,om=60;function im(o){let e=o.pitch_upper;return typeof e=="number"&&Number.isFinite(e)?Math.min(om,Math.max(nm,e)):tm}function Xc(o){return Math.tan(im(o)*at)}function Qc(o,e,t,n,i,r){let s=Math.min(o*.3,n>1e-6?2.4/n:o*.3),a=Math.min(o*.3,i>1e-6?2.4/i:o*.3),l=e+s*n,c=t+a*i,d=Math.min(o-a,Math.max(s,(c-l+r*(o-a+s))/(2*r))),u=l+(d-s)*r;return{vla:s,vlb:a,yla:l,ylb:c,vr:d,rh:u,y:h=>h<=s?e+h*n:h<=d?l+(h-s)*r:h<=o-a?c+(o-a-h)*r:t+(o-h)*i}}function rm(o,e){let t=lt(o),n=vn(o),i=t.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(F,U)=>[F,U,n.y(U)],d=c(a,-r),u=c(l,-r),p=c(l,i+s),h=c(a,i+s),b=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*at),_=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*at);if(o.shape==="pent"){let F=[d,u,p,h],U=[[0,n.y(0)],[i,n.y(i)]];return{faces:[F],rim:F,ridges:[[p,h]],gable:U,gables:[U,U]}}if(o.shape==="pyramid"){let F=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[d,u,F],[u,p,F],[p,h,F],[h,d,F]],rim:[d,u,p,h],ridges:[[d,F],[h,F],[u,F],[p,F]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let F=Qc(i,o.eave_a,o.eave_b,b,_,Xc(o)),U=[[0,n.y(0)],[F.vla,F.yla],[F.vr,F.rh],[i-F.vlb,F.ylb],[i,n.y(i)]],O=[a,F.vla,F.yla],J=[l,F.vla,F.yla],Q=[a,i-F.vlb,F.ylb],pe=[l,i-F.vlb,F.ylb],ye=[a,F.vr,F.rh],Fe=[l,F.vr,F.rh];return{faces:[[d,u,J,O],[O,J,Fe,ye],[ye,Fe,pe,Q],[Q,pe,p,h]],rim:[d,u,J,Fe,pe,p,h,Q,ye,O],ridges:[[ye,Fe],[O,J],[Q,pe]],gable:U,gables:[U,U]}}let[m,w]=Qr(o)??["gable","gable"],k=Jr(o,[m,w]),v=m==="gable"?[a,n.vr,n.rh]:[t.u0+k.d0,n.vr,n.rh],f=w==="gable"?[l,n.vr,n.rh]:[t.u1-k.d1,n.vr,n.rh],M=[a,k.vah,k.yh],x=[a,k.vbh,k.yh],I=[l,k.vah,k.yh],z=[l,k.vbh,k.yh],R=m==="halfhip",T=w==="halfhip",$=[[d,u,...T?[I]:[],f,v,...R?[M]:[]],[v,f,...T?[z]:[],p,h,...R?[x]:[]]];m==="hip"&&$.push([h,d,v]),R&&$.push([x,M,v]),w==="hip"&&$.push([u,p,f]),T&&$.push([I,z,f]);let E=[d,u,...w==="gable"?[f]:T?[I,z]:[],p,h,...m==="gable"?[v]:R?[x,M]:[]],C=[[v,f]];m==="hip"&&C.push([d,v],[h,v]),R&&C.push([M,v],[x,v]),w==="hip"&&C.push([u,f],[p,f]),T&&C.push([I,f],[z,f]);let D=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],H=[[0,n.y(0)],[k.vah,k.yh],[k.vbh,k.yh],[i,n.y(i)]],G=F=>F==="gable"?D:F==="halfhip"?H:null,Z=[G(m),G(w)];return{faces:$,rim:E,ridges:C,gable:Z[0]??Z[1],gables:Z}}function Qr(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function Jr(o,e){let t=lt(o),n=vn(o),i=t.w,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*at),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*at),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(i)),d=c+(n.rh-c)*.55,u=r>1e-6?Math.min(n.vr,(d-o.eave_a)/r):n.vr,p=s>1e-6?Math.max(n.vr,i-(d-o.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),b=Math.min(l-.1,(n.rh-d)/Math.max(.2,r)),_=m=>m==="hip"?h:m==="halfhip"?b:0;return{d0:_(e[0]),d1:_(e[1]),yh:d,vah:u,vbh:p}}function sm(o,e,t){let n=null;for(let i of o.faces){if(!V([e,t],i.map(k=>[k[0],k[1]])))continue;let[r,s]=i,a=i.slice(2).find(k=>Math.abs((s[0]-r[0])*(k[1]-r[1])-(s[1]-r[1])*(k[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],c=s[2]-r[2],d=s[1]-r[1],u=a[0]-r[0],p=a[2]-r[2],h=a[1]-r[1],b=c*h-d*p,_=d*u-l*h,m=l*p-c*u;if(Math.abs(_)<1e-9)continue;let w=r[2]-(b*(e-r[0])+m*(t-r[1]))/_;n=n===null?w:Math.min(n,w)}return n}function Jc(o,e,t){let n=e*at,i={p:t,c:Math.cos(n),s:Math.sin(n)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(d=>We(i,d)),...em(o.points.map(d=>We(i,d)))};let r=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],s=We(i,r),a=s[0]-r[0],l=s[1]-r[1],c=(((o.rotation??0)+e)%360+360)%360;return c>180&&(c-=360),{...o,x0:o.x0+a,x1:o.x1+a,z0:o.z0+l,z1:o.z1+l,pivot:s,rotation:Math.abs(c)<1e-9?0:c}}function ed(o,e,t){let[n,i]=We(_n(o),[e,t],!0),r=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-i:i-a]:[i,o.flip?s-n:n-r]}function es(o,e){let[t,n]=We(_n(e),[(e.x0+e.x1)/2,(e.z0+e.z1)/2]),i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),r=null;for(let s of o)s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(e)*1.5||Qf(s,t,n)&&(!r||i(s)<i(r))&&(r=s);return r}function td(o,e,t){let n=lt(e),i=o.floors.flatMap(_=>_.rooms.filter(m=>m.points.length>=3&&_.elevation+_.height>e.base+.05)),r=o.settings.wall_exterior,s=i.map(_=>Zc(_.points,Math.max(r,...(_.wall_thickness??[]).map(m=>m??0))+.01)),a=.35,l=(_,m)=>{if(i.some(k=>V(_(a),k.points)))return!0;let w=_(-Math.min(.3,m/2));return s.some(k=>!V(w,k)&&[.05,.2,a].some(v=>V(_(v),k)))},c=[.15,.5,.85],d=c.map(_=>n.u0+(n.u1-n.u0)*_),u=c.map(_=>n.w*_),p=_=>_==="a"?d.some(m=>l(w=>n.at(m,-w),n.w)):_==="b"?d.some(m=>l(w=>n.at(m,n.w+w),n.w)):_==="u0"?u.some(m=>l(w=>n.at(n.u0-w,m),n.u1-n.u0)):u.some(m=>l(w=>n.at(n.u1+w,m),n.u1-n.u0)),h=e.overhang_sides??null,b=(_,m)=>{let w=h?.[_];return typeof w=="number"?Math.max(0,w):p(m)?0:t};return{a:b(0,"a"),b:b(1,"b"),u0:b(2,"u0"),u1:b(3,"u1")}}function nd(o,e){let t=o.floors.filter(i=>i.rooms.length>0).sort((i,r)=>i.elevation-r.elevation),n=[...t].reverse().filter(i=>i.elevation<e.base-.05);if(e.x0!==void 0&&e.z0!==void 0&&e.x1!==void 0&&e.z1!==void 0){let i=Yc({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,points:e.points,rotation:e.rotation,pivot:e.pivot},0),r=i.reduce((u,p)=>u+p[0],0)/i.length,s=i.reduce((u,p)=>u+p[1],0)/i.length,a=[[r,s],...i.map(u=>[r+(u[0]-r)*.6,s+(u[1]-s)*.6])],l=u=>u.rooms.some(p=>p.points.length>=3&&a.some(h=>V(h,p.points))),c=t.find(u=>Math.abs(u.elevation-e.base)<=.05&&l(u));if(c)return c;let d=n.length>1?n.find(l):void 0;if(d)return d}return n[0]??t[0]}function od(o,e=t=>`roof_${t+1}`){let t=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,i=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),r=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(v=>v.points.length>=3),d=[...new Set(c.flatMap(v=>v.points.map(f=>a(f[0]))))].sort((v,f)=>v-f),u=[...new Set(c.flatMap(v=>v.points.map(f=>a(f[1]))))].sort((v,f)=>v-f),p=d.length-1,h=u.length-1,b=(v,f)=>v.some(M=>V(f,M.points)),_=[];for(let v=0;v<h;v++){_.push([]);for(let f=0;f<p;f++){let M=[(d[f]+d[f+1])/2,(u[v]+u[v+1])/2];_[v].push(b(c,M)&&!b(s,M))}}let m=_.map(v=>v.map(()=>!1)),w=(v,f)=>_[f][v]&&!m[f][v],k=l.elevation+l.height;for(let v=0;v<h;v++)for(let f=0;f<p;f++){if(!w(f,v))continue;let M=f;for(;M+1<p&&w(M+1,v);)M++;let x=v;for(;x+1<h&&Array.from({length:M-f+1},($,E)=>w(f+E,x+1)).every(Boolean);)x++;for(let $=v;$<=x;$++)for(let E=f;E<=M;E++)m[$][E]=!0;let I=d[f]-n,z=d[M+1]+n,R=u[v]-n,T=u[x+1]+n;Math.min(z-I,T-R)<.8||r.push({id:e(r.length),x0:a(I),z0:a(R),x1:a(z),z1:a(T),shape:"gable",axis:z-I>=T-R?"x":"z",eave_a:a(k),eave_b:a(k),pitch_a:t,pitch_b:t,base:a(k),overhang:null})}s.push(...c)}return r}var ti=Math.PI/180,am=1.13,lm=1.72,ni=.025,Bt=.07,id=.25;function so(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:i}=kt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(n.height,r.height??n.height),p=r.sources.find(_=>_.room_id===r.roomLeft)?.edge??null,h={floorId:n.id,room:r.roomLeft,edge:p,free:!!r.free},b=(_,m,w,k)=>t.push({key:_,section:null,side:"top",flat:!1,o:m,eu:w,es:[0,1,0],n:k,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[k[0],k[2]],wall:h});b(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+d*r.right],[s/l,0,a/l],[c,0,d]),r.free&&b(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-d*r.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var rd="ground";function cm(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function dm(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=cm(o),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:nt(r,s,a)):e.base??0;return{key:rd,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Kt(o,e,t=St(o)){return e.face===rd?dm(o,e):e.face.startsWith("wall:")?so(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function ts(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function um(o,e){let t=o.settings.roof?.frame;if(t&&t.length===4&&t.every(r=>Number.isFinite(r)))return t;let n=e.rooms.flatMap(r=>r.points.map(s=>s[0])),i=e.rooms.flatMap(r=>r.points.map(s=>s[1]));return[Math.min(...n),Math.min(...i),Math.max(...n),Math.max(...i)]}function St(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(f=>pm(f,td(o,f,f.overhang??e.overhang)));let t=ts(o);if(!t)return[];let[n,i,r,s]=um(o,t),a=o.settings.wall_exterior+e.overhang,l=n-a,c=r+a,d=i-a,u=s+a,p=t.elevation+t.height;if(e.type==="flat")return[sd("main",null,l,d,c,u,p+id)];let h=c-l>=u-d,b=e.ridge==="short"?!h:h,_=(b?u-d:c-l)/2,m=_*Math.tan(e.pitch*ti),w=(f,M,x)=>b?[f,p+x,(d+u)/2+M]:[(l+c)/2+M,p+x,f],[k,v]=b?[l,c]:[d,u];return[-1,1].map(f=>ei(`main:${f<0?"a":"b"}`,null,f<0?"a":"b",w(k,f*_,0),w(v,f*_,0),w(k,0,m),e.pitch,()=>[0,v-k]))}function pm(o,e){let t=lt(o),n=vn(o),i=(v,f,M)=>{let[x,I]=t.at(v,f);return[x,M,I]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let v=lt({...o,rotation:0}),f=v.at(a,-r),M=v.at(l,t.w+s),x=sd(o.id,o.id,Math.min(f[0],M[0]),Math.min(f[1],M[1]),Math.max(f[0],M[0]),Math.max(f[1],M[1]),o.eave_a+id);return[fm(x,_n(o))]}if(o.shape==="pent")return[ei(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=Qr(o),u=d?Jr(o,d):null,p=o.shape==="pyramid"||d?.[0]==="hip",h=o.shape==="pyramid"||d?.[1]==="hip",b=o.shape==="pyramid"?(t.u1-t.u0)/2:p?u.d0:0,_=o.shape==="pyramid"?(t.u1-t.u0)/2:h?u.d1:0,m=p?t.u0+b-a:0,w=h?l-(t.u1-_):0,k=[];if(n.vr>.3){let v=Math.hypot(n.vr+r,n.rh-n.y(-r));k.push(ei(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,f=>[m*(f/v),c-w*(f/v)]))}if(t.w-n.vr>.3){let v=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));k.push(ei(`${o.id}:b`,o.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),o.pitch_b,f=>[w*(f/v),c-m*(f/v)]))}if(p||h){let v=n.y(-r),f=n.y(t.w+s),M=[];p&&M.push([`${o.id}:c`,"c",i(a,t.w+s,f),i(a,-r,v),i(t.u0+b,n.vr,n.rh)]),h&&M.push([`${o.id}:d`,"d",i(l,-r,v),i(l,t.w+s,f),i(t.u1-_,n.vr,n.rh)]);for(let[x,I,z,R,T]of M){let $=hm(x,o.id,I,z,R,T);$&&k.push($)}}return k}function hm(o,e,t,n,i,r){let s=ro(Vt(i,n));if(s<.3)return null;let a=$t(Vt(i,n)),l=Vt(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ro(d);if(u<.3)return null;let p=$t(d),h=$t(cd(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let b=$t([-p[0],0,-p[2]]),_=Math.atan2(p[1],Math.hypot(p[0],p[2]))/ti;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:_,span:w=>{let k=Math.min(1,Math.max(0,w/u));return[c*k,s-(s-c)*k]},facing:[b[0],b[2]]}}function ei(o,e,t,n,i,r,s,a){let l=$t(Vt(i,n)),c=$t(Vt(r,n)),d=$t(cd(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=$t([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:ro(Vt(i,n)),ls:ro(Vt(r,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function fm(o,e){if(!e)return o;let t=a=>{let[l,c]=We({p:[0,0],c:e.c,s:e.s},[a[0],a[2]]);return[l,a[1],c]},[n,i]=We(e,[o.o[0],o.o[2]]),[r,s]=We({p:[0,0],c:e.c,s:e.s},o.facing);return{...o,o:[n,o.o[1],i],eu:t(o.eu),es:t(o.es),n:t(o.n),facing:[r,s]}}function sd(o,e,t,n,i,r,s){let a=i-t>=r-n,l=a?i-t:r-n,c=a?r-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ns(o){let e=o.module_w||am,t=o.module_h||lm;return o.portrait===!1?[t,e]:[e,t]}function ad(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function os(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*ti:o.wall?Math.min(90,Math.max(0,e.tilt??0))*ti:0}function Ut(o,e){let[t,n]=ns(e),i=ad(e),r=Math.max(1,...i),a=(i.length-1)*ld(o,e)+n*Math.cos(os(o,e));return[r*t+(r-1)*ni,a]}function ld(o,e){let[,t]=ns(e),n=os(o,e);return o.wall?t*Math.cos(n)+ni:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+ni}function mm(o,e,t=!1){let[n,i]=ns(e),r=[],s=os(o,e),a=i*Math.cos(s),l=ld(o,e),c=ad(e),d=Math.max(1,...c),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(_,m,w)=>[o.o[0]+o.eu[0]*_+o.es[0]*m+o.n[0]*w,o.o[1]+o.eu[1]*_+o.es[1]*m+o.n[1]*w,o.o[2]+o.eu[2]*_+o.es[2]*m+o.n[2]*w],b=(_,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[w,k]=o.span(m);return _>=w-1e-6&&_<=k+1e-6};return c.forEach((_,m)=>{let w=e.align==="right"?d-_:e.align==="center"?(d-_)/2:0;for(let k=0;k<_;k++){let v=`${m}:${k}`,f=u.has(v);if(f&&!t)continue;let M=e.u+(k+w)*(n+ni),x=e.v+m*l,I=M+n,z=x+(o.flat||o.wall?a:i);if(p){if(!(b((M+I)/2,x)&&b((M+I)/2,z)))continue}else if(![[M,x],[I,x],[I,z],[M,z]].every(([D,H])=>b(D,H)))continue;if(o.wall&&s>.001){let D=Bt+i*Math.sin(s),[H,G]=e.flip?[D,Bt]:[Bt,D],Z=[h(M,x,H),h(I,x,H),h(I,z,G),h(M,z,G)],F=e.flip?x:z,U=[M+.05,I-.05].map(O=>[h(O,F,0),h(O,F,D)]);r.push({corners:Z,posts:U,cell:v,skipped:f});continue}if(!o.flat){r.push({corners:[h(M,x,Bt),h(I,x,Bt),h(I,z,Bt),h(M,z,Bt)],posts:[],cell:v,skipped:f});continue}let R=.15,T=R+i*Math.sin(s),[$,E]=e.flip?[z,x]:[x,z],C=[h(M,$,R),h(I,$,R),h(I,E,T),h(M,E,T)];r.push({corners:C,posts:[M+.05,I-.05].flatMap(D=>[[h(D,$,0),h(D,$,R)],[h(D,E,0),h(D,E,T)]]),cell:v,skipped:f})}}),r}function Vt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function ro(o){return Math.hypot(o[0],o[1],o[2])}function $t(o){let e=ro(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function cd(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var gm=.78,bm=1.18;function _m(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,tilt:0,module_w:o.w||gm,module_h:o.h||bm}}function vm(o,e){let t=mm(o,_m(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function is(o,e,t){let n=e?vm(e,t):null;if(!n)return null;let i=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(c=>V([i,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function oi(o,e){let t=o.settings.roof?.windows??[];if(!t.length)return[];let n=new Map(St(o).map(i=>[i.key,i]));return t.filter(i=>is(o,n.get(i.face),i)?.roomId===e)}function dd(o,e){let[t,n]=Ut(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var wm=new Set(["window","door","opening","garage_door"]),wn=null;function ym(o,e,t,n){(!wn||wn.entities!==o.entities||wn.building!==e)&&(wn={entities:o.entities,building:e,rooms:new Map});let i=wn.rooms.get(n.id);return i||(i=mn(o,t,n,oi(e,n.id)).shown,wn.rooms.set(n.id,i)),i}function Mt(o,e,t){let n=t?e.floors.filter(r=>r.id===t):[...e.floors].sort((r,s)=>r.elevation-s.elevation),i=[];for(let r of n)for(let[s,a]of oe(r).entries()){if(!a.name?.trim()||a.outdoor&&oe(r).findIndex(m=>m.outdoor&&m.area_id===a.area_id&&m.name===a.name)<s)continue;let l=ym(o,e,r,a),c=l.filter(m=>N(m)==="light"&&o.states[m]),d=c.filter(m=>o.states[m].state==="on"),u=l.filter(m=>{let w=o.states[m];return N(m)==="binary"&&w?.state==="on"&&wm.has(String(w.attributes.device_class??""))}).length,p=l.some(m=>N(m)==="media"&&o.states[m]?.state==="playing"),h=Ne(o,r,a,"temperature"),b=h===null?null:wt(o,h);if(b===null&&a.climate?.temperature!=="none"){let m=l.filter(w=>N(w)==="climate").map(w=>o.states[w]?.attributes.current_temperature).find(w=>typeof w=="number");typeof m=="number"&&(b=m)}let _=Ne(o,r,a,"humidity");i.push({floorId:r.id,roomId:a.id,name:a.name,temp:b,humidity:_,lights:c,lightsOn:d,open:u,playing:p,active:d.length>0||u>0||p})}return i}function ud(o){return o.lightsOn.length?["turn_off",o.lightsOn]:["turn_on",o.lights]}function pd(o,e){return(e.settings.favorites??[]).filter(t=>o.states[t]).map(t=>{let[n,i]=rt(t);return{id:t,domain:n,service:i,on:n==="homeassistant"&&o.states[t].state==="on"}})}var yn=(o,e=4)=>(o.length>e?[...o.slice(0,e),"\u2026"]:o).join(", ");function hd(o){let e=new Set;return o.openings.filter(t=>(t.open||t.tilted)&&!e.has(t.id)&&!!e.add(t.id))}function fd(o,e){let t=[];for(let u of o.alerts)t.push({kind:"alert",level:2,title:u.text,detail:"",targets:[u]});let n=hd(o);if(n.length){let u=n.map(h=>h.tilted?`${h.room} (${e.tilted})`:h.room).filter(Boolean),p=n.map(h=>({entity:h.entity,opening:h.id,floorId:h.floorId,roomId:h.roomId,label:[h.room,h.name,h.tilted?`(${e.tilted})`:""].filter(Boolean).join(" ")}));t.push({kind:"open",level:1,title:e.open(n.length),detail:yn([...new Set(u)]),targets:p})}if(o.unlocked.length&&t.push({kind:"unlocked",level:1,title:e.unlocked(o.unlocked.length),detail:yn(o.unlocked.map(u=>u.name)),targets:o.unlocked.map(u=>({entity:u.entity,floorId:u.floorId,roomId:u.roomId,label:u.name})),action:{kind:"lock",entities:o.unlocked.flatMap(u=>u.entity?[u.entity]:[])}}),o.people.length){let u=o.people.filter(_=>_.home),p=o.people.filter(_=>!_.home),h=u.length?`${e.home}: ${yn(u.map(_=>_.room?`${_.name} (${_.room})`:_.name))}`:e.nobodyHome,b=u.filter(_=>_.roomId).map(_=>({floorId:_.floorId,roomId:_.roomId,label:`${_.name} \xB7 ${_.room}`}));t.push({kind:"people",level:0,title:h,detail:p.length?`${e.away}: ${yn(p.map(_=>_.name))}`:"",targets:b})}let i=o.household.filter(u=>u.hot),r=o.household.filter(u=>!u.hot);for(let u of i)t.push({kind:"household",level:1,title:u.text,detail:"",targets:u.entity?[{entity:u.entity}]:[]});r.length&&t.push({kind:"household",level:0,title:r[0].text,detail:yn(r.slice(1).map(u=>u.text),3),targets:[]});let s=o.lights.filter(u=>u.count>0),a=s.reduce((u,p)=>u+p.count,0);if(a){let u=s.flatMap(p=>p.on??[]);t.push({kind:"lights",level:0,title:e.lights(a),detail:yn(s.map(p=>p.room)),targets:s.map(p=>({floorId:p.floorId,roomId:p.roomId,label:p.count>1?`${p.room} (${p.count})`:p.room})),...u.length?{action:{kind:"lights_off",entities:u}}:{}})}for(let u of o.cars){let p=u.soc!==null?`${Math.round(u.soc)} %`:"",h=u.present?u.charging?e.charging:"":e.carAway;(h||p)&&t.push({kind:"car",level:0,title:u.name,detail:[h,p].filter(Boolean).join(" \xB7 "),targets:[]})}let l=o.energy;if(l&&(l.consumption!==null||l.solar!==null)){let u=[];l.solar!==null&&l.solar>5&&u.push(`${e.energySolar} ${e.watts(l.solar)}`),l.grid!==null&&Math.abs(l.grid)>5&&u.push(`${l.grid<0?e.energyFeed:e.energyGrid} ${e.watts(Math.abs(l.grid))}`),l.soc!==null&&u.push(`${e.battery} ${Math.round(l.soc)} %`),t.push({kind:"energy",level:0,title:l.consumption!==null?`${e.energyUse} ${e.watts(l.consumption)}`:u.shift(),detail:u.join(" \xB7 "),targets:[]})}let c=u=>u.level===2?0:o.away&&u.kind==="people"?1:u.level===1?2:3,d=t.map((u,p)=>({it:u,n:p})).sort((u,p)=>c(u.it)-c(p.it)||u.n-p.n).map(u=>u.it);return d.some(u=>u.level>0)||d.unshift({kind:"calm",level:0,title:e.calm,detail:e.calmDetail,targets:[]}),d}function md(o){let e=o.filter(r=>r.level===2);if(e.length)return{text:e.length>1?`${e[0].title} (+${e.length-1})`:e[0].title,level:2};let t=o.filter(r=>r.level===1),n=o.find(r=>r.kind==="lights");return t.length?{text:[...t.slice(0,2).map(r=>r.title),...n&&t.length<2?[n.title]:[]].join(" \xB7 "),level:1}:{text:[o.find(r=>r.kind==="calm")?.title??"",n?.title??""].filter(Boolean).join(" \xB7 "),level:0}}function gd(o,e){let t=[];for(let n of hd(o))t.push({kind:"open",title:[n.room,n.name,n.tilted?`(${e.tilted})`:""].filter(Boolean).join(" \xB7 "),target:{entity:n.entity,opening:n.id,floorId:n.floorId,roomId:n.roomId}});for(let n of o.unlocked)t.push({kind:"unlocked",title:n.name,target:{entity:n.entity,floorId:n.floorId,roomId:n.roomId},...n.entity?{action:{kind:"lock",entities:[n.entity]}}:{}});for(let n of o.lights)n.count<=0||t.push({kind:"lights",title:`${n.room} \xB7 ${e.lights(n.count)}`,target:{floorId:n.floorId,roomId:n.roomId},...n.on?.length?{action:{kind:"lights_off",entities:n.on}}:{}});return t}var xm=new Set(["lights","climate","action","link"]);function rs(o){if(!Array.isArray(o))return[];let e=[];for(let t of o)if(!(!t||typeof t!="object"||!xm.has(String(t.kind)))&&!(t.kind==="action"&&!/^[a-z_]+\.[a-z0-9_]+$/.test(String(t.entity??"")))&&!(t.kind==="link"&&!/^\/[^/]/.test(String(t.path??"")))&&(e.push({kind:t.kind,name:typeof t.name=="string"?t.name.slice(0,24):void 0,icon:typeof t.icon=="string"?t.icon.slice(0,4):void 0,entity:t.entity,path:t.path}),e.length===2))break;return e}function bd(o,e){return[...o].sort((t,n)=>t.elevation-n.elevation).map(t=>{let n=e.filter(i=>i.floorId===t.id);return{id:t.id,name:t.name,rooms:n,lightsOn:n.reduce((i,r)=>i+r.lightsOn.length,0)}}).filter(t=>t.rooms.length>0)}function _d(o,e,t,n,i=[]){let r=o.length===2?o.map(s=>({id:`floor:${s.id}`,label:s.name,badge:s.lightsOn})):o.length?[{id:"rooms",label:"",badge:o.reduce((s,a)=>s+a.lightsOn,0)}]:[];return[{id:"now",label:"",badge:e},...r,...n?[{id:"covers",label:"",badge:t}]:[],...i,{id:"more",label:"",badge:0}]}var km=5;function vd(o,e=km){let t=[...o];if(t.length>e){let i=t.filter(r=>r.id.startsWith("floor:"));if(i.length>1){let r=t.indexOf(i[0]);t=t.filter(s=>!s.id.startsWith("floor:")),t.splice(r,0,{id:"rooms",label:"",badge:i.reduce((s,a)=>s+a.badge,0)})}}let n=[];for(;t.length>e;){let i=t.length-2;if(i<1||t[i].id==="rooms"||t[i].id.startsWith("floor:"))break;n.unshift(...t.splice(i,1))}return{bar:t,over:n}}function wd(o,e,t,n){let i=typeof n=="number"&&Number.isFinite(n)?Math.round(n):null;return{entity:o,name:e,position:i,shut:t==="closed"||i===0}}var $m={alert:"\u26A0\uFE0F",open:"\u{1FA9F}",unlocked:"\u{1F513}",people:"\u{1F464}",household:"\u{1F9FA}",lights:"\u{1F4A1}",energy:"\u26A1",car:"\u{1F697}",calm:"\u2705"},Sm={open:"\u{1FA9F}",unlocked:"\u{1F513}",lights:"\u{1F4A1}"},ss=class extends ae{static properties={items:{attribute:!1},stops:{attribute:!1},labels:{attribute:!1},favorites:{attribute:!1},summary:{attribute:!1},mode:{reflect:!0},_open:{state:!0},_step:{state:!0},_did:{state:!0}};constructor(){super(),this.items=[],this.stops=[],this.favorites=[],this.summary={text:"",level:0},this.mode="bar",this._open=null,this._step=0,this._did=0}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}willUpdate(e){e.has("mode")&&(this._open=null,this.mode==="check"&&(this._step=0,this._did=0))}updated(e){if(this.mode==="check"&&(e.has("mode")||e.has("_step"))){let t=this.stops[this._step];t&&this.fire("now-go",t.target)}}tapRow(e,t){if(e.targets.length){if(e.targets.length===1)return this.fire("now-go",e.targets[0]);this._open=this._open===t?null:t}}actLabel(e){return e.kind==="lock"?this.labels.lock:this.labels.lightsOff}renderBar(){return g`<button class="bar level${this.summary.level}" @click=${()=>this.fire("now-mode","page")}>
      <span class="dot" aria-hidden="true"></span>
      <span class="sum">${this.summary.text}</span>
      <span class="go" aria-hidden="true">›</span>
    </button>`}renderPage(){return g`<header>
        <b>${this.labels.title}</b>
        <button class="x" aria-label=${this.labels.close} @click=${()=>this.fire("now-mode","bar")}>✕</button>
      </header>
      ${this.favorites.length?g`<div class="favs">${this.favorites.map(e=>g`<button @click=${()=>this.fire("now-fav",e.entity)}>★ ${e.name}</button>`)}</div>`:y}
      <ul>
        ${this.items.map((e,t)=>{let n=e.targets.length>1,i=this._open===t;return g`<li class="level${e.level}">
            <div class="line">
              <button class="row" ?disabled=${!e.targets.length} aria-expanded=${n?i:y} @click=${()=>this.tapRow(e,t)}>
                <span class="icon" aria-hidden="true">${$m[e.kind]}</span>
                <span class="text"><b>${e.title}</b>${e.detail?g`<small>${e.detail}</small>`:y}</span>
                ${e.targets.length?g`<span class="go" aria-hidden="true">${n?i?"\u25BE":"\u25B8":"\u203A"}</span>`:y}
              </button>
              ${e.action?g`<button class="act" @click=${()=>this.fire("now-act",e.action)}>${this.actLabel(e.action)}</button>`:y}
            </div>
            ${n&&i?g`<div class="places">
                  ${e.targets.map(r=>g`<button class="place" @click=${()=>this.fire("now-go",r)}>${r.label??""}<span aria-hidden="true">›</span></button>`)}
                </div>`:y}
          </li>`})}
      </ul>
      <footer>
        <button class="check" @click=${()=>this.fire("now-mode","check")}>
          <b>🚪 ${this.labels.check}</b>
          <small>${this.labels.checkHint}</small>
        </button>
      </footer>`}renderCheck(){let e=this.stops[this._step],t=g`<button class="x" aria-label=${this.labels.close} @click=${()=>this.fire("now-mode","bar")}>✕</button>`;if(!e)return g`<div class="card">
        <div class="card-top"><b>✅ ${this.stops.length?this.labels.checkDone:this.labels.checkNothing}</b>${t}</div>
        <div class="card-btns"><button class="primary" @click=${()=>this.fire("now-mode","bar")}>${this.labels.done}</button></div>
      </div>`;let n=()=>this._step+=1,i=this.stops.slice(this._step).filter(s=>s.kind==="lights"&&s.action),r=e.kind==="lights"&&i.length>1?[...new Set(i.flatMap(s=>s.action.entities))]:null;return g`<div class="card">
      <div class="card-top">
        <span class="icon" aria-hidden="true">${Sm[e.kind]}</span>
        <span class="text"><b>${e.title}</b><small>${this._step+1} / ${this.stops.length}${e.kind==="open"?g` · ${this.labels.windowHint}`:y}</small></span>
        ${t}
      </div>
      <div class="card-btns">
        ${e.action?g`<button
              class="primary"
              @click=${()=>{this.fire("now-act",e.action),this._did+=1,n()}}
            >
              ${this.actLabel(e.action)}
            </button>`:y}
        <button @click=${n}>${this.labels.next}</button>
      </div>
      ${r?g`<div class="card-btns">
            <button
              @click=${()=>{this.fire("now-act",{kind:"lights_off",entities:r}),this._step=this.stops.length}}
            >
              ${this.labels.allLightsOff.replace("{n}",String(r.length))}
            </button>
          </div>`:y}
    </div>`}render(){return this.mode==="page"?this.renderPage():this.mode==="check"?this.renderCheck():this.renderBar()}static styles=ce`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      color: #e8f0ff;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    /* ---- the line under the house */
    .bar {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      min-height: 44px;
      padding: 8px 14px;
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.25);
      border-radius: 999px;
      text-align: left;
    }
    .dot {
      flex: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #3ddc84;
    }
    .level1 .dot {
      background: #ffb547;
    }
    .level2 .dot {
      background: #ff5a5a;
    }
    .bar.level2 {
      border-color: #ff5a5a;
    }
    .sum {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    .go {
      flex: none;
      opacity: 0.6;
    }
    /* ---- the page */
    :host([mode="page"]) {
      background: #0b1220;
    }
    header {
      display: flex;
      align-items: center;
      padding: 14px 10px 8px 18px;
    }
    header b {
      flex: 1;
      font-size: 19px;
    }
    .x {
      flex: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: none;
      border: 0;
      font-size: 18px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0 10px;
      overflow-y: auto;
      overscroll-behavior: contain;
      flex: 1;
      min-height: 0;
    }
    li {
      border-radius: 14px;
      margin-bottom: 6px;
      background: #121c30;
    }
    li.level2 {
      background: rgba(255, 70, 70, 0.18);
    }
    .line {
      display: flex;
      align-items: center;
      gap: 6px;
      padding-right: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
      min-height: 56px;
      padding: 10px 6px 10px 12px;
      background: none;
      border: 0;
      text-align: left;
    }
    .row:disabled {
      cursor: default;
    }
    .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 19px;
    }
    .text {
      flex: 1;
      min-width: 0;
      display: grid;
      gap: 2px;
    }
    .text b {
      font-weight: 600;
      font-size: 15px;
    }
    .text small {
      opacity: 0.75;
      font-size: 13px;
    }
    .level2 .text b {
      color: #ff9a9a;
    }
    .level1 .text b {
      color: #ffc46b;
    }
    .act {
      flex: none;
      min-height: 40px;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid #00e5ff;
      background: rgba(0, 229, 255, 0.12);
      color: #7df3ff;
      font-weight: 600;
    }
    .places {
      display: grid;
      gap: 2px;
      padding: 0 8px 8px 50px;
    }
    .place {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      min-height: 40px;
      align-items: center;
      padding: 6px 10px;
      border-radius: 10px;
      background: rgba(120, 160, 255, 0.1);
      border: 0;
      text-align: left;
    }
    footer {
      padding: 8px 10px calc(10px + env(safe-area-inset-bottom, 0px));
    }
    .check {
      display: grid;
      gap: 2px;
      width: 100%;
      padding: 12px 16px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
      text-align: left;
    }
    .check b {
      font-size: 15px;
    }
    .check small {
      opacity: 0.75;
    }
    .favs {
      display: flex;
      gap: 8px;
      padding: 0 10px 10px;
      overflow-x: auto;
    }
    .favs button {
      flex: none;
      min-height: 46px;
      padding: 8px 16px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
      font-weight: 600;
    }
    /* ---- the house check */
    .card {
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.3);
      border-radius: 16px;
      padding: 8px 8px 10px 12px;
    }
    .card-top {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-top > b {
      flex: 1;
      font-size: 15px;
      padding: 6px 0;
    }
    .card-btns {
      display: flex;
      gap: 8px;
      padding: 6px 4px 0 0;
    }
    .card-btns button {
      flex: 1;
      min-height: 44px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.35);
      background: #16233c;
      font-weight: 600;
    }
    .card-btns .primary {
      border-color: #00e5ff;
      background: #00e5ff;
      color: #06101c;
    }
  `};customElements.get("fp3d-now-list")||customElements.define("fp3d-now-list",ss);var Mm={now:"\u25CF",rooms:"\u25A6",covers:"\u25A4",more:"\u22EF"},as=class extends ae{static properties={slots:{attribute:!1},floors:{attribute:!1},covers:{attribute:!1},more:{attribute:!1},group:{attribute:!1},labels:{attribute:!1},sheet:{},floorId:{},active:{},level:{type:Number},attention:{},roomId:{}};constructor(){super(),this.slots=[],this.floors=[],this.covers=[],this.more=[],this.group=null,this.sheet=null,this.floorId=null,this.active=null,this.level=0,this.attention="",this.roomId=null}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}slotLabel(e){return e.label||(e.id==="now"?this.labels.now:e.id==="rooms"?this.labels.rooms:e.id==="covers"?this.labels.covers:this.labels.more)}renderRooms(){let e=this.floors.find(t=>t.id===this.floorId)??this.floors[0];return e?g`${this.floors.length>1&&this.slots.some(t=>t.id==="rooms")?g`<div class="tabs">${this.floors.map(t=>g`<button aria-pressed=${t.id===e.id} @click=${()=>this.fire("nav-floor",t.id)}>${t.name}</button>`)}</div>`:y}
      <div class="tiles">
        <button class="tile whole" @click=${()=>this.fire("nav-room",{floorId:e.id,roomId:null})}><b>${this.labels.wholeFloor}</b><small>${e.name}</small></button>
        ${e.rooms.map(t=>g`<button class="tile ${t.active?"on":""}" aria-pressed=${t.roomId===this.roomId} @click=${()=>this.fire("nav-room",{floorId:t.floorId,roomId:t.roomId})}>
            <b>${t.name}</b>
            <small>${t.temp!==null?`${t.temp.toLocaleString(void 0,{maximumFractionDigits:1})}\xB0`:""}</small>
            <span class="marks">
              ${t.lightsOn.length?g`<span class="mark light">💡 ${t.lightsOn.length}</span>`:y} ${t.open?g`<span class="mark open">🪟 ${t.open}</span>`:y}
              ${t.playing?g`<span class="mark">♪</span>`:y}
            </span>
          </button>`)}
      </div>`:y}renderCovers(){let e=(t,n)=>this.fire("nav-cover",{entities:t,service:n});return g`${this.covers.map(t=>g`<section>
        <header>
          <b>${t.name}</b>
          <button @click=${()=>e(t.items.map(n=>n.entity),"open_cover")}>▲ ${this.labels.allUp}</button>
          <button @click=${()=>e(t.items.map(n=>n.entity),"close_cover")}>▼ ${this.labels.allDown}</button>
        </header>
        ${t.items.map(n=>g`<div class="cover">
            <span class="name">${n.name}</span>
            <span class="pos">${n.position!==null?`${n.position} %`:""}</span>
            <button aria-label="▲" @click=${()=>e([n.entity],"open_cover")}>▲</button>
            <button aria-label="■" @click=${()=>e([n.entity],"stop_cover")}>■</button>
            <button aria-label="▼" @click=${()=>e([n.entity],"close_cover")}>▼</button>
          </div>`)}
      </section>`)}`}renderGroup(){let e=this.group;if(!e)return y;let t=(n,i)=>this.fire("nav-group",{entities:n,on:i});return g`${e.floors.map(n=>g`<section>
        <header>
          <b>${n.name}</b>
          ${e.allOn?g`<button @click=${()=>t(n.items.map(i=>i.entity),!0)}>${this.labels.allOn}</button>`:y}
          <button @click=${()=>t(n.items.filter(i=>i.on).map(i=>i.entity),!1)}>${this.labels.allOff}</button>
        </header>
        ${n.items.map(i=>g`<div class="cover">
            <span class="name">${i.name}</span>
            <span class="pos">${i.detail}</span>
            <button class="power" aria-pressed=${i.on} @click=${()=>t([i.entity],!i.on)}>${i.on?this.labels.on:this.labels.off}</button>
          </div>`)}
      </section>`)}`}renderMore(){return g`<div class="more">
      ${this.more.map(e=>g`<button aria-pressed=${e.pressed===void 0?y:e.pressed} @click=${()=>this.fire("nav-more",e.id)}>
          <span class="icon" aria-hidden="true">${e.icon}</span>
          <span class="text"><b>${e.label}</b>${e.hint?g`<small>${e.hint}</small>`:y}</span>
          ${e.pressed===void 0?y:g`<span class="switch" aria-hidden="true"></span>`}
        </button>`)}
    </div>`}render(){let e=this.sheet==="rooms"?"":this.sheet==="covers"?this.labels.covers:this.sheet==="more"?this.labels.more:this.sheet==="group"?this.group?.title??"":"";return g`${this.sheet?g`<div class="veil" @click=${()=>this.fire("nav-close")}></div>
            <div class="sheet" role="dialog">
              ${e?g`<h3>${e}</h3>`:y} ${this.sheet==="rooms"?this.renderRooms():this.sheet==="covers"?this.renderCovers():this.sheet==="group"?this.renderGroup():this.renderMore()}
            </div>`:y}
      ${this.attention&&!this.sheet&&this.active!=="now"?g`<button class="attention level${this.level}" @click=${()=>this.fire("nav-slot","now")}><span class="dot"></span><span class="sum">${this.attention}</span><span aria-hidden="true">›</span></button>`:y}
      <nav>
        ${this.slots.map(t=>g`<button class="slot" aria-pressed=${this.active===t.id} @click=${()=>this.fire("nav-slot",t.id)}>
            <span class="glyph ${t.id==="now"?`dot level${this.level}`:""}" aria-hidden="true">${t.id==="now"?"":t.icon?t.icon:t.id.startsWith("floor:")?"\u25A6":Mm[t.id]}</span>
            <span class="label">${this.slotLabel(t)}</span>
            ${t.badge?g`<span class="badge">${t.badge}</span>`:y}
          </button>`)}
      </nav>`}static styles=ce`
    :host {
      display: block;
      color: #e8f0ff;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    nav {
      position: relative;
      z-index: 3;
      display: flex;
      gap: 2px;
      padding: 6px 6px calc(6px + env(safe-area-inset-bottom, 0px));
      background: #0b1220;
      border-top: 1px solid rgba(120, 160, 255, 0.22);
    }
    .slot {
      position: relative;
      flex: 1 1 0;
      min-width: 0;
      min-height: 52px;
      display: grid;
      justify-items: center;
      align-content: center;
      gap: 3px;
      background: none;
      border: 0;
      border-radius: 14px;
      padding: 4px 2px;
    }
    .slot[aria-pressed="true"] {
      background: rgba(0, 229, 255, 0.16);
      color: #7df3ff;
    }
    .glyph {
      font-size: 18px;
      line-height: 20px;
      height: 20px;
    }
    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #3ddc84;
      display: inline-block;
    }
    .glyph.dot {
      margin-top: 3px;
      height: 14px;
    }
    .level1.dot,
    .level1 .dot {
      background: #ffb547;
    }
    .level2.dot,
    .level2 .dot {
      background: #ff5a5a;
    }
    .label {
      font-size: 11.5px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .badge {
      position: absolute;
      top: 2px;
      left: calc(50% + 8px);
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      box-sizing: border-box;
      border-radius: 9px;
      background: #ffb547;
      color: #1a1200;
      font-size: 11px;
      font-weight: 700;
      line-height: 18px;
      text-align: center;
    }
    .attention {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 10px;
      width: calc(100% - 16px);
      margin: 0 8px 6px;
      min-height: 40px;
      padding: 6px 14px;
      border-radius: 999px;
      background: #0e1626;
      border: 1px solid rgba(255, 181, 71, 0.6);
      text-align: left;
    }
    .attention.level2 {
      border-color: #ff5a5a;
    }
    .sum {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    .veil {
      position: fixed;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.45);
    }
    .sheet {
      position: relative;
      z-index: 2;
      max-height: 62vh;
      overflow-y: auto;
      overscroll-behavior: contain;
      margin: 0 8px 6px;
      padding: 12px;
      border-radius: 18px;
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.25);
    }
    h3 {
      margin: 0 0 10px 4px;
      font-size: 17px;
    }
    .tabs {
      display: flex;
      gap: 6px;
      margin-bottom: 10px;
      overflow-x: auto;
    }
    .tabs button {
      flex: none;
      min-height: 38px;
      padding: 6px 14px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: none;
    }
    .tabs button[aria-pressed="true"] {
      background: #00e5ff;
      border-color: #00e5ff;
      color: #06101c;
      font-weight: 600;
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
      gap: 8px;
    }
    .tile {
      position: relative;
      min-height: 76px;
      display: grid;
      align-content: start;
      gap: 2px;
      padding: 10px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.2);
      background: #121c30;
      text-align: left;
    }
    .tile.on {
      border-color: rgba(255, 196, 107, 0.7);
      background: #1d2334;
    }
    .tile[aria-pressed="true"] {
      border-color: #00e5ff;
    }
    .tile.whole {
      background: #16233c;
    }
    .tile b {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tile small {
      opacity: 0.75;
      min-height: 16px;
    }
    .marks {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      font-size: 12px;
    }
    .mark.light {
      color: #ffc46b;
    }
    section + section {
      margin-top: 14px;
    }
    section header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
    }
    section header b {
      flex: 1;
      font-size: 15px;
    }
    section header button,
    .cover button {
      min-height: 40px;
      min-width: 44px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
    }
    .cover .power {
      min-width: 60px;
    }
    .cover .power[aria-pressed="true"] {
      background: #ffb02e;
      border-color: #ffb02e;
      color: #1a1205;
      font-weight: 600;
    }
    .cover {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 0;
    }
    .cover .name {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cover .pos {
      opacity: 0.7;
      font-size: 12.5px;
      min-width: 44px;
      text-align: right;
    }
    .more {
      display: grid;
      gap: 6px;
    }
    .more button {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 54px;
      padding: 8px 12px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.2);
      background: #121c30;
      text-align: left;
    }
    .more .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 19px;
    }
    .more .text {
      flex: 1;
      display: grid;
      gap: 2px;
    }
    .more small {
      opacity: 0.75;
      font-size: 12.5px;
    }
    .switch {
      flex: none;
      width: 38px;
      height: 22px;
      border-radius: 11px;
      background: #33425c;
      position: relative;
    }
    .switch::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #e8f0ff;
      transition: left 0.15s;
    }
    button[aria-pressed="true"] .switch {
      background: #00e5ff;
    }
    button[aria-pressed="true"] .switch::after {
      left: 19px;
    }
  `};customElements.get("fp3d-phone-nav")||customElements.define("fp3d-phone-nav",as);var ls=class extends ae{static properties={hass:{attribute:!1},building:{attribute:!1},view:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},extras:{attribute:!1},solo:{type:Boolean},hide:{attribute:!1},places:{attribute:!1},_own:{state:!0},start:{attribute:!1},watts:{attribute:!1},mode:{reflect:!0},_sheet:{state:!0},_navFloor:{state:!0}};started=!1;stops=[];lastFloors=[];constructor(){super(),this.building=null,this.view=()=>null,this.floorId=null,this.roomId=null,this.extras=[],this.solo=!1,this.hide=[],this.start=void 0,this.places=void 0,this._own=0,this.watts=e=>`${Math.round(e)} W`,this.mode="bar",this._sheet=null,this._navFloor=null}t(e){return P(this.hass,e)}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}words(){let e=(t,n)=>i=>this.t(i===1?t:n).replace("{n}",String(i));return{open:e("now_open_one","now_open"),tilted:this.t("now_tilted"),unlocked:e("now_unlocked_one","now_unlocked"),home:this.t("now_home"),away:this.t("now_away"),nobodyHome:this.t("now_nobody"),lights:e("now_lights_one","now_lights"),energyUse:this.t("energy_consumption"),energySolar:this.t("energy_solar"),energyGrid:this.t("energy_grid_import"),energyFeed:this.t("energy_grid_export"),battery:this.t("now_battery"),charging:this.t("wallbox_charging"),carAway:this.t("now_car_away"),calm:this.t("now_calm"),calmDetail:this.t("now_calm_detail"),watts:this.watts}}setMode(e){if(e==="check"){let t=this.view()?.nowInput();this.stops=t?gd(t,this.words()):[]}this.mode==="check"&&e!=="check"&&this.fire("phone-room",{floorId:this.floorId,roomId:null}),e==="check"!=(this.mode==="check")&&this.view()?.quietCards?.(e==="check"),this._sheet=null,this.mode=e,this.fire("phone-mode",e)}updated(){this.started||!this.hass||!this.building||(this.started=!0,this.start==="now"&&this.mode==="bar"&&this.setMode("page"))}openList(){this.setMode("page")}go(e){this.mode==="page"&&this.setMode("bar"),this.view()?.showNow(e)}act(e){!this.hass||!e.entities.length||(e.kind==="lock"?this.hass.callService("lock","lock",{entity_id:e.entities}):this.hass.callService("homeassistant","turn_off",{entity_id:e.entities}))}fav(e){let[t,n]=rt(e);this.hass?.callService(t,n,{entity_id:e})}groupOf(e){let t=this.hass,n=this.building;if(!t||!n||e.kind!=="lights"&&e.kind!=="climate")return null;let i=e.kind==="lights",r=l=>typeof l=="number"?`${l.toLocaleString(t.language,{maximumFractionDigits:1})}\xB0`:"",s=l=>{let c=t.states[l],d=c?.attributes??{},u=i?c?.state==="on":!!c&&c.state!=="off"&&c.state!=="unavailable"&&c.state!=="unknown",p=i?u&&typeof d.brightness=="number"?`${Math.round(d.brightness/2.55)} %`:"":[r(d.current_temperature),u?r(d.temperature):""].filter(Boolean).join(" \u2192 ");return{entity:l,name:K(t,l),on:u,detail:p}},a=[...n.floors].sort((l,c)=>l.elevation-c.elevation).map(l=>({id:l.id,name:l.name,items:(i?gn(t,l).lights:Oc(t,l)).map(s)})).filter(l=>l.items.length);return{title:e.name||this.t(i?"nav_lights":"nav_climate"),allOn:i,floors:a}}switchGroup(e,t){let n=this.hass;if(!n||!e.length)return;let i=e.filter(s=>s.startsWith("climate.")),r=e.filter(s=>!s.startsWith("climate."));r.length&&n.callService("homeassistant",t?"turn_on":"turn_off",{entity_id:r});for(let s of i){let a=n.states[s]?.attributes.hvac_modes??[],l=t?["heat","auto","heat_cool"].find(c=>a.includes(c))??a.find(c=>c!=="off"):"off";l&&(t||a.includes("off")||!a.length)&&n.callService("climate","set_hvac_mode",{entity_id:s,hvac_mode:l})}}tapSlot(e,t){if(e==="now")return this.setMode(this.mode==="page"?"bar":"page");if(this.mode!=="bar"&&this.setMode("bar"),e.startsWith("own:")){let s=Number(e.slice(4)),a=rs(this.places)[s];if(!a)return;if(a.kind==="action"&&a.entity){this._sheet=null;let[l,c]=rt(a.entity);this.hass?.callService(l,c==="toggle"?"turn_on":c,{entity_id:a.entity})}else if(a.kind==="link"&&a.path)this._sheet=null,this.fire("phone-link",a.path);else{let l=this._sheet==="group"&&this._own===s;this._own=s,this._sheet=l?null:"group"}return}let n=e.startsWith("floor:")?e.slice(6):null,i=n||e==="rooms"?"rooms":e==="covers"?"covers":"more",r=this._sheet===i&&(!n||n===this._navFloor);this._sheet=r?null:i,i==="rooms"&&(this._navFloor=n??(t.some(s=>s.id===this.floorId)?this.floorId:t[0]?.id??null))}tapMore(e){this._sheet=null,e==="check"?this.setMode("check"):e==="house"?this.fire("phone-room",{floorId:null,roomId:null}):e==="solo"?this.fire("phone-solo",!this.solo):e==="find"?this.view()?.openFind?.():e.startsWith("slot:")?this.tapSlot(e.slice(5),this.lastFloors):this.fire("phone-more",e)}render(){let e=this.hass,t=this.building;if(!e||!t)return y;let n=this.view()?.nowInput()??null,i=this.words();n?.away&&(i.calm=this.t("now_calm_away"));let r=n?fd(n,i):[],s=n?md(r):{text:"",level:0},a=bd(t.floors,Mt(e,t,null)),l=[...t.floors].sort((x,I)=>x.elevation-I.elevation).map(x=>({id:x.id,name:x.name,items:gn(e,x).covers.map(I=>wd(I,K(e,I),e.states[I]?.state,e.states[I]?.attributes.current_position))})).filter(x=>x.items.length),c=l.reduce((x,I)=>x+I.items.filter(z=>z.shut).length,0),d=new Set(this.hide??[]),u=rs(this.places),p=u.map(x=>this.groupOf(x)),h={lights:"\u{1F4A1}",climate:"\u{1F321}",action:"\u25B6",link:"\u2197"},b=u.map((x,I)=>({id:`own:${I}`,label:x.name||(x.kind==="lights"?this.t("nav_lights"):x.kind==="climate"?this.t("nav_climate"):x.kind==="action"&&x.entity?K(e,x.entity):this.t("nav_page")),icon:x.icon||h[x.kind],badge:x.kind==="lights"?p[I]?.floors.reduce((z,R)=>z+R.items.filter(T=>T.on).length,0)??0:0})).filter((x,I)=>p[I]?p[I].floors.length>0:u[I].kind==="link"||!!e.states[u[I].entity??""]),{bar:_,over:m}=vd(_d(d.has("rooms")?[]:a,r.filter(x=>x.level>0).length,c,l.length>0&&!d.has("covers"),b));this.lastFloors=a;let w=this.mode==="page"?"now":this._sheet==="rooms"?_.some(x=>x.id==="rooms")?"rooms":`floor:${this._navFloor}`:this._sheet==="group"?`own:${this._own}`:this._sheet,k={title:this.t("now_title"),close:this.t("close"),lightsOff:this.t("now_lights_off"),lock:this.t("now_lock"),check:this.t("now_check"),checkHint:this.t("now_check_hint"),next:this.t("now_next"),done:this.t("now_done"),checkDone:this.t("now_check_done"),checkNothing:this.t("now_check_nothing"),windowHint:this.t("now_window_hint"),allLightsOff:this.t("now_all_lights_off")},v={now:this.t("nav_now"),rooms:this.t("nav_rooms"),covers:this.t("nav_covers"),more:this.t("nav_more"),wholeFloor:this.t("nav_whole_floor"),allUp:this.t("nav_all_up"),allDown:this.t("nav_all_down"),allOn:this.t("nav_all_on"),allOff:this.t("nav_all_off"),on:this.t("nav_dev_on"),off:this.t("nav_dev_off"),close:this.t("close")},f=[...m.map(x=>({id:`slot:${x.id}`,icon:x.icon??(x.id==="covers"?"\u25A4":"\u25A6"),label:x.label||this.t(x.id==="covers"?"nav_covers":"nav_rooms"),hint:x.badge?String(x.badge):void 0})),{id:"find",icon:"\u{1F50D}",label:this.t("find")},{id:"check",icon:"\u{1F6AA}",label:this.t("now_check"),hint:this.t("now_check_hint")},{id:"house",icon:"\u{1F3E0}",label:this.t("nav_house")},{id:"solo",icon:"\u{1F50E}",label:this.t("nav_solo"),hint:this.t("nav_solo_hint"),pressed:this.solo},...this.extras],M=d.has("favorites")?[]:(t.settings.favorites??[]).filter(x=>!!e.states[x]).map(x=>({entity:x,name:K(e,x)}));return g`${this.mode!=="bar"?g`<fp3d-now-list
            class="list"
            .items=${r}
            .summary=${s}
            .stops=${this.stops}
            .labels=${k}
            .favorites=${M}
            .mode=${this.mode}
            @now-mode=${x=>this.setMode(x.detail)}
            @now-go=${x=>this.go(x.detail)}
            @now-act=${x=>this.act(x.detail)}
            @now-fav=${x=>this.fav(x.detail)}
          ></fp3d-now-list>`:y}
      ${this.mode!=="check"?g`<fp3d-phone-nav
            class="nav"
            .slots=${_}
            .floors=${a}
            .covers=${l}
            .more=${f}
            .group=${this._sheet==="group"?p[this._own]??null:null}
            .labels=${v}
            .sheet=${this._sheet}
            .floorId=${this._navFloor}
            .roomId=${this.roomId}
            .active=${w}
            .level=${s.level}
            .attention=${s.level>0&&!this.roomId?s.text:""}
            @nav-slot=${x=>this.tapSlot(x.detail,a)}
            @nav-floor=${x=>this._navFloor=x.detail}
            @nav-close=${()=>this._sheet=null}
            @nav-room=${x=>{this._sheet=null,this.fire("phone-room",x.detail)}}
            @nav-cover=${x=>{e.callService("cover",x.detail.service,{entity_id:x.detail.entities})}}
            @nav-group=${x=>this.switchGroup(x.detail.entities,x.detail.on)}
            @nav-more=${x=>this.tapMore(x.detail)}
          ></fp3d-phone-nav>`:y}`}static styles=ce`
    /* over the 3D view, without taking its touches: only the bar, the pages and the card catch them */
    :host {
      position: absolute;
      inset: 0;
      z-index: 9;
      pointer-events: none;
    }
    .nav,
    .list {
      pointer-events: auto;
      position: absolute;
      left: 0;
      right: 0;
    }
    .nav {
      bottom: 0;
      z-index: 2;
    }
    .list[mode="page"] {
      top: 0;
      bottom: calc(64px + env(safe-area-inset-bottom, 0px));
      z-index: 1;
    }
    .list[mode="check"] {
      left: 8px;
      right: 8px;
      bottom: 8px;
    }
  `};customElements.get("fp3d-phone-shell")||customElements.define("fp3d-phone-shell",ls);var yd;function cs(){let o=new URL("./neonplan3d-editor.js?v=5131a20a2202",new URL(import.meta.url)).href;return yd??=import(o),yd}var Im={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function ct(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function ds(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return r<=.1?0:Math.min(1,.3+r/10)}function xd(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let i=Im[n.state];if(!i)return null;let r=n.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let c=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=ds(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function kd(o,e){let t=new Set(e??Ul);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var Pm=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household","frames"],Em=["fun_pets","fun_halloween","fun_winter"],us=["pool","room_bar"];function ps(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function $d(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function dt(o){return!us.includes(o)||o!=="diagnostics"&&o!=="locate"&&o!=="room_bar"&&B(o)||ps()}var zm=["fridge_smart"];function Tm(o){return Pm.includes(o)||zm.includes(o)||Em.includes(o)}var hs=o=>(o??navigator.language).toLowerCase().startsWith("de");function Sd(o){return`https://mastershort.de/my-account/?lang=${hs(o)?"de":"en"}&src=neonplan-app`}function Md(o){return hs(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Am={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#68-haushalt-pro",en:"pro-add-ons/#68-household-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Id(o,e){let t=hs(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Am[e]:void 0,r=i?t?i.de:i.en:"",[s,a]=r.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Rm(o=bt()){let e=new Set;for(let t of o)for(let n of t.features??[])Tm(n)&&e.add(n);return e}function B(o,e){return Rm(e).has(o)}var Fm=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),Hm=new Set(["power","plug","connectivity","running"]);function ii(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Hm.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Fm.has(n)||n.startsWith("ob ")}function gs(o){let e=ve(o);if(!e)return!1;if(Cm.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var Cm=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var xe=["#3a3f47","#3a3f47"],Gt=["#23262b","#23262b"],Be=["#5a3b25","#5a3b25"],be=["#1f4fa8","#1f4fa8"],It=["#e3b616","#e3b616"],te=["#2f7d3b","#2f7d3b"],Pd={default:{rest:xe,bio:Be,paper:be,plastic:It,glass:te,garden:te,recycling:It,other:xe},DE:{rest:Gt,bio:Be,paper:be,plastic:It,glass:te,garden:te,recycling:It},AT:{rest:xe,bio:Be,paper:[xe[0],"#c0262d"],plastic:It,glass:te,garden:te},CH:{rest:["#d8d8d8","#d8d8d8"],bio:te,paper:be,plastic:xe,glass:te,garden:te},NL:{rest:xe,bio:te,paper:be,plastic:["#3a3f47","#e57a1f"],glass:te,garden:te},BE:{rest:xe,bio:te,paper:be,plastic:be,glass:te,garden:te},GB:{rest:Gt,bio:["#3a3f47","#5a3b25"],paper:be,plastic:be,glass:Gt,garden:Be,recycling:be},US:{rest:Gt,bio:te,paper:be,plastic:be,glass:be,garden:te,recycling:be},CA:{rest:Gt,bio:te,paper:be,plastic:be,glass:be,garden:te,recycling:be},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:xe,bio:Be,paper:[xe[0],"#e3b616"],plastic:[xe[0],"#e3b616"],recycling:[xe[0],"#e3b616"],glass:te,garden:te},IT:{rest:xe,bio:Be,paper:be,plastic:It,glass:te,garden:te},ES:{rest:xe,bio:Be,paper:be,plastic:It,glass:te,garden:te},PT:{rest:xe,bio:Be,paper:be,plastic:It,glass:te,garden:te},DK:{rest:Gt,bio:te,paper:be,plastic:xe,glass:te,garden:te},SE:{rest:Gt,bio:Be,paper:be,plastic:xe,glass:te,garden:te},NO:{rest:xe,bio:Be,paper:be,plastic:xe,glass:te,garden:te},FI:{rest:xe,bio:Be,paper:be,plastic:xe,glass:te,garden:te}},Ad="DE";function Rd(o){Ad=o}function Fd(o){let e=o?.config?.country;if(e)return e.toUpperCase();let t=(o?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function Dm(o,e){return Pd[e]?.[o]??Pd.default[o]??xe}function Hd(o,e=Ad){let t=Dm(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Lm={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function ms(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&n.includes(i.trim())):e==="other"?!1:Lm[e].some(i=>n.includes(i))}function bs(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Om(o){return o.map(e=>({day:bs(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function Cd(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Dd(o,e,t=new Date,n=42){let i=new Map,r=o.callApi;if(!r)return i;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=ai(s,n);return await Promise.all(e.map(async l=>{try{let c=await r.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,Om(Array.isArray(c)?c:[]))}catch{}})),i}function Ed(o){let e=typeof o=="string"?o:o?.dateTime??o?.date;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:{at:n,allDay:!!t}}function Nm(o,e){return o.map(t=>{let n=Ed(t.start),i=Ed(t.end);return{summary:String(t.summary??"").trim(),calendar:e,allDay:!!n?.allDay,start:n?.at??null,end:i?.at??null}}).filter(t=>t.summary)}async function Ld(o,e,t=new Date){let n=o.callApi;if(!n||!e.length)return[];let i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=ai(i,1);return(await Promise.all(e.map(async a=>{try{let l=await n.call(o,"GET",`calendars/${a}?start=${encodeURIComponent(i.toISOString())}&end=${encodeURIComponent(r.toISOString())}`);return Nm(Array.isArray(l)?l:[],a)}catch{return[]}}))).flat()}function Od(o,e=new Date,t,n=6){let i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=ai(i,1),s=a=>a.toLocaleTimeString(t||void 0,{hour:"2-digit",minute:"2-digit"});return o.filter(a=>a.allDay?(!a.start||a.start<r)&&(!a.end||a.end>i):a.end&&a.end<=e?!1:!a.start||a.start<r).sort((a,l)=>Number(l.allDay)-Number(a.allDay)||(a.start?.getTime()??0)-(l.start?.getTime()??0)).filter((a,l,c)=>c.findIndex(d=>d.summary===a.summary&&d.start?.getTime()===a.start?.getTime())===l).slice(0,n).map(a=>{let l=!a.allDay&&a.start&&a.start>=i,c=!a.allDay&&!!a.start&&a.start.getTime()-e.getTime()<=36e5&&(!a.end||a.end>e);return{icon:"calendar-clock",text:l?`${s(a.start)} ${a.summary}`:a.summary,entity:a.calendar,...c?{hot:!0}:{}}})}var xn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),ai=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),ri=(o,e)=>Math.round((xn(e).getTime()-xn(o).getTime())/864e5);function fs(o,e,t={}){let n=t.from??14,i=t.until??12,r=e.getHours()+e.getMinutes()/60;return o===1&&r>=n||o===0&&r<i}function Nd(o,e,t,n=new Date,i=3){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return[];if(r.startsWith("calendar.")){let a=xn(n);return(t.get(r)??[]).filter(l=>l.day>=a&&ms(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,i)}let s=_s(o,e,t,n);return s?[{day:s.day,summary:s.summary}]:[]}function _s(o,e,t,n=new Date,i={}){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return null;let s=xn(n);if(r.startsWith("calendar.")){let d=(t.get(r)??[]).find(p=>p.day>=s&&ms(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let u=ri(s,d.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(i.until??12)){let p=(t.get(r)??[]).find(h=>h.day>s&&ms(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:ri(s,p.day),day:p.day,summary:p.summary,glow:fs(ri(s,p.day),n,i)}}return{days:u,day:d.day,summary:d.summary,glow:fs(u,n,i)}}let a=e.states[r];if(!a)return null;let l=Vm(a,n);if(l===null||l<0)return null;let c=ai(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:fs(l,n,i)}}function Wm(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&Kd.has(String(n.state).toLowerCase())}function vs(o,e){return Wm(o.bin_out,e)}function Wd(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Bd(o,e=.3){let t=o.filter(a=>!a.icon),n=t.map((a,l)=>l),i=a=>n[a]===a?a:n[a]=i(n[a]);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){let c=t[a],d=t[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+e&&(n[i(l)]=i(a))}let r=new Map;t.forEach((a,l)=>r.set(i(l),[...r.get(i(l))??[],a]));let s=[];for(let a of r.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Vd(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(i=>i.days)):0;return new Set(o.filter(i=>(t===null||i.days<=t)&&(!e.nextOnly||i.days===n)).map(i=>i.id))}function Bm(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o)??/(?:^|[^\d])(\d{1,2})(-)(\d{1,2})-(\d{4})(?![\d])/.exec(o),i,r,s;if(t)[i,r,s]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),c=Number(n[3]);n[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,r=c;let d=n[4];i=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(i,r-1,s)<xn(e)&&(i+=1)}else return null;if(r<1||r>12||s<1||s>31)return null;let a=new Date(i,r-1,s);return a.getMonth()===r-1?a:null}function Vm(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;for(let l of["Days_until","days_until"]){let c=t[l];if(typeof c=="number"&&Number.isFinite(c))return Math.round(c);if(typeof c=="string"&&/^-?\d+$/.test(c.trim()))return Number(c.trim())}let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let i=/^\d{4}-\d{2}-\d{2}T/.test(n)?bs(n):Bm(n,e);if(i)return ri(e,i);let r=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(r)??/\bin\s+(\d+)/.exec(r);if(s)return Number(s[1]);let a=r.match(/\d+/g);return a?Number(a[a.length-1]):null}var Kd=new Set(["on","open","true","detected","home"]);function zd(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Ud(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let i=e.states[n];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!r){let l=Number(i.state);return Kd.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=zd(i),a=zd(e.states[r]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function Gd(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Gm(o)}function jd(o){if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=ve(o)?.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var qd=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function ws(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let r=n.attributes,s=String(r.problem??"").toLowerCase();return String(r.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=qd(n);return i!==null&&i<(o.moisture_min??20)}function ys(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let r=Date.parse(t);return Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((r-e)/6e4)):null}var Km=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function xs(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Km.has(e)}var Um=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function ks(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Um.has(n))return!0;let i=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),r=!!o&&!i&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!r}function Zd(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Td(o,e,t,n){let i=typeof o=="string"&&o!=="none"?o:null,r=i?t.states[i]:void 0;if(!i||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return r.state==="on";let s=qd(r);if(s!==null)return s<=(e??10);let a=bs(r.state);return!!a&&a.getTime()<=xn(n).getTime()}function Yd(o,e,t=new Date){let n=[];return Td(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&Td(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var Pt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Xd=o=>!!o&&(o.state==="on"||o.state==="open");function li(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let i of Pt(o)){let r=e.states[i];if(Xd(r)&&r?.last_changed&&t-Date.parse(r.last_changed)>=n)return i}return null}function Qd(o,e,t=Date.now()){let n=null;for(let i of o)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let r of Pt(i)){let s=e.states[r];if(!Xd(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-t;a>0&&(n===null||a<n)&&(n=a)}return n}var si=class{running=new Map;ended=new Map;update(e,t,n,i=Date.now()){let r=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;r===!0&&this.ended.set(e,i);let s=this.ended.get(e);return s===void 0?!1:i-s>12*36e5||n(s)?(this.ended.delete(e),!1):!0}};function Gm(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var jm=10*6e4,qm=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Jd={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function ao(o,e,t){let n=[];for(let d of e.floors)for(let u of d.rooms){let p=we(o,u.area_id).filter(h=>h.startsWith("binary_sensor.")&&!!Jd[String(o.states[h]?.attributes.device_class)]);p.length&&n.push({floorId:d.id,roomId:u.id,sensors:p})}let i=Object.keys(o.states),r=e.settings.rain_warning===!1?null:ct(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=B("household")?e.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&Pt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(p=>p.points.length>=3&&V([u.x,u.z],p.points))?.id??null,furnitureId:u.id,ids:Pt(u)}))):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=l&&o.states[l]?l:null;return{rooms:n,alarms:i.filter(d=>d.startsWith("alarm_control_panel.")),weather:r,outage:s,rain:c,fridges:a}}function $s(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function ci(o,e,t,n){let i=[];for(let a of t.rooms)for(let l of a.sensors){let c=o.states[l];c?.state==="on"&&i.push({kind:Jd[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let r=t.rain?ds(o,t.rain):null;if(r!==null?r>0:!!t.weather&&qm.has(o.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=n.get(l.id);if(!c)continue;let d=it(o,c,"window");d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5||i.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id})}if(t.outage&&ii(o.states[t.outage])&&i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of e.floors)for(let d of c.openings){let u=n.get(d.id);if(u)for(let p of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!p||l.has(p))continue;let h=o.states[p];if(!h||h.state!=="unavailable"&&h.state!=="unknown")continue;let b=Date.parse(h.last_changed??"");Number.isFinite(b)&&a-b<jm||(l.add(p),i.push({kind:"contact_unavailable",entity:p,roomId:d.room_id,floorId:c.id}))}}}for(let a of t.fridges??[]){let l=e.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?li(l,o):null;c&&i.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId})}for(let a of t.alarms){let l=o.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return i}function eu(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Et(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let i=o?K(o,t.entity):t.entity,r=P(o,`alert_${t.kind}`,{name:i});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${P(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${r}`:r}function di(o,e){let t=Mt(o,e,null),n=t.map(r=>r.temp).filter(r=>r!==null),i=ci(o,e,ao(o,e),new Map).filter(r=>r.roomId!==null);return{rooms:t.length,lightsOn:t.reduce((r,s)=>r+s.lightsOn.length,0),open:t.reduce((r,s)=>r+s.open,0),playing:t.filter(r=>r.playing).length,temp:n.length?Math.round(n.reduce((r,s)=>r+s,0)/n.length*10)/10:null,alerts:i}}var Pe=ce`
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
`,Re=ce`
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
  /* the group titles of an opened list (the styles): dark too, else a white bar with light text */
  .fp3d-field select optgroup,
  select optgroup {
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-accent);
    font-style: normal;
    font-weight: 700;
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
`;var ui=o=>o?.icon||"\u{1F3E0}";function kn(o,e,t){return e.find(i=>i.id===t)?.name||(t===fe?P(o,"plan_main"):"?")}var Ss=class extends ae{static properties={hass:{attribute:!1},plans:{attribute:!1},current:{attribute:!1},admin:{type:Boolean},alerts:{attribute:!1},site:{type:Boolean},hasSite:{type:Boolean},_open:{state:!0}};constructor(){super(),this.plans=[],this.current=fe,this.admin=!1,this.alerts=null,this.site=!1,this.hasSite=!1,this._open=!1}t(e,t){return P(this.hass,e,t)}fire(e,t={}){this._open=!1,this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}close=e=>{e.composedPath().includes(this)||(this._open=!1)};connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.close)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.close)}render(){let e=this.plans.find(n=>n.id===this.current),t=[...this.alerts??new Map].filter(([n,i])=>n!==this.current&&i>0).reduce((n,[,i])=>n+i,0);return g`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${()=>this._open=!this._open}
      >
        <span class="fp3d-pp-icon">${this.site?"\u{1F3D8}":ui(e)}</span>
        <span class="fp3d-pp-name">${this.site?this.t("plan_site"):kn(this.hass,this.plans,this.current)}</span>
        ${t?g`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere",{n:t})}>${t}</span>`:y}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open?g`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(n=>g`<button role="option" aria-selected=${!this.site&&n.id===this.current} @click=${()=>this.fire("plan-pick",{plan:n.id})}>
                <span class="fp3d-pp-icon">${ui(n)}</span>
                <span class="fp3d-pp-name">${kn(this.hass,this.plans,n.id)}</span>
                ${this.alerts?.get(n.id)?g`<span class="fp3d-pp-alert">${this.alerts.get(n.id)}</span>`:y}
                <span class="fp3d-pp-size">${this.t(n.rooms===1?"floor_rooms_one":"floor_rooms",{n:n.rooms})}</span>
              </button>`)}
            ${this.hasSite?g`<button role="option" aria-selected=${this.site} @click=${()=>this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`:y}
            ${this.plans.length>1?g`<button class="fp3d-pp-extra" @click=${()=>this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`:y}
            ${this.admin?g`<hr />
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`:y}
          </div>`:y}`}static styles=[Pe,Re,ce`
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
    `]};customElements.get("fp3d-plan-picker")||customElements.define("fp3d-plan-picker",Ss);var Ms=class extends ae{static properties={hass:{attribute:!1},plans:{attribute:!1},buildings:{attribute:!1},current:{attribute:!1}};t(e,t){return P(this.hass,e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}render(){let e=String(this.hass?.config?.unit_system?.temperature??"\xB0C");return g`<div class="fp3d-po-veil" @click=${t=>t.target===t.currentTarget&&this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map(t=>{let n=this.buildings.get(t.id),i=n&&this.hass?di(this.hass,n):null;return g`<button class="fp3d-po-tile ${i?.alerts.length?"fp3d-po-alert":""} ${t.id===this.current?"fp3d-po-current":""}" @click=${()=>this.fire("plan-pick",{plan:t.id})}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${ui(t)}</span><strong>${kn(this.hass,this.plans,t.id)}</strong></span>
              ${i?g`<span class="fp3d-po-facts">
                      <span>${this.t(i.rooms===1?"floor_rooms_one":"floor_rooms",{n:i.rooms})}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${i.lightsOn}</span>
                      ${i.open?g`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n",{n:i.open})}</span>`:y}
                      ${i.playing?g`<span>♪ ${i.playing}</span>`:y}
                      ${i.temp!==null?g`<span>🌡 ${ne(this.hass,i.temp,1)} ${e}</span>`:y}
                    </span>
                    ${i.alerts.slice(0,3).map(r=>g`<span class="fp3d-po-warn">⚠ ${Et(this.hass,n,r)}</span>`)}`:g`<span class="fp3d-po-facts">…</span>`}
            </button>`})}
        </div>
      </section>
    </div>`}static styles=[Pe,Re,ce`
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
    `]};customElements.get("fp3d-plan-overview")||customElements.define("fp3d-plan-overview",Ms);var Is=":",Zm=.05;function nu(o,e){let t=o.indexOf(Is);return t>0?{plan:o.slice(0,t),id:o.slice(t+1)}:{plan:e,id:o}}function Ym(o,e){let t=e.rot*Math.PI/180,n=Math.cos(t),i=Math.sin(t),r=s=>Math.round(s*1e3)/1e3;return[r(o[0]*n-o[1]*i+e.x),r(o[0]*i+o[1]*n+e.y)]}function Xm(o,e,t){let n=s=>`${e}${Is}${s}`,i=s=>Ym(s,t),r=s=>(((s??0)+t.rot)%360+360)%360;return{...o,id:n(o.id),rooms:o.rooms.map(s=>({...s,id:n(s.id),points:s.points.map(i),start_view:null})),openings:o.openings.map(s=>({...s,id:n(s.id),room_id:n(s.room_id),wall:s.wall?n(s.wall):s.wall})),furniture:o.furniture.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,id:n(s.id),x:a,z:l,rotation:r(s.rotation)}}),placements:o.placements.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,x:a,z:l,rotation:r(s.rotation)}}),outdoor:(o.outdoor??[]).map(s=>({...s,id:n(s.id),points:s.points.map(i)})),walls:(o.walls??[]).map(s=>({...s,id:n(s.id),a:i(s.a),b:i(s.b)})),background:null,start_view:null}}function tu(o,e=""){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type===void 0||t.type==="custom")return t.sections??[];let n=od(o,i=>`${e}roof_${i+1}`);return t.type==="flat"?n.map(i=>({...i,shape:"flat"})):n}function Qm(o,e,t){let n=t.rot?Jc(o,t.rot,[0,0]):o,i=r=>[r[0]+t.x,r[1]+t.y];return{...n,id:`${e}${Is}${o.id}`,x0:n.x0+t.x,x1:n.x1+t.x,z0:n.z0+t.y,z1:n.z1+t.y,pivot:n.pivot?i(n.pivot):n.pivot,points:n.points?n.points.map(i):n.points}}function ou(o,e){let t=o.floors.map(c=>({...c,rooms:[...c.rooms],openings:[...c.openings],furniture:[...c.furniture],placements:[...c.placements],outdoor:[...c.outdoor??[]],walls:[...c.walls??[]]}));for(let c of e)if(c.site?.on)for(let d of c.building.floors){let u=Xm(d,c.id,c.site),p=t.find(h=>Math.abs(h.elevation-d.elevation)<Zm);if(!p){t.push(u);continue}p.rooms.push(...u.rooms),p.openings.push(...u.openings),p.furniture.push(...u.furniture),p.placements.push(...u.placements),p.outdoor.push(...u.outdoor),p.walls=[...p.walls??[],...u.walls??[]]}t.sort((c,d)=>c.elevation-d.elevation);let n=c=>c.floors.some(d=>d.rooms.some(u=>u.points.length>=3)),i=n(o)?tu(o):[],r=o.settings.roof.type!=="custom"&&o.settings.roof.type!==void 0,s=(o.settings.roof.solar??[]).map(c=>r&&i[0]&&c.face.startsWith("main:")?{...c,face:`${i[0].id}:${c.face.slice(5)}`}:c),a=[...i,...e.filter(c=>c.site?.on&&n(c.building)).flatMap(c=>tu(c.building).map(d=>Qm(d,c.id,c.site)))],l={...o.settings.roof,type:"custom",sections:a,solar:s};return{...o,floors:t,card_templates:[],settings:{...o.settings,start_view:null,roof:l}}}var $n=class{others=new Map;watched="";unsubscribe=null;siteOf=null;host;constructor(e){this.host=e}watch(e,t){let n=t.plans.map(s=>s.id).filter(s=>s!==t.planId),i=`${t.planId}|${n.join(",")}`;if(!e||i===this.watched)return;this.watched=i;let r=s=>Ho(e,s).then(a=>{!t.plans.some(l=>l.id===s)||s===t.planId||(this.others=new Map(this.others).set(s,qn(a.building)),this.host.requestUpdate())},()=>{});this.others=new Map([...this.others].filter(([s])=>n.includes(s)));for(let s of n)r(s);n.length&&!this.unsubscribe&&ll(e,s=>{s!==t.planId&&t.plans.some(a=>a.id===s)&&r(s)}).then(s=>this.unsubscribe=s,()=>{})}stop(){this.unsubscribe?.(),this.unsubscribe=null,this.watched=""}all(e){let t=new Map(this.others);return e.building&&t.set(e.planId,e.building),t}site(e){let t=this.all(e),n=t.get(fe);if(!n)return null;let i=e.plans.filter(a=>a.id!==fe&&a.site?.on).map(a=>({id:a.id,site:a.site,building:t.get(a.id)}));if(i.some(a=>!a.building))return null;let r=[n,...i.flatMap(a=>[a.building,a.site?.x,a.site?.y,a.site?.rot])];if(this.siteOf&&this.siteOf.key.length===r.length&&this.siteOf.key.every((a,l)=>a===r[l]))return this.siteOf.to;let s=ou(n,i.map(a=>({id:a.id,site:a.site,building:a.building})));return this.siteOf={key:r,to:s},s}};var iu={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Sn(o){return iu[o]}function Ze(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function jt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${iu[o]}"/></svg>`}var ru="neonplan3d.roombar_min",Jm="M5 4h14v16H5zM12 4v16M5 12h14",su="M8 5.5v13l10.5-6.5z",pi=o=>g`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${et`<path d=${o} />`}</svg>`,Ps=class extends ae{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},favorites:{type:Boolean},readOnly:{type:Boolean},_min:{state:!0},_fired:{state:!0}};constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.favorites=!1,this.readOnly=!1,this._fired=null;try{this._min=localStorage.getItem(ru)==="1"}catch{this._min=!1}}t(e,t){return P(this.hass,e,t)}setMin(e){this._min=e;try{localStorage.setItem(ru,e?"1":"0")}catch{}}toggleLights(e,t){if(e.stopPropagation(),this.readOnly)return;let[n,i]=ud(t);i.length&&this.hass.callService("light",n,{entity_id:i})}pick(e,t){this.dispatchEvent(new CustomEvent("room-pick",{detail:{floorId:e,roomId:t},bubbles:!0,composed:!0}))}render(){let e=this.building;if(!e||!this.hass)return y;if(this._min)return g`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${()=>this.setMin(!1)}>▴ ${this.t("room_bar_rooms")}</button>`;let t=this.hass,n=Mt(t,e,this.floorId),i=this.favorites?pd(t,e):[],r=!this.floorId&&e.floors.length>1,s=a=>e.floors.find(l=>l.id===a)?.name??"";return g`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${()=>this.setMin(!0)}>▾</button>
      ${i.map(a=>{let l=t.states[a.id],c=a.domain!=="homeassistant",d=this.readOnly||Y(l),u=()=>{d||(t.callService(a.domain,a.service,{entity_id:a.id}),this._fired=a.id,setTimeout(()=>this._fired=null,700))};return g`<div class="fp3d-rb-card fp3d-rb-fav ${a.on||this._fired===a.id?"fp3d-rb-on":""} ${d?"fp3d-rb-off":""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${K(t,a.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${c?g`<button class="fp3d-rb-act" ?disabled=${d} @click=${u}>${pi(su)} ${this.t("room_bar_activate")}</button>`:g`<button class="fp3d-rb-switch" role="switch" aria-checked=${a.on} ?disabled=${d} @click=${u}>
                <span>${a.on?this.t("room_bar_on"):this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`})}
      ${i.length&&n.length?g`<span class="fp3d-rb-sep" aria-hidden="true"></span>`:y}
      ${n.map(a=>{let l=a.temp===null&&!a.lights.length&&!a.open&&!a.playing,c=a.lightsOn.length>0;return g`<div
          class="fp3d-rb-card ${l?"fp3d-rb-quiet":""} ${a.active?"fp3d-rb-active":""} ${a.roomId===this.roomId?"fp3d-rb-sel":""}"
          role="button"
          tabindex="0"
          title=${r?`${a.name} \xB7 ${s(a.floorId)}`:a.name}
          aria-pressed=${a.roomId===this.roomId}
          @click=${()=>this.pick(a.floorId,a.roomId)}
          @keydown=${d=>d.target===d.currentTarget&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),this.pick(a.floorId,a.roomId))}
        >
          <div class="fp3d-rb-top">
            <b class="fp3d-rb-name">${a.name}</b>
            ${a.temp===null?y:g`<span class="fp3d-rb-temp">${ne(t,a.temp,1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${r?g`<span class="fp3d-rb-floor">${s(a.floorId)}</span>`:y}
            ${a.humidity===null?y:g`<span>${ne(t,a.humidity,0)} %</span>`}
            ${a.open?g`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${pi(Jm)}${a.open>1?a.open:""}</span>`:y}
            ${a.playing?g`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${pi(su)}</span>`:y}
          </div>
          ${a.lights.length?g`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${c}
                aria-label=${`${this.t("room_bar_light")} ${a.name}`}
                ?disabled=${this.readOnly}
                @click=${d=>this.toggleLights(d,a)}
                @keydown=${d=>d.stopPropagation()}
              >
                <span>${pi(Sn("light"))} ${c?`${this.t("room_bar_light")} \xB7 ${this.t("room_bar_lights",{n:a.lightsOn.length})}`:this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`:g`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`})}
    </div>`}static styles=[Pe,Re,ce`
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
    `]};customElements.get("fp3d-room-bar")||customElements.define("fp3d-room-bar",Ps);function Es(o){return o?.settings.person_look??"figure"}function fi(o){return Es(o)!=="off"}var au=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function hi(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return au[e%au.length]}var lu=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function eg(o,e,t){let n=lu(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of e.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(lu).includes(n))return{floorId:i.id,room:r};return null}function cu(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function tg(o,e){return["home","on","unknown","unavailable",""].includes(o)?!1:!(e&&o!=="not_home"&&ng(e,o))}function ng(o,e){let t=o.states["zone.home"]?.attributes;if(!t||typeof t.latitude!="number"||typeof t.longitude!="number")return!1;let n=Math.PI/180;for(let[i,r]of Object.entries(o.states)){if(!i.startsWith("zone.")||i==="zone.home")continue;let s=r.attributes;if(s.friendly_name!==e||typeof s.latitude!="number"||typeof s.longitude!="number")continue;let a=(s.latitude-t.latitude)*n,l=(s.longitude-t.longitude)*n,c=Math.sin(a/2)**2+Math.cos(t.latitude*n)*Math.cos(s.latitude*n)*Math.sin(l/2)**2;if(2*6371e3*Math.asin(Math.sqrt(c))<=(typeof t.radius=="number"?t.radius:100)+(typeof s.radius=="number"?s.radius:0))return!0}return!1}function du(o,e){let t=[],n=new Map;for(let i of e.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=eg(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Tr(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=r.attributes.friendly_name??i.person;t.push({id:i.person,name:h,initials:cu(h),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return t}function mi(o,e,t=new Set,n=Date.now()){let i=[];for(let[u,p]of Object.entries(o.states)){let h=p.attributes;if(!u.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let b=null;for(let w of e.floors){let k=oe(w).find(v=>v.id===h.room_id);k&&(b={floorId:w.id,room:k})}if(!b)continue;let _=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,m=typeof h.since=="string"?Date.parse(h.since):NaN;i.push({entityId:u,name:typeof h.device_name=="string"?h.device_name:u,person:typeof h.person=="string"?h.person:null,floorId:b.floorId,room:b.room,seen:Number.isFinite(_)?_:0,since:Number.isFinite(m)?m:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let r=[],s=new Map,a=new Map,l=(u,p)=>{let h=s.get(u.room.id)??0;if(s.set(u.room.id,h+1),!p.thing){let f=a.get(u.room.id);if(!f){try{f=ag(o,e,u.floorId,u.room)}catch{f=[]}a.set(u.room.id,f)}let M=f.shift();for(;M&&!V(M,u.room.points);)M=f.shift();if(M){r.push({...p,floorId:u.floorId,roomId:u.room.id,x:M[0],z:M[1]});return}}let[b,_]=Tr(u.room.points),m=-Math.PI/2+.9+h*1.15,w=[b+Math.cos(m)*.75,_+Math.sin(m)*.75],[k,v]=V(w,u.room.points)?w:[b,_];r.push({...p,floorId:u.floorId,roomId:u.room.id,x:k,z:v})},c=(u,p)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:u.entityId,tag:u.name,thing:!0}),d=new Map;for(let u of i)u.person?d.set(u.person,[...d.get(u.person)??[],u]):c(u,hi(u.entityId));for(let[u,p]of d){if(t.has(u))continue;let h=o.states[u];if(h&&tg(h.state,o)){for(let f of p)c(f,hi(u));continue}let b=f=>f.reduce((M,x)=>x.seen>M.seen?x:M),_=p.filter(f=>f.worn&&n-f.seen<12e4),m=b(_.length?_:p),w=f=>n-f.seen<3e4&&n-m.seen<3e4&&f.since>=m.since-12e4,k=null;if(m.worn){let f=p.filter(x=>!x.worn&&x.room.id!==m.room.id&&w(x)),M=f.length?f.reduce((x,I)=>I.probability>x.probability?I:x):null;M&&n-m.since>=6e5&&M.since>m.since+12e4?(k=m,m=M):M&&M.probability>m.probability+.15&&(m=M)}let v=h?.attributes.friendly_name??m.name;l(m,{id:u,name:v,initials:cu(v),picture:h?.attributes.entity_picture??null,color:hi(u),entity:m.entityId,tag:v.split(/\s+/)[0]});for(let f of p)f===m||f.room.id===m.room.id||f!==k&&(f.worn&&n-f.seen<12e4||w(f))||c(f,hi(u))}return r}var og=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],ig=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function rg(o,e){let t=[],[n,i]=ze(e.points),r=(s,a)=>s.points.some((l,c)=>{let d=s.points[(c+1)%s.points.length],[u,p]=[d[0]-l[0],d[1]-l[1]],h=u*u+p*p||1,b=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+b*u-a[0],l[1]+b*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(b=>b.id===s.room_id);if(!a)continue;let l=a.points[s.edge],c=a.points[(s.edge+1)%a.points.length];if(!l||!c)continue;let d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[l[0]+(c[0]-l[0])*s.offset/d,l[1]+(c[1]-l[1])*s.offset/d];if(!r(e,u))continue;let p=o.rooms.find(b=>b.id!==e.id&&r(b,u)),h=.6/(Math.hypot(n-u[0],i-u[1])||1);t.push({to:p?Mn(p.name):null,spot:[u[0]+(n-u[0])*h,u[1]+(i-u[1])*h]})}return t}var sg=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],Mn=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function ag(o,e,t,n){let i=e.floors.find(c=>c.id===t);if(!i||!n.area_id)return[];let r=i.furniture.filter(c=>V([c.x,c.z],n.points)),s=rg(i,n),a=[],l=new Set([...Mn(n.name),...Mn(o.areas?.[n.area_id]?.name??""),...Mn(n.area_id),...sg]);for(let[c,d]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||d.state!=="on")continue;let u=d.attributes.device_class;if(u!=="occupancy"&&u!=="presence"||Te(o,c)!==n.area_id)continue;let h=new Set(Mn(String(d.attributes.friendly_name??c.slice(14))).filter(w=>!l.has(w))),b=r.find(w=>w.name&&Mn(w.name).some(k=>h.has(k))||og.some(([k,v])=>k.test(w.type.split(":").pop()??"")&&v.some(f=>h.has(f)))),_=b?null:s.find(w=>w.to?w.to.some(k=>h.has(k)):[...h].some(k=>ig.some(v=>k.includes(v)))),m=b?[b.x,b.z]:_?_.spot:null;m&&!a.some(([w,k])=>w===m[0]&&k===m[1])&&a.push(m)}return a}function uu(o,e,t,n){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Zo(o,we(o,c.area_id)))N(d)==="light"&&a.add(d);for(let c of s.placements)N(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(it(o,d,"garage").cover??1)<.95;if(c.type==="door")return r(d.contact)||r(d.contact2??null);let u=it(o,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return i}function pu(o,e){let t=[e.rooms===1?P(o,"floor_rooms_one"):P(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(P(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(P(o,"floor_open",{n:e.open})),e.persons&&t.push(P(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var zt=(o,e)=>P(o,e);function _e(o,e){if(!e||Y(e))return zt(o,"state_unavailable");let t=e.attributes;switch(N(e.entity_id)){case"light":return e.state!=="on"?zt(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:zt(o,"state_on");case"switch":case"fan":return zt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:gi(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${ne(o,t.current_temperature,1)} ${o?Oe(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${zt(o,"state_off")}`:zt(o,"state_off"):n??gi(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return n&&i?i:gi(o,e.state)}case"lock":case"camera":return gi(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?zt(o,e.state==="on"?"state_open":"state_closed"):zt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),i=t.unit_of_measurement??"",r=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${ne(o,n,r)}${i?` ${i}`:""}`:e.state}default:return""}}function gi(o,e){let t=`state_${e}`,n=P(o,t);return n===t?e:n}function hu(o,e){let t=[],n=new Set(e.floors.flatMap(i=>i.furniture.map(r=>r.look_of).filter(r=>!!r)));for(let i of e.floors)for(let r of i.placements){let s=N(r.entity_id),a=o.states[r.entity_id];if(!s||!a)continue;let l=i.rooms.find(d=>d.points.length>=3&&V([r.x,r.z],d.points))??null,c=l?.area_id?o.areas?.[l.area_id]?.name:void 0;t.push({id:r.entity_id,floorId:i.id,roomId:l?.id??null,x:r.x,z:r.z,y:r.y??pn(s,i.height,r.mount??null),lamp:s==="light"?r.mount??"ceiling":null,model:s==="camera"?r.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...s==="camera"&&n.has(r.entity_id)?{ownLook:!0}:{},motion:s==="camera"?lg(o,r.entity_id):void 0,fov:r.fov??void 0,reach:r.reach??void 0,tilt:r.tilt??void 0,rotation:r.rotation??0,icon:r.icon?Ze(r.icon):jt(s),cone:s==="camera"&&r.cone===!1?!1:void 0,name:r.name||K(o,r.entity_id,c),ownName:r.name||void 0,showName:!!r.show_name,text:_e(o,a),active:He(a),unavailable:Y(a),glow:s==="light"?zs(ot(a),r.glow_scale):null,show:r.marker??void 0,fixed:!!r.locked})}return t}function lo(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function lg(o,e){return Ve(o,e).some(t=>o.states[t]?.state==="on")}var fu=new Map;function mu(o){fu=new Map(o?.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors]))??[])}function Ve(o,e){return fu.get(e)??cg(o,e)}function cg(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function gu(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Me(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function bi(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function zs(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function _i(o,e,t){let{shown:n,more:i}=mn(o,e,t),r=(b,_)=>V([b,_],t.points),s=new Set(e.furniture.filter(b=>r(b.x,b.z)&&Gn(b.type)&&b.entity?.startsWith("switch.")).map(b=>b.entity)),a=[],l=[],c=[],d=[],u=[];for(let b of new Set([...n,...i])){let _=o.states[b];if(!_||Y(_))continue;let m=b.split(".")[0];m==="light"&&_.state==="on"?a.push(b):m==="fan"&&_.state==="on"?l.push(b):m==="switch"&&_.state==="on"&&s.has(b)?c.push(b):m==="media_player"&&_.state!=="off"&&_.state!=="standby"&&(_.attributes.device_class==="tv"?d.push(b):_.state==="playing"&&u.push(b))}let p=[],h=(b,_,m)=>m.length&&p.push({domain:b,service:_,data:{entity_id:m}});return h("light","turn_off",a),h("fan","turn_off",l),h("switch","turn_off",c),h("media_player","turn_off",d),h("media_player","media_pause",u),p}function vi(o){return o.reduce((e,t)=>e+t.data.entity_id.length,0)}function wi(o,e){let t=e.cleaning;if(!t||!o.states[t])return null;let[n,i]=rt(t);return{domain:n,service:i,data:{entity_id:t}}}function bu(o,e){if(!e)return null;for(let t of o){let n=t.rooms.find(i=>i.area_id===e);if(n)return{floor:t,room:n}}return null}var dg=4,ug=3e3,pg=8,hg=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],fg=o=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Sn(o)} />
  </svg>`,yi={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Ts=o=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,As=class extends ae{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},walk:{type:Boolean},collapsible:{type:Boolean},compact:{type:Boolean,reflect:!0},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ug)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return P(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}renderRoomActions(e){if(this.readOnly)return y;let t=wi(this.hass,e),n=this.floor?_i(this.hass,this.floor,e):[];if(!t&&!n.length)return y;let i=r=>r.forEach(s=>this.call(s.domain,s.service,s.data));return g`<div class="fp3d-rp-sheets">
      ${t?g`<button class="fp3d-rp-sheet" @click=${()=>i([t])}><span aria-hidden="true">🧹</span>${this.t("panel_clean")}</button>`:y}
      ${n.length?g`<button class="fp3d-rp-sheet" @click=${()=>i(n)}><span aria-hidden="true">⏻</span>${this.t("panel_everything_off",{n:vi(n)})}</button>`:y}
    </div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return K(this.hass,e,this.areaName,!0)}nameButton(e){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&Me(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let i=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${Y(e)}
      @click=${i}
    ></button>`}renderHere(e){if(!this.building||!dt("locate")||!fi(this.building))return y;let t=mi(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?g`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,i)=>g`${i?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:y}willUpdate(e){this.collapsible&&(e.has("room")||e.has("collapsible"))&&e.get("room")?.id!==this.room?.id&&(this.compact=!0),!this.collapsible&&this.compact&&(this.compact=!1)}render(){let e=this.room;if(!e||!this.hass)return y;let t=we(this.hass,e.area_id),n=this.memo,{shown:i,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?mn(this.hass,this.floor,e,this.building?oi(this.building,e.id):[]):{shown:t,more:[]}},s=Br(this.hass,r).map(f=>f.primary),a=s.length,l=this._showAll?[...i,...s]:i,c=f=>l.filter(M=>f.includes(N(M))).map(M=>this.hass.states[M]).filter(M=>!!M),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),h=c(["media"]),b=c(["switch","fan","lock"]),_=c(["sensor","binary"]),m=c(["camera"]);this.hasCameras=m.length>0;let w=c(["scene","script"]),k=this.facts(p),v=d.filter(f=>f.state==="on");return g`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${k.length?g`<p class="fp3d-rp-facts">${k.join(" \xB7 ")}</p>`:y}
          ${this.renderHere(e)}
          ${this.renderRoomActions(e)}
          ${this.readOnly?g`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:y}
          ${this.sheets?.length&&!this.readOnly?g`<div class="fp3d-rp-sheets">
                ${this.sheets.map(f=>g`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:f.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${f.icon}</span>${f.title}
                  </button>`)}
              </div>`:y}
        </div>
        ${this.walk&&!this.readOnly&&e.points.length>=3?g`<button class="fp3d-rp-close fp3d-rp-walk" title=${this.t("walk_start")} aria-label=${this.t("walk_start")} @click=${()=>this.fire("walk-here")}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
            </button>`:y}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      ${this.collapsible&&e.area_id&&l.length?g`<button class="fp3d-rp-fold" aria-expanded=${!this.compact} @click=${()=>this.compact=!this.compact}>
            <span aria-hidden="true">${this.compact?"\u25B4":"\u25BE"}</span>
            ${this.compact?`${this.t("panel_fold_open")}${v.length?` \xB7 ${this.t("panel_fold_lights",{n:v.length})}`:""}`:this.t("panel_fold_close")}
          </button>`:y}
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?y:g`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:g`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(f=>this.lightRow(f)),g`${v.length<d.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(f=>!Y(f)).map(f=>f.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${v.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:v.map(f=>f.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(f=>this.coverRow(f)),u.length>1?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"open")}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"close")}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${p.length?this.section("panel_climate",p.map(f=>this.climateRow(f))):y}
        ${h.length?this.section("panel_media",h.map(f=>this.mediaRow(f))):y}
        ${b.length?this.section("panel_switches",b.map(f=>this.switchRow(f))):y}
        ${m.length?this.section("panel_cameras",m.map(f=>this.cameraTile(f))):y}
        ${_.length?this.section("panel_sensors",_.map(f=>this.sensorRow(f))):y}
        ${w.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${w.map(f=>g`<button
                      class="fp3d-btn"
                      ?disabled=${Y(f)}
                      @click=${()=>this.call(N(f.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:f.entity_id})}
                    >
                      ${this.name(f.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let t=[],n=this.room,i=(l,c)=>{let d=Ne(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${ne(this.hass,wt(this.hass,d),1)} ${Oe(this.hass)}`;let u=Dr(this.hass,this.floor,n,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${ne(this.hass,d,1)} ${p}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):r&&n.climate?.temperature!=="none"&&t.push(`${ne(this.hass,r.attributes.current_temperature,1)} ${Oe(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,n=y){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}rowIcon(e,t){let n=this.floor,i=n?.furniture.find(s=>s.icon&&(s.entity===t||s.fan===t))?.icon??n?.placements.find(s=>s.icon&&s.entity_id===t)?.icon;if(!i)return fg(e);let r=i.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"");return g`<ha-icon icon=${`mdi:${r}`} style="--mdc-icon-size:18px"></ha-icon>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon("light",u)}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&r?g`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:y}
      ${n&&s?g`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:y}
      ${n&&a?g`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${hg.map(p=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:y}
    </div>`}covers(e,t){let n=e.filter(i=>!Y(i)).map(i=>i.entity_id);for(let i of jo(this.hass,n,t))this.call("cover",i.service,i.data)}coverRow(e){let t=e.attributes,n=t.supported_features??0,i=e.entity_id,r=Y(e);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${this.rowIcon("cover",e.entity_id)}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"open")}>${this.t("cover_open")}</button>
        ${n&pg||n&64&&!(n&3)?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.covers([e],"stop")}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"close")}>${this.t("cover_close")}</button>
      </div>
      ${n&dg&&typeof t.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:y}
      ${n&128&&typeof t.current_tilt_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(hn(e,eo(this.building,i))??0)}
              @change=${s=>{let a=Number(s.target.value);this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:eo(this.building,i)?100-a:a})}}
          /></label>`:Go(this.hass?.states[i])?g`<div class="fp3d-rp-buttons">
              ${n&16?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:y}
              ${n&32?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${this.rowIcon("climate",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ne(this.hass,i,1)} ${Oe(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+r)}>+</button>
          </div>`:y}
      ${l.length>1?g`<div class="fp3d-rp-chips">
            ${l.map(d=>g`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:y}
    </div>`}stateOf(e,t=_e(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=N(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=Y(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${this.rowIcon("media",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?g`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Ts(yi.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${Y(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${Ts(e.state==="playing"?yi.pause:yi.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Ts(yi.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:y}
    </div>`}switchRow(e){let t=e.entity_id,n=N(t),i=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${this.rowIcon(n,t)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!Y(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return g`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&Me(this,e.entity_id)}>
        ${n?g`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${_e(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?g`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${B("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let t=N(e.entity_id),n=t==="binary"&&e.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon(t,e.entity_id)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Pe,Re,ce`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        min-height: 0;
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
      .fp3d-rp-fold {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 40px;
        padding: 6px 14px;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
      }
      :host([compact]) .fp3d-rp-fold {
        border-bottom: none;
      }
      :host([compact]) .fp3d-rp-body {
        display: none;
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",As);function _u(o,e,t,n,i=!1){let r=s=>{let a=s?.value.trim();!s||!a||(s.value="",n([...o,a]))};return g`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((s,a)=>g`<div class="fp3d-lines-row">
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
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),r(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>r(s.currentTarget.previousElementSibling)}>
        ${t.add}
      </button>
    </div>
  </div>`}var mg="#ff3fb4";function wu(o){let e=String(o??"").split(/\s*(?:\||\n)\s*/).map(t=>t.trim().slice(0,40)).filter(Boolean).slice(0,2);return e.length?e:["Neon"]}function vu(o){return!o||!/^#[0-9a-f]{6}$/i.test(o)?null:[1,3,5].map(e=>parseInt(o.slice(e,e+2),16)/255)}function yu(o,e,t){let n=vu(o.sign_color)??vu(mg);if(!t)return{on:!0,color:n,level:1};if(!e)return{on:!1,color:n,level:0};if(e.entity_id.split(".")[0]==="light"){let s=ot(e);if(!s)return{on:!1,color:n,level:0};let a=e.attributes.color_mode;return{on:!0,color:Array.isArray(e.attributes.rgb_color)&&a!=="color_temp"&&a!=="brightness"&&a!=="onoff"&&a!=="white"?s.color:n,level:s.level}}let r=["on","open","home","playing","heat","cool","auto"].includes(e.state);return{on:r,color:n,level:r?1:0}}var co=new Map;function xu(o,e,t,n,i){let r=Math.min(8,Math.max(.25,Number.isFinite(i)&&i>0?i:3)),s=t?Math.round(Math.min(1,Math.max(.2,n))*10)/10:0,a=`${o.join(`
`)}|${e.map(f=>Math.round(f*32)).join(",")}|${s}|${r.toFixed(2)}`,l=co.get(a);if(l)return l;if(typeof document>"u")return null;let c=r>=1?1024:Math.round(1024*r),d=r>=1?Math.round(1024/r):1024,u=document.createElement("canvas");u.width=c,u.height=d;let p=u.getContext("2d");if(!p)return null;let h="'Dancing Script', 'Segoe Script', 'Brush Script MT', 'Comic Sans MS', cursive";p.font=`600 100px ${h}`;let b=Math.max(...o.map(f=>p.measureText(f).width),1),_=Math.max(12,Math.min(c*.86*100/b,d*.78/(o.length*1.15)));p.font=`600 ${_}px ${h}`,p.textAlign="center",p.textBaseline="middle",p.lineJoin="round";let m=(f,M,x=1)=>`rgba(${f.map(I=>Math.round(Math.min(1,Math.max(0,I*M))*255)).join(",")},${x})`,w=e.map(f=>f+(1-f)*.65),k=d/2-(o.length-1)*_*1.15/2;o.forEach((f,M)=>{let x=k+M*_*1.15;t?(p.shadowColor=m(e,1),p.shadowBlur=_*.45*s,p.strokeStyle=m(e,1,.55*s),p.lineWidth=_*.12,p.strokeText(f,c/2,x),p.shadowBlur=_*.2*s,p.fillStyle=m(w,.55+.45*s),p.fillText(f,c/2,x)):(p.shadowBlur=0,p.fillStyle=m(e.map(I=>.12+I*.22),1),p.fillText(f,c/2,x))});let v=u.toDataURL("image/png");return co.size>40&&co.delete(co.keys().next().value),co.set(a,v),v}var Ce=.03,xi=o=>o&&o!=="none"?o:null;function Pn(o,e=t=>xi(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let r=e(i);if(i.type==="meter")t.grid??=r,t.gridExport??=xi(i.export);else if(i.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(i.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let s=xi(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(r||s)&&t.batteries.push({power:r,charge:s});let a=xi(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function Fs(o){if(gg(o))return o.energy.meter;for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function gg(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(t=>t.id===e.floor_id)}async function Eu(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,(n?.[r]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var zu=.07;function de(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function bg(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function fo(o,e){if(bg(o,e))return e;if(e.startsWith("binary_sensor."))return null;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=xc(o,t),i=Te(o,e),r=Lr(o,t).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(r.includes(s))return s;let a=r.find(l=>i!==null&&Te(o,l)===i);return a||n?a??null:r.find(l=>i===null||Te(o,l)===null||Te(o,l)===i)??null}function Tu(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),i=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=fo(o,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,de(o.states[l])??0)}))}return i}function Si(o,e,t){let n=(e.settings.roof.strings??[]).filter(i=>(t===void 0||i.inverter===t)&&i.entity&&i.entity!=="none").map(i=>de(o.states[i.entity])).filter(i=>i!==null);return n.length?n.reduce((i,r)=>i+Math.max(0,r),0):null}function Mi(o,e){return e===null?o:o===null||Math.max(0,o)<5&&e>50?e:o}function Au(o,e,t,n=Pn(e)){let i=e.energy,r=i.grid??n.grid,s=r?de(o.states[r],i.grid_invert):null;if(!i.grid&&n.gridExport){let _=Math.max(0,de(o.states[n.gridExport])??0);s=Math.max(0,s??0)-_}let a=i.solar?de(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let _=n.solar.map(m=>de(o.states[m])).filter(m=>m!==null);a=_.length?_.reduce((m,w)=>m+w,0):null}a=Mi(a,Si(o,e));let l=i.battery?de(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let _=n.batteries.map(m=>{if(m.charge){let w=m.power?Math.max(0,de(o.states[m.power])??0):0,k=Math.max(0,de(o.states[m.charge])??0);return w-k}return m.power?de(o.states[m.power],i.battery_invert):null}).filter(m=>m!==null);l=_.length?_.reduce((m,w)=>m+w,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(_=>Number(o.states[_]?.state)).filter(_=>Number.isFinite(_)),u=d.length?d.reduce((_,m)=>_+m,0)/d.length:NaN,p=i.tariff?o.states[i.tariff]:void 0,h=Number(p?.state),b=i.consumption?de(o.states[i.consumption]):null;return b!==null?b=Math.max(0,b):s!==null||a!==null||l!==null?b=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(b=t.reduce((_,m)=>_+m.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:b}}function qt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Tt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function _g(o,e){let t=o.length,n=o.map((i,r)=>{let s=o[(r+1)%t],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*e[r],i[1]+u*e[r]],d:[a/c,l/c],n:[d,u]}});return o.map((i,r)=>{let s=n[(r-1+t)%t],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function vg(o){return De(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Hs(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=kt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=vg(r),l=s.length,c=s.map((p,h)=>{let b=a?(l-2-h+l)%l:h,_=i.some(m=>!m.exterior&&m.sources.some(w=>w.room_id===r.id&&w.edge===b));return zu+(_?t/2:0)}),d=_g(s,c).map(p=>qt(n,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)Tt(n,p,h);n.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=po(n,r.roomLeft,s),l=po(n,r.roomRight,s);a!==null&&l!==null&&Tt(n,a,l)}return yg(n),n}var wg=1;function yg(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let s=0;s<o.pos.length;s++){if(t[s]>=0)continue;let a=[s];for(t[s]=n;a.length;)for(let{to:l}of o.adj[a.pop()])t[l]<0&&(a.push(l),t[l]=n);n++}if(n<2)return;let i=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,c]of e)if(t[c[0][0]]!==t[a])for(let[d,u]of c){let p=o.pos[a],h=o.pos[d],b=o.pos[u],_=b[0]-h[0],m=b[1]-h[1],w=Math.min(1,Math.max(0,((p[0]-h[0])*_+(p[1]-h[1])*m)/(_*_+m*m||1))),k=Math.hypot(p[0]-h[0]-_*w,p[1]-h[1]-m*w);(!i||k<i.d)&&(i={a,room:l,d:k})}if(!i||i.d>wg+2*zu)return;let r=po(o,i.room,o.pos[i.a]);if(r===null)return;Tt(o,i.a,r)}}function po(o,e,t){let n=o.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),h=[a[0]+c*p,a[1]+d*p],b=Math.hypot(t[0]-h[0],t[1]-h[1]);(!i||b<i.d)&&(i={seg:s,q:h,d:b})}if(!i)return null;let r=qt(o,i.q);return Tt(o,r,i.seg[0]),Tt(o,r,i.seg[1]),r}function ki(o,e,t){let n=o.pos[t],i=po(o,e.id,n);if(i===null)return!1;let r=o.pos[i],s=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-r[0])*c[0]+(n[1]-r[1])*c[1],u=(n[1]-r[1])*c[0]-(n[0]-r[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return Tt(o,t,i),!0;let p=[r[0]+c[0]*d,r[1]+c[1]*d],h=[r[0]-c[1]*u,r[1]+c[0]*u],b=qt(o,V(h,e.points)||!V(p,e.points)?h:p);return Tt(o,i,b),Tt(o,b,t),!0}function ho(o,e){let t=o.rooms.filter(r=>r.points.length>=3),n=t.find(r=>V(e,r.points));if(n)return n;let i=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Ru(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,n[s]=r)}return{dist:t,prev:n}}function ku(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var $u=new WeakMap;function xg(o,e){let t=Fs(o),n=o.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),h=ku(p,e);i.push({floorId:n.id,a:[t.x,Ce,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let b=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,Ce,t.z],dist:b,members:p,kind:h}),a.set(d.id,b+.25)}for(let d of c){let u=Hs(d,r,s),p=ho(d,[t.x,t.z]);if(!p)continue;let h=qt(u,[t.x,t.z]);if(!ki(u,p,h))continue;let b=[];for(let v of l.get(d.id)){let f=e[v],M=ho(d,[f.x,f.z]);if(!M)continue;let x=qt(u,[f.x,f.z]);ki(u,M,x)&&b.push({node:x,member:v})}let{dist:_,prev:m}=Ru(u,h),w=new Map;for(let v of b)if(Number.isFinite(_[v.node]))for(let f=v.node;m[f]>=0;f=m[f]){let M=m[f],x=`${M}>${f}`,I=w.get(x)??{a:M,b:f,members:[]};I.members.push(v.member),w.set(x,I)}let k=a.get(d.id)??0;for(let{a:v,b:f,members:M}of w.values()){let x=u.pos[v],I=u.pos[f],z=ku(M,e);i.push({floorId:d.id,a:[x[0],Ce,x[1]],b:[I[0],Ce,I[1]],dist:k+_[v],members:M,kind:z})}}return i}function Fu({building:o,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:r}){let s=Fs(o);if(!s)return[];let a=o.floors.find(T=>T.id===s.floor_id);if(!a)return[];let l=T=>r?.get(T),c=Rs(o,"inverter"),d=Rs(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=T=>{let $=null;for(let E of c)E.floorId===T.floorId&&(!$||Math.hypot(E.x-T.x,E.z-T.z)<Math.hypot($.x-T.x,$.z-T.z))&&($=E);return $},p=T=>l(T.id)??(d.length===1?t.battery??0:0),h=new Map;for(let T of d){let $=u(T);$&&h.set(T.id,$)}let b=e.map(T=>({floorId:T.floorId,x:T.x,z:T.z,kind:T.wallbox?"wallbox":"consumer",power:T.power}));for(let T of d)!h.has(T.id)&&t.battery!==null&&b.push({floorId:T.floorId,x:T.x,z:T.z,kind:"battery",power:Math.abs(p(T))});let _=`${s.floor_id}:${s.x},${s.z}|${b.map(T=>`${T.floorId}:${T.x},${T.z}:${T.kind}`).join(";")}`,m=$u.get(o);m||$u.set(o,m=new Map);let w=m.get(_);w||(w=xg(o,b),m.clear(),m.set(_,w));let k=w.map(T=>({floorId:T.floorId,a:T.a,b:T.b,dist:T.dist,power:T.members.reduce(($,E)=>$+b[E].power,0),kind:T.kind})),v=t.grid!==null?$i(o):null,f=o.settings.roof.cables??[],M=T=>f.find($=>$.id===T),x=(T,$)=>T.map(E=>({...E,key:$}));if(v){let T=t.grid>=0,$=M("grid"),E=$?uo(o,$,[v.end[0],a.elevation+Math.max(Ce,v.height),v.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...v.height>.05?[[v.end[0],v.height,v.end[1]]]:[],[v.end[0],Ce,v.end[1]],[v.wall[0],Ce,v.wall[1]],[s.x,Ce,s.z]],C=$?In(o,T?E:[...E].reverse(),Math.abs(t.grid),T?"grid":"export",a):Cu(a.id,T?E:[...E].reverse(),Math.abs(t.grid),T?"grid":"export",0);k.push(...x(C,"grid"))}if(t.battery!==null&&t.battery>0)for(let T of k)T.kind==="battery"&&([T.a,T.b]=[T.b,T.a]);let I=o.settings.roof.solar??[],z=o.settings.roof.strings??[],R=new Map;if(i&&I.length){let T=[...St(o),...so(o)];for(let $ of I){let E=i.get($.id)??0,C=$.string?z.find(J=>J.id===$.string)?.inverter:null,D=C?d.find(J=>J.id===C)??null:null,H=C&&!D?c.find(J=>J.id===C)??null:null;if(D){let J=h.get(D.id);J&&R.set(J.id,(R.get(J.id)??0)+E);let Q=D.variant==="wall"?.5+D.h:.9,pe=M(`solar:${$.id}`),ye=pe?Iu(o,$):null,Fe=o.floors.find(pt=>pt.id===D.floorId);pe&&ye&&Fe?k.push(...x(In(o,uo(o,pe,ye,[D.x,Fe.elevation+Q,D.z]),E,"solar",Fe),`solar:${$.id}`)):k.push(...x(Pu(o,$,E,D,Q),`solar:${$.id}`));continue}if(!H&&c.length){let J=Kt(o,$,T),Q=J?dd(J,$):[$.u,$.v];H=c.reduce((pe,ye)=>!pe||Math.hypot(ye.x-Q[0],ye.z-Q[1])<Math.hypot(pe.x-Q[0],pe.z-Q[1])?ye:pe,null)}H&&R.set(H.id,(R.get(H.id)??0)+E);let G=H??{floorId:s.floor_id,x:s.x,z:s.z},Z=H?1.1+H.h:1.5,F=M(`solar:${$.id}`),U=F?Iu(o,$):null,O=o.floors.find(J=>J.id===G.floorId);F&&U&&O?k.push(...x(In(o,uo(o,F,U,[G.x,O.elevation+Z,G.z]),E,"solar",O),`solar:${$.id}`)):k.push(...x(Pu(o,$,E,G,Z),`solar:${$.id}`))}}else t.solar!==null&&!c.length&&k.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Ce,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let T of c){let $=1.1+T.h,E=d.filter(H=>h.get(H.id)===T),C=l(T.id);if(C===void 0){C=R.get(T.id)??(c.length===1?t.solar??0:0);for(let H of E)C+=p(H)}let D=o.floors.find(H=>H.id===T.floorId);if(t.solar!==null||t.battery!==null){let H=M(`inv:${T.id}`),G=kg(o,T.id)?$i(o):null,Z=G?{floorId:G.floorId,x:G.end[0],z:G.end[1],y:Math.max(Ce,G.height)}:{floorId:s.floor_id,x:s.x,z:s.z,y:1.5},F=G?o.floors.find(O=>O.id===G.floorId)??a:a,U=H&&D?In(o,uo(o,H,[T.x,D.elevation+$,T.z],[Z.x,F.elevation+Z.y,Z.z]),Math.max(0,C),"inverter",D):Mu(o,T,$,Z,Z.y,Math.max(0,C),"inverter",0);k.push(...x(U,`inv:${T.id}`))}for(let H of E){let G=p(H);if(t.battery===null&&l(H.id)===void 0)continue;let Z=H.variant==="wall"?.5+H.h:.9,F=M(`bat:${H.id}`),U=F&&D?In(o,uo(o,F,[T.x,D.elevation+$-.1,T.z],[H.x,D.elevation+Z,H.z]),Math.abs(G),"battery",D):Mu(o,T,$-.1,H,Z,Math.abs(G),"battery",0);k.push(...x(G<=0?U:U.map(O=>({...O,a:O.b,b:O.a})).reverse(),`bat:${H.id}`))}}return k}function $i(o){let e=Fs(o),t=e?o.floors.find(h=>h.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:r}=kt(t.rooms,{exterior:n,interior:i},t.walls??[]),s=Rs(o,"grid_point")[0],a=r.filter(h=>h.exterior);if(s){let h=null;for(let m of a){let w=m.b[0]-m.a[0],k=m.b[1]-m.a[1],v=s.x-e.x,f=s.z-e.z,M=v*k-f*w;if(Math.abs(M)<1e-9)continue;let x=((m.a[0]-e.x)*k-(m.a[1]-e.z)*w)/M,I=((m.a[0]-e.x)*f-(m.a[1]-e.z)*v)/M;if(x<=0||x>1||I<0||I>1||h&&x>=h.t)continue;let z=Math.hypot(w,k)||1;h={q:[e.x+v*x,e.z+f*x],out:[k/z,-w/z],t:x}}let b=h?[h.q[0]+h.out[0]*(n/2+.05),h.q[1]+h.out[1]*(n/2+.05)]:[e.x,e.z],_=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:t.id,wall:b,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let h of a){let b=h.b[0]-h.a[0],_=h.b[1]-h.a[1],m=b*b+_*_||1,w=Math.min(1,Math.max(0,((e.x-h.a[0])*b+(e.z-h.a[1])*_)/m)),k=[h.a[0]+b*w,h.a[1]+_*w],v=Math.hypot(e.x-k[0],e.z-k[1]),f=Math.sqrt(m);(!l||v<l.d)&&(l={q:k,out:[_/f,-b/f],d:v})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let h of o.floors)for(let b of h.outdoor??[]){let _=b.points.length;for(let m=0;m<_;m++){let w=b.points[m],k=b.points[(m+1)%_],v=k[0]-w[0],f=k[1]-w[1],M=d[0]*f-d[1]*v;if(Math.abs(M)<1e-9)continue;let x=((w[0]-c[0])*f-(w[1]-c[1])*v)/M,I=((w[0]-c[0])*d[1]-(w[1]-c[1])*d[0])/M;x>0&&I>=0&&I<=1&&(u=Math.max(u,Math.min(15,x)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function kg(o,e){return o.floors.some(t=>t.furniture.some(n=>n.id===e&&n.type==="inverter"&&n.cable_to==="grid"))}function Rs(o,e){let t=[];for(let n of o.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Su=new WeakMap;function Hu(o,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,r=Su.get(o);r||Su.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=Hs(e,a,l),d=[t,n],u=ho(e,t),p=ho(e,n);if(u&&p){let h=qt(c,t),b=qt(c,n);if(ki(c,u,h)&&ki(c,p,b)){let{dist:_,prev:m}=Ru(c,h);if(Number.isFinite(_[b])){d.length=0;for(let w=b;w>=0;w=m[w])d.unshift(c.pos[w])}}}return r.set(i,d),d}function Mu(o,e,t,n,i,r,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=Hu(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],Ce,u[1]]),[n.x,i,n.z]];return Cu(l.id,d,r,s,a)}function Cu(o,e,t,n,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:t,kind:n}),i+=c)}return r}function uo(o,e,t,n){let r=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Ce,e.height);return[t,...e.points.map(s=>[s[0],r,s[1]]),n]}function Iu(o,e){let t=Kt(o,e,[...St(o),...so(o)]);if(!t)return null;let[n,i]=Ut(t,e),r=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*s,t.o[1]+t.eu[1]*r+t.es[1]*s,t.o[2]+t.eu[2]*r+t.es[2]*s]}function $g(o,e,t){let{wall_exterior:n,wall_interior:i}=o.settings,r=Hs(e,n,i),s=ho(e,t),a=s?po(r,s.id,t):null;return a===null?t:r.pos[a]}function In(o,e,t,n,i){let r=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let u of r)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let b=Math.min(d[1],u[1]),_=Math.max(d[1],u[1]);for(let m of r)m.elevation>b+.01&&m.elevation<_-.01&&h.push(m.elevation);u[1]<d[1]&&h.reverse()}for(let b of[...h,u[1]]){let _=(b-d[1])/(u[1]-d[1]||1),m=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*_,b,d[2]+(u[2]-d[2])*_]:u,w=s((d[1]+m[1])/2),k=Math.hypot(m[0]-d[0],m[1]-d[1],m[2]-d[2]);k>1e-4&&a.push({floorId:w.id,a:[d[0],d[1]-w.elevation,d[2]],b:[m[0],m[1]-w.elevation,m[2]],dist:l,power:t,kind:n}),l+=k,d=m}}return a}function Pu(o,e,t,n,i){let r=[...St(o),...so(o)],s=Kt(o,e,r),a=o.floors.find(m=>m.id===n.floorId);if(!s||!a)return[];let[l,c]=Ut(s,e),d=(m,w)=>[s.o[0]+s.eu[0]*m+s.es[0]*w,s.o[1]+s.eu[1]*m+s.es[1]*w,s.o[2]+s.eu[2]*m+s.es[2]*w],u=e.u+l/2,p=a.elevation+Ce,h=[],b;if(s.unbounded){let m=d(u,e.v+c/2);b=[m[0],p,m[2]],h.push(b)}else if(s.wall){let m=d(u,e.v);b=[m[0],p,m[2]],h.push(m,b)}else{let m=d(u,e.v),w=ts(o)??a,k=Math.max(a.elevation+.5,Math.min(m[1]-.25,w.elevation+w.height-.12));b=[m[0],k,m[2]],h.push(m)}let _=$g(o,a,[b[0],b[2]]);h.push([_[0],b[1],_[1]]),Math.abs(b[1]-p)>.05&&h.push([_[0],p,_[1]]);for(let m of Hu(o,a,_,[n.x,n.z]).slice(1))h.push([m[0],p,m[1]]);return h.push([n.x,a.elevation+i,n.z]),In(o,h,t,"solar",a)}function Du(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(n).fill(0),r=-1;for(let a of Object.values(o))for(let l of a){let c=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((c-t.getTime())/3e5);d<0||d>=n||typeof l.mean!="number"||(i[d]+=Math.max(0,l.mean),r=Math.max(r,d))}return i.length=Math.max(r+1,n-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Lu(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Cs(o,e){let n=l=>42-(e>0?l/e*36:0),i=o.map((l,c)=>[c/288*220,n(l)]),r=i.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Ou(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Sg=400;function Nu(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let i=Math.min(1,(e.get(n.id)??0)/(Ou(n)*(n.wp??Sg)));t.set(n.id,i>.003?Math.pow(i,.6):0)}return t}function Wu(o,e,t){let n=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=Ou,a=[],l=0,c=new Map;for(let p of i){let h=p.entity&&p.entity!=="none"?de(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let b=p.string?r.find(m=>m.id===p.string):void 0,_=b?.entity&&b.entity!=="none"?de(o.states[b.entity]):null;if(b&&_!==null){c.set(b.id,[...c.get(b.id)??[],p]);continue}a.push(p)}for(let[p,h]of c){let b=r.find(w=>w.id===p),_=Math.max(0,de(o.states[b.entity])??0),m=h.reduce((w,k)=>w+s(k),0);for(let w of h)n.set(w.id,_*s(w)/m);l+=_}let d=Math.max(0,(t??0)-l),u=a.reduce((p,h)=>p+s(h),0);for(let p of a)n.set(p.id,u?d*s(p)/u:0);return n}var Ke={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Bu(o,e){if(o==="grid")return Ke.import;if(o==="export")return Ke.export;if(o==="solar")return Ke.solar;if(o==="battery")return Ke.battery;if(o==="wallbox")return Ke.wallbox;if(o==="inverter")return(e.solar??0)>5?Ke.solar:Ke.battery;let t=[[Math.max(0,e.grid??0),Ke.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Ke.solar],[Math.max(0,e.battery??0),Ke.battery]],[n]=t.reduce((i,r)=>r[0]>i[0]?r:i);return n>0?t.find(i=>i[0]===n)[1]:Ke.house}var mo={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Ds={natural:!0,signal:!0,shadows:!0,floors:1,cutDark:!0,sun:.45,ao:.45},Pi=[{id:"neon",base:"neon",group:"neon",aliases:["neon","standard"]},{id:"blueprint",base:"blueprint",group:"neon",aliases:["blueprint","bauplan","blaupause"]},{id:"day",base:"day",group:"neon",aliases:["tag","day","hell","light"]},{id:"focus",base:"neon",group:"neon",palette:{line:"#394150",dark:"#07090d",light:"#2c313a",hue:0,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#030407","#0b0e14"],aliases:["fokus","focus","nacht","night","dunkel","dark"]},{id:"synth",base:"neon",group:"neon",palette:{line:"#ff3fd2",dark:"#12051f",light:"#3a1460",hue:.2,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#08010f","#2a0838"],aliases:["synthwave","synth","retro","party"]},{id:"cozy",base:"day",group:"homely",...Ds,palette:null,bg:["#f1efeb","#d9d5ce"],aliases:["wohnlich","gem\xFCtlich","cozy","homely","echt","real"]},{id:"evening",base:"neon",group:"homely",...Ds,sun:.4,dim:.75,bg:["#14161c","#272630"],aliases:["wohnlich abend","abend","abendstimmung","evening","cozy evening"]},{id:"winter",base:"neon",group:"homely",...Ds,sun:.4,dim:.8,bg:["#0b1322","#1d2a40"],aliases:["winterabend","winter","advent","weihnachten","christmas"]},{id:"model",base:"day",group:"designed",palette:{line:"#8a8f98",dark:"#cfcac2",light:"#fbfaf7",hue:.08,lift:.35,contrast:3.2},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#eeece8","#d6d2cb"],aliases:["architekturmodell","modell","model","architect","wei\xDF","white"]},{id:"pastel",base:"day",group:"designed",palette:{line:"#3b3f5c",dark:"#b7c4e6",light:"#fff4ea",hue:.55,lift:.3,contrast:3},signal:!0,sun:.25,ao:.2,shadows:!0,bg:["#f4efe8","#e3e7f2"],aliases:["pastell","pastel","bunt","kids"]},{id:"warm",base:"day",group:"designed",palette:{line:"#5a4632",dark:"#b0906c",light:"#f4ead9",hue:.15,lift:.3,contrast:3},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#f0e7d7","#d9cbb3"],aliases:["warm","holz","papier","holz und papier","wood","paper"]}],vv=Pi.map(o=>o.id),Mg=new Map(Pi.map(o=>[o.id,o])),Ei=[];function En(o){Ei=(o??[]).filter(e=>e&&typeof e.id=="string"&&e.id.startsWith("my_")&&typeof e.name=="string").map(e=>({...e,group:"custom",aliases:[e.name]}))}function Zt(){return Ei.length?[...Pi,...Ei]:Pi}function At(o){return o?Mg.get(o)??Ei.find(e=>e.id===o):void 0}function Ls(o){let e=/^(\d{1,2}):(\d{2})$/.exec(o?.trim()??"");if(!e)return null;let t=Number(e[1]),n=Number(e[2]);return t<24&&n<60?t*60+n:null}function Ig(o,e,t){let n=e.getHours()*60+e.getMinutes(),i=Ls(o?.style_morning_at)??420,r=Ls(o?.style_evening_at)??1080,s=Ls(o?.style_night_at)??1380,a=s>i?n>=s||n<i:n>=s&&n<i;return(o?.style_switch??"sun")==="sun"&&t!==null?t?"day":e.getHours()<12||a?"night":"evening":a?"night":n>=r?"evening":"day"}function Ii(o){return o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"")}function zi(o,e={}){if(!o)return null;let t=Ii(o);if(!t)return null;for(let n of Zt())if(Ii(n.id)===t||n.aliases.some(i=>Ii(i)===t)||(e[n.id]??[]).some(i=>Ii(i)===t))return n.id;return null}function Vu(o){let e=c=>At(c)?c:null,t=e(o.override);if(t)return t;let n=zi(o.entityState,o.names);if(n)return n;let i=o.choice||"neon";if(i==="auto")return o.sunUp===!1?"neon":o.sunUp===!0?"day":"neon";let r=(c,d,u,p)=>{let h=Ig(p,o.now,o.sunUp);return h==="night"?u??d??c??"neon":h==="evening"?d??c??"neon":c??"neon"};if(i==="house"){let c=o.plan;return r(e(c?.style_day),e(c?.style_evening),e(c?.style_night),c)}let s=e(i)??"neon",a=e(o.evening),l=e(o.night);return a||l?r(s,a,l,o.plan):s}var Ti={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Ku(o,e){let t=Ti[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[i,r]=t[n],[s,a]=t[n-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function Uu(o,e,t){let n=new Map;for(let i of e.floors)for(let r of i.rooms){let s=Ne(o,i,r,t);s!==null&&n.set(r.id,s)}return n}function Gu(o){let e=Ti[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(n-t)*100)}%`).join(", ")})`}function ke(o,e){if(!_t(e))return P(o,`furn_${e}`);let t=ve(e);return t?Ll(t,o?.language??navigator.language):P(o,"pack_missing_item")}var Os=.06;function qu(o,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=Math.hypot(n,i)||1e-9,s=((o[0]-e[0])*n+(o[1]-e[1])*i)/r;return{off:Math.abs((o[0]-e[0])*i-(o[1]-e[1])*n)/r,at:s,len:r}}function ju(o,e){for(let t=0;t<e.length;t++){let n=qu(o,e[t],e[(t+1)%e.length]);if(n.off<Os&&n.at>-Os&&n.at<n.len+Os)return t}return-1}function Pg(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length];if(!n||!i)return null;let r=Math.hypot(i[0]-n[0],i[1]-n[1])||1e-9;return[n[0]+(i[0]-n[0])*t/r,n[1]+(i[1]-n[1])*t/r]}function Ai(o,e){if(!o||!e?.length)return[];let t=new Set(o.floors.flatMap(n=>[...n.rooms.map(i=>i.id),...(n.outdoor??[]).map(i=>i.id)]));return e.filter(n=>t.has(n))}function Ri(o,e){o.settings.surroundings&&(o={...o,settings:{...o.settings,surroundings:null}});let t=new Set(e),n=o.settings.wall_interior??.12,i=[];for(let h of o.floors){let b=h.rooms.filter(I=>t.has(I.id)),_=(h.outdoor??[]).filter(I=>t.has(I.id));if(!b.length&&!_.length)continue;let m=[...b.map(I=>I.points),..._.map(I=>I.points)].filter(I=>I.length>=3),w=(I,z)=>m.some(R=>V([I,z],R)),k=h.rooms.filter(I=>!t.has(I.id)&&I.points.length>=3),v=b.map(I=>{let z=I.points.length,R=Array.from({length:z},($,E)=>I.wall_thickness?.[E]??null),T=!1;for(let $=0;$<z;$++){if(R[$]!==null)continue;let E=I.points[$],C=I.points[($+1)%z],D=[(E[0]+C[0])/2,(E[1]+C[1])/2];k.some(H=>ju(D,H.points)>=0)&&(R[$]=n,T=!0)}return T?{...I,wall_thickness:R}:I}),f=(h.walls??[]).filter(I=>w((I.a[0]+I.b[0])/2,(I.a[1]+I.b[1])/2)),M=new Set(f.map(I=>I.id)),x=[];for(let I of h.openings){if(I.wall){M.has(I.wall)&&x.push(I);continue}if(t.has(I.room_id)){x.push(I);continue}let z=h.rooms.find(T=>T.id===I.room_id),R=z?Pg(z,I.edge,I.offset):null;if(R)for(let T of b){let $=ju(R,T.points);if($<0)continue;let E=qu(R,T.points[$],T.points[($+1)%T.points.length]);x.push({...I,room_id:T.id,edge:$,offset:E.at,hinge:I.hinge==="left"?"right":"left",swing:I.swing==="in"?"out":"in"});break}}i.push({...h,rooms:v,outdoor:_,walls:f,openings:x,furniture:h.furniture.filter(I=>w(I.x,I.z)),placements:h.placements.filter(I=>w(I.x,I.z))})}let r=Eg(o),s=o.settings.roof;if(s?.type==="custom"&&s.sections?.length){let h=new Set(i.map(w=>w.id)),b=s.sections,_=new Set(b.filter(w=>h.has(nd(o,w)?.id??""))),m=b.filter(w=>_.has(w.dormer&&es(b,w)||w));return m.length===b.length?{...o,floors:i}:{...o,floors:i,settings:{...o.settings,roof:m.length?{...s,sections:m}:{...s,type:"none"}}}}if(!(!s||s.type==="none"||r===null||i.some(h=>h.id===r)))return{...o,floors:i,settings:{...o.settings,roof:{...s,type:"none"}}};let c=s&&(s.type==="flat"||s.type==="gable")&&r!==null?(o.floors.find(h=>h.id===r)?.rooms??[]).filter(h=>h.points.length>=3):[];if(!c.length)return{...o,floors:i};let d=c.flatMap(h=>h.points.map(b=>b[0])),u=c.flatMap(h=>h.points.map(b=>b[1])),p=[Math.min(...d),Math.min(...u),Math.max(...d),Math.max(...u)];return{...o,floors:i,settings:{...o.settings,roof:{...s,frame:p}}}}function Eg(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]?.id??null}function zg(o,e){let t=o?.states[e.entity]?.state;if(t===void 0)return!1;let n=(e.state??"").trim(),i=n.startsWith("!");i&&(n=n.slice(1).trim());let r=n?n.split(",").map(l=>l.trim()).filter(Boolean):["on"],s=Number(t),a=r.some(l=>{let c=/^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);if(c){if(!Number.isFinite(s)||t.trim()==="")return!1;let d=Number(c[2].replace(",","."));return c[1]==="<"?s<d:c[1]==="<="?s<=d:c[1]===">"?s>d:s>=d}return t.toLowerCase()===l.toLowerCase()});return i?!a:a}function Ns(o,e){return!e.show_if?.entity||zg(o,e.show_if)}function Ws(o,e){if(!e)return"";let t="";for(let n of e.floors)for(let i of n.furniture)i.show_if?.entity&&(t+=`${i.id}:${Ns(o,i)?1:0};`);return t}var Yt=o=>o?.settings?.winter??{},Tg=o=>Tl(o)>0;function Yu(o,e,t=new Date){let n=Yt(e);if(!B("fun_winter")||n.roof_lights===!1)return!1;if(n.roof_entity)return o.states[n.roof_entity]?.state==="on";let i=o.states["sun.sun"],r=i?i.state==="below_horizon":t.getHours()>=16||t.getHours()<7;return Tg(t)&&r}var Ag=new Set(["snowy","snowy-rainy"]),Zu="neonplan3d.winter_last_snow";function Rg(o,e){let t=e?o.states[e]:void 0,n=t?.attributes.temperature;return typeof n!="number"?null:String(t.attributes.temperature_unit??"\xB0C").includes("F")?(n-32)*5/9:n}function Xu(o,e,t,n=Date.now(),i=Fg()){if(!B("fun_winter")||Yt(e).snow===!1||!t)return 0;let r=o.states[t]?.state??"";if(Ag.has(r)){try{i?.setItem(Zu,String(n))}catch{}return 1}let s=Number(i?.getItem(Zu)??0);if(!s||n-s>72*36e5)return 0;let a=Rg(o,t);return a===null||a<=1?1:Math.max(0,1-(n-s)/(6*36e5))}function Fg(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Qu(o,e){if(e<=0)return[];let t=[];for(let n of o.floors)for(let i of n.outdoor??[])i.type==="lawn"&&i.points.length>=3&&t.push({floorId:n.id,points:i.points,y:Wo(n,i)+Mr[i.type]+.025,color:[.93,.96,1],opacity:.78*e,...i.slope?{follow:{areaId:i.id,lift:.025}}:{}});return t}function Ju(o,e=new Date){if(!B("fun_winter")||Yt(o).firework===!1)return!1;if(typeof location<"u"&&new URLSearchParams(location.search).has("fp3d_firework"))return!0;let t=e.getMonth(),n=e.getDate(),i=e.getHours()*60+e.getMinutes();return t===11&&n===31&&i>=1439||t===0&&n===1&&i<10}var Hi=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Fi(o){return o&&o!=="none"?o:null}function zn(o,e){if(e.type!=="parking")return null;let t=Fi(e.entity);if(t){let r=o.states[t];if(!r||!Hi.has(r.state.toLowerCase()))return null}let n=e.vehicle??null,i=Fi(e.type_entity);if(i&&e.types?.length){let r=(o.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&ve(n)?n:null}function Bs(o,e){let t=new Map;for(let n of e.floors)for(let i of n.furniture){let r=zn(o,i);r&&t.set(i.id,r)}return t}function ep(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Fi(t.entity),Fi(t.type_entity)])).filter(e=>!!e)}function tp(o,e){let t=ve(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var go=1800*1e3,Hg=new Set(["motion","occupancy","presence"]);function np(o,e){return e.startsWith("binary_sensor.")&&Hg.has(String(o.states[e]?.attributes.device_class))}function bo(o,e){let t=[],n=new Set,i=(r,s,a,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(np(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(N(s.entity_id)==="camera")for(let a of Ve(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=ze(s.points);for(let c of we(o,s.area_id))np(o,c)&&i(c,r.id,a,l)}return t}function op(o,e,t,n=go){let i=t-n,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=i&&d<=t&&r.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function ip(o,e,t,n=go){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return r.slice(-40)}function Ci(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...Cn(o)})}var rp='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Di=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Li(o,e){let t=[],n=Wt(o,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(d,u)=>r.rooms.find(p=>p.points.length>=3&&V([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let d of r.rooms){if(d.points.length<3)continue;let[u,p]=ze(d.points);t.push({kind:"room",name:d.name,where:i?r.name:"",floorId:r.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,h)=>{l.has(d)||!o.states[d]||(l.add(d),t.push({kind:"device",name:K(o,d),where:a(u,p),floorId:r.id,roomId:s(u,p)?.id??null,entity:d,icon:N(d),x:u,z:p,y:h}))};for(let d of r.placements)c(d.entity_id,d.x,d.z,d.y??pn(N(d.entity_id)??"sensor",r.height,d.mount));for(let d of r.furniture){let u=n.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(r.height-.3,Math.max(.5,d.h)))}}return t}function sp(o,e,t=8){let n=Di(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=o.filter(a=>{let l=Di(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),r=Di(e.trim()),s=a=>(Di(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Ye=new Map,Vs=new Map,ap=new Map;async function Cg(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function Dg(o,e){let t=await Cg(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let r=(await import(n)).default;if(!r||r.api!==1||typeof r.id!="string")return null;let s=ap.get(e.id);s&&URL.revokeObjectURL(s),ap.set(e.id,n);let a={id:e.id,release:t.release,module:r};return Ye.set(e.id,a),a}catch(i){throw URL.revokeObjectURL(n),i}}async function Ks(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...Ye.keys()])t.has(n)||Ye.delete(n);await Promise.all([...t.values()].map(n=>{let i=Ye.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let r=Vs.get(n.id);return r||(r=Dg(o,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>Vs.delete(n.id)),Vs.set(n.id,r)),r}))}async function lp(o,e){for(let t of Ye.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function cp(o){return Qt(e=>e.scene?.(o))}function dp(o){return[...Ye.values()].flatMap(e=>e.module.popups?.(o)??[])}function up(o){return Qt(e=>e.cards?.(o))}function pp(o){return Qt(e=>e.alerts?.(o))}function hp(o){return Qt(e=>e.watched?.(o))}function Us(o,e){return Qt(t=>t.roomSheets?.(o,e))}function Gs(o){return Qt(e=>e.menuSheets?.(o))}function js(){return[...Ye.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function fp(o,e){let t=Ye.get(o);if(!t?.module.settings)return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`NeonPlan 3D: module ${t.id} failed`,n),[]}}function mp(o){return Qt(e=>e.pools?.(o))}function Xt(){return Ye.size>0}function Qt(o){let e=[];for(let t of Ye.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function bp(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let i=Math.min(...n),s=Math.max(...n)-i||1,a=l=>Math.round(l*10)/10;return n.map((l,c)=>`${a(c/(n.length-1)*e)},${a(t-1-(l-i)/s*(t-2))}`).join(" ")}function gp(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),i=t-n,[r,s]=[o[n],o[n+1]];return[r[0]+(s[0]-r[0])*i,r[1]+(s[1]-r[1])*i,r[2]+(s[2]-r[2])*i]}function _p(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let i=[],r=0;for(let l=1;l<n.length;l++){let c=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);i.push(c),r+=c}if(r<.01)continue;let s=t.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let c=i[l-1];if(c<.005)continue;let d=s?gp([t.colors[l-1],t.colors[l]],.5):gp(t.colors,(a+c/2)/r);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,t.flow),color:d,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),a+=c}}return e}function vp(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function wp(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Oi(o,e){return(o??[]).filter(t=>!e||!t.minor)}var yp="https://www.openstreetmap.org/copyright";var Lg=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Og=[2200,2700,3200,4e3,5e3,6500],Ng=["hs","rgb","rgbw","rgbww","xy"],Wg=4,Bg=16,Vg=32,Kg=128;function Zs(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Ng.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Ys(o){return((o.attributes.supported_features??0)&Wg)!==0&&typeof o.attributes.current_position=="number"}var qs=class extends ae{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},slatInvert:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{N(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?g`<img src=${n} alt=${K(this.hass,this.entity)} />`:g`<span class="qm-note">${_e(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return P(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:K(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}cover(e,t){let n=Cr(e,t);this.call("cover",n.service,n.data)}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Me(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let r=i/t*Math.PI*2-Math.PI/2;return g`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=Zs(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?Lg.map(s=>g`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Og.map(s=>g`<button class="qm-swatch" style="background:${Ug(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return g`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?g`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=Ys(e),r=(d,u,p,h=!1)=>g`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${u} @click=${p}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.cover(e,"open"),s(100)),...i?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.cover(e,"close"),s(0)),...i?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.cover(e,"stop"),n)],l=hn(e,this.slatInvert),c=t!==null?100-t:l!==null?100-l:e.state==="closed"?100:0;return g`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c<100?"qm-on":""}"
          style="--closed:${c}%"
          aria-label=${n?this.t("cover_stop"):c>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.cover(e,"stop"):this.ask()&&this.cover(e,c>50?"open":"close")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:_e(this.hass,e)}</b>
        </button>
      </div>
      ${i?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=hn(e,this.slatInvert),i=r=>this.slatInvert?100-r:r;return t&Kg&&n!==null?g`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:i(Number(r.target.value))})}
      /></label>`:Go(e)?g`<div class="qm-tilt-buttons">
        ${t&Bg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${t&Vg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let t=e.entities,n=(u,p,h,b={})=>{this.hass.callService(u,p,{entity_id:h,...b})},i=t.lock,r=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),c=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return g`<p class="qm-car-line">${d||_e(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?g`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?n("lock","unlock",i):n("homeassistant","turn_off",i)):r?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?g`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${c?g`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!r&&!a&&!c?g`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return g`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":n?"media_pause":"media_play")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?g`<p class="qm-media-title">${s}</p>`:y}
      ${r!==null?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){if(!B("sound"))return y;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return y;let i=e.attributes.source;return g`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(r=>g`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>g`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=K(this.hass,this.entity),i=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return g`<p class="qm-car-line">${_e(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${i}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return g`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${_e(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let t=N(this.entity),n=this.car?this.renderCar(this.car):Y(e)?g`<p class="qm-note">${_e(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&B("sound")?this.renderMedia(e):this.renderToggle(e);return g`<div class="qm" role="dialog" aria-label=${K(this.hass,this.entity)}>
      <div class="qm-title">${K(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Pe,ce`
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
    `]};function Ug(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",qs);var Gg=new URL(import.meta.url),jg=new URL("./neonplan3d-3d.js?v=0ee81af8d5d2",Gg).href,xp;function _o(){return xp??=import(jg),xp}var Xs;function Qs(){let o=new URL("./neonplan3d-fun.js?v=8d4c44bbc5ea",new URL(import.meta.url)).href;return Xs??=import(o).catch(e=>{throw Xs=void 0,e}),Xs}function kp(o,e){let t=o.points,n=t[e],i=t[(e+1)%t.length],r=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/r,(i[1]-n[1])/r],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];V([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:r,rightward:s[0]*c[0]+s[1]*c[1]>0}}function Ni(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function Js(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var qg=.45;function $p(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let i=e.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:r,d:s}=Ni(o,Jo(i,n.edge,n.offset));Math.abs(s)>.4||r<-.05||r>o.length+.05||t.push(Zg(n,r))}return t}function Zg(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Sp(o,e,t,n=qg){let i=[];for(let r of e.furniture){if(r.type==="stairwell"||r.type==="parking")continue;let s=V([r.x,r.z],t.points),a=Nt(r).map(h=>Ni(o,h)),l=Math.min(...a.map(h=>h.d)),c=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),u=Ni(o,[r.x,r.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>o.length-.02)continue;let p=me(e,r);i.push({kind:"furniture",id:r.id,s0:c,s1:d,y0:p,y1:p+r.h,d:l})}return i}var Mp=.3;function vo(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,i=o.height??Mp,r=[];if(o.heights)t&&r.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>r.push([s,o.heights?.[l]??i,a])),n&&r.push([n.x,n.y,n.z]);else{if(!t||!n)return[];r.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of o.points)r.push([s,i,a]);r.push([n.x,i,n.z],[n.x,n.y,n.z])}return r.filter((s,a)=>a===0||ea(s,r[a-1])>.001)}function ea(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Wi(o){let e=0;for(let t=1;t<o.length;t++)e+=ea(o[t-1],o[t]);return e}function Bi(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[i,r]=[o[n-1],o[n]],s=ea(i,r);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:n-1}}t-=s}}return null}function Jt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Yg(o,e){let{w:t,d:n,h:i}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(t,n)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let r=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(r==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function Ip(o,e){let t=Yg(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[i,r]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*i-t[2]*r,y:t[1],z:o.z+t[0]*r+t[2]*i}}function wo(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function Ep(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var ta=[.25,.7,1],Xg=900;function zp(o,e,t,n=i=>i){let i=[];for(let r of o){let s=n(vo(r,t),r);if(s.length<2)continue;let a=e.get(r.id),l=a?.color??ta,c=0;for(let d=1;d<s.length;d++){let[u,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(i.push({floorId:r.floor_id,a:u,b:p,dist:c,power:a?.active?Xg:0,color:l}),c+=h)}}return i}function Vi(o,e,t){let n=t.pool??{},i=cn(e,t);return r=>{let{kind:s,id:a,port:l}=Jt(r);if(s==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?Un(e,t)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===a);return c?wo(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(b=>b.id===a);if(!d||!Xl.includes(d.type))continue;let u=l?Ip(d,l):null,p=c.elevation-e.elevation;if(u)return{...u,y:u.y+me(c,d)+p};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Ql:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+me(c,d)+p}}return null}}function na(o,e,t,n){let i=d=>{let{kind:u,id:p}=Jt(d);return u==="port"?t.pool?.ports?.find(h=>h.id===p)?.kind:void 0},r=d=>i(d)==="drain",s=d=>i(d)==="inlet"||i(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],p=oa(t,[u[0],u[2]]);if(!p)return d;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],b=1;for(;b<d.length&&Math.hypot(d[b][0]-u[0],d[b][2]-u[2])<.01;)b++;let _=d.slice(b).map(w=>[...w]);for(let w=0;w<_.length-1;w++){let k=(_[w][0]-u[0])*p[0]+(_[w][2]-u[2])*p[1];if(k>=.349999)break;_[w][0]+=p[0]*(.35-k),_[w][2]+=p[1]*(.35-k)}let m=_[0]??d[d.length-1];return[u,h,[h[0],m[1],h[2]],..._]},l=d=>{if(d.length<2)return d;let u=d[0];if(!V([u[0],u[2]],t.points))return d;let p=Un(n,t)-.15,h=d.findIndex((w,k)=>k>0&&Math.hypot(w[0]-u[0],w[2]-u[2])>.01);if(h<0)return d;let b=d[h],_=[b[0],b[2]];for(let w=0;w<t.points.length;w++){let k=t.points[w],v=t.points[(w+1)%t.points.length],f=Qg([u[0],u[2]],[b[0],b[2]],k,v);f&&(_=f)}let m=Math.hypot(_[0]-u[0],_[1]-u[2])>1e-6?[_[0]+(_[0]-u[0])*.02,_[1]+(_[1]-u[2])*.02]:_;return[u,[u[0],p,u[2]],[m[0],p,m[1]],[m[0],b[1],m[1]],...d.slice(h)]},c=o;return e.from&&r(e.from)&&(c=l(c)),e.to&&r(e.to)&&(c=l([...c].reverse()).reverse()),e.from&&s(e.from)&&(c=a(c)),e.to&&s(e.to)&&(c=a([...c].reverse()).reverse()),c}function oa(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*c)/(d*d))),p=Math.hypot(s[0]+l*u-e[0],s[1]+c*u-e[1]),h=n>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!i||p<i.d)&&(i={d:p,n:h})}return i?i.n:null}function Qg(o,e,t,n){let i=[e[0]-o[0],e[1]-o[1]],r=[n[0]-t[0],n[1]-t[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s,l=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+i[0]*a,o[1]+i[1]*a]:null}var Se=o=>Math.round(o*1e3)/1e3;var Tp=-.3;function Ap(o,e,t,n,i){let r=[],s=[],a=m=>e(m),l=[],c=o.from,d=[];for(let m of o.vias){if(m.kind!=="hole"){d.push(m.kind);continue}let w=t.find(x=>x.id===m.joint),k=a(c);if(!w||!k)continue;let v=a(`joint:${w.id}:inside`),f=a(`joint:${w.id}:outside`),M=m.dir?m.dir==="out":Math.hypot(k.x-v.x,k.z-v.z)<=Math.hypot(k.x-f.x,k.z-f.z);l.push({a:c,b:`joint:${w.id}:${M?"inside":"outside"}`,fits:d}),d=[],c=`joint:${w.id}:${M?"outside":"inside"}`}let u=o.to;if(u.length>1){let m=a(c),w=u.map(a).filter(k=>!!k);if(m&&w.length===u.length){let k=w.reduce((z,R)=>z+R.x,0)/w.length,v=w.reduce((z,R)=>z+R.z,0)/w.length,f=Math.hypot(m.x-k,m.z-v)||1,M=Math.min(1,f/2)/f,x=m.y<0||w.some(z=>z.y<0),I={id:i("joint"),kind:"tee",x:Se(k+(m.x-k)*M),z:Se(v+(m.z-v)*M),y:x?Tp:Se(m.y)};s.push(I),l.push({a:c,b:`joint:${I.id}:in`,fits:d}),d=[],u.forEach((z,R)=>l.push({a:`joint:${I.id}:out${R+1}`,b:z,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=m=>{let{kind:w,id:k,port:v}=Jt(m),f=w==="joint"?s.find(M=>M.id===k):void 0;return f?wo(f,v):a(m)},h=m=>n(m)==="source",b=m=>n(m)==="sink",_=o.to.some(h)&&!h(o.from)||b(o.from)&&!o.to.some(b);for(let m of l){let w=p(m.a),k=p(m.b);if(!w||!k)continue;let v=Jg(w,k,Pp(m.a,t),Pp(m.b,t)),f={id:i("pipe"),from:m.a,to:m.b,floor_id:o.floorId,points:v.map(x=>[x[0],x[2]]),heights:v.map(x=>x[1])},M=Wi(vo(f,p));f.fittings=m.fits.map((x,I)=>({id:i("fit"),kind:x,at:Se(Math.min(M/2,.4+I*.25)),...x==="valve"?{open:!0}:{}})),_&&(f={...f,from:f.to,to:f.from,points:[...f.points].reverse(),heights:[...f.heights??[]].reverse(),fittings:f.fittings?.map(x=>({...x,at:Se(Math.max(0,M-x.at))}))}),r.push(f)}return{pipes:r,joints:s}}function Pp(o,e){let{kind:t,id:n,port:i}=Jt(o),r=t==="joint"&&i==="outside"?e.find(s=>s.id===n):void 0;return r?.kind==="wall"?[-(r.nx??0),-(r.nz??0)]:null}function Jg(o,e,t=null,n=null){let i=o.y<0||e.y<0?Tp:Se(Math.max(o.y,e.y)),r=[],[s,a]=[o.x,o.z];t&&([s,a]=[Se(s+t[0]*.5),Se(a+t[1]*.5)],r.push([s,Se(o.y),a]));let[l,c]=[e.x,e.z],d=[];return n&&([l,c]=[Se(l+n[0]*.5),Se(c+n[1]*.5)],d.push([l,Se(e.y),c])),r.push([Se(s),i,Se(a)]),Math.abs(l-s)>.01&&r.push([Se(l),i,Se(a)]),Math.abs(c-a)>.01&&r.push([Se(l),i,Se(c)]),r.push(...d),r.filter((u,p)=>p===0||Math.hypot(u[0]-r[p-1][0],u[1]-r[p-1][1],u[2]-r[p-1][2])>.001)}var eb=2e3;function Rp(o){return Math.max(0,eb-o)}var Fp=120;var Hp="neonplan3d.gpu_lost",Ki="4.0.1";function Cp(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ia(o,e=Cp()){try{return!!e&&e.getItem(Hp)===o}catch{return!1}}function Dp(o,e,t,n,i=Cp()){if(n||t-e>2e4||t<e||!i)return!1;try{return i.setItem(Hp,o),!0}catch{return!1}}function Lp(o,e,t,n=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let c=Math.ceil(o/l),d=(r-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,p=Math.min(d,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<i){let l=Math.max(1,Math.floor((r+n)/(i+n)));return{cols:Math.min(l,Math.max(1,o)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function ra(o,e,t){let n=[...t.openings.values()].flatMap(z=>[z.cover,z.contact,z.tilt,z.contact2??null,z.tilt2??null,z.position??null,z.tiltAngle??null,z.lock??null]),i=gu(e),r=i.filter(z=>N(z)==="camera").flatMap(z=>Ve(o,z)),s=i.map(z=>fo(o,z)),a=e.energy,l=e.presence.flatMap(z=>[z.person,z.sensor]),c=e.floors.flatMap(z=>z.rooms.flatMap(R=>we(o,R.area_id).filter(T=>N(T)==="light"))),d=[...t.furniture.values()].flatMap(z=>[z.entity,z.power]),u=e.floors.flatMap(z=>z.furniture.flatMap(R=>[R.state_entity??null,R.state_entity2??null,R.color_entity??null])),p=e.floors.flatMap(z=>z.furniture.flatMap(R=>[R.door_left??null,R.door_right??null,R.soc??null,R.status??null,R.charge??null,R.export??null])),h=e.floors.flatMap(z=>z.furniture.flatMap(R=>Object.values(R.binds??{}))),b=(e.settings.roof?.windows??[]).flatMap(z=>[z.cover,z.contact,z.tilt]).filter(z=>!!z&&z!=="none"),_=[...(e.settings.roof?.solar??[]).map(z=>z.entity),...(e.settings.roof?.strings??[]).map(z=>z.entity)].filter(z=>!!z&&z!=="none"),m=e.floors.flatMap(z=>z.furniture.filter(R=>R.type==="robot_vacuum").map(R=>no(o,t.furniture.get(R.id)?.entity??null,R.room_sensor))),w=e.floors.flatMap(z=>z.furniture.flatMap(R=>(R.pictures??[]).flatMap(T=>[T.entity,...T.image.startsWith("camera:")?[T.image.slice(7)]:[]]))),k=t.heat?e.floors.flatMap(z=>z.rooms.flatMap(R=>we(o,R.area_id).filter(T=>T.startsWith("sensor.")))):[],v=[...ep(e.floors),...B("auto_pro")?Cc(o,e.floors):[]],f=bo(o,e).map(z=>z.entity),M=B("household")?[...e.floors.flatMap(z=>z.furniture.flatMap(Gd)),e.settings.household?.notes??null].filter(z=>!!z&&z!=="none"):[],x=ct(o,t.weatherEntityId??e.settings.weather_entity),I=[...i,...r,...n,...s,...d,...u,...p,...h,...m,...b,..._,...w,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...k,...t.warnings,...v,...f,...M,x,"sun.sun"];return[...new Set(I.filter(z=>!!z))]}var Op=/^#[0-9a-f]{3,8}$/i;function tb(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Np(o){if(!o||!o.kind)return null;let e=o.color&&Op.test(o.color)?o.color:"#0b1426",t=o.color2&&Op.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=tb(o.image);if(!n)return null;let i=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${n}") center / cover no-repeat`}var sa;function ut(){let o=new URL("./neonplan3d-voice.js?v=53bc0b8ae6f8",new URL(import.meta.url)).href;return sa??=import(o).catch(e=>{throw sa=void 0,e}),sa}function Ui(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function aa(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function la(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function Xe(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function ca(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function Gi(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var nb=[[/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/,"Fire HD 10"],[/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/,"Fire HD 8"],[/KFQUWI|KFMUWI|KFKAWI|KFGIWI/,"Fire 7"]];function Wp(o=typeof navigator>"u"?"":navigator.userAgent){if(!o)return null;let e=/Fully/i.test(o)?"Fully Kiosk":/Home ?Assistant/i.test(o)?"HA app":/Silk\//.test(o)?"Silk":/Edg\//.test(o)?"Edge":/Firefox\//.test(o)?"Firefox":/Chrome\//.test(o)?"Chrome":/Safari\//.test(o)?"Safari":null,i=[nb.find(([r])=>r.test(o))?.[1]??(/KF[A-Z]{2,5}WI|Silk\//.test(o)?"Fire tablet":null)??(/iPad/.test(o)?"iPad":/iPhone/.test(o)?"iPhone":/Android/.test(o)?/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(o)?.[1]?.trim()??"Android":/Windows/.test(o)?"Windows":/Mac OS X/.test(o)?"Mac":/Linux/.test(o)?"Linux":null),e].filter(Boolean).join(" \xB7 ");return i?i.slice(0,80):null}var ob=.25,Bp=o=>Math.round(o*1e3)/1e3;function da(o,e,t,n,i){let r=o.rooms.find(s=>s.points.length>=3&&V([e,t],s.points));return!r||V([n,i],r.points)?[n,i]:V([n,t],r.points)?[n,t]:V([e,i],r.points)?[e,i]:[e,t]}function Vp(o,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let r=[(n[0]-t[0])/i,(n[1]-t[1])/i],s=l=>Math.abs(-(l[0]-t[0])*r[1]+(l[1]-t[1])*r[0]),a=l=>(l[0]-t[0])*r[0]+(l[1]-t[1])*r[1];return o.rooms.some(l=>l.id!==e&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(i,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Kp(o,e,t,n=ob){let i=o.rooms.find(c=>c.points.length>=3&&V([e.x,e.z],c.points));if(!i)return null;let r=i.points,s=De(r)>=0?1:-1,a=t/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],b=[-h[1]*s,h[0]*s],_=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(_<0||_>p)continue;let w=o.rooms.some(z=>z.id!==i.id&&z.points.some((R,T)=>{let $=z.points[(T+1)%z.points.length],E=Math.abs((R[0]-d[0])*b[0]+(R[1]-d[1])*b[1]),C=Math.abs(($[0]-d[0])*b[0]+($[1]-d[1])*b[1]);return E<.02&&C<.02}))?a:0,k=(e.x-d[0])*b[0]+(e.z-d[1])*b[1]-w,v=Math.atan2(-b[0],b[1])*180/Math.PI,f=z=>Math.abs((e.rotation-z+540)%360-180),x=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((z,R)=>f(R.rotation)<f(z.rotation)?R:z);if(f(x.rotation)>50)continue;let I=k-x.extent;Math.abs(I)>n||l&&Math.abs(I)>=Math.abs(l.gap)||(l={x:Bp(e.x-b[0]*I),z:Bp(e.z-b[1]*I),rotation:(Math.round(x.rotation)%360+360)%360,gap:I})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function ib(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var ua={walls(o,e,t){let n=o.floors.find(r=>r.id===e),i=n?.rooms.find(r=>r.id===t);return!n||!i||i.points.length<3?[]:i.points.map((r,s)=>{let a=kp(i,s),l=Vp(n,i.id,a.a,a.b),c=[...Sp(a,n,i).map(d=>[d.s0,d.s1]),...$p(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,e,t){return Js(ib(o),e,t)},freeSpot(o,e,t=.1){let n=r=>r>=t&&r+e<=o.length-t&&!o.taken.some(([s,a])=>r<a+.05&&r+e>s-.05),i=o.length/2-e/2;for(let r=0;r<=o.length;r+=.05){if(n(i-r))return Math.round((i-r)*100)/100;if(n(i+r))return Math.round((i+r)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(a=>a.id===e),i=n?.outdoor.find(a=>a.id===t);if(!n||!i)return()=>null;let r=Vi(o,n,i),s=i.pool??{};return a=>{let{kind:l,id:c,port:d}=Jt(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return wo(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?r(a)??{x:p.x,y:.02,z:p.z}:r(a)}},connect(o,e,t,n,i,r){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===t);return!s||!a?{pipes:[],joints:[]}:Ap({...n,floorId:e},ua.nodeAt(o,e,t),a.pool?.joints??[],i,r)}};var ji=30,rb=10,sb=600,Up={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},ab={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},lb=2e4,cb=3*6e4,pa=new Set(["unavailable","unknown",""]),db="neonplan3d.director";function ha(){try{return localStorage.getItem(db)==="1"}catch{return!1}}function jp(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var ub=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function qp(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let i=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return ub.test(i)}).sort()}function fa(o,e,t=Date.now()){if(!o||!e||pa.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var Gp=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Zp(o,e,t=Date.now()){return!o||!e||pa.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?fa(o,e,t):pa.has(o.state)?!1:Gp.has(e.state)&&!Gp.has(o.state)}function Yp(o,e,t,n){if(n)return n;let i=o.entities??{},r=i[e]?.device_id,s=t.filter(d=>d.startsWith("camera.")),a=r?s.find(d=>i[d]?.device_id===r):void 0;if(a)return a;let l=d=>Te(o,d),c=l(e);return c&&s.find(d=>l(d)===c)||null}var yo=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let i=this.seen.has(e),r=this.seen.get(e);return this.seen.set(e,t),i&&r!==t&&n(r,t)}stopped(e,t,n){let i=this.runs.get(e);return t?(i?.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!i||i.run?(this.runs.set(e,{run:!1,since:n,ran:!!i?.run}),!1):i.ran&&n-i.since>=cb?(i.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=ji){let i=this.shown.get(e.key);if(i!==void 0&&t-i<ab[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<lb)return!1;let s=this.current;if(s&&t<s.until&&Up[s.shot.kind]>Up[e.kind])return!1;let a=Math.min(sb,Math.max(rb,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+a,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var $e=Math.PI/180,qi=-.833;function pb(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,i=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,r=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(r*$e)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*r*$e)*(.019993-101e-6*n)+Math.sin(3*r*$e)*289e-6,l=125.04-1934.136*n,c=i+a-.00569-.00478*Math.sin(l*$e),u=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*$e),p=Math.asin(Math.sin(u*$e)*Math.sin(c*$e)),h=Math.tan(u/2*$e)**2,b=4*(h*Math.sin(2*i*$e)-2*s*Math.sin(r*$e)+4*s*h*Math.sin(r*$e)*Math.cos(2*i*$e)-.5*h*h*Math.sin(4*i*$e)-1.25*s*s*Math.sin(2*r*$e))/$e,_=new Date(o),k=(((_.getUTCHours()*60+_.getUTCMinutes()+_.getUTCSeconds()/60+b+4*t)%1440+1440)%1440/4-180)*$e,v=e*$e,f=Math.sin(v)*Math.sin(p)+Math.cos(v)*Math.cos(p)*Math.cos(k),M=90-Math.acos(Math.min(1,Math.max(-1,f)))/$e;return{azimuth:(Math.atan2(Math.sin(k),Math.cos(k)*Math.sin(v)-Math.tan(p)*Math.cos(v))/$e+180+360)%360,elevation:M}}function Xp(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let i=n.getTime(),r=10*6e4,s=u=>({...pb(u,e,t),t:u}),a=[],l=null,c=null,d=s(i);for(let u=i+r;u<=i+24*36e5;u+=r){let p=s(u),h=p.elevation>qi,b=d.elevation>qi;if(h!==b){let _=d.t,m=p.t;for(let k=0;k<12;k++){let v=(_+m)/2;s(v).elevation>qi===b?_=v:m=v}let w=s(Math.round((_+m)/2));h?(l??=w,a.push(w)):(c=w,a.push(w))}h&&a.push(p),d=p}return!l&&a.length&&s(i).elevation>qi&&a.unshift(s(i)),{points:a,rise:l,set:c}}var ma=Math.PI/180;function Qp(o,e,t,n){let i=o*ma,r=(e-n)*ma,s=t*ma;return Math.sin(s)*Math.sin(i)+Math.cos(s)*Math.cos(i)*Math.cos(r)<0?null:[Math.cos(i)*Math.sin(r),Math.cos(s)*Math.sin(i)-Math.sin(s)*Math.cos(i)*Math.cos(r)]}var Jp=o=>o<0?0:o>1?1:o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,hb={turn:1500,dive:1300,fade:600},ga=class extends ae{static properties={lat:{type:Number},lon:{type:Number}};raf=0;t0=0;dove=!1;ended=!1;constructor(){super(),this.lat=50,this.lon=10}firstUpdated(){this.t0=performance.now();let e=()=>{this.ended||(this.draw(performance.now()-this.t0),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this.raf)}skip=()=>this.finish(!0);finish(e){this.ended||(this.ended=!0,cancelAnimationFrame(this.raf),this.dove||this.dispatchEvent(new CustomEvent("flyin-dive",{detail:{fast:!0}})),this.dispatchEvent(new CustomEvent("flyin-done",{detail:{skipped:e}})))}draw(e){let t=this.renderRoot.querySelector("canvas"),n=t?.getContext("2d");if(!t||!n)return;let i=1,r=Math.round(t.clientWidth*i),s=Math.round(t.clientHeight*i);(t.width!==r||t.height!==s)&&(t.width=r,t.height=s);let{turn:a,dive:l,fade:c}=hb;if(e>a+l*.55&&!this.dove&&(this.dove=!0,this.dispatchEvent(new CustomEvent("flyin-dive",{detail:{fast:!1}}))),e>a+l+c)return this.finish(!1);n.clearRect(0,0,r,s);let d=e<a+l?0:(e-a-l)/c;n.globalAlpha=1-d,n.fillStyle="#02040a",n.fillRect(0,0,r,s);let u=Jp(e/a),p=this.lon-100*(1-u),h=this.lat*u,b=e<a?0:Jp((e-a)/l),m=Math.min(r,s)*.32*Math.pow(14,b),w=Qp(this.lat,this.lon,h,p),k=r/2-(w?w[0]*m*b:0),v=s/2+(w?w[1]*m*b:0);if(m<Math.max(r,s)){let M=n.createRadialGradient(k,v,m*.95,k,v,m*1.25);M.addColorStop(0,"rgba(62,232,255,0.35)"),M.addColorStop(1,"rgba(62,232,255,0)"),n.fillStyle=M;let x=m*1.25,I=Math.max(0,k-x),z=Math.max(0,v-x);n.fillRect(I,z,Math.min(r,k+x)-I,Math.min(s,v+x)-z)}n.fillStyle="#06101f",n.beginPath(),n.arc(k,v,m,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(62,232,255,${.5*(1-b*.7)})`,n.lineWidth=Math.max(1,i);let f=M=>{let x=!1;n.beginPath();for(let[I,z]of M){let R=Qp(I,z,h,p);if(!R){x=!1;continue}let T=k+R[0]*m,$=v-R[1]*m;x?n.lineTo(T,$):n.moveTo(T,$),x=!0}n.stroke()};if(b<.8){for(let M=-75;M<=75;M+=15)f(Array.from({length:73},(x,I)=>[M,I*5-180]));for(let M=-180;M<180;M+=15)f(Array.from({length:37},(x,I)=>[I*5-90,M]))}if(w){let M=k+w[0]*m,x=v-w[1]*m,I=.5+.5*Math.sin(e/140),z=n.createLinearGradient(M,x,M,x-s*.35);z.addColorStop(0,`rgba(255,95,210,${.8*u})`),z.addColorStop(1,"rgba(255,95,210,0)"),n.fillStyle=z,n.fillRect(M-2*i,x-s*.35,4*i,s*.35),n.fillStyle=`rgba(255,95,210,${.9*u})`,n.beginPath(),n.arc(M,x,(4+3*I)*i,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(255,95,210,${.6*u*(1-I)})`,n.beginPath(),n.arc(M,x,(8+16*I)*i,0,Math.PI*2),n.stroke()}n.globalAlpha=1}render(){return g`<canvas @pointerdown=${this.skip} aria-hidden="true"></canvas>`}static styles=ce`
    :host {
      position: absolute;
      inset: 0;
      z-index: 30;
      cursor: pointer;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `};customElements.get("fp3d-flyin")||customElements.define("fp3d-flyin",ga);function eh(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function mb(o,e){return g`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${et`<polyline points=${bp(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function gb(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ne(o,e*1e3,0)} l`:`${ne(o,e,e<10?2:0)} ${t}`}var bb=12e4,_b=600*1e3,th={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},vb='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',wb='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function xo(o,e,t){return o.rooms.find(n=>n.points.length>=3&&V([e,t],n.points))?.id??null}function yb(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&He(o.states[t])}function xb(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function kb(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function nh(o,e){let t=s=>s&&s!=="none"?s:null,n=it(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),i=t(e.window)?o.states[t(e.window)]:void 0,r=n.open;if(i&&!Y(i)){let s=i.attributes.current_position;r=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:r,tilt:n.tilt,cover:n.cover??0}}function $b(o){let{card_templates:e,...t}=o;return JSON.stringify(t)}var oh=new Set,ih=new Set;async function Sb(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(n=>setTimeout(n,300))]),e.state!=="running")return;let t=e.currentTime;for(let[n,i]of[[784,0],[523,.45]]){let r=e.createOscillator(),s=e.createGain();r.frequency.value=n,s.gain.setValueAtTime(1e-4,t+i),s.gain.exponentialRampToValueAtTime(.3,t+i+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+i+.9),r.connect(s).connect(e.destination),r.start(t+i),r.stop(t+i+.95)}await new Promise(n=>setTimeout(n,1300))}finally{e.close().catch(()=>{})}}function Mb(o){let e=o?.settings.label_scale;return typeof e=="number"&&Number.isFinite(e)?Math.min(2,Math.max(.5,e)):1}var ba=18,va=class extends ae{static properties={hass:{attribute:!1},building:{attribute:!1},planId:{attribute:!1},rooms:{attribute:!1,hasChanged:(e,t)=>(e??[]).join(",")!==(t??[]).join(",")},noSave:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},surroundings:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},themeEvening:{attribute:!1},themeNight:{attribute:!1},styleEntity:{attribute:!1},zoomStyle:{attribute:!1},zoomLate:{attribute:!1},zoomScope:{attribute:!1},_styleOverride:{state:!0},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},sunFx:{attribute:!1},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_menuFresh:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_camPop:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_popup:{state:!0},popupValues:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},_cardsQuiet:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},template:{attribute:!1},viewKind:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_flyIn:{state:!0},_spotHint:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;unwatchDiag=null;detecting=!1;syncMs=0;morph=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;menuFreshTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;moduleFull=new Set(zb());cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popSeen=new Set;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;popupTimer;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeFar=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;dayEvents=[];pickupKey="";householdTimer;binHolos=[];finished=new si;appliances=new Map;directing=new yo;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;winterTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.planId=null,this.rooms=null,this.noSave=!1,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.surroundings=!0,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.sunFx=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._menuFresh=!1,this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null,this._popup=null,this.popupValues={};try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this._cardsQuiet=!1,this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.template=null,this.viewKind="panel",this.voiceArea=null,this._voice=null,this._micProbe=Ui(),this._alerts=[],this._household=[],this._hhFolded=xb("neonplan3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null,this._flyIn=null,this._spotHint=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.unwatchDiag=Ml(e=>this.viewer?.setStats(this.showStats||e)),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible);try{let e=JSON.parse(localStorage.getItem(_a)??"null");this._styleOverride=e&&(e.until===null||e.until>Date.now())&&At(e.style)?e:null}catch{this._styleOverride=null}this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=fr(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),t=>this.onStyle(t),this.viewInfo()).catch(()=>fr(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),void 0,this.viewInfo())).catch(()=>(this.unsubAsk=null,async()=>{})))}viewInfo(){return{kind:this.viewKind,screen:this.screen,template:this.template,device:Wp(),version:vt,...this.planId&&this.planId!==fe?{plan:this.planId}:{}}}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),this.watchWinter(!1),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchDiag?.(),this.unwatchDiag=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",this.tintSig="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&ut().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{let n=t;if(!n.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(n.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await _o();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)});let n=Date.now();this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,safeFx:ia(Ki),onContextLost:()=>Dp(Ki,n,Date.now(),document.hidden),onRoomTap:(i,r)=>this.fire("room-tap",{floorId:i,roomId:r}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?P(this.hass,"floor_rooms_one"):P(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,r,s)=>this.onDeviceTap(i,r,s),onDeviceHold:(i,r,s)=>this.onDeviceHold(i,r,s),onRoomDoubleTap:(i,r)=>this.onRoomDoubleTap(i,r),onDeviceSwipe:(i,r,s,a,l)=>this.onDeviceSwipe(i,r,s,a,l),onMorph:i=>{this.morph=i;let r=this.renderRoot.querySelector(".fp3d-zoom-bg");r&&(r.style.opacity=String(i))},onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,r,s)=>this.fire("furniture-move",{id:i,x:r,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,r,s)=>this.fire("device-move",{id:i,x:r,z:s}),onStats:i=>{this.showStats&&(this._stats=i),Pl(i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setStyle(this.effectiveStyle()),this.viewer.setZoomStyle(this.zoomDef()),this.viewer.setZoomLate((this.zoomLate??50)/100),this.viewer.setZoomScope(this.zoomScope==="room"?"room":"all"),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,r,s,a,l,c)=>this.placeHolo(i,r,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats||_r()),Ot("3d"),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...bt()]),this.hass&&Ks(this.hass,bt()).then(()=>this.syncDevices(!0)),this.shownPacks=an(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding()),this.maybeFlyIn()),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(Gl(this.building??null),mu(this.building)),e.has("hass")&&this.hass&&Rd(Fd(this.hass))}updated(e){if(e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),e.has("_menu")&&this._menu&&!e.get("_menu")&&(this._menuFresh=!0,clearTimeout(this.menuFreshTimer),this.menuFreshTimer=setTimeout(()=>this._menuFresh=!1,400)),e.has("_holos")){let l=this._holos.map(c=>c.kind).join(",");if(l!==this.holoShape){this.holoShape=l;for(let c of this.renderRoot.querySelectorAll(".fp3d-holo"))c.hidden=!0;for(let c of this.renderRoot.querySelectorAll(".fp3d-holo-link"))c.toggleAttribute("hidden",!0);this.viewer?.invalidate()}}(e.has("screen")||e.has("template")||e.has("viewKind")||e.has("planId"))&&this.unsubAsk&&this.hasUpdated?(this.unwatchAsk(),this.watchAsk()):e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),e.has("_through")&&!this._through&&e.get("_through")&&t.endLook(),this.shownPacks!==an()&&(this.shownPacks=an(),t.setPacks([...bt()]),this.hass&&Ks(this.hass,bt()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(Bs(this.hass,this.building)),this.syncDevices(!0));let n=e.has("building")&&this.building?$b(this.building):this.drawnPlan,i=e.has("building")&&n===this.drawnPlan;if(this.drawnPlan=n,e.has("building")&&this.building&&!i){let l=JSON.stringify(this.startViewOf()),c=this.shownStartView!==void 0&&this.shownStartView!==l;this.shownStartView=l,t.setStartView(this.startViewOf()),t.setBuilding(this.shownBuilding()),c&&this.floorId===null&&t.resetView(),this.maybeFlyIn()}else(e.has("plain")&&e.get("plain")!==void 0||e.has("rooms")&&e.get("rooms")!==void 0||e.has("surroundings")&&e.get("surroundings")!==void 0)&&this.building?(t.setBuilding(this.shownBuilding()),e.has("rooms")&&(this.syncDevices(!0),t.resetView())):e.has("hass")&&this.building&&Ws(this.hass,this.building)!==this.shownSig&&(t.setBuilding(this.shownBuilding()),this.syncDevices(!0));(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let r=["building","markerMode","heatMode","flows","alerts","dimmed"].some(l=>e.has(l))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(r||e.has("hass")||s)&&this.syncDevices(r,s&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),(e.has("clean")||e.has("_narrowStage"))&&this.scheduleThumbs(),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),["theme","themeEvening","themeNight"].some(l=>e.has(l)&&e.get(l)!==void 0)&&this._styleOverride&&this.setStyleOverride("reset",null),(e.has("theme")||e.has("themeEvening")||e.has("themeNight")||e.has("styleEntity")||e.has("_styleOverride")||e.has("building"))&&t.setStyle(this.effectiveStyle()),(e.has("zoomStyle")||e.has("building"))&&t.setZoomStyle(this.zoomDef()),e.has("zoomLate")&&t.setZoomLate((this.zoomLate??50)/100),e.has("zoomScope")&&t.setZoomScope(this.zoomScope==="room"?"room":"all"),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats||_r()),e.has("building")&&(this.findIndex=null)}watchWinter(e){e&&!this.winterTimer?this.winterTimer=setInterval(()=>this.syncDevices(!1,!0),6e4):!e&&this.winterTimer&&(clearInterval(this.winterTimer),this.winterTimer=void 0)}syncDevices(e,t=!1){let n=this.viewer,i=this.conditioned();if(!n||!i||!this.hass)return;let r=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==r.entities){this.openingLinks=Jn(r,i.floors),this.furnitureLinks=Wt(r,i.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?ao(r,i,this.weatherEntityId):null,this.watchHousehold(r,i),this.watched=ra(r,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?$s(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Xt()&&(this.watched=[...new Set([...this.watched,...hp(this.sceneHost(r,i))])]);let S=this.styleEntity||i.settings.style_entity;if(S&&!this.watched.includes(S)&&(this.watched=[...this.watched,S]),B("fun_winter")){let A=[Yt(i).roof_entity,ct(r,this.weatherEntityId??i.settings.weather_entity),"sun.sun"].filter(W=>!!W);this.watched=[...new Set([...this.watched,...A])]}e=!0}let s=e||t,a=!s;if(!s){for(let S of this.watched)if(this.shownStates.get(S)!==r.states[S]&&(s=!0,!S.startsWith("sensor."))){a=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!s)return;if(!e&&!this.replay&&n.cameraBusy()){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},Fp);return}if(a&&this._low&&!this.replay){let S=Rp(performance.now()-this.lastSync);if(S>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},S);return}}this.lastSync=performance.now();let c=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(S=>[S,r.states[S]])),this.scene=Xt()?cp(this.sceneHost(r,i)):[];let d=Tu(r,i),u=hu(r,i),p=this.furnitureMarkers(r,i,new Set(u.map(S=>S.id)),new Set(d.map(S=>S.powerEntity)));d.push(...p.consumers),this.lastConsumers=d;let h=Au(r,i,d,Pn(i,S=>this.furnitureLinks?.get(S.id)?.power??null)),b=new Map(d.filter(S=>S.id!==S.powerEntity).map(S=>[S.id,S.power]));this.confirmSet=fn(r,i.floors);let _=this.trail?this.trailNow(r,i):[],m=B("camera_cockpit")&&!this.dimmed?this.detectionPins(r,u):[];this.detecting=m.length>0;let w=B("energy_pro"),k=new Set(B("auto_pro")?i.floors.flatMap(S=>S.furniture.filter(A=>A.type==="parking"&&A.car&&zn(r,A)).map(A=>A.id)):[]);n.setDevices([...[...u,...p.markers,...this.lockMarkers(r,i)].map(S=>{let A=S.show==="no_power"||"energyDevice"in S&&S.energyDevice||"standby"in S&&S.standby?null:b.get(S.id)??null,W={...S,power:A,powerText:A===null?void 0:re(r,A),effect:this.dimmed?!1:S.effect},ee=S.ownName&&(S.showName||this.markerNames)?S.ownName:"",L=this.cardsOn()&&(B("sound")&&this.mediaCardUp(r,S.id)||B("auto_pro")&&!!S.furnitureId&&k.has(S.furnitureId));return{...W,pin:this.showPin(W)&&!L,full:S.show==="always"||S.full===!0,caption:ee}}),...(w&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(r,i,h.grid)]:[]).filter(S=>!!S),...m,..._.map((S,A)=>({id:`trail:${A}`,floorId:S.floorId,roomId:null,x:S.x,z:S.z,y:.3+.4*_.slice(0,A).filter(W=>W.entity===S.entity).length,icon:rp,name:K(r,S.entity),text:Ci(r,S.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(i)]);for(let S of this.scene)S.kind==="marker"&&S.card&&S.furnitureId&&!p.targets.has(S.furnitureId)&&p.targets.set(S.furnitureId,`module:${S.id}`);n.setTrail(_,this.replay?this.robotPaths(r,i):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(Vr(r,i.floors)),n.setAwnings(Hc(r,i.floors)),n.setProjections(this.projectedCameras(r,i)),n.setRobots(this.robotInfos(r,i));let v=new Map;for(let S of i.settings.roof?.windows??[])v.set(S.id,nh(r,S));n.setRoofWindows(v),n.setParked(Bs(r,i));let f=new Map(i.floors.flatMap(S=>S.openings.map(A=>[A.id,A.type]))),M=new Map([...this.openingLinks].map(([S,A])=>[S,it(r,A,f.get(S))]));n.setOpeningStates(M,l);let x=this.alertSrc?ci(r,i,this.alertSrc,this.openingLinks):[],I=this.alerts&&Xt()?pp(this.sceneHost(r,i)).map(S=>({kind:S.kind,entity:S.entity,roomId:S.roomId,floorId:S.floorId,text:S.text,color:S.color,quiet:!S.roomId})):[];this.setAlerts([...x,...I]),clearTimeout(this.fridgeTimer);let z=B("household")&&!this.replay?Qd(i.floors.flatMap(S=>S.furniture),r):null;z!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),z+500));let R=[...u,...p.markers].map(S=>`${S.id}:${S.glow?`${S.glow.level.toFixed(1)}/${S.glow.color.map(A=>A.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...M].map(([S,A])=>`${S}:${A.open}:${A.cover===null?"-":A.cover.toFixed(1)}`).join(";");if(R!==this.thumbSig){let S=this.thumbSig==="";this.thumbSig=R,S||this.scheduleThumbs(1500)}let T=i.floors.flatMap(S=>S.furniture.filter(A=>A.type==="home_battery").map(A=>({floorId:S.id,x:A.x,z:A.z})))[0]??(i.energy.battery?i.floors.flatMap(S=>S.placements.filter(A=>A.entity_id===i.energy.battery).map(A=>({floorId:S.id,x:A.x,z:A.z})))[0]:null),$=w?Wu(r,i,h.solar):null,E=i.settings.roof.hologram??qe,C=[...i.settings.roof.solar??[]].sort((S,A)=>A.rows*A.cols-S.rows*S.cols),D=i.settings.roof.strings??[],H=S=>(S.string?D.find(A=>A.id===S.string)?.inverter:null)??null,G=E.plant_floor?"all":"house",Z=(S,A,W,ee)=>{let L=Kt(i,S);if(!L)return null;let[X,se]=Ut(L,S),le=S.u+X/2+A,ge=S.v+se/2+W,Ge=[L.o[0]+L.eu[0]*le+L.es[0]*ge,L.o[1]+L.eu[1]*le+L.es[1]*ge,L.o[2]+L.eu[2]*le+L.es[2]*ge],ue=L.wall?.floorId??(L.unbounded?i.floors.find(Ie=>Ie.elevation===Math.min(...i.floors.map(nn=>nn.elevation)))?.id??i.floors[0].id:[...i.floors].sort((Ie,nn)=>nn.elevation-Ie.elevation)[0].id);return{p:[Ge[0]+L.n[0]*.05,Ge[1]+L.n[1]*.05,Ge[2]+L.n[2]*.05],n:[L.n[0],L.n[1],L.n[2]],floorId:ue,size:ee,roof:!0,views:G}},F=[],U=[],O=h.grid!==null||h.battery!==null||h.solar!==null,J=E.place==="free"&&Number.isFinite(E.x)&&Number.isFinite(E.z),Q=w&&h.solar!==null&&!J?C.find(S=>S.id===E.field)??C[0]:void 0,pe=Q?H(Q):null,ye=!!Q&&!!pe&&!C.some(S=>S.id!==Q.id&&H(S)===pe)&&E.right===0&&E.up===0,Fe=(()=>{if(!ye||!Q)return 0;let S=Kt(i,Q);return S?Ut(S,Q)[0]/2+1.2:0})(),pt=Q?Z(Q,E.right+Fe,E.up,E.size):null,An=this.devicePowers(r,i),ht=i.energy.solar?[i.energy.solar]:Pn(i,S=>this.furnitureLinks?.get(S.id)?.power??null).solar,Le=ht.map(S=>de(r.states[S])).filter(S=>S!==null),Rn=(i.settings.roof.strings??[]).flatMap(S=>S.entity&&S.entity!=="none"?[S.entity]:[]),ko=Mi(Le.length?Le.reduce((S,A)=>S+A,0):null,Si(r,i))!==(Le.length?Le.reduce((S,A)=>S+A,0):null),Fn=w&&h.solar!==null?ko?Rn:ht:[];if(pt)F.push(pt),U.push({kind:"main",name:P(r,"holo_title"),w:null,dayIds:Fn,battery:null});else if(w&&O&&J){let S=0,A=0,W=0,ee=1/0,L=i.floors[0];for(let ge of i.floors){ge.rooms.length&&(ee=Math.min(ee,ge.elevation)),ge.rooms.length&&(!L.rooms.length||ge.elevation+ge.height>L.elevation+L.height)&&(L=ge);for(let Ge of ge.rooms)for(let[ue,Ie]of Ge.points)S+=ue,A+=Ie,W++}W&&(S/=W,A/=W);let X=E.x-S,se=E.z-A,le=Math.hypot(X,se);F.push({p:[E.x,(Number.isFinite(ee)?ee:0)+(E.height??3),E.z],n:le>.01?[X/le,0,se/le]:[1,0,0],floorId:L.id,size:E.size,roof:!0,views:G}),U.push({kind:"main",name:P(r,"holo_title"),w:null,dayIds:Fn,battery:null})}else if(w&&O&&i.floors.some(S=>S.rooms.length)){let S=-1/0,A=1/0,W=-1/0,ee=0,L=i.floors[0];for(let X of i.floors){for(let se of X.rooms)for(let[le,ge]of se.points)S=Math.max(S,le),A=Math.min(A,ge),W=Math.max(W,ge);X.rooms.length&&X.elevation+X.height>ee&&(ee=X.elevation+X.height,L=X)}F.push({p:[S+.6,ee+.4,(A+W)/2],n:[1,0,0],floorId:L.id,size:E.size,roof:!0,views:G}),U.push({kind:"main",name:P(r,"holo_title"),w:null,dayIds:Fn,battery:null})}if(w&&h.solar!==null){let S=new Set;for(let A of i.floors)for(let W of A.furniture.filter(ee=>ee.type==="inverter")){if(W.plant_card===!1||S.has(W.id))continue;S.add(W.id);let ee=C.filter(ue=>H(ue)===W.id),L=(Q&&W.id===pe?ee.find(ue=>ue.id!==Q.id):null)??ee[0],X=this.furnitureLinks?.get(W.id)?.power??null,se=L?Z(L,W.plant_right??0,W.plant_up??0,E.size*.85):null,le=Si(r,i,W.id);if(!se||!X&&le===null)continue;let ge=A.furniture.filter(ue=>ue.type==="home_battery").sort((ue,Ie)=>Math.hypot(ue.x-W.x,ue.z-W.z)-Math.hypot(Ie.x-W.x,Ie.z-W.z))[0],Ge=ge?.soc&&ge.soc!=="none"?Number(r.states[ge.soc]?.state):NaN;F.push(se),U.push({kind:"plant",name:W.name||ke(r,W.type),w:Math.max(0,Mi(X?de(r.states[X]):null,le)??0),dayIds:X?[X]:[],battery:ge?{soc:Number.isFinite(Ge)?Ge:null,w:An.get(ge.id)??null}:null})}}let $o=E.device_house===!1?"floor":"all";if(w)for(let S of i.floors){for(let A of S.furniture){if(!A.holo)continue;let W=this.furnitureLinks?.get(A.id)?.power??null,ee=d.find(X=>X.id===A.id);if(!W&&!ee)continue;let L=S.elevation+me(S,A)+A.h;F.push({p:[A.x,L+.1,A.z],n:[0,1,0],floorId:S.id,size:E.size*.7,roof:!1,views:$o,room:xo(S,A.x,A.z)}),U.push({kind:"device",name:A.name||ke(r,A.type),w:ee?.power??(W?de(r.states[W]):null),dayIds:W?[W]:[],battery:null})}for(let A of S.placements){if(!A.holo)continue;let W=fo(r,A.entity_id);if(!W)continue;let ee=S.elevation+(A.y??.4)+.2;F.push({p:[A.x,ee,A.z],n:[0,1,0],floorId:S.id,size:E.size*.7,roof:!1,views:$o,room:xo(S,A.x,A.z)}),U.push({kind:"device",name:A.name||K(r,A.entity_id),w:de(r.states[W]),dayIds:[W],battery:null})}}let Ee=[];if(B("sound")){let S=new Set,A=(i.settings.roof.hologram??qe).size,W=(L,X,se,le,ge,Ge)=>{let ue=r.states[X];if(!ue||N(X)!=="media")return;if(S.has(X)){let Ft=Ee.find(Ji=>Ji.id===X);Ft&&Ee.push({...Ft,id:`${X}#${Ee.filter(Ji=>Ji.id.startsWith(`${X}#`)).length+2}`,floorId:L.id,x:se,z:le,members:[X]});return}S.add(X);let Ie=this.ro?void 0:this.mediaGrace.get(X),nn=[ue.attributes.media_title,ue.attributes.app_name,ue.attributes.source].find(Ft=>typeof Ft=="string"&&!!Ft.trim())??"";if(!(!Y(ue)&&(ue.state==="playing"||ue.state==="paused"&&!!nn&&this.pausedRecently(ue)||ue.state==="on"&&!!ue.attributes.source))){Ie&&Ie.until>Date.now()?(Ee.push({...Ie.source,playing:!1,level:0}),F.push(Ie.anchor),U.push({...Ie.card,media:{...Ie.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Ie.until-Date.now()+100))):Y(ue)||(this.mediaGrace.delete(X),Ee.push({id:X,floorId:L.id,x:se,z:le,level:0,playing:!1,members:[]}));return}let Qi=ue.state==="playing",je=ue.attributes,Ta=typeof je.volume_level=="number"?Math.min(1,Math.max(0,je.volume_level)):.5,vh=Array.isArray(je.group_members)?je.group_members.filter(Ft=>Ft!==X):[];Ee.push({id:X,floorId:L.id,x:se,z:le,level:Qi?.3+.7*Ta:0,playing:Qi,members:vh});let wh=nn||P(r,"holo_media_playing"),Aa={p:[se,L.elevation+ge+.12,le],n:[0,1,0],floorId:L.id,size:A*.7,roof:!1,views:"all",room:xo(L,se,le)},Ra={kind:"media",name:Ge,w:null,dayIds:[],battery:null,media:{id:X,title:wh,artist:typeof je.media_artist=="string"?je.media_artist:typeof je.media_album_name=="string"?je.media_album_name:"",picture:typeof je.entity_picture=="string"?je.entity_picture:null,volume:Math.round(Ta*100),playing:Qi}};F.push(Aa),U.push(Ra),this.ro||this.mediaGrace.set(X,{until:Date.now()+45e3,card:Ra,source:Ee[Ee.length-1],anchor:Aa})},ee=(L,X)=>{for(let se of L.furniture){if((se.entity!=null&&se.entity!=="none")!==X)continue;let le=this.furnitureLinks?.get(se.id)?.entity;le&&W(L,le,se.x,se.z,me(L,se)+se.h,se.name||ke(r,se.type))}};for(let L of i.floors)ee(L,!0);for(let L of i.floors)for(let X of L.placements)W(L,X.entity_id,X.x,X.z,X.y??1.1,X.name||K(r,X.entity_id));for(let L of i.floors)ee(L,!1)}if(B("auto_pro")){let S=(i.settings.roof.hologram??qe).size;for(let A of i.floors)for(let W of A.furniture){if(W.type!=="parking"||!W.car)continue;let ee=zn(r,W);if(!ee)continue;let L=to(r,W);if(L.soc===null&&L.range===null&&L.locked===null&&L.climateOn===null)continue;let X=tp(W,ee),se=me(A,W)+(X?.h??1.6);F.push({p:[W.x,A.elevation+se+.25,W.z],n:[0,1,0],floorId:A.id,size:S*.7,roof:!1,views:"all"});let le=L.entities;U.push({kind:"car",name:W.name||ke(r,ee),w:null,dayIds:[],battery:null,car:{spot:W.id,soc:L.soc,range:L.range,rangeUnit:L.rangeUnit,chargingW:L.chargingW,charging:L.charging,locked:L.locked,climateOn:L.climateOn,lock:le.lock,climate:le.climate,charge:le.charging&&/^(switch|input_boolean)\./.test(le.charging)?le.charging:null}})}}let j=this.scene.filter(S=>S.kind==="water").map(S=>({...S,level:this.dimmed?S.level*.4:S.level}));if(n.setPools(j),Xt()){let S=(i.settings.roof.hologram??qe).size;for(let A of up(this.sceneHost(r,i))){let W=i.floors.find(L=>L.id===A.anchor.floorId);if(!W)continue;let ee=null;if(A.anchor.areaId){let L=W.outdoor.find(ge=>ge.id===A.anchor.areaId);if(!L||L.points.length<3)continue;let[X,se]=ze(L.points),le=L.type==="pool"?cn(W,L):nt(W,X,se);ee=[X,W.elevation+Math.max(le,0)+(L.above?.6:1.1),se]}else if(A.anchor.furnitureId){let L=W.furniture.find(X=>X.id===A.anchor.furnitureId);if(!L)continue;ee=[L.x,W.elevation+me(W,L)+L.h+.25,L.z]}ee&&(F.push({p:ee,n:[0,1,0],floorId:W.id,size:S*.7,roof:!1,views:"all"}),U.push({kind:"module",name:A.title,w:null,dayIds:[],battery:null,module:A}))}for(let A of this.scene){if(A.kind!=="tag")continue;let W=i.floors.find(ee=>ee.id===A.floorId);W&&(F.push({p:[A.at[0],W.elevation+A.at[1],A.at[2]],n:[0,1,0],floorId:W.id,size:S*.75,roof:!1,views:A.views??"all"}),U.push({kind:"bin",name:A.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:A.color??"#37e0ff",when:A.text,name:A.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(B("household")){let S=(i.settings.roof.hologram??qe).size;for(let A of Bd(this.binHolos)){let W=i.floors.find(L=>L.id===A.floorId);if(!W)continue;F.push({p:[A.x,W.elevation+A.y+.04,A.z],n:[0,1,0],floorId:A.floorId,size:S*.75,roof:!1,views:"all",room:xo(W,A.x,A.z)});let ee=A.lines.map(L=>({color:L.color,when:L.when,name:L.name,soon:!!L.soon&&!L.out,out:!!L.out}));U.push({kind:"bin",name:A.lines.map(L=>L.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:ee,soon:ee.some(L=>L.soon),icon:A.lines.length===1?A.lines[0].icon??null:null}})}}n.setSound(Ee);let ie=this._walk?this.walkRoomPts:null,he=F.map(S=>!this._walk||!!ie&&V([S.p[0],S.p[2]],ie)),Ue=U.filter((S,A)=>he[A]);n.setAnchors(F.filter((S,A)=>he[A])),JSON.stringify(Ue)!==JSON.stringify(this._holos)&&(this._holos=Ue),n.setSolarLevels($&&!this.dimmed?Nu(i,$):new Map);let Qe=!w||!(this.flows??this._flows)||this.dimmed?[]:Fu({building:i,consumers:d,summary:h,battery:T??null,fieldPower:$,devicePower:this.devicePowers(r,i)}).map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.power,color:Bu(S.kind,h)})),So=this.poolPipes(i),Mo=this.scene.filter(S=>S.kind==="line"),en=B("fun_winter")&&!this.replay;n.setRoofLights(en&&Yu(r,i)?Yt(i).roof_color?"color":"warm":"off",Yt(i).roof_outline!==!1);let Io=en?Xu(r,i,ct(r,this.weatherEntityId??i.settings.weather_entity)):0;n.setRoofSnow(Io),n.setFirework(en&&Ju(i)),this.watchWinter(en),n.setFlows(this.dimmed?Qe:[...Qe,...So.flows,..._p(Mo)]),n.setPipes(So.tubes),n.setPatches([...this.scene.filter(S=>S.kind==="patch").map(S=>({floorId:S.floorId,points:S.points,y:S.y,color:S.color,opacity:this.dimmed?S.opacity*.4:S.opacity,...S.glow?{glow:!0}:{}})),...Qu(i,Io)]);let tn=[],Xi=dt("locate")&&fi(i)?[...tn,...mi(r,i,new Set(tn.map(S=>S.id)))]:tn;n.setPersonLook(Es(i)==="pin"?"pin":"figure"),n.setPersons([...Xi,...this.moduleFigures(i)]),this.lastPersons=Xi.map(S=>({id:S.id,floorId:S.floorId,roomId:S.roomId}));let bh=uu(r,i,this.openingLinks,Xi);n.setFloorInfo(new Map([...bh].map(([S,A])=>[S,this.clean&&this._narrowStage?"":pu(r,A)]))),this.fire("status-change",{});let Po=r.states["sun.sun"]?.attributes,Eo=typeof Po?.elevation=="number"?Po.elevation:null;n.setSun(this.sunFx!==!1&&Eo!==null&&typeof Po?.azimuth=="number"?{elevation:Eo,azimuth:Po.azimuth}:null);let zo=S=>P(r,S).charAt(0).toUpperCase();n.setSunPath(this.sunFx===!1?null:this.sunPathToday(r),[zo("compass_n"),zo("compass_e"),zo("compass_s"),zo("compass_w")],Cn(r)),n.setStyle(this.effectiveStyle());let Ma=this.weather&&!this.dimmed&&B("weather")?xd(r,ct(r,this.weatherEntityId??i.settings.weather_entity),i.settings.rain_entity):null,Hn=Ma?kd(Ma,i.settings.weather_effects):null;this.cloud=Hn?.cloud??0,this._sky=(Eo===null?0:Math.min(1,Math.max(0,(Eo+4)/16)))*(1-.45*this.cloud);let _h=Hn?Hn.sky:(i.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&B("weather")?{...Hn??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:_h}:null),this.watchLightning(!!Hn?.lightning),this.applyTint();let Ia=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(Ia)!==JSON.stringify(this._energy)&&(this._energy=Ia);let Pa=d.some(S=>S.wallbox)?d.filter(S=>S.wallbox).reduce((S,A)=>S+A.power,0):null,Ea=i.floors.flatMap(S=>S.furniture.filter(A=>A.type==="inverter")).map(S=>{let A=this.furnitureLinks?.get(S.id)?.power,W=A?de(r.states[A]):null;return W===null?null:{name:S.name||ke(r,S.type),w:Math.max(0,W)}}).filter(S=>!!S);JSON.stringify(Ea)!==JSON.stringify(this._plants)&&(this._plants=Ea),Pa!==this._wallboxW&&(this._wallboxW=Pa),this.watchSolarDay([...new Set(U.flatMap(S=>S.dayIds))]);let za=B("energy_pro");this.watchMeters(za?i.energy.gas??null:null,za?i.energy.water??null:null),c&&(this.syncMs=this.syncMs*.8+(performance.now()-c)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}nowInput(){let e=this.hass,t=this.building;if(!e||!t||!this.openingLinks)return null;let n=new Map(this.lastPersons.map(a=>[a.id,a])),i=new Map(t.floors.flatMap(a=>oe(a).map(l=>[l.id,l.name]))),r=Object.values(e.states).filter(a=>a.entity_id.startsWith("person.")).map(a=>{let l=n.get(a.entity_id);return{name:K(e,a.entity_id),home:a.state==="home",room:l?i.get(l.roomId)??null:null,floorId:l?.floorId??null,roomId:l?.roomId??null}}),s=Object.values(e.states).find(a=>a.entity_id.startsWith("person.")&&!!e.user?.id&&a.attributes.user_id===e.user.id);return{alerts:this._alerts.map(a=>({text:Et(e,t,a),entity:a.entity,floorId:a.floorId,roomId:a.roomId})),openings:this.spokenOpenings(e,t),unlocked:this.lockMarkers(e,t).filter(a=>a.active).map(a=>({name:K(e,a.id),entity:a.id,floorId:a.floorId,roomId:a.roomId})),people:r,household:this._household.map(a=>({text:a.text,entity:a.entity,hot:!!a.hot})),lights:Mt(e,t,null).map(a=>({room:a.name,count:a.lightsOn.length,on:a.lightsOn,floorId:a.floorId,roomId:a.roomId})),energy:this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,soc:this._energy.soc}:null,cars:this.spokenCars(e,t).map(a=>({name:a.name,present:a.present,charging:a.charging,soc:a.soc,floorId:a.floorId})),away:!!s&&s.state!=="home"}}quietCards(e){this._cardsQuiet=e}showNow(e){let t=this.building,n=e.opening&&t?this.openingSpot(t,e.opening):null;if(n){(this.floorId!==n.floorId||this.roomId)&&this.fire("floor-tap",{floorId:n.floorId}),setTimeout(()=>this.viewer?.focus(n.floorId,n.x,n.z,n.y,e.entity??null,{radius:4.6,phi:1,theta:n.theta}),120);return}if(e.entity){let i=this.floorId;if(this.showEntity(e.entity),this.findIndex?.some(r=>r.entity===e.entity)||this.floorId!==i)return}e.floorId&&this.jumpTo({kind:"now",entity:e.entity??"",floorId:e.floorId,roomId:e.roomId??null})}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.findIndex??=Li(t,n)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=Te(t,e);for(let s of n.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!r&&u.area_id===r));if(!l)continue;let[c,d]=ze(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,i=n?Jn(t,e.floors):this.openingLinks,r=n?Wt(t,e.floors):this.furnitureLinks,s=$s(ao(t,e,this.weatherEntityId)),a=ra(t,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=B("auto_pro")?e.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Qo(t,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:B("energy_pro"),auto:B("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let t=this.hass,n=t.states[e.entity],i=_e(t,n),r=N(e.entity)==="light"&&n?.state==="on"&&i.endsWith("%")?`${P(t,"state_on")} \xB7 ${i}`:i,s=n?.last_changed?P(t,"tt_since",{time:Ci(t,Date.parse(n.last_changed))}):"";return g`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${K(t,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let i of t.floors)for(let r of i.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let s=this.furnitureLinks?.get(r.id)?.power,a=r.type==="home_battery"&&r.charge&&r.charge!=="none"?de(e.states[r.charge]):null,l=s?de(e.states[s],r.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&n.set(r.id,l)}return n}detectionPins(e,t){let n=[],i=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_pins===!1).map(a=>a.entity_id))??[]),r=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_popup).map(a=>a.entity_id))??[]);for(let s of t){if(r.has(s.id)&&s.model?.startsWith("camera")&&this.popOnDetection(e,s.id),!s.model?.startsWith("camera")||i.has(s.id))continue;let a=this.now(),l=Ve(e,s.id).filter(b=>{let _=e.states[b];return _?_.state==="on"?!0:_.state==="off"&&!!_.last_changed&&a-Date.parse(_.last_changed)<bb:!1}),c=new Map;for(let b of l){let _=lo(e,b);c.has(_)||c.set(_,b)}c.size>1&&c.delete("motion");let d=(s.rotation??0)*Math.PI/180,u=[-Math.sin(d),Math.cos(d)],p=s.model==="camera_ceiling",h=0;for(let[b,_]of c){let m=e.states[_],w=m?.last_changed?Ci(e,Date.parse(m.last_changed)):"";n.push({id:`detect:${_}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(p?0:u[0]*1.1),z:s.z+(p?0:u[1]*1.1),y:1.4+.4*h++,icon:th[b]??th.motion,name:K(e,_),text:`${P(e,`detect_${b}`)}${w?` \xB7 ${w}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let i=$i(t);if(!i)return null;let r=Math.abs(n)<5,s=t.settings.outage_entity;return s&&ii(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:wb,name:P(e,"holo_grid"),text:P(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:vb,name:P(e,"holo_grid"),text:r?re(e,0):`${P(e,n<0?"energy_grid_export":"energy_grid_import")} ${re(e,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),i=this.replay?"":n.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await Eu(this.hass,n);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e){let t=[],n=[],i=new Map(this.scene.filter(r=>r.kind==="pipeflow").map(r=>[r.areaId,r.flows]));for(let{floor:r,area:s}of Ep(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(i.get(s.id)??{})),d=Vi(e,r,s),u=(p,h)=>na(p,h,s,r);t.push(...zp(a.pipes??[],c,d,u));for(let p of l){if(p.kind!=="inlet")continue;let h=d(`port:${p.id}`),b=h&&oa(s,[h.x,h.z]);if(!h||!b)continue;let _=(a.pipes??[]).find(w=>w.to===`port:${p.id}`),m=_?c.get(_.id):void 0;n.push({floorId:r.id,points:[[h.x+b[0]*.03,h.y,h.z+b[1]*.03],[h.x-b[0]*.09,h.y,h.z-b[1]*.09]],radius:.035,water:m?.active?m.color:null,fittings:[]})}for(let p of a.joints??[]){if(p.kind!=="wall"&&p.kind!=="floor")continue;let h=d(`joint:${p.id}:inside`),b=d(`joint:${p.id}:outside`),_=p.kind==="floor"?.03:h.y;n.push({floorId:r.id,points:[[h.x,_,h.z],[b.x,b.y,b.z]],radius:.05,water:null,fittings:[]})}for(let p of a.pipes??[]){let h=na(vo(p,d),p,s,r);if(h.length<2)continue;let b=c.get(p.id),_=[],m=Wi(h);for(let[w,k]of[[p.from,.04],[p.to,m-.04]]){let v=w.startsWith("dev:")||w.startsWith("joint:")?Bi(h,k):null;v&&_.push({kind:"sleeve",p:v.p,dir:v.dir})}for(let w of p.fittings??[]){let k=Bi(h,w.at);k&&_.push({kind:w.kind,p:k.p,dir:k.dir,open:w.open!==!1})}n.push({floorId:p.floor_id,points:h,radius:.025,water:b?.active?b.color??ta:null,fittings:_})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await Lu(this.hass,e);this.holoIds===n&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoShape="";holoBoxes=[];holoSizes=new Map;holoStage={w:0,h:0,at:0};placeHolo(e,t,n,i,r,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[e],u=(this.building?.settings.roof.hologram??qe).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(i=!1);let p=!i;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!i)return;if(d?.kind==="bin"){let H=Math.max(.6,r*.8),G=!!d.bin?.icon&&r*.8<.62;a.classList.contains("fp3d-holo-far")!==G&&(a.classList.toggle("fp3d-holo-far",G),this.holoSizes.delete(e)),G&&(H=1);let Z=this.holoSizes.get(e),F=performance.now();(!Z||F-Z.at>2e3)&&(Z={w:a.offsetWidth||90,h:a.offsetHeight||40,at:F},this.holoSizes.set(e,Z));let U=Z.w*H,O=Z.h*H,J=n;for(let Q=0;Q<6;Q++){let pe=this.holoBoxes.find(ye=>t-U/2<ye.x1+3&&t+U/2>ye.x0-3&&J-O<ye.y1+3&&J>ye.y0-3);if(!pe)break;J=pe.y0-4}this.holoBoxes.push({i:e,x0:t-U/2,x1:t+U/2,y0:J-O,y1:J}),a.style.transform=`translate(${t.toFixed(1)}px, ${J.toFixed(1)}px) scale(${H.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=r*.8,b=34*h,_=46*h,m=t+(s?b:-b),w=n-_,k=this.holoSizes.get(e),v=performance.now();(!k||v-k.at>2e3)&&(k={w:a.offsetWidth||184,h:a.offsetHeight||90,at:v},this.holoSizes.set(e,k));let f=k.w*h,M=k.h*h;if(v-this.holoStage.at>2e3){let H=a.parentElement;this.holoStage={w:H?.clientWidth||innerWidth,h:H?.clientHeight||innerHeight,at:v}}let x=8,I=this.holoStage.w,z=this.holoStage.h,R=s?m:m-f,T=I>f+2*x?Math.max(0,x-R)-Math.max(0,R+f-(I-x)):0;R+=T,m+=T;let $=R+f;for(let H=0;H<6;H++){let G=this.holoBoxes.find(Z=>R<Z.x1+4&&$>Z.x0-4&&w-M<Z.y1+4&&w>Z.y0-4);if(!G)break;w=G.y0-6}let E=60,C=w-M<E;if(C){w=n+_+M;for(let H=0;H<6;H++){let G=this.holoBoxes.find(Z=>R<Z.x1+4&&$>Z.x0-4&&w-M<Z.y1+4&&w>Z.y0-4);if(!G)break;w=G.y1+6+M}z>M+E+x&&(w=Math.min(w,z-x)),w=Math.max(w,E+M)}this.holoBoxes.push({i:e,x0:R,x1:$,y0:w-M,y1:w});let D=s||(this.building?.settings.roof.hologram??qe).mirror!==!1;if(a.style.transform=D?`translate(${m.toFixed(1)}px, ${w.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${R.toFixed(1)}px, ${w.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let H=l.firstElementChild,G=l.lastElementChild;H?.setAttribute("x1",t.toFixed(1)),H?.setAttribute("y1",n.toFixed(1)),H?.setAttribute("x2",m.toFixed(1)),H?.setAttribute("y2",(C?w-M:w).toFixed(1)),G?.setAttribute("cx",t.toFixed(1)),G?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy,t=()=>this._holos.map((s,a)=>s.kind==="bin"?this.renderBinCard(s,a):y),n=this._holos.some(s=>s.kind==="module"||s.tag);if(!(n||B("energy_pro")||B("sound")||B("auto_pro")||B("pool")||B("household"))||!this.cardsOn())return B("household")||n?t():y;if(this.roomId&&!(this.building?.settings.roof.hologram??qe).device_room)return this._holos.map((s,a)=>s.kind==="media"?this.renderMediaCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):y);let i=this.floorId===null||(this.building?.floors.length??0)<=1,r=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&i;return this._holos.map((s,a)=>s.kind==="module"?this.renderModuleCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):s.kind==="car"?this.renderCarCard(s,a):s.kind==="media"?this.renderMediaCard(s,a):s.kind==="device"?this.renderDeviceCard(s,a):r?this.renderHoloCard(s,a,e):y)}renderBinCard(e,t){let n=e.bin,i=n.lines.length===1?n.lines[0]:null,r=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return g`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${r} style="--bin:${n.lines[0].color}">
      ${n.icon?g`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${i?g`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:g`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>g`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,i=b=>P(n,b),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(b,_,m)=>{n.callService(b,_,{entity_id:m})},c=(b,_)=>b.startsWith("climate.")?l("climate",_?"turn_on":"turn_off",b):l("homeassistant",_?"turn_on":"turn_off",b),d=()=>{if(!r.lock)return;let b=r.lock.startsWith("lock.");if(r.locked){if(!confirm(i("car_unlock_confirm")))return;b?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else b?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",p=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),h=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${ne(n,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${re(n,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?g`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(p||h||r.charge)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?g`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${h?g`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>c(r.climate,!r.climateOn)}>❄</button>`:y}
                ${r.charge?g`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>c(r.charge,!r.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,t){let n=e.module,i=!this.mediaFolded.has(n.id),r=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=m=>m?`color:${m}`:"",a=this._low||this.clientWidth<600,l=a&&!this.moduleFull.has(n.id),c=a&&[...n.rows??[],...n.cells??[],...n.chain?.items??[],...n.spark?[n.spark]:[]].some(m=>m.minor),d=()=>{this.moduleFull.has(n.id)?this.moduleFull.delete(n.id):this.moduleFull.add(n.id);try{localStorage.setItem(sh,JSON.stringify([...this.moduleFull]))}catch{}this.requestUpdate()},u=Oi(n.rows,l),p=Oi(n.cells,l),h=n.chain?Oi(n.chain.items,l):[],b=n.spark&&n.spark.values.length>1&&!(l&&n.spark.minor)?n.spark:null,_=!!(n.chain||n.cells?.length||n.status);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${_?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${r}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?g`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?g`<i>${n.status.icon}</i>`:y}<b>${n.status.text}</b>${n.status.since?g`<span>${n.status.since}</span>`:y}
              </div>`:y}
          ${n.main?g`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?g`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?g`<small>${n.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${i&&h.length?g`<div class="fp3d-holo-chain">
                  ${h.map((m,w)=>g`${w?g`<s>→</s>`:y}<div><small>${m.label}</small><b style=${s(m.color)}>${m.value}</b></div>`)}
                </div>
                ${n.chain.note?g`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:y}`:y}
          ${i?u.map(m=>g`<div class="fp3d-holo-mrow"><span>${m.label}</span><b style=${s(m.color)}>${m.value}</b>${m.at!==void 0?m.fill?g`<i class="fp3d-holo-mrow-fill"><s style="width:${m.at}%;background:${m.color??"#37e0ff"}"></s></i>`:g`<i><em style="left:${m.at}%;background:${m.color??"#37e0ff"};color:${m.color??"#37e0ff"}"></em></i>`:g`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${i&&p.length?g`<div class="fp3d-holo-cells">${p.map(m=>g`<div><small>${m.label}</small><b style=${s(m.color)}>${m.value}</b></div>`)}</div>`:y}
          ${i&&n.hint?g`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:y}
          ${i?(n.lines??[]).map(m=>g`<div class="fp3d-holo-mline">${m}</div>`):y}
          ${i&&b?g`${b.label?g`<div class="fp3d-holo-spark-label">${b.label}</div>`:y}${mb(b.values,b.color??"#ffb347")}`:y}
          ${i&&n.chips?.length?g`<div class="fp3d-holo-chips">
                ${n.chips.map(m=>g`<div class="fp3d-holo-mline">${m.title}</div>
                    <div class="fp3d-holo-chip-row">${m.items.map(w=>g`<button class=${w.on?"fp3d-holo-on":""} title=${w.title??""} @click=${()=>w.onTap()}>${w.label}</button>`)}</div>`)}
              </div>`:y}
          ${i&&c?g`<button class="fp3d-holo-more" @click=${d}>${P(this.hass,l?"holo_more":"holo_less")}</button>`:y}
          ${i&&!this.ro&&n.buttons?.length?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(m=>g`<button class=${m.on?"fp3d-holo-on":""} title=${m.title??""} @click=${()=>m.onTap()}>${m.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,i=v=>P(n,v),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(v,f={})=>{Promise.resolve(n.callService("media_player",v,{entity_id:r.id,...f})).catch(M=>this.serviceFailed(`media_player.${v}`,M))},c={down:v=>v.currentTarget.dataset.pressed=String(v.pointerId),up:v=>f=>{let M=f.currentTarget;M.dataset.pressed===String(f.pointerId)&&(delete M.dataset.pressed,f.stopPropagation(),M.dataset.acted=String(Date.now()),v())},key:v=>f=>{let M=f.currentTarget;Date.now()-Number(M.dataset.acted??0)<700||(M.dataset.acted=String(Date.now()),v())}},d=n.states[r.id]?.attributes.supported_features,u=v=>typeof d!="number"||(d&v)!==0,p=this.mediaIntent.get(r.id);p&&(p.playing===r.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(r.id);let h=this.mediaIntent.get(r.id)?.playing??r.playing,b=u(16384)||u(1),_=()=>{this.mediaIntent.set(r.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},m=this.mediaVolume.get(r.id);m&&(Math.abs(m.v-r.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(r.id);let w=this.mediaVolume.get(r.id)?.v??r.volume,k=(v,f)=>{this.mediaVolume.set(r.id,{v,at:Date.now()}),this.requestUpdate(),(f||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:v/100}))};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?g`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:g`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?g`<span>${r.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?g`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${h?!u(1):!b} @pointerdown=${c.down} @pointerup=${c.up(_)} @click=${c.key(_)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(w)}
                  aria-label=${i("volume")}
                  @input=${v=>k(Number(v.target.value),!1)}
                  @change=${v=>k(Number(v.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${w} %</span>
              </div>`:y}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,i=c=>P(n,c),r=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?Cs(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${re(n,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?g`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ne(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${re(n,s.peak)}</b></div>`:y}
        ${r&&a?et`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Du(t,new Date(this.now())):null}renderHoloCard(e,t,n){let i=this.hass,r=m=>P(i,m),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",c=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,d=a&&a.curve.length>1?Cs(a.curve,a.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},b=l?n.solar??n.consumption??0:e.w??0,_=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${re(i,b)}</b><span>${r(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?g`${l&&this._plants.length>1?g`<div class="fp3d-holo-plants">${this._plants.map(m=>g`<span>${m.name}</span><b>${re(i,m.w)}</b>`)}</div>`:y}
              ${a?g`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ne(i,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${re(i,a.peak)}</b></div>`:y}
              ${d?et`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              <div class="fp3d-holo-grid">
                ${_?g`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${_.soc!==null?`${Math.round(_.soc)} %`:re(i,Math.abs(_.w??0))}</b>
                      ${_.w!==null&&Math.abs(_.w)>=5?g`<span>${_.w<0?"\u25B2":"\u25BC"} ${re(i,Math.abs(_.w))}</span>`:y}
                    </div>`:y}
                ${l&&n.grid!==null?g`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${re(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":r(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${l&&n.consumption!==null?g`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${re(i,n.consumption)}</b></div>`:y}
                ${l&&this._wallboxW!==null?g`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${re(i,this._wallboxW)}</b></div>`:y}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?g`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?g`<span>🔥 ${r("holo_gas")} <b>${ne(i,this._meters.gas,this._meters.gas<10?2:1)} ${eh(i,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?g`<span>💧 ${r("holo_water")} <b>${gb(i,this._meters.water,eh(i,this.building?.energy.water))}</b></span>`:y}
                    <span>${r("holo_today_short")}</span>
                  </div>`:y}
              ${c!==null?g`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${c} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let t=e.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(t[a]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let i=e.some(s=>!s.quiet);if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let r=this.directorSettings();if(r?.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),r.hold??ji)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&B("camera_cockpit")&&jp(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new yo,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),r=e.hold??ji,s=`${JSON.stringify(e)}|${n.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let c=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:s,bells:(e.doorbell?qp(t,e.doorbell_entity):[]).map(u=>({id:u,camera:Yp(t,u,c,e.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>Ve(t,u).filter(p=>d==="all"||lo(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,t.states[c.id],(d,u)=>fa(d,u,i))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of e.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,t.states[c.entity],(d,u)=>Zp(d,u,i))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,t.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(e.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,i)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,i,r)){this.directorShow(()=>this.directorGo(c));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(i=>i.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(t.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,i=this.hass,r=n?.floors.find(d=>d.id===e),s=r?oe(r).find(d=>d.id===t):void 0;if(!n||!i||!r||!s||this.ro)return;let a=new Set(we(i,s.area_id).filter(d=>N(d)==="light"));for(let d of r.placements)N(d.entity_id)==="light"&&V([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of r.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Gn(d.type)&&V([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>i.states[d]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Uu(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,d])=>[c,Ku(a,d)]))}let r=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of oe(a)){let c=Ne(n,a,l,"temperature"),d=Ne(n,a,l,"humidity"),u=Ne(n,a,l,"co2"),p=[c!==null?`${ne(n,wt(n,c),1)} ${Oe(n)}`:null,d!==null?`${ne(n,d,0)} %`:null,u!==null?`${ne(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&r.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=eu(l).map(d=>d*a);if(l.roomId)i.set(l.roomId,c);else for(let d of t.floors)if(!l.floorId||d.id===l.floorId)for(let u of d.rooms)i.set(u.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){let r=[],s=[],a=new Map,l=new Map,c=new Set(n),d=B("household"),u=[];this.binHolos=[];let p=new Map(this.scene.filter(v=>v.kind==="glow").map(v=>[v.furnitureId,v]));for(let v of t.floors)for(let f of v.furniture){let M=this.furnitureLinks.get(f.id),x=this.stateFaces(e,f);if(x.length&&a.set(f.id,{color:x[0].color,level:x[0].level,faces:x}),Gn(f.type)){let j=this.lampMarker(e,v,f,M?.entity??null);r.push(j);let ie=(f.type==="lamp_fan"||kr(ve(f.type)))&&f.fan&&f.fan!=="none"?f.fan:null;if(ie&&!n.has(ie)){n.add(ie);let he=e.states[ie],Ue=f.rotation*Math.PI/180,Qe=Math.min(.45,f.w*.3);r.push({id:ie,floorId:v.id,roomId:j.roomId,x:f.x+Math.cos(Ue)*Qe,z:f.z+Math.sin(Ue)*Qe,y:j.y,icon:f.icon?Ze(f.icon):jt("fan"),name:K(e,ie),text:he&&Xo(he)>0&&typeof he.attributes.percentage=="number"?`${Math.round(he.attributes.percentage)} %`:he?_e(e,he):"",active:he?He(he):!1,unavailable:he?Y(he):!1,glow:null,furnitureId:f.id,show:f.marker??"always",fromFurniture:!0})}continue}if(nc.has(f.type)){let j=this.techItem(e,v,f,a,n);j&&(r.push(j),l.set(f.id,j.id));continue}if(tc.has(f.type)){let j=this.gangItem(e,v,f,s,a,i);j&&(r.push(j),l.set(f.id,j.id));continue}let I=p.get(f.id);I&&a.set(f.id,{color:I.color,level:I.level});let z=(f.type==="plant"||gs(f.type))&&!!f.moisture&&f.moisture!=="none";if(f.type==="waste_bin"||f.type==="mailbox"||z){let j=d?this.householdState(e,v,f):null;j?.screen&&a.set(f.id,j.screen),j?.marker&&r.push(j.marker);let ie=f.type==="waste_bin"?f.bin_source:f.type==="mailbox"?f.entity:f.moisture;if(d&&typeof ie=="string"&&ie!=="none"&&l.set(f.id,`hh:${ie}#${f.id}`),j?.item&&u.push(j.item),!z)continue}if(d){let j=Yd(f,e);j.length&&!a.has(f.id)&&a.set(f.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let ie of j){let he=f.name||ke(e,f.type);u.push({icon:"wrench-outline",text:ie===f.service?P(e,"hh_service",{name:he}):P(e,"hh_service2",{name:he,what:K(e,ie)}),entity:ie})}(f.type==="fridge"||f.type==="fridge_smart")&&li(f,e)&&(a.set(f.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:P(e,"hh_fridge_open",{name:f.name||ke(e,f.type)}),entity:Pt(f)[0]??null}))}let T=f.type==="parking"&&B("auto_pro")&&!!f.car?to(e,f):null,$=jd(f.type),E=!!$,C=f.type==="home_battery"?f.soc:f.type==="wallbox"?f.status:f.type==="parking"&&T?f.car?.device??T.entities.soc:d&&E?f.remaining??null:null,D=C&&C!=="none"?C:null,H=f.extra&&f.extra!=="none"&&e.states[f.extra]?f.extra:null,G=H?_e(e,e.states[H]):"",Z=j=>G?j?`${j} \xB7 ${G}`:G:j,F=M??(D||H?{entity:null,power:null}:void 0);if(!F)continue;let U=f.type==="home_battery"?D??F.entity??F.power:F.entity??F.power??D??H;l.set(f.id,U);let O=F.entity?e.states[F.entity]:void 0,J=f.type==="meter"?t.energy.grid_invert&&!f.export:f.type==="home_battery"?t.energy.battery_invert&&!f.charge:!1,Q=F.power?de(e.states[F.power],J):null,pe=f.type==="home_battery"&&f.charge&&f.charge!=="none"?f.charge:f.type==="meter"&&f.export&&f.export!=="none"?f.export:null,ye=pe?de(e.states[pe]):null;ye!==null&&(Q=Math.max(0,Q??0)-Math.max(0,ye)),F.power&&Q!==null&&!i.has(F.power)&&(i.add(F.power),s.push({id:U,powerEntity:F.power,floorId:v.id,x:f.x,z:f.z,power:Math.max(0,Q),wallbox:f.type==="wallbox"||void 0}));let Fe=typeof f.run_w=="number"&&f.run_w>0?f.run_w:10,pt=typeof f.run_w=="number"&&f.run_w>0&&Q!==null&&Q<=f.run_w,An=!!F.entity&&/^(switch|input_boolean)\./.test(F.entity)&&Q!==null,ht=(Q??0)>Fe||!An&&(O?.state==="on"||O?.state==="running"||Or(O)&&He(O));E&&this.appliances.set(f.id,{floorId:v.id,x:f.x,z:f.z,entity:F.entity??F.power??f.id,running:ht});let Le=null;if(d&&E){let j=f.remaining&&f.remaining!=="none"?e.states[f.remaining]:void 0,ie=ys(j),he=ht||!F.power&&!F.entity&&(ie??0)>0,Ue=Pt(f),Qe=en=>Ue.some(Io=>{let tn=e.states[Io];return!!tn?.last_changed&&Date.parse(tn.last_changed)>en}),So=this.finished.update(f.id,he,Qe),Mo=f.name||(F.entity?K(e,F.entity):ke(e,f.type));he?(ht||a.set(f.id,rh($)),ie!==null&&!ks(O,F.power?Q:null,Fe)&&(Le=P(e,"hh_left",{t:Zd(ie)}),u.push({icon:"timer-outline",text:`${Mo}: ${Le}`,entity:f.remaining??F.entity}))):(xs(O)||xs(j)||So)&&(Le=P(e,"hh_done"),a.set(f.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:P(e,"hh_finished",{name:Mo}),entity:F.entity??F.power}))}if(T&&zn(e,f)){let j=[];if(T.soc!==null){let ie=T.soc>=50?[.3,1,.5]:T.soc>=20?[1,.8,.25]:[1,.3,.25];j.push({part:"band",color:ie,level:T.charging?1:.6})}if(T.locked===!1&&j.push({part:"lights",color:[1,.42,.02],level:1}),T.climateOn){let ie=T.entities.climate?e.states[T.entities.climate]:void 0,he=!!ie&&(ie.attributes.hvac_action==="cooling"||ie.state==="cool");j.push({part:"cabin",color:he?[.45,.8,1]:[1,.55,.22],level:.35})}j.length&&a.set(`${f.id}:vehicle`,{color:j[0].color,level:j[0].level,faces:j})}if(f.type==="radiator"&&(O&&N(O.entity_id)==="climate"||f.heat_sensor)){let j=O&&N(O.entity_id)==="climate"?O.attributes:null;if(kc(e,f.heat_sensor)??j?.hvac_action==="heating"){let he=j&&typeof j.temperature=="number"&&typeof j.current_temperature=="number"?j.temperature-j.current_temperature:1;a.set(f.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,he))})}else p.has(f.id)&&a.delete(f.id)}else if(f.type==="ac_unit"&&O&&N(O.entity_id)==="climate"){let j=Mc(O);j&&a.set(f.id,j)}else if($&&ht)a.set(f.id,rh($));else if(f.type==="stove"||xr(f.type)){let j=Sc(O,ht);j>0&&a.set(f.id,{color:[1,.05,.01],level:j,faces:[{part:"burners",color:[1,.05,.01],level:j}]})}let Rn=ve(f.type),ko=!!Rn&&!Rn.light&&Rn.parts.some(j=>j.glow);if(O&&ko&&B("sound")&&N(O.entity_id)==="media"&&O.state==="playing"&&!Yo(f.type)){let j=typeof O.attributes.volume_level=="number"?O.attributes.volume_level:.5;a.set(f.id,{color:Gr(O)??[.22,.88,1],level:.5+.5*j,ring:!0,plain:!0})}if(O&&Yo(f.type)&&!xr(f.type)&&!(Do(f.type)&&N(O.entity_id)==="cover")){let j=B("screens"),ie=N(O.entity_id)==="light"?ot(O):null,he=N(O.entity_id)==="media"&&["playing","on","paused","idle"].includes(O.state),Ue=j&&N(O.entity_id)==="media"?Gr(O):ie?ie.color:He(O)||he?[.22,.88,1]:null,Qe=j&&N(O.entity_id)==="media"?O.attributes.entity_picture??null:null;Ue&&a.set(f.id,{color:Ue,level:O.state==="playing"?1:.6,picture:Qe,ring:ko&&B("sound")&&O.state==="playing"})}if(c.has(U))continue;n.add(U);let Fn=F.entity?N(F.entity):null,$o=v.rooms.find(j=>j.points.length>=3&&V([f.x,f.z],j.points)),Ee=O&&Cl(f.type)&&O.entity_id.startsWith("water_heater.")?Ib(e,O):null;r.push({id:U,floorId:v.id,roomId:$o?.id??null,x:f.x,z:f.z,y:Eb(f)+me(v,f),icon:f.icon?Ze(f.icon):Ee?Ze("water-boiler"):jt(Fn??"switch"),name:f.name||(F.entity?K(e,F.entity):ke(e,f.type)),ownName:f.name||void 0,showName:!!f.show_name,text:Z(Le??(T?this.carText(e,T,!!O&&!Hi.has(O.state.toLowerCase())):f.type==="home_battery"?this.batteryText(e,D,Q):f.type==="wallbox"?this.wallboxText(e,D,Q):f.type==="meter"?this.meterText(e,Q):Ee?Ee.text:O&&!An?_e(e,O):pt?P(e,"pin_standby"):Q!==null?re(e,Math.max(0,Q)):"")),active:Le?!0:T?T.charging:Ee?Ee.on:O&&!An?He(O):(Q??0)>(typeof f.run_w=="number"&&f.run_w>0?f.run_w:5),unavailable:O?Y(O):!1,glow:null,furnitureId:f.id,energyDevice:f.type==="inverter"||f.type==="home_battery"||f.type==="wallbox"||f.type==="meter"||!!T||!!H,...pt?{standby:pt}:{},show:f.marker??(T||Le?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h?.bin_next_only||typeof h?.bin_days=="number"){let v=Vd(this.binHolos.filter(f=>!f.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(f=>f.icon||v.has(f.id))}let b=t.settings.household?.notes,_=b&&b!=="none"?e.states[b]:void 0;if(d&&_&&!Y(_)&&_.state.trim()){let v=_.state.split(/\s*(?:\||\n|;)\s*/).map(f=>f.trim()).filter(Boolean).slice(0,8);u.unshift(...v.map(f=>({icon:"pin-outline",text:f,entity:b})))}if(d&&this.dayEvents.length){let v=u.findIndex(f=>f.icon!=="pin-outline");u.splice(v<0?u.length:v,0,...Od(this.dayEvents,new Date,e.language))}this._household=u.filter((v,f)=>u.findIndex(M=>M.text===v.text)===f),this.cameraScreens=0;let m=Vr(e,t.floors),w=B("screens");for(let v of t.floors)for(let f of v.furniture){if(!w||!f.pictures?.length||!Yo(f.type)||f.type==="fridge_smart"&&m.get(f.id)?.right)continue;let M=f.pictures.find(z=>Rc(e,z));if(!M)continue;let x=this.pictureUrl(M.image),I=f.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];x&&a.set(f.id,{color:I,level:1,picture:x,plain:!0})}for(let v of t.floors)for(let f of v.furniture){if(f.type!=="neon_sign")continue;let M=this.furnitureLinks.get(f.id)?.entity??null,x=yu(f,M?e.states[M]:void 0,!!M),I=xu(wu(f.sign_text),x.color,x.on,x.level,Math.max(.05,f.w)/Math.max(.05,f.h));a.set(f.id,{color:[.015,.015,.03],level:1,picture:I,plain:!0})}let k=new Map;for(let v of t.floors)for(let f of v.furniture){if(!kr(ve(f.type)))continue;let M=f.fan&&f.fan!=="none"?f.fan:this.furnitureLinks.get(f.id)?.entity??null,x=M?e.states[M]:void 0,I=M?.split(".")[0];k.set(f.id,I==="fan"?Xo(x):I!=="light"&&x&&He(x)?.6:0)}this.viewer?.setSpinSpeeds(k),this.viewer?.setLiveStates(e.states,v=>this.furnitureLinks.get(v)?.entity??null);for(let v of p.values())v.top?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"strata",color:v.color,top:v.top,level:v.level}]}):v.plate?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"plate",color:v.color,level:v.level}]}):v.band&&a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"band",color:v.color,level:v.level}]});for(let v of this.scene)v.kind==="screen"&&(a.set(v.furnitureId,{color:v.color??[.06,.08,.14],level:v.level??1,picture:v.picture,plain:!0}),v.popup&&l.set(v.furnitureId,`popup:${v.popup}`));return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:r,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(c=>c.furniture).filter(c=>c.type==="waste_bin"||c.type==="mailbox"),i=(t.settings.household?.calendars??[]).filter(c=>typeof c=="string"&&c.startsWith("calendar.")),r=B("household")&&(n.length>0||i.length>0)&&!this.replay,s=r?Cd(t.floors):[],a=`${s.join(",")}|${i.join(",")}`;if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="",this.dayEvents=[];return}let l=async c=>{let[d,u]=await Promise.all([s.length?Dd(c,s):null,i.length?Ld(c,i):null]);d&&(this.pickups=d),this.dayEvents=u??[],this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void l(this.hass??e),6e5),s.length||i.length?l(e):this.dayEvents=[])}gangItem(e,t,n,i,r,s){let a=jn(n),l=n.type==="wall_socket",c=[],d=0,u=0,p=null,h=!1;if(a.forEach((f,M)=>{let x=f.entity&&f.entity!=="none"?f.entity:null,I=f.power&&f.power!=="none"?f.power:null;if(!x&&!I)return;u++;let z=x?e.states[x]:void 0,R=I?de(e.states[I]):null;if(I&&R!==null&&(p=(p??0)+Math.max(0,R),s.has(I)||(s.add(I),i.push({id:x??I,powerEntity:I,floorId:t.id,x:n.x,z:n.z,power:Math.max(0,R)}))),z&&!Y(z)&&(h=!0),!(z?He(z):(R??0)>5))return;d++;let $=z&&N(z.entity_id)==="light"?ot(z):null;if(!l){c.push({part:"gang",index:M,of:a.length,color:$?$.color:[.22,.88,1],level:.5,accent:!$});return}let E=$?$.color:[.35,1,.55];c.push({part:"gang",index:M,of:a.length,color:E,level:R!==null?Math.min(1,.55+R/1500):.8})}),c.length&&r.set(n.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let b=Bo(n),_=b[0]??null,m=_?e.states[_]:void 0,w=t.rooms.find(f=>f.points.length>=3&&V([n.x,n.z],f.points)),k=p,v=Kc(this.floorWalls(t),n,t.height,me(t,n));return{id:`gangs:${n.id}`,floorId:t.id,roomId:w?.id??null,x:v.x,z:v.z,y:n.h+.2+v.y,icon:Ze(n.icon||(l?"power-socket-de":"light-switch")),name:n.name||(b.length===1&&_?K(e,_):ke(e,n.type)),ownName:n.name||void 0,showName:!!n.show_name,text:u>1?`${d}/${u}${k!==null?` \xB7 ${re(e,k)}`:""}`:k!==null?re(e,k):m?_e(e,m):"",active:d>0,unavailable:!!_&&!h,glow:null,power:k??void 0,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0}}techItem(e,t,n,i,r){let s=x=>typeof x=="string"&&x!=="none"?x:null,a=s(n.entity),l=a?e.states[a]:void 0,c=t.rooms.find(x=>x.points.length>=3&&V([n.x,n.z],x.points)),d={floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,ownName:n.name||void 0,showName:!!n.show_name,glow:null,furnitureId:n.id,fromFurniture:!0};if(n.type==="wifi_ap"){let x=s(n.clients),I=x?e.states[x]:void 0,z=I&&Number.isFinite(Number(I.state))?Math.round(Number(I.state)):null,R=a?Ur(l):I?Ur(I):null;if(R!==null){let $=R?[.25,.6,1]:[1,.25,.2];i.set(n.id,{color:$,level:.85,faces:[{part:"apring",color:$,level:.85}]})}let T=a??x;return!T||r.has(T)?null:(r.add(T),{...d,id:T,y:me(t,n)-(n.variant==="wall"?-n.h-.2:.3),icon:Ze(n.icon||"access-point"),name:n.name||K(e,T),text:R===!1?P(e,"ap_offline"):z!==null?P(e,"ap_clients",{n:z}):l?_e(e,l):"",active:R===!0,unavailable:R===!1,show:n.marker??(R===!1?"always":void 0),energyDevice:z!==null})}let u=l?N(l.entity_id):null,p=s(n.power),h=p?de(e.states[p]):null,b=typeof n.run_w=="number"&&n.run_w>0?n.run_w:30,_=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(h??0)>b;(_||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(n.id,{color:[1,.45,.15],level:_?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:_?.9:.3}]});let w=s(n.water_temp),k=w?e.states[w]:void 0,v=k&&Number.isFinite(Number(k.state))?Number(k.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,f=k?.attributes.unit_of_measurement??"\xB0C",M=a??w??p;return!M||r.has(M)?null:(r.add(M),{...d,id:M,y:me(t,n)+n.h+.25,icon:Ze(n.icon||"water-boiler"),name:n.name||(a?K(e,a):ke(e,n.type)),text:v!==null?`${ne(e,Math.round(v))} ${f}${_?" \xB7 \u{1F525}":""}`:l?_e(e,l):"",active:_,unavailable:l?Y(l):!1,power:h??void 0,show:n.marker??void 0,energyDevice:v!==null})}floorWalls(e){let t=this.wallCache.get(e);if(!t){let n=this.building?.settings;t=kt(e.rooms,{exterior:n?.wall_exterior??.24,interior:n?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,t)}return t}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,t=this.hass,n=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!t||!n)return y;let i=n.type==="wall_socket";return g`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${n.name||ke(t,n.type)}</span>
        ${jn(n).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?t.states[l]:void 0,d=s.power&&s.power!=="none"?de(t.states[s.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?K(t,l):"\u2013"}`;return g`<button class="fp3d-chip ${c&&He(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?Y(c):!0)}
            @click=${()=>{l&&(this.confirmSet.has(l)&&!confirm(P(t,"confirm_switch",{name:K(t,l)}))||bi(t,l))}}>${u}${c?g` <small>${_e(t,c)}${d!==null?` \xB7 ${re(t,Math.max(0,d))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,t,n){let i=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(n.type==="waste_bin"){let l=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!l)return null;let c=_s(n,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!c)return null;let d=c.days===0?P(e,"bin_today"):c.days===1?P(e,"bin_tomorrow"):P(e,"bin_in_days",{n:c.days}),u=i(Hd(n)[1]),p=Math.max(...u),b=p-Math.min(...u)<.12?[.92,.95,1]:u.map(v=>Math.min(1,v/Math.max(.001,p)*1.05)),_=n.name||P(e,`bin_kind_${n.bin_kind??"rest"}`),m=vs(n,e),w=`#${b.map(v=>Math.round(v*255).toString(16).padStart(2,"0")).join("")}`,k=m?P(e,"bin_out_done"):d;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:_,color:w,when:k,soon:c.days<=1&&!m,days:c.days,out:m}),{item:c.days<=1?{icon:m?"check-circle-outline":"trash-can-outline",text:`${_}: ${k}`,entity:l,hot:c.glow&&!m}:void 0}}if(n.type!=="mailbox"){let l=ws(n,e),c=[1,.55,.12],d=n.name||ke(e,n.type);return l?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:d,color:"#ff8c1f",when:P(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:P(e,"hh_plant",{name:d}),entity:n.moisture??null,hot:!0}}):null}let r=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!r)return null;let s=Ud(n,e),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||ke(e,n.type),color:"#ffb547",when:P(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${P(e,"mailbox_post")}`:P(e,"mailbox_post"),entity:r,hot:!0}:void 0}}robotPaths(e,t){let n=this.replay;if(!n)return[];let i=[];for(let r of t.floors){let s=r.rooms.filter(a=>a.points.length>=3);for(let a of r.furniture){if(!ln(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=n.robotRooms(l,no(e,l,a.room_sensor)),d=[];for(let u of c){let p=jr(e,s,u),h=p?ze(p.points):null,b=d[d.length-1];h&&(!b||b[0]!==h[0]||b[1]!==h[1])&&d.push([h[0],h[1]])}d.length&&i.push({floorId:r.id,points:d})}}return i}trailNow(e,t){let n=this.now(),i=bo(e,t),r=this.replay?this.replay.rows(i.map(a=>a.entity),n-go,n):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return ip(i,op(r,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!B("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!B("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let i=bo(t,n).map(r=>r.entity);if(i.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-go).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if($d()){let i=new Set(t.floors.flatMap(r=>r.placements.map(s=>s.entity_id)).filter(r=>N(r)==="camera"));for(let r of i){let s=e.states[r],a=s?.attributes.entity_picture;!a||Y(s)||n.push({id:r,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||Y(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),pl(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||me(e,i)>.12)return!1;let r=ve(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:V([i.x,i.z],t)||Nt(i).some(s=>V(s,t))}).map(i=>Nt(i))}robotInfos(e,t){let n=[];for(let i of t.floors)for(let r of i.furniture){if(!ln(r.type))continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Nr(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=r.rotation*Math.PI/180,d=_t(r.type),u=r.d*(d?Hl(ve(r.type)):.14),p=[r.x-Math.sin(c)*u,r.z+Math.cos(c)*u],h=i.rooms.filter(w=>w.points.length>=3),_=(l==="cleaning"?Dc(e,h,s,no(e,s,r.room_sensor)):null)??h.find(w=>V(p,w.points)),m=l==="cleaning"&&_?this.robotObstacles(i,_.points):[];n.push({id:r.id,floorId:i.id,rest:p,restHeading:-c,mode:l,room:_?.points??null,roomId:_?.id??null,obstacles:m,...d?{model:{type:r.type,w:r.w,d:r.d,h:r.h}}:{}})}return n}batteryText(e,t,n){let i=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${ne(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${re(e,Math.abs(n))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?re(e,0):`${P(e,t<0?"energy_grid_export":"energy_grid_import")} ${re(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,r=String(i?.state??"").toLowerCase(),s=$c(r),a=(n??0)>50||s.charging,l=i?.entity_id.startsWith("binary_sensor.")?r==="on":s.plugged,c=a?P(e,"wallbox_charging"):l?P(e,"wallbox_plugged"):i&&!Y(i)&&!i.entity_id.startsWith("binary_sensor.")?_e(e,i):"",d=n!==null&&n>50?re(e,n):"";return[c,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||Y(a)||!(He(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=N(r)==="light"?ot(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(e,t,n){let i=s=>P(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let r=[];return t.soc!==null&&r.push(`${ne(e,t.soc,0)} %`),t.range!==null&&r.push(`${ne(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${re(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,n){let r=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&V([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!Yr(s).some(l=>jc(l,e.elevation+r)&&Xr(l,e.elevation)))return r;let a=qc(s,t,n,e.elevation);return a===null?r:Math.max(.5,Math.min(r,a-e.elevation))}lampMarker(e,t,n,i){let r=i?e.states[i]:void 0,s=ve(n.type),a=sc[n.type]??s?.light??"floor",l=t.rooms.some(k=>k.points.length>=3&&V([n.x,n.z],k.points)),c=a==="strip"&&!l?nt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?me(t,n):a==="table"?No(t,n.x,n.z,n.h):a==="bollard"||a==="garden"?nt(t,n.x,n.z):0,d=t.rooms.find(k=>k.points.length>=3&&V([n.x,n.z],k.points)),u=this.ceilingAt(t,n.x,n.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&n.mount_y==null,h=p?t.height-u:0,b=s&&p?Math.max(0,c-h):c,_=Lo.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+Oo(n.type,n.h)):Math.abs(h)>.01?u:void 0,m=_??t.height,w=s?s.mount==="ceiling"?Math.max(.5,b-.15):b+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),fan:Math.max(.6,m-n.h-.25),floor:b+n.h+.25,uplight:b+n.h+.25,table:b+n.h+.2,wall:b+n.h+.2,strip:n.upright?b+n.w+.15:Math.max(.3,b-.2),bollard:b+n.h+.25,garden:b+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:t.id,roomId:d?.id??null,x:n.x,z:n.z,y:w,icon:n.icon?Ze(n.icon):jt("light"),name:n.name||(i?K(e,i):ke(e,n.type)),text:r?_e(e,r):"",active:r?He(r):!1,unavailable:r?Y(r):!1,glow:r?zs(Pc(Ic(ot(r,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,fanSpeed:a==="fan"?Xo(n.fan&&n.fan!=="none"?e.states[n.fan]:void 0):void 0,size:[n.w,n.d,n.h],base:b,top:_,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,finish:s?n.finish??null:null,lightY:s?s.mount==="ceiling"?b:b+n.h*.85:void 0,effect:!!r&&r.state==="on"&&!n.glow_color&&Ec(r)&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(r.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=this.building?.floors.find(i=>i.id===e.floorId),n=t?oe(t).find(i=>i.id===this.roomId):void 0;return!!n&&V([e.x,e.z],n.points)}showPin(e){if(e.id.startsWith("lamp:"))return!1;if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="active")return e.active;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=N(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||Wr(n.cover)){e.set(t,`opening:${t}`);continue}let i=n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2||this.clean&&this._narrowStage){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===r.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return g`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${P(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${P(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${P(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${P(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>g`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${n?y:g`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(e.startsWith("gangs:")){let r=this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(6)),s=r?Bo(r):[];s.length===1?this.onDeviceHold(s[0],t,n):this.onDeviceTap(e,t,n);return}if(this.ro){this.onDeviceTap(e,t,n);return}if(B("auto_pro")&&this.hass&&this.building)for(let r of this.building.floors)for(let s of r.furniture){if(s.type!=="parking"||!s.car)continue;let a=to(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:a};return}}let i=N(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:Me(this,e)}onDeviceSwipe(e,t,n,i,r){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||Y(s)||this.confirmSet.has(e))return!1;let l=N(e);if(l==="light"&&Zs(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:r},this.swipeFar=0,!0}if(l==="cover"&&Ys(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:r},this.swipeFar=0,!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){this.swipeFar=Math.max(this.swipeFar,Math.abs(n));let l=Math.abs(n)<=ba?0:n-Math.sign(n)*ba,c=Math.round(Math.min(100,Math.max(0,a.start-l/220*100)));c!==a.value&&(this._swipe={...a,value:c});let d=performance.now();a.kind==="light"&&c!==a.start&&d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else{if(clearTimeout(this.swipeTimer),this.swipeFar<=ba)return this._swipe=null,this.onDeviceTap(e,i,r),!0;a.value!==a.start&&this.applySwipe(),this.swipeTimer=setTimeout(()=>this._swipe=null,700)}return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,t=this.hass,n=e&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId);if(!e||!t||!n)return y;let i=Nd(n,t,this.pickups),r=new Date;r.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-r.getTime())/864e5);return u===0?P(t,"bin_today"):u===1?P(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||P(t,`bin_kind_${n.bin_kind??"rest"}`),l=vs(n,t),c=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&bi(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return g`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(d=>g`<b>${s(d.day)}${d.summary&&d.summary!==a?g` <small>· ${d.summary}</small>`:y}</b>`):g`<b>${P(t,"bin_none")}</b>`}
      ${Wd(n)&&!this.ro?g`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?P(t,"bin_out_done"):P(t,"bin_out_mark")}</button>`:l?g`<small>${P(t,"bin_out_done")}</small>`:y}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!B("household")||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,kb("neonplan3d.hhFolded",this._hhFolded)};return g`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${P(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(t=>g`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):Me(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),i=this.hass.config?.time_zone,r=s=>{try{return t.toLocaleString(n,i?{...s,timeZone:i}:s)}catch{return t.toLocaleString(n,s)}};return g`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${r({hour:"2-digit",minute:"2-digit",...Cn(this.hass)})}</b><span>${r({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let t=this._alerts.slice(0,3);return g`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>g`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Et(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Et(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?g`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let t=e.floors.flatMap(r=>oe(r)).find(r=>r.id===this.roomId),n=t?we(this.hass,t.area_id).filter(r=>N(r)==="scene"||N(r)==="script").slice(0,6):[];if(!n.length)return y;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return g`<div class="fp3d-scenes">
      ${n.map(r=>g`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${K(this.hass,r,i)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,n=e?.settings.pets?.on!==!1&&this.petsOn!==!1,i=n?e?.settings.pets?.list??[]:[],r=n&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||!B("fun_pets")||!i.length&&!r){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([Qs(),_o()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,c)=>me(l,c),closedDoors:()=>{let l=new Set,c=this.hass?.states??{};for(let d of this.building?.floors??[])for(let u of d.openings)u.type==="door"&&u.contact&&c[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("NeonPlan 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&B("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,i]=await Promise.all([Qs(),_o()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("NeonPlan 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}walkHere(){this.startWalk()}async startWalk(){Ot("walk");let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=this.roomId,i=e.floors.filter(p=>p.rooms.some(h=>h.points.length>=3)),s=(n?i.find(p=>p.rooms.some(h=>h.id===n)):void 0)??i.find(p=>p.id===this.floorId)??[...i].sort((p,h)=>Math.abs(p.elevation)-Math.abs(h.elevation))[0];if(!s)return;let a=await _o();this._walk={room:null,hint:!0},this.walkChanged(!0),await this.updateComplete;let l=this.renderRoot.querySelector(".fp3d-walk-surface");if(!l)return;t.setFloor(s.id,!1),t.setWallMode("auto");let c=new a.FloorMap(e,s),d=n?s.rooms.find(p=>p.id===n):void 0,u;if(d){let p=c.freeNear(ze(d.points));u={x:p[0],z:p[1],yaw:c.openYaw(p),pitch:-.05}}this.walker=new a.WalkCamera(t,c,l,{start:u,onRoom:p=>{this.walkRoomPts=p?.points??null,this._walk&&(this._walk={...this._walk,room:p?.name??null}),this.syncDevices(!0)}}),this.walkKeys=p=>{p.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}walkChanged(e){this.dispatchEvent(new CustomEvent("walk-change",{detail:{walking:e},bubbles:!0,composed:!0}))}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null,this.walkChanged(!1);let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return y;let e=r=>P(this.hass,r);if(!this._walk&&this.panelOpen)return y;if(!this._walk)return g`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,i=(r,s)=>{if(!n)return;let a=44,l=r.clientX-n.cx,c=r.clientY-n.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return g`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?g`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();n={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}openFind(){this._find=""}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return g`<button class="fp3d-find-btn" title=${P(this.hass,"find")} aria-label=${P(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=sp(this.findIndex??=Li(this.hass,e),this._find);return g`<div class="fp3d-find ${this.clean?"fp3d-find-up":""}">
      <input
        type="search"
        placeholder=${P(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${P(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?g`<div class="fp3d-find-list">
            ${t.length?t.map(n=>g`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Sn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?g`<small>${n.where}</small>`:y}</span>
                  </button>`):g`<p>${P(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return y;let n=(m,w)=>P(t,m,w),i=g`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(m=>gn(t,m).lights),l=s.flatMap(m=>gn(t,m).covers),c=a.filter(m=>t.states[m]?.state==="on").length,d=!r,u=(m,w,k,v)=>{if(v.length){if(d&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}if(this._armed=null,w==="cover"&&(k==="open_cover"||k==="close_cover")){for(let f of jo(t,v,k==="open_cover"?"open":"close"))t.callService("cover",f.service,f.data);return}t.callService(w,k,{entity_id:v})}},p=(m,w,k,v,f)=>g`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!f.length} @click=${()=>u(m,k,v,f)}>
        ${this._armed===m?n("central_sure"):n(w)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),b=this.buttons??e.settings.buttons??[],_=Xt()?Gs(this.sceneHost(t,e)):[];return g`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${r?r.name:n("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>
        </div>
        ${_.length?g`<div class="fp3d-central-favs">
              ${_.map(m=>g`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:m.id,floorId:null,roomId:null}}}><span aria-hidden="true">${m.icon}</span> ${m.title}</button>`)}
            </div>`:y}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?g` <small>${c}/${a.length}</small>`:y}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(m=>t.states[m]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(m=>t.states[m]?.state==="on"))}
        </div>
        ${l.length?g`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:y}
        <b>${n("central_favorites")}</b>
        ${h.length?g`<div class="fp3d-central-favs">
              ${h.map(m=>{let[w,k]=rt(m),v=t.states[m],f=w==="homeassistant"&&v?.state==="on";return g`<button
                  class="fp3d-chip"
                  aria-pressed=${f||this._sceneFired===m}
                  ?disabled=${Y(v)}
                  @click=${()=>{t.callService(w,k,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${K(t,m)}
                </button>`})}
            </div>`:b.length?y:g`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${b.length?g`<div class="fp3d-central-favs">
              ${b.map(m=>g`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${yb(t,m)}
                  @click=${w=>{Nc(t,w.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?g`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:y}${m.label}
                </button>`)}
            </div>`:y}
      </div>`}maybeFlyIn(e=!1){let t=this.viewer,n=this.hass?.config?.latitude,i=this.hass?.config?.longitude;!t||!e&&(this.flownIn||!this.building?.settings.flyin)||this.walkable===!1||this.ro||this._low||typeof n!="number"||typeof i!="number"||matchMedia("(prefers-reduced-motion: reduce)").matches||(this.flownIn=!0,t.flyInStart(),this._flyIn={lat:n,lon:i})}flownIn=!1;renderFlyIn(){let e=this._flyIn;return e?g`<fp3d-flyin
      .lat=${e.lat}
      .lon=${e.lon}
      @flyin-dive=${t=>this.viewer?.flyInLand(t.detail.fast)}
      @flyin-done=${()=>this._flyIn=null}
    ></fp3d-flyin>`:y}mediaCardUp(e,t){let n=e.states[t];if(!n||N(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&Y(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!Y(n)&&(n.state==="playing"||n.state==="paused"&&i&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+_b-Date.now();if(n<=0)return!1;let i=Date.now()+n+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=P(this.hass,this.clean?"controls_show":"controls_hide");return g`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?et`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:et`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let t=this._voice,n=t?.phase==="wait"||t?.phase==="listen",i=P(e,"voice_button"),r=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return g`<button class="fp3d-mic ${t?.phase==="listen"?"fp3d-mic-on":""}" style="left:${r}px" title=${i} aria-label=${i} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${et`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?g`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${r}px">${t.text}</div>`:y}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==i)return;if(e.show_rooms){(!e.admins_only||t.user?.is_admin)&&this.showRooms(n,e.show_rooms);return}let r=null;try{let s=await ut();r=await this.handleSentence(t,n,s,e.text,e.speak),r===null&&this.sayVoice("error",P(t,"voice_none"))}catch(s){this.sayVoice("error",P(t,"voice_error",{msg:String(s?.message??s)}))}try{await ul(t,e.ask_id,r??"",r!==null)}catch{}}async onAnnounce(e){let t=this.hass;if(!t)return;let n=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(i=>i.trim().toLowerCase()===n))&&!oh.has(e.id)){oh.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await Sb(),await(await ut()).speak(t,e.message,Xe())}catch{}}}onReload(e){e.plan&&e.plan!==(this.planId??fe)||e.templates.length&&!(this.template&&e.templates.includes(this.template))||ih.has(e.id)||(ih.add(e.id),!(Date.now()-(window.fp3dReloadSent??0)<15e3)&&(this._announce=P(this.hass,"screen_reloading"),setTimeout(()=>location.reload(),500+Math.random()*4e3)))}openRoom(e){if(!this.roomId)return null;for(let t of e.floors){let n=oe(t).find(i=>i.id===this.roomId);if(n)return{floor:t,room:n}}return null}async roomAction(e,t,n){let i=()=>bu(t.floors,this.voiceArea??ca()),r=d=>{let u=t.floors.find(h=>h.id===d.floorId),p=u&&oe(u).find(h=>h.id===d.roomId);return u&&p?{floor:u,room:p}:null},s=n.room==="there"?this.openRoom(t):n.room==="here"?i():n.room?r(n.room):i()??this.openRoom(t);if(!s)return P(e,n.room==="there"?"voice_noroom_open":"voice_noroom");let a=s.room.name,l=async d=>{await Promise.all(d.map(u=>e.callService(u.domain,u.service,u.data)))};if(n.action==="clean"){let d=wi(e,s.room);return d?(await l([d]),P(e,"voice_clean_started",{room:a})):P(e,"voice_clean_none",{room:a})}let c=_i(e,s.floor,s.room);return c.length?(await l(c),P(e,"voice_off_done",{room:a,n:vi(c)})):P(e,"voice_off_nothing",{room:a})}async onMic(){let e=this.hass,t=this.building;if(!e||!t||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let n=(r,s)=>this.sayVoice(r,s);n("wait","\u2026"),this.tourToken++;let i;try{let r=window.AudioContext??window.webkitAudioContext;i=new r,i.resume().catch(()=>{})}catch{i=void 0}try{let r=await ut(),s=await r.listenOnce(e,()=>n("listen",P(e,"voice_listen")),Xe(),i);if(!s){n("error",P(e,"voice_none"));return}if(await this.handleSentence(e,t,r,s,!0)!==null)return;n("wait",`\u201C${s}\u201D \u2026`);let a=this.voiceArea??ca(),l=s,c=this.openRoom(t);c?.room.area_id&&r.saysThere(s,e.language)&&(a=c.room.area_id,l=r.withoutThere(s,e.language));let d=await r.converse(e,l,a);n("done",d?`\u201C${s}\u201D \u2013 ${d}`:`\u201C${s}\u201D`)}catch(r){let s=r,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",a?P(e,a):P(e,"voice_error",{msg:String(s?.message??s?.name??r)}))}}async handleSentence(e,t,n,i,r){let s=(u,p)=>this.sayVoice(u,p),a=this.replay?null:this.styleSentence(i);if(a)return s("done",`\u201C${i}\u201D \u2013 ${a}`),r&&n.speak(e,a,Xe()),a;let{devices:l,items:c}=this.spokenDevices(e,t,n.SYNONYMS),d=this.replay?null:n.roomIntent(i,t,e.language,u=>u.area_id?e.areas?.[u.area_id]?.name:null);if(d){let u=await this.roomAction(e,t,d);return s("done",`\u201C${i}\u201D \u2013 ${u}`),r&&n.speak(e,u,Xe()),u}{let u=n.showTarget(i,t,l,_=>_.area_id?e.areas?.[_.area_id]?.name:null);if(u){let _=u.kind==="house"?P(e,"all_floors"):u.kind==="cameras"?P(e,"camera_wall_title"):u.name;if(s("done",`\u201C${i}\u201D \u2192 ${_}`),this.directing.touch(Date.now()),u.kind==="cameras")B("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(u.kind==="device"){let m=c.get(u.id);u.camera&&u.entity&&B("camera_cockpit")?this.lookThrough(u.entity):m&&this.goTo(m)}else u.kind==="house"?this.fire("floor-tap",{floorId:null}):u.kind==="floor"?this.fire("floor-tap",{floorId:u.floorId}):(this.floorId!==u.floorId&&this.fire("floor-tap",{floorId:u.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:u.floorId,roomId:u.roomId}),60));return P(e,"voice_showing",{name:_})}let p=await e.callWS({type:"neonplan3d/locate/ask",text:i,language:e.language}).catch(()=>null);if(p)return s("done",`\u201C${i}\u201D \u2013 ${p.text}`),p.rooms.length&&(!p.admins_only||e.user?.is_admin)&&this.showRooms(t,p.rooms),r&&n.speak(e,p.text,Xe()),p.text;let h=this.moduleHost(e,t,n.SYNONYMS,_=>n.showTarget(_,t,l,m=>m.area_id?e.areas?.[m.area_id]?.name:null)),b=await lp(i,h);if(b){s("done",b.text?`\u201C${i}\u201D \u2013 ${b.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),b.highlight?.length&&this.viewer?.flashDevices(b.highlight);let _=b.focus,m=b.spoken??b.text??"";if(b.tour?.length){let w=r&&b.speak!==!1?v=>n.speak(e,v,Xe()):null,k=b.spoken??b.text;return k&&w&&await w(k),this.runTour(b.tour,t,c,w),m}if(_?.roomId&&_.floorId)this.floorId!==_.floorId&&this.fire("floor-tap",{floorId:_.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:_.floorId,roomId:_.roomId}),60);else if(_?.floorId&&!_.entity&&!_.furnitureId)this.fire("floor-tap",{floorId:_.floorId});else if(_?.entity||_?.furnitureId){let w=c.get(_.entity??`furniture:${_.furnitureId}`);w&&this.goTo(w)}return b.text&&b.speak!==!1&&r&&n.speak(e,b.text,Xe()),m}}return null}spokenDevices(e,t,n){let i=this.findIndex??=Li(e,t),r=new Map(t.floors.flatMap(u=>oe(u).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of t.floors){let p=oe(u);for(let h of u.furniture){if(Pb.has(h.type))continue;let b=this.furnitureLinks.get(h.id),_=b?.entity??b?.power??null,m=_??`furniture:${h.id}`,w=p.find(z=>z.points.length>=3&&V([h.x,h.z],z.points)),k=ke(e,h.type),v=[h.name,...h.aliases??[],k,_?K(e,_):null,...n[h.type]??[]].filter(z=>!!z),f=h.name||(_?K(e,_):k);s.push({id:m,entity:_,name:f,names:v,room:w?.name??"",camera:!!_&&N(_)==="camera"});let M=(h.type==="plant"||gs(h.type))&&!!h.moisture&&h.moisture!=="none",x=ks(b?.entity?e.states[b.entity]:void 0,b?.power?de(e.states[b.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),I=B("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!x?ys(e.states[h.remaining]):null;a.push({id:m,entity:_,name:f,names:v,room:w?.name??"",floorId:u.id,roomId:w?.id??null,power:b?.power??null,type:h.type,remaining:I,thirsty:M&&B("household")?ws(h,e):null}),_?c.add(_):l.set(m,{kind:"device",name:f,where:"",floorId:u.id,roomId:w?.id??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let d=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&r.get(p.roomId)||"",b=d.get(u),_=[b?.name,...b?.aliases??[],p.name].filter(m=>!!m);s.push({id:u,entity:u,name:p.name,names:_,room:h,camera:N(u)==="camera"}),a.push({id:u,entity:u,name:p.name,names:_,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,t){let n=[];for(let i of t.floors)for(let r of i.openings){let s=this.openingLinks?.get(r.id)?.lock;if(!s)continue;let a=this.openingSpot(t,r.id,!0);if(!a)continue;let l=e.states[s];n.push({id:s,floorId:i.id,roomId:r.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:jt("lock"),name:K(e,s),text:l?_e(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||Y(l),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let i of e.floors){let r=i.openings.find(w=>w.id===t);if(!r)continue;let s=Vc(r,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=De(a)>0?[-u[1],u[0]]:[u[1],-u[0]],b=r.offset;if(n){let w=u[0]*h[1]-u[1]*h[0]>0;b=r.offset-r.width/2+oc(r,r.hinge==="left"===w)}let[_,m]=Jo(s.room,s.edge,b);return{floorId:i.id,x:_+h[0]*.2,z:m+h[1]*.2,y:Math.max(.5,r.sill+r.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>({roomId:l,floorId:e.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let r=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};r?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of n.entries()){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}r?.removeEventListener("pointerdown",s)}async runTour(e,t,n,i){let r=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(d=>{if(d.openingId){let p=this.openingSpot(t,d.openingId);return p?{...p,entity:null,say:d.say,inside:!0}:null}let u=n.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(r!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),r!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),r!==this.tourToken))break;let u=d.say&&i?await i(d.say):!1;if(r!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,t){let n=[],i=a=>P(e,a);for(let a of t.floors){let l=new Map(oe(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",p=it(e,d,c.type),h=zc(p,c.type),b=!h&&(p.tilt>.02||p.tilt2>.02);for(let _ of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])_&&_!=="none"&&n.push({id:c.id,entity:_,kind:u,name:i(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:h,tilted:b})}}let r=t.settings.roof?.windows??[],s=r.length?new Map(St(t).map(a=>[a.key,a])):null;for(let a of r){let l=nh(e,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(m=>!!m&&m!=="none"),p=u.map(m=>Te(e,m)).filter(m=>!!m).map(m=>t.floors.flatMap(w=>w.rooms.filter(k=>k.area_id===m).map(k=>({floor:w,room:k})))).find(m=>m.length===1)?.[0],h=p?null:is(t,s?.get(a.face),a),b=p?.floor??h?.floor??t.floors[t.floors.length-1],_=p?.room??(h?b?.rooms.find(m=>m.id===h.roomId):void 0);for(let m of u)n.push({id:a.id,entity:m,kind:"roof_window",name:a.name||i("roof_window"),room:_?.name??"",floorId:b?.id??"",roomId:_?.id??null,open:c,tilted:d})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,i){let r=null,s=()=>r??=this.spokenDevices(e,t,n).spoken,a={api:1,stage:2,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let c=i(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>!!this.hass?.user?.is_admin&&!this.ro&&!this.noSave,updateBuilding:l=>{let c=this.building;if(!c||!this.hass||this.ro||this.noSave||!this.hass.user?.is_admin)return;let d=structuredClone(c);l(d),this.building=d,Kn(this.hass,d,this.planId??void 0).catch(u=>this.serviceFailed("neonplan3d/building/save",u))},callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>ic(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(p=>p.id===l),u=d?.outdoor.find(p=>p.id===c);return!d||!u||u.type!=="pool"?null:{y:cn(d,u),floorY:Un(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(p=>p.id===l);return u?nt(u,c,d):0},openPopup:(l,c)=>this.openModulePopup(l,c),closePopup:()=>this.closeModulePopup(),imageUrl:l=>this.pictureUrl(l),people:()=>this.lastPersons.flatMap(l=>{let c=this.building?.floors.find(d=>d.id===l.floorId)?.rooms.find(d=>d.id===l.roomId);return c?[{id:l.id,floorId:l.floorId,roomId:l.roomId,roomName:c.name}]:[]}),look:()=>this.effectiveTheme()==="day"?"light":"dark",lowPower:()=>this._low,refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:ua,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??K(e,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>mp(a),weather:()=>ct(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await ut()).listenOnce(e,l,Xe())).trim()||null}catch{return null}},notify:l=>this.showNote(l),tour:(l,c)=>{let d=this.spokenDevices(e,t,n).items,u=c?p=>ut().then(h=>h.speak(e,p,Xe())):null;this.runTour(l,t,d,u)},occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t),cameras:()=>this.planCameras(e,t),pickSpot:l=>this.pickSpot(l)};return a}pickSpot(e){return new Promise(t=>{let n=this.viewer;if(!n)return t(null);clearTimeout(this.spotTimer);let i=r=>{clearTimeout(this.spotTimer),this._spotHint=null,t(r)};n.pickSpot(i),this._spotHint=e,this.spotTimer=setTimeout(()=>n.pickSpot(null),6e4)})}spotTimer;planCameras(e,t){return t.floors.flatMap(n=>n.placements.filter(i=>i.entity_id.startsWith("camera.")).map(i=>{let r=i.mount==="ceiling";return{entity:i.entity_id,floorId:n.id,x:i.x,z:i.z,height:r?n.height-.1:i.y??2.2,heading:i.rotation??0,tilt:i.tilt??(r?65:20),fov:i.fov??(r?120:90),reach:i.reach??(r?3:4.5),dome:r,detections:Ve(e,i.entity_id).map(s=>({sensor:s,kind:lo(e,s),on:e.states[s]?.state==="on"}))}}))}moduleFigures(e){let t=[];for(let n of this.scene){if(n.kind!=="figure")continue;let i=e.floors.find(s=>s.id===n.floorId);if(!i)continue;let r=n.look==="person";t.push({id:`module:${n.id}`,name:n.name,initials:r?"":n.look==="car"?"\u{1F697}":"\u{1F43E}",picture:null,floorId:n.floorId,roomId:xo(i,n.at[0],n.at[1])??"",x:n.at[0],z:n.at[1],color:n.color??(r?"#ff5fd2":"#3ee8ff"),...n.entity?{entity:n.entity}:{},...r?{}:{thing:!0}})}return t}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let i of this.lastPersons)i.roomId&&n.set(i.roomId,i);for(let i of t.floors)for(let r of i.rooms){if(n.has(r.id)||!r.area_id)continue;we(e,r.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(r.id,{floorId:i.id,roomId:r.id})}return[...n.values()]}planSpeakers(e,t){let n=[],i=new Set;for(let r of t.floors){let s=(a,l)=>oe(r).find(c=>c.points.length>=3&&V([a,l],c.points))?.id??null;for(let a of r.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!e.states[a.entity_id]||(i.add(a.entity_id),n.push({entity:a.entity_id,name:K(e,a.entity_id),floorId:r.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of r.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!e.states[l]||(i.add(l),n.push({entity:l,name:K(e,l),floorId:r.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:me(r,a)+a.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Xt())return[];let i=n.floors.find(r=>oe(r).some(s=>s.id===e));return i?Us(this.sceneHost(t,n),{floorId:i.id,roomId:e}).map(r=>({id:r.id,icon:r.icon,title:r.title})):[]}plainOf=null;drawnPlan="";condOf=null;shownSig="";conditioned(){let e=this.building,t=Ws(this.hass,e);this.shownSig=t;let n=Ai(e,this.rooms),i=!this.surroundings&&!!e?.settings.surroundings,r=`${t}|${n.join(",")}|${i}`;if(!e||!t&&!n.length&&!i)return e;if(this.condOf?.from===e&&this.condOf.sig===r)return this.condOf.to;let s=t?{...e,floors:e.floors.map(a=>({...a,furniture:a.furniture.filter(l=>Ns(this.hass,l))}))}:e;return n.length&&(s=Ri(s,n)),i&&s.settings.surroundings&&(s={...s,settings:{...s.settings,surroundings:null}}),this.condOf={from:e,sig:r,to:s},s}shownBuilding(){let e=this.conditioned();if(!e||!this.plain)return e;if(this.plainOf?.from===e)return this.plainOf.to;let t=i=>zr.has(i.type)||i.type==="stairwell"||!!ve(i.type)?.hole,n={...e,floors:e.floors.map(i=>({...i,furniture:i.furniture.filter(t)}))};return this.plainOf={from:e,to:n},n}openRoomSheet(e,t){let n=this.building?.floors.find(i=>i.rooms.some(r=>r.id===e));this._sheet={id:t,floorId:n?.id??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let i=this.sceneHost(e,t);return(n.roomId&&n.floorId?Us(i,{floorId:n.floorId,roomId:n.roomId}):Gs(i)).find(s=>s.id===n.id)??null}openModulePopup(e,t=6e4){clearTimeout(this.popupTimer),this._popup={id:e},this.popupValues={},this.popupTimer=setTimeout(()=>this._popup=null,t)}closeModulePopup(){clearTimeout(this.popupTimer),this._popup=null,this.popupValues={}}renderModulePopup(){let e=this.hass,t=this.building,n=this._popup;if(!e||!t||!n)return y;let i=dp(this.sceneHost(e,t)).find(l=>l.id===n.id);if(!i)return y;let r=()=>this.closeModulePopup(),s=l=>P(e,l),a=l=>{switch(l.kind){case"image":{let c=l.live&&B("camera_cockpit")&&t.settings.director?.live?this.liveFor(l.live):null;return c?g`<div class="fp3d-pop-big fp3d-pop-live">${c}</div>`:g`<img class="fp3d-pop-big" src=${l.src} alt="" />`}case"text":return g`<p class=${l.muted?"fp3d-sub":"fp3d-pop-text"}>${l.text}</p>`;case"heading":return g`<h4 class="fp3d-pop-h">${l.text}</h4>`;case"line":return g`<div class="fp3d-pop-line"><span>${l.text}</span>${l.sub?g`<span>${l.sub}</span>`:y}${l.note?g`<em>${l.note}</em>`:y}</div>`;case"groups":return l.groups.length?g`<div class="fp3d-pop-groups">
                ${l.groups.map(c=>g`<section class=${c.strong?"fp3d-pop-strong":""}>
                    <h4 role=${c.onToggle?"button":y} tabindex=${c.onToggle?0:y} @click=${()=>c.onToggle?.()}>${c.title} ${c.onToggle?g`<small>${c.open?"\u25BE":"\u25B8"}</small>`:y}</h4>
                    ${c.rows.map(d=>g`<div class="fp3d-pop-row ${d.leadStrong?"fp3d-pop-rowlive":""}" style=${d.color?`--cal:${d.color}`:""}>
                        <span class="fp3d-pop-lead">${d.lead}</span>
                        <span class="fp3d-pop-sum">${d.text}${d.sub?g`<small> · ${d.sub}</small>`:y}${c.open&&d.detail?g`<em>${d.detail}</em>`:y}</span>
                      </div>`)}
                  </section>`)}
              </div>`:g`<p class="fp3d-sub">${l.empty??""}</p>`;case"checklist":return g`<div class="fp3d-pop-todo">
            ${l.items.length?l.items.map(c=>g`<label class="fp3d-pop-todoitem ${c.done?"fp3d-pop-done":""}">
                    <input type="checkbox" .checked=${c.done} ?disabled=${this.ro} @change=${()=>{c.onToggle()}} />
                    <span>${c.text}</span>
                  </label>`):g`<p class="fp3d-sub">${l.empty??""}</p>`}
          </div>`;case"people":return g`<div class="fp3d-pop-people">
            ${l.items.map(c=>g`<div class="fp3d-pop-personrow ${c.bright?"fp3d-pop-bright":""}">
                ${c.picture?g`<img src=${c.picture} alt="" />`:g`<span class="fp3d-pop-initial">${c.name.slice(0,1)}</span>`}
                <div><b>${c.name}</b><span>${c.sub}</span></div>
              </div>`)}
          </div>`;case"tiles":return g`<div class="fp3d-pop-tiles">${l.items.map(c=>g`<div><small>${c.label}</small><span>${c.symbol}</span><b>${c.main}</b>${c.sub?g`<small>${c.sub}</small>`:y}</div>`)}</div>`;case"media":return g`<div class="fp3d-pop-media">
            ${l.picture?g`<img class="fp3d-pop-cover" src=${l.picture} alt="" />`:y}
            <div class="fp3d-pop-mediatext">
              <b>${l.title}</b>
              ${l.sub?g`<span>${l.sub}</span>`:y}
              ${l.buttons?.length?g`<div class="fp3d-pop-ctl">${l.buttons.map(c=>g`<button class="fp3d-chip" @click=${()=>{c.onTap()}}>${c.label}</button>`)}</div>`:y}
            </div>
          </div>`;case"form":{if(this.ro)return y;if(!l.open)return g`<button class="fp3d-btn fp3d-pop-addbtn" @click=${()=>l.onOpen()}>${l.button}</button>`;let c=u=>this.popupValues[`${l.id}:${u.id}`]??u.value,d=(u,p)=>this.popupValues={...this.popupValues,[`${l.id}:${u.id}`]:p};return g`<form class="fp3d-pop-form" @submit=${u=>{u.preventDefault(),l.onSubmit(Object.fromEntries(l.fields.map(p=>[p.id,c(p)])))}}>
            ${l.fields.map(u=>u.kind==="select"?g`<select class="fp3d-pop-in" @change=${p=>d(u,p.target.value)}>
                    ${(u.options??[]).map(p=>g`<option value=${p.id} ?selected=${p.id===c(u)}>${p.label}</option>`)}
                  </select>`:g`<input class="fp3d-pop-in" type=${u.kind} placeholder=${u.placeholder??""} .value=${c(u)} @input=${p=>d(u,p.target.value)} />`)}
            <div class="fp3d-pop-ctl"><button class="fp3d-btn fp3d-primary" type="submit">${l.submit}</button><button class="fp3d-btn" type="button" @click=${()=>l.onCancel()}>${s("cancel")}</button></div>
          </form>`}case"input":return this.ro?y:g`<form class="fp3d-pop-form" @submit=${c=>{c.preventDefault();let d=c.target.querySelector("input");l.onSubmit(d.value),d.value=""}}>
                <input class="fp3d-pop-in" placeholder=${l.placeholder} />
                <button class="fp3d-btn fp3d-primary" type="submit">${l.button}</button>
              </form>`;default:return y}};return g`<div class="fp3d-sheet-backdrop" @click=${r}></div>
      <div class="fp3d-sheet fp3d-pop ${i.wide?"fp3d-pop-wide":""}" role="dialog" aria-label=${i.title}>
        <header><span>${i.icon?`${i.icon} `:""}${i.title}</span><button class="fp3d-sheet-x" aria-label=${s("close")} @click=${r}>✕</button></header>
        ${i.sections.map(a)}
      </div>`}renderSheet(){let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return y;let n=this.currentSheet(e,t);if(!n)return y;let i=d=>P(e,d),r=this._sheet.roomId?t.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("NeonPlan 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&n.input&&a(()=>n.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=i("sheet_listening");let p=await this.sceneHost(e,t).listen?.(()=>d.placeholder=i("sheet_listening"));d.placeholder=n.input?.placeholder??"",p?d.value=p:this.showNote(i("sheet_mic_failed"))};return g`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${r?` \xB7 ${r.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?g`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(d=>g`<button class="fp3d-chip" aria-pressed=${d.id===n.choice.value} @click=${()=>{n.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:y}
        ${n.chips?.length?g`<div class="fp3d-sheet-chips">${n.chips.map(d=>g`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:y}
        ${n.input?g`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${n.input.mic?g`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:y}
        ${n.lines?.length?g`<div class="fp3d-sheet-lines">${n.lines.map(d=>g`<p>${d}</p>`)}</div>`:y}
        ${e.user?.is_admin&&!this.ro&&js().length?g`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${i("view_settings")}</button>`:y}
      </div>`}setPlanSettings(e){let t=this.building;if(!t||!this.hass?.user?.is_admin||this.ro||this.noSave)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,Kn(this.hass,n,this.planId??void 0).catch(i=>this.serviceFailed("neonplan3d/building/save",i))}renderSettings(){let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return y;let n=d=>P(e,d),i=!!e.user?.is_admin&&!this.ro&&!this.noSave,r=t.settings,s=(d,u,p,h)=>g`<label class="fp3d-set-check" title=${h?n(h):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!i} @change=${b=>this.setPlanSettings(p(b.target.checked))} /> ${n(d)}</label
      >`,a=this.sceneHost(e,t),l=bt(),c=js().map(d=>{let u=fp(d,a);if(!u.length||u[0].kind==="heading")return u;let p=l.find(b=>b.id===d);return[{kind:"heading",text:p?Ol(p,e.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return g`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?y:g`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sky",r.sky!==!1,d=>({sky:d}),"sky_hint")}
        ${s("flyin",!!r.flyin,d=>(d&&setTimeout(()=>this.maybeFlyIn(!0),300),{flyin:d||void 0}),"flyin_hint")}
        ${s("sun_shadow",r.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${r.sun_shadow!==!1?g`<label class="fp3d-set-field" title=${n("sun_arc_hint")}
              >${n("sun_arc")}
              <select ?disabled=${!i} @change=${d=>this.setPlanSettings({sun_arc:d.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${r.sun_arc!=="plot"}>${n("sun_arc_house")}</option>
                <option value="plot" ?selected=${r.sun_arc==="plot"}>${n("sun_arc_plot")}</option>
              </select></label
            >`:y}
        ${s("window_glow",r.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${ia(Ki)?g`<p class="fp3d-set-note">${n("gpu_safe_note")}</p>`:y}
        ${s("sun_patches",r.sun_patches!==!1,d=>({sun_patches:d}))}
        ${this.renderGlassSize(n,i,r)}
        <h4>${n("view_settings_control")}</h4>
        ${s("tap_in_room",!!r.tap_in_room,d=>({tap_in_room:d}),"tap_in_room_hint")}
        ${s("right_click_back",!!r.right_click_back,d=>({right_click_back:d}),"right_click_back_hint")}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",r.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!r.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",r.alert_names!==!1,d=>({alert_names:d}))}
        ${c.map(d=>g`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(e,u,i))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderGlassSize(e,t,n){let i=n.roof.hologram??qe,r=[.75,1,1.25,1.5,2],s=r.includes(i.size)?r:[...r,i.size].sort((a,l)=>a-l);return g`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!t} @change=${a=>this.setPlanSettings({roof:{...n.roof,hologram:{...i,size:Number(a.target.value)}}})}>
        ${s.map(a=>g`<option value=${a} ?selected=${a===i.size}>${Math.round(a*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,t,n){switch(t.kind){case"heading":return g`<h4>${t.text}</h4>`;case"text":return g`<p class="fp3d-set-note">${t.text}</p>`;case"check":return g`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${i=>t.set(i.target.checked)} /> ${t.label}</label>`;case"select":return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>t.set(i.target.value)}>
            ${t.options.map(i=>g`<option value=${i.id} ?selected=${i.id===t.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(e.states).filter(r=>t.filter(r)).sort((r,s)=>K(e,r).localeCompare(K(e,s)));return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>{let s=r.target.value;t.set(s===""?null:s)}}>
            <option value="" ?selected=${!t.value}>${t.auto?P(e,"entity_auto",{name:K(e,t.auto)}):"\u2014"}</option>
            ${i.map(r=>g`<option value=${r} ?selected=${r===t.value}>${K(e,r)}</option>`)}
          </select></label
        >`}case"lines":return _u(t.value,!n,{label:t.label,placeholder:t.placeholder??P(e,"lines_new"),add:P(e,"lines_add"),remove:P(e,"delete")},i=>t.set(i));case"button":return g`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?g`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(i=>oe(i).map(r=>[r.id,r.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:K(e,i.entity),...i.text?{text:i.text}:{},room:i.roomId?n.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(e,t){if(!B("auto_pro"))return[];let n=[];for(let i of t.floors)for(let r of i.furniture){if(r.type!=="parking"||!r.car)continue;let s=zn(e,r),a=to(e,r),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!Hi.has(l.state.toLowerCase()));n.push({name:r.name||(s?ke(e,s):ke(e,"car")),spot:r.id,floorId:i.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let t=e.kind==="light"&&e.value<=0;return g`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${K(this.hass,e.entity)}</span>
      <b>${t?P(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!B("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e,ready:!1}:this._through={entity:e,back:t.getView(),ready:!1},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r),setTimeout(()=>{this._through?.entity===e&&(this._through={...this._through,ready:!0})},r+950)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.endLook(),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?y:g`<div class="fp3d-pro" role="dialog">
      <b>${P(this.hass,"pro_title")}</b>
      <span>${P(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${P(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${Md(this.hass.language)} target="_blank" rel="noopener">${P(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${Id(this.hass.language,this._proHint)} target="_blank" rel="noopener">${P(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${P(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${P(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return y;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!B("camera_cockpit"))return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${P(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${P(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>N(d)==="camera"))];this.watchCameras(!0);let i=d=>{let u=e.states[d],p=u?.attributes.entity_picture;return p&&u&&!Y(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=d=>{let u=e.states[d];return g`${K(e,d)}${u?.state==="recording"?g` <b>● ${P(e,"state_recording")}</b>`:y}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=i(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${P(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${P(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?g`<img src=${d} alt="" />`:g`<div class="fp3d-wall-none">${P(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Lp(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return g`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${P(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${P(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=i(d),p=Ve(e,d).some(h=>e.states[h]?.state==="on");return g`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${P(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?g`<img src=${u} alt="" />`:g`<div class="fp3d-wall-none">${P(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(i=>{if(this.live!==t)return;let r=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,t.el=r,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}popOnDetection(e,t){let n=this.now();for(let i of Ve(e,t)){let r=e.states[i];if(r?.state!=="on"||!r.last_changed)continue;let s=Date.parse(r.last_changed),a=`${i}@${r.last_changed}`;if(this.popSeen.has(a)||n-s>3e4)continue;this.popSeen.add(a),this.popSeen.size>200&&(this.popSeen=new Set([...this.popSeen].slice(-50)));let l=e.states[t],c=l?.attributes.entity_picture,d=c&&!Y(l)?c.startsWith("data:")?c:`${c}${c.includes("?")?"&":"?"}fp3d=${Date.now()}`:null;this._camPop={entity:t,text:`${P(e,`detect_${lo(e,i)}`)} \xB7 ${K(e,t)}`,until:n+2e4,src:d},clearTimeout(this.camPopTimer),this.camPopTimer=setTimeout(()=>this._camPop=null,2e4);return}}camPopTimer;renderCamPop(){let e=this._camPop;return!e||!this.hass||this._through?y:g`<div class="fp3d-campop" role="status">
      <button class="fp3d-campop-img" title=${P(this.hass,"camera_popup_open")} @click=${()=>(this._camPop=null,this.lookThrough(e.entity))}>
        ${e.src?g`<img src=${e.src} alt="" />`:y}
      </button>
      <div class="fp3d-campop-bar"><span>${e.text}</span><button class="fp3d-chip" aria-label=${P(this.hass,"close")} @click=${()=>this._camPop=null}>✕</button></div>
    </div>`}zoomDef(){return En(this.building?.settings.styles_custom),this.zoomStyle?At(this.zoomStyle)??null:null}renderZoomBackground(){let e=this.morph,t=this.zoomDef()?.bg;return t?g`<div class="fp3d-zoom-bg" style="opacity:${e};background:linear-gradient(180deg, ${t[0]}, ${t[1]})"></div>`:y}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,i=n&&!Y(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,r=this.building?.settings.director?.live?this.liveFor(e.entity):null;return g`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${e.ready?r?g`<div class="fp3d-through-img fp3d-through-live">${r}</div>`:i?g`<img class="fp3d-through-img" src=${i} alt="" />`:y:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${K(this.hass,e.entity)}</span>
        <span class="fp3d-still">${r?"\u25CF Live":P(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${P(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${P(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${P(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${P(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>Me(this,e)):Me(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,i=t?.clientHeight??600,r=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return g`<div class="fp3d-menu-backdrop" @click=${()=>!this._menuFresh&&(this._menu=null)}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px;${this._menuFresh?"pointer-events:none":""}"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        ?slatInvert=${eo(this.building,e.entity)}
        .presets=${B("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${B("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let t=[];for(let n of this.scene){if(n.kind!=="marker")continue;let i=e.floors.find(d=>d.id===n.floorId),r=n.furnitureId?i?.furniture.find(d=>d.id===n.furnitureId):void 0;if(!i||!r&&!n.at)continue;let[s,a]=r?[r.x,r.z]:n.at,l=wp(n.path),c=vp(n.emoji);t.push({id:`module:${n.id}`,floorId:i.id,roomId:i.rooms.find(d=>d.points.length>=3&&V([s,a],d.points))?.id??null,x:s,z:a,y:n.y??(r?me(i,r)+r.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:n.name,text:n.text??"",active:!!n.active&&!this.dimmed,unavailable:!1,glow:n.color&&n.active&&!this.dimmed?{color:n.color,level:1}:null,pin:!0,full:!0,...r?{furnitureId:r.id}:{}})}return t}openModuleCard(e){let t=this.scene.find(r=>r.kind==="marker"&&r.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=this.building?.floors.find(r=>r.id===t.floorId),i=n?.furniture.find(r=>r.id===t.furnitureId);n&&i&&this.viewer?.focus(n.id,i.x,i.z,me(n,i)+i.h*.6,`module:${t.id}`)}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("popup:"))return this.openModulePopup(e.slice(6));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("gangs:")){let r=e.slice(6),s=this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===r);if(!s)return;let a=Bo(s);if(a.length===1)return this.onDeviceTap(a[0],t,n);if(a.length>1){this._gangMenu={furnitureId:r,x:t,y:n};return}let l=jn(s).find(c=>c.power&&c.power!=="none")?.power;l&&(this.ro?this.showInfo(l,t,n):Me(this,l));return}if(e.startsWith("hh:")){let[r,s]=e.slice(3).split("#");this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===s&&l.type==="waste_bin")?(this._binInfo={furnitureId:s,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(r,t,n):Me(this,r);return}if(this.ro){let r=this.building,s=r?r.energy.grid??Pn(r,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,t,n);return}if(e==="grid"){let r=this.building,s=r?r.energy.grid??Pn(r,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&Me(this,s);return}if(e.startsWith("detect:")){Me(this,e.slice(7));return}let i=N(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:t,y:n};return}if(i&&vc.has(i)){if(this.confirmSet.has(e)&&!confirm(P(this.hass,"confirm_switch",{name:K(this.hass,e)})))return;bi(this.hass,e)}else Me(this,e)}onOpeningTap(e,t,n,i){let r=this.openingLinks?.get(e);if(!r||!this.hass)return;if(r.lock&&!r.cover){this.ro?this.showInfo(r.lock,t,n):this._menu={entity:r.lock,x:t,y:n,doorLock:!0};return}let s=r.cover;if(!s)return;if(this.ro){this.showInfo(r.contact??s,t,n);return}if(i){Me(this,s);return}let a=this.hass.states[s];if(!a||Y(a)){Me(this,s);return}if(this.confirmSet.has(s)&&!confirm(P(this.hass,"confirm_switch",{name:K(this.hass,s)})))return;let[l]=s.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s})}effectiveTheme(){return this.effectiveStyle().base}effectiveStyle(){let e=this.hass,t=this.building?.settings,n=this._styleOverride,i=n&&(n.until===null||n.until>Date.now())?n.style:null,r=this.styleEntity||t?.style_entity||null;En(t?.styles_custom);let s={};for(let c of Zt())s[c.id]=[c.name??P(e,`style_${c.id}`)];let a=e?.states["sun.sun"]?.state,l=Vu({choice:this.theme,evening:this.themeEvening,night:this.themeNight,plan:t,entityState:r?e?.states[r]?.state??null:null,override:i,now:new Date,sunUp:a==="above_horizon"?!0:a==="below_horizon"?!1:null,names:s});return At(l)??At("neon")}setStyleOverride(e,t){let n=e===""||e==="reset"||e==="auto_reset"?null:At(e)?e:zi(e);this._styleOverride=n?{style:n,until:t?Date.now()+t*6e4:null}:null;try{this._styleOverride?localStorage.setItem(_a,JSON.stringify(this._styleOverride)):localStorage.removeItem(_a)}catch{}return this.viewer?.setStyle(this.effectiveStyle()),n}onStyle(e){let t=(this.screen??"").trim().toLowerCase();e.screens.length&&!e.screens.some(n=>n.trim().toLowerCase()===t)||this.setStyleOverride(e.style,e.minutes??null)}styleSentence(e){let t=this.hass,n=e.toLowerCase().trim(),i=/\b(stil|style|look|design|farbstil|ansicht|optik)\b/.test(n),r=n.replace(/\b(neon ?plan|haus|house|bitte|please|stelle?|schalte?|mach|setze?|set|switch|change|to|auf|zu|um|in|den|die|das|the|an|on|ein|als|modus|mode|stil|style|look|design|farbstil|ansicht|optik)\b/g," ").replace(/\s+/g," ").trim();if(i&&/^(zurück|zurueck|normal|reset|back|standard|automatisch|auto)$/.test(r))return this.setStyleOverride("reset",null),P(t,"style_reset");En(this.building?.settings.styles_custom);let s={};for(let l of Zt())s[l.id]=[l.name??P(t,`style_${l.id}`)];let a=zi(r,s);return a?(this.setStyleOverride(a,null),P(t,"style_set",{name:At(a)?.name??P(t,`style_${a}`)})):null}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}cardsOn(){return(this.showEnergy||!!this.holograms)&&this.holoVisible()&&!this._cardsQuiet}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!B("energy_pro")||!e||this.roomId||!this.showEnergy)return y;let t=i=>P(this.hass,i),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:re(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;n.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:re(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:re(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?re(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ne(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?y:n.map(i=>g`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=Ti[this.heatMode],t=this.heatMode==="temperature",n=t?wt(this.hass,e.stops[0][0]):e.stops[0][0],i=t?wt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?Oe(this.hass):e.unit,s=a=>P(this.hass,a);return g`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Gu(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ne(this.hass,n,0)} ${r}</span><span>${ne(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?y:g`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let t=e.config?.latitude,n=e.config?.longitude;if(typeof t!="number"||typeof n!="number")return null;let i=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Xp(Date.now(),t,n)),this.sunPathCache}skyColor(){let e=mo[this.effectiveTheme()]??mo.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(l,c)=>`rgb(${l.map((d,u)=>Math.round(d+(c[u]-d)*e)).join(",")})`,n=mo[this.effectiveTheme()]??mo.neon,i=this.effectiveStyle().bg,r=Np(this.building?.settings.backdrop)??(i?`linear-gradient(180deg, ${i[0]}, ${i[1]})`:null),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-room-scale:${Mb(this.building)};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return g`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.effectiveTheme()==="day"?"fp3d-bright":""} ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""} ${this._spotHint?"fp3d-picking":""}"
      style=${a}
    >
      ${this.renderZoomBackground()}
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderLegend()}
      ${this.clean&&this._find!==null&&!this._walk?this.renderFind():y}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:g`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCamPop()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderModulePopup()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?y:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()} ${this.building?.settings.surroundings?.on&&this.surroundings?g`<a class="fp3d-osm-credit" href=${yp} target="_blank" rel="noopener">© OpenStreetMap</a>`:y}
      ${this.renderMic()} ${this.renderFlyIn()}
      ${this._spotHint?g`<button class="fp3d-spot-hint" @click=${()=>this.viewer?.pickSpot(null)}>📍 ${this._spotHint} <span aria-hidden="true">✕</span></button>`:y}
      ${this._announce?g`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:y}
      ${this.pivotMark&&!this._walk?g`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Gi())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?P(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):P(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?g`(${this._stats.busy.map(l=>P(this.hass,`stats_busy_${l}`)).join(", ")})`:y} ·
            ${P(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${P(this.hass,this._stats.low?"stats_low":"stats_full",{r:ne(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ne(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[Pe,Re,ce`
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
        isolation: isolate;
      }
      /* under everything on the stage, above the stage's own background (the stage isolates its layers) */
      .fp3d-zoom-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
      }
      /* while a spot is picked, names and pins on the view let the tap through to the plan */
      .fp3d-picking .fp3d-labels,
      .fp3d-picking .fp3d-labels * {
        pointer-events: none !important;
      }
      .fp3d-picking .fp3d-canvas {
        cursor: crosshair;
      }
      /* a module asks for a spot: the hint stands at the top until the tap (a tap on it cancels) */
      .fp3d-spot-hint {
        position: absolute;
        top: calc(12px + env(safe-area-inset-top, 0px));
        left: 50%;
        transform: translateX(-50%);
        z-index: 25;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid rgba(62, 232, 255, 0.6);
        background: rgba(6, 12, 24, 0.85);
        color: #e6ecff;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 0 18px rgba(62, 232, 255, 0.25);
      }
      /* the real sky (drawn by the 3D view): first on the stage, so the zoom style's background lies over it */
      .fp3d-sky {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: -1;
        pointer-events: none;
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
        font-size: calc(11px * var(--fp3d-room-scale, 1));
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
      /* the house's size of the room names (idea: Banhammer1919) */
      .fp3d-pin[data-room] {
        font-size: calc(12.5px * var(--fp3d-room-scale, 1));
        padding: calc(5px * var(--fp3d-room-scale, 1)) calc(10px * var(--fp3d-room-scale, 1));
        border-radius: calc(10px * var(--fp3d-room-scale, 1));
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
      .fp3d-osm-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        z-index: 3;
        font-size: 10px;
        color: var(--fp3d-muted, rgba(200, 210, 230, 0.7));
        opacity: 0.75;
        text-decoration: none;
      }
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
      /* opened from the phone view's "More": above the line that says what needs a look */
      .fp3d-find-up {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
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
      .fp3d-pop {
        width: min(560px, calc(100% - 24px));
      }
      .fp3d-pop.fp3d-pop-wide {
        width: min(960px, calc(100% - 24px));
      }
      .fp3d-pop-big {
        display: block;
        width: 100%;
        max-height: calc(100vh - 160px);
        object-fit: contain;
        border-radius: 12px;
        background: #000;
      }
      .fp3d-pop-groups {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-pop-groups h4 {
        margin: 0 0 6px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-strong h4 {
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pop-row {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 10px;
        align-items: baseline;
        padding: 6px 0 6px 12px;
        border-left: 3px solid var(--cal, #37e0ff);
        margin-bottom: 4px;
      }
      .fp3d-pop-lead {
        font-variant-numeric: tabular-nums;
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-pop-sum {
        font-size: 15px;
      }
      .fp3d-pop-sum small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-media,
      .fp3d-pop-person {
        display: flex;
        gap: 16px;
        align-items: center;
      }
      .fp3d-pop-cover {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 12px;
        background: #000;
        flex: none;
      }
      .fp3d-pop-sym {
        font-size: 72px;
        line-height: 1;
        flex: none;
      }
      .fp3d-pop-mediatext {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-pop-mediatext b {
        font-size: 18px;
      }
      .fp3d-pop-mediatext span {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-ctl {
        display: flex;
        gap: 8px;
        margin-top: 6px;
      }
      .fp3d-pop-rowlive .fp3d-pop-lead {
        color: var(--fp3d-accent, #37e0ff);
        font-weight: 700;
      }
      .fp3d-pop-groups h4 {
        cursor: pointer;
      }
      .fp3d-pop-sum em {
        display: block;
        font-style: normal;
        font-size: 13px;
        color: var(--fp3d-muted, #8fa0c0);
        margin-top: 2px;
      }
      .fp3d-pop-form {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pop-in {
        flex: 1 1 140px;
        min-width: 0;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.06);
        color: inherit;
        font: inherit;
      }
      .fp3d-pop-addbtn {
        align-self: flex-start;
        margin-top: 4px;
      }
      .fp3d-pop-todo {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .fp3d-pop-todoitem {
        display: flex;
        gap: 12px;
        align-items: center;
        padding: 8px 6px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
      }
      .fp3d-pop-todoitem:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-pop-todoitem input {
        width: 22px;
        height: 22px;
        accent-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pop-done span {
        text-decoration: line-through;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-people {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .fp3d-pop-personrow {
        display: flex;
        gap: 12px;
        align-items: center;
        opacity: 0.6;
      }
      .fp3d-pop-personrow.fp3d-pop-bright {
        opacity: 1;
      }
      .fp3d-pop-personrow img,
      .fp3d-pop-initial {
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
      .fp3d-pop-personrow div {
        display: flex;
        flex-direction: column;
      }
      .fp3d-pop-personrow span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-pop-h {
        margin: 10px 0 4px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-line {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        align-items: baseline;
        font-size: 18px;
      }
      .fp3d-pop-line span + span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 14px;
      }
      .fp3d-pop-line em,
      .fp3d-pop-mediatext em {
        font-style: normal;
        color: var(--fp3d-accent, #37e0ff);
        font-size: 14px;
      }
      .fp3d-pop-waste {
        margin: 0;
      }
      .fp3d-pop-tiles {
        display: flex;
        gap: 10px;
        margin-top: 12px;
      }
      .fp3d-pop-tiles div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 8px 4px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-pop-tiles span {
        font-size: 26px;
      }
      .fp3d-pop-tiles small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-live {
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
      .fp3d-holo-more {
        display: block;
        margin: 6px 0 0 auto;
        padding: 2px 9px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 45%, transparent);
        border-radius: 9px;
        background: transparent;
        color: var(--fp3d-accent, #37e0ff);
        font: 600 11px var(--fp3d-font);
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-holo-mline {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* a bright style (Day, Homely, Architect's model, Pastel, Wood & paper): the darker glass of the module cards,
         so the light text stays readable over a light house and sky (#1126) */
      .fp3d-bright .fp3d-holo:not(.fp3d-holo-plain) {
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",va);function Ib(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${ne(o,Math.round(t))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(e.state);return{text:[_e(o,e),n].filter(Boolean).join(" \xB7 "),on:i}}function re(o,e){return Math.abs(e)>=1e3?`${ne(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function rh(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Pb=new Set(["rug","stairwell","grid_point","worktop"]);function Eb(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var _a="neonplan3d.style_override",sh="neonplan3d.module_full";function zb(){try{let o=JSON.parse(localStorage.getItem(sh)??"[]");return Array.isArray(o)?o.filter(e=>typeof e=="string"):[]}catch{return[]}}function wa(o,e,t={}){let n=["neon","homely","designed","custom"],i=Zt();return g`${t.none?g`<option value="" ?selected=${!e}>${o("style_none")}</option>`:y}
    ${t.auto||t.house?g`<optgroup label=${o("style_group_auto")}>
          ${t.house?g`<option value="house" ?selected=${e==="house"}>${o("style_house")}</option>`:y}
          ${t.auto?g`<option value="auto" ?selected=${e==="auto"}>${o("theme_auto")}</option>`:y}
        </optgroup>`:y}
    ${n.filter(r=>i.some(s=>s.group===r)).map(r=>g`<optgroup label=${o(`style_group_${r}`)}>
            ${i.filter(s=>s.group===r).map(s=>g`<option value=${s.id} ?selected=${e===s.id}>${s.name??o(`style_${s.id}`)}</option>`)}
          </optgroup>`)}`}function ah(o){return typeof o=="string"&&(o==="auto"||o==="house"||o.startsWith("my_")||Zt().some(e=>e.id===o))}var ya;function lh(){let o=new URL("./neonplan3d-locate.js?v=e47c485a4668",new URL(import.meta.url)).href;return ya??=import(o).catch(e=>{throw ya=void 0,e}),ya}var Tb=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function ch(o){let e=document.createElement("style");e.textContent=Tb;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,i="",r=!0,s=async(c,d={})=>{let u=o().hass;if(u){try{n=await u.callWS({type:"neonplan3d/locate/rec",action:c,...d}),i=""}catch(p){i=p.message??String(p)}a()}},a=()=>{let c=o().building,d=n,u=d?.mark?.room??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${r?"\u25BE":"\u25B8"}</span></h4>`;if(!r){t.innerHTML=p;return}let h=(d?.devices??[]).map(_=>{let m=_.t?Math.round(Date.now()/1e3-_.t):null;return`<div>\u231A ${Rt(_.title)}: ${m===null?"<small>noch nicht geh\xF6rt</small>":`${_.rssi} dBm \xB7 ${Rt(_.scanner??"")} <small>vor ${m} s</small>`}</div>`}).join(""),b=(c?.floors??[]).map(_=>`<div class="fl">${Rt(_.name)}</div>`+_.rooms.map(m=>`<button data-room="${Rt(m.id)}" data-name="${Rt(m.name)}" class="${u===m.id?"on":""}">${Rt(m.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${d?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${i?`<div style="color:#ff8fa3">${Rt(i)}</div>`:""}
      ${h||(d?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${d?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${Ab(Date.now()/1e3-d.mark.t)}</b> in <b>${Rt(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${b}`};t.addEventListener("click",c=>{let d=c.target.closest("button,h4");if(!d)return;let u=d.dataset.a;if(u==="toggle")r=!r,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&lh().then(b=>b.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function Ab(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Rt(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var dh="neonplan3d.print_seen";function uh(o,e){return o&&!e}function ph(){try{return localStorage.getItem(dh)==="1"}catch{return!0}}function hh(){try{localStorage.setItem(dh,"1")}catch{}}var xa;function Rb(){let o=new URL("./neonplan3d-timetravel.js?v=3beaa7acdfa9",new URL(import.meta.url)).href;return xa??=import(o).catch(e=>{throw xa=void 0,e}),xa}var Tn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),Rb().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var Fb={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},q={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},ka=class extends ae{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_printDot:{state:!0},_readyPacks:{state:!0},_shopConnected:{state:!0},_giftLater:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_walking:{state:!0},_overview:{state:!0},_site:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_roomBar:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_zoomStyle:{state:!0},_zoomLate:{state:!0},_zoomScope:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_phone:{state:!0},_phoneAsk:{state:!0},_nowMode:{state:!0},_solo:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};offersChecked=!1;watch=new $n(this);otherAlerts={at:0,list:[]};pendingRoom=null;nowLinked=!1;nowLinkOpen=!1;pendingLink=null;data=new dn(this);locateLab=null;tt=new Tn(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._printDot=!1,this._readyPacks=0,this._shopConnected=null,this._giftLater=!1,this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._walking=!1,this._overview=!1,this._site=new URLSearchParams(location.search).get("plan")==="site",this.data.switchPlan(new URLSearchParams(location.search).get("plan")??q.get("plan")),this._wallMode=q.get("walls")==="cut"?"cut":"auto",this._explode=q.get("explode")!=="0",this._keepRoof=q.get("roof")==="1",this._plain=q.get("plain")==="1";let e=q.get("roombar");this._roomBar=e==="rooms"||e==="all"?e:"off";let t=q.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=q.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=q.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let i=q.get("pinSize");this._pinSize=i==="small"||i==="large"?i:"normal";let r=q.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let s=q.get("theme");this._theme=ah(s)?s:"neon",this._zoomStyle=q.get("zoom_style")??"";let a=Number(q.get("zoom_late"));this._zoomLate=Number.isFinite(a)&&q.get("zoom_late")!==null?Math.min(100,Math.max(0,a)):50,this._zoomScope=q.get("zoom_scope")==="room"?"room":"all";let l=q.get("clock");this._clock=l==="tl"||l==="tr"||l==="bl"||l==="br"?l:"off";let c=q.get("accent");this._accent=c&&/^#[0-9a-f]{6}$/i.test(c)?c:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let d=q.get("floor_stack");this._floorStack=d==="stacked"||d==="single"?d:"dim",this._roomNames=q.get("room_names")!=="0",this._controlsRight=q.get("controls")==="right",this._keepView=q.get("keep_view")==="1",this._angleLock=q.get("angle_lock")==="1",this._trail=q.get("trail")==="1",this._cameraWall=!1,this._clean=q.get("clean")==="1",this._phone=q.get("phone")==="1",this._nowMode="bar",this._solo=q.get("phone_solo")==="1";let u=new URLSearchParams(location.search);u.get("view")==="now"&&(this.nowLinked=!0,this.nowLinkOpen=!0),(u.get("room")||u.get("show"))&&(this.pendingLink={room:u.get("room"),show:u.get("show")}),this._phoneAsk=q.get("phone")===null&&br(navigator.userAgent,Math.min(screen.width,screen.height),navigator.maxTouchPoints)==="phone",this._navWrap=q.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=q.get("weather")!=="0",this._director=ha(),this._micProbe=!1,this._voiceHere=aa(),this._screen=la()}t(e,t){return P(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!un(this.hass.language)&&Ko(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e,e==="extensions"&&this.printOpened(),Ot(e))}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if(this._site){if(!n)return;let i=nu(n,fe);this.pendingRoom={plan:i.plan,floorId:null,roomId:i.id},this._site=!1,i.plan===this.data.planId?this.requestUpdate():this.pickPlan(i.plan);return}if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,q.set("walls",e)}setRoomBar(e){this._roomBar=e,q.set("roombar",e)}setPlain(e){this._plain=e,q.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,q.set("roof",e?"1":"0")}setExplode(e){this._explode=e,q.set("explode",e?"1":"0")}followLink(){let e=this.pendingLink,t=this.data.building;if(!(!e||!t||!this.view3d())){if(this.pendingLink=null,e.room){let n=e.room.trim().toLowerCase();for(let i of t.floors){let r=oe(i).find(s=>s.id===e.room||s.name.trim().toLowerCase()===n);if(r){this._floorId=i.id,this._roomId=r.id;break}}}e.show&&setTimeout(()=>this.view3d()?.showNow({entity:e.show}),1200)}}get phoneOn(){return this._phone||this.nowLinked}phoneShell(){return this.renderRoot.querySelector("fp3d-phone-shell")}phoneExtras(){return[{id:"show",icon:"\u{1F441}",label:this.t("show_menu")},{id:"tt",icon:"\u23EA",label:this.t("tt_chip")},{id:"menu",icon:"\u2630",label:"Home Assistant"},{id:"off",icon:"\u{1F4F1}",label:this.t("nav_off")}]}phoneMore(e){e==="show"?this._showOpen=!0:e==="tt"?this.toggleTimeTravel():e==="menu"?this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0})):e==="off"&&this.setPhone(!1)}setPhone(e){this._phone=e,this._phoneAsk=!1,e||(this.nowLinked=!1),q.set("phone",e?"1":"0")}setQuality(e){this._quality=e,q.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.furniture.find(a=>a.id===e);s&&t(s,r)}this.data.edit(i)}editDevice(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===e);s&&t(s,r)}this.data.edit(i)}moveDevice(e){let{id:t,x:n,z:i}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=da(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:l})})}turnStep(){return N(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),i=n?.placements.find(u=>u.entity_id===e);if(!n||!i)return y;let r=N(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",c=r?pn(r,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,d=(u,p,h,b,_,m)=>g`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${b}
          max=${_}
          .value=${String(Math.round(p*100)/100)}
          @change=${w=>{let k=parseFloat(w.target.value.replace(",","."));Number.isFinite(k)&&m(Math.min(_,Math.max(b,k)))}}
        />
      </label>`;return g`${s?g`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>g`<option value=${u} ?selected=${u===(i.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:y}
      ${a?g`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${d(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${d(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:y}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??c)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?g`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?ke(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:i}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=da(a,s.x,s.z,n,i);Object.assign(s,{x:l,z:c});let d=Kp(a,s,r);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return y;let n=Oa(this.hass,this.data.building?.settings.units)==="imperial",i=l=>n?Na(l):String(Math.round(l*100)/100),r=l=>n?Wa(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,c)=>g`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${c}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[l])}
        @change=${d=>{let u=r(d.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(c=>c.id===e));return g`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&ec(t)?g`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??me(a,t))}
              @change=${l=>{let c=r(l.target.value)??NaN;Number.isFinite(c)&&c>=0&&this.editFurniture(e,d=>d.mount_y=Math.round(c*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?g`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){let t=this.data.building;if(!t)return;let n=e?null:this.view3d()?.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}openFunSettings(e="fun",t=null){this.setMode("editor");let n=0,i=()=>{let r=this.renderRoot.querySelector("fp3d-editor");r?.openSettings?r.openSettings(e,t):n++<60&&setTimeout(i,100)};this.updateComplete.then(i)}siteBuilding(){return this.watch.site(this.data)}showSite(){this.tt.active&&this.tt.stop(),this._site=!0,this._floorId=null,this._roomId=null,this._mode="view"}planBuildings(){return this.watch.all(this.data)}alertsElsewhere(){if(!this.hass||this.data.plans.length<2)return[];let e=Date.now();if(e-this.otherAlerts.at<2e3)return this.otherAlerts.list;let t=[];for(let[n,i]of this.watch.others)if(n!==this.data.planId)for(let r of di(this.hass,i).alerts)t.push({plan:n,alert:r});return this.otherAlerts={at:e,list:t},t}alertCounts(){let e=new Map;for(let{plan:t}of this.alertsElsewhere())e.set(t,(e.get(t)??0)+1);return e}pickPlan(e){this._site&&(this._site=!1,this._floorId=null,this._roomId=null),e!==this.data.planId&&(this.tt.active&&this.tt.stop(),q.set("plan",e),this._floorId=null,this._roomId=null,this.data.switchPlan(e))}showElsewhere(e,t){this.pendingRoom={plan:e,floorId:t.floorId,roomId:t.roomId},this.pickPlan(e)}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!B("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,r)=>P(this.hass,i,r)})}}updated(){this.data.plans.length>1&&this.watch.watch(this.hass,this.data),this.followLink(),this.nowLinkOpen&&this.phoneShell()&&(this.nowLinkOpen=!1,this.phoneShell().openList());let e=this.pendingRoom;if(e&&this.data.planId===e.plan&&this.data.building&&(this.pendingRoom=null,this._floorId=e.floorId??this.data.building.floors.find(n=>oe(n).some(i=>i.id===e.roomId))?.id??null,this._roomId=e.roomId),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&ps()&&(this.locateLab=ch(()=>({hass:this.hass,building:this.data.building}))),this.pendingTemplate!==null&&this.hass?.user&&this.data.building){let n=this.pendingTemplate;this.pendingTemplate=null,this.hass.user.is_admin&&this.openFunSettings("cards",n||null)}if(this.ttLinked||!this.data.building||!an()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let t=new URLSearchParams(location.search).get("tt");t!==null&&B("time_travel")&&this.toggleTimeTravel(t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey);let e=new URLSearchParams(location.search);e.get("tab")==="extensions"&&(this._mode="extensions"),e.get("settings")==="cards"&&(this.pendingTemplate=e.get("template")??"")}pendingTemplate=null;checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,gl(this.hass).then(e=>{this._shopConnected=!!e.active;let t=(e.packs??[]).some(n=>!/^(mastershort\.)?fun_|_sample$/.test(n.id));this._newOffers=e.active&&t?fl(e.offers??[]).length:0,this._printDot=uh(!!(e.active&&e.supporter),ph()),this._mode==="extensions"&&this.printOpened(),this._readyPacks=e.active?ml(e.updates??[]).length+(e.packs??[]).filter(n=>n.installed===null).length:0}).catch(()=>{}))}printOpened(){this._printDot&&(this._printDot=!1,hh())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!un(this.hass.language))return y;this.checkOffers();let e=this.data.building;En(e?.settings.styles_custom);let t=this.data.saveState;return g`
      <div class="fp3d-app ${(this._clean||this.phoneOn)&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Gi())}></fp3d-mic-probe>`:y}
        ${(this._clean||this.phoneOn)&&this._mode==="view"?y:g`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.data.plans.length>1||this.isAdmin&&this.data.plans.length>0?g`<fp3d-plan-picker
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
          ${this._overview?g`<fp3d-plan-overview
                .hass=${this.hass}
                .plans=${this.data.plans}
                .buildings=${this.planBuildings()}
                .current=${this.data.planId}
                @plan-pick=${n=>{this._overview=!1,this.pickPlan(n.detail.plan)}}
                @close=${()=>this._overview=!1}
              ></fp3d-plan-overview>`:y}
          ${this.isAdmin?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}${this._readyPacks?g`<span class="fp3d-badge" title=${this.t("ext_badge_ready_hint")}>⬇ ${this.t("ext_badge_ready",{n:this._readyPacks})}</span>`:this._newOffers?g`<span class="fp3d-badge" title=${this.t("offers_dot")}>${this.t("ext_badge_new",{n:this._newOffers})}</span>`:this._printDot?g`<span class="fp3d-badge" title=${this.t("print_dot_hint")}>${this.t("print_dot")}</span>`:y}
                </button>
              </div>`:y}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?g`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <button class="fp3d-chip" aria-pressed=${this._phone} title=${this.t("now_setting_hint")} @click=${()=>this.setPhone(!this._phone)}>📱 ${this.t("now_setting")}</button>
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>g`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("style")}>
                <label class="fp3d-style-pick" title=${this.t("style")}>
                  <span aria-hidden="true">🎨</span>
                  <select
                    aria-label=${this.t("style")}
                    @change=${n=>{this._theme=n.target.value,q.set("theme",this._theme)}}
                  >
                    ${wa(n=>this.t(n),this._theme,{auto:!0,house:!0})}
                  </select>
                </label>
                <label class="fp3d-style-pick" title=${this.t("zoom_style_hint")}>
                  <span aria-hidden="true">🔍</span>
                  <select
                    aria-label=${this.t("zoom_style")}
                    @change=${n=>{this._zoomStyle=n.target.value,q.set("zoom_style",this._zoomStyle)}}
                  >
                    <option value="" ?selected=${!this._zoomStyle}>${this.t("zoom_style_off")}</option>
                    ${wa(n=>this.t(n),this._zoomStyle,{})}
                  </select>
                </label>
                ${this._zoomStyle?g`<label class="fp3d-style-pick fp3d-zoom-late" title=${this.t("zoom_late_hint")}>
                      <span>${this.t("zoom_late_early")}</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        aria-label=${this.t("zoom_late_hint")}
                        .value=${String(this._zoomLate)}
                        @input=${n=>{this._zoomLate=Number(n.target.value),q.set("zoom_late",String(this._zoomLate))}}
                      />
                      <span>${this.t("zoom_late_late")}</span>
                    </label>
                    <label class="fp3d-style-pick" title=${this.t("zoom_scope_hint")}>
                      <select
                        aria-label=${this.t("zoom_scope_hint")}
                        @change=${n=>{this._zoomScope=n.target.value,q.set("zoom_scope",this._zoomScope)}}
                      >
                        <option value="all" ?selected=${this._zoomScope!=="room"}>${this.t("zoom_scope_all")}</option>
                        <option value="room" ?selected=${this._zoomScope==="room"}>${this.t("zoom_scope_room")}</option>
                      </select>
                    </label>`:y}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,q.set("accent",this._accent)}}
                  />
                  ${this._accent?g`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,q.set("accent","")}}
                      >
                        ↺
                      </button>`:y}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(n=>g`<button aria-pressed=${this._clock===n} title=${this.t(`clock_${n}`)} aria-label=${this.t(`clock_${n}`)} @click=${()=>{this._clock=n,q.set("clock",n)}}>
                      ${n==="off"?this.t("clock_off"):Fb[n]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(n=>g`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,q.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(n=>g`<button
                      aria-pressed=${this._pinSize===n}
                      @click=${()=>{this._pinSize=n,q.set("pinSize",n)}}
                    >
                      ${this.t(`pin_size_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>g`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,q.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?g`<button
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
                      ${this.data.building?.settings.start_view?g`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:y}`:y}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,q.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,q.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,q.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:y}
          ${this._mode==="editor"&&t!=="idle"?g`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?y:this.renderNotices()}
        ${this.data.error&&!e?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(this._site?this.siteBuilding()??e:e):y}
        ${this.renderGift()}
      </div>
    `}renderGift(){let e="fun_gifts_winter_2026";if(!this.isAdmin||this._giftLater||this._shopConnected===null||!this.data.packsLoaded||us.includes("fun_winter")||B("fun_winter")&&B("fun_pets"))return y;try{if(localStorage.getItem(`neonplan3d.news.${e}`)==="never")return y}catch{}let t=()=>{try{localStorage.setItem(`neonplan3d.news.${e}`,"never")}catch{}this._giftLater=!0},n=this._shopConnected;return g`<div class="fp3d-gift-veil" @click=${i=>i.target===i.currentTarget&&(this._giftLater=!0)}>
      <div class="fp3d-gift" role="dialog" aria-label=${this.t(n?"gift_title":"gift_title_free")}>
        <div class="fp3d-gift-pic">🎄 ❄️ 🐱 🐶</div>
        <h3>${this.t(n?"gift_title":"gift_title_free")}</h3>
        <p>${this.t(n?"gift_text":"gift_text_free")}</p>
        <div class="fp3d-gift-actions">
          ${n?g`<button class="fp3d-btn fp3d-primary" @click=${()=>(this._giftLater=!0,this.setMode("extensions"))}>⬇ ${this.t("gift_install")}</button>`:g`<a class="fp3d-btn fp3d-primary" href=${Sd(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>this._giftLater=!0}>🎁 ${this.t("gift_register")}</a>`}
          <button class="fp3d-btn" @click=${()=>this._giftLater=!0}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${t}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}renderNotices(){let e=this.data,t=[];for(let{plan:n,alert:i}of this.alertsElsewhere()){let r=this.watch.others.get(n);r&&t.push(g`<div class="fp3d-notice fp3d-notice-error">
          <span>⚠ ${this.t("plan_alert",{plan:kn(this.hass,e.plans,n),text:Et(this.hass,r,i)})}</span>
          <button class="fp3d-btn" @click=${()=>this.showElsewhere(n,i)}>${this.t("plan_alert_go")}</button>
        </div>`)}if(e.needsRestart&&(e.versionGap==="frontend"?t.push(g`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(g`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(g`<div class="fp3d-notice">
          <span>${this.t(e.draft.conflict?"draft_conflict":"draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?g`<div class="fp3d-notices">${t}</div>`:y}renderExtensions(){return this._editorReady?g`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @open-fun-settings=${()=>this.openFunSettings()}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
      @packs-ready=${e=>this._readyPacks=e.detail}
    ></fp3d-extensions>`:(cs().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?g`<fp3d-editor
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
      @director-here=${()=>this._director=ha()}
      @voice-here=${()=>{this._voiceHere=aa(),this._screen=la()}}
      @mic-probe=${()=>ut().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(cs().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(c=>c.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let t=e.floors.find(c=>c.id===this._floorId),n=t?[t]:e.floors,i=this.tt.active,r=dt("room_bar")?this._roomBar:"off",s=r!=="off"&&!i,a=this.phoneOn&&!i&&!this._walking,l=r==="off";return g`
      ${this._clean||this.phoneOn||!l&&e.floors.length<2?y:g`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?g`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(c=>g`<button
                  class="fp3d-chip"
                  aria-pressed=${c.id===this._floorId}
                  @click=${()=>{this._floorId=c.id,this._roomId=null}}
                >
                  ${c.name}
                </button>`)}
              ${l?g`<span class="fp3d-sep"></span>`:y}`:y}
        ${(l?n:[]).flatMap(c=>[n.length>1&&oe(c).some(d=>d.name.trim())?g`<span class="fp3d-nav-floor">${c.name}</span>`:y,...oe(c).filter((d,u,p)=>d.name.trim()&&!(d.outdoor&&p.findIndex(h=>h.outdoor&&h.area_id===d.area_id&&h.name===d.name)<u)).map(d=>g`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${d.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=c.id),this._roomId=d.id===this._roomId?null:d.id}}
            >
              ${d.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,q.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""} ${s?"fp3d-has-bar":""} ${a?`fp3d-phone fp3d-now-${this._nowMode}`:""}">
        <fp3d-view3d
          class="fp3d-body"
          @walk-change=${c=>this._walking=c.detail.walking}
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
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean||this.phoneOn}
          .cleanButton=${!this.phoneOn}
          .rooms=${a&&this._solo&&this._roomId?[this._roomId]:null}
          @clean-toggle=${()=>{this._clean=!this._clean,q.set("clean",this._clean?"1":"0")}}
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
          .zoomStyle=${this._zoomStyle}
          .zoomLate=${this._zoomLate}
          .zoomScope=${this._zoomScope}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${c=>this._selFurniture=c.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${c=>this._selDevice=c.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @status-change=${()=>this.phoneOn&&setTimeout(()=>this.phoneShell()?.requestUpdate(),0)}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${c=>{this._floorId=c.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId&&!this._walking&&!(a&&this._nowMode==="check")?g`<fp3d-room-panel
              ?walk=${!0}
              @walk-here=${()=>this.view3d()?.walkHere()}
              class="fp3d-room-panel"
              ?collapsible=${this.phoneOn}
              @camera-look=${c=>this.view3d()?.lookThrough(c.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(c=>oe(c)).find(c=>c.id===this._roomId)??null}
              .floor=${e.floors.find(c=>oe(c).some(d=>d.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${fn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${c=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,c.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${a?g`<fp3d-phone-shell
              .hass=${this.hass}
              .building=${e}
              .view=${()=>this.view3d()}
              .floorId=${this._floorId}
              .roomId=${this._roomId}
              .solo=${this._solo}
              .extras=${this.phoneExtras()}
              .watts=${c=>re(this.hass,c)}
              @phone-mode=${c=>this._nowMode=c.detail}
              @phone-room=${c=>{this._floorId=e.floors.length>1||c.detail.roomId?c.detail.floorId:null,this._roomId=c.detail.roomId}}
              @phone-solo=${c=>{this._solo=c.detail,q.set("phone_solo",this._solo?"1":"0")}}
              @phone-more=${c=>this.phoneMore(c.detail)}
            ></fp3d-phone-shell>`:y}
        ${this._phoneAsk&&!i?g`<div class="fp3d-now-ask" role="dialog">
              <span>${this.t("now_try")}</span>
              <button class="fp3d-chip" @click=${()=>this.setPhone(!0)}>${this.t("now_try_yes")}</button>
              <button class="fp3d-chip" @click=${()=>this.setPhone(!1)}>${this.t("now_try_no")}</button>
            </div>`:y}
        ${s?g`<fp3d-room-bar
              class="fp3d-room-bar"
              .hass=${this.hass}
              .building=${e}
              .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
              .roomId=${this._roomId}
              ?favorites=${r==="all"}
              @room-pick=${c=>{e.floors.length>1&&(this._floorId=c.detail.floorId),this._roomId=c.detail.roomId===this._roomId?null:c.detail.roomId}}
            ></fp3d-room-bar>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${this._clean||a&&!this._showOpen?y:g`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?g`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${dt("room_bar")?g`<div class="fp3d-seg" title=${this.t("room_bar_hint")}>
                <button aria-pressed=${this._roomBar==="off"} @click=${()=>this.setRoomBar("off")}>${this.t("room_bar_none")}</button>
                <button aria-pressed=${this._roomBar==="rooms"} @click=${()=>this.setRoomBar("rooms")}>${this.t("room_bar_rooms")}</button>
                <button aria-pressed=${this._roomBar==="all"} @click=${()=>this.setRoomBar("all")}>${this.t("room_bar_all")}</button>
              </div>`:y}
          ${e.floors.length>1&&!this._floorId?g`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:y}
          ${!this._floorId&&e.settings.roof.type!=="none"?g`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:y}
          ${e.floors.length>1&&this._floorId?g`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(c=>g`<button
                      aria-pressed=${this._floorStack===c}
                      @click=${()=>{this._floorStack=c,q.set("floor_stack",c)}}
                    >
                      ${this.t(`floor_stack_short_${c}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(c=>g`<button
                  aria-pressed=${this._heat===c}
                  @click=${()=>{this._heat=c,q.set("heat",c)}}
                >
                  ${this.t(c==="none"?"heat_off":`heat_short_${c}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,q.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,q.set("trail",this._trail?"1":"0")}}
          >
            ${B("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${B("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,q.set("weather",this._weather?"1":"0")}}
          >
            ${B("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:y}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${B("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:y}
        </div>`}
        ${this._furnish?g`<div class="fp3d-furnish-bar">
              ${this._selFurniture?g`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,c=>c.mirror=!c.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?g`<span>${K(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:g`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:y}
      </div>
    `}static styles=[Pe,Re,ce`
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
      .fp3d-style-pick {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 0 6px;
      }
      .fp3d-zoom-late {
        font-size: 12px;
        color: var(--fp3d-muted, var(--fp3d-text));
      }
      .fp3d-zoom-late input {
        width: 110px;
      }
      .fp3d-style-pick select {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 6px 8px;
        font: inherit;
        max-width: 230px;
      }
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
      /* a desktop shows a thin scrollbar while the pointer rests on the bar. Its room is kept all the time (an
         invisible thumb), so the bar does not grow on hover and the 3D view below does not jump; the bottom padding
         gives that room back (idea from TRusselo, #1053). Touch screens keep their overlay scrollbars. */
      @media (hover: hover) and (pointer: fine) {
        .fp3d-nav:not(.fp3d-nav-wrap) {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          padding-bottom: 3px;
        }
        .fp3d-nav:not(.fp3d-nav-wrap):hover {
          scrollbar-color: color-mix(in srgb, var(--fp3d-text) 35%, transparent) transparent;
        }
      }
      /* wrapped (several lines, scrolling up and down): the thin scrollbar on hover as before */
      .fp3d-nav-wrap:hover {
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
      /* the phone view: a bar at the bottom (Now, the rooms by floor, the blinds, More); the list is a page of its
         own above the bar, the house check a small card – the house and the list never share the screen */
      /* the view's own things step up above the bar; an open room's panel stands on it */
      .fp3d-phone fp3d-view3d {
        --fp3d-bottom-inset: calc(72px + env(safe-area-inset-bottom, 0px));
      }
      .fp3d-phone .fp3d-overlay {
        bottom: calc(76px + env(safe-area-inset-bottom, 0px));
      }
      .fp3d-phone .fp3d-room-panel {
        bottom: calc(70px + env(safe-area-inset-bottom, 0px));
        height: auto;
        max-height: calc(62% - 62px);
      }
      .fp3d-now-check fp3d-view3d {
        --fp3d-bottom-inset: 190px;
      }
      .fp3d-now-ask {
        position: absolute;
        left: 8px;
        right: 8px;
        top: 8px;
        z-index: 6;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 14px;
        background: var(--fp3d-panel-bg, rgba(13, 20, 34, 0.94));
        border: 1px solid var(--fp3d-line, rgba(120, 160, 255, 0.22));
        color: var(--fp3d-text, #e8f0ff);
      }
      .fp3d-now-ask span {
        flex: 1 1 180px;
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",ka);function Zi(o,e){let t=e?.trim(),n=o?.card_templates;return t?n?.find(i=>i.id===t)??n?.find(i=>i.aliases?.includes(t)):void 0}var Hb=["fill","height","fullscreen_button","plan"];function $a(o,e){let t=Zi(e,o.template);if(!t)return o;let n=Object.fromEntries(Hb.filter(i=>o[i]!==void 0).map(i=>[i,o[i]]));return{...t.config,...n,screen:t.config.screen||t.name,type:o.type,template:o.template}}function Yi(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var fh;function mh(){let o=new URL("./neonplan3d-card-editor.js?v=310f78f84169",new URL(import.meta.url)).href;return fh??=import(o),fh}function gh(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}function Cb(o){let e=o;for(let t=0;e&&t<40;t++){if(e.localName==="hui-grid-section")return!0;e=e.parentElement??e.getRootNode().host??null}return!1}var Sa=class extends ae{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_walking:{state:!0},_phoneMode:{state:!0},_solo:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0},_stretch:{state:!0}};yaml=null;appliedTemplate="";roomApplied=!1;cleanTimer;cellObserver=null;idleTimer;nightTimer;data=new dn(this);watch=new $n(this);yamlPlan=null;tt=new Tn(this);constructor(){super(),this._roomId=null,this._walking=!1,this._phoneMode="bar";let e=localStorage.getItem("neonplan3d.phone_solo");this._solo=e===null?null:e==="1",this._floorId=void 0,this._walls=gh(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1,this._stretch=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!B("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(i,r)=>P(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this.homeRoom(),this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){oo(e)}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};preview=!1;connectedCallback(){super.connectedCallback(),this.preview||Ot("card"),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.cellObserver??=new ResizeObserver(()=>{let e=this._config?.height??420,t=!this._config?.fill&&this.clientHeight>e+4&&Cb(this);t!==this._stretch&&(this._stretch=t)}),this.cellObserver.observe(this),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Yi(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.cellObserver?.disconnect(),this.cellObserver=null,this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await mh(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this.yaml=e,e.plan!==this.yamlPlan&&(this.yamlPlan=e.plan,this.roomApplied=!1,this._floorId=void 0,this._roomId=null,this.data.switchPlan(e.plan==="site"?fe:e.plan??null)),this.appliedTemplate=this.templateKey(),this.applyConfig($a(e,this.data.building))}templateKey(){let e=Zi(this.data.building,this.yaml?.template);return e?JSON.stringify([e.name,e.config]):""}applyConfig(e,t){let n=i=>!t||JSON.stringify(t[i])!==JSON.stringify(e[i]);this._config=e,n("floor")&&(this._floorId=void 0),(n("room")||n("rooms"))&&(this.roomApplied=!1),n("rooms")&&(this._floorId=void 0),n("walls")&&(this._walls=gh()),n("heatmap")&&(this._heat=null),n("explode")&&(this._explode=null),this._orbit=!1,this._night=Yi(e.night,this.hass),n("controls_hidden")&&(this._clean=e.controls_hidden===!0),(n("controls_hide_after")||n("controls_hidden"))&&this.armClean(),(n("idle_return")||n("idle_orbit"))&&this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(this.yaml?.template){let t=this.templateKey();t!==this.appliedTemplate&&(this.appliedTemplate=t,this.applyConfig($a(this.yaml,this.data.building),this._config))}if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),un(this.hass.language)||Ko(this.hass.language).then(()=>this.requestUpdate());let t=Yi(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get shownRooms(){return Ai(this.data.building,this._config?.rooms)}get roomsLocked(){return this.shownRooms.length>0&&this._config?.rooms_lock!==!1}get roomFloors(){let e=new Set(this.shownRooms);return(this.data.building?.floors??[]).filter(t=>oe(t).some(n=>e.has(n.id))).map(t=>t.id)}homeRoom(){if(this._config?.room)return this._config.room;let e=this.shownRooms;return e.length===1&&this._config?.room_panel!==!1?e[0]:null}allowed(e){return!e||!this.roomsLocked||this.shownRooms.includes(e)}roomsOf=null;shownBuilding(e){let t=this.shownRooms;if(!t.length)return e;let n=t.join(",");return(this.roomsOf?.from!==e||this.roomsOf.key!==n)&&(this.roomsOf={from:e,key:n,to:Ri(e,t)}),this.roomsOf.to}get canSwitch(){return this.shownRooms.length?this.roomFloors.length>1:!this._config?.floor||this.thumbs}get thumbs(){return this.shownRooms.length?!1:this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,t=this._floorId===void 0?this._config?.floor??null:this._floorId,n=this.roomFloors;return this.shownRooms.length?n.length===1?n[0]:t&&n.includes(t)?t:null:e&&e.floors.length===1?e.floors[0].id:e?.floors.some(i=>i.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}get isSite(){return this._config?.plan==="site"}updated(){this.isSite&&this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=this.shadowRoot?.querySelector("fp3d-view3d");if(e){let t=Math.min(...[...this.shadowRoot?.querySelectorAll(".fp3d-card-full")??[]].map(i=>i.offsetLeft),1/0),n=Number.isFinite(t)?Math.max(104,e.clientWidth-t+8):104;e.style.getPropertyValue("--fp3d-walk-right")!==`${n}px`&&e.style.setProperty("--fp3d-walk-right",`${n}px`)}}render(){if(this.hass&&!un(this.hass.language))return y;let e=this.isSite?this.watch.site(this.data)??this.data.building:this.data.building,t=this._config?.height??420,n=this._config,i=e?this.homeRoom():null;!this.roomApplied&&e&&i&&(this.roomApplied=!0,e.floors.some(x=>oe(x).some(I=>I.id===i))&&(this._roomId=i));let r=this.shownRooms,s=r.length===1?e?.floors.flatMap(x=>oe(x)).find(x=>x.id===r[0])?.area_id??null:null,a=this.currentFloor(),l=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!a&&(e?.floors.length??0)>1,c=x=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(x),d=["temperature","humidity","co2"].filter(x=>c(x)),u=this._walls??n?.walls??"auto",p=this._heat??n?.heatmap??"none",h=this._explode??n?.explode??!0,b=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":this._stretch?"100%":`${t}px`,_=!!e&&!this._clean&&n?.phone!==!0&&(l||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),m=this.tt.active,w=!!e&&!!n?.room_bar&&n.phone!==!0&&dt("room_bar")&&!m&&!(this._roomId&&n.room_panel!==!1),k=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,v=n?.phone===!0&&!!e&&!m&&!this._walking,f=x=>P(this.hass,x),M=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return g`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${M?`--fp3d-accent:${M}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${m?"fp3d-tt":""} ${v?"fp3d-phone":""}" style="height:${b}">
        ${e&&e.floors.some(x=>x.rooms.length)?g`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .planId=${this.isSite?null:this.data.planId}
              .noSave=${this.isSite}
              .rooms=${n?.phone===!0&&(this._solo??n.phone_solo===!0)&&this._roomId?[this._roomId]:r.length?r:null}
              .packs=${this.data.packs}
              .floorId=${a}
              .roomId=${this._roomId}
              .wallMode=${u}
              .explode=${h}
              .keepRoof=${n?.roof_fade===!1}
              .plain=${n?.plain===!0}
              .surroundings=${n?.surroundings!==!1}
              .hideRoof=${n?.roof===!1||r.length>0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .pinSize=${this._config?.marker_size??"normal"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              @walk-change=${x=>this._walking=x.detail.walking}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((x,I)=>({id:`card_${I}`,...x}))??null}
              .heatMode=${p}
              .theme=${this._config?.theme??"neon"}
              .zoomStyle=${this._config?.zoom_style??null}
              .zoomLate=${this._config?.zoom_late??null}
              .zoomScope=${this._config?.zoom_scope??null}
              .themeEvening=${this._config?.theme_evening??null}
              .themeNight=${this._config?.theme_night??null}
              .styleEntity=${this._config?.style_entity??null}
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
              .clean=${this._clean||v}
              .cleanButton=${k&&!v}
              @status-change=${()=>v&&setTimeout(()=>this.shadowRoot?.querySelector("fp3d-phone-shell")?.requestUpdate(),0)}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${m?`--fp3d-bottom-inset: ${_?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:_?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${x=>{if(this.allowed(x.detail.roomId)){if(this.canSwitch&&(e?.floors.length??0)>1&&x.detail.floorId&&this.currentFloor()!==x.detail.floorId){if(this.roomsLocked&&!this.roomFloors.includes(x.detail.floorId))return;this._floorId=x.detail.floorId,this._roomId=null;return}x.detail.roomId&&(this._roomId=x.detail.roomId===this._roomId?null:x.detail.roomId)}}}
              @floor-tap=${x=>{this.roomsLocked&&x.detail.floorId&&!this.roomFloors.includes(x.detail.floorId)||(this._floorId=x.detail.floorId,this._roomId=null)}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(e?P(this.hass,"no_building"):P(this.hass,"loading"))}</p>`}
        ${e&&n?.template&&!Zi(e,n.template)?g`<div class="fp3d-card-tpl-missing">${P(this.hass,"card_template_missing",{name:n.template})}</div>`:y}
        ${w?g`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${_?54:8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(e)}
              .floorId=${a}
              .roomId=${this._roomId}
              ?favorites=${n?.room_bar_favorites===!0}
              @room-pick=${x=>{if(this.allowed(x.detail.roomId)){if(x.detail.floorId!==this.currentFloor()){if(!this.canSwitch)return;this._floorId=x.detail.floorId}this._roomId=x.detail.roomId===this._roomId?null:x.detail.roomId}}}
            ></fp3d-room-bar>`:y}
        ${this._roomId&&e&&this._config?.room_panel!==!1&&!this._walking&&!(v&&this._phoneMode==="check")?g`<fp3d-room-panel
              ?walk=${this._config?.walk!==!1}
              @walk-here=${()=>this.view3d()?.walkHere()}
              @camera-look=${x=>this.view3d()?.lookThrough(x.detail.entity)}
              class="fp3d-card-panel"
              ?collapsible=${v}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${m}
              .room=${e.floors.flatMap(x=>oe(x)).find(x=>x.id===this._roomId)??null}
              .floor=${e.floors.find(x=>oe(x).some(I=>I.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${fn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${x=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,x.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${v&&e?g`<fp3d-phone-shell
              .hass=${this.hass}
              .building=${e}
              .view=${()=>this.view3d()}
              .floorId=${this._floorId??null}
              .roomId=${this._roomId}
              .solo=${this._solo??n?.phone_solo===!0}
              .hide=${n?.phone_hide??[]}
              .start=${n?.phone_start}
              .places=${n?.phone_places}
              @phone-link=${x=>oo(x.detail)}
              .extras=${n?.dashboard?[{id:"dash",icon:"\u2302",label:n.dashboard_label||n.dashboard}]:[]}
              .watts=${x=>re(this.hass,x)}
              @phone-mode=${x=>this._phoneMode=x.detail}
              @phone-room=${x=>{this.allowed(x.detail.roomId)&&(this._floorId=e.floors.length>1||x.detail.roomId?x.detail.floorId:null,this._roomId=x.detail.roomId)}}
              @phone-solo=${x=>{this._solo=x.detail;try{localStorage.setItem("neonplan3d.phone_solo",this._solo?"1":"0")}catch{}}}
              @phone-more=${x=>x.detail==="dash"&&n?.dashboard&&oo(n.dashboard)}
            ></fp3d-phone-shell>`:y}
        ${_&&e?g`<div class="fp3d-card-controls">
              ${l?g`<button class="fp3d-chip" @click=${()=>this.back()}>${f("back")}</button>`:y}
              ${n?.time_travel?g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${m} title=${f("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${B("time_travel")?"\u23EA":"\u{1F512}"} ${f("tt_chip")}
                  </button>`:y}
              ${n?.camera_wall?g`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${f("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${f("cameras_short")}</button>`:y}
              ${c("walls")?g`<div class="fp3d-seg">
                    <button aria-pressed=${u==="auto"} @click=${()=>this.setWalls("auto")}>${f("walls_auto")}</button>
                    <button aria-pressed=${u==="cut"} @click=${()=>this.setWalls("cut")}>${f("walls_cut")}</button>
                  </div>`:y}
              ${c("floors")&&e.floors.length>1&&!a?g`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${f("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${f("floors_stacked")}</button>
                  </div>`:y}
              ${d.length?g`<div class="fp3d-seg" role="group" aria-label=${f("heatmap")}>
                    ${["none",...d].map(x=>g`<button aria-pressed=${p===x} @click=${()=>this._heat=x}>
                          ${f(x==="none"?"heat_off":`heat_short_${x}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${""}
        ${n?.fullscreen_button&&(!this._clean||this._fullscreen)&&!v&&!(this._roomId&&n.room_panel!==!1)?g`<button class="fp3d-card-full" title=${f(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${f(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${n?.dashboard&&!this._clean&&!v&&!(this._roomId&&n.room_panel!==!1)?g`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?g`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
      </div>
    </ha-card>`}static styles=[Pe,Re,ce`
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
      /* the phone view: the view's own things and an open room's panel stand above its bar */
      .fp3d-phone fp3d-view3d {
        --fp3d-bottom-inset: calc(72px + env(safe-area-inset-bottom, 0px));
      }
      /* above the bar, which is taller on a phone with a home indicator */
      .fp3d-phone .fp3d-card-panel {
        bottom: calc(70px + env(safe-area-inset-bottom, 0px));
        height: auto;
        max-height: calc(62% - 62px);
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Sa);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:P(void 0,"card_name"),description:P(void 0,"card_description"),preview:!1})}La();Ui();
